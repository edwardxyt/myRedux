import configureStore from '../store/configureStore'

//路由单独管理
import routes from '../routes/routes'

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router key="router" history={browserHistory} children={routes} />
                </Provider>
            </div>
        )
    }
}
