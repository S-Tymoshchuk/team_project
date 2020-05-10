import React from "react";
import {Layout, Menu} from "antd";
import './left-sidebar.css'
import {Link} from "react-router-dom";

const {Sider} = Layout;

const LeftSidebar = () => {
    return (
        <Sider
            className="left-sidebar"
        >
            <div className="left-sidebar">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    theme="light"
                    style={{backgroundColor: '#e3e3e3'}}
                >
                    <Menu.Item key="1">
                        <Link style={{color:"white"}} to='/'>Posts</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        Calendar
                    </Menu.Item>
                    <Menu.Item key="3">
                        Statistics
                    </Menu.Item>
                    <Menu.Item key="4">
                        Archive
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link style={{color: "white"}} to='/social'>Social</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Sider>
    )
};

export default LeftSidebar
