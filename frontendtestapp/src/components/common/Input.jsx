import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 10px 14px;
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 16px;
  color: var(--color-text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.2);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const Input = ({ placeholder, type = 'text', ...props }) => {
  return (
    <InputWrapper>
      <StyledInput type={type} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default Input;
