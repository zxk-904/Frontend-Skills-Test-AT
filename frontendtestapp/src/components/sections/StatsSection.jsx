import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SectionSubheading = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 768px;
  margin: 0 auto ${props => props.theme.spacing.xl};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StatsWrapper = styled.div`
  background-color: #F9FAFB; // Fondo gris claro
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
  max-width: ${props => props.theme.containerWidth};
  margin: ${props => props.theme.spacing.xl} auto 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
    padding: ${props => props.theme.spacing.lg};
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 48px; // Tamaño grande para el número
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: 40px;  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;

const statsData = [  { id: 1, value: '400+', label: 'Projects completed' },
  { id: 2, value: '600%', label: 'Return on investment' },
  { id: 3, value: '10k', label: 'Global downloads' },
];

const StatsSection = () => {
  return (
    <SectionContainer>
      <div className="container">
        <SectionTitle>Unleash the full power of data</SectionTitle>
        <SectionSubheading>
          Everything you need to convert, engage, and retain more users.
        </SectionSubheading>

        <StatsWrapper>
          {statsData.map(stat => (
            <StatItem key={stat.id}>              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>          ))}
        </StatsWrapper>
      </div>
    </SectionContainer>
  );
};

export default StatsSection;
