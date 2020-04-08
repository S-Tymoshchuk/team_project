import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.scss";
import {connect} from "react-redux";
import { Form, Input, Button, Checkbox } from 'antd';
import {IRootReducer} from './../../../../redux/reducers/state';
import {UserActions} from "../../../../redux/actions";


type Props = {
    email: string;
    pass: string;
    newText: any;
    dispatch:any,
    counter:number,
}

export const LoginBlock= (props:Props) => {

    const onFinish = (values:any) => {
        // @ts-ignore
        props.dispatch(UserActions.increment(values.username,values.password));
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
console.log(props.newText);
  //Render
  return (
    <div className="login-block">
        <p>Log in{props.counter}</p>
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
              <Input placeholder={props.email}/>
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


const mapStateToProps = (state: IRootReducer) => {
    return {
        email: state.user.email,
        pass: state.user.pass,
        newText: state.user.newText,
        counter:state.user.counter
    }
}

export default connect(mapStateToProps)(LoginBlock);