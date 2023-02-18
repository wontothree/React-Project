import React, { useState, useEffect } from 'react'

import '../components/signup.css'

const Signup = () => {

  const [userSignupData, setUserSignupData] = useState({
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
    userName: '',
  });

  const [userAge, setAge] = useState('')

  const [isRegexMessage, setIsRegexMessage] = useState({
    emailMessage: '',
    passwordMessage: '',
    passwordConfirmMessage: '',
    nameMessage: '',
  });

  const [isRegex, setIsRegex] = useState({
    isRegexEmail: false,
    isRegexPassword: false,
    isRegexPasswordConfirm: false,
    isRegexName: false,
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserSignupData({
        ...userSignupData,
        [id]: value,
        // userAge: userAge
    })
  }

  useEffect(() => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if (!emailRegex.test(userSignupData.userEmail)) {
        setIsRegexMessage({
            ...isRegexMessage,
            emailMessage: "올바른 이메일 형식이 아닙니다.",
        })
        setIsRegex({
            ...isRegex,
            isEmail: false,
        })
    } else {
        setIsRegexMessage({
            ...isRegexMessage,
            emailMessage: ''
        })
        setIsRegex({
            ...isRegex,
            isEmail: true,
        })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userEmail])

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

    if (!passwordRegex.test(userSignupData.userPassword)) {
        setIsRegexMessage({
            ...isRegexMessage,
            passwordMessage: "위험(영문자, 숫자, 특수문자 조합/ 8~20자)"
        })
        setIsRegex({
            ...isRegex,
            isPassword: false,
        })
      } else {
        setIsRegexMessage({
            ...isRegexMessage,
            passwordMessage: "안전",
        })
        setIsRegex({
            ...isRegex,
            isPassword: true,
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userPassword])

  useEffect(() => {
    if (userSignupData.userPassword === userSignupData.userPasswordConfirm) {
      setIsRegexMessage({
        ...isRegexMessage,
        passwordConfirmMessage: '',
      })
      setIsRegex({
        ...isRegex,
        isPasswordConfirm: false,
      })
    } else {
      setIsRegexMessage({
        ...isRegexMessage,
        passwordConfirmMessage: "비밀번호가 일치하지 않습니다."
      })
      setIsRegex({
        ...isRegex,
        isPasswordConfirm: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userPasswordConfirm])

  useEffect(() => {
    if (userSignupData.userName < 2 || userSignupData.userName > 5) {
      setIsRegexMessage({
        ...isRegexMessage,
        nameMessage: '',
      })
      setIsRegex({
        ...isRegex,
        isName: false,
      })
    } else {
      setIsRegexMessage({
        ...isRegexMessage,
        nameMessage: "2~5자",
      })
      setIsRegex({
        ...isRegex,
        isName: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignupData.userName])

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };


  const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
  const isValidSignup = (emailRegex.test(userSignupData.userEmail) && passwordRegex.test(userSignupData.userPassword) && userSignupData.userPassword===userSignupData.userPasswordConfirm && userSignupData.userName);
    

  function alert_(e) {
      e.preventDefault();
      alert(userSignupData.userName + "님 환영합니다!");
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
                    {userSignupData.userEmail.length > 0 &&<span className={`message ${isRegex.isRegexEmail ? 'success' : 'error'}`}>{isRegexMessage.emailMessage}</span>}
                </div>

                <div className="formbox">
                    <label htmlFor="userPassword">비밀번호*</label>
                    <input type="password" id="userPassword" title="비밀번호 (숫자, 영문자, 특수문자 조합으로 8자리 이상)" onChange={onChangeInput} maxLength='20' autoComplete='off' required></input>
                    {(userSignupData.userPassword.length > 0 &&<span className={`message ${isRegex.isRegexPassword ? 'success' : 'error'}`}>{isRegexMessage.passwordMessage}</span>)}
                </div>

                <div className="formbox">
                    <label htmlFor="userPasswordConfirm">비밀번호 재확인*</label>
                    <input type="password" id="userPasswordConfirm" title="비밀번호 확인" onChange={onChangeInput} maxLength='20' autoComplete='off' required></input>
                    {userSignupData.userPasswordConfirm.length > 0 && (<span className={`message ${isRegex.isRegexPasswordConfirm ? 'success' : 'error'}`}>{isRegexMessage.passwordConfirmMessage}</span>)}
                </div>

                <div className="formbox">
                    <label htmlFor="userName">이름*</label>
                    <input type="text" id="userName" onChange={onChangeInput} maxLength="5" autoComplete='off' required></input>
                    {userSignupData.userName.length > 0 && <span className={`message ${isRegex.isName ? 'success' : 'error'}`}>{isRegexMessage.nameMessage}</span>}
                </div>

                <div className="formbox">
                    <label htmlFor="age">나이</label> 
                    <input type="number" id="userAge" autoComplete='off' onChange={onChangeAge}></input>
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

