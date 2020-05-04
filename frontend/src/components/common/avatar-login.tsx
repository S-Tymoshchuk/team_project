import React from "react";
import { Avatar } from "antd";
import { IRootReducer } from "../../redux/reducers/state";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

//type IUser = ReturnType<typeof mapStateToProps>;

const AvatarLogin = (props: any) => {
  console.log(props);

  return (
    <WrapAvatar >
      <span style={{ marginRight: "15px", color:'black' }}>{props.user.login}</span>

      <Avatar
        size={48}
        icon={
          props.user.avatar === null ? (
            <UserOutlined />
          ) : (
            <img src={props.user.avatar} />
          )
        }
      />
    </WrapAvatar>
  );
};

const mapStateToProps = (state: IRootReducer) => ({
  user: state.user,
});


const WrapAvatar = styled.div`
  margin: 35px 8px 10px 8px;
`;
export default connect(mapStateToProps)(AvatarLogin);
