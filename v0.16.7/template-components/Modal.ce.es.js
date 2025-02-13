import { defineComponent as d, ref as c, openBlock as m, createElementBlock as u, Fragment as v, renderSlot as n, withDirectives as i, createElementVNode as t, vShow as a } from "../vue.esm-browser.prod.js";
const f = /* @__PURE__ */ t("link", {
  rel: "stylesheet",
  href: "/static/base/style.css"
}, null, -1), p = {
  "data-cy": "modal-component",
  class: "modal-component fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50",
  style: { display: "none" }
}, h = { class: "fixed inset-0 transition-opacity" }, _ = {
  style: { "max-height": "40em" },
  class: "text-left relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-x-hidden overflow-y-auto shadow-xl transform transition-all sm:max-w-2xl sm:w-full sm:p-6"
}, x = { class: "hidden sm:block absolute top-0 right-0 pt-5 pr-4" }, y = /* @__PURE__ */ t("svg", {
  class: "h-6 w-6",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ t("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), b = [
  y
], g = { class: "sm:flex sm:items-center mb-1" }, w = { class: "mt-3 sm:mt-0 sm:text-left" }, k = { class: "flex items-center" }, $ = { class: "text-lg leading-6 font-medium text-gray-900 pb-1" }, C = { class: "mt-3 w-full" }, B = { class: "text-sm leading-5 text-gray-500" }, M = {
  class: "mt-4 flex",
  style: { "flex-direction": "row-reverse" }
}, S = { class: "mt-3 sm:mt-0" }, L = /* @__PURE__ */ d({
  __name: "Modal.ce",
  setup(j) {
    const r = new URLSearchParams(document.location.search).has("invite"), s = c(r);
    return (o, e) => (m(), u(v, null, [
      f,
      n(o.$slots, "trigger", {
        onClick: e[0] || (e[0] = (l) => s.value = !0)
      }),
      i(t("div", p, [
        i(t("div", h, [
          t("div", {
            onClick: e[1] || (e[1] = (l) => s.value = !1),
            class: "absolute inset-0 bg-gray-500 opacity-75"
          })
        ], 512), [
          [a, s.value]
        ]),
        i(t("div", _, [
          t("div", x, [
            t("button", {
              onClick: e[2] || (e[2] = (l) => s.value = !1),
              type: "button",
              class: "text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            }, b)
          ]),
          t("div", g, [
            t("div", w, [
              t("div", k, [
                t("h3", $, [
                  n(o.$slots, "title")
                ])
              ])
            ])
          ]),
          t("div", C, [
            t("div", B, [
              n(o.$slots, "default")
            ])
          ]),
          t("div", M, [
            n(o.$slots, "buttons", {}, () => [
              n(o.$slots, "action"),
              t("div", S, [
                t("button", {
                  onClick: e[3] || (e[3] = (l) => s.value = !1),
                  type: "button",
                  class: "dp-btn dp-btn-info mr-3"
                }, " Close ")
              ])
            ])
          ])
        ], 512), [
          [a, s.value]
        ])
      ], 512), [
        [a, s.value]
      ])
    ], 64));
  }
});
export {
  L as default
};
