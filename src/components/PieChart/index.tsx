import React from 'react';

import {  Pie, Cell, ResponsiveContainer,} from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

const PieChart: React.FC = () =>  (
    <Container>
      <SideLeft>
          <h2>Relação</h2>
        <LegendContainer>
            <Legend color="#00f213">
              <div>5%</div>
              <span>Entradas</span>
            </Legend>
            <Legend color="#ff0047">
              <div>95%</div>
              <span>Saídas</span>
            </Legend>
            <Legend color="#00f213">
              <div>5%</div>
              <span>Entradas</span>
            </Legend>
            <Legend color="#ff0047">
              <div>95%</div>
              <span>Saídas</span>
            </Legend>
            <Legend color="#00f213">
              <div>5%</div>
              <span>Entradas</span>
            </Legend>
            <Legend color="#ff0047">
              <div>95%</div>
              <span>Saídas</span>
            </Legend>
        </LegendContainer>
      </SideLeft>

    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={[{amount: 30, percent: 95}]}
            labelLine={false}
            dataKey="percent"
          >
          
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
     
    </Container>
  );


export default PieChart;