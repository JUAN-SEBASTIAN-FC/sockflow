import { useRef, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './context/AuthContext';
import useLandingEffects from './hooks/useLandingEffects';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import Login from './components/Login';
import CatalogPage from './pages/CatalogPage';
import AdminPage from './pages/AdminPage';

function Landing({ onLoginOpen }) {
  const rootRef = useRef(null);
  useLandingEffects(rootRef);

  return (
    <div ref={rootRef} id="sf-root" className="sf-root">
      <div className="sf-halo" data-halo />
      <Nav onLoginOpen={onLoginOpen} />
      <Hero />
      <Features />
      <Catalog />
      <FinalCta />
      <Footer />
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // espera a resolver la sesión antes de redirigir
  return user ? children : <Navigate to="/" replace />;
}

export default function App() {
  const [loginOpen, setLoginOpen] = useState(
    () => sessionStorage.getItem('loginOpen') === '1'
  );
  const { user } = useAuth();

  const openLogin = () => {
    sessionStorage.setItem('loginOpen', '1');
    setLoginOpen(true);
  };
  const closeLogin = () => {
    sessionStorage.removeItem('loginOpen');
    setLoginOpen(false);
  };

  // Cerrar si el usuario ya inició sesión
  useEffect(() => {
    if (user) {
      sessionStorage.removeItem('loginOpen');
      setLoginOpen(false);
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing onLoginOpen={openLogin} />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {loginOpen && <Login onClose={closeLogin} />}
    </>
  );
}
