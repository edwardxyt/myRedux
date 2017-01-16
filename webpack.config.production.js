var webpack = require('webpack');
var path = require('path');
var node_modules = path.join(__dirname, './node_modules');

var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({filename: 'assets/assets-map.json', update: true, prettyPrint: true})
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoprefixer = require('autoprefixer');
var precss = require('precss');

var project_name = 'webpack_coc';

module.exports = {
    //entry: {'index.entry':"./assets/src/index/index.entry.js"},
    // 包的入口。
    // 如果你传入一个字符串：这个字符串作为主模块的启动点。
    // 如果你传入一个数组，数组中所有模块都会启动，但最后一个会被导出。
    // 如果你传入一个对象：会创建多个入口包。key就是 块（chunk）名字。value就是一个字符串或者一个数组。
    entry: {},
    //output的filename要有[chunkhash],使用[hash]的话，同一次构建，不同的entry文件，会是同一个hash
    output: {
        filename: "[name]-[chunkhash].js", //指定每一个输出文件的存盘文件名。这里你不必指定绝对路径。output.path才是用来指定文件路径的配置项。filename 是单独给文件命名的。
        chunkFilename: '[name]-[chunkhash].js',
        path: path.join(__dirname, "./assets/dist/" + project_name), //输出目录，必须是绝对路径。 [hash]会被编译hash替换掉。
        libraryTarget: 'umd', //输出模块格式
        //当浏览器需要引用输入出文件时， 这个配置项指定输入文件的公共URL地址。
        //在loader中它被嵌入到script 或者 link 标签或者对静态资源的引用里。当文件的href 或者 url()与它在磁盘 上的路径 不一致时publicPath ，就应当用·publicPath (像path一样指定) ，这在你想定义把一些或者所有文件放在不同的主机或CDN上时会非常有用。
        //publicPath用于在生产环境打包时更新文件（包括css、html）中的url。
        publicPath: '/' + project_name + '/'
    },
    //devtool: 'eval',
    //指定的依赖不会被webpack解析，但会成为bundle里的依赖。output.libraryTarget.决定着依赖的类型。值是对象，字符串，函数，正则，数组都会被接受。
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
        //'wscn-common':{
        //    commonjs2:'wscn-common',
        //    commonjs:'wscn-common'
        //}
    },
    resolve: {
        // resolve.extensions 用于指明程序自动补全识别哪些后缀, 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
        extensions: [
            '', '.js', '.jsx'
        ],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            react: path.join(node_modules, './react/dist/react.min.js'),
            jquery: path.join(node_modules, './jquery/dist/jquery.min.js'),
            'react-dom': path.join(node_modules, './react-dom/dist/react-dom.min.js')
        }
    },
    module: {
        //如果你 确定一个模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
        noParse: [
            path.join(node_modules, './react/dist/react.min.js'),
            path.join(node_modules, './jquery/dist/jquery.min.js'),
            path.join(node_modules,'./react-dom/dist/react-dom.min.js')
        ],
        loaders: [
            // {
            //     test: /[\.jsx|\.js ]$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader?stage=0&optional[]=runtime"
            // },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!less-loader')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader')
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=/img/[name]-[hash].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devtool: 'sourcemap',
    plugins: [
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$', 'exports', 'require']
            },
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons-[chunkhash].js',
            minChunks: function(module, count) {
                //引用测试大于某个次数
                if (count >= 3) {
                    return true;
                }

                //符合某种格式
                //path.sep 将特定文字分隔符 ‘\\' 或 ‘/' 的字符串转换成数组对象。
                var resourceName = module.resource
                if (resourceName) {
                    resourceName = resourceName.substring(resourceName.lastIndexOf(path.sep) + 1)
                }
                var reg = /^(\w)+.common/
                if (reg.test(resourceName)) {
                    return true;
                }

                return false;
            }
        }),
        new ExtractTextPlugin("[name]-[chunkhash].css"),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src/public',
        //     to: __dirname + '/dist',
        //
        // }]),
        assetsPluginInstance
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
