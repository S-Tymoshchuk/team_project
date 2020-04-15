import React from "react";
import "./styles.scss";

// Components

import { Header } from "./components/Header";
import SignUpBlock from "./components/SignUpBlock";

const SignUpPageContainer = () => {
  return (
    <div className="sign-page">
      <Header />
      <SignUpBlock />
    </div>
  );
};

export default SignUpPageContainer;
