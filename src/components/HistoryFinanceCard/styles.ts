import styled from 'styled-components';


interface ITagProps{
  color: string;
  
}


export const Container = styled.li`
  background-color: ${props => props.theme.colors.primary};

  list-style: none;
  border-radius: 10px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all .3s;

  position: relative;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }

  > div span {
    font-size: 22px;
    font-weight: bold;
  }



`;

export const Tag = styled.div<ITagProps>`
  width: 15px;
  height: 100%;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background-color: ${props => props.color};

  position: absolute;
  left: 0;
`;
