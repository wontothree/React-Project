import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} minLength="4" maxLength="30" size="10" autoComplete='off' required></input>
  )
}

export default Input