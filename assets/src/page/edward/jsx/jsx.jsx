// var HelloMessage = React.createClass({
//     getInitialState: function() {
//         return {
//             type: false,
//             name: '夏宇霆'
//         };
//     },
//     render: function() {
//         return (
//             <div>
//                 <Link to="/about/xyt?id=22" activeStyle={{color: 'red'}} activeClassName="active">About</Link>
//                 <Link to="/user/1" activeStyle={{color: 'red'}} activeClassName="active">User</Link>
//                 <p>姓名：{this.state.name}</p>
//             </div>
//         );
//     },
//     componentDidMount() {
//         if (!this.state.type) {
//             $.ajax({
//             	url: '/api/1',
//             	type: 'GET',
//             	dataType: 'json',
//             })
//             .done(function(data) {
//             	console.log("success",data);
//                 this.setState({name: data.name,type:true});
//             })
//             .fail(function() {
//             	console.log("error");
//             })
//             .always(function() {
//             	console.log("complete");
//             });
//         }
//
//     }
// });
// export default HelloMessage;


class HelloWorldComponent extends React.Component {
    static myStaticProp = 42;  //类的静态属性 es7
    myProp = 42; //类的实例属性 es7
    constructor(props) {
        super(props);  //调用父级构造函数 返回实例this
        this.state = {  //类的实力属性 es6
            name: '夏宇霆',
            type: false
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this);
    }
    handleAjax() {
        if (!this.state.type) {
            $.ajax({
            	url: '/1',
            	type: 'GET',
            	dataType: 'json',
            })
            .done(function(data) {
            	// console.log("success",data);
                console.log(this.state);
                this.setState({
                    name: data.name,
                    type:true
                });
                console.log(this.state);
            }.bind(this))
            .fail(function() {
            	console.log("error");
            })
            .always(function() {
            	console.log("complete");
            });
        }
    }
    render() {
        return (
            <div>
                <Link to="/about/xyt?id=22" activeStyle={{color: 'red'}} activeClassName="active">About</Link>
                <Link to="/user/1" activeStyle={{color: 'red'}} activeClassName="active">User</Link>
                <p>姓名：{this.state.name}</p>
                <p onClick={this.handleClick.bind(this)}>{this.props.title}</p>
            </div>
        );
    }
    componentDidMount() {
        this.handleAjax();
    }
};

HelloWorldComponent.defaultProps = {
    title : 'Hello World'
};
HelloWorldComponent.propTypes = {
    title: React.PropTypes.string
};

export default HelloWorldComponent;

// ReactDOM.render((
//     <Router history={hashHistory}>
//         <Route path="/app" component={HelloWorldComponent}>
//             <Route path="/about" component={About}/>
//         </Route>
//     </Router>
// ), document.getElementById('jsx'));

// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<HelloWorldComponent />, app);
