/* @ds-bundle: {"format":4,"namespace":"BURADesignSystem_6ac9d3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Ribbon","sourcePath":"components/actions/Ribbon.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"293d1367bdc4","components/actions/Ribbon.jsx":"901e6f55366e","components/content/Card.jsx":"44befb748e61","components/content/Quote.jsx":"cec07962d5c1","components/content/SectionHeader.jsx":"ddd1603f60b1","components/content/Stat.jsx":"ccb100e538af","components/forms/Input.jsx":"6161f3923e9d","components/forms/Tag.jsx":"ddd3489dc716","ui_kits/plataforma-2026/Home.jsx":"eebb19f55d18","ui_kits/website/AcercaPage.jsx":"3d400b4c8fa4","ui_kits/website/FestivalesPage.jsx":"cf97e5ce82ec","ui_kits/website/Shell.jsx":"6a3fc061fdb6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BURADesignSystem_6ac9d3 = window.BURADesignSystem_6ac9d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    font: 13,
    pad: '8px 16px'
  },
  md: {
    font: 14,
    pad: '12px 24px'
  },
  lg: {
    font: 16,
    pad: '16px 36px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      background: hover ? 'var(--accent)' : 'var(--tierra-900)',
      color: hover ? 'var(--tierra-900)' : 'var(--bura-white)',
      border: '2px solid var(--tierra-900)',
      boxShadow: 'none'
    },
    yellow: {
      background: 'var(--accent)',
      color: 'var(--tierra-900)',
      border: '2px solid var(--tierra-900)',
      boxShadow: pressed ? 'none' : hover ? '2px 2px 0 var(--tierra-900)' : 'var(--shadow-hard)',
      transform: pressed ? 'translate(4px, 4px)' : hover ? 'translate(2px, 2px)' : 'none'
    },
    outline: {
      background: 'var(--bura-white)',
      color: 'var(--tierra-900)',
      border: '2px solid var(--tierra-900)',
      boxShadow: pressed ? 'none' : 'var(--shadow-hard-sm)',
      transform: pressed ? 'translate(2px, 2px)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-caps)',
      fontSize: s.font,
      padding: s.pad,
      whiteSpace: 'nowrap',
      flex: 'none',
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast), color var(--dur-fast)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Ribbon.jsx
try { (() => {
function Ribbon({
  children,
  angle = -3,
  playTriangle = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `rotate(${angle}deg)`,
      display: 'inline-flex',
      alignItems: 'center',
      filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.18))',
      ...style
    }
  }, playTriangle && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      marginRight: -6,
      zIndex: 1,
      borderTop: '26px solid transparent',
      borderBottom: '26px solid transparent',
      borderLeft: '40px solid var(--accent)',
      filter: 'drop-shadow(2px 0 0 var(--tierra-900)) drop-shadow(-1px 0 0 var(--tierra-900)) drop-shadow(0 1px 0 var(--tierra-900)) drop-shadow(0 -1px 0 var(--tierra-900))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tierra-900)',
      color: 'var(--bura-white)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: 22,
      lineHeight: 1,
      padding: '14px 36px 14px 28px',
      clipPath: 'polygon(0 0, 100% 0, calc(100% - 18px) 50%, 100% 100%, 0 100%)'
    }
  }, children));
}
Object.assign(__ds_scope, { Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  tone = 'white',
  stacked = true,
  children,
  style
}) {
  const bg = {
    white: 'var(--bura-white)',
    yellow: 'var(--accent)',
    black: 'var(--tierra-900)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: tone === 'black' ? 'var(--text-invert)' : 'var(--text-body)',
      border: '3px solid var(--tierra-900)',
      borderRadius: 0,
      boxShadow: stacked ? 'var(--shadow-stack)' : 'none',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  attribution,
  style
}) {
  const mark = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 64,
    lineHeight: 0.6,
    color: 'var(--tierra-900)',
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...mark,
      marginTop: 14
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.45,
      color: 'var(--text-strong)',
      maxWidth: '40ch'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, attribution)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...mark,
      alignSelf: 'flex-end'
    }
  }, "\u201D"));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  kicker,
  align = 'center',
  invert = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-nav)',
      background: 'var(--accent)',
      color: 'var(--tierra-900)',
      padding: '4px 10px',
      marginBottom: 12
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-caps)',
      color: invert ? 'var(--text-invert)' : 'var(--text-strong)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  highlight = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1,
      color: 'var(--text-strong)',
      display: 'inline-block',
      background: highlight ? 'var(--accent)' : 'transparent',
      padding: highlight ? '2px 12px' : 0
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      marginTop: 10,
      maxWidth: '28ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-caps)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: '11px 14px',
      border: '2px solid var(--tierra-900)',
      borderRadius: 0,
      background: disabled ? 'var(--gray-100)' : 'var(--bura-white)',
      color: 'var(--text-strong)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-hard-sm)' : 'none',
      transform: focus ? 'translate(-2px, -2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
function Tag({
  variant = 'yellow',
  children,
  style
}) {
  const variants = {
    yellow: {
      background: 'var(--accent)',
      color: 'var(--tierra-900)',
      border: '2px solid var(--tierra-900)'
    },
    black: {
      background: 'var(--tierra-900)',
      color: 'var(--bura-white)',
      border: '2px solid var(--tierra-900)'
    },
    outline: {
      background: 'var(--bura-white)',
      color: 'var(--tierra-900)',
      border: '2px solid var(--tierra-900)'
    },
    teal: {
      background: 'var(--fest-teal)',
      color: 'var(--bura-white)',
      border: '2px solid var(--fest-teal)'
    },
    orange: {
      background: 'var(--fest-orange)',
      color: 'var(--bura-white)',
      border: '2px solid var(--fest-orange)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-caps)',
      lineHeight: 1,
      padding: '6px 10px',
      borderRadius: 0,
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma-2026/Home.jsx
try { (() => {
// Home concepto — la nueva BURA (concepto MAÍZ: sembrar y cosechar soluciones)
function Plataforma2026() {
  const {
    Button,
    Tag,
    Stat,
    Quote
  } = window.BURADesignSystem_6ac9d3;
  const areas = [{
    id: 'investigacion',
    color: 'var(--area-investigacion)',
    name: 'Investigación',
    text: 'Comprensión profunda de problemas reales. Diagnósticos participativos con comunidades, no sobre comunidades.'
  }, {
    id: 'formacion',
    color: 'var(--area-formacion)',
    name: 'Formación',
    text: 'Espacios de aprendizaje experiencial en medios, digital, tecnología e IA — para todas las generaciones.'
  }, {
    id: 'asesoria',
    color: 'var(--area-asesoria)',
    name: 'Asesoría',
    text: 'Co-diseño y acompañamiento a entidades públicas, privadas y ONGs. Quien nos contrata aprende a implementar por sí mismo.'
  }, {
    id: 'produccion',
    color: 'var(--area-produccion)',
    name: 'Producción',
    text: 'Contenidos, IPs, apps y narrativas con propósito social y valor comercial. TV, cine, podcasts, transmedia.'
  }, {
    id: 'exhibicion',
    color: 'var(--area-exhibicion)',
    name: 'Exhibición',
    text: 'Festivales, muestras y espacios públicos donde las voces de las comunidades circulan, se validan y se amplifican.'
  }];
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const bandPad = '120px 0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '2px solid var(--border)',
      background: 'var(--bura-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bura-logo.png",
    alt: "BURA",
    style: {
      height: 52
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center'
    }
  }, ['Áreas', 'Proyectos', 'FICAIJ', 'Nosotros'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "yellow",
    size: "sm"
  }, "Trabaja con nosotros")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '110px var(--gutter) 110px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "black"
  }, "M\xE9rida"), /*#__PURE__*/React.createElement(Tag, {
    variant: "outline"
  }, "Bogot\xE1")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(44px, 5.5vw, 76px)',
      overflowWrap: 'break-word',
      lineHeight: 0.98,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Sembramos soluciones ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--accent)',
      padding: '0 12px'
    }
  }, "con"), " las comunidades"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      margin: '32px 0 40px',
      maxWidth: '44ch'
    }
  }, "Bura significa ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "ma\xEDz"), " \u2014 alimento \u2014 en lengua nativa meride\xF1a. Somos una plataforma de innovaci\xF3n colaborativa: investigamos, formamos, asesoramos, producimos y exhibimos ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "para, por y con"), " las personas y sus comunidades."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Conoce las 5 \xE1reas"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Nuestro manifiesto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 26,
      paddingRight: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '70%',
      height: '70%',
      backgroundImage: 'var(--granos)',
      backgroundSize: 'var(--granos-size)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/taller-dialogo-joven.jpg",
    alt: "Joven exponiendo en un taller BURA",
    style: {
      position: 'relative',
      width: '100%',
      display: 'block',
      border: '3px solid var(--border)',
      boxShadow: 'var(--shadow-stack)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 10,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Taller de creaci\xF3n, M\xE9rida \u2014 archivo BURA")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-band)',
      padding: bandPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(36px, 4vw, 52px)',
      letterSpacing: 'var(--ls-heading)',
      lineHeight: 1.05,
      color: 'var(--text-strong)'
    }
  }, "Cinco \xE1reas, un mismo proceso"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 56px',
      fontSize: 21,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, "No son departamentos separados: son dimensiones de un mismo proceso de resoluci\xF3n de problemas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gap: 16
    }
  }, areas.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.id,
    style: {
      background: 'var(--bura-white)',
      border: '2px solid var(--border)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: a.color,
      borderBottom: '2px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 'clamp(13px, 1.35vw, 17px)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--text-strong)'
    }
  }, a.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, a.text))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: bandPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/taller-stopmotion-plastilina.jpg",
    alt: "Taller de stop-motion con plastilina",
    style: {
      width: '100%',
      display: 'block',
      border: '3px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "39.553",
    label: "personas alcanzadas en nuestros programas y eventos"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+125",
    label: "eventos realizados en 6 pa\xEDses",
    highlight: false
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1.437",
    label: "obras audiovisuales de +80 pa\xEDses",
    highlight: false
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "16",
    label: "a\xF1os sembrando con comunidades, desde Expresi\xF3n Ixoye",
    highlight: false
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/sala-cine-manos-arriba.jpg",
    alt: "Sala de cine con manos arriba",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      display: 'block',
      border: '3px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/festival-jurado-infantil.jpg",
    alt: "Jurado infantil del festival",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      display: 'block',
      border: '3px solid var(--border)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/nina-maqueta-taller.jpg",
    alt: "Ni\xF1a frente a maqueta en taller",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'cover',
      display: 'block',
      border: '3px solid var(--border)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-warm)',
      padding: bandPad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    attribution: "Knowledge Base BURA, 2026"
  }, "Las comunidades no son beneficiarias. Son dise\xF1adoras, tomadoras de decisiones y creadoras de soluciones."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '140px 0 140px',
      borderTop: '3px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: 'var(--surface-maiz)',
      border: '2px solid var(--border)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 800,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: '6px 12px',
      marginBottom: 20
    }
  }, "Nuestro festival \xB7 desde 2010"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "FICAIJ"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 36px',
      fontSize: 21,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '44ch'
    }
  }, "El Festival Internacional de Cine y Audiovisual Infantil y Juvenil: una ventana donde la gente joven es directora, productora y jurado."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Ir al festival")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/equipo-ficaij-celebracion.jpg",
    alt: "Equipo del festival FICAIJ celebrando",
    style: {
      width: '100%',
      aspectRatio: '3 / 2',
      objectFit: 'cover',
      display: 'block',
      border: '3px solid var(--border)',
      boxShadow: 'var(--shadow-stack)'
    }
  }))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bura-logo.png",
    alt: "BURA",
    style: {
      height: 58,
      background: 'var(--bura-white)',
      padding: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-invert)'
    }
  }, "M\xE9rida, Venezuela | Bogot\xE1, Colombia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-invert-muted)'
    }
  }, "Por A.C. Grupo de Artes Esc\xE9nicas y Audiovisuales Expresi\xF3n Ixoye"))));
}
Object.assign(window, {
  Plataforma2026
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma-2026/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AcercaPage.jsx
try { (() => {
// Página "Acerca de" — recreación de uploads/acerca-de.png

function AreaItem({
  lead,
  rest
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, "* ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, lead), " ", rest);
}
function AcercaPage() {
  const {
    Quote,
    SectionHeader
  } = window.BURADesignSystem_6ac9d3;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Band, {
    tone: "gray"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/formacion-aula.png",
    alt: "Ni\xF1os en formaci\xF3n audiovisual",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Quote, null, "Es una plataforma de acci\xF3n e investigaci\xF3n especializada en la infancia, la adolescencia y sus relaciones con el audiovisual, los medios de comunicaci\xF3n y la informaci\xF3n por y para j\xF3venes"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      letterSpacing: '0.02em',
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, "PLATAFORMA BURA AUDIOVISUAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      marginBottom: 20
    }
  }, "\xBFQue hace?"), /*#__PURE__*/React.createElement(AreaItem, {
    lead: "Exhibici\xF3n y distribuci\xF3n audiovisual",
    rest: "especializada en obras para y por ni\xF1os y adolescentes."
  }), /*#__PURE__*/React.createElement(AreaItem, {
    lead: "Formaci\xF3n audiovisual",
    rest: "especializada dirigida a ni\xF1os, adolescentes o adultos (Estudiantes y profesionales del sector audiovisual, cultural, comunicacional, educativo, entidades privadas y p\xFAblicas, etc.)."
  }), /*#__PURE__*/React.createElement(AreaItem, {
    lead: "Investigaci\xF3n",
    rest: "y desarrollo de estudios referentes a la relaci\xF3n del ni\xF1o y el adolescente con el audiovisual, los medios de comunicaci\xF3n y la informaci\xF3n."
  }), /*#__PURE__*/React.createElement(AreaItem, {
    lead: "Asesor\xEDa y acompa\xF1amiento",
    rest: "a personas naturales o jur\xEDdicas, entidades privadas o p\xFAblicas, y cualquier interesado en el desarrollo de espacios, eventos, programas, campa\xF1as, y cualquier otro de \xEDndole audiovisual especializado en infancia y adolescencia."
  }), /*#__PURE__*/React.createElement(AreaItem, {
    lead: "Producci\xF3n Audiovisual",
    rest: "(radio, TV, series web, cine, videojuegos, app's, desarrollo digital, transmedia, etc.) para, por y con ni\xF1os y adolescentes."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--band-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/comunidad-escuela.png",
    alt: "Comunidad escolar en el festival",
    style: {
      width: '100%',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(Band, {
    tone: "gray"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Historia"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '90ch',
      margin: '28px auto 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Durante sus 8 a\xF1os anteriores, la organizaci\xF3n ha alcanzado a un p\xFAblico que supera los 35.200 ni\xF1os, adolescentes y adultos, promoviendo entre ellos una mirada m\xE1s activa acerca del mundo audiovisual que les rodea."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Del mismo modo, ha participado en eventos internacionales en 5 pa\xEDses: Brasil, Colombia, Cuba, Espa\xF1a e Italia; y convocado en M\xE9rida (Ciudad sede) a personas de Venezuela y otros 8 pa\xEDses: Argentina, Brasil, Colombia, Cuba, Espa\xF1a, Italia, Kenia y Sud\xE1frica."))), /*#__PURE__*/React.createElement(Band, {
    tone: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bura-logo.png",
    alt: "Logo BURA",
    style: {
      width: '78%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      marginBottom: 24
    }
  }, "Mision / Visi\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, "MISI\xD3N"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "Contribuir con el reconocimiento del derecho a la participaci\xF3n activa y a la inclusi\xF3n de las voces de ni\xF1os y adolescentes, en el \xE1mbito audiovisual, los medios de comunicaci\xF3n y la informaci\xF3n; desarrollando en ese sentido espacios de m\xFAltiple \xEDndole para el intercambio de herramientas que faciliten el fortalecimiento integral de ni\xF1os y adolescentes en cuanto audiencias."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, "VISI\xD3N"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Constituirse como plataforma internacional dedicada al desarrollo y promoci\xF3n de espacios y experiencias relacionadas con la investigaci\xF3n, discusi\xF3n, realizaci\xF3n, producci\xF3n y exhibici\xF3n de distintos formatos y g\xE9neros audiovisuales para, por y con ni\xF1os y adolescentes.")))), /*#__PURE__*/React.createElement(Band, {
    tone: "gray"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Valores"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      marginTop: 28,
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      lineHeight: 1.8,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Ratificando, por un lado, la Convenci\xF3n Universal sobre los Derechos del Ni\xF1o (1989); y adscrita por otro a los Objetivos de Desarrollo Sostenible (ODS, 2015) como a la Ley Org\xE1nica para la Protecci\xF3n del ni\xF1o y del adolescente (Venezuela, 1998), la organizaci\xF3n promueve:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "* La voz de ni\xF1os y adolescentes alentando su desarrollo como individuos y ciudadanos, adem\xE1s de \xEDntegros, con ideas, opini\xF3n y pensamientos propios."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "* La prominencia del di\xE1logo y la democracia como fuentes de resoluci\xF3n de conflictos y para evitar la guerra."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "* El desarrollo de la creatividad y el compromiso de ni\xF1os y adolescentes en las actividades y sendas que deciden tomar.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "* El reconocimiento y el respeto a las diversidades y a las visiones plurales e inclusivas de los pueblos del mundo. La comprensi\xF3n, tolerancia, amistad entre los pueblos, paz y fraternidad universal (De acuerdo con el Art\xEDculo 10 de la Convenci\xF3n)."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "* Finalmente el acceso igualitario de ni\xF1os y adolescentes a:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "A.- Una cultura y una educaci\xF3n de calidad para la equidad, el desarrollo de sus aptitudes y juicios individuales (De acuerdo con el Art\xEDculo 7 de la Convenci\xF3n)."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "B.- Medios de comunicaci\xF3n, mensajes audiovisuales e informaci\xF3n que, adem\xE1s de entretener, los represente e incluya sus voces."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "C.- Programas y espacios educativos-culturales que, adem\xE1s de entretener, les permita: (1) Desarrollar una conciencia m\xE1s cr\xEDtica y activa en relaci\xF3n al mundo audiovisual, comunicacional e informativo que les rodea; as\xED como (2) producir mensajes en los que ellos mismos manifiesten sus ideas y voces.")))));
}
Object.assign(window, {
  AcercaPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AcercaPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FestivalesPage.jsx
try { (() => {
// Página "Festivales y encuentros" — recreación de uploads/festivales-y-encuentros.png

function FestivalesPage() {
  const {
    Button
  } = window.BURADesignSystem_6ac9d3;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--text-strong)'
    }
  }, "Festivales y encuentros"))), /*#__PURE__*/React.createElement(Band, {
    tone: "gray"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.35fr',
      gap: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/personajes-ficaij.png",
    alt: "Personajes del festival FICAIJ",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, "Festival Audiovisual para ni\xF1os y adolescentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.35em',
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, "FICAIJ")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 10px'
    }
  }, "El Festival Internacional Audiovisual para ni\xF1os y adolescentes, conocido como FICAIJ, nace en M\xE9rida, Venezuela, en 2010."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 10px'
    }
  }, "En este Festival, los ni\xF1os y adolescentes pueden acercarse m\xE1s al cine y al audiovisual de docenas de pa\xEDses del mundo. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "Promueve el reconocimiento y el respeto a la diversidad del mundo.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: '0 0 20px'
    }
  }, "Adem\xE1s, FICAIJ les ofrece el programa de formaci\xF3n audiovisual a trav\xE9s del cual ni\xF1os y adolescentes pueden ser los directores, productores, actores y guionistas de sus propias historias."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--gray-300)',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "[ Mapa \u2014 M\xE9rida, Venezuela \xB7 embed de Google Maps en el sitio original ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Ver m\xE1s"))))), /*#__PURE__*/React.createElement(Band, {
    tone: "yellow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, "Encuentro Internacional de Educomunicaci\xF3n"))));
}
Object.assign(window, {
  FestivalesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FestivalesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
// Shell del sitio: header + footer + router simple entre páginas
const {
  useState
} = React;
function SiteHeader({
  page,
  onNav
}) {
  const items = [['home', 'Home'], ['comunidades', 'Comunidades'], ['contenidos', 'Contenidos'], ['acerca', 'Acerca de'], ['festivales', 'Festivales'], ['contacto', 'Contacto']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--bura-white)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: page === id ? 700 : 400,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: page === id ? 'var(--bura-black)' : 'var(--gray-700)',
      borderBottom: page === id ? '2px solid var(--bura-yellow)' : '2px solid transparent',
      paddingBottom: 3
    }
  }, label))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/bura-logo.png",
    alt: "BURA",
    style: {
      height: 62,
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  })));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gray-100)',
      borderTop: '1px solid var(--border-soft)',
      padding: '18px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--gray-700)'
    }
  }, "Plataforma BURA AUDIOVISUAL. Todos los Derechos Reservados, 2018"));
}
function Band({
  tone = 'white',
  children,
  style
}) {
  const bg = {
    white: 'var(--surface-page)',
    gray: 'var(--surface-band)',
    yellow: 'var(--surface-yellow)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--band-y) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function PlaceholderPage({
  name
}) {
  return /*#__PURE__*/React.createElement(Band, {
    tone: "gray",
    style: {
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-muted)',
      fontSize: 15,
      marginTop: 14
    }
  }, "P\xE1gina no incluida en las capturas provistas del sitio 2018 \u2014 dejada en blanco a prop\xF3sito.")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Band,
  PlaceholderPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
