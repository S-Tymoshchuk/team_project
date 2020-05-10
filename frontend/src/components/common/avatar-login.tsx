import React from "react";
import {Avatar} from "antd";
import {IRootReducer} from "../../redux/reducers/state";
import {connect} from "react-redux";
import {UserOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {IUserInt} from "../../types";

type IAvatar = ReturnType<typeof mapStateToProps>
const AvatarLogin = (props:IAvatar) => {

    return (
        <WrapAvatar>
            <Span>{props.user.firstName}</Span>
            <Avatar
                size={48}
                icon={
                    props.user.avatar === null ? (
                        <UserOutlined/>
                    ) : (
                        <img src={props.user.avatar}/>
                    )
                }
            />
        </WrapAvatar>
    );
};

interface IUserI {
    user: IUserInt
}

const mapStateToProps = (state: IRootReducer): IUserI => ({
    user: state.user,
});


const WrapAvatar = styled.div`
  margin: 35px 8px 10px 8px;
`;

const Span = styled.span`
margin-right: 15px;
color: #000000;
`;
export default connect(mapStateToProps)(AvatarLogin);
