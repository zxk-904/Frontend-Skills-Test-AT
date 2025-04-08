import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ItemContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md} 0;
  max-width: 800px; 
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #000000; 
`;

const Answer = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  line-height: 1.6;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const FAQItem = ({ question, answer, isExpandable }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    if (isExpandable) {
      setExpanded(!expanded);
    }
  };

  return (
    <ItemContainer>
      <QuestionRow onClick={toggleExpand}>
        <Question>{question}</Question>
        <IconWrapper>
          {expanded ? <FaMinus /> : <FaPlus />}
        </IconWrapper>
      </QuestionRow>
      <Answer expanded={expanded}>{answer}</Answer>
    </ItemContainer>
  );
};

export default FAQItem;