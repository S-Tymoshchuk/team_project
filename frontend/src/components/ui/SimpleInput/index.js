import types from "prop-types";
import React from "react";

// Styles

import "./styles.scss";

// ----------------

export const SimpleInput = ({
  changeHandler,
  placeholder,
  value,
  name,
  type,
  icon
}) => {
  // Render

  return (
    <div className="simple-input__wrapper">
      <input
        placeholder={placeholder}
        className="simple-input"
        onChange={changeHandler}
        value={value}
        type={type}
        autoComplete="none"
      />

      {!!icon && <div className="simple-input__icon-wrapper">{icon}</div>}
    </div>
  );
};

// ----------------

// Type of props

SimpleInput.propTypes = {
  changeHandler: types.func.isRequired,
  placeholder: types.string,
  value: types.string.isRequired,
  name: types.string.isRequired,
  icon: types.node
};

// Default value for props

SimpleInput.defaultProps = {
  placeholder: "Enter",
  value: "",
  type: "text"
};
