!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var n=t("object"==typeof exports?require("jquery"):e.jQuery);for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,function(e){return webpackJsonp([6],{0:function(e,exports,t){"use strict";t(370),t(369),t(464),t.e(2,function(require){var e=t(459),n=document.createElement("div");n.innerHTML="<h1>Hello World edward</h1>",n.appendChild(e.generateText()),document.body.appendChild(n)}),function(){console.log("edward.iife function")}()},365:function(t,exports){t.exports=e},369:139,370:139,460:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(9),o=n(a),u=t(10),r=n(u),l=t(11),c=n(l),i=t(13),s=n(i),d=t(12),f=n(d),p=function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.state={},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return React.createElement("p",null,"not found 404")}}]),t}(React.Component);exports.default=p},461:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(9),o=n(a),u=t(10),r=n(u),l=t(11),c=n(l),i=t(13),s=n(i),d=t(12),f=n(d),p=function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.state={},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return React.createElement("p",null,this.props.name,this.props.params.name,this.props.location.query.id)}}]),t}(React.Component);exports.default=p},462:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(9),o=n(a),u=t(10),r=n(u),l=t(11),c=n(l),i=t(13),s=n(i),d=t(12),f=n(d),p=function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.state={},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e={name:"edward-"};return React.createElement("div",null,this.props.children&&React.cloneElement(this.props.children,{name:e.name}),React.createElement(Link,{to:"/",activeClassName:"active",onlyActiveOnIndex:!0},"Home"))}}]),t}(React.Component);exports.default=p},463:function(e,exports,t){(function($){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(9),a=e(n),o=t(10),u=e(o),r=t(11),l=e(r),c=t(13),i=e(c),s=t(12),d=e(s),f=function(e){function t(e){(0,u.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.myProp=42,n.state={name:"夏宇霆",type:!1},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"handleClick",value:function(){console.log(this)}},{key:"handleAjax",value:function(){this.state.type||$.ajax({url:"/1",type:"GET",dataType:"json"}).done(function(e){console.log(this.state),this.setState({name:e.name,type:!0}),console.log(this.state)}.bind(this)).fail(function(){console.log("error")}).always(function(){console.log("complete")})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement(Link,{to:"/about/xyt?id=22",activeStyle:{color:"red"},activeClassName:"active"},"About"),React.createElement(Link,{to:"/user/1",activeStyle:{color:"red"},activeClassName:"active"},"User"),React.createElement("p",null,"姓名：",this.state.name),React.createElement("p",{onClick:this.handleClick.bind(this)},this.props.title))}},{key:"componentDidMount",value:function(){this.handleAjax()}}]),t}(React.Component);f.myStaticProp=42,f.defaultProps={title:"Hello World"},f.propTypes={title:React.PropTypes.string},exports.default=f}).call(exports,t(365))},464:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=t(463),o=n(a),u=t(461),r=n(u),l=t(465),c=n(l),i=t(462),s=n(i),d=t(460),f=n(d);ReactDOM.render(React.createElement(Router,{history:hashHistory},React.createElement(Route,{path:"/",component:s.default},React.createElement(IndexRoute,{component:o.default}),React.createElement(Route,{path:"/about(/:name)",component:r.default}),React.createElement(Route,{path:"/user/:id",component:c.default}),React.createElement(Route,{path:"/404",component:f.default}),React.createElement(Redirect,{from:"*",to:"/404"}))),document.getElementById("mount-dom"))},465:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(9),o=n(a),u=t(10),r=n(u),l=t(11),c=n(l),i=t(13),s=n(i),d=t(12),f=n(d),p=function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.state={},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return console.log(this.props.name),React.createElement("p",null,this.props.params.id)}}]),t}(React.Component);exports.default=p}})});
//# sourceMappingURL=edward.entry-15784d671dbe125bbefd.js.map