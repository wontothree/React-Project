import React, { useState, useEffect } from 'react'

import Button from '../components/Button';
import Formbox from '../components/Formbox';
import '../components/signup.css'

const Signup = () => {
  const [userSignupData, setUserSignupData] = useState({
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
    userName: '',
    userAge: '',
  });

  const [isRegexMessage, setIsRegexMessage] = useState({
    isRegexEmailMessage: '',
    isRegexPasswordMessage: '',
    isRegexPasswordConfirmMessage: '',
    isRegexNameMessage: '',
  });

  const [isRegexStatus, setIsRegexStatus] = useState({
    isRegexEmail: false,
    isRegexPassword: false,
    isRegexPasswordConfirm: false,
    isRegexName: false,
  });

  const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
  const isRegexEmail = emailRegex.test(userSignupData.userEmail);
  const isRegexPasswordConfirm = userSignupData.userPassword === userSignupData.userPasswordConfirm;
  const isRegexName = userSignupData.userName.length > 1 && userSignupData.userName.length < 6;
  const isValidSignup = (emailRegex.test(userSignupData.userEmail) && passwordRegex.test(userSignupData.userPassword) && userSignupData.userPassword===userSignupData.userPasswordConfirm && userSignupData.userName);

  useEffect(() => {
    setIsRegexMessage((prev) => ({
      ...prev,
      isRegexEmailMessage: isRegexEmail ? '' : "올바른 이메일 형식이 아닙니다."
    }));
    setIsRegexStatus((prev) => ({
      ...prev,
      isRegexEmail,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userEmail])

  useEffect(() => {
    if (!passwordRegex.test(userSignupData.userPassword)) {
        setIsRegexMessage({
            ...isRegexMessage,
            isRegexPasswordMessage: "위험 (영문자, 숫자, 특수문자 조합/ 8~20자)"
        })
        setIsRegexStatus({
            ...isRegexStatus,
            isRegexPassword: false,
        })
      } else {
        setIsRegexMessage({
            ...isRegexMessage,
            isRegexPasswordMessage: "안전",
        })
        setIsRegexStatus({
            ...isRegexStatus,
            isRegexPassword: true,
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userPassword])

  useEffect(() => {
    setIsRegexMessage((prev) => ({
      ...prev,
      isRegexPasswordConfirmMessage: isRegexPasswordConfirm ? '' : "비밀번호가 일치하지 않습니다."
    }));
    setIsRegexStatus((prev) => ({
      ...prev,
      isRegexPasswordConfirm,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userPasswordConfirm])

  useEffect(() => {
    setIsRegexMessage((prev) => ({
      ...prev,
      isRegexNameMessage: isRegexName ? '' : "2~5자"
    }))
    setIsRegexStatus((prev) => ({
      ...prev,
      isRegexName,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userName])
  
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserSignupData((userSignupData) => ({
        ...userSignupData,
        [id]: value,
    }));
  };
  
  function alert_(e) {
      e.preventDefault();
      alert(`${userSignupData.userName}님 환영합니다!`);
      console.log(userSignupData);
  };
  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>회원가입</h1>
            <form>
                <Formbox htmlFor="userEmail" name="이메일*" type="email" id="userEmail" title="이메일" onChange={onChangeInput} maxLength='30' condition={userSignupData.userEmail.length > 0} className={`message ${isRegexStatus.isRegexEmail ? 'success' : 'error'}`} message={isRegexMessage.isRegexEmailMessage}/>
                <Formbox htmlFor="userPassword" name="비밀번호*" type="password" id="userPassword" title="비밀번호(숫자, 영문자, 특수문자 조합/ 8~20자)" onChange={onChangeInput} maxLength='20' condition={userSignupData.userPassword.length > 0} className={`message ${isRegexStatus.isRegexPassword ? 'success' : 'error'}`} message={isRegexMessage.isRegexPasswordMessage}/>
                <Formbox htmlFor="userPasswordConfirm" name="비밀번호 확인*" type="password" id="userPasswordConfirm" title="비밀번호 확인" onChange={onChangeInput} maxLength='20' condition={userSignupData.userPasswordConfirm.length > 0} className={`message ${isRegexStatus.isRegexPasswordConfirm ? 'success' : 'error'}`} message={isRegexMessage.isRegexPasswordConfirmMessage}/>
                <Formbox htmlFor="userName" name="이름*" type="text" id="userName" title="이름" onChange={onChangeInput} maxLength="10" condition={userSignupData.userName.length > 0} className={`message ${isRegexStatus.isName ? 'success' : 'error'}`} message={isRegexMessage.isRegexNameMessage}/>
                <Formbox htmlFor="userAge" name="생년월일" type="number" id="userAge" title="생년월일(6자)" onChange={onChangeInput}/>
                <Button id="submitRegister" onClick={(e)=>alert_(e)} href="/signupsecond" condition={isValidSignup} disabled={!isValidSignup}/>
            </form>
        </section>
    </div>
  )
}

export default Signup

