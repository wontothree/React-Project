import React from "react";
import "./textBox.css";

const TextBox = ({ name }) => {
  return (
    <>
      <span className="TextBox">{name}</span>
    </>
  );
};

export default TextBox;
