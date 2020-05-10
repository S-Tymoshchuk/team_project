import React from "react";
import {Layout} from "antd";
import "./style.scss";
import PostFrom from "../../containers/post/form-post";
import AvatarLogin from "../../components/common/avatar-login";
import DropDownButton from "../../components/common/drop-down";
import PostMessage from "../../containers/post/right-sidebar";
import LeftSidebar from "../../components/common/left-sidebar";

const {Sider, Content} = Layout;

export default function Home() {
    return (

        <Layout>
            <LeftSidebar/>
            <Layout>
                <Content>
                    <PostFrom/>
                </Content>
            </Layout>
            <Sider
                width={470}
                className="right-sidebar"
            >
                <div className="right-sidebar avatar">
                    <div></div>
                    <div style={{display: "flex"}}>
                        <AvatarLogin/>
                        <DropDownButton/>
                    </div>
                </div>
                <PostMessage/>
            </Sider>
        </Layout>
    );
}
