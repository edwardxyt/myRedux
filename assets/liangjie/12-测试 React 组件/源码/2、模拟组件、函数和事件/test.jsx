var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var jasmineReact = require("jasmine-react-helpers");
var Survey = require("./Survey.jsx");

describe("test Survey component", function () {
	it("mock CheckboxWithLabel component", function () {
		var survey = TestUtils.renderIntoDocument(<Survey></Survey>);
		var target = TestUtils.scryRenderedDOMComponentsWithTag(survey, "input");
		TestUtils.Simulate.change(target[0]);
		TestUtils.Simulate.change(target[1]);
		expect(React.findDOMNode(survey).textContent).not.toContain("不");
	})
})