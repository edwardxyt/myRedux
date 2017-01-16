import IndexComponent from '../../react/IndexComponent.jsx'
import '../../other/much_use'
import '../../common/haha.common'

import '../../static/less/index.less'

ReactDOM.render(
    (
        <div>
            <IndexComponent/>
            <div className='avatar'/>
        </div>
    ),
    document.getElementById('mount-dom')
)

// setTimeout(function(){
//     require.ensure([],function(){
//         require('./js/async.js')
//     })
// },1000)
