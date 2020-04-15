import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './styles.scss';
// import SignUpBlock from "./../../../components/auth/SignUpPage/components/SignUpBlock"
import {ISignUp} from "../../../types";
import {AuthActions} from "../../../redux/actions";

type ISignUpContainerProps = ReturnType<typeof mapDispatchToProps>;

function SignupContainer(props: ISignUpContainerProps) {
    return (
        <div>
        {/*<SignUpBlock handleSubmit={props.signUp} handleError={console.error} />*/}
        sadsadas
    </div>
)
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUp: (payload: ISignUp) => dispatch(AuthActions.signUp(payload)),
});

export default connect(null, mapDispatchToProps)(SignupContainer);