var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var CheckboxWithLabel = require("./CheckboxWithLabel.jsx");

describe("test CheckboxWithLabel component", function () {
	it("check label text", function () {
		var checkbox = TestUtils.renderIntoDocument(<CheckboxWithLabel text="你是否爱吃橘子" on="爱吃" off="不爱吃"></CheckboxWithLabel>);
		var text = React.findDOMNode(checkbox).textContent;
		expect(text).toContain("你是否爱吃橘子");
	})
})