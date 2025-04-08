import React from 'react';
import styled from 'styled-components';
import { SecondaryButton, PrimaryButton } from '../common/Button';
import { ArrowButton, ArrowIcon } from '../common/ArrowButton';
import TestimonialCard from '../common/TestimonialCard2';
import alisaHester from '../../assets/images/people/alisa-hester.png'; 
import annieStanley from '../../assets/images/people/annie-stanley.png';
import johnnyBell from '../../assets/images/people/johnny-bell.png';
import miaWard from '../../assets/images/people/mia-ward.png';
import richWilson from '../../assets/images/people/rich-wilson.png';
import archieYoung from '../../assets/images/people/archie-young.png';

const testimonialData = [
    {
      image: alisaHester,
      name: 'Alisa Hester',
      text: 'PM, Hourglass',
      role: 'Web Design Agency',
    },
    {
      image: richWilson,
      name: 'Rich Wilson',
      quote: '“We’ve really sped up our workflow using Untitled.”',
      text: 'COO, Command+R',
      role: 'Web Development Agency',
    },
    {
      image: annieStanley,
      name: 'Annie Stanley',
      text: 'Designer, Catalog',
      role: 'UX Agency',
    },
    {
      image: johnnyBell,
      name: 'Johnny Bell',
      text: 'PM, Sisyphus',
      role: 'Machine Learning',
    },
    {
      image: miaWard,
      name: 'Mia Ward',
      text: 'Fullstack Dev, Quotient',
      role: 'Performance Marketing',
    },
    {
      image: archieYoung,
      name: 'Archie Young',
      text: 'Marketing, Layers',
      role: 'Machine Learning',
    },
  ];

  const MoreTestimonialsSectionWrapper = styled.section`
  width: 1440px;
  height: 918px;
  background: var(--Colors-Background-bg-primary, #FFFFFF);
  padding-top: ${({ theme }) => theme.spacing['9xl']};
  padding-bottom: ${({ theme }) => theme.spacing['9xl']};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1280px;
  max-width: ${({ theme }) => theme.containerWidth};
  padding-right: ${({ theme }) => theme.spacing['container-padding-desktop']};
  padding-left: ${({ theme }) => theme.spacing['container-padding-desktop']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['7xl']};
`;

const FirstContent = styled.div`
  width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
`;

const SecondContent = styled.div`
  width: 2320px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4xl']};
`;

const TestimonialsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px; /* Espaciado entre los botones */
`;

const ArrowsContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
`;

const MoreTestimonialsSection = () => {
  return (
    <MoreTestimonialsSectionWrapper>
      <Container>
        <FirstContent>
          <div>
            <h1>Don’t just take our word for it</h1>
            <p>Hear from some of our amazing customers who are automating their finances.</p>
          </div>
          <div>
            <ButtonContainer>
                <SecondaryButton>Our Customers</SecondaryButton>
                <PrimaryButton>Create Account</PrimaryButton>
            </ButtonContainer>
          </div>
        </FirstContent>
        <SecondContent>
          <TestimonialsContainer>
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </TestimonialsContainer>
          <ArrowsContainer>
            <ArrowButton>
              <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </ArrowIcon>
            </ArrowButton>
            <ArrowButton>
              <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" />
              </ArrowIcon>
            </ArrowButton>
          </ArrowsContainer>
        </SecondContent>
      </Container>
    </MoreTestimonialsSectionWrapper>
  );
};

export default MoreTestimonialsSection;