/**
 * 我们使用redux-undo这个包给我们提供的undoable和includeAction，
 * 就可以可以给指定 reducer（counter）添加撤销功能。filter 是选择过滤的action有哪些，
 * 这里我们只撤销重做加减action，也就是 INCREMENT_COUNTER, DECREMENT_COUNTER,
 * limit 是次数限制，debug 是是否调试码，undotype 和 redotype 是撤销重做的action。
 */
// import undoable, { includeAction } from 'redux-undo'

/**
 * reducers
 */
import { visibilityFilter, todos } from './todo';
import { postsByTrees, resetFields } from './organization';

/**
 * actions const
 */

//你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
//这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。
//使用了 ES6 中的对象字面量简写方式，在最后的 state 中 key 的名字和 import 进来的变量的名字一样，
//这可能并不是经常期望的，经常会对不熟悉 ES6 的人造成困惑。
const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    postsByTrees,
    resetFields
})

export default rootReducer
