import React, { useRef } from "react";
import { Link } from "react-router-dom";

//Components
// import { SocialBlock } from "../SocialBlock/index";
// import { SimpleInput } from "../../../../components/ui/SimpleInput";
import { Button } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
//

//Static

//Styles
import "./styles.scss";

//............................

export const RestoreBlock: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
    }
  };

  //Render
  return (
    <div className="restore-block">
      <p>Forgot Your Password?</p>

      <form action="http://localhost:3000/" method="post">
        <div className="restore-block__input-bar">
          <span>E-mail</span>
          <div>
            <input
              onKeyPress={keyPressHandler}
              ref={ref}
              placeholder="enter E-mail"
            ></input>
          </div>
        </div>
        <div className="restore-block__button-bar">
          <Button type="primary">Reset</Button>
          <Button href="/login">Back</Button>
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
