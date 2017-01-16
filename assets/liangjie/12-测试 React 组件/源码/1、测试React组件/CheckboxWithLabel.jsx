var React = require('react/addons');
var CheckboxWithLabel = React.createClass({
    getInitialState: function () {
        return {
            checked: false
        }
    },
    onChange: function() {
        this.setState({
            checked: !!this.state.checked
        });
    },
    render: function() {
        return (
            <label>
                {this.props.text}
                <input type = "checkbox" checked={this.state.checked} onChange={this.onChange}/> 
                {this.checked ? this.props.on : this.props.off} 
            </label>);
    }
});

module.exports = CheckboxWithLabel;
