var ce = Object.defineProperty;
var le = (e, t, r) => t in e ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var se = (e, t, r) => (le(e, typeof t != "symbol" ? t + "" : t, r), r);
const base = "", templatesBase = "", tailwind = "", getHostName = () => window.dpLocal || window.dpServed ? null : window.location.origin.concat("/"), env = {};
env.url = getHostName();
function normalize$1(e) {
  var t = [];
  if (e.length === 0)
    return "";
  if (typeof e[0] != "string")
    throw new TypeError("Url must be a string. Received " + e[0]);
  if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
    var r = e.shift();
    e[0] = r + e[0];
  }
  e[0].match(/^file:\/\/\//) ? e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    if (typeof o != "string")
      throw new TypeError("Url must be a string. Received " + o);
    o !== "" && (n > 0 && (o = o.replace(/^[\/]+/, "")), n < e.length - 1 ? o = o.replace(/[\/]+$/, "") : o = o.replace(/[\/]+$/, "/"), t.push(o));
  }
  var a = t.join("/");
  a = a.replace(/\/(\?|&|#[^!])/g, "$1");
  var u = a.split("?");
  return a = u.shift() + (u.length > 0 ? "?" : "") + u.join("&"), a;
}
function urlJoin() {
  var e;
  return typeof arguments[0] == "object" ? e = arguments[0] : e = [].slice.call(arguments), normalize$1(e);
}
function ownKeys$2(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ownKeys$2(Object(r), !0).forEach(function(n) {
      _defineProperty(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys$2(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _typeof(e) {
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _typeof(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, r) {
  return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _inherits(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && _setPrototypeOf(e, t);
}
function _getPrototypeOf(e) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _getPrototypeOf(e);
}
function _setPrototypeOf(e, t) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, _setPrototypeOf(e, t);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _objectWithoutPropertiesLoose(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function _objectWithoutProperties(e, t) {
  if (e == null)
    return {};
  var r = _objectWithoutPropertiesLoose(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function _assertThisInitialized(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _possibleConstructorReturn(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(e);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function() {
    var n = _getPrototypeOf(e), o;
    if (t) {
      var a = _getPrototypeOf(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else
      o = n.apply(this, arguments);
    return _possibleConstructorReturn(this, o);
  };
}
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e))
    return _arrayLikeToArray(e);
}
function _arrayWithHoles(e) {
  if (Array.isArray(e))
    return e;
}
function _iterableToArray(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _iterableToArrayLimit(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, u, c;
    try {
      for (r = r.call(e); !(o = (u = r.next()).done) && (n.push(u.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, c = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw c;
      }
    }
    return n;
  }
}
function _unsupportedIterableToArray(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _arrayLikeToArray(e, t);
  }
}
function _arrayLikeToArray(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _createForOfIteratorHelper(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return {
        s: o,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: o
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, u = !1, c;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var l = r.next();
      return a = l.done, l;
    },
    e: function(l) {
      u = !0, c = l;
    },
    f: function() {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (u)
          throw c;
      }
    }
  };
}
var f = String.fromCharCode, keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", baseReverseDic = {};
function getBaseValue(e, t) {
  if (!baseReverseDic[e]) {
    baseReverseDic[e] = {};
    for (var r = 0; r < e.length; r++)
      baseReverseDic[e][e.charAt(r)] = r;
  }
  return baseReverseDic[e][t];
}
var LZString = {
  compressToBase64: function(t) {
    if (t == null)
      return "";
    var r = LZString._compress(t, 6, function(n) {
      return keyStrBase64.charAt(n);
    });
    switch (r.length % 4) {
      default:
      case 0:
        return r;
      case 1:
        return r + "===";
      case 2:
        return r + "==";
      case 3:
        return r + "=";
    }
  },
  decompressFromBase64: function(t) {
    return t == null ? "" : t == "" ? null : LZString._decompress(t.length, 32, function(r) {
      return getBaseValue(keyStrBase64, t.charAt(r));
    });
  },
  compressToUTF16: function(t) {
    return t == null ? "" : LZString._compress(t, 15, function(r) {
      return f(r + 32);
    }) + " ";
  },
  decompressFromUTF16: function(t) {
    return t == null ? "" : t == "" ? null : LZString._decompress(t.length, 16384, function(r) {
      return t.charCodeAt(r) - 32;
    });
  },
  compressToUint8Array: function(t) {
    for (var r = LZString.compress(t), n = new Uint8Array(r.length * 2), o = 0, a = r.length; o < a; o++) {
      var u = r.charCodeAt(o);
      n[o * 2] = u >>> 8, n[o * 2 + 1] = u % 256;
    }
    return n;
  },
  decompressFromUint8Array: function(t) {
    if (t == null)
      return LZString.decompress(t);
    for (var r = new Array(t.length / 2), n = 0, o = r.length; n < o; n++)
      r[n] = t[n * 2] * 256 + t[n * 2 + 1];
    var a = [];
    return r.forEach(function(u) {
      a.push(f(u));
    }), LZString.decompress(a.join(""));
  },
  compressToEncodedURIComponent: function(t) {
    return t == null ? "" : LZString._compress(t, 6, function(r) {
      return keyStrUriSafe.charAt(r);
    });
  },
  decompressFromEncodedURIComponent: function(t) {
    return t == null ? "" : t == "" ? null : (t = t.replace(/ /g, "+"), LZString._decompress(t.length, 32, function(r) {
      return getBaseValue(keyStrUriSafe, t.charAt(r));
    }));
  },
  compress: function(t) {
    return LZString._compress(t, 16, function(r) {
      return f(r);
    });
  },
  _compress: function(t, r, n) {
    if (t == null)
      return "";
    var o, a, u = "", c = "", l = "", p = 2, g = 3, v = 2, _ = 0, b = 0, E, w = {}, S = {}, A = [];
    for (E = 0; E < t.length; E += 1)
      if (u = t.charAt(E), Object.prototype.hasOwnProperty.call(w, u) || (w[u] = g++, S[u] = !0), c = l + u, Object.prototype.hasOwnProperty.call(w, c))
        l = c;
      else {
        if (Object.prototype.hasOwnProperty.call(S, l)) {
          if (l.charCodeAt(0) < 256) {
            for (o = 0; o < v; o++)
              _ = _ << 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++;
            for (a = l.charCodeAt(0), o = 0; o < 8; o++)
              _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
          } else {
            for (a = 1, o = 0; o < v; o++)
              _ = _ << 1 | a, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = 0;
            for (a = l.charCodeAt(0), o = 0; o < 16; o++)
              _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
          }
          p--, p == 0 && (p = Math.pow(2, v), v++), delete S[l];
        } else
          for (a = w[l], o = 0; o < v; o++)
            _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
        p--, p == 0 && (p = Math.pow(2, v), v++), w[c] = g++, l = String(u);
      }
    if (l !== "") {
      if (Object.prototype.hasOwnProperty.call(S, l)) {
        if (l.charCodeAt(0) < 256) {
          for (o = 0; o < v; o++)
            _ = _ << 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++;
          for (a = l.charCodeAt(0), o = 0; o < 8; o++)
            _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
        } else {
          for (a = 1, o = 0; o < v; o++)
            _ = _ << 1 | a, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = 0;
          for (a = l.charCodeAt(0), o = 0; o < 16; o++)
            _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
        }
        p--, p == 0 && (p = Math.pow(2, v), v++), delete S[l];
      } else
        for (a = w[l], o = 0; o < v; o++)
          _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
      p--, p == 0 && (p = Math.pow(2, v), v++);
    }
    for (a = 2, o = 0; o < v; o++)
      _ = _ << 1 | a & 1, b == r - 1 ? (b = 0, A.push(n(_)), _ = 0) : b++, a = a >> 1;
    for (; ; )
      if (_ = _ << 1, b == r - 1) {
        A.push(n(_));
        break;
      } else
        b++;
    return A.join("");
  },
  decompress: function(t) {
    return t == null ? "" : t == "" ? null : LZString._decompress(t.length, 32768, function(r) {
      return t.charCodeAt(r);
    });
  },
  _decompress: function(t, r, n) {
    var o = [], a = [], u = {
      val: n(0),
      position: r,
      index: 1
    }, c = 4, l = 4, p = 3, g = "", v, _, b, E, w, S, A;
    for (v = 0; v < 3; v += 1)
      o[v] = v;
    for (b = 0, w = Math.pow(2, 2), S = 1; S != w; )
      E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
    switch (b) {
      case 0:
        for (b = 0, w = Math.pow(2, 8), S = 1; S != w; )
          E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
        A = f(b);
        break;
      case 1:
        for (b = 0, w = Math.pow(2, 16), S = 1; S != w; )
          E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
        A = f(b);
        break;
      case 2:
        return "";
    }
    for (o[3] = A, _ = A, a.push(A); ; ) {
      if (u.index > t)
        return "";
      for (b = 0, w = Math.pow(2, p), S = 1; S != w; )
        E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
      switch (A = b) {
        case 0:
          for (b = 0, w = Math.pow(2, 8), S = 1; S != w; )
            E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
          o[l++] = f(b), A = l - 1, c--;
          break;
        case 1:
          for (b = 0, w = Math.pow(2, 16), S = 1; S != w; )
            E = u.val & u.position, u.position >>= 1, u.position == 0 && (u.position = r, u.val = n(u.index++)), b |= (E > 0 ? 1 : 0) * S, S <<= 1;
          o[l++] = f(b), A = l - 1, c--;
          break;
        case 2:
          return a.join("");
      }
      if (c == 0 && (c = Math.pow(2, p), p++), o[A])
        g = o[A];
      else if (A === l)
        g = _ + _.charAt(0);
      else
        return null;
      a.push(g), o[l++] = _ + g.charAt(0), c--, _ = g, c == 0 && (c = Math.pow(2, p), p++);
    }
  }
}, version$1 = "1.34.1", Config = {
  DEBUG: !1,
  LIB_VERSION: version$1
}, ArrayProto = Array.prototype, ObjProto = Object.prototype, toString$2 = ObjProto.toString, hasOwnProperty$1 = ObjProto.hasOwnProperty, win = typeof window < "u" ? window : {}, navigator$1 = win.navigator || {
  userAgent: ""
}, document$1$1 = win.document || {}, userAgent$1 = navigator$1.userAgent, nativeForEach = ArrayProto.forEach, nativeIndexOf = ArrayProto.indexOf, nativeIsArray = Array.isArray, breaker = {}, logger = {
  log: function() {
    if (Config.DEBUG && !_isUndefined(window.console) && window.console) {
      for (var t = ("__rrweb_original__" in window.console.log) ? window.console.log.__rrweb_original__ : window.console.log, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      try {
        t.apply(window.console, n);
      } catch {
        _eachArray(n, function(u) {
          t(u);
        });
      }
    }
  },
  error: function() {
    if (Config.DEBUG && !_isUndefined(window.console) && window.console) {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      var o = ["PostHog error:"].concat(r), a = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
      try {
        a.apply(window.console, o);
      } catch {
        _eachArray(o, function(c) {
          a(c);
        });
      }
    }
  },
  critical: function() {
    if (!_isUndefined(window.console) && window.console) {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      var o = ["PostHog error:"].concat(r), a = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
      try {
        a.apply(window.console, o);
      } catch {
        _eachArray(o, function(c) {
          a(c);
        });
      }
    }
  }
}, _trim = function(t) {
  return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, _bind_instance_methods = function(t) {
  for (var r in t)
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
};
function _each(e, t, r) {
  if (e != null) {
    if (nativeForEach && Array.isArray(e) && e.forEach === nativeForEach)
      e.forEach(t, r);
    else if ("length" in e && e.length === +e.length) {
      for (var n = 0, o = e.length; n < o; n++)
        if (n in e && t.call(r, e[n], n) === breaker)
          return;
    } else
      for (var a in e)
        if (hasOwnProperty$1.call(e, a) && t.call(r, e[a], a) === breaker)
          return;
  }
}
function _eachArray(e, t, r) {
  if (Array.isArray(e)) {
    if (nativeForEach && e.forEach === nativeForEach)
      e.forEach(t, r);
    else if ("length" in e && e.length === +e.length) {
      for (var n = 0, o = e.length; n < o; n++)
        if (n in e && t.call(r, e[n], n) === breaker)
          return;
    }
  }
}
var _extend = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  return _eachArray(n, function(a) {
    for (var u in a)
      a[u] !== void 0 && (t[u] = a[u]);
  }), t;
}, _isArray = nativeIsArray || function(e) {
  return toString$2.call(e) === "[object Array]";
}, _isFunction = function(t) {
  try {
    return /^\s*\bfunction\b/.test(t);
  } catch {
    return !1;
  }
}, _include = function(t, r) {
  var n = !1;
  return t === null ? n : nativeIndexOf && t.indexOf === nativeIndexOf ? t.indexOf(r) != -1 : (_each(t, function(o) {
    if (n || (n = o === r))
      return breaker;
  }), n);
};
function _includes(e, t) {
  return e.indexOf(t) !== -1;
}
var _isObject = function(t) {
  return t === Object(t) && !_isArray(t);
}, _isUndefined = function(t) {
  return t === void 0;
}, _isString = function(t) {
  return toString$2.call(t) == "[object String]";
}, _isDate = function(t) {
  return toString$2.call(t) == "[object Date]";
}, _isNumber = function(t) {
  return toString$2.call(t) == "[object Number]";
}, _encodeDates = function e(t) {
  return _each(t, function(r, n) {
    _isDate(r) ? t[n] = _formatDate(r) : _isObject(r) && (t[n] = e(r));
  }), t;
}, _timestamp = function() {
  return Date.now = Date.now || function() {
    return +new Date();
  }, Date.now();
}, _formatDate = function(t) {
  function r(n) {
    return n < 10 ? "0" + n : n;
  }
  return t.getUTCFullYear() + "-" + r(t.getUTCMonth() + 1) + "-" + r(t.getUTCDate()) + "T" + r(t.getUTCHours()) + ":" + r(t.getUTCMinutes()) + ":" + r(t.getUTCSeconds());
}, _safewrap = function(t) {
  return function() {
    try {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return t.apply(this, n);
    } catch (a) {
      logger.critical("Implementation error. Please turn on debug and contact support@posthog.com."), Config.DEBUG && logger.critical(a);
    }
  };
}, _safewrap_class = function(t, r) {
  for (var n = 0; n < r.length; n++)
    t.prototype[r[n]] = _safewrap(t.prototype[r[n]]);
}, _safewrap_instance_methods = function(t) {
  for (var r in t)
    typeof t[r] == "function" && (t[r] = _safewrap(t[r]));
}, _strip_empty_properties = function(t) {
  var r = {};
  return _each(t, function(n, o) {
    _isString(n) && n.length > 0 && (r[o] = n);
  }), r;
}, COPY_IN_PROGRESS_ATTRIBUTE = typeof Symbol < "u" ? Symbol("__deepCircularCopyInProgress__") : "__deepCircularCopyInProgress__";
function deepCircularCopy(e, t, r) {
  if (e !== Object(e))
    return t ? t(e, r) : e;
  if (!e[COPY_IN_PROGRESS_ATTRIBUTE]) {
    e[COPY_IN_PROGRESS_ATTRIBUTE] = !0;
    var n;
    return _isArray(e) ? (n = [], _eachArray(e, function(o) {
      n.push(deepCircularCopy(o, t));
    })) : (n = {}, _each(e, function(o, a) {
      a !== COPY_IN_PROGRESS_ATTRIBUTE && (n[a] = deepCircularCopy(o, t, a));
    })), delete e[COPY_IN_PROGRESS_ATTRIBUTE], n;
  }
}
var LONG_STRINGS_ALLOW_LIST = ["$performance_raw"];
function _copyAndTruncateStrings(e, t) {
  return deepCircularCopy(e, function(r, n) {
    return n && LONG_STRINGS_ALLOW_LIST.indexOf(n) > -1 ? r : typeof r == "string" && t !== null ? r.slice(0, t) : r;
  });
}
function _base64Encode(e) {
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r, n, o, a, u, c, l, p, g = 0, v = 0, _ = "", b = [];
  if (!e)
    return e;
  e = _utf8Encode(e);
  do
    r = e.charCodeAt(g++), n = e.charCodeAt(g++), o = e.charCodeAt(g++), p = r << 16 | n << 8 | o, a = p >> 18 & 63, u = p >> 12 & 63, c = p >> 6 & 63, l = p & 63, b[v++] = t.charAt(a) + t.charAt(u) + t.charAt(c) + t.charAt(l);
  while (g < e.length);
  switch (_ = b.join(""), e.length % 3) {
    case 1:
      _ = _.slice(0, -2) + "==";
      break;
    case 2:
      _ = _.slice(0, -1) + "=";
      break;
  }
  return _;
}
var _utf8Encode = function(t) {
  t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
  var r = "", n, o, a = 0, u;
  for (n = o = 0, a = t.length, u = 0; u < a; u++) {
    var c = t.charCodeAt(u), l = null;
    c < 128 ? o++ : c > 127 && c < 2048 ? l = String.fromCharCode(c >> 6 | 192, c & 63 | 128) : l = String.fromCharCode(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128), l !== null && (o > n && (r += t.substring(n, o)), r += l, n = o = u + 1);
  }
  return o > n && (r += t.substring(n, t.length)), r;
}, _UUID = function() {
  var e = function() {
    for (var o = new Date().valueOf(), a = 0; o == new Date().valueOf(); )
      a++;
    return o.toString(16) + a.toString(16);
  }, t = function() {
    return Math.random().toString(16).replace(".", "");
  }, r = function() {
    var o = userAgent$1, a, u, c = 0, l = [];
    function p(g, v) {
      var _, b = 0;
      for (_ = 0; _ < v.length; _++)
        b |= l[_] << _ * 8;
      return g ^ b;
    }
    for (a = 0; a < o.length; a++)
      u = o.charCodeAt(a), l.unshift(u & 255), l.length >= 4 && (c = p(c, l), l = []);
    return l.length > 0 && (c = p(c, l)), c.toString(16);
  };
  return function() {
    var n = (window.screen.height * window.screen.width).toString(16);
    return e() + "-" + t() + "-" + r() + "-" + n + "-" + e();
  };
}(), _isBlockedUA = function(t) {
  return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog)/i.test(t);
}, _HTTPBuildQuery = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "&", n, o, a = [];
  return _each(t, function(u, c) {
    n = encodeURIComponent(u.toString()), o = encodeURIComponent(c), a[a.length] = o + "=" + n;
  }), a.join(r);
}, _getQueryParam = function(t, r) {
  var n = r.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"), o = "[\\?&]" + n + "=([^&#]*)", a = new RegExp(o), u = a.exec(t);
  if (u === null || u && typeof u[1] != "string" && u[1].length)
    return "";
  var c = u[1];
  try {
    c = decodeURIComponent(c);
  } catch {
    logger.error("Skipping decoding for malformed query param: " + c);
  }
  return c.replace(/\+/g, " ");
}, _getHashParam = function(t, r) {
  var n = t.match(new RegExp(r + "=([^&]*)"));
  return n ? n[1] : null;
}, _register_event = function() {
  var e = function(o, a, u, c, l) {
    if (!o) {
      logger.error("No valid element provided to register_event");
      return;
    }
    if (o.addEventListener && !c)
      o.addEventListener(a, u, !!l);
    else {
      var p = "on" + a, g = o[p];
      o[p] = t(o, u, g);
    }
  };
  function t(n, o, a) {
    return function(u) {
      if (u = u || r(window.event), !!u) {
        var c = !0, l;
        _isFunction(a) && (l = a(u));
        var p = o.call(n, u);
        return (l === !1 || p === !1) && (c = !1), c;
      }
    };
  }
  function r(n) {
    return n && (n.preventDefault = r.preventDefault, n.stopPropagation = r.stopPropagation), n;
  }
  return r.preventDefault = function() {
    this.returnValue = !1;
  }, r.stopPropagation = function() {
    this.cancelBubble = !0;
  }, e;
}(), _info = {
  campaignParams: function() {
    var t = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "), r = {};
    return _each(t, function(n) {
      var o = _getQueryParam(document$1$1.URL, n);
      o.length && (r[n] = o);
    }), r;
  },
  searchEngine: function(t) {
    return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null;
  },
  searchInfo: function(t) {
    var r = _info.searchEngine(t), n = r != "yahoo" ? "q" : "p", o = {};
    if (r !== null) {
      o.$search_engine = r;
      var a = _getQueryParam(t, n);
      a.length && (o.ph_keyword = a);
    }
    return o;
  },
  browser: function(t, r, n) {
    return r = r || "", n || _includes(t, " OPR/") ? _includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : _includes(t, "IEMobile") || _includes(t, "WPDesktop") ? "Internet Explorer Mobile" : _includes(t, "SamsungBrowser/") ? "Samsung Internet" : _includes(t, "Edge") || _includes(t, "Edg/") ? "Microsoft Edge" : _includes(t, "FBIOS") ? "Facebook Mobile" : _includes(t, "Chrome") ? "Chrome" : _includes(t, "CriOS") ? "Chrome iOS" : _includes(t, "UCWEB") || _includes(t, "UCBrowser") ? "UC Browser" : _includes(t, "FxiOS") ? "Firefox iOS" : _includes(r, "Apple") ? _includes(t, "Mobile") ? "Mobile Safari" : "Safari" : _includes(t, "Android") ? "Android Mobile" : _includes(t, "Konqueror") ? "Konqueror" : _includes(t, "Firefox") ? "Firefox" : _includes(t, "MSIE") || _includes(t, "Trident/") ? "Internet Explorer" : _includes(t, "Gecko") ? "Mozilla" : "";
  },
  browserVersion: function(t, r, n) {
    var o = _info.browser(t, r, n), a = {
      "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
      "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
      Chrome: /Chrome\/(\d+(\.\d+)?)/,
      "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
      "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
      Safari: /Version\/(\d+(\.\d+)?)/,
      "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
      Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
      Firefox: /Firefox\/(\d+(\.\d+)?)/,
      "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
      Konqueror: /Konqueror:(\d+(\.\d+)?)/,
      BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
      "Android Mobile": /android\s(\d+(\.\d+)?)/,
      "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
      "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
      Mozilla: /rv:(\d+(\.\d+)?)/
    }, u = a[o];
    if (u === void 0)
      return null;
    var c = t.match(u);
    return c ? parseFloat(c[c.length - 2]) : null;
  },
  browserLanguage: function() {
    return navigator$1.language || navigator$1.userLanguage;
  },
  os: function() {
    var t = userAgent$1;
    return /Windows/i.test(t) ? /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : /CrOS/.test(t) ? "Chrome OS" : "";
  },
  device: function(t) {
    return /Windows Phone/i.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Android/.test(t) && !/Mobile/.test(t) ? "Android Tablet" : /Android/.test(t) ? "Android" : "";
  },
  deviceType: function(t) {
    var r = this.device(t);
    return r === "iPad" || r === "Android Tablet" ? "Tablet" : r ? "Mobile" : "Desktop";
  },
  referringDomain: function(t) {
    var r = t.split("/");
    return r.length >= 3 ? r[2] : "";
  },
  properties: function() {
    return _extend(_strip_empty_properties({
      $os: _info.os(),
      $browser: _info.browser(userAgent$1, navigator$1.vendor, window.opera),
      $device: _info.device(userAgent$1),
      $device_type: _info.deviceType(userAgent$1)
    }), {
      $current_url: window.location.href,
      $host: window.location.host,
      $pathname: window.location.pathname,
      $browser_version: _info.browserVersion(userAgent$1, navigator$1.vendor, window.opera),
      $browser_language: _info.browserLanguage(),
      $screen_height: window.screen.height,
      $screen_width: window.screen.width,
      $viewport_height: window.innerHeight,
      $viewport_width: window.innerWidth,
      $lib: "web",
      $lib_version: Config.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: _timestamp() / 1e3
    });
  },
  people_properties: function() {
    return _extend(_strip_empty_properties({
      $os: _info.os(),
      $browser: _info.browser(userAgent$1, navigator$1.vendor, window.opera)
    }), {
      $browser_version: _info.browserVersion(userAgent$1, navigator$1.vendor, window.opera)
    });
  }
};
function getClassName(e) {
  switch (_typeof(e.className)) {
    case "string":
      return e.className;
    case "object":
      return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
    default:
      return "";
  }
}
function getSafeText(e) {
  var t = "";
  return shouldCaptureElement(e) && !isSensitiveElement(e) && e.childNodes && e.childNodes.length && _each(e.childNodes, function(r) {
    isTextNode(r) && r.textContent && (t += _trim(r.textContent).split(/(\s+)/).filter(shouldCaptureValue).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
  }), _trim(t);
}
function isElementNode(e) {
  return !!e && e.nodeType === 1;
}
function isTag(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function isTextNode(e) {
  return !!e && e.nodeType === 3;
}
function isDocumentFragment(e) {
  return !!e && e.nodeType === 11;
}
var usefulElements = ["a", "button", "form", "input", "select", "textarea", "label"];
function shouldCaptureDomEvent(e, t) {
  if (!e || isTag(e, "html") || !isElementNode(e))
    return !1;
  for (var r = !1, n = [e], o = !0, a = e; a.parentNode && !isTag(a, "body"); ) {
    if (isDocumentFragment(a.parentNode)) {
      n.push(a.parentNode.host), a = a.parentNode.host;
      continue;
    }
    if (o = a.parentNode || !1, !o)
      break;
    if (usefulElements.indexOf(o.tagName.toLowerCase()) > -1)
      r = !0;
    else {
      var u = window.getComputedStyle(o);
      u && u.getPropertyValue("cursor") === "pointer" && (r = !0);
    }
    n.push(o), a = o;
  }
  var c = window.getComputedStyle(e);
  if (c && c.getPropertyValue("cursor") === "pointer" && t.type === "click")
    return !0;
  var l = e.tagName.toLowerCase();
  switch (l) {
    case "html":
      return !1;
    case "form":
      return t.type === "submit";
    case "input":
      return t.type === "change" || t.type === "click";
    case "select":
    case "textarea":
      return t.type === "change" || t.type === "click";
    default:
      return r ? t.type === "click" : t.type === "click" && (usefulElements.indexOf(l) > -1 || e.getAttribute("contenteditable") === "true");
  }
}
function shouldCaptureElement(e) {
  for (var t = e; t.parentNode && !isTag(t, "body"); t = t.parentNode) {
    var r = getClassName(t).split(" ");
    if (_includes(r, "ph-sensitive") || _includes(r, "ph-no-capture"))
      return !1;
  }
  if (_includes(getClassName(e).split(" "), "ph-include"))
    return !0;
  var n = e.type || "";
  if (typeof n == "string")
    switch (n.toLowerCase()) {
      case "hidden":
        return !1;
      case "password":
        return !1;
    }
  var o = e.name || e.id || "";
  if (typeof o == "string") {
    var a = /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i;
    if (a.test(o.replace(/[^a-zA-Z0-9]/g, "")))
      return !1;
  }
  return !0;
}
function isSensitiveElement(e) {
  var t = ["button", "checkbox", "submit", "reset"];
  return !!(isTag(e, "input") && !t.includes(e.type) || isTag(e, "select") || isTag(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
function shouldCaptureValue(e) {
  if (e === null || _isUndefined(e))
    return !1;
  if (typeof e == "string") {
    e = _trim(e);
    var t = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (t.test((e || "").replace(/[- ]/g, "")))
      return !1;
    var r = /(^\d{3}-?\d{2}-?\d{4}$)/;
    if (r.test(e))
      return !1;
  }
  return !0;
}
function isAngularStyleAttr(e) {
  return typeof e == "string" ? e.substring(0, 10) === "_ngcontent" || e.substring(0, 7) === "_nghost" : !1;
}
function loadScript(e, t) {
  var r = document.createElement("script");
  r.type = "text/javascript", r.src = e, r.onload = t;
  var n = document.getElementsByTagName("script");
  if (n.length > 0) {
    var o;
    (o = n[0].parentNode) === null || o === void 0 || o.insertBefore(r, n[0]);
  } else
    document.body.appendChild(r);
}
var RAGE_CLICK_THRESHOLD_PX = 30, RAGE_CLICK_TIMEOUT_MS = 1e3, RAGE_CLICK_CLICK_COUNT = 3, RageClick = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.get_config("rageclick");
    _classCallCheck(this, e), this.clicks = [], this.instance = t, this.enabled = r;
  }
  return _createClass(e, [{
    key: "click",
    value: function(r, n, o) {
      if (!!this.enabled) {
        var a = this.clicks[this.clicks.length - 1];
        a && Math.abs(r - a.x) + Math.abs(n - a.y) < RAGE_CLICK_THRESHOLD_PX && o - a.timestamp < RAGE_CLICK_TIMEOUT_MS ? (this.clicks.push({
          x: r,
          y: n,
          timestamp: o
        }), this.clicks.length === RAGE_CLICK_CLICK_COUNT && this.instance.capture("$rageclick")) : this.clicks = [{
          x: r,
          y: n,
          timestamp: o
        }];
      }
    }
  }]), e;
}(), autocapture = {
  _initializedTokens: [],
  _previousElementSibling: function(t) {
    if (t.previousElementSibling)
      return t.previousElementSibling;
    var r = t;
    do
      r = r.previousSibling;
    while (r && !isElementNode(r));
    return r;
  },
  _getPropertiesFromElement: function(t, r, n) {
    var o = t.tagName.toLowerCase(), a = {
      tag_name: o
    };
    usefulElements.indexOf(o) > -1 && !n && (a.$el_text = getSafeText(t));
    var u = getClassName(t);
    u.length > 0 && (a.classes = u.split(" ").filter(function(g) {
      return g !== "";
    })), _each(t.attributes, function(g) {
      isSensitiveElement(t) && ["name", "id", "class"].indexOf(g.name) === -1 || !r && shouldCaptureValue(g.value) && !isAngularStyleAttr(g.name) && (a["attr__" + g.name] = g.value);
    });
    for (var c = 1, l = 1, p = t; p = this._previousElementSibling(p); )
      c++, p.tagName === t.tagName && l++;
    return a.nth_child = c, a.nth_of_type = l, a;
  },
  _getDefaultProperties: function(t) {
    return {
      $event_type: t,
      $ce_version: 1
    };
  },
  _extractCustomPropertyValue: function(t) {
    var r = [];
    return _each(document.querySelectorAll(t.css_selector), function(n) {
      var o;
      ["input", "select"].indexOf(n.tagName.toLowerCase()) > -1 ? o = n.value : n.textContent && (o = n.textContent), shouldCaptureValue(o) && r.push(o);
    }), r.join(", ");
  },
  _getCustomProperties: function(t) {
    var r = this, n = {};
    return _each(this._customProperties, function(o) {
      _each(o.event_selectors, function(a) {
        var u = document.querySelectorAll(a);
        _each(u, function(c) {
          _includes(t, c) && shouldCaptureElement(c) && (n[o.name] = r._extractCustomPropertyValue(o));
        });
      });
    }), n;
  },
  _getEventTarget: function(t) {
    if (typeof t.target > "u")
      return t.srcElement || null;
    var r;
    return (r = t.target) !== null && r !== void 0 && r.shadowRoot ? t.composedPath()[0] || null : t.target || null;
  },
  _captureEvent: function(t, r) {
    var n = this, o = this._getEventTarget(t);
    if (isTextNode(o) && (o = o.parentNode || null), t.type === "click" && t instanceof MouseEvent) {
      var a;
      (a = this.rageclicks) === null || a === void 0 || a.click(t.clientX, t.clientY, new Date().getTime());
    }
    if (o && shouldCaptureDomEvent(o, t)) {
      for (var u = [o], c = o; c.parentNode && !isTag(c, "body"); ) {
        if (isDocumentFragment(c.parentNode)) {
          u.push(c.parentNode.host), c = c.parentNode.host;
          continue;
        }
        u.push(c.parentNode), c = c.parentNode;
      }
      var l = [], p, g = !1;
      if (_each(u, function(_) {
        var b = shouldCaptureElement(_);
        _.tagName.toLowerCase() === "a" && (p = _.getAttribute("href"), p = b && shouldCaptureValue(p) && p);
        var E = getClassName(_).split(" ");
        _includes(E, "ph-no-capture") && (g = !0), l.push(n._getPropertiesFromElement(_, r.get_config("mask_all_element_attributes"), r.get_config("mask_all_text")));
      }), r.get_config("mask_all_text") || (l[0].$el_text = getSafeText(o)), p && (l[0].attr__href = p), g)
        return !1;
      var v = _extend(this._getDefaultProperties(t.type), {
        $elements: l
      }, this._getCustomProperties(u));
      return r.capture("$autocapture", v), !0;
    }
  },
  _navigate: function(t) {
    window.location.href = t;
  },
  _addDomEventHandlers: function(t) {
    var r = this, n = function(a) {
      a = a || window.event, r._captureEvent(a, t);
    };
    _register_event(document, "submit", n, !1, !0), _register_event(document, "change", n, !1, !0), _register_event(document, "click", n, !1, !0);
  },
  _customProperties: [],
  rageclicks: null,
  init: function(t) {
    this.rageclicks = new RageClick(t);
  },
  afterDecideResponse: function(t, r) {
    var n = r.get_config("token");
    if (this._initializedTokens.indexOf(n) > -1) {
      logger.log('autocapture already initialized for token "' + n + '"');
      return;
    }
    this._initializedTokens.push(n), t && t.config && t.config.enable_collect_everything && r.get_config("autocapture") ? (t.custom_properties && (this._customProperties = t.custom_properties), this._addDomEventHandlers(r)) : r.__autocapture_enabled = !1;
  },
  enabledForProject: function(t, r, n) {
    if (!t)
      return !0;
    r = _isUndefined(r) ? 10 : r, n = _isUndefined(n) ? 10 : n;
    for (var o = 0, a = 0; a < t.length; a++)
      o += t.charCodeAt(a);
    return o % r < n;
  },
  isBrowserSupported: function() {
    return _isFunction(document.querySelectorAll);
  }
};
_bind_instance_methods(autocapture);
_safewrap_instance_methods(autocapture);
var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i, cookieStore = {
  is_supported: function() {
    return !0;
  },
  error: function(t) {
    logger.error("cookieStore error: " + t);
  },
  get: function(t) {
    try {
      for (var r = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
        for (var a = n[o]; a.charAt(0) == " "; )
          a = a.substring(1, a.length);
        if (a.indexOf(r) === 0)
          return decodeURIComponent(a.substring(r.length, a.length));
      }
    } catch {
    }
    return null;
  },
  parse: function(t) {
    var r;
    try {
      r = JSON.parse(cookieStore.get(t)) || {};
    } catch {
    }
    return r;
  },
  set: function(t, r, n, o, a) {
    try {
      var u = "", c = "", l = "";
      if (o) {
        var p = document.location.hostname.match(DOMAIN_MATCH_REGEX), g = p ? p[0] : "";
        u = g ? "; domain=." + g : "";
      }
      if (n) {
        var v = new Date();
        v.setTime(v.getTime() + n * 24 * 60 * 60 * 1e3), c = "; expires=" + v.toUTCString();
      }
      a && (l = "; secure");
      var _ = t + "=" + encodeURIComponent(JSON.stringify(r)) + c + "; path=/" + u + l;
      return document.cookie = _, _;
    } catch {
      return;
    }
  },
  remove: function(t, r) {
    try {
      cookieStore.set(t, "", -1, r);
    } catch {
      return;
    }
  }
}, _localStorage_supported = null, localStore = {
  is_supported: function() {
    if (_localStorage_supported !== null)
      return _localStorage_supported;
    var t = !0;
    if (window)
      try {
        var r = "__mplssupport__", n = "xyz";
        localStore.set(r, n), localStore.get(r) !== '"xyz"' && (t = !1), localStore.remove(r);
      } catch {
        t = !1;
      }
    else
      t = !1;
    return t || logger.error("localStorage unsupported; falling back to cookie store"), _localStorage_supported = t, t;
  },
  error: function(t) {
    logger.error("localStorage error: " + t);
  },
  get: function(t) {
    try {
      return window.localStorage.getItem(t);
    } catch (r) {
      localStore.error(r);
    }
    return null;
  },
  parse: function(t) {
    try {
      return JSON.parse(localStore.get(t)) || {};
    } catch {
    }
    return null;
  },
  set: function(t, r) {
    try {
      window.localStorage.setItem(t, JSON.stringify(r));
    } catch (n) {
      localStore.error(n);
    }
  },
  remove: function(t) {
    try {
      window.localStorage.removeItem(t);
    } catch (r) {
      localStore.error(r);
    }
  }
}, localPlusCookieStore = _objectSpread2(_objectSpread2({}, localStore), {}, {
  parse: function(t) {
    try {
      var r = {};
      try {
        r = cookieStore.parse(t) || {}, r.distinct_id && cookieStore.set(t, {
          distinct_id: r.distinct_id
        });
      } catch {
      }
      var n = _extend(r, JSON.parse(localStore.get(t) || "{}"));
      return localStore.set(t, n), n;
    } catch {
    }
    return null;
  },
  set: function(t, r, n, o, a) {
    try {
      localStore.set(t, r), r.distinct_id && cookieStore.set(t, {
        distinct_id: r.distinct_id
      }, n, o, a);
    } catch (u) {
      localStore.error(u);
    }
  },
  remove: function(t, r) {
    try {
      window.localStorage.removeItem(t), cookieStore.remove(t, r);
    } catch (n) {
      localStore.error(n);
    }
  }
}), memoryStorage = {}, memoryStore = {
  is_supported: function() {
    return !0;
  },
  error: function(t) {
    logger.error("memoryStorage error: " + t);
  },
  get: function(t) {
    return memoryStorage[t] || null;
  },
  parse: function(t) {
    return memoryStorage[t] || null;
  },
  set: function(t, r) {
    memoryStorage[t] = r;
  },
  remove: function(t) {
    delete memoryStorage[t];
  }
}, sessionStorageSupported = null, sessionStore = {
  is_supported: function() {
    if (sessionStorageSupported !== null)
      return sessionStorageSupported;
    if (sessionStorageSupported = !0, window)
      try {
        var t = "__support__", r = "xyz";
        sessionStore.set(t, r), sessionStore.get(t) !== '"xyz"' && (sessionStorageSupported = !1), sessionStore.remove(t);
      } catch {
        sessionStorageSupported = !1;
      }
    else
      sessionStorageSupported = !1;
    return sessionStorageSupported;
  },
  error: function(t) {
    Config.DEBUG && logger.error("sessionStorage error: ", t);
  },
  get: function(t) {
    try {
      return window.sessionStorage.getItem(t);
    } catch (r) {
      sessionStore.error(r);
    }
    return null;
  },
  parse: function(t) {
    try {
      return JSON.parse(sessionStore.get(t)) || null;
    } catch {
    }
    return null;
  },
  set: function(t, r) {
    try {
      window.sessionStorage.setItem(t, JSON.stringify(r));
    } catch (n) {
      sessionStore.error(n);
    }
  },
  remove: function(t) {
    try {
      window.sessionStorage.removeItem(t);
    } catch (r) {
      sessionStore.error(r);
    }
  }
}, GDPR_DEFAULT_PERSISTENCE_PREFIX = "__ph_opt_in_out_";
function optIn(e, t) {
  _optInOut(!0, e, t);
}
function optOut(e, t) {
  _optInOut(!1, e, t);
}
function hasOptedIn(e, t) {
  return _getStorageValue(e, t) === "1";
}
function hasOptedOut(e, t) {
  return _hasDoNotTrackFlagOn(t) ? !0 : _getStorageValue(e, t) === "0";
}
function clearOptInOut(e, t) {
  t = t || {}, _getStorage(t).remove(_getStorageKey(e, t), !!t.crossSubdomainCookie);
}
function _getStorage(e) {
  return e = e || {}, e.persistenceType === "localStorage" ? localStore : e.persistenceType === "localStorage+cookie" ? localPlusCookieStore : cookieStore;
}
function _getStorageKey(e, t) {
  return t = t || {}, (t.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + e;
}
function _getStorageValue(e, t) {
  return _getStorage(t).get(_getStorageKey(e, t));
}
function _hasDoNotTrackFlagOn(e) {
  if (e && e.respectDnt) {
    var t = e && e.window || win, r = t.navigator || {}, n = !1;
    return _each([
      r.doNotTrack,
      r.msDoNotTrack,
      t.doNotTrack
    ], function(o) {
      _includes([!0, 1, "1", "yes"], o) && (n = !0);
    }), n;
  }
  return !1;
}
function _optInOut(e, t, r) {
  if (!_isString(t) || !t.length) {
    console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
    return;
  }
  r = r || {}, _getStorage(r).set(_getStorageKey(t, r), e ? 1 : 0, _isNumber(r.cookieExpiration) ? r.cookieExpiration : null, r.crossSubdomainCookie, r.secureCookie), r.capture && e && r.capture(r.captureEventName || "$opt_in", r.captureProperties || {}, {
    send_instantly: !0
  });
}
function userOptedOut(e, t) {
  var r = !1;
  try {
    var n = e.get_config("token"), o = e.get_config("respect_dnt"), a = e.get_config("opt_out_capturing_persistence_type"), u = e.get_config("opt_out_capturing_cookie_prefix") || void 0, c = e.get_config("window");
    n && (r = hasOptedOut(n, {
      respectDnt: o,
      persistenceType: a,
      persistencePrefix: u,
      window: c
    }));
  } catch (l) {
    t || console.error("Unexpected error when checking capturing opt-out status: " + l);
  }
  return r;
}
function addOptOutCheck(e, t, r) {
  return function() {
    for (var n = userOptedOut(e, r), o = arguments.length, a = new Array(o), u = 0; u < o; u++)
      a[u] = arguments[u];
    if (!n)
      return t.apply(this, a);
    var c = a[a.length - 1];
    typeof c == "function" && c(0);
  };
}
var SET_ACTION = "$set", SET_ONCE_ACTION = "$set_once", PostHogPeople = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    _classCallCheck(this, e), this._posthog = t, this.set = addOptOutCheck(t, function(n, o, a) {
      var u = r.set_action(n, o);
      return _isObject(n) && (a = o), r._get_config("save_referrer") && r._posthog.persistence.update_referrer_info(document.referrer), u[SET_ACTION] = _extend({}, _info.people_properties(), r._posthog.persistence.get_referrer_info(), u[SET_ACTION]), r._send_request(u, a);
    }), this.set_once = addOptOutCheck(t, function(n, o, a) {
      var u = r.set_once_action(n, o);
      return _isObject(n) && (a = o), r._send_request(u, a);
    });
  }
  return _createClass(e, [{
    key: "toString",
    value: function() {
      return this._posthog.toString() + ".people";
    }
  }, {
    key: "_send_request",
    value: function(r, n) {
      r.$token = this._get_config("token"), r.$distinct_id = this._posthog.get_distinct_id();
      var o = this._posthog.get_property("$device_id"), a = this._posthog.get_property("$user_id"), u = this._posthog.get_property("$had_persisted_distinct_id");
      o && (r.$device_id = o), a && (r.$user_id = a), u && (r.$had_persisted_distinct_id = u);
      var c = _encodeDates(r), l = _copyAndTruncateStrings(c, this._get_config("properties_string_max_length")), p = JSON.stringify(c), g = _base64Encode(p);
      return this._posthog._send_request(this._get_config("api_host") + "/engage/", {
        data: g
      }, {}, this._posthog._prepare_callback(n, l)), l;
    }
  }, {
    key: "_get_config",
    value: function(r) {
      return this._posthog.get_config(r);
    }
  }, {
    key: "_is_reserved_property",
    value: function(r) {
      return r === "$distinct_id" || r === "$token" || r === "$device_id" || r === "$user_id" || r === "$had_persisted_distinct_id";
    }
  }, {
    key: "set_action",
    value: function(r, n) {
      return this.apiActionParser(SET_ACTION, r, n);
    }
  }, {
    key: "set_once_action",
    value: function(r, n) {
      return this.apiActionParser(SET_ONCE_ACTION, r, n);
    }
  }, {
    key: "apiActionParser",
    value: function(r, n, o) {
      var a = this, u = {}, c = {};
      return _isObject(n) ? _each(n, function(l, p) {
        a._is_reserved_property(p) || (c[p] = l);
      }) : c[n] = o, u[r] = c, u;
    }
  }]), e;
}(), parseFeatureFlagDecideResponse = function(t, r) {
  var n = t.featureFlags;
  if (n)
    if (Array.isArray(n)) {
      var o = {};
      if (n)
        for (var a = 0; a < n.length; a++)
          o[n[a]] = !0;
      r && r.register({
        $active_feature_flags: n,
        $enabled_feature_flags: o
      });
    } else
      r && r.register({
        $active_feature_flags: Object.keys(n || {}),
        $enabled_feature_flags: n || {}
      });
  else
    r && (r.unregister("$active_feature_flags"), r.unregister("$enabled_feature_flags"));
}, PostHogFeatureFlags = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e), this.instance = t, this._override_warning = !1, this.flagCallReported = {}, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  return _createClass(e, [{
    key: "getFlags",
    value: function() {
      return Object.keys(this.getFlagVariants());
    }
  }, {
    key: "getFlagVariants",
    value: function() {
      var r = this.instance.get_property("$enabled_feature_flags"), n = this.instance.get_property("$override_feature_flags");
      if (!n)
        return r || {};
      for (var o = _extend({}, r), a = Object.keys(n), u = 0; u < a.length; u++)
        n[a[u]] === !1 ? delete o[a[u]] : o[a[u]] = n[a[u]];
      return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", {
        enabledFlags: r,
        overriddenFlags: n,
        finalFlags: o
      }), this._override_warning = !0), o;
    }
  }, {
    key: "reloadFeatureFlags",
    value: function() {
      this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer());
    }
  }, {
    key: "setAnonymousDistinctId",
    value: function(r) {
      this.$anon_distinct_id = r;
    }
  }, {
    key: "setReloadingPaused",
    value: function(r) {
      this.reloadFeatureFlagsInAction = r;
    }
  }, {
    key: "resetRequestQueue",
    value: function() {
      this.reloadFeatureFlagsQueued = !1;
    }
  }, {
    key: "_startReloadTimer",
    value: function() {
      var r = this;
      this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
        !r.reloadFeatureFlagsInAction && r.reloadFeatureFlagsQueued && (r.reloadFeatureFlagsQueued = !1, r._reloadFeatureFlagsRequest());
      }, 5);
    }
  }, {
    key: "_reloadFeatureFlagsRequest",
    value: function() {
      var r = this;
      this.setReloadingPaused(!0);
      var n = this.instance.get_config("token"), o = JSON.stringify({
        token: n,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        $anon_distinct_id: this.$anon_distinct_id
      }), a = _base64Encode(o);
      this.instance._send_request(this.instance.get_config("api_host") + "/decide/?v=2", {
        data: a
      }, {
        method: "POST"
      }, this.instance._prepare_callback(function(u) {
        r.$anon_distinct_id = void 0, r.receivedFeatureFlags(u), r.setReloadingPaused(!1), r._startReloadTimer();
      }));
    }
  }, {
    key: "getFeatureFlag",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.getFlags())
        return console.warn('getFeatureFlag for key "' + r + `" failed. Feature flags didn't load in time.`), !1;
      var o = this.getFlagVariants()[r];
      return (n.send_event || !("send_event" in n)) && !this.flagCallReported[r] && (this.flagCallReported[r] = !0, this.instance.capture("$feature_flag_called", {
        $feature_flag: r,
        $feature_flag_response: o
      })), o;
    }
  }, {
    key: "isFeatureEnabled",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.getFlags() ? !!this.getFeatureFlag(r, n) : (console.warn('isFeatureEnabled for key "' + r + `" failed. Feature flags didn't load in time.`), !1);
    }
  }, {
    key: "addFeatureFlagsHandler",
    value: function(r) {
      this.featureFlagEventHandlers.push(r);
    }
  }, {
    key: "receivedFeatureFlags",
    value: function(r) {
      this.instance.decideEndpointWasHit = !0, parseFeatureFlagDecideResponse(r, this.instance.persistence);
      var n = this.getFlags(), o = this.getFlagVariants();
      this.featureFlagEventHandlers.forEach(function(a) {
        return a(n, o);
      });
    }
  }, {
    key: "override",
    value: function(r) {
      if (this._override_warning = !1, r === !1)
        this.instance.persistence.unregister("$override_feature_flags");
      else if (Array.isArray(r)) {
        for (var n = {}, o = 0; o < r.length; o++)
          n[r[o]] = !0;
        this.instance.persistence.register({
          $override_feature_flags: n
        });
      } else
        this.instance.persistence.register({
          $override_feature_flags: r
        });
    }
  }, {
    key: "onFeatureFlags",
    value: function(r) {
      if (this.addFeatureFlagsHandler(r), this.instance.decideEndpointWasHit) {
        var n = this.getFlags(), o = this.getFlagVariants();
        r(n, o);
      }
    }
  }]), e;
}(), SET_QUEUE_KEY = "__mps", SET_ONCE_QUEUE_KEY = "__mpso", UNSET_QUEUE_KEY = "__mpus", ADD_QUEUE_KEY = "__mpa", APPEND_QUEUE_KEY = "__mpap", REMOVE_QUEUE_KEY = "__mpr", UNION_QUEUE_KEY = "__mpu", PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id", ALIAS_ID_KEY = "__alias", CAMPAIGN_IDS_KEY = "__cmpns", EVENT_TIMERS_KEY = "__timers", SESSION_RECORDING_ENABLED_SERVER_SIDE = "$session_recording_enabled_server_side", CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE = "$console_log_recording_enabled_server_side", SESSION_ID = "$sesid", ENABLED_FEATURE_FLAGS = "$enabled_feature_flags", RESERVED_PROPERTIES = [SET_QUEUE_KEY, SET_ONCE_QUEUE_KEY, UNSET_QUEUE_KEY, ADD_QUEUE_KEY, APPEND_QUEUE_KEY, REMOVE_QUEUE_KEY, UNION_QUEUE_KEY, PEOPLE_DISTINCT_ID_KEY, ALIAS_ID_KEY, CAMPAIGN_IDS_KEY, EVENT_TIMERS_KEY, SESSION_RECORDING_ENABLED_SERVER_SIDE, SESSION_ID, ENABLED_FEATURE_FLAGS], PostHogPersistence = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e);
    var r = "";
    t.token && (r = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "ph_" + t.persistence_name : this.name = "ph_" + r + "_posthog";
    var n = t.persistence.toLowerCase();
    n !== "cookie" && n.indexOf("localstorage") === -1 && n !== "memory" && (logger.critical("Unknown persistence type " + n + "; falling back to cookie"), n = t.persistence = "cookie"), n === "localstorage" && localStore.is_supported() ? this.storage = localStore : n === "localstorage+cookie" && localPlusCookieStore.is_supported() ? this.storage = localPlusCookieStore : n === "memory" ? this.storage = memoryStore : this.storage = cookieStore, this.load(), this.update_config(t), this.save();
  }
  return _createClass(e, [{
    key: "properties",
    value: function() {
      var r = {};
      return _each(this.props, function(n, o) {
        if (o === ENABLED_FEATURE_FLAGS && _typeof(n) === "object")
          for (var a = Object.keys(n), u = 0; u < a.length; u++)
            r["$feature/".concat(a[u])] = n[a[u]];
        else
          _include(RESERVED_PROPERTIES, o) || (r[o] = n);
      }), r;
    }
  }, {
    key: "load",
    value: function() {
      if (!this.disabled) {
        var r = this.storage.parse(this.name);
        r && (this.props = _extend({}, r));
      }
    }
  }, {
    key: "save",
    value: function() {
      this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
    }
  }, {
    key: "remove",
    value: function() {
      this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
    }
  }, {
    key: "clear",
    value: function() {
      this.remove(), this.props = {};
    }
  }, {
    key: "register_once",
    value: function(r, n, o) {
      var a = this;
      return _isObject(r) ? (typeof n > "u" && (n = "None"), this.expire_days = typeof o > "u" ? this.default_expiry : o, _each(r, function(u, c) {
        (!a.props.hasOwnProperty(c) || a.props[c] === n) && (a.props[c] = u);
      }), this.save(), !0) : !1;
    }
  }, {
    key: "register",
    value: function(r, n) {
      return _isObject(r) ? (this.expire_days = typeof n > "u" ? this.default_expiry : n, _extend(this.props, r), this.save(), !0) : !1;
    }
  }, {
    key: "unregister",
    value: function(r) {
      r in this.props && (delete this.props[r], this.save());
    }
  }, {
    key: "update_campaign_params",
    value: function() {
      this.campaign_params_saved || (this.register(_info.campaignParams()), this.campaign_params_saved = !0);
    }
  }, {
    key: "update_search_keyword",
    value: function(r) {
      this.register(_info.searchInfo(r));
    }
  }, {
    key: "update_referrer_info",
    value: function(r) {
      this.register({
        $referrer: r || this.props.$referrer || "$direct",
        $referring_domain: _info.referringDomain(r) || this.props.$referring_domain || "$direct"
      });
    }
  }, {
    key: "get_referrer_info",
    value: function() {
      return _strip_empty_properties({
        $referrer: this.props.$referrer,
        $referring_domain: this.props.$referring_domain
      });
    }
  }, {
    key: "safe_merge",
    value: function(r) {
      return _each(this.props, function(n, o) {
        o in r || (r[o] = n);
      }), r;
    }
  }, {
    key: "update_config",
    value: function(r) {
      this.default_expiry = this.expire_days = r.cookie_expiration, this.set_disabled(r.disable_persistence), this.set_cross_subdomain(r.cross_subdomain_cookie), this.set_secure(r.secure_cookie);
    }
  }, {
    key: "set_disabled",
    value: function(r) {
      this.disabled = r, this.disabled ? this.remove() : this.save();
    }
  }, {
    key: "set_cross_subdomain",
    value: function(r) {
      r !== this.cross_subdomain && (this.cross_subdomain = r, this.remove(), this.save());
    }
  }, {
    key: "get_cross_subdomain",
    value: function() {
      return !!this.cross_subdomain;
    }
  }, {
    key: "set_secure",
    value: function(r) {
      r !== this.secure && (this.secure = r, this.remove(), this.save());
    }
  }, {
    key: "set_event_timer",
    value: function(r, n) {
      var o = this.props[EVENT_TIMERS_KEY] || {};
      o[r] = n, this.props[EVENT_TIMERS_KEY] = o, this.save();
    }
  }, {
    key: "remove_event_timer",
    value: function(r) {
      var n = this.props[EVENT_TIMERS_KEY] || {}, o = n[r];
      return _isUndefined(o) || (delete this.props[EVENT_TIMERS_KEY][r], this.save()), o;
    }
  }]), e;
}(), replacementImageURI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==";
function filterDataURLsFromLargeDataObjects(e) {
  if (e && _typeof(e) === "object") {
    var t = JSON.stringify(e);
    if (t.length > 5e6) {
      var r = /data:([\w\/\-\.]+);(\w+),([^)"]*)/gim, n = t.matchAll(r), o = _createForOfIteratorHelper(n), a;
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var u = a.value;
          u[1].toLocaleLowerCase().slice(0, 6) === "image/" ? t = t.replace(u[0], replacementImageURI) : t = t.replace(u[0], "");
        }
      } catch (c) {
        o.e(c);
      } finally {
        o.f();
      }
    }
    return JSON.parse(t);
  }
  return e;
}
var CONSOLE_LOG_PLUGIN_NAME = "rrweb/console@1";
function truncateLargeConsoleLogs(e) {
  var t = 2e3, r = 10;
  if (e && _typeof(e) === "object" && e.type === PLUGIN_EVENT_TYPE && _typeof(e.data) === "object" && e.data.plugin === CONSOLE_LOG_PLUGIN_NAME) {
    e.data.payload.payload.length > r && (e.data.payload.payload = e.data.payload.payload.slice(0, r), e.data.payload.payload.push("...[truncated]"));
    for (var n = [], o = 0; o < e.data.payload.payload.length; o++)
      e.data.payload.payload[o] && e.data.payload.payload[o].length > t ? n.push(e.data.payload.payload[o].slice(0, t) + "...[truncated]") : n.push(e.data.payload.payload[o]);
    return e.data.payload.payload = n, e;
  }
  return e;
}
var BASE_ENDPOINT = "/e/", FULL_SNAPSHOT_EVENT_TYPE = 2, META_EVENT_TYPE = 4, INCREMENTAL_SNAPSHOT_EVENT_TYPE = 3, PLUGIN_EVENT_TYPE = 6, MUTATION_SOURCE_TYPE = 0, SessionRecording = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e), this.instance = t, this.captureStarted = !1, this.snapshots = [], this.emit = !1, this.endpoint = BASE_ENDPOINT, this.stopRrweb = void 0, this.windowId = null, this.sessionId = null, this.receivedDecide = !1;
  }
  return _createClass(e, [{
    key: "startRecordingIfEnabled",
    value: function() {
      this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording();
    }
  }, {
    key: "started",
    value: function() {
      return this.captureStarted;
    }
  }, {
    key: "stopRecording",
    value: function() {
      this.captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this.captureStarted = !1);
    }
  }, {
    key: "isRecordingEnabled",
    value: function() {
      var r = !!this.instance.get_property(SESSION_RECORDING_ENABLED_SERVER_SIDE), n = !this.instance.get_config("disable_session_recording");
      return r && n;
    }
  }, {
    key: "isConsoleLogCaptureEnabled",
    value: function() {
      var r = !!this.instance.get_property(CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE), n = this.instance.get_config("enable_recording_console_log");
      return n != null ? n : r;
    }
  }, {
    key: "afterDecideResponse",
    value: function(r) {
      var n;
      if (this.receivedDecide = !0, this.instance.persistence) {
        var o, a;
        this.instance.persistence.register((a = {}, _defineProperty(a, SESSION_RECORDING_ENABLED_SERVER_SIDE, !!r.sessionRecording), _defineProperty(a, CONSOLE_LOG_RECORDING_ENABLED_SERVER_SIDE, (o = r.sessionRecording) === null || o === void 0 ? void 0 : o.consoleLogRecordingEnabled), a));
      }
      if ((n = r.sessionRecording) !== null && n !== void 0 && n.endpoint) {
        var u;
        this.endpoint = (u = r.sessionRecording) === null || u === void 0 ? void 0 : u.endpoint;
      }
      this.startRecordingIfEnabled();
    }
  }, {
    key: "startCaptureAndTrySendingQueuedSnapshots",
    value: function() {
      var r = this;
      this.receivedDecide && (this.emit = !0, this.snapshots.forEach(function(n) {
        return r._captureSnapshot(n);
      })), this._startCapture();
    }
  }, {
    key: "_startCapture",
    value: function() {
      typeof Object.assign > "u" || !this.captureStarted && !this.instance.get_config("disable_session_recording") && (this.captureStarted = !0, loadScript(this.instance.get_config("api_host") + "/static/recorder.js?v=" + Config.LIB_VERSION, this._onScriptLoaded.bind(this)));
    }
  }, {
    key: "_updateWindowAndSessionIds",
    value: function(r) {
      var n, o = r.type === INCREMENTAL_SNAPSHOT_EVENT_TYPE && ((n = r.data) === null || n === void 0 ? void 0 : n.source) === MUTATION_SOURCE_TYPE, a = this.instance.sessionManager.checkAndGetSessionAndWindowId(o, r.timestamp), u = a.windowId, c = a.sessionId;
      if ((this.windowId !== u || this.sessionId !== c) && [FULL_SNAPSHOT_EVENT_TYPE, META_EVENT_TYPE].indexOf(r.type) === -1) {
        var l;
        (l = this.rrwebRecord) === null || l === void 0 || l.takeFullSnapshot();
      }
      this.windowId = u, this.sessionId = c;
    }
  }, {
    key: "_onScriptLoaded",
    value: function() {
      var r, n = this, o = {
        blockClass: "ph-no-capture",
        blockSelector: void 0,
        ignoreClass: "ph-ignore-input",
        maskAllInputs: !0,
        maskInputOptions: {},
        maskInputFn: void 0,
        slimDOMOptions: {},
        collectFonts: !1,
        inlineStylesheet: !0
      };
      this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
      for (var a = this.instance.get_config("session_recording"), u = 0, c = Object.entries(a || {}); u < c.length; u++) {
        var l = _slicedToArray(c[u], 2), p = l[0], g = l[1];
        p in o && (o[p] = g);
      }
      this.stopRrweb = (r = this.rrwebRecord) === null || r === void 0 ? void 0 : r.call(this, _objectSpread2({
        emit: function(_) {
          _ = truncateLargeConsoleLogs(filterDataURLsFromLargeDataObjects(_)), n._updateWindowAndSessionIds(_);
          var b = {
            $snapshot_data: _,
            $session_id: n.sessionId,
            $window_id: n.windowId
          };
          n.instance._captureMetrics.incr("rrweb-record"), n.instance._captureMetrics.incr("rrweb-record-".concat(_.type)), n.emit ? n._captureSnapshot(b) : n.snapshots.push(b);
        },
        plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : []
      }, o)), this.instance._addCaptureHook(function(v) {
        if (v === "$pageview") {
          var _;
          (_ = n.rrwebRecord) === null || _ === void 0 || _.addCustomEvent("$pageview", {
            href: window.location.href
          });
        }
      });
    }
  }, {
    key: "_captureSnapshot",
    value: function(r) {
      this.instance.capture("$snapshot", r, {
        transport: "XHR",
        method: "POST",
        endpoint: this.endpoint,
        _noTruncate: !0,
        _batchKey: "sessionRecording",
        _metrics: {
          rrweb_full_snapshot: r.$snapshot_data.type === FULL_SNAPSHOT_EVENT_TYPE
        }
      });
    }
  }]), e;
}(), Decide = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return _createClass(e, [{
    key: "call",
    value: function() {
      var r = this, n = JSON.stringify({
        token: this.instance.get_config("token"),
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups()
      }), o = _base64Encode(n);
      this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=2"), {
        data: o,
        verbose: !0
      }, {
        method: "POST"
      }, function(a) {
        return r.parseDecideResponse(a);
      });
    }
  }, {
    key: "parseDecideResponse",
    value: function(r) {
      var n = this, o;
      if ((r == null ? void 0 : r.status) === 0) {
        console.error("Failed to fetch feature flags from PostHog.");
        return;
      }
      if (this.instance.decideEndpointWasHit = !0, !(document && document.body)) {
        console.log("document not ready yet, trying again in 500 milliseconds..."), setTimeout(function() {
          n.parseDecideResponse(r);
        }, 500);
        return;
      }
      if (this.instance.toolbar.afterDecideResponse(r), (o = this.instance.sessionRecording) === null || o === void 0 || o.afterDecideResponse(r), autocapture.afterDecideResponse(r, this.instance), this.instance.featureFlags.receivedFeatureFlags(r), this.instance.compression = {}, r.supportedCompression && !this.instance.get_config("disable_compression")) {
        var a = {}, u = _createForOfIteratorHelper(r.supportedCompression), c;
        try {
          for (u.s(); !(c = u.n()).done; ) {
            var l = c.value;
            a[l] = !0;
          }
        } catch (b) {
          u.e(b);
        } finally {
          u.f();
        }
        this.instance.compression = a;
      }
      if (r.siteApps)
        if (this.instance.get_config("opt_in_site_apps")) {
          var p = this.instance.get_config("api_host"), g = _createForOfIteratorHelper(r.siteApps), v;
          try {
            var _ = function() {
              var E = v.value, w = E.id, S = E.url, A = document.createElement("script");
              A.src = [p, p[p.length - 1] === "/" && S[0] === "/" ? S.substring(1) : S].join(""), A.onerror = function(j) {
                console.error("Error while initializing PostHog app with config id ".concat(w), j);
              }, window["__$$ph_site_app_".concat(w)] = n.instance, document.body.appendChild(A);
            };
            for (g.s(); !(v = g.n()).done; )
              _();
          } catch (b) {
            g.e(b);
          } finally {
            g.f();
          }
        } else
          r.siteApps.length > 0 && console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
  }]), e;
}(), POSTHOG_MANAGED_HOSTS = ["https://app.posthog.com", "https://eu.posthog.com"], _excluded = ["source"], Toolbar = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e), this.instance = t;
  }
  return _createClass(e, [{
    key: "afterDecideResponse",
    value: function(r) {
      var n = r.toolbarParams || r.editorParams || (r.toolbarVersion ? {
        toolbarVersion: r.toolbarVersion
      } : {});
      r.isAuthenticated && n.toolbarVersion && n.toolbarVersion.indexOf("toolbar") === 0 && this.loadToolbar(_objectSpread2(_objectSpread2({}, n), {}, {
        apiURL: this.instance.get_config("api_host")
      }));
    }
  }, {
    key: "maybeLoadToolbar",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.location, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window.history;
      try {
        if (!n) {
          try {
            window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test");
          } catch {
            return !1;
          }
          n = window.localStorage;
        }
        var a = _getHashParam(r.hash, "__posthog") || _getHashParam(r.hash, "state"), u = a ? JSON.parse(decodeURIComponent(a)) : null, c = u && u.action === "ph_authorize", l;
        return c ? (l = u, l.source = "url", l && Object.keys(l).length > 0 && (u.desiredHash ? r.hash = u.desiredHash : o ? o.replaceState("", document.title, r.pathname + r.search) : r.hash = "")) : (l = JSON.parse(n.getItem("_postHogToolbarParams") || "{}"), l.source = "localstorage", delete l.userIntent), l.apiURL || (l.apiURL = this.instance.get_config("api_host")), l.token && this.instance.get_config("token") === l.token ? (this.loadToolbar(l), !0) : !1;
      } catch {
        return !1;
      }
    }
  }, {
    key: "loadToolbar",
    value: function(r) {
      var n = this;
      if (window._postHogToolbarLoaded)
        return !1;
      window._postHogToolbarLoaded = !0;
      var o = (r == null ? void 0 : r.jsURL) || (r == null ? void 0 : r.apiURL) || this.instance.get_config("api_host"), a = "".concat(o).concat(o.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=").concat(new Date().getTime()), u = !POSTHOG_MANAGED_HOSTS.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"), c = _objectSpread2(_objectSpread2({
        apiURL: o,
        jsURL: o,
        token: this.instance.get_config("token")
      }, r), u ? {
        instrument: !1
      } : {});
      c.source;
      var l = _objectWithoutProperties(c, _excluded);
      return window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(l)), loadScript(a, function() {
        (window.ph_load_toolbar || window.ph_load_editor)(c, n.instance);
      }), _register_event(window, "turbolinks:load", function() {
        window._postHogToolbarLoaded = !1, n.loadToolbar(c);
      }), !0;
    }
  }, {
    key: "_loadEditor",
    value: function(r) {
      return this.loadToolbar(r);
    }
  }, {
    key: "maybeLoadEditor",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.location, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window.history;
      return this.maybeLoadToolbar(r, n, o);
    }
  }]), e;
}(), RequestQueueScaffold = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3e3;
    _classCallCheck(this, e), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t;
  }
  return _createClass(e, [{
    key: "setPollInterval",
    value: function(r) {
      this._pollInterval = r, this.isPolling && this.poll();
    }
  }, {
    key: "poll",
    value: function() {
    }
  }, {
    key: "unload",
    value: function() {
    }
  }, {
    key: "getTime",
    value: function() {
      return new Date().getTime();
    }
  }]), e;
}(), RequestQueue = /* @__PURE__ */ function(e) {
  _inherits(r, e);
  var t = _createSuper(r);
  function r(n, o) {
    var a, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3e3;
    return _classCallCheck(this, r), a = t.call(this, u), a.handlePollRequest = o, a.captureMetrics = n, a;
  }
  return _createClass(r, [{
    key: "enqueue",
    value: function(o, a, u) {
      this.captureMetrics.incr("batch-enqueue"), this._event_queue.push({
        url: o,
        data: a,
        options: u
      }), this.isPolling || (this.isPolling = !0, this.poll());
    }
  }, {
    key: "poll",
    value: function() {
      var o = this;
      clearTimeout(this._poller), this._poller = setTimeout(function() {
        if (o._event_queue.length > 0) {
          var a = o.formatQueue(), u = function(p) {
            var g = a[p], v = g.url, _ = g.data, b = g.options;
            _each(_, function(E, w) {
              _[w].offset = Math.abs(_[w].timestamp - o.getTime()), delete _[w].timestamp;
            }), o.handlePollRequest(v, _, b), o.captureMetrics.incr("batch-requests"), o.captureMetrics.incr("batch-requests-".concat(v.slice(v.length - 2))), o.captureMetrics.incr("batch-handle", _.length), o.captureMetrics.incr("batch-handle-".concat(v.slice(v.length - 2)), _.length);
          };
          for (var c in a)
            u(c);
          o._event_queue.length = 0, o._empty_queue_count = 0;
        } else
          o._empty_queue_count++;
        o._empty_queue_count > 4 && (o.isPolling = !1, o._empty_queue_count = 0), o.isPolling && o.poll();
      }, this._pollInterval);
    }
  }, {
    key: "updateUnloadMetrics",
    value: function() {
      var o = this.formatQueue();
      for (var a in o) {
        var u = o[a], c = u.url, l = u.data;
        this.captureMetrics.incr("batch-unload-requests"), this.captureMetrics.incr("batch-unload-requests-".concat(c.slice(c.length - 2))), this.captureMetrics.incr("batch-unload", l.length), this.captureMetrics.incr("batch-unload-".concat(c.slice(c.length - 2)), l.length);
      }
    }
  }, {
    key: "unload",
    value: function() {
      var o = this;
      clearTimeout(this._poller);
      var a = this._event_queue.length > 0 ? this.formatQueue() : {};
      this._event_queue.length = 0;
      var u = Object.values(a), c = [].concat(_toConsumableArray(u.filter(function(l) {
        return l.url.indexOf("/e") === 0;
      })), _toConsumableArray(u.filter(function(l) {
        return l.url.indexOf("/e") !== 0;
      })));
      c.map(function(l) {
        var p = l.url, g = l.data, v = l.options;
        o.handlePollRequest(p, g, _objectSpread2(_objectSpread2({}, v), {}, {
          transport: "sendBeacon"
        }));
      });
    }
  }, {
    key: "formatQueue",
    value: function() {
      var o = {};
      return _each(this._event_queue, function(a) {
        var u = a.url, c = a.data, l = a.options, p = (l ? l._batchKey : null) || u;
        o[p] === void 0 && (o[p] = {
          data: [],
          url: u,
          options: l
        }), l && o[p].options && o[p].options._metrics && !o[p].options._metrics.rrweb_full_snapshot && (o[p].options._metrics.rrweb_full_snapshot = l._metrics.rrweb_full_snapshot), o[p].data.push(c);
      }), o;
    }
  }]), r;
}(RequestQueueScaffold), CaptureMetrics = /* @__PURE__ */ function() {
  function e(t) {
    _classCallCheck(this, e), this.enabled = t, this.metrics = {};
  }
  return _createClass(e, [{
    key: "incr",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      this.enabled && (r = "phjs-".concat(r), this.metrics[r] = (this.metrics[r] || 0) + n);
    }
  }, {
    key: "decr",
    value: function(r) {
      this.enabled && (r = "phjs-".concat(r), this.metrics[r] = (this.metrics[r] || 0) - 1);
    }
  }]), e;
}(), u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array, fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  0,
  0,
  0
]), fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  0,
  0
]), clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), freb = function(t, r) {
  for (var n = new u16(31), o = 0; o < 31; ++o)
    n[o] = r += 1 << t[o - 1];
  for (var a = new u32(n[30]), o = 1; o < 30; ++o)
    for (var u = n[o]; u < n[o + 1]; ++u)
      a[u] = u - n[o] << 5 | o;
  return [n, a];
}, _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), revfd = _b[1], rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  var x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2, x = (x & 61680) >>> 4 | (x & 3855) << 4, rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = function(t, r, n) {
  for (var o = t.length, a = 0, u = new u16(r); a < o; ++a)
    ++u[t[a] - 1];
  var c = new u16(r);
  for (a = 0; a < r; ++a)
    c[a] = c[a - 1] + u[a - 1] << 1;
  var l;
  if (n) {
    l = new u16(1 << r);
    var p = 15 - r;
    for (a = 0; a < o; ++a)
      if (t[a])
        for (var g = a << 4 | t[a], v = r - t[a], _ = c[t[a] - 1]++ << v, b = _ | (1 << v) - 1; _ <= b; ++_)
          l[rev[_] >>> p] = g;
  } else
    for (l = new u16(o), a = 0; a < o; ++a)
      l[a] = rev[c[t[a] - 1]++] >>> 15 - t[a];
  return l;
}, flt = new u8(288);
for (var i = 0; i < 144; ++i)
  flt[i] = 8;
for (var i = 144; i < 256; ++i)
  flt[i] = 9;
for (var i = 256; i < 280; ++i)
  flt[i] = 7;
for (var i = 280; i < 288; ++i)
  flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
  fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), fdm = /* @__PURE__ */ hMap(fdt, 5, 0), shft = function(t) {
  return (t / 8 >> 0) + (t & 7 && 1);
}, slc = function(t, r, n) {
  (r == null || r < 0) && (r = 0), (n == null || n > t.length) && (n = t.length);
  var o = new (t instanceof u16 ? u16 : t instanceof u32 ? u32 : u8)(n - r);
  return o.set(t.subarray(r, n)), o;
}, wbits = function(t, r, n) {
  n <<= r & 7;
  var o = r / 8 >> 0;
  t[o] |= n, t[o + 1] |= n >>> 8;
}, wbits16 = function(t, r, n) {
  n <<= r & 7;
  var o = r / 8 >> 0;
  t[o] |= n, t[o + 1] |= n >>> 8, t[o + 2] |= n >>> 16;
}, hTree = function(t, r) {
  for (var n = [], o = 0; o < t.length; ++o)
    t[o] && n.push({
      s: o,
      f: t[o]
    });
  var a = n.length, u = n.slice();
  if (!a)
    return [new u8(0), 0];
  if (a == 1) {
    var c = new u8(n[0].s + 1);
    return c[n[0].s] = 1, [c, 1];
  }
  n.sort(function(D, F) {
    return D.f - F.f;
  }), n.push({
    s: -1,
    f: 25001
  });
  var l = n[0], p = n[1], g = 0, v = 1, _ = 2;
  for (n[0] = {
    s: -1,
    f: l.f + p.f,
    l,
    r: p
  }; v != a - 1; )
    l = n[n[g].f < n[_].f ? g++ : _++], p = n[g != v && n[g].f < n[_].f ? g++ : _++], n[v++] = {
      s: -1,
      f: l.f + p.f,
      l,
      r: p
    };
  for (var b = u[0].s, o = 1; o < a; ++o)
    u[o].s > b && (b = u[o].s);
  var E = new u16(b + 1), w = ln(n[v - 1], E, 0);
  if (w > r) {
    var o = 0, S = 0, A = w - r, j = 1 << A;
    for (u.sort(function(F, M) {
      return E[M.s] - E[F.s] || F.f - M.f;
    }); o < a; ++o) {
      var V = u[o].s;
      if (E[V] > r)
        S += j - (1 << w - E[V]), E[V] = r;
      else
        break;
    }
    for (S >>>= A; S > 0; ) {
      var G = u[o].s;
      E[G] < r ? S -= 1 << r - E[G]++ - 1 : ++o;
    }
    for (; o >= 0 && S; --o) {
      var H = u[o].s;
      E[H] == r && (--E[H], ++S);
    }
    w = r;
  }
  return [new u8(E), w];
}, ln = function e(t, r, n) {
  return t.s == -1 ? Math.max(e(t.l, r, n + 1), e(t.r, r, n + 1)) : r[t.s] = n;
}, lc = function(t) {
  for (var r = t.length; r && !t[--r]; )
    ;
  for (var n = new u16(++r), o = 0, a = t[0], u = 1, c = function(g) {
    n[o++] = g;
  }, l = 1; l <= r; ++l)
    if (t[l] == a && l != r)
      ++u;
    else {
      if (!a && u > 2) {
        for (; u > 138; u -= 138)
          c(32754);
        u > 2 && (c(u > 10 ? u - 11 << 5 | 28690 : u - 3 << 5 | 12305), u = 0);
      } else if (u > 3) {
        for (c(a), --u; u > 6; u -= 6)
          c(8304);
        u > 2 && (c(u - 3 << 5 | 8208), u = 0);
      }
      for (; u--; )
        c(a);
      u = 1, a = t[l];
    }
  return [n.subarray(0, o), r];
}, clen = function(t, r) {
  for (var n = 0, o = 0; o < r.length; ++o)
    n += t[o] * r[o];
  return n;
}, wfblk = function(t, r, n) {
  var o = n.length, a = shft(r + 2);
  t[a] = o & 255, t[a + 1] = o >>> 8, t[a + 2] = t[a] ^ 255, t[a + 3] = t[a + 1] ^ 255;
  for (var u = 0; u < o; ++u)
    t[a + u + 4] = n[u];
  return (a + 4 + o) * 8;
}, wblk = function(t, r, n, o, a, u, c, l, p, g, v) {
  wbits(r, v++, n), ++a[256];
  for (var _ = hTree(a, 15), b = _[0], E = _[1], w = hTree(u, 15), S = w[0], A = w[1], j = lc(b), V = j[0], G = j[1], H = lc(S), D = H[0], F = H[1], M = new u16(19), R = 0; R < V.length; ++R)
    M[V[R] & 31]++;
  for (var R = 0; R < D.length; ++R)
    M[D[R] & 31]++;
  for (var Q = hTree(M, 7), U = Q[0], te = Q[1], B = 19; B > 4 && !U[clim[B - 1]]; --B)
    ;
  var J = g + 5 << 3, X = clen(a, flt) + clen(u, fdt) + c, Y = clen(a, b) + clen(u, S) + c + 14 + 3 * B + clen(M, U) + (2 * M[16] + 3 * M[17] + 7 * M[18]);
  if (J <= X && J <= Y)
    return wfblk(r, v, t.subarray(p, p + g));
  var K, L, W, q;
  if (wbits(r, v, 1 + (Y < X)), v += 2, Y < X) {
    K = hMap(b, E, 0), L = b, W = hMap(S, A, 0), q = S;
    var ne = hMap(U, te, 0);
    wbits(r, v, G - 257), wbits(r, v + 5, F - 1), wbits(r, v + 10, B - 4), v += 14;
    for (var R = 0; R < B; ++R)
      wbits(r, v + 3 * R, U[clim[R]]);
    v += 3 * B;
    for (var P = [V, D], T = 0; T < 2; ++T)
      for (var O = P[T], R = 0; R < O.length; ++R) {
        var C = O[R] & 31;
        wbits(r, v, ne[C]), v += U[C], C > 15 && (wbits(r, v, O[R] >>> 5 & 127), v += O[R] >>> 12);
      }
  } else
    K = flm, L = flt, W = fdm, q = fdt;
  for (var R = 0; R < l; ++R)
    if (o[R] > 255) {
      var C = o[R] >>> 18 & 31;
      wbits16(r, v, K[C + 257]), v += L[C + 257], C > 7 && (wbits(r, v, o[R] >>> 23 & 31), v += fleb[C]);
      var I = o[R] & 31;
      wbits16(r, v, W[I]), v += q[I], I > 3 && (wbits16(r, v, o[R] >>> 5 & 8191), v += fdeb[I]);
    } else
      wbits16(r, v, K[o[R]]), v += L[o[R]];
  return wbits16(r, v, K[256]), v + L[256];
}, deo = /* @__PURE__ */ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), et = /* @__PURE__ */ new u8(0), dflt = function(t, r, n, o, a, u) {
  var c = t.length, l = new u8(o + c + 5 * (1 + Math.floor(c / 7e3)) + a), p = l.subarray(o, l.length - a), g = 0;
  if (!r || c < 8)
    for (var v = 0; v <= c; v += 65535) {
      var _ = v + 65535;
      _ < c ? g = wfblk(p, g, t.subarray(v, _)) : (p[v] = u, g = wfblk(p, g, t.subarray(v, c)));
    }
  else {
    for (var b = deo[r - 1], E = b >>> 13, w = b & 8191, S = (1 << n) - 1, A = new u16(32768), j = new u16(S + 1), V = Math.ceil(n / 3), G = 2 * V, H = function(ae) {
      return (t[ae] ^ t[ae + 1] << V ^ t[ae + 2] << G) & S;
    }, D = new u32(25e3), F = new u16(288), M = new u16(32), R = 0, Q = 0, v = 0, U = 0, te = 0, B = 0; v < c; ++v) {
      var J = H(v), X = v & 32767, Y = j[J];
      if (A[X] = Y, j[J] = X, te <= v) {
        var K = c - v;
        if ((R > 7e3 || U > 24576) && K > 423) {
          g = wblk(t, p, 0, D, F, M, Q, U, B, v - B, g), U = R = Q = 0, B = v;
          for (var L = 0; L < 286; ++L)
            F[L] = 0;
          for (var L = 0; L < 30; ++L)
            M[L] = 0;
        }
        var W = 2, q = 0, ne = w, P = X - Y & 32767;
        if (K > 2 && J == H(v - P))
          for (var T = Math.min(E, K) - 1, O = Math.min(32767, v), C = Math.min(258, K); P <= O && --ne && X != Y; ) {
            if (t[v + W] == t[v + W - P]) {
              for (var I = 0; I < C && t[v + I] == t[v + I - P]; ++I)
                ;
              if (I > W) {
                if (W = I, q = P, I > T)
                  break;
                for (var N = Math.min(P, I - 2), k = 0, L = 0; L < N; ++L) {
                  var z = v - P + L + 32768 & 32767, Z = A[z], ee = z - Z + 32768 & 32767;
                  ee > k && (k = ee, Y = z);
                }
              }
            }
            X = Y, Y = A[X], P += X - Y + 32768 & 32767;
          }
        if (q) {
          D[U++] = 268435456 | revfl[W] << 18 | revfd[q];
          var re = revfl[W] & 31, ie = revfd[q] & 31;
          Q += fleb[re] + fdeb[ie], ++F[257 + re], ++M[ie], te = v + W, ++R;
        } else
          D[U++] = t[v], ++F[t[v]];
      }
    }
    g = wblk(t, p, u, D, F, M, Q, U, B, v - B, g), u || (g = wfblk(p, g, et));
  }
  return slc(l, 0, o + shft(g) + a);
}, crct = /* @__PURE__ */ function() {
  for (var e = new u32(256), t = 0; t < 256; ++t) {
    for (var r = t, n = 9; --n; )
      r = (r & 1 && 3988292384) ^ r >>> 1;
    e[t] = r;
  }
  return e;
}(), crc = function() {
  var t = 4294967295;
  return {
    p: function(n) {
      for (var o = t, a = 0; a < n.length; ++a)
        o = crct[o & 255 ^ n[a]] ^ o >>> 8;
      t = o;
    },
    d: function() {
      return t ^ 4294967295;
    }
  };
}, dopt = function(t, r, n, o, a) {
  return dflt(t, r.level == null ? 6 : r.level, r.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(t.length))) * 1.5) : 12 + r.mem, n, o, !a);
}, wbytes = function(t, r, n) {
  for (; n; ++r)
    t[r] = n, n >>>= 8;
}, gzh = function(t, r) {
  var n = r.filename;
  if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = r.level < 2 ? 4 : r.level == 9 ? 2 : 0, t[9] = 3, r.mtime != 0 && wbytes(t, 4, Math.floor(new Date(r.mtime || Date.now()) / 1e3)), n) {
    t[3] = 8;
    for (var o = 0; o <= n.length; ++o)
      t[o + 10] = n.charCodeAt(o);
  }
}, gzhl = function(t) {
  return 10 + (t.filename && t.filename.length + 1 || 0);
};
function gzipSync(e, t) {
  t === void 0 && (t = {});
  var r = crc(), n = e.length;
  r.p(e);
  var o = dopt(e, t, gzhl(t), 8), a = o.length;
  return gzh(o, t), wbytes(o, a - 8, r.d()), wbytes(o, a - 4, n), o;
}
function strToU8(e, t) {
  var r = e.length;
  if (!t && typeof TextEncoder < "u")
    return new TextEncoder().encode(e);
  for (var n = new u8(e.length + (e.length >>> 1)), o = 0, a = function(g) {
    n[o++] = g;
  }, u = 0; u < r; ++u) {
    if (o + 5 > n.length) {
      var c = new u8(o + 8 + (r - u << 1));
      c.set(n), n = c;
    }
    var l = e.charCodeAt(u);
    l < 128 || t ? a(l) : l < 2048 ? (a(192 | l >>> 6), a(128 | l & 63)) : l > 55295 && l < 57344 ? (l = 65536 + (l & 1023 << 10) | e.charCodeAt(++u) & 1023, a(240 | l >>> 18), a(128 | l >>> 12 & 63), a(128 | l >>> 6 & 63), a(128 | l & 63)) : (a(224 | l >>> 12), a(128 | l >>> 6 & 63), a(128 | l & 63));
  }
  return slc(n, 0, o);
}
var Compression;
(function(e) {
  e.GZipJS = "gzip-js", e.LZ64 = "lz64", e.Base64 = "base64";
})(Compression || (Compression = {}));
function decideCompression(e) {
  return e[Compression.GZipJS] ? Compression.GZipJS : e[Compression.LZ64] ? Compression.LZ64 : Compression.Base64;
}
function compressData(e, t, r) {
  return e === Compression.LZ64 ? [{
    data: LZString.compressToBase64(t),
    compression: Compression.LZ64
  }, r] : e === Compression.GZipJS ? [gzipSync(strToU8(t), {
    mtime: 0
  }), _objectSpread2(_objectSpread2({}, r), {}, {
    blob: !0,
    urlQueryArgs: {
      compression: Compression.GZipJS
    }
  })] : [{
    data: _base64Encode(t)
  }, r];
}
var addParamsToURL = function(t, r, n) {
  var o = r || {};
  o.ip = n.ip ? 1 : 0, o._ = new Date().getTime().toString(), o.ver = Config.LIB_VERSION;
  var a = t.split("?");
  if (a.length > 1) {
    var u = a[1].split("&"), c = _createForOfIteratorHelper(u), l;
    try {
      for (c.s(); !(l = c.n()).done; ) {
        var p = l.value, g = p.split("=")[0];
        o[g] && delete o[g];
      }
    } catch (_) {
      c.e(_);
    } finally {
      c.f();
    }
  }
  var v = t.indexOf("?") > -1 ? "&" : "?";
  return t + v + _HTTPBuildQuery(o);
}, encodePostData = function e(t, r) {
  if (r.blob && t.buffer)
    return new Blob([t.buffer], {
      type: "text/plain"
    });
  if (r.sendBeacon || r.blob) {
    var n = e(t, {
      method: "POST"
    });
    return new Blob([n], {
      type: "application/x-www-form-urlencoded"
    });
  }
  if (r.method !== "POST")
    return null;
  var o, a = function(c) {
    return Object.prototype.toString.call(c) === "[object Uint8Array]";
  };
  return Array.isArray(t) || a(t) ? o = "data=" + encodeURIComponent(t) : o = "data=" + encodeURIComponent(t.data), "compression" in t && t.compression && (o += "&compression=" + t.compression), o;
}, xhr = function(t) {
  var r = t.url, n = t.data, o = t.headers, a = t.options, u = t.captureMetrics, c = t.callback, l = t.retriesPerformedSoFar, p = t.retryQueue, g = t.onXHRError, v = new XMLHttpRequest();
  v.open(a.method || "GET", r, !0);
  var _ = encodePostData(n, a);
  u.incr("_send_request"), u.incr("_send_request_inflight"), _each(o, function(b, E) {
    v.setRequestHeader(E, b);
  }), a.method === "POST" && !a.blob && v.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), v.withCredentials = !0, v.onreadystatechange = function() {
    if (v.readyState === 4)
      if (u.incr("xhr-response"), u.incr("xhr-response-".concat(v.status)), u.decr("_send_request_inflight"), v.status === 200) {
        if (c) {
          var b;
          try {
            b = JSON.parse(v.responseText);
          } catch (E) {
            logger.error(E);
            return;
          }
          c(b);
        }
      } else
        typeof g == "function" && g(v), [401, 403, 404, 500].indexOf(v.status) < 0 && p.enqueue({
          url: r,
          data: n,
          options: a,
          headers: o,
          retriesPerformedSoFar: (l || 0) + 1,
          callback: c
        }), c && c({
          status: 0
        });
  }, v.send(_);
}, RetryQueue = /* @__PURE__ */ function(e) {
  _inherits(r, e);
  var t = _createSuper(r);
  function r(n, o) {
    var a;
    return _classCallCheck(this, r), a = t.call(this), a.captureMetrics = n, a.isPolling = !1, a.queue = [], a.areWeOnline = !0, a.onXHRError = o, "onLine" in window.navigator && (a.areWeOnline = window.navigator.onLine, window.addEventListener("online", function() {
      a._handleWeAreNowOnline();
    }), window.addEventListener("offline", function() {
      a.areWeOnline = !1;
    })), a;
  }
  return _createClass(r, [{
    key: "enqueue",
    value: function(o) {
      var a = o.retriesPerformedSoFar || 0;
      if (!(a >= 10)) {
        var u = 3e3 * Math.pow(2, a), c = new Date(Date.now() + u);
        console.warn("Enqueued failed request for retry in ".concat(u)), this.queue.push({
          retryAt: c,
          requestData: o
        }), this.isPolling || (this.isPolling = !0, this.poll());
      }
    }
  }, {
    key: "poll",
    value: function() {
      var o = this;
      this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
        o.areWeOnline && o.queue.length > 0 && o.flush(), o.poll();
      }, this._pollInterval);
    }
  }, {
    key: "flush",
    value: function() {
      var o = new Date(Date.now()), a = this.queue.filter(function(p) {
        var g = p.retryAt;
        return g < o;
      });
      if (a.length > 0) {
        this.queue = this.queue.filter(function(p) {
          var g = p.retryAt;
          return g >= o;
        });
        var u = _createForOfIteratorHelper(a), c;
        try {
          for (u.s(); !(c = u.n()).done; ) {
            var l = c.value.requestData;
            this._executeXhrRequest(l);
          }
        } catch (p) {
          u.e(p);
        } finally {
          u.f();
        }
      }
    }
  }, {
    key: "unload",
    value: function() {
      this._poller && (clearTimeout(this._poller), this._poller = void 0);
      var o = _createForOfIteratorHelper(this.queue), a;
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var u = a.value.requestData, c = u.url, l = u.data, p = u.options;
          try {
            window.navigator.sendBeacon(c, encodePostData(l, _objectSpread2(_objectSpread2({}, p), {}, {
              sendBeacon: !0
            })));
          } catch (g) {
            Config.DEBUG && console.error(g);
          }
        }
      } catch (g) {
        o.e(g);
      } finally {
        o.f();
      }
      this.queue = [];
    }
  }, {
    key: "_executeXhrRequest",
    value: function(o) {
      var a = o.url, u = o.data, c = o.options, l = o.headers, p = o.callback, g = o.retriesPerformedSoFar;
      xhr({
        url: a,
        data: u || {},
        options: c || {},
        headers: l || {},
        retriesPerformedSoFar: g || 0,
        callback: p,
        captureMetrics: this.captureMetrics,
        retryQueue: this,
        onXHRError: this.onXHRError
      });
    }
  }, {
    key: "_handleWeAreNowOnline",
    value: function() {
      this.areWeOnline = !0, this.flush();
    }
  }]), r;
}(RequestQueueScaffold), SESSION_CHANGE_THRESHOLD = 30 * 60 * 1e3, SESSION_LENGTH_LIMIT = 24 * 3600 * 1e3, SessionIdManager = /* @__PURE__ */ function() {
  function e(t, r) {
    _classCallCheck(this, e), this.persistence = r, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null;
    var n = t.persistence_name || t.token;
    if (this.window_id_storage_key = "ph_" + n + "_window_id", this.primary_window_exists_storage_key = "ph_" + n + "_primary_window_exists", !this.persistence.disabled && sessionStore.is_supported()) {
      var o = sessionStore.parse(this.window_id_storage_key), a = sessionStore.parse(this.primary_window_exists_storage_key);
      o && !a ? this._windowId = o : sessionStore.remove(this.window_id_storage_key), sessionStore.set(this.primary_window_exists_storage_key, !0);
    }
    this._listenToReloadWindow();
  }
  return _createClass(e, [{
    key: "_setWindowId",
    value: function(r) {
      r !== this._windowId && (this._windowId = r, !this.persistence.disabled && sessionStore.is_supported() && sessionStore.set(this.window_id_storage_key, r));
    }
  }, {
    key: "_getWindowId",
    value: function() {
      return this._windowId ? this._windowId : !this.persistence.disabled && sessionStore.is_supported() ? sessionStore.parse(this.window_id_storage_key) : null;
    }
  }, {
    key: "_setSessionId",
    value: function(r, n, o) {
      (r !== this._sessionId || n !== this._sessionActivityTimestamp || o !== this._sessionStartTimestamp) && (this._sessionStartTimestamp = o, this._sessionActivityTimestamp = n, this._sessionId = r, this.persistence.register(_defineProperty({}, SESSION_ID, [n, r, o])));
    }
  }, {
    key: "_getSessionId",
    value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
        return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
      var r = this.persistence.props[SESSION_ID];
      return Array.isArray(r) && r.length === 2 && r.push(r[0]), r || [0, null, 0];
    }
  }, {
    key: "resetSessionId",
    value: function() {
      this._setSessionId(null, null, null);
    }
  }, {
    key: "_listenToReloadWindow",
    value: function() {
      var r = this;
      window.addEventListener("beforeunload", function() {
        !r.persistence.disabled && sessionStore.is_supported() && sessionStore.remove(r.primary_window_exists_storage_key);
      });
    }
  }, {
    key: "checkAndGetSessionAndWindowId",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = n || new Date().getTime(), a = this._getSessionId(), u = _slicedToArray(a, 3), c = u[0], l = u[1], p = u[2], g = this._getWindowId(), v = p && p > 0 && Math.abs(o - p) > SESSION_LENGTH_LIMIT;
      !l || !r && Math.abs(o - c) > SESSION_CHANGE_THRESHOLD || v ? (l = _UUID(), g = _UUID(), p = o) : g || (g = _UUID());
      var _ = c === 0 || !r || v ? o : c, b = p === 0 ? new Date().getTime() : p;
      return this._setWindowId(g), this._setSessionId(l, _, b), {
        sessionId: l,
        windowId: g
      };
    }
  }]), e;
}();
function isFloat(e) {
  return Number(e) === e && e % 1 !== 0;
}
function optimisePerformanceData(e) {
  return e.forEach(function(t, r) {
    for (var n in t) {
      var o = n;
      isFloat(t[o]) && t[o].toString().match(/^\d+\.\d{4,}$/) && (e[r][o] = Number(t[o].toFixed(3))), o === "serverTiming" && t[o].length === 0 && delete e[r][o], o === "entryType" && t[o] === "resource" && delete e[r][o], o === "nextHopProtocol" && delete e[r][o], t[o] === 0 && delete e[r][o];
    }
  }), deduplicateKeys(e);
}
function getPerformanceEntriesByType(e) {
  try {
    var t = JSON.parse(JSON.stringify(win.performance.getEntriesByType(e)));
    return optimisePerformanceData(t);
  } catch (r) {
    return Config.DEBUG && console.warn("not able to capture performance data (" + e + ") - " + r), [];
  }
}
function deduplicateKeys(e) {
  if (e.length === 0)
    return [];
  var t = Object.keys(e[0]);
  return [t, e.map(function(r) {
    return t.map(function(n) {
      return r[n];
    });
  })];
}
function pageLoadFrom(e) {
  var t = e.navigation && e.navigation[0], r = e.navigation && e.navigation[1] && e.navigation[1][0], n = t && t.indexOf("duration");
  if (n > -1)
    return r[n];
  var o = t && t.indexOf("loadEventEnd"), a = t && t.indexOf("startTime");
  if (o > -1) {
    var u = r && r[o], c = r && r[a] || 0;
    return u - c;
  }
}
function getPerformanceData() {
  var e = {
    navigation: getPerformanceEntriesByType("navigation"),
    paint: getPerformanceEntriesByType("paint"),
    resource: getPerformanceEntriesByType("resource")
  };
  _typeof(win) !== void 0 && win.performance && win.performance.clearResourceTimings && win.performance.clearResourceTimings();
  var t = {}, r = pageLoadFrom(e);
  return r && (t.$performance_page_loaded = r), t.$performance_raw = JSON.stringify(e), t;
}
var SentryIntegration = /* @__PURE__ */ _createClass(function e(t, r, n, o) {
  _classCallCheck(this, e), this.name = "posthog-js", this.setupOnce = function(a) {
    a(function(u) {
      var c, l, p;
      if (u.level !== "error" || !t.__loaded)
        return u;
      u.tags || (u.tags = {}), u.tags["PostHog Person URL"] = t.config.api_host + "/person/" + t.get_distinct_id(), t.sessionRecordingStarted() && (u.tags["PostHog Recording URL"] = t.config.api_host + "/recordings/#sessionRecordingId=" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
      var g = ((c = u.exception) === null || c === void 0 ? void 0 : c.values) || [], v = {
        $sentry_event_id: u.event_id,
        $sentry_exception: u.exception,
        $sentry_exception_message: (l = g[0]) === null || l === void 0 ? void 0 : l.value,
        $sentry_exception_type: (p = g[0]) === null || p === void 0 ? void 0 : p.type,
        $sentry_tags: u.tags
      };
      return r && n && (v.$sentry_url = (o || "https://sentry.io/organizations/") + r + "/issues/?project=" + n + "&query=" + u.event_id), t.capture("$exception", v), u;
    });
  };
}), InitType;
(function(e) {
  e[e.INIT_MODULE = 0] = "INIT_MODULE", e[e.INIT_SNIPPET = 1] = "INIT_SNIPPET";
})(InitType || (InitType = {}));
var init_type, posthog_master, __NOOP = function() {
}, __NOOPTIONS = {}, PRIMARY_INSTANCE_NAME = "posthog", USE_XHR = win.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(), ENQUEUE_REQUESTS = !USE_XHR && userAgent$1.indexOf("MSIE") === -1 && userAgent$1.indexOf("Mozilla") === -1, defaultConfig = function() {
  var t, r, n;
  return {
    api_host: "https://app.posthog.com",
    api_method: "POST",
    api_transport: "XHR",
    token: "",
    autocapture: !0,
    rageclick: !1,
    cross_subdomain_cookie: (document$1$1 == null || (t = document$1$1.location) === null || t === void 0 || (r = t.hostname) === null || r === void 0 ? void 0 : r.indexOf("herokuapp.com")) === -1,
    persistence: "cookie",
    persistence_name: "",
    cookie_name: "",
    loaded: __NOOP,
    store_google: !0,
    save_referrer: !0,
    test: !1,
    verbose: !1,
    img: !1,
    capture_pageview: !0,
    debug: !1,
    cookie_expiration: 365,
    upgrade: !1,
    disable_session_recording: !1,
    disable_persistence: !1,
    disable_cookie: !1,
    enable_recording_console_log: void 0,
    secure_cookie: (win == null || (n = win.location) === null || n === void 0 ? void 0 : n.protocol) === "https:",
    ip: !0,
    opt_out_capturing_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_capturing_persistence_type: "localStorage",
    opt_out_capturing_cookie_prefix: null,
    opt_in_site_apps: !1,
    property_blacklist: [],
    respect_dnt: !1,
    sanitize_properties: null,
    xhr_headers: {},
    inapp_protocol: "//",
    inapp_link_new_window: !1,
    request_batching: !0,
    properties_string_max_length: 65535,
    session_recording: {
      blockClass: "ph-no-capture",
      blockSelector: null,
      ignoreClass: "ph-ignore-input",
      maskAllInputs: !0,
      maskInputOptions: {},
      maskInputFn: null,
      slimDOMOptions: {},
      collectFonts: !1,
      inlineStylesheet: !0
    },
    mask_all_element_attributes: !1,
    mask_all_text: !1,
    advanced_disable_decide: !1,
    advanced_disable_toolbar_metrics: !1,
    on_xhr_error: function(a) {
      var u = "Bad HTTP status: " + a.status + " " + a.statusText;
      console.error(u);
    },
    get_device_id: function(a) {
      return a;
    },
    _onCapture: __NOOP,
    _capture_metrics: !1,
    _capture_performance: !1,
    name: "posthog",
    callback_fn: "posthog._jsc",
    bootstrap: {},
    disable_compression: !1
  };
}, create_mplib = function(t, r, n) {
  var o, a = n === PRIMARY_INSTANCE_NAME || !posthog_master ? posthog_master : n ? posthog_master[n] : void 0;
  if (a && init_type === InitType.INIT_MODULE)
    o = a;
  else {
    if (a && !_isArray(a)) {
      console.error("You have already initialized " + n);
      return;
    }
    o = new PostHog();
  }
  if (o._init(t, r, n), o.toolbar.maybeLoadToolbar(), o.sessionRecording = new SessionRecording(o), o.sessionRecording.startRecordingIfEnabled(), o.__autocapture_enabled = o.get_config("autocapture"), o.get_config("autocapture")) {
    var u = 100, c = 100;
    autocapture.enabledForProject(o.get_config("token"), u, c) ? autocapture.isBrowserSupported() ? autocapture.init(o) : (o.__autocapture_enabled = !1, logger.log("Disabling Automatic Event Collection because this browser is not supported")) : (o.__autocapture_enabled = !1, logger.log("Not in active bucket: disabling Automatic Event Collection."));
  }
  return Config.DEBUG = Config.DEBUG || o.get_config("debug"), typeof a < "u" && _isArray(a) && (o._execute_array.call(o.people, a.people), o._execute_array(a)), o;
}, PostHog = /* @__PURE__ */ function() {
  function e() {
    _classCallCheck(this, e), this.config = defaultConfig(), this.compression = {}, this.decideEndpointWasHit = !1, this.SentryIntegration = SentryIntegration, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__autocapture_enabled = void 0, this._jsc = function() {
    }, this.people = new PostHogPeople(this), this.featureFlags = new PostHogFeatureFlags(this), this.feature_flags = this.featureFlags, this.toolbar = new Toolbar(this), this._captureMetrics = void 0, this._requestQueue = void 0, this._retryQueue = void 0, this.persistence = void 0, this.sessionManager = void 0;
  }
  return _createClass(e, [{
    key: "init",
    value: function(r, n, o) {
      if (_isUndefined(o)) {
        console.error("You must name your new library: init(token, config, name)");
        return;
      }
      if (o === PRIMARY_INSTANCE_NAME) {
        console.error("You must initialize the main posthog object right after you include the PostHog js snippet");
        return;
      }
      var a = create_mplib(r, n, o);
      return posthog_master[o] = a, a._loaded(), a;
    }
  }, {
    key: "_init",
    value: function(r) {
      var n, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
      if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(_extend({}, defaultConfig(), o, {
        name: a,
        token: r,
        callback_fn: (a === PRIMARY_INSTANCE_NAME ? a : PRIMARY_INSTANCE_NAME + "." + a) + "._jsc"
      })), this._jsc = function() {
      }, this._captureMetrics = new CaptureMetrics(this.get_config("_capture_metrics")), this._requestQueue = new RequestQueue(this._captureMetrics, this._handle_queued_event.bind(this)), this._retryQueue = new RetryQueue(this._captureMetrics, this.get_config("on_xhr_error")), this.__captureHooks = [], this.__request_queue = [], this.persistence = new PostHogPersistence(this.config), this.sessionManager = new SessionIdManager(this.config, this.persistence), this._gdpr_init(), ((n = o.bootstrap) === null || n === void 0 ? void 0 : n.distinctID) !== void 0) {
        var u, c = this.get_config("get_device_id")(_UUID()), l = (u = o.bootstrap) !== null && u !== void 0 && u.isIdentifiedID ? c : o.bootstrap.distinctID;
        this.register({
          distinct_id: o.bootstrap.distinctID,
          $device_id: l
        });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var p, g = Object.keys(((p = o.bootstrap) === null || p === void 0 ? void 0 : p.featureFlags) || {}).filter(function(_) {
          var b, E;
          return !!((b = o.bootstrap) !== null && b !== void 0 && (E = b.featureFlags) !== null && E !== void 0 && E[_]);
        }).reduce(function(_, b) {
          var E, w;
          return _[b] = ((E = o.bootstrap) === null || E === void 0 || (w = E.featureFlags) === null || w === void 0 ? void 0 : w[b]) || !1, _;
        }, {});
        this.featureFlags.receivedFeatureFlags({
          featureFlags: g
        });
      }
      if (!this.get_distinct_id()) {
        var v = this.get_config("get_device_id")(_UUID());
        this.register_once({
          distinct_id: v,
          $device_id: v
        }, "");
      }
      win.addEventListener && win.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this));
    }
  }, {
    key: "_loaded",
    value: function() {
      this.featureFlags.setReloadingPaused(!0);
      try {
        this.get_config("loaded")(this);
      } catch (r) {
        console.error("`loaded` function failed", r);
      }
      this._start_queue_if_opted_in(), this.get_config("capture_pageview") && this.capture("$pageview", {}, {
        send_instantly: !0
      }), this.get_config("advanced_disable_decide") || new Decide(this).call(), this.featureFlags.resetRequestQueue(), this.featureFlags.setReloadingPaused(!1);
    }
  }, {
    key: "_start_queue_if_opted_in",
    value: function() {
      this.has_opted_out_capturing() || this.get_config("request_batching") && this._requestQueue.poll();
    }
  }, {
    key: "_dom_loaded",
    value: function() {
      var r = this;
      this.has_opted_out_capturing() || _eachArray(this.__request_queue, function(n) {
        r._send_request.apply(r, _toConsumableArray(n));
      }), this.__request_queue = [], this._start_queue_if_opted_in();
    }
  }, {
    key: "_prepare_callback",
    value: function(r, n) {
      if (_isUndefined(r))
        return null;
      if (USE_XHR)
        return function(c) {
          r(c, n);
        };
      var o = this._jsc, a = "" + Math.floor(Math.random() * 1e8), u = this.get_config("callback_fn") + "[" + a + "]";
      return o[a] = function(c) {
        delete o[a], r(c, n);
      }, u;
    }
  }, {
    key: "_handle_unload",
    value: function() {
      if (!this.get_config("request_batching")) {
        this.get_config("capture_pageview") && this.capture("$pageleave", null, {
          transport: "sendBeacon"
        });
        return;
      }
      this.get_config("capture_pageview") && this.capture("$pageleave"), this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)), this._requestQueue.unload(), this._retryQueue.unload();
    }
  }, {
    key: "_handle_queued_event",
    value: function(r, n, o) {
      var a = JSON.stringify(n);
      this.__compress_and_send_json_request(r, a, o || __NOOPTIONS, __NOOP);
    }
  }, {
    key: "__compress_and_send_json_request",
    value: function(r, n, o, a) {
      var u = compressData(decideCompression(this.compression), n, o), c = _slicedToArray(u, 2), l = c[0], p = c[1];
      this._send_request(r, l, p, a);
    }
  }, {
    key: "_send_request",
    value: function(r, n, o, a) {
      if (ENQUEUE_REQUESTS) {
        this.__request_queue.push([r, n, o, a]);
        return;
      }
      var u = {
        method: this.get_config("api_method"),
        transport: this.get_config("api_transport"),
        verbose: this.get_config("verbose")
      };
      o = _extend(u, o || {}), USE_XHR || (o.method = "GET");
      var c = "sendBeacon" in win.navigator && o.transport === "sendBeacon";
      if (r = addParamsToURL(r, o.urlQueryArgs || {}, {
        ip: this.get_config("ip")
      }), _isObject(n) && this.get_config("img")) {
        var l = document$1$1.createElement("img");
        l.src = r, document$1$1.body.appendChild(l);
      } else if (c)
        try {
          win.navigator.sendBeacon(r, encodePostData(n, _objectSpread2(_objectSpread2({}, o), {}, {
            sendBeacon: !0
          })));
        } catch (_) {
          this.get_config("debug") && console.error(_);
        }
      else if (USE_XHR)
        try {
          xhr({
            url: r,
            data: n,
            headers: this.get_config("xhr_headers"),
            options: o,
            captureMetrics: this._captureMetrics,
            callback: a,
            retriesPerformedSoFar: 0,
            retryQueue: this._retryQueue,
            onXHRError: this.get_config("on_xhr_error")
          });
        } catch (_) {
          console.error(_);
        }
      else {
        var p, g = document$1$1.createElement("script");
        g.type = "text/javascript", g.async = !0, g.defer = !0, g.src = r;
        var v = document$1$1.getElementsByTagName("script")[0];
        (p = v.parentNode) === null || p === void 0 || p.insertBefore(g, v);
      }
    }
  }, {
    key: "_execute_array",
    value: function(r) {
      var n = this, o, a = [], u = [], c = [];
      _eachArray(r, function(p) {
        p && (o = p[0], _isArray(o) ? c.push(p) : typeof p == "function" ? p.call(n) : _isArray(p) && o === "alias" ? a.push(p) : _isArray(p) && o.indexOf("capture") !== -1 && typeof n[o] == "function" ? c.push(p) : u.push(p));
      });
      var l = function(g, v) {
        _eachArray(g, function(_) {
          if (_isArray(_[0])) {
            var b = v;
            _each(_, function(E) {
              b = b[E[0]].apply(b, E.slice(1));
            });
          } else
            this[_[0]].apply(this, _.slice(1));
        }, v);
      };
      l(a, this), l(u, this), l(c, this);
    }
  }, {
    key: "_hasBootstrappedFeatureFlags",
    value: function() {
      var r, n;
      return ((r = this.config.bootstrap) === null || r === void 0 ? void 0 : r.featureFlags) && Object.keys((n = this.config.bootstrap) === null || n === void 0 ? void 0 : n.featureFlags).length > 0 || !1;
    }
  }, {
    key: "push",
    value: function(r) {
      this._execute_array([r]);
    }
  }, {
    key: "capture",
    value: function(r, n) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __NOOPTIONS;
      if (!!this.__loaded && !userOptedOut(this, !1)) {
        this._captureMetrics.incr("capture"), r === "$snapshot" && this._captureMetrics.incr("snapshot"), o = o || __NOOPTIONS;
        var a = o.transport;
        if (a && (o.transport = a), _isUndefined(r) || typeof r != "string") {
          console.error("No event name provided to posthog.capture");
          return;
        }
        if (!_isBlockedUA(userAgent$1)) {
          var u = this.persistence.remove_event_timer(r);
          this.persistence.update_search_keyword(document$1$1.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(document$1$1.referrer);
          var c = {
            event: r,
            properties: this._calculate_event_properties(r, n || {}, u)
          };
          r === "$identify" && o.$set && (c.$set = o.$set), c = _copyAndTruncateStrings(c, o._noTruncate ? null : this.get_config("properties_string_max_length")), c.timestamp = o.timestamp || new Date(), this.get_config("debug") && logger.log("PostHog.js send", c);
          var l = JSON.stringify(c), p = this.get_config("api_host") + (o.endpoint || "/e/"), g = o !== __NOOPTIONS;
          return this.get_config("request_batching") && (!g || o._batchKey) && !o.send_instantly ? this._requestQueue.enqueue(p, c, o) : this.__compress_and_send_json_request(p, l, o), this._invokeCaptureHooks(r, c), c;
        }
      }
    }
  }, {
    key: "_addCaptureHook",
    value: function(r) {
      this.__captureHooks.push(r);
    }
  }, {
    key: "_invokeCaptureHooks",
    value: function(r, n) {
      this.config._onCapture(r, n), _each(this.__captureHooks, function(o) {
        return o(r);
      });
    }
  }, {
    key: "_calculate_event_properties",
    value: function(r, n, o) {
      var a = _objectSpread2({}, n);
      if (a.token = this.get_config("token"), r === "$snapshot") {
        var u = this.persistence.properties();
        return a.distinct_id = u.distinct_id, a;
      }
      if (typeof o < "u") {
        var c = new Date().getTime() - o;
        a.$duration = parseFloat((c / 1e3).toFixed(3));
      }
      if (this.sessionManager) {
        var l = this.sessionManager.checkAndGetSessionAndWindowId(), p = l.sessionId, g = l.windowId;
        a.$session_id = p, a.$window_id = g;
      }
      a = _extend({}, _info.properties(), this.persistence.properties(), a), r === "$pageview" && this.get_config("_capture_performance") && (a = _extend(a, getPerformanceData()));
      var v = this.get_config("property_blacklist");
      _isArray(v) ? _each(v, function(b) {
        delete a[b];
      }) : console.error("Invalid value for property_blacklist config: " + v);
      var _ = this.get_config("sanitize_properties");
      return _ && (a = _(a, r)), a;
    }
  }, {
    key: "register",
    value: function(r, n) {
      this.persistence.register(r, n);
    }
  }, {
    key: "register_once",
    value: function(r, n, o) {
      this.persistence.register_once(r, n, o);
    }
  }, {
    key: "unregister",
    value: function(r) {
      this.persistence.unregister(r);
    }
  }, {
    key: "_register_single",
    value: function(r, n) {
      this.register(_defineProperty({}, r, n));
    }
  }, {
    key: "getFeatureFlag",
    value: function(r, n) {
      return this.featureFlags.getFeatureFlag(r, n);
    }
  }, {
    key: "isFeatureEnabled",
    value: function(r, n) {
      return this.featureFlags.isFeatureEnabled(r, n);
    }
  }, {
    key: "reloadFeatureFlags",
    value: function() {
      this.featureFlags.reloadFeatureFlags();
    }
  }, {
    key: "onFeatureFlags",
    value: function(r) {
      return this.featureFlags.onFeatureFlags(r);
    }
  }, {
    key: "identify",
    value: function(r, n, o) {
      if (!r) {
        console.error("Unique user id has not been set in posthog.identify");
        return;
      }
      this._captureMetrics.incr("identify");
      var a = this.get_distinct_id();
      if (this.register({
        $user_id: r
      }), !this.get_property("$device_id")) {
        var u = a;
        this.register_once({
          $had_persisted_distinct_id: !0,
          $device_id: u
        }, "");
      }
      r !== a && r !== this.get_property(ALIAS_ID_KEY) && (this.unregister(ALIAS_ID_KEY), this.register({
        distinct_id: r
      })), r !== a && (!this.get_property("$device_id") || a === this.get_property("$device_id")) ? (this.capture("$identify", {
        distinct_id: r,
        $anon_distinct_id: a
      }, {
        $set: n || {},
        $set_once: o || {}
      }), this.featureFlags.setAnonymousDistinctId(a)) : (n && this.people.set(n), o && this.people.set_once(o)), r !== a && this.reloadFeatureFlags();
    }
  }, {
    key: "group",
    value: function(r, n, o) {
      if (!r || !n) {
        console.error("posthog.group requires a group type and group key");
        return;
      }
      this._captureMetrics.incr("group");
      var a = this.getGroups();
      this.register({
        $groups: _objectSpread2(_objectSpread2({}, a), {}, _defineProperty({}, r, n))
      }), o && this.capture("$groupidentify", {
        $group_type: r,
        $group_key: n,
        $group_set: o
      }), a[r] !== n && this.reloadFeatureFlags();
    }
  }, {
    key: "reset",
    value: function(r) {
      var n = this.get_property("$device_id");
      this.persistence.clear(), this.sessionManager.resetSessionId();
      var o = this.get_config("get_device_id")(_UUID());
      this.register_once({
        distinct_id: o,
        $device_id: r ? o : n
      }, "");
    }
  }, {
    key: "get_distinct_id",
    value: function() {
      return this.get_property("distinct_id");
    }
  }, {
    key: "getGroups",
    value: function() {
      return this.get_property("$groups") || {};
    }
  }, {
    key: "alias",
    value: function(r, n) {
      return r === this.get_property(PEOPLE_DISTINCT_ID_KEY) ? (logger.critical("Attempting to create alias for existing People user - aborting."), -2) : (_isUndefined(n) && (n = this.get_distinct_id()), r !== n ? (this._register_single(ALIAS_ID_KEY, r), this.capture("$create_alias", {
        alias: r,
        distinct_id: n
      })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(r), -1));
    }
  }, {
    key: "set_config",
    value: function(r) {
      var n = _objectSpread2({}, this.config);
      _isObject(r) && (_extend(this.config, r), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), localStore.is_supported() && localStore.get("ph_debug") === "true" && (this.config.debug = !0), this.get_config("debug") && (Config.DEBUG = !0), this.sessionRecording && typeof r.disable_session_recording < "u" && n.disable_session_recording !== r.disable_session_recording && (r.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()));
    }
  }, {
    key: "startSessionRecording",
    value: function() {
      this.set_config({
        disable_session_recording: !1
      });
    }
  }, {
    key: "stopSessionRecording",
    value: function() {
      this.set_config({
        disable_session_recording: !0
      });
    }
  }, {
    key: "sessionRecordingStarted",
    value: function() {
      var r;
      return !!((r = this.sessionRecording) !== null && r !== void 0 && r.started());
    }
  }, {
    key: "loadToolbar",
    value: function(r) {
      return this.toolbar.loadToolbar(r);
    }
  }, {
    key: "get_config",
    value: function(r) {
      var n;
      return (n = this.config) === null || n === void 0 ? void 0 : n[r];
    }
  }, {
    key: "get_property",
    value: function(r) {
      return this.persistence.props[r];
    }
  }, {
    key: "toString",
    value: function() {
      var r, n = (r = this.get_config("name")) !== null && r !== void 0 ? r : PRIMARY_INSTANCE_NAME;
      return n !== PRIMARY_INSTANCE_NAME && (n = PRIMARY_INSTANCE_NAME + "." + n), n;
    }
  }, {
    key: "_gdpr_init",
    value: function() {
      var r = this.get_config("opt_out_capturing_persistence_type") === "localStorage";
      r && localStore.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
        persistence_type: "cookie"
      }) && this.opt_in_capturing({
        enable_persistence: !1
      }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
        persistence_type: "cookie"
      }) && this.opt_out_capturing({
        clear_persistence: !1
      }), this.clear_opt_in_out_capturing({
        persistence_type: "cookie",
        enable_persistence: !1
      })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({
        clear_persistence: !0
      }) : !this.has_opted_in_capturing() && (this.get_config("opt_out_capturing_by_default") || cookieStore.get("ph_optout")) && (cookieStore.remove("ph_optout"), this.opt_out_capturing({
        clear_persistence: this.get_config("opt_out_persistence_by_default")
      }));
    }
  }, {
    key: "_gdpr_update_persistence",
    value: function(r) {
      var n;
      if (r && r.clear_persistence)
        n = !0;
      else if (r && r.enable_persistence)
        n = !1;
      else
        return;
      !this.get_config("disable_persistence") && this.persistence.disabled !== n && this.persistence.set_disabled(n);
    }
  }, {
    key: "_gdpr_call_func",
    value: function(r, n) {
      return n = _extend({
        capture: this.capture.bind(this),
        persistence_type: this.get_config("opt_out_capturing_persistence_type"),
        cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"),
        cookie_expiration: this.get_config("cookie_expiration"),
        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
        secure_cookie: this.get_config("secure_cookie")
      }, n || {}), !localStore.is_supported() && n.persistence_type === "localStorage" && (n.persistence_type = "cookie"), r(this.get_config("token"), {
        capture: n.capture,
        captureEventName: n.capture_event_name,
        captureProperties: n.capture_properties,
        persistenceType: n.persistence_type,
        persistencePrefix: n.cookie_prefix,
        cookieExpiration: n.cookie_expiration,
        crossSubdomainCookie: n.cross_subdomain_cookie,
        secureCookie: n.secure_cookie
      });
    }
  }, {
    key: "opt_in_capturing",
    value: function(r) {
      r = _extend({
        enable_persistence: !0
      }, r || {}), this._gdpr_call_func(optIn, r), this._gdpr_update_persistence(r);
    }
  }, {
    key: "opt_out_capturing",
    value: function(r) {
      var n = _extend({
        clear_persistence: !0
      }, r || {});
      this._gdpr_call_func(optOut, n), this._gdpr_update_persistence(n);
    }
  }, {
    key: "has_opted_in_capturing",
    value: function(r) {
      return this._gdpr_call_func(hasOptedIn, r);
    }
  }, {
    key: "has_opted_out_capturing",
    value: function(r) {
      return this._gdpr_call_func(hasOptedOut, r);
    }
  }, {
    key: "clear_opt_in_out_capturing",
    value: function(r) {
      var n = _extend({
        enable_persistence: !0
      }, r != null ? r : {});
      this._gdpr_call_func(clearOptInOut, n), this._gdpr_update_persistence(n);
    }
  }, {
    key: "debug",
    value: function(r) {
      r === !1 ? (win.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
        debug: !1
      })) : (win.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
        debug: !0
      }));
    }
  }, {
    key: "decodeLZ64",
    value: function(r) {
      return LZString.decompressFromBase64(r || null);
    }
  }]), e;
}();
_safewrap_class(PostHog, ["identify"]);
var instances = {}, extend_mp = function() {
  _each(instances, function(t, r) {
    r !== PRIMARY_INSTANCE_NAME && (posthog_master[r] = t);
  });
}, override_ph_init_func = function() {
  posthog_master.init = function(t, r, n) {
    if (n)
      return posthog_master[n] || (posthog_master[n] = instances[n] = create_mplib(t || "", r || {}, n), posthog_master[n]._loaded()), posthog_master[n];
    var o = posthog_master;
    return instances[PRIMARY_INSTANCE_NAME] ? o = instances[PRIMARY_INSTANCE_NAME] : t && (o = create_mplib(t, r || {}, PRIMARY_INSTANCE_NAME), o._loaded(), instances[PRIMARY_INSTANCE_NAME] = o), posthog_master = o, init_type === InitType.INIT_SNIPPET && (win[PRIMARY_INSTANCE_NAME] = posthog_master), extend_mp(), o;
  };
}, add_dom_loaded_handler = function() {
  function t() {
    t.done || (t.done = !0, ENQUEUE_REQUESTS = !1, _each(instances, function(r) {
      r._dom_loaded();
    }));
  }
  document$1$1.addEventListener && (document$1$1.readyState === "complete" ? t() : document$1$1.addEventListener("DOMContentLoaded", t, !1)), _register_event(win, "load", t, !0);
};
function init_as_module() {
  return init_type = InitType.INIT_MODULE, posthog_master = new PostHog(), override_ph_init_func(), posthog_master.init(), add_dom_loaded_handler(), posthog_master;
}
var posthog = init_as_module(), commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var browser = { exports: {} }, debug$1 = { exports: {} }, s = 1e3, m = s * 60, h = m * 60, d = h * 24, y = d * 365.25, ms = function(e, t) {
  t = t || {};
  var r = typeof e;
  if (r === "string" && e.length > 0)
    return parse(e);
  if (r === "number" && isNaN(e) === !1)
    return t.long ? fmtLong(e) : fmtShort(e);
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(e)
  );
};
function parse(e) {
  if (e = String(e), !(e.length > 100)) {
    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
      e
    );
    if (!!t) {
      var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
      switch (n) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return r * y;
        case "days":
        case "day":
        case "d":
          return r * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return r * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return r * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return r * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return r;
        default:
          return;
      }
    }
  }
}
function fmtShort(e) {
  return e >= d ? Math.round(e / d) + "d" : e >= h ? Math.round(e / h) + "h" : e >= m ? Math.round(e / m) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms";
}
function fmtLong(e) {
  return plural(e, d, "day") || plural(e, h, "hour") || plural(e, m, "minute") || plural(e, s, "second") || e + " ms";
}
function plural(e, t, r) {
  if (!(e < t))
    return e < t * 1.5 ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s";
}
(function(e, t) {
  t = e.exports = o.debug = o.default = o, t.coerce = l, t.disable = u, t.enable = a, t.enabled = c, t.humanize = ms, t.names = [], t.skips = [], t.formatters = {};
  var r;
  function n(p) {
    var g = 0, v;
    for (v in p)
      g = (g << 5) - g + p.charCodeAt(v), g |= 0;
    return t.colors[Math.abs(g) % t.colors.length];
  }
  function o(p) {
    function g() {
      if (!!g.enabled) {
        var v = g, _ = +new Date(), b = _ - (r || _);
        v.diff = b, v.prev = r, v.curr = _, r = _;
        for (var E = new Array(arguments.length), w = 0; w < E.length; w++)
          E[w] = arguments[w];
        E[0] = t.coerce(E[0]), typeof E[0] != "string" && E.unshift("%O");
        var S = 0;
        E[0] = E[0].replace(/%([a-zA-Z%])/g, function(j, V) {
          if (j === "%%")
            return j;
          S++;
          var G = t.formatters[V];
          if (typeof G == "function") {
            var H = E[S];
            j = G.call(v, H), E.splice(S, 1), S--;
          }
          return j;
        }), t.formatArgs.call(v, E);
        var A = g.log || t.log || console.log.bind(console);
        A.apply(v, E);
      }
    }
    return g.namespace = p, g.enabled = t.enabled(p), g.useColors = t.useColors(), g.color = n(p), typeof t.init == "function" && t.init(g), g;
  }
  function a(p) {
    t.save(p), t.names = [], t.skips = [];
    for (var g = (typeof p == "string" ? p : "").split(/[\s,]+/), v = g.length, _ = 0; _ < v; _++)
      !g[_] || (p = g[_].replace(/\*/g, ".*?"), p[0] === "-" ? t.skips.push(new RegExp("^" + p.substr(1) + "$")) : t.names.push(new RegExp("^" + p + "$")));
  }
  function u() {
    t.enable("");
  }
  function c(p) {
    var g, v;
    for (g = 0, v = t.skips.length; g < v; g++)
      if (t.skips[g].test(p))
        return !1;
    for (g = 0, v = t.names.length; g < v; g++)
      if (t.names[g].test(p))
        return !0;
    return !1;
  }
  function l(p) {
    return p instanceof Error ? p.stack || p.message : p;
  }
})(debug$1, debug$1.exports);
(function(e, t) {
  t = e.exports = debug$1.exports, t.log = o, t.formatArgs = n, t.save = a, t.load = u, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : c(), t.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function r() {
    return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  t.formatters.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (p) {
      return "[UnexpectedJSONParseError]: " + p.message;
    }
  };
  function n(l) {
    var p = this.useColors;
    if (l[0] = (p ? "%c" : "") + this.namespace + (p ? " %c" : " ") + l[0] + (p ? "%c " : " ") + "+" + t.humanize(this.diff), !!p) {
      var g = "color: " + this.color;
      l.splice(1, 0, g, "color: inherit");
      var v = 0, _ = 0;
      l[0].replace(/%[a-zA-Z%]/g, function(b) {
        b !== "%%" && (v++, b === "%c" && (_ = v));
      }), l.splice(_, 0, g);
    }
  }
  function o() {
    return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function a(l) {
    try {
      l == null ? t.storage.removeItem("debug") : t.storage.debug = l;
    } catch {
    }
  }
  function u() {
    var l;
    try {
      l = t.storage.debug;
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  t.enable(u());
  function c() {
    try {
      return window.localStorage;
    } catch {
    }
  }
})(browser, browser.exports);
const debug = browser.exports("FastMutex"), randomId = () => Math.random() + "", resolveWithStats = (e, t) => {
  const r = new Date().getTime();
  t.acquireEnd = r, t.acquireDuration = t.acquireEnd - t.acquireStart, t.lockStart = r, e(t);
};
class FastMutex {
  constructor({ clientId: t = randomId(), xPrefix: r = "_MUTEX_LOCK_X_", yPrefix: n = "_MUTEX_LOCK_Y_", timeout: o = 5e3, localStorage: a } = {}) {
    this.clientId = t, this.xPrefix = r, this.yPrefix = n, this.timeout = o, this.localStorage = a || window.localStorage, this.resetStats();
  }
  lock(t) {
    debug('Attempting to acquire Lock on "%s" using FastMutex instance "%s"', t, this.clientId);
    const r = this.xPrefix + t, n = this.yPrefix + t;
    return this.resetStats(), this.lockStats.acquireStart || (this.lockStats.acquireStart = new Date().getTime()), new Promise((o, a) => {
      const u = (c) => {
        if (new Date().getTime() - this.lockStats.acquireStart >= this.timeout)
          return debug('Lock on "%s" could not be acquired within %sms by FastMutex client "%s"', c, this.timeout, this.clientId), a(new Error(`Lock could not be acquired within ${this.timeout}ms`));
        this.setItem(r, this.clientId);
        let p = this.getItem(n);
        if (p) {
          debug("Lock exists on Y (%s), restarting...", p), this.lockStats.restartCount++, setTimeout(() => u(c));
          return;
        }
        this.setItem(n, this.clientId);
        let g = this.getItem(r);
        if (g !== this.clientId) {
          this.lockStats.contentionCount++, debug('Lock contention detected. X="%s"', g), setTimeout(() => {
            p = this.getItem(n), p === this.clientId ? (debug('FastMutex client "%s" won the lock contention on "%s"', this.clientId, c), resolveWithStats(o, this.lockStats)) : (this.lockStats.restartCount++, this.lockStats.locksLost++, debug('FastMutex client "%s" lost the lock contention on "%s" to another process (%s). Restarting...', this.clientId, c, p), setTimeout(() => u(c)));
          }, 50);
          return;
        }
        debug('FastMutex client "%s" acquired a lock on "%s" with no contention', this.clientId, c), resolveWithStats(o, this.lockStats);
      };
      u(t);
    });
  }
  release(t) {
    debug('FastMutex client "%s" is releasing lock on "%s"', this.clientId, t);
    const r = this.yPrefix + t;
    return new Promise((n) => {
      this.localStorage.removeItem(r), this.lockStats.lockEnd = new Date().getTime(), this.lockStats.lockDuration = this.lockStats.lockEnd - this.lockStats.lockStart, n(this.lockStats), this.resetStats();
    });
  }
  setItem(t, r) {
    return this.localStorage.setItem(t, JSON.stringify({
      expiresAt: new Date().getTime() + this.timeout,
      value: r
    }));
  }
  getItem(t) {
    const r = this.localStorage.getItem(t);
    if (!r)
      return null;
    const n = JSON.parse(r);
    return new Date().getTime() - n.expiresAt >= this.timeout ? (debug('FastMutex client "%s" removed an expired record on "%s"', this.clientId, t), this.localStorage.removeItem(t), null) : JSON.parse(r).value;
  }
  resetStats() {
    this.lockStats = {
      restartCount: 0,
      locksLost: 0,
      contentionCount: 0,
      acquireDuration: 0,
      acquireStart: null
    };
  }
}
var fastMutex = FastMutex;
const API_HOST = "https://events.datapane.com";
var ue;
urlJoin(
  (ue = env.url) != null ? ue : "https://cloud.datapane.com/",
  "dp-kpis/"
);
const LOCK_NAME = "ph_datapane_store", mutex = new fastMutex(), setupPostHog = async (e, t, r) => {
  try {
    await mutex.lock(LOCK_NAME), posthog.init(e, {
      api_host: API_HOST,
      loaded: async (n) => {
        window.posthog = n, t && n.identify(t), r && n.group("company", r), await mutex.release(LOCK_NAME);
      }
    });
  } catch (n) {
    console.error("Posthog setup error", n), await mutex.release(LOCK_NAME);
  }
};
var clipboard = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(commonjsGlobal, function() {
    return function() {
      var r = {
        686: function(a, u, c) {
          c.d(u, {
            default: function() {
              return ne;
            }
          });
          var l = c(279), p = /* @__PURE__ */ c.n(l), g = c(370), v = /* @__PURE__ */ c.n(g), _ = c(817), b = /* @__PURE__ */ c.n(_);
          function E(P) {
            try {
              return document.execCommand(P);
            } catch {
              return !1;
            }
          }
          var w = function(T) {
            var O = b()(T);
            return E("cut"), O;
          }, S = w;
          function A(P) {
            var T = document.documentElement.getAttribute("dir") === "rtl", O = document.createElement("textarea");
            O.style.fontSize = "12pt", O.style.border = "0", O.style.padding = "0", O.style.margin = "0", O.style.position = "absolute", O.style[T ? "right" : "left"] = "-9999px";
            var C = window.pageYOffset || document.documentElement.scrollTop;
            return O.style.top = "".concat(C, "px"), O.setAttribute("readonly", ""), O.value = P, O;
          }
          var j = function(T, O) {
            var C = A(T);
            O.container.appendChild(C);
            var I = b()(C);
            return E("copy"), C.remove(), I;
          }, V = function(T) {
            var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              container: document.body
            }, C = "";
            return typeof T == "string" ? C = j(T, O) : T instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(T == null ? void 0 : T.type) ? C = j(T.value, O) : (C = b()(T), E("copy")), C;
          }, G = V;
          function H(P) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? H = function(O) {
              return typeof O;
            } : H = function(O) {
              return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
            }, H(P);
          }
          var D = function() {
            var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, O = T.action, C = O === void 0 ? "copy" : O, I = T.container, N = T.target, k = T.text;
            if (C !== "copy" && C !== "cut")
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            if (N !== void 0)
              if (N && H(N) === "object" && N.nodeType === 1) {
                if (C === "copy" && N.hasAttribute("disabled"))
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                if (C === "cut" && (N.hasAttribute("readonly") || N.hasAttribute("disabled")))
                  throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
              } else
                throw new Error('Invalid "target" value, use a valid Element');
            if (k)
              return G(k, {
                container: I
              });
            if (N)
              return C === "cut" ? S(N) : G(N, {
                container: I
              });
          }, F = D;
          function M(P) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? M = function(O) {
              return typeof O;
            } : M = function(O) {
              return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
            }, M(P);
          }
          function R(P, T) {
            if (!(P instanceof T))
              throw new TypeError("Cannot call a class as a function");
          }
          function Q(P, T) {
            for (var O = 0; O < T.length; O++) {
              var C = T[O];
              C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(P, C.key, C);
            }
          }
          function U(P, T, O) {
            return T && Q(P.prototype, T), O && Q(P, O), P;
          }
          function te(P, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            P.prototype = Object.create(T && T.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), T && B(P, T);
          }
          function B(P, T) {
            return B = Object.setPrototypeOf || function(C, I) {
              return C.__proto__ = I, C;
            }, B(P, T);
          }
          function J(P) {
            var T = K();
            return function() {
              var C = L(P), I;
              if (T) {
                var N = L(this).constructor;
                I = Reflect.construct(C, arguments, N);
              } else
                I = C.apply(this, arguments);
              return X(this, I);
            };
          }
          function X(P, T) {
            return T && (M(T) === "object" || typeof T == "function") ? T : Y(P);
          }
          function Y(P) {
            if (P === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return P;
          }
          function K() {
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
          function L(P) {
            return L = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
              return O.__proto__ || Object.getPrototypeOf(O);
            }, L(P);
          }
          function W(P, T) {
            var O = "data-clipboard-".concat(P);
            if (!!T.hasAttribute(O))
              return T.getAttribute(O);
          }
          var q = /* @__PURE__ */ function(P) {
            te(O, P);
            var T = J(O);
            function O(C, I) {
              var N;
              return R(this, O), N = T.call(this), N.resolveOptions(I), N.listenClick(C), N;
            }
            return U(O, [{
              key: "resolveOptions",
              value: function() {
                var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = typeof I.action == "function" ? I.action : this.defaultAction, this.target = typeof I.target == "function" ? I.target : this.defaultTarget, this.text = typeof I.text == "function" ? I.text : this.defaultText, this.container = M(I.container) === "object" ? I.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function(I) {
                var N = this;
                this.listener = v()(I, "click", function(k) {
                  return N.onClick(k);
                });
              }
            }, {
              key: "onClick",
              value: function(I) {
                var N = I.delegateTarget || I.currentTarget, k = this.action(N) || "copy", z = F({
                  action: k,
                  container: this.container,
                  target: this.target(N),
                  text: this.text(N)
                });
                this.emit(z ? "success" : "error", {
                  action: k,
                  text: z,
                  trigger: N,
                  clearSelection: function() {
                    N && N.focus(), window.getSelection().removeAllRanges();
                  }
                });
              }
            }, {
              key: "defaultAction",
              value: function(I) {
                return W("action", I);
              }
            }, {
              key: "defaultTarget",
              value: function(I) {
                var N = W("target", I);
                if (N)
                  return document.querySelector(N);
              }
            }, {
              key: "defaultText",
              value: function(I) {
                return W("text", I);
              }
            }, {
              key: "destroy",
              value: function() {
                this.listener.destroy();
              }
            }], [{
              key: "copy",
              value: function(I) {
                var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                };
                return G(I, N);
              }
            }, {
              key: "cut",
              value: function(I) {
                return S(I);
              }
            }, {
              key: "isSupported",
              value: function() {
                var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"], N = typeof I == "string" ? [I] : I, k = !!document.queryCommandSupported;
                return N.forEach(function(z) {
                  k = k && !!document.queryCommandSupported(z);
                }), k;
              }
            }]), O;
          }(p()), ne = q;
        },
        828: function(a) {
          var u = 9;
          if (typeof Element < "u" && !Element.prototype.matches) {
            var c = Element.prototype;
            c.matches = c.matchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector || c.webkitMatchesSelector;
          }
          function l(p, g) {
            for (; p && p.nodeType !== u; ) {
              if (typeof p.matches == "function" && p.matches(g))
                return p;
              p = p.parentNode;
            }
          }
          a.exports = l;
        },
        438: function(a, u, c) {
          var l = c(828);
          function p(_, b, E, w, S) {
            var A = v.apply(this, arguments);
            return _.addEventListener(E, A, S), {
              destroy: function() {
                _.removeEventListener(E, A, S);
              }
            };
          }
          function g(_, b, E, w, S) {
            return typeof _.addEventListener == "function" ? p.apply(null, arguments) : typeof E == "function" ? p.bind(null, document).apply(null, arguments) : (typeof _ == "string" && (_ = document.querySelectorAll(_)), Array.prototype.map.call(_, function(A) {
              return p(A, b, E, w, S);
            }));
          }
          function v(_, b, E, w) {
            return function(S) {
              S.delegateTarget = l(S.target, b), S.delegateTarget && w.call(_, S);
            };
          }
          a.exports = g;
        },
        879: function(a, u) {
          u.node = function(c) {
            return c !== void 0 && c instanceof HTMLElement && c.nodeType === 1;
          }, u.nodeList = function(c) {
            var l = Object.prototype.toString.call(c);
            return c !== void 0 && (l === "[object NodeList]" || l === "[object HTMLCollection]") && "length" in c && (c.length === 0 || u.node(c[0]));
          }, u.string = function(c) {
            return typeof c == "string" || c instanceof String;
          }, u.fn = function(c) {
            var l = Object.prototype.toString.call(c);
            return l === "[object Function]";
          };
        },
        370: function(a, u, c) {
          var l = c(879), p = c(438);
          function g(E, w, S) {
            if (!E && !w && !S)
              throw new Error("Missing required arguments");
            if (!l.string(w))
              throw new TypeError("Second argument must be a String");
            if (!l.fn(S))
              throw new TypeError("Third argument must be a Function");
            if (l.node(E))
              return v(E, w, S);
            if (l.nodeList(E))
              return _(E, w, S);
            if (l.string(E))
              return b(E, w, S);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          }
          function v(E, w, S) {
            return E.addEventListener(w, S), {
              destroy: function() {
                E.removeEventListener(w, S);
              }
            };
          }
          function _(E, w, S) {
            return Array.prototype.forEach.call(E, function(A) {
              A.addEventListener(w, S);
            }), {
              destroy: function() {
                Array.prototype.forEach.call(E, function(A) {
                  A.removeEventListener(w, S);
                });
              }
            };
          }
          function b(E, w, S) {
            return p(document.body, E, w, S);
          }
          a.exports = g;
        },
        817: function(a) {
          function u(c) {
            var l;
            if (c.nodeName === "SELECT")
              c.focus(), l = c.value;
            else if (c.nodeName === "INPUT" || c.nodeName === "TEXTAREA") {
              var p = c.hasAttribute("readonly");
              p || c.setAttribute("readonly", ""), c.select(), c.setSelectionRange(0, c.value.length), p || c.removeAttribute("readonly"), l = c.value;
            } else {
              c.hasAttribute("contenteditable") && c.focus();
              var g = window.getSelection(), v = document.createRange();
              v.selectNodeContents(c), g.removeAllRanges(), g.addRange(v), l = g.toString();
            }
            return l;
          }
          a.exports = u;
        },
        279: function(a) {
          function u() {
          }
          u.prototype = {
            on: function(c, l, p) {
              var g = this.e || (this.e = {});
              return (g[c] || (g[c] = [])).push({
                fn: l,
                ctx: p
              }), this;
            },
            once: function(c, l, p) {
              var g = this;
              function v() {
                g.off(c, v), l.apply(p, arguments);
              }
              return v._ = l, this.on(c, v, p);
            },
            emit: function(c) {
              var l = [].slice.call(arguments, 1), p = ((this.e || (this.e = {}))[c] || []).slice(), g = 0, v = p.length;
              for (g; g < v; g++)
                p[g].fn.apply(p[g].ctx, l);
              return this;
            },
            off: function(c, l) {
              var p = this.e || (this.e = {}), g = p[c], v = [];
              if (g && l)
                for (var _ = 0, b = g.length; _ < b; _++)
                  g[_].fn !== l && g[_].fn._ !== l && v.push(g[_]);
              return v.length ? p[c] = v : delete p[c], this;
            }
          }, a.exports = u, a.exports.TinyEmitter = u;
        }
      }, n = {};
      function o(a) {
        if (n[a])
          return n[a].exports;
        var u = n[a] = {
          exports: {}
        };
        return r[a](u, u.exports, o), u.exports;
      }
      return function() {
        o.n = function(a) {
          var u = a && a.__esModule ? function() {
            return a.default;
          } : function() {
            return a;
          };
          return o.d(u, { a: u }), u;
        };
      }(), function() {
        o.d = function(a, u) {
          for (var c in u)
            o.o(u, c) && !o.o(a, c) && Object.defineProperty(a, c, { enumerable: !0, get: u[c] });
        };
      }(), function() {
        o.o = function(a, u) {
          return Object.prototype.hasOwnProperty.call(a, u);
        };
      }(), o(686);
    }().default;
  });
})(clipboard);
const ClipboardJS = /* @__PURE__ */ getDefaultExportFromCjs(clipboard.exports), oe = class {
  constructor(t, r) {
    se(this, "clip");
    this.clip = new ClipboardJS(t, {
      text() {
        return r.text ? r.text : oe.getFieldValue(r.fieldId);
      }
    }), this.clip.on(
      "error",
      () => console.error("An error occurred while copying to clipboard")
    ), this.clip.on("success", oe.onSuccess);
  }
  destroy() {
    this.clip.destroy();
  }
  static getFieldValue(t) {
    const r = document.querySelector(`#${t}`);
    if (!r)
      throw `Field with ID ${t} not found`;
    return r.value;
  }
  static async copyOnce(t) {
    try {
      await navigator.clipboard.writeText(t), oe.onSuccess();
    } catch (r) {
      console.error("Error copying to clipboard: ", r);
    }
  }
};
let DPClipboard = oe;
se(DPClipboard, "onSuccess", () => {
  window.Alpine && window.Alpine.store("copy").toggle();
});
var global$d = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof global$d < "u" && global$d, support = {
  searchParams: "URLSearchParams" in global$d,
  iterable: "Symbol" in global$d && "iterator" in Symbol,
  blob: "FileReader" in global$d && "Blob" in global$d && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in global$d,
  arrayBuffer: "ArrayBuffer" in global$d
};
function isDataView(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (support.arrayBuffer)
  var viewClasses = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], isArrayBufferView = ArrayBuffer.isView || function(e) {
    return e && viewClasses.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function normalizeName(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function normalizeValue(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function iteratorFor(e) {
  var t = {
    next: function() {
      var r = e.shift();
      return { done: r === void 0, value: r };
    }
  };
  return support.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function Headers(e) {
  this.map = {}, e instanceof Headers ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
Headers.prototype.append = function(e, t) {
  e = normalizeName(e), t = normalizeValue(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
Headers.prototype.delete = function(e) {
  delete this.map[normalizeName(e)];
};
Headers.prototype.get = function(e) {
  return e = normalizeName(e), this.has(e) ? this.map[e] : null;
};
Headers.prototype.has = function(e) {
  return this.map.hasOwnProperty(normalizeName(e));
};
Headers.prototype.set = function(e, t) {
  this.map[normalizeName(e)] = normalizeValue(t);
};
Headers.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
Headers.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), iteratorFor(e);
};
Headers.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), iteratorFor(e);
};
Headers.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), iteratorFor(e);
};
support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
function consumed(e) {
  if (e.bodyUsed)
    return Promise.reject(new TypeError("Already read"));
  e.bodyUsed = !0;
}
function fileReaderReady(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function readBlobAsArrayBuffer(e) {
  var t = new FileReader(), r = fileReaderReady(t);
  return t.readAsArrayBuffer(e), r;
}
function readBlobAsText(e) {
  var t = new FileReader(), r = fileReaderReady(t);
  return t.readAsText(e), r;
}
function readArrayBufferAsText(e) {
  for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
    r[n] = String.fromCharCode(t[n]);
  return r.join("");
}
function bufferClone(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Body() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : support.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : support.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : support.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : support.arrayBuffer && support.blob && isDataView(e) ? (this._bodyArrayBuffer = bufferClone(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || isArrayBufferView(e)) ? this._bodyArrayBuffer = bufferClone(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, support.blob && (this.blob = function() {
    var e = consumed(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }, this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = consumed(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else
      return this.blob().then(readBlobAsArrayBuffer);
  }), this.text = function() {
    var e = consumed(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return readBlobAsText(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, support.formData && (this.formData = function() {
    return this.text().then(decode);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function normalizeMethod(e) {
  var t = e.toUpperCase();
  return methods.indexOf(t) > -1 ? t : e;
}
function Request(e, t) {
  if (!(this instanceof Request))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof Request) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Headers(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Headers(t.headers)), this.method = normalizeMethod(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(r), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var n = /([?&])_=[^&]*/;
    if (n.test(this.url))
      this.url = this.url.replace(n, "$1_=" + new Date().getTime());
    else {
      var o = /\?/;
      this.url += (o.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
    }
  }
}
Request.prototype.clone = function() {
  return new Request(this, { body: this._bodyInit });
};
function decode(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var n = r.split("="), o = n.shift().replace(/\+/g, " "), a = n.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(a));
    }
  }), t;
}
function parseHeaders(e) {
  var t = new Headers(), r = e.replace(/\r?\n[\t ]+/g, " ");
  return r.split("\r").map(function(n) {
    return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n;
  }).forEach(function(n) {
    var o = n.split(":"), a = o.shift().trim();
    if (a) {
      var u = o.join(":").trim();
      t.append(a, u);
    }
  }), t;
}
Body.call(Request.prototype);
function Response(e, t) {
  if (!(this instanceof Response))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Headers(t.headers), this.url = t.url || "", this._initBody(e);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};
Response.error = function() {
  var e = new Response(null, { status: 0, statusText: "" });
  return e.type = "error", e;
};
var redirectStatuses = [301, 302, 303, 307, 308];
Response.redirect = function(e, t) {
  if (redirectStatuses.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Response(null, { status: t, headers: { location: e } });
};
var DOMException = global$d.DOMException;
try {
  new DOMException();
} catch {
  DOMException = function(t, r) {
    this.message = t, this.name = r;
    var n = Error(t);
    this.stack = n.stack;
  }, DOMException.prototype = Object.create(Error.prototype), DOMException.prototype.constructor = DOMException;
}
function fetch(e, t) {
  return new Promise(function(r, n) {
    var o = new Request(e, t);
    if (o.signal && o.signal.aborted)
      return n(new DOMException("Aborted", "AbortError"));
    var a = new XMLHttpRequest();
    function u() {
      a.abort();
    }
    a.onload = function() {
      var l = {
        status: a.status,
        statusText: a.statusText,
        headers: parseHeaders(a.getAllResponseHeaders() || "")
      };
      l.url = "responseURL" in a ? a.responseURL : l.headers.get("X-Request-URL");
      var p = "response" in a ? a.response : a.responseText;
      setTimeout(function() {
        r(new Response(p, l));
      }, 0);
    }, a.onerror = function() {
      setTimeout(function() {
        n(new TypeError("Network request failed"));
      }, 0);
    }, a.ontimeout = function() {
      setTimeout(function() {
        n(new TypeError("Network request failed"));
      }, 0);
    }, a.onabort = function() {
      setTimeout(function() {
        n(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    function c(l) {
      try {
        return l === "" && global$d.location.href ? global$d.location.href : l;
      } catch {
        return l;
      }
    }
    a.open(o.method, c(o.url), !0), o.credentials === "include" ? a.withCredentials = !0 : o.credentials === "omit" && (a.withCredentials = !1), "responseType" in a && (support.blob ? a.responseType = "blob" : support.arrayBuffer && o.headers.get("Content-Type") && o.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (a.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof Headers) ? Object.getOwnPropertyNames(t.headers).forEach(function(l) {
      a.setRequestHeader(l, normalizeValue(t.headers[l]));
    }) : o.headers.forEach(function(l, p) {
      a.setRequestHeader(p, l);
    }), o.signal && (o.signal.addEventListener("abort", u), a.onreadystatechange = function() {
      a.readyState === 4 && o.signal.removeEventListener("abort", u);
    }), a.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
fetch.polyfill = !0;
global$d.fetch || (global$d.fetch = fetch, global$d.Headers = Headers, global$d.Request = Request, global$d.Response = Response);
var flatMap$4 = { exports: {} }, check = function(e) {
  return e && e.Math == Math && e;
}, global$c = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
  return this;
}() || Function("return this")(), objectGetOwnPropertyDescriptor = {}, fails$9 = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, fails$8 = fails$9, descriptors = !fails$8(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), fails$7 = fails$9, functionBindNative = !fails$7(function() {
  var e = function() {
  }.bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), NATIVE_BIND$2 = functionBindNative, call$4 = Function.prototype.call, functionCall = NATIVE_BIND$2 ? call$4.bind(call$4) : function() {
  return call$4.apply(call$4, arguments);
}, objectPropertyIsEnumerable = {}, $propertyIsEnumerable$1 = {}.propertyIsEnumerable, getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function(t) {
  var r = getOwnPropertyDescriptor$1(this, t);
  return !!r && r.enumerable;
} : $propertyIsEnumerable$1;
var createPropertyDescriptor$2 = function(e, t) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: t
  };
}, NATIVE_BIND$1 = functionBindNative, FunctionPrototype$1 = Function.prototype, bind$2 = FunctionPrototype$1.bind, call$3 = FunctionPrototype$1.call, uncurryThis$d = NATIVE_BIND$1 && bind$2.bind(call$3, call$3), functionUncurryThis = NATIVE_BIND$1 ? function(e) {
  return e && uncurryThis$d(e);
} : function(e) {
  return e && function() {
    return call$3.apply(e, arguments);
  };
}, uncurryThis$c = functionUncurryThis, toString$1 = uncurryThis$c({}.toString), stringSlice = uncurryThis$c("".slice), classofRaw$1 = function(e) {
  return stringSlice(toString$1(e), 8, -1);
}, uncurryThis$b = functionUncurryThis, fails$6 = fails$9, classof$3 = classofRaw$1, $Object$3 = Object, split = uncurryThis$b("".split), indexedObject = fails$6(function() {
  return !$Object$3("z").propertyIsEnumerable(0);
}) ? function(e) {
  return classof$3(e) == "String" ? split(e, "") : $Object$3(e);
} : $Object$3, $TypeError$6 = TypeError, requireObjectCoercible$2 = function(e) {
  if (e == null)
    throw $TypeError$6("Can't call method on " + e);
  return e;
}, IndexedObject = indexedObject, requireObjectCoercible$1 = requireObjectCoercible$2, toIndexedObject$5 = function(e) {
  return IndexedObject(requireObjectCoercible$1(e));
}, isCallable$c = function(e) {
  return typeof e == "function";
}, isCallable$b = isCallable$c, isObject$6 = function(e) {
  return typeof e == "object" ? e !== null : isCallable$b(e);
}, global$b = global$c, isCallable$a = isCallable$c, aFunction = function(e) {
  return isCallable$a(e) ? e : void 0;
}, getBuiltIn$5 = function(e, t) {
  return arguments.length < 2 ? aFunction(global$b[e]) : global$b[e] && global$b[e][t];
}, uncurryThis$a = functionUncurryThis, objectIsPrototypeOf = uncurryThis$a({}.isPrototypeOf), getBuiltIn$4 = getBuiltIn$5, engineUserAgent = getBuiltIn$4("navigator", "userAgent") || "", global$a = global$c, userAgent = engineUserAgent, process$1 = global$a.process, Deno = global$a.Deno, versions = process$1 && process$1.versions || Deno && Deno.version, v8 = versions && versions.v8, match, version;
v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
!version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
var engineV8Version = version, V8_VERSION = engineV8Version, fails$5 = fails$9, nativeSymbol = !!Object.getOwnPropertySymbols && !fails$5(function() {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
}), NATIVE_SYMBOL$1 = nativeSymbol, useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol", getBuiltIn$3 = getBuiltIn$5, isCallable$9 = isCallable$c, isPrototypeOf = objectIsPrototypeOf, USE_SYMBOL_AS_UID$1 = useSymbolAsUid, $Object$2 = Object, isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var t = getBuiltIn$3("Symbol");
  return isCallable$9(t) && isPrototypeOf(t.prototype, $Object$2(e));
}, $String$1 = String, tryToString$1 = function(e) {
  try {
    return $String$1(e);
  } catch {
    return "Object";
  }
}, isCallable$8 = isCallable$c, tryToString = tryToString$1, $TypeError$5 = TypeError, aCallable$3 = function(e) {
  if (isCallable$8(e))
    return e;
  throw $TypeError$5(tryToString(e) + " is not a function");
}, aCallable$2 = aCallable$3, getMethod$1 = function(e, t) {
  var r = e[t];
  return r == null ? void 0 : aCallable$2(r);
}, call$2 = functionCall, isCallable$7 = isCallable$c, isObject$5 = isObject$6, $TypeError$4 = TypeError, ordinaryToPrimitive$1 = function(e, t) {
  var r, n;
  if (t === "string" && isCallable$7(r = e.toString) && !isObject$5(n = call$2(r, e)) || isCallable$7(r = e.valueOf) && !isObject$5(n = call$2(r, e)) || t !== "string" && isCallable$7(r = e.toString) && !isObject$5(n = call$2(r, e)))
    return n;
  throw $TypeError$4("Can't convert object to primitive value");
}, shared$3 = { exports: {} }, global$9 = global$c, defineProperty$2 = Object.defineProperty, defineGlobalProperty$3 = function(e, t) {
  try {
    defineProperty$2(global$9, e, { value: t, configurable: !0, writable: !0 });
  } catch {
    global$9[e] = t;
  }
  return t;
}, global$8 = global$c, defineGlobalProperty$2 = defineGlobalProperty$3, SHARED = "__core-js_shared__", store$3 = global$8[SHARED] || defineGlobalProperty$2(SHARED, {}), sharedStore = store$3, store$2 = sharedStore;
(shared$3.exports = function(e, t) {
  return store$2[e] || (store$2[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: "3.23.3",
  mode: "global",
  copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var requireObjectCoercible = requireObjectCoercible$2, $Object$1 = Object, toObject$2 = function(e) {
  return $Object$1(requireObjectCoercible(e));
}, uncurryThis$9 = functionUncurryThis, toObject$1 = toObject$2, hasOwnProperty = uncurryThis$9({}.hasOwnProperty), hasOwnProperty_1 = Object.hasOwn || function(t, r) {
  return hasOwnProperty(toObject$1(t), r);
}, uncurryThis$8 = functionUncurryThis, id = 0, postfix = Math.random(), toString = uncurryThis$8(1 .toString), uid$2 = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + toString(++id + postfix, 36);
}, global$7 = global$c, shared$2 = shared$3.exports, hasOwn$6 = hasOwnProperty_1, uid$1 = uid$2, NATIVE_SYMBOL = nativeSymbol, USE_SYMBOL_AS_UID = useSymbolAsUid, WellKnownSymbolsStore = shared$2("wks"), Symbol$1 = global$7.Symbol, symbolFor = Symbol$1 && Symbol$1.for, createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1, wellKnownSymbol$5 = function(e) {
  if (!hasOwn$6(WellKnownSymbolsStore, e) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[e] == "string")) {
    var t = "Symbol." + e;
    NATIVE_SYMBOL && hasOwn$6(Symbol$1, e) ? WellKnownSymbolsStore[e] = Symbol$1[e] : USE_SYMBOL_AS_UID && symbolFor ? WellKnownSymbolsStore[e] = symbolFor(t) : WellKnownSymbolsStore[e] = createWellKnownSymbol(t);
  }
  return WellKnownSymbolsStore[e];
}, call$1 = functionCall, isObject$4 = isObject$6, isSymbol$1 = isSymbol$2, getMethod = getMethod$1, ordinaryToPrimitive = ordinaryToPrimitive$1, wellKnownSymbol$4 = wellKnownSymbol$5, $TypeError$3 = TypeError, TO_PRIMITIVE = wellKnownSymbol$4("toPrimitive"), toPrimitive$1 = function(e, t) {
  if (!isObject$4(e) || isSymbol$1(e))
    return e;
  var r = getMethod(e, TO_PRIMITIVE), n;
  if (r) {
    if (t === void 0 && (t = "default"), n = call$1(r, e, t), !isObject$4(n) || isSymbol$1(n))
      return n;
    throw $TypeError$3("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), ordinaryToPrimitive(e, t);
}, toPrimitive = toPrimitive$1, isSymbol = isSymbol$2, toPropertyKey$2 = function(e) {
  var t = toPrimitive(e, "string");
  return isSymbol(t) ? t : t + "";
}, global$6 = global$c, isObject$3 = isObject$6, document$1 = global$6.document, EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement), documentCreateElement$1 = function(e) {
  return EXISTS$1 ? document$1.createElement(e) : {};
}, DESCRIPTORS$8 = descriptors, fails$4 = fails$9, createElement = documentCreateElement$1, ie8DomDefine = !DESCRIPTORS$8 && !fails$4(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), DESCRIPTORS$7 = descriptors, call = functionCall, propertyIsEnumerableModule = objectPropertyIsEnumerable, createPropertyDescriptor$1 = createPropertyDescriptor$2, toIndexedObject$4 = toIndexedObject$5, toPropertyKey$1 = toPropertyKey$2, hasOwn$5 = hasOwnProperty_1, IE8_DOM_DEFINE$1 = ie8DomDefine, $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function(t, r) {
  if (t = toIndexedObject$4(t), r = toPropertyKey$1(r), IE8_DOM_DEFINE$1)
    try {
      return $getOwnPropertyDescriptor$1(t, r);
    } catch {
    }
  if (hasOwn$5(t, r))
    return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, t, r), t[r]);
};
var objectDefineProperty = {}, DESCRIPTORS$6 = descriptors, fails$3 = fails$9, v8PrototypeDefineBug = DESCRIPTORS$6 && fails$3(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), isObject$2 = isObject$6, $String = String, $TypeError$2 = TypeError, anObject$4 = function(e) {
  if (isObject$2(e))
    return e;
  throw $TypeError$2($String(e) + " is not an object");
}, DESCRIPTORS$5 = descriptors, IE8_DOM_DEFINE = ie8DomDefine, V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug, anObject$3 = anObject$4, toPropertyKey = toPropertyKey$2, $TypeError$1 = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE$1 = "configurable", WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function(t, r, n) {
  if (anObject$3(t), r = toPropertyKey(r), anObject$3(n), typeof t == "function" && r === "prototype" && "value" in n && WRITABLE in n && !n[WRITABLE]) {
    var o = $getOwnPropertyDescriptor(t, r);
    o && o[WRITABLE] && (t[r] = n.value, n = {
      configurable: CONFIGURABLE$1 in n ? n[CONFIGURABLE$1] : o[CONFIGURABLE$1],
      enumerable: ENUMERABLE in n ? n[ENUMERABLE] : o[ENUMERABLE],
      writable: !1
    });
  }
  return $defineProperty(t, r, n);
} : $defineProperty : function(t, r, n) {
  if (anObject$3(t), r = toPropertyKey(r), anObject$3(n), IE8_DOM_DEFINE)
    try {
      return $defineProperty(t, r, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw $TypeError$1("Accessors not supported");
  return "value" in n && (t[r] = n.value), t;
};
var DESCRIPTORS$4 = descriptors, definePropertyModule$3 = objectDefineProperty, createPropertyDescriptor = createPropertyDescriptor$2, createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function(e, t, r) {
  return definePropertyModule$3.f(e, t, createPropertyDescriptor(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, makeBuiltIn$2 = { exports: {} }, DESCRIPTORS$3 = descriptors, hasOwn$4 = hasOwnProperty_1, FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor, EXISTS = hasOwn$4(FunctionPrototype, "name"), PROPER = EXISTS && function() {
}.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || DESCRIPTORS$3 && getDescriptor(FunctionPrototype, "name").configurable), functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
}, uncurryThis$7 = functionUncurryThis, isCallable$6 = isCallable$c, store$1 = sharedStore, functionToString = uncurryThis$7(Function.toString);
isCallable$6(store$1.inspectSource) || (store$1.inspectSource = function(e) {
  return functionToString(e);
});
var inspectSource$3 = store$1.inspectSource, global$5 = global$c, isCallable$5 = isCallable$c, inspectSource$2 = inspectSource$3, WeakMap$1 = global$5.WeakMap, nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1)), shared$1 = shared$3.exports, uid = uid$2, keys = shared$1("keys"), sharedKey$2 = function(e) {
  return keys[e] || (keys[e] = uid(e));
}, hiddenKeys$4 = {}, NATIVE_WEAK_MAP = nativeWeakMap, global$4 = global$c, uncurryThis$6 = functionUncurryThis, isObject$1 = isObject$6, createNonEnumerableProperty$1 = createNonEnumerableProperty$2, hasOwn$3 = hasOwnProperty_1, shared = sharedStore, sharedKey$1 = sharedKey$2, hiddenKeys$3 = hiddenKeys$4, OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError$1 = global$4.TypeError, WeakMap = global$4.WeakMap, set, get, has, enforce = function(e) {
  return has(e) ? get(e) : set(e, {});
}, getterFor = function(e) {
  return function(t) {
    var r;
    if (!isObject$1(t) || (r = get(t)).type !== e)
      throw TypeError$1("Incompatible receiver, " + e + " required");
    return r;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap()), wmget = uncurryThis$6(store.get), wmhas = uncurryThis$6(store.has), wmset = uncurryThis$6(store.set);
  set = function(e, t) {
    if (wmhas(store, e))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    return t.facade = e, wmset(store, e, t), t;
  }, get = function(e) {
    return wmget(store, e) || {};
  }, has = function(e) {
    return wmhas(store, e);
  };
} else {
  var STATE = sharedKey$1("state");
  hiddenKeys$3[STATE] = !0, set = function(e, t) {
    if (hasOwn$3(e, STATE))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    return t.facade = e, createNonEnumerableProperty$1(e, STATE, t), t;
  }, get = function(e) {
    return hasOwn$3(e, STATE) ? e[STATE] : {};
  }, has = function(e) {
    return hasOwn$3(e, STATE);
  };
}
var internalState = {
  set,
  get,
  has,
  enforce,
  getterFor
}, fails$2 = fails$9, isCallable$4 = isCallable$c, hasOwn$2 = hasOwnProperty_1, DESCRIPTORS$2 = descriptors, CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE, inspectSource$1 = inspectSource$3, InternalStateModule = internalState, enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, defineProperty$1 = Object.defineProperty, CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$2(function() {
  return defineProperty$1(function() {
  }, "length", { value: 8 }).length !== 8;
}), TEMPLATE = String(String).split("String"), makeBuiltIn$1 = makeBuiltIn$2.exports = function(e, t, r) {
  String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!hasOwn$2(e, "name") || CONFIGURABLE_FUNCTION_NAME && e.name !== t) && (DESCRIPTORS$2 ? defineProperty$1(e, "name", { value: t, configurable: !0 }) : e.name = t), CONFIGURABLE_LENGTH && r && hasOwn$2(r, "arity") && e.length !== r.arity && defineProperty$1(e, "length", { value: r.arity });
  try {
    r && hasOwn$2(r, "constructor") && r.constructor ? DESCRIPTORS$2 && defineProperty$1(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = enforceInternalState(e);
  return hasOwn$2(n, "source") || (n.source = TEMPLATE.join(typeof t == "string" ? t : "")), e;
};
Function.prototype.toString = makeBuiltIn$1(function() {
  return isCallable$4(this) && getInternalState(this).source || inspectSource$1(this);
}, "toString");
var isCallable$3 = isCallable$c, definePropertyModule$2 = objectDefineProperty, makeBuiltIn = makeBuiltIn$2.exports, defineGlobalProperty$1 = defineGlobalProperty$3, defineBuiltIn$1 = function(e, t, r, n) {
  n || (n = {});
  var o = n.enumerable, a = n.name !== void 0 ? n.name : t;
  if (isCallable$3(r) && makeBuiltIn(r, a, n), n.global)
    o ? e[t] = r : defineGlobalProperty$1(t, r);
  else {
    try {
      n.unsafe ? e[t] && (o = !0) : delete e[t];
    } catch {
    }
    o ? e[t] = r : definePropertyModule$2.f(e, t, {
      value: r,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, objectGetOwnPropertyNames = {}, ceil = Math.ceil, floor = Math.floor, mathTrunc = Math.trunc || function(t) {
  var r = +t;
  return (r > 0 ? floor : ceil)(r);
}, trunc = mathTrunc, toIntegerOrInfinity$2 = function(e) {
  var t = +e;
  return t !== t || t === 0 ? 0 : trunc(t);
}, toIntegerOrInfinity$1 = toIntegerOrInfinity$2, max = Math.max, min$1 = Math.min, toAbsoluteIndex$1 = function(e, t) {
  var r = toIntegerOrInfinity$1(e);
  return r < 0 ? max(r + t, 0) : min$1(r, t);
}, toIntegerOrInfinity = toIntegerOrInfinity$2, min = Math.min, toLength$1 = function(e) {
  return e > 0 ? min(toIntegerOrInfinity(e), 9007199254740991) : 0;
}, toLength = toLength$1, lengthOfArrayLike$3 = function(e) {
  return toLength(e.length);
}, toIndexedObject$3 = toIndexedObject$5, toAbsoluteIndex = toAbsoluteIndex$1, lengthOfArrayLike$2 = lengthOfArrayLike$3, createMethod$1 = function(e) {
  return function(t, r, n) {
    var o = toIndexedObject$3(t), a = lengthOfArrayLike$2(o), u = toAbsoluteIndex(n, a), c;
    if (e && r != r) {
      for (; a > u; )
        if (c = o[u++], c != c)
          return !0;
    } else
      for (; a > u; u++)
        if ((e || u in o) && o[u] === r)
          return e || u || 0;
    return !e && -1;
  };
}, arrayIncludes = {
  includes: createMethod$1(!0),
  indexOf: createMethod$1(!1)
}, uncurryThis$5 = functionUncurryThis, hasOwn$1 = hasOwnProperty_1, toIndexedObject$2 = toIndexedObject$5, indexOf = arrayIncludes.indexOf, hiddenKeys$2 = hiddenKeys$4, push$1 = uncurryThis$5([].push), objectKeysInternal = function(e, t) {
  var r = toIndexedObject$2(e), n = 0, o = [], a;
  for (a in r)
    !hasOwn$1(hiddenKeys$2, a) && hasOwn$1(r, a) && push$1(o, a);
  for (; t.length > n; )
    hasOwn$1(r, a = t[n++]) && (~indexOf(o, a) || push$1(o, a));
  return o;
}, enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], internalObjectKeys$1 = objectKeysInternal, enumBugKeys$2 = enumBugKeys$3, hiddenKeys$1 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function(t) {
  return internalObjectKeys$1(t, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$2 = getBuiltIn$5, uncurryThis$4 = functionUncurryThis, getOwnPropertyNamesModule = objectGetOwnPropertyNames, getOwnPropertySymbolsModule = objectGetOwnPropertySymbols, anObject$2 = anObject$4, concat = uncurryThis$4([].concat), ownKeys$1 = getBuiltIn$2("Reflect", "ownKeys") || function(t) {
  var r = getOwnPropertyNamesModule.f(anObject$2(t)), n = getOwnPropertySymbolsModule.f;
  return n ? concat(r, n(t)) : r;
}, hasOwn = hasOwnProperty_1, ownKeys = ownKeys$1, getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor, definePropertyModule$1 = objectDefineProperty, copyConstructorProperties$1 = function(e, t, r) {
  for (var n = ownKeys(t), o = definePropertyModule$1.f, a = getOwnPropertyDescriptorModule.f, u = 0; u < n.length; u++) {
    var c = n[u];
    !hasOwn(e, c) && !(r && hasOwn(r, c)) && o(e, c, a(t, c));
  }
}, fails$1 = fails$9, isCallable$2 = isCallable$c, replacement = /#|\.prototype\./, isForced$1 = function(e, t) {
  var r = data[normalize(e)];
  return r == POLYFILL ? !0 : r == NATIVE ? !1 : isCallable$2(t) ? fails$1(t) : !!t;
}, normalize = isForced$1.normalize = function(e) {
  return String(e).replace(replacement, ".").toLowerCase();
}, data = isForced$1.data = {}, NATIVE = isForced$1.NATIVE = "N", POLYFILL = isForced$1.POLYFILL = "P", isForced_1 = isForced$1, global$3 = global$c, getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f, createNonEnumerableProperty = createNonEnumerableProperty$2, defineBuiltIn = defineBuiltIn$1, defineGlobalProperty = defineGlobalProperty$3, copyConstructorProperties = copyConstructorProperties$1, isForced = isForced_1, _export = function(e, t) {
  var r = e.target, n = e.global, o = e.stat, a, u, c, l, p, g;
  if (n ? u = global$3 : o ? u = global$3[r] || defineGlobalProperty(r, {}) : u = (global$3[r] || {}).prototype, u)
    for (c in t) {
      if (p = t[c], e.dontCallGetSet ? (g = getOwnPropertyDescriptor(u, c), l = g && g.value) : l = u[c], a = isForced(n ? c : r + (o ? "." : "#") + c, e.forced), !a && l !== void 0) {
        if (typeof p == typeof l)
          continue;
        copyConstructorProperties(p, l);
      }
      (e.sham || l && l.sham) && createNonEnumerableProperty(p, "sham", !0), defineBuiltIn(u, c, p, e);
    }
}, classof$2 = classofRaw$1, isArray$2 = Array.isArray || function(t) {
  return classof$2(t) == "Array";
}, $TypeError = TypeError, MAX_SAFE_INTEGER = 9007199254740991, doesNotExceedSafeInteger$1 = function(e) {
  if (e > MAX_SAFE_INTEGER)
    throw $TypeError("Maximum allowed index exceeded");
  return e;
}, uncurryThis$3 = functionUncurryThis, aCallable$1 = aCallable$3, NATIVE_BIND = functionBindNative, bind$1 = uncurryThis$3(uncurryThis$3.bind), functionBindContext = function(e, t) {
  return aCallable$1(e), t === void 0 ? e : NATIVE_BIND ? bind$1(e, t) : function() {
    return e.apply(t, arguments);
  };
}, isArray$1 = isArray$2, lengthOfArrayLike$1 = lengthOfArrayLike$3, doesNotExceedSafeInteger = doesNotExceedSafeInteger$1, bind = functionBindContext, flattenIntoArray$1 = function(e, t, r, n, o, a, u, c) {
  for (var l = o, p = 0, g = u ? bind(u, c) : !1, v, _; p < n; )
    p in r && (v = g ? g(r[p], p, t) : r[p], a > 0 && isArray$1(v) ? (_ = lengthOfArrayLike$1(v), l = flattenIntoArray$1(e, t, v, _, l, a - 1) - 1) : (doesNotExceedSafeInteger(l + 1), e[l] = v), l++), p++;
  return l;
}, flattenIntoArray_1 = flattenIntoArray$1, wellKnownSymbol$3 = wellKnownSymbol$5, TO_STRING_TAG$1 = wellKnownSymbol$3("toStringTag"), test = {};
test[TO_STRING_TAG$1] = "z";
var toStringTagSupport = String(test) === "[object z]", TO_STRING_TAG_SUPPORT = toStringTagSupport, isCallable$1 = isCallable$c, classofRaw = classofRaw$1, wellKnownSymbol$2 = wellKnownSymbol$5, TO_STRING_TAG = wellKnownSymbol$2("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(function() {
  return arguments;
}()) == "Arguments", tryGet = function(e, t) {
  try {
    return e[t];
  } catch {
  }
}, classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = tryGet(t = $Object(e), TO_STRING_TAG)) == "string" ? r : CORRECT_ARGUMENTS ? classofRaw(t) : (n = classofRaw(t)) == "Object" && isCallable$1(t.callee) ? "Arguments" : n;
}, uncurryThis$2 = functionUncurryThis, fails = fails$9, isCallable = isCallable$c, classof = classof$1, getBuiltIn$1 = getBuiltIn$5, inspectSource = inspectSource$3, noop = function() {
}, empty = [], construct = getBuiltIn$1("Reflect", "construct"), constructorRegExp = /^\s*(?:class|function)\b/, exec = uncurryThis$2(constructorRegExp.exec), INCORRECT_TO_STRING = !constructorRegExp.exec(noop), isConstructorModern = function(t) {
  if (!isCallable(t))
    return !1;
  try {
    return construct(noop, empty, t), !0;
  } catch {
    return !1;
  }
}, isConstructorLegacy = function(t) {
  if (!isCallable(t))
    return !1;
  switch (classof(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(t));
  } catch {
    return !0;
  }
};
isConstructorLegacy.sham = !0;
var isConstructor$1 = !construct || fails(function() {
  var e;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    e = !0;
  }) || e;
}) ? isConstructorLegacy : isConstructorModern, isArray = isArray$2, isConstructor = isConstructor$1, isObject = isObject$6, wellKnownSymbol$1 = wellKnownSymbol$5, SPECIES = wellKnownSymbol$1("species"), $Array = Array, arraySpeciesConstructor$1 = function(e) {
  var t;
  return isArray(e) && (t = e.constructor, isConstructor(t) && (t === $Array || isArray(t.prototype)) ? t = void 0 : isObject(t) && (t = t[SPECIES], t === null && (t = void 0))), t === void 0 ? $Array : t;
}, arraySpeciesConstructor = arraySpeciesConstructor$1, arraySpeciesCreate$1 = function(e, t) {
  return new (arraySpeciesConstructor(e))(t === 0 ? 0 : t);
}, $$2 = _export, flattenIntoArray = flattenIntoArray_1, aCallable = aCallable$3, toObject = toObject$2, lengthOfArrayLike = lengthOfArrayLike$3, arraySpeciesCreate = arraySpeciesCreate$1;
$$2({ target: "Array", proto: !0 }, {
  flatMap: function(t) {
    var r = toObject(this), n = lengthOfArrayLike(r), o;
    return aCallable(t), o = arraySpeciesCreate(r, 0), o.length = flattenIntoArray(o, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), o;
  }
});
var objectDefineProperties = {}, internalObjectKeys = objectKeysInternal, enumBugKeys$1 = enumBugKeys$3, objectKeys$2 = Object.keys || function(t) {
  return internalObjectKeys(t, enumBugKeys$1);
}, DESCRIPTORS$1 = descriptors, V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug, definePropertyModule = objectDefineProperty, anObject$1 = anObject$4, toIndexedObject$1 = toIndexedObject$5, objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(t, r) {
  anObject$1(t);
  for (var n = toIndexedObject$1(r), o = objectKeys$1(r), a = o.length, u = 0, c; a > u; )
    definePropertyModule.f(t, c = o[u++], n[c]);
  return t;
};
var getBuiltIn = getBuiltIn$5, html$1 = getBuiltIn("document", "documentElement"), anObject = anObject$4, definePropertiesModule = objectDefineProperties, enumBugKeys = enumBugKeys$3, hiddenKeys = hiddenKeys$4, html = html$1, documentCreateElement = documentCreateElement$1, sharedKey = sharedKey$2, GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
}, scriptTag = function(e) {
  return LT + SCRIPT + GT + e + LT + "/" + SCRIPT + GT;
}, NullProtoObjectViaActiveX = function(e) {
  e.write(scriptTag("")), e.close();
  var t = e.parentWindow.Object;
  return e = null, t;
}, NullProtoObjectViaIFrame = function() {
  var e = documentCreateElement("iframe"), t = "java" + SCRIPT + ":", r;
  return e.style.display = "none", html.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(scriptTag("document.F=Object")), r.close(), r.F;
}, activeXDocument, NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch {
  }
  NullProtoObject = typeof document < "u" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  for (var e = enumBugKeys.length; e--; )
    delete NullProtoObject[PROTOTYPE][enumBugKeys[e]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO] = !0;
var objectCreate = Object.create || function(t, r) {
  var n;
  return t !== null ? (EmptyConstructor[PROTOTYPE] = anObject(t), n = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, n[IE_PROTO] = t) : n = NullProtoObject(), r === void 0 ? n : definePropertiesModule.f(n, r);
}, wellKnownSymbol = wellKnownSymbol$5, create = objectCreate, defineProperty = objectDefineProperty.f, UNSCOPABLES = wellKnownSymbol("unscopables"), ArrayPrototype = Array.prototype;
ArrayPrototype[UNSCOPABLES] == null && defineProperty(ArrayPrototype, UNSCOPABLES, {
  configurable: !0,
  value: create(null)
});
var addToUnscopables$1 = function(e) {
  ArrayPrototype[UNSCOPABLES][e] = !0;
}, addToUnscopables = addToUnscopables$1;
addToUnscopables("flatMap");
var global$2 = global$c, uncurryThis$1 = functionUncurryThis, entryUnbind$1 = function(e, t) {
  return uncurryThis$1(global$2[e].prototype[t]);
}, entryUnbind = entryUnbind$1, flatMap$3 = entryUnbind("Array", "flatMap"), parent$8 = flatMap$3, flatMap$2 = parent$8, parent$7 = flatMap$2, flatMap$1 = parent$7, parent$6 = flatMap$1, flatMap = parent$6;
(function(e) {
  e.exports = flatMap;
})(flatMap$4);
var values$4 = { exports: {} }, DESCRIPTORS = descriptors, uncurryThis = functionUncurryThis, objectKeys = objectKeys$2, toIndexedObject = toIndexedObject$5, $propertyIsEnumerable = objectPropertyIsEnumerable.f, propertyIsEnumerable = uncurryThis($propertyIsEnumerable), push = uncurryThis([].push), createMethod = function(e) {
  return function(t) {
    for (var r = toIndexedObject(t), n = objectKeys(r), o = n.length, a = 0, u = [], c; o > a; )
      c = n[a++], (!DESCRIPTORS || propertyIsEnumerable(r, c)) && push(u, e ? [c, r[c]] : r[c]);
    return u;
  };
}, objectToArray = {
  entries: createMethod(!0),
  values: createMethod(!1)
}, $$1 = _export, $values = objectToArray.values;
$$1({ target: "Object", stat: !0 }, {
  values: function(t) {
    return $values(t);
  }
});
var global$1 = global$c, path$2 = global$1, path$1 = path$2, values$3 = path$1.Object.values, parent$5 = values$3, values$2 = parent$5, parent$4 = values$2, values$1 = parent$4, parent$3 = values$1, values = parent$3;
(function(e) {
  e.exports = values;
})(values$4);
var entries$4 = { exports: {} }, $ = _export, $entries = objectToArray.entries;
$({ target: "Object", stat: !0 }, {
  entries: function(t) {
    return $entries(t);
  }
});
var path = path$2, entries$3 = path.Object.entries, parent$2 = entries$3, entries$2 = parent$2, parent$1 = entries$2, entries$1 = parent$1, parent = entries$1, entries = parent;
(function(e) {
  e.exports = entries;
})(entries$4);
(function(e, t) {
  e.htmx = e.htmx || t();
})(typeof self < "u" ? self : commonjsGlobal, function() {
  return function() {
    var htmx = {
      onLoad: onLoadHelper,
      process: processNode,
      on: addEventListenerImpl,
      off: removeEventListenerImpl,
      trigger: triggerEvent,
      ajax: ajaxHelper,
      find,
      findAll,
      closest,
      values: function(e, t) {
        var r = getInputValues(e, t || "post");
        return r.values;
      },
      remove: removeElement,
      addClass: addClassToElement,
      removeClass: removeClassFromElement,
      toggleClass: toggleClassOnElement,
      takeClass: takeClassForElement,
      defineExtension,
      removeExtension,
      logAll,
      logger: null,
      config: {
        historyEnabled: !0,
        historyCacheSize: 10,
        refreshOnHistoryMiss: !1,
        defaultSwapStyle: "innerHTML",
        defaultSwapDelay: 0,
        defaultSettleDelay: 20,
        includeIndicatorStyles: !0,
        indicatorClass: "htmx-indicator",
        requestClass: "htmx-request",
        addedClass: "htmx-added",
        settlingClass: "htmx-settling",
        swappingClass: "htmx-swapping",
        allowEval: !0,
        inlineScriptNonce: "",
        attributesToSettle: ["class", "style", "width", "height"],
        withCredentials: !1,
        timeout: 0,
        wsReconnectDelay: "full-jitter",
        disableSelector: "[hx-disable], [data-hx-disable]",
        useTemplateFragments: !1,
        scrollBehavior: "smooth",
        defaultFocusScroll: !1
      },
      parseInterval,
      _: internalEval,
      createEventSource: function(e) {
        return new EventSource(e, { withCredentials: !0 });
      },
      createWebSocket: function(e) {
        return new WebSocket(e, []);
      },
      version: "1.8.4"
    }, internalAPI = {
      addTriggerHandler,
      bodyContains,
      canAccessLocalStorage,
      filterValues,
      hasAttribute,
      getAttributeValue,
      getClosestMatch,
      getExpressionVars,
      getHeaders,
      getInputValues,
      getInternalData,
      getSwapSpecification,
      getTriggerSpecs,
      getTarget,
      makeFragment,
      mergeObjects,
      makeSettleInfo,
      oobSwap,
      selectAndSwap,
      settleImmediately,
      shouldCancel,
      triggerEvent,
      triggerErrorEvent,
      withExtensions
    }, VERBS = ["get", "post", "put", "delete", "patch"], VERB_SELECTOR = VERBS.map(function(e) {
      return "[hx-" + e + "], [data-hx-" + e + "]";
    }).join(", ");
    function parseInterval(e) {
      if (e != null)
        return e.slice(-2) == "ms" ? parseFloat(e.slice(0, -2)) || void 0 : e.slice(-1) == "s" ? parseFloat(e.slice(0, -1)) * 1e3 || void 0 : e.slice(-1) == "m" ? parseFloat(e.slice(0, -1)) * 1e3 * 60 || void 0 : parseFloat(e) || void 0;
    }
    function getRawAttribute(e, t) {
      return e.getAttribute && e.getAttribute(t);
    }
    function hasAttribute(e, t) {
      return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t));
    }
    function getAttributeValue(e, t) {
      return getRawAttribute(e, t) || getRawAttribute(e, "data-" + t);
    }
    function parentElt(e) {
      return e.parentElement;
    }
    function getDocument() {
      return document;
    }
    function getClosestMatch(e, t) {
      for (; e && !t(e); )
        e = parentElt(e);
      return e || null;
    }
    function getAttributeValueWithDisinheritance(e, t, r) {
      var n = getAttributeValue(t, r), o = getAttributeValue(t, "hx-disinherit");
      return e !== t && o && (o === "*" || o.split(" ").indexOf(r) >= 0) ? "unset" : n;
    }
    function getClosestAttributeValue(e, t) {
      var r = null;
      if (getClosestMatch(e, function(n) {
        return r = getAttributeValueWithDisinheritance(e, n, t);
      }), r !== "unset")
        return r;
    }
    function matches(e, t) {
      var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
      return r && r.call(e, t);
    }
    function getStartTag(e) {
      var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, r = t.exec(e);
      return r ? r[1].toLowerCase() : "";
    }
    function parseHTML(e, t) {
      for (var r = new DOMParser(), n = r.parseFromString(e, "text/html"), o = n.body; t > 0; )
        t--, o = o.firstChild;
      return o == null && (o = getDocument().createDocumentFragment()), o;
    }
    function makeFragment(e) {
      if (htmx.config.useTemplateFragments) {
        var t = parseHTML("<body><template>" + e + "</template></body>", 0);
        return t.querySelector("template").content;
      } else {
        var r = getStartTag(e);
        switch (r) {
          case "thead":
          case "tbody":
          case "tfoot":
          case "colgroup":
          case "caption":
            return parseHTML("<table>" + e + "</table>", 1);
          case "col":
            return parseHTML("<table><colgroup>" + e + "</colgroup></table>", 2);
          case "tr":
            return parseHTML("<table><tbody>" + e + "</tbody></table>", 2);
          case "td":
          case "th":
            return parseHTML("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
          case "script":
            return parseHTML("<div>" + e + "</div>", 1);
          default:
            return parseHTML(e, 0);
        }
      }
    }
    function maybeCall(e) {
      e && e();
    }
    function isType(e, t) {
      return Object.prototype.toString.call(e) === "[object " + t + "]";
    }
    function isFunction(e) {
      return isType(e, "Function");
    }
    function isRawObject(e) {
      return isType(e, "Object");
    }
    function getInternalData(e) {
      var t = "htmx-internal-data", r = e[t];
      return r || (r = e[t] = {}), r;
    }
    function toArray(e) {
      var t = [];
      if (e)
        for (var r = 0; r < e.length; r++)
          t.push(e[r]);
      return t;
    }
    function forEach(e, t) {
      if (e)
        for (var r = 0; r < e.length; r++)
          t(e[r]);
    }
    function isScrolledIntoView(e) {
      var t = e.getBoundingClientRect(), r = t.top, n = t.bottom;
      return r < window.innerHeight && n >= 0;
    }
    function bodyContains(e) {
      return e.getRootNode && e.getRootNode() instanceof ShadowRoot ? getDocument().body.contains(e.getRootNode().host) : getDocument().body.contains(e);
    }
    function splitOnWhitespace(e) {
      return e.trim().split(/\s+/);
    }
    function mergeObjects(e, t) {
      for (var r in t)
        t.hasOwnProperty(r) && (e[r] = t[r]);
      return e;
    }
    function parseJSON(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        return logError(t), null;
      }
    }
    function canAccessLocalStorage() {
      var e = "htmx:localStorageTest";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch {
        return !1;
      }
    }
    function internalEval(str) {
      return maybeEval(getDocument().body, function() {
        return eval(str);
      });
    }
    function onLoadHelper(e) {
      var t = htmx.on("htmx:load", function(r) {
        e(r.detail.elt);
      });
      return t;
    }
    function logAll() {
      htmx.logger = function(e, t, r) {
        console && console.log(t, e, r);
      };
    }
    function find(e, t) {
      return t ? e.querySelector(t) : find(getDocument(), e);
    }
    function findAll(e, t) {
      return t ? e.querySelectorAll(t) : findAll(getDocument(), e);
    }
    function removeElement(e, t) {
      e = resolveTarget(e), t ? setTimeout(function() {
        removeElement(e);
      }, t) : e.parentElement.removeChild(e);
    }
    function addClassToElement(e, t, r) {
      e = resolveTarget(e), r ? setTimeout(function() {
        addClassToElement(e, t);
      }, r) : e.classList && e.classList.add(t);
    }
    function removeClassFromElement(e, t, r) {
      e = resolveTarget(e), r ? setTimeout(function() {
        removeClassFromElement(e, t);
      }, r) : e.classList && (e.classList.remove(t), e.classList.length === 0 && e.removeAttribute("class"));
    }
    function toggleClassOnElement(e, t) {
      e = resolveTarget(e), e.classList.toggle(t);
    }
    function takeClassForElement(e, t) {
      e = resolveTarget(e), forEach(e.parentElement.children, function(r) {
        removeClassFromElement(r, t);
      }), addClassToElement(e, t);
    }
    function closest(e, t) {
      if (e = resolveTarget(e), e.closest)
        return e.closest(t);
      do
        if (e == null || matches(e, t))
          return e;
      while (e = e && parentElt(e));
    }
    function querySelectorAllExt(e, t) {
      return t.indexOf("closest ") === 0 ? [closest(e, t.substr(8))] : t.indexOf("find ") === 0 ? [find(e, t.substr(5))] : t.indexOf("next ") === 0 ? [scanForwardQuery(e, t.substr(5))] : t.indexOf("previous ") === 0 ? [scanBackwardsQuery(e, t.substr(9))] : t === "document" ? [document] : t === "window" ? [window] : getDocument().querySelectorAll(t);
    }
    var scanForwardQuery = function(e, t) {
      for (var r = getDocument().querySelectorAll(t), n = 0; n < r.length; n++) {
        var o = r[n];
        if (o.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING)
          return o;
      }
    }, scanBackwardsQuery = function(e, t) {
      for (var r = getDocument().querySelectorAll(t), n = r.length - 1; n >= 0; n--) {
        var o = r[n];
        if (o.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING)
          return o;
      }
    };
    function querySelectorExt(e, t) {
      return t ? querySelectorAllExt(e, t)[0] : querySelectorAllExt(getDocument().body, e)[0];
    }
    function resolveTarget(e) {
      return isType(e, "String") ? find(e) : e;
    }
    function processEventArgs(e, t, r) {
      return isFunction(t) ? {
        target: getDocument().body,
        event: e,
        listener: t
      } : {
        target: resolveTarget(e),
        event: t,
        listener: r
      };
    }
    function addEventListenerImpl(e, t, r) {
      ready(function() {
        var o = processEventArgs(e, t, r);
        o.target.addEventListener(o.event, o.listener);
      });
      var n = isFunction(t);
      return n ? t : r;
    }
    function removeEventListenerImpl(e, t, r) {
      return ready(function() {
        var n = processEventArgs(e, t, r);
        n.target.removeEventListener(n.event, n.listener);
      }), isFunction(t) ? t : r;
    }
    var DUMMY_ELT = getDocument().createElement("output");
    function findAttributeTargets(e, t) {
      var r = getClosestAttributeValue(e, t);
      if (r) {
        if (r === "this")
          return [findThisElement(e, t)];
        var n = querySelectorAllExt(e, r);
        return n.length === 0 ? (logError('The selector "' + r + '" on ' + t + " returned no matches!"), [DUMMY_ELT]) : n;
      }
    }
    function findThisElement(e, t) {
      return getClosestMatch(e, function(r) {
        return getAttributeValue(r, t) != null;
      });
    }
    function getTarget(e) {
      var t = getClosestAttributeValue(e, "hx-target");
      if (t)
        return t === "this" ? findThisElement(e, "hx-target") : querySelectorExt(e, t);
      var r = getInternalData(e);
      return r.boosted ? getDocument().body : e;
    }
    function shouldSettleAttribute(e) {
      for (var t = htmx.config.attributesToSettle, r = 0; r < t.length; r++)
        if (e === t[r])
          return !0;
      return !1;
    }
    function cloneAttributes(e, t) {
      forEach(e.attributes, function(r) {
        !t.hasAttribute(r.name) && shouldSettleAttribute(r.name) && e.removeAttribute(r.name);
      }), forEach(t.attributes, function(r) {
        shouldSettleAttribute(r.name) && e.setAttribute(r.name, r.value);
      });
    }
    function isInlineSwap(e, t) {
      for (var r = getExtensions(t), n = 0; n < r.length; n++) {
        var o = r[n];
        try {
          if (o.isInlineSwap(e))
            return !0;
        } catch (a) {
          logError(a);
        }
      }
      return e === "outerHTML";
    }
    function oobSwap(e, t, r) {
      var n = "#" + t.id, o = "outerHTML";
      e === "true" || (e.indexOf(":") > 0 ? (o = e.substr(0, e.indexOf(":")), n = e.substr(e.indexOf(":") + 1, e.length)) : o = e);
      var a = getDocument().querySelectorAll(n);
      return a ? (forEach(
        a,
        function(u) {
          var c, l = t.cloneNode(!0);
          c = getDocument().createDocumentFragment(), c.appendChild(l), isInlineSwap(o, u) || (c = l);
          var p = { shouldSwap: !0, target: u, fragment: c };
          !triggerEvent(u, "htmx:oobBeforeSwap", p) || (u = p.target, p.shouldSwap && swap(o, u, u, c, r), forEach(r.elts, function(g) {
            triggerEvent(g, "htmx:oobAfterSwap", p);
          }));
        }
      ), t.parentNode.removeChild(t)) : (t.parentNode.removeChild(t), triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: t })), e;
    }
    function handleOutOfBandSwaps(e, t, r) {
      var n = getClosestAttributeValue(e, "hx-select-oob");
      if (n) {
        var o = n.split(",");
        for (let p = 0; p < o.length; p++) {
          var a = o[p].split(":", 2), u = a[0];
          u.indexOf("#") === 0 && (u = u.substring(1));
          var c = a[1] || "true", l = t.querySelector("#" + u);
          l && oobSwap(c, l, r);
        }
      }
      forEach(findAll(t, "[hx-swap-oob], [data-hx-swap-oob]"), function(p) {
        var g = getAttributeValue(p, "hx-swap-oob");
        g != null && oobSwap(g, p, r);
      });
    }
    function handlePreservedElements(e) {
      forEach(findAll(e, "[hx-preserve], [data-hx-preserve]"), function(t) {
        var r = getAttributeValue(t, "id"), n = getDocument().getElementById(r);
        n != null && t.parentNode.replaceChild(n, t);
      });
    }
    function handleAttributes(e, t, r) {
      forEach(t.querySelectorAll("[id]"), function(n) {
        if (n.id && n.id.length > 0) {
          var o = e.querySelector(n.tagName + "[id='" + n.id + "']");
          if (o && o !== e) {
            var a = n.cloneNode();
            cloneAttributes(n, o), r.tasks.push(function() {
              cloneAttributes(n, a);
            });
          }
        }
      });
    }
    function makeAjaxLoadTask(e) {
      return function() {
        removeClassFromElement(e, htmx.config.addedClass), processNode(e), processScripts(e), processFocus(e), triggerEvent(e, "htmx:load");
      };
    }
    function processFocus(e) {
      var t = "[autofocus]", r = matches(e, t) ? e : e.querySelector(t);
      r != null && r.focus();
    }
    function insertNodesBefore(e, t, r, n) {
      for (handleAttributes(e, r, n); r.childNodes.length > 0; ) {
        var o = r.firstChild;
        addClassToElement(o, htmx.config.addedClass), e.insertBefore(o, t), o.nodeType !== Node.TEXT_NODE && o.nodeType !== Node.COMMENT_NODE && n.tasks.push(makeAjaxLoadTask(o));
      }
    }
    function stringHash(e, t) {
      for (var r = 0; r < e.length; )
        t = (t << 5) - t + e.charCodeAt(r++) | 0;
      return t;
    }
    function attributeHash(e) {
      for (var t = 0, r = 0; r < e.attributes.length; r++) {
        var n = e.attributes[r];
        n.value && (t = stringHash(n.name, t), t = stringHash(n.value, t));
      }
      return t;
    }
    function deInitNode(e) {
      var t = getInternalData(e);
      t.webSocket && t.webSocket.close(), t.sseEventSource && t.sseEventSource.close(), t.listenerInfos && forEach(t.listenerInfos, function(r) {
        r.on && r.on.removeEventListener(r.trigger, r.listener);
      });
    }
    function cleanUpElement(e) {
      triggerEvent(e, "htmx:beforeCleanupElement"), deInitNode(e), e.children && forEach(e.children, function(t) {
        cleanUpElement(t);
      });
    }
    function swapOuterHTML(e, t, r) {
      if (e.tagName === "BODY")
        return swapInnerHTML(e, t, r);
      var n, o = e.previousSibling;
      for (insertNodesBefore(parentElt(e), e, t, r), o == null ? n = parentElt(e).firstChild : n = o.nextSibling, getInternalData(e).replacedWith = n, r.elts = []; n && n !== e; )
        n.nodeType === Node.ELEMENT_NODE && r.elts.push(n), n = n.nextElementSibling;
      cleanUpElement(e), parentElt(e).removeChild(e);
    }
    function swapAfterBegin(e, t, r) {
      return insertNodesBefore(e, e.firstChild, t, r);
    }
    function swapBeforeBegin(e, t, r) {
      return insertNodesBefore(parentElt(e), e, t, r);
    }
    function swapBeforeEnd(e, t, r) {
      return insertNodesBefore(e, null, t, r);
    }
    function swapAfterEnd(e, t, r) {
      return insertNodesBefore(parentElt(e), e.nextSibling, t, r);
    }
    function swapDelete(e, t, r) {
      return cleanUpElement(e), parentElt(e).removeChild(e);
    }
    function swapInnerHTML(e, t, r) {
      var n = e.firstChild;
      if (insertNodesBefore(e, n, t, r), n) {
        for (; n.nextSibling; )
          cleanUpElement(n.nextSibling), e.removeChild(n.nextSibling);
        cleanUpElement(n), e.removeChild(n);
      }
    }
    function maybeSelectFromResponse(e, t) {
      var r = getClosestAttributeValue(e, "hx-select");
      if (r) {
        var n = getDocument().createDocumentFragment();
        forEach(t.querySelectorAll(r), function(o) {
          n.appendChild(o);
        }), t = n;
      }
      return t;
    }
    function swap(e, t, r, n, o) {
      switch (e) {
        case "none":
          return;
        case "outerHTML":
          swapOuterHTML(r, n, o);
          return;
        case "afterbegin":
          swapAfterBegin(r, n, o);
          return;
        case "beforebegin":
          swapBeforeBegin(r, n, o);
          return;
        case "beforeend":
          swapBeforeEnd(r, n, o);
          return;
        case "afterend":
          swapAfterEnd(r, n, o);
          return;
        case "delete":
          swapDelete(r);
          return;
        default:
          for (var a = getExtensions(t), u = 0; u < a.length; u++) {
            var c = a[u];
            try {
              var l = c.handleSwap(e, r, n, o);
              if (l) {
                if (typeof l.length < "u")
                  for (var p = 0; p < l.length; p++) {
                    var g = l[p];
                    g.nodeType !== Node.TEXT_NODE && g.nodeType !== Node.COMMENT_NODE && o.tasks.push(makeAjaxLoadTask(g));
                  }
                return;
              }
            } catch (v) {
              logError(v);
            }
          }
          e === "innerHTML" ? swapInnerHTML(r, n, o) : swap(htmx.config.defaultSwapStyle, t, r, n, o);
      }
    }
    function findTitle(e) {
      if (e.indexOf("<title") > -1) {
        var t = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, ""), r = t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
        if (r)
          return r[2];
      }
    }
    function selectAndSwap(e, t, r, n, o) {
      o.title = findTitle(n);
      var a = makeFragment(n);
      if (a)
        return handleOutOfBandSwaps(r, a, o), a = maybeSelectFromResponse(r, a), handlePreservedElements(a), swap(e, r, t, a, o);
    }
    function handleTrigger(e, t, r) {
      var n = e.getResponseHeader(t);
      if (n.indexOf("{") === 0) {
        var o = parseJSON(n);
        for (var a in o)
          if (o.hasOwnProperty(a)) {
            var u = o[a];
            isRawObject(u) || (u = { value: u }), triggerEvent(r, a, u);
          }
      } else
        triggerEvent(r, n, []);
    }
    var WHITESPACE_OR_COMMA = /[\s,]/, SYMBOL_START = /[_$a-zA-Z]/, SYMBOL_CONT = /[_$a-zA-Z0-9]/, STRINGISH_START = ['"', "'", "/"], NOT_WHITESPACE = /[^\s]/;
    function tokenizeString(e) {
      for (var t = [], r = 0; r < e.length; ) {
        if (SYMBOL_START.exec(e.charAt(r))) {
          for (var n = r; SYMBOL_CONT.exec(e.charAt(r + 1)); )
            r++;
          t.push(e.substr(n, r - n + 1));
        } else if (STRINGISH_START.indexOf(e.charAt(r)) !== -1) {
          var o = e.charAt(r), n = r;
          for (r++; r < e.length && e.charAt(r) !== o; )
            e.charAt(r) === "\\" && r++, r++;
          t.push(e.substr(n, r - n + 1));
        } else {
          var a = e.charAt(r);
          t.push(a);
        }
        r++;
      }
      return t;
    }
    function isPossibleRelativeReference(e, t, r) {
      return SYMBOL_START.exec(e.charAt(0)) && e !== "true" && e !== "false" && e !== "this" && e !== r && t !== ".";
    }
    function maybeGenerateConditional(e, t, r) {
      if (t[0] === "[") {
        t.shift();
        for (var n = 1, o = " return (function(" + r + "){ return (", a = null; t.length > 0; ) {
          var u = t[0];
          if (u === "]") {
            if (n--, n === 0) {
              a === null && (o = o + "true"), t.shift(), o += ")})";
              try {
                var c = maybeEval(
                  e,
                  function() {
                    return Function(o)();
                  },
                  function() {
                    return !0;
                  }
                );
                return c.source = o, c;
              } catch (l) {
                return triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: l, source: o }), null;
              }
            }
          } else
            u === "[" && n++;
          isPossibleRelativeReference(u, a, r) ? o += "((" + r + "." + u + ") ? (" + r + "." + u + ") : (window." + u + "))" : o = o + u, a = t.shift();
        }
      }
    }
    function consumeUntil(e, t) {
      for (var r = ""; e.length > 0 && !e[0].match(t); )
        r += e.shift();
      return r;
    }
    var INPUT_SELECTOR = "input, textarea, select";
    function getTriggerSpecs(e) {
      var t = getAttributeValue(e, "hx-trigger"), r = [];
      if (t) {
        var n = tokenizeString(t);
        do {
          consumeUntil(n, NOT_WHITESPACE);
          var o = n.length, a = consumeUntil(n, /[,\[\s]/);
          if (a !== "")
            if (a === "every") {
              var u = { trigger: "every" };
              consumeUntil(n, NOT_WHITESPACE), u.pollInterval = parseInterval(consumeUntil(n, /[,\[\s]/)), consumeUntil(n, NOT_WHITESPACE);
              var c = maybeGenerateConditional(e, n, "event");
              c && (u.eventFilter = c), r.push(u);
            } else if (a.indexOf("sse:") === 0)
              r.push({ trigger: "sse", sseEvent: a.substr(4) });
            else {
              var l = { trigger: a }, c = maybeGenerateConditional(e, n, "event");
              for (c && (l.eventFilter = c); n.length > 0 && n[0] !== ","; ) {
                consumeUntil(n, NOT_WHITESPACE);
                var p = n.shift();
                if (p === "changed")
                  l.changed = !0;
                else if (p === "once")
                  l.once = !0;
                else if (p === "consume")
                  l.consume = !0;
                else if (p === "delay" && n[0] === ":")
                  n.shift(), l.delay = parseInterval(consumeUntil(n, WHITESPACE_OR_COMMA));
                else if (p === "from" && n[0] === ":") {
                  n.shift();
                  var g = consumeUntil(n, WHITESPACE_OR_COMMA);
                  (g === "closest" || g === "find" || g === "next" || g === "previous") && (n.shift(), g += " " + consumeUntil(
                    n,
                    WHITESPACE_OR_COMMA
                  )), l.from = g;
                } else
                  p === "target" && n[0] === ":" ? (n.shift(), l.target = consumeUntil(n, WHITESPACE_OR_COMMA)) : p === "throttle" && n[0] === ":" ? (n.shift(), l.throttle = parseInterval(consumeUntil(n, WHITESPACE_OR_COMMA))) : p === "queue" && n[0] === ":" ? (n.shift(), l.queue = consumeUntil(n, WHITESPACE_OR_COMMA)) : (p === "root" || p === "threshold") && n[0] === ":" ? (n.shift(), l[p] = consumeUntil(n, WHITESPACE_OR_COMMA)) : triggerErrorEvent(e, "htmx:syntax:error", { token: n.shift() });
              }
              r.push(l);
            }
          n.length === o && triggerErrorEvent(e, "htmx:syntax:error", { token: n.shift() }), consumeUntil(n, NOT_WHITESPACE);
        } while (n[0] === "," && n.shift());
      }
      return r.length > 0 ? r : matches(e, "form") ? [{ trigger: "submit" }] : matches(e, 'input[type="button"]') ? [{ trigger: "click" }] : matches(e, INPUT_SELECTOR) ? [{ trigger: "change" }] : [{ trigger: "click" }];
    }
    function cancelPolling(e) {
      getInternalData(e).cancelled = !0;
    }
    function processPolling(e, t, r) {
      var n = getInternalData(e);
      n.timeout = setTimeout(function() {
        bodyContains(e) && n.cancelled !== !0 && (maybeFilterEvent(r, makeEvent("hx:poll:trigger", { triggerSpec: r, target: e })) || t(e), processPolling(e, t, r));
      }, r.pollInterval);
    }
    function isLocalLink(e) {
      return location.hostname === e.hostname && getRawAttribute(e, "href") && getRawAttribute(e, "href").indexOf("#") !== 0;
    }
    function boostElement(e, t, r) {
      if (e.tagName === "A" && isLocalLink(e) && (e.target === "" || e.target === "_self") || e.tagName === "FORM") {
        t.boosted = !0;
        var n, o;
        if (e.tagName === "A")
          n = "get", o = getRawAttribute(e, "href");
        else {
          var a = getRawAttribute(e, "method");
          n = a ? a.toLowerCase() : "get", o = getRawAttribute(e, "action");
        }
        r.forEach(function(u) {
          addEventListener(e, function(c) {
            issueAjaxRequest(n, o, e, c);
          }, t, u, !0);
        });
      }
    }
    function shouldCancel(e, t) {
      return !!((e.type === "submit" || e.type === "click") && (t.tagName === "FORM" || matches(t, 'input[type="submit"], button') && closest(t, "form") !== null || t.tagName === "A" && t.href && (t.getAttribute("href") === "#" || t.getAttribute("href").indexOf("#") !== 0)));
    }
    function ignoreBoostedAnchorCtrlClick(e, t) {
      return getInternalData(e).boosted && e.tagName === "A" && t.type === "click" && (t.ctrlKey || t.metaKey);
    }
    function maybeFilterEvent(e, t) {
      var r = e.eventFilter;
      if (r)
        try {
          return r(t) !== !0;
        } catch (n) {
          return triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: n, source: r.source }), !0;
        }
      return !1;
    }
    function addEventListener(e, t, r, n, o) {
      var a;
      n.from ? a = querySelectorAllExt(e, n.from) : a = [e], forEach(a, function(u) {
        var c = function(l) {
          if (!bodyContains(e)) {
            u.removeEventListener(n.trigger, c);
            return;
          }
          if (!ignoreBoostedAnchorCtrlClick(e, l) && ((o || shouldCancel(l, e)) && l.preventDefault(), !maybeFilterEvent(n, l))) {
            var p = getInternalData(l);
            p.triggerSpec = n, p.handledFor == null && (p.handledFor = []);
            var g = getInternalData(e);
            if (p.handledFor.indexOf(e) < 0) {
              if (p.handledFor.push(e), n.consume && l.stopPropagation(), n.target && l.target && !matches(l.target, n.target))
                return;
              if (n.once) {
                if (g.triggeredOnce)
                  return;
                g.triggeredOnce = !0;
              }
              if (n.changed) {
                if (g.lastValue === e.value)
                  return;
                g.lastValue = e.value;
              }
              if (g.delayed && clearTimeout(g.delayed), g.throttle)
                return;
              n.throttle ? g.throttle || (t(e, l), g.throttle = setTimeout(function() {
                g.throttle = null;
              }, n.throttle)) : n.delay ? g.delayed = setTimeout(function() {
                t(e, l);
              }, n.delay) : t(e, l);
            }
          }
        };
        r.listenerInfos == null && (r.listenerInfos = []), r.listenerInfos.push({
          trigger: n.trigger,
          listener: c,
          on: u
        }), u.addEventListener(n.trigger, c);
      });
    }
    var windowIsScrolling = !1, scrollHandler = null;
    function initScrollHandler() {
      scrollHandler || (scrollHandler = function() {
        windowIsScrolling = !0;
      }, window.addEventListener("scroll", scrollHandler), setInterval(function() {
        windowIsScrolling && (windowIsScrolling = !1, forEach(getDocument().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) {
          maybeReveal(e);
        }));
      }, 200));
    }
    function maybeReveal(e) {
      if (!hasAttribute(e, "data-hx-revealed") && isScrolledIntoView(e)) {
        e.setAttribute("data-hx-revealed", "true");
        var t = getInternalData(e);
        t.initHash ? triggerEvent(e, "revealed") : e.addEventListener("htmx:afterProcessNode", function(r) {
          triggerEvent(e, "revealed");
        }, { once: !0 });
      }
    }
    function processWebSocketInfo(e, t, r) {
      for (var n = splitOnWhitespace(r), o = 0; o < n.length; o++) {
        var a = n[o].split(/:(.+)/);
        a[0] === "connect" && ensureWebSocket(e, a[1], 0), a[0] === "send" && processWebSocketSend(e);
      }
    }
    function ensureWebSocket(e, t, r) {
      if (!!bodyContains(e)) {
        if (t.indexOf("/") == 0) {
          var n = location.hostname + (location.port ? ":" + location.port : "");
          location.protocol == "https:" ? t = "wss://" + n + t : location.protocol == "http:" && (t = "ws://" + n + t);
        }
        var o = htmx.createWebSocket(t);
        o.onerror = function(a) {
          triggerErrorEvent(e, "htmx:wsError", { error: a, socket: o }), maybeCloseWebSocketSource(e);
        }, o.onclose = function(a) {
          if ([1006, 1012, 1013].indexOf(a.code) >= 0) {
            var u = getWebSocketReconnectDelay(r);
            setTimeout(function() {
              ensureWebSocket(e, t, r + 1);
            }, u);
          }
        }, o.onopen = function(a) {
          r = 0;
        }, getInternalData(e).webSocket = o, o.addEventListener("message", function(a) {
          if (!maybeCloseWebSocketSource(e)) {
            var u = a.data;
            withExtensions(e, function(_) {
              u = _.transformResponse(u, null, e);
            });
            for (var c = makeSettleInfo(e), l = makeFragment(u), p = toArray(l.children), g = 0; g < p.length; g++) {
              var v = p[g];
              oobSwap(getAttributeValue(v, "hx-swap-oob") || "true", v, c);
            }
            settleImmediately(c.tasks);
          }
        });
      }
    }
    function maybeCloseWebSocketSource(e) {
      if (!bodyContains(e))
        return getInternalData(e).webSocket.close(), !0;
    }
    function processWebSocketSend(e) {
      var t = getClosestMatch(e, function(r) {
        return getInternalData(r).webSocket != null;
      });
      t ? e.addEventListener(getTriggerSpecs(e)[0].trigger, function(r) {
        var n = getInternalData(t).webSocket, o = getHeaders(e, t), a = getInputValues(e, "post"), u = a.errors, c = a.values, l = getExpressionVars(e), p = mergeObjects(c, l), g = filterValues(p, e);
        if (g.HEADERS = o, u && u.length > 0) {
          triggerEvent(e, "htmx:validation:halted", u);
          return;
        }
        n.send(JSON.stringify(g)), shouldCancel(r, e) && r.preventDefault();
      }) : triggerErrorEvent(e, "htmx:noWebSocketSourceError");
    }
    function getWebSocketReconnectDelay(e) {
      var t = htmx.config.wsReconnectDelay;
      if (typeof t == "function")
        return t(e);
      if (t === "full-jitter") {
        var r = Math.min(e, 6), n = 1e3 * Math.pow(2, r);
        return n * Math.random();
      }
      logError('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
    }
    function processSSEInfo(e, t, r) {
      for (var n = splitOnWhitespace(r), o = 0; o < n.length; o++) {
        var a = n[o].split(/:(.+)/);
        a[0] === "connect" && processSSESource(e, a[1]), a[0] === "swap" && processSSESwap(e, a[1]);
      }
    }
    function processSSESource(e, t) {
      var r = htmx.createEventSource(t);
      r.onerror = function(n) {
        triggerErrorEvent(e, "htmx:sseError", { error: n, source: r }), maybeCloseSSESource(e);
      }, getInternalData(e).sseEventSource = r;
    }
    function processSSESwap(e, t) {
      var r = getClosestMatch(e, hasEventSource);
      if (r) {
        var n = getInternalData(r).sseEventSource, o = function(a) {
          if (maybeCloseSSESource(r)) {
            n.removeEventListener(t, o);
            return;
          }
          var u = a.data;
          withExtensions(e, function(g) {
            u = g.transformResponse(u, null, e);
          });
          var c = getSwapSpecification(e), l = getTarget(e), p = makeSettleInfo(e);
          selectAndSwap(c.swapStyle, e, l, u, p), settleImmediately(p.tasks), triggerEvent(e, "htmx:sseMessage", a);
        };
        getInternalData(e).sseListener = o, n.addEventListener(t, o);
      } else
        triggerErrorEvent(e, "htmx:noSSESourceError");
    }
    function processSSETrigger(e, t, r) {
      var n = getClosestMatch(e, hasEventSource);
      if (n) {
        var o = getInternalData(n).sseEventSource, a = function() {
          maybeCloseSSESource(n) || (bodyContains(e) ? t(e) : o.removeEventListener(r, a));
        };
        getInternalData(e).sseListener = a, o.addEventListener(r, a);
      } else
        triggerErrorEvent(e, "htmx:noSSESourceError");
    }
    function maybeCloseSSESource(e) {
      if (!bodyContains(e))
        return getInternalData(e).sseEventSource.close(), !0;
    }
    function hasEventSource(e) {
      return getInternalData(e).sseEventSource != null;
    }
    function loadImmediately(e, t, r, n) {
      var o = function() {
        r.loaded || (r.loaded = !0, t(e));
      };
      n ? setTimeout(o, n) : o();
    }
    function processVerbs(e, t, r) {
      var n = !1;
      return forEach(VERBS, function(o) {
        if (hasAttribute(e, "hx-" + o)) {
          var a = getAttributeValue(e, "hx-" + o);
          n = !0, t.path = a, t.verb = o, r.forEach(function(u) {
            addTriggerHandler(e, u, t, function(c, l) {
              issueAjaxRequest(o, a, c, l);
            });
          });
        }
      }), n;
    }
    function addTriggerHandler(e, t, r, n) {
      if (t.sseEvent)
        processSSETrigger(e, n, t.sseEvent);
      else if (t.trigger === "revealed")
        initScrollHandler(), addEventListener(e, n, r, t), maybeReveal(e);
      else if (t.trigger === "intersect") {
        var o = {};
        t.root && (o.root = querySelectorExt(e, t.root)), t.threshold && (o.threshold = parseFloat(t.threshold));
        var a = new IntersectionObserver(function(u) {
          for (var c = 0; c < u.length; c++) {
            var l = u[c];
            if (l.isIntersecting) {
              triggerEvent(e, "intersect");
              break;
            }
          }
        }, o);
        a.observe(e), addEventListener(e, n, r, t);
      } else
        t.trigger === "load" ? maybeFilterEvent(t, makeEvent("load", { elt: e })) || loadImmediately(e, n, r, t.delay) : t.pollInterval ? (r.polling = !0, processPolling(e, n, t)) : addEventListener(e, n, r, t);
    }
    function evalScript(e) {
      if (e.type === "text/javascript" || e.type === "module" || e.type === "") {
        var t = getDocument().createElement("script");
        forEach(e.attributes, function(n) {
          t.setAttribute(n.name, n.value);
        }), t.textContent = e.textContent, t.async = !1, htmx.config.inlineScriptNonce && (t.nonce = htmx.config.inlineScriptNonce);
        var r = e.parentElement;
        try {
          r.insertBefore(t, e);
        } catch (n) {
          logError(n);
        } finally {
          r.removeChild(e);
        }
      }
    }
    function processScripts(e) {
      matches(e, "script") && evalScript(e), forEach(findAll(e, "script"), function(t) {
        evalScript(t);
      });
    }
    function hasChanceOfBeingBoosted() {
      return document.querySelector("[hx-boost], [data-hx-boost]");
    }
    function findElementsToProcess(e) {
      if (e.querySelectorAll) {
        var t = hasChanceOfBeingBoosted() ? ", a, form" : "", r = e.querySelectorAll(VERB_SELECTOR + t + ", [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext]");
        return r;
      } else
        return [];
    }
    function initButtonTracking(e) {
      var t = function(r) {
        if (matches(r.target, "button, input[type='submit']")) {
          var n = getInternalData(e);
          n.lastButtonClicked = r.target;
        }
      };
      e.addEventListener("click", t), e.addEventListener("focusin", t), e.addEventListener("focusout", function(r) {
        var n = getInternalData(e);
        n.lastButtonClicked = null;
      });
    }
    function initNode(e) {
      if (!(e.closest && e.closest(htmx.config.disableSelector))) {
        var t = getInternalData(e);
        if (t.initHash !== attributeHash(e)) {
          t.initHash = attributeHash(e), deInitNode(e), triggerEvent(e, "htmx:beforeProcessNode"), e.value && (t.lastValue = e.value);
          var r = getTriggerSpecs(e), n = processVerbs(e, t, r);
          !n && getClosestAttributeValue(e, "hx-boost") === "true" && boostElement(e, t, r), e.tagName === "FORM" && initButtonTracking(e);
          var o = getAttributeValue(e, "hx-sse");
          o && processSSEInfo(e, t, o);
          var a = getAttributeValue(e, "hx-ws");
          a && processWebSocketInfo(e, t, a), triggerEvent(e, "htmx:afterProcessNode");
        }
      }
    }
    function processNode(e) {
      e = resolveTarget(e), initNode(e), forEach(findElementsToProcess(e), function(t) {
        initNode(t);
      });
    }
    function kebabEventName(e) {
      return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function makeEvent(e, t) {
      var r;
      return window.CustomEvent && typeof window.CustomEvent == "function" ? r = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t }) : (r = getDocument().createEvent("CustomEvent"), r.initCustomEvent(e, !0, !0, t)), r;
    }
    function triggerErrorEvent(e, t, r) {
      triggerEvent(e, t, mergeObjects({ error: t }, r));
    }
    function ignoreEventForLogging(e) {
      return e === "htmx:afterProcessNode";
    }
    function withExtensions(e, t) {
      forEach(getExtensions(e), function(r) {
        try {
          t(r);
        } catch (n) {
          logError(n);
        }
      });
    }
    function logError(e) {
      console.error ? console.error(e) : console.log && console.log("ERROR: ", e);
    }
    function triggerEvent(e, t, r) {
      e = resolveTarget(e), r == null && (r = {}), r.elt = e;
      var n = makeEvent(t, r);
      htmx.logger && !ignoreEventForLogging(t) && htmx.logger(e, t, r), r.error && (logError(r.error), triggerEvent(e, "htmx:error", { errorInfo: r }));
      var o = e.dispatchEvent(n), a = kebabEventName(t);
      if (o && a !== t) {
        var u = makeEvent(a, n.detail);
        o = o && e.dispatchEvent(u);
      }
      return withExtensions(e, function(c) {
        o = o && c.onEvent(t, n) !== !1;
      }), o;
    }
    var currentPathForHistory = location.pathname + location.search;
    function getHistoryElement() {
      var e = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
      return e || getDocument().body;
    }
    function saveToHistoryCache(e, t, r, n) {
      if (!!canAccessLocalStorage()) {
        for (var o = parseJSON(localStorage.getItem("htmx-history-cache")) || [], a = 0; a < o.length; a++)
          if (o[a].url === e) {
            o.splice(a, 1);
            break;
          }
        var u = { url: e, content: t, title: r, scroll: n };
        for (triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: u, cache: o }), o.push(u); o.length > htmx.config.historyCacheSize; )
          o.shift();
        for (; o.length > 0; )
          try {
            localStorage.setItem("htmx-history-cache", JSON.stringify(o));
            break;
          } catch (c) {
            triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: c, cache: o }), o.shift();
          }
      }
    }
    function getCachedHistory(e) {
      if (!canAccessLocalStorage())
        return null;
      for (var t = parseJSON(localStorage.getItem("htmx-history-cache")) || [], r = 0; r < t.length; r++)
        if (t[r].url === e)
          return t[r];
      return null;
    }
    function cleanInnerHtmlForHistory(e) {
      var t = htmx.config.requestClass, r = e.cloneNode(!0);
      return forEach(findAll(r, "." + t), function(n) {
        removeClassFromElement(n, t);
      }), r.innerHTML;
    }
    function saveCurrentPageToHistory() {
      var e = getHistoryElement(), t = currentPathForHistory || location.pathname + location.search;
      triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path: t, historyElt: e }), htmx.config.historyEnabled && history.replaceState({ htmx: !0 }, getDocument().title, window.location.href), saveToHistoryCache(t, cleanInnerHtmlForHistory(e), getDocument().title, window.scrollY);
    }
    function pushUrlIntoHistory(e) {
      htmx.config.historyEnabled && history.pushState({ htmx: !0 }, "", e), currentPathForHistory = e;
    }
    function replaceUrlInHistory(e) {
      htmx.config.historyEnabled && history.replaceState({ htmx: !0 }, "", e), currentPathForHistory = e;
    }
    function settleImmediately(e) {
      forEach(e, function(t) {
        t.call();
      });
    }
    function loadHistoryFromServer(e) {
      var t = new XMLHttpRequest(), r = { path: e, xhr: t };
      triggerEvent(getDocument().body, "htmx:historyCacheMiss", r), t.open("GET", e, !0), t.setRequestHeader("HX-History-Restore-Request", "true"), t.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", r);
          var n = makeFragment(this.response);
          n = n.querySelector("[hx-history-elt],[data-hx-history-elt]") || n;
          var o = getHistoryElement(), a = makeSettleInfo(o), u = findTitle(this.response);
          if (u) {
            var c = find("title");
            c ? c.innerHTML = u : window.document.title = u;
          }
          swapInnerHTML(o, n, a), settleImmediately(a.tasks), currentPathForHistory = e, triggerEvent(getDocument().body, "htmx:historyRestore", { path: e, cacheMiss: !0, serverResponse: this.response });
        } else
          triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", r);
      }, t.send();
    }
    function restoreHistory(e) {
      saveCurrentPageToHistory(), e = e || location.pathname + location.search;
      var t = getCachedHistory(e);
      if (t) {
        var r = makeFragment(t.content), n = getHistoryElement(), o = makeSettleInfo(n);
        swapInnerHTML(n, r, o), settleImmediately(o.tasks), document.title = t.title, window.scrollTo(0, t.scroll), currentPathForHistory = e, triggerEvent(getDocument().body, "htmx:historyRestore", { path: e, item: t });
      } else
        htmx.config.refreshOnHistoryMiss ? window.location.reload(!0) : loadHistoryFromServer(e);
    }
    function addRequestIndicatorClasses(e) {
      var t = findAttributeTargets(e, "hx-indicator");
      return t == null && (t = [e]), forEach(t, function(r) {
        var n = getInternalData(r);
        n.requestCount = (n.requestCount || 0) + 1, r.classList.add.call(r.classList, htmx.config.requestClass);
      }), t;
    }
    function removeRequestIndicatorClasses(e) {
      forEach(e, function(t) {
        var r = getInternalData(t);
        r.requestCount = (r.requestCount || 0) - 1, r.requestCount === 0 && t.classList.remove.call(t.classList, htmx.config.requestClass);
      });
    }
    function haveSeenNode(e, t) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        if (n.isSameNode(t))
          return !0;
      }
      return !1;
    }
    function shouldInclude(e) {
      return e.name === "" || e.name == null || e.disabled || e.type === "button" || e.type === "submit" || e.tagName === "image" || e.tagName === "reset" || e.tagName === "file" ? !1 : e.type === "checkbox" || e.type === "radio" ? e.checked : !0;
    }
    function processInputValue(e, t, r, n, o) {
      if (!(n == null || haveSeenNode(e, n))) {
        if (e.push(n), shouldInclude(n)) {
          var a = getRawAttribute(n, "name"), u = n.value;
          if (n.multiple && (u = toArray(n.querySelectorAll("option:checked")).map(function(p) {
            return p.value;
          })), n.files && (u = toArray(n.files)), a != null && u != null) {
            var c = t[a];
            c ? Array.isArray(c) ? Array.isArray(u) ? t[a] = c.concat(u) : c.push(u) : Array.isArray(u) ? t[a] = [c].concat(u) : t[a] = [c, u] : t[a] = u;
          }
          o && validateElement(n, r);
        }
        if (matches(n, "form")) {
          var l = n.elements;
          forEach(l, function(p) {
            processInputValue(e, t, r, p, o);
          });
        }
      }
    }
    function validateElement(e, t) {
      e.willValidate && (triggerEvent(e, "htmx:validation:validate"), e.checkValidity() || (t.push({ elt: e, message: e.validationMessage, validity: e.validity }), triggerEvent(e, "htmx:validation:failed", { message: e.validationMessage, validity: e.validity })));
    }
    function getInputValues(e, t) {
      var r = [], n = {}, o = {}, a = [], u = getInternalData(e), c = matches(e, "form") && e.noValidate !== !0 || getAttributeValue(e, "hx-validate") === "true";
      if (u.lastButtonClicked && (c = c && u.lastButtonClicked.formNoValidate !== !0), t !== "get" && processInputValue(r, o, a, closest(e, "form"), c), processInputValue(r, n, a, e, c), u.lastButtonClicked) {
        var l = getRawAttribute(u.lastButtonClicked, "name");
        l && (n[l] = u.lastButtonClicked.value);
      }
      var p = findAttributeTargets(e, "hx-include");
      return forEach(p, function(g) {
        processInputValue(r, n, a, g, c), matches(g, "form") || forEach(g.querySelectorAll(INPUT_SELECTOR), function(v) {
          processInputValue(r, n, a, v, c);
        });
      }), n = mergeObjects(n, o), { errors: a, values: n };
    }
    function appendParam(e, t, r) {
      e !== "" && (e += "&"), String(r) === "[object Object]" && (r = JSON.stringify(r));
      var n = encodeURIComponent(r);
      return e += encodeURIComponent(t) + "=" + n, e;
    }
    function urlEncode(e) {
      var t = "";
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var n = e[r];
          Array.isArray(n) ? forEach(n, function(o) {
            t = appendParam(t, r, o);
          }) : t = appendParam(t, r, n);
        }
      return t;
    }
    function makeFormData(e) {
      var t = new FormData();
      for (var r in e)
        if (e.hasOwnProperty(r)) {
          var n = e[r];
          Array.isArray(n) ? forEach(n, function(o) {
            t.append(r, o);
          }) : t.append(r, n);
        }
      return t;
    }
    function getHeaders(e, t, r) {
      var n = {
        "HX-Request": "true",
        "HX-Trigger": getRawAttribute(e, "id"),
        "HX-Trigger-Name": getRawAttribute(e, "name"),
        "HX-Target": getAttributeValue(t, "id"),
        "HX-Current-URL": getDocument().location.href
      };
      return getValuesForElement(e, "hx-headers", !1, n), r !== void 0 && (n["HX-Prompt"] = r), getInternalData(e).boosted && (n["HX-Boosted"] = "true"), n;
    }
    function filterValues(e, t) {
      var r = getClosestAttributeValue(t, "hx-params");
      if (r) {
        if (r === "none")
          return {};
        if (r === "*")
          return e;
        if (r.indexOf("not ") === 0)
          return forEach(r.substr(4).split(","), function(o) {
            o = o.trim(), delete e[o];
          }), e;
        var n = {};
        return forEach(r.split(","), function(o) {
          o = o.trim(), n[o] = e[o];
        }), n;
      } else
        return e;
    }
    function isAnchorLink(e) {
      return getRawAttribute(e, "href") && getRawAttribute(e, "href").indexOf("#") >= 0;
    }
    function getSwapSpecification(e, t) {
      var r = t || getClosestAttributeValue(e, "hx-swap"), n = {
        swapStyle: getInternalData(e).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
        swapDelay: htmx.config.defaultSwapDelay,
        settleDelay: htmx.config.defaultSettleDelay
      };
      if (getInternalData(e).boosted && !isAnchorLink(e) && (n.show = "top"), r) {
        var o = splitOnWhitespace(r);
        if (o.length > 0) {
          n.swapStyle = o[0];
          for (var a = 1; a < o.length; a++) {
            var u = o[a];
            if (u.indexOf("swap:") === 0 && (n.swapDelay = parseInterval(u.substr(5))), u.indexOf("settle:") === 0 && (n.settleDelay = parseInterval(u.substr(7))), u.indexOf("scroll:") === 0) {
              var c = u.substr(7), l = c.split(":"), p = l.pop(), g = l.length > 0 ? l.join(":") : null;
              n.scroll = p, n.scrollTarget = g;
            }
            if (u.indexOf("show:") === 0) {
              var v = u.substr(5), l = v.split(":"), _ = l.pop(), g = l.length > 0 ? l.join(":") : null;
              n.show = _, n.showTarget = g;
            }
            if (u.indexOf("focus-scroll:") === 0) {
              var b = u.substr(13);
              n.focusScroll = b == "true";
            }
          }
        }
      }
      return n;
    }
    function usesFormData(e) {
      return getClosestAttributeValue(e, "hx-encoding") === "multipart/form-data" || matches(e, "form") && getRawAttribute(e, "enctype") === "multipart/form-data";
    }
    function encodeParamsForBody(e, t, r) {
      var n = null;
      return withExtensions(t, function(o) {
        n == null && (n = o.encodeParameters(e, r, t));
      }), n != null ? n : usesFormData(t) ? makeFormData(r) : urlEncode(r);
    }
    function makeSettleInfo(e) {
      return { tasks: [], elts: [e] };
    }
    function updateScrollState(e, t) {
      var r = e[0], n = e[e.length - 1];
      if (t.scroll) {
        var o = null;
        t.scrollTarget && (o = querySelectorExt(r, t.scrollTarget)), t.scroll === "top" && (r || o) && (o = o || r, o.scrollTop = 0), t.scroll === "bottom" && (n || o) && (o = o || n, o.scrollTop = o.scrollHeight);
      }
      if (t.show) {
        var o = null;
        if (t.showTarget) {
          var a = t.showTarget;
          t.showTarget === "window" && (a = "body"), o = querySelectorExt(r, a);
        }
        t.show === "top" && (r || o) && (o = o || r, o.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior })), t.show === "bottom" && (n || o) && (o = o || n, o.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior }));
      }
    }
    function getValuesForElement(e, t, r, n) {
      if (n == null && (n = {}), e == null)
        return n;
      var o = getAttributeValue(e, t);
      if (o) {
        var a = o.trim(), u = r;
        if (a === "unset")
          return null;
        a.indexOf("javascript:") === 0 ? (a = a.substr(11), u = !0) : a.indexOf("js:") === 0 && (a = a.substr(3), u = !0), a.indexOf("{") !== 0 && (a = "{" + a + "}");
        var c;
        u ? c = maybeEval(e, function() {
          return Function("return (" + a + ")")();
        }, {}) : c = parseJSON(a);
        for (var l in c)
          c.hasOwnProperty(l) && n[l] == null && (n[l] = c[l]);
      }
      return getValuesForElement(parentElt(e), t, r, n);
    }
    function maybeEval(e, t, r) {
      return htmx.config.allowEval ? t() : (triggerErrorEvent(e, "htmx:evalDisallowedError"), r);
    }
    function getHXVarsForElement(e, t) {
      return getValuesForElement(e, "hx-vars", !0, t);
    }
    function getHXValsForElement(e, t) {
      return getValuesForElement(e, "hx-vals", !1, t);
    }
    function getExpressionVars(e) {
      return mergeObjects(getHXVarsForElement(e), getHXValsForElement(e));
    }
    function safelySetHeaderValue(e, t, r) {
      if (r !== null)
        try {
          e.setRequestHeader(t, r);
        } catch {
          e.setRequestHeader(t, encodeURIComponent(r)), e.setRequestHeader(t + "-URI-AutoEncoded", "true");
        }
    }
    function getPathFromResponse(e) {
      if (e.responseURL && typeof URL < "u")
        try {
          var t = new URL(e.responseURL);
          return t.pathname + t.search;
        } catch {
          triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: e.responseURL });
        }
    }
    function hasHeader(e, t) {
      return e.getAllResponseHeaders().match(t);
    }
    function ajaxHelper(e, t, r) {
      return e = e.toLowerCase(), r ? r instanceof Element || isType(r, "String") ? issueAjaxRequest(e, t, null, null, {
        targetOverride: resolveTarget(r),
        returnPromise: !0
      }) : issueAjaxRequest(
        e,
        t,
        resolveTarget(r.source),
        r.event,
        {
          handler: r.handler,
          headers: r.headers,
          values: r.values,
          targetOverride: resolveTarget(r.target),
          swapOverride: r.swap,
          returnPromise: !0
        }
      ) : issueAjaxRequest(e, t, null, null, {
        returnPromise: !0
      });
    }
    function hierarchyForElt(e) {
      for (var t = []; e; )
        t.push(e), e = e.parentElement;
      return t;
    }
    function issueAjaxRequest(e, t, r, n, o, a) {
      var u = null, c = null;
      if (o = o != null ? o : {}, o.returnPromise && typeof Promise < "u")
        var l = new Promise(function(Z, ee) {
          u = Z, c = ee;
        });
      r == null && (r = getDocument().body);
      var p = o.handler || handleAjaxResponse;
      if (!!bodyContains(r)) {
        var g = o.targetOverride || getTarget(r);
        if (g == null || g == DUMMY_ELT) {
          triggerErrorEvent(r, "htmx:targetError", { target: getAttributeValue(r, "hx-target") });
          return;
        }
        if (!a) {
          var v = function() {
            return issueAjaxRequest(e, t, r, n, o, !0);
          }, _ = { target: g, elt: r, path: t, verb: e, triggeringEvent: n, etc: o, issueRequest: v };
          if (triggerEvent(r, "htmx:confirm", _) === !1)
            return;
        }
        var b = r, E = getInternalData(r), w = getClosestAttributeValue(r, "hx-sync"), S = null, A = !1;
        if (w) {
          var j = w.split(":"), V = j[0].trim();
          if (V === "this" ? b = findThisElement(r, "hx-sync") : b = querySelectorExt(r, V), w = (j[1] || "drop").trim(), E = getInternalData(b), w === "drop" && E.xhr && E.abortable !== !0)
            return;
          if (w === "abort") {
            if (E.xhr)
              return;
            A = !0;
          } else if (w === "replace")
            triggerEvent(b, "htmx:abort");
          else if (w.indexOf("queue") === 0) {
            var G = w.split(" ");
            S = (G[1] || "last").trim();
          }
        }
        if (E.xhr)
          if (E.abortable)
            triggerEvent(b, "htmx:abort");
          else {
            if (S == null) {
              if (n) {
                var H = getInternalData(n);
                H && H.triggerSpec && H.triggerSpec.queue && (S = H.triggerSpec.queue);
              }
              S == null && (S = "last");
            }
            E.queuedRequests == null && (E.queuedRequests = []), S === "first" && E.queuedRequests.length === 0 ? E.queuedRequests.push(function() {
              issueAjaxRequest(e, t, r, n, o);
            }) : S === "all" ? E.queuedRequests.push(function() {
              issueAjaxRequest(e, t, r, n, o);
            }) : S === "last" && (E.queuedRequests = [], E.queuedRequests.push(function() {
              issueAjaxRequest(e, t, r, n, o);
            }));
            return;
          }
        var D = new XMLHttpRequest();
        E.xhr = D, E.abortable = A;
        var F = function() {
          if (E.xhr = null, E.abortable = !1, E.queuedRequests != null && E.queuedRequests.length > 0) {
            var Z = E.queuedRequests.shift();
            Z();
          }
        }, M = getClosestAttributeValue(r, "hx-prompt");
        if (M) {
          var R = prompt(M);
          if (R === null || !triggerEvent(r, "htmx:prompt", { prompt: R, target: g }))
            return maybeCall(u), F(), l;
        }
        var Q = getClosestAttributeValue(r, "hx-confirm");
        if (Q && !confirm(Q))
          return maybeCall(u), F(), l;
        var U = getHeaders(r, g, R);
        o.headers && (U = mergeObjects(U, o.headers));
        var te = getInputValues(r, e), B = te.errors, J = te.values;
        o.values && (J = mergeObjects(J, o.values));
        var X = getExpressionVars(r), Y = mergeObjects(J, X), K = filterValues(Y, r);
        e !== "get" && !usesFormData(r) && (U["Content-Type"] = "application/x-www-form-urlencoded"), (t == null || t === "") && (t = getDocument().location.href);
        var L = getValuesForElement(r, "hx-request"), W = getInternalData(r).boosted, q = {
          boosted: W,
          parameters: K,
          unfilteredParameters: Y,
          headers: U,
          target: g,
          verb: e,
          errors: B,
          withCredentials: o.credentials || L.credentials || htmx.config.withCredentials,
          timeout: o.timeout || L.timeout || htmx.config.timeout,
          path: t,
          triggeringEvent: n
        };
        if (!triggerEvent(r, "htmx:configRequest", q))
          return maybeCall(u), F(), l;
        if (t = q.path, e = q.verb, U = q.headers, K = q.parameters, B = q.errors, B && B.length > 0)
          return triggerEvent(r, "htmx:validation:halted", q), maybeCall(u), F(), l;
        var ne = t.split("#"), P = ne[0], T = ne[1], O = null;
        if (e === "get") {
          O = P;
          var C = Object.keys(K).length !== 0;
          C && (O.indexOf("?") < 0 ? O += "?" : O += "&", O += urlEncode(K), T && (O += "#" + T)), D.open("GET", O, !0);
        } else
          D.open(e.toUpperCase(), t, !0);
        if (D.overrideMimeType("text/html"), D.withCredentials = q.withCredentials, D.timeout = q.timeout, !L.noHeaders) {
          for (var I in U)
            if (U.hasOwnProperty(I)) {
              var N = U[I];
              safelySetHeaderValue(D, I, N);
            }
        }
        var k = {
          xhr: D,
          target: g,
          requestConfig: q,
          etc: o,
          boosted: W,
          pathInfo: {
            requestPath: t,
            finalRequestPath: O || t,
            anchor: T
          }
        };
        if (D.onload = function() {
          try {
            var Z = hierarchyForElt(r);
            if (k.pathInfo.responsePath = getPathFromResponse(D), p(r, k), removeRequestIndicatorClasses(z), triggerEvent(r, "htmx:afterRequest", k), triggerEvent(r, "htmx:afterOnLoad", k), !bodyContains(r)) {
              for (var ee = null; Z.length > 0 && ee == null; ) {
                var re = Z.shift();
                bodyContains(re) && (ee = re);
              }
              ee && (triggerEvent(ee, "htmx:afterRequest", k), triggerEvent(ee, "htmx:afterOnLoad", k));
            }
            maybeCall(u), F();
          } catch (ie) {
            throw triggerErrorEvent(r, "htmx:onLoadError", mergeObjects({ error: ie }, k)), ie;
          }
        }, D.onerror = function() {
          removeRequestIndicatorClasses(z), triggerErrorEvent(r, "htmx:afterRequest", k), triggerErrorEvent(r, "htmx:sendError", k), maybeCall(c), F();
        }, D.onabort = function() {
          removeRequestIndicatorClasses(z), triggerErrorEvent(r, "htmx:afterRequest", k), triggerErrorEvent(r, "htmx:sendAbort", k), maybeCall(c), F();
        }, D.ontimeout = function() {
          removeRequestIndicatorClasses(z), triggerErrorEvent(r, "htmx:afterRequest", k), triggerErrorEvent(r, "htmx:timeout", k), maybeCall(c), F();
        }, !triggerEvent(r, "htmx:beforeRequest", k))
          return maybeCall(u), F(), l;
        var z = addRequestIndicatorClasses(r);
        return forEach(["loadstart", "loadend", "progress", "abort"], function(Z) {
          forEach([D, D.upload], function(ee) {
            ee.addEventListener(Z, function(re) {
              triggerEvent(r, "htmx:xhr:" + Z, {
                lengthComputable: re.lengthComputable,
                loaded: re.loaded,
                total: re.total
              });
            });
          });
        }), triggerEvent(r, "htmx:beforeSend", k), D.send(e === "get" ? null : encodeParamsForBody(D, r, K)), l;
      }
    }
    function determineHistoryUpdates(e, t) {
      var r = t.xhr, n = null, o = null;
      if (hasHeader(r, /HX-Push:/i) ? (n = r.getResponseHeader("HX-Push"), o = "push") : hasHeader(r, /HX-Push-Url:/i) ? (n = r.getResponseHeader("HX-Push-Url"), o = "push") : hasHeader(r, /HX-Replace-Url:/i) && (n = r.getResponseHeader("HX-Replace-Url"), o = "replace"), n)
        return n === "false" ? {} : {
          type: o,
          path: n
        };
      var a = t.pathInfo.finalRequestPath, u = t.pathInfo.responsePath, c = getClosestAttributeValue(e, "hx-push-url"), l = getClosestAttributeValue(e, "hx-replace-url"), p = getInternalData(e).boosted, g = null, v = null;
      return c ? (g = "push", v = c) : l ? (g = "replace", v = l) : p && (g = "push", v = u || a), v ? v === "false" ? {} : (v === "true" && (v = u || a), t.pathInfo.anchor && v.indexOf("#") === -1 && (v = v + "#" + t.pathInfo.anchor), {
        type: g,
        path: v
      }) : {};
    }
    function handleAjaxResponse(e, t) {
      var r = t.xhr, n = t.target, o = t.etc;
      if (!!triggerEvent(e, "htmx:beforeOnLoad", t)) {
        if (hasHeader(r, /HX-Trigger:/i) && handleTrigger(r, "HX-Trigger", e), hasHeader(r, /HX-Location:/i)) {
          saveCurrentPageToHistory();
          var a = r.getResponseHeader("HX-Location"), u;
          a.indexOf("{") === 0 && (u = parseJSON(a), a = u.path, delete u.path), ajaxHelper("GET", a, u).then(function() {
            pushUrlIntoHistory(a);
          });
          return;
        }
        if (hasHeader(r, /HX-Redirect:/i)) {
          location.href = r.getResponseHeader("HX-Redirect");
          return;
        }
        if (hasHeader(r, /HX-Refresh:/i) && r.getResponseHeader("HX-Refresh") === "true") {
          location.reload();
          return;
        }
        hasHeader(r, /HX-Retarget:/i) && (t.target = getDocument().querySelector(r.getResponseHeader("HX-Retarget")));
        var c = determineHistoryUpdates(e, t), l = r.status >= 200 && r.status < 400 && r.status !== 204, p = r.response, g = r.status >= 400, v = mergeObjects({ shouldSwap: l, serverResponse: p, isError: g }, t);
        if (!!triggerEvent(n, "htmx:beforeSwap", v)) {
          if (n = v.target, p = v.serverResponse, g = v.isError, t.failed = g, t.successful = !g, v.shouldSwap) {
            r.status === 286 && cancelPolling(e), withExtensions(e, function(w) {
              p = w.transformResponse(p, r, e);
            }), c.type && saveCurrentPageToHistory();
            var _ = o.swapOverride;
            hasHeader(r, /HX-Reswap:/i) && (_ = r.getResponseHeader("HX-Reswap"));
            var u = getSwapSpecification(e, _);
            n.classList.add(htmx.config.swappingClass);
            var b = function() {
              try {
                var w = document.activeElement, S = {};
                try {
                  S = {
                    elt: w,
                    start: w ? w.selectionStart : null,
                    end: w ? w.selectionEnd : null
                  };
                } catch {
                }
                var A = makeSettleInfo(n);
                if (selectAndSwap(u.swapStyle, n, e, p, A), S.elt && !bodyContains(S.elt) && S.elt.id) {
                  var j = document.getElementById(S.elt.id), V = { preventScroll: u.focusScroll !== void 0 ? !u.focusScroll : !htmx.config.defaultFocusScroll };
                  j && (S.start && j.setSelectionRange && j.setSelectionRange(S.start, S.end), j.focus(V));
                }
                if (n.classList.remove(htmx.config.swappingClass), forEach(A.elts, function(D) {
                  D.classList && D.classList.add(htmx.config.settlingClass), triggerEvent(D, "htmx:afterSwap", t);
                }), hasHeader(r, /HX-Trigger-After-Swap:/i)) {
                  var G = e;
                  bodyContains(e) || (G = getDocument().body), handleTrigger(r, "HX-Trigger-After-Swap", G);
                }
                var H = function() {
                  if (forEach(A.tasks, function(R) {
                    R.call();
                  }), forEach(A.elts, function(R) {
                    R.classList && R.classList.remove(htmx.config.settlingClass), triggerEvent(R, "htmx:afterSettle", t);
                  }), c.type && (c.type === "push" ? (pushUrlIntoHistory(c.path), triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: c.path })) : (replaceUrlInHistory(c.path), triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: c.path }))), t.pathInfo.anchor) {
                    var D = find("#" + t.pathInfo.anchor);
                    D && D.scrollIntoView({ block: "start", behavior: "auto" });
                  }
                  if (A.title) {
                    var F = find("title");
                    F ? F.innerHTML = A.title : window.document.title = A.title;
                  }
                  if (updateScrollState(A.elts, u), hasHeader(r, /HX-Trigger-After-Settle:/i)) {
                    var M = e;
                    bodyContains(e) || (M = getDocument().body), handleTrigger(r, "HX-Trigger-After-Settle", M);
                  }
                };
                u.settleDelay > 0 ? setTimeout(H, u.settleDelay) : H();
              } catch (D) {
                throw triggerErrorEvent(e, "htmx:swapError", t), D;
              }
            };
            u.swapDelay > 0 ? setTimeout(b, u.swapDelay) : b();
          }
          g && triggerErrorEvent(e, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + r.status + " from " + t.pathInfo.requestPath }, t));
        }
      }
    }
    var extensions = {};
    function extensionBase() {
      return {
        init: function(e) {
          return null;
        },
        onEvent: function(e, t) {
          return !0;
        },
        transformResponse: function(e, t, r) {
          return e;
        },
        isInlineSwap: function(e) {
          return !1;
        },
        handleSwap: function(e, t, r, n) {
          return !1;
        },
        encodeParameters: function(e, t, r) {
          return null;
        }
      };
    }
    function defineExtension(e, t) {
      t.init && t.init(internalAPI), extensions[e] = mergeObjects(extensionBase(), t);
    }
    function removeExtension(e) {
      delete extensions[e];
    }
    function getExtensions(e, t, r) {
      if (e == null)
        return t;
      t == null && (t = []), r == null && (r = []);
      var n = getAttributeValue(e, "hx-ext");
      return n && forEach(n.split(","), function(o) {
        if (o = o.replace(/ /g, ""), o.slice(0, 7) == "ignore:") {
          r.push(o.slice(7));
          return;
        }
        if (r.indexOf(o) < 0) {
          var a = extensions[o];
          a && t.indexOf(a) < 0 && t.push(a);
        }
      }), getExtensions(parentElt(e), t, r);
    }
    function ready(e) {
      getDocument().readyState !== "loading" ? e() : getDocument().addEventListener("DOMContentLoaded", e);
    }
    function insertIndicatorStyles() {
      htmx.config.includeIndicatorStyles !== !1 && getDocument().head.insertAdjacentHTML(
        "beforeend",
        "<style>                      ." + htmx.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + htmx.config.requestClass + " ." + htmx.config.indicatorClass + "{opacity:1}                      ." + htmx.config.requestClass + "." + htmx.config.indicatorClass + "{opacity:1}                    </style>"
      );
    }
    function getMetaConfig() {
      var e = getDocument().querySelector('meta[name="htmx-config"]');
      return e ? parseJSON(e.content) : null;
    }
    function mergeMetaConfig() {
      var e = getMetaConfig();
      e && (htmx.config = mergeObjects(htmx.config, e));
    }
    return ready(function() {
      mergeMetaConfig(), insertIndicatorStyles();
      var e = getDocument().body;
      processNode(e);
      var t = getDocument().querySelectorAll(
        "[hx-trigger='restored'],[data-hx-trigger='restored']"
      );
      e.addEventListener("htmx:abort", function(r) {
        var n = r.target, o = getInternalData(n);
        o && o.xhr && o.xhr.abort();
      }), window.onpopstate = function(r) {
        r.state && r.state.htmx && (restoreHistory(), forEach(t, function(n) {
          triggerEvent(n, "htmx:restored", {
            document: getDocument(),
            triggerEvent
          });
        }));
      }, setTimeout(function() {
        triggerEvent(e, "htmx:load", {});
      }, 0);
    }), htmx;
  }();
});
window.errorHandler = window.errorHandler || {};
export {
  DPClipboard,
  setupPostHog
};
