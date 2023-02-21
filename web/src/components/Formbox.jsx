import React from 'react'

import "./formbox.css"

const Formbox = (props) => {
  return (
    <div>
        <div className="formbox">
            <label htmlFor={props.htmlFor}>{props.name}</label> 
            <input id={props.htmlFor} type={props.type} title={props.title} onChange={props.onChange} maxLength={props.max} autoComplete='off'></input>
            <span className={props.className}>{props.message}</span>
        </div>
    </div>
  )
}

export default Formbox