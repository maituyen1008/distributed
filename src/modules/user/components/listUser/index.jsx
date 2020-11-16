import React, { Fragment, useEffect, useState } from "react";
import StyleListUser from "./index.style";
import {
  Table,
  Tag,
  Space,
  Col,
  Input,
  Row,
  Select,
  Button,
  Modal,
  Form,
} from "antd";
import { getUser } from "../../store/services";

const { Search } = Input;
const { Option } = Select;

const statuses = [
  {
    name: "Hoặt động",
    code: "ACTIVE",
  },
  {
    name: "Chờ xác nhận",
    code: "PENDING",
  },
];

const roles = [
  {
    name: "Quản trị viên",
    code: "ADMIN",
  },
  {
    name: "Nhân viên",
    code: "MEMBER",
  },
];

const ListUser = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ page_size: 20, page_id: 0 });
  const [listUser, setListUser] = useState([]);
  const [user, setUser] = useState({});

  useEffect(async () => {
    const res = await getUser(filter);
    setListUser(res.result);
  }, [filter]);

  const handleEdit = () => {
    setVisible(true);
  };

  const handleDelete = () => {
    setVisible(true);
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (status) => (
          <Tag color={status == 'ACTIVE' ? "success" : "geekblue"} key={status}>
            {status}
          </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Fragment>
          <Space size="middle" style={{ marginRight: 10 }}>
            <a onClick={handleEdit}>Edit</a>
          </Space>
          <Space size="middle">
            <a onClick={handleDelete}>Delete</a>
          </Space>
        </Fragment>
      ),
    },
  ];

  const renderSelectStatus = () => 
    <Select defaultValue="Chưa xác định" style={{ width: "100%" }}>
      {statuses.map((status) => {
        return <Option value={status.code}>{status.name}</Option>;
      })}
    </Select>;

  const renderSelectRole = () => 
    <Select defaultValue="Chưa xác định" style={{ width: "100%" }}>
      {statuses.map((status) => {
        return <Option value={status.code}>{status.name}</Option>;
      })}
    </Select>;

  return (
    <StyleListUser>
      <Row gutter={[16, 16]}>
        <Col span={12}>List Users</Col>
        <Col flex="right" span={2} offset={10}>
          <Button block type="primary" onClick={() => setVisible(true)}>
            New User
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Search />
        </Col>
        <Col span={7}>
          {renderSelectStatus}
        </Col>
        <Col span={7}>
          {renderSelectRole}
        </Col>
        <Col span={2}>
          <Button type="primary" block>
            Search
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={listUser} />
      <Modal
        visible={visible}
        title="Add new item"
        onCancel={() => setVisible(false)}
      >
        <Form
          name="normal_edit"
          className="modal-form"
          initialValues={{
            remember: true,
          }}
        >
          <Row gutter={[16, 16]}>
            <Form.Item name="name" style={{ width: "45%", marginRight: 10 }}>
              <label htmlFor="">Tên:</label>
              <Input
                placeholder="Tên"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Item>
            <Form.Item name="email" style={{ width: "45%" }}>
              <label htmlFor="">Email</label>
              <Input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Item>
          </Row>
          <Row gutter={[16, 16]}>
            <Form.Item name="phone" style={{ width: "45%", marginRight: 10 }}>
              <label htmlFor="">Sdt:</label>
              <Input
                placeholder="Số điện thoại"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </Form.Item>
            <Form.Item name="address" style={{ width: "45%" }}>
              <label htmlFor="">Address</label>
              <Input
                type="text"
                placeholder="Địa chỉ"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </Form.Item>
          </Row>
          <Row gutter={[16, 16]}>
            <Form.Item name="status" style={{ width: "45%", marginRight: 10 }}>
              <label htmlFor="">Trạng thái:</label>
              {renderSelectStatus}
            </Form.Item>
            <Form.Item name="role" style={{ width: "45%" }}>
              <label htmlFor="">Chức vụ</label>
              {renderSelectRole}
            </Form.Item>
          </Row>
        </Form>
      </Modal>
    </StyleListUser>
  );
};
export default ListUser;
