import React, { useState } from "react";

//Components
import { Button } from "antd";

//Static
// import { socialLinks } from "./data";

//Styles
import classNames from "classnames";
import "./styles.scss";

//............................
interface IButton {
  isActive: boolean;
}

export const StatisticsBlock: IButton = ({ isActive }: JSX.Element) => {
  //Modify
  const modify = classNames({
    "ant-btn": true,
    "--active": isActive
  });

  const [ButtonIsActive, toggleButton] = useState(false);
  const toggleButtonHandler = () => {
    toggleButton(!ButtonIsActive);

    console.log("111");
  };

  // enterIconLoading = () => {
  //   this.setState({ isActive: true });
  // };

  //Render
  return (
    <div className="statistics-block">
      <span>Statistics</span>
      <div className="statistics-block__menu">
        <Button
          type="default"
          onClick={e => e.preventDefault()}
          className={`ant-btn${modify}`}
        >
          Posts
        </Button>
        <Button type="default">Calendar</Button>
        <Button type="default">Statistics</Button>
        <Button type="default">Archive</Button>
      </div>
    </div>
  );
};
