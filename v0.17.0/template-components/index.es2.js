import { defineAsyncComponent as l, defineCustomElement as c } from "../vue.esm-browser.prod.js";
const r = (e) => window.addEventListener("DOMContentLoaded", e), a = (e, t, o = {}) => r(() => {
  const n = document.querySelector(e);
  if (!n)
    throw new Error(`Can't find element to toggle: ${e}`);
  o.initialOpen && n.classList.remove("dp-invisible");
  for (const s of t) {
    const i = document.querySelector(s);
    if (!i)
      throw new Error(`Can't find clickable element: ${s}`);
    i.addEventListener("click", () => {
      n.classList.toggle("dp-invisible"), o.callback && o.callback(
        !n.classList.contains("dp-invisible")
      );
    });
  }
}), f = (e) => {
  try {
    const t = e.assignedNodes()[0];
    return JSON.parse(
      t.querySelector("script[type='application/json']").textContent
    );
  } catch (t) {
    throw new Error(`Couldn't serialize slot content: ${t}`);
  }
}, d = l(() => import("./Modal.ce.es.js")), m = l(
  () => import("./SearchQuery.ce.es.js")
);
customElements.define("dp-modal", c(d));
customElements.define("dp-search-query", c(m));
const u = {
  toggleVisibility: a,
  onLoad: r
};
export {
  f as s,
  u as t
};
