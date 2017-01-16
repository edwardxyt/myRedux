import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

const { SHOW_ALL } = VisibilityFilters

/**
 * [visibilityFilter 筛选]
 * @param  {[type]} [state=SHOW_ALL] [旧状态]
 * @param  {[type]} action           [动作]
 * @return {[type]}                  [新状态]
 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

/**
 * [todos 应用]
 * @param  {Array}  [state=[]] [条目设置为空数组]
 * @param  {[type]} action     [动作]
 * @return {[type]}            [新状态]
 */
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
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

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp
