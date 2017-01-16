/*
 * action 类型
*/
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const FROM_REST = 'FROM_REST'

/*
 * 其它的常量
*/

/*
 * Action Creators
*/
export function restAll(rest) {
    return {type: FROM_REST, rest}
}

/*
 * helper
*/
export function fetchPostsIfNeeded(name) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), name)) {
            return dispatch(fetchPosts(name))
        }
    }
}

function shouldFetchPosts(state, name) {
    const posts = state.postsByTrees[name];
    if (!posts) {
        return true //初次加载 执行
    } else if (posts.isFetching) { //是否在抓取数据 既不执行
        return false
    } else if (posts.didInvalidate) {
        return true
    } else {
        return true
    }
}

function fetchPosts(name) {
    return (dispatch, getState) => {
        dispatch(requestPosts(name));
        let tree = JSON.stringify([
            {
                name: '集团',
                key: '0-0',
                children: [
                    {
                        key: "0-0-0",
                        name: "leaf 0-0-0"
                    }
                ]
            }, {
                name: '公司',
                key: '0-1',
                children: [
                    {
                        key: "0-1-0",
                        name: "leaf 0-1-0",
                        children: [
                            {
                                key: "0-1-0-0",
                                name: "leaf 0-1-0-0"
                            }, {
                                key: "0-1-0-1",
                                name: "leaf 0-1-0-1"
                            }
                        ]
                    }, {
                        key: "0-1-1",
                        name: "leaf 0-1-1"
                    }
                ]
            }, {
                name: '机构',
                key: '0-4'
            }, {
                name: '03',
                key: '0-3'
            }
        ])
        fetchJsonp('http://60.205.185.13/index.php?data=' + tree).then(function(response) {
            return response.json()
        }).then(function(json) {
            // console.log(JSON.parse(json.data));
            return JSON.parse(json.data)
        }).then(arr => dispatch(receivePosts(name, arr)));
    }
}

function requestPosts(name) {
    return {type: REQUEST_POSTS, name}
}

function receivePosts(name, arr) {
    return {type: RECEIVE_POSTS, name, posts: arr, receivedAt: Date.now()}
}
