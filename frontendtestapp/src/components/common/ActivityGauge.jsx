import React from 'react';
import styled from 'styled-components';


const ActivityGaugeContainer = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RingOuter = styled.div`
  position: absolute;
  width: 224px;
  height: 224px;
  border: 16px solid #f2f4f7;
  border-radius: 50%;
`;

const RingMiddle = styled.div`
  position: absolute;
  width: 184px;
  height: 184px;
  border: 16px solid #7f56d9;
  border-radius: 50%;
`;

const RingInner = styled.div`
  position: absolute;
  width: 144px;
  height: 144px;
  border: 16px solid #b692f6;
  border-radius: 50%;
`;

const Label = styled.div`
  position: absolute;
  width: 83px;
  height: 20px;
  top: calc(50% - 20px / 2 - 21px);
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #475467;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.div`
  position: absolute;
  width: 82px;
  height: 38px;
  top: calc(50% - 38px / 2 + 10px);
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineImage = styled.img`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: calc(50% - ${({ size }) => size / 2}px);
  left: calc(50% - ${({ size }) => size / 2}px);
  pointer-events: none; /* Para que no interfiera con la interacción */
`;

const ActivityGauge = ({ images }) => {
  return (
    <ActivityGaugeContainer>
      <RingOuter />
      <RingMiddle />
      <RingInner />
      <Label>Active users</Label>
      <Number>1000</Number>

      {/* Superposición de imágenes */}
      {images.map((image, index) => (
        <LineImage
          key={index}
          src={image.src}
          alt={`Line ${index + 1}`}
          size={image.size}
        />
      ))}
    </ActivityGaugeContainer>
  );
};

export default ActivityGauge;