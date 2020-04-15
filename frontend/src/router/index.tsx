import React, { Component, Suspense } from "react";
import { Router, Route, Switch, RouteProps } from "react-router-dom";
import { history } from "../redux/store";
import Fallback from "../components/common/fallback";
import {connect} from "react-redux";
import {IRootState} from "../redux/reducers/state";
import {IAuth} from "../types";

const LoginPage = React.lazy(() => import("../pages/auth/Login"));
const SignUpPage = React.lazy(() => import("../pages/auth/SignUp"));
const PasswordRestorePage = React.lazy(() =>
  import("../pages/auth/PasswordRestorePage")
);
const HomePage = React.lazy(() => import("./../pages/home"));

interface IMainRouterProps extends RouteProps {
  auth: IAuth,
}

function MainRouter(props: IMainRouterProps) {
    return (
      <Router history={history}>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/password" component={PasswordRestorePage} />
          </Switch>
        </Suspense>
      </Router>
    );
}

const mapStateToProps = (state: IRootState): IMainRouterProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);

