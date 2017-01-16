import {
    addTodo,
    toggleTodo,
    setVisibilityFilter
    // VisibilityFilters  //无记忆版
} from '../actions/todo'

//衍生器 selector 接收 Redux store state 作为参数 至App容器组件上
//然而 selector 也可以接收 props 从App上
import { getVisibleTodos } from '../selectors/todo'

import AddTodo from '../components/AddTodo.jsx'
import TodoList from '../components/TodoList.jsx'
import Footer from '../components/Footer.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    }
    render() {
        // 通过调用 connect() 注入:
        const {dispatch, visibleTodos, visibilityFilter} = this.props
        return (
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList todos={visibleTodos} onTodoClick={index => dispatch(toggleTodo(index))}/>
                <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
}

// 无记忆版
// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case VisibilityFilters.SHOW_ALL:
//             return todos
//         case VisibilityFilters.SHOW_COMPLETED:
//             return todos.filter(todo => todo.completed)
//         case VisibilityFilters.SHOW_ACTIVE:
//             return todos.filter(todo => !todo.completed)
//     }
// }

//执行后应该返回一个对象，里面的每一个键值对就是一个映射。
//第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
//每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
const mapStateToProps = (state) => {
    return {
        visibleTodos: getVisibleTodos(state),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// connect() 的唯一参数是 selector。
// 此方法可以从 Redux store 接收到全局的 state，
// 然后返回组件中需要的 props。最简单的情况下，
// 可以返回一个初始的 state （例如，返回认证方法），
// 但最好先将其进行转化
// 如果 connect 的 mapStateToProps 返回的不是一个对象而是一个函数，他将被用做为每个容器的实例创建一个单独的 mapStateToProps 函数。
export default connect(
    mapStateToProps
)(App)
