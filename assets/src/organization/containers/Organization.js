import * as OrganActions from '../actions/organization'
console.log(OrganActions);

import { getAllTeers } from '../selectors/organization'

import FormAdd from '../components/FormAdd.jsx'
import FormRegistration from '../components/FormRegistration.jsx'

//ant
const ButtonGroup = Button.Group;
const TreeNode = Tree.TreeNode;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const columns = [
    {
        title: '序号',
        dataIndex: 'id'
    }, {
        title: '用户名称',
        dataIndex: 'name'
    }, {
        title: '用户登录名称',
        dataIndex: 'loginName'
    }, {
        title: '手机',
        dataIndex: 'phone'
    }, {
        title: '默认岗位',
        dataIndex: 'defPost'
    }, {
        title: '状态',
        dataIndex: 'state'
    }
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        id: `Edward King ${i}`,
        name: 32,
        loginName: `London, Park Lane no. ${i}`,
        phone: 15840222210,
        defPost: `job in ${i}`,
        state: `state ${i}`
    });
}

const onDelete = (record) => {
    return () => {
        console.log(record);
    };
}
const columns_2 = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '岗位名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
            <span>
                <Popconfirm title={"确定是否"+ "-" +"删除?"} onConfirm={onDelete(record)}>
                    <a href="#">Delete {record.id}</a>
                </Popconfirm>
                <span className="ant-divider" />
            </span>
        ),
    }
];

const data_2 = [{
    key: '1',
    id: 1,
    name: '鑫苑中国总部/凤启/研发部/PHP',
}, {
    key: '2',
    id: 2,
    name: '鑫苑中国总部/凤启/研发部/PHP',
}, {
    key: '3',
    id: 3,
    name: '鑫苑中国总部/凤启/研发部/PHP',
}];

class Organization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            loading_2: false,
            visible: false,
            visible_2: false,
            visible_3: false,
            ModalText: '亲！确定一定真的要“删除”这片叶子吗？',
        };
        this.onChange = this.onChange.bind(this);
        this.start = this.start.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.showTotal = this.showTotal.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.showModal_2 = this.showModal_2.bind(this);
        this.handleOk_2 = this.handleOk_2.bind(this);
        this.handleCancel_2 = this.handleCancel_2.bind(this);
        this.showModal_3 = this.showModal_3.bind(this);
        this.handleOk_3 = this.handleOk_3.bind(this);
        this.handleCancel_3 = this.handleCancel_3.bind(this);
    }
    start() {
        this.setState({loading: true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({selectedRowKeys: [], loading: false});
        }, 1000);
    }
    onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    }
    handleMenuClick = (e) => {/*console.log('click', e)*/};
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    showTotal(total) {
        return `共 ${total} 条`;
    }
    onSelect(selectedKeys) {
        console.log('selected', selectedKeys);
    }
    onRightClick(e) {
        console.dir(e.event);
        debugger;
        // debugger;
        // console.log(e.event.clientX, e.event.clientY);
    }
    showModal() {
        const { restAll } = this.props
        this.setState({
            visible: true,
        });
        { restAll(false) };
    }
    onReset = (t) => {
        const { restAll } = this.props
        { restAll(t) };
    }
    handleOk() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel() {
        this.setState({ visible: false });
    }
    showModal_2() {
        this.setState({
            visible_2: true,
        });
    }
    handleOk_2() {
        this.setState({ loading_2: true });
        setTimeout(() => {
            this.setState({ loading_2: false, visible_2: false });
        }, 3000);
    }
    handleCancel_2() {
        this.setState({ visible_2: false });
    }
    showModal_3() {
        this.setState({
            visible_3: true,
        });
    }
    handleOk_3() {
        this.setState({
            ModalText: '稍等，我的剪刀呢？咔咔咔~~~',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible_3: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel_3() {
        console.log('Clicked cancel button');
        this.setState({
            visible_3: false,
        });
    }
    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">启用</Menu.Item>
            <Menu.Item key="2">禁用</Menu.Item>
        </Menu>
    )
    pagination = {
        total: data.length,
        // showSizeChanger: true,
        size:'small',
        showQuickJumper: true,
        showTotal: this.showTotal,
        onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
        },
        onChange: (current) => {
            console.log('Current: ', current);
        },
    }
    render() {
        const { trees, rest } = this.props;
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange
        };

        const loop = data => data.map((item) => {
            if (item.children) {
                return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
            }
            return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} />;
        });

        if (trees.tree_1 === undefined) {
            var treeNodes = <TreeNode/>;
        }else {
            if (trees.tree_1.data.length > 0) {
                var treeNodes = loop(trees.tree_1.data);
            }
        }

        return <div className="gutter-example">
            <Row gutter={16}>
                <Col lg={8}>
                    <Card className="lg" title="组织结构" extra={
                        <div>
                            <ButtonGroup size="small" onClick={this.handleMenuClick}>
                                <Button onClick={this.showModal} type="primary">增加</Button>
                                <Modal
                                    width="600px"
                                    visible={this.state.visible}
                                    title="增加"
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    footer={[
                                        // <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>Return</Button>,
                                        // <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>Submit</Button>,
                                    ]}
                                >
                                    <FormAdd rest={rest} onResetClick={this.onReset} />
                                </Modal>
                                <Button onClick={this.showModal_2} type="ghost">修改</Button>
                                <Modal
                                    width="600px"
                                    visible={this.state.visible_2}
                                    title="编辑"
                                    onOk={this.handleOk_2}
                                    onCancel={this.handleCancel_2}
                                    footer={[
                                        // <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>Return</Button>,
                                        // <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>Submit</Button>,
                                    ]}
                                >
                                    <div id="components-form-demo-register"><FormRegistration /></div>
                                </Modal>
                                <Button onClick={this.showModal_3} type="ghost">删除</Button>
                                <Modal title="警告！前方高能。"
                                    visible={this.state.visible_3}
                                    onOk={this.handleOk_3}
                                    confirmLoading={this.state.confirmLoading}
                                    onCancel={this.handleCancel_3}
                                >
                                    <p>{this.state.ModalText}</p>
                                </Modal>
                                <Dropdown overlay={this.menu}>
                                    <Button size="small" type="ghost">
                                    更多操作<Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </ButtonGroup>
                        </div>
                    }>
                    <Tree onRightClick={this.onRightClick} onSelect={this.onSelect} >
                        {treeNodes}
                    </Tree>
                    </Card>
                </Col>
                <Col lg={16}>
                    <Card className="lg" title="列表" extra={
                        <Form inline>
                            <FormItem>
                                <RadioGroup size="small" onChange={this.onChange} defaultValue="a">
                                    <RadioButton value="a">用户</RadioButton>
                                    <RadioButton value="b">岗位</RadioButton>
                                </RadioGroup>
                            </FormItem>
                            <FormItem>
                                <Input size="small" placeholder="输入关键字" />
                            </FormItem>
                            <FormItem>
                                <Button size="small" htmlType="submit">搜索</Button>
                            </FormItem>
                            <FormItem>
                                <ButtonGroup size="small" onClick={this.handleMenuClick}>
                                    <Button type="primary">增加</Button>
                                    <Button type="ghost">修改</Button>
                                    <Button type="ghost">删除</Button>
                                    <Button type="ghost">离职</Button>
                                    <Button type="ghost">查询</Button>
                                    <Button type="ghost">添加岗位</Button>
                                    <Dropdown overlay={this.menu}>
                                        <Button size="small" type="ghost">
                                        更多操作<Icon type="down" />
                                        </Button>
                                    </Dropdown>
                                </ButtonGroup>
                            </FormItem>
                        </Form>
                    }>
                        <Table pagination={this.pagination} rowSelection={rowSelection} columns={columns} dataSource={data}/>
                    </Card>
                    <Card title="兼职岗位 (李某)">
                        <Table pagination={{ size:"small", showQuickJumper: true}} dataSource={data_2} columns={columns_2} />
                    </Card>
                </Col>
            </Row>
        </div>
    }
    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch(fetchPostsIfNeeded('tree_1'));
        // 呵呵呵
        const {fetchPostsIfNeeded} = this.props
        {fetchPostsIfNeeded('tree_1')}

        // setTimeout(() => { dispatch(fetchPostsIfNeeded('tree_1')) }, 2000);
        // setTimeout(() => {
        //     let formData = new FormData();
        //     formData.append('username', '张三');
        //     formData.append('email', 'zhangsan@example.com');
        //     formData.append('birthDate', 1940);
        //
        //     fetch('http://www.xiaoyuzhang.com/index.php',{
        //         mode: 'cors',
        //         method: "POST",
        //         body: formData
        //     }).then(function(response) {
        //         return response.json()
        //     }).then(function(json) {
        //         console.log('parsed json', json)
        //     }).catch(function(fail) {
        //         console.log('parsing failed', fail)
        //     })
        //
        //     fetchJsonp('http://60.205.185.13/index.php?title=xiayuting'
        //     ).then(function(response) {
        //         return response.json()
        //     }).then(function(json) {
        //         console.log('parsed json', json)
        //     }).catch(function(fail) {
        //         console.log('parsing failed', fail)
        //     })
        //     dispatch(addAll(
        //         [
        //             { name: '集团', key: '0-0', children:[
        //                 {
        //                     key: "0-0-0",
        //                     name: "leaf 0-0-0"
        //                 }
        //             ]},
        //             { name: '公司', key: '0-1', children:[
        //                 {
        //                     key: "0-1-0",
        //                     name: "leaf 0-1-0",
        //                     children:[
        //                         {
        //                             key: "0-1-0-0",
        //                             name: "leaf 0-1-0-0"
        //                         },
        //                         {
        //                             key: "0-1-0-1",
        //                             name: "leaf 0-1-0-1"
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     key: "0-1-1",
        //                     name: "leaf 0-1-1"
        //                 }
        //             ]},
        //             { name: '机构', key: '0-2'},
        //         ]
        //     ));
        //     dispatch(addAll(
        //         [
        //             { name: '龙启', key: '0-3', children:[
        //                 {
        //                     key: "0-3-0",
        //                     name: "leaf 0-3-0"
        //                 }
        //             ]}
        //         ]
        //     ));
        // }, 1000);
    }
}
const mapStateToProps = (state) => {
    return {
        trees: getAllTeers(state),
        rest: state.resetFields
    }
}

// bindActionCreators 的作用就是将 Actions 和 dispatch 组合起来生成 mapDispatchToProps 需要生成的内容。
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        OrganActions,
        dispatch
    )
}

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Organization)
