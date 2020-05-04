import React from "react";
import styled from 'styled-components'
import {Form, Input, Button, Row, Col, Typography} from 'antd';
import {ILogin} from "../../../types/auth";
import {Link} from "react-router-dom";

const {Text} = Typography;

interface ILoginFormProps {
    handleSubmit(values:ILogin):void
}

const LoginForm = (props:ILoginFormProps) => {
    const [form] = Form.useForm();

    const onFinish = (values:any) => {
        props.handleSubmit(values);
    };

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                </div>
                <Header>
                    <p>Don't have an account?</p>
                    <Link type='link' to="/signup"  style={{color: 'gray', padding: '0 5px', textDecoration: "underline"}}>
                        Sign Up
                    </Link>
                </Header>
            </div>
            <Row>
                <Col span={12} offset={6}>
                    <WrapForm>
                        <h1>Log in</h1>
                        <Form form={form} layout={'vertical'} onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item>
                                <WrapButton>
                                    <Button type="default"
                                            style={{
                                                padding: '4px 30px',
                                                backgroundColor: "#c4c4c4",
                                                outline: "none",
                                                color: "white"
                                            }}
                                            htmlType="submit"
                                            className="login-form-button">
                                        Log in Now
                                    </Button>

                                    <a className="login-form-forgot" href="/forgot">
                                        <Text> Forgot your password?</Text>
                                    </a>
                                </WrapButton>
                            </Form.Item>
                            <Row>
                                <Col span={24}>
                                    <div style={{textAlign: "center"}}>or</div>
                                </Col>
                            </Row>
                            <Form.Item>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingTop: '10px'
                                }}>
                                    <Text>Log in with:</Text>
                                    {<Button style={{margin: '0 10px'}} shape={"circle"} size={"large"}><ImgButtonSoc
                                        src='/facebook.png'/></Button>}
                                    <Button shape={"circle"} size={"large"}><ImgButtonSoc src='/google.png'/></Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </WrapForm>
                </Col>
            </Row>
        </div>
    )
};

const WrapForm = styled.div`
    width:300px;
margin: 50px  auto 0 auto;
`;

const Header = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-right: 30px;
`;

const WrapButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ImgButtonSoc = styled.img`
display: flex;
text-align: center;
margin: 0 auto;
width: 27px;
height: 27px;
`;

export default LoginForm;
