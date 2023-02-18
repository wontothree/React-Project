import React, { useState, useEffect } from 'react'

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

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserSignupData((userSignupData) => ({
        ...userSignupData,
        [id]: value,
    }));
  };

  const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

  useEffect(() => {
    const isRegexEmail = emailRegex.test(userSignupData.userEmail);

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
            isRegexPasswordMessage: "위험(영문자, 숫자, 특수문자 조합/ 8~20자)"
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
    const isRegexPasswordConfirm = userSignupData.userPassword === userSignupData.userPasswordConfirm;
    
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
    const isRegexName = userSignupData.userName.length > 1 && userSignupData.userName.length < 6;

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

  const isValidSignup = (emailRegex.test(userSignupData.userEmail) && passwordRegex.test(userSignupData.userPassword) && userSignupData.userPassword===userSignupData.userPasswordConfirm && userSignupData.userName);
    
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
                <div className="formbox">
                    <label htmlFor="userEmail">이메일*</label> 
                    <input type="email" id="userEmail" onChange={onChangeInput} maxLength='30' autoComplete='off' required></input>
                    {userSignupData.userEmail.length > 0 &&<span className={`message ${isRegexStatus.isRegexEmail ? 'success' : 'error'}`}>{isRegexMessage.isRegexEmailMessage}</span>}
                </div>

                <div className="formbox">
                    <label htmlFor="userPassword">비밀번호*</label>
                    <input type="password" id="userPassword" title="비밀번호 (숫자, 영문자, 특수문자 조합으로 8자리 이상)" onChange={onChangeInput} maxLength='20' autoComplete='off' required></input>
                    {(userSignupData.userPassword.length > 0 &&<span className={`message ${isRegexStatus.isRegexPassword ? 'success' : 'error'}`}>{isRegexMessage.isRegexPasswordMessage}</span>)}
                </div>

                <div className="formbox">
                    <label htmlFor="userPasswordConfirm">비밀번호 재확인*</label>
                    <input type="password" id="userPasswordConfirm" title="비밀번호 확인" onChange={onChangeInput} maxLength='20' autoComplete='off' required></input>
                    {userSignupData.userPasswordConfirm.length > 0 && (<span className={`message ${isRegexStatus.isRegexPasswordConfirm ? 'success' : 'error'}`}>{isRegexMessage.isRegexPasswordConfirmMessage}</span>)}
                </div>

                <div className="formbox">
                    <label htmlFor="userName">이름*</label>
                    <input type="text" id="userName" onChange={onChangeInput} maxLength="5" autoComplete='off' required></input>
                    {userSignupData.userName.length > 0 && <span className={`message ${isRegexStatus.isName ? 'success' : 'error'}`}>{isRegexMessage.isRegexNameMessage}</span>}
                </div>

                <div className="formbox">
                    <label htmlFor="userAge">나이</label> 
                    <input type="number" id="userAge" autoComplete='off' onChange={onChangeInput}></input>
                </div>

                <div className="btn">   
                    <button type="submit" className="submitRegister" onClick={(e) => alert_(e)} disabled={!isValidSignup}>가입하기</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Signup

