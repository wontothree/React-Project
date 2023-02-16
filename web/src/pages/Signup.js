import React, { useState, useEffect, useRef } from 'react'

// import Input from '../components/Input/input'
import '../components/signup.css'

const Signup = () => {

    const [userEmail, setValue] = useState('');
    const [userPw1, setValue2] = useState('');
    const [userPw2, setValue3] = useState('');
    const [userName, setValue4] = useState('');
    const [userAge, setValue5] = useState('');

    const getData = (event) => {
        setValue(event.target.value);
    };
    const getData2 = (event) => {
        setValue2(event.target.value);
    };
    const getData3 = (event) => {
        setValue3(event.target.value);
    };
    const getData4 = (event) => {
        setValue4(event.target.value);
    };
    const getData5 = (event) => {
        setValue5(event.target.value);
    };

    const data = {
        userEmail: userEmail,
        userPw1: userPw1,
        userPw2: userPw2,
        userName: userName,
        userAge: userAge,
    };

    const is_identical = useRef("")
    useEffect(() => {
        if (userPw1 === userPw2) {
            is_identical.current = "비밀번호가 일치합니다."
          } else {
            is_identical.current = "비밀번호가 일치하지 않습니다."
          }
    }, [userPw1, userPw2]);

    function alert_(e) {
        e.preventDefault();
        alert(userName + "님 환영합니다!");
        console.log(data);
    }

  return (
    <div className="body">
        <section className="signup-form">
            <h1 style={{size:20}}>Signup</h1>
            <form>

                <div className="int-area">
                    <label>Email*</label> 
                    <input type="email" size="10" autoComplete='off' onChange={getData} value={userEmail} required></input>
                </div>

                <div className="int-area">
                    <label>Password*</label>
                    <input type="password" size="10" autoComplete='off' onChange={getData2} value={userPw1} required></input>
                </div>

                <div className="int-area">
                    <label>Password Confirm*</label>
                    <input type="password" size="10" autoComplete='off' onChange={getData3} value={userPw2} required></input>
                    <label>{is_identical.current}</label>
                </div>

                <div className="int-area">
                    <label>Name*</label>
                    <input type="text" size="10" autoComplete='off' onChange={getData4} value={userName} required></input>
                </div>

                <div className="int-area">
                    <label>Age</label> 
                    <input type="number" minLength="1" maxLength="2" size="10" autoComplete='off' onChange={getData5} value={userAge}></input>
                </div>

                <div className="btn-area">
                    <button type="submit" href='/signup' onClick={(e) => alert_(e)}>Complete</button>
                </div>

            </form>

        </section>
    </div>
  )
}

export default Signup

