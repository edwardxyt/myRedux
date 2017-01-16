var express = require('express');
var http = require('http');
var path = require('path');
var debug = require('debug')('server');

var app = express();
var router = express.Router();
var port = process.env.PORT || 3333;
var __DEBUG__ = process.env.DEBUG === 'server' ? true : false;

/**
 * process.env.DEBUG 只有在引入webpack.config 才会赋值
 * 而且必须在server.js 里 var compiler = webpack(config)
 * 并且在 app.use(require('webpack-hot-middleware')(compiler)) 热替换
 * 所以 这种架构是基于 express 下驱动 webpack的
 * 并不适合 我的gulp+webpack
 */

app.use(express.static(__dirname + '/assets/dist'))

/* GET home page. */
router.param('name', function(req, res, next, name) {
    // 对name进行验证或其他处理……
    console.dir(name, {colors: true});
    req.name = name;
    next();
});
router.get('/:name', function(req, res, next) {
    var data = {
        counter: {
            count: 0
        },
        postsBySubreddit: {},
        selectedSubreddit: "reactjs",
        todos: [
            {
                completed: false,
                text: req.name
            }
        ],
        visibilityFilter: "SHOW_ALL"

    }
    console.dir(data, {colors: true});
    res.json(data);
});

app.use('/', router);

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'assets/dist/webpack_coc/', 'organization.html'))
})

//直接执行的时候（node module.js），require.main属性指向模块本身。
if (require.main === module) {
    var server = http.createServer(app);
    server.listen(port, '0.0.0.0', function() {
        var address = server.address(); //获取服务端信息
        debug('Listening on: %j', address);
        debug(' -> that probably means: http://localhost:%d', address.port);
        debug('__DEBUG__：: %j', __DEBUG__);
        // console.log('__DEBUG__：' + __DEBUG__);
        // console.log('Listening on: %j', address);
        // console.log(' -> that probably means: http://localhost:%d', address.port);
    });
}
