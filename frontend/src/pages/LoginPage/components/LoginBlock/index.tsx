import React from "react";

//Components
import { SocialBlock } from "../SocialBlock/index";
import { SimpleInput } from "../../../../components/ui/SimpleInput";
import { Button } from "antd";
//

//Static
import { socialLinks } from "./data";
//Styles
import "./styles.scss";

//............................

// const changeHandler = (name, value) => {
//   setInputValue(prev => {
//     return {
//       ...prev,
//       [name]: value
//     };
//   });
// };

export const LoginBlock = () => {
  //Render
  return (
    <div className="login-block">
      <p>Log in</p>

      <div className="login-block__input-bar">
        <span>E-mail</span>
        {/* <SimpleInput /> */}
        <span>Password</span>
        {/* <SimpleInput /> */}
      </div>
      <div className="login-block__button-bar">
        <Button type="primary">Primary</Button>
        <Button type="link">Forgot your password?</Button>
      </div>
      <p>or</p>
      <div className="login-block__social-bar">
        <p>Log In with:</p>
        <SocialBlock links={socialLinks} />
      </div>
    </div>
  );
};
//...................................
// Type of props

// SimpleInput.propTypes = {
//   changeHandler: types.func.isRequired,
//   placeholder: types.string,
//   value: types.string.isRequired,
//   name: types.string.isRequired,
//   icon: types.node
// };

// Default value for props

// SimpleInput.defaultProps = {
//   placeholder: "Enter",
//   value: "",
//   type: "text"
// };
