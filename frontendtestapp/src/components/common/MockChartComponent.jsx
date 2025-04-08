import React from 'react';
import styled from 'styled-components';
import Line1 from '../../assets/images/lineas_grafico/line1.png'; 
import Line2 from '../../assets/images/lineas_grafico/line2.png'; 
import Line3 from '../../assets/images/lineas_grafico/line3.png'; 

const MockupChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 736px;
  height: 368px;
  position: relative;
  background: #f9fafb; /* Placeholder background */
  border-radius: 8px;
`;

const YAxis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 736px;
  height: 350px;
  z-index: 0;
`;

const YAxisLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 736px;
  height: 17px;
  border-bottom: 1px solid #f2f4f7;
`;

const XAxis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  width: 736px;
  height: 18px;
  z-index: 1;
`;

const XAxisLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #475467;
`;

const ChartImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: ${({ top }) => top};
  left: 0;
  pointer-events: none; /* Para que no interfiera con la interacción del gráfico */
`;

const MockupChartComponent = () => {
  return (
    <MockupChart>
      {/* Y-Axis */}
      <YAxis>
        <YAxisLine />
        <YAxisLine />
        <YAxisLine />
        <YAxisLine />
        <YAxisLine />
      </YAxis>

      {/* X-Axis */}
      <XAxis>
        <XAxisLabel>Jan</XAxisLabel>
        <XAxisLabel>Feb</XAxisLabel>
        <XAxisLabel>Mar</XAxisLabel>
        <XAxisLabel>Apr</XAxisLabel>
        <XAxisLabel>May</XAxisLabel>
        <XAxisLabel>Jun</XAxisLabel>
        <XAxisLabel>Jul</XAxisLabel>
        <XAxisLabel>Aug</XAxisLabel>
        <XAxisLabel>Sep</XAxisLabel>
        <XAxisLabel>Oct</XAxisLabel>
        <XAxisLabel>Nov</XAxisLabel>
        <XAxisLabel>Dec</XAxisLabel>
      </XAxis>

      {/* Superposición de imágenes */}
      <ChartImage src={Line1} alt="Line 1" top="23.96%" />
      <ChartImage src={Line2} alt="Line 2" top="51.56%" />
      <ChartImage src={Line3} alt="Line 3" top="55.73%" />
    </MockupChart>
  );
};

export default MockupChartComponent;