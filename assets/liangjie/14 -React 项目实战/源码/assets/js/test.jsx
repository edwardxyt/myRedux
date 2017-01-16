var React = require('react/addons');
var jasmineReact = require('jasmine-react-helpers');
var TestUtils = React.addons.TestUtils;
var Card = require('./Card.jsx');

describe('Card component', function() {

	var card;
	var content;
	

	beforeEach(function() {
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
		content = {
			blocks: blocks,
			header: header,
			footer: footer,
			listGroup: listGroup,
			imgBottom: imgBottom,
			imgTop: imgTop
		};
		card = TestUtils.renderIntoDocument(<Card content={content} option="center"></Card>);
	});

	afterEach(function() {
		React.unmountComponentAtNode(React.findDOMNode(card));
	});

	it('should exist', function() {
		expect(!!React.findDOMNode(card)).toBe(true);
	});

	it('should have correct structure', function() {
		var content = React.findDOMNode(card).textContent;
		expect(content).toContain("Obama");
		expect(content).toContain("总统");
		expect(content).toContain("统计");
		expect(content).toContain("黑人总统");
		expect(React.findDOMNode(card).getElementsByTagName("img")[1].alt).toContain("奥巴马头像2");
	});

	it('should have correct style', function() {
		var cardBox = React.findDOMNode(card).getElementsByClassName("card");
		expect(!!cardBox.length).toBe(true);
	});

	it('should correctly use options', function() {
		var cardBox = React.findDOMNode(card).getElementsByClassName("text-center");
		expect(!!cardBox.length).toBe(true);
	});

	it('should be response', function() {
		TestUtils.Simulate.click(React.findDOMNode(card).getElementsByTagName("a")[0]);
		var content = React.findDOMNode(card).textContent;
		expect(content).toContain("已关注");
	})
})	