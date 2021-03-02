import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import logoImg from '../../assets/dolar2.svg';

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Minha Carteira de gastos" />
        <Title>Minhas Finanças</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Receitas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Despesas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Logout
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;