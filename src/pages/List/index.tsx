import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';

import { Container } from './styles';

const List: React.FC = () => {

  const options = [
    {value: 'Alan', label: 'Alan'},
    {value: 'Aline', label: 'Aline'},
    {value: 'Sara', label: 'Sara'}
  ];
    
    return (
        <Container>
          <ContentHeader title="Saídas" lineColor="#bd081c">
            <SelectInput options={options}/>
         </ContentHeader>
        </Container>
    );
}

export default List;