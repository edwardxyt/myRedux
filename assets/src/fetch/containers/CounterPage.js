import * as CounterActions from '../actions/counter'

console.log(CounterActions);

class Counter extends Component {

    static propTypes = {
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        undo: PropTypes.func.isRequired,
        redo: PropTypes.func.isRequired,
        count: PropTypes.number.isRequired
    }

    render() {
        const {increment, decrement, count, undo, redo} = this.props
        return (
            <p>
                Clicked: {count}
                times {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={undo}>Undo</button>
                {' '}
                <button onClick={redo}>Redo</button>
            </p>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.present.count
    }
}

// bindActionCreators 的作用就是将 Actions 和 dispatch 组合起来生成 mapDispatchToProps 需要生成的内容。
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        CounterActions,
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
