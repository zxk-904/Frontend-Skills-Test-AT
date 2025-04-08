import React from 'react';
import styled from 'styled-components';

const TestimonialCardWrapper = styled.div`
  width: 360px;
  height: 480px;
  background-size: cover;
  background-position: center;
  border-radius: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const QuoteImageBottomPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
  position: absolute;
  height: 308px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
`;

const AttributionCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 20px;
  gap: 12px;
  width: 312px;
  height: 260px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 0px;
`;

const NameAndStars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 272px;
  height: 74px;
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  width: 116px;
  height: 20px;
`;

const StarIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #FFFFFF;
  stroke: none;
`;

const Name = styled.h3`
  width: 272px;
  height: 38px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #FFFFFF;
`;

const TextAndSupportingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 272px;
  height: 54px;
`;

const Text = styled.p`
  width: 272px;
  height: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
`;

const SupportingText = styled.p`
  width: 272px;
  height: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;

const Quote = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const TestimonialCard = ({ testimonial }) => {
  return (
    <TestimonialCardWrapper style={{ backgroundImage: `url(${testimonial.image})` }}>
      <QuoteImageBottomPanel>
        <AttributionCard>
          {testimonial.quote && <Quote>{testimonial.quote}</Quote>}
          <NameAndStars>
            <Stars>
              {[...Array(5)].map((_, starIndex) => (
                <StarIcon
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </StarIcon>
              ))}
            </Stars>
            <Name>{testimonial.name}</Name>
          </NameAndStars>
          <TextAndSupportingText>
            <Text>{testimonial.text}</Text>
            <SupportingText>{testimonial.role}</SupportingText>
          </TextAndSupportingText>
        </AttributionCard>
      </QuoteImageBottomPanel>
    </TestimonialCardWrapper>
  );
};

export default TestimonialCard;