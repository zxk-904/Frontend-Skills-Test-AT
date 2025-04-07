import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--color-border);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Navbar />
      </div>
    </HeaderContainer>
  );
};

export default Header;
