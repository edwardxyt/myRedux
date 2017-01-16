var React = require('react/addons');

var Card = React.createClass({
	getInitialState: function() {
		return this.props.content;
	},
	handleClick: function() {
		this.setState({
			blocks: [{
				title: "Obama(已关注)",
				subtitle: "president",
				text: "I love America",
				links: [{
					url: "http://www.baidu.com",
					name: "按钮1"
				}, {
					url: "http://www.jikexueyuan.com",
					name: "按钮2"
				}
				]
			}]
		})
	},
	render: function() {
		var content = this.state;
		var blocks = [];
		for (var i = 0; i < content.blocks.length; i++) {
			var block = content.blocks[i];
			var links = [];
			for (var i = 0; i < block.links.length; i++) {
				links.push(<a onClick={this.handleClick} className="card-link" href="{block.links[i].url}">{block.links[i].name}</a>)
			}
			blocks.push(<div className="card-block">
				<h4 className="card-title">{block.title}</h4>
				<h6 className="card-subtitle">{block.subtitle}</h6>
				<p>{block.text}</p>	
				<p>
				{links}
				</p>
			</div>)
		}
		var listGroup = [];
		for (var i = 0; i < content.listGroup.length; i++) {
			listGroup.push(<li className="list-group-item">
				{content.listGroup[i]}
			</li>)
		}
		var option = this.props.option ? "card text-" + this.props.option : "card";
		return <div className="container-fluid">
			<div className="row">
	    	<div className="col-sm-4">
			<div className={option}>
				<div className="card-header">{content.header}</div>
				<img className="card-img-top" src={content.imgTop.url} alt={content.imgTop.alt}></img>
				{blocks}
				<ul className="list-group list-group-flush">
				{listGroup}
				</ul>
				<img className="card-img-bottom" src={content.imgBottom.url} alt={content.imgBottom.alt}></img>
				<div className="card-footer">{content.footer}</div>
			</div>
			</div>
			</div>
		</div>
	}
})

module.exports = Card