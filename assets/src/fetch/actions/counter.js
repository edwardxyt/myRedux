/*
 * action 类型
 */

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

/*
 * Action Creators
 */
export function increment() {
    return {type: INCREMENT_COUNTER}
}

export function decrement() {
    return {type: DECREMENT_COUNTER}
}

export function undo() {
    return {type: UNDO_COUNTER}
}

export function redo() {
    return {type: REDO_COUNTER}
}

/*
 * helper
 */
