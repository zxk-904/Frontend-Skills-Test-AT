import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`;

const LeftContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700; /* Negrita */
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700; /* Negrita */
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`;

const GetStartedButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const RightContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    grid-column: span 1;
    grid-row: 2 / 3;
  }
`;

const CTACard = ({ title, subtitle, text, images }) => {
  return (
    <CardContainer>
      <LeftContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Text>{text}</Text>
        <ButtonsContainer>
          <LearnMoreButton>Learn more</LearnMoreButton>
          <GetStartedButton>Get Started</GetStartedButton>
        </ButtonsContainer>
      </LeftContent>
      <RightContent>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </RightContent>
    </CardContainer>
  );
};

export default CTACard;