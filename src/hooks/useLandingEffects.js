import { useEffect } from 'react';

/**
 * Reúne toda la interactividad de la landing (porteada 1:1 desde el script
 * original): sombra de nav al hacer scroll, halo del cursor + parallax,
 * animaciones de reveal, contadores, barras, anillos, dibujo de la línea,
 * tilt 3D de las tarjetas y filtrado del catálogo.
 *
 * @param {React.RefObject<HTMLElement>} rootRef raíz donde viven los `data-*`.
 */
export default function useLandingEffects(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups = [];

    /* ---------- NAV scroll shadow ---------- */
    const nav = root.querySelector('[data-nav]');
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (nav) {
        if (y > 16) {
          nav.style.background = 'rgba(244,247,251,.86)';
          nav.style.boxShadow = '0 6px 24px -10px rgba(37,99,235,.28)';
          nav.style.borderBottomColor = '#DCE9F7';
        } else {
          nav.style.background = 'rgba(244,247,251,.72)';
          nav.style.boxShadow = 'none';
          nav.style.borderBottomColor = 'transparent';
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    /* ---------- cursor halo + parallax ---------- */
    const halo = root.querySelector('[data-halo]');
    const layers = Array.from(root.querySelectorAll('[data-depth]'));
    const onMouseMove = (e) => {
      if (halo) {
        halo.style.opacity = '1';
        halo.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }
      const w = window.innerWidth, h = window.innerHeight;
      const tx = e.clientX / w - 0.5;
      const ty = e.clientY / h - 0.5;
      layers.forEach((l) => {
        const d = parseFloat(l.dataset.depth) || 0;
        l.style.transform = `translate(${tx * d}px, ${ty * d}px)`;
      });
    };
    const onMouseLeave = () => { if (halo) halo.style.opacity = '0'; };
    root.addEventListener('mousemove', onMouseMove);
    root.addEventListener('mouseleave', onMouseLeave);
    cleanups.push(() => {
      root.removeEventListener('mousemove', onMouseMove);
      root.removeEventListener('mouseleave', onMouseLeave);
    });

    /* ---------- reveal observer ---------- */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          const delay = parseFloat(el.dataset.delay) || 0;
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---------- counters ---------- */
    const fmt = (n, dec, sep, prefix, suffix) => {
      let s = dec ? n.toFixed(dec) : Math.round(n).toString();
      if (sep) {
        const parts = s.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        s = parts.join('.');
      }
      return (prefix || '') + s + (suffix || '');
    };
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count) || 0;
      const dec = parseInt(el.dataset.dec || '0', 10);
      const sep = el.dataset.sep === '1';
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dur = 1500;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        el.textContent = fmt(target * ease(t), dec, sep, prefix, suffix);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(target, dec, sep, prefix, suffix);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    root.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ---------- bars ---------- */
    const bio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          if (el._axis === 'height') el.style.height = el.dataset.fill;
          else el.style.width = el.dataset.fill;
          bio.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    root.querySelectorAll('[data-bar]').forEach((el) => {
      // Las barras verticales (hero) empiezan con height:0 → animan height.
      // Las horizontales (stock) empiezan con width:0 → animan width.
      const cs = el.getAttribute('style') || '';
      el._axis = cs.indexOf('width:0') !== -1 ? 'width' : 'height';
      bio.observe(el);
    });
    cleanups.push(() => bio.disconnect());

    /* ---------- rings ---------- */
    const rio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const c = en.target;
          const circ = parseFloat(c.dataset.circ) || 0;
          const pct = parseFloat(c.dataset.pct) || 0;
          c.style.strokeDashoffset = String(circ * (1 - pct / 100));
          rio.unobserve(c);
        }
      });
    }, { threshold: 0.4 });
    root.querySelectorAll('[data-ring]').forEach((el) => rio.observe(el));
    cleanups.push(() => rio.disconnect());

    /* ---------- line chart draw ---------- */
    const lio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.style.strokeDashoffset = '0'; lio.unobserve(en.target); } });
    }, { threshold: 0.4 });
    root.querySelectorAll('[data-line]').forEach((el) => lio.observe(el));
    cleanups.push(() => lio.disconnect());

    /* ---------- product cards: tilt + colors + dots ---------- */
    root.querySelectorAll('[data-product]').forEach((card) => {
      // colores por tarjeta desde los data-attrs
      const img = card.querySelector('[data-pimg]');
      const f = card.dataset.filterCss;
      if (img && f && f !== 'none') img.style.filter = f;
      const catBadge = card.querySelector('[data-catbadge]');
      if (catBadge) { catBadge.style.background = card.dataset.catbg; catBadge.style.color = card.dataset.catcolor; }
      const statusBadge = card.querySelector('[data-statusbadge]');
      const statusDot = card.querySelector('[data-statusdot]');
      if (statusBadge) { statusBadge.style.background = card.dataset.sbg; statusBadge.style.color = card.dataset.scolor; }
      if (statusDot) statusDot.style.background = (card.dataset.scolor === '#DC2626') ? '#EF4444' : (card.dataset.scolor === '#B45309' ? '#F59E0B' : '#10B981');
      // puntos de colorway
      const dots = card.querySelector('[data-dots]');
      if (dots && card.dataset.colors && dots.childElementCount === 0) {
        card.dataset.colors.split(',').forEach((hex) => {
          const s = document.createElement('span');
          s.style.cssText = `width:13px;height:13px;border-radius:50%;background:${hex};box-shadow:0 0 0 1.5px #fff, 0 0 0 2.5px ${hex}33`;
          dots.appendChild(s);
        });
      }
      // tilt 3D
      const glare = card.querySelector('[data-glare]');
      const onCardMove = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -9;
        const ry = (px - 0.5) * 11;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
        card.style.boxShadow = '0 26px 50px -16px rgba(37,99,235,.34)';
        card.style.borderColor = 'rgba(96,165,250,.55)';
        if (img) img.style.transform = 'scale(1.12)';
        if (glare) glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.5), transparent 55%)`;
      };
      const onCardLeave = () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow-md)';
        card.style.borderColor = '#DCE9F7';
        if (img) img.style.transform = 'scale(1.04)';
        if (glare) glare.style.background = 'transparent';
      };
      card.addEventListener('mousemove', onCardMove);
      card.addEventListener('mouseleave', onCardLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onCardMove);
        card.removeEventListener('mouseleave', onCardLeave);
      });
    });

    /* ---------- catalog filter ---------- */
    const tabs = Array.from(root.querySelectorAll('[data-filter]'));
    const cards = Array.from(root.querySelectorAll('[data-product]'));
    const setTab = (tab, active) => {
      if (active) {
        tab.style.background = '#1E3A8A';
        tab.style.color = '#fff';
        tab.style.borderColor = 'transparent';
        tab.style.boxShadow = '0 6px 18px rgba(30,58,138,.3)';
      } else {
        tab.style.background = '#fff';
        tab.style.color = '#475569';
        tab.style.borderColor = '#DCE9F7';
        tab.style.boxShadow = 'none';
      }
    };
    tabs.forEach((tab) => {
      const onOver = () => { if (tab.style.background.indexOf('30') === -1 && tab.style.color !== 'rgb(255, 255, 255)') { tab.style.borderColor = '#60A5FA'; tab.style.color = '#2563EB'; } };
      const onOut = () => { if (tab.style.color !== 'rgb(255, 255, 255)') { tab.style.borderColor = '#DCE9F7'; tab.style.color = '#475569'; } };
      const onClick = () => {
        const f = tab.dataset.filter;
        tabs.forEach((t) => setTab(t, t === tab));
        cards.forEach((c) => {
          const show = f === 'all' || c.dataset.slug === f;
          if (show) {
            c.style.display = '';
            c.style.opacity = '0';
            c.style.transform = 'translateY(18px)';
            requestAnimationFrame(() => requestAnimationFrame(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }));
          } else {
            c.style.display = 'none';
          }
        });
      };
      tab.addEventListener('mouseover', onOver);
      tab.addEventListener('mouseout', onOut);
      tab.addEventListener('click', onClick);
      cleanups.push(() => {
        tab.removeEventListener('mouseover', onOver);
        tab.removeEventListener('mouseout', onOut);
        tab.removeEventListener('click', onClick);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [rootRef]);
}
