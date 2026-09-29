import { n as e, r as t, t as n } from "./index-BgJee-LX.js";
var r = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  c = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  l = t(e()),
  u = (0, l.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
      },
      f,
    ) =>
      (0, l.createElement)(
        `svg`,
        {
          ref: f,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
          className: r(`lucide`, a),
          ...(!o && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [
          ...u.map(([e, t]) => (0, l.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      ),
  ),
  d = (e, t) => {
    let n = (0, l.forwardRef)(({ className: n, ...a }, s) =>
      (0, l.createElement)(u, {
        ref: s,
        iconNode: t,
        className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
        ...a,
      }),
    );
    return ((n.displayName = o(e)), n);
  },
  f = d(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  p = d(`briefcase`, [
    [`path`, { d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`, key: `jecpp` }],
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `6`, rx: `2`, key: `i6l2r4` },
    ],
  ]),
  m = d(`instagram`, [
    [
      `rect`,
      {
        width: `20`,
        height: `20`,
        x: `2`,
        y: `2`,
        rx: `5`,
        ry: `5`,
        key: `2e1cvw`,
      },
    ],
    [
      `path`,
      { d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`, key: `9exkf1` },
    ],
    [`line`, { x1: `17.5`, x2: `17.51`, y1: `6.5`, y2: `6.5`, key: `r4j83e` }],
  ]),
  h = d(`linkedin`, [
    [
      `path`,
      {
        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
        key: `c2jq9f`,
      },
    ],
    [`rect`, { width: `4`, height: `12`, x: `2`, y: `9`, key: `mk3on5` }],
    [`circle`, { cx: `4`, cy: `4`, r: `2`, key: `bt5ra8` }],
  ]),
  g = d(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  _ = d(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  v = d(`quote`, [
    [
      `path`,
      {
        d: `M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
        key: `rib7q0`,
      },
    ],
    [
      `path`,
      {
        d: `M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,
        key: `1ymkrd`,
      },
    ],
  ]),
  y = d(`scale`, [
    [`path`, { d: `M12 3v18`, key: `108xh3` }],
    [`path`, { d: `m19 8 3 8a5 5 0 0 1-6 0zV7`, key: `zcdpyk` }],
    [`path`, { d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`, key: `1yorad` }],
    [`path`, { d: `m5 8 3 8a5 5 0 0 1-6 0zV7`, key: `eua70x` }],
    [`path`, { d: `M7 21h10`, key: `1b0cd5` }],
  ]),
  b = d(`shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  x = d(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  S = d(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  C = n(),
  w = [
    { label: `Áreas de Atuação`, href: `#areas-atuacao` },
    { label: `Nosso Diferencial`, href: `#diferencial` },
    { label: `Contato`, href: `#contato` },
  ],
  T = () => {
    let [e, t] = (0, l.useState)(!1),
      [n, r] = (0, l.useState)(``),
      [i, a] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
      let e = () => {
        t(window.scrollY > 50);
        let e = w.map((e) => e.href.replace(`#`, ``));
        for (let t of [...e].reverse()) {
          let e = document.getElementById(t);
          if (e && e.getBoundingClientRect().top <= 150) {
            r(t);
            break;
          }
        }
      };
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []);
    let o = (e) => {
      let t = document.querySelector(e);
      (t && t.scrollIntoView({ behavior: `smooth` }), a(!1));
    };
    return (0, C.jsx)(`header`, {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? `shadow-sm` : ``} bg-heading`,
      children: (0, C.jsxs)(`div`, {
        className: `container mx-auto px-6 lg:px-12`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `flex items-center justify-between h-16 lg:h-20`,
            children: [
              (0, C.jsx)(`nav`, {
                className: `hidden md:flex items-center gap-8 w-full justify-center`,
                children: w.map((e) =>
                  (0, C.jsxs)(
                    `button`,
                    {
                      onClick: () => o(e.href),
                      className: `text-sm font-medium transition-colors relative py-2 ${n === e.href.replace(`#`, ``) ? `text-primary` : `text-ice hover:text-primary`}`,
                      children: [
                        e.label,
                        n === e.href.replace(`#`, ``) &&
                          (0, C.jsx)(`span`, {
                            className: `absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full`,
                          }),
                      ],
                    },
                    e.href,
                  ),
                ),
              }),
              (0, C.jsx)(`button`, {
                onClick: () => a(!i),
                className: `md:hidden p-2 text-foreground hover:text-primary transition-colors`,
                "aria-label": `Toggle menu`,
                children: i
                  ? (0, C.jsx)(S, { className: `w-6 h-6` })
                  : (0, C.jsx)(_, { className: `w-6 h-6` }),
              }),
            ],
          }),
          i &&
            (0, C.jsx)(`nav`, {
              className: `md:hidden py-4 border-t border-border bg-heading`,
              children: w.map((e) =>
                (0, C.jsx)(
                  `button`,
                  {
                    onClick: () => o(e.href),
                    className: `block w-full text-left py-3 px-2 text-sm font-medium transition-colors ${n === e.href.replace(`#`, ``) ? `text-primary` : `text-ice hover:text-primary`}`,
                    children: e.label,
                  },
                  e.href,
                ),
              ),
            }),
        ],
      }),
    });
  },
  E = ({ className: e }) =>
    (0, C.jsx)(`svg`, {
      className: e,
      fill: `currentColor`,
      viewBox: `0 0 24 24`,
      children: (0, C.jsx)(`path`, {
        d: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`,
      }),
    }),
  D = ({ className: e }) =>
    (0, C.jsx)(`svg`, {
      className: e,
      fill: `currentColor`,
      viewBox: `0 0 24 24`,
      children: (0, C.jsx)(`path`, {
        d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`,
      }),
    }),
  O = ({ className: e }) =>
    (0, C.jsx)(`svg`, {
      className: e,
      fill: `currentColor`,
      viewBox: `0 0 24 24`,
      children: (0, C.jsx)(`path`, {
        d: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
      }),
    }),
  k = ({ className: e }) =>
    (0, C.jsxs)(`svg`, {
      className: e,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      children: [
        (0, C.jsx)(`path`, {
          d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
        }),
        (0, C.jsx)(`path`, {
          d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
        }),
        (0, C.jsx)(`path`, {
          d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
        }),
        (0, C.jsx)(`path`, {
          d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
        }),
      ],
    }),
  A = () =>
    (0, C.jsxs)(`section`, {
      className: `min-h-screen flex items-center bg-background relative overflow-hidden`,
      children: [
        (0, C.jsx)(`div`, {
          className: `absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 origin-top-right`,
        }),
        (0, C.jsx)(`div`, {
          className: `absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl`,
        }),
        (0, C.jsx)(`div`, {
          className: `container mx-auto px-6 py-20 lg:py-32 relative z-10`,
          children: (0, C.jsxs)(`div`, {
            className: `max-w-4xl`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in`,
                children: [
                  (0, C.jsx)(`div`, { className: `w-12 h-px bg-primary` }),
                  (0, C.jsx)(`span`, {
                    className: `text-sm font-medium tracking-[0.3em] text-primary uppercase`,
                    children: `Advocacia Estratégica`,
                  }),
                ],
              }),
              (0, C.jsxs)(`h1`, {
                className: `text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-semibold mb-8 leading-[0.95] tracking-tight opacity-0 animate-fade-in`,
                style: { animationDelay: `0.15s` },
                children: [
                  `Maschio`,
                  (0, C.jsx)(`span`, {
                    className: `block text-primary`,
                    children: `Advogados`,
                  }),
                ],
              }),
              (0, C.jsx)(`p`, {
                className: `text-lg md:text-xl text-foreground mb-12 max-w-xl leading-relaxed opacity-0 animate-fade-in`,
                style: { animationDelay: `0.3s` },
                children: `Unimos conhecimento técnico sólido a uma visão contemporânea do Direito, oferecendo soluções jurídicas personalizadas para empresas e pessoas físicas.`,
              }),
              (0, C.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in`,
                style: { animationDelay: `0.45s` },
                children: [
                  (0, C.jsxs)(`a`, {
                    href: `https://wa.me/5554991146079`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5`,
                    children: [
                      (0, C.jsx)(E, { className: `w-5 h-5` }),
                      `Fale Conosco`,
                    ],
                  }),
                  (0, C.jsxs)(`a`, {
                    href: `#areas-atuacao`,
                    className: `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border border-heading/20 text-heading transition-all hover:bg-heading hover:text-background`,
                    children: [
                      `Conheça nossos serviços`,
                      (0, C.jsx)(`svg`, {
                        className: `w-4 h-4`,
                        fill: `none`,
                        stroke: `currentColor`,
                        viewBox: `0 0 24 24`,
                        children: (0, C.jsx)(`path`, {
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                          strokeWidth: 2,
                          d: `M19 9l-7 7-7-7`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, C.jsx)(`div`, {
          className: `absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent`,
        }),
      ],
    }),
  j = [
    {
      id: `empresarial`,
      title: `Direito Empresarial`,
      icon: p,
      description: `Assessoria estratégica para empresas de todos os portes. Atuamos na estruturação de negócios, elaboração e revisão de contratos e governança corporativa.`,
      segments: [
        `Estruturação tributária`,
        `Contratos empresariais`,
        `Proteção patrimonial`,
        `Consultoria preventiva`,
      ],
    },
    {
      id: `civil`,
      title: `Direito Civil`,
      icon: y,
      description: `Atuação especializada em demandas patrimoniais, responsabilidade civil, direito das obrigações e relações privadas. Defendemos seus direitos com rigor técnico e visão prática.`,
      segments: [
        `Responsabilidade civil`,
        `Direito imobiliário`,
        `Direito de família`,
        `Inventários e sucessões`,
      ],
    },
    {
      id: `digital`,
      title: `Direito Digital`,
      icon: b,
      description: `Proteção jurídica no ambiente digital. Especialistas em LGPD, contratos digitais, proteção de dados, e-commerce e segurança da informação para negócios inovadores.`,
      segments: [
        `Adequação à LGPD`,
        `Contratos digitais`,
        `Startups e tecnologia`,
        `Compliance`,
      ],
    },
  ],
  M = () => {
    let [e, t] = (0, l.useState)(`empresarial`);
    return (0, C.jsx)(`section`, {
      id: `areas-atuacao`,
      className: `py-24 lg:py-32 bg-heading scroll-mt-20`,
      children: (0, C.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `flex items-center gap-3 mb-4`,
            children: [
              (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
              (0, C.jsx)(`span`, {
                className: `text-sm font-medium tracking-[0.2em] text-primary uppercase`,
                children: `Expertise`,
              }),
            ],
          }),
          (0, C.jsx)(`h2`, {
            className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-background mb-16`,
            children: `Áreas de Atuação`,
          }),
          (0, C.jsx)(`div`, {
            className: `grid lg:grid-cols-3 gap-6`,
            children: j.map((n) => {
              let r = n.icon,
                i = e === n.id;
              return (0, C.jsxs)(
                `button`,
                {
                  onClick: () => t(n.id),
                  className: `group text-left p-8 rounded-2xl transition-all duration-300 ${i ? `bg-primary text-primary-foreground` : `bg-heading border border-background/10 text-background hover:border-primary/50`}`,
                  children: [
                    (0, C.jsx)(`div`, {
                      className: `inline-flex p-3 rounded-xl mb-6 ${i ? `bg-primary-foreground/20` : `bg-background/10`}`,
                      children: (0, C.jsx)(r, { className: `w-6 h-6` }),
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-xl font-serif font-semibold mb-3 ${i ? `text-primary-foreground` : `text-background`}`,
                      children: n.title,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-sm leading-relaxed mb-6 ${i ? `text-primary-foreground/80` : `text-background/60`}`,
                      children: n.description,
                    }),
                    (0, C.jsx)(`div`, {
                      className: `space-y-2`,
                      children: n.segments.map((e) =>
                        (0, C.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-2 text-sm ${i ? `text-primary-foreground/90` : `text-background/70`}`,
                            children: [
                              (0, C.jsx)(f, {
                                className: `w-3 h-3 ${i ? `text-primary-foreground` : `text-primary`}`,
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                },
                n.id,
              );
            }),
          }),
          (0, C.jsx)(`div`, {
            className: `mt-12 rounded-2xl bg-primary p-8 md:p-10 lg:p-12`,
            children: (0, C.jsxs)(`div`, {
              className: `flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `max-w-2xl`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `inline-block text-xs font-medium tracking-[0.2em] text-primary-foreground/80 uppercase mb-3`,
                      children: `STARTUPS E TECNOLOGIA`,
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-2xl md:text-3xl font-serif font-semibold text-primary-foreground mb-4`,
                      children: `Estrutura jurídica para negócios que querem crescer`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-primary-foreground/90 leading-relaxed`,
                      children: `Conheça nossas soluções para startups, empresas de tecnologia e negócios inovadores, da validação do modelo à expansão da operação.`,
                    }),
                  ],
                }),
                (0, C.jsxs)(`a`, {
                  href: `https://startups.maschioadv.com.br/?utm_source=site_institucional&utm_medium=referral&utm_campaign=lp_startups`,
                  "aria-label": `Conheça as soluções jurídicas da Maschio Advogados para startups`,
                  className: `group inline-flex items-center justify-center gap-3 w-full lg:w-auto px-6 py-4 rounded-xl bg-heading text-background font-medium border border-background/20 transition-all duration-300 hover:bg-heading/90 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50`,
                  children: [
                    (0, C.jsx)(`span`, {
                      children: `Conheça nossas soluções para startups`,
                    }),
                    (0, C.jsx)(f, {
                      className: `w-4 h-4 transition-transform duration-300 group-hover:translate-x-1`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  N = [
    {
      number: `01`,
      title: `Visão Estratégica`,
      description: `Antecipamos riscos e oportunidades para seu negócio`,
    },
    {
      number: `02`,
      title: `Tecnologia`,
      description: `Processos ágeis e comunicação digital eficiente`,
    },
    {
      number: `03`,
      title: `Transparência`,
      description: `Honorários claros e atualizações constantes`,
    },
    {
      number: `04`,
      title: `Resultado`,
      description: `Foco em soluções práticas e viáveis`,
    },
  ],
  P = () =>
    (0, C.jsxs)(`section`, {
      id: `diferencial`,
      className: `py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20`,
      children: [
        (0, C.jsx)(`div`, {
          className: `absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 blur-3xl`,
        }),
        (0, C.jsx)(`div`, {
          className: `container mx-auto px-6 relative z-10`,
          children: (0, C.jsxs)(`div`, {
            className: `grid lg:grid-cols-2 gap-16 lg:gap-24 items-start`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `lg:sticky lg:top-24`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center gap-3 mb-4`,
                    children: [
                      (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                      (0, C.jsx)(`span`, {
                        className: `text-sm font-medium tracking-[0.2em] text-primary uppercase`,
                        children: `Por que nos escolher`,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`h2`, {
                    className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight`,
                    children: [`Nosso`, (0, C.jsx)(`br`, {}), `Diferencial`],
                  }),
                  (0, C.jsx)(`p`, {
                    className: `text-xl font-serif text-heading/80 mb-8`,
                    children: `Advocacia para quem pensa à frente`,
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `space-y-6 text-foreground leading-relaxed`,
                    children: [
                      (0, C.jsx)(`p`, {
                        children: `Acreditamos que o Direito deve ser um aliado estratégico, não uma barreira burocrática. Por isso, unimos conhecimento técnico sólido a uma visão contemporânea das relações jurídicas.`,
                      }),
                      (0, C.jsx)(`p`, {
                        children: `Nossa atuação é pautada pela proximidade com o cliente, linguagem acessível e soluções personalizadas. Trabalhamos para que você entenda cada etapa do processo e tome decisões informadas sobre o seu negócio e patrimônio.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(`div`, {
                className: `space-y-6`,
                children: N.map((e) =>
                  (0, C.jsxs)(
                    `div`,
                    {
                      className: `group relative p-8 rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-start gap-6`,
                          children: [
                            (0, C.jsx)(`span`, {
                              className: `text-5xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors`,
                              children: e.number,
                            }),
                            (0, C.jsxs)(`div`, {
                              className: `pt-2`,
                              children: [
                                (0, C.jsx)(`h3`, {
                                  className: `text-xl font-serif font-semibold mb-2 text-heading`,
                                  children: e.title,
                                }),
                                (0, C.jsx)(`p`, {
                                  className: `text-foreground`,
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsx)(`div`, {
                          className: `absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-full transition-all duration-300 group-hover:h-12`,
                        }),
                      ],
                    },
                    e.number,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    }),
  F = {
    version: 1,
    asset_id: `f1ad6338-b90f-4a6a-af64-fb2c4014f983`,
    project_id: `d07227c8-28cc-46a2-80f9-2de7dd079f4d`,
    url: `/__l5e/assets-v1/f1ad6338-b90f-4a6a-af64-fb2c4014f983/socias-hd.jpeg`,
    r2_key: `a/v1/d07227c8-28cc-46a2-80f9-2de7dd079f4d/f1ad6338-b90f-4a6a-af64-fb2c4014f983/socias-hd.jpeg`,
    original_filename: `socias-hd.jpeg`,
    size: 168909,
    content_type: `image/jpeg`,
    created_at: `2026-08-01T13:45:15Z`,
  },
  I = () =>
    (0, C.jsx)(`section`, {
      className: `py-24 lg:py-32 bg-secondary/40`,
      children: (0, C.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, C.jsx)(`div`, {
          className: `max-w-6xl mx-auto`,
          children: (0, C.jsxs)(`div`, {
            className: `grid lg:grid-cols-5 gap-12 lg:gap-16 items-center`,
            children: [
              (0, C.jsx)(`div`, {
                className: `lg:col-span-2`,
                children: (0, C.jsxs)(`div`, {
                  className: `relative mx-auto w-full max-w-md lg:max-w-sm`,
                  children: [
                    (0, C.jsx)(`div`, {
                      className: `absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl`,
                    }),
                    (0, C.jsx)(`img`, {
                      src: F.url,
                      alt: `Dra. Shayane Maschio e Mônica Marques`,
                      loading: `lazy`,
                      decoding: `async`,
                      className: `relative w-full h-auto rounded-2xl shadow-2xl`,
                      style: { objectFit: `contain`, objectPosition: `center` },
                    }),
                  ],
                }),
              }),
              (0, C.jsxs)(`div`, {
                className: `lg:col-span-3`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center gap-3 mb-4`,
                    children: [
                      (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                      (0, C.jsx)(`span`, {
                        className: `text-sm font-medium tracking-[0.2em] text-primary uppercase`,
                        children: `Sócias`,
                      }),
                    ],
                  }),
                  (0, C.jsx)(`h2`, {
                    className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3`,
                    children: `Shayane Maschio`,
                  }),
                  (0, C.jsx)(`p`, {
                    className: `text-lg text-primary font-medium mb-8`,
                    children: `Sócia | Advogada Empresarial — OAB/RS 134.761`,
                  }),
                  (0, C.jsx)(`div`, {
                    className: `space-y-6 text-lg text-foreground leading-relaxed min-[480px]:text-justify`,
                    children: (0, C.jsx)(`p`, {
                      children: `Graduada em Direito pela Universidade de Caxias do Sul (UCS), especialista em Empreendedorismo e Desenvolvimento de Negócios (PUCRS) e pós-graduanda em Direito Tributário (IBET) e Direito Empresarial (PUCRS). Atua com foco em estruturação de negócios e soluções jurídicas estratégicas para empresas e empresários, prestando assessoria consultiva e preventiva voltada ao desenvolvimento e à segurança jurídica empresarial.`,
                    }),
                  }),
                  (0, C.jsx)(`div`, {
                    className: `my-12 h-px w-full bg-border`,
                  }),
                  (0, C.jsx)(`h2`, {
                    className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3`,
                    children: `Mônica Marques`,
                  }),
                  (0, C.jsx)(`p`, {
                    className: `text-lg text-primary font-medium mb-8`,
                    children: `Sócia | Advogada — OAB/RS 135.200`,
                  }),
                  (0, C.jsx)(`div`, {
                    className: `space-y-6 text-lg text-foreground leading-relaxed min-[480px]:text-justify`,
                    children: (0, C.jsx)(`p`, {
                      children: `Graduada em Direito pela Universidade de Caxias do Sul (UCS) e pós-graduada em Direito Privado, Tecnologia e Inovação pela Escola Brasileira de Direito (EBRADI). Atua com foco em Direito Digital, proteção de dados, inovação e soluções jurídicas estratégicas.`,
                    }),
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `mt-10 flex gap-4`,
                    children: [
                      (0, C.jsxs)(`a`, {
                        href: `https://www.instagram.com/maschioadvogados/`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-primary transition-colors`,
                        children: [
                          (0, C.jsx)(D, { className: `w-5 h-5` }),
                          `@maschioadvogados`,
                        ],
                      }),
                      (0, C.jsxs)(`a`, {
                        href: `https://linkedin.com/company/maschioadvogados/`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-primary transition-colors`,
                        children: [
                          (0, C.jsx)(O, { className: `w-5 h-5` }),
                          `LinkedIn`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  L = [
    {
      nome: `Rômulo Bastos Silva`,
      nota: 5,
      tempo: ``,
      texto: `Ótimas profissionais! Fui muito bem atendido, sempre com esclarecimentos precisos e atenção aos detalhes. Confiança total no trabalho dessa equipe. Recomendo de olhos fechados!`,
    },
    {
      nome: `Iago Petrarca`,
      nota: 5,
      tempo: `um mês atrás`,
      texto: `Desde o início do meu processo, fui tratado com muito profissionalismo e atenção. O atendimento sempre foi personalizado e feito com embasamento técnico impecável. As meninas me acompanharam em cada etapa, trazendo segurança e tranquilidade em um momento difícil. Sou muito grato e recomendo muito o trabalho do escritório.`,
    },
    {
      nome: `Mulheres em Convergência`,
      nota: 5,
      tempo: `um mês atrás`,
      texto: `Profissionais atenciosos e muito qualificados. Tive um ótimo atendimento durante todo meu processo.`,
    },
  ],
  R = () =>
    (0, C.jsx)(`section`, {
      className: `py-24 lg:py-32 bg-background`,
      children: (0, C.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `text-center mb-16`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center justify-center gap-3 mb-4`,
                children: [
                  (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                  (0, C.jsx)(`span`, {
                    className: `text-sm font-medium tracking-[0.2em] text-primary uppercase`,
                    children: `Depoimentos`,
                  }),
                  (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                ],
              }),
              (0, C.jsx)(`h2`, {
                className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4`,
                children: `O que nossos clientes dizem`,
              }),
              (0, C.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 text-sm text-muted-foreground`,
                children: [
                  (0, C.jsx)(k, { className: `w-5 h-5` }),
                  `Avaliações verificadas do Google`,
                ],
              }),
            ],
          }),
          (0, C.jsx)(`div`, {
            className: `grid md:grid-cols-3 gap-8 max-w-6xl mx-auto`,
            children: L.map((e) =>
              (0, C.jsxs)(
                `div`,
                {
                  className: `group relative bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl`,
                  children: [
                    (0, C.jsx)(v, {
                      className: `absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors`,
                    }),
                    (0, C.jsx)(`div`, {
                      className: `flex items-center gap-1 mb-6`,
                      children: Array.from({ length: e.nota }).map((e, t) =>
                        (0, C.jsx)(
                          x,
                          { className: `w-4 h-4 fill-primary text-primary` },
                          t,
                        ),
                      ),
                    }),
                    (0, C.jsxs)(`p`, {
                      className: `text-foreground leading-relaxed mb-8`,
                      children: [`"`, e.texto, `"`],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, C.jsx)(`div`, {
                          className: `w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center`,
                          children: (0, C.jsx)(`span`, {
                            className: `text-primary font-semibold text-sm`,
                            children: e.nome.charAt(0),
                          }),
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`p`, {
                              className: `font-medium text-heading text-sm`,
                              children: e.nome,
                            }),
                            e.tempo &&
                              (0, C.jsx)(`p`, {
                                className: `text-xs text-muted-foreground`,
                                children: e.tempo,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.nome,
              ),
            ),
          }),
        ],
      }),
    }),
  z = () =>
    (0, C.jsxs)(`section`, {
      id: `contato`,
      className: `py-24 lg:py-32 bg-heading relative overflow-hidden scroll-mt-20`,
      children: [
        (0, C.jsx)(`div`, {
          className: `absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent`,
        }),
        (0, C.jsx)(`div`, {
          className: `absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl`,
        }),
        (0, C.jsx)(`div`, {
          className: `container mx-auto px-6 relative z-10`,
          children: (0, C.jsxs)(`div`, {
            className: `max-w-3xl mx-auto text-center`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center justify-center gap-3 mb-6`,
                children: [
                  (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                  (0, C.jsx)(`span`, {
                    className: `text-sm font-medium tracking-[0.2em] text-primary uppercase`,
                    children: `Contato`,
                  }),
                  (0, C.jsx)(`div`, { className: `w-8 h-px bg-primary` }),
                ],
              }),
              (0, C.jsx)(`h2`, {
                className: `text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-background mb-6`,
                children: `Vamos conversar?`,
              }),
              (0, C.jsx)(`p`, {
                className: `text-lg md:text-xl text-background/70 mb-12`,
                children: `Entre em contato para entendermos a sua necessidade e encontrarmos a melhor solução.`,
              }),
              (0, C.jsxs)(`a`, {
                href: `https://wa.me/5554991146079`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `group inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-full font-medium text-lg transition-all hover:brightness-110 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1`,
                children: [
                  (0, C.jsx)(E, {
                    className: `w-6 h-6 transition-transform group-hover:scale-110`,
                  }),
                  (0, C.jsx)(`span`, { children: `WhatsApp: (54) 99114-6079` }),
                ],
              }),
              (0, C.jsx)(`p`, {
                className: `mt-8 text-background/50 text-sm`,
                children: `Atendimento de segunda a sexta, das 9h às 18h`,
              }),
            ],
          }),
        }),
      ],
    }),
  B = () =>
    (0, C.jsx)(`footer`, {
      className: `py-8 bg-background border-t border-border`,
      children: (0, C.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, C.jsxs)(`div`, {
          className: `flex flex-col md:flex-row items-center justify-between gap-6`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, C.jsx)(`span`, {
                  className: `text-2xl font-serif font-bold text-heading tracking-tight`,
                  children: `M`,
                }),
                (0, C.jsx)(`span`, {
                  className: `font-serif text-lg text-heading`,
                  children: `Maschio Advogados`,
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-8`,
              children: [
                (0, C.jsx)(`a`, {
                  href: `https://www.instagram.com/maschioadvogados/`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `text-foreground hover:text-primary transition-colors`,
                  "aria-label": `Instagram`,
                  children: (0, C.jsx)(m, { className: `w-5 h-5` }),
                }),
                (0, C.jsx)(`a`, {
                  href: `https://linkedin.com/company/maschioadvogados/`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `text-foreground hover:text-primary transition-colors`,
                  "aria-label": `LinkedIn`,
                  children: (0, C.jsx)(h, { className: `w-5 h-5` }),
                }),
                (0, C.jsx)(`a`, {
                  href: `mailto:juridico@maschioadv.com.br`,
                  className: `text-foreground hover:text-primary transition-colors`,
                  "aria-label": `Enviar e-mail para Maschio Advogados`,
                  children: (0, C.jsx)(g, { className: `w-5 h-5` }),
                }),
              ],
            }),
            (0, C.jsxs)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: [`© `, new Date().getFullYear(), ` Maschio Advogados`],
            }),
          ],
        }),
      }),
    });
function V() {
  return (0, C.jsxs)(`main`, {
    className: `overflow-x-hidden`,
    children: [
      (0, C.jsx)(T, {}),
      (0, C.jsx)(A, {}),
      (0, C.jsx)(M, {}),
      (0, C.jsx)(P, {}),
      (0, C.jsx)(I, {}),
      (0, C.jsx)(R, {}),
      (0, C.jsx)(z, {}),
      (0, C.jsx)(B, {}),
    ],
  });
}
export { V as component };
