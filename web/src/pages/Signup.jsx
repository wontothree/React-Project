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

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const isRegexEmail = emailRegex.test(userSignupData.userEmail) || userSignupData.userEmail.length === 0;
    const isRegexEmailMessage = isRegexEmail ? '' : "올바른 이메일 형식이 아닙니다.";

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const isRegexPassword = passwordRegex.test(userSignupData.userPassword);
    const isRegexPasswordMessage = isRegexPassword ? '안전' : "사용불가 (영문자, 숫자, 특수문자 조합/ 8~20자)";

    const isRegexPasswordConfirm = userSignupData.userPassword === userSignupData.userPasswordConfirm || userSignupData.userPasswordConfirm.length === 0;
    const isRegexPasswordConfirmMessage = isRegexPasswordConfirm ? '' : "비밀번호가 일치하지 않습니다."

    const isRegexName = (userSignupData.userName.length > 1 && userSignupData.userName.length < 6) || userSignupData.userName.length === 0;
    const isRegexNameMessage = isRegexName ? '' : "2~5자"
      
    const isValidSignup = isRegexEmail && isRegexPassword && isRegexPasswordConfirm && isRegexName && userSignupData.userEmail && userSignupData.userPassword && userSignupData.userPasswordConfirm && userSignupData.userName;
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log(userSignupData);
        alert(`${userSignupData.userName}님 회원가입이 완료되었습니다 !`);
    };
  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>회원가입</h1>
            <form>
                <Formbox htmlFor="userEmail" name="이메일*" type="email" id="userEmail" title="이메일" onChange={onChangeInput} maxLength='30' message={isRegexEmailMessage}/>
                <Formbox htmlFor="userPassword" name="비밀번호*" type="password" id="userPassword" title="비밀번호(숫자, 영문자, 특수문자 조합/ 8~20자)" onChange={onChangeInput} maxLength='20'/>
                {userSignupData.userPassword.length > 0 &&<div className={`message ${isRegexPassword ? 'success' : 'error'}`}>{isRegexPasswordMessage}</div>}
                <Formbox htmlFor="userPasswordConfirm" name="비밀번호 확인*" type="password" id="userPasswordConfirm" title="비밀번호 확인" onChange={onChangeInput} maxLength='20' message={isRegexPasswordConfirmMessage}/>
                <Formbox htmlFor="userName" name="이름*" type="text" id="userName" title="이름" onChange={onChangeInput} maxLength="10" message={isRegexNameMessage}/>
                <div className="birthdate-form">
                    <label htmlFor="userBirthdate">생년월일</label>
                    <br></br> 
                    <input type="number" id="userBirthdateYear" title="년" placeholder="년" className="year" onChange={onChangeInput} autoComplete='off'></input>
                    <input type="number" id="userBirthdateMonth" title="월" placeholder="월" className="month" onChange={onChangeInput} autoComplete='off'></input>
                    <input type="number" id="userBirthdateDay" title="일" placeholder="일" className="day" onChange={onChangeInput} autoComplete='off'></input>
                </div>
                <div className="formbox">
                    <label htmlFor="userSex">성별</label>
                    <select id="userSex" onChange={onChangeInput}>
                        <option value="">성별</option>
                        <option value="man">남자</option>
                        <option value="woman">여자</option>
                    </select>
                </div>
                <Formbox htmlFor="userPhone" name="휴대전화" type="number" id="userPhone" title="전화번호" onChange={onChangeInput}/>
                <Button id="submitRegister" onClick={(e)=>handleSubmit(e)} condition={isValidSignup} disabled={!isValidSignup}/>
            </form>
        </section>
    </div>
  )
}

export default Signup

