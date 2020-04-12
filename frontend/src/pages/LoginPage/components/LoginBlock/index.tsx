import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.scss";
import { Form, Input, Button} from 'antd';

export const LoginBlock= () => {

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
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
          >
              <Input placeholder="enter email"/>
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

export default LoginBlock;