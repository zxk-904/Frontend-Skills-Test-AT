import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  width: 100%;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-text-primary);
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    padding: var(--spacing-lg);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
`;

const MenuItem = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &.dropdown {
    display: flex;
    align-items: center;
    gap: 4px;
    
    &:after {
      content: '▾';
      font-size: 12px;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <NavbarContainer>
      <Logo>Untitled UI</Logo>
      
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </MobileMenuButton>
      
      <MenuItems isOpen={isMenuOpen}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#" className="dropdown">Products</MenuItem>
        <MenuItem href="#" className="dropdown">Resources</MenuItem>
        <MenuItem href="#">Pricing</MenuItem>
      </MenuItems>
      
      <AuthButtons>
        <MenuItem href="#">Log in</MenuItem>
        <Button>Sign up</Button>
      </AuthButtons>
    </NavbarContainer>
  );
};

export default Navbar;
