var React = require('react/addons');
var CheckboxWithLabel = React.createClass({
    onChange: function() {
        this.props.onChange(this.props.index);
    },
    render: function() {
        return (
            <label>
                {this.props.text}
                <input type = "checkbox" checked={this.props.checked} onChange={this.onChange}/> 
                {this.props.checked ? this.props.on : this.props.off} 
            </label>);
    }
});

module.exports = CheckboxWithLabel;
