import { useState } from 'react';
import { Container, Brand } from './styles';
import axios from 'axios';

async function fetchUserRepos(username) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`)
  return response.data
}

export function Home() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [username, setUsername] = useState('')
  
  async function handleButtonClick() {
  await fetchUserRepos(username).then(res => {
    setRepos(res)
    setUser(res[0].owner)
  })
  }

  return (
    <Container>
      <Brand>
        <h1>GitUsers</h1>
        <input type="text" placeholder='Digite o Username' onChange={(input) => {
          setUsername(input.target.value)
        }}/>
        <button onClick={handleButtonClick}>Buscar</button>
      </Brand>
      {user ? (
        <div>
          <img src= {user.avatar_url} alt="Foto"/>
          <a href= {user.html_url} target='_blank' rel="noreferrer">Username: {user.login}</a>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Link do repositório</th>
                <th>Estrelas</th>
              </tr>
            </thead>
            <tbody>
  
              {repos.map(repo => {
                return (
                  <tr key={repo.id}>
                    <td>{repo.name}</td>
                    <td><a href={repo.html_url} target='_blank' rel="noreferrer">{repo.html_url}</a></td>
                    <td>{repo.stargazers_count}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        ) : null}
    </Container>
  )
}
