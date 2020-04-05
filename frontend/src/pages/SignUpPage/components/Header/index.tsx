import React, { Suspense } from "react";

import { Link } from "react-router-dom";
//Styles
import "./styles.scss";

//............................

export const Header = () => {
  //Render
  return (
    <div className="header">
      <div className="header__content">
        <span>Already have an account?</span>
        <Link to="/login">
          <a>Log In</a>
        </Link>
      </div>
    </div>
  );
};