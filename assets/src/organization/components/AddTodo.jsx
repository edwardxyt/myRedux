export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={(e) => this.handleClick(e)}>
                    添加
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        let index = this.props.index;
        if (text === '') return;
        this.props.onAddClick(text, index);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
