import React from "react";
import "./styles.scss";

// Components

import { Header } from "./components/Header";
import { SignUpBlock } from "./components/SignUpBlock";

const SignUpPage = () => {
  return (
    <div className="sign-page">
      <Header />
      <SignUpBlock />
    </div>
  );
};

export default SignUpPage;
