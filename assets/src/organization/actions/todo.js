/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * Action Creators
 */
export function addTodo(text, count) {
    return {type: ADD_TODO, text, count}
}
export function toggleTodo(index) {  //点击LI
    return {type: COMPLETE_TODO, index}
}
export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}

/*
 * helper
 */
