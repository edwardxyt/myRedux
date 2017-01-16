import IndexComponent from '../../react/IndexComponent.jsx'
import '../../other/much_use'
import '../../common/haha.common'

import '../../static/less/index.less'

var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
                {this.props.date.toTimeString()}
            </p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
        <HelloWorld date = {new Date()} />,
        document.getElementById('example')
    );
}, 500);

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
