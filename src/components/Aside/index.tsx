import React, {useState} from 'react';
import { 
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp, 
  MdClose,
  MdMenu,
} from 'react-icons/md';

import logoImg from '../../assets/dolar2.svg';

import { 
  Container, 
  Header, 
  LogoImg, 
  Title, 
  MenuContainer, 
  MenuItemLink, 
  MenuItemButton,
  ToggleMenu,
 } from './styles';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
  const [toggleMenuIsOpned, setToggleMenuIsOpned] = useState(false);
  
  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpned(!toggleMenuIsOpned);
  }
  
  return (
    <Container menuIsOpen={toggleMenuIsOpned}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          { toggleMenuIsOpned ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>
        
        <LogoImg src={logoImg} alt="Minha Carteira de gastos" />
        <Title>Minhas Finanças</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <span></span>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Receitas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Despesas
        </MenuItemLink>
        <span></span>
        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Logout
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
}

export default Aside;