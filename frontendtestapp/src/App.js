import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/layout/Header';
import IntegrationsSection from './components/sections/IntegrationsSection'; 
import FeaturesSection from './components/sections/FeaturesSection';
import './styles/global.css';
import MetricsSection from './components/sections/MetricsSection';
import TestimonialSection from './components/sections/TestimonialSection';
import CTASection from './components/sections/CTASection';
import FAQSection from './components/sections/FAQSection';
import MoreTestimonialsSection from './components/sections/MoreTestimonialsSection';
import CTA2Section from './components/common/CTA2Card';
import HeroHeaderSection from './components/sections/HeroHeaderSection';
import FooterSection from './components/sections/FooterSection';


const theme = {
  colors: {
    primary: '#7F56D9',
    primaryLight: '#9E77ED',
    primaryDark: '#6941C6',
    textPrimary: '#101828',
    textSecondary: '#667085',
    background: '#FFFFFF',    border: '#D0D5DD',
  },
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
  containerWidth: '1200px',
};

function App() {  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main>
          <HeroHeaderSection />
          <IntegrationsSection /> 
          <MetricsSection />
          <FeaturesSection />
          <TestimonialSection />
          <CTASection />
          <FAQSection />
          <MoreTestimonialsSection />
          {/*<CTA2Section />*/} {/* No se implemento debido a un error*/}
          <FooterSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
