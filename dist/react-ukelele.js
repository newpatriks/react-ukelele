import Vr from "react";
var g = {}, Ie = {
  get exports() {
    return g;
  },
  set exports(o) {
    g = o;
  }
}, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function xe() {
  if (xr)
    return U;
  xr = 1;
  var o = Vr, u = Symbol.for("react.element"), S = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(x, d, C) {
    var v, E = {}, R = null, w = null;
    C !== void 0 && (R = "" + C), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (w = d.ref);
    for (v in d)
      k.call(d, v) && !y.hasOwnProperty(v) && (E[v] = d[v]);
    if (x && x.defaultProps)
      for (v in d = x.defaultProps, d)
        E[v] === void 0 && (E[v] = d[v]);
    return { $$typeof: u, type: x, key: R, ref: w, props: E, _owner: A.current };
  }
  return U.Fragment = S, U.jsx = _, U.jsxs = _, U;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function je() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Vr, u = Symbol.for("react.element"), S = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), N = Symbol.iterator, Yr = "@@iterator";
    function Br(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = N && r[N] || r[Yr];
      return typeof e == "function" ? e : null;
    }
    var P = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        Mr("error", r, t);
      }
    }
    function Mr(r, e, t) {
      {
        var n = P.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (e += "%s", t = t.concat([s]));
        var f = t.map(function(a) {
          return String(a);
        });
        f.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, f);
      }
    }
    var Gr = !1, qr = !1, Jr = !1, zr = !1, Kr = !1, rr;
    rr = Symbol.for("react.module.reference");
    function Hr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === k || r === y || Kr || r === A || r === C || r === v || zr || r === w || Gr || qr || Jr || typeof r == "object" && r !== null && (r.$$typeof === R || r.$$typeof === E || r.$$typeof === _ || r.$$typeof === x || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === rr || r.getModuleId !== void 0));
    }
    function Zr(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var s = e.displayName || e.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function er(r) {
      return r.displayName || "Context";
    }
    function j(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case k:
          return "Fragment";
        case S:
          return "Portal";
        case y:
          return "Profiler";
        case A:
          return "StrictMode";
        case C:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var e = r;
            return er(e) + ".Consumer";
          case _:
            var t = r;
            return er(t._context) + ".Provider";
          case d:
            return Zr(r, r.render, "ForwardRef");
          case E:
            var n = r.displayName || null;
            return n !== null ? n : j(r.type) || "Memo";
          case R: {
            var s = r, f = s._payload, a = s._init;
            try {
              return j(a(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, W = 0, tr, nr, ir, ar, or, sr, fr;
    function ur() {
    }
    ur.__reactDisabledLog = !0;
    function Qr() {
      {
        if (W === 0) {
          tr = console.log, nr = console.info, ir = console.warn, ar = console.error, or = console.group, sr = console.groupCollapsed, fr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ur,
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
    function Xr() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, r, {
              value: tr
            }),
            info: O({}, r, {
              value: nr
            }),
            warn: O({}, r, {
              value: ir
            }),
            error: O({}, r, {
              value: ar
            }),
            group: O({}, r, {
              value: or
            }),
            groupCollapsed: O({}, r, {
              value: sr
            }),
            groupEnd: O({}, r, {
              value: fr
            })
          });
        }
        W < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, J;
    function V(r, e, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + r;
      }
    }
    var z = !1, Y;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new re();
    }
    function cr(r, e) {
      if (!r || z)
        return "";
      {
        var t = Y.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Qr();
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
`), m = n.stack.split(`
`), c = i.length - 1, l = m.length - 1; c >= 1 && l >= 0 && i[c] !== m[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (i[c] !== m[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || i[c] !== m[l]) {
                    var h = `
` + i[c].replace(" at new ", " at ");
                    return r.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", r.displayName)), typeof r == "function" && Y.set(r, h), h;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = f, Xr(), Error.prepareStackTrace = s;
      }
      var D = r ? r.displayName || r.name : "", Ir = D ? V(D) : "";
      return typeof r == "function" && Y.set(r, Ir), Ir;
    }
    function ee(r, e, t) {
      return cr(r, !1);
    }
    function te(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function B(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return cr(r, te(r));
      if (typeof r == "string")
        return V(r);
      switch (r) {
        case C:
          return V("Suspense");
        case v:
          return V("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return ee(r.render);
          case E:
            return B(r.type, e, t);
          case R: {
            var n = r, s = n._payload, f = n._init;
            try {
              return B(f(s), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, lr = {}, dr = P.ReactDebugCurrentFrame;
    function G(r) {
      if (r) {
        var e = r._owner, t = B(r.type, r._source, e ? e.type : null);
        dr.setExtraStackFrame(t);
      } else
        dr.setExtraStackFrame(null);
    }
    function ne(r, e, t, n, s) {
      {
        var f = Function.call.bind(M);
        for (var a in r)
          if (f(r, a)) {
            var i = void 0;
            try {
              if (typeof r[a] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              i = r[a](e, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              i = c;
            }
            i && !(i instanceof Error) && (G(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof i), G(null)), i instanceof Error && !(i.message in lr) && (lr[i.message] = !0, G(s), p("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var ie = Array.isArray;
    function K(r) {
      return ie(r);
    }
    function ae(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function oe(r) {
      try {
        return gr(r), !1;
      } catch {
        return !0;
      }
    }
    function gr(r) {
      return "" + r;
    }
    function vr(r) {
      if (oe(r))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ae(r)), gr(r);
    }
    var $ = P.ReactCurrentOwner, se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pr, mr, H;
    H = {};
    function fe(r) {
      if (M.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ue(r) {
      if (M.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ce(r, e) {
      if (typeof r.ref == "string" && $.current && e && $.current.stateNode !== e) {
        var t = j($.current.type);
        H[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j($.current.type), r.ref), H[t] = !0);
      }
    }
    function le(r, e) {
      {
        var t = function() {
          pr || (pr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function de(r, e) {
      {
        var t = function() {
          mr || (mr = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ge = function(r, e, t, n, s, f, a) {
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
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ve(r, e, t, n, s) {
      {
        var f, a = {}, i = null, m = null;
        t !== void 0 && (vr(t), i = "" + t), ue(e) && (vr(e.key), i = "" + e.key), fe(e) && (m = e.ref, ce(e, s));
        for (f in e)
          M.call(e, f) && !se.hasOwnProperty(f) && (a[f] = e[f]);
        if (r && r.defaultProps) {
          var c = r.defaultProps;
          for (f in c)
            a[f] === void 0 && (a[f] = c[f]);
        }
        if (i || m) {
          var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          i && le(a, l), m && de(a, l);
        }
        return ge(r, i, m, s, n, $.current, a);
      }
    }
    var Z = P.ReactCurrentOwner, yr = P.ReactDebugCurrentFrame;
    function F(r) {
      if (r) {
        var e = r._owner, t = B(r.type, r._source, e ? e.type : null);
        yr.setExtraStackFrame(t);
      } else
        yr.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function X(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function Er() {
      {
        if (Z.current) {
          var r = j(Z.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function pe(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var hr = {};
    function me(r) {
      {
        var e = Er();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function br(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = me(e);
        if (hr[t])
          return;
        hr[t] = !0;
        var n = "";
        r && r._owner && r._owner !== Z.current && (n = " It was passed a child from " + j(r._owner.type) + "."), F(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function _r(r, e) {
      {
        if (typeof r != "object")
          return;
        if (K(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            X(n) && br(n, e);
          }
        else if (X(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var s = Br(r);
          if (typeof s == "function" && s !== r.entries)
            for (var f = s.call(r), a; !(a = f.next()).done; )
              X(a.value) && br(a.value, e);
        }
      }
    }
    function ye(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === E))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = j(e);
          ne(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = j(e);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ee(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            F(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        r.ref !== null && (F(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Rr(r, e, t, n, s, f) {
      {
        var a = Hr(r);
        if (!a) {
          var i = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = pe(s);
          m ? i += m : i += Er();
          var c;
          r === null ? c = "null" : K(r) ? c = "array" : r !== void 0 && r.$$typeof === u ? (c = "<" + (j(r.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : c = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, i);
        }
        var l = ve(r, e, t, s, f);
        if (l == null)
          return l;
        if (a) {
          var h = e.children;
          if (h !== void 0)
            if (n)
              if (K(h)) {
                for (var D = 0; D < h.length; D++)
                  _r(h[D], r);
                Object.freeze && Object.freeze(h);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _r(h, r);
        }
        return r === k ? Ee(l) : ye(l), l;
      }
    }
    function he(r, e, t) {
      return Rr(r, e, t, !0);
    }
    function be(r, e, t) {
      return Rr(r, e, t, !1);
    }
    var _e = be, Re = he;
    L.Fragment = k, L.jsx = _e, L.jsxs = Re;
  }()), L;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = xe() : o.exports = je();
})(Ie);
const b = 50, I = 10, Tr = [
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
], kr = [
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
], Te = [
  {
    string: [4],
    fret: 2,
    fingerId: 1
  }
], ke = [], Ce = [
  {
    string: [3],
    fret: 2,
    fingerId: 2
  }
], Cr = [
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
], Oe = [
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
], Or = [
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
], Se = [
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
], Sr = [
  {
    string: [1],
    fret: 3,
    fingerId: 1
  }
], we = [
  {
    string: [1, 2, 3],
    fret: 3,
    fingerId: 1
  }
], wr = [
  {
    string: [1],
    fret: 2,
    fingerId: 1
  }
], Pe = [
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
], Pr = [
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
], Fe = [
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
], De = [
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
], Fr = [
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
], Ae = [
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
], Dr = [
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
], We = [
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
], Ar = [
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
], $e = [
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
], Wr = [
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
], Ue = [
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
], $r = [
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
], Le = [
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
], Ur = [
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
], Ne = [
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
], Lr = [
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
], Nr = {
  A: Tr,
  Amaj: Tr,
  A7: kr,
  Amaj7: kr,
  Am: Te,
  Am7: ke,
  A7sus4: Ce,
  B: Cr,
  Bmaj: Cr,
  B7: Or,
  Bmaj7: Or,
  Bm: Oe,
  Bb: Se,
  C: Sr,
  Cmaj: Sr,
  C7: wr,
  Cmaj7: wr,
  Cm: we,
  Cadd9: Pe,
  D: Pr,
  Dmaj: Pr,
  D7: Fr,
  Dmaj7: Fr,
  Dm: Fe,
  Dm7: De,
  Dsus4: Ae,
  E: Dr,
  Emaj: Dr,
  E7: Ar,
  Emaj7: Ar,
  Em: We,
  Em7: $e,
  F: Wr,
  Fmaj: Wr,
  F7: $r,
  Fmaj7: $r,
  "F#": Le,
  Fm: Ue,
  G: Ur,
  Gmaj: Ur,
  Gm: Ne,
  G7: Lr,
  Gmaj7: Lr
};
function Ve({ stringYPosition: o, stringHeight: u }) {
  return /* @__PURE__ */ g.jsx(
    "rect",
    {
      x: I,
      y: o,
      width: I,
      height: u,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 1
    }
  );
}
function Ye({ stringYPosition: o, width: u }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: o[0],
        x2: u,
        y2: o[0],
        stroke: "black",
        strokeWidth: 1
      },
      "string-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: o[1],
        x2: u,
        y2: o[1],
        stroke: "black",
        strokeWidth: 1
      },
      "string-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: o[2],
        x2: u,
        y2: o[2],
        stroke: "black",
        strokeWidth: 1
      },
      "string-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: I * 2,
        y1: o[3],
        x2: u,
        y2: o[3],
        stroke: "black",
        strokeWidth: 1
      },
      "string-4"
    )
  ] });
}
function Be({ fretXPosition: o, stringHeight: u }) {
  return /* @__PURE__ */ g.jsxs("g", { children: [
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: o[0],
        y1: b,
        x2: o[0],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-1"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: o[1],
        y1: b,
        x2: o[1],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-2"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: o[2],
        y1: b,
        x2: o[2],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-3"
    ),
    /* @__PURE__ */ g.jsx(
      "line",
      {
        x1: o[3],
        y1: b,
        x2: o[3],
        y2: u + b,
        stroke: "black",
        strokeWidth: 0.5
      },
      "fret-4"
    )
  ] });
}
function Ge({
  chord: o = "A",
  width: u = 300,
  height: S = 300,
  showLabel: k = !0
}) {
  if (!!!Nr[o])
    return null;
  let y = u / 5 || 550, _ = S / 2 || 300, x = y / 6, d = [
    b,
    _ / 3 + b,
    _ * 2 / 3 + b,
    _ + b
  ], C = [
    y + I,
    y * 2 + I,
    y * 3 + I,
    y * 4 + I
  ], v = [], E;
  return E = Nr[o], E.forEach(function(R) {
    R.string.forEach(function(w, N) {
      v.push(
        /* @__PURE__ */ g.jsx(
          "circle",
          {
            cx: y / 2 + y * (R.fret - 1) + I,
            cy: d[w - 1],
            r: x,
            fill: "black"
          },
          o + "_" + R.fingerId + "_" + N
        )
      );
    });
  }), /* @__PURE__ */ g.jsxs("svg", { width: u, height: S, id: "svgOne", children: [
    k && /* @__PURE__ */ g.jsx("text", { x: "20", y: "30", children: o }),
    /* @__PURE__ */ g.jsx(
      Ve,
      {
        stringYPosition: d[0],
        stringHeight: _
      }
    ),
    /* @__PURE__ */ g.jsx(Ye, { stringYPosition: d, width: u }),
    /* @__PURE__ */ g.jsx(Be, { fretXPosition: C, stringHeight: _ }),
    ...v
  ] });
}
export {
  Ge as default
};
