var jest = require('jest');

jest.dontMock('../CheckboxWithLabel.js');
describe('CheckboxWithLabel', function() {
    it('changes the text after click', function() {
        var React = require('react/addons');
        var CheckboxWithLabel = require('../CheckboxWithLabel.js');
        var TestUtils = React.addons.TestUtils;
        var checkbox = TestUtils.renderIntoDocument( < CheckboxWithLabel labelOn = "On"
            labelOff = "Off" / > );
        var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
        expect(label.getDOMNode().textContent).toEqual('Off');
        var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        TestUtils.Simulate.change(input);
        expect(label.getDOMNode().textContent).toEqual('On');
    });
});
