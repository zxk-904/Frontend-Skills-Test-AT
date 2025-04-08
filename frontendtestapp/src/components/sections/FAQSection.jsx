import React from 'react';
import styled from 'styled-components';
import FAQItem from '../common/FAQItem';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FAQSection = () => {
  const faqData = [
    {
      question: 'Is there a free trial available?',
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized, 30-minute onboarding call to get you up and running as soon as possible.",
      isExpandable: true,
    },
    {
      question: 'Can I change my plan later?',
      answer: '',
      isExpandable: false,
    },
    {
      question: 'What is your cancellation policy?',
      answer: '',
      isExpandable: false,
    },
    {
      question: 'Can another info be added to an invoice?',
      answer: '',
      isExpandable: false,
    },
    {
      question: 'How does billing work?',
      answer: '',
      isExpandable: false,
    },
    {
      question: 'How do I change my account email?',
      answer: '',
      isExpandable: false,
    },
  ];

  return (
    <SectionContainer>
      <SectionContent>
        <Title>Frequently asked questions</Title>
        <Subtitle>
          Everything you need to know about the product and billing
        </Subtitle>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isExpandable={faq.isExpandable}
          />
        ))}
      </SectionContent>
    </SectionContainer>
  );
};

export default FAQSection;