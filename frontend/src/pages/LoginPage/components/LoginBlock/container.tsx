import React from "react";
import {IRootReducer} from "../../../../redux/reducers/state";
import {Dispatch} from "redux";
import {ILogin} from "../../../../types";
import {UserActions} from "../../../../redux/actions";
import {connect} from "react-redux";

type Props = {
    email: string;
    pass: string;
    newText: any;
    dispatch:any,
    counter:number,
}

const LoginContainer = (props:Props) => {
    return (
        <div>
            sdfsdfsdfddsfd
        </div>
    )
}

const mapStateToProps = (state: IRootReducer) => {
    return {
        email: state.user.email,
        pass: state.user.pass,
        newText: state.user.newText,
        counter: state.user.counter
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     increment: (payload: ILogin) => dispatch(UserActions.increment(payload))
// })

export default connect(mapStateToProps)(LoginContainer);