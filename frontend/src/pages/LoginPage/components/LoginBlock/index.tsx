import React, { useRef } from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
// import { Button } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//

//Static
// import { socialLinks } from "./data";
//Styles
import "./styles.scss";


import { Form, Input, Button, Checkbox } from 'antd';

export const LoginBlock: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
    }
  };

    const onFinish = (values:any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };

  //Render
  return (
    <div className="login-block">
        <p>Log in</p>
      <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
      >
          <div className="login-block__input-bar">
          <span>E-mail</span>
          <Form.Item
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
          >
              <Input placeholder="enter e-mail"/>
          </Form.Item>

          <span>Password</span>
          <Form.Item
              // label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
          >
              <Input placeholder="enter password"/>
          </Form.Item>
          </div>
          <Form.Item>
              <div className="login-block__button-bar">
              <Button type="primary" htmlType="submit">
                  Log In Now
              </Button>

              <Link to="/password">
                  <Button type="link">Forgot your password?</Button>
              </Link>
              </div>
          </Form.Item>
      </Form>
        <p>or</p>
        <div className="login-block__social-bar">
            <p>Log In with:</p>
            <FacebookOutlined />
            <GoogleOutlined />
            {/* <SocialBlock links={socialLinks} /> */}
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
