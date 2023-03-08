import React from 'react'

import "./formbox.css"

const Formbox = (props) => {
  return (
    <div>
        <div className="formbox">
            <label htmlFor={props.htmlFor}>{props.name}</label> 
            <input id={props.htmlFor} type={props.type} title={props.title} onChange={props.onChange} maxLength={props.max} autoComplete='off'></input>
            {/* input은 여는 태그를 따로 사용하는 것이 아니고 바로 닫는 태그로 닫아주셔도 좋을것 같아요.
            maxLength={props.max}에서  Formbox의 prop를 넘겨줄때 maxLength로 사용하고 있는것 같아요!! */}
            <span className={props.className}>{props.message}</span>
        </div>
    </div>
  )
}

export default Formbox