import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

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

         <Content>
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
            <HistoryFinanceCard 
              cardColor="#060b1f"
              tagColor="#ff3366"
              title="Conta de luz"
              subtitle="23/01/2021"
              amount="R$ 130,00"
            />
         </Content>
         
        </Container>
    );
}

export default List;