webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var SurveyList = __webpack_require__(177);

	React.render(React.createElement(SurveyList2, null), document.body);
	Perf = React.addons.Perf;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Immutable = __webpack_require__(175);
	var CheckboxWithLabel = __webpack_require__(176)

	var SurveyList = React.createClass({displayName: "SurveyList",
	    mixins: [React.addons.PureRenderMixin],
	    getInitialState: function() {
	        return Immutable.fromJS({
	            items: [
	                {
	                    id: 0,
	                    text: "你喜欢吃萝卜吗？",
	                    on: "喜欢",
	                    off: "不喜欢",
	                    checked: false
	                }, 
	                {
	                    id: 1,
	                    text: "你喜欢吃西瓜吗？",
	                    on: "喜欢",
	                    off: "不喜欢",
	                    checked: false
	                }
	            ]
	        });
	    },
	    onChange: function(labelId) {
	        var newState = this.state.setIn(["items", labelId, "checked"], !this.state.getIn(["items", labelId, "checked"]));
	        this.replaceState(newState);
	    },
	    render: function() {
	        var that = this;
	        return (
	            React.createElement("div", null, 
	                
	                    this.state.get("items").map(function(label) {
	                        return React.createElement("div", null, React.createElement(CheckboxWithLabel, {label: label, onChange: that.onChange.bind(that)}))
	                    })
	                
	            ));
	    }
	});

	module.exports = SurveyList;


/***/ }

});