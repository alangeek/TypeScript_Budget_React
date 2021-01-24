import React, { useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const { type } = match.params;
  
  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  },[type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#ff3366' : '#bd081c'
  },[type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);


  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year,
      }
    });
  },[listData]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    });
  },[]);
    
  useEffect(() => {
   const filteredData =  listData.filter(item => {
     const date = new Date(item.date);
     const month = String(date.getMonth() + 1);
     const year= String(date.getFullYear());

     return month === monthSelected && year === yearSelected; 
   });

   const formattedData = filteredData.map(item => {
      return {
        id: uuid(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#bd081c' : '#8f10d9' 
      }
    });
    
    setData(formattedData);
  },[listData, monthSelected, yearSelected, data.length]);
  
    return (
        <Container>
          <ContentHeader title={title} lineColor={lineColor}>
            <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
            <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
         </ContentHeader>

          <Filters>
            <button 
              type="button"
              className="tag-filter tag-filter-recurrent"
            >
             Recorrentes
            </button>

            <button 
              type="button"
              className="tag-filter tag-filter-eventual"
            >
             Eventuais
            </button>
          </Filters>
          
         <Content>
           {
             data.map(item => (
              <HistoryFinanceCard
                  key={item.id}
                  tagColor={item.tagColor}
                  title={item.description}
                  subtitle={item.dataFormatted}
                  amount={item.amountFormatted}
                />
             ))
            }
         </Content>
        </Container>
    );
}

export default List;