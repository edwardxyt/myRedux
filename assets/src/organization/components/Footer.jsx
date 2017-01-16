export default class Footer extends Component {
    //匹配当前是否选中，非选中既生成A标签
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show: {' '}
                {this.renderFilter('SHOW_ALL', '显示全部')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', '显示完成')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', '显示活跃')}
                .
            </p>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
}
