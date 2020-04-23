import React from "react";
import {Form, Input, Button, Radio, Upload} from 'antd';
import styled from "styled-components";
import {InboxOutlined} from '@ant-design/icons';

const PostFrom = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values)
    };
    // @ts-ignore
    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    // @ts-ignore
    const dummyRequest = ({file, onSuccess}) => {
        setTimeout(() => {
            onSuccess('ok')
        }, 0)
    };

        return (
        <WrapForm>
            <Form
                form={form} layout={'vertical'} onFinish={onFinish}
            >
                <Form.Item label="Title" name="title">
                    <Input style={{width: '200px'}}  placeholder="Title Post"/>
                </Form.Item>
                <Form.Item name='text' label="Text Post">
                    <Input.TextArea/>
                </Form.Item>
                <div>
                    <Form.Item
                        name="file"
                        label="Upload"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="file" customRequest={dummyRequest} listType="picture" >
                            <Button>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>
                </div>
                <Form.Item wrapperCol={{span: 12, offset: 18}}>
                    <Button type="primary" htmlType="submit" >
                        To Post
                    </Button>
                </Form.Item>
            </Form>
        </WrapForm>
    )
};

const WrapForm = styled.div`
background-color: #e3e3e3;
margin: 0 20px;
padding: 10px;
height: 100%;
`;
export default PostFrom;

