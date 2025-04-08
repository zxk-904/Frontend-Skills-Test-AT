import React from 'react';
import styled from 'styled-components';
import CTA2Card from '../common/CTA2Card';
import image from '../../assets/images/people/people5.png';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
  max-width: 1280px; /* Ancho máximo del contenedor */
  height: 400px; /* Altura fija */
  padding: 0 ${({ theme }) => theme.spacing['container-padding-desktop'] || '32px'}; /* Padding lateral */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
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