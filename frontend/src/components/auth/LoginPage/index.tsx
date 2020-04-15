import React from "react";
import "./styles.scss";
// import Button from "antd/es/button";
// Components
import { Header } from "./components/Header";
import LoginContainer from "../../../containers/auth/login";


const LoginPageContainer = () => {
  return (
    <div className="login-page">
      <Header />
      <LoginContainer />
    </div>
  );
};

export default LoginPageContainer;
