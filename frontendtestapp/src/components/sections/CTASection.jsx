import React from 'react';
import styled from 'styled-components';
import CTACard from '../common/CTACard';

import image1 from '../../assets/images/people/people1.png';
import image2 from '../../assets/images/people/people2.png';
import image3 from '../../assets/images/people/people3.png';
import image4 from '../../assets/images/people/people4.png';
import image5 from '../../assets/images/people/people5.png';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const CTASection = () => {
  const ctaData = {
    title: 'No long-term contracts.',
    subtitle: 'No catches.',
    text: 'Start your 30-day free trial today.',
    images: [image1, image2, image3, image4, image5],
  };

  return (
    <SectionContainer>
      <CTACard {...ctaData} />
    </SectionContainer>
  );
};

export default CTASection;