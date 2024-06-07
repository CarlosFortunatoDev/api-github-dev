import React from 'react'

import { Container } from './styles'

import Repository from './Repository'

function Repositories() {
  return (
    <div>
      <Container>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
        <Repository/>
      </Container>
    </div>
  )
}

export default Repositories
