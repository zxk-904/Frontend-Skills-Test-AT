import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background-color: ${props => props.variant === 'primary' ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : 'var(--color-primary)'};
  border: ${props => props.variant === 'primary' ? 'none' : '1px solid var(--color-primary)'};
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.variant === 'primary' ? 'var(--color-primary-dark)' : 'rgba(127, 86, 217, 0.05)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(127, 86, 217, 0.3);
  }
`;

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
