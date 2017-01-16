export default class About extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <p>{this.props.name}{this.props.params.name}{this.props.location.query.id}</p>
        );
    }
};
