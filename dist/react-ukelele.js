import ue from "react";
var Mr = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function Ve() {
  if (oe)
    return $;
  oe = 1;
  var s = ue, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, F = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(h, v, R) {
    var m, I = {}, x = null, O = null;
    R !== void 0 && (x = "" + R), v.key !== void 0 && (x = "" + v.key), v.ref !== void 0 && (O = v.ref);
    for (m in v)
      S.call(v, m) && !A.hasOwnProperty(m) && (I[m] = v[m]);
    if (h && h.defaultProps)
      for (m in v = h.defaultProps, v)
        I[m] === void 0 && (I[m] = v[m]);
    return { $$typeof: u, type: h, key: x, ref: O, props: I, _owner: F.current };
  }
  return $.Fragment = d, $.jsx = y, $.jsxs = y, $;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function Ye() {
  return se || (se = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ue, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), w = Symbol.iterator, fr = "@@iterator";
    function ur(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = w && r[w] || r[fr];
      return typeof e == "function" ? e : null;
    }
    var D = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        le("error", r, t);
      }
    }
    function le(r, e, t) {
      {
        var n = D.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var f = t.map(function(a) {
          return String(a);
        });
        f.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, f);
      }
    }
    var ce = !1, de = !1, ge = !1, ve = !1, me = !1, Ar;
    Ar = Symbol.for("react.module.reference");
    function pe(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === S || r === A || me || r === F || r === R || r === m || ve || r === O || ce || de || ge || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === I || r.$$typeof === y || r.$$typeof === h || r.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Ar || r.getModuleId !== void 0));
    }
    function Ee(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Wr(r) {
      return r.displayName || "Context";
    }
    function C(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case S:
          return "Fragment";
        case d:
          return "Portal";
        case A:
          return "Profiler";
        case F:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            var e = r;
            return Wr(e) + ".Consumer";
          case y:
            var t = r;
            return Wr(t._context) + ".Provider";
          case v:
            return Ee(r, r.render, "ForwardRef");
          case I:
            var n = r.displayName || null;
            return n !== null ? n : C(r.type) || "Memo";
          case x: {
            var o = r, f = o._payload, a = o._init;
            try {
              return C(a(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, W = 0, Lr, $r, Br, Ur, Nr, Vr, Yr;
    function Gr() {
    }
    Gr.__reactDisabledLog = !0;
    function ye() {
      {
        if (W === 0) {
          Lr = console.log, $r = console.info, Br = console.warn, Ur = console.error, Nr = console.group, Vr = console.groupCollapsed, Yr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Gr,
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
        W++;
      }
    }
    function he() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, r, {
              value: Lr
            }),
            info: k({}, r, {
              value: $r
            }),
            warn: k({}, r, {
              value: Br
            }),
            error: k({}, r, {
              value: Ur
            }),
            group: k({}, r, {
              value: Nr
            }),
            groupCollapsed: k({}, r, {
              value: Vr
            }),
            groupEnd: k({}, r, {
              value: Yr
            })
          });
        }
        W < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lr = D.ReactCurrentDispatcher, cr;
    function N(r, e, t) {
      {
        if (cr === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            cr = n && n[1] || "";
          }
        return `
` + cr + r;
      }
    }
    var dr = !1, V;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Re();
    }
    function qr(r, e) {
      if (!r || dr)
        return "";
      {
        var t = V.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      dr = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = lr.current, lr.current = null, ye();
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
            } catch (T) {
              n = T;
            }
            Reflect.construct(r, [], a);
          } else {
            try {
              a.call();
            } catch (T) {
              n = T;
            }
            r.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          r();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var i = T.stack.split(`
`), E = n.stack.split(`
`), l = i.length - 1, c = E.length - 1; l >= 1 && c >= 0 && i[l] !== E[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (i[l] !== E[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || i[l] !== E[c]) {
                    var b = `
` + i[l].replace(" at new ", " at ");
                    return r.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", r.displayName)), typeof r == "function" && V.set(r, b), b;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        dr = !1, lr.current = f, he(), Error.prepareStackTrace = o;
      }
      var M = r ? r.displayName || r.name : "", ae = M ? N(M) : "";
      return typeof r == "function" && V.set(r, ae), ae;
    }
    function be(r, e, t) {
      return qr(r, !1);
    }
    function _e(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function Y(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return qr(r, _e(r));
      if (typeof r == "string")
        return N(r);
      switch (r) {
        case R:
          return N("Suspense");
        case m:
          return N("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case v:
            return be(r.render);
          case I:
            return Y(r.type, e, t);
          case x: {
            var n = r, o = n._payload, f = n._init;
            try {
              return Y(f(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Jr = {}, zr = D.ReactDebugCurrentFrame;
    function q(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        zr.setExtraStackFrame(t);
      } else
        zr.setExtraStackFrame(null);
    }
    function Ie(r, e, t, n, o) {
      {
        var f = Function.call.bind(G);
        for (var a in r)
          if (f(r, a)) {
            var i = void 0;
            try {
              if (typeof r[a] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = r[a](e, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              i = l;
            }
            i && !(i instanceof Error) && (q(o), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof i), q(null)), i instanceof Error && !(i.message in Jr) && (Jr[i.message] = !0, q(o), p("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var je = Array.isArray;
    function gr(r) {
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
        return Kr(r), !1;
      } catch {
        return !0;
      }
    }
    function Kr(r) {
      return "" + r;
    }
    function Hr(r) {
      if (Ce(r))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(r)), Kr(r);
    }
    var L = D.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zr, Qr, vr;
    vr = {};
    function Se(r) {
      if (G.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Oe(r) {
      if (G.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ke(r, e) {
      if (typeof r.ref == "string" && L.current && e && L.current.stateNode !== e) {
        var t = C(L.current.type);
        vr[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(L.current.type), r.ref), vr[t] = !0);
      }
    }
    function Fe(r, e) {
      {
        var t = function() {
          Zr || (Zr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
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
          Qr || (Qr = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
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
        var f, a = {}, i = null, E = null;
        t !== void 0 && (Hr(t), i = "" + t), Oe(e) && (Hr(e.key), i = "" + e.key), Se(e) && (E = e.ref, ke(e, o));
        for (f in e)
          G.call(e, f) && !Te.hasOwnProperty(f) && (a[f] = e[f]);
        if (r && r.defaultProps) {
          var l = r.defaultProps;
          for (f in l)
            a[f] === void 0 && (a[f] = l[f]);
        }
        if (i || E) {
          var c = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          i && Fe(a, c), E && we(a, c);
        }
        return De(r, i, E, o, n, L.current, a);
      }
    }
    var mr = D.ReactCurrentOwner, Xr = D.ReactDebugCurrentFrame;
    function P(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        Xr.setExtraStackFrame(t);
      } else
        Xr.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function Er(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function re() {
      {
        if (mr.current) {
          var r = C(mr.current.type);
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
    var ee = {};
    function Ae(r) {
      {
        var e = re();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function te(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = Ae(e);
        if (ee[t])
          return;
        ee[t] = !0;
        var n = "";
        r && r._owner && r._owner !== mr.current && (n = " It was passed a child from " + C(r._owner.type) + "."), P(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function ne(r, e) {
      {
        if (typeof r != "object")
          return;
        if (gr(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            Er(n) && te(n, e);
          }
        else if (Er(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var o = ur(r);
          if (typeof o == "function" && o !== r.entries)
            for (var f = o.call(r), a; !(a = f.next()).done; )
              Er(a.value) && te(a.value, e);
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
        else if (typeof e == "object" && (e.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === I))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = C(e);
          Ie(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !pr) {
          pr = !0;
          var o = C(e);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Le(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            P(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        r.ref !== null && (P(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function ie(r, e, t, n, o, f) {
      {
        var a = pe(r);
        if (!a) {
          var i = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = Me(o);
          E ? i += E : i += re();
          var l;
          r === null ? l = "null" : gr(r) ? l = "array" : r !== void 0 && r.$$typeof === u ? (l = "<" + (C(r.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var c = Pe(r, e, t, o, f);
        if (c == null)
          return c;
        if (a) {
          var b = e.children;
          if (b !== void 0)
            if (n)
              if (gr(b)) {
                for (var M = 0; M < b.length; M++)
                  ne(b[M], r);
                Object.freeze && Object.freeze(b);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ne(b, r);
        }
        return r === S ? Le(c) : We(c), c;
      }
    }
    function $e(r, e, t) {
      return ie(r, e, t, !0);
    }
    function Be(r, e, t) {
      return ie(r, e, t, !1);
    }
    var Ue = Be, Ne = $e;
    B.Fragment = S, B.jsx = Ue, B.jsxs = Ne;
  }()), B;
}
process.env.NODE_ENV === "production" ? Mr.exports = Ve() : Mr.exports = Ye();
var g = Mr.exports;
const _ = 50, j = 10, yr = [
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
], hr = [], Rr = [
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
], br = [
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
], _r = [
  {
    string: [1, 2, 3, 4],
    fret: 2,
    fingerId: 1
  }
], Ir = [
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
], jr = [
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
], xr = [
  {
    string: [1, 2, 3, 4],
    fret: 3,
    fingerId: 1
  }
], Cr = [
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
], Tr = [
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
], Sr = [
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
], Or = [
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
], Fr = [
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
], wr = [
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
], U = [
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
], Dr = [
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
], Pr = [
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
], fe = {
  // A
  A: yr,
  La: yr,
  "La Major": J,
  Amaj: yr,
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
  Am7: hr,
  Lam7: hr,
  "La minor 7": hr,
  //
  A7sus4: Rr,
  La7sus4: Rr,
  "La 7 sus 4": Rr,
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
  Bm: br,
  "B Minor": br,
  Sim: br,
  //
  Bm7: _r,
  "B Minor 7": _r,
  Sim7: _r,
  //
  Bb: Ir,
  "B flat": Ir,
  "Si bemol": Ir,
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
  Cm: jr,
  "C Minor": jr,
  Dom: jr,
  //
  Cm7: xr,
  "C Minor 7": xr,
  Dom7: xr,
  //
  Cadd9: Cr,
  "C add 9": Cr,
  "Do add 9": Cr,
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
  Dm: Tr,
  "D Minor": Tr,
  Rem: Tr,
  //
  Dm7: Sr,
  "D Minor 7": Sr,
  Rem7: Sr,
  //
  Dsus4: Or,
  "D sus 4": Or,
  "Re sus 4": Or,
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
  Em7: Fr,
  "E Minor 7": Fr,
  Mim7: Fr,
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
  "F#": U,
  "F sharp": U,
  "Fa#": U,
  "Fa# Major": U,
  "Fa# Maj": U,
  //
  "F#m": ar,
  "F# Minor": ar,
  "F# minor": ar,
  "Fa#m": ar,
  //
  Fm: wr,
  "F Minor": wr,
  Fam: wr,
  //
  G: or,
  Gmaj: or,
  "G Major": or,
  Sol: or,
  //
  Gm: Dr,
  "G Minor": Dr,
  Solm: Dr,
  //
  Gm7: Pr,
  "G Minor 7": Pr,
  Solm7: Pr,
  //
  G7: sr,
  Gmaj7: sr,
  "G Major 7": sr,
  Sol7: sr
};
function Ge({ stringYPosition: s, stringHeight: u, color: d }) {
  return /* @__PURE__ */ g.jsx(
    "rect",
    {
      x: j,
      y: s,
      width: j,
      height: u,
      fill: "transparent",
      stroke: d,
      strokeWidth: 1
    }
  );
}
function qe({ stringYPosition: s, width: u, color: d }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: j * 2,
        y1: s[0],
        x2: u,
        y2: s[0],
        stroke: d,
        strokeWidth: 1
      },
      "string-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: j * 2,
        y1: s[1],
        x2: u,
        y2: s[1],
        stroke: d,
        strokeWidth: 1
      },
      "string-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: j * 2,
        y1: s[2],
        x2: u,
        y2: s[2],
        stroke: d,
        strokeWidth: 1
      },
      "string-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: j * 2,
        y1: s[3],
        x2: u,
        y2: s[3],
        stroke: d,
        strokeWidth: 1
      },
      "string-4"
    )
  ] });
}
function Je({ fretXPosition: s, stringHeight: u, color: d }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[0],
        y1: _,
        x2: s[0],
        y2: u + _,
        stroke: d,
        strokeWidth: 0.5
      },
      "fret-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[1],
        y1: _,
        x2: s[1],
        y2: u + _,
        stroke: d,
        strokeWidth: 0.5
      },
      "fret-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[2],
        y1: _,
        x2: s[2],
        y2: u + _,
        stroke: d,
        strokeWidth: 0.5
      },
      "fret-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: s[3],
        y1: _,
        x2: s[3],
        y2: u + _,
        stroke: d,
        strokeWidth: 0.5
      },
      "fret-4"
    )
  ] });
}
function Ke({
  chord: s = "A",
  width: u = 300,
  height: d = 300,
  showLabel: S = !0,
  darkMode: F = !1
}) {
  if (!!!fe[s])
    return null;
  let y = u / 5 || 550, h = d / 2 || 300, v = y / 6;
  const R = F ? "white" : "black";
  let m = [
    _,
    h / 3 + _,
    h * 2 / 3 + _,
    h + _
  ], I = [
    y + j,
    y * 2 + j,
    y * 3 + j,
    y * 4 + j
  ], x = [], O;
  return O = fe[s], O.forEach(function(w) {
    w.string.forEach(function(fr, ur) {
      x.push(
        /* @__PURE__ */ g.jsx(
          "circle",
          {
            cx: y / 2 + y * (w.fret - 1) + j,
            cy: m[fr - 1],
            r: v,
            fill: R
          },
          s + "_" + w.fingerId + "_" + ur
        )
      );
    });
  }), /* @__PURE__ */ g.jsxs(
    "svg",
    {
      width: u,
      height: d,
      viewBox: `0 0 ${u} ${d}`,
      role: "img",
      "aria-label": `${s} chord diagram`,
      children: [
        /* @__PURE__ */ g.jsxs("title", { children: [
          s,
          " chord diagram"
        ] }),
        S && /* @__PURE__ */ g.jsx("text", { x: "20", y: "30", fill: R, children: s }),
        /* @__PURE__ */ g.jsx(
          Ge,
          {
            stringYPosition: m[0],
            stringHeight: h,
            color: R
          }
        ),
        /* @__PURE__ */ g.jsx(qe, { stringYPosition: m, width: u, color: R }),
        /* @__PURE__ */ g.jsx(Je, { fretXPosition: I, stringHeight: h, color: R }),
        x
      ]
    }
  );
}
export {
  Ke as default
};
