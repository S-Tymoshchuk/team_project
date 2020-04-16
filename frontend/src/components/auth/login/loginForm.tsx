import React, { FormEvent } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { FormComponentProps } from "antd/es/form";

import "./styles.scss";
import { Link } from "react-router-dom";
import { ILogin } from "../../../types";

interface ILoginFormProps extends FormComponentProps {
  handleSubmit(values: ILogin): void;
  handleError(error: any): void;
}

function LoginForm(props: ILoginFormProps) {
  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    props.form.validateFields((error, values) => {
      if (error) {
        return props.handleError(error);
      }
      props.handleSubmit(values);
    });
  }

  return (
    <Form onSubmit={onSubmit} className="login-form">
      <h3 className="main-label">Log in</h3>
      <span>E-mail</span>
      <Form.Item>
        {props.form.getFieldDecorator("email", {
          rules: [{ required: true, message: "Please add your email!" }],
        })(
          <Input
            type="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <span>Password</span>
      <Form.Item>
        {props.form.getFieldDecorator("password", {
          rules: [{ required: true, message: "Please add your Password!" }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>

      <Form.Item>
        {props.form.getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        Or <Link to="/signup">register now!</Link>
      </Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      <Link to="/forgot" className="login-form-forgot">
        Forgot password
      </Link>
    </Form>
  );
}

export default Form.create<ILoginFormProps>({ name: "LoginForm" })(LoginForm);
