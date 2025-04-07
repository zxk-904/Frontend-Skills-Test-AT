import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.section`
  padding: var(--spacing-xl) 0 var(--spacing-xxl);
`;

const ChartCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-xl);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

const ChartTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const CircularStat = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid #F2F4F7;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: var(--color-primary);
    transform: rotate(45deg);
  }
`;

const StatValue = styled.div`
  text-align: center;
  
  span {
    display: block;
    
    &:first-child {
      font-weight: 700;
      font-size: 20px;
    }
    
    &:last-child {
      font-size: 14px;
      color: var(--color-text-secondary);
    }
  }
`;

const ChartSection = () => {
  // Sample data for the chart
  const data = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 500 },
    { name: 'Mar', users: 600 },
    { name: 'Apr', users: 550 },
    { name: 'May', users: 700 },
    { name: 'Jun', users: 800 },
    { name: 'Jul', users: 850 },
    { name: 'Aug', users: 900 },
    { name: 'Sep', users: 950 },
    { name: 'Oct', users: 1000 },
  ];
  
  return (
    <ChartContainer>
      <div className="container">
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Users over time</ChartTitle>
            <StatsContainer>
              <CircularStat>
                <StatValue>
                  <span>1,000</span>
                  <span>Active users</span>
                </StatValue>
              </CircularStat>
            </StatsContainer>
          </ChartHeader>
          
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="var(--color-primary)" 
                strokeWidth={2} 
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </ChartContainer>
  );
};

export default ChartSection;
