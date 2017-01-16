export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        var childProps = {
            name:'edward-'
        };
        return (
            <div>
                {this.props.children && React.cloneElement(
                    this.props.children, {name : childProps.name})
                }
                <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
            </div>
        );
    }
};
