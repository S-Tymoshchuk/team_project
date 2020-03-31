import React, { useRef } from "react";

//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
import { Button } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
//

//Static
// import { socialLinks } from "./data";

//Styles
import "./styles.scss";

//............................

export const SignUpBlock: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
    }
  };

  //Render
  return (
    <div className="sign-block">
      <p>Sing Up</p>
      <form action="http://localhost:3000/" method="post">
        <div className="sign-block__input-bar">
          <span>Name</span>
          <div>
            <input
              onKeyPress={keyPressHandler}
              ref={ref}
              placeholder="Your Name"
            ></input>
          </div>
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
          <span>Confirm Password</span>
          <div>
            <input
              onKeyPress={keyPressHandler}
              ref={ref}
              placeholder="enter password again"
            ></input>
          </div>
        </div>
        <div className="sign-block__button-bar">
          <Button type="primary">Sing Up Now</Button>
          <p>or</p>
          <div className="sign-block__social-bar">
            <FacebookOutlined />
            <GoogleOutlined />
          </div>
        </div>
      </form>
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
