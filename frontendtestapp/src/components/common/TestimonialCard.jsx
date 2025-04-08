import React from 'react';
import styled from 'styled-components';
import starIcon from '../../assets/images/icons/star-icon.png';
import blondeImage from '../../assets/images/people/blonde.png';

const CardContainer = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px; 
  width: 95%; 
  margin: 0 auto;
  height: 50vh; 
`;

const LeftSection = styled.div`
  flex: 1;
  background: url(${blondeImage}) no-repeat center center;
  background-size: cover;
  height: 100%;
`;

const RightSection = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.xxl};
  height: 100%;
  position: relative;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-left: 3rem;
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Quote = styled.p`
  font-size: 2.10rem; 
  font-weight: 500;
  line-height: 1.2;
  margin: ${({ theme }) => theme.spacing.md} 0;
  text-align: left;
  margin-left: 3rem;
`;

const Author = styled.div`
  font-size: 1.100rem;
  font-weight: 700;
  opacity: 0.8;
  margin-left: 3rem;
`;

const NavigationDots = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: absolute; 
  bottom: 5rem; 
  left: ${({ theme }) => theme.spacing.lg}; 
  margin-left: 3rem;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.background : 'rgba(255, 255, 255, 0.5)'};
`;

const TestimonialCard = ({ image, stars, quote, author, role }) => {
  return (
    <CardContainer>
      <LeftSection style={{ backgroundImage: `url(${image})` }} />
      <RightSection>
        <div>
          <Stars>
            {[...Array(stars)].map((_, index) => (
              <StarIcon key={index} src={starIcon} alt="Star" />
            ))}
          </Stars>
          <Quote>
            {quote.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Quote>
          <Author>
            - {author}
            <br />
            {role}
          </Author>
        </div>
        <NavigationDots>
          <Dot active />
          <Dot />
          <Dot />
        </NavigationDots>
      </RightSection>
    </CardContainer>
  );
};

export default TestimonialCard;