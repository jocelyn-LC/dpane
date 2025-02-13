import { defineComponent as a, openBlock as n, createElementBlock as o, Fragment as r, createElementVNode as e, toDisplayString as l, normalizeClass as c, createCommentVNode as d } from "../vue.esm-browser.prod.js";
import { D as p } from "./DPClipboard.es.js";
const u = /* @__PURE__ */ e("link", {
  rel: "stylesheet",
  href: "/static/base/style.css"
}, null, -1), m = { class: "text-gray-500 pt-2" }, f = { class: "mt-2 flex rounded-md shadow-sm" }, _ = { class: "relative flex-grow max-w-full h-10 focus-within:z-10 border border-gray-300 pl-2 flex items-center rounded-md bg-white" }, h = { class: "font-mono form-input block truncate w-full transition ease-in-out duration-150 sm:text-md sm:leading-5 border-0" }, y = /* @__PURE__ */ e("svg", {
  class: "h-5 w-5",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [
  /* @__PURE__ */ e("title", null, "Copy"),
  /* @__PURE__ */ e("path", { d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" }),
  /* @__PURE__ */ e("path", { d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" })
], -1), b = {
  key: 0,
  class: "pl-2"
}, g = /* @__PURE__ */ a({
  __name: "CopyField.ce",
  props: {
    inline: { type: Boolean, default: !0 },
    title: null,
    content: null
  },
  setup(s) {
    const t = s, i = () => {
      p.copyOnce(t.content);
    };
    return (x, v) => (n(), o(r, null, [
      u,
      e("div", m, l(t.title), 1),
      e("div", null, [
        e("div", f, [
          e("div", _, [
            e("pre", h, "              " + l(t.content) + `
          `, 1),
            e("span", null, [
              e("button", {
                onClick: i,
                class: c([
                  "justify-center dp-btn dp-btn-info -ml-px relative inline-flex items-center",
                  {
                    "rounded-l-none border-none": t.inline,
                    "w-full": !t.inline
                  }
                ])
              }, [
                y,
                t.inline ? d("", !0) : (n(), o("span", b, "Copy"))
              ], 2)
            ])
          ])
        ])
      ])
    ], 64));
  }
});
export {
  g as default
};
