import { defineAsyncComponent as o, defineCustomElement as n } from "../vue.esm-browser.prod.js";
const r = (e) => window.addEventListener("DOMContentLoaded", e), d = (e, t, s = {}) => r(() => {
  const i = document.querySelector(e);
  if (!i)
    throw new Error(`Can't find element to toggle: ${e}`);
  s.initialOpen && i.classList.remove("dp-invisible");
  for (const c of t) {
    const l = document.querySelector(c);
    if (!l)
      throw new Error(`Can't find clickable element: ${c}`);
    l.addEventListener("click", () => {
      i.classList.toggle("dp-invisible"), s.callback && s.callback(
        !i.classList.contains("dp-invisible")
      );
    });
  }
}), y = (e) => {
  try {
    const t = e.assignedNodes()[0];
    return JSON.parse(
      t.querySelector("script[type='application/json']").textContent
    );
  } catch (t) {
    throw new Error(`Couldn't serialize slot content: ${t}`);
  }
}, a = o(() => import("./Modal.ce.es.js")), m = o(() => import("./CopyField.ce.es.js")), p = o(
  () => import("./CodeCopyField.ce.es.js")
), f = o(
  () => import("./GettingStarted.ce.es.js")
), u = o(
  () => import("./SearchQuery.ce.es.js")
);
customElements.define(
  "dp-getting-started",
  n(f)
);
customElements.define("dp-modal", n(a));
customElements.define("dp-copy-field", n(m));
customElements.define("dp-code-copy-field", n(p));
customElements.define("dp-search-query", n(u));
const E = {
  toggleVisibility: d,
  onLoad: r
};
export {
  y as s,
  E as t
};
