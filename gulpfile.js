'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');  //error
var clean = require('gulp-clean');
var glob = require('glob');  //匹配比如/**/*.js
var webpack = require('webpack');
var argv = require('yargs').argv;  //shelljs 只解决了如何调用 shell 命令，而 yargs 模块能够解决如何处理命令行参数
var webpackConfig = require('./webpack.config.production');
var path = require('path');
var _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var globalTplContent;
var project_name;

//es6 template string，需要node 4.0 以上版本，如果版本不到，只能手动拼了
function getTplContent(libJs, libCss) {
    var str = '\n<!DOCTYPE html>\n    <html>\n    <head lang="en">\n        <meta charset="UTF-8">\n        <title>冷热替换双模脚手架</title>\n        <link href="' + libCss + '" rel="stylesheet">\n    </head>\n    <body>\n    <div id="example"></div>\n    <div id="mount-dom"></div>\n        <script src="' + libJs + '"></script>\n    </body>\n</html>\n    ';
    return str;
}

function libPathPlugin() {
    this.plugin('done', function (stats) {
        var stats = stats.toJson();
        // console.log(stats);  //信息
        var chunkFiles = stats.chunks[0].files
        console.dir('chunkFiles: '+chunkFiles, {colors:true})
        var libJs = '',
            libCss = '';
        for (var i in chunkFiles) {
            var fileName = chunkFiles[i];
            if (fileName.endsWith('.js')) {
                libJs = project_name + fileName;
            }
            if (fileName.endsWith('.css')) {
                libCss = project_name + fileName;
            }
        }
        globalTplContent = getTplContent(libJs, libCss);
    });
}

gulp.task('lib', ['clean'],function (callback) {
    //copy一份production配置文件
    var config = _.merge({}, webpackConfig);
    config.entry = {
        'lib': ['./assets/src/lib/lib.js']
    };
    project_name = config.output.publicPath;
    config.externals = {};

    config.plugins = config.plugins || [];
    var plugins = config.plugins;

    //lib直接引用打包好的文件,不用Uglify.这对打包lib的速度,有重要影响
    for(var i in plugins){
        if(plugins[i] instanceof webpack.optimize.UglifyJsPlugin){
            plugins.splice(i,1)
            break;
        }
    }
    //lib,不需要commons的处理
    for(var i in plugins){
        if(plugins[i] instanceof webpack.optimize.CommonsChunkPlugin){
            plugins.splice(i,1)
            break;
        }
    }

    plugins.push(libPathPlugin);
    webpack(config, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack-lib', err);
        }
        if (typeof callback == 'function') {
            callback();  //交还执行权继续执行gulp(既defaultTask)
        }
    });
});

gulp.task('clean',function(){
    return gulp.src(['assets/dist/*','assets/assets-map.json'],{read:false})
        .pipe(clean())
})

gulp.task('default', ['lib'], function () {

    var entries = {};

    var entryFiles = glob.sync('assets/src/**/*.entry.js');

    //绝对路径的入口 *.entry.js
    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var key = filePath.substring(filePath.lastIndexOf(path.sep)+1, filePath.lastIndexOf('.'));
        entries[key] = path.join(__dirname, filePath);
    }

    console.log(entries);

    //copy一份production配置文件
    var config = _.merge({}, webpackConfig);
    config.entry = entries; //webpack entry

    config.plugins = config.plugins || [];

    for (var i in entries) {
        config.plugins.push(new HtmlWebpackPlugin({
            filename: (i + '.html').replace('entry.', ''),
            templateContent: globalTplContent,
            inject: true,
            chunks: [i,'commons']
        }));
    }

    webpack(config, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack-build', err);
        }
    });
});

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}


/** ===================== develop config  ============= **/
var getDevelopConfig = require('./webpack.config.development')
var WebpackDevServer = require('webpack-dev-server')

gulp.task('dev-server',function(){
    var folder = argv['f'];
    if(!folder){
        folder='**'
    }
    var entryFiles = glob.sync(__dirname+'/assets/src/'+folder+'/*.entry.js')

    if(entryFiles.length==0){
        throw new Error('can not find *.entry.js in folder:'+folder);
    }


    var port = 9527;
    var webpackDevConfig = getDevelopConfig();

    console.dir('entryFiles: '+entryFiles, {colors:true});

    for(var i in entryFiles){
        var filePath = entryFiles[i]
        var key = filePath.substring(filePath.lastIndexOf(path.sep)+1, filePath.lastIndexOf('.'));
        webpackDevConfig.entry[key] = [
            'webpack-dev-server/client?http://0.0.0.0:'+port,
            'webpack/hot/dev-server',
            filePath
        ];
    }


    new WebpackDevServer(webpack(webpackDevConfig),{
        publicPath:webpackDevConfig.output.publicPath,
        hot:true,
        inline: true,
        //如果这里使用node而不是gulp 就可以直接使用 $ webpack-dev-server --inline --content-base . --history-api-fallback
        historyApiFallback: {
            rewrites: [
                // shows views/landing.html as the landing page
                { from: /^\//, to: '/assets/src/organization/organization.html' },
                // shows views/subpage.html for all routes starting with /subpage
                // { from: /^\/subpage/, to: '/views/subpage.html' },
                // shows views/404.html on all other pages
                // { from: /./, to: '/views/404.html' },
            ],
        },
        stats: {
            colors:true
        },
        //proxy: [ {
        //    path:/\/api(.*)/,
        //    target:'http://localhost:9527'
        //} ],
        //historyApiFallback: true
    }).listen(port,'localhost',function (err) {
        if(err) throw new gutil.PluginError('webpack-dev-server',err)
    })
})
