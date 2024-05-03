import React from 'react'
import './style.js'
import { ButtontCotnainer } from './style.js'

function Button({onClick}) {
  return (
    <ButtontCotnainer onClick={onClick}>
      Buscar
    </ButtontCotnainer>
    
  )
}

export default Button