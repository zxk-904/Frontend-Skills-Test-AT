import React from 'react';
import styled from 'styled-components';
import { SecondaryButton, PrimaryButton } from './Button2';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  width: 1280px;
  max-width: 1280px;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1216px;
  height: 400px;
  background: #53389e;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 24px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px;
  gap: 48px;
  width: 736px;
  height: 318px;
`;

const HeadingAndSupportingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 608px;
  height: 94px;
`;

const Heading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 608px;
  height: 44px;
`;

const SupportingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #e9d7fe;
  width: 608px;
  height: 30px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 269px;
  height: 48px;
`;

const RightContent = styled.div`
  width: 480px;
  height: 400px;
  min-height: 400px;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 24px;
`;

const CTA2Card = ({ title, subtitle, image }) => {
  return (
    <CardContainer>
      <Content>
        <LeftContent>
          <HeadingAndSupportingText>
            <Heading>{title}</Heading>
            <SupportingText>{subtitle}</SupportingText>
          </HeadingAndSupportingText>
          <Actions>
            <SecondaryButton>Learn More</SecondaryButton>
            <PrimaryButton>Get Started</PrimaryButton>
          </Actions>
        </LeftContent>
        <RightContent src={image} />
      </Content>
    </CardContainer>
  );
};

export default CTA2Card;