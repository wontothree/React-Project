import EditButton from "./EditButton";
import TextBox from "./TextBox";
import React, { useContext } from "react";
import { dataStateContext, dataDispatchContext } from "../../App.jsx";
import { useState } from "react";

const InfoSection = ({ name, className, dataType, tagType }) => {
  const dummyData = useContext(dataStateContext);
  const { onCreate, onRemove } = useContext(dataDispatchContext);
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState("");

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (e) => {
    setNewData(e.target.value);
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

  const handleDelete = (it) => () => {
    onRemove(dataType, it);
  };
  const isEditTag = () => {
    switch (tagType) {
      case "span":
        return dummyData[dataType].map((it) => {
          return (
            <>
              <span>{it}</span>{" "}
              <EditButton type={"delete"} onClick={handleDelete(it)} />
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
              <EditButton type={"delete"} onClick={handleDelete(it)} />
            </>
          );
        });
      case "TextBox":
        return dummyData[dataType].map((it) => {
          return (
            <>
              <TextBox name={it} />
              <EditButton type={"delete"} onClick={handleDelete(it)} />
            </>
          );
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
            <EditButton type={"save"} onClick={toggleIsEdit} />
            <textarea onChange={handleChange}></textarea>
            <EditButton
              type={"append"}
              onClick={() => {
                onCreate(dataType, newData);
                setNewData("");
              }}
            />
          </header>
          <section>{isEditTag()}</section>
        </div>
      ) : (
        <div className={className}>
          <header>
            <span>{name}</span>
            <EditButton type={"edit"} onClick={toggleIsEdit} />
          </header>
          <section>{tag()}</section>
        </div>
      )}
    </>
  );
};

export default InfoSection;
