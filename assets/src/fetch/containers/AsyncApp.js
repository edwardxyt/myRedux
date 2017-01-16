import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit} from '../actions/post'
import Picker from '../components/Picker.jsx'
import Posts from '../components/Posts.jsx'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const {dispatch, selectedSubreddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const {dispatch, selectedSubreddit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const {dispatch, selectedSubreddit} = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated} = this.props
        // console.log(this.props);
        return (
            <div>
                <Picker value={selectedSubreddit} onChange={this.handleChange} options={['reactjs', 'frontend']}/>
                <p>
                    {lastUpdated && <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}. {' '}
                    </span>
                    }
                    {!isFetching && <a href='#' onClick={this.handleRefreshClick}>
                        Refresh 刷新
                    </a>
                    }
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>
                }
                {posts.length > 0 && <div style={{
                    opacity: isFetching
                        ? 0.5
                        : 1
                }}>
                    <Posts posts={posts}/>
                </div>
                }
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

//执行后应该返回一个对象，里面的每一个键值对就是一个映射。
//第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
//每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
function mapStateToProps(state) {
    const {selectedSubreddit, postsBySubreddit} = state;
    const {isFetching, lastUpdated, items: posts} = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }
    return {selectedSubreddit, posts, isFetching, lastUpdated}
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// connect() 的唯一参数是 selector。
// 此方法可以从 Redux store 接收到全局的 state，
// 然后返回组件中需要的 props。最简单的情况下，
// 可以返回一个初始的 state （例如，返回认证方法），
// 但最好先将其进行转化
export default connect(mapStateToProps)(AsyncApp)
