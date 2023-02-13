import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} minlength="4" maxlength="8" size="10" autoComplete='off' required></input>
  )
}

export default Input