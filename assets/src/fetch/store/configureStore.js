import rootReducer from '../reducers'
// import enforceImmutableMiddleware from 'redux-immutable-state-invariant'  //

const loggerMiddleware = createLogger({level: 'log', collapsed: true})
console.log('__DEBUG__：' + __DEBUG__);
const middleware = process.env.DEBUG === '__DEBUG__'
    ?[
        // enforceImmutableMiddleware(),
        thunkMiddleware,
        promiseMiddleware,
        loggerMiddleware
    ]
    : [
        thunkMiddleware,
        promiseMiddleware,
        loggerMiddleware
    ];

//compose(...functions)从右到左来组合多个函数。
//compose 增强 store
var buildStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default function configureStore(initialState) {
    const store = buildStore(rootReducer, initialState);
    // reducerInitializedState
    console.log(store.getState());
    return store;
}
