import React from "react";
import {connect} from "react-redux";
import Divider from "antd/lib/divider";
import {DeleteOutlined} from "@ant-design/icons";
import {IRootReducer} from "../../redux/reducers/state";
import {IPost} from "../../types/post";


type IPostMessage = ReturnType<typeof mapStateToProps>
const PostMessage = (props: IPostMessage) => {
    return (
        <div>
            <h1 style={{fontSize: '25px'}}>Agenda</h1>
            <div style={{backgroundColor: '#c4c4c4', padding: '1px 10px', marginBottom: '20px', fontWeight: 700}}>
                <h1>April 4</h1></div>
            {
                props.post.map((item: IPost) => {
                    return (<div key={item.id}
                                 style={{backgroundColor: 'white', padding: '20px 40px', marginBottom: '30px'}}>
                        <div style={{display: 'flex', justifyContent: "space-between"}}>
                            <h1>{item.title}</h1>
                            <DeleteOutlined style={{color:'black'}}/>
                        </div>

                        <div style={{color:'black'}}>
                            {item.body}
                        </div>
                        <Divider style={{backgroundColor: 'black'}}/>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                               <span style={{color:'black'}}>Socials:</span>
                            </div>
                            <div style={{color:'black'}}>Post time: {item.time}</div>
                        </div>
                    </div>)
                })
            }
        </div>
    )
};

const mapStateToProps = (state: IRootReducer) => {
    return {
        post: state.post
    }
};

export default connect(mapStateToProps)(PostMessage)
