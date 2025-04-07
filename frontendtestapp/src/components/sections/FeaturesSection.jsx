import React from 'react';import styled from 'styled-components';
import FeatureCard from '../common/FeatureCard';

import teamIcon from '../../assets/images/icons/team-icon.png'; 
import boltIcon from '../../assets/images/icons/bolt-icon.png';  
import reportIcon from '../../assets/images/icons/report-icon.png'; 

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const SectionContent = styled.div`
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  text-align: center;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #F9F5FF; 
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: ${props => props.theme.spacing.md};
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
  margin: 0 auto ${props => props.theme.spacing.xxl}; 

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: ${props => props.theme.spacing.xl};
  }
`;const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xl}; 

  @media (max-width: 992px) {
    grid-template-columns: 1fr; 
    gap: ${props => props.theme.spacing.xl};
    max-width: 500px; 
    margin: 0 auto; 
  }
`;

// Datos de las características
const featuresData = [
  {
    id: 1,
    icon: teamIcon,
    title: 'Share team inboxes',
    description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    link: '#',
  },
  {
    id: 2,
    icon: boltIcon,
    title: 'Deliver instant answers',
    description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    link: '#',
  },
  {
    id: 3,
    icon: reportIcon,
    title: 'Manage your team with reports',
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",    link: '#',
  },
];

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <Tag>Features</Tag>
        <SectionTitle>Cutting-edge features for advanced analytics</SectionTitle>
        <SectionSubheading>
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </SectionSubheading>

        <FeaturesGrid>
          {featuresData.map(feature => (            <FeatureCard
              key={feature.id}
              iconSrc={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </FeaturesGrid>
      </SectionContent>    </SectionContainer>
  );
};

export default FeaturesSection;