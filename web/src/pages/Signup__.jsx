import React, { useState, useEffect } from 'react'

import '../components/signup.css'

const Signup1 = () => {
    const [userSignupData, setUserSignupData] = useState({
        userEmail: '',
        userPassword: '',
    });

    const [isRegexMessage, setIsRegexMessage] = useState({
        emailMessage: '',
        passwordMessage: '',
    });

    const [isRegex, setIsRegex] = useState({
        isEmail: false,
        isPassword: false,
    });

    const onChangeInput = (e) => {
        const { id, value } = e.target;
        setUserSignupData({
            ...userSignupData,
            [id]: value,
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

    // 버튼 활성화
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/

    const isValidSignup = (emailRegex.test(userSignupData.userEmail) && passwordRegex.test(userSignupData.userPassword));
    

    function alert_(e) {
        e.preventDefault();
        alert(userSignupData.userEmail)
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
                    {userSignupData.userEmail.length > 0 &&<span className={`message ${isRegex.isEmail ? 'success' : 'error'}`}>{isRegexMessage.emailMessage}</span>}
                </div>

                <div className="formbox">
                    <label htmlFor="userPassword">비밀번호*</label>
                    <input type="password" id="userPassword" onChange={onChangeInput} maxLength='20' autoComplete='off' required></input>
                    {(userSignupData.userPassword.length > 0 &&<span className={`message ${isRegex.isPassword ? 'success' : 'error'}`}>{isRegexMessage.passwordMessage}</span>)}
                </div>

                <div className="btn">   
                    <button type="submit" onClick={(e) => alert_(e)} disabled={!isValidSignup}>가입하기</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Signup1

