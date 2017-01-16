import rootReducer from '../reducers'

const loggerMiddleware = createLogger({
  level: 'log',
  collapsed: true
})

//applyMiddleware 来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}
