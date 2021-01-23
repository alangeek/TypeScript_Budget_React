import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Títuloo</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão</button>
        <button type="button">Botão</button>
      </Controllers>
    </Container>
  );
}

export default ContentHeader;