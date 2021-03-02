import React from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Logo, Form, FormTitle } from './styles';

const Signin: React.FC = () => {
    return (
      <Container>
        <Logo>
          <img src={logoImg} alt="Minha Carteira" />
          <h2>Minha Carteira</h2>
        </Logo>

        <Form onSubmit={() => {}}> 
          <FormTitle>Entrar</FormTitle>

          <Input 
            type="email"
            placeholder="Seu e-mail"
            required
          />
          <Input
            type="password" 
            placeholder="Sua senha"
            required
          />

          <Button type="submit">Acessar conta</Button>
        </Form>
      </Container>
    );
}

export default Signin;