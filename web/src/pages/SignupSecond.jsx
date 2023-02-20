import React, { useState, useEffect } from 'react'

import Button from '../components/Button';
import Formbox from '../components/Formbox';
import '../components/signup.css'


const SignupSecond = () => {
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

    
  const isValidSignup = 1


  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>회원가입2</h1>
            <form>
              
              <form method="post" enctype="multipart/form-data">
                <div class="button">
                  <label for="chooseFile">프로필 사진</label>
                  <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"/>
                </div>
              </form>
              <Formbox htmlFor="userPicture" name="프로필 사진" type="file" id="userPicture" titme="프로필 사진" onChange={onChangeInput} />
              <Formbox htmlFor="userName" name="학교 / 캠퍼스 / 학과 / 학번" type="text" id="userName" title="이름" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="프로젝트 경험 / 실무 경험" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="수상 경력 / 자격증" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="기술 스텍" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="자기소개" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="희망 직무" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Formbox htmlFor="userPhone" name="기술 블로그 / 깃허브" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
              <Button id="submitRegister" condition={isValidSignup} disabled={!isValidSignup}/>
            </form>
        </section>
    </div>
  )
}

export default SignupSecond