/*eslint-disable*/
import * as containers from './' //其实是index.js
/*eslint-enable*/

const {
    App,
    TodoApp,
    IndexComponent,
    Organization
} = containers

const Home = ({routes, params, children}) => (
    <div>
        <div className="breadcrumb">
            <Breadcrumb itemRender={itemRender} separator=">" routes={routes} params={params}/>
        </div>
        { children || <IndexComponent /> }
    </div>
);

//browserHistory   browserHistory.push('/');
function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

export default(
    <Route component={App}>
        {/* URL */}
        {/* <Route path="/" component={IndexComponent}/>
        <Route path="/todo(/:id)" component={TodoApp}/>
        <Route path="/organization" component={Organization}/> */}

        <Route name="home" breadcrumbName="首页" path="/" component={Home}>
            <Route name="todo" breadcrumbName="任务提醒" path="todo(/:id)" component={TodoApp} />
            <Route name="org" breadcrumbName="组织机构" path="organization" component={Organization} />
        </Route>
    </Route>
)
