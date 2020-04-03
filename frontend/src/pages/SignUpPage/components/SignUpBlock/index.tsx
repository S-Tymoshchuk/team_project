import React from "react";

//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
import {Button, Form, Input} from "antd";
import {FacebookOutlined, GoogleOutlined} from "@ant-design/icons";
//

//Static
// import { socialLinks } from "./data";

//Styles
import "./styles.scss";

//............................

export const SignUpBlock = () => {

  const onFinish = (values:any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

    //Render
    return (
        <div className="sign-block">
            <div>
              <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
              >
                <p>Sing Up</p>
                <div className="sign-block__input-bar">
                    <span>Name</span>
                  <Form.Item
                      // label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input placeholder="Enter your name"/>
                  </Form.Item>
                    <span>E-mail</span>
                  <Form.Item
                      // label="Username"
                      name="email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder="Enter your E-mail"/>
                  </Form.Item>
                    <span>Password</span>
                  <Form.Item
                      // label="Username"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input placeholder="Enter your password"/>
                  </Form.Item>
                    <span>Confirm Password</span>
                  <Form.Item
                      // label="Username"
                      name="confirmpPassword"
                      rules={[{ required: true, message: 'Please input your password again!' }]}
                  >
                    <Input placeholder="Enter your password again"/>
                  </Form.Item>
                </div>
                <div className="sign-block__button-bar">
                  <Button type="primary" htmlType="submit">
                    Sing Up Now
                  </Button>
                    <p>or</p>
                    <div className="sign-block__social-bar">
                        <FacebookOutlined/>
                        <GoogleOutlined/>
                    </div>
                </div>
              </Form>
            </div>
        </div>
    );
};

//...................................
// Type of props

// SimpleInput.propTypes = {
//   changeHandler: types.func.isRequired,
//   placeholder: types.string,
//   value: types.string.isRequired,
//   name: types.string.isRequired,
//   icon: types.node
// };

// Default value for props

// SimpleInput.defaultProps = {
//   placeholder: "Enter",
//   value: "",
//   type: "text"
// };
