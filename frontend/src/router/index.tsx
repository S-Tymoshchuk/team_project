import React, { Component, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../redux/store";
import Fallback from "../components/common/fallback";

const LoginPage = React.lazy(() => import("../pages/LoginPage"));

export default class MainRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
