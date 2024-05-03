import React from 'react'
import './style.js'
import { InputCotnainer } from './style.js'

function Input({value, onChange}) {
  return (
    <InputCotnainer>
      <input value={value} onChange={onChange}/>
    </InputCotnainer>
    
  )
}

export default Input