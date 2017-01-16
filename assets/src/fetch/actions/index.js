export {INCREMENT_COUNTER, DECREMENT_COUNTER, UNDO_COUNTER, REDO_COUNTER}
from './counter'
export {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS}
from './post'
export {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters}
from './todo'


// import keyMirror from 'fbjs/lib/keyMirror'
// 
// keyMirror() 这个方法非常的有用，它可以帮助我们轻松创建与键值key相等的常量。
// export default keyMirror({
//     ADD_ITEM: null,
//     DELETE_ITEM: null,
//     DELETE_ALL: null,
//     FILTER_ITEM: null
// })
