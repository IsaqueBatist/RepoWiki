import React from 'react'
import { ItemRepoContainer } from './style'

function ItemRepo({ repo }) {
  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>Visitar repositório</a><br />
      <hr />
    </ItemRepoContainer>
  )
}
export default ItemRepo
