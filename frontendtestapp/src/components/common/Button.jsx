import styled from 'styled-components';

export const SecondaryButton = styled.button`
  width: 155px;
  height: 48px;
  padding: ${({ theme }) => theme.spacing.lg} 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #D0D5DD);
  background: var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #FFFFFF);
  box-shadow: 0px 1px 2px 0px #1018280D;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #344054;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrimaryButton = styled.button`
  width: 159px;
  height: 48px;
  padding: ${({ theme }) => theme.spacing.lg} 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid var(--Component-colors-Components-Buttons-Primary-button-primary-border, #7F56D9);
  background: var(--Component-colors-Components-Buttons-Primary-button-primary-bg, #7F56D9);
  box-shadow: 0px 1px 2px 0px #1018280D;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;