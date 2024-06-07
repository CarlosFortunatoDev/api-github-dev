import React from 'react'

import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Inner, Data } from './style'

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/125428271?v=4'/>
        <Login>carlosfortunatodev</Login>
        <Name>Carlos Fortunato</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          10&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;30&nbsp;<i>seguindo</i>
        </Data>
        <Data><MdWork size={20} />Embraer</Data>
        <Data><MdLocationCity size={20} />São José dos Campos</Data>
        <Data>
          <MdLink size={20} />
          <a href="https://embraer.com/" target='_blank' rel="noreferrer">Embraer</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile
