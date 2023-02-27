import EditButton from "./EditButton";
import TextBox from "./TextBox";
import React, { useContext } from "react";
import { dataStateContext } from "../../App.jsx";

const InfoSection = ({ name, className, buttonType, dataType, tagType }) => {
  const dummyData = useContext(dataStateContext);

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

  return (
    <>
      <div className={className}>
        <header>
          <span>{name}</span>
          <EditButton type={buttonType} />
        </header>
        <section>{tag()}</section>
      </div>
    </>
  );
};

export default InfoSection;
