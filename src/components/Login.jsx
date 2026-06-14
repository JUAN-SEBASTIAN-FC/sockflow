import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login({ onClose }) {
  const { login }  = useAuth();
  const navigate   = useNavigate();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [busy,     setBusy]     = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) { setError('Completa todos los campos.'); return; }
    setBusy(true);
    setError('');
    const result = await login(email.trim(), password);
    setBusy(false);
    if (result?.error) { setError('Correo o contraseña incorrectos.'); return; }
    onClose?.();
    navigate('/admin');
  };

  return (
    <div className="login-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="login-card" role="dialog" aria-modal="true" aria-labelledby="login-title">

        <button className="login-card__close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="login-card__brand">
          <div className="login-card__logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="login-card__brand-name">Medias Tuluá</span>
        </div>

        <h2 id="login-title" className="login-card__title">Bienvenido</h2>
        <p className="login-card__subtitle">Accede al panel de administración.</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>

          <div className="login-field">
            <label className="login-field__label" htmlFor="login-email">Correo electrónico</label>
            <div className="login-field__wrap">
              <span className="login-field__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                id="login-email"
                className="login-field__input"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                autoComplete="email"
                disabled={busy}
              />
            </div>
          </div>

          <div className="login-field">
            <label className="login-field__label" htmlFor="login-password">Contraseña</label>
            <div className="login-field__wrap">
              <span className="login-field__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                id="login-password"
                className="login-field__input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                autoComplete="current-password"
                disabled={busy}
              />
            </div>
          </div>

          {error && <p className="login-error" role="alert">{error}</p>}

          <button type="submit" className="login-submit" disabled={busy}>
            <span className="login-submit__shimmer" />
            <span className="login-submit__label">
              {busy ? 'Ingresando…' : 'Iniciar sesión'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
