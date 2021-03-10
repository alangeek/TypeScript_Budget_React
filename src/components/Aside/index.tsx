import React, {useState} from 'react';
import Toggle from '../Toggle';

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
  ThemeToggleFooter,
 } from './styles';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();
  
  const [toggleMenuIsOpned, setToggleMenuIsOpned] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
  

  const handleToggleMenu = () => {
    setToggleMenuIsOpned(!toggleMenuIsOpned);
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
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

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpned}>
        <Toggle
          labelLeft="🌞" 
          labelRight="🌛"
          checked={darkTheme}
          onChange={handleChangeTheme} 
        />
      </ThemeToggleFooter>
    </Container>
  );
}

export default Aside;