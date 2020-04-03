import React from "react";
import {Link} from "react-router-dom";

//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
import {Button, Form, Input} from "antd";
import {FacebookOutlined, GoogleOutlined} from "@ant-design/icons";
//

//Static

//Styles
import "./styles.scss";

//............................

export const RestoreBlock = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //Render
    return (
        <div className="restore-block">
            <div>
                <Form
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <p>Forgot Your Password?</p>

                    <div className="restore-block__input-bar">
                        <span>E-mail</span>
                        <Form.Item
                            // label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input placeholder="Enter your Email"/>
                        </Form.Item>
                    </div>
                    <div className="restore-block__button-bar">
                        <Button type="primary" htmlType="submit">
                            Reset
                        </Button>
                        <Button>
                            <Link to="/login">Back</Link>
                        </Button>
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
