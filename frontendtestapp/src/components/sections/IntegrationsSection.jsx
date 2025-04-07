import React from 'react';
import styled from 'styled-components';
import IntegrationCard from '../common/IntegrationCard';


import notionLogo from '../../assets/images/integrations/notion-logo.png'; 
import slackLogo from '../../assets/images/integrations/slack-logo.png';   
import driveLogo from '../../assets/images/integrations/drive-logo.png';  
import intercomLogo from '../../assets/images/integrations/intercom-logo.png'; 
import jiraLogo from '../../assets/images/integrations/jira-logo.png';     
import dropboxLogo from '../../assets/images/integrations/dropbox-logo.png';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  background-color: #F9FAFB; 
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

const SectionDescription = styled.p`
  font-size: 18px;  color: ${props => props.theme.colors.textSecondary};  max-width: 768px;
  margin: 0 auto ${props => props.theme.spacing.xl};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
  text-align: left; // Reset text align for cards

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;


const integrationsData = [
  { id: 1, logo: notionLogo, name: "Notion", link: "#" },
  { id: 2, logo: slackLogo, name: "Slack", link: "#" },
  { id: 3, logo: driveLogo, name: "Google Drive", link: "#" },
  { id: 4, logo: intercomLogo, name: "Intercom", link: "#" },
  { id: 5, logo: jiraLogo, name: "Jira", link: "#" },
  { id: 6, logo: dropboxLogo, name: "Dropbox", link: "#" },
];

const IntegrationsSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <Tag>Integrations</Tag>
        <SectionTitle>Get more value from your tools</SectionTitle>
        <SectionDescription>
          Connect your tools, connect your teams. With over 100 apps already available in
          our directory, your team's favourite tools are just a click away.
        </SectionDescription>

        <IntegrationsGrid>
          {integrationsData.map(integration => (
            <IntegrationCard
              key={integration.id}
              logoSrc={integration.logo}
              title={`${integration.name} integration`}
              description={`Work faster and smarter by integrating directly with ${integration.name}, right in the app.`}
              link={integration.link}
            />
          ))}
        </IntegrationsGrid>
      </SectionContent>
    </SectionContainer>
  );
};

export default IntegrationsSection;
