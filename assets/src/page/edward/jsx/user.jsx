export default class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        console.log(this.props.name);
        return (
            <p>{this.props.params.id}</p>
        );
    }
};
