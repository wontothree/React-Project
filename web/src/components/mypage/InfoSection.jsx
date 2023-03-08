import EditButton from "./EditButton";
import TextBox from "./TextBox";
import React, { useContext } from "react";
import { dataStateContext, dataDispatchContext } from "../../App.jsx";
import { useState } from "react";
import "./infoSection.css";
import { useEffect } from "react";

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
          // it 이라는 이름으로 많은 곳에서 사용하고 계신 것 같아요. 함수의 매개변수도 명확한 이름을 사용하면 가독성이 좋아지니
          // it 보다 명확한 이름을 사용하시는 것도 좋을것 같아요.
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
              <span>{it}</span>
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
              {/* TextBox 컴포넌트에서는 TextBox라는 className으로 스타일링만 해주고 있는것으로 보입니다.
              TextBox를 컴포넌트로 분리한 의도가 TextBox 다양한 파일에서 사용될 것 같아서 미리 분리하신 것 같아요!
              현재 mypage 폴더에 있는 jsx 파일들 중에서는 TextBox가 InfoSection 파일에서만 사용되고 있습니다.
              <TextBox name={it}/>
              <span className='TextBox'>{it}</span>
              현재 코드를 보면 두가지가 똑같은 역할입니다. TextBox가 더 복잡해지면 분리해도 되겠지만 지금처럼
              미리 분리하는 일은 소프트웨어 개발 원칙 중 YAGNI에 어긋난다고도 볼 수 있습니다.
              요약하면 컴포넌트를 분리하는 일은 미리 하는것 보다는 정말 필요해졌을때 하는것을 추천드립니다!! */}
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
