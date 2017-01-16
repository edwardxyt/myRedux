$(function() {
	var os = require('os');
	var prettyBytes = require('pretty-bytes');
	var Stats = React.createClass({
		render: function() {
			return (
				<p>
				Number of cpu cores: <span>{os.cpus().length}</span>
				Free memory: <span>{prettyBytes(os.freemem())}</span>
				</p>
			)
		}
	})
	React.render(<Stats />, $(".react")[0]);
})
