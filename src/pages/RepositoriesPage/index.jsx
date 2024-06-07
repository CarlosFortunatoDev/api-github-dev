import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'
import { getLangsFrom } from '../../services/api'

function RepositoriesPage() {
  const user = {
    login: "CarlosFortunatoDev",
    name: "Carlos Fortunato",
    avatar_url: "https://avatars.githubusercontent.com/u/125428271?v=4",
    followers: 4,
    following: 14,
    company: 'UNIP',
    blog: "https://carlosfortunatodev.github.io/Portfolio-react/",
    location: "São José dos Campos - SP",
  }

  const repositories = [
    {
      name: 'Password-Generator',
      description: 'Gerador de senhas automático com níveis de segurança. Desenvolvido com HTML5, CSS3 e JavaScript Vanilla.',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "JavaScript"
    },
    {
      name: 'Repo 2',
      description: 'Description',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "JavaScript"
    },
    {
      name: 'Repo 3',
      description: 'Description',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "TypeScript"
    },
    {
      name: 'Repo 4',
      description: 'Description',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "PHP"
    },
    {
      name: 'Repo 5',
      description: 'Description',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "Java"
    },
    {
      name: 'Repo 6',
      description: 'Description',
      html_url: "https://github.com/CarlosFortunatoDev/Password-Generator",
      language: "Ruby"
    },
  ]

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages}/>
      </Sidebar>
      <Main>
        <Repositories repositories={repositories}/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage
