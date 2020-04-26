import React, {Dispatch} from "react";
import SignUpPageComponent from "../../components/auth/SignUpPageComponent";
import {ISignUp} from "../../types/auth";
import {AuthActions} from "../../redux/actions/auth";
import {connect} from "react-redux";


type ISignUpContainerProps = ReturnType<typeof mapDispatchToProps>

const SignUpPageContainer = (props: ISignUpContainerProps) => {
    return (
        <div>
            <SignUpPageComponent handleSubmit={props.signUP}/>
        </div>
    )
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    signUP: (payload: ISignUp) => dispatch(AuthActions.signUP(payload))
});

export default connect(null, mapDispatchToProps)(SignUpPageContainer)

