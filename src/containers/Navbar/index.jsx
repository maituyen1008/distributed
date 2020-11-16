import React from "react";
import {
  StyleNavItem,
  StyleUserName,
  StyleUserProfileContainer,
} from "./index.style";
import { Row, Popover, Avatar, Badge } from "antd";

import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actions } from "../../modules/user/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const notification = () => (
    <div>
      <p>Thông báo</p>
    </div>
  );

  const handleLogout = () => {
    dispatch(actions.setUserData({}));
  };

  const profile = () => (
    <div>
      <p>Tài khoản</p>
      <p onClick={handleLogout}>Đăng xuất</p>
    </div>
  );

  return (
    <Row type="flex" justify="end" align="middle" className="right-header">
      <StyleNavItem>
        <Popover
          placement="bottom"
          title="Thông báo"
          content={notification}
          trigger="click"
        >
          <BellOutlined style={{ color: "gray", fontSize: 32 }} />
        </Popover>
      </StyleNavItem>

      <StyleNavItem>
        <Popover
          placement="bottom"
          title="Profile"
          content={profile}
          trigger="click"
        >
          <StyleUserProfileContainer>
            <Badge dot color="#04B653">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                shape="circle"
                icon={<UserOutlined />}
                size="large"
              />
            </Badge>
            <StyleUserName>
              <span className="text-info role">Admin</span>
              <span className="text-info username">Vũ Đức Đam</span>
            </StyleUserName>
          </StyleUserProfileContainer>
        </Popover>
      </StyleNavItem>
    </Row>
  );
};

export default Navbar;
