$(function() {
	var os = require('os');
	var prettyBytes = require('pretty-bytes');
	var React = require('react');
	var Stats = React.createClass({displayName: "Stats",
		render: function() {
			return (
				React.createElement("p", null, 
				"Number of cpu cores: ", React.createElement("span", null, os.cpus().length), 
				"Free memory: ", React.createElement("span", null, prettyBytes(os.freemem()))
				)
			)
		}
	})
	React.render(React.createElement(Stats, null), $(".stats"));
})
