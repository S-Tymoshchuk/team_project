import React, {Dispatch} from "react";
import LoginPageComponent from "../../components/auth/LoginPageComponent";
import {ILogin} from "../../types/auth";
import {connect} from "react-redux";
import {AuthActions} from "../../redux/actions/auth";

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>;

const LoginPageContainer = (props: ILoginContainerProps) => {
    return (
        <div>
            <LoginPageComponent  handleSubmit={props.signIn}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        signIn: (payload: ILogin) => dispatch(AuthActions.signIn(payload))
    }
};

export default connect(null, mapDispatchToProps)(LoginPageContainer)
