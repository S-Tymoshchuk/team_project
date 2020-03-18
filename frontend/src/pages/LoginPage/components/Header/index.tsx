import React from "react";

//Styles
import "./styles.scss";

//............................

export const Header = () => {
  //Render
  return (
    <div className="header">
      <div className="header__content">
        <span>Don't have an account ?</span>
        <a>Sing Up</a>
      </div>
    </div>
  );
};
