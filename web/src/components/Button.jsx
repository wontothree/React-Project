import React from 'react'

import "./button.css"

const Button = (props) => {
  return (
    <div className="btn">   
        <button type="submit" id={props.id} onClick={props.onClick} onChange={props.onChange} disabled={props.disabled}>가입하기</button>
    </div>
  )
}
export default Button