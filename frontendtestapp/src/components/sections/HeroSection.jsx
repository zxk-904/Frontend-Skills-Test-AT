import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

const HeroContainer = styled.section`
  padding: var(--spacing-xxl) 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`;

const HeroContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const EmailForm = styled.form`
  display: flex;
  gap: var(--spacing-md);
  max-width: 440px;
  margin: 0 auto var(--spacing-md) auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrivacyText = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
`;

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <Headline>Grow your users. Smarter.</Headline>
          <Subheading>
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. 
            Trusted by over 4,000 startups.
          </Subheading>
          
          <EmailForm onSubmit={handleSubmit}>
            <Input placeholder="Enter your email" type="email" required />
            <Button type="submit">Get started</Button>
          </EmailForm>
          
          <PrivacyText>
            We care about your data in our <a href="#">privacy policy</a>.
          </PrivacyText>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
