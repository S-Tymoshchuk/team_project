import React from "react";
import "./styles.scss";
// import Button from "antd/es/button";

// Components
import { Header } from "./components/Header";
import { LoginBlock } from "./components/LoginBlock";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <LoginBlock />
    </div>
  );
};

export default LoginPage;
