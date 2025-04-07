import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import ChartSection from './components/sections/ChartSection';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChartSection />
      </main>
    </div>
  );
}

export default App;
