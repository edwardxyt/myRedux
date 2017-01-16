import 'babel-polyfill';  //Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
require('es6-promise').polyfill();

import Root from './containers/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('mount-dom')
)
