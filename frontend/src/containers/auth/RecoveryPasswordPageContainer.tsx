import React, {Dispatch} from "react";
import RecoveryPasswordPageComponent from "../../components/auth/RecoveryPasswordPageComponent";
import {AuthActions} from "../../redux/actions/auth";
import {IForgot} from "../../types/auth";
import {connect} from "react-redux";

type IForgotPassword = ReturnType<typeof mapDispatchToProps>

const RecoveryPasswordPageContainer = (props: IForgotPassword) => {
    return (
        <div>
            <RecoveryPasswordPageComponent handleSubmit={props.forgotPass}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    forgotPass: (payload: IForgot) => dispatch(AuthActions.forgotPass(payload))
});


export default connect(null, mapDispatchToProps)(RecoveryPasswordPageContainer);