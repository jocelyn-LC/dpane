import { defineComponent as _, ref as v, openBlock as o, createElementBlock as n, Fragment as f, createElementVNode as e, renderList as w, normalizeClass as g, toDisplayString as s, createCommentVNode as r, renderSlot as h, createTextVNode as c } from "../vue.esm-browser.prod.js";
const y = /* @__PURE__ */ e("link", {
  rel: "stylesheet",
  href: "/static/base/style.css"
}, null, -1), k = { class: "bg-white mt-2" }, C = { class: "lg:border-t lg:border-b lg:border-gray-200" }, L = {
  class: "mx-auto max-w-7xl",
  "aria-label": "Progress"
}, M = {
  role: "list",
  class: "rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none"
}, B = ["onClick"], S = /* @__PURE__ */ e("span", {
  class: "absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto",
  "aria-hidden": "true"
}, null, -1), $ = /* @__PURE__ */ e("span", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ e("span", { class: "w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full" }, [
    /* @__PURE__ */ e("svg", {
      class: "w-6 h-6 text-white",
      "x-description": "Heroicon name: solid/check",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ e("path", {
        "fill-rule": "evenodd",
        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), j = { class: "mt-0.5 ml-4 min-w-0 flex flex-col" }, z = ["textContent"], D = ["textContent"], V = ["onClick"], I = /* @__PURE__ */ e("span", { class: "absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" }, null, -1), N = { class: "flex-shrink-0" }, P = { class: "w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full" }, A = ["textContent"], E = { class: "mt-0.5 ml-4 min-w-0 flex flex-col" }, G = ["textContent"], R = ["textContent"], F = ["onClick"], H = /* @__PURE__ */ e("span", {
  class: "absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto",
  "aria-hidden": "true"
}, null, -1), T = { class: "flex-shrink-0" }, U = { class: "w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full" }, q = ["textContent"], J = { class: "mt-0.5 ml-4 min-w-0 flex flex-col" }, K = ["textContent"], O = ["textContent"], Q = {
  key: 3,
  class: "hidden absolute top-0 left-0 w-3 inset-0 lg:block",
  "aria-hidden": "true"
}, W = /* @__PURE__ */ e("svg", {
  class: "h-full w-full text-gray-300",
  viewBox: "0 0 12 82",
  fill: "none",
  preserveAspectRatio: "none"
}, [
  /* @__PURE__ */ e("path", {
    d: "M0.5 0V31L10.5 41L0.5 51V82",
    stroke: "currentcolor",
    "vector-effect": "non-scaling-stroke"
  })
], -1), X = [
  W
], Y = {
  key: 0,
  class: "p-5 border-gray-200 border border-top-0 rounded-b-md shadow"
}, Z = { class: "flex justify-end space-x-2 mt-6" }, ee = /* @__PURE__ */ e("a", {
  target: "_blank",
  "data-onboarding-docs": "1",
  href: "https://docs.datapane.com/",
  class: "dp-btn dp-btn-info"
}, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 mr-1",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]),
  /* @__PURE__ */ c(" Learn about installing ")
], -1), te = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-1",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), oe = {
  key: 1,
  class: "p-5 border-gray-200 border border-top-0 rounded-b-md shadow"
}, ne = { class: "flex justify-end space-x-2 mt-6" }, se = /* @__PURE__ */ e("a", {
  target: "_blank",
  "data-onboarding-docs": "2",
  href: "https://docs.datapane.com/",
  class: "dp-btn dp-btn-info"
}, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 mr-1",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]),
  /* @__PURE__ */ c(" Learn about authentication ")
], -1), le = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-1",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), re = {
  key: 2,
  class: "p-5 border-gray-200 border border-top-0 rounded-b-md shadow"
}, ae = /* @__PURE__ */ e("p", { class: "text-lg leading-7 text-gray-700 py-2 flex items-center" }, " Run this code in your environment to create and upload a Datapane report. ", -1), ie = { class: "mt-2" }, de = { class: "flex justify-end space-x-2 mt-6" }, ce = /* @__PURE__ */ e("a", {
  href: "https://docs.datapane.com/",
  target: "_blank",
  "data-onboarding-docs": "3",
  class: "dp-btn dp-btn-info"
}, [
  /* @__PURE__ */ e("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 mr-1",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ e("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]),
  /* @__PURE__ */ c(" Learn about reports ")
], -1), ue = /* @__PURE__ */ e("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-1",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), pe = /* @__PURE__ */ _({
  __name: "GettingStarted.ce",
  setup(ge) {
    const b = parseInt(localStorage.getItem("datapane-tut-stage")) || 1, l = v(b), p = [
      {
        number: 1,
        id: "01",
        name: "Get the client library",
        description: "Install Datapane"
      },
      {
        number: 2,
        id: "02",
        name: "Login to Datapane",
        description: "Login with your API key"
      },
      {
        number: 3,
        id: "03",
        name: "Create a report",
        description: "Upload a report using Python"
      }
    ], u = (a) => {
      localStorage.setItem("datapane-tut-stage", `${a}`), l.value = a;
    }, x = () => {
      localStorage.removeItem("datapane-tut-stage");
    };
    return (a, i) => (o(), n(f, null, [
      y,
      e("div", k, [
        e("div", null, [
          e("div", C, [
            e("nav", L, [
              e("ol", M, [
                (o(), n(f, null, w(p, (t, d) => e("li", {
                  key: t.id,
                  class: "relative overflow-hidden lg:flex-1"
                }, [
                  e("div", {
                    class: g([
                      d === 0 ? "border-b-0 rounded-t-md" : "",
                      d === p.length - 1 ? "border-t-0 rounded-b-md" : "",
                      "border border-gray-200 overflow-hidden lg:border-0"
                    ])
                  }, [
                    l.value > t.number ? (o(), n("a", {
                      key: 0,
                      href: "#",
                      onClick: (m) => u(t.number),
                      class: "group"
                    }, [
                      S,
                      e("span", {
                        class: g([
                          d !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        ])
                      }, [
                        $,
                        e("span", j, [
                          e("span", {
                            class: "text-xs font-semibold tracking-wide uppercase",
                            textContent: s(t.name)
                          }, null, 8, z),
                          e("span", {
                            class: "text-sm font-medium text-gray-500",
                            textContent: s(
                              t.description
                            )
                          }, null, 8, D)
                        ])
                      ], 2)
                    ], 8, B)) : r("", !0),
                    l.value === t.number ? (o(), n("a", {
                      key: 1,
                      href: "#",
                      onClick: (m) => u(t.number),
                      "aria-current": "step"
                    }, [
                      I,
                      e("span", {
                        class: g([
                          d !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        ])
                      }, [
                        e("span", N, [
                          e("span", P, [
                            e("span", {
                              class: "text-indigo-600",
                              textContent: s(t.id)
                            }, null, 8, A)
                          ])
                        ]),
                        e("span", E, [
                          e("span", {
                            class: "text-xs font-semibold text-indigo-600 tracking-wide uppercase",
                            textContent: s(t.name)
                          }, null, 8, G),
                          e("span", {
                            class: "text-sm font-medium text-gray-500",
                            textContent: s(
                              t.description
                            )
                          }, null, 8, R)
                        ])
                      ], 2)
                    ], 8, V)) : r("", !0),
                    l.value < t.number ? (o(), n("a", {
                      key: 2,
                      href: "#",
                      onClick: (m) => u(t.number),
                      class: "group"
                    }, [
                      H,
                      e("span", {
                        class: g([
                          d !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        ])
                      }, [
                        e("span", T, [
                          e("span", U, [
                            e("span", {
                              class: "text-gray-500",
                              textContent: s(t.id)
                            }, null, 8, q)
                          ])
                        ]),
                        e("span", J, [
                          e("span", {
                            class: "text-xs font-semibold text-gray-500 tracking-wide uppercase",
                            textContent: s(t.name)
                          }, null, 8, K),
                          e("span", {
                            class: "text-sm font-medium text-gray-500",
                            textContent: s(
                              t.description
                            )
                          }, null, 8, O)
                        ])
                      ], 2)
                    ], 8, F)) : r("", !0),
                    d !== 0 ? (o(), n("div", Q, X)) : r("", !0)
                  ], 2)
                ])), 64))
              ])
            ])
          ])
        ]),
        l.value === 1 ? (o(), n("div", Y, [
          h(a.$slots, "step-1"),
          e("div", null, [
            e("div", Z, [
              ee,
              e("button", {
                type: "button",
                onClick: i[0] || (i[0] = (t) => u(2)),
                "data-onboarding-next": "1",
                class: "relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, [
                te,
                c(" I've installed Datapane ")
              ])
            ])
          ])
        ])) : r("", !0),
        l.value === 2 ? (o(), n("div", oe, [
          h(a.$slots, "step-2"),
          e("div", ne, [
            se,
            e("button", {
              type: "button",
              "data-onboarding-next": "2",
              onClick: i[1] || (i[1] = (t) => u(3)),
              class: "relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, [
              le,
              c(" I've logged in ")
            ])
          ])
        ])) : r("", !0),
        l.value === 3 ? (o(), n("div", re, [
          ae,
          e("div", ie, [
            h(a.$slots, "step-3")
          ]),
          e("div", de, [
            ce,
            e("a", {
              href: "/reports",
              "data-onboarding-next": "3",
              onClick: i[2] || (i[2] = (t) => x()),
              class: "relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, [
              ue,
              c(" I've built my report ")
            ])
          ])
        ])) : r("", !0)
      ])
    ], 64));
  }
});
export {
  pe as default
};
