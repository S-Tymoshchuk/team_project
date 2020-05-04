import React, {Dispatch, useEffect, useReducer} from "react";
import {Form, Input, Button} from "antd";
import styled from "styled-components";
import "./style.css";
import ImageLoader from "./imageLoader";
import {connect} from "react-redux";
import {IImage, IRemoveImage} from "../../types/attachment";
import {IRootReducer} from "../../redux/reducers/state";
import DataTime from "../../components/common/date-time";
import {AttachmentActions} from "../../redux/actions/attachment";
import {PostActions} from "../../redux/actions/post";
import uniqid from 'uniqid';
import moment from 'moment';
import {IPost} from "../../types/post";

//type IPostForm = ReturnType<typeof mapDispatchToProps> & typeof mapStateToProps;  надо спросить
const initialState = {
    title: '',
    body: '',
    fileId: [],
    schedule: {
        providerId: ['linkedin'],
        startsAt: '',
        notify: false,
        status: 'pending'
    }
};

const reducer = (state: any, action: any) => {

    switch (action.type) {
        case 'SET_TITLE': {
            return {
                ...state, title: action.payload
            }
        }
        case 'SET_BODY': {
            return {
                ...state, body: action.payload
            }
        }
        case 'SET_DATE': {
            return {
                ...state, schedule: {...state.schedule, startsAt: action.payload}
            }
        }
        case "CLEAN_INPUTS": {
            return {
                ...initialState
            }
        }
        default:
            return state;
    }
};


const PostFrom = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form] = Form.useForm();

    const setData = (values: any) => {

        dispatch({type: "SET_DATE", payload: values})
    };
    const titleInput = (e: any) => {
        const text = e.currentTarget.value;
        dispatch({type: 'SET_TITLE', payload: text});
    };
    const bodyInput = (e: any) => {
        const text = e.currentTarget.value;
        dispatch({type: 'SET_BODY', payload: text});
    };

    const addMessage = () => {
        const fileId = props.image.attachment.map((item:IImage) => item.fileId);
        const post = {
            id: uniqid(),
            time: moment().format('HH:mm'),
            title: state.title,
            body: state.body,
            fileId: fileId,
            schedule: {
                providerId: ['linkedin'],
                startsAt: state.schedule.startsAt,
                notify: state.schedule.notify,
                status: state.schedule.status
            }
        };
        props.addPost(post);
        dispatch({type: 'CLEAN_INPUTS'});
        props.clearImage()
    };

    return (
        <WrapForm>
            <Form form={form} layout={"vertical"} onFinish={addMessage}>
                <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                    <Input onChange={titleInput} value={state.title} style={{width: "200px"}}
                           placeholder="Title Post"/>
                    <DataTime getDate={setData}/>
                </div>
                <div style={{marginTop: '20px'}}>

                    <Input.TextArea  onChange={bodyInput} value={state.body} placeholder="Body Post"/>
                </div>
                <div>
                    <ImageLoader
                        handleSubmit={props.addImage}
                        images={props.image}
                        removeItem={props.removeImage}
                    />
                </div>
                <Form.Item wrapperCol={{span: 12, offset: 17}}>
                    <Button type="primary" htmlType="submit" style={{backgroundColor:'#99a8b9', border:"none"}}>
                        To Post
                    </Button>
                </Form.Item>
            </Form>
        </WrapForm>
    );
};

const WrapForm = styled.div`
  background-color: #e3e3e3;
  margin: 80px  20px;
  padding: 10px;
  height: 400px;
`;

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    addImage: (payload: IImage) => dispatch(AttachmentActions.addImage(payload)),
    removeImage: (payload: IRemoveImage) =>
        dispatch(AttachmentActions.removeImage(payload)),
    clearImage: () => dispatch(AttachmentActions.clearImage()),
    addPost: (payload: IPost) => dispatch(PostActions.addPost(payload))
});

const mapStateToProps = (state: IRootReducer) => ({
    image: state.attachment
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFrom);
