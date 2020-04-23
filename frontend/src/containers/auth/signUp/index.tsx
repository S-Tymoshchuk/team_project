import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Form, Input, Row} from "antd";
import styled from "styled-components";
import {ISignUp} from "../../../types/auth";

interface ISignUpFormProps {
    handleSubmit(values: ISignUp): void
}

const RegisterForm = (props: ISignUpFormProps) => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        delete values['confirm'];
        props.handleSubmit(values)
    };

    return (
        <div>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                    </div>
                    <Header>
                        <p>Already have an account?</p>
                        <Link type='link' to="/"
                              style={{color: 'gray', padding: '0 5px', textDecoration: "underline"}}>
                            Log In
                        </Link>
                    </Header>
                </div>
                <Row>
                    <Col span={12} offset={6}>
                        <WrapForm>
                            <h1>Sing Up</h1>
                            <Form form={form} layout={'vertical'} onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Name"
                                    name="firstName"
                                    rules={[{required: true, message: 'Please input your username!'}]}
                                >
                                    <Input/>
                                </Form.Item>
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
                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({getFieldValue}) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                    ]}
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
                                            Sign Up Now
                                        </Button>
                                        <Form.Item>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                paddingTop: '20px'
                                            }}>
                                                <div style={{textAlign: "center"}}>or</div>
                                                <Button style={{margin: '0 10px'}} shape={"circle"}
                                                        size={"large"}><ImgButtonSoc
                                                    src='/facebook.png'/></Button>
                                                <Button shape={"circle"} size={"large"}><ImgButtonSoc
                                                    src='/google.png'/></Button>
                                            </div>
                                        </Form.Item>

                                    </WrapButton>
                                </Form.Item>


                            </Form>
                        </WrapForm>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

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
export default RegisterForm;
