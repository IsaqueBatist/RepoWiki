import React from 'react'
import { ItemRepoContainer } from './style'

function ItemRepo() {
  return (
    <ItemRepoContainer>
      <h3>Pablo</h3>
      <p>Dio/pablo</p>
      <a href="#">Visitar repositório</a><br/>
      <a href="#" className='remove'>remover</a>
      <hr />
    </ItemRepoContainer>
  )
}
export default ItemRepo
