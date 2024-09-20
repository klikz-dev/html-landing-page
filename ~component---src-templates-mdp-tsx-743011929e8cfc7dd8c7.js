'use strict';
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5809],
  {
    12695: function (e, t, l) {
      l.d(t, {
        A: function () {
          return r;
        },
      });
      var a = l(96540),
        n = l(45619),
        i = l(17851);
      function o(e, t) {
        const {
            name: l,
            placeholder: o,
            minAgeConfig: r,
            maxAgeConfig: s,
            requiredConfig: c = 'Please enter a valid date',
            ...d
          } = e,
          { watch: u } = (0, n.xW)();
        return a.createElement(
          i.A,
          Object.assign(
            {
              ref: t,
              name: l,
              placeholder: o,
              type: 'date',
              sx: {
                minWidth: '-webkit-fill-available',
                width: '100%',
                position: 'relative',
                '::-webkit-date-and-time-value': {
                  textAlign: 'left',
                  paddingLeft: 3,
                  fontSize: 'inherit',
                },
                '&.empty': {
                  ':not(:focus)::-webkit-datetime-edit': {
                    color: 'transparent',
                  },
                  ':not(:focus):before': {
                    color: 'tints.uiGrey',
                    content: 'attr(placeholder)',
                    fontSize: 'inherit',
                    position: 'absolute',
                    top: '25%',
                    left: 4,
                    display: 'block',
                  },
                },
              },
              className: u(l, '').length > 0 ? '' : 'empty',
              autoComplete: 'bday',
              validations: {
                required: c,
                validate: (e) => {
                  if (e) {
                    const [t, l, a] = e.split('-'),
                      n = new Date(parseInt(t), parseInt(l) - 1, parseInt(a)),
                      i = Date.now() - n.getTime(),
                      o = new Date(i),
                      c = Math.abs(o.getUTCFullYear() - 1970);
                    if (
                      (null != r && r.value && c < r.value) ||
                      (c < 18 && (null == r || !r.value)) ||
                      i <= 0
                    )
                      return (
                        (null == r ? void 0 : r.message) ||
                        'You must be at least 18 years old'
                      );
                    if (s && c >= s.value) return s.message;
                  }
                },
              },
            },
            d,
            {
              'data-element': 'InputField',
              'data-component': 'DateField',
              'data-source-file': 'DateField.tsx',
            }
          )
        );
      }
      var r = (0, a.forwardRef)(o);
    },
    86381: function (e, t, l) {
      l.d(t, {
        A: function () {
          return i;
        },
      });
      var a = l(6571),
        n = l(96540);
      var i = function (e) {
        var t;
        let {
          register: l,
          errors: i,
          wcPlusSignupEmail: o,
          placeholder: r = 'Your Email',
        } = e;
        return n.createElement(
          a.MJ,
          {
            isRequired: !0,
            isInvalid: null == i ? void 0 : i.email,
            'data-element': 'FormControl',
            'data-component': 'EmailField',
            'data-source-file': 'EmailField.tsx',
          },
          n.createElement(a.pd, {
            placeholder: r,
            name: 'email',
            type: 'email',
            defaultValue: o || '',
            ref: l({
              required: 'Please enter an email address',
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                message: 'Please enter a valid email address',
              },
            }),
            'data-element': 'Input',
            'data-source-file': 'EmailField.tsx',
          }),
          n.createElement(
            a.Wt,
            {
              'data-element': 'FormErrorMessage',
              'data-source-file': 'EmailField.tsx',
            },
            null == i || null === (t = i.email) || void 0 === t
              ? void 0
              : t.message
          )
        );
      };
    },
    55437: function (e, t, l) {
      l.d(t, {
        A: function () {
          return u;
        },
      });
      var a = l(97859),
        n = l(77500),
        i = l(6571),
        o = l(66985),
        r = l(96540),
        s = l(45619),
        c = l(27015);
      function d(e, t) {
        var l;
        const {
            label: d,
            helperText: u,
            name: m,
            placeholder: p,
            validations: g,
            options: h,
            renderOption: x,
            ...A
          } = e,
          { register: f, errors: v, control: E } = (0, s.xW)();
        (0, r.useEffect)(() => {
          var e;
          null === (e = E.fieldsRef.current[m]) ||
            void 0 === e ||
            e.ref.setAttribute('placeholder', p);
        }, [E.fieldsRef, m, p]);
        const b =
            null === (l = (0, n.A)(v, m)) || void 0 === l ? void 0 : l.message,
          y = Boolean(b),
          C = Boolean(null == g ? void 0 : g.required);
        return r.createElement(
          i.MJ,
          {
            isInvalid: y,
            isRequired: C,
            'data-element': 'FormControl',
            'data-component': 'SelectField',
            'data-source-file': 'SelectField.tsx',
          },
          d ? r.createElement(i.lR, null, d) : null,
          r.createElement(
            i.l6,
            Object.assign(
              {
                icon: r.createElement(i.In, { as: o.a }),
                ref: (0, c.P)(t, f(g)),
                name: m,
                defaultValue: '',
                fontWeight: 'medium',
                _focus: { borderColor: 'viridian.base' },
                _focusVisible: { outline: 'none' },
                sx: {
                  ':invalid': { color: 'tints.uiGrey', fontWeight: 'normal' },
                  ...(!(0, a.A)(p) && {
                    color: 'tints.uiGrey',
                    ':has(option:enabled:checked)': { color: 'tints.black' },
                  }),
                },
                required: !1,
              },
              A,
              {
                'data-element': 'Select',
                'data-source-file': 'SelectField.tsx',
              }
            ),
            (0, a.A)(p)
              ? null
              : r.createElement(
                  'option',
                  { value: '', disabled: !0, hidden: !0 },
                  p
                ),
            h.map(x)
          ),
          !y && u ? r.createElement(i.eK, null, u) : null,
          r.createElement(
            i.Wt,
            {
              'data-element': 'FormErrorMessage',
              'data-source-file': 'SelectField.tsx',
            },
            b
          )
        );
      }
      var u = (0, r.forwardRef)(d);
    },
    57548: function (e, t, l) {
      l.d(t, {
        A: function () {
          return o;
        },
      });
      var a = l(6571),
        n = l(96540),
        i = l(85692);
      var o = (e) => {
        let {
          children: t,
          type: l = 'sticky',
          backgroundColorOverride: o = 'tints.lightCream',
        } = e;
        const [r, s] = (0, i.Wx)({ skip: 'sticky' !== l });
        let c = 'inline' === l ? 'unset' : l;
        const [d, u] = n.useState(0),
          m = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          m.current && 'fixed' === l ? u(m.current.offsetHeight) : u(0);
        }, [l]);
        const p = {
          bg: [s ? '0 none' : o, null, 'none'],
          borderTopRadius: ['3xl', null, 0],
          boxShadow: [s ? 'none' : 'dialog', null, 'none'],
          bottom: '0',
          left: '0',
        };
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            a.az,
            {
              ref: m,
              display: 'flex',
              sx: { ...('inline' !== l && p) },
              position: [c, null, 'unset'],
              width: s ? 'auto' : '100%',
              zIndex: 'docked',
              flexDirection: 'column',
              alignItems: 'center',
            },
            t
          ),
          n.createElement(a.az, { ref: r, height: d })
        );
      };
    },
    69360: function (e, t, l) {
      l.r(t),
        l.d(t, {
          Head: function () {
            return Mn.p;
          },
          default: function () {
            return Fn;
          },
        });
      l(69479);
      var a = l(6571),
        n = l(72030),
        i = l(45871),
        o = l(69033),
        r = l(955),
        s = l(37113),
        c = l(26056),
        d = l(32532),
        u = l(96540),
        m = l(78444);
      const p = {
        renderNode: {
          [i.BLOCKS.PARAGRAPH]: (e, t) =>
            u.createElement(
              'p',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  fontWeight: a.w4.fontWeights.normal,
                  marginBottom: a.w4.space[3],
                },
              },
              t
            ),
          [i.BLOCKS.HEADING_2]: (e, t) =>
            u.createElement(
              a.DZ,
              {
                as: 'h2',
                fontSize: ['xl', '5xl'],
                fontWeight: 'normal',
                lineHeight: ['27px', '41.60px'],
                marginBottom: '4',
                color: 'moonlight.base',
              },
              t
            ),
          [i.BLOCKS.HEADING_3]: (e, t) =>
            u.createElement(
              a.DZ,
              {
                as: 'h3',
                fontSize: ['xl', '2xl'],
                fontWeight: 'medium',
                lineHeight: ['27px', '28px'],
                marginBottom: '8',
              },
              t
            ),
          [i.BLOCKS.UL_LIST]: (e, t) =>
            u.createElement(
              'ul',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  listStyleType: 'initial',
                  marginInlineStart: '1em',
                },
              },
              u.createElement('li', { style: { listStyle: 'disc' } }, t)
            ),
          [i.BLOCKS.OL_LIST]: (e, t) =>
            u.createElement(
              'ol',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  listStyleType: 'initial',
                  marginInlineStart: '1em',
                },
              },
              u.createElement('li', { style: { listStyle: 'numeric' } }, t)
            ),
        },
      };
      var g = (e) => {
        var t, l;
        if (!e) return null;
        const {
            eyebrow: i,
            title: g,
            bgColor: h,
            flags: x,
            headline: A,
            desktopBackgroundImage: f,
            desktopBackgroundImageAltText: v,
            productsSubsection: E,
          } = e,
          b =
            null == x
              ? void 0
              : x.map(
                  (e) =>
                    'hasBackgroundShape' === e.displayName && !0 === e.value
                );
        return u.createElement(
          r.A,
          {
            size: ['sm', 'sm', 'sm', 'xl'],
            centerContent: !0,
            'data-element': 'SectionContainer',
            'data-component': 'BannerAndCardsV2',
            'data-source-file': 'BannerAndCardsV2.tsx',
          },
          u.createElement(s.A, {
            title: g,
            eyebrow: i,
            'data-element': 'SectionHeader',
            'data-source-file': 'BannerAndCardsV2.tsx',
          }),
          u.createElement(
            a.az,
            {
              background: h,
              display: ['flex'],
              flexFlow: ['column', 'row'],
              height: ['auto', 'auto', '622px'],
              overflow: 'hidden',
              position: ['unset', 'relative'],
              borderRadius: 12,
              'data-element': 'Box',
              'data-source-file': 'BannerAndCardsV2.tsx',
            },
            u.createElement(
              a.az,
              {
                flex: ['unset', 1],
                padding: ['6', '12'],
                order: ['2', '1'],
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'stretch',
                zIndex: ['initial', '1'],
                justifyContent: 'center',
                'data-element': 'Box',
                'data-source-file': 'BannerAndCardsV2.tsx',
              },
              A
                ? u.createElement(
                    a.az,
                    { width: ['100%', '80%'], marginTop: ['6', 'unset'] },
                    (0, m.A)(A, p)
                  )
                : null,
              E
                ? u.createElement(
                    a.az,
                    {
                      position: ['unset', 'unset', 'absolute'],
                      width: ['100%', '100%', '65%'],
                      zIndex: ['unset', '1'],
                      bottom: ['unset', '48px'],
                    },
                    u.createElement(
                      a.EY,
                      {
                        fontSize: 'lg',
                        fontWeight: a.w4.fontWeights.medium,
                        marginBottom: '3',
                        marginTop: ['8', 'unset'],
                      },
                      E.displayName
                    ),
                    u.createElement(
                      a.az,
                      {
                        display: ['block', 'flex'],
                        alignItems: ['block', 'flex-start', 'flex'],
                        justifyContent: 'space-between',
                        gap: '20px',
                      },
                      u.createElement(
                        a.az,
                        {
                          gap: ['unset', '5'],
                          display: ['block', 'block', 'flex'],
                          flex: '1',
                        },
                        E.products.map((e) =>
                          u.createElement(
                            o.A,
                            {
                              key: e.displayName,
                              image: e.image
                                ? u.createElement(d.G, {
                                    image: e.image.gatsbyImageData,
                                    alt: `${
                                      null == e ? void 0 : e.displayName
                                    } box image`,
                                    style: {
                                      width: '120px',
                                      height: 'auto',
                                      zIndex: '1',
                                    },
                                  })
                                : null,
                              pricing: u.createElement(
                                u.Fragment,
                                null,
                                u.createElement(
                                  a.EY,
                                  {
                                    fontSize: ['sm', 'md'],
                                    color: a.w4.colors.utility.sale,
                                    marginRight: '2',
                                  },
                                  e.creditCost,
                                  ' Credit',
                                  e.creditCost && e.creditCost > 1 ? 's' : ''
                                ),
                                u.createElement(c.A, {
                                  dollarAmount: e.dollarAmount.toString(),
                                  centsAmount: e.centsAmount
                                    .toFixed(1)
                                    .replace('.', ''),
                                  variant: 'strikethrough',
                                })
                              ),
                            },
                            u.createElement(
                              a.EY,
                              {
                                fontSize: ['md', 'lg'],
                                color: 'tints.black',
                                fontWeight: 'medium',
                              },
                              e.displayName
                            )
                          )
                        )
                      )
                    )
                  )
                : null
            ),
            u.createElement(
              a.az,
              {
                flex: ['unset', 1],
                display: 'flex',
                alignItems: ['center', 'flex-start', 'center'],
                justifyContent: 'center',
                order: ['1', '2'],
                height: ['300px', 'auto'],
                overflow: ['unset', 'hidden'],
                position: 'relative',
                'data-element': 'Box',
                'data-source-file': 'BannerAndCardsV2.tsx',
              },
              f
                ? b
                  ? u.createElement(n._, {
                      src:
                        null === (t = f.gatsbyImageData.images.fallback) ||
                        void 0 === t
                          ? void 0
                          : t.src,
                      alt: v || '',
                      boxSize: '100%',
                      objectFit: 'cover',
                      clipPath: [
                        'polygon(1% 100%, 1% 0%, 100% 0%, 100% 100%, 87% 81%)',
                        'polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%, 28% 40%)',
                      ],
                    })
                  : u.createElement(n._, {
                      src:
                        null === (l = f.gatsbyImageData.images.fallback) ||
                        void 0 === l
                          ? void 0
                          : l.src,
                      alt: v || '',
                    })
                : null
            )
          )
        );
      };
      const h = (e) =>
          'object' == typeof e &&
          e.products &&
          Array.isArray(e.products) &&
          e.products.every(
            (e) =>
              'object' == typeof e &&
              'string' == typeof e.slug &&
              'number' == typeof e.creditCost
          ),
        x = (e, t) => {
          var l, a, n, i;
          if (!e || !e.subsections) return;
          if (
            !(
              e.subsections.length > 0 &&
              'HorizontalProductCards' ===
                (null === (l = e.subsections[0]) || void 0 === l
                  ? void 0
                  : l.componentName) &&
              h(
                null === (a = e.subsections[0]) ||
                  void 0 === a ||
                  null === (n = a.metadata) ||
                  void 0 === n
                  ? void 0
                  : n.context
              )
            )
          )
            return;
          const o = ((e, t) => {
            if (!e || !e.subsections || 0 === e.subsections.length) return [];
            const l = e.subsections[0];
            if (!l || !l.metadata || !h(l.metadata.context)) return [];
            const { products: a } = l.metadata.context,
              n = [];
            return (
              a.forEach((e) => {
                let { slug: l, creditCost: a } = e;
                const i = t && l && t[l];
                if (!i) return null;
                const { price: o, displayName: r, productCardImage: s } = i,
                  c = o ? Math.floor(o) : 0,
                  d = {
                    displayName: r,
                    creditCost: a,
                    dollarAmount: c,
                    centsAmount: o ? Math.round(100 * (o - Number(c))) : 0,
                    image: s,
                    linkTo: `/products/${l}`,
                  };
                n.push(d);
              }),
              n
            );
          })(e, t);
          return {
            displayName:
              (null === (i = e.subsections[0]) || void 0 === i
                ? void 0
                : i.displayName) || '',
            products: o,
          };
        };
      var A = l(97294);
      var f = (e) => {
          if (!e || !e.toolCards) return null;
          const { toolCards: t } = e;
          return u.createElement(
            a.az,
            {
              position: 'absolute',
              right: ['unset', 12],
              bottom: ['-20px', '28px'],
              display: ['flex', 'block'],
              gap: ['10px', 'unset'],
              'data-element': 'Box',
              'data-component': 'ToolCardV2',
              'data-source-file': 'ToolCardV2.tsx',
            },
            t.map((e, t) => {
              var l, n;
              return u.createElement(
                a.az,
                {
                  key: t,
                  width: ['100px', '170px'],
                  height: ['100px', '170px'],
                  backgroundColor: e.bgColor,
                  borderRadius: '8px',
                  marginBottom: ['0', '15px'],
                },
                u.createElement(
                  a.az,
                  {
                    display: 'flex',
                    height: '100%',
                    flexFlow: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                  },
                  null !== (l = e.body) && void 0 !== l && l.raw
                    ? u.createElement(
                        a.EY,
                        {
                          color: e.textColor || a.w4.colors.tints.white,
                          fontSize: ['3xl', '8xl'],
                          fontWeight: 'medium',
                          lineHeight: ['3xl', '8xl'],
                          paddingX: [2, 5],
                          paddingBottom: [2, 2],
                        },
                        (0, m.A)(e.body)
                      )
                    : null,
                  u.createElement(
                    a.EY,
                    {
                      fontSize: ['sm', 'xl'],
                      color: e.textColor || a.w4.colors.tints.white,
                      fontWeight: 'medium',
                      paddingX: [2, 5],
                      paddingTop: [2, 5],
                      paddingBottom: [2, 2],
                    },
                    e.title
                  ),
                  e.desktopBackgroundImage
                    ? u.createElement(a._V, {
                        src:
                          null ===
                            (n =
                              e.desktopBackgroundImage.gatsbyImageData.images
                                .fallback) || void 0 === n
                            ? void 0
                            : n.src,
                      })
                    : null
                )
              );
            })
          );
        },
        v = l(64810),
        E = l(11616),
        b = l(47654),
        y = l(50555),
        C = l(16562),
        w = l(91831);
      const S = {
        renderNode: {
          [i.BLOCKS.PARAGRAPH]: (e, t) =>
            u.createElement(
              'p',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  fontWeight: a.w4.fontWeights.normal,
                  marginBottom: a.w4.space[3],
                },
              },
              t
            ),
          [i.BLOCKS.HEADING_2]: (e, t) =>
            u.createElement(
              a.DZ,
              {
                as: 'h2',
                fontSize: ['xl', '5xl'],
                fontWeight: 'normal',
                lineHeight: ['27px', '41.60px'],
                marginBottom: '4',
                color: 'moonlight.base',
              },
              t
            ),
          [i.BLOCKS.HEADING_3]: (e, t) =>
            u.createElement(
              a.DZ,
              {
                as: 'h3',
                fontSize: ['xl', '2xl'],
                fontWeight: 'medium',
                lineHeight: ['27px', '28px'],
                marginBottom: '8',
              },
              t
            ),
          [i.BLOCKS.UL_LIST]: (e, t) =>
            u.createElement(
              'ul',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  listStyleType: 'initial',
                  marginInlineStart: '1em',
                },
              },
              u.createElement('li', { style: { listStyle: 'disc' } }, t)
            ),
          [i.BLOCKS.OL_LIST]: (e, t) =>
            u.createElement(
              'ol',
              {
                style: {
                  fontSize: a.w4.fontSizes.lg,
                  listStyleType: 'initial',
                  marginInlineStart: '1em',
                },
              },
              u.createElement('li', { style: { listStyle: 'numeric' } }, t)
            ),
        },
      };
      var k = (e) => {
        var t;
        const { handleMdpCtaClick: l } = (0, w.A)();
        if (!e) return null;
        const {
            eyebrow: i,
            title: o,
            bgColor: c,
            headline: d,
            desktopBackgroundImage: p,
            desktopBackgroundImageAltText: g,
            bullets: h,
            toolCards: x,
            cta: k,
          } = e,
          I = () => {
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_LINK,
              data: {
                sectionHeader: o || 'No title provided',
                contentfulSection: 'BannerAndToolCards',
                ctaText: (null == k ? void 0 : k.label) || 'No CTA label',
              },
            });
          },
          z = (0, y.Rw)(null == k ? void 0 : k.url),
          B = z
            ? (0, C.x)((null == k ? void 0 : k.url) || '')
            : null == k
            ? void 0
            : k.url,
          D = { ...(z ? { href: B, as: 'a' } : { to: B, as: v.Link }) };
        return u.createElement(
          r.A,
          {
            size: ['sm', null, null, 'xl'],
            centerContent: !0,
            'data-element': 'SectionContainer',
            'data-component': 'BannerAndToolCards',
            'data-source-file': 'BannerAndToolCards.tsx',
          },
          u.createElement(s.A, {
            title: o,
            eyebrow: i,
            'data-element': 'SectionHeader',
            'data-source-file': 'BannerAndToolCards.tsx',
          }),
          u.createElement(
            a.az,
            {
              background: c,
              display: ['flex'],
              flexFlow: ['column', 'row'],
              height: ['auto', 'auto', '622px'],
              overflow: 'hidden',
              position: ['unset', 'relative'],
              borderRadius: 12,
              'data-element': 'Box',
              'data-source-file': 'BannerAndToolCards.tsx',
            },
            u.createElement(a.az, {
              background: c,
              position: ['unset', 'absolute'],
              top: '0',
              left: '225px',
              clipPath: 'ellipse(20% 60% at 55% 50%)',
              zIndex: ['0', '1'],
              height: ['auto', '100%'],
              width: ['auto', '56%'],
              display: ['none', 'none', 'none', 'initial'],
              'data-element': 'Box',
              'data-source-file': 'BannerAndToolCards.tsx',
            }),
            u.createElement(
              a.so,
              {
                flex: ['unset', 1],
                padding: ['6', '12'],
                order: ['2', '1'],
                flexFlow: 'column',
                alignItems: 'stretch',
                zIndex: ['initial', '1'],
                justifyContent:
                  null != k && k.label ? 'space-between' : 'center',
                'data-element': 'Flex',
                'data-source-file': 'BannerAndToolCards.tsx',
              },
              u.createElement(
                a.az,
                {
                  'data-element': 'Box',
                  'data-source-file': 'BannerAndToolCards.tsx',
                },
                d
                  ? u.createElement(
                      a.az,
                      { width: ['100%', '80%'], marginTop: ['6', 'unset'] },
                      (0, m.A)(d, S)
                    )
                  : null,
                h
                  ? h.map((e) =>
                      u.createElement(
                        a.az,
                        {
                          width: '100%',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          maxWidth: '380px',
                          marginBottom: 5,
                          key: e.title,
                          _last: { marginBottom: 0 },
                        },
                        u.createElement(
                          a.az,
                          {
                            width: ['32px'],
                            height: ['32px'],
                            marginRight: 3,
                            backgroundColor: 'tints.white',
                            borderRadius: '50%',
                            padding: 1,
                          },
                          u.createElement(A.A, {
                            icon: e.iconName,
                            color: 'moonlight.base',
                          })
                        ),
                        u.createElement(a.EY, { size: 'lg' }, e.title)
                      )
                    )
                  : null
              ),
              k && null != k && k.label
                ? u.createElement(
                    a.$n,
                    Object.assign(
                      {
                        variant: 'primary',
                        id: `${o}-${null == k ? void 0 : k.label}`,
                        onClick: (e) => {
                          l({
                            event: e,
                            ctaUrl: (null == k ? void 0 : k.url) || '',
                          }),
                            I();
                        },
                        marginTop: '6',
                        width: ['100%', null, 'fit-content'],
                      },
                      D
                    ),
                    null == k ? void 0 : k.label
                  )
                : null
            ),
            u.createElement(
              a.az,
              {
                flex: ['unset', 1],
                display: 'flex',
                alignItems: ['center', 'flex-start', 'center'],
                justifyContent: 'center',
                order: ['1', '2'],
                height: ['300px', 'auto'],
                overflow: ['unset', 'hidden'],
                position: 'relative',
                'data-element': 'Box',
                'data-source-file': 'BannerAndToolCards.tsx',
              },
              p
                ? u.createElement(n._, {
                    src:
                      null === (t = p.gatsbyImageData.images.fallback) ||
                      void 0 === t
                        ? void 0
                        : t.src,
                    alt: g || '',
                    boxSize: '100%',
                    objectFit: 'cover',
                    clipPath: ['ellipse(63% 71% at 50% 45%)', 'unset'],
                  })
                : null,
              x ? u.createElement(f, { toolCards: x }) : null
            )
          )
        );
      };
      var I = l(81685),
        z = l(8447),
        B = l(98814);
      const D = (e) => {
        const {
            activeStepIndex: t,
            hideIndicators: l = !1,
            steps: n,
            stepperTheme: i = {
              light: 'eggplant.light',
              base: 'eggplant.base',
            },
          } = e,
          { activeStep: o, setActiveStep: r } = (0, a.fS)({
            index: t,
            count: n.length,
          });
        return (
          (0, u.useEffect)(() => {
            r(t);
          }, [t, r]),
          u.createElement(
            a.az,
            {
              position: 'relative',
              width: '100%',
              'data-testid': 'stepper',
              'data-element': 'Box',
              'data-component': 'Stepper',
              'data-source-file': 'Stepper.tsx',
            },
            u.createElement(
              a.C1,
              {
                index: o,
                width: '100%',
                display: 'flex',
                flexWrap: 'nowrap',
                'data-element': 'UIKitStepper',
                'data-source-file': 'Stepper.tsx',
              },
              n.map((e, t) => {
                const r = o === t,
                  s = 0 === t,
                  c = t === n.length - 1,
                  d = o > t;
                let m = '60px';
                const p = `calc(100% - ((${60 * (n.length - 1)}px) - (${
                  n.length - 1
                } * 12px)))`;
                return (
                  r ? (m = p) : (s || c) && (m = '54px'),
                  u.createElement(
                    a.az,
                    {
                      width: m,
                      opacity: d || r ? 1 : 0.2,
                      paddingRight: c ? '0' : '6px',
                      paddingLeft: s ? '0' : '6px',
                      transition:
                        'width 0.4s ease-in-out, opacity 0.4s ease-in-out',
                      key: `step-${t}`,
                    },
                    u.createElement(
                      a.az,
                      {
                        paddingTop: l ? 2 : 5,
                        position: 'relative',
                        width: '100%',
                      },
                      u.createElement(a.az, {
                        width: '100%',
                        position: 'absolute',
                        top: '0',
                        backgroundColor: d ? i.light : i.base,
                        height: l ? '4px' : '8px',
                        borderRadius: '4',
                        left: '0',
                      }),
                      u.createElement(
                        a.pn,
                        { key: t, 'data-testid': 'stepper-step' },
                        l
                          ? null
                          : u.createElement(
                              a.az,
                              { 'data-testid': 'stepper-indicator' },
                              u.createElement(
                                a.SK,
                                null,
                                u.createElement(a.xo, {
                                  complete: r
                                    ? null
                                    : u.createElement(a.Wx, {
                                        background: i.light,
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '3px',
                                        width: '20px',
                                        height: '20px',
                                        display: 'block',
                                      }),
                                })
                              ),
                              d
                                ? null
                                : u.createElement(
                                    a.JR,
                                    null,
                                    u.createElement(
                                      a.EY,
                                      { color: d ? i.light : i.base },
                                      e.title
                                    )
                                  )
                            )
                      )
                    )
                  )
                );
              })
            )
          )
        );
      };
      var P = u.memo(D),
        T = l(82282),
        M = l(91453);
      const N = (e) => {
        var t;
        const { questions: l, quizEmailCapture: n, rightSection: i } = e,
          { isEmailQuizEnabled: o } = (0, T.D0)(),
          { handleMdpCtaClick: s } = (0, w.A)(),
          c = l.map((e) =>
            'multiSelect' === e.quizQuestionType
              ? { question: e.title, answer: [] }
              : { question: e.title, answer: '' }
          ),
          { 0: m, 1: p } = (0, u.useState)(c),
          { 0: g, 1: h } = (0, u.useState)(0),
          { 0: x, 1: f } = (0, u.useState)(!1),
          { 0: y, 1: C } = (0, u.useState)(!1),
          { 0: S, 1: k } = (0, u.useState)(''),
          { 0: I, 1: z } = (0, u.useState)(''),
          { 0: D, 1: N } = (0, u.useState)('');
        if (!o) return null;
        const F = l.map((e, t) => ({ title: `0${t + 1}` })),
          L = (e, t) => {
            const a = [...m];
            'singleSelect' === e
              ? ((e) => {
                  const t = a[g].answer;
                  a[g].answer = t === e ? '' : e;
                })(t)
              : 'multiSelect' === e &&
                ((e) => {
                  let t = a[g].answer;
                  Array.isArray(t) &&
                    (t.includes(e) ? (t = t.filter((t) => t !== e)) : t.push(e),
                    (a[g].answer = t));
                })(t),
              p(a),
              E.Ay.track({
                event: b.r.EVENTS.CLICKED_QUIZ_OPTION,
                data: { questionIndex: g, questionTitle: l[g].title, label: t },
              });
          },
          O = () => {
            var e;
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_LINK,
              data: {
                sectionHeader: 'Email Quiz',
                contentfulSection: 'EmailQuiz',
                ctaText:
                  (null == i || null === (e = i.cta) || void 0 === e
                    ? void 0
                    : e.label) || 'No label provided',
              },
            });
          },
          Q = {
            onClick: (e) => {
              var t;
              O(),
                s({
                  event: e,
                  ctaUrl:
                    (null == i || null === (t = i.cta) || void 0 === t
                      ? void 0
                      : t.url) || '',
                });
            },
            id: 'email-quiz-cta',
            ...(0, B.ax)(
              null == i || null === (t = i.cta) || void 0 === t ? void 0 : t.url
            ),
          };
        return u.createElement(
          r.A,
          {
            size: ['sm', 'sm', 'lg', 'xl'],
            'data-element': 'SectionContainer',
            'data-component': 'Quiz',
            'data-source-file': 'EmailQuiz.tsx',
          },
          u.createElement(
            a.az,
            {
              backgroundColor: 'tints.lightCream',
              borderRadius: '3xl',
              justifyContent: 'space-between',
              overflow: 'hidden',
              padding: '4',
              width: '100%',
              height: 'auto',
              display: ['block', null, 'flex'],
              'data-element': 'Box',
              'data-source-file': 'EmailQuiz.tsx',
            },
            u.createElement(
              a.az,
              {
                alignContent: x
                  ? n.cta
                    ? 'space-between'
                    : 'flex-end'
                  : 'space-between',
                backgroundColor: '#E6ADFF60',
                borderRadius: 'xl',
                display: ['block', null, 'flex'],
                flexWrap: 'wrap',
                marginBottom: ['4', null, 0],
                minHeight: ['auto', null, '490px'],
                padding: '8',
                width: ['100%', null, i ? 'calc(70% - 8px)' : '100%'],
                'data-element': 'Box',
                'data-source-file': 'EmailQuiz.tsx',
              },
              x
                ? n.cta
                  ? u.createElement(
                      a.az,
                      null,
                      u.createElement(
                        a.N_,
                        {
                          as: v.Link,
                          size: 'lg',
                          color: 'eggplant.light',
                          to: n.cta.url,
                        },
                        n.cta.label
                      )
                    )
                  : null
                : u.createElement(P, { steps: F, activeStepIndex: g }),
              u.createElement(
                a.az,
                {
                  width: '100%',
                  marginTop: ['16', null, 0],
                  'data-element': 'Box',
                  'data-source-file': 'EmailQuiz.tsx',
                },
                l.map((e, t) =>
                  u.createElement(
                    a.az,
                    {
                      key: `quiz-question-${t}`,
                      width: '100%',
                      flexWrap: 'wrap',
                      display: t !== g || x ? 'none' : 'flex',
                    },
                    u.createElement(
                      a.az,
                      { width: '400px', marginBottom: '8' },
                      u.createElement(
                        a.DZ,
                        {
                          size: 'xl',
                          color: 'eggplant.base',
                          opacity: '0.6',
                          maxWidth: '100%',
                          display: 'block',
                        },
                        e.eyebrow
                      ),
                      u.createElement(
                        a.DZ,
                        {
                          size: 'xl',
                          color: 'tints.black',
                          maxWidth: '100%',
                          display: 'block',
                        },
                        e.title
                      )
                    ),
                    u.createElement(
                      a.so,
                      { width: '100%', marginBottom: '5', flexWrap: 'wrap' },
                      e.options.map((l, n) => {
                        const i = m[g].answer.includes(l.title);
                        return u.createElement(
                          a.$n,
                          {
                            border: '4px solid',
                            borderColor: i ? 'eggplant.lighter' : 'transparent',
                            backgroundColor: 'eggplant.wash',
                            colorScheme: 'whiteCS',
                            display: 'flex',
                            key: `quiz-option-${t}-${n}`,
                            'data-testid': i
                              ? 'quiz-question-option-selected'
                              : 'quiz-question-option',
                            marginBottom: '3',
                            marginRight: ['10px', null, '4'],
                            size: 'md',
                            variant: 'primary',
                            padding: '8px 12px !important',
                            _last: { marginRight: 0 },
                            _hover: { cursor: ['default', null, 'pointer'] },
                            onClick: () => L(e.quizQuestionType, l.title),
                            position: 'relative',
                          },
                          l.image &&
                            u.createElement(
                              a.az,
                              { position: 'absolute', top: '0', left: '0' },
                              u.createElement(a._V, {
                                as: d.G,
                                image: l.image.gatsbyImageData,
                                alt: l.title,
                                objectFit: 'fill',
                                width: ['40px', null, '45px'],
                                height: ['40px', null, '45px'],
                                display: 'block',
                              })
                            ),
                          u.createElement(
                            a.DZ,
                            {
                              size: 'sm',
                              as: 'span',
                              paddingLeft: l.image ? '32px' : '0',
                            },
                            l.title
                          )
                        );
                      })
                    ),
                    g > 0 &&
                      u.createElement(
                        a.$n,
                        {
                          marginRight: ['10px', null, '4'],
                          onClick: () => {
                            g > 0 &&
                              (h((e) => e - 1),
                              E.Ay.track({
                                event: b.r.EVENTS.CLICKED_QUIZ_BACK,
                                data: {
                                  questionIndex: g,
                                  questionTitle: l[g].title,
                                },
                              }));
                          },
                          isDisabled: 0 === g,
                          _hover: { cursor: ['default', null, 'pointer'] },
                          key: `quiz-back-${t}`,
                          'data-testid': 'quiz-back-button',
                          variant: 'secondary',
                          colorScheme: 'greenCS',
                        },
                        'Back'
                      ),
                    u.createElement(
                      a.$n,
                      {
                        isDisabled: 0 === m[t].answer.length,
                        onClick: () => {
                          g <= l.length - 2
                            ? (h((e) => e + 1),
                              E.Ay.track({
                                event: b.r.EVENTS.CLICKED_QUIZ_PROCEED,
                                data: {
                                  questionIndex: g,
                                  questionTitle: l[g].title,
                                },
                              }))
                            : f(!0);
                        },
                        _hover: { cursor: ['default', null, 'pointer'] },
                        'data-testid': 'quiz-proceed-button',
                        key: `quiz-proceed-${t}`,
                      },
                      'Proceed'
                    )
                  )
                ),
                u.createElement(
                  a.az,
                  {
                    key: 'quiz-email-capture',
                    display: x ? 'block' : 'none',
                    width: '100%',
                    'data-element': 'Box',
                    'data-source-file': 'EmailQuiz.tsx',
                  },
                  u.createElement(
                    a.az,
                    {
                      width: '100%',
                      marginBottom: '8',
                      'data-element': 'Box',
                      'data-source-file': 'EmailQuiz.tsx',
                    },
                    u.createElement(
                      a.DZ,
                      {
                        size: 'xl',
                        color: 'tints.black',
                        display: 'block',
                        marginBottom: 0,
                        width: '100%',
                        as: 'span',
                        maxWidth: '500px',
                        'data-element': 'Heading',
                        'data-source-file': 'EmailQuiz.tsx',
                      },
                      n.title
                    )
                  ),
                  u.createElement(
                    a.az,
                    {
                      'data-element': 'Box',
                      'data-source-file': 'EmailQuiz.tsx',
                    },
                    u.createElement(
                      'form',
                      {
                        onSubmit: async function (e, t) {
                          if (
                            (void 0 === t && (t = {}),
                            e.preventDefault(),
                            z(''),
                            N(''),
                            C(!0),
                            !S)
                          )
                            return z('Email is required.'), void C(!1);
                          try {
                            (0, M.M)({
                              event_type: 'newsletter-subscription',
                              resource: {
                                user_id: t.id,
                                email: S,
                                data_fields: {
                                  quiz: m,
                                  newsletter: 'weight-care-plus',
                                },
                              },
                            }),
                              N('Thank you, we will get in contact soon.'),
                              E.Ay.track({
                                event: b.r.EVENTS.SUBMITTED_QUIZ,
                                data: {
                                  label: 'Submit',
                                  quizProgram: 'weight-care-plus',
                                },
                              });
                          } catch (l) {
                            z('Email submission failed, please try again.');
                          } finally {
                            C(!1);
                          }
                        },
                        'data-testid': 'email-capture-form',
                      },
                      u.createElement(
                        a.MJ,
                        {
                          isInvalid: !!I,
                          'data-element': 'FormControl',
                          'data-source-file': 'EmailQuiz.tsx',
                        },
                        I && u.createElement(a.Wt, null, I),
                        u.createElement(
                          a.so,
                          {
                            gap: 3,
                            alignItems: 'center',
                            'data-element': 'Flex',
                            'data-source-file': 'EmailQuiz.tsx',
                          },
                          D
                            ? u.createElement(
                                u.Fragment,
                                null,
                                u.createElement(
                                  a.so,
                                  {
                                    flexWrap: 'nowrap',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                  },
                                  u.createElement(
                                    a.so,
                                    {
                                      flexWrap: 'nowrap',
                                      alignItems: 'center',
                                    },
                                    u.createElement(A.A, {
                                      icon: 'CheckCircle',
                                      color: 'eggplant.light',
                                      weight: 'fill',
                                      marginRight: '2',
                                    }),
                                    u.createElement(
                                      a.EY,
                                      { color: 'eggplant.light', size: 'xl' },
                                      D
                                    )
                                  ),
                                  u.createElement(
                                    a.$n,
                                    {
                                      variant: 'primary',
                                      type: 'submit',
                                      size: 'md',
                                      colorScheme: 'whiteCS',
                                      onClick: () => (
                                        p(c),
                                        h(0),
                                        f(!1),
                                        k(''),
                                        z(''),
                                        N(''),
                                        void E.Ay.track({
                                          event: b.r.EVENTS.CLICKED_QUIZ_RESET,
                                          data: {
                                            label: 'Reset',
                                            quizProgram: 'weight-care-plus',
                                          },
                                        })
                                      ),
                                    },
                                    'Got it'
                                  )
                                )
                              )
                            : u.createElement(
                                u.Fragment,
                                null,
                                u.createElement(a.pd, {
                                  placeholder: 'Type your email',
                                  name: 'subscribeEmail',
                                  type: 'email',
                                  value: S,
                                  onChange: (e) => k(e.target.value),
                                  isDisabled: y,
                                }),
                                u.createElement(
                                  a.$n,
                                  {
                                    variant: 'primary',
                                    type: 'submit',
                                    size: 'md',
                                    isLoading: y,
                                    padding: '12px 14px !important',
                                    'data-testid': 'quiz-email-submit-button',
                                  },
                                  'Submit'
                                )
                              )
                        )
                      )
                    )
                  )
                )
              )
            ),
            i
              ? u.createElement(
                  a.so,
                  {
                    borderRadius: 'xl',
                    height: ['345px', null, '490px'],
                    overflow: 'hidden',
                    position: 'relative',
                    width: ['100%', null, 'calc(30% - 8px)'],
                  },
                  u.createElement(a.az, {
                    background:
                      'linear-gradient(254deg, rgba(0, 0, 0, 0.00) 12%, rgba(0, 0, 0, 0.60) 55%)',
                    height: '100%',
                    left: '0',
                    position: 'absolute',
                    top: '0',
                    width: '100%',
                    zIndex: 1,
                  }),
                  i.backgroundImage &&
                    u.createElement(
                      a.az,
                      {
                        'data-testid': 'background-image',
                        height: '100%',
                        left: '0',
                        position: 'absolute',
                        top: '0',
                        width: '100%',
                        zIndex: 0,
                      },
                      u.createElement(d.G, {
                        style: { height: '100%', width: '100%' },
                        image: i.backgroundImage.gatsbyImageData,
                        alt: i.title,
                      })
                    ),
                  u.createElement(
                    a.so,
                    {
                      alignContent: 'space-between',
                      flexWrap: 'wrap',
                      padding: '8',
                      position: 'relative',
                      width: '100%',
                      zIndex: 2,
                    },
                    u.createElement(
                      a.EY,
                      { size: 'lg', color: 'viridian.light' },
                      i.eyebrow
                    ),
                    u.createElement(
                      a.az,
                      { width: '100%' },
                      u.createElement(
                        a.DZ,
                        { size: 'lg', color: 'tints.white' },
                        i.title
                      ),
                      u.createElement(
                        a.$n,
                        Object.assign({}, Q, {
                          marginTop: '4',
                          size: 'md',
                          variant: 'primary',
                          _hover: { cursor: ['default', null, 'pointer'] },
                        }),
                        i.cta.label
                      )
                    )
                  )
                )
              : null
          )
        );
      };
      var F = u.memo(N);
      var L = l(79600),
        O = l(54474),
        Q = l(28389),
        H = l(14279);
      var R = (e) => {
        let { htmlData: t, color: l, reduceMargin: n } = e;
        return u.createElement(a.az, {
          color: l || 'white',
          fontSize: ['md', 'lg'],
          fontWeight: '400',
          lineHeight: '150%',
          dangerouslySetInnerHTML: { __html: (0, H.aj)(t) },
          sx: {
            li: {
              listStylePosition: 'outside',
              marginBottom: n ? 2 : 3,
              marginLeft: [4],
              lineHeight: 1.43,
            },
          },
          'data-element': 'Box',
          'data-component': 'BulletList',
          'data-source-file': 'BulletList.tsx',
        });
      };
      var V = (e) => {
          var t, l, n;
          let {
            sectionHeaderIconName: i,
            sectionHeaderText: o,
            backgroundColor: s = a.w4.colors.greenCS[700],
            headline: c,
            bulletPoints: m,
            mobileBackgroundImage: p,
            mobileBackgroundImageAltText: g,
            desktopBackgroundImage: h,
            desktopBackgroundImageAltText: x,
            cta: f,
            disclaimer: v,
          } = e;
          const {
              priceText: y,
              billFrequencyText: S,
              icon: k,
              startingText: I,
              hideSeparator: z,
            } = (null == f ||
            null === (t = f.metadata) ||
            void 0 === t ||
            null === (l = t.context) ||
            void 0 === l
              ? void 0
              : l.ctaParts) || {},
            { handleMdpCtaClick: B } = (0, w.A)(),
            D =
              null != f &&
              null !== (n = f.url) &&
              void 0 !== n &&
              n.includes('http')
                ? (0, C.x)(f.url)
                : `${null == f ? void 0 : f.url}`,
            [P] = (0, a.Ub)('(max-height: 667px)');
          return u.createElement(
            r.A,
            {
              size: ['fluid', 'fluid', 'fluid', 'fluid', 'ultra'],
              clipPath: [
                'ellipse(250% 60% at 50% 40%)',
                'ellipse(120% 60% at 50% 40%)',
              ],
              marginY: '0',
              marginBottom: [10, null, 20],
              centerContent: !0,
              'data-element': 'SectionContainer',
              'data-component': 'HeroV2',
              'data-source-file': 'HeroV2.tsx',
            },
            u.createElement(
              a.az,
              {
                as: 'section',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                paddingBottom: [10, 20, 0],
                backgroundColor: s,
                'data-element': 'Box',
                'data-source-file': 'HeroV2.tsx',
              },
              u.createElement(
                a.az,
                {
                  display: 'flex',
                  flexDirection: ['column', 'column', 'row'],
                  gap: ['unset', 'unset', 10, 20],
                  maxHeight: ['unset', 'unset', '600px'],
                  alignItems: 'center',
                  'data-element': 'Box',
                  'data-source-file': 'HeroV2.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    flex: '1',
                    paddingBottom: ['unset', 'unset', 6],
                    'data-element': 'Box',
                    'data-source-file': 'HeroV2.tsx',
                  },
                  u.createElement(
                    a.az,
                    {
                      position: 'relative',
                      marginTop: P ? '-60px' : '-30px',
                      width: '100%',
                      'data-element': 'Box',
                      'data-source-file': 'HeroV2.tsx',
                    },
                    u.createElement(
                      a.az,
                      {
                        display: 'flex',
                        flex: '1',
                        paddingTop: '4',
                        paddingLeft: '4',
                        position: 'absolute',
                        paddingBottom: 15,
                        'data-element': 'Box',
                        'data-source-file': 'HeroV2.tsx',
                      },
                      i
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(A.A, {
                              icon: i || 'House',
                              color: 'white',
                              size: 'sm',
                              marginRight: 1,
                              weight: 'fill',
                            }),
                            u.createElement(
                              a.EY,
                              { marginRight: 1, color: 'white' },
                              'Â·'
                            ),
                            ' '
                          )
                        : null,
                      u.createElement(
                        a.EY,
                        {
                          color: 'white',
                          role: 'header-text',
                          fontSize: ['sm', 'sm', 'md'],
                          'data-element': 'Text',
                          'data-source-file': 'HeroV2.tsx',
                        },
                        o
                      )
                    ),
                    u.createElement(
                      a.az,
                      {
                        id: 'mobile-hero-box',
                        flex: '3',
                        clipPath: 'circle(57% at 62% 28%)',
                        display: ['flex', null, 'none'],
                        justifyContent: 'flex-end',
                        'data-element': 'Box',
                        'data-source-file': 'HeroV2.tsx',
                      },
                      p
                        ? u.createElement(d.G, {
                            image: p,
                            alt: g || '',
                            imgStyle: {
                              objectFit: 'contain',
                              clipPath: 'circle(57% at 62% 28%)',
                            },
                          })
                        : null
                    )
                  ),
                  u.createElement(
                    a.az,
                    {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      paddingTop: ['unset', 'unset', 16, 20],
                      paddingRight: [4, 4, 0, 0],
                      paddingBottom: [12, 12, 16, 20],
                      paddingLeft: [4, 4, 12, 20],
                      width: '100%',
                      'data-element': 'Box',
                      'data-source-file': 'HeroV2.tsx',
                    },
                    u.createElement(
                      a.az,
                      {
                        'data-element': 'Box',
                        'data-source-file': 'HeroV2.tsx',
                      },
                      u.createElement(
                        a.DZ,
                        {
                          as: 'h1',
                          size: ['32px', '2xl'],
                          color: 'white',
                          marginBottom: P ? 2 : 4,
                          'data-element': 'Heading',
                          'data-source-file': 'HeroV2.tsx',
                        },
                        c
                      ),
                      m
                        ? u.createElement(
                            a.az,
                            { lineHeight: 2 },
                            u.createElement(R, {
                              htmlData: m.childMarkdownRemark.html,
                              reduceMargin: P,
                            })
                          )
                        : null
                    ),
                    f && f.label
                      ? u.createElement(
                          a.az,
                          {
                            marginTop: 8,
                            width: ['100%', null, 'fit-content'],
                          },
                          u.createElement(Q.A, {
                            startingText: I || '',
                            priceText: y || '',
                            size: 'md',
                            billFrequencyText: S || '',
                            hideSeparator: z,
                            buttonText: f.label,
                            colorScheme: 'greenCS',
                            buttonIconRight: u.createElement(A.A, {
                              icon: k || 'ArrowDown',
                            }),
                            onButtonClick: (e) => {
                              B({ event: e, ctaUrl: D }),
                                E.Ay.track({
                                  event: b.r.EVENTS.CLICKED_BUTTON,
                                  data: {
                                    sectionHeader: c || o,
                                    contentfulSection: 'HeroV2',
                                    ctaText: null == f ? void 0 : f.label,
                                  },
                                });
                            },
                            linkTo: D,
                            id: 'hero-join-cta',
                          })
                        )
                      : null,
                    v &&
                      u.createElement(
                        a.EY,
                        {
                          color: 'white',
                          fontSize: 'sm',
                          opacity: 0.6,
                          marginTop: 8,
                        },
                        v
                      )
                  )
                ),
                u.createElement(
                  a.az,
                  {
                    display: ['none', 'none', 'flex'],
                    flex: '1',
                    justifyContent: 'flex-end',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    overflow: 'hidden',
                    'data-element': 'Box',
                    'data-source-file': 'HeroV2.tsx',
                  },
                  h
                    ? u.createElement(d.G, {
                        image: h,
                        alt: x || '',
                        imgStyle: { height: '100%' },
                        style: {
                          height: '100%',
                          clipPath: 'circle(80% at 80% 50%)',
                          minHeight: '600px',
                        },
                      })
                    : null
                )
              )
            )
          );
        },
        Y = l(53499),
        j = l(41788),
        Z = l(22270);
      var G = function (e) {
        return null === e;
      };
      var W = (e) => {
        const t = (0, u.useRef)(null),
          { mobileBackgroundImage: l, desktopBackgroundImage: n } = e,
          [i] = (0, a.Ub)(`(max-width: ${a.w4.breakpoints.tablet})`);
        if (G(l) || G(n)) return null;
        const o = () => {
            t.current &&
              (E.Ay.track({
                event: b.r.EVENTS.CLICKED_BUTTON,
                data: { label: 'Close justuno loader' },
              }),
              (t.current.style.display = 'none'));
          },
          r = i ? l : n;
        return u.createElement(
          a.aF,
          {
            isCentered: !0,
            closeOnEsc: !1,
            closeOnOverlayClick: !1,
            isOpen: !0,
            onClose: o,
            'data-element': 'Modal',
            'data-component': 'JustunoLoader',
            'data-source-file': 'JustunoLoader.tsx',
          },
          u.createElement(
            a.az,
            {
              ref: t,
              alignItems: 'center',
              background: e.backgroundColor || 'moonlight.base',
              'data-testid': 'justuno-loader',
              display: 'none',
              height: '100vh',
              id: 'justuno-loader-id',
              justifyContent: 'center',
              left: 0,
              position: 'fixed',
              top: 0,
              width: '100vw',
              zIndex: 3,
              'data-element': 'Box',
              'data-source-file': 'JustunoLoader.tsx',
            },
            u.createElement(a.s_, {
              zIndex: 1,
              onClick: o,
              'data-element': 'ModalCloseButton',
              'data-source-file': 'JustunoLoader.tsx',
            }),
            u.createElement(
              a.az,
              {
                'data-testid': 'background-image',
                height: '100%',
                left: '0',
                position: 'absolute',
                top: '0',
                width: '100%',
                zIndex: 0,
                'data-element': 'Box',
                'data-source-file': 'JustunoLoader.tsx',
              },
              u.createElement(d.G, {
                style: { height: '100%', width: '100%' },
                image: r.gatsbyImageData,
                objectFit: i ? 'contain' : 'cover',
                objectPosition: i ? 'bottom' : 'center',
                alt: '',
                'data-element': 'GatsbyImage',
                'data-source-file': 'JustunoLoader.tsx',
              })
            ),
            u.createElement(a.y$, {
              color: 'tints.white',
              'data-element': 'Spinner',
              'data-source-file': 'JustunoLoader.tsx',
            })
          )
        );
      };
      var q = l(53578),
        U = l(11941),
        K = l(21930);
      var J = (e) => {
          const {
              customUrl: t,
              isMDPModalAvailable: l,
              open: a,
              openHandler: n,
              setIsMDPModalAvailable: i,
            } = (0, U.PO)(),
            {
              body: o,
              body2: r,
              title: s,
              callToAction: c,
              onModalStateUpdate: d,
            } = e;
          return (
            l || i(!0),
            (0, u.useEffect)(() => {
              d && d(a);
            }, [a, d]),
            u.createElement(K.A, {
              open: a,
              openHandler: n,
              body: o,
              body2: r,
              callToAction: { ...c, url: (0, C.x)(t || e.callToAction.url) },
              title: s,
              'data-element': 'GeneralDisclaimer',
              'data-component': 'MDPModalWrapper',
              'data-source-file': 'MDPModalWrapper.tsx',
            })
          );
        },
        _ = l(66401);
      const X = (e) => {
        var t, l;
        if (!e) return null;
        const { metadata: a, options: n, sections: i } = e,
          o = null == e ? void 0 : e.displayName;
        let r = !0;
        const s = (function (e) {
            return e
              ? e.filter((e) => 'ContentfulSection001' === e.__typename)
              : [];
          })(i),
          c = (function (e) {
            return e
              ? null == e
                ? void 0
                : e.find((e) => 'ContentfulCallToAction001' === e.__typename)
              : void 0;
          })(i);
        let d;
        if (
          (null != c &&
            c.label &&
            null != c &&
            c.url &&
            (d = {
              text: null == c ? void 0 : c.label,
              url: null == c ? void 0 : c.url,
            }),
          n && (r = 0 === n.length),
          (0, _.A)(s) ||
            null === (t = s[0].body) ||
            void 0 === t ||
            !t.raw ||
            !o ||
            !d ||
            !r)
        )
          return null;
        const u = (null == a ? void 0 : a.title) || o;
        return {
          body: s[0].body,
          body2:
            (null === (l = s[1]) || void 0 === l ? void 0 : l.body) || void 0,
          callToAction: d,
          title: u,
          metadata: a,
        };
      };
      var $ = (e) => {
        if (!e) return null;
        const { eyebrow: t, theme: l, title: n, images: i } = e;
        return u.createElement(
          r.A,
          {
            size: ['sm', 'sm', 'md', 'xl'],
            'data-element': 'SectionContainer',
            'data-component': 'MedicalConcierge',
            'data-source-file': 'MedicalConcierge.tsx',
          },
          u.createElement(
            a.so,
            {
              background: null == l ? void 0 : l.backgroundColor,
              width: '100%',
              paddingX: ['4', '10'],
              paddingY: ['4', '4'],
              borderRadius: 'xl',
              gap: 5,
              display: ['block', 'flex'],
              'data-element': 'Flex',
              'data-source-file': 'MedicalConcierge.tsx',
            },
            i
              ? i.map((e, t) => {
                  var l, a;
                  return (
                    (null === (l = e.desktopImage) || void 0 === l
                      ? void 0
                      : l.gatsbyImageData) &&
                    u.createElement(d.G, {
                      key: t,
                      image:
                        null === (a = e.desktopImage) || void 0 === a
                          ? void 0
                          : a.gatsbyImageData,
                      alt: e.desktopImageAltText || '',
                      style: { width: '128px', height: 'auto' },
                    })
                  );
                })
              : null,
            u.createElement(
              a.so,
              {
                flexFlow: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                'data-element': 'Flex',
                'data-source-file': 'MedicalConcierge.tsx',
              },
              t
                ? u.createElement(
                    a.EY,
                    {
                      size: 'lg',
                      color: null == l ? void 0 : l.textColor,
                      marginTop: ['4', null],
                    },
                    t
                  )
                : null,
              n ? u.createElement(a.DZ, { as: 'h3' }, n) : null
            )
          )
        );
      };
      const ee = (e) => 'object' == typeof e && null != e && 1 === e.nodeType,
        te = (e, t) =>
          (!t || 'hidden' !== e) && 'visible' !== e && 'clip' !== e,
        le = (e, t) => {
          if (
            e.clientHeight < e.scrollHeight ||
            e.clientWidth < e.scrollWidth
          ) {
            const l = getComputedStyle(e, null);
            return (
              te(l.overflowY, t) ||
              te(l.overflowX, t) ||
              ((e) => {
                const t = ((e) => {
                  if (!e.ownerDocument || !e.ownerDocument.defaultView)
                    return null;
                  try {
                    return e.ownerDocument.defaultView.frameElement;
                  } catch (e) {
                    return null;
                  }
                })(e);
                return (
                  !!t &&
                  (t.clientHeight < e.scrollHeight ||
                    t.clientWidth < e.scrollWidth)
                );
              })(e)
            );
          }
          return !1;
        },
        ae = (e, t, l, a, n, i, o, r) =>
          (i < e && o > t) || (i > e && o < t)
            ? 0
            : (i <= e && r <= l) || (o >= t && r >= l)
            ? i - e - a
            : (o > t && r < l) || (i < e && r > l)
            ? o - t + n
            : 0,
        ne = (e) => {
          const t = e.parentElement;
          return null == t ? e.getRootNode().host || null : t;
        },
        ie = (e, t) => {
          var l, a, n, i;
          if ('undefined' == typeof document) return [];
          const {
              scrollMode: o,
              block: r,
              inline: s,
              boundary: c,
              skipOverflowHiddenElements: d,
            } = t,
            u = 'function' == typeof c ? c : (e) => e !== c;
          if (!ee(e)) throw new TypeError('Invalid target');
          const m = document.scrollingElement || document.documentElement,
            p = [];
          let g = e;
          for (; ee(g) && u(g); ) {
            if (((g = ne(g)), g === m)) {
              p.push(g);
              break;
            }
            (null != g &&
              g === document.body &&
              le(g) &&
              !le(document.documentElement)) ||
              (null != g && le(g, d) && p.push(g));
          }
          const h =
              null !=
              (a = null == (l = window.visualViewport) ? void 0 : l.width)
                ? a
                : innerWidth,
            x =
              null !=
              (i = null == (n = window.visualViewport) ? void 0 : n.height)
                ? i
                : innerHeight,
            { scrollX: A, scrollY: f } = window,
            {
              height: v,
              width: E,
              top: b,
              right: y,
              bottom: C,
              left: w,
            } = e.getBoundingClientRect(),
            {
              top: S,
              right: k,
              bottom: I,
              left: z,
            } = ((e) => {
              const t = window.getComputedStyle(e);
              return {
                top: parseFloat(t.scrollMarginTop) || 0,
                right: parseFloat(t.scrollMarginRight) || 0,
                bottom: parseFloat(t.scrollMarginBottom) || 0,
                left: parseFloat(t.scrollMarginLeft) || 0,
              };
            })(e);
          let B =
              'start' === r || 'nearest' === r
                ? b - S
                : 'end' === r
                ? C + I
                : b + v / 2 - S + I,
            D =
              'center' === s ? w + E / 2 - z + k : 'end' === s ? y + k : w - z;
          const P = [];
          for (let T = 0; T < p.length; T++) {
            const e = p[T],
              {
                height: t,
                width: l,
                top: a,
                right: n,
                bottom: i,
                left: c,
              } = e.getBoundingClientRect();
            if (
              'if-needed' === o &&
              b >= 0 &&
              w >= 0 &&
              C <= x &&
              y <= h &&
              b >= a &&
              C <= i &&
              w >= c &&
              y <= n
            )
              return P;
            const d = getComputedStyle(e),
              u = parseInt(d.borderLeftWidth, 10),
              g = parseInt(d.borderTopWidth, 10),
              S = parseInt(d.borderRightWidth, 10),
              k = parseInt(d.borderBottomWidth, 10);
            let I = 0,
              z = 0;
            const M =
                'offsetWidth' in e ? e.offsetWidth - e.clientWidth - u - S : 0,
              N =
                'offsetHeight' in e
                  ? e.offsetHeight - e.clientHeight - g - k
                  : 0,
              F =
                'offsetWidth' in e
                  ? 0 === e.offsetWidth
                    ? 0
                    : l / e.offsetWidth
                  : 0,
              L =
                'offsetHeight' in e
                  ? 0 === e.offsetHeight
                    ? 0
                    : t / e.offsetHeight
                  : 0;
            if (m === e)
              (I =
                'start' === r
                  ? B
                  : 'end' === r
                  ? B - x
                  : 'nearest' === r
                  ? ae(f, f + x, x, g, k, f + B, f + B + v, v)
                  : B - x / 2),
                (z =
                  'start' === s
                    ? D
                    : 'center' === s
                    ? D - h / 2
                    : 'end' === s
                    ? D - h
                    : ae(A, A + h, h, u, S, A + D, A + D + E, E)),
                (I = Math.max(0, I + f)),
                (z = Math.max(0, z + A));
            else {
              (I =
                'start' === r
                  ? B - a - g
                  : 'end' === r
                  ? B - i + k + N
                  : 'nearest' === r
                  ? ae(a, i, t, g, k + N, B, B + v, v)
                  : B - (a + t / 2) + N / 2),
                (z =
                  'start' === s
                    ? D - c - u
                    : 'center' === s
                    ? D - (c + l / 2) + M / 2
                    : 'end' === s
                    ? D - n + S + M
                    : ae(c, n, l, u, S + M, D, D + E, E));
              const { scrollLeft: o, scrollTop: d } = e;
              (I =
                0 === L
                  ? 0
                  : Math.max(
                      0,
                      Math.min(d + I / L, e.scrollHeight - t / L + N)
                    )),
                (z =
                  0 === F
                    ? 0
                    : Math.max(
                        0,
                        Math.min(o + z / F, e.scrollWidth - l / F + M)
                      )),
                (B += d - I),
                (D += o - z);
            }
            P.push({ el: e, top: I, left: z });
          }
          return P;
        };
      function oe(e, t) {
        if (
          !e.isConnected ||
          !((e) => {
            let t = e;
            for (; t && t.parentNode; ) {
              if (t.parentNode === document) return !0;
              t =
                t.parentNode instanceof ShadowRoot
                  ? t.parentNode.host
                  : t.parentNode;
            }
            return !1;
          })(e)
        )
          return;
        const l = ((e) => {
          const t = window.getComputedStyle(e);
          return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0,
          };
        })(e);
        if (((e) => 'object' == typeof e && 'function' == typeof e.behavior)(t))
          return t.behavior(ie(e, t));
        const a = 'boolean' == typeof t || null == t ? void 0 : t.behavior;
        for (const { el: n, top: i, left: o } of ie(
          e,
          ((e) =>
            !1 === e
              ? { block: 'end', inline: 'nearest' }
              : ((e) => e === Object(e) && 0 !== Object.keys(e).length)(e)
              ? e
              : { block: 'start', inline: 'nearest' })(t)
        )) {
          const e = i - l.top + l.bottom,
            t = o - l.left + l.right;
          n.scroll({ top: e, left: t, behavior: a });
        }
      }
      const re = function (e) {
          var t;
          void 0 === e && (e = '');
          let l = e;
          return (
            '#' === (null === (t = e) || void 0 === t ? void 0 : t.charAt(0)) &&
              (l = e.slice(1, e.length)),
            l
          );
        },
        se = (e) => {
          let { id: t, areAppleDevicesPresent: l, topOffset: a = 0 } = e;
          const n = re(t);
          if (!n) return;
          let i = document.getElementById(n || '');
          if (i)
            if (l) {
              const e = i.getBoundingClientRect().top + window.scrollY - a;
              window.scrollTo({ top: e, behavior: 'smooth' });
            } else
              oe(i, {
                scrollMode: 'if-needed',
                behavior: (e) =>
                  e.forEach((e) => {
                    let { el: t, top: l } = e;
                    return (t.scrollTop = l - a);
                  }),
                block: 'start',
              });
        };
      var ce = l(46488);
      const de = { textDecoration: 'none' };
      var ue = (e) => {
          let {
            anchor: t,
            backgroundColor: l,
            buttonLabel: n,
            children: i,
            desktopImage: o,
            handleOnClick: r,
            iconName: s,
            mobileImage: c,
          } = e;
          const { areAppleDevicesPresent: m } = (0, ce.eG)(),
            p = {
              '&:hover': {
                button: {
                  background:
                    (0, y.Bd)() && 'ontouchstart' in window
                      ? 'tints.white'
                      : 'viridian.wash',
                },
              },
            },
            g = o || c;
          return u.createElement(
            a.so,
            {
              _hover: de,
              as: a.N_,
              backgroundColor: l || 'tints.lightCream',
              borderRadius: 'xl',
              flexDirection: g ? 'column' : 'row',
              href: t,
              minHeight: g ? ['112px', null, '128px'] : '100%',
              minWidth: ['135px', null, 'unset'],
              onClick: (e) => {
                '#' === (null == t ? void 0 : t.charAt(0)) &&
                  (e.preventDefault(),
                  se({ id: t, areAppleDevicesPresent: m, topOffset: 130 })),
                  E.Ay.track({
                    event: b.r.EVENTS.CLICKED_LINK,
                    data: {
                      label: n,
                      sectionId: t,
                      component: 'NavigationTile',
                    },
                  }),
                  r && r(e);
              },
              overflow: 'hidden',
              padding: 4,
              position: 'relative',
              sx: p,
              'data-element': 'Flex',
              'data-component': 'NavigationTile',
              'data-source-file': 'NavigationTile.tsx',
            },
            u.createElement(
              a.so,
              {
                flex: 1,
                alignItems: 'center',
                'data-element': 'Flex',
                'data-source-file': 'NavigationTile.tsx',
              },
              i
            ),
            u.createElement(
              a.so,
              {
                alignItems: 'flex-end',
                flex: g ? 3 : 1,
                justifyContent: g ? 'flex-start' : 'flex-end',
                'data-element': 'Flex',
                'data-source-file': 'NavigationTile.tsx',
              },
              t &&
                u.createElement(a.K0, {
                  _hover: de,
                  icon: u.createElement(A.A, {
                    icon: s || 'ArrowDown',
                    fontSize: a.w4.fontSizes.lg,
                  }),
                  'aria-label': n || `button ${s} to ${t}`,
                  color: a.w4.colors.tints.darkGrey,
                  colorScheme: 'whiteCS',
                  maxWidth: '32px',
                  padding: '2',
                  size: 'sm',
                  variant: 'primary',
                  'data-testid': 'navigation-tile-cta',
                })
            ),
            c &&
              u.createElement(
                a.az,
                {
                  bottom: '0',
                  position: 'absolute',
                  right: '0',
                  display: ['block', 'block', 'none'],
                },
                u.createElement(a._V, {
                  as: d.G,
                  alt: c.description,
                  image: c.gatsbyImageData,
                  width: '80px',
                })
              ),
            o &&
              u.createElement(
                a.az,
                {
                  bottom: '0',
                  position: 'absolute',
                  right: '0',
                  display: ['none', null, 'block'],
                },
                u.createElement(a._V, {
                  alt: o.description,
                  as: d.G,
                  image: o.gatsbyImageData,
                  width: '120px',
                })
              )
          );
        },
        me = l(69592);
      const pe = (e) => Math.max(0, e),
        ge = (e, t, l) => e >= t && e <= l,
        he = function (e, t, l) {
          void 0 === t && (t = 0), void 0 === l && (l = ge);
          const { 0: a, 1: n } = (0, u.useState)('');
          return (
            (0, u.useLayoutEffect)(() => {
              const a = () => {
                const a = window.scrollY,
                  i = e
                    .map((e) => {
                      const l = document.getElementById(re(e));
                      if (!l) return { id: e, top: -1, bottom: -1 };
                      const n = l.getBoundingClientRect();
                      return {
                        id: e,
                        top: pe(n.top + a - t),
                        bottom: pe(n.bottom + a - t),
                      };
                    })
                    .find((e) => {
                      let { top: t, bottom: n } = e;
                      return l(a, t, n);
                    });
                n((null == i ? void 0 : i.id) || '');
              };
              return 0 === e.length
                ? () => {}
                : (a(),
                  window.addEventListener('resize', a),
                  window.addEventListener('scroll', a),
                  () => {
                    window.removeEventListener('resize', a),
                      window.removeEventListener('scroll', a);
                  });
            }, [e, t, l]),
            a
          );
        },
        xe = {
          activeAnchor: void 0,
          anchorsHasMap: {},
          isNavVisible: !1,
          setAnchorsHasMap: () => {},
        },
        Ae = (0, u.createContext)(xe),
        fe = () => {
          const e = (0, u.useContext)(Ae);
          if (void 0 === e)
            throw new Error(
              'Expected a StickyContext in the React tree to set the context value'
            );
          return e;
        },
        ve = (e, t, l) => e >= l;
      var Ee = function (e) {
        const { 0: t, 1: l } = (0, u.useState)({}),
          { mainSectionId: a, anchorsSectionsIds: n = [] } = e,
          i = [n[n.length - 1]],
          o = Boolean(he(a ? [a] : [], Ie + 1, ve)),
          r = he(n, Ie + 1),
          s = Boolean(he(i, Ie + 1, ve));
        return u.createElement(
          Ae.Provider,
          {
            value: {
              setAnchorsHasMap: l,
              activeAnchor: r,
              anchorsHasMap: t,
              isNavVisible: o && !s,
            },
            'data-element': 'Provider',
            'data-component': 'StickyContextProvider',
            'data-source-file': 'StickyProvider.tsx',
          },
          e.children
        );
      };
      const be = { backgroundColor: 'tints.darkCream' };
      var ye = (e) => {
        const { areAppleDevicesPresent: t } = (0, ce.eG)(),
          { isNavVisible: l, activeAnchor: n, anchorsHasMap: i } = fe(),
          o = (0, u.useRef)(null);
        if (!e) return null;
        const r = e.tiles.filter((e) => !e.mobileOnly);
        if (!(0, me.A)(n)) {
          var s;
          ((e) => {
            let {
              id: t = '',
              areAppleDevicesPresent: l,
              leftOffset: a = 0,
            } = e;
            const n = re(t);
            if (!n) return;
            let i = document.getElementById(n || '');
            if (!i) return;
            const o = i.parentElement;
            if (o)
              if (l) {
                const e =
                  i.getBoundingClientRect().left -
                  o.getBoundingClientRect().left +
                  o.scrollLeft -
                  a;
                o.scrollTo({ left: e, behavior: 'smooth' });
              } else
                oe(i, {
                  boundary: o,
                  block: 'end',
                  inline: 'start',
                  behavior: (e) =>
                    e.forEach((e) => {
                      let { el: t, left: l } = e;
                      return (t.scrollLeft = l - a);
                    }),
                });
          })({
            id: null === (s = i[re(n)]) || void 0 === s ? void 0 : s.toString(),
            areAppleDevicesPresent: t,
            leftOffset: 48,
          });
        }
        const c = function (e, l) {
          void 0 === l && (l = ''),
            e.preventDefault(),
            se({ id: l, areAppleDevicesPresent: t, topOffset: 130 });
        };
        return u.createElement(
          a.so,
          {
            'data-testid': 'sticky-anchors',
            id: 'sticky-anchors',
            ref: o,
            alignSelf: 'flex-start',
            backgroundColor: 'tints.white',
            borderBottom: `1px solid ${a.w4.colors.tints.cream}`,
            gap: 2,
            opacity: l ? 1 : 0,
            overflow: 'auto',
            padding: `${a.w4.space[3]} ${a.w4.space[4]}`,
            paddingLeft: [4, null, 12],
            position: 'fixed',
            top: [`${Se}px`, null, `${ke}px`],
            transition: 'opacity 0.3s ease-in-out',
            width: '100vw',
            zIndex: '2',
            'data-element': 'Flex',
            'data-component': 'StickyAnchors',
            'data-source-file': 'StickyAnchors.tsx',
          },
          r.map((e, t) =>
            u.createElement(Ce, {
              index: t,
              activeAnchor: n,
              key: `sticky-anchor-${t}`,
              onClick: c,
              tile: e,
            })
          )
        );
      };
      function Ce(e) {
        let { activeAnchor: t, onClick: l, tile: n } = e;
        const { setAnchorsHasMap: i } = fe(),
          o = re(t || ''),
          r = re(n.anchor || ''),
          s = re(n.id || ''),
          c = o === r,
          d = s || `anchor-${r}`;
        i((e) => {
          if (r in e) return e;
          return { ...e, [r]: d };
        });
        const m = c ? 'tints.darkCream' : 'unset';
        return u.createElement(
          a.$n,
          {
            _active: be,
            _hover: { backgroundColor: m, textDecoration: 'none' },
            as: a.N_,
            color: 'tints.darkGrey',
            colorScheme: 'whiteCS',
            'data-testid': 'sticky-anchor-cta',
            fontSize: a.w4.fontSizes.md,
            href: n.anchor,
            id: d,
            isActive: c,
            onClick: (e) => l(e, n.anchor),
            paddingX: [3, null, 4],
            paddingY: '2',
            transition: 'background-color 0.3s ease-in-out',
            width: 'auto',
            height: ['28px', null, '32px'],
            'data-element': 'Button',
            'data-component': 'Anchor',
            'data-source-file': 'StickyAnchors.tsx',
          },
          n.title
        );
      }
      const we = ['6', null, '10'],
        Se = 68,
        ke = 58,
        Ie = Se + 65;
      var ze = (e) => {
        var t;
        const l = null !== (t = (0, T.D0)().stickyNav) && void 0 !== t && t,
          [n] = (0, a.Ub)(`(max-width: ${a.w4.breakpoints.tablet})`);
        if (!e) return null;
        const { tiles: i, id: o } = e,
          s = !n;
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            r.A,
            {
              id: o,
              size: ['sm', null, 'xl'],
              paddingTop: we,
              paddingBottom: we,
            },
            u.createElement(
              a.xA,
              {
                display: 'grid',
                gridTemplateColumns: [
                  'repeat(2, 1fr)',
                  'repeat(auto-fit, minmax(260px, 1fr))',
                ],
                spacing: '2',
              },
              i.map(
                (e, t) =>
                  ((s && !e.mobileOnly) || n) &&
                  u.createElement(
                    a.Ei,
                    { key: `tile-${t}` },
                    u.createElement(
                      ue,
                      e,
                      u.createElement(
                        a.EY,
                        {
                          as: 'h3',
                          fontSize: 'md',
                          fontWeight: 'medium',
                          color: a.w4.colors.tints.black,
                        },
                        e.title
                      )
                    )
                  )
              )
            )
          ),
          l && u.createElement(ye, e)
        );
      };
      const Be = (e) => {
        var t;
        if (!e) return null;
        const l = ((null == e ? void 0 : e.subsections) || []).map((e) => {
          var t, l, a, n, i, o;
          const { images: r, metadata: s } = e,
            c = (null == s ? void 0 : s.title) || '',
            { desktopImage: d, mobileImage: u } = (0, B.nl)(r),
            m =
              (null == s || null === (t = s.context) || void 0 === t
                ? void 0
                : t.mobileOnly) || !1,
            p =
              (null == s || null === (l = s.ctas) || void 0 === l
                ? void 0
                : l[0]) || {};
          return {
            id:
              (null == e || null === (a = e.metadata) || void 0 === a
                ? void 0
                : a.metadata_id) || '',
            anchor: p.url || '',
            buttonLabel: p.label || '',
            desktopImage: d,
            iconName:
              (null === (n = p.metadata) ||
              void 0 === n ||
              null === (i = n.context) ||
              void 0 === i ||
              null === (o = i.ctaParts) ||
              void 0 === o
                ? void 0
                : o.icon) || '',
            mobileImage: u,
            mobileOnly: m,
            title: c,
          };
        });
        return {
          tiles: l,
          id:
            null == e || null === (t = e.metadata) || void 0 === t
              ? void 0
              : t.metadata_id,
        };
      };
      var De = l(52599);
      function Pe(e) {
        var t;
        let {
          modalSize: l = 'full',
          initialScreenContent: n,
          steps: i,
          finalScreenContent: o,
          ineligibleScreenContent: r,
          ...s
        } = e;
        const {
            isModalOpen: c,
            toggleModal: d,
            prevStep: m,
            setNumberOfSteps: p,
            currentStep: g,
            isQuizStarted: h,
            isQuizEnded: x,
            isAnswerIneligible: f,
            areControlsVisible: v,
          } = (0, De.Sr)(),
          { isOpen: E, onClose: b } = (0, a.j1)({ ...s, isOpen: c }),
          y = () => {
            d(!1), b();
          };
        (0, u.useEffect)(() => {
          p(i.length);
        }, [p, i.length]);
        const C = h && !x && !f,
          w = () => (h ? (f ? r : x ? o : null) : n);
        return u.createElement(
          a.aF,
          {
            isOpen: E,
            onClose: y,
            size: l,
            autoFocus: !1,
            'data-element': 'Modal',
            'data-component': 'AsyncProgramPPQModal',
            'data-source-file': 'AsyncProgramPPQModal.tsx',
          },
          u.createElement(a.mH, {
            'data-element': 'ModalOverlay',
            'data-source-file': 'AsyncProgramPPQModal.tsx',
          }),
          u.createElement(
            a.$m,
            {
              paddingBottom: C ? ['110px', null, 0] : void 0,
              backgroundColor:
                (null === (t = i[g]) || void 0 === t
                  ? void 0
                  : t.backgroundColor) || void 0,
              'data-element': 'ModalContent',
              'data-source-file': 'AsyncProgramPPQModal.tsx',
            },
            u.createElement(
              a.cw,
              {
                padding: !h || (h && x) || f ? '0' : void 0,
                'data-element': 'ModalBody',
                'data-source-file': 'AsyncProgramPPQModal.tsx',
              },
              u.createElement(
                a.az,
                {
                  display: null !== w() ? 'block' : 'none',
                  height: '100%',
                  'data-element': 'Box',
                  'data-source-file': 'AsyncProgramPPQModal.tsx',
                },
                w()
              ),
              u.createElement(
                a.az,
                {
                  display: !h || x || f ? 'none' : 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                  height: 'auto',
                  paddingY: '4',
                  'data-element': 'Box',
                  'data-source-file': 'AsyncProgramPPQModal.tsx',
                },
                u.createElement(
                  a.mc,
                  {
                    size: ['fluid', null, null, 'xl'],
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                    height: '100%',
                    'data-element': 'Container',
                    'data-source-file': 'AsyncProgramPPQModal.tsx',
                  },
                  u.createElement(
                    a.so,
                    {
                      flexDirection: 'column',
                      width: ['100%', null, '60%'],
                      margin: '0 auto',
                      'data-element': 'Flex',
                      'data-source-file': 'AsyncProgramPPQModal.tsx',
                    },
                    u.createElement(
                      a.so,
                      {
                        gap: '2',
                        flexDirection: 'column',
                        marginBottom: '10',
                        'data-element': 'Flex',
                        'data-source-file': 'AsyncProgramPPQModal.tsx',
                      },
                      v
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(P, {
                              activeStepIndex: g,
                              hideIndicators: !0,
                              steps: Array.from(
                                { length: i.length },
                                (e, t) => ({ title: `${t + 1}` })
                              ),
                              stepperTheme: {
                                base: 'viridian.base',
                                light: 'viridian.light',
                              },
                            }),
                            u.createElement(
                              a.so,
                              { justifyContent: 'space-between' },
                              u.createElement(a.K0, {
                                colorScheme: 'whiteCS',
                                size: 'sm',
                                'aria-label': 'previous-step',
                                icon: u.createElement(A.A, {
                                  icon: 'ArrowLeft',
                                  color: 'tints.uiGrey',
                                }),
                                onClick: m,
                                width: '40px',
                                height: '40px',
                              }),
                              u.createElement(a.K0, {
                                colorScheme: 'whiteCS',
                                size: 'sm',
                                'aria-label': 'close',
                                icon: u.createElement(A.A, {
                                  icon: 'X',
                                  color: 'tints.uiGrey',
                                }),
                                onClick: y,
                                width: '40px',
                                height: '40px',
                              })
                            )
                          )
                        : null
                    ),
                    null == i
                      ? void 0
                      : i.map((e, t) =>
                          u.createElement(
                            a.az,
                            {
                              display: g === t ? 'flex' : 'none',
                              'data-testid': `main-content-step-${t}`,
                              flexDirection: 'column',
                              key: `main-content-step-${t}`,
                              height: '100%',
                            },
                            null == e ? void 0 : e.mainContent
                          )
                        )
                  ),
                  null == i
                    ? void 0
                    : i.map(
                        (e, t) =>
                          e.rightSideContent &&
                          u.createElement(
                            a.az,
                            {
                              width: '40%',
                              display: [
                                'none',
                                null,
                                g === t ? 'block' : 'none',
                              ],
                              'data-testid': `right-side-content-${t}`,
                              key: `right-side-content-${t}`,
                            },
                            e.rightSideContent
                          )
                      )
                )
              )
            )
          )
        );
      }
      const Te = (e) => {
        const { setIsPrePurchaseQuizAvailable: t } = (0, De.Sr)();
        return (
          (0, u.useEffect)(() => (t(!0), () => t(!1)), [t]),
          u.createElement(
            Pe,
            Object.assign({}, e, {
              'data-element': 'AsyncProgramPPQModal',
              'data-component': 'AsyncPPQModalWrapper',
              'data-source-file': 'AsyncProgramPPQModal.tsx',
            })
          )
        );
      };
      var Me = l(57548),
        Ne = l(45619);
      const Fe = {
        'bv-async': 'bv-async-pre-purchase-quiz',
        'cold-sores-async': 'cs-async-pre-purchase-quiz',
        'genital-herpes-async': 'gh-async-pre-purchase-quiz',
        'uti-async': 'uti-async-pre-purchase-quiz',
        'yeast-infection-async': 'yi-async-pre-purchase-quiz',
      };
      var Le = l(98783),
        Oe = l(86381),
        Qe = l(64898),
        He =
          l.p +
          'static/confirmation-ppq-modal-images-fd138bf61c3606298c692d803cc73185.png',
        Re =
          l.p +
          'static/confirmation-ppq-modal-images-b0771cca7ba51261b8559a0296984b9f.png',
        Ve =
          l.p +
          'static/confirmation-ppq-modal-images-6c908d8b98f6d77bc16269ef2897004d.png',
        Ye =
          l.p +
          'static/confirmation-ppq-modal-images-979262182f0cd0695b57ae4cd91b1cec.png',
        je =
          l.p +
          'static/confirmation-ppq-modal-images-920de9f58fc417145969e14de565c5f9.png';
      const Ze = [
        `${a.w4.space[2]} ${a.w4.space[4]}`,
        `${a.w4.space[4]} ${a.w4.space[6]}`,
      ];
      var Ge = function (e) {
          let { quizId: t } = e;
          const {
              toggleModal: l,
              resetState: n,
              personalData: i,
              questionsAndAnswers: o,
            } = (0, De.Sr)(),
            {
              register: r,
              watch: s,
              handleSubmit: c,
              formState: d,
              errors: m,
            } = (0, Ne.xW)(),
            { isSubmitting: p, isSubmitted: g } = d,
            h = s('email');
          (0, u.useEffect)(() => {
            E.Ay.track({
              event: b.r.EVENTS.VIEWED_COMPONENT,
              data: {
                label: b.r.ASYNC_PROGRAM_PPQ.LABEL,
                step: b.r.ASYNC_PROGRAM_PPQ.STEPS.YOU_ARE_ELIGIBLE,
              },
            });
          }, []);
          const x = (e) => {
              E.Ay.track({
                event: b.r.EVENTS.CLICKED_BUTTON,
                data: {
                  label: b.r.ASYNC_PROGRAM_PPQ.LABEL,
                  step: b.r.ASYNC_PROGRAM_PPQ.STEPS.YOU_ARE_ELIGIBLE,
                  ...e,
                },
              });
            },
            { desktopModalImage: f } = (function (e) {
              let t = Ve;
              switch (e) {
                case Fe['bv-async']:
                  t = He;
                  break;
                case Fe['cold-sores-async']:
                  t = Re;
                  break;
                case Fe['genital-herpes-async']:
                  t = Ve;
                  break;
                case Fe['yeast-infection-async']:
                  t = je;
                  break;
                case Fe['uti-async']:
                default:
                  t = Ye;
              }
              return { desktopModalImage: t };
            })(t);
          return u.createElement(
            a.az,
            {
              alignItems: 'center',
              backgroundColor: 'moonlight.base',
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              justifyContent: ['flex-end', 'center', 'space-between'],
              position: 'relative',
              textAlign: 'center',
              'data-element': 'Box',
              'data-component': 'YouAreEligible',
              'data-source-file': 'YouAreEligible.tsx',
            },
            u.createElement(a.K0, {
              colorScheme: 'whiteCS',
              size: 'sm',
              'aria-label': 'close',
              icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
              onClick: () => {
                l(!1), n();
              },
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '20px',
              right: ['24px', null, '70px'],
              'data-element': 'IconButton',
              'data-source-file': 'YouAreEligible.tsx',
            }),
            u.createElement(
              a.az,
              {
                margin: 'auto',
                maxWidth: [null, '600px'],
                paddingX: '5',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                'data-element': 'Box',
                'data-source-file': 'YouAreEligible.tsx',
              },
              u.createElement(a.In, {
                as: Le.r,
                color: 'moonlight.lighter',
                boxSize: '36px',
                weight: 'fill',
                'data-element': 'Icon',
                'data-source-file': 'YouAreEligible.tsx',
              }),
              u.createElement(
                a.DZ,
                {
                  as: 'h2',
                  color: 'tints.white',
                  fontSize: '6xl',
                  lineHeight: ['1.3', '1.2'],
                  size: 'xl',
                  'data-element': 'Heading',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                "You're eligible for a ",
                (function (e) {
                  let t = '';
                  switch (e) {
                    case Fe['bv-async']:
                      t = 'bacterial vaginosis (BV)';
                      break;
                    case Fe['cold-sores-async']:
                      t = 'cold sores';
                      break;
                    case Fe['genital-herpes-async']:
                      t = 'genital herpes';
                      break;
                    case Fe['yeast-infection-async']:
                      t = 'yeast infection';
                      break;
                    case Fe['uti-async']:
                    default:
                      t = 'urinary tract infection (UTI)';
                  }
                  return t;
                })(t),
                ' consult'
              ),
              u.createElement(
                a.$n,
                {
                  colorScheme: 'whiteCS',
                  onClick: (e) => {
                    e.preventDefault();
                    const l = (function (e) {
                      let t = `${Qe.oq}/telehealth/sessions?program=`;
                      switch (e) {
                        case Fe['bv-async']:
                          t = `${t}bv-async`;
                          break;
                        case Fe['cold-sores-async']:
                          t = `${t}cold-sores-async`;
                          break;
                        case Fe['genital-herpes-async']:
                          t = `${t}genital-herpes-async`;
                          break;
                        case Fe['yeast-infection-async']:
                          t = `${t}yeast-infection-async`;
                          break;
                        case Fe['uti-async']:
                        default:
                          t = `${t}uti-async`;
                      }
                      return t;
                    })(t);
                    x({ cta: 'Get started', quizId: t }), (0, v.navigate)(l);
                  },
                  padding: Ze,
                  size: ['sm'],
                  variant: 'primary',
                  'data-element': 'Button',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                'Get started'
              )
            ),
            u.createElement(a._V, {
              alt: 'Image of a hexagon pattern and a woman smiling',
              bottom: 250,
              display: ['none', null, 'block'],
              maxWidth: '850px',
              position: 'absolute',
              src: f,
              zIndex: 1,
              'data-element': 'Image',
              'data-source-file': 'YouAreEligible.tsx',
            }),
            u.createElement(
              a.az,
              {
                alignItems: 'center',
                backgroundColor: 'moonlight.wash',
                bottom: 0,
                display: 'flex',
                flexDirection: ['column', null, 'row'],
                height: [330, 250],
                justifyContent: 'center',
                padding: ['80px 16px', null, 80],
                width: '100vw',
                'data-element': 'Box',
                'data-source-file': 'YouAreEligible.tsx',
              },
              u.createElement(
                a.az,
                {
                  color: 'tints.black',
                  flex: 1,
                  maxWidth: 456,
                  textAlign: ['center', null, 'left'],
                  paddingRight: ['0', '0', '4'],
                  'data-element': 'Box',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                u.createElement(
                  a.DZ,
                  {
                    as: 'h3',
                    marginBottom: ['3', '2'],
                    'data-element': 'Heading',
                    'data-source-file': 'YouAreEligible.tsx',
                  },
                  'Not ready for a consult?'
                ),
                u.createElement(
                  a.EY,
                  {
                    color: 'tints.darkGrey',
                    marginBottom: ['1', '2'],
                    'data-element': 'Text',
                    'data-source-file': 'YouAreEligible.tsx',
                  },
                  'Enter your email to stay up to date on all of our virtual care solutions.'
                )
              ),
              u.createElement(
                a.az,
                {
                  display: g ? 'flex' : 'none',
                  flex: 1,
                  maxWidth: 480,
                  paddingTop: ['8', '8', '0'],
                  width: ['100%', null, 'auto'],
                  flexDirection: ['column', null, 'row'],
                  alignItems: ['center', null, 'flex-start'],
                  'data-element': 'Box',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                u.createElement(a.In, {
                  as: Le.r,
                  color: 'moonlight.base',
                  boxSize: ['20px', '20px', '32px'],
                  weight: 'fill',
                  'data-element': 'Icon',
                  'data-source-file': 'YouAreEligible.tsx',
                }),
                u.createElement(
                  a.EY,
                  {
                    color: 'moonlight.base',
                    fontSize: ['18', null, '20'],
                    fontWeight: 'medium',
                    paddingLeft: ['0', '0', '2'],
                    paddingTop: ['1', '1', '0'],
                    'data-element': 'Text',
                    'data-source-file': 'YouAreEligible.tsx',
                  },
                  'Thank you, we will get in contact soon.'
                )
              ),
              u.createElement(
                a.az,
                {
                  display: g ? 'none' : 'flex',
                  flex: 1,
                  maxWidth: 480,
                  paddingTop: ['8', '8', '0'],
                  width: ['100%', null, 'auto'],
                  'data-element': 'Box',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                u.createElement(Oe.A, {
                  register: r,
                  placeholder: 'janesmith@email.com',
                  errors: m,
                  'data-element': 'EmailField',
                  'data-source-file': 'YouAreEligible.tsx',
                }),
                u.createElement(
                  a.$n,
                  {
                    colorScheme: 'greenCS',
                    height: ['44px', '52px'],
                    isDisabled: !h,
                    isLoading: p,
                    marginLeft: '4',
                    onClick: c(async () => {
                      const e = [];
                      if (i) {
                        const t = Object.entries(i.personalData).map((e) => {
                          let [t, l] = e;
                          return { question: t, answer: l };
                        });
                        e.push(...t);
                      }
                      o && e.push(...o);
                      try {
                        await (0, M.M)({
                          event_type: 'newsletter-subscription',
                          resource: {
                            email: h,
                            data_fields: { quiz: e, newsletter: t },
                          },
                        }),
                          x({ cta: 'Submit', quizId: t });
                      } catch (l) {
                        (0, H.SD)(
                          'alert-error',
                          'Weâ€™re sorry! There is an error processing your request at the moment. Please try again later'
                        );
                      }
                    }),
                    padding: Ze,
                    size: ['sm'],
                    variant: 'primary',
                    'data-element': 'Button',
                    'data-source-file': 'YouAreEligible.tsx',
                  },
                  'Submit'
                )
              )
            )
          );
        },
        We =
          l.p + 'static/squares-bg-image-7565ad151332bc10bda68001cf62b411.png';
      var qe = function (e) {
        const {
          toggleModal: t,
          resetState: l,
          prevStep: n,
          setIsAnswerIneligible: i,
        } = (0, De.Sr)();
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.az,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'sky.dark',
              justifyContent: ['center', null, 'flex-start'],
              textAlign: 'center',
              height: '100vh',
              position: 'relative',
              paddingTop: [5, null, 115],
            },
            u.createElement(a.K0, {
              colorScheme: 'whiteCS',
              size: 'sm',
              'aria-label': 'previous-step',
              icon: u.createElement(A.A, {
                icon: 'ArrowLeft',
                color: 'tints.uiGrey',
              }),
              onClick: () => {
                i(!1), n();
              },
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '20px',
              left: ['24px', null, '70px'],
            }),
            u.createElement(a.K0, {
              colorScheme: 'whiteCS',
              size: 'sm',
              'aria-label': 'close',
              icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
              onClick: () => {
                t(!1), l();
              },
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '20px',
              right: ['24px', null, '70px'],
            }),
            u.createElement(
              a.az,
              {
                paddingX: '5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: ['100%', '700px'],
                gap: [4, null, 6],
                marginTop: ['auto', null, 0],
              },
              u.createElement(
                a.EY,
                { size: 'lg', color: 'terracotta.base' },
                'Our recommendation'
              ),
              u.createElement(
                a.DZ,
                { as: 'h1', size: '2xl', color: 'tints.white' },
                'Seek in-person care'
              ),
              u.createElement(
                a.EY,
                { size: 'xl', color: 'tints.white' },
                "We've reviewed your form and unfortunately, some of your information means that you are not currently eligible for a virtual care visit."
              ),
              u.createElement(
                a.EY,
                { size: 'xl', color: 'tints.white' },
                'We recommend that you seek care with an in-person provider locally at a providerâ€™s office, urgent care, or emergency department. If you are having a medical emergency, please call 911 or seek in-person care immediately.'
              )
            ),
            u.createElement(a._V, {
              src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAACwCAMAAAA8CjnTAAAAPFBMVEUAAAD/a2L/aGD/amL/a2L/cGD/a2L/amD/a2L/amL/aWL/a2L/amH/amL/ZmD/a2L/a2P/amP/amH/a2IIx28QAAAAE3RSTlMA3yBgnxDvQL9/cI+QUDCAz6+wWMbfugAABaBJREFUeNrs2NFqAjEQheHMJOsarcVy3v9di2AshVZ0XXfm4v/uc/WTHEgBAAAAAAAAAAAAcJd7QbymXhBtlmS1IJbpwj4LAlVdNSYijptuOiGidA1MRBzXb3Yq2F7TwETEcUmECGf6ix0KNlSlH2x1FNO/9rxMW+kamIg4vtNdO378ttA0MBFxXA8wXqY322tgIuJUPapPBe9iGpiIOAc9w+aCN3DTwETEaXrakRBrc90wEY9LcBkuCtZ0EhkSMDIkUEWGeG5kSKCLDPFcZEigkSGBT5EhASNDAlVkSMDIkEAXGeK5yJBAI0MCLjIkcCZDAlVkSMDIkEAXGeK5kSGBJjLEc5EhgS8yJFBFhgSMDAlUkSGeGxkSOIoM8VxkSKCRIYFZZEjAyLASn8piVWRYwXQ6mublx40ML5v7XhcfZakuMrxkOrSdrs5lIRcZvtk7FyS3QSCIAhL64N96+/53TexKimRtC7VswdTAO4G33srdnlHBdvx4sPgXv7WsNg1bOYdpwA+68g9DTRp81w94Qm82YZuGbYH8gmFjWW0aOFy4DlhgLP4wqNdwD+QEl01ltWmgAjnNZGicbRrIQE7jN5TVpoEM5DQnvqw2DWwgpzkakmvTkAxkHkuX1aYhHcg8zlDYpmFFIPME8mFoGp4wHia8x8SV1abhMZCnAW8zeK6sNg1EIBOMXFltGoifBgRH7mFoGohAJvjiDjVsGvx4+MLn8VxZrVsDEcgkHVdW69Vwf5tlN3qurFaqgQxknoFbM1SoIQbynoxUWa1MQwzkvQlUWa1JQwzkDEzUoYa1aIiBnAvPlNUqNMRAzsjIlFX1GuLrpZk5Mg+Dag1xVlcAy5RVvRpiIBfCERd96tQQfxoUJBBlVaGGWyBL4Jv45aZMgwvX8o/BHwbiok9FGu6BLImRKKs7aTiZFch4m2U3LkRZ3UdDl7oCTl0gc/OMgH2JsvNdJB0gFE+sGfbQ0K27JVTAtR+70mUuq5EfsucsIkR+JS2s4Bz25ofsxYgQd+7KpxmKfd4oO32RtLCD0XbgXOrjPsjOEREeQgnZy2rUMOa/0VvG9OKRqdSz+yA7S0QcIZPBZy2rkSh7hQh5p3LR8POMAzKwIPvqzH/UUFmPWctqxMyILEVEHeFgC5VrgyXsbCJVzDNcma/PqGFVREg7v/TjBKKsZtQAfDkTkXdm44f5JspqTg0xIuqorGX+WwzWMHvzYU4Qyki8E5NZQ4wI/fOMC5FgeTXEiV8FlXUqMAmOGrJHxAVC8SXqnAHBwVUwz+iIiz7LaIDt9M8z+hJbEQOQIqpZwVnkw4Cld3Ws4GYsUF7DTYTqyhpWrBkkaIANEq663otpxXemCA2A7RTPM3y6rArRAExObWUd04caitHwfkR4qZX1mO4PgjRgmHXOM2y6rErSANhO5wquQwJZGgB7VriCO1gkkKYB6J26FZxFCnkagNlpq6yuxzISNcB26lZwZ4slRGoA7EnVPOO2gutkj/ZeRoSiyjqlNlNiNdxEaFvBvY4IwRpgOzXzjL9/iZvwFMkabiKUrOCO5s7LiJCtAZicrhXcb8IzEcI1AL3TsIJzJvIsIsRrgJ0VVNZgzKII+Rp+dWcGuQ0DMRCTtGs4bps6Af//1wK9GGji7QI5MfwCDxKGkO1NElycngiDBsiy7xlLDEU4NEAv98u6xl/qiwOLBtgWeYI7eDwRHg1kE+8ZGc9YE34RaYBcvQluiYPHE6HSAL2sCa7Fc5YdQKYBPsuZ4HqcUR10GsjmfFnjnLr5NEA2Z4Ib0NKnAe7l2zP2GLKnTwP0sr2slxhTXaiB3JwJbkDdfRogm2vPuMa/tPRpgFs5E9xQhE8D9PIkuIwZqgs1wObZMyomRQg1kM3ysn7EJNf0aYD8duwZl5impU8D9FLsGUtMUzsv8ANDSjl0lmTRVgAAAABJRU5ErkJggg==',
              alt: 'Image of a orange hexagon pattern',
              display: ['block', null, 'none'],
              maxWidth: '100%',
              marginTop: ['auto', null, 0],
            })
          ),
          u.createElement(a._V, {
            alt: 'Image of a orange hexagon pattern',
            bottom: '0',
            display: ['none', null, 'block'],
            maxWidth: '1200px',
            position: 'absolute',
            src: We,
            right: '0',
          })
        );
      };
      var Ue = function (e) {
        let { mainHeading: t, secondaryHeading: l } = e;
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.DZ,
            { as: 'h1', size: 'xl', color: 'tints.uiGrey', opacity: '0.6' },
            t
          ),
          u.createElement(a.DZ, { as: 'h2', size: 'xl' }, l)
        );
      };
      const Ke = { '&:hover': { button: { backgroundColor: 'transparent' } } };
      var Je = (e) => {
        const {
            isSelected: t,
            handleOptionSelection: l = () => ({}),
            image: n,
            title: i,
            description: o,
            optionType: r,
          } = e,
          s = 'titleAndDescription' === r && !o;
        return u.createElement(
          u.Fragment,
          null,
          o || 'titleAndDescription' === r
            ? u.createElement(
                a.so,
                {
                  flexDirection: 'column',
                  border: '4px solid',
                  borderColor: t ? 'viridian.base' : 'transparent',
                  borderRadius: '12px',
                  backgroundColor: 'tints.white',
                  'data-testid': t
                    ? 'quiz-question-option-selected'
                    : 'quiz-question-option',
                  padding: '4',
                  _last: { marginRight: 0 },
                  _hover: { cursor: ['default', null, 'pointer'] },
                  onClick: () => l(),
                  position: 'relative',
                  height: '100%',
                },
                n &&
                  u.createElement(
                    a.az,
                    { position: 'absolute', top: '0', left: '0' },
                    u.createElement(a._V, {
                      as: d.G,
                      image: n.gatsbyImageData,
                      alt: i,
                      objectFit: 'fill',
                      width: ['40px', null, '45px'],
                      height: ['40px', null, '45px'],
                      display: 'block',
                    })
                  ),
                u.createElement(
                  a.so,
                  {
                    flexDirection: 'column',
                    marginTop: s ? 'auto' : void 0,
                    marginBottom: s ? 'auto' : void 0,
                  },
                  s
                    ? u.createElement(
                        a.DZ,
                        {
                          size: 'sm',
                          as: 'span',
                          paddingLeft: n ? '32px' : '0',
                        },
                        i
                      )
                    : u.createElement(
                        a.EY,
                        {
                          size: 'xl',
                          as: 'span',
                          paddingLeft: n ? '32px' : '0',
                        },
                        i
                      ),
                  o &&
                    u.createElement(
                      a.EY,
                      { size: 'md', color: 'tints.darkGrey', marginTop: '1' },
                      o
                    )
                )
              )
            : u.createElement(
                a.$n,
                {
                  _hover: { cursor: ['default', null, 'pointer'] },
                  _last: { marginRight: 0 },
                  backgroundColor: 'tints.white',
                  border: '4px solid',
                  borderColor: t ? 'viridian.base' : 'transparent',
                  colorScheme: 'whiteCS',
                  'data-testid': t
                    ? 'quiz-question-option-selected'
                    : 'quiz-question-option',
                  display: 'flex',
                  marginBottom: '3',
                  marginRight: ['10px', null, '4'],
                  onClick: () => l(),
                  padding: '8px 12px !important',
                  position: 'relative',
                  size: 'md',
                  variant: 'primary',
                  sx: Ke,
                },
                n &&
                  u.createElement(
                    a.az,
                    { position: 'absolute', top: '0', left: '0' },
                    u.createElement(a._V, {
                      as: d.G,
                      image: n.gatsbyImageData,
                      alt: i,
                      objectFit: 'fill',
                      width: ['40px', null, '45px'],
                      height: ['40px', null, '45px'],
                      display: 'block',
                    })
                  ),
                u.createElement(
                  a.DZ,
                  { size: 'sm', as: 'span', paddingLeft: n ? '32px' : '0' },
                  i
                )
              )
        );
      };
      const _e = (e) => {
        const {
            nextStep: t,
            setQuestionsAndAnswers: l,
            setIsAnswerIneligible: n,
          } = (0, De.Sr)(),
          {
            title: i,
            eyebrow: o,
            tooltip: r,
            options: s,
            questionType: c,
            optionType: d,
          } = e,
          m =
            'multiSelect' === c
              ? { question: i, answer: [] }
              : { question: i, answer: '' },
          { 0: p, 1: g } = (0, u.useState)(m),
          h = (e) => {
            const { title: t, isExclusive: l } = e;
            let a,
              n = p.answer;
            if (Array.isArray(n)) {
              if (l) a = n.includes(t) ? [] : [t];
              else {
                const e = (() => {
                  if (Array.isArray(p.answer))
                    return p.answer.filter((e) =>
                      s.some((t) => t.title === e && t.isExclusive)
                    )[0];
                })();
                e && (n = n.filter((t) => t !== e)),
                  (a = n.includes(t) ? n.filter((e) => e !== t) : [...n, t]);
              }
              g({ ...p, answer: a });
            }
          },
          x = (e, t) => {
            'singleSelect' === e
              ? ((e) => {
                  const { title: t } = e,
                    l = p.answer === t ? '' : t;
                  g({ ...p, answer: l });
                })(t)
              : 'multiSelect' === e && h(t);
          },
          A = s.map((e, t) => {
            const l = p.answer.includes(e.title);
            return u.createElement(
              Je,
              Object.assign({ key: t }, e, {
                handleOptionSelection: () => x(c, e),
                isSelected: l,
                optionType: d,
              })
            );
          });
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.az,
            null,
            u.createElement(
              a.MJ,
              null,
              u.createElement(
                a.az,
                { marginBottom: '8' },
                u.createElement(
                  a.DZ,
                  {
                    size: 'xl',
                    color: 'tints.uiGrey',
                    opacity: '0.6',
                    maxWidth: '100%',
                    display: 'block',
                  },
                  o
                ),
                u.createElement(
                  a.DZ,
                  {
                    size: 'xl',
                    color: 'tints.black',
                    maxWidth: '100%',
                    display: 'block',
                  },
                  i
                )
              ),
              u.createElement(
                a.EY,
                { size: 'md', color: 'tints.darkGrey', marginBottom: '3' },
                r
              ),
              u.createElement(
                a.az,
                { display: 'flex', flexWrap: 'wrap', marginBottom: '8' },
                'titleAndDescription' === d &&
                  A.map((e, t) =>
                    u.createElement(
                      a.az,
                      {
                        paddingRight: t % 2 == 0 ? [0, null, '6px'] : '0',
                        paddingLeft: t % 2 != 0 ? [0, null, '6px'] : '0',
                        width: ['100%', null, '50%'],
                        marginBottom: '3',
                        key: `option-${t}`,
                      },
                      e
                    )
                  ),
                'titleOnly' === d &&
                  s.map((e, t) => {
                    const l = p.answer.includes(e.title);
                    return u.createElement(
                      Je,
                      Object.assign({ key: t }, e, {
                        handleOptionSelection: () => x(c, e),
                        isSelected: l,
                      })
                    );
                  })
              )
            )
          ),
          u.createElement(
            Me.A,
            { type: 'fixed' },
            u.createElement(
              a.mc,
              { size: ['sm', 'sm', 'fluid'], paddingY: ['6', null, '0'] },
              u.createElement(
                a.$n,
                {
                  onClick: () =>
                    (() => {
                      if ((l(p), 'singleSelect' === c)) {
                        const e = s.filter((e) => e.title === p.answer)[0]
                          .isIneligible;
                        n(e);
                      }
                      if (Array.isArray(p.answer)) {
                        const e = p.answer.some((e) =>
                          s.some((t) => t.title === e && t.isIneligible)
                        );
                        n(e);
                      }
                      t();
                    })(),
                  width: ['100%', null, 'fit-content'],
                  isDisabled: 0 === p.answer.length,
                },
                'Next'
              )
            )
          )
        );
      };
      var Xe = u.memo(_e);
      const $e = [
          {
            title: 'What are your current symptoms?',
            eyebrow: 'Next up...',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: 'None of these',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !0,
              },
              {
                title: 'Urinary urgency',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Urinary frequency',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Painful urination',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Mild abdominal or pelvic pain',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Mild fatigue',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Cloudy urine',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Urinary odor',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
            ],
          },
          {
            title: 'Do you experience any of the following:',
            eyebrow: 'Tell us more...',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title: 'Visibly bloody urine',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Chills or fever at or above 100.4Â°F',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Significant fatigue or feeling ill',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Flank pain',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Moderate to severe abdominal or pelvic pain',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Vaginal symptoms (pruritus or discharge)',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Unintentional weight loss',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Night sweats',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'None of these',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
              },
            ],
          },
          {
            title: 'Do any of these things apply to you?',
            eyebrow: 'One last thing...',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title:
                  'Have had more than 2 UTIs in the last six months or 3 or more in one year',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'History of drug-resistant urinary tract infection',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'History of urinary tract procedure or instrumentation',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Underlying urologic abnormality (e.g. stricture)',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Current known or suspected pregnancy',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Breastfeeding or bottle-feeding with breastmilk',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Immunocompromised state (e.g. HIV or chemotherapy), or chronic/ongoing oral/injectable steroid use',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Diabetes with a glucose level above 250 or hemoglobin A1c level â‰¥ 9%',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Hospitalization within the past 1 month',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Liver disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Kidney disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'None of these',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
              },
            ],
          },
        ],
        et = [
          {
            eyebrow: 'Tell us more...',
            title: 'Do you experience any of the following:',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title: 'Abdominal pain',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Fever above 100.4Â°F',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Burning with urination, urinary frequency, urinary urgency, or bloody urine',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Pain with sexual intercourse',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Recent episode of unprotected sexual intercourse',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Current or recent retained foreign body in the vagina (e.g. tampon or condom)',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Current or recent warts, lesions, or bumps on or around the vagina',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Concern about a possible sexually transmitted infection',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'None of these',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
              },
            ],
          },
          {
            eyebrow: 'One last thing...',
            title: 'Do any of these things apply to you?',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title: 'Current known or suspected pregnancy',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Breastfeeding or bottle-feeding with breastmilk',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Current symptoms of bacterial vaginosis or yeast infection that did not clear up with prior prescription treatment',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Heart disease, such as heart attack, congestive heart failure, or heart rhythm problems',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title:
                  'Diabetes with a glucose level above 250 or hemoglobin A1c level â‰¥ 9%',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'History of gynecologic surgery or Crohnâ€™s disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Liver disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'Kidney disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'None of these',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
              },
            ],
          },
        ],
        tt = {
          eyebrow: 'Tell us more...',
          title: 'How severe is your current or typical outbreak?',
          questionType: 'singleSelect',
          optionType: 'titleOnly',
          options: [
            {
              title: 'Mild (1 cluster)',
              isSelected: !1,
              isIneligible: !1,
              isExclusive: !1,
            },
            {
              title: 'Moderate (2-3 clusters)',
              isSelected: !1,
              isIneligible: !1,
              isExclusive: !1,
            },
            {
              title: 'Severe (more than 3 or widespread)',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
          ],
        },
        lt = {
          eyebrow: 'One last thing...',
          title: 'Do any of these things apply to you?',
          tooltip: 'Select all that apply',
          questionType: 'multiSelect',
          optionType: 'titleAndDescription',
          options: [
            {
              title: 'Current known or suspected pregnancy',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Breastfeeding or bottle-feeding with breastmilk',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Fever > 100.4Â°F',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Chills, body aches, or swollen lymph nodes',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Diagnosis of HIV',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Seizures or diagnosis of epilepsy',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Kidney disease',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'Abnormal blood counts',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title:
                'Any medication or condition that suppresses your immune system',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title:
                'Mental health conditions (includes psychosis, delirium, or aggression)',
              isSelected: !1,
              isIneligible: !0,
              isExclusive: !1,
            },
            {
              title: 'None of these',
              isSelected: !1,
              isIneligible: !1,
              isExclusive: !0,
            },
          ],
        },
        at = [
          {
            eyebrow: 'Next up...',
            title: 'Is this your first genital herpes outbreak?',
            questionType: 'singleSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: 'Yes',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !0,
              },
              {
                title: 'No',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
              },
            ],
          },
          {
            eyebrow: 'Tell us more...',
            title: 'Where are your current symptoms?',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: 'Genitals',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Buttocks',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Inner thighs',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Other',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
            ],
          },
          {
            eyebrow: 'Tell us more...',
            title: 'How long have you had your current outbreak?',
            questionType: 'singleSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: '1-2 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: '3-7 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: '8-20 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Over 20 days',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'I donâ€™t currently have an outbreak',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
            ],
          },
          tt,
          lt,
        ],
        nt = [
          {
            eyebrow: 'Next up...',
            title: 'How long have you had your current outbreak?',
            questionType: 'singleSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: '1-2 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: '3-7 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: '8-20 days',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
              {
                title: 'Over 20 days',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
              },
              {
                title: 'I donâ€™t currently have an outbreak',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
              },
            ],
          },
          tt,
          lt,
        ];
      var it = l(17851),
        ot = l(55437);
      const rt = {
          male: { id: 'M', value: 'Male' },
          female: { id: 'F', value: 'Female' },
        },
        st = [rt.male, rt.female];
      var ct = function (e) {
        const { register: t } = (0, Ne.xW)();
        return u.createElement(
          a.so,
          {
            flexDirection: 'column',
            gap: 3,
            marginTop: [4, 6],
            'data-element': 'Flex',
            'data-component': 'PersonalDataForm',
            'data-source-file': 'PersonalDataForm.tsx',
          },
          u.createElement(
            a.so,
            {
              flexDirection: ['column', null, 'row'],
              gap: 4,
              'data-element': 'Flex',
              'data-source-file': 'PersonalDataForm.tsx',
            },
            u.createElement(it.A, {
              label: 'Age',
              min: '0',
              name: 'personalData.age',
              placeholder: 'Enter Age',
              ref: t,
              type: 'number',
              validations: { required: 'age is a required field' },
              'data-element': 'InputField',
              'data-source-file': 'PersonalDataForm.tsx',
            }),
            u.createElement(ot.A, {
              'aria-label': 'Select Sex',
              label: 'Current anatomy',
              name: 'personalData.sex',
              options: st,
              placeholder: 'Select Sex',
              ref: t,
              renderOption: (e) => {
                let { id: t, value: l } = e;
                return u.createElement('option', { key: t, value: t }, l);
              },
              validations: { required: 'Current anatomy is a required field' },
              'data-element': 'SelectField',
              'data-source-file': 'PersonalDataForm.tsx',
            })
          )
        );
      };
      const dt = [Fe['bv-async'], Fe['uti-async'], Fe['yeast-infection-async']],
        ut = [Fe['bv-async'], Fe['yeast-infection-async']],
        mt = [Fe['genital-herpes-async'], Fe['cold-sores-async']];
      const pt = (e, t) => {
        const { personalData: l } = e;
        let a = !1;
        return (
          ((function (e, t) {
            return ut.includes(t) && (18 > e || e >= 50);
          })(l.age, t) ||
            (function (e, t) {
              return t === Fe['uti-async'] && 18 > e;
            })(l.age, t) ||
            (function (e, t) {
              return mt.includes(t) && (18 > e || e >= 65);
            })(l.age, t) ||
            (function (e, t) {
              return dt.includes(t) && e === rt.male.id;
            })(l.sex, t)) &&
            (a = !0),
          a
        );
      };
      var gt =
          l.p +
          'static/mobile-ppq-modal-images-5cc570b498bd8b913169fb0f7b13664c.png',
        ht =
          l.p + 'static/ppq-modal-images-83d1311ec59ab77459c7324bd6f21a48.png',
        xt =
          l.p +
          'static/mobile-ppq-modal-images-3cfb8e0e083b1e7c691b519a164e8162.png',
        At =
          l.p + 'static/ppq-modal-images-e21d7c60cb93090023e402704b1ca834.png',
        ft =
          l.p +
          'static/mobile-ppq-modal-images-909374e1e1e19a7639642de440545cc4.png',
        vt =
          l.p + 'static/ppq-modal-images-ec215d957cb7064614ec2ea6acfdbb5e.png',
        Et =
          l.p +
          'static/mobile-ppq-modal-images-6b71adf66556653745d6cfece913063c.png',
        bt =
          l.p + 'static/ppq-modal-images-340a4efb0d12d3e412c5bbcfd99f0454.png',
        yt =
          l.p +
          'static/mobile-ppq-modal-images-5e562e8fe235f5f22deb40d0c7d0b934.png',
        Ct =
          l.p + 'static/ppq-modal-images-8d70573582e715fec1d4e2a4fceb9b58.png',
        wt =
          l.p +
          'static/mobile-ppq-modal-images-5e82f1eba70cde85f3edc20de677570f.png',
        St =
          l.p + 'static/ppq-modal-images-5791680b46caacd9d929fc24878d24e3.png';
      const kt = {
        title: 'Quickly find out if youâ€™re eligible for a consult',
        description: u.createElement(
          'p',
          null,
          'Weâ€™ll need to know some basic info about you, your symptoms, and your medical history. If you are having a medical emergency, please call 911 or seek in-person care immediately.'
        ),
        ctaText: 'Start assessment',
        mobileModalImage: Et,
        desktopModalImage: bt,
      };
      var It = function (e) {
        let { quizId: t } = e;
        const { startQuiz: l, toggleModal: n, resetState: i } = (0, De.Sr)(),
          o = ((e) => {
            let t = {};
            switch (e) {
              case 'uti-async-pre-purchase-quiz':
                t = { ...kt, mobileModalImage: yt, desktopModalImage: Ct };
                break;
              case 'bv-async-pre-purchase-quiz':
                t = { ...kt, mobileModalImage: gt, desktopModalImage: ht };
                break;
              case 'gh-async-pre-purchase-quiz':
                t = { ...kt, mobileModalImage: ft, desktopModalImage: vt };
                break;
              case 'yi-async-pre-purchase-quiz':
                t = { ...kt, mobileModalImage: wt, desktopModalImage: St };
                break;
              case 'cs-async-pre-purchase-quiz':
                t = { ...kt, mobileModalImage: xt, desktopModalImage: At };
                break;
              default:
                t = kt;
            }
            return t;
          })(t);
        return (
          (0, u.useEffect)(() => {
            E.Ay.track({
              event: b.r.EVENTS.VIEWED_COMPONENT,
              data: {
                label: b.r.PRE_PURCHASE_QUIZ.LABEL,
                step: b.r.PRE_PURCHASE_QUIZ.STEPS.INITIAL_SCREEN,
              },
            });
          }, []),
          u.createElement(
            a.az,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'sky.dark',
              textAlign: 'center',
              height: '100vh',
              position: 'relative',
              paddingTop: [5, null, 0],
              overflowY: 'hidden',
              'data-element': 'Box',
              'data-component': 'InitialQuizScreen',
              'data-source-file': 'InitialQuizScreen.tsx',
            },
            u.createElement(a.K0, {
              'aria-label': 'close',
              colorScheme: 'whiteCS',
              height: '40px',
              icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
              onClick: () => {
                n(!1), i();
              },
              position: 'absolute',
              right: ['24px', null, '70px'],
              size: 'sm',
              top: '20px',
              width: '40px',
              zIndex: 3,
              'data-element': 'IconButton',
              'data-source-file': 'InitialQuizScreen.tsx',
            }),
            u.createElement(
              a.az,
              {
                position: 'relative',
                zIndex: 2,
                maxWidth: [null, '600px'],
                paddingX: '5',
                paddingBlockStart: '90px',
                'data-element': 'Box',
                'data-source-file': 'InitialQuizScreen.tsx',
              },
              u.createElement(
                a.vw,
                {
                  backgroundColor: 'moonlight.lighter',
                  color: 'sky.dark',
                  marginBottom: ['8', '10'],
                  'data-element': 'Tag',
                  'data-source-file': 'InitialQuizScreen.tsx',
                },
                'Quiz'
              ),
              o.title &&
                u.createElement(
                  a.DZ,
                  {
                    as: 'h1',
                    size: 'xl',
                    color: 'tints.white',
                    marginBottom: ['8', '10'],
                  },
                  o.title
                ),
              o.description &&
                u.createElement(
                  a.EY,
                  {
                    as: 'div',
                    color: 'tints.white',
                    marginBottom: ['8', '10'],
                  },
                  o.description
                ),
              o.ctaText &&
                u.createElement(
                  a.$n,
                  {
                    variant: 'primary',
                    size: ['wide', 'md'],
                    colorScheme: 'whiteCS',
                    marginBottom: 8,
                    onClick: l,
                  },
                  o.ctaText
                )
            ),
            u.createElement(a._V, {
              src: o.mobileModalImage,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['block', null, 'none'],
              maxWidth: '100%',
              'data-element': 'Image',
              'data-source-file': 'InitialQuizScreen.tsx',
            }),
            u.createElement(a._V, {
              src: o.desktopModalImage,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['none', null, 'block'],
              position: 'absolute',
              bottom: '0',
              width: '100%',
              'data-element': 'Image',
              'data-source-file': 'InitialQuizScreen.tsx',
            })
          )
        );
      };
      function zt(e) {
        let { quizId: t } = e;
        return u.createElement(
          a.so,
          {
            backgroundColor: 'sky.dark',
            justifyContent: 'center',
            'data-element': 'Flex',
            'data-component': 'AsyncProgramPPQModalInitialScreen',
            'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
          },
          u.createElement(
            a.mc,
            {
              size: ['fluid', null, null, 'xl'],
              'data-element': 'Container',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            },
            u.createElement(It, {
              quizId: t,
              'data-element': 'InitialQuizScreen',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            })
          )
        );
      }
      function Bt(e) {
        let {
          mainHeading: t,
          secondaryHeading: l,
          defaultValues: n,
          onSubmit: i,
          FormComponent: o,
          buttonText: r,
          showNextButton: s = !0,
        } = e;
        const c = (0, Ne.mN)({ defaultValues: n, mode: 'onBlur' });
        return u.createElement(
          Ne.Op,
          Object.assign({}, c, {
            'data-element': 'FormProvider',
            'data-component': 'AsyncProgramPPQModalStep',
            'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
          }),
          u.createElement(
            'form',
            { onSubmit: c.handleSubmit(i), noValidate: !0 },
            u.createElement(Ue, {
              mainHeading: t || '',
              secondaryHeading: l || '',
              'data-element': 'FormTitle',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            }),
            u.createElement(o, {
              'data-element': 'FormComponent',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            }),
            s &&
              u.createElement(
                Me.A,
                { type: 'fixed' },
                u.createElement(
                  a.mc,
                  {
                    size: ['sm', 'sm', 'fluid'],
                    paddingTop: '6',
                    paddingBottom: [6, null, 0],
                  },
                  u.createElement(
                    a.$n,
                    { width: ['100%', null, 'fit-content'], type: 'submit' },
                    r || 'Next'
                  )
                )
              )
          )
        );
      }
      function Dt(e) {
        let { quizId: t } = e;
        const {
          nextStep: l,
          setPersonalData: a,
          personalData: n,
          setIsAnswerIneligible: i,
        } = (0, De.Sr)();
        return u.createElement(Bt, {
          mainHeading: 'To start...',
          secondaryHeading: 'Letâ€™s get to know each other',
          defaultValues: n || {},
          onSubmit: (e) => {
            pt(e, t) && i(!0), a(e), l();
          },
          FormComponent: ct,
          'data-element': 'AsyncProgramPPQModalStep',
          'data-component': 'AsyncProgramPPQModalFirstStep',
          'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
        });
      }
      function Pt(e) {
        let { quizId: t } = e;
        const { setEmailData: l, emailData: n } = (0, De.Sr)();
        return u.createElement(
          a.so,
          {
            backgroundColor: 'moonlight.base',
            justifyContent: 'center',
            'data-element': 'Flex',
            'data-component': 'AsyncProgramPPQModalConfirmationStep',
            'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
          },
          u.createElement(
            a.mc,
            {
              size: 'fluid',
              'data-element': 'Container',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            },
            u.createElement(Bt, {
              defaultValues: n || {},
              onSubmit: (e) => {
                l(e);
              },
              FormComponent: () => u.createElement(Ge, { quizId: t }),
              showNextButton: !1,
              'data-element': 'AsyncProgramPPQModalStep',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            })
          )
        );
      }
      const Tt = () =>
        u.createElement(
          a.so,
          {
            backgroundColor: 'sky.dark',
            justifyContent: 'center',
            'data-element': 'Flex',
            'data-component': 'AsyncProgramPPQModalYouAreNotEligibleStep',
            'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
          },
          u.createElement(
            a.mc,
            {
              size: ['fluid', null, null, 'xl'],
              'data-element': 'Container',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            },
            u.createElement(qe, {
              'data-element': 'YouAreNotEligible',
              'data-source-file': 'AsyncProgramPPQModalSteps.tsx',
            })
          )
        );
      function Mt(e) {
        const t = e
          ? (function (e) {
              const t = {
                [Fe['uti-async']]: $e,
                [Fe['bv-async']]: et,
                [Fe['genital-herpes-async']]: at,
                [Fe['yeast-infection-async']]: et,
                [Fe['cold-sores-async']]: nt,
              }[e];
              return t
                ? t.map((e, t) =>
                    u.createElement(
                      Xe,
                      Object.assign({ key: `option-select-form-${t}` }, e)
                    )
                  )
                : [];
            })(e).map((e) => ({ mainContent: e }))
          : [];
        return {
          initialScreenContent: u.createElement(zt, { quizId: e }),
          steps: [{ mainContent: u.createElement(Dt, { quizId: e }) }, ...t],
          finalScreenContent: u.createElement(Pt, { quizId: e }),
          ineligibleScreenContent: u.createElement(Tt, null),
        };
      }
      var Nt = (e) => {
        let { eyebrow: t, title: l, tableColumns: n } = e;
        const { handleMdpCtaClick: i } = (0, w.A)(),
          o = n
            ? Math.max(
                ...(null == n
                  ? void 0
                  : n.map((e) => {
                      var t;
                      return null != e && e.rows
                        ? null == e || null === (t = e.rows) || void 0 === t
                          ? void 0
                          : t.length
                        : 0;
                    }))
              )
            : 0,
          c = (e, t) => {
            i({ event: e, ctaUrl: (null == t ? void 0 : t.url) || '' }), m(t);
          },
          m = (e) => {
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_LINK,
              data: {
                sectionHeader: l || 'No title provided',
                contentfulSection: 'ComparisonTable',
                ctaText: (null == e ? void 0 : e.label) || 'No CTA label',
              },
            });
          };
        return u.createElement(
          r.A,
          {
            size: ['sm', null, 'xl'],
            'data-element': 'SectionContainer',
            'data-component': 'ComparisonTable',
            'data-source-file': 'ComparisonTable.tsx',
          },
          u.createElement(
            a.so,
            {
              flexDirection: ['column', null, null, 'row'],
              justifyContent: 'space-between',
              'data-element': 'Flex',
              'data-source-file': 'ComparisonTable.tsx',
            },
            u.createElement(
              a.az,
              {
                width: [null, null, null, '400px'],
                'data-element': 'Box',
                'data-source-file': 'ComparisonTable.tsx',
              },
              u.createElement(s.A, {
                eyebrow: t,
                title: l,
                headerAlignment: ['center', null, null, 'left'],
                eyebrowAlignment: ['center', null, null, 'left'],
                'data-element': 'SectionHeader',
                'data-source-file': 'ComparisonTable.tsx',
              })
            ),
            u.createElement(
              a.K3,
              {
                whiteSpace: 'wrap',
                maxWidth: '880px',
                margin: '0 auto',
                borderRadius: 'xl',
                backgroundColor: 'tints.lightCream',
                flex: '1',
                'data-element': 'TableContainer',
                'data-source-file': 'ComparisonTable.tsx',
              },
              u.createElement(
                a.XI,
                {
                  sx: { tableLayout: 'fixed' },
                  'data-element': 'Table',
                  'data-source-file': 'ComparisonTable.tsx',
                },
                u.createElement(
                  a.d8,
                  {
                    'data-element': 'Thead',
                    'data-source-file': 'ComparisonTable.tsx',
                  },
                  u.createElement(
                    a.Tr,
                    {
                      'data-element': 'Tr',
                      'data-source-file': 'ComparisonTable.tsx',
                    },
                    null == n
                      ? void 0
                      : n.map((e, t) => {
                          var l, i, o, r, s, c, m, p, g, h;
                          const x = 0 === t,
                            A = t % 2 == 0,
                            f = `calc((100% - 240px) / ${n.length - 1})`;
                          return u.createElement(
                            a.Th,
                            {
                              key: t,
                              backgroundColor:
                                (null === (l = e.header) || void 0 === l
                                  ? void 0
                                  : l.backgroundColor) || void 0,
                              display: x
                                ? ['none', null, null, 'table-cell']
                                : void 0,
                              fontSize: ['xl', null, '2xl'],
                              borderBottom: '2px solid white',
                              borderTopRadius: [A ? 'none' : 'xl'],
                              width: x ? '240px' : f,
                              wordBreak: 'break-word',
                            },
                            u.createElement(
                              a.so,
                              { flexDirection: 'column', gap: '2' },
                              u.createElement(a._V, {
                                display: [null, null, null, 'none'],
                                width: '72px',
                                height: '72px',
                                as: d.G,
                                image:
                                  null === (i = e.header) ||
                                  void 0 === i ||
                                  null === (o = i.mobileImage) ||
                                  void 0 === o
                                    ? void 0
                                    : o.gatsbyImageData,
                                alt:
                                  (null === (r = e.header) ||
                                  void 0 === r ||
                                  null === (s = r.mobileImage) ||
                                  void 0 === s
                                    ? void 0
                                    : s.description) || '',
                              }),
                              u.createElement(a._V, {
                                display: ['none', null, null, 'block'],
                                width: '72px',
                                height: '72px',
                                as: d.G,
                                image:
                                  null === (c = e.header) ||
                                  void 0 === c ||
                                  null === (m = c.desktopImage) ||
                                  void 0 === m
                                    ? void 0
                                    : m.gatsbyImageData,
                                alt:
                                  (null === (p = e.header) ||
                                  void 0 === p ||
                                  null === (g = p.desktopImage) ||
                                  void 0 === g
                                    ? void 0
                                    : g.description) || '',
                              }),
                              null === (h = e.header) || void 0 === h
                                ? void 0
                                : h.text
                            )
                          );
                        })
                  )
                ),
                u.createElement(
                  a.NN,
                  {
                    'data-element': 'Tbody',
                    'data-source-file': 'ComparisonTable.tsx',
                  },
                  Array.from({ length: o }).map((e, t) =>
                    u.createElement(
                      a.Tr,
                      { key: t },
                      null == n
                        ? void 0
                        : n.map((e, l) => {
                            var n, i, r, s, d, m, p, g, h;
                            const x =
                                null == e ||
                                null === (n = e.rows) ||
                                void 0 === n
                                  ? void 0
                                  : n[t],
                              f = t === o - 1,
                              v = l % 2 == 0;
                            return u.createElement(
                              a.Td,
                              {
                                key: l,
                                color:
                                  (null == x ? void 0 : x.textColor) || void 0,
                                backgroundColor:
                                  (null == e ||
                                  null === (i = e.header) ||
                                  void 0 === i
                                    ? void 0
                                    : i.backgroundColor) || void 0,
                                display:
                                  0 === l
                                    ? ['none', null, null, 'table-cell']
                                    : void 0,
                                borderBottom: '2px solid white',
                                fontSize: ['md', null, 'lg'],
                                borderBottomRadius: [f && !v ? 'xl' : 'none'],
                                wordBreak: 'break-word',
                              },
                              u.createElement(
                                a.so,
                                { flexDirection: 'column', gap: '8' },
                                null != e &&
                                  e.rows &&
                                  t <
                                    (null == e ||
                                    null === (r = e.rows) ||
                                    void 0 === r
                                      ? void 0
                                      : r.length)
                                  ? u.createElement(
                                      a.so,
                                      { gap: '2' },
                                      null != x && x.iconName
                                        ? u.createElement(A.A, {
                                            icon:
                                              null == x ? void 0 : x.iconName,
                                            color:
                                              null == x ? void 0 : x.iconColor,
                                            weight: 'fill',
                                          })
                                        : null,
                                      null == x ? void 0 : x.text
                                    )
                                  : null,
                                f &&
                                  null !== (s = e.header) &&
                                  void 0 !== s &&
                                  s.cta
                                  ? u.createElement(
                                      a.$n,
                                      Object.assign(
                                        {
                                          variant: 'primary',
                                          id: `${
                                            null == e ||
                                            null === (d = e.header) ||
                                            void 0 === d ||
                                            null === (m = d.cta) ||
                                            void 0 === m
                                              ? void 0
                                              : m.label
                                          }-promo`,
                                          width: [
                                            '100%',
                                            null,
                                            null,
                                            'fit-content',
                                          ],
                                          size: 'sm',
                                          onClick: (t) => {
                                            var l;
                                            return null == c
                                              ? void 0
                                              : c(
                                                  t,
                                                  null == e ||
                                                    null === (l = e.header) ||
                                                    void 0 === l
                                                    ? void 0
                                                    : l.cta
                                                );
                                          },
                                        },
                                        ((e) =>
                                          null != e && e.url
                                            ? {
                                                ...(0, B.ax)(
                                                  null == e ? void 0 : e.url
                                                ),
                                              }
                                            : {})(
                                          null == e ||
                                            null === (p = e.header) ||
                                            void 0 === p
                                            ? void 0
                                            : p.cta
                                        )
                                      ),
                                      null == e ||
                                        null === (g = e.header) ||
                                        void 0 === g ||
                                        null === (h = g.cta) ||
                                        void 0 === h
                                        ? void 0
                                        : h.label
                                    )
                                  : null
                              )
                            );
                          })
                    )
                  )
                )
              )
            )
          )
        );
      };
      var Ft = l(9793),
        Lt = l(16976);
      var Ot = (e) => {
        let { disclaimer: t } = e;
        return t
          ? u.createElement(
              a.az,
              {
                paddingX: [6, 10, 12],
                maxWidth: '1000px',
                marginTop: [6, 12],
                marginLeft: 'auto',
                marginRight: 'auto',
                sx: {
                  padding: {
                    color: 'tints.uiGrey',
                    textAlign: 'center',
                    fontSize: 'sm',
                  },
                },
                'data-element': 'Box',
                'data-component': 'DisclaimerSection',
                'data-source-file': 'DisclaimerSection.tsx',
              },
              u.createElement(Lt.A, {
                contentfulRichText: t,
                'data-element': 'RichTextWrapper',
                'data-source-file': 'DisclaimerSection.tsx',
              })
            )
          : null;
      };
      var Qt = l(86462);
      var Ht = l(29427);
      var Rt = l(313),
        Vt = l(72473),
        Yt = l(30504),
        jt = l(40961),
        Zt = l(85692);
      const Gt = 'UTI Antibiotics Treatment',
        Wt = {
          label: 'Get Started',
          url: '/whatever#disclaimer',
          metadata: { metadata_id: '' },
        },
        qt = [
          {
            label: 'One-time purchase',
            description: 'Get a one-time prescription of UTI Antibiotics',
            price: { value: 45, frequency: 'One-time' },
          },
          {
            label: 'Quarterly Subscription',
            description: 'Get a recurring prescriptions of UTI Antibiotics',
            price: { value: 36, frequency: 'Quarterly', promoText: '20% off' },
          },
        ],
        Ut = [
          {
            iconName: 'WarningCircle',
            iconColor: 'tints.uiGrey',
            text: 'Prescription only, medication cost not included',
            textColor: 'tints.darkGrey',
          },
          {
            iconName: 'Asterisk',
            iconColor: 'tints.uiGrey',
            text: 'Treatment plans available within 24 hours, seven days a week (excluding major holidays). Select states require live telehealth appointments.',
            textColor: 'tints.darkGrey',
          },
        ],
        Kt = 'Thank you for your interest!',
        Jt =
          'This recurring treatment and bundles are not available yet, but we can still help you access one-time treatment options. Your feedback helps us improve your patient experience. Please click the button below to continue.',
        _t = 'Proceed with one-time treatment',
        Xt = (e) =>
          u.createElement(
            Vt.aF,
            {
              open: e.isOpen,
              openHandler: e.modalHandler,
              zIndex: 11,
              'data-element': 'Modal',
              'data-component': 'FakeModal',
              'data-source-file': 'FakeProductDescription.tsx',
            },
            u.createElement(
              a.so,
              {
                flexDirection: 'column',
                gap: '6',
                'data-element': 'Flex',
                'data-source-file': 'FakeProductDescription.tsx',
              },
              u.createElement(
                a.DZ,
                {
                  size: 'lg',
                  color: 'viridian.base',
                  'data-element': 'Heading',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                Kt
              ),
              u.createElement(
                a.EY,
                {
                  color: 'tints.darkGrey',
                  'data-element': 'Text',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                Jt
              ),
              u.createElement(
                a.$n,
                {
                  width: '100%',
                  onClick: e.handleModalButtonClick,
                  'data-element': 'Button',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                _t
              )
            )
          ),
        $t = (e) => {
          const { items: t, selectedValue: l, setSelectedValue: n, ...i } = e;
          return u.createElement(
            a.az,
            {
              gap: 4,
              display: 'flex',
              flexDirection: 'column',
              'data-element': 'Box',
              'data-component': 'Options',
              'data-source-file': 'FakeProductDescription.tsx',
            },
            t.map((e, t) => {
              var o;
              return u.createElement(
                a.az,
                {
                  width: '100%',
                  background: 'tints.lightCream',
                  borderRadius: '12px',
                  key: `${e.label}-${t}`,
                  border: 'none',
                  sx: {
                    ...(null !== (o = i.sx) && void 0 !== o ? o : {}),
                    ...(l === e
                      ? {
                          boxShadow: (e) =>
                            `0px 0px 0px 2px inset ${e.colors.viridian.base}`,
                        }
                      : {}),
                  },
                },
                u.createElement(
                  a.az,
                  Object.assign({}, i, {
                    display: 'flex',
                    alignItems: 'center',
                    'data-testid': 'membership-accordion-button',
                    justifyContent: 'space-between',
                    padding: 4,
                    onClick: () => {
                      n(e);
                    },
                    role: 'button',
                    cursor: 'pointer',
                  }),
                  u.createElement(
                    a.az,
                    { textAlign: 'start' },
                    u.createElement(a.EY, null, e.label),
                    u.createElement(
                      a.EY,
                      { size: 'sm', color: 'tints.darkGrey' },
                      e.description
                    )
                  ),
                  u.createElement(
                    a.az,
                    { textAlign: 'end' },
                    e.price.promoText
                      ? u.createElement(
                          a.EY,
                          { fontSize: '2xl', fontWeight: 'medium' },
                          e.price.promoText
                        )
                      : u.createElement(Yt.A, {
                          price: e.price.value,
                          fontWeight: 'medium',
                        }),
                    u.createElement(
                      a.EY,
                      { size: 'sm', color: 'tints.darkGrey' },
                      e.price.frequency
                    )
                  )
                )
              );
            })
          );
        },
        el = (e) => {
          let {
            isOpen: t,
            onClose: l,
            content: n,
            cta: i,
            price: o,
            selectedOption: r,
          } = e;
          return u.createElement(
            a._s,
            {
              isOpen: t,
              onClose: l,
              placement: 'bottom',
              blockScrollOnMount: !1,
              'data-element': 'Drawer',
              'data-component': 'FooterDrawer',
              'data-source-file': 'FakeProductDescription.tsx',
            },
            u.createElement(a.QP, {
              zIndex: 9997,
              'data-element': 'DrawerOverlay',
              'data-source-file': 'FakeProductDescription.tsx',
            }),
            u.createElement(
              a.zj,
              {
                position: 'relative',
                gap: 0,
                containerProps: { zIndex: 9998 },
                minHeight: '90vh',
                top: 'auto !important',
                borderRadius: '24px 24px 0 0',
                'data-element': 'DrawerContent',
                'data-source-file': 'FakeProductDescription.tsx',
              },
              u.createElement(
                a.BE,
                {
                  paddingX: [4, 8],
                  paddingBottom: 4,
                  'data-element': 'DrawerHeader',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                u.createElement(
                  a.DZ,
                  {
                    as: 'h1',
                    size: 'md',
                    'data-element': 'Heading',
                    'data-source-file': 'FakeProductDescription.tsx',
                  },
                  'Select options'
                ),
                u.createElement(a.s1, {
                  'data-element': 'DrawerCloseButton',
                  'data-source-file': 'FakeProductDescription.tsx',
                })
              ),
              u.createElement(
                a.ys,
                {
                  paddingY: 4,
                  paddingX: [4, 8],
                  overflow: 'auto',
                  'data-element': 'DrawerBody',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                n
              ),
              u.createElement(
                a.tb,
                {
                  background: 'tints.lightCream',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  position: 'relative',
                  'data-element': 'DrawerFooter',
                  'data-source-file': 'FakeProductDescription.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    backgroundColor: 'tints.lightCream',
                    borderRadius: '24px 24px 0 0',
                    paddingTop: '20px',
                    paddingBottom: '34px',
                    paddingX: 6,
                    boxShadow: '0px 4px 35px 0px rgba(0, 0, 0, 0.2)',
                    'data-element': 'Box',
                    'data-source-file': 'FakeProductDescription.tsx',
                  },
                  u.createElement(
                    a.az,
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 3,
                      'data-element': 'Box',
                      'data-source-file': 'FakeProductDescription.tsx',
                    },
                    u.createElement(
                      a.EY,
                      {
                        display: 'flex',
                        flexDirection: 'column',
                        fontWeight: 'medium',
                        fontSize: 'lg',
                        'data-element': 'Text',
                        'data-source-file': 'FakeProductDescription.tsx',
                      },
                      'Subtotal',
                      u.createElement(
                        a.EY,
                        {
                          color: 'tints.darkGrey',
                          fontSize: 'md',
                          'data-element': 'Text',
                          'data-source-file': 'FakeProductDescription.tsx',
                        },
                        r
                      )
                    ),
                    u.createElement(Yt.A, {
                      price: o,
                      'data-element': 'Price',
                      'data-source-file': 'FakeProductDescription.tsx',
                    })
                  ),
                  i
                )
              )
            )
          );
        },
        tl = (e) => {
          let { cta: t, price: l, isVisible: n } = e;
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              a.az,
              {
                visibility: n ? 'visible' : 'hidden',
                backgroundColor: ['tints.lightCream', 'tints.white'],
                paddingX: 6,
                paddingY: 4,
                top: ['68px', null, '58px'],
                left: 0,
                position: 'fixed',
                zIndex: 2,
                width: '100%',
                boxShadow: ['2xl', 'none'],
                borderBottomRadius: ['24px', 0],
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              u.createElement(Yt.A, { price: l }),
              u.createElement(
                a.$n,
                {
                  colorScheme: 'greenCS',
                  onClick: null == t ? void 0 : t.onClick,
                },
                null == t ? void 0 : t.label
              )
            )
          );
        };
      var ll = () => {
          var e, t, l, n, i, o;
          const r = (0, B.ax)((null == Wt ? void 0 : Wt.url) || ''),
            { handleMdpCtaClick: s } = (0, w.A)(),
            { isOpen: c, onOpen: d, onClose: m } = (0, a.j1)(),
            [p] = (0, a.Ub)(`(max-width: ${a.w4.breakpoints.tablet})`),
            { 0: g, 1: h } = (0, u.useState)(qt[0]),
            { 0: x, 1: A } = (0, u.useState)(
              null === (e = qt[0]) ||
                void 0 === e ||
                null === (t = e.price) ||
                void 0 === t
                ? void 0
                : t.value
            ),
            { 0: f, 1: v } = (0, u.useState)(!1),
            {
              inView: C,
              ref: S,
              entry: k,
            } = (0, Zt.Wx)({
              initialInView: !1,
              threshold: 0,
              rootMargin: '-68px 0px 0px 0px',
            }),
            I = (e, t) => {
              !f && g === qt[1]
                ? (e.preventDefault(), v(!0))
                : (v(!1),
                  s({ event: e, ctaUrl: (null == t ? void 0 : t.url) || '' })),
                z(t);
            },
            z = (e) => {
              var t;
              E.Ay.track({
                event: b.r.EVENTS.CLICKED_BUTTON,
                data: {
                  sectionHeader: Gt || 'No title provided',
                  contentfulSection: 'FakeProductDescription',
                  ctaText: (null == e ? void 0 : e.label) || 'No CTA label',
                  purchaseType:
                    null == g || null === (t = g.price) || void 0 === t
                      ? void 0
                      : t.frequency,
                },
              });
            };
          (0, u.useEffect)(() => {
            const e = null == g ? void 0 : g.price.value;
            A(e);
          }, [null == g ? void 0 : g.price.value]);
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              a.az,
              { 'data-testid': 'hero-product-description', ref: S },
              u.createElement(
                a.DZ,
                {
                  as: 'h1',
                  size: 'xl',
                  marginBottom: [2, null, 3],
                  textAlign: ['center', null, 'left'],
                },
                Gt
              ),
              u.createElement(Yt.A, {
                fontSize: '5xl',
                price: x,
                textAlign: ['center', null, 'initial'],
              }),
              u.createElement(
                a.az,
                { marginTop: 8, display: ['none', null, 'block'] },
                u.createElement($t, {
                  items: qt,
                  selectedValue: g,
                  setSelectedValue: h,
                })
              ),
              u.createElement(
                a.$n,
                Object.assign({}, r, {
                  width: '100%',
                  className:
                    null !==
                      (l =
                        null == Wt || null === (n = Wt.metadata) || void 0 === n
                          ? void 0
                          : n.metadata_id) && void 0 !== l
                      ? l
                      : '',
                  onClick: (e) => {
                    if (p) return e.preventDefault(), void d();
                    I(e, Wt);
                  },
                  marginTop: 6,
                }),
                null == Wt ? void 0 : Wt.label
              ),
              u.createElement(
                a.so,
                {
                  marginTop: [6, null, 4],
                  justifyContent: 'center',
                  gap: '2',
                  flexWrap: 'wrap',
                },
                Ut.map((e, t) =>
                  u.createElement(Ht.A, Object.assign({ key: t }, e))
                )
              )
            ),
            p &&
              u.createElement(
                u.Fragment,
                null,
                u.createElement(tl, {
                  isVisible: Boolean(k && !C),
                  price: x,
                  cta: { label: null == Wt ? void 0 : Wt.label, onClick: d },
                }),
                u.createElement(el, {
                  isOpen: c,
                  onClose: m,
                  selectedOption: null == g ? void 0 : g.label,
                  price: x,
                  content: u.createElement($t, {
                    items: qt,
                    selectedValue: g,
                    setSelectedValue: h,
                  }),
                  cta: u.createElement(
                    a.$n,
                    Object.assign({}, r, {
                      width: '100%',
                      className:
                        null !==
                          (i =
                            null == Wt ||
                            null === (o = Wt.metadata) ||
                            void 0 === o
                              ? void 0
                              : o.metadata_id) && void 0 !== i
                          ? i
                          : '',
                      onClick: (e) => {
                        I(e, Wt), m();
                      },
                    }),
                    null == Wt ? void 0 : Wt.label
                  ),
                })
              ),
            (0, y.Bd)() &&
              (0, jt.createPortal)(
                u.createElement(Xt, {
                  isOpen: f,
                  modalHandler: v,
                  handleModalButtonClick: (e) => {
                    I(e, Wt), h(qt[0]);
                  },
                }),
                document.body
              )
          );
        },
        al = l(26518);
      var nl = (e) => {
        var t, l;
        let {
          flags: n,
          title: i,
          price: o,
          frequency: r,
          topBulletPoints: s,
          bottomBulletPoints: c,
          cta: d,
        } = e;
        const { handleMdpCtaClick: m } = (0, w.A)(),
          p = (0, B.ax)((null == d ? void 0 : d.url) || ''),
          g = (e) => {
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_LINK,
              data: {
                sectionHeader: i || 'No title provided',
                contentfulSection: 'ProductDescription',
                ctaText: (null == e ? void 0 : e.label) || 'No CTA label',
              },
            });
          };
        return u.createElement(
          a.az,
          {
            'data-testid': 'hero-product-description',
            'data-element': 'Box',
            'data-component': 'ProductDescription',
            'data-source-file': 'ProductDescription.tsx',
          },
          n
            ? u.createElement(
                a.so,
                {
                  marginBottom: [4, null, 6],
                  gap: '1',
                  justifyContent: ['center', null, 'left'],
                },
                null == n
                  ? void 0
                  : n.map((e) =>
                      u.createElement(al.A, {
                        key: null == e ? void 0 : e.displayText,
                        displayText: null == e ? void 0 : e.displayText,
                        metadata: null == e ? void 0 : e.metadata,
                      })
                    )
              )
            : null,
          i
            ? u.createElement(
                a.DZ,
                {
                  as: 'h1',
                  size: 'xl',
                  marginBottom: [2, null, 3],
                  textAlign: ['center', null, 'left'],
                },
                i
              )
            : null,
          o && null != o && o.dollarAmount && null != o && o.centsAmount
            ? u.createElement(
                a.so,
                {
                  alignItems: 'baseline',
                  justifyContent: ['center', null, 'left'],
                  whiteSpace: 'break-spaces',
                },
                u.createElement(a.EY, { fontSize: ['lg', null, '2xl'] }, '$'),
                u.createElement(
                  a.EY,
                  { fontSize: ['4xl', null, '5xl'] },
                  o.dollarAmount
                ),
                u.createElement(
                  a.EY,
                  { fontSize: ['lg', null, '2xl'] },
                  '.',
                  o.centsAmount
                ),
                r
                  ? u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(
                        a.EY,
                        { fontSize: 'md', color: 'tints.uiGrey' },
                        ` /${r}`
                      )
                    )
                  : null
              )
            : null,
          s
            ? u.createElement(
                a.so,
                {
                  marginTop: [4, null, 4],
                  marginBottom: [4, null, 8],
                  gap: '2',
                  flexDirection: 'column',
                },
                s.map((e) =>
                  u.createElement(
                    Ht.A,
                    Object.assign({ key: null == e ? void 0 : e.text }, e)
                  )
                )
              )
            : null,
          d && null != d && d.label && null != d && d.url
            ? u.createElement(
                a.$n,
                Object.assign({}, p, {
                  onClick: (e) =>
                    ((e, t) => {
                      m({
                        event: e,
                        ctaUrl: (null == t ? void 0 : t.url) || '',
                      }),
                        g(t);
                    })(e, d),
                  width: '100%',
                  className:
                    null !==
                      (t =
                        null == d || null === (l = d.metadata) || void 0 === l
                          ? void 0
                          : l.metadata_id) && void 0 !== t
                      ? t
                      : '',
                }),
                null == d ? void 0 : d.label
              )
            : null,
          c
            ? u.createElement(
                a.so,
                {
                  marginTop: [6, null, 4],
                  justifyContent: 'center',
                  gap: '2',
                  flexWrap: 'wrap',
                },
                c.map((e) =>
                  u.createElement(
                    Ht.A,
                    Object.assign({ key: null == e ? void 0 : e.text }, e)
                  )
                )
              )
            : null
        );
      };
      function il(e) {
        let { body: t, bulletPoints: l } = e;
        return u.createElement(
          a.az,
          {
            backgroundColor: 'tints.lightCream',
            padding: [6, null, 8],
            borderRadius: 'xl',
            'data-testid': 'hero-product-promotion',
            'data-element': 'Box',
            'data-component': 'ProductPromotion',
            'data-source-file': 'ProductPromotion.tsx',
          },
          t
            ? u.createElement(
                a.az,
                { marginBottom: [6, null, 8] },
                u.createElement(Lt.A, { contentfulRichText: t })
              )
            : null,
          l && l.length > 0
            ? u.createElement(
                a.xA,
                {
                  as: 'ul',
                  listStyleType: 'none',
                  columns: [1, 2],
                  alignEdges: !0,
                  spacing: '4',
                },
                l.map((e, t) =>
                  u.createElement(
                    a.Ei,
                    { as: 'li', key: `bullet-point-${t}` },
                    u.createElement(
                      Ht.A,
                      Object.assign({}, e, {
                        iconBackgroundColor: 'tints.white',
                        hasRoundIconBackground: !0,
                      })
                    )
                  )
                )
              )
            : null
        );
      }
      var ol = l(98798);
      const rl = (e) => {
        let { images: t, slideStyle: l = {} } = e;
        return u.createElement(
          a.az,
          {
            backgroundColor: 'tints.lightCream',
            borderRadius: 'xl',
            overflow: 'hidden',
            'data-element': 'Box',
            'data-component': 'ImageCarousel',
            'data-source-file': 'ImageCarousel.tsx',
          },
          u.createElement(
            ol.A,
            {
              arrowInsideOffset: !0,
              insidePagination: !0,
              pagination: { clickable: !0, enabled: t.length > 1 },
              showPagination: !0,
              slideStyle: l,
              slidesPerView: 1,
              spaceBetween: 0,
              'data-element': 'Carousel',
              'data-source-file': 'ImageCarousel.tsx',
            },
            t.map((e, t) =>
              u.createElement(
                a.so,
                { key: t, justifyContent: 'center' },
                u.createElement(
                  a.az,
                  null,
                  u.createElement(a._V, {
                    alt: e.alt,
                    as: d.G,
                    aspectRatio: '1.5',
                    image: e.image,
                    objectFit: 'fill',
                  })
                )
              )
            )
          )
        );
      };
      var sl = u.memo(rl);
      Array.apply(null, Array(4)).map(() => {
        return (
          void 0 === e && (e = {}),
          {
            image: {
              images: {
                sources: [
                  {
                    srcSet: 'https://placehold.co/720x480/orange/white',
                    sizes: '(min-width: 1500px) 1500px, 100vw',
                    type: 'image/webp',
                  },
                ],
                fallback: {
                  src: 'https://images.ctfassets.net/lrd5ir86ur94/35khmnGh2TJIvb1SUgY2HN/c9e83c0c3df3b41042509c0098c59189/PIP_Modules_ew_..jpg?w=1500&h=800&fl=progressive&q=75&fm=jpg',
                  srcSet:
                    'https://images.ctfassets.net/lrd5ir86ur94/35khmnGh2TJIvb1SUgY2HN/c9e83c0c3df3b41042509c0098c59189/PIP_Modules_ew_..jpg?w=375&h=200&fl=progressive&q=75&fm=jpg 375w,\nhttps://images.ctfassets.net/lrd5ir86ur94/35khmnGh2TJIvb1SUgY2HN/c9e83c0c3df3b41042509c0098c59189/PIP_Modules_ew_..jpg?w=750&h=400&fl=progressive&q=75&fm=jpg 750w,\nhttps://images.ctfassets.net/lrd5ir86ur94/35khmnGh2TJIvb1SUgY2HN/c9e83c0c3df3b41042509c0098c59189/PIP_Modules_ew_..jpg?w=1500&h=800&fl=progressive&q=75&fm=jpg 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                },
              },
              layout: 'constrained',
              width: 720,
              height: 480,
              placeholder: {
                fallback:
                  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAALABQDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAJxAAAQMDAwMEAwAAAAAAAAAAAQIDBAURIQAGEjEyQRMiJFFhcYH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAIxEAAQMDAgcAAAAAAAAAAAAAAQACAxEhMRNRBAUjNJGx0f/aAAwDAQACEQMRAD8AXpUyTTZc1mixzPhLHrOJwtxAOBZRtzNhfifHQ6HBuomOLaiO9fI+oKjQYtc3K8mQ0liMltbi2weBwLY+jc3t+NaxNsJEEbZJCCEFISlEl1COxKyE5vi+gBrdKnj0pXM2K0SYo0TebUam/Gjyo63HmkD2qUEqIIBwDjxbRK93TloywIUhuwlW45QOePED77Qf711iouIcdUlFysv3PUpST++I0qPCp5n3FdwPS//Z',
              },
            },
            alt: 'Image alt',
          }
        );
        var e;
      });
      const cl = { width: '100%' };
      var dl = l(10535);
      function ul(e) {
        var t, l, a, n, i, o, r;
        const { metadata: s } = e || {},
          c =
            (null == s || null === (t = s.flags) || void 0 === t
              ? void 0
              : t.filter((e) => null != e)) || [],
          [d, u] =
            (null == s ||
            null === (l = s.context) ||
            void 0 === l ||
            null === (a = l.price) ||
            void 0 === a ||
            null === (n = a.value) ||
            void 0 === n
              ? void 0
              : n.split('.')) || [],
          m = null == e ? void 0 : e.subsections,
          p = (0, B.XN)('BulletPointWithIcon', m),
          g = (0, B.XN)('BulletPointWithIconInline', m),
          h = (0, B.hn)(p),
          x = (0, B.hn)(g);
        return {
          flags: c,
          title: null == s ? void 0 : s.title,
          price: { dollarAmount: d, centsAmount: u },
          frequency:
            (null == s ||
            null === (i = s.context) ||
            void 0 === i ||
            null === (o = i.price) ||
            void 0 === o
              ? void 0
              : o.frequency) || null,
          topBulletPoints: h || null,
          bottomBulletPoints: x || null,
          cta:
            (null == s || null === (r = s.ctas) || void 0 === r
              ? void 0
              : r[0]) || null,
        };
      }
      function ml(e) {
        const t = null == e ? void 0 : e.subsections,
          l = (0, B.XN)('BulletPointWithIcon', t),
          a = (0, B.hn)(l);
        return { body: (null == e ? void 0 : e.body) || null, bulletPoints: a };
      }
      var pl = (e) => {
        const { 0: t, 1: l } = (0, u.useState)(''),
          { 0: n, 1: i } = (0, u.useState)(''),
          { 0: o, 1: r } = (0, u.useState)(''),
          { 0: s, 1: c } = (0, u.useState)(!1);
        if (!e || !e.learnMoreForm) return null;
        const { learnMoreForm: d } = e,
          m = async function (e, l) {
            if (
              (void 0 === l && (l = {}),
              e.preventDefault(),
              i(''),
              r(''),
              c(!0),
              !t)
            )
              return i('Email is required.'), void c(!1);
            try {
              (0, M.M)({
                event_type: 'newsletter-subscription',
                resource: {
                  user_id: l.id,
                  email: t,
                  data_fields: { newsletter: 'weight-care-plus' },
                },
              }),
                r('Thank you, we will get in contact soon.');
            } catch (a) {
              i('Email submission failed, please try again.');
            } finally {
              c(!1);
            }
          };
        return u.createElement(
          a.so,
          {
            flex: 1,
            'data-element': 'Flex',
            'data-component': 'LearnMoreForm',
            'data-source-file': 'LearnMoreForm.tsx',
          },
          null == d
            ? void 0
            : d.map((e, i) =>
                u.createElement(
                  a.so,
                  {
                    padding: 6,
                    borderRadius: 'lg',
                    key: i,
                    backgroundColor: e.metadata.theme.backgroundColor,
                    minHeight: ['unset', '330px'],
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-evenly',
                    width: '100%',
                  },
                  u.createElement(
                    a.EY,
                    {
                      color: e.metadata.theme.primaryColor,
                      size: 'lg',
                      textAlign: 'left',
                    },
                    e.eyebrow
                  ),
                  u.createElement(
                    a.EY,
                    {
                      color: e.metadata.theme.textColor,
                      fontSize: ['2xl', '5xl'],
                      maxWidth: [null, '400px'],
                      marginBottom: [4, 20],
                    },
                    e.metadata.title
                  ),
                  u.createElement(
                    'form',
                    { onSubmit: m },
                    u.createElement(
                      a.MJ,
                      { isInvalid: !!n },
                      n && u.createElement(a.Wt, null, n),
                      u.createElement(
                        a.so,
                        { gap: 3, alignItems: 'center' },
                        o
                          ? u.createElement(
                              u.Fragment,
                              null,
                              u.createElement(A.A, {
                                icon: 'CheckCircle',
                                color: 'eggplant.light',
                                weight: 'fill',
                              }),
                              u.createElement(
                                a.EY,
                                { color: 'eggplant.light', size: 'xl' },
                                o
                              )
                            )
                          : u.createElement(
                              u.Fragment,
                              null,
                              u.createElement(a.pd, {
                                placeholder: 'Type your email',
                                name: 'subscribeEmail',
                                type: 'email',
                                value: t,
                                onChange: (e) => l(e.target.value),
                                isDisabled: s,
                              }),
                              u.createElement(
                                a.$n,
                                {
                                  variant: 'primary',
                                  type: 'submit',
                                  size: 'sm',
                                  isLoading: s,
                                },
                                'Submit'
                              )
                            )
                      )
                    )
                  )
                )
              )
        );
      };
      const gl = 150;
      var hl = (e) => {
        const { 0: t, 1: l } = (0, u.useState)(gl),
          { 0: n, 1: i } = (0, u.useState)(!1),
          [o, r] = (0, Zt.Wx)();
        if (
          ((0, u.useEffect)(() => {
            if (!r || n) return;
            let e = gl;
            const t = setInterval(() => {
              e < 200 ? ((e += 5), l(e)) : (clearInterval(t), i(!0));
            }, 100);
            return () => clearInterval(t);
          }, [r, n]),
          !e || !e.weightLossSlider)
        )
          return null;
        const { weightLossSlider: s } = e;
        return u.createElement(
          a.az,
          {
            flex: 1,
            'data-element': 'Box',
            'data-component': 'WeightLossSlider',
            'data-source-file': 'WeightLossSlider.tsx',
          },
          null == s
            ? void 0
            : s.map((e, n) => {
                var i, r, s, c, d, p, g, h;
                return u.createElement(
                  a.az,
                  {
                    padding: 6,
                    borderRadius: 'lg',
                    key: n,
                    backgroundColor: e.metadata.theme.backgroundColor,
                    backgroundImage:
                      (null === (i = e.desktopImage) ||
                      void 0 === i ||
                      null === (r = i.gatsbyImageData) ||
                      void 0 === r ||
                      null === (s = r.images) ||
                      void 0 === s ||
                      null === (c = s.fallback) ||
                      void 0 === c
                        ? void 0
                        : c.src) || void 0,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: ['center 150%', 'center bottom'],
                    minHeight: ['320px', '400px'],
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-between',
                  },
                  u.createElement(
                    a.so,
                    { justifyContent: 'space-between', alignItems: 'center' },
                    u.createElement(
                      a.EY,
                      { color: e.metadata.theme.textColor, fontSize: '2xl' },
                      e.eyebrow
                    ),
                    u.createElement(
                      a.EY,
                      {
                        color: e.metadata.theme.textColor,
                        fontSize: ['2xl', '3xl'],
                      },
                      u.createElement(
                        a.EY,
                        {
                          as: 'span',
                          fontSize: ['6xl', '8xl'],
                          fontWeight: 'normal',
                          fontFamily: 'heading',
                        },
                        t
                      ),
                      'lbs'
                    )
                  ),
                  u.createElement(
                    a.Ap,
                    {
                      'aria-label': 'weight-loss-slider',
                      defaultValue: gl,
                      height: '80px',
                      top: ['-25px', '-40px'],
                      width: '94%',
                      marginX: 'auto',
                      min: gl,
                      max: 400,
                      value: t,
                      onChange: (e) => l(e),
                    },
                    u.createElement(
                      a.hB,
                      { background: e.metadata.theme.textColor },
                      u.createElement(a.hJ, {
                        background: e.metadata.theme.textColor,
                      })
                    ),
                    u.createElement(a.OQ, {
                      height: '40px',
                      width: '40px',
                      background: 'eggplant.lighter',
                      border: '4px',
                      borderColor: e.metadata.theme.textColor,
                      borderRadius: 'full',
                    })
                  ),
                  u.createElement(
                    a.so,
                    {
                      justifyContent: 'space-between',
                      alignItems: ['center', 'baseline'],
                      ref: o,
                    },
                    u.createElement(
                      a.EY,
                      {
                        color: e.metadata.theme.primaryColor,
                        fontSize: ['2xl', '3xl'],
                        fontWeight: 'medium',
                        maxWidth: ['115px', '100%'],
                      },
                      null != e &&
                        e.body &&
                        null != e &&
                        null !== (d = e.body) &&
                        void 0 !== d &&
                        d.raw
                        ? (0, m.A)(e.body)
                        : null
                    ),
                    u.createElement(
                      a.EY,
                      { color: e.metadata.theme.primaryColor, fontSize: '3xl' },
                      u.createElement(
                        a.EY,
                        {
                          as: 'span',
                          fontSize: [80, '112px'],
                          fontFamily: 'heading',
                        },
                        (
                          t *
                          ((null == e ||
                          null === (p = e.metadata) ||
                          void 0 === p ||
                          null === (g = p.context) ||
                          void 0 === g ||
                          null === (h = g.calculation) ||
                          void 0 === h
                            ? void 0
                            : h.percentage) /
                            100)
                        ).toFixed(0)
                      ),
                      'lbs'
                    )
                  )
                );
              })
        );
      };
      var xl = (e) => {
        var t, l, n;
        let {
          eyebrow: i,
          title: o,
          theme: s,
          order: c,
          cta: d,
          desktopImage: m,
          weightLossSlider: p,
          learnMoreForm: g,
        } = e;
        const { handleMdpCtaClick: h } = (0, w.A)(),
          x = () => {
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_LINK,
              data: {
                sectionHeader: o || 'No title provided',
                contentfulSection: 'InteractiveBanner',
                ctaText: (null == d ? void 0 : d.label) || 'No CTA label',
              },
            });
          };
        return u.createElement(
          r.A,
          {
            size: ['sm', 'sm', 'lg', 'xl'],
            'data-element': 'SectionContainer',
            'data-component': 'InteractiveBanner',
            'data-source-file': 'InteractiveBanner.tsx',
          },
          u.createElement(
            a.so,
            {
              background: null == s ? void 0 : s.backgroundColor,
              padding: 4,
              borderRadius: 'lg',
              display: [null, 'flex'],
              gap: 4,
              'data-element': 'Flex',
              'data-source-file': 'InteractiveBanner.tsx',
            },
            u.createElement(
              a.so,
              {
                order: c,
                flex: 1,
                flexFlow: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                marginBottom: [8, 0],
                backgroundImage:
                  null == m ||
                  null === (t = m.gatsbyImageData) ||
                  void 0 === t ||
                  null === (l = t.images) ||
                  void 0 === l ||
                  null === (n = l.fallback) ||
                  void 0 === n
                    ? void 0
                    : n.src,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: ['center 150%', 'center bottom'],
                backgroundSize: 'cover',
                borderRadius: 'lg',
                padding: [4, 6],
                'data-element': 'Flex',
                'data-source-file': 'InteractiveBanner.tsx',
              },
              i
                ? u.createElement(
                    a.EY,
                    {
                      size: 'lg',
                      color: 'viridian.base',
                      marginBottom: [2, 0],
                    },
                    i
                  )
                : null,
              o
                ? u.createElement(
                    a.DZ,
                    {
                      as: 'h2',
                      size: '2xl',
                      maxWidth: [null, '460px'],
                      marginBottom: [8, 20],
                      color: null == s ? void 0 : s.textColor,
                    },
                    o
                  )
                : null,
              d
                ? u.createElement(
                    a.$n,
                    {
                      as: v.Link,
                      size: ['wide', 'sm'],
                      to: d.url,
                      onClick: (e) => {
                        h({
                          event: e,
                          ctaUrl: (null == d ? void 0 : d.url) || '',
                        }),
                          x();
                      },
                    },
                    d.label
                  )
                : null
            ),
            p && p.length > 0
              ? u.createElement(hl, { weightLossSlider: p })
              : null,
            g && g.length > 0 ? u.createElement(pl, { learnMoreForm: g }) : null
          )
        );
      };
      var Al = l(29620),
        fl = l(21);
      var vl = (e) => {
        let {
          isModalOpen: t,
          handleClose: l,
          id: n,
          heading: i,
          content: o,
          cta: r,
          size: s,
        } = e;
        const { openHandler: c, hashId: d } = (0, U.PO)(),
          { isOpen: m, onClose: p } = (0, a.j1)({ isOpen: t, onClose: l });
        return u.createElement(
          a.aF,
          {
            isOpen: m,
            onClose: p,
            id: n,
            size: null != s ? s : 'xl',
            'data-element': 'Modal',
            'data-component': 'CustomModal',
            'data-source-file': 'CustomModal.tsx',
          },
          u.createElement(a.mH, {
            'data-element': 'ModalOverlay',
            'data-source-file': 'CustomModal.tsx',
          }),
          u.createElement(
            a.$m,
            {
              'data-element': 'ModalContent',
              'data-source-file': 'CustomModal.tsx',
            },
            u.createElement(
              a.rQ,
              {
                'data-element': 'ModalHeader',
                'data-source-file': 'CustomModal.tsx',
              },
              i
            ),
            u.createElement(a.s_, {
              'data-element': 'ModalCloseButton',
              'data-source-file': 'CustomModal.tsx',
            }),
            u.createElement(
              a.cw,
              {
                'data-element': 'ModalBody',
                'data-source-file': 'CustomModal.tsx',
              },
              o
            ),
            r &&
              u.createElement(
                a.jl,
                null,
                u.createElement(
                  a.$n,
                  {
                    onClick: () => {
                      const e = null == r ? void 0 : r.url;
                      (0, U.Fl)(e) === d
                        ? (p(), c(!0))
                        : (0, y.Rw)(e)
                        ? (0, v.navigate)(e || '')
                        : (0, v.navigate)((0, C.x)(e || ''));
                    },
                    role: 'button',
                    width: '100%',
                  },
                  null == r ? void 0 : r.label
                )
              )
          )
        );
      };
      var El = l(55047);
      function bl(e) {
        var t;
        let {
          modalSize: l = 'full',
          initialScreenContent: n,
          steps: i,
          finalScreenContent: o,
          ineligibleScreenContent: r,
          ...s
        } = e;
        const {
            isModalOpen: c,
            toggleModal: d,
            prevStep: m,
            setNumberOfSteps: p,
            currentStep: g,
            isQuizStarted: h,
            isQuizEnded: x,
            isAnswerIneligible: f,
            areControlsVisible: v,
          } = (0, El.si)(),
          { isOpen: E, onClose: b } = (0, a.j1)({ ...s, isOpen: c }),
          y = () => {
            d(!1), b();
          };
        (0, u.useEffect)(() => {
          p(i.length);
        }, [p, i.length]);
        const C = h && !x && !f,
          w = () => (h ? (f ? r : x ? o : null) : n);
        return u.createElement(
          a.aF,
          {
            isOpen: E,
            onClose: y,
            size: l,
            autoFocus: !1,
            'data-element': 'Modal',
            'data-component': 'PrePurchaseQuizModal',
            'data-source-file': 'PrePurchaseQuizModal.tsx',
          },
          u.createElement(a.mH, {
            'data-element': 'ModalOverlay',
            'data-source-file': 'PrePurchaseQuizModal.tsx',
          }),
          u.createElement(
            a.$m,
            {
              paddingBottom: C ? ['110px', null, 0] : void 0,
              backgroundColor:
                (null === (t = i[g]) || void 0 === t
                  ? void 0
                  : t.backgroundColor) || void 0,
              'data-element': 'ModalContent',
              'data-source-file': 'PrePurchaseQuizModal.tsx',
            },
            u.createElement(
              a.cw,
              {
                padding: !h || (h && x) || f ? '0' : void 0,
                'data-element': 'ModalBody',
                'data-source-file': 'PrePurchaseQuizModal.tsx',
              },
              u.createElement(
                a.az,
                {
                  display: null !== w() ? 'block' : 'none',
                  height: '100%',
                  'data-element': 'Box',
                  'data-source-file': 'PrePurchaseQuizModal.tsx',
                },
                w()
              ),
              u.createElement(
                a.az,
                {
                  display: !h || x || f ? 'none' : 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  paddingY: '4',
                  'data-element': 'Box',
                  'data-source-file': 'PrePurchaseQuizModal.tsx',
                },
                u.createElement(
                  a.mc,
                  {
                    size: ['fluid', null, null, 'xl'],
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
                    height: '100%',
                    'data-element': 'Container',
                    'data-source-file': 'PrePurchaseQuizModal.tsx',
                  },
                  u.createElement(
                    a.so,
                    {
                      flexDirection: 'column',
                      width: ['100%', null, '60%'],
                      margin: '0 auto',
                      'data-element': 'Flex',
                      'data-source-file': 'PrePurchaseQuizModal.tsx',
                    },
                    u.createElement(
                      a.so,
                      {
                        gap: '2',
                        flexDirection: 'column',
                        marginBottom: '10',
                        'data-element': 'Flex',
                        'data-source-file': 'PrePurchaseQuizModal.tsx',
                      },
                      v
                        ? u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(P, {
                              activeStepIndex: g,
                              hideIndicators: !0,
                              steps: Array.from(
                                { length: i.length },
                                (e, t) => ({ title: `${t + 1}` })
                              ),
                            }),
                            u.createElement(
                              a.so,
                              { justifyContent: 'space-between' },
                              u.createElement(a.K0, {
                                colorScheme: 'whiteCS',
                                size: 'sm',
                                'aria-label': 'previous-step',
                                icon: u.createElement(A.A, {
                                  icon: 'ArrowLeft',
                                  color: 'tints.uiGrey',
                                }),
                                onClick: m,
                                width: '40px',
                                height: '40px',
                              }),
                              u.createElement(a.K0, {
                                colorScheme: 'whiteCS',
                                size: 'sm',
                                'aria-label': 'close',
                                icon: u.createElement(A.A, {
                                  icon: 'X',
                                  color: 'tints.uiGrey',
                                }),
                                onClick: y,
                                width: '40px',
                                height: '40px',
                              })
                            )
                          )
                        : null
                    ),
                    null == i
                      ? void 0
                      : i.map((e, t) =>
                          u.createElement(
                            a.az,
                            {
                              display: g === t ? 'flex' : 'none',
                              'data-testid': `main-content-step-${t}`,
                              flexDirection: 'column',
                              key: `main-content-step-${t}`,
                              height: '100%',
                            },
                            null == e ? void 0 : e.mainContent
                          )
                        )
                  ),
                  null == i
                    ? void 0
                    : i.map(
                        (e, t) =>
                          e.rightSideContent &&
                          u.createElement(
                            a.az,
                            {
                              width: '40%',
                              display: [
                                'none',
                                null,
                                g === t ? 'block' : 'none',
                              ],
                              'data-testid': `right-side-content-${t}`,
                              key: `right-side-content-${t}`,
                            },
                            e.rightSideContent
                          )
                      )
                )
              )
            )
          )
        );
      }
      const yl = (e) => {
        const { setIsPrePurchaseQuizAvailable: t } = (0, El.si)();
        return (
          (0, u.useEffect)(() => (t(!0), () => t(!1)), [t]),
          u.createElement(
            bl,
            Object.assign({}, e, {
              'data-element': 'PrePurchaseQuizModal',
              'data-component': 'PrePurchaseQuizModalWrapper',
              'data-source-file': 'PrePurchaseQuizModal.tsx',
            })
          )
        );
      };
      var Cl = (e) => {
          let { bmi: t } = e;
          const { nextStep: l } = (0, El.si)();
          return u.createElement(
            a.az,
            {
              'data-element': 'Box',
              'data-component': 'BmiResult',
              'data-source-file': 'BmiResult.tsx',
            },
            u.createElement(
              a.so,
              {
                justifyContent: 'space-between',
                marginBottom: '8',
                'data-element': 'Flex',
                'data-source-file': 'BmiResult.tsx',
              },
              u.createElement(
                a.DZ,
                {
                  size: '3xl',
                  color: 'eggplant.light',
                  'data-element': 'Heading',
                  'data-source-file': 'BmiResult.tsx',
                },
                'BMI'
              ),
              u.createElement(
                a.DZ,
                {
                  size: '3xl',
                  color: 'eggplant.base',
                  'data-element': 'Heading',
                  'data-source-file': 'BmiResult.tsx',
                },
                t
              )
            ),
            u.createElement(
              a.so,
              {
                marginBottom: '3',
                'data-element': 'Flex',
                'data-source-file': 'BmiResult.tsx',
              },
              u.createElement(A.A, {
                icon: 'CaretCircleUp',
                color: 'eggplant.light',
                weight: 'fill',
                marginRight: '1',
                'data-element': 'DynamicIcon',
                'data-source-file': 'BmiResult.tsx',
              }),
              u.createElement(
                a.EY,
                {
                  color: 'tints.darkGrey',
                  'data-element': 'Text',
                  'data-source-file': 'BmiResult.tsx',
                },
                t > ya.OVERWEIGHT
                  ? 'Above healthy weight'
                  : 'Slightly above healthy weight'
              )
            ),
            u.createElement(
              a.DZ,
              {
                size: '2xl',
                marginBottom: '8',
                color: 'tints.black',
                'data-element': 'Heading',
                'data-source-file': 'BmiResult.tsx',
              },
              'Losing',
              ' ',
              u.createElement(
                a.EY,
                {
                  color: 'eggplant.light',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  as: 'span',
                  'data-element': 'Text',
                  'data-source-file': 'BmiResult.tsx',
                },
                'just 5%'
              ),
              ' ',
              'of your body weight can seriously reduce the chance of heart disease.'
            ),
            u.createElement(
              Me.A,
              {
                type: 'fixed',
                'data-element': 'StickyFooter',
                'data-source-file': 'BmiResult.tsx',
              },
              u.createElement(
                a.mc,
                {
                  size: ['sm', 'sm', 'fluid'],
                  paddingTop: '6',
                  paddingBottom: [6, null, 0],
                  'data-element': 'Container',
                  'data-source-file': 'BmiResult.tsx',
                },
                u.createElement(
                  a.$n,
                  {
                    onClick: () => l(),
                    width: ['100%', null, 'fit-content'],
                    'data-element': 'Button',
                    'data-source-file': 'BmiResult.tsx',
                  },
                  'Next'
                )
              )
            )
          );
        },
        wl =
          l.p +
          'static/mobile-ppq-modal-images-6b71adf66556653745d6cfece913063c.png',
        Sl =
          l.p + 'static/ppq-modal-images-340a4efb0d12d3e412c5bbcfd99f0454.png';
      var kl = function (e) {
          const {
              toggleModal: t,
              resetState: l,
              personalData: n,
              weightData: i,
              bmi: o,
              questionsAndAnswers: r,
            } = (0, El.si)(),
            {
              register: s,
              watch: c,
              handleSubmit: d,
              formState: m,
              errors: p,
            } = (0, Ne.xW)(),
            { isSubmitting: g } = m,
            h = c('email');
          (0, u.useEffect)(() => {
            E.Ay.track({
              event: b.r.EVENTS.VIEWED_COMPONENT,
              data: {
                label: b.r.PRE_PURCHASE_QUIZ.LABEL,
                step: b.r.PRE_PURCHASE_QUIZ.STEPS.YOU_ARE_ELIGIBLE,
              },
            });
          }, []);
          const x = () => {
            E.Ay.track({
              event: b.r.EVENTS.CLICKED_BUTTON,
              data: {
                label: b.r.PRE_PURCHASE_QUIZ.LABEL,
                step: b.r.PRE_PURCHASE_QUIZ.STEPS.YOU_ARE_ELIGIBLE,
                cta: 'Join Weight Care+',
              },
            });
          };
          return u.createElement(
            a.az,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: ['flex-end', null, 'center'],
              backgroundColor: 'eggplant.base',
              textAlign: 'center',
              height: '100vh',
              position: 'relative',
              paddingTop: [5, null, 0],
              'data-element': 'Box',
              'data-component': 'YouAreEligible',
              'data-source-file': 'YouAreEligible.tsx',
            },
            u.createElement(a.K0, {
              colorScheme: 'whiteCS',
              size: 'sm',
              'aria-label': 'close',
              icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
              onClick: () => {
                t(!1), l();
              },
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '20px',
              right: ['24px', null, '70px'],
              'data-element': 'IconButton',
              'data-source-file': 'YouAreEligible.tsx',
            }),
            u.createElement(
              a.az,
              {
                maxWidth: [null, '600px'],
                paddingX: '5',
                'data-element': 'Box',
                'data-source-file': 'YouAreEligible.tsx',
              },
              u.createElement(a.In, {
                as: Le.r,
                color: 'eggplant.lighter',
                boxSize: '36px',
                weight: 'fill',
                'data-element': 'Icon',
                'data-source-file': 'YouAreEligible.tsx',
              }),
              u.createElement(
                a.DZ,
                {
                  as: 'h1',
                  size: 'xl',
                  color: 'eggplant.wash',
                  opacity: '0.6',
                  marginBottom: '1',
                  'data-element': 'Heading',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                'Congrats, ',
                null == n ? void 0 : n.personalData.firstName,
                '!'
              ),
              u.createElement(
                a.DZ,
                {
                  as: 'h2',
                  size: 'xl',
                  color: 'tints.white',
                  marginBottom: ['8', '10'],
                  'data-element': 'Heading',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                "You're eligible for the program!"
              ),
              u.createElement(
                a.EY,
                {
                  color: 'tints.white',
                  marginBottom: ['1', '2'],
                  'data-element': 'Text',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                'Enter your email to stay in touch and to get started with Weight Care+'
              ),
              u.createElement(Oe.A, {
                register: s,
                placeholder: 'janesmith@email.com',
                errors: p,
                'data-element': 'EmailField',
                'data-source-file': 'YouAreEligible.tsx',
              }),
              u.createElement(
                a.$n,
                {
                  variant: 'primary',
                  size: ['wide', 'md'],
                  colorScheme: 'whiteCS',
                  marginTop: ['8', '10'],
                  marginBottom: 8,
                  onClick: d(async () => {
                    const e = [];
                    if (n) {
                      const t = Object.entries(n.personalData).map((e) => {
                        let [t, l] = e;
                        return { question: t, answer: l };
                      });
                      e.push(...t);
                    }
                    if (i) {
                      const t = Object.entries(i).map((e) => {
                        let [t, l] = e;
                        return { question: t, answer: l };
                      });
                      e.push(...t);
                    }
                    o && e.push({ question: 'BMI', answer: o.toString() }),
                      r && e.push(...r);
                    try {
                      await (0, M.M)({
                        event_type: 'newsletter-subscription',
                        resource: {
                          email: h,
                          data_fields: {
                            quiz: e,
                            newsletter: 'wc-plus-pre-purchase-quiz',
                          },
                        },
                      }),
                        x(),
                        sessionStorage.setItem(
                          'wcPlusSignupFirstName',
                          JSON.stringify(
                            null == n ? void 0 : n.personalData.firstName
                          )
                        ),
                        sessionStorage.setItem(
                          'wcPlusSignupLastName',
                          JSON.stringify(
                            null == n ? void 0 : n.personalData.lastName
                          )
                        ),
                        sessionStorage.setItem('wcPlusSignupEmail', h),
                        (0, v.navigate)('/wcplus-checkout/');
                    } catch (t) {
                      (0, H.SD)(
                        'alert-error',
                        'Weâ€™re sorry! There is an error processing your request at the moment. Please try again later'
                      );
                    }
                  }),
                  isDisabled: !h,
                  isLoading: g,
                  position: 'relative',
                  zIndex: '5',
                  'data-element': 'Button',
                  'data-source-file': 'YouAreEligible.tsx',
                },
                'Join Weight Care+'
              )
            ),
            u.createElement(a._V, {
              src: wl,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['block', null, 'none'],
              maxWidth: '100%',
              'data-element': 'Image',
              'data-source-file': 'YouAreEligible.tsx',
            }),
            u.createElement(a._V, {
              src: Sl,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['none', null, 'block'],
              maxWidth: '850px',
              position: 'absolute',
              bottom: '0',
              'data-element': 'Image',
              'data-source-file': 'YouAreEligible.tsx',
            })
          );
        },
        Il = l(81178);
      const zl = new Map([
        [
          'bold',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z',
            })
          ),
        ],
        [
          'duotone',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z',
              opacity: '0.2',
            }),
            u.createElement('path', {
              d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z',
            })
          ),
        ],
        [
          'fill',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z',
            })
          ),
        ],
        [
          'light',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z',
            })
          ),
        ],
        [
          'regular',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z',
            })
          ),
        ],
        [
          'thin',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z',
            })
          ),
        ],
      ]);
      var Bl = Object.defineProperty,
        Dl = Object.defineProperties,
        Pl = Object.getOwnPropertyDescriptors,
        Tl = Object.getOwnPropertySymbols,
        Ml = Object.prototype.hasOwnProperty,
        Nl = Object.prototype.propertyIsEnumerable,
        Fl = (e, t, l) =>
          t in e
            ? Bl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Ll = (0, u.forwardRef)((e, t) =>
        u.createElement(
          Il.A,
          ((e, t) => Dl(e, Pl(t)))(
            ((e, t) => {
              for (var l in t || (t = {})) Ml.call(t, l) && Fl(e, l, t[l]);
              if (Tl) for (var l of Tl(t)) Nl.call(t, l) && Fl(e, l, t[l]);
              return e;
            })({ ref: t }, e),
            { weights: zl }
          )
        )
      );
      Ll.displayName = 'Circle';
      const Ol = new Map([
        [
          'bold',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M240.49,83.51l-60-60a12,12,0,0,0-17,0L34.28,152.75a48.77,48.77,0,0,0,69,69L214.48,110.49l21.31-7.11a12,12,0,0,0,4.7-19.87ZM86.28,204.75a24.77,24.77,0,0,1-35-35l28.13-28.13c7.73-2.41,19.58-3,35.06,5a83.94,83.94,0,0,0,21.95,8ZM204.2,88.62a12.15,12.15,0,0,0-4.69,2.89l-38.89,38.9c-7.73,2.41-19.58,3-35.06-5a83.94,83.94,0,0,0-21.94-8L172,49l37.79,37.79Z',
            })
          ),
        ],
        [
          'duotone',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M167.18,140.82,94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52l30-30c9.37-3.65,25.78-6.36,47.18,4.82S157.81,144.47,167.18,140.82Z',
              opacity: '0.2',
            }),
            u.createElement('path', {
              d: 'M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z',
            })
          ),
        ],
        [
          'fill',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25Zm-32.19,6.07a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z',
            })
          ),
        ],
        [
          'light',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M236.24,87.76l-60-60a6,6,0,0,0-8.48,0L38.53,157A42.77,42.77,0,1,0,99,217.47L211.24,105.24l22.66-7.55a6,6,0,0,0,2.34-9.93ZM90.53,209A30.77,30.77,0,1,1,47,165.47l29.13-29.12c8.84-3.14,22.84-4.56,41.08,5,12.28,6.41,23.13,8.66,32.27,8.71ZM206.1,94.31a6,6,0,0,0-2.34,1.45l-39.9,39.89c-8.84,3.14-22.84,4.56-41.08-5C110.5,124.27,99.65,122,90.51,122L172,40.49l48.89,48.89Z',
            })
          ),
        ],
        [
          'regular',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z',
            })
          ),
        ],
        [
          'thin',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M234.83,89.18l-60-60a4,4,0,0,0-5.66,0L39.94,158.41A40.78,40.78,0,0,0,97.6,216.08L210.16,103.5l23.1-7.7a4,4,0,0,0,1.57-6.62ZM91.94,210.42A32.77,32.77,0,1,1,45.6,164.07L75,134.63c9.2-3.38,23.94-5.08,43.11,4.93,12.09,6.31,22.74,8.48,31.66,8.48,1.64,0,3.2-.09,4.73-.22ZM206.74,96.21a4.06,4.06,0,0,0-1.57,1L165,137.39c-9.2,3.38-23.94,5.08-43.11-4.93-14.3-7.47-26.58-9.13-36.38-8.27L172,37.66l52.6,52.6Z',
            })
          ),
        ],
      ]);
      var Ql = Object.defineProperty,
        Hl = Object.defineProperties,
        Rl = Object.getOwnPropertyDescriptors,
        Vl = Object.getOwnPropertySymbols,
        Yl = Object.prototype.hasOwnProperty,
        jl = Object.prototype.propertyIsEnumerable,
        Zl = (e, t, l) =>
          t in e
            ? Ql(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Gl = (0, u.forwardRef)((e, t) =>
        u.createElement(
          Il.A,
          ((e, t) => Hl(e, Rl(t)))(
            ((e, t) => {
              for (var l in t || (t = {})) Yl.call(t, l) && Zl(e, l, t[l]);
              if (Vl) for (var l of Vl(t)) jl.call(t, l) && Zl(e, l, t[l]);
              return e;
            })({ ref: t }, e),
            { weights: Ol }
          )
        )
      );
      Gl.displayName = 'TestTube';
      const Wl = new Map([
        [
          'bold',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M248,160a40,40,0,1,0-52.64,37.94A28,28,0,0,1,168,220H144a28,28,0,0,1-28-28V154.9c31.73-5.78,56-34.09,56-67.73V40a12,12,0,0,0-12-12H136a12,12,0,0,0,0,24h12V87.17c0,24.4-19.47,44.52-43.41,44.83A44,44,0,0,1,60,88V52H72a12,12,0,0,0,0-24H48A12,12,0,0,0,36,40V88a68,68,0,0,0,56,66.93V192a52.06,52.06,0,0,0,52,52h24a52.06,52.06,0,0,0,51.61-45.72A40.08,40.08,0,0,0,248,160Zm-40,16a16,16,0,1,1,16-16A16,16,0,0,1,208,176Z',
            })
          ),
        ],
        [
          'duotone',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z',
              opacity: '0.2',
            }),
            u.createElement('path', {
              d: 'M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z',
            })
          ),
        ],
        [
          'fill',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M240,160a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H144a32,32,0,0,1-32-32V151.48c31.47-4,56-31.47,56-64.31V40a8,8,0,0,0-8-8H136a8,8,0,0,0,0,16h16V87.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,56,88V48H72a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V88a64,64,0,0,0,56,63.49V192a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,240,160Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,208,168Z',
            })
          ),
        ],
        [
          'light',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M218,160a10,10,0,1,1-10-10A10,10,0,0,1,218,160Zm-4.35,37.58A46.05,46.05,0,0,1,168,238H144a46.06,46.06,0,0,1-46-46V149.71A62,62,0,0,1,42,88V40a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H54V88a50,50,0,0,0,50,50h.67c27.2-.36,49.33-23.16,49.33-50.83V46H136a6,6,0,0,1,0-12h24a6,6,0,0,1,6,6V87.17c0,32.43-24.68,59.44-56,62.52V192a34,34,0,0,0,34,34h24a34.05,34.05,0,0,0,33.56-28.56,38,38,0,1,1,12.09.14ZM234,160a26,26,0,1,0-26,26A26,26,0,0,0,234,160Z',
            })
          ),
        ],
        [
          'regular',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z',
            })
          ),
        ],
        [
          'thin',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M216,160a8,8,0,1,1-8-8A8,8,0,0,1,216,160Zm-4.17,35.79A44.06,44.06,0,0,1,168,236H144a44.05,44.05,0,0,1-44-44V147.85A60,60,0,0,1,44,88V40a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H52V88a52,52,0,0,0,52.69,52C133,139.63,156,115.93,156,87.17V44H136a4,4,0,0,1,0-8h24a4,4,0,0,1,4,4V87.17c0,32-24.84,58.59-56,60.69V192a36,36,0,0,0,36,36h24a36.05,36.05,0,0,0,35.8-32.25,36,36,0,1,1,8,0ZM236,160a28,28,0,1,0-28,28A28,28,0,0,0,236,160Z',
            })
          ),
        ],
      ]);
      var ql = Object.defineProperty,
        Ul = Object.defineProperties,
        Kl = Object.getOwnPropertyDescriptors,
        Jl = Object.getOwnPropertySymbols,
        _l = Object.prototype.hasOwnProperty,
        Xl = Object.prototype.propertyIsEnumerable,
        $l = (e, t, l) =>
          t in e
            ? ql(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const ea = (0, u.forwardRef)((e, t) =>
        u.createElement(
          Il.A,
          ((e, t) => Ul(e, Kl(t)))(
            ((e, t) => {
              for (var l in t || (t = {})) _l.call(t, l) && $l(e, l, t[l]);
              if (Jl) for (var l of Jl(t)) Xl.call(t, l) && $l(e, l, t[l]);
              return e;
            })({ ref: t }, e),
            { weights: Wl }
          )
        )
      );
      ea.displayName = 'Stethoscope';
      const ta = new Map([
        [
          'bold',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12Zm4,204a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM164,64a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,64Z',
            })
          ),
        ],
        [
          'duotone',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z',
              opacity: '0.2',
            }),
            u.createElement('path', {
              d: 'M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z',
            })
          ),
        ],
        [
          'fill',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z',
            })
          ),
        ],
        [
          'light',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18Zm10,198a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V40A10,10,0,0,1,80,30h96a10,10,0,0,1,10,10ZM166,56a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,56Z',
            })
          ),
        ],
        [
          'regular',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z',
            })
          ),
        ],
        [
          'thin',
          u.createElement(
            u.Fragment,
            null,
            u.createElement('path', {
              d: 'M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20Zm12,196a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V40A12,12,0,0,1,80,28h96a12,12,0,0,1,12,12ZM164,56a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,56Z',
            })
          ),
        ],
      ]);
      var la = Object.defineProperty,
        aa = Object.defineProperties,
        na = Object.getOwnPropertyDescriptors,
        ia = Object.getOwnPropertySymbols,
        oa = Object.prototype.hasOwnProperty,
        ra = Object.prototype.propertyIsEnumerable,
        sa = (e, t, l) =>
          t in e
            ? la(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const ca = (0, u.forwardRef)((e, t) =>
        u.createElement(
          Il.A,
          ((e, t) => aa(e, na(t)))(
            ((e, t) => {
              for (var l in t || (t = {})) oa.call(t, l) && sa(e, l, t[l]);
              if (ia) for (var l of ia(t)) ra.call(t, l) && sa(e, l, t[l]);
              return e;
            })({ ref: t }, e),
            { weights: ta }
          )
        )
      );
      ca.displayName = 'DeviceMobileSpeaker';
      var da = function (e) {
        const { firstName: t } = e,
          {
            toggleModal: l,
            resetState: n,
            prevStep: i,
            setIsAnswerIneligible: o,
            currentStep: r,
            resetWeightData: s,
          } = (0, El.si)();
        return u.createElement(
          a.az,
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'sky.dark',
            justifyContent: ['flex-end', null, 'center'],
            textAlign: 'center',
            height: '100vh',
            position: 'relative',
            paddingTop: [5, null, 0],
            'data-element': 'Box',
            'data-component': 'YouAreNotEligible',
            'data-source-file': 'YouAreNotEligible.tsx',
          },
          u.createElement(a.K0, {
            colorScheme: 'whiteCS',
            size: 'sm',
            'aria-label': 'previous-step',
            icon: u.createElement(A.A, {
              icon: 'ArrowLeft',
              color: 'tints.uiGrey',
            }),
            onClick: () => {
              2 === r && s(), o(!1), i();
            },
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: '20px',
            left: ['24px', null, '70px'],
            'data-element': 'IconButton',
            'data-source-file': 'YouAreNotEligible.tsx',
          }),
          u.createElement(a.K0, {
            colorScheme: 'whiteCS',
            size: 'sm',
            'aria-label': 'close',
            icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
            onClick: () => {
              l(!1), n();
            },
            width: '40px',
            height: '40px',
            position: 'absolute',
            top: '20px',
            right: ['24px', null, '70px'],
            'data-element': 'IconButton',
            'data-source-file': 'YouAreNotEligible.tsx',
          }),
          u.createElement(
            a.az,
            {
              paddingX: '5',
              'data-element': 'Box',
              'data-source-file': 'YouAreNotEligible.tsx',
            },
            u.createElement(
              a.DZ,
              {
                as: 'h1',
                size: 'xl',
                color: 'violet.wash',
                opacity: '0.6',
                marginBottom: '1',
                'data-element': 'Heading',
                'data-source-file': 'YouAreNotEligible.tsx',
              },
              'Weâ€™re sorry ',
              t,
              ','
            ),
            u.createElement(
              a.DZ,
              {
                as: 'h2',
                size: 'xl',
                color: 'tints.white',
                marginBottom: ['8', '10'],
                maxWidth: ['100%', '650px'],
                'data-element': 'Heading',
                'data-source-file': 'YouAreNotEligible.tsx',
              },
              'youâ€™re not eligible for this program. You might want to explore Everlywell+'
            ),
            u.createElement(
              a.B8,
              {
                color: 'tints.white',
                marginBottom: ['8', '10'],
                textAlign: 'left',
                'data-element': 'List',
                'data-source-file': 'YouAreNotEligible.tsx',
              },
              u.createElement(
                a.ck,
                {
                  marginBottom: ['5', '6'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '8',
                  'data-element': 'ListItem',
                  'data-source-file': 'YouAreNotEligible.tsx',
                },
                u.createElement(a.kp, {
                  as: Ll,
                  color: 'tints.white',
                  weight: 'fill',
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  zIndex: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(a.kp, {
                  as: Gl,
                  color: 'tints.black',
                  position: 'relative',
                  zIndex: '1',
                  width: '20px',
                  height: '20px',
                  right: '-10px',
                  top: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(
                  a.EY,
                  {
                    'data-element': 'Text',
                    'data-source-file': 'YouAreNotEligible.tsx',
                  },
                  '1 credit to redeem on Everlywell test kits per month'
                )
              ),
              u.createElement(
                a.ck,
                {
                  marginBottom: ['5', '6'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '8',
                  'data-element': 'ListItem',
                  'data-source-file': 'YouAreNotEligible.tsx',
                },
                u.createElement(a.kp, {
                  as: Ll,
                  color: 'tints.white',
                  weight: 'fill',
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  zIndex: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(a.kp, {
                  as: ea,
                  color: 'tints.black',
                  position: 'relative',
                  zIndex: '1',
                  width: '20px',
                  height: '20px',
                  right: '-10px',
                  top: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(
                  a.EY,
                  {
                    'data-element': 'Text',
                    'data-source-file': 'YouAreNotEligible.tsx',
                  },
                  'One virtual consultation with a doctor each month'
                )
              ),
              u.createElement(
                a.ck,
                {
                  marginBottom: ['5', '6'],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '8',
                  'data-element': 'ListItem',
                  'data-source-file': 'YouAreNotEligible.tsx',
                },
                u.createElement(a.kp, {
                  as: Ll,
                  color: 'tints.white',
                  weight: 'fill',
                  width: '40px',
                  height: '40px',
                  position: 'absolute',
                  zIndex: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(a.kp, {
                  as: ca,
                  color: 'tints.black',
                  position: 'relative',
                  zIndex: '1',
                  width: '20px',
                  height: '20px',
                  right: '-10px',
                  top: '0',
                  'data-element': 'ListIcon',
                  'data-source-file': 'YouAreNotEligible.tsx',
                }),
                u.createElement(
                  a.EY,
                  {
                    'data-element': 'Text',
                    'data-source-file': 'YouAreNotEligible.tsx',
                  },
                  'Access to the Everlywell App to monitor your progress and manage your membership'
                )
              )
            ),
            u.createElement(
              a.$n,
              {
                variant: 'primary',
                size: ['wide', 'md'],
                colorScheme: 'whiteCS',
                as: v.Link,
                to: '/monthly-at-home-lab-testing-membership/',
                position: 'relative',
                zIndex: '5',
                'data-element': 'Button',
                'data-source-file': 'YouAreNotEligible.tsx',
              },
              'Explore Everlywell+'
            )
          ),
          u.createElement(a._V, {
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAACwCAMAAAA8CjnTAAAAPFBMVEUAAAD/a2L/aGD/amL/a2L/cGD/a2L/amD/a2L/amL/aWL/a2L/amH/amL/ZmD/a2L/a2P/amP/amH/a2IIx28QAAAAE3RSTlMA3yBgnxDvQL9/cI+QUDCAz6+wWMbfugAABaBJREFUeNrs2NFqAjEQheHMJOsarcVy3v9di2AshVZ0XXfm4v/uc/WTHEgBAAAAAAAAAAAAcJd7QbymXhBtlmS1IJbpwj4LAlVdNSYijptuOiGidA1MRBzXb3Yq2F7TwETEcUmECGf6ix0KNlSlH2x1FNO/9rxMW+kamIg4vtNdO378ttA0MBFxXA8wXqY322tgIuJUPapPBe9iGpiIOAc9w+aCN3DTwETEaXrakRBrc90wEY9LcBkuCtZ0EhkSMDIkUEWGeG5kSKCLDPFcZEigkSGBT5EhASNDAlVkSMDIkEAXGeK5yJBAI0MCLjIkcCZDAlVkSMDIkEAXGeK5kSGBJjLEc5EhgS8yJFBFhgSMDAlUkSGeGxkSOIoM8VxkSKCRIYFZZEjAyLASn8piVWRYwXQ6mublx40ML5v7XhcfZakuMrxkOrSdrs5lIRcZvtk7FyS3QSCIAhL64N96+/53TexKimRtC7VswdTAO4G33srdnlHBdvx4sPgXv7WsNg1bOYdpwA+68g9DTRp81w94Qm82YZuGbYH8gmFjWW0aOFy4DlhgLP4wqNdwD+QEl01ltWmgAjnNZGicbRrIQE7jN5TVpoEM5DQnvqw2DWwgpzkakmvTkAxkHkuX1aYhHcg8zlDYpmFFIPME8mFoGp4wHia8x8SV1abhMZCnAW8zeK6sNg1EIBOMXFltGoifBgRH7mFoGohAJvjiDjVsGvx4+MLn8VxZrVsDEcgkHVdW69Vwf5tlN3qurFaqgQxknoFbM1SoIQbynoxUWa1MQwzkvQlUWa1JQwzkDEzUoYa1aIiBnAvPlNUqNMRAzsjIlFX1GuLrpZk5Mg+Dag1xVlcAy5RVvRpiIBfCERd96tQQfxoUJBBlVaGGWyBL4Jv45aZMgwvX8o/BHwbiok9FGu6BLImRKKs7aTiZFch4m2U3LkRZ3UdDl7oCTl0gc/OMgH2JsvNdJB0gFE+sGfbQ0K27JVTAtR+70mUuq5EfsucsIkR+JS2s4Bz25ofsxYgQd+7KpxmKfd4oO32RtLCD0XbgXOrjPsjOEREeQgnZy2rUMOa/0VvG9OKRqdSz+yA7S0QcIZPBZy2rkSh7hQh5p3LR8POMAzKwIPvqzH/UUFmPWctqxMyILEVEHeFgC5VrgyXsbCJVzDNcma/PqGFVREg7v/TjBKKsZtQAfDkTkXdm44f5JspqTg0xIuqorGX+WwzWMHvzYU4Qyki8E5NZQ4wI/fOMC5FgeTXEiV8FlXUqMAmOGrJHxAVC8SXqnAHBwVUwz+iIiz7LaIDt9M8z+hJbEQOQIqpZwVnkw4Cld3Ws4GYsUF7DTYTqyhpWrBkkaIANEq663otpxXemCA2A7RTPM3y6rArRAExObWUd04caitHwfkR4qZX1mO4PgjRgmHXOM2y6rErSANhO5wquQwJZGgB7VriCO1gkkKYB6J26FZxFCnkagNlpq6yuxzISNcB26lZwZ4slRGoA7EnVPOO2gutkj/ZeRoSiyjqlNlNiNdxEaFvBvY4IwRpgOzXzjL9/iZvwFMkabiKUrOCO5s7LiJCtAZicrhXcb8IzEcI1AL3TsIJzJvIsIsRrgJ0VVNZgzKII+Rp+dWcGuQ0DMRCTtGs4bps6Af//1wK9GGji7QI5MfwCDxKGkO1NElycngiDBsiy7xlLDEU4NEAv98u6xl/qiwOLBtgWeYI7eDwRHg1kE+8ZGc9YE34RaYBcvQluiYPHE6HSAL2sCa7Fc5YdQKYBPsuZ4HqcUR10GsjmfFnjnLr5NEA2Z4Ib0NKnAe7l2zP2GLKnTwP0sr2slxhTXaiB3JwJbkDdfRogm2vPuMa/tPRpgFs5E9xQhE8D9PIkuIwZqgs1wObZMyomRQg1kM3ysn7EJNf0aYD8duwZl5impU8D9FLsGUtMUzsv8ANDSjl0lmTRVgAAAABJRU5ErkJggg==',
            alt: 'Image of a orange hexagon pattern',
            display: ['block', null, 'none'],
            maxWidth: '100%',
            'data-element': 'Image',
            'data-source-file': 'YouAreNotEligible.tsx',
          }),
          u.createElement(a._V, {
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAAE6CAMAAACI1B/pAAAAPFBMVEUAAAD/aGD/a2L/amL/a2L/amL/a2L/a2L/cGD/aWL/aGD/bGD/a2L/amH/ZmD/a2P/amH/amL/amH/a2LruAedAAAAE3RSTlMAIN9gn3+/7xBwQECPkDDPUK+gvmnNiQAADSBJREFUeNrs2kGKAkEQRNGqarsZBxcDcf+7jiCiiIiLzN17h/gkQQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAdsc2APpsydIZoM/K1TEHQItzbk46A3SYK3cXnQHqXfKwzgOg1swTMzBQ7pQX63cA9JwyZmCg3JHoDNBny3trHwAFVh7MwEC5LR+svwFQ9ZBnngEa7El0Bmgz84X9ZwAUPOSZgYFqM4nO8M/OvaQ2DARBAEXyL5iQEOr+dw0hi3iRhSSPcLv93iGanpqmYD/nLKJ8Bhjwiy0GBoabs87JnAG2rTLiGWAHb3NizgD7OWWTT88mYJHpkj9iYGC4YxJzBtjNlNV0kANbVxkxMDDaNavpIAc2HeSJZ4AdHJKYM8CNiquMDnJg0UGeGBgYbZqzlg5yYNMvtngG+FXoIM+cAcavMjrIgRU+ckMMDPyo+YttzgCDDvJ0kAMlVhkxMLBtldFBDtx7kCeeAUZ5zz/MGaDyQZ4OcmDhQZ4YGHiaVcacgRd1zlo6yIFSv9hiYHhtc9bSQQ6UXmXEM/BSFh/kmTPAw8t+dZAD9/5ii4GBugd5OsjhFU15OPEMtPaVAswZ6OuQGnSQQ1dzihADQ09VVhlzBroqs8roIIeeTilGDAy9TJeUo4McOjmmIPEM9FHgIM+cgdZKrjI6yKGPawoTA0MDtX6xzRlop9JBnvIZ6Kj4KiMGhmdX7iBPBzn0Mj3BKiOe4Zude9FtGgiiAOoWsJ1gpUT7//9KFRCF1o8NqqKd2XM+YvfqzmiIrN0ptncGUmh1IU8NDFkEijJqYIjoUqJxgxxiiVL9/u2qnoE4ml/IUwNDcBGjjOMzEEjQKKMGhijCLOR5ZyCopcTmBjk0LtRCnhoYAgq2kKcGhmgSRBn1DDRtLEl4Z6BNgafYH7xcBqA5oafYamBoX6Yo452BBsVeyHN8BtoX49ivGhjCSjLFdoMcmpViIU89A+3KGmW8M9CKa8lsUgPDfzDFVgNDIPmm2N4ZaEr6KOMGOdxLlFEDQyQpF/Icn4F2PE2lH+oZqGMhzzsDcaReyHODHBrQWZRRA8OjnUuXFu8M7DDFVs9AHH0s5Hln4A6izOd5doMc1ljIUwNDHAmP/XpnoCk9TrHdIKdjVZ+qhbxXamC433xensv34ZAo84cb5FDv6TRO5dWjo/uloJ4hv1uI+W0cKphi/+KdgRrzLcS8mYdDFvL+5QY5bDsvL+WdoxZSlPlADQxbIeY6rYX2YZco8553Bladv41l3TQcspC3wg1yeDN/+TqVTY+cZS8FNTDp3ELMrsP+0ULeFjfI6d5+iKmbZVvI26aeoXP7IaZuli3K7PHO0LNbiKl2Gh5jLLhBTgqX01juch02mWIfUwPTl/nHMpVj9bNsC3l13CCnDz/ZuxfcRoEgCMNjG4cJThws7n/XSBYoygNCm7Go7vm/K2Q3qqVqeg+LIcbeZRNl1uLzDGowPoB8zHuawSBvFX7PIL77FYcNPtIMjv1acIMcQS2HGJkumxabz8DwaTnEKHXZDPL4PQN/1ocYgfkvUYYb5PBmPEVVSpvTc90G8BkYjtxPUc2R7LJpsblBDj/y6dYOs1S7bFpsPs/AiekBZHnH9ANRRgi/Z2D2/AeQdof0HVFGCTfI8Qc3IWa2y2aQp6RJwDeuQszzu+xDO0A5aqJyyyHGR5fNIO9/MkdTUZnc/xtiPHTZDPI2OxJlYFD2FJWLLpsosxnTPBSXu3WnqFx02d0A0R8NqmV4AOniAyMtNlEGSh54AKneZTPIu1O//oNKPBRi5LtsooxqyERtcve2+1/Hry6bQZ4SBnkIEGL+6LI59quDKIOtBELMry6bFlsIUQab5NebRIj5UZgyyBPCIA9ap6jksjlRRrT5QwXyqVEKMc/6E30dIJcvUYXurPq/0pfusuXCmj8M8hAlxExySgzylBBlECbETPqUGOQpuSQgSogZvRNlpNBiI1CIGbUM8qTQYmOV3L85CDGTK28LhBBloHiKSufyI4M8BnmY4fwUlU6XzSBP6Fc+QlJ5AGmWiTIqaLGhfcVh9xWYs38pKmKQh2ghZtTQYosgyiBciBm1DPJE9AkIFmImF6KMBFps6J6iUig2GOQxyENKcU9RKXTZDPKIMiinO4e7bpBpsQUQZeDoAaTZiUHe/hjkwdMDSLOGKLO7Y06oXNAQU6rLvg3YPU/CtbghplCX3Q9gkAdCzKIzgzwzogyKuIYPMaMXBnkmYj8AeOXrFNVWmShjRouNTQ7eTlFtdWKQZ6ZU8sGZCA8gzRreFpgQZcADSKuWQZ6R0Md3OFJliJlcGOQZcewXhBibM1HGQuajGLyoOsSMPtJjuk/27gA5USCIwjCgwiBi4vb977plrcmaaOChg5np+b8jUMXk2a+ZGFjIw4xQeIj5EGixZUQZLLA/uLvF4VE9C3myJFIkcuDsKqpnnYgyOlps8AHkq7rs3sBCHor9AHKxgYU8CVEGhJhHjbTYEqIMCDGPaljI07CQB0LMo2qizMv1Vbm2zk5YQoyiJ8ooWMiLY2Pm65z5Y4h/kxKrRizkPfsp/87ROcPumKILPNQZRJloDpdH4OegDQbBwEKeIoEP4fNXm5m3c4bBr2IkysyjxRbpzUHr5GcTl0YqGhby5rGQJ9KbAy9j4MEgqDm3pxFl1vpxcfBwzlBkK3pa7Gks5MWuY1yNZ+iyFS0LeXMSuJ3QgcbM4znD/1hVdIEoM4kWe9XNkuZYZY0uWzLQ2U1iIU+kNweuxsC8F4qRFvsnRJmoja/Pc4b7lhQNC3kv8l4Vq7ZJTcYDq6NBUBNlJtFiS/TmwNkYmC47VpcdiDIs5D2uVjL1vsrTaJjXspB3H1EmlpN9cDieYf1X0QVa7HuIMjFbbL/nTOAnk2JgIe9HLORF0Jiqy/Ex0WUrRqLM6ppQFWtjVxyOgemyFR1R5j4W8mJFGdfnDH+EJUc+1biHhbxfuoLllNl4hgJW0fMQbxBlIqk7+8/nGJguW9GykLeutirX1hbL7Q5yumxJIMrcosWOPLRwO56hy5a8s5B3g4W8WFHG/zlDl60Yuez3K6JMJHtbLMM7yOmyFR0t9jcs5KVRv+QxBqbLlgw8v++47DeN/72YxR3kBH7FjihzjRY7obcvh/EMXfYzVevewELeUwt5RZwzdNmSQBL8RJRZJGpzkOkd5HTZkg0Leet4q8q1tSu+x8B02YotUeYKLXaCzUvS5wxdtqLj0V1hIS+1KJP6HeR0sZKBhbx/iDLpXu6f8BiYd0Wxo8W+IMok/N4lewc5XbaiJQResJCXykJeTuMZumxJIMpE11flauxTEecMXbZiQ5Q5YyEv7Shz1u0SvEX5ZFg+QngzsJD3+wt5uYyBKWQVHQt5RpSJ5WA3nJ8zwSAYaOZiP9Bi1SZxdfkM4V+xI8qc0WInuJCXwxiYLlvRspB3xkJeHlEmuTvI6bIlgct+iTKZfTuY0niGLluxocX+294ZICUMxUA0rUCLtYD2/nfVcT4z6LTTFDQk+e8dQW3Y7i4rhTzvKbbjO/MxwTo7CnlfMPbruJDn2gbGy9TQIWVIsUM+bT5sYLJsFQOTPBTyvBfyHG+Q89xoGFF+SBkvY78baR18Z4zMRMOZQt4fcZFqaaYN5LKBybJV9EgZUuwQhTyf4zNk2dqlgh4pQyEvoJTxYAOTZWt45+USKRN7AGH7nQmdrkWkE1JspEzs52zjBjlZtj0DhTwKeYEKed5sYLJsDSNS5mFah0Nuy2STMt+0F9FDlm1Ni5ShkBdcymy1Z8iyzSGLo5CX46NcfWfIss0Z2eJBytxL4+sZ026Qk2Vbc5CGH9QjHKRevL1ua23gfMaUc7pepMEpJ8UOV8jzcWfIsvXfy35x4+JFo+ZCnjcpox2fIcs2ZxThziBl7uB18smqDZzWAPdLe5W//Lgo5MVMsTdvkJNlm3P9jWADM/abxfdctWfIso05SgEbmBQ7hZRR3Bn+LZMxJYrFnqGQl8qPODdiwmUCVZbNnUHKRBj7dWkDk2WrGOQH/Z43TR1nqReXKbb+zpBlWzNKARt4GyepFoeFvKdtkB8nULkL3BkKeQmljI0NfJrgzmbZEOC9+z4o5FX2YM1ukNeTtnnhKAVsYKRMxudqxp4hy7bmIPPsg/0xqaCQl7uQp70z1H+NKVk29gzfLUgpZf57g7wnlFVm2dwZCnl5pcyMDUyWbc0oy5wCfnAtQyGvjkLe+gY5WbY1nRSwgZEyq7xNYfllz9TWHnoyJ+HObGKQaon9SN3cmbqNqiew1pBsCOtIscMV8lY2yMmyjTlIARuYQl5mKXNjA5Nlm9PLAozPIGXS5Snfd4Ys25zivmPPUMjLmGLPbJBze+3ZiXBnKORV5HPuGrJsazpZgQ1yUuw8UqZskONWGTAXzWIDU8hLWMhbsGfQeLbsRU3zPtVMzVImm5JtX8iyLSlZNvaMwii35hM1ysVmeCAg3AAAAABJRU5ErkJggg==',
            alt: 'Image of a orange hexagon pattern',
            display: ['none', null, 'block'],
            maxWidth: '900px',
            position: 'absolute',
            bottom: '0',
            'data-element': 'Image',
            'data-source-file': 'YouAreNotEligible.tsx',
          })
        );
      };
      var ua = function (e) {
        let { mainHeading: t, secondaryHeading: l } = e;
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.DZ,
            { as: 'h1', size: 'xl', color: 'eggplant.base', opacity: '0.6' },
            t
          ),
          u.createElement(a.DZ, { as: 'h2', size: 'xl' }, l)
        );
      };
      var ma = (e) => {
        const {
          isSelected: t,
          handleOptionSelection: l,
          image: n,
          title: i,
          description: o,
        } = e;
        return u.createElement(
          u.Fragment,
          null,
          o
            ? u.createElement(
                a.so,
                {
                  flexDirection: 'column',
                  border: '4px solid',
                  borderColor: t ? 'eggplant.lighter' : 'transparent',
                  borderRadius: '12px',
                  backgroundColor: 'tints.white',
                  'data-testid': t
                    ? 'quiz-question-option-selected'
                    : 'quiz-question-option',
                  padding: '4',
                  _last: { marginRight: 0 },
                  _hover: { cursor: ['default', null, 'pointer'] },
                  onClick: () => l(),
                  position: 'relative',
                  height: '100%',
                },
                n &&
                  u.createElement(
                    a.az,
                    { position: 'absolute', top: '0', left: '0' },
                    u.createElement(a._V, {
                      as: d.G,
                      image: n.gatsbyImageData,
                      alt: i,
                      objectFit: 'fill',
                      width: ['40px', null, '45px'],
                      height: ['40px', null, '45px'],
                      display: 'block',
                    })
                  ),
                u.createElement(
                  a.so,
                  { flexDirection: 'column' },
                  u.createElement(
                    a.EY,
                    { size: 'xl', as: 'span', paddingLeft: n ? '32px' : '0' },
                    i
                  ),
                  o &&
                    u.createElement(
                      a.EY,
                      { size: 'md', color: 'tints.darkGrey', marginTop: '1' },
                      o
                    )
                )
              )
            : u.createElement(
                a.$n,
                {
                  border: '4px solid',
                  borderColor: t ? 'eggplant.lighter' : 'transparent',
                  backgroundColor: 'tints.white',
                  colorScheme: 'whiteCS',
                  display: 'flex',
                  'data-testid': t
                    ? 'quiz-question-option-selected'
                    : 'quiz-question-option',
                  marginBottom: '3',
                  marginRight: ['10px', null, '4'],
                  size: 'md',
                  variant: 'primary',
                  padding: '8px 12px !important',
                  _last: { marginRight: 0 },
                  _hover: { cursor: ['default', null, 'pointer'] },
                  onClick: () => l(),
                  position: 'relative',
                },
                n &&
                  u.createElement(
                    a.az,
                    { position: 'absolute', top: '0', left: '0' },
                    u.createElement(a._V, {
                      as: d.G,
                      image: n.gatsbyImageData,
                      alt: i,
                      objectFit: 'fill',
                      width: ['40px', null, '45px'],
                      height: ['40px', null, '45px'],
                      display: 'block',
                    })
                  ),
                u.createElement(
                  a.DZ,
                  { size: 'sm', as: 'span', paddingLeft: n ? '32px' : '0' },
                  i
                )
              )
        );
      };
      const pa = (e) => {
        const {
            nextStep: t,
            setQuestionsAndAnswers: l,
            setIsAnswerIneligible: n,
          } = (0, El.si)(),
          {
            title: i,
            eyebrow: o,
            tooltip: r,
            options: s,
            questionType: c,
            optionType: d,
          } = e,
          m =
            'multiSelect' === c
              ? { question: i, answer: [] }
              : { question: i, answer: '' },
          { 0: p, 1: g } = (0, u.useState)(m),
          h = (e) => {
            const { title: t, isExclusive: l } = e;
            let a,
              n = p.answer;
            if (Array.isArray(n)) {
              if (l) a = n.includes(t) ? [] : [t];
              else {
                const e = (() => {
                  if (Array.isArray(p.answer))
                    return p.answer.filter((e) =>
                      s.some((t) => t.title === e && t.isExclusive)
                    )[0];
                })();
                e && (n = n.filter((t) => t !== e)),
                  (a = n.includes(t) ? n.filter((e) => e !== t) : [...n, t]);
              }
              g({ ...p, answer: a });
            }
          },
          x = (e, t) => {
            'singleSelect' === e
              ? ((e) => {
                  const { title: t } = e,
                    l = p.answer === t ? '' : t;
                  g({ ...p, answer: l });
                })(t)
              : 'multiSelect' === e && h(t);
          },
          A = s.map((e, t) => {
            const l = p.answer.includes(e.title);
            return u.createElement(
              ma,
              Object.assign({ key: t }, e, {
                handleOptionSelection: () => x(c, e),
                isSelected: l,
              })
            );
          });
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.az,
            null,
            u.createElement(
              a.MJ,
              null,
              u.createElement(
                a.az,
                { marginBottom: '8' },
                u.createElement(
                  a.DZ,
                  {
                    size: 'xl',
                    color: 'eggplant.base',
                    opacity: '0.6',
                    maxWidth: '100%',
                    display: 'block',
                  },
                  o
                ),
                u.createElement(
                  a.DZ,
                  {
                    size: 'xl',
                    color: 'tints.black',
                    maxWidth: '100%',
                    display: 'block',
                  },
                  i
                )
              ),
              u.createElement(
                a.EY,
                { size: 'md', color: 'tints.darkGrey', marginBottom: '3' },
                r
              ),
              u.createElement(
                a.az,
                { display: 'flex', flexWrap: 'wrap', marginBottom: '8' },
                'titleAndDescription' === d &&
                  A.map((e, t) =>
                    u.createElement(
                      a.az,
                      {
                        paddingRight: t % 2 == 0 ? [0, null, '6px'] : '0',
                        paddingLeft: t % 2 != 0 ? [0, null, '6px'] : '0',
                        width: ['100%', null, '50%'],
                        marginBottom: '3',
                        key: `option-${t}`,
                      },
                      e
                    )
                  ),
                'titleOnly' === d &&
                  s.map((e, t) => {
                    const l = p.answer.includes(e.title);
                    return u.createElement(
                      ma,
                      Object.assign({ key: t }, e, {
                        handleOptionSelection: () => x(c, e),
                        isSelected: l,
                      })
                    );
                  })
              )
            )
          ),
          u.createElement(
            Me.A,
            { type: 'fixed' },
            u.createElement(
              a.mc,
              { size: ['sm', 'sm', 'fluid'], paddingY: ['6', null, '0'] },
              u.createElement(
                a.$n,
                {
                  onClick: () =>
                    (() => {
                      if ((l(p), 'singleSelect' === c)) {
                        const e = s.filter((e) => e.title === p.answer)[0]
                          .isIneligible;
                        n(e);
                      }
                      if (Array.isArray(p.answer)) {
                        const e = p.answer.some((e) =>
                          s.some((t) => t.title === e && t.isIneligible)
                        );
                        n(e);
                      }
                      t();
                    })(),
                  width: ['100%', null, 'fit-content'],
                  isDisabled: 0 === p.answer.length,
                },
                'Next'
              )
            )
          )
        );
      };
      var ga = u.memo(pa);
      var ha = l(12695),
        xa = l(26224);
      var Aa = function (e) {
          const { register: t } = (0, Ne.xW)();
          return u.createElement(
            a.so,
            {
              flexDirection: 'column',
              gap: 3,
              marginTop: [4, 6],
              'data-element': 'Flex',
              'data-component': 'PersonalDataForm',
              'data-source-file': 'PersonalDataForm.tsx',
            },
            u.createElement(
              a.so,
              {
                flexDirection: ['column', null, 'row'],
                gap: 4,
                'data-element': 'Flex',
                'data-source-file': 'PersonalDataForm.tsx',
              },
              u.createElement(it.A, {
                ref: t,
                label: 'First name',
                placeholder: 'Jane',
                name: 'personalData.firstName',
                validations: { required: 'First name is a required field' },
                'data-element': 'InputField',
                'data-source-file': 'PersonalDataForm.tsx',
              }),
              u.createElement(it.A, {
                ref: t,
                label: 'Last name',
                placeholder: 'Smith',
                name: 'personalData.lastName',
                validations: { required: 'Last name is a required field' },
                'data-element': 'InputField',
                'data-source-file': 'PersonalDataForm.tsx',
              })
            ),
            u.createElement(
              a.so,
              {
                flexDirection: ['column', null, 'row'],
                gap: 4,
                'data-element': 'Flex',
                'data-source-file': 'PersonalDataForm.tsx',
              },
              u.createElement(ha.A, {
                ref: t,
                label: 'Date of birth',
                placeholder: 'MM/DD/YYYY',
                name: 'personalData.dob',
                requiredConfig: 'DOB is a required field',
                maxAgeConfig: {
                  value: 75,
                  message: 'You must be less than 75 years old',
                },
                'data-element': 'DateField',
                'data-source-file': 'PersonalDataForm.tsx',
              }),
              u.createElement(ot.A, {
                ref: t,
                label: 'Which state will you access our services from?',
                placeholder: 'State',
                'aria-label': 'State',
                name: 'personalData.state',
                options: xa.f_,
                renderOption: (e) => {
                  let { id: t, value: l } = e;
                  return u.createElement('option', { key: t, value: t }, l);
                },
                validations: { required: 'State is a required field' },
                'data-element': 'SelectField',
                'data-source-file': 'PersonalDataForm.tsx',
              })
            )
          );
        },
        fa = l(26927);
      var va = function (e) {
        const { register: t } = (0, Ne.xW)(),
          l = (e) => {
            let { event: t, limit: l, allowZeroAtStart: a } = e;
            (0, fa.wH)(t, a), (0, fa.kF)(t, l);
          };
        return u.createElement(
          a.so,
          {
            flexDirection: 'column',
            gap: 3,
            marginTop: [4, 6],
            'data-element': 'Flex',
            'data-component': 'WeightDataForm',
            'data-source-file': 'WeightDataForm.tsx',
          },
          u.createElement(
            a.so,
            {
              flexDirection: ['column', null, 'row'],
              gap: 4,
              'data-element': 'Flex',
              'data-source-file': 'WeightDataForm.tsx',
            },
            u.createElement(it.A, {
              ref: t,
              label: 'Your weight (lbs)',
              placeholder: '190',
              name: 'weight',
              validations: { required: 'Weight is a required field' },
              onKeyDown: (e) => l({ event: e, limit: 4 }),
              'data-element': 'InputField',
              'data-source-file': 'WeightDataForm.tsx',
            })
          ),
          u.createElement(
            a.so,
            {
              flexDirection: ['column', null, 'row'],
              gap: 4,
              'data-element': 'Flex',
              'data-source-file': 'WeightDataForm.tsx',
            },
            u.createElement(it.A, {
              ref: t,
              label: 'Your height (ft)',
              placeholder: '5',
              name: 'heightFeet',
              validations: { required: 'Height is a required field' },
              onKeyDown: (e) => l({ event: e, limit: 1 }),
              'data-element': 'InputField',
              'data-source-file': 'WeightDataForm.tsx',
            }),
            u.createElement(it.A, {
              ref: t,
              label: 'Inches',
              placeholder: '6',
              name: 'heightInches',
              validations: { required: 'Height is a required field' },
              onKeyDown: (e) => l({ event: e, limit: 2, allowZeroAtStart: !0 }),
              'data-element': 'InputField',
              'data-source-file': 'WeightDataForm.tsx',
            })
          )
        );
      };
      var Ea = function (e) {
        const { startQuiz: t, toggleModal: l, resetState: n } = (0, El.si)();
        return (
          (0, u.useEffect)(() => {
            E.Ay.track({
              event: b.r.EVENTS.VIEWED_COMPONENT,
              data: {
                label: b.r.PRE_PURCHASE_QUIZ.LABEL,
                step: b.r.PRE_PURCHASE_QUIZ.STEPS.INITIAL_SCREEN,
              },
            });
          }, []),
          u.createElement(
            a.az,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: ['flex-end', null, 'center'],
              backgroundColor: 'eggplant.base',
              textAlign: 'center',
              height: '100vh',
              position: 'relative',
              paddingTop: [5, null, 0],
              'data-element': 'Box',
              'data-component': 'InitialQuizScreen',
              'data-source-file': 'InitialQuizScreen.tsx',
            },
            u.createElement(a.K0, {
              colorScheme: 'whiteCS',
              size: 'sm',
              'aria-label': 'close',
              icon: u.createElement(A.A, { icon: 'X', color: 'tints.uiGrey' }),
              onClick: () => {
                l(!1), n();
              },
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: '20px',
              right: ['24px', null, '70px'],
              'data-element': 'IconButton',
              'data-source-file': 'InitialQuizScreen.tsx',
            }),
            u.createElement(
              a.az,
              {
                maxWidth: [null, '600px'],
                paddingX: '5',
                'data-element': 'Box',
                'data-source-file': 'InitialQuizScreen.tsx',
              },
              u.createElement(
                a.vw,
                {
                  backgroundColor: 'eggplant.lighter',
                  color: 'sky.dark',
                  marginBottom: ['8', '10'],
                  'data-element': 'Tag',
                  'data-source-file': 'InitialQuizScreen.tsx',
                },
                'Quiz'
              ),
              u.createElement(
                a.DZ,
                {
                  as: 'h1',
                  size: 'xl',
                  color: 'tints.white',
                  marginBottom: ['8', '10'],
                  'data-element': 'Heading',
                  'data-source-file': 'InitialQuizScreen.tsx',
                },
                "Let's see if you're eligible for Weight Care+"
              ),
              u.createElement(
                a.EY,
                {
                  color: 'tints.white',
                  marginBottom: ['8', '10'],
                  'data-element': 'Text',
                  'data-source-file': 'InitialQuizScreen.tsx',
                },
                "Getting started is the first step! We're going to ask you a few questions to determine if you're eligible for the Weight Care+ program."
              ),
              u.createElement(
                a.$n,
                {
                  variant: 'primary',
                  size: ['wide', 'md'],
                  colorScheme: 'whiteCS',
                  marginBottom: 8,
                  onClick: t,
                  position: 'relative',
                  zIndex: '5',
                  'data-element': 'Button',
                  'data-source-file': 'InitialQuizScreen.tsx',
                },
                'Get started'
              )
            ),
            u.createElement(a._V, {
              src: wl,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['block', null, 'none'],
              maxWidth: '100%',
              'data-element': 'Image',
              'data-source-file': 'InitialQuizScreen.tsx',
            }),
            u.createElement(a._V, {
              src: Sl,
              alt: 'Image of a hexagon pattern and a woman smiling',
              display: ['none', null, 'block'],
              maxWidth: '850px',
              position: 'absolute',
              bottom: '0',
              'data-element': 'Image',
              'data-source-file': 'InitialQuizScreen.tsx',
            })
          )
        );
      };
      function ba() {
        return u.createElement(
          a.so,
          {
            backgroundColor: 'eggplant.base',
            justifyContent: 'center',
            'data-element': 'Flex',
            'data-component': 'PrePurchaseQuizModalInitialScreen',
            'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
          },
          u.createElement(
            a.mc,
            {
              size: ['fluid', null, null, 'xl'],
              'data-element': 'Container',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            },
            u.createElement(Ea, {
              'data-element': 'InitialQuizScreen',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            })
          )
        );
      }
      const ya = { SLIGHTLY_ABOVE: 27, OVERWEIGHT: 30 };
      function Ca(e) {
        let {
          mainHeading: t,
          secondaryHeading: l,
          defaultValues: n,
          onSubmit: i,
          FormComponent: o,
          buttonText: r,
          showNextButton: s = !0,
        } = e;
        const c = (0, Ne.mN)({ defaultValues: n, mode: 'onBlur' });
        return u.createElement(
          Ne.Op,
          Object.assign({}, c, {
            'data-element': 'FormProvider',
            'data-component': 'PrePurchaseQuizModalStep',
            'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
          }),
          u.createElement(
            'form',
            { onSubmit: c.handleSubmit(i), noValidate: !0 },
            u.createElement(ua, {
              mainHeading: t || '',
              secondaryHeading: l || '',
              'data-element': 'FormTitle',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            }),
            u.createElement(o, {
              'data-element': 'FormComponent',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            }),
            s &&
              u.createElement(
                Me.A,
                { type: 'fixed' },
                u.createElement(
                  a.mc,
                  {
                    size: ['sm', 'sm', 'fluid'],
                    paddingTop: '6',
                    paddingBottom: [6, null, 0],
                  },
                  u.createElement(
                    a.$n,
                    { width: ['100%', null, 'fit-content'], type: 'submit' },
                    r || 'Next'
                  )
                )
              )
          )
        );
      }
      function wa() {
        const {
          nextStep: e,
          setPersonalData: t,
          personalData: l,
        } = (0, El.si)();
        return u.createElement(Ca, {
          mainHeading: 'To start...',
          secondaryHeading: 'Letâ€™s get to know each other',
          defaultValues: l || {},
          onSubmit: (l) => {
            t(l), e();
          },
          FormComponent: Aa,
          'data-element': 'PrePurchaseQuizModalStep',
          'data-component': 'PrePurchaseQuizModalFirstStep',
          'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
        });
      }
      function Sa() {
        const { nextStep: e, setWeightData: t, weightData: l } = (0, El.si)();
        return u.createElement(Ca, {
          mainHeading: 'Next up...',
          secondaryHeading: 'Tell us where youâ€™re starting from',
          defaultValues: l || {},
          onSubmit: (l) => {
            t(l), e();
          },
          FormComponent: va,
          'data-element': 'PrePurchaseQuizModalStep',
          'data-component': 'PrePurchaseQuizModalSecondStep',
          'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
        });
      }
      function ka() {
        const { bmi: e, setIsAnswerIneligible: t } = (0, El.si)();
        return void 0 === e
          ? null
          : e <= ya.SLIGHTLY_ABOVE
          ? (t(!0), null)
          : e > ya.SLIGHTLY_ABOVE
          ? u.createElement(Cl, { bmi: e })
          : null;
      }
      function Ia() {
        const { setEmailData: e, emailData: t, personalData: l } = (0, El.si)();
        return u.createElement(
          a.so,
          {
            backgroundColor: 'eggplant.base',
            justifyContent: 'center',
            'data-element': 'Flex',
            'data-component': 'PrePurchaseQuizModalConfirmationStep',
            'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
          },
          u.createElement(
            a.mc,
            {
              size: ['fluid', null, null, 'xl'],
              'data-element': 'Container',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            },
            u.createElement(Ca, {
              defaultValues: t || {},
              onSubmit: (t) => {
                e(t);
              },
              FormComponent: () =>
                u.createElement(kl, {
                  firstName:
                    (null == l ? void 0 : l.personalData.firstName) || '',
                }),
              showNextButton: !1,
              'data-element': 'PrePurchaseQuizModalStep',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            })
          )
        );
      }
      const za = () => {
          var e;
          const { personalData: t } = (0, El.si)(),
            l =
              (null == t || null === (e = t.personalData) || void 0 === e
                ? void 0
                : e.firstName) || '';
          return u.createElement(
            a.so,
            {
              backgroundColor: 'sky.dark',
              justifyContent: 'center',
              'data-element': 'Flex',
              'data-component': 'PrePurchaseQuizModalYouAreNotEligibleStep',
              'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
            },
            u.createElement(
              a.mc,
              {
                size: ['fluid', null, null, 'xl'],
                'data-element': 'Container',
                'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
              },
              u.createElement(da, {
                firstName: l,
                'data-element': 'YouAreNotEligible',
                'data-source-file': 'PrePurchaseQuizModalSteps.tsx',
              })
            )
          );
        },
        Ba = [
          {
            title: 'Do you experience any of the following?',
            eyebrow: 'Tell us more...',
            tooltip: 'Select all that apply',
            questionType: 'multiSelect',
            optionType: 'titleOnly',
            options: [
              {
                title: 'None of these',
                isSelected: !1,
                handleOptionSelection: () => ({}),
                isIneligible: !1,
                isExclusive: !0,
              },
              {
                title: 'Type 2 diabetes',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Prediabetes',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Hypertension',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Sleep apnea',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Cardiovascular disease',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Hyperlipidemia',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
            ],
          },
          {
            title: 'Do any of the following apply to you?',
            eyebrow: 'Tell us more...',
            tooltip:
              'We want to check if you have any conditions which make you ineligible for the program.',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title: 'None of these apply to me',
                description: 'None of the following apply to me',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Pregnant or breastfeeding',
                description:
                  'Currently pregnant, trying to become pregnant or breastfeeding/providing bottled breastmilk',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Cancer or family history of certain conditions',
                description:
                  'Have an active cancer diagnosis or have had cancer within the last 5 years or personal or family history of medullary thyroid cancer or multiple endocrine neoplasia type 2',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Diabetes on insulin management',
                description:
                  'Type 1 diabetes or type 2 diabetes treated with insulin',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Heart conditions or stroke',
                description: 'Heart attack or stroke within the last 12 months',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Diabetic retinopathy or pancreatitis',
                description:
                  'Diabetic retinopathy or current/past diagnosis of pancreatitis',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
            ],
          },
          {
            title: "We're almost there...",
            eyebrow: 'One last thing...',
            tooltip: 'Do any of the following apply to you?',
            questionType: 'multiSelect',
            optionType: 'titleAndDescription',
            options: [
              {
                title: 'None of these apply to me',
                description: 'None of the following apply to me',
                isSelected: !1,
                isIneligible: !1,
                isExclusive: !0,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Gastrointestinal diseases',
                description:
                  'Severe gastrointestinal diseases such as gastroparesis, blockages, or inflammatory bowel disease',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'History of suicidal thoughts',
                description:
                  'Active suicidal thoughts or past suicide attempts',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'History of eating disorders',
                description:
                  'Current eating disorder or a history of an eating disorderÂ (bulimia, anorexia, binge eating disorder or other)',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'History of organ transplant on anti-rejection therapy',
                description:
                  'History of organ transplant on anti-rejection therapy',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
              {
                title: 'Kidney or liver disease',
                description:
                  'End stage kidney disease or end stage liver disease (cirrhosis)',
                isSelected: !1,
                isIneligible: !0,
                isExclusive: !1,
                handleOptionSelection: () => ({}),
              },
            ],
          },
        ]
          .map((e, t) =>
            u.createElement(
              ga,
              Object.assign({ key: `option-select-form-${t}` }, e)
            )
          )
          .map((e) => ({ mainContent: e }));
      const Da = (e) => {
        const { items: t, title: l } = e,
          n =
            null == t
              ? void 0
              : t.map((e, t) =>
                  u.createElement(Ht.A, {
                    key: t,
                    iconName: 'Check',
                    iconColor: 'tints.white',
                    text: e.text,
                    hasRoundIconBackground: !0,
                    iconBackgroundColor: 'violet.lighter',
                    backgroundSize: 16,
                    iconFontSize: 12,
                  })
                );
        return u.createElement(
          a.az,
          {
            'data-element': 'Box',
            'data-component': 'BulletPoints',
            'data-source-file': 'BulletPoints.tsx',
          },
          l
            ? u.createElement(
                a.EY,
                { size: 'lg', color: 'tints.uiGrey', marginBottom: '4' },
                l
              )
            : null,
          u.createElement(
            a.so,
            {
              gap: 2,
              flexDirection: 'column',
              'data-element': 'Flex',
              'data-source-file': 'BulletPoints.tsx',
            },
            n
          )
        );
      };
      var Pa = u.memo(Da);
      var Ta = (e) => {
        let { title: t, description: l, mobileImage: n, desktopImage: i } = e;
        return u.createElement(
          a.so,
          {
            backgroundColor: 'tints.cream',
            borderRadius: 'xl',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4',
            minHeight: '100px',
            paddingX: '4',
            paddingY: '3',
            'data-element': 'Flex',
            'data-component': 'InLineCard',
            'data-source-file': 'InLineCard.tsx',
          },
          u.createElement(
            a.so,
            {
              flexDirection: 'column',
              justifyContent: 'center',
              'data-element': 'Flex',
              'data-source-file': 'InLineCard.tsx',
            },
            u.createElement(
              a.DZ,
              {
                as: 'h3',
                marginBottom: '3',
                size: 'sm',
                'data-element': 'Heading',
                'data-source-file': 'InLineCard.tsx',
              },
              t
            ),
            u.createElement(
              a.EY,
              {
                fontSize: 'md',
                color: 'tints.uiGrey',
                'data-element': 'Text',
                'data-source-file': 'InLineCard.tsx',
              },
              l
            )
          ),
          u.createElement(
            a.az,
            {
              display: ['block', null, 'none'],
              height: '80px',
              width: '80px',
              'data-testid': 'card-mobile-image',
              'data-element': 'Box',
              'data-source-file': 'InLineCard.tsx',
            },
            u.createElement(a._V, {
              as: d.G,
              image: null == n ? void 0 : n.gatsbyImageData,
              margin: '0 auto',
              alt: (null == n ? void 0 : n.description) || '',
              height: 'inherit',
              width: 'inherit',
              'data-element': 'Image',
              'data-source-file': 'InLineCard.tsx',
            })
          ),
          u.createElement(
            a.az,
            {
              display: ['none', null, 'block'],
              height: '80px',
              width: '80px',
              'data-testid': 'card-desktop-image',
              'data-element': 'Box',
              'data-source-file': 'InLineCard.tsx',
            },
            u.createElement(a._V, {
              as: d.G,
              image: null == i ? void 0 : i.gatsbyImageData,
              margin: '0 auto',
              alt: (null == i ? void 0 : i.description) || '',
              height: 'inherit',
              width: 'inherit',
              'data-element': 'Image',
              'data-source-file': 'InLineCard.tsx',
            })
          )
        );
      };
      var Ma = (e) => {
        let {
          description: t,
          title: l,
          detail: n,
          disclaimer: o,
          inLineCards: r,
        } = e;
        return u.createElement(
          a.az,
          {
            'data-element': 'Box',
            'data-component': 'PricingSelectorV2AccordionContent',
            'data-source-file': 'PricingSelectorV2AccordionContent.tsx',
          },
          l || n
            ? u.createElement(
                a.so,
                { justifyContent: 'space-between', marginBottom: '2' },
                u.createElement(
                  a.EY,
                  { color: 'tints.black', fontSize: 'lg' },
                  l
                ),
                u.createElement(
                  a.EY,
                  { color: 'tints.uiGrey', fontWeight: 'medium' },
                  n
                )
              )
            : null,
          t
            ? u.createElement(Lt.A, {
                contentfulRichText: t,
                options: {
                  overrideOptions: {
                    renderNode: {
                      [i.BLOCKS.UL_LIST]: (e, t) =>
                        u.createElement(
                          a.Xy,
                          {
                            styleType: 'initial',
                            sx: { marginInlineStart: '1.5em' },
                            paddingY: '6',
                          },
                          u.createElement(a.ck, null, t)
                        ),
                    },
                  },
                  styleProps: { color: 'tints.darkGrey', marginBottom: 0 },
                  removeWrapper: !0,
                },
              })
            : null,
          null != r && r.length
            ? u.createElement(
                a.so,
                { flexDirection: 'column', marginY: '6', gap: '2' },
                null == r
                  ? void 0
                  : r.map((e, t) =>
                      u.createElement(Ta, Object.assign({ key: t }, e))
                    )
              )
            : null,
          o
            ? u.createElement(
                a.EY,
                {
                  color: 'tints.darkGrey',
                  marginTop: null != r && r.length ? '0' : '6',
                },
                o
              )
            : null
        );
      };
      function Na(e) {
        let { accordions: t } = e;
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            a.nD,
            { size: 'md', allowMultiple: !0 },
            null == t
              ? void 0
              : t.map((e, t) => {
                  var l;
                  return u.createElement(
                    a.As,
                    {
                      key: t,
                      title: null == e ? void 0 : e.title,
                      border: 'none',
                      marginBottom: '2',
                      borderRadius: 'xl',
                      overflow: 'hidden',
                    },
                    u.createElement(
                      a.J2,
                      {
                        backgroundColor: 'tints.lightCream',
                        paddingX: '4',
                        paddingY: '3',
                        sx: { svg: { color: 'tints.uiGrey' } },
                      },
                      u.createElement(
                        a.so,
                        {
                          width: '100%',
                          justifyContent: 'space-between',
                          marginRight: '2',
                        },
                        u.createElement(
                          a.so,
                          { gap: '2' },
                          u.createElement(A.A, {
                            icon: null == e ? void 0 : e.icon,
                          }),
                          u.createElement(
                            a.EY,
                            { fontSize: 'lg' },
                            null == e ? void 0 : e.title
                          )
                        ),
                        u.createElement(
                          a.EY,
                          { fontSize: 'lg' },
                          null == e ? void 0 : e.detail
                        )
                      ),
                      u.createElement(a.QJ, null)
                    ),
                    u.createElement(
                      a.vr,
                      {
                        borderBottomRadius: 'xl',
                        paddingX: '4',
                        paddingTop: '3',
                        paddingBottom: '6',
                        backgroundColor: 'tints.lightCream',
                      },
                      null == e ||
                        null === (l = e.accordionContent) ||
                        void 0 === l
                        ? void 0
                        : l.map((t, l) => {
                            var n, i;
                            const o =
                              l ===
                              (null !==
                                (n =
                                  null == e ||
                                  null === (i = e.accordionContent) ||
                                  void 0 === i
                                    ? void 0
                                    : i.length) && void 0 !== n
                                ? n
                                : 0) -
                                1;
                            return u.createElement(
                              a.az,
                              { key: `accordion-content-${l}` },
                              u.createElement(Ma, t),
                              !o &&
                                u.createElement(a.az, {
                                  as: 'hr',
                                  marginY: '6',
                                  borderColor: 'tints.darkCream',
                                })
                            );
                          })
                    )
                  );
                })
          )
        );
      }
      const Fa = (e) => {
        var t;
        const {
            priceDetail: l,
            bulletPoints: n,
            accordions: i,
            cta: o,
            secondaryCard: r,
            isExpanded: s,
            handleCollapsedCTAClick: c,
            onCtaClick: d,
          } = e,
          { badge: m, title: p, price: g, oldPrice: h } = l,
          x = g.split('.'),
          A = null == h ? void 0 : h.split('.');
        return u.createElement(
          a.az,
          {
            backgroundColor: 'white',
            borderRadius: '24px',
            height: '100%',
            padding: '8',
            width: '100%',
            'data-element': 'Box',
            'data-component': 'Card',
            'data-source-file': 'Card.tsx',
          },
          u.createElement(
            a.az,
            {
              display: s ? 'block' : 'none',
              'data-element': 'Box',
              'data-source-file': 'Card.tsx',
            },
            u.createElement(
              a.az,
              {
                borderBottom: '1px solid',
                borderColor: 'tints.darkCream',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginBottom: '8',
                paddingBottom: '8',
                width: '100%',
                'data-element': 'Box',
                'data-source-file': 'Card.tsx',
              },
              m
                ? u.createElement(
                    a.az,
                    {
                      display: 'flex',
                      justifyContent: ['start', null, 'end'],
                      marginBottom: ['4', null, 0],
                      width: '100%',
                    },
                    u.createElement(
                      a.vw,
                      { height: '28px', variant: 'callout', size: 'sm' },
                      m.text
                    )
                  )
                : null,
              u.createElement(
                a.az,
                {
                  display: 'flex',
                  flexWrap: ['wrap', null, 'nowrap'],
                  justifyContent: 'space-between',
                  width: '100%',
                  'data-element': 'Box',
                  'data-source-file': 'Card.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    width: ['100%', null, '50%'],
                    marginBottom: ['2', null, 0],
                    'data-element': 'Box',
                    'data-source-file': 'Card.tsx',
                  },
                  u.createElement(
                    a.DZ,
                    {
                      size: 'md',
                      'data-element': 'Heading',
                      'data-source-file': 'Card.tsx',
                    },
                    p
                  )
                ),
                u.createElement(
                  a.az,
                  {
                    alignItems: 'end',
                    display: 'flex',
                    justifyContent: ['flex-start', null, 'flex-end'],
                    width: ['100%', null, '50%'],
                    'data-element': 'Box',
                    'data-source-file': 'Card.tsx',
                  },
                  A
                    ? u.createElement(
                        a.az,
                        {
                          alignItems: 'flex-end',
                          display: 'flex',
                          flexWrap: 'nowrap',
                          marginLeft: ['10px', null, 0],
                          marginRight: '3',
                          order: [2, null, 1],
                          position: 'relative',
                        },
                        u.createElement(a.az, {
                          backgroundColor: 'utility.sale',
                          height: '2',
                          left: '0',
                          position: 'absolute',
                          top: '50%',
                          transform: 'translate(0, -50%)',
                          width: '100%',
                        }),
                        u.createElement(
                          a.DZ,
                          { size: 'sm', color: 'tints.uiGrey' },
                          '$'
                        ),
                        u.createElement(
                          a.DZ,
                          { size: 'md', color: 'tints.uiGrey' },
                          A[0]
                        ),
                        u.createElement(
                          a.DZ,
                          { size: 'sm', color: 'tints.uiGrey' },
                          '.',
                          A[1]
                        )
                      )
                    : null,
                  u.createElement(
                    a.az,
                    {
                      alignItems: 'flex-end',
                      display: 'flex',
                      flexWrap: 'nowrap',
                      order: [1, null, 2],
                      'data-element': 'Box',
                      'data-source-file': 'Card.tsx',
                    },
                    u.createElement(
                      a.DZ,
                      {
                        size: 'md',
                        color: 'tints.black',
                        'data-element': 'Heading',
                        'data-source-file': 'Card.tsx',
                      },
                      '$'
                    ),
                    u.createElement(
                      a.DZ,
                      {
                        size: '2xl',
                        color: 'tints.black',
                        'data-element': 'Heading',
                        'data-source-file': 'Card.tsx',
                      },
                      x[0]
                    ),
                    x.length > 1
                      ? u.createElement(
                          a.DZ,
                          { size: 'md', color: 'tints.black' },
                          '.',
                          x[1]
                        )
                      : null
                  )
                )
              )
            ),
            n
              ? u.createElement(
                  a.az,
                  { marginBottom: '4' },
                  u.createElement(Pa, n)
                )
              : null,
            i
              ? u.createElement(
                  a.az,
                  { 'data-testid': 'accordions' },
                  u.createElement(Na, { accordions: i.accordions })
                )
              : null,
            u.createElement(
              a.az,
              {
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '8',
                'data-element': 'Box',
                'data-source-file': 'Card.tsx',
              },
              u.createElement(
                a.$n,
                {
                  as: v.Link,
                  size: 'md',
                  to: o.url || '',
                  variant: 'primary',
                  width: '100%',
                  onClick: (e) => d(e, o.url || '', o.label || ''),
                  'data-element': 'Button',
                  'data-source-file': 'Card.tsx',
                },
                o.label
              )
            )
          ),
          r &&
            u.createElement(
              a.az,
              {
                display: s ? 'none' : 'flex',
                alignContent: 'space-between',
                flexWrap: 'wrap',
                height: '100%',
              },
              u.createElement(a.DZ, { width: '80%' }, r.title),
              u.createElement(
                a.az,
                { alignSelf: 'flex-end' },
                u.createElement(a.EY, { marginBottom: 6 }, r.description),
                u.createElement(
                  a.$n,
                  {
                    size: 'md',
                    onClick: () => c(),
                    isDisabled: !1,
                    variant: 'secondary',
                    width: '100%',
                  },
                  null === (t = r.cta) || void 0 === t ? void 0 : t.label
                )
              )
            )
        );
      };
      var La = u.memo(Fa);
      var Oa = l(93008),
        Qa = l(75119),
        Ha = l(10900);
      var Ra = (e) => {
        let {
          backgroundColor: t = a.w4.colors.viridian.dark,
          text: l,
          highlightTextColor: n = a.w4.colors.whiteCS.base,
          footnote: i,
          cta: o = null,
          desktopWidth: r,
        } = e;
        const s = (0, u.useCallback)(
          () => (void 0 === r ? 'unset' : { md: '280px', lg: '664px' }[r]),
          [r]
        );
        return u.createElement(
          a.az,
          {
            position: 'relative',
            padding: 6,
            backgroundColor: t,
            borderRadius: 'xl',
            overflow: 'hidden',
            height: '100%',
            minHeight: ['200px', '400px'],
            width: ['100%', s()],
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            'data-element': 'Box',
            'data-component': 'InfoCardV2',
            'data-source-file': 'InfoCardV2.tsx',
          },
          u.createElement(
            a.az,
            {
              fontFamily: 'body',
              fontSize: ['3xl', '5xl'],
              lineHeight: ['shorter'],
              fontWeight: 'medium',
              'line-height': 'shorter',
              color: null == l ? void 0 : l.color,
              sx: { 'strong, b': { fontWeight: '500', color: n } },
              'data-element': 'Box',
              'data-source-file': 'InfoCardV2.tsx',
            },
            'string' == typeof (null == l ? void 0 : l.content)
              ? (0, Ha.Ay)((0, H.aj)(null == l ? void 0 : l.content))
              : null == l
              ? void 0
              : l.content
          ),
          u.createElement(
            a.az,
            {
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              'data-element': 'Box',
              'data-source-file': 'InfoCardV2.tsx',
            },
            i &&
              u.createElement(
                a.EY,
                {
                  fontSize: ['md', 'lg'],
                  opacity: '0.6',
                  color: null == i ? void 0 : i.color,
                  flex: '1',
                },
                null == i ? void 0 : i.content
              ),
            o &&
              u.createElement(
                a.az,
                {
                  marginLeft: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  flex: '1',
                  justifyContent: 'end',
                },
                o
              )
          )
        );
      };
      var Va = (e) => {
        let { backgroundColor: t, highlightTextColor: l, text: a, cta: n } = e;
        return u.createElement(Ra, {
          backgroundColor: t,
          highlightTextColor: l,
          text: a,
          cta: n,
          desktopWidth: 'md',
          'data-element': 'InfoCardV2',
          'data-component': 'ActionCard',
          'data-source-file': 'ActionCard.tsx',
        });
      };
      var Ya = (e) => {
        let {
          tagText: t,
          tagVariant: l,
          headingText: a,
          backgroundColor: n = 'viridian.base',
          cta: i,
          mobileImage: o,
          desktopImage: r,
          ...s
        } = e;
        return u.createElement(
          Qa.A,
          Object.assign(
            {
              tagText: t,
              tagVariant: l,
              headingText: a,
              backgroundColor: n,
              cta: { ...i, size: ['md', 'sm', 'sm'] },
              addImageShape: !0,
              maxWidth: ['100%'],
              minHeight: ['auto', '400px'],
              mobileImage: o,
              mobileImageProps: { height: '200px' },
              desktopImage: r,
              cardVariant: 'horizontal',
            },
            s,
            {
              'data-element': 'ShapeCard',
              'data-component': 'AdvertisementCard',
              'data-source-file': 'AdvertisementCard.tsx',
            }
          )
        );
      };
      const ja = {
        ProductCardV2: fl.A,
        ShapeCard: Qa.A,
        InfoCardV2: Ra,
        ActionCard: Va,
        AdvertisementCard: Ya,
      };
      var Za = (e) => {
        let { componentName: t, ...l } = e;
        const a = ja[t];
        return void 0 === a ? null : u.createElement(a, l);
      };
      const Ga = (e) => {
        let { isExpanded: t, colorScheme: l = 'whiteCS' } = e;
        return u.createElement(
          a.az,
          {
            'data-element': 'Box',
            'data-component': 'CardAccordionButton',
            'data-source-file': 'CardsAccordion.tsx',
          },
          u.createElement(a.K0, {
            as: a.J2,
            'aria-label': t ? 'Collapse' : 'Expand',
            'aria-expanded': t,
            icon: u.createElement(A.A, {
              icon: t ? 'CaretUp' : 'CaretDown',
              fontSize: a.w4.fontSizes.lg,
            }),
            colorScheme: l,
            width: a.w4.space[8],
            height: a.w4.space[8],
            size: 'sm',
            'data-element': 'IconButton',
            'data-source-file': 'CardsAccordion.tsx',
          })
        );
      };
      var Wa = (e) => {
        let { items: t, buttonColorScheme: l } = e;
        return u.createElement(
          a.nD,
          {
            allowMultiple: !0,
            display: 'flex',
            flexDirection: 'column',
            gap: '6',
            'data-element': 'Accordion',
            'data-component': 'CardsAccordion',
            'data-source-file': 'CardsAccordion.tsx',
          },
          t.map((e, t) =>
            u.createElement(a.As, { key: t, border: 0 }, (t) => {
              let { isExpanded: n } = t;
              return u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  a.az,
                  { role: 'heading' },
                  u.createElement(
                    Za,
                    Object.assign({}, e.button, {
                      cta: u.createElement(Ga, {
                        isExpanded: n,
                        colorScheme: l,
                      }),
                    })
                  )
                ),
                u.createElement(
                  a.vr,
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 4,
                    gap: 4,
                  },
                  e.content.map((e, t) => {
                    let { componentName: l, ...a } = e;
                    return u.createElement(
                      Za,
                      Object.assign({ key: `${l}-${t}`, componentName: l }, a)
                    );
                  })
                )
              );
            })
          )
        );
      };
      var qa = (e) => {
        let {
          carouselCards: t,
          accordionCards: l,
          carouselFadeBgColor: n,
          carouselStyles: i,
          disableAccordion: o = !1,
        } = e;
        const [r] = (0, a.Ub)(`(max-width: ${a.w4.breakpoints.tablet})`);
        return r && o
          ? u.createElement(
              a.so,
              {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 4,
                gap: 4,
              },
              l.map((e) => {
                let { button: t, content: l } = e;
                return [t, ...l].map((e, t) => {
                  let { componentName: l, ...a } = e;
                  return u.createElement(
                    Za,
                    Object.assign({ key: `${l}-${t}`, componentName: l }, a)
                  );
                });
              })
            )
          : r && !o
          ? u.createElement(Wa, { items: l })
          : u.createElement(Al.A, {
              cards: t,
              slideStyles: { flexShrink: 'unset', maxWidth: 'fit-content' },
              showPagination: !1,
              breakpointConfig: {
                0: { slidesPerView: 'auto' },
                900: { slidesPerView: 'auto' },
                1200: { slidesPerView: 'auto' },
              },
              fadeBgColor: n,
              mousewheel: { enabled: !0, forceToAxis: !0 },
              carouselStyles: i,
              freeMode: !0,
              'data-element': 'MultipleCardsSwiper',
              'data-component': 'CardsCarouselAccordion',
              'data-source-file': 'CardsCarouselAccordion.tsx',
            });
      };
      var Ua = (e) => {
        let {
          title: t,
          description: l,
          bulletPoints: n,
          accordionCards: i,
          carouselCards: o,
          backgroundColor: s,
          disableAccordion: c,
        } = e;
        const d = (0, u.useRef)(null),
          { 0: m, 1: p } = (0, u.useState)(0),
          [g] = (0, a.Ub)(
            `(min-width: ${a.w4.breakpoints.tablet}) and (max-width: ${a.w4.breakpoints.desktop})`
          ),
          [h] = (0, Oa.rd)('space', ['4']),
          x = (0, u.useCallback)(() => {
            var e, t;
            const l =
              null == d ||
              null === (e = d.current) ||
              void 0 === e ||
              null === (t = e.getBoundingClientRect()) ||
              void 0 === t
                ? void 0
                : t.x;
            p(null != l ? l : 0);
          }, [d]);
        (0, u.useEffect)(() => {
          x();
        }, [x]),
          (0, u.useEffect)(
            () => (
              window.addEventListener('resize', x),
              () => {
                window.removeEventListener('resize', x);
              }
            ),
            [d, x]
          );
        const A = g ? `calc(${m}px + ${h})` : m;
        return u.createElement(
          a.so,
          {
            width: '100vw',
            paddingY: ['10', '20', '20'],
            backgroundColor: null != s ? s : 'tints.white',
            marginBottom: [-10, -10, -20],
            as: 'section',
            flexDirection: 'column',
            gap: ['10', '20', '20'],
            'data-element': 'Flex',
            'data-component': 'ProgramSection',
            'data-source-file': 'ProgramSection.tsx',
          },
          u.createElement(
            r.A,
            {
              size: ['fluid', null, 'xl'],
              alignSelf: 'center',
              centerContent: !0,
              as: 'div',
              'data-element': 'Container',
              'data-source-file': 'ProgramSection.tsx',
            },
            u.createElement(
              a.so,
              {
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: ['column', 'column', 'row'],
                paddingX: [4, 4, 0],
                rowGap: '6',
                ref: d,
                'data-element': 'Flex',
                'data-source-file': 'ProgramSection.tsx',
              },
              u.createElement(
                a.so,
                {
                  flexDirection: 'column',
                  maxWidth: '567px',
                  columnGap: '8',
                  rowGap: '6',
                  'data-element': 'Flex',
                  'data-source-file': 'ProgramSection.tsx',
                },
                u.createElement(
                  a.DZ,
                  {
                    size: '2xl',
                    'data-element': 'Heading',
                    'data-source-file': 'ProgramSection.tsx',
                  },
                  t
                ),
                u.createElement(
                  a.EY,
                  {
                    size: 'lg',
                    'data-element': 'Text',
                    'data-source-file': 'ProgramSection.tsx',
                  },
                  l
                )
              ),
              n && n.length > 0
                ? u.createElement(
                    a.so,
                    {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2',
                      role: 'list',
                      alignSelf: ['start', 'start', 'end'],
                    },
                    null == n
                      ? void 0
                      : n.map((e, t) =>
                          u.createElement(Ht.A, {
                            key: `bullet-${t}`,
                            text: e.text || '',
                            textColor: e.textColor || 'tints.darkGrey',
                            iconName: e.iconName || 'CheckCircle',
                            iconColor: e.iconColor || 'viridian.base',
                            weight: 'fill',
                          })
                        )
                  )
                : null
            )
          ),
          u.createElement(
            a.az,
            {
              paddingX: [4, 0, 0],
              'data-element': 'Box',
              'data-source-file': 'ProgramSection.tsx',
            },
            i &&
              o &&
              u.createElement(qa, {
                accordionCards: i,
                carouselCards: o,
                carouselFadeBgColor: s,
                carouselStyles: { paddingLeft: A, paddingRight: A },
                disableAccordion: c,
              })
          )
        );
      };
      var Ka = l(61579),
        Ja = l(36332),
        _a = l(44119),
        Xa = l(52218),
        $a = l(54250);
      const en = (e) => {
          let {
            displayName: t,
            productId: l,
            productSlug: n,
            variantId: i,
            outOfStock: o,
          } = e;
          const { addItemToCart: r } = (0, Ja._$)(),
            { 0: s, 1: c } = (0, u.useState)({}),
            d = () => {
              ((e) => {
                c((t) => ({ ...t, [e]: !0 })),
                  setTimeout(() => c((t) => ({ ...t, [e]: !1 })), 1500);
              })(l),
                r({ variant_id: Number(i), quantity: 1 });
              const e = 'Product Card - Add To Cart Button Click';
              E.Ay.track({
                event: b.r.EVENTS.ADD_TO_CART,
                data: { label: e, product: t },
              }),
                (0, $a.y2)(n, e);
            };
          return u.createElement(
            a.$n,
            {
              size: 'sm',
              onClick: () => d(),
              colorScheme: 'greenCS',
              rightIcon: s[l] && u.createElement(a.In, { as: Ka.J }),
              animation: s[l] ? 'transition: background 0.5s linear' : '',
              isDisabled: s[l] || o,
              'data-element': 'Button',
              'data-component': 'AddToCartCTA',
              'data-source-file': 'ProductCardV2.parser.tsx',
            },
            s[l] ? 'Added to cart' : 'Add to cart'
          );
        },
        tn = (e) => {
          var t, l, n;
          let { title: i, description: o, hasLargeTitle: r } = e;
          const s = r
            ? {
                fontFamily: 'heading',
                fontSize: ['4xl', '6xl'],
                lineHeight: 'shorter',
                fontWeight: 'normal',
              }
            : {
                fontFamily: 'body',
                fontSize: ['lg', 'xl'],
                lineHeight: 'base',
                fontWeight: 'medium',
              };
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              a.EY,
              Object.assign({}, s, {
                color:
                  null !== (t = null == i ? void 0 : i.color) && void 0 !== t
                    ? t
                    : 'black',
                marginBottom: 0.5,
              }),
              (0, y.Az)(
                null !== (l = String(i.content)) && void 0 !== l ? l : ''
              )
            ),
            (null == o ? void 0 : o.content) &&
              u.createElement(
                a.EY,
                {
                  fontSize: ['sm', 'md'],
                  color:
                    null !== (n = null == o ? void 0 : o.color) && void 0 !== n
                      ? n
                      : 'tints.darkGrey',
                  as:
                    'string' != typeof (null == o ? void 0 : o.content)
                      ? 'div'
                      : void 0,
                },
                o.content
              )
          );
        },
        ln = (e) => {
          let {
            productId: t,
            outOfStock: l,
            promotionable: a,
            promoText: n,
            price: i,
            advertisedPromos: o = [],
          } = e;
          const r = (0, u.useMemo)(() => (0, Xa.Wk)(o), [o]);
          if (!t || !i) return null;
          return r
            ? u.createElement(_a.A, {
                price: i,
                promo: r,
                productId: t,
                promotionable: a,
                subscribeSelected: !1,
                isTextReduced: !0,
                isOutOfStock: l,
                promoText: r ? void 0 : n,
                displayCents: !0,
                'data-element': 'PromoDiscountPrice',
                'data-component': 'getPricingOverride',
                'data-source-file': 'ProductCardV2.parser.tsx',
              })
            : null;
        },
        an = (e) => {
          var t, l, n, i;
          const {
              title: o,
              backgroundColor: r,
              textColor: s,
              images: c,
              cta: m,
              description: p,
              linkTo: g,
              note: h,
              hasLargeTitle: x,
            } = e,
            A =
              null == m ||
              null === (t = m.metadata) ||
              void 0 === t ||
              null === (l = t.context) ||
              void 0 === l
                ? void 0
                : l.cta_color_scheme,
            f = null == c ? void 0 : c.mobileImage.gatsbyImageData,
            y = null == c ? void 0 : c.desktopImage.gatsbyImageData,
            C = () => {
              const [e] = (0, a.Ub)(`(max-width: ${a.w4.breakpoints.tablet})`);
              let t = e && f ? f : y;
              return t
                ? u.createElement(d.G, {
                    image: t,
                    alt: `${o} image`,
                    imgStyle: { objectFit: 'contain' },
                    'data-element': 'GatsbyImage',
                    'data-component': 'ProductImage',
                    'data-source-file': 'ProductCardV2.parser.tsx',
                  })
                : null;
            },
            w = (e) => {
              let { label: t, url: l, analyticsProps: n = {} } = e;
              const {
                openHandler: i,
                isMDPModalAvailable: o,
                hashId: r,
                setCustomUrl: s,
              } = (0, U.PO)();
              return (0, _.A)(l) || (0, _.A)(t)
                ? null
                : u.createElement(
                    a.$n,
                    Object.assign(
                      {
                        size: 'sm',
                        colorScheme: A,
                        onClick: (e) => {
                          ((e) => {
                            const t = `#${r || ''}`;
                            if (
                              o &&
                              null != l &&
                              l.includes(t) &&
                              null != l &&
                              l.includes('redir=')
                            ) {
                              e.preventDefault(), i(!0);
                              const t =
                                null == l ? void 0 : l.split('redir=')[1];
                              s(t);
                            }
                          })(e),
                            E.Ay.track({
                              event: b.r.EVENTS.CLICKED_LINK,
                              data: { label: t, url: l, ...n },
                            });
                        },
                      },
                      null != l && l.includes('#disclaimer')
                        ? {}
                        : { as: v.Link, to: l },
                      {
                        'data-element': 'Button',
                        'data-component': 'ProductCta',
                        'data-source-file': 'ProductCardV2.parser.tsx',
                      }
                    ),
                    t
                  );
            };
          return {
            cardBackgroundColor: r,
            children:
              o &&
              u.createElement(tn, {
                title: { content: o, color: s },
                description: { content: h },
                hasLargeTitle: x,
              }),
            cta:
              m &&
              u.createElement(w, {
                analyticsProps:
                  null == m ||
                  null === (n = m.metadata) ||
                  void 0 === n ||
                  null === (i = n.context) ||
                  void 0 === i
                    ? void 0
                    : i.mixpanel_props,
                label: null == m ? void 0 : m.label,
                url: null == m ? void 0 : m.url,
              }),
            handleOnClick: () => {
              E.Ay.track({
                event: b.r.EVENTS.CLICKED_PROMO_CARD,
                data: { label: o, slug: g },
              });
            },
            image: u.createElement(C, null),
            isRotatedProduct: !0,
            linkTo: g,
            pricing: p && u.createElement(a.EY, { size: 'sm' }, p),
            showBrandImage: !1,
            variant: 'standard',
          };
        },
        nn = {
          InfoCardV2: (e) => {
            var t, l, a, n, i, o, r, s;
            const { body: c, metadata: d } = e;
            return {
              text: {
                content: c && (0, m.A)(c),
                color:
                  null == d || null === (t = d.theme) || void 0 === t
                    ? void 0
                    : t.textColor,
              },
              footnote: {
                content:
                  null !==
                    (l =
                      null == d || null === (a = d.description) || void 0 === a
                        ? void 0
                        : a.description) && void 0 !== l
                    ? l
                    : '',
                color:
                  null == d || null === (n = d.theme) || void 0 === n
                    ? void 0
                    : n.secondaryColor,
              },
              highlightTextColor:
                null == d || null === (i = d.theme) || void 0 === i
                  ? void 0
                  : i.tertiaryColor,
              desktopWidth:
                null !==
                  (o =
                    null == d || null === (r = d.context) || void 0 === r
                      ? void 0
                      : r.info_card_width) && void 0 !== o
                  ? o
                  : 'md',
              backgroundColor:
                null == d || null === (s = d.theme) || void 0 === s
                  ? void 0
                  : s.backgroundColor,
            };
          },
          ProductCardV2: (e, t) => {
            var l, n, i, o, r, s, p, g, h, x, A;
            const f =
                null !==
                  (l =
                    null == e ||
                    null === (n = e.metadata) ||
                    void 0 === n ||
                    null === (i = n.context) ||
                    void 0 === i
                      ? void 0
                      : i.product_card_variant) && void 0 !== l
                  ? l
                  : 'default',
              v =
                null == e || null === (o = e.subsections) || void 0 === o
                  ? void 0
                  : o[0];
            if ('standard' === f) {
              const e = null == v ? void 0 : v.images,
                {
                  title: t,
                  theme: l,
                  ctas: a,
                  description: n,
                  flags: i,
                } = null !== (r = null == v ? void 0 : v.metadata) &&
                void 0 !== r
                  ? r
                  : {},
                o = null == a ? void 0 : a[0],
                c =
                  null == a || null === (s = a[1]) || void 0 === s
                    ? void 0
                    : s.url,
                { backgroundColor: d, textColor: u } = null != l ? l : {},
                p = (0, B.n9)('hasLargeTitle', i),
                g = {
                  backgroundColor: d,
                  cta: o,
                  description: null == n ? void 0 : n.description,
                  images: null == e ? void 0 : e[0],
                  textColor: u,
                  title: t,
                  linkTo: c,
                  hasLargeTitle: p,
                  note:
                    null != v && v.body
                      ? (0, m.A)(null == v ? void 0 : v.body)
                      : '',
                };
              return an(g);
            }
            {
              const e =
                  null == v ||
                  null === (p = v.spreeProduct) ||
                  void 0 === p ||
                  null === (g = p.variants) ||
                  void 0 === g
                    ? void 0
                    : g.find((e) => !0 === (null == e ? void 0 : e.is_master)),
                l = null == e ? void 0 : e.price,
                n = null == e ? void 0 : e.id;
              return ((e) => {
                var t, l, n, i, o, r;
                let {
                  product: s,
                  promotionable: m,
                  price: p,
                  variantId: g,
                  advertisedPromos: h = [],
                } = e;
                return {
                  image:
                    (null == s || null === (t = s.boxImage) || void 0 === t
                      ? void 0
                      : t.gatsbyImageData) &&
                    u.createElement(d.G, {
                      image:
                        null == s || null === (l = s.boxImage) || void 0 === l
                          ? void 0
                          : l.gatsbyImageData,
                      alt: `${s.displayName} box image`,
                      imgStyle: { objectFit: 'contain' },
                      style: { height: '100%' },
                    }),
                  pricing:
                    p &&
                    u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(a.EY, {
                        fontSize: 'lg',
                        color: 'tints.black',
                        fontWeight: 'medium',
                      }),
                      u.createElement(c.A, { dollarAmount: (+p).toFixed(2) })
                    ),
                  pricingOverride:
                    s.productId && p && h.length > 0
                      ? u.createElement(ln, {
                          productId: s.productId,
                          outOfStock: null == s ? void 0 : s.outOfStock,
                          promoText: null == s ? void 0 : s.promoText,
                          price: +p,
                          promotionable: m,
                          advertisedPromos: h,
                        })
                      : null,
                  children: u.createElement(tn, {
                    title: {
                      content:
                        null !== (n = s.displayName) && void 0 !== n ? n : '',
                    },
                    description: {
                      content:
                        null !== (i = s.shortDescription) && void 0 !== i
                          ? i
                          : '',
                    },
                  }),
                  cta:
                    s.productId &&
                    g &&
                    u.createElement(en, {
                      displayName:
                        null !== (o = s.displayName) && void 0 !== o ? o : '',
                      productId: s.productId,
                      productSlug:
                        null !== (r = s.slug) && void 0 !== r ? r : '',
                      variantId: Number(g),
                      outOfStock: s.outOfStock,
                    }),
                  tag: u.createElement(
                    u.Fragment,
                    null,
                    s.onSale &&
                      u.createElement(
                        a.vw,
                        { variant: 'callout', size: 'sm' },
                        'Sale'
                      ),
                    s.isNew &&
                      u.createElement(
                        a.vw,
                        { variant: 'primary', size: 'sm' },
                        'New!'
                      ),
                    s.outOfStock &&
                      u.createElement(
                        a.vw,
                        { variant: 'disabled', size: 'sm' },
                        'Out of stock'
                      )
                  ),
                  handleOnClick:
                    ((x = null == s ? void 0 : s.slug),
                    () => {
                      x && (0, $a.qX)(x, 'Product Card - Card Click');
                    }),
                  variant: 'default',
                  showBrandImage: !0,
                  isRotatedProduct: !0,
                  linkTo: `/products/${s.slug}/`,
                };
                var x;
              })({
                product:
                  null == v || null === (h = v.spreeProduct) || void 0 === h
                    ? void 0
                    : h.contentfulProductInfo,
                promotionable:
                  null !==
                    (x =
                      null == v || null === (A = v.spreeProduct) || void 0 === A
                        ? void 0
                        : A.promotionable) &&
                  void 0 !== x &&
                  x,
                price: l,
                variantId: n,
                advertisedPromos: t,
              });
            }
          },
        };
      var on = l(55572);
      const rn = (e) => {
        var t;
        const {
            description: l,
            handleClick: n,
            index: i,
            isSelected: o,
            onlyChild: r = !1,
            period: s,
            perks: c,
            price: d,
            isStatic: p = !1,
          } = e,
          g =
            null == d || null === (t = d.value) || void 0 === t
              ? void 0
              : t.split('.'),
          h =
            c &&
            c.map((e, t) =>
              u.createElement(
                a.az,
                {
                  key: `perk-${t}`,
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: 2,
                  _last: { marginBottom: 0 },
                },
                u.createElement(a.In, {
                  as: Le.r,
                  size: 'md',
                  color: e.isHighlighted ? 'eggplant.base' : 'viridian.base',
                  marginRight: [1, 2],
                }),
                u.createElement(
                  a.EY,
                  {
                    size: 'md',
                    color: e.isHighlighted ? 'eggplant.base' : 'tints.black',
                  },
                  e.title
                )
              )
            );
        return u.createElement(
          a.mc,
          {
            _hover: { cursor: 'pointer' },
            backgroundColor: 'tints.white',
            border: p ? '0' : '2px',
            borderColor: o ? 'viridian.base' : 'tints.white',
            borderRadius: '12',
            'data-testid': 'pricing-card',
            height: '100%',
            onClick: () => n(i),
            padding: [6, 10],
            position: 'relative',
            maxWidth: r ? '478px' : 'unset',
            size: 'fluid',
            'data-element': 'Container',
            'data-component': 'PricingCard',
            'data-source-file': 'PricingCard.tsx',
          },
          !p &&
            u.createElement(
              a.az,
              {
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px',
                borderColor: o ? 'viridian.base' : 'tints.uiGrey',
                backgroundColor: o ? 'viridian.base' : 'tints.white',
                position: 'absolute',
                top: [6, 10],
                right: [6, 10],
              },
              u.createElement(a.In, {
                as: Ka.J,
                color: 'tints.white',
                width: '100%',
                height: '100%',
                padding: '12%',
              })
            ),
          u.createElement(
            a.DZ,
            {
              size: 'md',
              marginBottom: 2,
              'data-element': 'Heading',
              'data-source-file': 'PricingCard.tsx',
            },
            s
          ),
          u.createElement(
            a.EY,
            {
              as: 'div',
              size: 'lg',
              color: 'tints.darkGrey',
              marginBottom: 5,
              'data-element': 'Text',
              'data-source-file': 'PricingCard.tsx',
            },
            l ? (0, m.A)(l) : null
          ),
          u.createElement(
            a.az,
            {
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              'data-element': 'Box',
              'data-source-file': 'PricingCard.tsx',
            },
            null != g && g[0]
              ? u.createElement(
                  a.az,
                  {
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'baseline',
                    marginRight: ['10px', 3],
                  },
                  u.createElement(a.DZ, { size: 'md' }, '$'),
                  u.createElement(
                    a.DZ,
                    { size: 'lg' },
                    null == g ? void 0 : g[0]
                  ),
                  null != g && g[1]
                    ? u.createElement(
                        a.DZ,
                        { size: 'md' },
                        `.${null == g ? void 0 : g[1]}`
                      )
                    : null
                )
              : null,
            null != d && d.discount
              ? u.createElement(
                  a.vw,
                  {
                    size: 'sm',
                    variant: 'tertiary',
                    padding: ['4px 8px', 2],
                    background: 'eggplant.base',
                  },
                  d.discount
                )
              : null
          ),
          null != d && d.frequency
            ? u.createElement(
                a.EY,
                { size: 'md', color: 'tints.darkGrey', marginBottom: [6, 8] },
                d.frequency
              )
            : null,
          u.createElement(a.az, {
            width: '100%',
            height: '1px',
            backgroundColor: 'tints.uiGrey',
            marginBottom: [6, 8],
            'data-element': 'Box',
            'data-source-file': 'PricingCard.tsx',
          }),
          u.createElement(
            a.az,
            { 'data-element': 'Box', 'data-source-file': 'PricingCard.tsx' },
            h
          )
        );
      };
      var sn = u.memo(rn);
      const cn = [
        `${Qe.oq}/virtual-care/intake?program=everlywell-plus&plan=1-month`,
        `${Qe.oq}/virtual-care/intake?program=everlywell-plus&plan=12-month`,
      ];
      var dn = (e) => {
        var t, l, n, i;
        const {
            CTALabel: o,
            backgroundColor: s,
            disclaimer: c,
            eyebrow: d,
            options: m,
            sectionId: p,
            selectedOptionCallback: g,
            title: h,
            hasExperimentModal: x,
            modal: A,
          } = e,
          { handleMdpCtaClick: f } = (0, w.A)(),
          v = null !== (t = (0, T.D0)().isOldMDPCheckout) && void 0 !== t && t,
          { 0: y, 1: C } = (0, u.useState)(!1),
          { 0: S, 1: k } = (0, u.useState)(0),
          { 0: I, 1: z } = (0, u.useState)(),
          { 0: D, 1: P } = (0, u.useState)([]),
          { 0: M, 1: N } = (0, u.useState)(!1);
        (0, u.useEffect)(() => {
          const e = !v;
          let t = cn[S];
          P(cn), e && ((t = m[S].url), P(m.map((e) => e.url))), z(t);
        }, [S, v, m]),
          (0, u.useEffect)(() => {
            !M && I && g && (g({ ...m[S], url: I }), N(!0));
          }, [M, m, S, g, I]);
        const F = (e) => {
            k(e), g && g({ ...m[e], url: D[e] });
          },
          L = m.map((e, t) =>
            u.createElement(
              sn,
              Object.assign({ key: `pricing-card-${t}` }, e, {
                isSelected: t === S,
                index: t,
                handleClick: F,
                onlyChild: 1 === m.length,
              })
            )
          ),
          O = {
            variant: 'primary',
            rightIcon: u.createElement(a.In, {
              as: on.Q,
              color: 'tints.white',
            }),
            onClick: (e) => {
              if (
                (E.Ay.track({
                  event: b.r.EVENTS.CLICKED_BUTTON,
                  data: {
                    sectionHeader: h,
                    contentfulSection: 'PricingSelector',
                    ctaText: o,
                    selectedOption: m[S].period,
                  },
                }),
                x && m[S].isInvalid)
              )
                return e.preventDefault(), void C(!0);
              f({ event: e, ctaUrl: I || '' });
            },
            id: 'pricing-section-join-cta',
            ...(0, B.ax)(I),
          };
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            r.A,
            {
              id: p || '',
              display: 'flex',
              justifyContent: 'center',
              size: ['fluid', 'fluid', 'fluid', 'fluid', 'ultra'],
              paddingTop: ['60px', '120px'],
              paddingBottom: ['60px', '120px'],
              backgroundColor: s || 'viridian.wash',
              clipPath: [
                'ellipse(350% 60% at 50% 60%)',
                'ellipse(170% 60% at 50% 60%)',
              ],
            },
            u.createElement(
              a.mc,
              {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                size: ['sm', 'sm', 'lg'],
              },
              u.createElement(
                a.EY,
                {
                  size: 'lg',
                  width: '100%',
                  textAlign: 'center',
                  color: 'viridian.base',
                  marginBottom: ['1', '2'],
                },
                d
              ),
              u.createElement(
                a.DZ,
                {
                  size: ['32px', '2xl'],
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: 10,
                },
                h
              ),
              u.createElement(
                a.az,
                {
                  display: 'flex',
                  flexDirection: ['column', 'column', 'row'],
                  gap: [5, 4],
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: [6, 10],
                },
                L
              ),
              u.createElement(a.$n, O, o),
              c &&
                u.createElement(
                  a.az,
                  { marginTop: [12] },
                  u.createElement(
                    a.EY,
                    {
                      size: 'sm',
                      color: 'tints.darkGrey',
                      textAlign: 'center',
                    },
                    c
                  )
                )
            )
          ),
          A &&
            u.createElement(
              Vt.aF,
              { open: y, openHandler: C, zIndex: 11 },
              u.createElement(
                a.so,
                { flexDirection: 'column', gap: '6' },
                (null == A ? void 0 : A.title) &&
                  u.createElement(
                    a.DZ,
                    { size: 'lg', color: 'viridian.base' },
                    null == A ? void 0 : A.title
                  ),
                (null == A ? void 0 : A.description) &&
                  u.createElement(
                    a.EY,
                    { color: 'tints.darkGrey' },
                    null == A ? void 0 : A.description
                  ),
                (null == A ? void 0 : A.cta) &&
                  u.createElement(
                    a.$n,
                    Object.assign(
                      {
                        width: '100%',
                        onClick: (e) => {
                          var t, l, a, n, i;
                          x && C(!1);
                          (
                            (null == A || null === (t = A.cta) || void 0 === t
                              ? void 0
                              : t.url) || ''
                          ).includes('#disclaimer') &&
                            f({ event: e, ctaUrl: I || '' }),
                            E.Ay.track({
                              event: b.r.EVENTS.CLICKED_BUTTON,
                              data: {
                                sectionHeader: h,
                                contentfulSection: 'PricingSelector',
                                ctaText:
                                  null !==
                                    (l =
                                      null == A ||
                                      null === (a = A.cta) ||
                                      void 0 === a
                                        ? void 0
                                        : a.label) && void 0 !== l
                                    ? l
                                    : '',
                                ctaUrl:
                                  null !==
                                    (n =
                                      null == A ||
                                      null === (i = A.cta) ||
                                      void 0 === i
                                        ? void 0
                                        : i.url) && void 0 !== n
                                    ? n
                                    : '',
                              },
                            });
                        },
                      },
                      (null == A || null === (l = A.cta) || void 0 === l
                        ? void 0
                        : l.url) &&
                        (0, B.ax)(
                          null == A || null === (n = A.cta) || void 0 === n
                            ? void 0
                            : n.url
                        )
                    ),
                    null == A || null === (i = A.cta) || void 0 === i
                      ? void 0
                      : i.label
                  )
              )
            )
        );
      };
      var un = l(89841),
        mn = l(66985);
      function pn(e) {
        let {
          buttonLabel: t,
          options: l,
          onChange: n,
          defaultSelectedLabel: i,
          defaultSelectedOptions: o,
          allowMultiple: r = !1,
        } = e;
        const s = r ? 'checkbox' : 'radio',
          { 0: c, 1: d } = (0, u.useState)(new Set(o || [])),
          m = (e) => {
            r
              ? ((e) => {
                  const t = new Set(c);
                  c.has(e) ? t.delete(e) : t.add(e), d(t), n(Array.from(t));
                })(e)
              : ((e) => {
                  if (c.has(e)) return d(new Set([])), void n([]);
                  d(new Set([e])), n([e]);
                })(e);
          };
        return u.createElement(
          a.az,
          {
            display: 'flex',
            width: '100%',
            'data-element': 'Box',
            'data-component': 'DropdownFilter',
            'data-source-file': 'DropdownFilter.tsx',
          },
          u.createElement(
            a.W1,
            {
              closeOnSelect: !r,
              size: ['lg', 'md'],
              'data-element': 'Menu',
              'data-source-file': 'DropdownFilter.tsx',
            },
            u.createElement(
              a.IU,
              {
                as: a.$n,
                size: ['md', 'sm'],
                colorScheme: 'whiteCS',
                borderRadius: '12',
                border: '1.5px solid',
                borderColor: 'tints.lightGrey',
                width: '100%',
                'data-element': 'MenuButton',
                'data-source-file': 'DropdownFilter.tsx',
              },
              u.createElement(
                a.az,
                {
                  display: 'flex',
                  justifyContent: ['space-between', 'center'],
                  'data-element': 'Box',
                  'data-source-file': 'DropdownFilter.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    display: 'flex',
                    alignItems: 'center',
                    color: 'tints.darkGrey',
                    'data-element': 'Box',
                    'data-source-file': 'DropdownFilter.tsx',
                  },
                  0 === c.size
                    ? u.createElement(u.Fragment, null, t)
                    : c.size > 0 && c.size < 3
                    ? u.createElement(u.Fragment, null, c.size ? c : t)
                    : u.createElement(
                        u.Fragment,
                        null,
                        u.createElement(gn, null, c.size),
                        ' ',
                        t
                      )
                ),
                u.createElement(a.In, {
                  as: mn.a,
                  marginLeft: '2',
                  color: 'tints.darkGrey',
                  'data-element': 'Icon',
                  'data-source-file': 'DropdownFilter.tsx',
                })
              )
            ),
            u.createElement(
              a.cO,
              {
                zIndex: 2,
                'data-element': 'MenuList',
                'data-source-file': 'DropdownFilter.tsx',
              },
              u.createElement(
                a.ip,
                {
                  defaultValue: o,
                  type: s,
                  'data-element': 'MenuOptionGroup',
                  'data-source-file': 'DropdownFilter.tsx',
                },
                l.map((e) =>
                  u.createElement(
                    a.k5,
                    {
                      key: e,
                      value: e,
                      onClick: () => m(e),
                      icon: c.has(e)
                        ? void 0
                        : u.createElement('svg', {
                            width: '1rem',
                            height: '1rem',
                          }),
                    },
                    e
                  )
                )
              )
            )
          )
        );
      }
      const gn = (e) => {
        let { children: t } = e;
        return u.createElement(
          a.EY,
          {
            display: 'inline-block',
            backgroundColor: 'viridian.base',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            color: 'white',
            marginRight: '1',
            fontSize: 'md',
            'data-element': 'Text',
            'data-component': 'Counter',
            'data-source-file': 'DropdownFilter.tsx',
          },
          t
        );
      };
      var hn = l(32959),
        xn = l(28627),
        An = l(29404),
        fn = l(10931),
        vn = l(71705),
        En = l(208);
      function bn(e) {
        const { handleMdpCtaClick: t } = (0, w.A)(),
          {
            label: l,
            url: n,
            hideSeparator: i,
            startingText: o,
            price: r,
            tracking: s,
          } = e;
        return u.createElement(
          Me.A,
          {
            backgroundColorOverride: 'tints.white',
            type: 'fixed',
            'data-element': 'StickyFooter',
            'data-component': 'StickyMdpCta',
            'data-source-file': 'StickyMdpCta.tsx',
          },
          u.createElement(
            a.az,
            {
              id: 'sticky-cta-box',
              width: '100%',
              paddingRight: '2',
              paddingY: '4',
              'data-element': 'Box',
              'data-source-file': 'StickyMdpCta.tsx',
            },
            u.createElement(Q.A, {
              id: 'sticky-cta-pricing-button',
              startingText: o,
              priceText: r.value,
              size: 'md',
              billFrequencyText: r.frequency,
              buttonText: l,
              colorScheme: 'greenCS',
              hideSeparator: i,
              onButtonClick: (e) => {
                t({ event: e, ctaUrl: n }),
                  E.Ay.track({
                    event: b.r.EVENTS.CLICKED_BUTTON,
                    data: {
                      sectionHeader: s.sectionHeader,
                      contentfulSection: 'MembershipDetailsPage',
                      ctaText: s.ctaText,
                    },
                  });
              },
              linkTo: n,
              'data-element': 'ProductPricingButton',
              'data-source-file': 'StickyMdpCta.tsx',
            })
          )
        );
      }
      var yn = u.memo(bn);
      const Cn = `${Qe.oq}/virtual-care/intake?program=everlywell-plus`,
        wn = { label: 'Join today ', url: Cn },
        Sn = (e) => {
          var t, l, a;
          let { metadata: n, option: i } = e;
          const o = null == n ? void 0 : n.title,
            r =
              null == n || null === (t = n.ctas) || void 0 === t
                ? void 0
                : t[0];
          var s;
          if (!r)
            return {
              label: wn.label,
              url: (null == i ? void 0 : i.url) || wn.url,
              hideSeparator: !1,
              startingText: 'From',
              price: {
                value:
                  (null == i || null === (s = i.price) || void 0 === s
                    ? void 0
                    : s.value) || '39',
                frequency: 'month',
              },
              tracking: {
                sectionHeader: 'Everlywell+ Sticky CTA',
                ctaText: '$39/month Join today ',
              },
            };
          const c =
              null == r ||
              null === (l = r.metadata) ||
              void 0 === l ||
              null === (a = l.context) ||
              void 0 === a
                ? void 0
                : a.ctaParts,
            d = `${null == c ? void 0 : c.startingText} ${
              null == c ? void 0 : c.priceText
            } ${null != c && c.hideSeparator ? ' ' : '/'} ${
              null == c ? void 0 : c.billFrequencyText
            }`;
          return {
            label: r.label || '',
            url: (null == i ? void 0 : i.url) || r.url || '',
            hideSeparator: (null == c ? void 0 : c.hideSeparator) || !1,
            startingText: (null == c ? void 0 : c.startingText) || '',
            price: {
              value: (null == c ? void 0 : c.priceText) || '',
              frequency: (null == c ? void 0 : c.billFrequencyText) || '',
            },
            tracking: { sectionHeader: `${o} Sticky CTA`, ctaText: d },
          };
        };
      var kn = l(35015),
        In = l(95658),
        zn = l(43695),
        Bn = l(10613),
        Dn = l(3371),
        Pn = l(66470),
        Tn = l(99151),
        Mn = l(3235);
      const Nn = {
        BannerAndCardsV2: {
          component: g,
          parser: (e, t) => {
            const { body: l, images: a, eyebrow: n } = e,
              { title: i, theme: o, flags: r } = e.metadata || {};
            return {
              eyebrow: n,
              title: i,
              bgColor: null == o ? void 0 : o.backgroundColor,
              flags: r,
              headline: l,
              desktopBackgroundImage: a && a[0].desktopImage,
              desktopBackgroundImageAltText: a && a[0].desktopImageAltText,
              productsSubsection: x(e, t),
            };
          },
          centerContent: !0,
        },
        PressSectionV2: { component: Y.A, parser: j.A },
        BannerAndToolCards: {
          component: k,
          parser: (e) => {
            var t, l, a, n, i, o, r, s;
            const { displayName: c, body: d, images: u, subsections: m } = e,
              { title: p, theme: g, flags: h, ctas: x } = e.metadata || {},
              A = null == g ? void 0 : g.backgroundColor,
              f =
                u &&
                (null === (t = u[0]) || void 0 === t ? void 0 : t.desktopImage),
              v =
                u &&
                (null === (l = u[0]) || void 0 === l
                  ? void 0
                  : l.desktopImageAltText);
            if (!(c && p && d && f && v && A)) return null;
            let E = null;
            m &&
              null !== (a = m[0]) &&
              void 0 !== a &&
              null !== (n = a.metadata) &&
              void 0 !== n &&
              null !== (i = n.context) &&
              void 0 !== i &&
              i.icon &&
              (E = ((e) =>
                e
                  .filter(
                    (e) =>
                      'BannerAndToolCards' ===
                      (null == e ? void 0 : e.componentName)
                  )
                  .map((e) => ({
                    title: e.displayName,
                    iconName: e.metadata.context.icon,
                  })))(m));
            const b = ((e) =>
              e && 0 !== e.length
                ? e
                    .filter(
                      (e) =>
                        'ToolCardV2' === (null == e ? void 0 : e.componentName)
                    )
                    .map((e) => {
                      var t, l, a, n, i, o;
                      return {
                        title: (null == e ? void 0 : e.displayName) || '',
                        bgColor:
                          (null == e ||
                          null === (t = e.metadata) ||
                          void 0 === t ||
                          null === (l = t.theme) ||
                          void 0 === l
                            ? void 0
                            : l.backgroundColor) || '',
                        textColor:
                          (null == e ||
                          null === (a = e.metadata) ||
                          void 0 === a ||
                          null === (n = a.theme) ||
                          void 0 === n
                            ? void 0
                            : n.textColor) || '',
                        body: (null == e ? void 0 : e.body) || '',
                        desktopBackgroundImage:
                          (null == e ||
                          null === (i = e.images) ||
                          void 0 === i ||
                          null === (o = i[0]) ||
                          void 0 === o
                            ? void 0
                            : o.desktopImage) || '',
                      };
                    })
                : [])(m);
            return {
              eyebrow: c,
              title: p,
              bgColor: A,
              headline: d,
              flags: h,
              desktopBackgroundImage: f,
              desktopBackgroundImageAltText: v,
              bullets: E,
              toolCards: b,
              cta: {
                label:
                  (null == x || null === (o = x[0]) || void 0 === o
                    ? void 0
                    : o.label) || '',
                url:
                  (null == x || null === (r = x[0]) || void 0 === r
                    ? void 0
                    : r.url) || '',
                metadata:
                  (null == x || null === (s = x[0]) || void 0 === s
                    ? void 0
                    : s.metadata) || {},
              },
            };
          },
          centerContent: !0,
        },
        StepCardList: { component: En.A, parser: En.u },
        ComparisonTable: {
          component: Nt,
          parser: (e) => {
            const { eyebrow: t, metadata: l, subsections: a } = e || {},
              { title: n } = l || {},
              i =
                (null == a
                  ? void 0
                  : a
                      .filter((e) => null !== e)
                      .map((e) => {
                        const { metadata: t, images: l } = e || {},
                          { flags: a, theme: n, ctas: i } = t || {},
                          { mobileImage: o, desktopImage: r } = (0, B.nl)(l);
                        return {
                          header: {
                            text: null == t ? void 0 : t.title,
                            backgroundColor:
                              null == n ? void 0 : n.backgroundColor,
                            mobileImage: o,
                            desktopImage: r,
                            cta: i && null != i && i[0] ? i[0] : null,
                          },
                          rows:
                            null == a
                              ? void 0
                              : a.map((e) => {
                                  const { displayText: t, metadata: l } =
                                      e || {},
                                    { theme: a, context: n } = l || {};
                                  return {
                                    text: t,
                                    textColor: null == a ? void 0 : a.textColor,
                                    iconName: null == n ? void 0 : n.iconName,
                                    iconColor: null == n ? void 0 : n.iconColor,
                                  };
                                }),
                        };
                      })) || [];
            return { eyebrow: t, title: n, tableColumns: i };
          },
        },
        CtaBanner: {
          component: I.A,
          parser: z.A,
          centerContent: !0,
          flexContainer: !0,
        },
        DigitalResultsSection: {
          component: Ft.A,
          parser: (e) => ({ data: e }),
          centerContent: !0,
        },
        FaqV2: { component: L.A, parser: L.O, centerContent: !0 },
        GridCardList: { component: O.A, parser: O.S, centerContent: !0 },
        HeroCarousel: { component: Z.A, parser: Z.U },
        HeroV3: {
          component: function (e) {
            var t, l, n, i, o, s, c;
            let {
              backgroundColor: m,
              bulletPoints: p,
              cta: g,
              desktopImage: h,
              eyebrow: x,
              eyebrowColor: f,
              eyebrowIcon: v,
              hideClipPath: S,
              mobileImage: k,
              title: I,
              titleColor: z,
              titleTag: D,
              disclaimer: P,
              disclaimerColor: M,
            } = e;
            const { handleMdpCtaClick: N } = (0, w.A)(),
              F = (0, T.D0)().hideJustunoCTA,
              L = (0, Qt.useLocation)(),
              {
                priceText: O,
                billFrequencyText: R,
                icon: V,
                startingText: Y,
                hideSeparator: j,
              } = (null == g ||
              null === (t = g.metadata) ||
              void 0 === t ||
              null === (l = t.context) ||
              void 0 === l
                ? void 0
                : l.ctaParts) || {},
              Z =
                null == g || null === (n = g.metadata) || void 0 === n
                  ? void 0
                  : n.flags,
              G = (0, B.n9)('isStandardButton', Z),
              W = (0, B.n9)('isJustunoLoadingState', Z),
              { isLoading: q, setJustUnoLoader: U } = ((e) => {
                let { isJustunoLoadingState: t } = e;
                const { 0: l, 1: a } = (0, u.useState)(!1),
                  n = (0, y.Bd)();
                return (
                  (0, u.useEffect)(() => {
                    l &&
                      setTimeout(() => {
                        a(!1);
                      }, 5e3);
                  }, [l]),
                  (0, u.useEffect)(() => {
                    n &&
                      (window.onJustunoQuizVisible = () => {
                        a(!1),
                          E.Ay.track({
                            event: b.r.EVENTS.VIEWED_COMPONENT,
                            data: {
                              label: 'JustunoSexualHealthQuiz',
                              hookName: 'useJustunoLoader',
                            },
                          });
                      });
                  }, [n]),
                  {
                    isLoading: l,
                    setJustUnoLoader: () => {
                      t && a(!0);
                    },
                  }
                );
              })({ isJustunoLoadingState: W }),
              K =
                null != g &&
                null !== (i = g.url) &&
                void 0 !== i &&
                i.includes('http')
                  ? (0, C.x)(g.url)
                  : `${null == g ? void 0 : g.url}`,
              J = (e, t) => {
                _();
                const { skipScreenerModal: l } = t || {};
                U(), N({ event: e, ctaUrl: K, skipScreenerModal: l });
              },
              _ = () => {
                E.Ay.track({
                  event: b.r.EVENTS.CLICKED_BUTTON,
                  data: {
                    sectionHeader: I || 'No title provided',
                    contentfulSection: 'HeroV3',
                    ctaText: (null == g ? void 0 : g.label) || 'No CTA label',
                  },
                });
              };
            return u.createElement(
              r.A,
              {
                size: ['fluid', null, null, null, 'ultra'],
                clipPath: S
                  ? 'none'
                  : [
                      'ellipse(250% 60% at 50% 40%)',
                      null,
                      'ellipse(120% 60% at 50% 40%)',
                    ],
                backgroundColor: m || void 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: ['column', null, 'row'],
                gap: '12',
                'data-element': 'SectionContainer',
                'data-component': 'HeroV3',
                'data-source-file': 'HeroV3.tsx',
              },
              u.createElement(
                a.az,
                {
                  paddingLeft: [6, null, 20],
                  paddingRight: [6, null, 'unset'],
                  paddingTop: [12, null, 6],
                  paddingBottom: [null, null, 12],
                  flex: '1',
                  'data-element': 'Box',
                  'data-source-file': 'HeroV3.tsx',
                },
                x
                  ? u.createElement(
                      a.so,
                      { alignItems: 'center', marginBottom: '4' },
                      v
                        ? u.createElement(
                            a._V,
                            Object.assign(
                              {},
                              (null == v ? void 0 : v.gatsbyImageData) && {
                                as: d.G,
                                image: v.gatsbyImageData,
                              },
                              !(null != v && v.gatsbyImageData) &&
                                (null == v ||
                                null === (o = v.file) ||
                                void 0 === o
                                  ? void 0
                                  : o.url) && { src: v.file.url },
                              {
                                alt: v.description || '',
                                width: 'auto',
                                maxHeight: a.w4.space[6],
                                marginRight: '2',
                              }
                            )
                          )
                        : null,
                      u.createElement(
                        a.EY,
                        { color: f || 'white', fontSize: ['lg', null, 'xl'] },
                        x
                      )
                    )
                  : null,
                I
                  ? u.createElement(
                      a.DZ,
                      {
                        as: D || 'h2',
                        color: z || void 0,
                        size: '2xl',
                        marginBottom: [6, null, 5],
                      },
                      I
                    )
                  : null,
                p && p.length > 0
                  ? u.createElement(
                      a.so,
                      {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2',
                        role: 'list',
                      },
                      null == p
                        ? void 0
                        : p.map((e, t) =>
                            u.createElement(Ht.A, {
                              key: `bullet-${t}`,
                              text: e.text || '',
                              textColor: e.textColor,
                              iconName: e.iconName || '',
                              iconColor: e.iconColor,
                              weight: 'fill',
                            })
                          )
                    )
                  : null,
                g &&
                  g.label &&
                  !(() => {
                    var e;
                    if (
                      (0, y.Bd)() &&
                      W &&
                      (null === (e = window) || void 0 === e || !e._jst)
                    )
                      return !0;
                    const t = (
                      (null == F ? void 0 : F.includePaths) || []
                    ).some(
                      (e) =>
                        L.pathname.replace(/^\/|\/$/g, '').toLowerCase() ===
                        e.replace(/^\/|\/$/g, '').toLowerCase()
                    );
                    return (null == F ? void 0 : F.enabled) && t;
                  })()
                  ? u.createElement(
                      a.az,
                      { marginTop: '8', width: ['100%', null, 'fit-content'] },
                      G
                        ? u.createElement(
                            a.$n,
                            Object.assign(
                              {
                                colorScheme: 'whiteCS',
                                onClick: (e) => J(e, { skipScreenerModal: !0 }),
                                className:
                                  null !==
                                    (s =
                                      null == g ||
                                      null === (c = g.metadata) ||
                                      void 0 === c
                                        ? void 0
                                        : c.metadata_id) && void 0 !== s
                                    ? s
                                    : '',
                                isLoading: q,
                              },
                              (null == g ? void 0 : g.url) && {
                                as: a.N_,
                                to: K,
                              }
                            ),
                            g.label
                          )
                        : u.createElement(Q.A, {
                            startingText: Y || '',
                            priceText: O || '',
                            size: 'md',
                            billFrequencyText: R || '',
                            hideSeparator: j || !1,
                            buttonText: g.label,
                            colorScheme: 'greenCS',
                            buttonIconRight: u.createElement(A.A, {
                              icon: V || 'ArrowDown',
                            }),
                            onButtonClick: J,
                            linkTo: K,
                            id: 'hero-v3-cta-button',
                          })
                    )
                  : null,
                P &&
                  u.createElement(a.EY, {
                    as: 'div',
                    color: M || 'white',
                    fontSize: 'sm',
                    opacity: 0.6,
                    marginTop: 8,
                    dangerouslySetInnerHTML: { __html: (0, H.aj)(P) },
                  })
              ),
              u.createElement(
                a.az,
                {
                  width: ['100%', null, 'unset'],
                  flex: [null, null, 2],
                  'data-element': 'Box',
                  'data-source-file': 'HeroV3.tsx',
                },
                k
                  ? u.createElement(
                      a.az,
                      { display: ['block', null, 'none'] },
                      u.createElement(a._V, {
                        as: d.G,
                        image: null == k ? void 0 : k.gatsbyImageData,
                        alt: (null == k ? void 0 : k.description) || '',
                        width: '100%',
                        imgStyle: { objectPosition: 'top' },
                      })
                    )
                  : null,
                h
                  ? u.createElement(
                      a.az,
                      {
                        display: ['none', null, 'flex'],
                        height: [null, null, '640px'],
                      },
                      u.createElement(a._V, {
                        as: d.G,
                        image: null == h ? void 0 : h.gatsbyImageData,
                        alt: (null == h ? void 0 : h.description) || '',
                        width: '100%',
                        imgStyle: { objectFit: 'contain' },
                      })
                    )
                  : null
              )
            );
          },
          parser: function (e) {
            var t;
            const { eyebrow: l, metadata: a, images: n } = e || {},
              {
                title: i,
                ctas: o,
                context: r,
                theme: s,
                flags: c,
                description: d,
              } = a || {},
              u = (0, B.n9)('hideClipPath', c),
              m =
                null == n
                  ? void 0
                  : n.find((e) => {
                      var t;
                      const l =
                        null == e || null === (t = e.metadata) || void 0 === t
                          ? void 0
                          : t.flags;
                      return (0, B.n9)('isEyebrowIcon', l);
                    }),
              p = null == e ? void 0 : e.subsections,
              g = p
                ? null == p
                  ? void 0
                  : p.map((e) => {
                      const { metadata: t } = e || {},
                        { title: l, context: a, theme: n } = t || {};
                      return {
                        text: l,
                        iconName: null == a ? void 0 : a.icon,
                        textColor: null == n ? void 0 : n.textColor,
                        iconColor: null == n ? void 0 : n.secondaryColor,
                      };
                    })
                : [],
              h = (0, B.nl)(n);
            return {
              eyebrow: l,
              eyebrowColor: null == s ? void 0 : s.secondaryColor,
              title: i,
              titleColor: null == s ? void 0 : s.primaryColor,
              backgroundColor: null == s ? void 0 : s.backgroundColor,
              titleTag: null == r ? void 0 : r.titleTag,
              bulletPoints: g,
              desktopImage: h.desktopImage,
              mobileImage: h.mobileImage,
              cta: o ? o[0] : null,
              hideClipPath: null != u && u,
              eyebrowIcon: null == m ? void 0 : m.desktopImage,
              disclaimer:
                null == d ||
                null === (t = d.childMarkdownRemark) ||
                void 0 === t
                  ? void 0
                  : t.html,
              disclaimerColor: null == s ? void 0 : s.tertiaryColor,
            };
          },
        },
        InteractiveBanner: {
          component: xl,
          parser: (e) => {
            var t, l, a;
            const { eyebrow: n, images: i, subsections: o } = e,
              { title: r, theme: s, ctas: c, order: d } = e.metadata || {},
              { desktopImage: u } = (0, B.nl)(i),
              m = { isSlider: [], isForm: [] },
              { isSlider: p, isForm: g } =
                null !==
                  (t =
                    null == o
                      ? void 0
                      : o.reduce((e, t) => {
                          switch (null == t ? void 0 : t.componentName) {
                            case 'WeightLossSlider':
                              e.isSlider.push(t);
                              break;
                            case 'LearnMoreForm':
                              e.isForm.push(t);
                          }
                          return e;
                        }, m)) && void 0 !== t
                  ? t
                  : m,
              h = g.map((e) => {
                var t, l, a, n, i, o, r, s;
                return {
                  eyebrow: (null == e ? void 0 : e.eyebrow) || '',
                  metadata: {
                    title:
                      (null == e || null === (t = e.metadata) || void 0 === t
                        ? void 0
                        : t.title) || '',
                    theme: {
                      backgroundColor:
                        (null == e ||
                        null === (l = e.metadata) ||
                        void 0 === l ||
                        null === (a = l.theme) ||
                        void 0 === a
                          ? void 0
                          : a.backgroundColor) || 'eggplant.light',
                      textColor:
                        (null == e ||
                        null === (n = e.metadata) ||
                        void 0 === n ||
                        null === (i = n.theme) ||
                        void 0 === i
                          ? void 0
                          : i.textColor) || 'tints.black',
                      primaryColor:
                        (null == e ||
                        null === (o = e.metadata) ||
                        void 0 === o ||
                        null === (r = o.theme) ||
                        void 0 === r
                          ? void 0
                          : r.primaryColor) || 'viridian.light',
                    },
                    order:
                      (null == e || null === (s = e.metadata) || void 0 === s
                        ? void 0
                        : s.order) || 1,
                  },
                };
              }),
              x = p.map((e) => {
                var t, l, a, n, i, o, r, s, c, d, u, m;
                return {
                  eyebrow: (null == e ? void 0 : e.eyebrow) || '',
                  body: {
                    raw:
                      (null == e || null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.raw) || '',
                  },
                  desktopImage:
                    (null == e ? void 0 : e.images[0].desktopImage) || '',
                  metadata: {
                    title:
                      (null == e || null === (l = e.metadata) || void 0 === l
                        ? void 0
                        : l.title) || '',
                    context: {
                      calculation: {
                        percentage:
                          (null == e ||
                          null === (a = e.metadata) ||
                          void 0 === a ||
                          null === (n = a.context) ||
                          void 0 === n ||
                          null === (i = n.calculation) ||
                          void 0 === i
                            ? void 0
                            : i.percentage) || 0,
                      },
                    },
                    theme: {
                      backgroundColor:
                        (null == e ||
                        null === (o = e.metadata) ||
                        void 0 === o ||
                        null === (r = o.theme) ||
                        void 0 === r
                          ? void 0
                          : r.backgroundColor) || 'eggplant.lighter',
                      textColor:
                        (null == e ||
                        null === (s = e.metadata) ||
                        void 0 === s ||
                        null === (c = s.theme) ||
                        void 0 === c
                          ? void 0
                          : c.textColor) || 'eggplant.light',
                      primaryColor:
                        (null == e ||
                        null === (d = e.metadata) ||
                        void 0 === d ||
                        null === (u = d.theme) ||
                        void 0 === u
                          ? void 0
                          : u.primaryColor) || 'violet.dark',
                    },
                    order:
                      (null == e || null === (m = e.metadata) || void 0 === m
                        ? void 0
                        : m.order) || 1,
                  },
                };
              });
            return {
              eyebrow: n,
              title: r,
              desktopImage: u,
              theme: {
                backgroundColor:
                  (null == s ? void 0 : s.backgroundColor) ||
                  'tints.lightCream',
                textColor: (null == s ? void 0 : s.textColor) || 'tints.black',
                primaryColor:
                  (null == s ? void 0 : s.primaryColor) || 'violet.dark',
              },
              cta: {
                label:
                  (null == c || null === (l = c[0]) || void 0 === l
                    ? void 0
                    : l.label) || '',
                url:
                  (null == c || null === (a = c[0]) || void 0 === a
                    ? void 0
                    : a.url) || '',
              },
              order: d,
              weightLossSlider: x,
              learnMoreForm: h,
            };
          },
        },
        MedicalConcierge: {
          component: $,
          parser: (e) => {
            const { eyebrow: t, images: l } = e,
              { theme: a, title: n } = e.metadata || {};
            return {
              eyebrow: t,
              title: n,
              images: l || [],
              theme: {
                textColor:
                  (null == a ? void 0 : a.textColor) || 'viridian.base',
                backgroundColor:
                  (null == a ? void 0 : a.backgroundColor) ||
                  'tints.lightCream',
              },
            };
          },
        },
        MultipleCardsCarousel: {
          component: function (e) {
            let { eyebrow: t, title: l, cards: n, disclaimer: i } = e;
            const { handleMdpCtaClick: o } = (0, w.A)(),
              c = (e) => {
                const { clickEvent: t, label: l, cardTitle: a, ctaUrl: n } = e;
                o({ event: t, ctaUrl: n || '' }), m(l, a);
              },
              m = (e, t) => {
                E.Ay.track({
                  event: b.r.EVENTS.CLICKED_LINK,
                  data: {
                    sectionHeader: l || 'No title provided',
                    contentfulSection: 'MultipleCardsCarousel',
                    ctaText: e || 'No CTA label',
                    cardTitle: t || 'No title provided',
                  },
                });
              },
              p = n
                ? null == n
                  ? void 0
                  : n.map((e, t) => {
                      const {
                          tags: l,
                          title: n,
                          description: i,
                          cta: o,
                          mobileImage: r,
                          desktopImage: s,
                        } = e,
                        m = (0, y.Rw)(null == o ? void 0 : o.url),
                        p = m
                          ? (0, C.x)((null == o ? void 0 : o.url) || '')
                          : null == o
                          ? void 0
                          : o.url,
                        g = {
                          ...(m ? { href: p, as: 'a' } : { to: p, as: v.Link }),
                          variant: 'primary',
                          size: 'sm',
                          colorScheme: 'whiteCS',
                          id: `${null == o ? void 0 : o.label}-${
                            null == e ? void 0 : e.title
                          }-card`,
                          onClick: (t) => {
                            c({
                              clickEvent: t,
                              label: null == o ? void 0 : o.label,
                              cardTitle: null == e ? void 0 : e.title,
                              ctaUrl: null == o ? void 0 : o.url,
                            }),
                              m && p
                                ? (window.location.href = p)
                                : p && (0, v.navigate)(p);
                          },
                        };
                      return u.createElement(
                        fl.A,
                        {
                          linkTo: p,
                          key: `card-${t}`,
                          showBrandImage: !0,
                          handleOnClick: (t) =>
                            c({
                              clickEvent: t,
                              label: null == o ? void 0 : o.label,
                              cardTitle: null == e ? void 0 : e.title,
                              ctaUrl: null == o ? void 0 : o.url,
                            }),
                          size: 'sm',
                          tag:
                            l && null != l && l.length
                              ? u.createElement(
                                  a.so,
                                  { gap: '0.5' },
                                  l.map((e, t) =>
                                    u.createElement(al.A, {
                                      key: `tag-${t}`,
                                      displayText:
                                        (null == e ? void 0 : e.displayText) ||
                                        '',
                                      metadata: null == e ? void 0 : e.metadata,
                                    })
                                  )
                                )
                              : null,
                          disableFloatingTags: !0,
                          pricing: null,
                          image: u.createElement(
                            u.Fragment,
                            null,
                            r
                              ? u.createElement(
                                  a.az,
                                  { display: ['block', null, 'none'] },
                                  u.createElement(a._V, {
                                    as: d.G,
                                    image:
                                      null == r ? void 0 : r.gatsbyImageData,
                                    margin: '0 auto',
                                    alt:
                                      (null == r ? void 0 : r.description) ||
                                      '',
                                  })
                                )
                              : null,
                            s
                              ? u.createElement(
                                  a.az,
                                  { display: ['none', null, 'block'] },
                                  u.createElement(a._V, {
                                    as: d.G,
                                    image:
                                      null == s ? void 0 : s.gatsbyImageData,
                                    margin: '0 auto',
                                    alt:
                                      (null == s ? void 0 : s.description) ||
                                      '',
                                  })
                                )
                              : null
                          ),
                          centralizeCTA: !0,
                          cta: o ? u.createElement(a.$n, g, o.label) : null,
                        },
                        n
                          ? u.createElement(
                              a.DZ,
                              {
                                size: 'md',
                                color: 'tints.black',
                                as: 'h3',
                                textAlign: 'center',
                                marginBottom: '1',
                              },
                              n
                            )
                          : null,
                        i
                          ? u.createElement(
                              a.EY,
                              {
                                size: 'md',
                                color: 'tints.darkGrey',
                                textAlign: 'center',
                              },
                              i
                            )
                          : null
                      );
                    })
                : [];
            return u.createElement(
              a.mc,
              {
                size: 'fluid',
                paddingY: ['10', '20'],
                backgroundColor: 'tints.lightCream',
                'data-element': 'Container',
                'data-component': 'MultipleCardsCarousel',
                'data-source-file': 'MultipleCardsCarousel.tsx',
              },
              u.createElement(
                r.A,
                {
                  'data-element': 'SectionContainer',
                  'data-source-file': 'MultipleCardsCarousel.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    paddingX: [6, 10, 12],
                    'data-element': 'Box',
                    'data-source-file': 'MultipleCardsCarousel.tsx',
                  },
                  u.createElement(s.A, {
                    eyebrow: t,
                    title: l,
                    'data-element': 'SectionHeader',
                    'data-source-file': 'MultipleCardsCarousel.tsx',
                  })
                ),
                n
                  ? u.createElement(
                      u.Fragment,
                      null,
                      n && n.length > 0
                        ? u.createElement(Al.A, { cards: p })
                        : null,
                      null != i && i.raw
                        ? u.createElement(
                            a.az,
                            {
                              paddingX: [6, 10, 12],
                              marginTop: [6, 12],
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              sx: {
                                padding: {
                                  color: 'tints.uiGrey',
                                  textAlign: 'center',
                                  fontSize: 'sm',
                                },
                              },
                            },
                            u.createElement(Lt.A, { contentfulRichText: i })
                          )
                        : null
                    )
                  : u.createElement(a.EA, { height: '400px' })
              )
            );
          },
          parser: function (e) {
            const { eyebrow: t, metadata: l, body: a } = e || {},
              { title: n } = l || {},
              i = null == e ? void 0 : e.subsections,
              o = i
                ? null == i
                  ? void 0
                  : i.map((e) => {
                      var t, l, a, n, i;
                      const { metadata: o } = e || {},
                        { desktopImage: r, mobileImage: s } = (0, B.nl)(
                          e.images
                        );
                      return {
                        title: null == o ? void 0 : o.title,
                        description:
                          null == o ||
                          null === (t = o.description) ||
                          void 0 === t
                            ? void 0
                            : t.description,
                        cta: {
                          label:
                            (null == o ||
                            null === (l = o.ctas) ||
                            void 0 === l ||
                            null === (a = l[0]) ||
                            void 0 === a
                              ? void 0
                              : a.label) || '',
                          url:
                            (null == o ||
                            null === (n = o.ctas) ||
                            void 0 === n ||
                            null === (i = n[0]) ||
                            void 0 === i
                              ? void 0
                              : i.url) || '',
                        },
                        desktopImage: r,
                        mobileImage: s,
                        tags: (null == o ? void 0 : o.flags) || [],
                      };
                    })
                : [];
            return {
              eyebrow: t,
              title: n,
              disclaimer: { raw: (null == a ? void 0 : a.raw) || '' },
              cards: o,
            };
          },
        },
        NavigationAnchor: { component: ze, parser: Be },
        PricingSelector: {
          component: dn,
          parser: (e, t) => {
            var l, a, n, i, o, r, s, c, d, u, m;
            const {
              displayName: p,
              subsections: g,
              metadata: {
                title: h,
                ctas: x,
                metadata_id: A,
                context: f,
                flags: v,
              },
              modal: E,
            } = e;
            if (!(p || g || h || x)) return null;
            return {
              eyebrow: p,
              title: h,
              options:
                g &&
                g.map((e) => {
                  var t, l, a, n, i, o, r, s, c, d, u, m, p, g, h;
                  const x =
                    null == e || null === (t = e.subsections) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                          var t, l, a;
                          return {
                            title: e.displayName,
                            isHighlighted:
                              (null === (t = e.metadata) ||
                              void 0 === t ||
                              null === (l = t.flags) ||
                              void 0 === l ||
                              null === (a = l[0]) ||
                              void 0 === a
                                ? void 0
                                : a.value) || !1,
                          };
                        });
                  return {
                    period: e.displayName,
                    description: e.body,
                    url:
                      null == e ||
                      null === (l = e.metadata) ||
                      void 0 === l ||
                      null === (a = l.context) ||
                      void 0 === a
                        ? void 0
                        : a.url,
                    price: {
                      value:
                        null == e ||
                        null === (n = e.metadata) ||
                        void 0 === n ||
                        null === (i = n.context) ||
                        void 0 === i ||
                        null === (o = i.price) ||
                        void 0 === o
                          ? void 0
                          : o.value,
                      discount:
                        null == e ||
                        null === (r = e.metadata) ||
                        void 0 === r ||
                        null === (s = r.context) ||
                        void 0 === s ||
                        null === (c = s.price) ||
                        void 0 === c
                          ? void 0
                          : c.discount,
                      frequency:
                        null == e ||
                        null === (d = e.metadata) ||
                        void 0 === d ||
                        null === (u = d.context) ||
                        void 0 === u ||
                        null === (m = u.price) ||
                        void 0 === m
                          ? void 0
                          : m.frequency,
                    },
                    isStatic:
                      null == e ||
                      null === (p = e.metadata) ||
                      void 0 === p ||
                      null === (g = p.context) ||
                      void 0 === g
                        ? void 0
                        : g.pricing_card_is_static,
                    perks: x,
                    isInvalid: (0, B.n9)(
                      'isInvalidOption',
                      null == e || null === (h = e.metadata) || void 0 === h
                        ? void 0
                        : h.flags
                    ),
                  };
                }),
              CTALabel: x[0].displayName,
              sectionId: A || null,
              selectedOptionCallback: t,
              disclaimer: null == f ? void 0 : f.pricing_disclaimer,
              hasExperimentModal: (0, B.n9)('hasExperimentModal', v),
              modal: {
                title:
                  null == E ||
                  null === (l = E.content) ||
                  void 0 === l ||
                  null === (a = l[0]) ||
                  void 0 === a ||
                  null === (n = a.metadata) ||
                  void 0 === n
                    ? void 0
                    : n.title,
                description:
                  null == E ||
                  null === (i = E.content) ||
                  void 0 === i ||
                  null === (o = i[0]) ||
                  void 0 === o ||
                  null === (r = o.metadata) ||
                  void 0 === r ||
                  null === (s = r.description) ||
                  void 0 === s
                    ? void 0
                    : s.description,
                cta:
                  null == E ||
                  null === (c = E.content) ||
                  void 0 === c ||
                  null === (d = c[0]) ||
                  void 0 === d ||
                  null === (u = d.metadata) ||
                  void 0 === u ||
                  null === (m = u.ctas) ||
                  void 0 === m
                    ? void 0
                    : m[0],
              },
            };
          },
          centerContent: !1,
        },
        ProductCarousel: { component: un.Ay, parser: un.$X },
        ProductTierSection: {
          component: function (e) {
            let { displayName: t, metadata: l, productsWithSpreeData: n } = e;
            const { context: i, description: o, title: s, flags: m } = l || {},
              p = i,
              { creditTiers: g, products: h, defaultCategory: x } = p,
              A = ['Any', ...g.map((e) => e.label)],
              f =
                null == m
                  ? void 0
                  : m.find(
                      (e) =>
                        'hasPdpNavigation' === e.displayName && !0 === e.value
                    ),
              y = ((e, t) => {
                const l = {};
                e.forEach((e) => {
                  let { slug: a } = e;
                  const n = t && a && t[a];
                  n &&
                    n.category &&
                    n.categories &&
                    [n.category, ...n.categories].forEach((e) => {
                      l[e] ? l[e]++ : (l[e] = 1);
                    });
                });
                const a = Object.keys(l).sort((e, t) => l[t] - l[e]);
                return a;
              })(h, n),
              C = ['All', ...(null != y ? y : [])],
              w = h.length,
              { 0: S, 1: k } = (0, u.useState)('Any'),
              { 0: I, 1: z } = (0, u.useState)(x || 'All'),
              { 0: B, 1: D } = (0, u.useState)(h),
              { 0: P, 1: M } = (0, u.useState)(w - 8),
              { 0: N, 1: F } = (0, u.useState)(w),
              { 0: L, 1: O } = (0, u.useState)(!1);
            (0, u.useEffect)(() => {
              var e;
              const t =
                  null === (e = g.find((e) => e.label === S)) || void 0 === e
                    ? void 0
                    : e.value,
                l = h
                  .filter((e) => {
                    let { creditCost: l } = e;
                    return 'Any' === S || l === t;
                  })
                  .filter((e) => {
                    var t;
                    let { slug: l } = e;
                    if ('All' === I) return !0;
                    const a = n && l && n[l];
                    return (
                      a &&
                      ((null == a || null === (t = a.categories) || void 0 === t
                        ? void 0
                        : t.includes(I)) ||
                        (null == a ? void 0 : a.category) === I)
                    );
                  });
              F(l.length),
                D(l.slice(0, L ? h.length : 8)),
                M(l.length - (L ? 0 : 8));
            }, [g, h, S, I, n, L, w]);
            const Q = (0, T.D0)().everlywellPriceDisplayTest;
            return u.createElement(
              r.A,
              {
                size: ['fluid', 'fluid', 'fluid', 'xl'],
                paddingX: [0, 4, 6, 8, 0],
                alignSelf: 'center',
                centerContent: !0,
                as: 'section',
                'data-element': 'SectionContainer',
                'data-component': 'ProductTierSection',
                'data-source-file': 'ProductTierSection.tsx',
              },
              u.createElement(
                a.az,
                {
                  paddingX: '4',
                  marginBottom: [8, 10],
                  width: ['100%', '100%', '70%'],
                  'data-element': 'Box',
                  'data-source-file': 'ProductTierSection.tsx',
                },
                t
                  ? u.createElement(
                      a.EY,
                      {
                        fontSize: ['md', 'lg'],
                        color: 'viridian.base',
                        textAlign: 'center',
                        marginBottom: ['1', '2'],
                      },
                      t
                    )
                  : null,
                s
                  ? u.createElement(
                      a.DZ,
                      {
                        as: 'h2',
                        size: ['32px', '2xl'],
                        textAlign: 'center',
                        marginBottom: [4, 3],
                      },
                      s
                    )
                  : null,
                null != o && o.description
                  ? u.createElement(
                      a.EY,
                      {
                        fontSize: ['md', 'lg'],
                        color: a.w4.colors.tints.darkGrey,
                        textAlign: 'center',
                      },
                      o.description
                    )
                  : null
              ),
              u.createElement(
                a.az,
                {
                  display: 'flex',
                  gap: [3, 4],
                  width: '100%',
                  paddingX: '4',
                  paddingBottom: [3, 5],
                  'data-element': 'Box',
                  'data-source-file': 'ProductTierSection.tsx',
                },
                C
                  ? u.createElement(pn, {
                      buttonLabel: 'Category',
                      options: C,
                      defaultSelectedLabel: C[0],
                      onChange: (e) =>
                        ((e) => {
                          z(e),
                            E.Ay.track({
                              event: b.r.MDP.CATEGORY_FILTER_CHANGE,
                              data: { categorySelected: e, tierSelected: S },
                            });
                        })(e[0] || 'All'),
                    })
                  : null,
                g
                  ? u.createElement(pn, {
                      buttonLabel: 'Credits',
                      options: A,
                      defaultSelectedLabel: A[0],
                      onChange: (e) =>
                        ((e) => {
                          k(e),
                            E.Ay.track({
                              event: b.r.MDP.TIER_FILTER_CHANGE,
                              data: { categorySelected: I, tierSelected: e },
                            });
                        })(e[0] || 'Any'),
                    })
                  : null
              ),
              u.createElement(
                a.az,
                {
                  padding: [4, null, 0],
                  'data-element': 'Box',
                  'data-source-file': 'ProductTierSection.tsx',
                },
                n && null != B && B.length
                  ? u.createElement(
                      a.xA,
                      { columns: [1, 2, 3] },
                      null == B
                        ? void 0
                        : B.map((e, t) => {
                            var l, i;
                            let {
                              slug: o,
                              creditCost: r,
                              tag: s,
                              tagVariant: m,
                            } = e;
                            const p = o && n[o];
                            if (!p) return null;
                            const g = `/products/${o}/`,
                              h = null == p ? void 0 : p.price,
                              x = h ? Math.floor(h) : 0;
                            return u.createElement(
                              a.Ei,
                              {
                                key: `grid-item-${t}`,
                                width: 0 === t ? [1, 1, 2 / 3] : [1, 1, 1 / 3],
                              },
                              u.createElement(
                                fl.A,
                                {
                                  key: o,
                                  tag: s
                                    ? u.createElement(
                                        a.vw,
                                        {
                                          size: 'sm',
                                          variant:
                                            m && m.length ? m : 'primary',
                                        },
                                        s
                                      )
                                    : null,
                                  variant: 0 === t ? 'featured' : 'default',
                                  image:
                                    null != p &&
                                    null !== (l = p.productCardImage) &&
                                    void 0 !== l &&
                                    l.gatsbyImageData
                                      ? u.createElement(d.G, {
                                          image:
                                            null == p ||
                                            null === (i = p.productCardImage) ||
                                            void 0 === i
                                              ? void 0
                                              : i.gatsbyImageData,
                                          alt: `${
                                            null == p ? void 0 : p.displayName
                                          } box image`,
                                          imgStyle: { objectFit: 'contain' },
                                          style: { height: '100%' },
                                        })
                                      : null,
                                  pricing: u.createElement(
                                    u.Fragment,
                                    null,
                                    u.createElement(
                                      a.EY,
                                      {
                                        fontSize: 'lg',
                                        color: a.w4.colors.tints.black,
                                        fontWeight: 'medium',
                                        marginRight: '2',
                                      },
                                      r,
                                      ' Credit',
                                      r && r > 1 ? 's' : '',
                                      r && Q ? ` ($${39 * r})` : null
                                    ),
                                    u.createElement(c.A, {
                                      dollarAmount: x,
                                      variant: 'strikethrough',
                                    })
                                  ),
                                  cta: f
                                    ? u.createElement(
                                        a.$n,
                                        {
                                          colorScheme: 'whiteCS',
                                          size: 'sm',
                                          as: v.Link,
                                          to: g,
                                        },
                                        'View'
                                      )
                                    : void 0,
                                  linkTo: f ? g : void 0,
                                  showBrandImage: !0,
                                },
                                u.createElement(
                                  a.EY,
                                  {
                                    fontSize: ['lg', 'xl'],
                                    color: 'black',
                                    fontWeight: 'medium',
                                    marginBottom: 0.5,
                                  },
                                  p.displayName
                                ),
                                u.createElement(
                                  a.EY,
                                  {
                                    fontSize: ['sm', 'md'],
                                    color: a.w4.colors.tints.darkGrey,
                                  },
                                  p.shortDescription
                                )
                              )
                            );
                          })
                    )
                  : null
              ),
              0 === B.length
                ? u.createElement(
                    a.az,
                    { paddingX: '4', width: '100%', display: 'flex' },
                    u.createElement(
                      a.az,
                      {
                        backgroundColor: a.w4.colors.tints.lightGrey,
                        height: [300, 400],
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 'lg',
                      },
                      u.createElement(
                        a.EY,
                        { fontSize: ['lg', 'xl'] },
                        'No products match your filters'
                      )
                    )
                  )
                : null,
              P > 0
                ? u.createElement(
                    a.az,
                    {
                      width: ['100%', '100%', 'auto'],
                      marginTop: [2, 2, 4],
                      paddingX: [4, 4, 0],
                    },
                    u.createElement(
                      a.$n,
                      {
                        variant: 'secondary',
                        onClick: () => {
                          O(!L),
                            E.Ay.track({
                              event: b.r.EVENTS.CLICKED_BUTTON,
                              data: {
                                tierSelected: S,
                                categorySelected: I,
                                label: L ? 'Show less' : 'Show all',
                              },
                            });
                        },
                        marginRight: [2, 4],
                        width: ['100%', '100%', 'auto'],
                      },
                      L ? 'Show less' : `Show all (${N})`
                    )
                  )
                : null
            );
          },
          parser: function (e, t) {
            return {
              displayName: e.displayName,
              metadata: e.metadata,
              productsWithSpreeData: t,
            };
          },
          centerContent: !0,
        },
        ReassuranceCarousel: { component: hn.A, parser: xn.o },
        StoriesCarousel: {
          component: kn.A,
          parser: vn.S,
          centerContent: !0,
          width: '100%',
        },
        TabbedBanners: { component: In.A, parser: zn.n },
        TakeoverBanner: { component: Bn.A, parser: Dn.H },
        HeroWithProduct: {
          component: function (e) {
            var t;
            let {
              productDescription: l,
              productPromotion: n,
              productFAQ: i,
              imageCarousel: o,
              hasFakeProductDescription: s,
            } = e;
            return u.createElement(
              r.A,
              {
                size: ['sm', null, 'xl'],
                paddingTop: '10',
                'data-element': 'SectionContainer',
                'data-component': 'HeroWithProduct',
                'data-source-file': 'HeroWithProduct.tsx',
              },
              u.createElement(
                a.so,
                {
                  gap: [4, null, 12],
                  width: '100%',
                  position: 'relative',
                  flexDirection: ['column', 'column', 'row'],
                  'data-element': 'Flex',
                  'data-source-file': 'HeroWithProduct.tsx',
                },
                u.createElement(
                  a.az,
                  {
                    width: ['100%', '100%', '45%'],
                    order: [0, null, 1],
                    'data-element': 'Box',
                    'data-source-file': 'HeroWithProduct.tsx',
                  },
                  u.createElement(
                    a.az,
                    {
                      position: [null, null, 'sticky'],
                      marginTop: [null, null, 10],
                      top: [null, null, '70px'],
                      'data-element': 'Box',
                      'data-source-file': 'HeroWithProduct.tsx',
                    },
                    s ? u.createElement(ll, null) : u.createElement(nl, l)
                  )
                ),
                u.createElement(
                  a.so,
                  {
                    width: ['100%', '100%', '55%'],
                    gap: '4',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    'data-element': 'Flex',
                    'data-source-file': 'HeroWithProduct.tsx',
                  },
                  (null == o || null === (t = o.images) || void 0 === t
                    ? void 0
                    : t.length) > 0
                    ? u.createElement(
                        a.az,
                        { width: '100%' },
                        u.createElement(
                          sl,
                          Object.assign({}, o, { slideStyle: cl })
                        )
                      )
                    : null,
                  n ? u.createElement(il, n) : null,
                  u.createElement(
                    a.az,
                    {
                      width: '100%',
                      backgroundColor: 'tints.lightCream',
                      padding: [6, null, 8],
                      borderRadius: 'xl',
                      'data-testid': 'faq-accordion',
                      'data-element': 'Box',
                      'data-source-file': 'HeroWithProduct.tsx',
                    },
                    i
                      ? u.createElement(
                          Rt.A,
                          Object.assign({}, i, {
                            trackingLabel: 'HeroWithProduct - FaqAccordion',
                            useAccordionButtonTextElement: !1,
                          })
                        )
                      : null
                  )
                )
              )
            );
          },
          parser: function (e) {
            const t = null == e ? void 0 : e.subsections,
              l = (0, B.xz)('ProductDescription', t),
              a = (0, B.xz)('ProductPromotion', t),
              n = (0, B.xz)('ProductFaq', t),
              i = (0, B.xz)('ImageCarousel', t);
            return {
              productDescription: ul(l),
              imageCarousel:
                ((o = i),
                {
                  images: o.images.map((e) => ({
                    image: e.desktopImage.gatsbyImageData,
                    alt: e.desktopImageAltText || '',
                  })),
                }),
              productPromotion: ml(a),
              productFAQ: (0, dl.w)(null == n ? void 0 : n.subsections),
              hasFakeProductDescription: t.some(
                (e) => 'FakeProductDescription' === e.componentName
              ),
            };
            var o;
          },
        },
        ProgramSection: {
          component: Ua,
          parser: function (e, t) {
            var l, n, i;
            const { metadata: o, subsections: r } = e,
              { title: s, description: c, flags: d } = null != o ? o : {},
              m = (0, B.n9)('disableAccordion', d),
              p = (0, B.Jn)(r, 'BulletPointWithIcon'),
              g = (0, B.Jn)(r, 'CardsCarouselAccordion'),
              h = (function (e, t) {
                return (
                  void 0 === t && (t = []),
                  null == e
                    ? void 0
                    : e
                        .map((e) => {
                          var l;
                          const a = null == e ? void 0 : e.subsections;
                          return null == a ||
                            null ===
                              (l = a.filter((e) => {
                                let { componentName: t } = e;
                                return t;
                              })) ||
                            void 0 === l
                            ? void 0
                            : l.map((e) => {
                                var l;
                                const a =
                                    null !==
                                      (l =
                                        null == e ? void 0 : e.componentName) &&
                                    void 0 !== l
                                      ? l
                                      : '',
                                  n = nn[a];
                                return n
                                  ? { componentName: a, ...n(e, t) }
                                  : null;
                              });
                        })
                        .filter((e) => null !== e)
                );
              })(
                null !== (l = null == g ? void 0 : g.subsections) &&
                  void 0 !== l
                  ? l
                  : [],
                t
              ),
              x =
                h &&
                ((e) =>
                  null == e
                    ? void 0
                    : e.map((e) => {
                        const t =
                            null == e
                              ? void 0
                              : e.find(
                                  (e) =>
                                    'InfoCardV2' ===
                                    (null == e ? void 0 : e.componentName)
                                ),
                          l = null == e ? void 0 : e.indexOf(t);
                        return {
                          button: t,
                          content:
                            null == e ? void 0 : e.filter((e, t) => t !== l),
                        };
                      }))(h),
              A =
                h &&
                (null == (f = h) ||
                null === (v = f.flat()) ||
                void 0 === v ||
                null ===
                  (E = v.filter((e) => {
                    let { componentName: t } = e;
                    return t;
                  })) ||
                void 0 === E
                  ? void 0
                  : E.map((e, t) => {
                      let { componentName: l, ...n } = e;
                      if ('ProductCardV2' === l) {
                        const e = null == n ? void 0 : n.variant;
                        return u.createElement(
                          a.az,
                          {
                            key: `carousel-card-v2-${t}`,
                            width:
                              'standard' === e
                                ? ['100%', '280px', '280px']
                                : ['100%', '320px', '320px'],
                            height: '100%',
                          },
                          u.createElement(
                            Za,
                            Object.assign({ componentName: 'ProductCardV2' }, n)
                          )
                        );
                      }
                      return u.createElement(
                        Za,
                        Object.assign(
                          { key: `card-builder-${t}`, componentName: l },
                          n
                        )
                      );
                    }));
            var f, v, E;
            const b =
              p &&
              ((e) => {
                var t;
                return null == e || null === (t = e.subsections) || void 0 === t
                  ? void 0
                  : t.map((e) => {
                      var t, l;
                      const {
                        context: { icon: a },
                        description: n,
                      } =
                        null !== (t = null == e ? void 0 : e.metadata) &&
                        void 0 !== t
                          ? t
                          : {};
                      return {
                        iconName: a,
                        text:
                          null !== (l = null == n ? void 0 : n.description) &&
                          void 0 !== l
                            ? l
                            : '',
                      };
                    });
              })(p);
            return {
              title: null != s ? s : '',
              description:
                null !== (n = null == c ? void 0 : c.description) &&
                void 0 !== n
                  ? n
                  : '',
              backgroundColor:
                null == o || null === (i = o.theme) || void 0 === i
                  ? void 0
                  : i.backgroundColor,
              bulletPoints: b,
              accordionCards: x,
              carouselCards: A,
              disableAccordion: m,
            };
          },
          centerContent: !0,
        },
        DisclaimerSection: {
          component: Ot,
          parser: function (e) {
            const { body: t } = e;
            return null != t && t.raw
              ? { disclaimer: { raw: t.raw } }
              : { disclaimer: null };
          },
          centerContent: !0,
        },
        EmailQuiz: {
          component: F,
          parser: (e) => {
            var t, l, a, n, i, o, r, s, c, d, u, m, p, g, h, x, A, f, v;
            const { subsections: E } = e,
              b = (0, B.XN)('EmailQuizQuestion', E),
              y = (0, B.xz)('EmailQuizCapture', E),
              C = (0, B.xz)('EmailQuizImageCallout', E),
              w = b.map((e) => {
                var t, l, a;
                const { subsections: n } = e,
                  i = n.map((e) => {
                    let t = null;
                    var l, a;
                    e.images &&
                      (t = {
                        gatsbyImageData:
                          null === (l = e.images[0]) ||
                          void 0 === l ||
                          null === (a = l.desktopImage) ||
                          void 0 === a
                            ? void 0
                            : a.gatsbyImageData,
                      });
                    return { title: e.displayName, image: t };
                  });
                return {
                  title:
                    null === (t = e.metadata) || void 0 === t
                      ? void 0
                      : t.title,
                  eyebrow: e.eyebrow,
                  options: i,
                  quizQuestionType:
                    null === (l = e.metadata) ||
                    void 0 === l ||
                    null === (a = l.context) ||
                    void 0 === a
                      ? void 0
                      : a.quizQuestionType,
                };
              }),
              S =
                null == y ||
                null === (t = y.metadata) ||
                void 0 === t ||
                null === (l = t.ctas) ||
                void 0 === l
                  ? void 0
                  : l[0];
            return {
              questions: w,
              quizEmailCapture: {
                title:
                  (null === (a = y.metadata) || void 0 === a
                    ? void 0
                    : a.title) || '',
                cta: S
                  ? {
                      label:
                        (null === (n = y.metadata) ||
                        void 0 === n ||
                        null === (i = n.ctas) ||
                        void 0 === i ||
                        null === (o = i[0]) ||
                        void 0 === o
                          ? void 0
                          : o.label) || '',
                      url:
                        (null === (r = y.metadata) ||
                        void 0 === r ||
                        null === (s = r.ctas) ||
                        void 0 === s ||
                        null === (c = s[0]) ||
                        void 0 === c
                          ? void 0
                          : c.url) || '',
                    }
                  : void 0,
              },
              rightSection:
                C &&
                null != C &&
                null !== (d = C.images) &&
                void 0 !== d &&
                d.length &&
                null != C &&
                null !== (u = C.images[0]) &&
                void 0 !== u &&
                null !== (m = u.desktopImage) &&
                void 0 !== m &&
                m.gatsbyImageData
                  ? {
                      backgroundImage: {
                        gatsbyImageData:
                          C.images[0].desktopImage.gatsbyImageData,
                      },
                      title:
                        (null === (p = C.metadata) || void 0 === p
                          ? void 0
                          : p.title) || '',
                      eyebrow: C.eyebrow || '',
                      cta: {
                        label:
                          (null === (g = C.metadata) ||
                          void 0 === g ||
                          null === (h = g.ctas) ||
                          void 0 === h ||
                          null === (x = h[0]) ||
                          void 0 === x
                            ? void 0
                            : x.label) || '',
                        url:
                          (null === (A = C.metadata) ||
                          void 0 === A ||
                          null === (f = A.ctas) ||
                          void 0 === f ||
                          null === (v = f[0]) ||
                          void 0 === v
                            ? void 0
                            : v.url) || '',
                      },
                    }
                  : void 0,
            };
          },
        },
        JustunoLoader: {
          component: W,
          parser: function (e) {
            const { images: t, metadata: l } = e || {},
              a = (0, B.nl)(t),
              { theme: n } = l || {};
            return {
              mobileBackgroundImage: a.mobileImage,
              desktopBackgroundImage: a.desktopImage,
              backgroundColor: null == n ? void 0 : n.backgroundColor,
            };
          },
        },
        PricingSelectorV2: {
          component: function (e) {
            let { eyebrow: t, title: l, priceSections: n } = e;
            const { handleMdpCtaClick: i } = (0, w.A)(),
              { setShowPricingInPPQ: o } = (0, El.si)(),
              [c, d] = u.useState(0),
              m = (e) => {
                E.Ay.track({
                  event: b.r.EVENTS.CLICKED_LINK,
                  data: {
                    sectionHeader: l || 'No title provided',
                    contentfulSection: 'PricingSelectorV2',
                    ctaText: e || 'No CTA label',
                  },
                });
              };
            return u.createElement(
              a.az,
              {
                backgroundColor: '#FBF4FB',
                'data-testid': 'pricing-selector',
                paddingY: [10, null, 20],
                'data-element': 'Box',
                'data-component': 'PricingSelectorV2',
                'data-source-file': 'PricingSelectorV2.tsx',
              },
              u.createElement(
                r.A,
                {
                  'data-element': 'SectionContainer',
                  'data-source-file': 'PricingSelectorV2.tsx',
                },
                u.createElement(s.A, {
                  eyebrow: t,
                  title: l,
                  'data-element': 'SectionHeader',
                  'data-source-file': 'PricingSelectorV2.tsx',
                }),
                u.createElement(
                  a.so,
                  {
                    gap: '4',
                    flexDirection: ['column', null, 'row'],
                    flexWrap: 'nowrap',
                    justifyContent: 'space-between',
                    'data-element': 'Flex',
                    'data-source-file': 'PricingSelectorV2.tsx',
                  },
                  null == n
                    ? void 0
                    : n.map((e, t) => {
                        let l = t === c;
                        return u.createElement(
                          a.az,
                          { key: t, width: ['100%', null, l ? '60%' : '40%'] },
                          u.createElement(
                            La,
                            Object.assign({}, e, {
                              onCtaClick: (e, t, l) =>
                                ((e, t, l) => {
                                  i({ event: e, ctaUrl: t }), o(!1), m(l);
                                })(e, t, l),
                              isExpanded: l,
                              handleCollapsedCTAClick: () => d(t),
                              secondaryCard: e.secondaryCard,
                            })
                          )
                        );
                      })
                )
              )
            );
          },
          parser: function (e) {
            const { eyebrow: t, metadata: l } = e,
              a = null == e ? void 0 : e.subsections,
              n = (0, B.XN)('PriceV2Cards', a),
              i =
                null == n
                  ? void 0
                  : n.map((e) => {
                      var t;
                      const l = e.flags || [],
                        a =
                          null == l ||
                          null ===
                            (t = l.find(
                              (e) =>
                                'isVisible' ===
                                (null == e ? void 0 : e.displayText)
                            )) ||
                          void 0 === t
                            ? void 0
                            : t.value,
                        n = (null == e ? void 0 : e.priceDetail) || {},
                        i = (null == e ? void 0 : e.secondaryCard) || {},
                        o = (function (e) {
                          const t =
                            null == e
                              ? void 0
                              : e.map((e) => {
                                  const {
                                    title: t,
                                    icon: l,
                                    detail: a,
                                    accordionContents: n,
                                  } = e || {};
                                  return {
                                    title: t || '',
                                    icon: l || '',
                                    detail: a || '',
                                    accordionContent:
                                      null == n
                                        ? void 0
                                        : n.map((e) => {
                                            const {
                                              description: t,
                                              title: l,
                                              detail: a,
                                              inLineCards: n,
                                              disclaimer: i,
                                            } = e || {};
                                            return {
                                              description: {
                                                raw:
                                                  (null == t
                                                    ? void 0
                                                    : t.raw) || '',
                                              },
                                              title: l || '',
                                              detail: a || '',
                                              disclaimer: i || '',
                                              inLineCards:
                                                null == n
                                                  ? void 0
                                                  : n.map((e) => {
                                                      const {
                                                          title: t,
                                                          description: l,
                                                          image: a,
                                                        } = e || {},
                                                        n = a
                                                          ? (0, B.nl)([a])
                                                          : null;
                                                      return {
                                                        title: t || '',
                                                        description: l || '',
                                                        desktopImage:
                                                          (null == n
                                                            ? void 0
                                                            : n.desktopImage) ||
                                                          null,
                                                        mobileImage:
                                                          (null == n
                                                            ? void 0
                                                            : n.mobileImage) ||
                                                          null,
                                                      };
                                                    }),
                                            };
                                          }),
                                  };
                                });
                          return { accordions: t || [] };
                        })(null == e ? void 0 : e.accordions),
                        r = null == e ? void 0 : e.cta;
                      return {
                        priceDetail: n,
                        bulletPoints: {},
                        cta: {
                          label: (null == r ? void 0 : r.label) || '',
                          metadata: (null == r ? void 0 : r.metadata) || {},
                          url: (null == r ? void 0 : r.url) || '',
                        },
                        isVisible: a,
                        secondaryCard: i,
                        accordions: o,
                      };
                    });
            return {
              eyebrow: t,
              title: (null == l ? void 0 : l.title) || '',
              priceSections: i || [],
            };
          },
        },
        MultipleModals: {
          component: function (e) {
            let { modals: t } = e;
            const { 0: l, 1: a } = (0, u.useState)(''),
              n = (0, y.Bd)();
            return (
              (0, u.useEffect)(() => {
                if (!n) return;
                const e = (e) => {
                    var l, n;
                    e.preventDefault();
                    const i =
                      null === (l = e.target) ||
                      void 0 === l ||
                      null === (n = l.getAttribute('href')) ||
                      void 0 === n
                        ? void 0
                        : n.split('#')[1];
                    if (!i) return;
                    const o = null == t ? void 0 : t.some((e) => e.id === i);
                    o && a(i);
                  },
                  l = window.document.querySelectorAll('[href*="#"]');
                return (
                  l.forEach((t) => {
                    t.addEventListener('click', e);
                  }),
                  () => {
                    l.forEach((t) => {
                      t.removeEventListener('click', e);
                    });
                  }
                );
              }, [n, t]),
              u.createElement(
                u.Fragment,
                null,
                null == t
                  ? void 0
                  : t.map((e) =>
                      u.createElement(
                        vl,
                        Object.assign(
                          {
                            key: null == e ? void 0 : e.id,
                            isModalOpen: l === e.id,
                            handleClose: () => a(''),
                          },
                          e
                        )
                      )
                    )
              )
            );
          },
          parser: function (e) {
            const { subsections: t } = e,
              l =
                null == t
                  ? void 0
                  : t
                      .map((e) => {
                        var t, l;
                        const a =
                          null == e ||
                          null === (t = e.content) ||
                          void 0 === t ||
                          null === (l = t[0]) ||
                          void 0 === l
                            ? void 0
                            : l.metadata;
                        if (!a) return null;
                        const {
                          title: n,
                          description: i,
                          ctas: o,
                          metadata_id: r,
                        } = a;
                        return {
                          heading: n,
                          content: null == i ? void 0 : i.description,
                          id: r,
                          cta: null == o ? void 0 : o[0],
                        };
                      })
                      .filter((e) => null !== e);
            return { modals: l };
          },
        },
      };
      var Fn = (e) => {
        var t, l, n, i, o, r, s, c, d, m, p, g, h, x, A, f, v, y, C;
        let { pageContext: w } = e;
        const { allProducts: S, hero: k, screener: I, sections: z, seo: B } = w,
          D =
            null === (t = w.metadata) ||
            void 0 === t ||
            null === (l = t.context) ||
            void 0 === l
              ? void 0
              : l.hideStickyCta,
          [P, T, M] = (0, Zt.Wx)({ rootMargin: '700px' }),
          { 0: N, 1: F } = (0, u.useState)(!1),
          { 0: L, 1: O } = (0, u.useState)(),
          { 0: Q, 1: H } = (0, u.useState)(),
          { 0: R, 1: Y } = (0, u.useState)(!1),
          { 0: j, 1: Z } = (0, u.useState)(!1),
          { anchorsSectionsIds: G, mainAnchorSectionId: W } = ((e) => {
            const t =
                null == e
                  ? void 0
                  : e.find(
                      (e) =>
                        'NavigationAnchor' ===
                          (null == e ? void 0 : e.componentName) || ''
                    ),
              l = t ? Be(t) : null;
            if (!l)
              return { mainAnchorSectionId: void 0, anchorsSectionsIds: [] };
            const { id: a, tiles: n } = l;
            return {
              mainAnchorSectionId: a,
              anchorsSectionsIds: n.reduce((e, t) => {
                var l;
                return null !== (l = t.anchor) &&
                  void 0 !== l &&
                  l.startsWith('#')
                  ? [...e, t.anchor || '']
                  : e;
              }, []),
            };
          })(z),
          { 0: K, 1: _ } = (0, u.useState)(!0),
          $ = null == k ? void 0 : k.metadata,
          ee = X(I),
          te =
            null == z
              ? void 0
              : z.some((e) => 'PrePurchaseQuiz' === e.componentName),
          le =
            null == z
              ? void 0
              : z.find((e) => 'AsyncProgramPPQ' === e.componentName),
          ae = !!le;
        (0, u.useEffect)(() => {
          E.Ay.track({
            event: b.r.EVENTS.VIEWED_PAGE,
            data: { Page: b.r.LABELS.MDP.EW_PLUS },
          });
        }, []),
          (0, u.useEffect)(() => {
            if (!z || !Array.isArray(z)) return;
            if (D) return;
            const e =
              null == z
                ? void 0
                : z.find((e) => {
                    var t;
                    return (
                      (null == e ||
                      null === (t = e.componentName) ||
                      void 0 === t
                        ? void 0
                        : t.toLowerCase()) === 'StickyCTA'.toLowerCase()
                    );
                  });
            if (e) {
              const t = null == e ? void 0 : e.metadata,
                l = Sn({ metadata: t, option: L });
              H(l);
            } else {
              const e = Sn({ metadata: $, option: L });
              H(e);
            }
          }, [$, D, z, L]),
          (0, u.useEffect)(() => {
            null != M && M.isIntersecting && Y(!0);
          }, [M]),
          (0, u.useEffect)(() => {
            F(R && !T);
          }, [T, R]),
          (0, u.useEffect)(() => {
            _(!1);
          }, []);
        const ne = (e) => {
            e && O(e);
          },
          { advertisedPromos: ie } = (0, Tn.A)();
        return u.createElement(
          U.dG,
          {
            hashId:
              null == ee || null === (n = ee.metadata) || void 0 === n
                ? void 0
                : n.metadata_id,
            'data-element': 'MDPModalContextProvider',
            'data-component': 'MembershipDetailsPage',
            'data-source-file': 'mdp.tsx',
          },
          u.createElement(
            Ee,
            {
              anchorsSectionsIds: G,
              mainSectionId: W,
              'data-element': 'StickyContextProvider',
              'data-source-file': 'mdp.tsx',
            },
            B
              ? u.createElement(An.k, (0, fn.A)(B))
              : u.createElement(An.k, null),
            u.createElement(
              q.A,
              {
                isV2Page: !0,
                'data-element': 'Layout',
                'data-source-file': 'mdp.tsx',
              },
              u.createElement('div', { ref: P }),
              k
                ? u.createElement(
                    Pn.A,
                    {
                      label: b.r.MDP.HERO,
                      slug: k.displayName,
                      flexContainer: !0,
                      centerContent: !0,
                    },
                    u.createElement(V, {
                      sectionHeaderIconName:
                        null == $ ||
                        null === (i = $.context) ||
                        void 0 === i ||
                        null === (o = i.icons) ||
                        void 0 === o
                          ? void 0
                          : o.header,
                      sectionHeaderText: null == k ? void 0 : k.displayName,
                      headline: null == $ ? void 0 : $.title,
                      bulletPoints: null == $ ? void 0 : $.description,
                      backgroundColor:
                        null == $ || null === (r = $.theme) || void 0 === r
                          ? void 0
                          : r.backgroundColor,
                      desktopBackgroundImage:
                        null == k ||
                        null === (s = k.images) ||
                        void 0 === s ||
                        null === (c = s[0]) ||
                        void 0 === c ||
                        null === (d = c.desktopImage) ||
                        void 0 === d
                          ? void 0
                          : d.gatsbyImageData,
                      mobileBackgroundImage:
                        null == k ||
                        null === (m = k.images) ||
                        void 0 === m ||
                        null === (p = m[0]) ||
                        void 0 === p ||
                        null === (g = p.mobileImage) ||
                        void 0 === g
                          ? void 0
                          : g.gatsbyImageData,
                      desktopBackgroundImageAltText:
                        null == k ||
                        null === (h = k.images) ||
                        void 0 === h ||
                        null === (x = h[0]) ||
                        void 0 === x
                          ? void 0
                          : x.desktopImageAltText,
                      mobileBackgroundImageAltText:
                        null == k ||
                        null === (A = k.images) ||
                        void 0 === A ||
                        null === (f = A[0]) ||
                        void 0 === f
                          ? void 0
                          : f.mobileImageAltText,
                      cta:
                        null == $ || null === (v = $.ctas) || void 0 === v
                          ? void 0
                          : v[0],
                      disclaimer:
                        null == $ || null === (y = $.context) || void 0 === y
                          ? void 0
                          : y.hero_disclaimer,
                    })
                  )
                : null,
              u.createElement(
                a.so,
                {
                  overflowX: K ? 'hidden' : void 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: [10, null, 20],
                  sx: {
                    '& > div > div, & > div > section': {
                      scrollMarginTop: [`${Ie}px`, null, '58px'],
                    },
                    '& > :last-child': {
                      marginBottom: ['10 !important', null, '20 !important'],
                    },
                  },
                  'data-element': 'Flex',
                  'data-source-file': 'mdp.tsx',
                },
                null == z
                  ? void 0
                  : z.map((e, t) => {
                      var l;
                      if (!e.componentName) return null;
                      const a =
                        null == e || null === (l = e.metadata) || void 0 === l
                          ? void 0
                          : l.flags;
                      if (
                        null == a
                          ? void 0
                          : a.some(
                              (e) =>
                                'hideSection' ===
                                  (null == e ? void 0 : e.displayText) &&
                                !0 === (null == e ? void 0 : e.value)
                            )
                      )
                        return null;
                      const n = Nn[e.componentName];
                      if (!n || !n.parser || !e) return null;
                      let i = n.parser(e, S);
                      var o;
                      return (
                        'PricingSelector' === e.componentName &&
                          (i = Nn.PricingSelector.parser(e, ne)),
                        'ProductCarousel' === e.componentName &&
                          (i = Nn.ProductCarousel.parser(e, ie)),
                        'ProgramSection' === e.componentName &&
                          (i = Nn.ProgramSection.parser(e, ie)),
                        n
                          ? u.createElement(
                              Pn.A,
                              {
                                label:
                                  e.componentName ||
                                  'No component name provided',
                                slug:
                                  e.displayName || 'No display name provided',
                                centerContent: !(null == n || !n.centerContent),
                                flexContainer: !(null == n || !n.flexContainer),
                                width: null == n ? void 0 : n.width,
                                key: `${e.componentName}-${t}`,
                                id:
                                  (null === (o = e.metadata) || void 0 === o
                                    ? void 0
                                    : o.metadata_id) || void 0,
                              },
                              u.createElement(n.component, i)
                            )
                          : null
                      );
                    })
              ),
              ee &&
                u.createElement(
                  J,
                  Object.assign({}, ee, { onModalStateUpdate: (e) => Z(e) })
                ),
              te
                ? u.createElement(yl, {
                    initialScreenContent: u.createElement(ba, null),
                    steps: [
                      { mainContent: u.createElement(wa, null) },
                      { mainContent: u.createElement(Sa, null) },
                      {
                        mainContent: u.createElement(ka, null),
                        backgroundColor: 'eggplant.wash',
                      },
                      ...Ba,
                    ],
                    finalScreenContent: u.createElement(Ia, null),
                    ineligibleScreenContent: u.createElement(za, null),
                  })
                : null,
              ae
                ? u.createElement(
                    Te,
                    Mt(
                      null == le || null === (C = le.metadata) || void 0 === C
                        ? void 0
                        : C.metadata_id
                    )
                  )
                : null,
              u.createElement(
                a.wv,
                {
                  breakpoint: `(max-width: ${a.w4.breakpoints.largeTablet})`,
                  'data-element': 'Show',
                  'data-source-file': 'mdp.tsx',
                },
                N && Q && !j ? u.createElement(yn, Q) : null
              )
            )
          )
        );
      };
    },
    91453: function (e, t, l) {
      l.d(t, {
        M: function () {
          return n;
        },
      });
      var a = l(39211);
      const n = async (e) =>
        (await a.O9.post('/v3/notification_events', e)).data;
    },
    26224: function (e, t, l) {
      l.d(t, {
        f_: function () {
          return a;
        },
        hG: function () {
          return o;
        },
      });
      const a = Object.freeze([
          { id: 'AL', value: 'Alabama' },
          { id: 'AK', value: 'Alaska' },
          { id: 'AZ', value: 'Arizona' },
          { id: 'AR', value: 'Arkansas' },
          { id: 'CA', value: 'California' },
          { id: 'CO', value: 'Colorado' },
          { id: 'CT', value: 'Connecticut' },
          { id: 'DE', value: 'Delaware' },
          { id: 'DC', value: 'District of Columbia' },
          { id: 'FL', value: 'Florida' },
          { id: 'GA', value: 'Georgia' },
          { id: 'HI', value: 'Hawaii' },
          { id: 'ID', value: 'Idaho' },
          { id: 'IL', value: 'Illinois' },
          { id: 'IN', value: 'Indiana' },
          { id: 'IA', value: 'Iowa' },
          { id: 'KS', value: 'Kansas' },
          { id: 'KY', value: 'Kentucky' },
          { id: 'LA', value: 'Louisiana' },
          { id: 'ME', value: 'Maine' },
          { id: 'MD', value: 'Maryland' },
          { id: 'MA', value: 'Massachusetts' },
          { id: 'MI', value: 'Michigan' },
          { id: 'MN', value: 'Minnesota' },
          { id: 'MS', value: 'Mississippi' },
          { id: 'MO', value: 'Missouri' },
          { id: 'MT', value: 'Montana' },
          { id: 'NE', value: 'Nebraska' },
          { id: 'NV', value: 'Nevada' },
          { id: 'NH', value: 'New Hampshire' },
          { id: 'NJ', value: 'New Jersey' },
          { id: 'NM', value: 'New Mexico' },
          { id: 'NY', value: 'New York' },
          { id: 'NC', value: 'North Carolina' },
          { id: 'ND', value: 'North Dakota' },
          { id: 'OH', value: 'Ohio' },
          { id: 'OK', value: 'Oklahoma' },
          { id: 'OR', value: 'Oregon' },
          { id: 'PA', value: 'Pennsylvania' },
          { id: 'RI', value: 'Rhode Island' },
          { id: 'SC', value: 'South Carolina' },
          { id: 'SD', value: 'South Dakota' },
          { id: 'TN', value: 'Tennessee' },
          { id: 'TX', value: 'Texas' },
          { id: 'UT', value: 'Utah' },
          { id: 'VT', value: 'Vermont' },
          { id: 'VA', value: 'Virginia' },
          { id: 'WA', value: 'Washington' },
          { id: 'WV', value: 'West Virginia' },
          { id: 'WI', value: 'Wisconsin' },
          { id: 'WY', value: 'Wyoming' },
        ]),
        n = 'New York',
        i = a.findIndex((e) => 'NY' === e.id),
        o = (e) => {
          let { includeNewYork: t } = e;
          const l = [...a];
          return (
            t ||
              (l[i] = { ...l[i], value: `${n} (unavailable)`, isDisabled: !0 }),
            l
          );
        };
    },
    66985: function (e, t, l) {
      l.d(t, {
        a: function () {
          return p;
        },
      });
      var a = l(96540),
        n = l(81178);
      const i = new Map([
        [
          'bold',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z',
            })
          ),
        ],
        [
          'duotone',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M208,96l-80,80L48,96Z',
              opacity: '0.2',
            }),
            a.createElement('path', {
              d: 'M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z',
            })
          ),
        ],
        [
          'fill',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z',
            })
          ),
        ],
        [
          'light',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z',
            })
          ),
        ],
        [
          'regular',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z',
            })
          ),
        ],
        [
          'thin',
          a.createElement(
            a.Fragment,
            null,
            a.createElement('path', {
              d: 'M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z',
            })
          ),
        ],
      ]);
      var o = Object.defineProperty,
        r = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        m = (e, t, l) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const p = (0, a.forwardRef)((e, t) =>
        a.createElement(
          n.A,
          ((e, t) => r(e, s(t)))(
            ((e, t) => {
              for (var l in t || (t = {})) d.call(t, l) && m(e, l, t[l]);
              if (c) for (var l of c(t)) u.call(t, l) && m(e, l, t[l]);
              return e;
            })({ ref: t }, e),
            { weights: i }
          )
        )
      );
      p.displayName = 'CaretDown';
    },
    69592: function (e, t) {
      t.A = function (e) {
        return void 0 === e;
      };
    },
  },
]);
