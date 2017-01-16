// components
import HelloWorldComponent from './jsx.jsx';
import About from './about.jsx';
import User from './user.jsx';
import App from './app.jsx';
import NotFoundPage from './404.jsx';

ReactDOM.render((
    <Router history={hashHistory}>
        {/* 主页 */}
        <Route path="/" component={App}>
            {/* 默认 */}
            <IndexRoute component={HelloWorldComponent}/>

            {/* URL */}
            <Route path="/about(/:name)" component={About}/>
            {/* <Route path="/about(/:name)" component={About} onEnter={
            	({params}, replace) => replace(`/xxx/${params.name}?id=10`)
            }/> */}
            <Route path="/user/:id" component={User}/>

            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
), document.getElementById('mount-dom'));
