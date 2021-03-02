import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import logoImg from '../../assets/dolar2.svg';

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton, } from './styles';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
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

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Logout
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
}

export default Aside;