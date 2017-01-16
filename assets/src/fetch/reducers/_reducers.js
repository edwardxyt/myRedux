import undoable, { includeAction } from 'redux-undo'
import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    UNDO_COUNTER,
    REDO_COUNTER
} from '../actions/actions'

//过滤初始状态
const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

//选择新闻后，将state.selectedReddit设为所选选项
function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {didInvalidate: true})
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

//废弃、接收到、开始接受新闻后，将state.postsByReddit设为相关参数
function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

function counter(state = { count: 0 }, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 }
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - 1 }
    default:
        return state
    }
}

//你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
//这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。
const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit,
    visibilityFilter,
    todos,
    counter: undoable(counter, {
        //filter是选择过滤的action有哪些
        filter: includeAction([
            INCREMENT_COUNTER,
            DECREMENT_COUNTER
        ]),
        limit: 10,  // 是次数限制
        // debug: true,  //是是否调试码
        undoType: UNDO_COUNTER,  //撤销 action
        redoType: REDO_COUNTER  //重做 action
    })
})

export default rootReducer
