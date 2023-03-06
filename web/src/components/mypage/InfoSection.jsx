import EditButton from "./EditButton";
import TextBox from "./TextBox";
import React, { useContext } from "react";
import { dataStateContext, dataDispatchContext } from "../../App.jsx";
import { useState } from "react";
import "./infoSection.css";

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
            <div className="elements">
              <span>{it}</span>{" "}
              <EditButton type={"delete"} onClick={handleDelete(it)} />
            </div>
          );
        });
      case "a":
        return dummyData[dataType].map((it) => {
          return (
            <div className="elements">
              <a href={it} target="_blank" rel="noopener noreferrer">
                {it}
              </a>
              <EditButton type={"delete"} onClick={handleDelete(it)} />
            </div>
          );
        });
      case "TextBox":
        return dummyData[dataType].map((it) => {
          return (
            <div className="elements">
              <TextBox name={it} />
              <EditButton type={"delete"} onClick={handleDelete(it)} />
            </div>
          );
        });
      default:
        return;
    }
  };

  return (
    <>
      {isEdit ? (
        <div className="InfoSection">
          <header>
            <span className="title">{name}</span>
            <EditButton type={"save"} onClick={toggleIsEdit} />
          </header>
          <hr />
          <section className="infos">
            {isEditTag()}
            <>
              <textarea onChange={handleChange}></textarea>
              <EditButton
                type={"append"}
                onClick={() => {
                  onCreate(dataType, newData);
                  setNewData("");
                }}
              />
            </>
          </section>
        </div>
      ) : (
        <div className="InfoSection">
          <header>
            <span className="title">{name}</span>
            <EditButton type={"edit"} onClick={toggleIsEdit} />
          </header>
          <br />
          <section>{tag()}</section>
        </div>
      )}
    </>
  );
};

export default InfoSection;
