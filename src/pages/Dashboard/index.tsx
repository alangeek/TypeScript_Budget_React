import React, { useState, useMemo } from 'react';


import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';


import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';


import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';


import { Container, Content } from './styles';


const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


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

  const message = useMemo(() => {
    if(totalBalance < 0) {
      return {
        title: "Que Doooó!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg
      }
      
    }

    else if(totalBalance === 0) {
      return {
        title: "Ufaaaaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
        icon: grinningImg
      }
      
    } else {
      return {
        title: "Muitiiio bem!",
        description: "Sua carteira está positiva.",
        footerText: "Continue assim. Considere investir o seu saldo para realizar suas metas.",
        icon: happyImg
      }
    }
    
  },[totalBalance]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: totalExpenses,
        percent: Number(percentGains.toFixed(1)),
        color: '#00f213'
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: '#ff0047'
      },
    ];

    return data;
  },[totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths
    .map((_, month) => {
      
      let amountEntry = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if(gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error('amountEntry is invalid. amountEntry must be valid number');
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if(expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch {
            throw new Error('amountOutput is invalid. amountOutput must be valid number');
          }
        }
      });

      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    })
    
  },[yearSelected]);

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
              title={message.title}
              description={message.description}
              footerText={message.footerText}
              icon={message.icon}
            />

            <PieChartBox data={relationExpensesVersusGains} />

            <HistoryBox 
              data={historyData}
              lineColorAmountEntry="#00f213"
              lineColorAmountOutput="#ff0047"
            />
         </Content>
       </Container>
    );
}

export default Dashboard;