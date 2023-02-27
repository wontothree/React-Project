import { UserContext } from "../App";
import React, { useState, useEffect, useContext } from "react";

import Button from "../components/Button";
import Formbox from "../components/Formbox";

import "../components/signupsecond.css";

const SignupSecond = () => {
  // const [userSignupData, setUserSignupData] = useState({
  //   userEmail: "",
  //   userPassword: "",
  //   userPasswordConfirm: "",
  //   userName: "",
  //   userBirthdateYear: "",
  //   userBirthdateMonth: "",
  //   userBirthdateDay: "",
  //   userSex: "",
  //   userPhone: "",

  //   userPicture: "",
  //   userNickname: "",
  //   userCollege: "",
  //   userSkill: "",
  //   userJob: "",
  //   userExperience: "",
  //   userCareer: "",
  //   userIntroduction: "",
  //   userBlog: "",
  // });
  const { user, setUser } = useContext(UserContext);

  const onChangeInput = e => {
    const { id, value } = e.target;
    setUser(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    console.log(user);
  });

  const isValidSignup = 0;

  return (
    <div className="body">
      <section className="signup-form">
        <h1 style={{ size: 20 }}>회원가입2</h1>
        <form method="post" encType="multipart/form-data">
          <div className="userPicture">
            <label htmlFor="userPicture">프로필 사진*</label>
            {user.userPicture !== "" ? (
              <div>
                <img src={user.userPicture} alt="user" />
              </div>
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
            onChange={onChangeInput}
          />
          <div className="skill-form">
            <label htmlFor="userSkill">기술 스택*</label>
            <br></br>
            <button
              type="button"
              id="userSkill"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
              onClick={() => console.log("1")}
            >
              Html / CSS
            </button>
            <button
              type="button"
              id="userSkill"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              Javascript
            </button>
            <button
              type="button"
              id="userSkill"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              Typescript
            </button>
            <button
              type="button"
              id="userSkill"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              Java
            </button>
            <button
              type="button"
              id="userSkill"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              Python
            </button>
            <button
              type="button"
              id="userSkill"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              PHP
            </button>
            <button
              type="button"
              id="userSkill"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              Ruby
            </button>
            <button
              type="button"
              id="userSkill"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              Go
            </button>
            <button
              type="button"
              id="userSkill"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              Rust
            </button>
            <button
              type="button"
              id="userSkill"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              C
            </button>
            <button
              type="button"
              id="userSkill"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              C++
            </button>
            <button
              type="button"
              id="userSkill"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              C#
            </button>
          </div>
          <div className="job-form">
            <label htmlFor="userJob">현 직군 / 희망 직무*</label>
            <br></br>
            <button
              type="submit"
              id="userJob"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              프론트엔드
            </button>
            <button
              type="submit"
              id="userJob"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              백엔드
            </button>
            <button
              type="submit"
              id="userJob"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              풀스택
            </button>
            <button
              type="submit"
              id="userJob"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              데이터베이스
            </button>
            <button
              type="submit"
              id="userJob"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              머신러닝
            </button>
            <button
              type="submit"
              id="userJob"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              모바일 앱
            </button>
            <button
              type="submit"
              id="userJob"
              title="프론트엔드"
              className="frontend"
              onChange={onChangeInput}
            >
              QA엔지니어
            </button>
            <button
              type="submit"
              id="userJob"
              title="백엔드"
              className="backend"
              onChange={onChangeInput}
            >
              시스템엔지니어
            </button>
            <button
              type="submit"
              id="userJob"
              title="풀스택"
              className="fullStack"
              onChange={onChangeInput}
            >
              보안엔지니어
            </button>
          </div>
          <Formbox
            htmlFor="userExperience"
            name="프로젝트 경험 / 실무 경험"
            type="text"
            title="경험"
            onChange={onChangeInput}
          />
          <Formbox
            htmlFor="userCareer"
            name="수상 경력 / 자격증"
            type="text"
            title="경력"
            onChange={onChangeInput}
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
            onChange={onChangeInput}
          />
          <Button
            id="submitRegister"
            condition={isValidSignup}
            disabled={!isValidSignup}
          />
        </form>
      </section>
    </div>
  );
};

export default SignupSecond;
