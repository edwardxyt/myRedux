import configureStore from '../store/configureStore'

//路由单独管理
import routes from '../routes/routes'

//这里要注意 初始化状态会破坏reducers 默认状态 如果不一一对应就会出错
const initialState = {
    counter: {
        count: 0
    },
    postsBySubreddit: {},
    selectedSubreddit: "reactjs",
    todos: [
        {
            completed: false,
            text: '第一条todo'
        }
    ],
    visibilityFilter: "SHOW_ALL"

};
const store = configureStore(initialState);

export default class Root extends Component {
    componentWillMount() {
        fetch(`/我是小帅`).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    }
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
