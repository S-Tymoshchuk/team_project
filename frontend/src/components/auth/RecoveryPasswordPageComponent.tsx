import React from "react";
import {Button, Col, Form, Input, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IForgot} from "../../types/auth";
import './style.css';

interface IForgotProps {
    handleSubmit(values: IForgot): void
}

const RecoveryPasswordPageComponent = (props: IForgotProps) => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        props.handleSubmit(values);
    };

    return (
        <div>
            <Row>
                <Col span={12} offset={6}>
                    <WrapForm>
                        <h1>Forgot Your Password ?</h1>
                        <Form form={form} layout={'vertical'} onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <WrapButton>
                                <Button type="default"
                                        style={{
                                            width: '40%',
                                            backgroundColor: "#c4c4c4",
                                            outline: "none",
                                            color: "white"
                                        }}
                                        htmlType="submit"
                                        className="login-form-button">
                                    Reset
                                </Button>
                                <Link type='link' to='/'
                                      style={{
                                          padding: '5px 15px',
                                          margin: '1px',
                                          textAlign: 'center',
                                          width: '40%',
                                          backgroundColor: "#f6f6fa",
                                          color: "black",
                                          outline: "none"
                                      }}
                                >
                                    Back
                                </Link>
                            </WrapButton>
                        </Form>
                    </WrapForm>
                </Col>
            </Row>
        </div>
    )
}

const WrapForm = styled.div`
    width:300px;
margin: 92px  auto 0 auto;
`;


const WrapButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export default RecoveryPasswordPageComponent;