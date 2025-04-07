import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;  align-items: flex-start;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const Logo = styled.img`
  height: 48px; 
  width: 48px;  
  margin-bottom: ${props => props.theme.spacing.md};
  object-fit: contain;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Description = styled.p`  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  flex-grow: 1; 
`;

const ViewLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-flex;  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  &:hover {
    text-decoration: underline;
  }

  span { // Para la flecha
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: translateX(3px);
  }
`;const IntegrationCard = ({ logoSrc, title, description, link = "#" }) => {
  return (
    <CardWrapper>
      <Logo src={logoSrc} alt={`${title} logo`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ViewLink href={link}>
        View integration <span>→</span>
      </ViewLink>
    </CardWrapper>
  );
};

export default IntegrationCard;
