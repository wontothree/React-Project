import React, { useState, useEffect } from 'react'

import Button from '../components/Button';
import Formbox from '../components/Formbox';

import '../components/signupsecond.css'



const Test = () => {
  const [userSignupData, setUserSignupData] = useState({
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
    userName: '',
    userBirthdateYear: '',
    userBirthdateMonth: '',
    userBirthdateDay: '',
    userSex: '',
    userPhone: '',

    userPicture: '',
    userNickname: '',
    userCollege: '',
    userSkill: '',
    userJob: '',
    userExperience: '',
    userCareer: '',
    userIntroduction: '',
    userBlog: '',
  });

  const onChangeInput = (e) => {
      const { id, value } = e.target;
      setUserSignupData((prev) => ({
          ...prev,
          [id]: value,
      }));
  };

  useEffect(() => {
      console.log(userSignupData)
  })

  const isValidSignup = 0

  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>회원가입2</h1>
            <form method="post" encType="multipart/form-data">
              <div className="userPicture">
                <label htmlFor="userPicture">프로필 사진*</label>
                <input type="file" id="userPicture" name="chooseFile" accept="image/*" title="프로필 사진" onChange={onChangeInput}/>
              </div>
              <Formbox htmlFor="userNickname" name="닉네임*" type="text" title="닉네임" onChange={onChangeInput}/>
              <Formbox htmlFor="userCollege" name="학력* (학교/캠퍼스/학과/학번)" type="text" title="학력" onChange={onChangeInput}/>
              <div className="skill-form">
                <label htmlFor="userSkill">기술 스택*</label>
                <br></br>
                <button type="button" id="userSkill" title="프론트엔드" className="frontend" onChange={onChangeInput} onClick={() => console.log("1")}>Html / CSS</button>
                <button type="button" id="userSkill" title="백엔드" className="backend" onChange={onChangeInput}>Javascript</button>
                <button type="button" id="userSkill" title="풀스택" className="fullStack" onChange={onChangeInput}>Typescript</button>
              </div>
              <Button id="submitRegister" condition={isValidSignup} disabled={!isValidSignup}/>
            </form>
        </section>
    </div>
  )
}

export default Test