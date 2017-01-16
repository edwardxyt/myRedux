var webpack = require('webpack');
var path = require('path');
var argv = require('yargs').argv;

var autoprefixer = require('autoprefixer');
var precss      = require('precss');
var cssnext      = require('cssnext');
var cssnano      = require('cssnano');
var postcssImport = require("postcss-import");
var postcssSimpleVars = require("postcss-simple-vars");
var postcssExtend = require("postcss-extend");
var postcssNested = require("postcss-nested");
var postcssMixins = require("postcss-mixins");

function getDevelopWebpack(){

    //是否在 webpack-dev-server 下运行
    var DEBUG = false;
    if (argv._[0] === 'dev-server') {
        DEBUG = true;
    }
    // console.log(DEBUG);

    return {
        // 包的入口。
        // 如果你传入一个字符串：这个字符串作为主模块的启动点。
        // 如果你传入一个数组，数组中所有模块都会启动，但最后一个会被导出。
        // 如果你传入一个对象：会创建多个入口包。key就是 块（chunk）名字。value就是一个字符串或者一个数组。
        entry: {
            // 'lib': ['./assets/src/lib/lib.js']
            'lib':[
                path.join(__dirname,'assets/src/lib/lib.js')
            ]
        },
        output: {
            filename: "[name].js",  //指定每一个输出文件的存盘文件名。这里你不必指定绝对路径。output.path才是用来指定文件路径的配置项。filename 是单独给文件命名的。
            chunkFilename:'[name].js', //它是 output.path 目录中作为相对路径的非入口chunk的文件名 。
            path:  "/static/dist",   //输出目录，必须是绝对路径。 [hash]会被编译hash替换掉。
            libraryTarget:'umd',  //输出模块格式
            sourceMapFilename:'[name].map',  //javascript 的sourceMap文件的文件名。它会被放在 output.path 目录下。
            //library:'libName',
            //当浏览器需要引用输入出文件时， 这个配置项指定输入文件的公共URL地址。
            //在loader中它被嵌入到script 或者 link 标签或者对静态资源的引用里。当文件的href 或者 url()与它在磁盘 上的路径 不一致时publicPath ，就应当用·publicPath (像path一样指定) ，这在你想定义把一些或者所有文件放在不同的主机或CDN上时会非常有用。
            //webpack dev server 也是用publicpath决定输出文件从哪里公开。和 path 一样，你可以用 [hash] 替换缓存文件。
            publicPath:'http://localhost:9527/'//webpack-dev-server 文件是在内存里的，使用时，在硬盘上看不到生成的文件。这个路径是静态文件的basePath
        },
        //指定的依赖不会被webpack解析，但会成为bundle里的依赖。output.libraryTarget.决定着依赖的类型。值是对象，字符串，函数，正则，数组都会被接受。
        //externals对象的key是给require时用的，比如require('react')，对象的value表示的是如何在global（即window）中访问到该对象，这里是window.React。
        externals:{
            'zepto':{
                root:'Zepto',
                commonjs:'zepto',
                commonjs2:'zepto'
            }
        },
        module: {
            loaders: [
                // {
                //     test: /[\.jsx|\.js ]$/,
                //     exclude: /node_modules/,
                //     loaders: ["babel-loader?stage=0&optional[]=runtime"]
                // },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel',
                    exclude: /(node_modules|bower_components)/,
                    query: {
                        //添加两个presents 使用这两种presets处理js或者jsx文件
                        presets: ['es2015', 'react', 'stage-0']
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader!postcss-loader"
                },
                {
                    test: /\.less$/,
                    loader: "style-loader!css-loader!less-loader"
                },
                {
    				test: /\.scss$/,
    				loaders: ['style-loader', 'css-loader?modules', 'sass-loader'], //?modules相同的类名也不会造成不同组件之间的污染。
    			},
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader'
                },
                {
    				test: /\.json$/,
    				loader: 'json-loader',
    			},
            ]
        },
        debug:true,
        devtool:'eval-source-map',
        plugins: [
            new webpack.DefinePlugin({
                __DEBUG__: DEBUG
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.HotModuleReplacementPlugin(),
            //new webpack.OldWatchingPlugin()//新版的不知道为啥不watch，用这个可以临时解决。
        ],
        postcss: function() {
            return [
                autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ]
                }),
                precss
            ];
        }
    }
}

module.exports = getDevelopWebpack
