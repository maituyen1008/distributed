import React, { useState } from "react";
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
} from "antd";
const { Search } = Input;
const { Option } = Select;
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const ListUser = () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => setVisible(true)}>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <StyleListUser>
      <Row gutter={[16, 16]}>
        <Col span={12}>List Users</Col>
        <Col flex="right" span={2} offset={10}>
          <Button block type="primary" onClick={() => setVisible(true)}>
            New Record
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Search />
        </Col>
        <Col span={7}>
          <Select defaultValue="lucy" style={{ width: "100%" }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        <Col span={7}>
          <Select defaultValue="lucy" style={{ width: "100%" }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        <Col span={2}>
          <Button type="primary" block>
            Search
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
      <Modal
        visible={visible}
        title="Add new item"
        onCancel={() => setVisible(false)}
      >
        <p>This is content</p>
      </Modal>
    </StyleListUser>
  );
};
export default ListUser;
