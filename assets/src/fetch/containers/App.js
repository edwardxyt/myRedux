export default class App extends React.Component {
    render() {
        return <div>
            <Link to="/news" activeStyle={{color: 'red'}}>新闻页</Link>
            <br/>
            <Link to="/select/xyt?id=22" activeStyle={{color: 'red'}} >Select</Link>
            <br/>
            <Link to="/todo/1" activeClassName="active">Todo</Link>
            <br/>
            <Link to="/undo" activeStyle={{color: 'red'}}>Count</Link>
            <br/>
            <Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>Home</Link>
            {this.props.children}
        </div>
    }
}
