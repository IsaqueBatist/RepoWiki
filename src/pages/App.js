import React from 'react'
import gitlog from '../assets/github.png'
import { Container } from './style'
import Input from '../Components/Input'
import ItemRepo from '../Components/itemRepo'

export default function App() {
  return (
      <Container>
        <img src={gitlog} width={72} height={72} alt='logoGithub'/>
        <Input />
        <ItemRepo />
      </Container>

  )
}
