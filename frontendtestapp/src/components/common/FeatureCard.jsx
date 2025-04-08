import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.md}; 
`;const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: #F9F5FF; 
  margin-bottom: ${props => props.theme.spacing.md};

  img {
    width: 24px; 
    height: 24px;
    color: ${props => props.theme.colors.primary}; 
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

const LearnMoreLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};  &:hover {
    text-decoration: underline;
  }  span { // Para la flecha
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: translateX(3px);
  }
`;

const FeatureCard = ({ iconSrc, title, description, link = "#" }) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <img src={iconSrc} alt={`${title} icon`} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LearnMoreLink href={link}>        Learn more <span>→</span>
      </LearnMoreLink>
    </CardWrapper>
  );
};

export default FeatureCard;

