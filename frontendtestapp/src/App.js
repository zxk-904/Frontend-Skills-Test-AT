import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ChartSection from './components/sections/ChartSection';
import IntegrationsSection from './components/sections/IntegrationsSection'; 
import './styles/global.css';// Define un tema básico para styled-components 
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
        <Header />
        <main>
          <HeroSection />
          <ChartSection />
          <IntegrationsSection /> 
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
