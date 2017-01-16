import rootReducer from '../reducers'

// console.log(process.env.DEBUG);  //process.env.DEBUG 获取不到
console.log('__DEBUG__：' + __DEBUG__);

const loggerMiddleware = createLogger({level: 'log', collapsed: true})

const middleware = __DEBUG__
    ?[
        thunkMiddleware,
        promiseMiddleware,
        loggerMiddleware
    ]
    : [
        thunkMiddleware,
        promiseMiddleware
    ];
//compose(...functions)从右到左来组合多个函数。
//compose 增强 store
var buildStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default function configureStore(preloadedState) {
    let store;
    if (__DEBUG__) {
        store = buildStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }else {
        store = buildStore(rootReducer, preloadedState);
    }
    console.log(store.getState());
    return store;
}
