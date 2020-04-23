import React from 'react';
import {Layout, Button} from 'antd';
import './style.scss';
import PostFrom from "../../containers/post/form-post";

const {Header,  Sider, Content} = Layout;


export default function Home() {

    /* Нормально ли так получать токен?  */
    const test = () => {
        const result = localStorage.getItem('persist:root');
        if (result != null) {
            const jsonToken = JSON.parse(result).auth;
            const getToken = JSON.parse(jsonToken).accessToken;
            console.log(getToken)
        }
    };

    return (
        <Layout>
            <Sider style={{
                height: '100vh',
            }}>
                <div>
                    <Button type="primary" shape="round">
                        Posts
                    </Button>
                </div>
                <div>
                    <Button type="primary" shape="round">
                        Calendar
                    </Button>
                </div>
                <div>
                    <Button type="primary" shape="round">
                        Statistics
                    </Button>
                </div>
                <div>
                    <Button type="primary" shape="round">
                        Archive
                    </Button>
                </div>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <PostFrom/>
                </Content>
            </Layout>
            <Sider style={{backgroundColor:'#e3e3e3'}} width={450}></Sider>
        </Layout>
    )
}
