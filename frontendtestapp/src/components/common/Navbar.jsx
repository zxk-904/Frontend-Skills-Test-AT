import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo_untitled.png'; // Ruta del logo

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 80px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #ffffff;
  z-index: 10;
`;

const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Alinea los elementos hacia la izquierda */
  align-items: center;
  padding: 0px 32px;
  width: 1280px;
  max-width: 1280px;
  height: 44px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: 32px;
`;

const Logo = styled.img`
  width: 32px; /* Tamaño fijo del logo */
  height: 32px; /* Tamaño fijo del logo */
  object-fit: contain; /* Asegura que la imagen se ajuste correctamente */
`;

const LogoText = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
  margin-left: 8px; /* Espacio entre el logo y el texto */
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin-left: 16px; /* Espacio entre el texto del logo y los ítems de navegación */
`;

const NavItem = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &.dropdown {
    position: relative;

    &:after {
      content: '▾'; /* Flecha hacia abajo */
      font-size: 12px;
      color: #475467;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-left: auto; /* Empuja los botones hacia la derecha */
  width: auto;
  height: 44px;
`;

const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 6px;
  width: 83px;
  height: 44px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  background: transparent;
  border: 1px solid #d0d5dd;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 6px;
  width: 95px;
  height: 44px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  cursor: pointer;
`;

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarContent>
        {/* Logo */}
        <LogoContainer>
          <Logo src={LogoImage} alt="Company Logo" />
          <LogoText>Untitled UI</LogoText>
        </LogoContainer>

        {/* Navigation */}
        <Navigation>
          <NavItem>Home</NavItem>
          <NavItem className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Products
          </NavItem>
          <NavItem className="dropdown">Resources</NavItem>
          <NavItem>Pricing</NavItem>
        </Navigation>

        {/* Actions */}
        <Actions>
          <SecondaryButton>Log in</SecondaryButton>
          <PrimaryButton>Sign up</PrimaryButton>
        </Actions>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;