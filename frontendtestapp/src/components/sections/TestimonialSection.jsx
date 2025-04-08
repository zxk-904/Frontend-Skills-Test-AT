import React from 'react';
import styled from 'styled-components';
import TestimonialCard from '../common/TestimonialCard';
import blondeImage from '../../assets/images/people/blonde.png';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 0px;
  gap: 64px;
  width: 1440px;
  height: 640px;
  background: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  width: 1280px;
  max-width: 1280px;
  height: 448px;
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
      <ContentContainer>
        <TestimonialCard {...testimonialData} />
      </ContentContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;