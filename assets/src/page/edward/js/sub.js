//我们这里使用CommonJS的风格
function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello world sub";
  return element;
}
$(function() {
	console.log('jquery sub.js');
});
module.exports = {
	generateText: generateText
};

/*export default function() {  //模块导出 默认接口
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world hahaha";
  return element;
}*/