import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'

function Repositories() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter/>
      </Sidebar>
      <Main>Main</Main>
    </Container>
  )
}

export default Repositories
