import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const logout = () => {
  localStorage.clear();
  document.location.reload(true);
};

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">Settings</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a onClick={() => logout()}>Log Out</a>
    </Menu.Item>
  </Menu>
);
const DropDownButton = () => {
  return (
    <div style={{ margin: "50px 0px 0 0" }}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default DropDownButton;
