import { UserContext, dataDispatchContext } from "../App";
import React, { useState, useEffect, useContext } from "react";

import Button from "../components/Button";
import Formbox from "../components/Formbox";
import "../components/signupsecond.css";
import { useNavigate } from "react-router-dom";

const SignupSecond = () => {
  const { user, setUser } = useContext(UserContext);
  const { onInit } = useContext(dataDispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onChangeObject = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [id]: [value],
    }));
  };

  const onChangeButton = (e) => {
    const { id, title } = e.target;
    setUser((prev) => ({
      ...prev,
      [id]: [...user[id], title],
    }));
  };

  const isValidSignup = 1;

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    onInit(user);
    navigate("/mypage");
  };

  return (
    <div className="body">
      <section className="signup-form">
        <h1 style={{ size: 20 }}>회원가입2</h1>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleButtonSubmit}
        >
          <div className="userPicture">
            <label htmlFor="userPicture">프로필 사진*</label>
            {user.userPicture !== "" ? (
              <>
                <div>
                  <img src={user.userPicture} alt="user" />
                </div>
                <Formbox
                  htmlFor="userNickname"
                  name="닉네임*"
                  type="text"
                  title="닉네임"
                  onChange={onChangeInput}
                />
                <Formbox
                  htmlFor="userCollege"
                  name="학력* (학교/캠퍼스/학과/학번)"
                  type="text"
                  title="학력"
                  onChange={onChangeObject}
                />
                <div className="skill-form">
                  <label htmlFor="userSkills">기술 스택*</label>
                  <br></br>
                  <button
                    type="button"
                    id="userSkill"
                    title="Html/Css"
                    className="frontend"
                    onClick={onChangeButton}
                  >
                    Html / Css
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Javascript"
                    className="backend"
                    onClick={onChangeButton}
                  >
                    Javascript
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Typescript"
                    className="fullStack"
                    onClick={onChangeButton}
                  >
                    Typescript
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Java"
                    className="frontend"
                    onClick={onChangeButton}
                  >
                    Java
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Python"
                    className="backend"
                    onClick={onChangeButton}
                  >
                    Python
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="PHP"
                    className="fullStack"
                    onClick={onChangeButton}
                  >
                    PHP
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Ruby"
                    className="frontend"
                    onClick={onChangeButton}
                  >
                    Ruby
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Go"
                    className="backend"
                    onClick={onChangeButton}
                  >
                    Go
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="Rust"
                    className="fullStack"
                    onClick={onChangeButton}
                  >
                    Rust
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="C"
                    className="frontend"
                    onClick={onChangeButton}
                  >
                    C
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="C++"
                    className="backend"
                    onClick={onChangeButton}
                  >
                    C++
                  </button>
                  <button
                    type="button"
                    id="userSkill"
                    title="C#"
                    className="fullStack"
                    onClick={onChangeButton}
                  >
                    C#
                  </button>
                </div>
                <div className="job-form">
                  <label htmlFor="userJob">현 직군 / 희망 직무*</label>
                  <br></br>
                  <button
                    type="button"
                    id="userJob"
                    title="frontend"
                    className="frontend"
                    onClick={onChangeButton}
                  >
                    프론트엔드
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="backend"
                    className="backend"
                    onClick={onChangeButton}
                  >
                    백엔드
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="fullStack"
                    className="fullStack"
                    onClick={onChangeButton}
                  >
                    풀스택
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="database"
                    className="database"
                    onClick={onChangeButton}
                  >
                    데이터베이스
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="ML"
                    className="machine learning"
                    onClick={onChangeButton}
                  >
                    머신러닝
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="mobile app"
                    className="mobile app"
                    onClick={onChangeButton}
                  >
                    모바일 앱
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="QA engineer"
                    className="QA engineer"
                    onClick={onChangeButton}
                  >
                    QA엔지니어
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="system engineer"
                    className="system engineer"
                    onClick={onChangeButton}
                  >
                    시스템엔지니어
                  </button>
                  <button
                    type="button"
                    id="userJob"
                    title="보안엔지니어"
                    className="보안엔지니어"
                    onClick={onChangeButton}
                  >
                    보안엔지니어
                  </button>
                </div>
                <Formbox
                  htmlFor="userExperience"
                  name="프로젝트 경험 / 실무 경험"
                  type="text"
                  title="경험"
                  onChange={onChangeObject}
                />
                <Formbox
                  htmlFor="userCareer"
                  name="수상 경력 / 자격증"
                  type="text"
                  title="경력"
                  onChange={onChangeObject}
                />
                <Formbox
                  htmlFor="userIntroduction"
                  name="세 줄 자기 소개"
                  type="text"
                  title="자기소개"
                  onChange={onChangeInput}
                />
                <Formbox
                  htmlFor="userBlog"
                  name="기술 블로그 / 깃허브"
                  type="url"
                  title="블로그"
                  onChange={onChangeObject}
                />
                <Button
                  id="submitRegister"
                  condition={isValidSignup}
                  disabled={!isValidSignup}
                />
              </>
            ) : (
              <input
                type="file"
                id="userPicture"
                name="chooseFile"
                accept="image/*"
                title="프로필 사진"
                onChange={onChangeInput}
              />
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignupSecond;
