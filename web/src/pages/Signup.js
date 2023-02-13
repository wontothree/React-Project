import React from 'react'

import Input from '../components/Input/input'
import '../components/signup.css'

const Signup = () => {
  return (
    <body class="body">
     <div>
        <section class="signup-form">
            <h1 style={{size:20}}>Signup</h1>
            <form action="">

                <div class="int-area">
                    <label>Email*</label> 
                    <Input type="Email"/>
                </div>

                <div class="int-area">
                    <label>Password*</label>
                    <Input type="password"/>
                </div>

                <div class="int-area">
                    <label>Password Confirm*</label>
                    <Input type="password"/>
                </div>

                <div class="int-area">
                    <label>Name*</label>
                    <Input type="text"/>
                </div>

                <div class="int-area">
                    <label>Age</label> 
                    <input type="number" minlength="4" maxlength="8" size="10" autoComplete='off'></input>
                </div>

                <div class="btn-area">
                    <button type="submit">Complete</button>
                </div>

            </form>

        </section>
      </div>
    </body>
  )
}

export default Signup

