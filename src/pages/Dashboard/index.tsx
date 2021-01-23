import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import Selectinput from '../../components/Selectinput';


import { Container } from './styles';

const Dashboard: React.FC = () => {

  const options = [
    {value: 'Alan', label: 'Alan'},
    {value: 'Aline', label: 'Aline'},
    {value: 'Sara', label: 'Sara'}
  ];
    
    return (
       <Container>
         <ContentHeader title="Dashboard" lineColor="#ff3366">
            <Selectinput options={options}/>
         </ContentHeader>
       </Container>
    );
}

export default Dashboard;