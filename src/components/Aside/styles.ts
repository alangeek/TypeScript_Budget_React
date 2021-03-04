import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;

  background-color: ${props => props.theme.colors.primary};
  padding-left: 20px;

  border-right: 1px solid ${props => props.theme.colors.gray}; 
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;

`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  
  margin-top: 50px;
   
  > span {
    border: 1px solid #9e87871a;
    width: 90%;
  }  

  
`;

export const MenuItemLink= styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  font-size: 30px;

  margin: 30px 0;
  display: flex;
  align-items: center;

  transition: opacity .3s;
  
  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 38px;
    margin-right: 5px;
  }
`;


export const MenuItemButton= styled.button`
  font-size: 30px;
  color: ${props => props.theme.colors.info};
  border: none;
  background: none;

  margin: 30px 0;
  display: flex;
  align-items: center;

  transition: opacity .3s;
  
  &:hover {
    opacity: .7;
  }

  > svg {
    font-size: 38px;
    margin-right: 5px;
  }
`;