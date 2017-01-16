/*eslint-disable*/
import * as containers from './' //其实是index.js
/*eslint-enable*/

const {App, AsyncApp, TodoApp, IndexComponent, CounterPage} = containers

const Apps = () => (
    <ul>
        <li>
            <Link to="/news/apps/金融新闻">金融新闻</Link>：<Link to="/news/apps/金融新闻/detail">黑胡子黄了</Link>
        </li>
        <li>
            <Link to="/news/apps/军事新闻">军事新闻</Link>：<Link to="/news/apps/军事新闻/detail">F15-J 跑了</Link>
        </li>
    </ul>
);

const News = ({routes, params, children}) => (
    <div>
        <div className="demo-nav">
            <Link to="/news">新闻</Link>
            <Link to="/news/apps">国际快报</Link>
        </div>
        {children || '新闻 Page'}
        <Alert style={{
            margin: '16px 0'
        }} message="这里是Alert提示。"/>
        <Breadcrumb separator=">" routes={routes} params={params}/>
    </div>
);

export default(
    <Route component={App}>
        {/* URL */}
        <Route path="/" component={IndexComponent}/>
        <Route path="/select(/:name)" component={AsyncApp}/>
        <Route path="/todo(/:id)" component={TodoApp}/>
        <Route path="/undo" component={CounterPage}/>

        <Route name="news" breadcrumbName="新闻" path="/news" component={News}>
            <Route name="apps" breadcrumbName="国际快报" path="apps" component={Apps}>
                <Route name="app" breadcrumbName=":id" path=":id">
                    <Route name="detail" breadcrumbName="ccc" path="detail"/>
                </Route>
            </Route>
        </Route>
    </Route>
)
