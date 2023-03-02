import { UserContext } from "../App";
import React, { useState, useEffect, useContext } from "react";

import Button from "../components/Button";
import Formbox from "../components/Formbox";

import "../components/signupsecond.css";

const SignupSecond = () => {
  const [userSignupData, setUserSignupData] = useState({
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
    userName: "",
    userBirthdateYear: "",
    userBirthdateMonth: "",
    userBirthdateDay: "",
    userSex: "",
    userPhone: "",

    userPicture: '',
    userNickname: '',
    userCollege: '',
    userSkills: [],
    userJob: [],
    userExperience: '',
    userCareer: '',
    userIntroduction: '',
    userBlog: '',
  });

  const { user, setUser } = useContext(UserContext);

  const onChangeInput = e => {
    const { id, value } = e.target;
    setUser(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const onChangeSkillsButton = (e) => {
    const { id, title } = e.target;
    setUserSignupData((prev) => ({
        ...prev,
        [id]: [...userSignupData.userSkills, title],
    }));
  };

  const onChangeJobButton = (e) => {
    const { id, title } = e.target;
    setUserSignupData((prev) => ({
        ...prev,
        [id]: [...userSignupData.userJob, title],
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
              <>
              <div>
                <img src={user.userPicture} alt="user" />
              </div>
              <Formbox htmlFor="userNickname" name="닉네임*" type="text" title="닉네임" onChange={onChangeInput}/>
              <Formbox htmlFor="userCollege" name="학력* (학교/캠퍼스/학과/학번)" type="text" title="학력" onChange={onChangeInput}/>
              <div className="skill-form">
                <label htmlFor="userSkills">기술 스택*</label>
                <br></br>
                <button type="button" id="userSkills" title="Html/Css" className="frontend" onClick={onChangeSkillsButton}>Html / Css</button>
                <button type="button" id="userSkills" title="Javascript" className="backend" onClick={onChangeSkillsButton}>Javascript</button>
                <button type="button" id="userSkills" title="Typescript" className="fullStack" onClick={onChangeSkillsButton}>Typescript</button>
                <button type="button" id="userSkills" title="Java" className="frontend" onClick={onChangeSkillsButton}>Java</button>
                <button type="button" id="userSkills" title="Python" className="backend" onClick={onChangeSkillsButton}>Python</button>
                <button type="button" id="userSkills" title="PHP" className="fullStack" onClick={onChangeSkillsButton}>PHP</button>
                <button type="button" id="userSkills" title="Ruby" className="frontend" onClick={onChangeSkillsButton}>Ruby</button>
                <button type="button" id="userSkills" title="Go" className="backend" onClick={onChangeSkillsButton}>Go</button>
                <button type="button" id="userSkills" title="Rust" className="fullStack" onClick={onChangeSkillsButton}>Rust</button>
                <button type="button" id="userSkills" title="C" className="frontend" onClick={onChangeSkillsButton}>C</button>
                <button type="button" id="userSkills" title="C++" className="backend" onClick={onChangeSkillsButton}>C++</button>
                <button type="button" id="userSkills" title="C#" className="fullStack" onClick={onChangeSkillsButton}>C#</button>
              </div>
              <div className="job-form">
                <label htmlFor="userJob">현 직군 / 희망 직무*</label>
                <br></br>
                <button type="button" id="userJob" title="frontend" className="frontend" onClick={onChangeJobButton}>프론트엔드</button>
                <button type="button" id="userJob" title="backend" className="backend" onClick={onChangeJobButton}>백엔드</button>
                <button type="button" id="userJob" title="fullStack" className="fullStack" onClick={onChangeJobButton}>풀스택</button>
                <button type="button" id="userJob" title="database" className="database" onClick={onChangeJobButton}>데이터베이스</button>
                <button type="button" id="userJob" title="ML" className="machine learning" onClick={onChangeJobButton}>머신러닝</button>
                <button type="button" id="userJob" title="mobile app" className="mobile app" onClick={onChangeJobButton}>모바일 앱</button>
                <button type="button" id="userJob" title="QA engineer" className="QA engineer" onClick={onChangeJobButton}>QA엔지니어</button>
                <button type="button" id="userJob" title="system engineer" className="system engineer" onClick={onChangeJobButton}>시스템엔지니어</button>
                <button type="button" id="userJob" title="보안엔지니어" className="보안엔지니어" onClick={onChangeJobButton}>보안엔지니어</button>
              </div>
              <Formbox htmlFor="userExperience" name="프로젝트 경험 / 실무 경험" type="text" title="경험" onChange={onChangeInput}/>
              <Formbox htmlFor="userCareer" name="수상 경력 / 자격증" type="text"  title="경력" onChange={onChangeInput}/>
              <Formbox htmlFor="userIntroduction" name="세 줄 자기 소개" type="text" title="자기소개" onChange={onChangeInput}/>
              <Formbox htmlFor="userBlog" name="기술 블로그 / 깃허브" type="url" title="블로그" onChange={onChangeInput}/>
              <Button id="submitRegister" condition={isValidSignup} disabled={!isValidSignup}/></>
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
