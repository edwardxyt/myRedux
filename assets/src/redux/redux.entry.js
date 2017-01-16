import App from './containers/App.jsx'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
