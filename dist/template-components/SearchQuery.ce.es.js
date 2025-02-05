import { defineComponent as w, ref as o, openBlock as c, createElementBlock as i, Fragment as m, renderSlot as y, createElementVNode as e, withDirectives as b, renderList as k, toDisplayString as C, vShow as S } from "../vue.esm-browser.prod.js";
import { s as j } from "./index.es2.js";
const z = /* @__PURE__ */ e("link", {
  rel: "stylesheet",
  href: "/static/base/style.css"
}, null, -1), B = {
  method: "get",
  class: "w-full",
  "data-component-name": "app_list_form"
}, P = { class: "w-full" }, L = { class: "relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex" }, M = { class: "flex-1 flex justify-between px-4 sm:px-6" }, U = { class: "flex-1 flex" }, A = { class: "w-full flex md:ml-0" }, F = { class: "relative w-full text-gray-400 focus-within:text-gray-600" }, V = /* @__PURE__ */ e("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center" }, [
  /* @__PURE__ */ e("svg", {
    class: "flex-shrink-0 h-5 w-5",
    "x-description": "Heroicon name: solid/search",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ e("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), D = ["value", "placeholder"], E = /* @__PURE__ */ e("svg", {
  class: "h-5 w-5 text-gray-400",
  "x-description": "Heroicon name: solid/filter",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), H = [
  E
], J = { class: "bg-gray-100 p-3 w-full flex items-center" }, R = { class: "flex items-center mr-4" }, I = ["checked"], N = /* @__PURE__ */ e("label", {
  for: "id_owned_by_me",
  class: "block text-gray-700 text-sm ml-1"
}, " Created by me ", -1), Q = { class: "flex items-center" }, $ = ["value"], q = ["value"], O = /* @__PURE__ */ w({
  __name: "SearchQuery.ce",
  props: {
    searchPlaceholder: null
  },
  setup(f) {
    const _ = f, p = (t) => {
      h.value = j(t);
    }, v = (t) => {
      const s = [];
      for (const [l, n] of new URLSearchParams(location.search))
        t === l && s.push(n ? decodeURIComponent(n) : "");
      return s;
    }, r = (t) => {
      const s = v(t);
      return s.length > 0 ? s[0] : "";
    }, d = o(r("owned_by_me") === "on"), u = o(r("project")), g = o(r("name")), a = o(!!u.value || d.value || !1), h = o(), x = () => a.value = !a.value;
    return (t, s) => (c(), i(m, null, [
      z,
      y(t.$slots, "choices-data", { ref: p }),
      e("form", B, [
        e("div", P, [
          e("div", L, [
            e("div", M, [
              e("div", U, [
                e("div", A, [
                  e("div", F, [
                    V,
                    e("input", {
                      name: "name",
                      value: g.value,
                      id: "id_name",
                      class: "h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block",
                      placeholder: _.searchPlaceholder,
                      type: "search"
                    }, null, 8, D)
                  ])
                ])
              ]),
              e("div", { class: "ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6" }, [
                e("button", {
                  type: "button",
                  onClick: x,
                  class: "justify-center px-3.5 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }, H)
              ])
            ])
          ]),
          b(e("div", J, [
            e("div", R, [
              e("input", {
                type: "checkbox",
                name: "owned_by_me",
                class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",
                id: "id_owned_by_me",
                checked: d.value,
                onchange: "this.form.submit()"
              }, null, 8, I),
              N
            ]),
            e("div", Q, [
              e("select", {
                value: u.value,
                onchange: "this.form.submit()",
                class: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
                name: "project"
              }, [
                (c(!0), i(m, null, k(h.value, (l, n) => (c(), i("option", {
                  key: n,
                  value: l.value
                }, C(l.text), 9, q))), 128))
              ], 8, $)
            ])
          ], 512), [
            [S, a.value]
          ])
        ])
      ])
    ], 64));
  }
});
export {
  O as default
};
