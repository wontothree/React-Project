import React, { useState, useEffect, useRef, useCallback } from 'react'

// import Input from '../components/Input/input'
import '../components/signup.css'

const Signup = () => {

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userPasswordConfirm, setPasswordConfirm] = useState('');
    const [userName, setName] = useState('');
    const [userAge, setAge] = useState('');

    //오류메시지 상태저장
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [nameMessage, setNameMessage] = useState('')

    // 유효성 검사
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isName, setIsName] = useState(false)


    const data = {
        userEmail: userEmail,
        userPassword: userPassword,
        userPasswordConfirm: userPasswordConfirm,
        userName: userName,
        userAge: userAge,
    };

    const is_identical = useRef("")
    useEffect(() => {
        if (userPassword === userPasswordConfirm) {
            is_identical.current = "비밀번호가 일치합니다."
          } else {
            is_identical.current = "비밀번호가 일치하지 않습니다."
          }
          return () => {
          }
    }, [userPassword, userPasswordConfirm]);

    function alert_(e) {
        e.preventDefault();

        alert(userName + "님 환영합니다!");
        console.log(data);
    }


    const onChangeEmail = useCallback((e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        
        setEmail(emailCurrent)
    
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage("올바른 이메일 형식이 아닙니다.")
          setIsEmail(false)
        } else {
          setEmailMessage('올바른 이메일 형식입니다.')
          setIsEmail(true)
        }
    }, [])
    
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
    
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordMessage('영문자, 숫자, 특수문자 조합/ 8자리 이상')
          setIsPassword(false)
        } else {
          setPasswordMessage('안전')
          setIsPassword(true)
        }
    }, [])
    
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (userPassword === passwordConfirmCurrent) {
            setPasswordConfirmMessage("비밀번호가 일치합니다.")
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.")
            setIsPasswordConfirm(false)
        }
    }, [userPassword])

    const onChangeName = useCallback((e) => {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
          setNameMessage("2글자 이상, 5글자 이하")
          setIsName(false)
        } else {
          setNameMessage('')
          setIsName(true)
        }
      }, [])

    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>회원가입</h1>
            <form>

                <div className="formbox">
                    <label>이메일*</label> 
                    <input text="이메일" type="email" typeName="email" onChange={onChangeEmail} autoComplete='off' required></input>
                    {<label className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</label>}
                </div>

                <div className="formbox">
                    <label>비밀번호*</label>
                    <input type="password" passwordText="비밀번호 (숫자, 영문자, 특수문자 조합으로 8자리 이상)" onChange={onChangePassword} autoComplete='off'></input>
                    {(<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
                </div>

                <div className="formbox">
                    <label>비밀번호 재확인*</label>
                    <input
                    type="password"
                    title="비밀번호 확인"
                    typeTitle="passwordConfirm"
                    onChange={onChangePasswordConfirm}
                    autoComplete='off'
                    required
                    ></input>
                    {userPasswordConfirm.length > 0 && (
                    <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                    )}
                    {/* {<label>{is_identical.current}</label>} */}
                </div>

                <div className="formbox">
                    <label>이름*</label>
                    <input text="이름" type="text" typeName="name" onChange={onChangeName} minLength="1" maxLength="2" value={userName} required></input>
                    {userName.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                </div>

                <div className="formbox">
                    <label>나이</label> 
                    <input type="number" minLength="1" maxLength="5" autoComplete='off' onChange={onChangeAge} value={userAge}></input>
                </div>

                <div className="btn">
                    <button type="submit" href='/signup' onClick={(e) => alert_(e)}>가입하기</button>
                </div>

            </form>

        </section>
    </div>
  )
}

export default Signup

