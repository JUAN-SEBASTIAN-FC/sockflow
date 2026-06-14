import { useRef } from 'react';
import css from './lib/css';
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
    <div ref={rootRef} id="sf-root" style={css('position:relative;overflow:hidden;background:#F4F7FB')}>
      {/* halo del cursor */}
      <div data-halo style={css('position:fixed;top:0;left:0;width:380px;height:380px;border-radius:50%;pointer-events:none;z-index:60;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(96,165,250,.22),rgba(125,211,252,.06) 45%,transparent 70%);mix-blend-mode:multiply;opacity:0;transition:opacity .4s ease;will-change:transform')} />

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
