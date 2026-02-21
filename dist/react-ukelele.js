import se from "react";
var Dr = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function Ve() {
  if (ie)
    return L;
  ie = 1;
  var s = se, u = Symbol.for("react.element"), O = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, M = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(j, d, k) {
    var v, y = {}, _ = null, F = null;
    k !== void 0 && (_ = "" + k), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (v in d)
      T.call(d, v) && !E.hasOwnProperty(v) && (y[v] = d[v]);
    if (j && j.defaultProps)
      for (v in d = j.defaultProps, d)
        y[v] === void 0 && (y[v] = d[v]);
    return { $$typeof: u, type: j, key: _, ref: F, props: y, _owner: M.current };
  }
  return L.Fragment = O, L.jsx = R, L.jsxs = R, L;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function Ye() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && function() {
    var s = se, u = Symbol.for("react.element"), O = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), j = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, fe = "@@iterator";
    function ue(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = U && r[U] || r[fe];
      return typeof e == "function" ? e : null;
    }
    var w = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        le("error", r, t);
      }
    }
    function le(r, e, t) {
      {
        var n = w.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var f = t.map(function(a) {
          return String(a);
        });
        f.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, f);
      }
    }
    var ce = !1, de = !1, ge = !1, ve = !1, me = !1, Pr;
    Pr = Symbol.for("react.module.reference");
    function pe(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === T || r === E || me || r === M || r === k || r === v || ve || r === F || ce || de || ge || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === y || r.$$typeof === R || r.$$typeof === j || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Pr || r.getModuleId !== void 0));
    }
    function Ee(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Mr(r) {
      return r.displayName || "Context";
    }
    function x(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case T:
          return "Fragment";
        case O:
          return "Portal";
        case E:
          return "Profiler";
        case M:
          return "StrictMode";
        case k:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case j:
            var e = r;
            return Mr(e) + ".Consumer";
          case R:
            var t = r;
            return Mr(t._context) + ".Provider";
          case d:
            return Ee(r, r.render, "ForwardRef");
          case y:
            var n = r.displayName || null;
            return n !== null ? n : x(r.type) || "Memo";
          case _: {
            var o = r, f = o._payload, a = o._init;
            try {
              return x(a(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, Ar, Wr, Lr, $r, Br, Ur, Nr;
    function Vr() {
    }
    Vr.__reactDisabledLog = !0;
    function ye() {
      {
        if (A === 0) {
          Ar = console.log, Wr = console.info, Lr = console.warn, $r = console.error, Br = console.group, Ur = console.groupCollapsed, Nr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Vr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        A++;
      }
    }
    function he() {
      {
        if (A--, A === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, r, {
              value: Ar
            }),
            info: S({}, r, {
              value: Wr
            }),
            warn: S({}, r, {
              value: Lr
            }),
            error: S({}, r, {
              value: $r
            }),
            group: S({}, r, {
              value: Br
            }),
            groupCollapsed: S({}, r, {
              value: Ur
            }),
            groupEnd: S({}, r, {
              value: Nr
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fr = w.ReactCurrentDispatcher, ur;
    function N(r, e, t) {
      {
        if (ur === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ur = n && n[1] || "";
          }
        return `
` + ur + r;
      }
    }
    var lr = !1, V;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      V = new be();
    }
    function Yr(r, e) {
      if (!r || lr)
        return "";
      {
        var t = V.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      lr = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = fr.current, fr.current = null, ye();
      try {
        if (e) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(r, [], a);
          } else {
            try {
              a.call();
            } catch (C) {
              n = C;
            }
            r.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          r();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var i = C.stack.split(`
`), p = n.stack.split(`
`), l = i.length - 1, c = p.length - 1; l >= 1 && c >= 0 && i[l] !== p[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (i[l] !== p[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || i[l] !== p[c]) {
                    var h = `
` + i[l].replace(" at new ", " at ");
                    return r.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", r.displayName)), typeof r == "function" && V.set(r, h), h;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        lr = !1, fr.current = f, he(), Error.prepareStackTrace = o;
      }
      var P = r ? r.displayName || r.name : "", ne = P ? N(P) : "";
      return typeof r == "function" && V.set(r, ne), ne;
    }
    function Re(r, e, t) {
      return Yr(r, !1);
    }
    function _e(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function Y(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Yr(r, _e(r));
      if (typeof r == "string")
        return N(r);
      switch (r) {
        case k:
          return N("Suspense");
        case v:
          return N("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Re(r.render);
          case y:
            return Y(r.type, e, t);
          case _: {
            var n = r, o = n._payload, f = n._init;
            try {
              return Y(f(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Gr = {}, qr = w.ReactDebugCurrentFrame;
    function q(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        qr.setExtraStackFrame(t);
      } else
        qr.setExtraStackFrame(null);
    }
    function Ie(r, e, t, n, o) {
      {
        var f = Function.call.bind(G);
        for (var a in r)
          if (f(r, a)) {
            var i = void 0;
            try {
              if (typeof r[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              i = r[a](e, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              i = l;
            }
            i && !(i instanceof Error) && (q(o), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof i), q(null)), i instanceof Error && !(i.message in Gr) && (Gr[i.message] = !0, q(o), m("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var je = Array.isArray;
    function cr(r) {
      return je(r);
    }
    function xe(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Ce(r) {
      try {
        return Jr(r), !1;
      } catch {
        return !0;
      }
    }
    function Jr(r) {
      return "" + r;
    }
    function zr(r) {
      if (Ce(r))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(r)), Jr(r);
    }
    var W = w.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kr, Hr, dr;
    dr = {};
    function ke(r) {
      if (G.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Se(r) {
      if (G.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Oe(r, e) {
      if (typeof r.ref == "string" && W.current && e && W.current.stateNode !== e) {
        var t = x(W.current.type);
        dr[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(W.current.type), r.ref), dr[t] = !0);
      }
    }
    function Fe(r, e) {
      {
        var t = function() {
          Kr || (Kr = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function we(r, e) {
      {
        var t = function() {
          Hr || (Hr = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var De = function(r, e, t, n, o, f, a) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function Pe(r, e, t, n, o) {
      {
        var f, a = {}, i = null, p = null;
        t !== void 0 && (zr(t), i = "" + t), Se(e) && (zr(e.key), i = "" + e.key), ke(e) && (p = e.ref, Oe(e, o));
        for (f in e)
          G.call(e, f) && !Te.hasOwnProperty(f) && (a[f] = e[f]);
        if (r && r.defaultProps) {
          var l = r.defaultProps;
          for (f in l)
            a[f] === void 0 && (a[f] = l[f]);
        }
        if (i || p) {
          var c = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          i && Fe(a, c), p && we(a, c);
        }
        return De(r, i, p, o, n, W.current, a);
      }
    }
    var gr = w.ReactCurrentOwner, Zr = w.ReactDebugCurrentFrame;
    function D(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        Zr.setExtraStackFrame(t);
      } else
        Zr.setExtraStackFrame(null);
    }
    var vr;
    vr = !1;
    function mr(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function Qr() {
      {
        if (gr.current) {
          var r = x(gr.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Me(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var Xr = {};
    function Ae(r) {
      {
        var e = Qr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function re(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = Ae(e);
        if (Xr[t])
          return;
        Xr[t] = !0;
        var n = "";
        r && r._owner && r._owner !== gr.current && (n = " It was passed a child from " + x(r._owner.type) + "."), D(r), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function ee(r, e) {
      {
        if (typeof r != "object")
          return;
        if (cr(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            mr(n) && re(n, e);
          }
        else if (mr(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var o = ue(r);
          if (typeof o == "function" && o !== r.entries)
            for (var f = o.call(r), a; !(a = f.next()).done; )
              mr(a.value) && re(a.value, e);
        }
      }
    }
    function We(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === y))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = x(e);
          Ie(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !vr) {
          vr = !0;
          var o = x(e);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Le(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            D(r), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        r.ref !== null && (D(r), m("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function te(r, e, t, n, o, f) {
      {
        var a = pe(r);
        if (!a) {
          var i = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Me(o);
          p ? i += p : i += Qr();
          var l;
          r === null ? l = "null" : cr(r) ? l = "array" : r !== void 0 && r.$$typeof === u ? (l = "<" + (x(r.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof r, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var c = Pe(r, e, t, o, f);
        if (c == null)
          return c;
        if (a) {
          var h = e.children;
          if (h !== void 0)
            if (n)
              if (cr(h)) {
                for (var P = 0; P < h.length; P++)
                  ee(h[P], r);
                Object.freeze && Object.freeze(h);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ee(h, r);
        }
        return r === T ? Le(c) : We(c), c;
      }
    }
    function $e(r, e, t) {
      return te(r, e, t, !0);
    }
    function Be(r, e, t) {
      return te(r, e, t, !1);
    }
    var Ue = Be, Ne = $e;
    $.Fragment = T, $.jsx = Ue, $.jsxs = Ne;
  }()), $;
}
process.env.NODE_ENV === "production" ? Dr.exports = Ve() : Dr.exports = Ye();
var g = Dr.exports;
const b = 50, I = 10, pr = [
  {
    string: [3],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  }
], J = [
  {
    string: [3],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 1,
    fingerId: 2
  }
], z = [
  {
    string: [4],
    fret: 2,
    fingerId: 1
  }
], Er = [], yr = [
  {
    string: [3],
    fret: 2,
    fingerId: 2
  }
], K = [
  {
    string: [1, 2],
    fret: 2,
    fingerId: 1
  },
  {
    string: [3],
    fret: 3,
    fingerId: 2
  },
  {
    string: [4],
    fret: 4,
    fingerId: 3
  }
], hr = [
  {
    string: [1, 2, 3],
    fret: 2,
    fingerId: 1
  },
  {
    string: [4],
    fret: 4,
    fingerId: 3
  }
], H = [
  {
    string: [1, 2, 4],
    fret: 2,
    fingerId: 1
  },
  {
    string: [3],
    fret: 3,
    fingerId: 2
  }
], br = [
  {
    string: [1, 2, 3, 4],
    fret: 2,
    fingerId: 1
  }
], Rr = [
  {
    string: [1, 2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [4],
    fret: 3,
    fingerId: 3
  }
], Z = [
  {
    string: [1],
    fret: 3,
    fingerId: 1
  }
], _r = [
  {
    string: [1, 2, 3],
    fret: 3,
    fingerId: 1
  }
], Q = [
  {
    string: [1],
    fret: 2,
    fingerId: 1
  }
], Ir = [
  {
    string: [1, 2, 3, 4],
    fret: 3,
    fingerId: 1
  }
], jr = [
  {
    string: [3],
    fret: 2,
    fingerId: 1
  },
  {
    string: [1],
    fret: 3,
    fingerId: 3
  }
], X = [
  {
    string: [2],
    fret: 2,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [4],
    fret: 2,
    fingerId: 3
  }
], xr = [
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  },
  {
    string: [3],
    fret: 2,
    fingerId: 3
  }
], Cr = [
  {
    string: [1],
    fret: 3,
    fingerId: 4
  },
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 3
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  }
], rr = [
  {
    string: [2, 3, 4],
    fret: 2,
    fingerId: 1
  },
  {
    string: [1],
    fret: 3,
    fingerId: 3
  }
], Tr = [
  {
    string: [3],
    fret: 2,
    fingerId: 1
  },
  {
    string: [2],
    fret: 3,
    fingerId: 3
  }
], er = [
  {
    string: [4],
    fret: 1,
    fingerId: 1
  },
  {
    string: [1],
    fret: 2,
    fingerId: 2
  },
  {
    string: [3],
    fret: 4,
    fingerId: 4
  }
], kr = [
  {
    string: [1],
    fret: 2,
    fingerId: 1
  },
  {
    string: [2],
    fret: 3,
    fingerId: 2
  },
  {
    string: [3],
    fret: 4,
    fingerId: 4
  }
], tr = [
  {
    string: [4],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [1],
    fret: 2,
    fingerId: 3
  }
], Sr = [
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [1],
    fret: 2,
    fingerId: 3
  }
], nr = [
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  }
], Or = [
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 1,
    fingerId: 2
  },
  {
    string: [1],
    fret: 3,
    fingerId: 4
  }
], ir = [
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  },
  {
    string: [3],
    fret: 3,
    fingerId: 3
  },
  {
    string: [1],
    fret: 3,
    fingerId: 4
  }
], ar = [
  {
    string: [3],
    fret: 1,
    fingerId: 1
  },
  {
    string: [4],
    fret: 2,
    fingerId: 2
  },
  {
    string: [2],
    fret: 2,
    fingerId: 3
  }
], B = [
  {
    string: [1, 3],
    fret: 1,
    fingerId: 1
  },
  {
    string: [2],
    fret: 2,
    fingerId: 2
  },
  {
    string: [4],
    fret: 3,
    fingerId: 3
  }
], or = [
  {
    string: [1],
    fret: 2,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [2],
    fret: 3,
    fingerId: 3
  }
], Fr = [
  {
    string: [1],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [2],
    fret: 3,
    fingerId: 3
  }
], wr = [
  {
    string: [1, 2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  }
], sr = [
  {
    string: [2],
    fret: 1,
    fingerId: 1
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2
  },
  {
    string: [1],
    fret: 2,
    fingerId: 3
  }
], oe = {
  // A
  A: pr,
  La: pr,
  "La Major": J,
  Amaj: pr,
  //
  A7: J,
  Amaj7: J,
  La7: J,
  //
  "A Minor": z,
  Am: z,
  Lam: z,
  "La minor": z,
  //
  Am7: Er,
  Lam7: Er,
  "La minor 7": Er,
  //
  A7sus4: yr,
  La7sus4: yr,
  "La 7 sus 4": yr,
  //
  B: K,
  Bmaj: K,
  "B Major": K,
  Si: K,
  //
  B7: H,
  Bmaj7: H,
  "B Major 7": H,
  Si7: H,
  //
  Bm: hr,
  "B Minor": hr,
  Sim: hr,
  //
  Bm7: br,
  "B Minor 7": br,
  Sim7: br,
  //
  Bb: Rr,
  "B flat": Rr,
  "Si bemol": Rr,
  //
  C: Z,
  Cmaj: Z,
  "C Major": Z,
  Do: Z,
  //
  C7: Q,
  Cmaj7: Q,
  "C Major 7": Q,
  Do7: Q,
  //
  Cm: _r,
  "C Minor": _r,
  Dom: _r,
  //
  Cm7: Ir,
  "C Minor 7": Ir,
  Dom7: Ir,
  //
  Cadd9: jr,
  "C add 9": jr,
  "Do add 9": jr,
  //
  D: X,
  Dmaj: X,
  "D Major": X,
  Re: X,
  //
  D7: rr,
  Dmaj7: rr,
  "D Major 7": rr,
  Re7: rr,
  //
  Dm: xr,
  "D Minor": xr,
  Rem: xr,
  //
  Dm7: Cr,
  "D Minor 7": Cr,
  Rem7: Cr,
  //
  Dsus4: Tr,
  "D sus 4": Tr,
  "Re sus 4": Tr,
  //
  E: er,
  Emaj: er,
  "E Major": er,
  Mi: er,
  //
  E7: tr,
  Emaj7: tr,
  "E Major 7": tr,
  Mi7: tr,
  //
  Em: kr,
  "E Minor": kr,
  Mim: kr,
  //
  Em7: Sr,
  "E Minor 7": Sr,
  Mim7: Sr,
  //
  F: nr,
  Fmaj: nr,
  "F Major": nr,
  Fa: nr,
  //
  F7: ir,
  Fmaj7: ir,
  "F Major 7": ir,
  Fa7: ir,
  //
  "F#": B,
  "F sharp": B,
  "Fa#": B,
  "Fa# Major": B,
  "Fa# Maj": B,
  //
  "F#m": ar,
  "F# Minor": ar,
  "F# minor": ar,
  "Fa#m": ar,
  //
  Fm: Or,
  "F Minor": Or,
  Fam: Or,
  //
  G: or,
  Gmaj: or,
  "G Major": or,
  Sol: or,
  //
  Gm: Fr,
  "G Minor": Fr,
  Solm: Fr,
  //
  Gm7: wr,
  "G Minor 7": wr,
  Solm7: wr,
  //
  G7: sr,
  Gmaj7: sr,
  "G Major 7": sr,
  Sol7: sr
};
function Ge({ stringYPosition: s, stringHeight: u }) {
  return /* @__PURE__ */ g.jsx(
    "rect",
    {
      x: I,
      y: s,
      width: I,
      height: u,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 1
    }
  );
}
function qe({ stringYPosition: s, width: u }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: s[0],
        x2: u,
        y2: s[0],
        stroke: "black",
        strokeWidth: 1
      },
      "string-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: s[1],
        x2: u,
        y2: s[1],
        stroke: "black",
        strokeWidth: 1
      },
      "string-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: s[2],
        x2: u,
        y2: s[2],
        stroke: "black",
        strokeWidth: 1
      },
      "string-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: s[3],
        x2: u,
        y2: s[3],
        stroke: "black",
        strokeWidth: 1
      },
      "string-4"
    )
  ] });
}
function Je({ fretXPosition: s, stringHeight: u }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[0],
        y1: b,
        x2: s[0],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[1],
        y1: b,
        x2: s[1],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[2],
        y1: b,
        x2: s[2],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[3],
        y1: b,
        x2: s[3],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-4"
    )
  ] });
}
function Ke({
  chord: s = "A",
  width: u = 300,
  height: O = 300,
  showLabel: T = !0
}) {
  if (!!!oe[s])
    return null;
  let E = u / 5 || 550, R = O / 2 || 300, j = E / 6, d = [
    b,
    R / 3 + b,
    R * 2 / 3 + b,
    R + b
  ], k = [
    E + I,
    E * 2 + I,
    E * 3 + I,
    E * 4 + I
  ], v = [], y;
  return y = oe[s], y.forEach(function(_) {
    _.string.forEach(function(F, U) {
      v.push(
        /* @__PURE__ */ g.jsx(
          "circle",
          {
            cx: E / 2 + E * (_.fret - 1) + I,
            cy: d[F - 1],
            r: j,
            fill: "black"
          },
          s + "_" + _.fingerId + "_" + U
        )
      );
    });
  }), /* @__PURE__ */ g.jsxs(
    "svg",
    {
      width: u,
      height: O,
      id: "svgOne",
      role: "img",
      "aria-label": `${s} chord diagram`,
      children: [
        /* @__PURE__ */ g.jsxs("title", { children: [
          s,
          " chord diagram"
        ] }),
        T && /* @__PURE__ */ g.jsx("text", { x: "20", y: "30", children: s }),
        /* @__PURE__ */ g.jsx(
          Ge,
          {
            stringYPosition: d[0],
            stringHeight: R
          }
        ),
        /* @__PURE__ */ g.jsx(qe, { stringYPosition: d, width: u }),
        /* @__PURE__ */ g.jsx(Je, { fretXPosition: k, stringHeight: R }),
        v
      ]
    }
  );
}
export {
  Ke as default
};
