import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';


import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const options = [
    {value: 'Alan', label: 'Alan'},
    {value: 'Aline', label: 'Aline'},
    {value: 'Sara', label: 'Sara'}
  ];

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
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
  },[]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    });
  },[]);


  const totalExpenses = useMemo(() => {
    let total: number = 0;
    
    expenses.forEach(item => {
      const date = new Date(item.date);
      const  year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch  {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });
    
    return total;
  },[monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;
    
    gains.forEach(item => {
      const date = new Date(item.date);
      const  year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch  {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });
    
    return total;
  },[monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  },[totalGains, totalExpenses]);

  const handleMonthSelected = (month: string) =>{
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch  {
      throw new Error('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) =>{
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error('invalid year value. Is accept integer numbers.')
    }
  }
    
    return (
       <Container>
         <ContentHeader title="Dashboard" lineColor="#ff3366">
         <SelectInput 
              options={months} 
              onChange={(e) => handleMonthSelected(e.target.value)} 
              defaultValue={monthSelected}
            />
            <SelectInput 
              options={years} 
              onChange={(e) => handleYearSelected(e.target.value)} 
              defaultValue={yearSelected}
            />
         </ContentHeader>

         <Content>
           <WalletBox
              title="saldo😻"
              color="#ff3b00"
              amount={totalBalance}
              footerLabel="atualizado com base nas entradas e saídas"
              icon="dolar"
            />

            <WalletBox
              title="entradas😸"
              color="#00f213"
              amount={totalGains}
              footerLabel="atualizado com base nas entradas e saídas"
              icon="arrowUp"
            />

            <WalletBox
              title="saídas😿"
              color="#ff0047"
              amount={totalExpenses}
              footerLabel="atualizado com base nas entradas e saídas"
              icon="arrowDown"
            />

            <MessageBox 
              title="Mutio bem!"
              description="Sua carteira está possitiva!"
              footerText="Continue assim. Considere investir o seu saldo."
              icon={happyImg}
            />
         </Content>
       </Container>
    );
}

export default Dashboard;