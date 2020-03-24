import React, { useRef } from "react";

//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
import { Button } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
//

//Static
// import { socialLinks } from "./data";
//Styles
import "./styles.scss";

//............................

export const LoginBlock: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
    }
  };

  //Render
  return (
    <div className="login-block">
      <p>Log in</p>

      <div className="login-block__input-bar">
        <span>E-mail</span>
        <div>
          <input
            onKeyPress={keyPressHandler}
            ref={ref}
            placeholder="enter E-mail"
          ></input>
        </div>
        <span>Password</span>
        <div>
          <input
            onKeyPress={keyPressHandler}
            ref={ref}
            placeholder="enter password"
          ></input>
        </div>
        {/* <SimpleInput /> */}
      </div>
      <div className="login-block__button-bar">
        <Button type="primary">Log In Now</Button>
        <Link to="/password">
          <Button type="link">Forgot your password?</Button>
        </Link>
      </div>
      <p>or</p>
      <div className="login-block__social-bar">
        <p>Log In with:</p>
        <FacebookOutlined />
        <GoogleOutlined />
        {/* <SocialBlock links={socialLinks} /> */}
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
