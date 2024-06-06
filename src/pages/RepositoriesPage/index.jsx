import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'

function Repositories() {
  return (
    <Container>
      <Sidebar><Profile /></Sidebar>
      <Main>Main</Main>
    </Container>
  )
}

export default Repositories
