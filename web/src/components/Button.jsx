import React from 'react'

import "./button.css"

const Button = (props) => {
  return (
    <div className="btn">   
        <button type="submit" className={props.condition ? 'form-button' : 'form-button-disabled'} onClick={props.onClick} href={props.href} disabled={props.disabled}>다음</button>
    </div>
  )
}
export default Button