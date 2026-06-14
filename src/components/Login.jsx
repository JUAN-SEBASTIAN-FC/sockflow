import './Login.css';

export default function Login({ onClose }) {
  return (
    <div className="login-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="login-card" role="dialog" aria-modal="true" aria-labelledby="login-title">

        <button className="login-card__close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Marca */}
        <div className="login-card__brand">
          <div className="login-card__logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>
          <span className="login-card__brand-name">Medias Tuluá</span>
        </div>

        <h2 id="login-title" className="login-card__title">Bienvenido</h2>
        <p className="login-card__subtitle">Inicia sesión para gestionar tus pedidos y stock.</p>

        {/* Formulario — solo visual, sin lógica */}
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>

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
                autoComplete="email"
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
                autoComplete="current-password"
              />
            </div>
          </div>

          <div className="login-row">
            <label className="login-remember">
              <input type="checkbox" className="login-remember__check" />
              <span className="login-remember__label">Recordarme</span>
            </label>
            <button type="button" className="login-forgot">¿Olvidaste tu contraseña?</button>
          </div>

          <button type="submit" className="login-submit">
            <span className="login-submit__shimmer" />
            <span className="login-submit__label">Iniciar sesión</span>
          </button>

          <div className="login-divider">
            <span className="login-divider__line" />
            <span className="login-divider__text">o</span>
            <span className="login-divider__line" />
          </div>

          <div className="login-card__footer">
            <span className="login-card__footer-text">¿No tienes cuenta? </span>
            <button type="button" className="login-card__footer-link">Regístrate</button>
          </div>
        </form>

      </div>
    </div>
  );
}
