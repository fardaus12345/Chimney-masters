/* @ds-bundle: {"format":4,"namespace":"ChimneyMastersDesignSystem_aca12a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"RatingStars","sourcePath":"components/display/RatingStars.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"cd0ee1bd7039","components/actions/IconButton.jsx":"90b8e8830882","components/display/Badge.jsx":"1bb8aafab877","components/display/Card.jsx":"097c9ccc0996","components/display/RatingStars.jsx":"875ed3685463","components/display/Tag.jsx":"f5a737fce945","components/feedback/Dialog.jsx":"1d00114e1c02","components/feedback/Toast.jsx":"e9aeab646a6e","components/feedback/Tooltip.jsx":"e75a03b4036e","components/forms/Checkbox.jsx":"2555403bd2bf","components/forms/Input.jsx":"84428222acac","components/forms/Radio.jsx":"f301ada83855","components/forms/Select.jsx":"5965744d35db","components/forms/Switch.jsx":"3fb56e3aaaa5","components/navigation/Tabs.jsx":"c08474186739","ui_kits/website/ContactScreen.jsx":"9cc81ed5af6d","ui_kits/website/HomeScreen.jsx":"c6d353f74503","ui_kits/website/ServiceScreen.jsx":"97407b119677","ui_kits/website/Shared.jsx":"e239e6a270dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChimneyMastersDesignSystem_aca12a = window.ChimneyMastersDesignSystem_aca12a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chimney Masters button. variant: primary (red), secondary (charcoal outline),
 * dark (solid charcoal), ghost (text). size: sm | md | lg. pill for phone CTAs.
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  disabled = false,
  icon = null,
  children,
  style,
  ...rest
}) {
  const [state, setState] = React.useState('idle'); // idle | hover | active
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14
    },
    md: {
      padding: '12px 24px',
      fontSize: 16
    },
    lg: {
      padding: '16px 32px',
      fontSize: 18
    }
  };
  const palettes = {
    primary: {
      idle: {
        background: 'var(--accent)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-cta)',
        transform: 'translateY(0) scale(1)'
      },
      hover: {
        background: 'var(--accent-hover)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: '0 8px 24px rgba(227,12,29,0.38)',
        transform: 'translateY(-2px) scale(1.015)'
      },
      active: {
        background: 'var(--accent-pressed)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'none',
        transform: 'translateY(0) scale(0.98)'
      }
    },
    secondary: {
      idle: {
        background: 'transparent',
        color: 'var(--cm-charcoal-800)',
        border: '1px solid var(--border-strong)',
        transform: 'translateY(0) scale(1)'
      },
      hover: {
        background: 'var(--cm-gray-50)',
        color: 'var(--cm-charcoal-800)',
        border: '1px solid var(--cm-gray-400)',
        transform: 'translateY(-2px) scale(1.015)'
      },
      active: {
        background: 'var(--cm-gray-100)',
        color: 'var(--cm-charcoal-800)',
        border: '1px solid var(--cm-gray-400)',
        transform: 'translateY(0) scale(0.98)'
      }
    },
    dark: {
      idle: {
        background: 'var(--cm-charcoal-800)',
        color: '#fff',
        border: '1px solid transparent',
        transform: 'translateY(0) scale(1)'
      },
      hover: {
        background: 'var(--cm-charcoal-700)',
        color: '#fff',
        border: '1px solid transparent',
        transform: 'translateY(-2px) scale(1.015)'
      },
      active: {
        background: 'var(--cm-charcoal-900)',
        color: '#fff',
        border: '1px solid transparent',
        transform: 'translateY(0) scale(0.98)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--accent)',
        border: '1px solid transparent',
        transform: 'translateY(0) scale(1)'
      },
      hover: {
        background: 'var(--cm-red-50)',
        color: 'var(--accent-pressed)',
        border: '1px solid transparent',
        transform: 'translateY(0) scale(1)'
      },
      active: {
        background: 'var(--cm-red-100)',
        color: 'var(--accent-pressed)',
        border: '1px solid transparent',
        transform: 'translateY(0) scale(0.98)'
      }
    },
    onDark: {
      idle: {
        background: 'rgba(255,255,255,0.06)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.4)',
        transform: 'translateY(0) scale(1)'
      },
      hover: {
        background: 'rgba(255,255,255,0.16)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.65)',
        transform: 'translateY(-2px) scale(1.015)'
      },
      active: {
        background: 'rgba(255,255,255,0.24)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.65)',
        transform: 'translateY(0) scale(0.98)'
      }
    }
  };
  const p = palettes[variant][disabled ? 'idle' : state];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background 0.3s var(--ease-standard), box-shadow 0.3s var(--ease-standard), transform 0.3s var(--ease-standard), border-color 0.3s var(--ease-standard)',
      ...sizes[size],
      ...p,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. variant: default (outline) | dark | accent. */
function IconButton({
  variant = 'default',
  size = 40,
  label,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const palettes = {
    default: {
      idle: {
        background: '#fff',
        color: 'var(--cm-charcoal-800)',
        border: '1px solid var(--border-strong)'
      },
      hover: {
        background: 'var(--cm-gray-50)',
        color: 'var(--cm-charcoal-800)',
        border: '1px solid var(--cm-gray-400)'
      }
    },
    dark: {
      idle: {
        background: 'var(--cm-charcoal-800)',
        color: '#fff',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--cm-charcoal-700)',
        color: '#fff',
        border: '1px solid transparent'
      }
    },
    accent: {
      idle: {
        background: 'var(--accent)',
        color: '#fff',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--accent-hover)',
        color: '#fff',
        border: '1px solid transparent'
      }
    }
  };
  const p = palettes[variant][hover ? 'hover' : 'idle'];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...p,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/** Small status badge. tone: accent | neutral | success | warning | danger | dark. */
function Badge({
  tone = 'accent',
  children,
  style
}) {
  const tones = {
    accent: {
      background: 'var(--cm-red-100)',
      color: 'var(--cm-red-700)'
    },
    neutral: {
      background: 'var(--cm-gray-100)',
      color: 'var(--cm-gray-600)'
    },
    success: {
      background: 'var(--cm-success-bg)',
      color: 'var(--cm-success)'
    },
    warning: {
      background: 'var(--cm-warning-bg)',
      color: 'var(--cm-warning)'
    },
    danger: {
      background: 'var(--cm-danger-bg)',
      color: 'var(--cm-danger)'
    },
    dark: {
      background: 'var(--cm-charcoal-800)',
      color: '#fff'
    },
    solid: {
      background: 'var(--accent)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Content card. variant: default | feature (icon service card) | tint (red-wash coupon/callout). */
function Card({
  variant = 'default',
  hoverable = false,
  icon = null,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const backgrounds = {
    default: 'var(--surface-card)',
    feature: 'var(--surface-card)',
    tint: 'var(--surface-accent-tint)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: backgrounds[variant],
      border: hoverable && hover ? '1px solid var(--border-hover-accent)' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hoverable && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hoverable && hover ? 'translateY(-4px)' : 'translateY(0)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-body)',
      transition: 'box-shadow 0.35s var(--ease-standard), border-color 0.35s var(--ease-standard), transform 0.35s var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cm-red-50)',
      color: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: hoverable && hover ? 'scale(1.08)' : 'scale(1)',
      transition: 'transform 0.35s var(--ease-standard)'
    }
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-heading)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 4
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/RatingStars.jsx
try { (() => {
/** Star rating row, 0–5 in halves. Amber fill. */
function RatingStars({
  rating = 5,
  size = 18,
  showValue = false,
  valueColor = 'var(--text-heading)',
  style
}) {
  const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, rating - i)));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      ...style
    }
  }, stars.map((fill, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: size,
    color: "var(--cm-gray-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      width: `${fill * 100}%`
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: size,
    color: "var(--cm-amber-500)"
  })))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: size * 0.85,
      color: valueColor
    }
  }, rating.toFixed(1)));
}
function Star({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    stroke: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
  }));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Quiet label chip (service areas, filters). Optional onRemove shows an ×. */
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13,
      color: 'var(--cm-gray-600)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-full)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--cm-gray-400)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with scrim. Controlled via open/onClose. */
function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(17, 24, 39, 0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      width,
      maxWidth: '100%',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--cm-gray-500)',
      fontSize: 22,
      lineHeight: 1,
      padding: 4
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Inline toast/notification bar. tone: success | danger | neutral. */
function Toast({
  tone = 'success',
  children,
  onDismiss,
  style
}) {
  const tones = {
    success: {
      background: 'var(--cm-success-bg)',
      color: 'var(--cm-success)',
      border: '1px solid rgba(21,128,61,.25)'
    },
    danger: {
      background: 'var(--cm-danger-bg)',
      color: 'var(--cm-danger)',
      border: '1px solid rgba(185,28,28,.25)'
    },
    neutral: {
      background: 'var(--cm-charcoal-800)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...tones[tone],
      ...style
    }
  }, children, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      opacity: .7,
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip. Wraps children; dark charcoal bubble above. */
function Tooltip({
  text,
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%, -8px)',
      background: 'var(--cm-charcoal-800)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via checked/onChange or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(v => !v);
    onChange && onChange(!isChecked);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      flex: 'none',
      border: isChecked ? '1px solid var(--accent)' : '1px solid var(--border-strong)',
      background: isChecked ? 'var(--accent)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast), border-color var(--duration-fast)'
    }
  }, isChecked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, hint, and error state. */
function Input({
  label,
  hint,
  error,
  type = 'text',
  placeholder,
  value,
  onChange,
  textarea = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--cm-danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const Tag = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: textarea ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    rows: textarea ? 4 : undefined,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${borderColor}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      background: '#fff',
      resize: textarea ? 'vertical' : undefined,
      transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--cm-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. options: strings or {value,label}. */
function Radio({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, opts.map(o => {
    const on = selected === o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontSize: 15,
        color: 'var(--text-body)',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        flex: 'none',
        boxSizing: 'border-box',
        border: on ? '6px solid var(--accent)' : '1px solid var(--border-strong)',
        background: '#fff',
        transition: 'border var(--duration-fast)'
      }
    }), o.label);
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. options: [{value, label}] or strings. */
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: value ? 'var(--text-body)' : 'var(--text-muted)',
      padding: '12px 40px 12px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      background: '#fff',
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    },
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cm-gray-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch with optional label. */
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-full)',
      flex: 'none',
      position: 'relative',
      background: on ? 'var(--accent)' : 'var(--cm-gray-300)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs. items: strings or {id,label}. */
function Tabs({
  items = [],
  active,
  defaultActive,
  onChange,
  style
}) {
  const list = items.map(i => typeof i === 'string' ? {
    id: i,
    label: i
  } : i);
  const [internal, setInternal] = React.useState(defaultActive ?? (list[0] && list[0].id));
  const current = active !== undefined ? active : internal;
  const pick = id => {
    if (active === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, list.map(t => {
    const on = t.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 600,
        fontSize: 15,
        color: on ? 'var(--accent)' : 'var(--cm-gray-500)',
        padding: '12px 16px',
        borderBottom: on ? '2px solid var(--accent)' : '2px solid transparent',
        marginBottom: -1,
        transition: 'color var(--duration-fast)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact / quote request page.
const {
  Button,
  Card,
  Input,
  Select,
  Radio,
  Checkbox,
  Dialog
} = window.ChimneyMastersDesignSystem_aca12a;
function ContactScreen({
  onNav
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-64 cm-split-form",
    style: {
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 5vw, 42px)',
      lineHeight: 1.12,
      color: 'var(--text-heading)'
    }
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Tell us what's going on and we'll call back within 30 minutes during business hours \u2014 or call us directly."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    icon: CMIcons.phone(),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Call (555) 012-3456"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 8
    }
  }, [[CMIcons.clock(20), 'Mon–Sat, 7am–7pm'], [CMIcons.mapPin(20), 'Serving the tri-county area'], [CMIcons.shield(20), 'Licensed & insured, CSIA-certified']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--cm-charcoal-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      display: 'inline-flex'
    }
  }, ic), t)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-field-grid",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jane Homeowner"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(555) 012-3456"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "jane@email.com",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service Needed",
    placeholder: "Choose a service",
    style: {
      gridColumn: '1 / -1'
    },
    options: ['Chimney Sweep & Cleaning', 'Inspection (Level 1–3)', 'Masonry & Crown Repair', 'Caps, Liners & Installation', 'Not sure — need advice']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Property Type",
    direction: "row",
    defaultValue: "House",
    options: ['House', 'Townhome', 'Other']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    textarea: true,
    placeholder: "When did you last have your chimney serviced? Any smoke, odor, or leaks?",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me seasonal maintenance reminders",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true),
    style: {
      gridColumn: '1 / -1'
    }
  }, "Request My Free Quote"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => setSent(false),
    title: "Request Received",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Done")
  }, "Thanks \u2014 we'll call you within 30 minutes during business hours to confirm your appointment window."), /*#__PURE__*/React.createElement(CTABand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home page — full blueprint implementation (see guidelines/homepage-blueprint.md).
// Hero video is a placeholder animated gradient (.cm-hero-video-placeholder, defined in index.html)
// standing in for the client's AI-generated cinematic video until that asset is supplied.
const {
  Button,
  Card,
  Badge,
  Tag,
  RatingStars,
  Input,
  Select,
  Radio,
  Checkbox
} = window.ChimneyMastersDesignSystem_aca12a;
function FAQItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '20px 4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-heading)'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontSize: 20,
      color: 'var(--accent)',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  }, "+")), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      padding: '0 4px',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a));
}
function HomeScreen({
  onNav
}) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const services = [{
    icon: CMIcons.flame(24),
    title: 'Chimney Sweep & Cleaning',
    body: 'Full brush-and-vacuum cleaning with before/after photos. Creosote removed, mess contained.'
  }, {
    icon: CMIcons.search(24),
    title: 'Inspections (Level 1–3)',
    body: 'Camera-scoped inspections with a written, photo-documented report — same day.'
  }, {
    icon: CMIcons.wrench(24),
    title: 'Masonry & Crown Repair',
    body: 'Tuckpointing, crown rebuilds, flashing, and waterproofing done right the first time.'
  }, {
    icon: CMIcons.home(24),
    title: 'Caps, Liners & Installation',
    body: 'Stainless caps and liners, fireplace and stove installation — fitted and code-compliant.'
  }];
  const benefits = [[CMIcons.shield(28), 'CSIA-Certified Technicians', 'Every tech is certified and background-checked before they set foot in your home.'], [CMIcons.search(28), 'Photo-Documented Reports', 'See exactly what we found — every inspection comes with before/after photos.'], [CMIcons.clock(28), 'Same-Day Availability', 'Call before noon and we\u2019ll usually have a tech at your door today.'], [CMIcons.home(28), 'Transparent, Upfront Pricing', 'No surprise fees — you approve the price before any work starts.']];
  const reviews = [{
    name: 'Karen M.',
    text: 'They found a cracked flue liner our inspector missed. Fixed it the same week, spotless cleanup.'
  }, {
    name: 'Dave R.',
    text: 'Called at 9am, tech was here by 1pm. Walked me through every photo. Worth every penny.'
  }, {
    name: 'Priya S.',
    text: 'Third year using them for our annual sweep. On time, honest, and the price never surprises us.'
  }];
  const beforeAfter = ['Concrete Crown Rebuild', 'Masonry Tuckpointing', 'Chimney Cap Replacement'];
  const articles = [['Fall Chimney Prep: 5 Things to Check Before Your First Fire', 'Sep 2026'], ['How Often Should You Really Sweep Your Chimney?', 'Aug 2026'], ['Gas Logs vs. Wood Stoves: Which Fits Your Home?', 'Jul 2026']];
  const faqs = [['How much does a chimney sweep cost?', 'Most standard sweeps run $189–$249 depending on chimney height and creosote buildup — we always confirm price before starting work.'], ['How long does a service visit take?', 'A standard sweep and inspection takes about 60–90 minutes. Repairs vary — we\u2019ll give you a time estimate when we quote the job.'], ['Do I need to be home during the appointment?', 'Yes, for entry and to walk through the findings with your technician — most visits fit inside a single appointment window.'], ['How often should I have my chimney cleaned?', 'The CSIA recommends an annual inspection for every chimney, with cleaning as needed based on creosote buildup and usage.'], ['Are you licensed and insured?', 'Yes — fully licensed and insured, with CSIA-certified technicians on every crew.']];
  const certifications = ['CSIA Certified', 'Licensed & Insured', 'BBB Accredited', 'NFI Certified'];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "cm-hero",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-hero-bg",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=2000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      willChange: 'transform'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, rgba(2,3,2,0.85) 20%, rgba(2,3,2,0.45) 60%, rgba(2,3,2,0.2) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      fontSize: 11,
      fontFamily: 'var(--font-body)',
      color: 'rgba(255,255,255,0.55)',
      letterSpacing: '0.04em'
    }
  }, "[Free stock photo \u2014 placeholder for the client's AI-generated cinematic hero video]"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 480,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "\uD83D\uDD25 Same-Day Inspections"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px, 5.5vw, 52px)',
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
      color: '#fff'
    }
  }, "Your Chimney, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cm-orange-400)'
    }
  }, "Expertly"), " Cared For"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 480
    }
  }, "Certified sweeps, same-day inspections, and repairs done right the first time \u2014 so your family stays warm and safe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: CMIcons.phone()
  }, "Call (555) 012-3456"), /*#__PURE__*/React.createElement("a", {
    href: "#booking-form",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg"
  }, "Get a Free Quote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RatingStars, {
    rating: 4.9,
    showValue: true,
    valueColor: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "from 480+ homeowner reviews"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-badge-track",
    style: {
      display: 'flex',
      gap: 28,
      width: 'max-content'
    }
  }, [...certifications, ...certifications].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c + i,
    style: {
      border: '1px dashed var(--cm-gray-300)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 20px',
      color: 'var(--cm-gray-500)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.04em',
      textAlign: 'center',
      flex: 'none'
    }
  }, c, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 10
    }
  }, "logo placeholder")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80"
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "\uD83D\uDD25 What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 4vw, 34px)',
      color: 'var(--text-heading)'
    }
  }, "Every Chimney Service, One Certified Team")), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-4",
    style: {
      gap: 20
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    hoverable: true,
    icon: s.icon,
    title: s.title,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onNav('Service')
    }, "Learn More")
  }, s.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('Service')
  }, "View All Services")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 4vw, 34px)',
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "Why Homeowners Choose Us"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-4",
    style: {
      gap: 32
    }
  }, benefits.map(([ic, t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 80,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80 cm-split",
    style: {
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "cm-img-zoom",
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Photo: founder / team",
    ratio: "4 / 3",
    style: {
      backgroundImage: "url('https://picsum.photos/seed/cm-team-photo/800/600')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent'
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)'
    }
  }, "A Family Business, Since 1998"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "\"We started Chimney Masters because homeowners deserve a straight answer, not a scare tactic. Every tech on our crew is CSIA-certified, and every job gets photo-documented \u2014 no exceptions.\""), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    className: "cm-link-underline",
    onClick: () => onNav('About')
  }, "Read Our Story \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(26px, 4vw, 34px)',
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "Trusted by Your Neighbors"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-3",
    style: {
      gap: 20
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.name,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(RatingStars, {
    rating: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "\"", r.text, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-heading)'
    }
  }, r.name))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container",
    style: {
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    style: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 20,
      padding: '32px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-coupon-icon",
    style: {
      position: 'absolute',
      right: 24,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--cm-red-600)',
      opacity: 0.45,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, CMIcons.tag(140)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    style: {
      marginBottom: 12
    }
  }, "New Customers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--text-heading)'
    }
  }, "$50 Off Your First Sweep"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, "Mention code ", /*#__PURE__*/React.createElement("strong", null, "SWEEP50"), " when you call. Valid through fall booking season.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: CMIcons.phone(),
    style: {
      flex: 'none',
      marginTop: 8,
      position: 'relative'
    }
  }, "Claim by Phone")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cm-red-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container",
    style: {
      padding: '40px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      flexWrap: 'wrap',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, CMIcons.phone(28)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: '#fff'
    }
  }, "Smoke smell or an animal in your chimney? Skip the form."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    style: {
      background: '#fff',
      color: 'var(--cm-red-800)'
    },
    icon: CMIcons.phone()
  }, "Call Now \u2014 (555) 012-3456"))), /*#__PURE__*/React.createElement("section", {
    id: "booking-form",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80 cm-split-form",
    style: {
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--text-heading)'
    }
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Tell us what's going on and we'll call back within 30 minutes during business hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [[CMIcons.clock(20), 'Mon–Sat, 7am–7pm'], [CMIcons.mapPin(20), 'Serving the tri-county area'], [CMIcons.shield(20), 'Licensed & insured, CSIA-certified']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--cm-charcoal-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cm-orange-600)',
      display: 'inline-flex'
    }
  }, ic), t)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-field-grid",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jane Homeowner"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "(555) 012-3456"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service Needed",
    placeholder: "Choose a service",
    style: {
      gridColumn: '1 / -1'
    },
    options: ['Chimney Sweep & Cleaning', 'Inspection (Level 1–3)', 'Masonry & Crown Repair', 'Caps, Liners & Installation', 'Not sure — need advice']
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Property Type",
    direction: "row",
    defaultValue: "House",
    options: ['House', 'Townhome', 'Other'],
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    textarea: true,
    placeholder: "When did you last have your chimney serviced?",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me seasonal maintenance reminders",
    defaultChecked: true,
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Contact'),
    style: {
      gridColumn: '1 / -1'
    }
  }, "Request My Free Quote"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-72"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px, 3.5vw, 30px)',
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "Our Process"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-3",
    style: {
      gap: 32
    }
  }, [['1', 'Book', 'Call or request a quote online — same-day slots before noon.'], ['2', 'Sweep & Inspect', 'A certified tech cleans and camera-checks your chimney.'], ['3', 'Report', 'You get a photo-documented report and honest recommendations.']].map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cm-charcoal-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px, 4vw, 32px)',
      color: '#fff',
      textAlign: 'center'
    }
  }, "See the Difference"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-3",
    style: {
      gap: 20
    }
  }, beforeAfter.map((label, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: label,
    delay: i * 100,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-img-zoom",
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Before",
    ratio: "1 / 1",
    style: {
      backgroundImage: `url('https://picsum.photos/seed/cm-before-${i}/400/400')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent',
      border: '1px solid var(--cm-charcoal-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-img-zoom",
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "After",
    ratio: "1 / 1",
    style: {
      backgroundImage: `url('https://picsum.photos/seed/cm-after-${i}/400/400')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent',
      border: '1px solid var(--cm-charcoal-700)'
    }
  }))), /*#__PURE__*/React.createElement(Tag, {
    style: {
      background: 'transparent',
      borderColor: 'var(--cm-gray-600)',
      color: 'var(--cm-gray-300)'
    }
  }, label)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-pad-80",
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "Common Questions"), faqs.map(([q, a], i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: q,
    q: q,
    a: a,
    open: openFaq === i,
    onToggle: () => setOpenFaq(openFaq === i ? -1 : i)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-80"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px, 4vw, 32px)',
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "From the Blog"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-3",
    style: {
      gap: 20
    }
  }, articles.map(([title, date], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: title,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(Card, {
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-img-zoom",
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Article photo",
    ratio: "16 / 10",
    style: {
      backgroundImage: `url('https://picsum.photos/seed/cm-article-${i}/700/440')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Read More"))))))), /*#__PURE__*/React.createElement(CTABand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
// Service detail page — Chimney Sweep & Cleaning.
const {
  Button,
  Card,
  Badge,
  Tag
} = window.ChimneyMastersDesignSystem_aca12a;
function ServiceScreen({
  onNav
}) {
  const included = ['Full firebox, flue, and smoke-chamber sweep', 'Creosote removal with HEPA-filtered vacuum', 'Floor and furniture protection — zero mess', 'Before/after photos and written condition report', 'Cap, crown, and flashing visual check'];
  const steps = [['1', 'Book', 'Call or request online. Same-day slots before noon.'], ['2', 'Sweep & Inspect', 'Certified tech cleans and camera-checks your flue.'], ['3', 'Report', 'Photo report on the spot, with honest recommendations.']];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-64 cm-split-12",
    style: {
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('Home'),
    style: {
      cursor: 'pointer'
    }
  }, "Home"), " / Services / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)',
      fontWeight: 500
    }
  }, "Chimney Sweep")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 5vw, 42px)',
      lineHeight: 1.12,
      color: 'var(--text-heading)'
    }
  }, "Chimney Sweep & Cleaning"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "An annual sweep is the single best protection against chimney fires. We clean thoroughly, contain the mess, and show you exactly what we found."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Same-Day"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "CSIA-Certified"), /*#__PURE__*/React.createElement(Tag, null, "~90 minutes"), /*#__PURE__*/React.createElement(Tag, null, "From $189")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, included.map(item => /*#__PURE__*/React.createElement("span", {
    key: item,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none'
    }
  }, "\u2705"), item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Schedule a Sweep"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: CMIcons.phone()
  }, "Call Us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Photo: sweep in progress",
    ratio: "4 / 3",
    style: {
      backgroundImage: "url('https://picsum.photos/seed/cm-service-1/700/525')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent'
    }
  }), /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Photo: before/after flue",
    ratio: "4 / 3",
    style: {
      backgroundImage: "url('https://picsum.photos/seed/cm-service-2/700/525')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'transparent'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cm-gray-50)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-pad-72"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 32px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px, 3.5vw, 30px)',
      color: 'var(--text-heading)',
      textAlign: 'center'
    }
  }, "How It Works"), /*#__PURE__*/React.createElement("div", {
    className: "cm-grid-3",
    style: {
      gap: 20
    }
  }, steps.map(([n, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6
    }
  }, b)))))), /*#__PURE__*/React.createElement(CTABand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  ServiceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Shared chrome for the Chimney Masters website kit.
const DS = window.ChimneyMastersDesignSystem_aca12a;
const {
  Button
} = DS;

// Scroll-reveal wrapper — fades/slides content up once as it enters the viewport (premium, restrained).
function Reveal({
  children,
  delay = 0,
  style,
  as: Tag = 'div'
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: visible ? 'cm-reveal' : '',
    style: {
      opacity: visible ? undefined : 0,
      animationDelay: `${delay}ms`,
      ...style
    }
  }, children);
}
const CMIcons = {
  phone: (s = 18) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  flame: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
  })),
  shield: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  wrench: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  })),
  search: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  home: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })),
  clock: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })),
  mapPin: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  check: (s = 20) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  tag: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.29-6.29a2.426 2.426 0 0 0 0-3.42z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "1.5"
  })),
  menu: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  close: (s = 24) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))
};
function PhotoPlaceholder({
  label,
  ratio = '16 / 10',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--cm-gray-200)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cm-gray-500)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      border: '1px dashed var(--cm-gray-300)',
      ...style
    }
  }, label);
}
function SiteHeader({
  page,
  onNav
}) {
  const links = ['Home', 'Services', 'About', 'Coupons', 'Contact'];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = l => {
    onNav(l === 'Services' ? 'Service' : l);
    setMenuOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: '#fff',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container",
    style: {
      padding: '12px 24px',
      minHeight: 76,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('Home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chimney-masters-logo.png",
    alt: "Chimney Masters",
    style: {
      height: 56
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "cm-nav-desktop",
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, links.map(l => {
    const on = l === 'Services' && page === 'Service' || l === page;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => go(l),
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        textDecoration: 'none',
        color: on ? 'var(--accent)' : 'var(--cm-charcoal-700)',
        padding: '8px 12px',
        borderRadius: 6
      }
    }, l);
  })), /*#__PURE__*/React.createElement("button", {
    className: "cm-nav-toggle",
    style: {
      marginLeft: 'auto'
    },
    "aria-label": "Toggle menu",
    onClick: () => setMenuOpen(v => !v)
  }, menuOpen ? CMIcons.close(24) : CMIcons.menu(24)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    pill: true,
    icon: CMIcons.phone(),
    onClick: () => go('Contact'),
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cm-header-cta-label"
  }, "(555) 012-3456"))), menuOpen && /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: '1px solid var(--border-default)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 24px 16px'
    }
  }, links.map(l => {
    const on = l === 'Services' && page === 'Service' || l === page;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => go(l),
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        cursor: 'pointer',
        textDecoration: 'none',
        color: on ? 'var(--accent)' : 'var(--cm-charcoal-700)',
        padding: '12px 4px',
        borderBottom: '1px solid var(--border-default)'
      }
    }, l);
  })));
}
function TrustBar() {
  const items = [[CMIcons.shield(20), 'Licensed & Insured'], [CMIcons.flame(20), 'CSIA-Certified Sweeps'], [CMIcons.clock(20), 'Same-Day Service'], [CMIcons.home(20), 'Family-Owned Since 1998']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      borderBottom: '1px solid var(--border-default)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-trustbar-scroll",
    style: {
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-trustbar-track",
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'center',
      width: 'max-content'
    }
  }, [...items, ...items].map(([ic, label], i) => /*#__PURE__*/React.createElement("span", {
    key: label + i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--cm-charcoal-700)',
      flex: 'none',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cm-orange-600)',
      display: 'inline-flex'
    }
  }, ic), label)))));
}
function CTABand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cm-charcoal-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container",
    style: {
      padding: '64px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 400px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--cm-red-600)',
      marginBottom: 10
    }
  }, "Same-Day Service"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 36,
      lineHeight: 1.15,
      color: '#fff'
    }
  }, "Don't Wait on a Fire Hazard."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--cm-gray-400)'
    }
  }, "Call before noon and we'll have a certified tech at your door today.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: CMIcons.phone()
  }, "Call (555) 012-3456"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Get a Free Quote"))));
}
function SiteFooter({
  onNav
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  };
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--cm-gray-400)',
    cursor: 'pointer',
    textDecoration: 'none'
  };
  const head = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cm-charcoal-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container cm-footer-grid",
    style: {
      padding: '56px 24px 32px',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/chimney-masters-logo.png",
    alt: "Chimney Masters",
    style: {
      height: 72,
      alignSelf: 'flex-start',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '8px 12px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--cm-gray-400)',
      maxWidth: 320
    }
  }, "Premium chimney & fireplace care. Licensed, insured, and family-owned since 1998.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Services"), ['Chimney Sweep', 'Inspections', 'Masonry Repair', 'Caps & Liners', 'Installation'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    style: link,
    onClick: () => onNav('Service')
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Company"), ['About', 'Coupons', 'Contact'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    style: link,
    onClick: () => onNav(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      cursor: 'default'
    }
  }, "(555) 012-3456"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      cursor: 'default'
    }
  }, "service@chimneymasters.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      cursor: 'default'
    }
  }, "Mon\u2013Sat, 7am\u20137pm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--cm-charcoal-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-container",
    style: {
      padding: '16px 24px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--cm-gray-500)'
    }
  }, "\xA9 2026 Chimney Masters. Licensed & insured.")));
}
Object.assign(window, {
  CMIcons,
  PhotoPlaceholder,
  SiteHeader,
  TrustBar,
  CTABand,
  SiteFooter,
  Reveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
