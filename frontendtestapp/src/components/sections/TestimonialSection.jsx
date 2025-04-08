import React from 'react';
import styled from 'styled-components';
import TestimonialCard from '../common/TestimonialCard';
import blondeImage from '../../assets/images/people/blonde.png';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const TestimonialSection = () => {
  const testimonialData = {
    image: blondeImage,
    stars: 5,
    quote: [
      'Love the simplicity of the service',
      'and the prompt customer support.',
      "We can't imagine working without it.",
    ],
    author: 'Renee Wells',
    role: 'Product Designer, Quotient',
  };

  return (
    <SectionContainer>
      <SectionContent>
        <TestimonialCard {...testimonialData} />
      </SectionContent>
    </SectionContainer>
  );
};

export default TestimonialSection;