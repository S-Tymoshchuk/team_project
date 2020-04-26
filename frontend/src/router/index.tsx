import React, { Component, Suspense } from 'react';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../redux/store';
import Fallback from '../components/common/fallback';
import {connect} from "react-redux";
import {IRootReducer} from "../redux/reducers/state";
import {IAuth} from "../types/auth";

const HomePage = React.lazy(() => import('../pages/home'));
const LoginPage = React.lazy(() => import('../pages/authPages/LoginPage'));
const SignUpPage = React.lazy(() => import('../pages/authPages/SignUpPage'));
const RecoveryPassword = React.lazy(() => import('../pages/authPages/RecoveryPassword'));
const SignUpSuccess = React.lazy(() => import('../components/auth/signUpSucsess'));
const RecoveryPasswordSuccess = React.lazy(() => import('../components/auth/signUpSucsess'));

interface IMainRouterProps extends RouteProps {
    auth: IAuth,
}

function MainRouter(props: IMainRouterProps) {
        return (
            <Router history={history}>
                <Suspense fallback={<Fallback />}>
                    <Switch>
                        {/*<Route path="/" component={HomePage} />*/}
                        <Route exact path="/" component={LoginPage} />
                        <Route exact path="/signup" component={SignUpPage} />
                        <Route exact path="/recovery_password" component={RecoveryPassword} />
                        <Route exact path="/recovery_password_success" component={RecoveryPasswordSuccess} />
                        <Route exact path="/signup_success" component={SignUpSuccess} />
                    </Switch>
                </Suspense>
            </Router>
        );
}

const mapStateToProps = (state: IRootReducer): IMainRouterProps => ({
    auth: state.auth
});

export default connect(mapStateToProps)(MainRouter)