import React from "react";
import "./styles.scss";
import LoginBlock from "./components/LoginBlock/index"
// import Button from "antd/es/button";
// Components
import { Header } from "./components/Header";


const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <LoginBlock />
    </div>
  );
};

export default LoginPage;
