import { VisibilityFilters } from '../actions/todo'

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

//getVisibilityFilter 和 getTodos 是 input-selector。
//因为他们并不转换数据，所以被创建成普通的非记忆的 selector 函数。
//但是, getVisibleTodos 是一个可记忆的 selector。他接收 getVisibilityFilter 和 getTodos 为 input-selector
//还有一个转换函数来计算过滤的 todos 列表。
//用 createSelector 创建的 selector 只有在参数集与之前的参数集相同时才会返回缓存的值
export const getVisibleTodos = createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                return todos
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed)
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed)
        }
    }
)
