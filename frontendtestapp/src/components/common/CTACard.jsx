import React from 'react';
import styled from 'styled-components';
import { SecondaryButton, PrimaryButton } from './Button';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  width: 576px;
  height: 270px;
`;

const HeadingAndSupportingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 576px;
  height: 174px;
`;

const Heading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #101828;
  width: 576px;
`;

const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
  width: 576px;
  margin-top: 16px; 
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
  position: relative;
  width: 576px;
  height: 496px;
`;

const Image = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center;

  &:nth-child(1) {
    width: 160px;
    height: 240px;
    left: calc(50% - 160px / 2 + 88px);
    top: 0px;
    background: url(${({ src }) => src});
  }

  &:nth-child(2) {
    width: 192px;
    height: 128px;
    left: calc(50% - 192px / 2 + 192px);
    top: 256px;
    background: url(${({ src }) => src});
  }

  &:nth-child(3) {
    width: 192px;
    height: 128px;
    left: calc(50% - 192px / 2 - 192px);
    top: 256px;
    background: url(${({ src }) => src});
  }

  &:nth-child(4) {
    width: 160px;
    height: 240px;
    left: calc(50% - 160px / 2);
    top: 256px;
    background: url(${({ src }) => src});
  }

  &:nth-child(5) {
    width: 160px;
    height: 160px;
    left: calc(50% - 160px / 2 - 88px);
    top: 80px;
    background: url(${({ src }) => src});
  }
`;

const CTACard = ({ title, text, images }) => {
  const [mainTitle, secondaryTitle] = title.split('. '); 

  return (
    <CardContainer>
      <LeftContent>
        <HeadingAndSupportingText>
          <Heading>
            {mainTitle}.<br />
            {secondaryTitle}
          </Heading>
          <Subtitle>{text}</Subtitle>
        </HeadingAndSupportingText>
        <Actions>
          <SecondaryButton>Learn More</SecondaryButton>
          <PrimaryButton>Get Started</PrimaryButton>
        </Actions>
      </LeftContent>
      <RightContent>
        {images.map((src, index) => (
          <Image key={index} src={src} />
        ))}
      </RightContent>
    </CardContainer>
  );
};

export default CTACard;