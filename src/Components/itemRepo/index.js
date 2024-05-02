import React from 'react'
import { ItemRepoContainer } from './style'
import { useState } from 'react'

function ItemRepo() {
  const [repos, setRepos] = useState([])
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
