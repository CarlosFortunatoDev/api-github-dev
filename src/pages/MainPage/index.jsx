import React, {useState} from "react";
import {MdSearch} from "react-icons/md"

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitubLogo from "../../assets/images/github-logo.svg"

export default function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={gitubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42}/>
        </Button>
      </Form>
    </Container>
  );
}
