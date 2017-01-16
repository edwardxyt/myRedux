//ant
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'setting:1',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return <div>
            <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}><Icon type="mail" />首页</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/todo/1" activeClassName="active"><Icon type="appstore" />任务提醒</Link>
                </Menu.Item>
                <SubMenu title={
                    <span><Icon type="setting" />组织机构</span>}
                >
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1"><Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>Home</Link></Menu.Item>
                        <Menu.Item key="setting:2"><Link to="/todo/1" activeClassName="active">Todo</Link></Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3"><Link to="/organization" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>Organization</Link></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay" disabled>
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>
            </Menu>
            {this.props.children}
        </div>
    }
}
