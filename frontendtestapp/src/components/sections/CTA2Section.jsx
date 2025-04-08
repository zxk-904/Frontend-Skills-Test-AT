import React from 'react';
import styled from 'styled-components';
import CTA2Card from '../common/CTA2Card';
import image from '../../assets/images/cta2-image.jpg';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['7xl']};
  padding-bottom: ${({ theme }) => theme.spacing['9xl']};
  width: 1440px;
  height: 496px;
  background: #ffffff;
`;

const CTA2Section = () => {
  const ctaData = {
    title: 'Give us a shot',
    subtitle: 'Join over 4,000+ startups already growing with Untitled.',
    image: image,
  };

  return (
    <SectionContainer>
      <CTA2Card {...ctaData} />
    </SectionContainer>
  );
};

export default CTA2Section;