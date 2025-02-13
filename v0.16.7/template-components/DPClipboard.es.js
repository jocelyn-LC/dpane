var K = Object.defineProperty;
var Q = (b, h, m) => h in b ? K(b, h, { enumerable: !0, configurable: !0, writable: !0, value: m }) : b[h] = m;
var N = (b, h, m) => (Q(b, typeof h != "symbol" ? h + "" : h, m), m);
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Z(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var D = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(b, h) {
  (function(_, S) {
    b.exports = S();
  })(W, function() {
    return function() {
      var m = {
        686: function(l, a, t) {
          t.d(a, {
            default: function() {
              return q;
            }
          });
          var c = t(279), f = /* @__PURE__ */ t.n(c), s = t(370), g = /* @__PURE__ */ t.n(s), y = t(817), E = /* @__PURE__ */ t.n(y);
          function d(i) {
            try {
              return document.execCommand(i);
            } catch {
              return !1;
            }
          }
          var v = function(n) {
            var e = E()(n);
            return d("cut"), e;
          }, p = v;
          function T(i) {
            var n = document.documentElement.getAttribute("dir") === "rtl", e = document.createElement("textarea");
            e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[n ? "right" : "left"] = "-9999px";
            var r = window.pageYOffset || document.documentElement.scrollTop;
            return e.style.top = "".concat(r, "px"), e.setAttribute("readonly", ""), e.value = i, e;
          }
          var j = function(n, e) {
            var r = T(n);
            e.container.appendChild(r);
            var o = E()(r);
            return d("copy"), r.remove(), o;
          }, I = function(n) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              container: document.body
            }, r = "";
            return typeof n == "string" ? r = j(n, e) : n instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(n == null ? void 0 : n.type) ? r = j(n.value, e) : (r = E()(n), d("copy")), r;
          }, k = I;
          function C(i) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? C = function(e) {
              return typeof e;
            } : C = function(e) {
              return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, C(i);
          }
          var H = function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.action, r = e === void 0 ? "copy" : e, o = n.container, u = n.target, w = n.text;
            if (r !== "copy" && r !== "cut")
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            if (u !== void 0)
              if (u && C(u) === "object" && u.nodeType === 1) {
                if (r === "copy" && u.hasAttribute("disabled"))
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                if (r === "cut" && (u.hasAttribute("readonly") || u.hasAttribute("disabled")))
                  throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
              } else
                throw new Error('Invalid "target" value, use a valid Element');
            if (w)
              return k(w, {
                container: o
              });
            if (u)
              return r === "cut" ? p(u) : k(u, {
                container: o
              });
          }, z = H;
          function x(i) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? x = function(e) {
              return typeof e;
            } : x = function(e) {
              return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, x(i);
          }
          function U(i, n) {
            if (!(i instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function F(i, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
            }
          }
          function V(i, n, e) {
            return n && F(i.prototype, n), e && F(i, e), i;
          }
          function Y(i, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function");
            i.prototype = Object.create(n && n.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), n && R(i, n);
          }
          function R(i, n) {
            return R = Object.setPrototypeOf || function(r, o) {
              return r.__proto__ = o, r;
            }, R(i, n);
          }
          function $(i) {
            var n = J();
            return function() {
              var r = O(i), o;
              if (n) {
                var u = O(this).constructor;
                o = Reflect.construct(r, arguments, u);
              } else
                o = r.apply(this, arguments);
              return B(this, o);
            };
          }
          function B(i, n) {
            return n && (x(n) === "object" || typeof n == "function") ? n : G(i);
          }
          function G(i) {
            if (i === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i;
          }
          function J() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), !0;
            } catch {
              return !1;
            }
          }
          function O(i) {
            return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }, O(i);
          }
          function M(i, n) {
            var e = "data-clipboard-".concat(i);
            if (!!n.hasAttribute(e))
              return n.getAttribute(e);
          }
          var X = /* @__PURE__ */ function(i) {
            Y(e, i);
            var n = $(e);
            function e(r, o) {
              var u;
              return U(this, e), u = n.call(this), u.resolveOptions(o), u.listenClick(r), u;
            }
            return V(e, [{
              key: "resolveOptions",
              value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = typeof o.action == "function" ? o.action : this.defaultAction, this.target = typeof o.target == "function" ? o.target : this.defaultTarget, this.text = typeof o.text == "function" ? o.text : this.defaultText, this.container = x(o.container) === "object" ? o.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function(o) {
                var u = this;
                this.listener = g()(o, "click", function(w) {
                  return u.onClick(w);
                });
              }
            }, {
              key: "onClick",
              value: function(o) {
                var u = o.delegateTarget || o.currentTarget, w = this.action(u) || "copy", L = z({
                  action: w,
                  container: this.container,
                  target: this.target(u),
                  text: this.text(u)
                });
                this.emit(L ? "success" : "error", {
                  action: w,
                  text: L,
                  trigger: u,
                  clearSelection: function() {
                    u && u.focus(), window.getSelection().removeAllRanges();
                  }
                });
              }
            }, {
              key: "defaultAction",
              value: function(o) {
                return M("action", o);
              }
            }, {
              key: "defaultTarget",
              value: function(o) {
                var u = M("target", o);
                if (u)
                  return document.querySelector(u);
              }
            }, {
              key: "defaultText",
              value: function(o) {
                return M("text", o);
              }
            }, {
              key: "destroy",
              value: function() {
                this.listener.destroy();
              }
            }], [{
              key: "copy",
              value: function(o) {
                var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                };
                return k(o, u);
              }
            }, {
              key: "cut",
              value: function(o) {
                return p(o);
              }
            }, {
              key: "isSupported",
              value: function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], u = typeof o == "string" ? [o] : o, w = !!document.queryCommandSupported;
                return u.forEach(function(L) {
                  w = w && !!document.queryCommandSupported(L);
                }), w;
              }
            }]), e;
          }(f()), q = X;
        },
        828: function(l) {
          var a = 9;
          if (typeof Element < "u" && !Element.prototype.matches) {
            var t = Element.prototype;
            t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
          }
          function c(f, s) {
            for (; f && f.nodeType !== a; ) {
              if (typeof f.matches == "function" && f.matches(s))
                return f;
              f = f.parentNode;
            }
          }
          l.exports = c;
        },
        438: function(l, a, t) {
          var c = t(828);
          function f(y, E, d, v, p) {
            var T = g.apply(this, arguments);
            return y.addEventListener(d, T, p), {
              destroy: function() {
                y.removeEventListener(d, T, p);
              }
            };
          }
          function s(y, E, d, v, p) {
            return typeof y.addEventListener == "function" ? f.apply(null, arguments) : typeof d == "function" ? f.bind(null, document).apply(null, arguments) : (typeof y == "string" && (y = document.querySelectorAll(y)), Array.prototype.map.call(y, function(T) {
              return f(T, E, d, v, p);
            }));
          }
          function g(y, E, d, v) {
            return function(p) {
              p.delegateTarget = c(p.target, E), p.delegateTarget && v.call(y, p);
            };
          }
          l.exports = s;
        },
        879: function(l, a) {
          a.node = function(t) {
            return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1;
          }, a.nodeList = function(t) {
            var c = Object.prototype.toString.call(t);
            return t !== void 0 && (c === "[object NodeList]" || c === "[object HTMLCollection]") && "length" in t && (t.length === 0 || a.node(t[0]));
          }, a.string = function(t) {
            return typeof t == "string" || t instanceof String;
          }, a.fn = function(t) {
            var c = Object.prototype.toString.call(t);
            return c === "[object Function]";
          };
        },
        370: function(l, a, t) {
          var c = t(879), f = t(438);
          function s(d, v, p) {
            if (!d && !v && !p)
              throw new Error("Missing required arguments");
            if (!c.string(v))
              throw new TypeError("Second argument must be a String");
            if (!c.fn(p))
              throw new TypeError("Third argument must be a Function");
            if (c.node(d))
              return g(d, v, p);
            if (c.nodeList(d))
              return y(d, v, p);
            if (c.string(d))
              return E(d, v, p);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          }
          function g(d, v, p) {
            return d.addEventListener(v, p), {
              destroy: function() {
                d.removeEventListener(v, p);
              }
            };
          }
          function y(d, v, p) {
            return Array.prototype.forEach.call(d, function(T) {
              T.addEventListener(v, p);
            }), {
              destroy: function() {
                Array.prototype.forEach.call(d, function(T) {
                  T.removeEventListener(v, p);
                });
              }
            };
          }
          function E(d, v, p) {
            return f(document.body, d, v, p);
          }
          l.exports = s;
        },
        817: function(l) {
          function a(t) {
            var c;
            if (t.nodeName === "SELECT")
              t.focus(), c = t.value;
            else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
              var f = t.hasAttribute("readonly");
              f || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), f || t.removeAttribute("readonly"), c = t.value;
            } else {
              t.hasAttribute("contenteditable") && t.focus();
              var s = window.getSelection(), g = document.createRange();
              g.selectNodeContents(t), s.removeAllRanges(), s.addRange(g), c = s.toString();
            }
            return c;
          }
          l.exports = a;
        },
        279: function(l) {
          function a() {
          }
          a.prototype = {
            on: function(t, c, f) {
              var s = this.e || (this.e = {});
              return (s[t] || (s[t] = [])).push({
                fn: c,
                ctx: f
              }), this;
            },
            once: function(t, c, f) {
              var s = this;
              function g() {
                s.off(t, g), c.apply(f, arguments);
              }
              return g._ = c, this.on(t, g, f);
            },
            emit: function(t) {
              var c = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, g = f.length;
              for (s; s < g; s++)
                f[s].fn.apply(f[s].ctx, c);
              return this;
            },
            off: function(t, c) {
              var f = this.e || (this.e = {}), s = f[t], g = [];
              if (s && c)
                for (var y = 0, E = s.length; y < E; y++)
                  s[y].fn !== c && s[y].fn._ !== c && g.push(s[y]);
              return g.length ? f[t] = g : delete f[t], this;
            }
          }, l.exports = a, l.exports.TinyEmitter = a;
        }
      }, _ = {};
      function S(l) {
        if (_[l])
          return _[l].exports;
        var a = _[l] = {
          exports: {}
        };
        return m[l](a, a.exports, S), a.exports;
      }
      return function() {
        S.n = function(l) {
          var a = l && l.__esModule ? function() {
            return l.default;
          } : function() {
            return l;
          };
          return S.d(a, { a }), a;
        };
      }(), function() {
        S.d = function(l, a) {
          for (var t in a)
            S.o(a, t) && !S.o(l, t) && Object.defineProperty(l, t, { enumerable: !0, get: a[t] });
        };
      }(), function() {
        S.o = function(l, a) {
          return Object.prototype.hasOwnProperty.call(l, a);
        };
      }(), S(686);
    }().default;
  });
})(D);
const tt = /* @__PURE__ */ Z(D.exports), A = class {
  constructor(h, m) {
    N(this, "clip");
    this.clip = new tt(h, {
      text() {
        return m.text ? m.text : A.getFieldValue(m.fieldId);
      }
    }), this.clip.on(
      "error",
      () => console.error("An error occurred while copying to clipboard")
    ), this.clip.on("success", A.onSuccess);
  }
  destroy() {
    this.clip.destroy();
  }
  static getFieldValue(h) {
    const m = document.querySelector(`#${h}`);
    if (!m)
      throw `Field with ID ${h} not found`;
    return m.value;
  }
  static async copyOnce(h) {
    try {
      await navigator.clipboard.writeText(h), A.onSuccess();
    } catch (m) {
      console.error("Error copying to clipboard: ", m);
    }
  }
};
let P = A;
N(P, "onSuccess", () => {
  const h = document.getElementById("copy-notification");
  h && (h.classList.toggle("dp-invisible"), setTimeout(
    () => h.classList.toggle("dp-invisible"),
    2e3
  ));
});
export {
  P as D
};
