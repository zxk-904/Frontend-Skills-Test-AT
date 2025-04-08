import React from 'react';
import styled from 'styled-components';
import starIcon from '../../assets/images/icons/star-icon.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1216px;
  height: 448px;
  background: #53389e;
  border-radius: 24px;
`;

const ImageContainer = styled.div`
  width: 480px;
  height: 448px;
  min-height: 448px;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: cover;
  border-radius: 0px;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px;
  gap: 40px;
  width: 736px;
  height: 434px;
`;

const QuoteAndAttribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 608px;
  height: 306px;
`;

const QuoteAndStars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 608px;
  height: 176px;
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 116px;
  height: 20px;
`;

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Quote = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 608px;
  height: 132px;
`;

const Attribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 608px;
  height: 56px;
`;

const Author = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  width: 608px;
  height: 28px;
`;

const Role = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #e9d7fe;
  width: 608px;
  height: 24px;
`;

const PaginationDotGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 62px;
  height: 10px;
`;

const PaginationDot = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ active }) => (active ? '#FFFFFF' : '#9E77ED')};
  border-radius: 9999px;
`;

const TestimonialCard = ({ image, stars, quote, author, role }) => {
  return (
    <CardContainer>
      <ImageContainer src={image} />
      <Content>
        <QuoteAndAttribution>
          <QuoteAndStars>
            <Stars>
              {[...Array(stars)].map((_, index) => (
                <StarIcon key={index} src={starIcon} alt="Star" />
              ))}
            </Stars>
            <Quote>{quote.join(' ')}</Quote>
          </QuoteAndStars>
          <Attribution>
            <Author>{author}</Author>
            <Role>{role}</Role>
          </Attribution>
        </QuoteAndAttribution>
        <PaginationDotGroup>
          <PaginationDot active />
          <PaginationDot />
          <PaginationDot />
        </PaginationDotGroup>
      </Content>
    </CardContainer>
  );
};

export default TestimonialCard;