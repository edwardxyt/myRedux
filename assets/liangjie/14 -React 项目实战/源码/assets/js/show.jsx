var React = require('react/addons');
var Card = require('./Card.jsx');
var blocks = [
	{
		title: "Obama",
		subtitle: "president",
		text: "I love America",
		links: [{
			url: "http://www.baidu.com",
			name: "按钮1"
		}, {
			url: "http://www.jikexueyuan.com",
			name: "按钮2"
		}
		]
	}
];
var header = "总统";
var footer = "由xxx统计";
var listGroup = ["我是第一届黑人总统", "我喜欢极客学院"];
var imgTop = {
	url: "http://b.hiphotos.baidu.com/baike/w%3D268/sign=b03bbc37632762d0803ea3b998ed0849/1b4c510fd9f9d72a798e1309d42a2834349bbb3f.jpg",
	alt: "奥巴马头像"
};
var imgBottom = {
	url: "http://b.hiphotos.baidu.com/baike/w%3D268/sign=b03bbc37632762d0803ea3b998ed0849/1b4c510fd9f9d72a798e1309d42a2834349bbb3f.jpg",
	alt: "奥巴马头像2"
};
var content = {
	blocks: blocks,
	header: header,
	footer: footer,
	listGroup: listGroup,
	imgBottom: imgBottom,
	imgTop: imgTop
};

React.render(<Card content={content}></Card>, document.body);

