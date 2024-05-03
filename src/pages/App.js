import React from 'react'
import gitlog from '../assets/github.png'
import { Container } from './style'
import Input from '../Components/Input'
import ItemRepo from '../Components/itemRepo'
import Button from '../Components/Button'
import { useState } from 'react'
import { api } from '../services/api'

function App() {
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])



  const handleSeacthRepo = async () => {
    const { data } = await api.get(`/users/${user}/repos`)
    if(data){
      setRepos(data)
      setUser('')
      return
    }
    
    window.alert('Usuario não encontrado')
  }

  return (
    <Container>
      <img src={gitlog} width={72} height={72} alt='logoGithub' />
      <h1>Consulte os Repositório de um usuário do github</h1>
      <Input value={user} onChange={(e) => setUser(e.target.value)} />
      <Button onClick={handleSeacthRepo} />
      <div className='repositorios'>
      {repos.map((repo) => <ItemRepo repo={repo} />)}
      </div>
            


    </Container>

  )
}
export default App
