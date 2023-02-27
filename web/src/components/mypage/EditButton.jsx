import React from "react";
import "./editButton.css";

const types = {
  append: "추가",
  edit: "수정",
  delete: "삭제",
};

const EditButton = ({ type }) => {
  return (
    <>
      <button className="EditButton">{types[type]}</button>
    </>
  );
};

EditButton.defaultProps = {
  type: "edit",
};

export default EditButton;
