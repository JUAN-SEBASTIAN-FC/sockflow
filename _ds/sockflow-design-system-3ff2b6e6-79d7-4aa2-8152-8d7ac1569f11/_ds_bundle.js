/* @ds-bundle: {"format":3,"namespace":"SockFlowDesignSystem_3ff2b6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"46e32b1d5b9c","components/core/Button.jsx":"a4c28a4d1737","components/core/Card.jsx":"1c39aaa6adb5","components/core/Input.jsx":"91289675aefd","components/core/StatCard.jsx":"13633c65d30e","components/core/Tag.jsx":"8f2a4d6e268f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SockFlowDesignSystem_3ff2b6 = window.SockFlowDesignSystem_3ff2b6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Inline label/chip for status, categories, and feature highlights.
 * Used in feature chips, filter tags, stat indicators, and nav badges.
 */
function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'var(--font-display)',
    fontWeight: '600',
    borderRadius: 'var(--radius-full)',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em'
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: '11px'
    },
    md: {
      padding: '4px 12px',
      fontSize: '12.5px'
    },
    lg: {
      padding: '6px 16px',
      fontSize: '13.5px'
    }
  };
  const variants = {
    primary: {
      background: 'rgba(37,99,235,0.10)',
      color: 'var(--color-primary)'
    },
    deep: {
      background: 'rgba(30,58,138,0.10)',
      color: 'var(--color-primary-deep)'
    },
    sky: {
      background: 'rgba(96,165,250,0.15)',
      color: '#1558C0'
    },
    cyan: {
      background: 'rgba(125,211,252,0.20)',
      color: '#0369A1'
    },
    subtle: {
      background: 'var(--color-surface-subtle)',
      color: 'var(--color-text-secondary)'
    },
    dark: {
      background: 'rgba(255,255,255,0.14)',
      color: '#fff'
    },
    success: {
      background: 'rgba(16,185,129,0.10)',
      color: '#059669'
    },
    warning: {
      background: 'rgba(245,158,11,0.10)',
      color: '#B45309'
    },
    error: {
      background: 'rgba(239,68,68,0.10)',
      color: '#DC2626'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * SockFlow pill button. Supports 6 variants and 4 sizes.
 * Shape is always full-radius (pill). Use `dark` for primary CTAs (landing nav),
 * `primary` for in-app interactive actions, `ghost` for secondary links.
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  onClick,
  href,
  type = 'button'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: '600',
    borderRadius: 'var(--radius-full)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    opacity: disabled ? 0.5 : 1,
    lineHeight: '1',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    letterSpacing: '-0.01em'
  };
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '13px'
    },
    md: {
      padding: '11px 26px',
      fontSize: '14.5px'
    },
    lg: {
      padding: '14px 34px',
      fontSize: '16px'
    },
    xl: {
      padding: '18px 42px',
      fontSize: '18px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      boxShadow: 'var(--shadow-btn-primary)'
    },
    dark: {
      background: 'var(--color-primary-deep)',
      color: '#fff',
      boxShadow: 'var(--shadow-btn-dark)'
    },
    secondary: {
      background: 'var(--color-surface-subtle)',
      color: 'var(--color-primary)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-primary)',
      boxShadow: 'none'
    },
    white: {
      background: '#fff',
      color: 'var(--color-primary-deep)',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: style
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Container card with multiple visual variants.
 * Default: white with blue-tinted shadow and border.
 * Dark variant used for the "features" dark section on the landing page.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  elevated = false,
  style: extraStyle = {},
  onClick
}) {
  const paddings = {
    none: '0',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px'
  };
  const variants = {
    default: {
      background: 'var(--color-surface)',
      border: 'var(--border-default)',
      boxShadow: elevated ? 'var(--shadow-lg)' : 'var(--shadow-md)'
    },
    surface: {
      background: 'var(--color-surface-subtle)',
      border: 'none',
      boxShadow: 'none'
    },
    muted: {
      background: 'var(--color-bg)',
      border: 'var(--border-default)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--color-primary-deep)',
      border: 'none',
      boxShadow: 'var(--shadow-xl)',
      color: '#fff'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      border: 'none',
      boxShadow: 'var(--shadow-xl)',
      color: '#fff'
    },
    glow: {
      background: 'var(--color-surface)',
      border: '1px solid rgba(96,165,250,0.30)',
      boxShadow: 'var(--shadow-md), 0 0 0 1px rgba(96,165,250,0.08), var(--shadow-glow-sm)'
    },
    glass: {
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.20)',
      boxShadow: 'var(--shadow-lg)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }
  };
  const style = {
    borderRadius: 'var(--radius-xl)',
    padding: paddings[padding],
    cursor: onClick ? 'pointer' : undefined,
    ...variants[variant],
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Text input with label, error state, and optional leading icon.
 * Focus ring uses brand blue; error state switches to red border.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  hint,
  disabled = false,
  size = 'md',
  icon,
  id
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: '13px',
      height: '36px'
    },
    md: {
      padding: '10px 16px',
      fontSize: '15px',
      height: '42px'
    },
    lg: {
      padding: '13px 18px',
      fontSize: '16px',
      height: '50px'
    }
  };
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    ...sizes[size],
    paddingLeft: icon ? `${parseInt(sizes[size].padding) + 28}px` : sizes[size].padding.split(' ')[1],
    fontFamily: 'var(--font-body)',
    color: 'var(--color-text-primary)',
    background: disabled ? 'var(--color-surface-muted)' : 'var(--color-surface)',
    border: error ? '1.5px solid var(--color-error)' : focused ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    boxShadow: error ? '0 0 0 3px rgba(239,68,68,0.12)' : focused ? '0 0 0 3px rgba(37,99,235,0.12)' : 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: '600',
      fontSize: '13px',
      color: 'var(--color-text-primary)',
      letterSpacing: '0.01em',
      lineHeight: '1'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '12px',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-text-secondary)',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
      lineHeight: '1.4',
      fontFamily: 'var(--font-body)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
/**
 * Dashboard metric card showing a KPI with label, large value, and trend indicator.
 * Appears as floating cards next to the hero 3D product illustration.
 */
function StatCard({
  label,
  value,
  change,
  changeLabel,
  trend = 'up',
  icon,
  style: extraStyle = {}
}) {
  const isUp = trend === 'up';
  const trendColor = isUp ? '#10B981' : '#EF4444';
  const trendBg = isUp ? 'rgba(16,185,129,0.10)' : 'rgba(239,68,68,0.10)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      border: 'var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...extraStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12.5px',
      fontWeight: '500',
      color: 'var(--color-text-secondary)',
      lineHeight: '1'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '30px',
      height: '30px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(37,99,235,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      flexShrink: 0
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: '800',
      fontSize: '26px',
      color: 'var(--color-text-primary)',
      lineHeight: '1',
      letterSpacing: '-0.02em'
    }
  }, value), change && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '3px 8px',
      borderRadius: 'var(--radius-full)',
      background: trendBg,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: trendColor,
      fontWeight: '700',
      lineHeight: '1'
    }
  }, isUp ? '↑' : '↓', " ", change), changeLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--color-text-secondary)',
      fontWeight: '400',
      lineHeight: '1'
    }
  }, changeLabel)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Dismissible or static tag/chip. Used for filters, category labels,
 * size/color tags in inventory, and feature list items.
 */
function Tag({
  children,
  color = 'default',
  closable = false,
  onClose,
  style: extraStyle = {}
}) {
  const colors = {
    default: {
      background: 'var(--color-surface-subtle)',
      color: 'var(--color-text-primary)',
      border: 'var(--border-default)'
    },
    primary: {
      background: 'rgba(37,99,235,0.08)',
      color: 'var(--color-primary)',
      border: '1px solid rgba(37,99,235,0.20)'
    },
    sky: {
      background: 'rgba(96,165,250,0.10)',
      color: '#1558C0',
      border: '1px solid rgba(96,165,250,0.25)'
    },
    dark: {
      background: 'var(--color-primary-deep)',
      color: '#fff',
      border: 'none'
    },
    success: {
      background: 'rgba(16,185,129,0.08)',
      color: '#059669',
      border: '1px solid rgba(16,185,129,0.20)'
    },
    error: {
      background: 'rgba(239,68,68,0.08)',
      color: '#DC2626',
      border: '1px solid rgba(239,68,68,0.20)'
    }
  };
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 12px',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-body)',
    fontWeight: '500',
    fontSize: '12.5px',
    lineHeight: '1',
    ...colors[color],
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children, closable && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      lineHeight: '1',
      color: 'inherit',
      opacity: 0.6,
      fontSize: '13px',
      marginLeft: '1px'
    },
    "aria-label": "Eliminar"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

})();
