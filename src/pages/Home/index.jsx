import { useEffect, useState } from 'react';
import { Container, Brand } from './styles';
import axios from 'axios';

async function fetchData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  console.log(response.data);
  return response.data
}

async function fetchUserRepos(username) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`)
  console.log(response.data);
  return response.data
}

export function Home() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetchData('FabioMTeixeira').then(res => setUser(res))
  },[])

  useEffect(() => {
    fetchUserRepos('FabioMTeixeira').then(res => setUser(res))
  },[])

  if(!user) return 

  return (
    <Container>
      <Brand>
        <h1>GitUsers</h1>
      </Brand>
        <img src= {user.avatar_url} alt="Foto"/>
        Nome: {user.name}
        <a href= {user.html_url} target='_blank' rel="noreferrer">Username: {user.login}</a>
        <a href={user.repos_url} target='_blank' rel="noreferrer">Quantidade de repositório:{user.public_repos}</a>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Link do repositório</th>
              <th>Visibilidade</th>
              <th>Estrelas</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
    </Container>
  )
}
