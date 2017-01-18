import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FROM_REST
} from '../actions/organization'

export function resetFields(state = true, action) {
    switch (action.type) {
        case FROM_REST:
            return action.rest
        default:
            return state
    }
}


//combineReducers下的函数 默认是都会执行一次的 初始化参数的
export function postsByTrees(state = {}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            console.log(0)
        case RECEIVE_POSTS:
            console.log(1)
            return Object.assign({}, state, {
                [action.name]: posts(state[action.name], action)
            })
        default:
            return state
    }
}

// posts 依旧接收 state，但它变成了一个对象！
// 现在 postsByTrees 只把需要更新的一部分 state 传给 posts 函数
// posts 函数自己确定如何更新这部分数据。这就是所谓的 reducer 合成，
// 它是开发 Redux 应用最基础的模式。
function posts(state = {
    isFetching: false,
    didInvalidate: false,
    data: []
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            console.log(2)
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            console.log(3)
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                data: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

/**
 * 之所以称作 reducer 是因为它将被传递给 Array.prototype.reduce(reducer, ?initialValue) 方法
 */
