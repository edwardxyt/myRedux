import './sass/main.scss';
import './sheet/style.css';

import './jsx/router.jsx';

//使用 require.ensure 可以解决异步加载模块的文件
require.ensure([],function(require){
    var generateText = require('./js/sub');
    var app  = document.createElement('div');
    app.innerHTML = '<h1>Hello World edward</h1>';
    app.appendChild(generateText.generateText());
    document.body.appendChild(app);
},'sub');



(() => {
  console.log('edward.iife function');
})();

// http://127.0.0.1:4003/build/edward.html#/about/xyt?id=10
