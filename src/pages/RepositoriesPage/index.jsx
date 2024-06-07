import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

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

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage
