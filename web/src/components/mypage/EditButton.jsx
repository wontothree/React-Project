import React from "react";
import { useEffect } from "react";
import "./editButton.css";

const types = {
  append: "추가",
  edit: "수정",
  delete: "삭제",
  save: "저장",
};

const EditButton = ({ type, onClick }) => {
  return (
    <>
      <button className={`${type}Button`} onClick={onClick}>
        {types[type]}
      </button>
    </>
  );
};

EditButton.defaultProps = {
  type: "edit",
};

export default EditButton;
