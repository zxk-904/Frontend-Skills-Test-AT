import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import Input from '../common/Input';
import { PrimaryButton } from '../common/Button';
import MockupChartComponent from '../common/MockChartComponent';
import ActivityGauge from '../common/ActivityGauge';
import RingMiddleImage from '../../assets/images/lineas_gauge/ring-middle.png';
import RingInnerImage from '../../assets/images/lineas_gauge/ring-inner.png'; 
import RingOuterImage from '../../assets/images/lineas_gauge/ring-outer.png';



const HeroHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  height: 1278px;
  background: #ffffff;
  gap: ${({ theme }) => theme.spacing['7xl']};
  padding-top: ${({ theme }) => theme.spacing['4xl']};
  padding-bottom: ${({ theme }) => theme.spacing['9xl']};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 1070px;
  max-width: ${({ theme }) => theme.containerWidth};
  padding-right: ${({ theme }) => theme.spacing['container-padding-desktop']};
  padding-left: ${({ theme }) => theme.spacing['container-padding-desktop']};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 32px 192px;
  gap: 48px;
  width: 1216px;
  height: 674px;
  background: #53389e;
  border-radius: 24px;
`;

const HeadingAndSupportingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 768px;
  max-width: 768px;
  height: 264px;
`;

const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 768px;
  height: 180px;
`;

const SupportingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #e9d7fe;
  width: 768px;
  height: 60px;
`;

const EmailCapture = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 480px;
  max-width: 480px;
  height: 74px;
`;

const HintText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #e9d7fe;
  width: 335px;
  height: 20px;
`;

const MockupContainer = styled.div`
  position: relative;
  width: 1216px;
  height: 396px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockupCard = styled.div`
  position: absolute;
  width: 800px;
  height: 460px;
  left: calc(50% - 800px / 2 + 1px);
  top: -96px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const MockupText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  width: 736px;
  height: 28px;
  text-align: center;
`;

const ActivityGaugeWrapper = styled.div`
  position: absolute;
  bottom: -70px; 
  right: -100px; 
`;

const HeroHeaderSection = () => {
  const gaugeImages = [
    { src: RingOuterImage, size: 224 }, 
    { src: RingMiddleImage, size: 184 }, 
    { src: RingInnerImage, size: 144 }, 
  ];
  return (
    <HeroHeaderContainer>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <ContentContainer>
        <ContentBox>
          <HeadingAndSupportingText>
            <Heading>Grow your users. Smarter.</Heading>
            <SupportingText>
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </SupportingText>
          </HeadingAndSupportingText>

          <EmailCapture>
            <Input placeholder="Enter your email" type="email" />
            <PrimaryButton>Get Started</PrimaryButton>
          </EmailCapture>

          <HintText>We care about your data in our privacy policy.</HintText>
        </ContentBox>

        <MockupContainer>
          <MockupCard>
            <MockupText>Users over time</MockupText>
            <MockupChartComponent />
            <ActivityGaugeWrapper>
              <ActivityGauge images={gaugeImages}/>
            </ActivityGaugeWrapper>
          </MockupCard>
        </MockupContainer>
      </ContentContainer>
    </HeroHeaderContainer>
  );
};

export default HeroHeaderSection;