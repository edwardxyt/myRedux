var React = require('react/addons');
var CheckboxWithLabel = require('./CheckboxWithLabel.jsx');
var Survey = React.createClass({
    getInitialState: function () {
        return {
            status: [false, false],
            items: [{
                text: "你喜欢吃苹果吗",
                on: "喜欢",
                off: "不喜欢"
            }, {
                text: "你喜欢吃香蕉吗",
                on: "喜欢",
                off: "不喜欢"
            }
            ]
        }
    },
    onChange: function(i) {
        var status = this.state.status.concat([]);
        status[i] = !status[i];
        this.setState({
            status: status
        });
    },
    randomNumber: function () {
        return Math.random();
    },
    render: function() {
        var labels = [];
        var that = this;
        this.state.items.map(function (item, i) {
            labels.push(<CheckboxWithLabel checked={that.state.status[i]} index={i} text={item.text} on={item.on} off={item.off} onChange={that.onChange}></CheckboxWithLabel>)
        })
        return (
            <div>
            {this.randomNumber()}
            <br/>
            {labels}
            </div>
        );
    }
});

module.exports = Survey;
