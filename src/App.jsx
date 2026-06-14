import { useRef } from 'react';
import './App.css';
import useLandingEffects from './hooks/useLandingEffects';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import StockDashboard from './components/StockDashboard';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  const rootRef = useRef(null);
  useLandingEffects(rootRef);

  return (
    <div ref={rootRef} id="sf-root" className="sf-root">
      <div className="sf-halo" data-halo />

      <Nav />
      <Hero />
      <Features />
      <Catalog />
      <StockDashboard />
      <FinalCta />
      <Footer />
    </div>
  );
}
