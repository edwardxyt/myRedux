/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT '
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

//INCREMENT_COUNTER 增量-计数器
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
//DECREMENT_COUNTER 减量-计数器
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//撤销
export const UNDO_COUNTER = 'UNDO_COUNTER'
//还原
export const REDO_COUNTER = 'REDO_COUNTER'

/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

//下拉框
export function selectSubreddit(subreddit) {
    return {type: SELECT_SUBREDDIT, subreddit}
}

//刷新
export function invalidateSubreddit(subreddit) {
    return {type: INVALIDATE_SUBREDDIT, subreddit}
}

export function increment () {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement () {
  return {
    type: DECREMENT_COUNTER
  }
}

export function undo () {
  return {
    type: UNDO_COUNTER
  }
}

export function redo () {
  return {
    type: REDO_COUNTER
  }
}


//如果需要则开始获取文章
export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            //dispatch（thunk） 任何拥有回调的函数都可以做成thunk
            return dispatch(fetchPosts(subreddit))
        }
    }
}

//判断是否第一次请求，是否已经开始请求 是否需要获取文章
function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]

    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
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

// Action Creator（动作生成器）
//（1）fetchPosts返回了一个函数，而普通的 Action Creator 默认返回一个对象。
//（2）返回的函数的参数是 dispatch 和 getState 这两个 Redux 方法，普通的 Action Creator 的参数是 Action 的内容。
//（3）在返回的函数之中，先发出一个 Action（ requestPosts(postTitle)），表示操作开始。
//（4）异步操作结束之后，再发出一个 Action（ receivePosts(postTitle, json)），表示操作结束。
function fetchPosts(subreddit) {
    return (dispatch, getState) => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`).then(response => response.json()).then(json => dispatch(receivePosts(subreddit, json)))
    }
}
