import EditButton from "./EditButton";
import TextBox from "./TextBox";
import React, { useContext } from "react";
import { dataStateContext } from "../../App.jsx";
import { useState } from "react";

const InfoSection = ({ name, className, dataType, tagType }) => {
  const dummyData = useContext(dataStateContext);
  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const tag = () => {
    switch (tagType) {
      case "span":
        return dummyData[dataType].map((it) => {
          return <span>{it}</span>;
        });
      case "a":
        return dummyData[dataType].map((it) => {
          return (
            <a href={it} target="_blank" rel="noopener noreferrer">
              {it}
            </a>
          );
        });
      case "TextBox":
        return dummyData[dataType].map((it) => {
          return <TextBox name={it} />;
        });
      default:
        return;
    }
  };

  const isEditTag = () => {
    switch (tagType) {
      case "span":
        return dummyData[dataType].map((it) => {
          return (
            <>
              <span>{it}</span> <EditButton type={"delete"} />
            </>
          );
        });
      case "a":
        return dummyData[dataType].map((it) => {
          return (
            <>
              <a href={it} target="_blank" rel="noopener noreferrer">
                {it}
              </a>
              <EditButton type={"delete"} />
            </>
          );
        });
      case "TextBox":
        return dummyData[dataType].map((it) => {
          return <TextBox name={it} />;
        });
      default:
        return;
    }
  };

  return (
    <>
      {isEdit ? (
        <div className={className}>
          <header>
            <span>{name}</span>
            <EditButton type={"save"} data={isEdit} onClick={toggleIsEdit} />
          </header>
          <section>{isEditTag()}</section>
        </div>
      ) : (
        <div className={className}>
          <header>
            <span>{name}</span>
            <EditButton type={"edit"} data={isEdit} onClick={toggleIsEdit} />
          </header>
          <section>{tag()}</section>
        </div>
      )}
    </>
  );
};

export default InfoSection;
