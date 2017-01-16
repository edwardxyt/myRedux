/*
 * action 类型
 */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT '
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/*
 * 其它的常量
 */

/*
 * Action Creators
 */

//下拉框
export function selectSubreddit(subreddit) {
    return {type: SELECT_SUBREDDIT, subreddit}
}

//刷新
export function invalidateSubreddit(subreddit) {
    return {type: INVALIDATE_SUBREDDIT, subreddit}
}

//如果需要则开始获取文章
export function fetchPostsIfNeeded(subreddit) {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么。

    // 当缓存的值是可用时，
    // 减少网络请求很有用。
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            //dispatch（thunk） 任何拥有回调的函数都可以做成thunk
            //thunk 的一个优点是它的结果可以再次被 dispatch：
            return dispatch(fetchPosts(subreddit))
        }
    }
}

/*
 * helper
 */

//判断是否第一次请求，是否已经开始请求 是否需要获取文章
function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]

    if (!posts) {
        return true  //初次加载 执行
    } else if (posts.isFetching) {  //是否在抓取数据 既不执行
        return false
    } else {
        return posts.didInvalidate  //数据是否过时
    }
}


// Action Creator（动作生成器）
//（1）fetchPosts返回了一个函数，而普通的 Action Creator 默认返回一个对象。
//（2）返回的函数的参数是 dispatch 和 getState 这两个 Redux 方法，普通的 Action Creator 的参数是 Action 的内容。
//（3）在返回的函数之中，先发出一个 Action（ requestPosts(postTitle)），表示操作开始。
//（4）异步操作结束之后，再发出一个 Action（ receivePosts(postTitle, json)），表示操作结束。

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))
function fetchPosts(subreddit) {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return (dispatch, getState) => {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(requestPosts(subreddit))
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。

        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return fetch(`http://www.reddit.com/r/${subreddit}.json`).then(response => response.json()).then(json => dispatch(receivePosts(subreddit, json)))
    }
}

function requestPosts(subreddit) {
    return {type: REQUEST_POSTS, subreddit}
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}
