import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo_untitled.png'; 
import AppStoreImage from '../../assets/images/boton_appstore.png'; 
import GooglePlayImage from '../../assets/images/boton_googleplay.png'; 

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffffff;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1216px;
  height: 240px;
  gap: 32px;
  padding: 16px 0 8px; 
  margin-bottom: 70px; 
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 160px;
`;

const ColumnHeading = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #101828;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #6941c6;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 1px;
  background: #e4e7ec; 
  margin: 16px 0; 
`;

const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  max-width: ${({ theme }) => theme.containerWidth || '1200px'};
  height: 64px;
  gap: ${({ theme }) => theme.spacing['4xl'] || '32px'};
  padding: 0 ${({ theme }) => theme.spacing['container-padding-desktop'] || '32px'};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
`;

const Logo = styled.img`
  width: 40px; 
  height: 40px;
`;

const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #667085;
`;

const PageName = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 32px; 
  width: 160px; 
`;

const DownloadHeading = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #101828;
  margin-bottom: 8px; 
`;

const DownloadButton = styled.img`
  width: 160px;
  height: 48px;
  cursor: pointer;
`;

const FooterSection = () => {
  return (
    <FooterContainer>
      {/* Links Container */}
      <LinksContainer>
        {/* Primera columna: Product */}
        <FooterColumn>
          <ColumnHeading>Product</ColumnHeading>
          <FooterLinks>
            <FooterLink href="#">Overview</FooterLink>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Solutions</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Releases</FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Segunda columna: Company */}
        <FooterColumn>
          <ColumnHeading>Company</ColumnHeading>
          <FooterLinks>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">News</FooterLink>
            <FooterLink href="#">Media kit</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Tercera columna: Resources */}
        <FooterColumn>
          <ColumnHeading>Resources</ColumnHeading>
          <FooterLinks>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Newsletter</FooterLink>
            <FooterLink href="#">Events</FooterLink>
            <FooterLink href="#">Help centre</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
            <FooterLink href="#">Support</FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Cuarta columna: Social */}
        <FooterColumn>
          <ColumnHeading>Social</ColumnHeading>
          <FooterLinks>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
            <FooterLink href="#">AngelList</FooterLink>
            <FooterLink href="#">Dribbble</FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Quinta columna: Legal */}
        <FooterColumn>
          <ColumnHeading>Legal</ColumnHeading>
          <FooterLinks>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Cookies</FooterLink>
            <FooterLink href="#">Licenses</FooterLink>
            <FooterLink href="#">Settings</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>

        {/* Botones de descarga */}
        <DownloadButtons>
          <DownloadHeading>Get the app</DownloadHeading>
          <DownloadButton src={AppStoreImage} alt="Download on the App Store" />
          <DownloadButton src={GooglePlayImage} alt="Get it on Google Play" />
        </DownloadButtons>
      </LinksContainer>

      {/* Línea divisoria */}
      <Divider />

      {/* Footer Bottom Container */}
      <FooterBottomContainer>
        <LogoContainer>
          <Logo src={LogoImage} alt="Company Logo" />
          <PageName>Untitled UI</PageName>
        </LogoContainer>
        <FooterText>© 2025 Untitled UI. All rights reserved.</FooterText>
      </FooterBottomContainer>
    </FooterContainer>
  );
};

export default FooterSection;