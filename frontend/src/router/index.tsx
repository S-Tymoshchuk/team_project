import React, { Component, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../redux/store";
import Fallback from "../components/common/fallback";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const SignUpPage = React.lazy(() => import("../pages/SignUpPage"));
const PasswordRestorePage = React.lazy(() =>
  import("../pages/PasswordRestorePage")
);
const CreatePostPage = React.lazy(() => import("../pages/CreatePostPage"));

export default class MainRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/password" component={PasswordRestorePage} />
            <Route path="/create" component={CreatePostPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
