import React, {Dispatch} from "react";
import SocialContainer from "../../../containers/social/social-container";
import {connect} from "react-redux";
import {SocialConnectActions} from "../../../redux/actions/social";
import {withRouter} from "react-router-dom";
import {ISocialAuthCOde} from "../../../types/social";
import {IRootReducer} from "../../../redux/reducers/state";
import LeftSidebar from "../../../components/common/left-sidebar";
import './style.css';



const SocialPage = (props: any) => {
    const accessToken = props.location.search.slice(6);
    return <>
        <div className='wrap-content'>
            <LeftSidebar/>
            <SocialContainer social={props.social} handleSubmit={props.socialConnect} accessToken={accessToken}/>
        </div>
    </>

};

interface IDispatch {
    socialConnect(values: ISocialAuthCOde): void
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatch => ({
    socialConnect: (payload: ISocialAuthCOde) => dispatch(SocialConnectActions.authLinkedin(payload))
});

const mapStateToProps = (state: IRootReducer) => ({
    social: state.social
});

const WithRouterSocialPage = withRouter(SocialPage);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterSocialPage);
