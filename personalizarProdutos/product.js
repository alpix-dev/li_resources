/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.1",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) {
                        for (i in n) {
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
            if (null != (o = arguments[l])) {
                for (i in o) {
                    e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) {
                    return setTimeout(x.ready)
                }
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (r) {
                return !1
            }
            if (x.support.ownLast) {
                for (n in e) {
                    return v.call(e, n)
                }
            }
            for (n in e) {}
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) {
                    return m.call(t, e, n)
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o), n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r)
                }
            }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) {
                    x.access(e, n, l, r[l], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(x(e), n)
                    })), n)) {
                    for (; u > l; l++) {
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o], e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(), "complete" === a.readyState) {
                setTimeout(x.ready)
            } else {
                if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1)
                } else {
                    a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement
                    } catch (i) {}
                    r && r.doScroll && function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            _(), x.ready()
                        }
                    }()
                }
            }
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = lt(),
                k = lt(),
                E = lt(),
                S = !1,
                A = function() {
                    return 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++) {
                        if (this[t] === e) {
                            return t
                        }
                    }
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) {
                    return n
                }
                if (1 !== (l = t.nodeType) && 9 !== l) {
                    return []
                }
                if (h && !i) {
                    if (o = Z.exec(e)) {
                        if (s = o[1]) {
                            if (9 === l) {
                                if (a = t.getElementById(s), !a || !a.parentNode) {
                                    return n
                                }
                                if (a.id === s) {
                                    return n.push(a), n
                                }
                            } else {
                                if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                    return n.push(a), n
                                }
                            }
                        } else {
                            if (o[2]) {
                                return M.apply(n, t.getElementsByTagName(e)), n
                            }
                            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                                return M.apply(n, t.getElementsByClassName(s)), n
                            }
                        }
                    }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) {
                                c[u] = m + xt(c[u])
                            }
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) {
                            try {
                                return M.apply(n, y.querySelectorAll(x)), n
                            } catch (T) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                }
                return At(e.replace(z, "$1"), t, n, i)
            }

            function st(e) {
                return K.test(e + "")
            }

            function lt() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function ut(e) {
                return e[b] = !0, e
            }

            function ct(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function pt(e, t, n) {
                e = e.split("|");
                var r, i = e.length,
                    a = n ? null : t;
                while (i--) {
                    (r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a)
                }
            }

            function ft(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
            }

            function dt(e, t) {
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }

            function ht(e) {
                return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
            }

            function gt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function mt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function yt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function vt(e) {
                return ut(function(t) {
                    return t = +t, ut(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) {
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        }
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.parentWindow;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ct(function(e) {
                    return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
                }), r.input = ct(function(e) {
                    return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ct(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ct(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) {
                            1 === n.nodeType && r.push(n)
                        }
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ct(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return !0
                            }
                        }
                    }
                    return !1
                }, r.sortDetached = ct(function(e) {
                    return 1 & e.compareDocumentPosition(n.createElement("div"))
                }), A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) {
                        return S = !0, 0
                    }
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) {
                        return S = !0, 0
                    }
                    if (!o || !a) {
                        return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                    }
                    if (o === a) {
                        return gt(e, t)
                    }
                    r = e;
                    while (r = r.parentNode) {
                        s.unshift(r)
                    }
                    r = t;
                    while (r = r.parentNode) {
                        l.unshift(r)
                    }
                    while (s[i] === l[i]) {
                        i++
                    }
                    return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                    try {
                        var n = y.call(e, t);
                        if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                            return n
                        }
                    } catch (i) {}
                }
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[o++]) {
                        t === e[o] && (i = n.push(o))
                    }
                    while (i--) {
                        e.splice(n[i], 1)
                    }
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) {
                            return e.textContent
                        }
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += a(e)
                        }
                    } else {
                        if (3 === i || 4 === i) {
                            return e.nodeValue
                        }
                    }
                } else {
                    for (; t = e[r]; r++) {
                        n += a(t)
                    }
                }
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: ut,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g]) {
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                                return !1
                                            }
                                        }
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                    }
                                } else {
                                    if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                                        f = u[1]
                                    } else {
                                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                            if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) {
                                                break
                                            }
                                        }
                                    }
                                }
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) {
                                i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                            }
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ut(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? ut(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--) {
                                (o = a[s]) && (e[s] = !(t[s] = o))
                            }
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: ut(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: ut(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ut(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                        return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                                    }
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                                return !1
                            }
                        }
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: vt(function() {
                        return [0]
                    }),
                    last: vt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: vt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: vt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: vt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: vt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: vt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                o.pseudos[n] = mt(n)
            }
            for (n in {
                    submit: !0,
                    reset: !0
                }) {
                o.pseudos[n] = yt(n)
            }

            function bt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) {
                    return t ? 0 : c.slice(0)
                }
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for (a in o.filter) {
                        !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: a,
                            matches: r
                        }), s = s.slice(n.length))
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function xt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) {
                    r += e[t].value
                }
                return r
            }

            function wt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            return e(t, n, i)
                        }
                    }
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r]) {
                            if ((1 === t.nodeType || o) && e(t, n, s)) {
                                return !0
                            }
                        }
                    } else {
                        while (t = t[r]) {
                            if (1 === t.nodeType || o) {
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === i) {
                                        return l === !0
                                    }
                                } else {
                                    if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function Tt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--) {
                        if (!e[i](t, n, r)) {
                            return !1
                        }
                    }
                    return !0
                } : e[0]
            }

            function Ct(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++) {
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
                }
                return a
            }

            function Nt(e, t, n, r, i, o) {
                return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || St(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : Ct(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = Ct(y, d), r(u, [], s, l), c = u.length;
                        while (c--) {
                            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                        }
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--) {
                                    (p = y[c]) && u.push(m[c] = p)
                                }
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                            }
                        }
                    } else {
                        y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                    }
                })
            }

            function kt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = wt(function(e) {
                        return e === t
                    }, s, !0),
                    p = wt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; i > l; l++) {
                    if (n = o.relative[e[l].type]) {
                        f = [wt(Tt(f), n)]
                    } else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++) {
                                if (o.relative[e[r].type]) {
                                    break
                                }
                            }
                            return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e))
                        }
                        f.push(n)
                    }
                }
                return Tt(f)
            }

            function Et(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || 0.1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++]) {
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) {
                                m(x, y, l, c)
                            }
                            if (s) {
                                if (v > 0) {
                                    while (b--) {
                                        x[b] || y[b] || (y[b] = q.call(p))
                                    }
                                }
                                y = Ct(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? ut(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = bt(e)), n = t.length;
                    while (n--) {
                        o = kt(t[n]), o[b] ? r.push(o) : i.push(o)
                    }
                    o = E(e, Et(i, r))
                }
                return o
            };

            function St(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) {
                    at(e, t[r], n)
                }
                return n
            }

            function At(e, t, n, i) {
                var a, s, u, c, p, f = bt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) {
                            return n
                        }
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a], o.relative[c = u.type]) {
                            break
                        }
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1), e = i.length && xt(s), !e) {
                                return M.apply(n, i), n
                            }
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            o.pseudos.nth = o.pseudos.eq;

            function jt() {}
            jt.prototype = o.filters = o.pseudos, o.setFilters = new jt, r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) {
                            l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                        }
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1) {
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
                }
            }
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
            }
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1
            }
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) {
                        i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]))
                    }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) {
                r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l))
            }
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                        s = x(this),
                        l = t,
                        u = e.match(T) || [];
                    while (o = u[a++]) {
                        l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) {
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) {
                        r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
                    }
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) {
                    s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0)
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) {
                            a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
                        }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else {
                        for (d in c) {
                            x.event.remove(e, d + t[u], n, r, !0)
                        }
                    }
                }
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                        h.push(u), f = u
                    }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
                }
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) {
                            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) {
                return e
            }
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) {
                n = r[t], e[n] = o[n]
            }
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) {
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (t = 0; i > t; t++) {
                x.find(e, r[t], n)
            }
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (x.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
                1 === o.nodeType && i.push(o), o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e, function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) {
                t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
                    i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u)
                }
                if (o) {
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
                        i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                    }
                }
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ot(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
                        Mt(i, r[a])
                    }
                } else {
                    Mt(e, o)
                }
            }
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === x.type(o)) {
                        x.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                                while (i--) {
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                                }
                            }
                            x.merge(d, s.childNodes), s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                        }
                    }
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t
            }
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) {
            r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) {
                        a[n[s]] = x.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? x(this).show(): x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
                }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        u[n] = r
                    } catch (c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== x.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) {
                                    c[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (2 > b) {
                                for (t in e) {
                                    m[t] = [m[t], e[t]]
                                }
                            } else {
                                C.always(e[C.status])
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) {
                return C
            }
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                C.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
                return C.abort()
            }
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                C[i](p[i])
            }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) {
                        throw N
                    }
                    k(-1, N)
                }
            } else {
                k(-1, "No Transport")
            }

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0] in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o], !a) {
                            for (i in u) {
                                if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p : "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) {
                Pn[e](t, !0)
            }
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            l[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            l.setRequestHeader(s, i[s])
                        }
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) {
                                    4 !== l.readyState && l.abort()
                                } else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do {
                        s = s || ".5", a /= s, x.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) {
                    return !1
                }
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) {
                    u.tweens[a].run(o)
                }
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) {
                        return this
                    }
                    for (i = !0; r > n; n++) {
                        u.tweens[n].run(1)
                    }
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) {
                n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--;) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
                }(t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i], r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r], e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);
/*! jQuery UI - v1.10.3 - 2013-05-03
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(b, g) {
    var a = 0,
        f = /^ui-id-\d+$/;
    b.ui = b.ui || {};
    b.extend(b.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    b.fn.extend({
        focus: (function(h) {
            return function(i, j) {
                return typeof i === "number" ? this.each(function() {
                    var k = this;
                    setTimeout(function() {
                        b(k).focus();
                        if (j) {
                            j.call(k)
                        }
                    }, i)
                }) : h.apply(this, arguments)
            }
        })(b.fn.focus),
        scrollParent: function() {
            var h;
            if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                h = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            } else {
                h = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !h.length ? b(document) : h
        },
        zIndex: function(k) {
            if (k !== g) {
                return this.css("zIndex", k)
            }
            if (this.length) {
                var i = b(this[0]),
                    h, j;
                while (i.length && i[0] !== document) {
                    h = i.css("position");
                    if (h === "absolute" || h === "relative" || h === "fixed") {
                        j = parseInt(i.css("zIndex"), 10);
                        if (!isNaN(j) && j !== 0) {
                            return j
                        }
                    }
                    i = i.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                if (!this.id) {
                    this.id = "ui-id-" + (++a)
                }
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                if (f.test(this.id)) {
                    b(this).removeAttr("id")
                }
            })
        }
    });

    function d(j, h) {
        var l, k, i, m = j.nodeName.toLowerCase();
        if ("area" === m) {
            l = j.parentNode;
            k = l.name;
            if (!j.href || !k || l.nodeName.toLowerCase() !== "map") {
                return false
            }
            i = b("img[usemap=#" + k + "]")[0];
            return !!i && c(i)
        }
        return (/input|select|textarea|button|object/.test(m) ? !j.disabled : "a" === m ? j.href || h : h) && c(j)
    }

    function c(h) {
        return b.expr.filters.visible(h) && !b(h).parents().addBack().filter(function() {
            return b.css(this, "visibility") === "hidden"
        }).length
    }
    b.extend(b.expr[":"], {
        data: b.expr.createPseudo ? b.expr.createPseudo(function(h) {
            return function(i) {
                return !!b.data(i, h)
            }
        }) : function(k, j, h) {
            return !!b.data(k, h[3])
        },
        focusable: function(h) {
            return d(h, !isNaN(b.attr(h, "tabindex")))
        },
        tabbable: function(j) {
            var h = b.attr(j, "tabindex"),
                i = isNaN(h);
            return (i || h >= 0) && d(j, !i)
        }
    });
    if (!b("<a>").outerWidth(1).jquery) {
        b.each(["Width", "Height"], function(k, h) {
            var j = h === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                l = h.toLowerCase(),
                n = {
                    innerWidth: b.fn.innerWidth,
                    innerHeight: b.fn.innerHeight,
                    outerWidth: b.fn.outerWidth,
                    outerHeight: b.fn.outerHeight
                };

            function m(p, o, i, q) {
                b.each(j, function() {
                    o -= parseFloat(b.css(p, "padding" + this)) || 0;
                    if (i) {
                        o -= parseFloat(b.css(p, "border" + this + "Width")) || 0
                    }
                    if (q) {
                        o -= parseFloat(b.css(p, "margin" + this)) || 0
                    }
                });
                return o
            }
            b.fn["inner" + h] = function(i) {
                if (i === g) {
                    return n["inner" + h].call(this)
                }
                return this.each(function() {
                    b(this).css(l, m(this, i) + "px")
                })
            };
            b.fn["outer" + h] = function(i, o) {
                if (typeof i !== "number") {
                    return n["outer" + h].call(this, i)
                }
                return this.each(function() {
                    b(this).css(l, m(this, i, true, o) + "px")
                })
            }
        })
    }
    if (!b.fn.addBack) {
        b.fn.addBack = function(h) {
            return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
        }
    }
    if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        b.fn.removeData = (function(h) {
            return function(i) {
                if (arguments.length) {
                    return h.call(this, b.camelCase(i))
                } else {
                    return h.call(this)
                }
            }
        })(b.fn.removeData)
    }
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.support.selectstart = "onselectstart" in document.createElement("div");
    b.fn.extend({
        disableSelection: function() {
            return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(h) {
                h.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    });
    b.extend(b.ui, {
        plugin: {
            add: function(j, k, m) {
                var h, l = b.ui[j].prototype;
                for (h in m) {
                    l.plugins[h] = l.plugins[h] || [];
                    l.plugins[h].push([k, m[h]])
                }
            },
            call: function(h, k, j) {
                var l, m = h.plugins[k];
                if (!m || !h.element[0].parentNode || h.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (l = 0; l < m.length; l++) {
                    if (h.options[m[l][0]]) {
                        m[l][1].apply(h.element, j)
                    }
                }
            }
        },
        hasScroll: function(k, i) {
            if (b(k).css("overflow") === "hidden") {
                return false
            }
            var h = (i && i === "left") ? "scrollLeft" : "scrollTop",
                j = false;
            if (k[h] > 0) {
                return true
            }
            k[h] = 1;
            j = (k[h] > 0);
            k[h] = 0;
            return j
        }
    })
})(jQuery);
(function(b, f) {
    var a = 0,
        d = Array.prototype.slice,
        c = b.cleanData;
    b.cleanData = function(g) {
        for (var h = 0, j;
            (j = g[h]) != null; h++) {
            try {
                b(j).triggerHandler("remove")
            } catch (k) {}
        }
        c(g)
    };
    b.widget = function(g, h, o) {
        var l, m, j, n, i = {},
            k = g.split(".")[0];
        g = g.split(".")[1];
        l = k + "-" + g;
        if (!o) {
            o = h;
            h = b.Widget
        }
        b.expr[":"][l.toLowerCase()] = function(p) {
            return !!b.data(p, l)
        };
        b[k] = b[k] || {};
        m = b[k][g];
        j = b[k][g] = function(p, q) {
            if (!this._createWidget) {
                return new j(p, q)
            }
            if (arguments.length) {
                this._createWidget(p, q)
            }
        };
        b.extend(j, m, {
            version: o.version,
            _proto: b.extend({}, o),
            _childConstructors: []
        });
        n = new h();
        n.options = b.widget.extend({}, n.options);
        b.each(o, function(q, p) {
            if (!b.isFunction(p)) {
                i[q] = p;
                return
            }
            i[q] = (function() {
                var r = function() {
                        return h.prototype[q].apply(this, arguments)
                    },
                    s = function(t) {
                        return h.prototype[q].apply(this, t)
                    };
                return function() {
                    var v = this._super,
                        t = this._superApply,
                        u;
                    this._super = r;
                    this._superApply = s;
                    u = p.apply(this, arguments);
                    this._super = v;
                    this._superApply = t;
                    return u
                }
            })()
        });
        j.prototype = b.widget.extend(n, {
            widgetEventPrefix: m ? n.widgetEventPrefix : g
        }, i, {
            constructor: j,
            namespace: k,
            widgetName: g,
            widgetFullName: l
        });
        if (m) {
            b.each(m._childConstructors, function(q, r) {
                var p = r.prototype;
                b.widget(p.namespace + "." + p.widgetName, j, r._proto)
            });
            delete m._childConstructors
        } else {
            h._childConstructors.push(j)
        }
        b.widget.bridge(g, j)
    };
    b.widget.extend = function(l) {
        var h = d.call(arguments, 1),
            k = 0,
            g = h.length,
            i, j;
        for (; k < g; k++) {
            for (i in h[k]) {
                j = h[k][i];
                if (h[k].hasOwnProperty(i) && j !== f) {
                    if (b.isPlainObject(j)) {
                        l[i] = b.isPlainObject(l[i]) ? b.widget.extend({}, l[i], j) : b.widget.extend({}, j)
                    } else {
                        l[i] = j
                    }
                }
            }
        }
        return l
    };
    b.widget.bridge = function(h, g) {
        var i = g.prototype.widgetFullName || h;
        b.fn[h] = function(l) {
            var j = typeof l === "string",
                k = d.call(arguments, 1),
                m = this;
            l = !j && k.length ? b.widget.extend.apply(null, [l].concat(k)) : l;
            if (j) {
                this.each(function() {
                    var o, n = b.data(this, i);
                    if (!n) {
                        return b.error("cannot call methods on " + h + " prior to initialization; attempted to call method '" + l + "'")
                    }
                    if (!b.isFunction(n[l]) || l.charAt(0) === "_") {
                        return b.error("no such method '" + l + "' for " + h + " widget instance")
                    }
                    o = n[l].apply(n, k);
                    if (o !== n && o !== f) {
                        m = o && o.jquery ? m.pushStack(o.get()) : o;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var n = b.data(this, i);
                    if (n) {
                        n.option(l || {})._init()
                    } else {
                        b.data(this, i, new g(l, this))
                    }
                })
            }
            return m
        }
    };
    b.Widget = function() {};
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(g, h) {
            h = b(h || this.defaultElement || this)[0];
            this.element = b(h);
            this.uuid = a++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), g);
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            if (h !== this) {
                b.data(h, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(i) {
                        if (i.target === h) {
                            this.destroy()
                        }
                    }
                });
                this.document = b(h.style ? h.ownerDocument : h.document || h);
                this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function() {
            return this.element
        },
        option: function(k, l) {
            var g = k,
                m, j, h;
            if (arguments.length === 0) {
                return b.widget.extend({}, this.options)
            }
            if (typeof k === "string") {
                g = {};
                m = k.split(".");
                k = m.shift();
                if (m.length) {
                    j = g[k] = b.widget.extend({}, this.options[k]);
                    for (h = 0; h < m.length - 1; h++) {
                        j[m[h]] = j[m[h]] || {};
                        j = j[m[h]]
                    }
                    k = m.pop();
                    if (l === f) {
                        return j[k] === f ? null : j[k]
                    }
                    j[k] = l
                } else {
                    if (l === f) {
                        return this.options[k] === f ? null : this.options[k]
                    }
                    g[k] = l
                }
            }
            this._setOptions(g);
            return this
        },
        _setOptions: function(g) {
            var h;
            for (h in g) {
                this._setOption(h, g[h])
            }
            return this
        },
        _setOption: function(g, h) {
            this.options[g] = h;
            if (g === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!h).attr("aria-disabled", h);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _on: function(j, i, h) {
            var k, g = this;
            if (typeof j !== "boolean") {
                h = i;
                i = j;
                j = false
            }
            if (!h) {
                h = i;
                i = this.element;
                k = this.widget()
            } else {
                i = k = b(i);
                this.bindings = this.bindings.add(i)
            }
            b.each(h, function(q, p) {
                function n() {
                    if (!j && (g.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof p === "string" ? g[p] : p).apply(g, arguments)
                }
                if (typeof p !== "string") {
                    n.guid = p.guid = p.guid || n.guid || b.guid++
                }
                var o = q.match(/^(\w+)\s*(.*)$/),
                    m = o[1] + g.eventNamespace,
                    l = o[2];
                if (l) {
                    k.delegate(l, m, n)
                } else {
                    i.bind(m, n)
                }
            })
        },
        _off: function(h, g) {
            g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            h.unbind(g).undelegate(g)
        },
        _delay: function(j, i) {
            function h() {
                return (typeof j === "string" ? g[j] : j).apply(g, arguments)
            }
            var g = this;
            return setTimeout(h, i || 0)
        },
        _hoverable: function(g) {
            this.hoverable = this.hoverable.add(g);
            this._on(g, {
                mouseenter: function(h) {
                    b(h.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(h) {
                    b(h.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(g) {
            this.focusable = this.focusable.add(g);
            this._on(g, {
                focusin: function(h) {
                    b(h.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(h) {
                    b(h.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(g, h, i) {
            var l, k, j = this.options[g];
            i = i || {};
            h = b.Event(h);
            h.type = (g === this.widgetEventPrefix ? g : this.widgetEventPrefix + g).toLowerCase();
            h.target = this.element[0];
            k = h.originalEvent;
            if (k) {
                for (l in k) {
                    if (!(l in h)) {
                        h[l] = k[l]
                    }
                }
            }
            this.element.trigger(h, i);
            return !(b.isFunction(j) && j.apply(this.element[0], [h].concat(i)) === false || h.isDefaultPrevented())
        }
    };
    b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(h, g) {
        b.Widget.prototype["_" + h] = function(k, j, m) {
            if (typeof j === "string") {
                j = {
                    effect: j
                }
            }
            var l, i = !j ? h : j === true || typeof j === "number" ? g : j.effect || g;
            j = j || {};
            if (typeof j === "number") {
                j = {
                    duration: j
                }
            }
            l = !b.isEmptyObject(j);
            j.complete = m;
            if (j.delay) {
                k.delay(j.delay)
            }
            if (l && b.effects && b.effects.effect[i]) {
                k[h](j)
            } else {
                if (i !== h && k[i]) {
                    k[i](j.duration, j.easing, m)
                } else {
                    k.queue(function(n) {
                        b(this)[h]();
                        if (m) {
                            m.call(k[0])
                        }
                        n()
                    })
                }
            }
        }
    })
})(jQuery);
(function(b, c) {
    var a = false;
    b(document).mouseup(function() {
        a = false
    });
    b.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function(f) {
                return d._mouseDown(f)
            }).bind("click." + this.widgetName, function(f) {
                if (true === b.data(f.target, d.widgetName + ".preventClickEvent")) {
                    b.removeData(f.target, d.widgetName + ".preventClickEvent");
                    f.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(g) {
            if (a) {
                return
            }(this._mouseStarted && this._mouseUp(g));
            this._mouseDownEvent = g;
            var f = this,
                h = (g.which === 1),
                d = (typeof this.options.cancel === "string" && g.target.nodeName ? b(g.target).closest(this.options.cancel).length : false);
            if (!h || d || !this._mouseCapture(g)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    f.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(g) && this._mouseDelayMet(g)) {
                this._mouseStarted = (this._mouseStart(g) !== false);
                if (!this._mouseStarted) {
                    g.preventDefault();
                    return true
                }
            }
            if (true === b.data(g.target, this.widgetName + ".preventClickEvent")) {
                b.removeData(g.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(i) {
                return f._mouseMove(i)
            };
            this._mouseUpDelegate = function(i) {
                return f._mouseUp(i)
            };
            b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            g.preventDefault();
            a = true;
            return true
        },
        _mouseMove: function(d) {
            if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
                return this._mouseUp(d)
            }
            if (this._mouseStarted) {
                this._mouseDrag(d);
                return d.preventDefault()
            }
            if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
                (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(d) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (d.target === this._mouseDownEvent.target) {
                    b.data(d.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(d)
            }
            return false
        },
        _mouseDistanceMet: function(d) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
})(jQuery);
(function(a, b) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function(c) {
            var d = this.options;
            if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(c);
            if (!this.handle) {
                return false
            }
            a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(a(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function(c) {
            var d = this.options;
            this.helper = this._createHelper(c);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offsetParent = this.helper.offsetParent();
            this.offsetParentCssPosition = this.offsetParent.css("position");
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.offset.scroll = false;
            a.extend(this.offset, {
                click: {
                    left: c.pageX - this.offset.left,
                    top: c.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(c);
            this.originalPageX = c.pageX;
            this.originalPageY = c.pageY;
            (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
            this._setContainment();
            if (this._trigger("start", c) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !d.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, c)
            }
            this._mouseDrag(c, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, c)
            }
            return true
        },
        _mouseDrag: function(c, f) {
            if (this.offsetParentCssPosition === "fixed") {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!f) {
                var d = this._uiHash();
                if (this._trigger("drag", c, d) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = d.position
            }
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, c)
            }
            return false
        },
        _mouseStop: function(d) {
            var c = this,
                f = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                f = a.ui.ddmanager.drop(this, d)
            }
            if (this.dropped) {
                f = this.dropped;
                this.dropped = false
            }
            if (this.options.helper === "original" && !a.contains(this.element[0].ownerDocument, this.element[0])) {
                return false
            }
            if ((this.options.revert === "invalid" && !f) || (this.options.revert === "valid" && f) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, f))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (c._trigger("stop", d) !== false) {
                        c._clear()
                    }
                })
            } else {
                if (this._trigger("stop", d) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(c) {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, c)
            }
            return a.ui.mouse.prototype._mouseUp.call(this, c)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(c) {
            return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
        },
        _createHelper: function(d) {
            var f = this.options,
                c = a.isFunction(f.helper) ? a(f.helper.apply(this.element[0], [d])) : (f.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!c.parents("body").length) {
                c.appendTo((f.appendTo === "parent" ? this.element[0].parentNode : f.appendTo))
            }
            if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
                c.css("position", "absolute")
            }
            return c
        },
        _adjustOffsetFromHelper: function(c) {
            if (typeof c === "string") {
                c = c.split(" ")
            }
            if (a.isArray(c)) {
                c = {
                    left: +c[0],
                    top: +c[1] || 0
                }
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            var c = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
                c = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var c = this.element.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, h, d, g = this.options;
            if (!g.containment) {
                this.containment = null;
                return
            }
            if (g.containment === "window") {
                this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (g.containment === "document") {
                this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (g.containment.constructor === Array) {
                this.containment = g.containment;
                return
            }
            if (g.containment === "parent") {
                g.containment = this.helper[0].parentNode
            }
            h = a(g.containment);
            d = h[0];
            if (!d) {
                return
            }
            f = h.css("overflow") !== "hidden";
            this.containment = [(parseInt(h.css("borderLeftWidth"), 10) || 0) + (parseInt(h.css("paddingLeft"), 10) || 0), (parseInt(h.css("borderTopWidth"), 10) || 0) + (parseInt(h.css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(h.css("borderRightWidth"), 10) || 0) - (parseInt(h.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(h.css("borderBottomWidth"), 10) || 0) - (parseInt(h.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relative_container = h
        },
        _convertPositionTo: function(g, h) {
            if (!h) {
                h = this.position
            }
            var f = g === "absolute" ? 1 : -1,
                c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top: c.scrollTop(),
                    left: c.scrollLeft()
                }
            }
            return {
                top: (h.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * f)),
                left: (h.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * f))
            }
        },
        _generatePosition: function(d) {
            var c, j, k, g, f = this.options,
                l = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                i = d.pageX,
                h = d.pageY;
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top: l.scrollTop(),
                    left: l.scrollLeft()
                }
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        j = this.relative_container.offset();
                        c = [this.containment[0] + j.left, this.containment[1] + j.top, this.containment[2] + j.left, this.containment[3] + j.top]
                    } else {
                        c = this.containment
                    }
                    if (d.pageX - this.offset.click.left < c[0]) {
                        i = c[0] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top < c[1]) {
                        h = c[1] + this.offset.click.top
                    }
                    if (d.pageX - this.offset.click.left > c[2]) {
                        i = c[2] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top > c[3]) {
                        h = c[3] + this.offset.click.top
                    }
                }
                if (f.grid) {
                    k = f.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / f.grid[1]) * f.grid[1] : this.originalPageY;
                    h = c ? ((k - this.offset.click.top >= c[1] || k - this.offset.click.top > c[3]) ? k : ((k - this.offset.click.top >= c[1]) ? k - f.grid[1] : k + f.grid[1])) : k;
                    g = f.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / f.grid[0]) * f.grid[0] : this.originalPageX;
                    i = c ? ((g - this.offset.click.left >= c[0] || g - this.offset.click.left > c[2]) ? g : ((g - this.offset.click.left >= c[0]) ? g - f.grid[0] : g + f.grid[0])) : g
                }
            }
            return {
                top: (h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)),
                left: (i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(c, d, f) {
            f = f || this._uiHash();
            a.ui.plugin.call(this, c, [d, f]);
            if (c === "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return a.Widget.prototype._trigger.call(this, c, d, f)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(d, g) {
            var f = a(this).data("ui-draggable"),
                h = f.options,
                c = a.extend({}, g, {
                    item: f.element
                });
            f.sortables = [];
            a(h.connectToSortable).each(function() {
                var i = a.data(this, "ui-sortable");
                if (i && !i.options.disabled) {
                    f.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    });
                    i.refreshPositions();
                    i._trigger("activate", d, c)
                }
            })
        },
        stop: function(d, g) {
            var f = a(this).data("ui-draggable"),
                c = a.extend({}, g, {
                    item: f.element
                });
            a.each(f.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    f.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = this.shouldRevert
                    }
                    this.instance._mouseStop(d);
                    this.instance.options.helper = this.instance.options._helper;
                    if (f.options.helper === "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", d, c)
                }
            })
        },
        drag: function(d, g) {
            var f = a(this).data("ui-draggable"),
                c = this;
            a.each(f.sortables, function() {
                var h = false,
                    i = this;
                this.instance.positionAbs = f.positionAbs;
                this.instance.helperProportions = f.helperProportions;
                this.instance.offset.click = f.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    h = true;
                    a.each(f.sortables, function() {
                        this.instance.positionAbs = f.positionAbs;
                        this.instance.helperProportions = f.helperProportions;
                        this.instance.offset.click = f.offset.click;
                        if (this !== i && this.instance._intersectsWith(this.instance.containerCache) && a.contains(i.instance.element[0], this.instance.element[0])) {
                            h = false
                        }
                        return h
                    })
                }
                if (h) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return g.helper[0]
                        };
                        d.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(d, true);
                        this.instance._mouseStart(d, true, true);
                        this.instance.offset.click.top = f.offset.click.top;
                        this.instance.offset.click.left = f.offset.click.left;
                        this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top;
                        f._trigger("toSortable", d);
                        f.dropped = this.instance.element;
                        f.currentItem = f.element;
                        this.instance.fromOutside = f
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(d)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(d, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        f._trigger("fromSortable", d);
                        f.dropped = false
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var c = a("body"),
                d = a(this).data("ui-draggable").options;
            if (c.css("cursor")) {
                d._cursor = c.css("cursor")
            }
            c.css("cursor", d.cursor)
        },
        stop: function() {
            var c = a(this).data("ui-draggable").options;
            if (c._cursor) {
                a("body").css("cursor", c._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(d, f) {
            var c = a(f.helper),
                g = a(this).data("ui-draggable").options;
            if (c.css("opacity")) {
                g._opacity = c.css("opacity")
            }
            c.css("opacity", g.opacity)
        },
        stop: function(c, d) {
            var f = a(this).data("ui-draggable").options;
            if (f._opacity) {
                a(d.helper).css("opacity", f._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var c = a(this).data("ui-draggable");
            if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
                c.overflowOffset = c.scrollParent.offset()
            }
        },
        drag: function(f) {
            var d = a(this).data("ui-draggable"),
                g = d.options,
                c = false;
            if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
                if (!g.axis || g.axis !== "x") {
                    if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - f.pageY < g.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + g.scrollSpeed
                    } else {
                        if (f.pageY - d.overflowOffset.top < g.scrollSensitivity) {
                            d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - g.scrollSpeed
                        }
                    }
                }
                if (!g.axis || g.axis !== "y") {
                    if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - f.pageX < g.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + g.scrollSpeed
                    } else {
                        if (f.pageX - d.overflowOffset.left < g.scrollSensitivity) {
                            d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - g.scrollSpeed
                        }
                    }
                }
            } else {
                if (!g.axis || g.axis !== "x") {
                    if (f.pageY - a(document).scrollTop() < g.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed)
                    } else {
                        if (a(window).height() - (f.pageY - a(document).scrollTop()) < g.scrollSensitivity) {
                            c = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)
                        }
                    }
                }
                if (!g.axis || g.axis !== "y") {
                    if (f.pageX - a(document).scrollLeft() < g.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed)
                    } else {
                        if (a(window).width() - (f.pageX - a(document).scrollLeft()) < g.scrollSensitivity) {
                            c = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed)
                        }
                    }
                }
            }
            if (c !== false && a.ui.ddmanager && !g.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(d, f)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var c = a(this).data("ui-draggable"),
                d = c.options;
            c.snapElements = [];
            a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function() {
                var g = a(this),
                    f = g.offset();
                if (this !== c.element[0]) {
                    c.snapElements.push({
                        item: this,
                        width: g.outerWidth(),
                        height: g.outerHeight(),
                        top: f.top,
                        left: f.left
                    })
                }
            })
        },
        drag: function(v, q) {
            var c, A, k, m, u, p, n, B, w, j, h = a(this).data("ui-draggable"),
                s = h.options,
                z = s.snapTolerance,
                y = q.offset.left,
                x = y + h.helperProportions.width,
                g = q.offset.top,
                f = g + h.helperProportions.height;
            for (w = h.snapElements.length - 1; w >= 0; w--) {
                u = h.snapElements[w].left;
                p = u + h.snapElements[w].width;
                n = h.snapElements[w].top;
                B = n + h.snapElements[w].height;
                if (x < u - z || y > p + z || f < n - z || g > B + z || !a.contains(h.snapElements[w].item.ownerDocument, h.snapElements[w].item)) {
                    if (h.snapElements[w].snapping) {
                        (h.options.snap.release && h.options.snap.release.call(h.element, v, a.extend(h._uiHash(), {
                            snapItem: h.snapElements[w].item
                        })))
                    }
                    h.snapElements[w].snapping = false;
                    continue
                }
                if (s.snapMode !== "inner") {
                    c = Math.abs(n - f) <= z;
                    A = Math.abs(B - g) <= z;
                    k = Math.abs(u - x) <= z;
                    m = Math.abs(p - y) <= z;
                    if (c) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: n - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (A) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: B,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: u - h.helperProportions.width
                        }).left - h.margins.left
                    }
                    if (m) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: p
                        }).left - h.margins.left
                    }
                }
                j = (c || A || k || m);
                if (s.snapMode !== "outer") {
                    c = Math.abs(n - g) <= z;
                    A = Math.abs(B - f) <= z;
                    k = Math.abs(u - y) <= z;
                    m = Math.abs(p - x) <= z;
                    if (c) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: n,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (A) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: B - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: u
                        }).left - h.margins.left
                    }
                    if (m) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: p - h.helperProportions.width
                        }).left - h.margins.left
                    }
                }
                if (!h.snapElements[w].snapping && (c || A || k || m || j)) {
                    (h.options.snap.snap && h.options.snap.snap.call(h.element, v, a.extend(h._uiHash(), {
                        snapItem: h.snapElements[w].item
                    })))
                }
                h.snapElements[w].snapping = (c || A || k || m || j)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var c, f = this.data("ui-draggable").options,
                d = a.makeArray(a(f.stack)).sort(function(h, g) {
                    return (parseInt(a(h).css("zIndex"), 10) || 0) - (parseInt(a(g).css("zIndex"), 10) || 0)
                });
            if (!d.length) {
                return
            }
            c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
            a(d).each(function(g) {
                a(this).css("zIndex", c + g)
            });
            this.css("zIndex", (c + d.length))
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(d, f) {
            var c = a(f.helper),
                g = a(this).data("ui-draggable").options;
            if (c.css("zIndex")) {
                g._zIndex = c.css("zIndex")
            }
            c.css("zIndex", g.zIndex)
        },
        stop: function(c, d) {
            var f = a(this).data("ui-draggable").options;
            if (f._zIndex) {
                a(d.helper).css("zIndex", f._zIndex)
            }
        }
    })
})(jQuery);
(function(b, c) {
    function a(f, d, g) {
        return (f > d) && (f < (d + g))
    }
    b.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var f = this.options,
                d = f.accept;
            this.isover = false;
            this.isout = true;
            this.accept = b.isFunction(d) ? d : function(g) {
                return g.is(d)
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            b.ui.ddmanager.droppables[f.scope] = b.ui.ddmanager.droppables[f.scope] || [];
            b.ui.ddmanager.droppables[f.scope].push(this);
            (f.addClasses && this.element.addClass("ui-droppable"))
        },
        _destroy: function() {
            var f = 0,
                d = b.ui.ddmanager.droppables[this.options.scope];
            for (; f < d.length; f++) {
                if (d[f] === this) {
                    d.splice(f, 1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(d, f) {
            if (d === "accept") {
                this.accept = b.isFunction(f) ? f : function(g) {
                    return g.is(f)
                }
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(f) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("activate", f, this.ui(d))
            }
        },
        _deactivate: function(f) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("deactivate", f, this.ui(d))
            }
        },
        _over: function(f) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over", f, this.ui(d))
            }
        },
        _out: function(f) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out", f, this.ui(d))
            }
        },
        _drop: function(f, g) {
            var d = g || b.ui.ddmanager.current,
                h = false;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return false
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = b.data(this, "ui-droppable");
                if (i.options.greedy && !i.options.disabled && i.options.scope === d.options.scope && i.accept.call(i.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance)) {
                    h = true;
                    return false
                }
            });
            if (h) {
                return false
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop", f, this.ui(d));
                return this.element
            }
            return false
        },
        ui: function(d) {
            return {
                draggable: (d.currentItem || d.element),
                helper: d.helper,
                position: d.position,
                offset: d.positionAbs
            }
        }
    });
    b.ui.intersect = function(s, k, p) {
        if (!k.offset) {
            return false
        }
        var i, j, g = (s.positionAbs || s.position.absolute).left,
            f = g + s.helperProportions.width,
            o = (s.positionAbs || s.position.absolute).top,
            n = o + s.helperProportions.height,
            h = k.offset.left,
            d = h + k.proportions.width,
            q = k.offset.top,
            m = q + k.proportions.height;
        switch (p) {
            case "fit":
                return (h <= g && f <= d && q <= o && n <= m);
            case "intersect":
                return (h < g + (s.helperProportions.width / 2) && f - (s.helperProportions.width / 2) < d && q < o + (s.helperProportions.height / 2) && n - (s.helperProportions.height / 2) < m);
            case "pointer":
                i = ((s.positionAbs || s.position.absolute).left + (s.clickOffset || s.offset.click).left);
                j = ((s.positionAbs || s.position.absolute).top + (s.clickOffset || s.offset.click).top);
                return a(j, q, k.proportions.height) && a(i, h, k.proportions.width);
            case "touch":
                return ((o >= q && o <= m) || (n >= q && n <= m) || (o < q && n > m)) && ((g >= h && g <= d) || (f >= h && f <= d) || (g < h && f > d));
            default:
                return false
        }
    };
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(h, l) {
            var g, f, d = b.ui.ddmanager.droppables[h.options.scope] || [],
                k = l ? l.type : null,
                n = (h.currentItem || h.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (g = 0; g < d.length; g++) {
                if (d[g].options.disabled || (h && !d[g].accept.call(d[g].element[0], (h.currentItem || h.element)))) {
                    continue
                }
                for (f = 0; f < n.length; f++) {
                    if (n[f] === d[g].element[0]) {
                        d[g].proportions.height = 0;
                        continue droppablesLoop
                    }
                }
                d[g].visible = d[g].element.css("display") !== "none";
                if (!d[g].visible) {
                    continue
                }
                if (k === "mousedown") {
                    d[g]._activate.call(d[g], l)
                }
                d[g].offset = d[g].element.offset();
                d[g].proportions = {
                    width: d[g].element[0].offsetWidth,
                    height: d[g].element[0].offsetHeight
                }
            }
        },
        drop: function(d, f) {
            var g = false;
            b.each((b.ui.ddmanager.droppables[d.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
                    g = this._drop.call(this, f) || g
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, f)
                }
            });
            return g
        },
        dragStart: function(d, f) {
            d.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!d.options.refreshPositions) {
                    b.ui.ddmanager.prepareOffsets(d, f)
                }
            })
        },
        drag: function(d, f) {
            if (d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, f)
            }
            b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var j, h, g, i = b.ui.intersect(d, this, this.options.tolerance),
                    k = !i && this.isover ? "isout" : (i && !this.isover ? "isover" : null);
                if (!k) {
                    return
                }
                if (this.options.greedy) {
                    h = this.options.scope;
                    g = this.element.parents(":data(ui-droppable)").filter(function() {
                        return b.data(this, "ui-droppable").options.scope === h
                    });
                    if (g.length) {
                        j = b.data(g[0], "ui-droppable");
                        j.greedyChild = (k === "isover")
                    }
                }
                if (j && k === "isover") {
                    j.isover = false;
                    j.isout = true;
                    j._out.call(j, f)
                }
                this[k] = true;
                this[k === "isout" ? "isover" : "isout"] = false;
                this[k === "isover" ? "_over" : "_out"].call(this, f);
                if (j && k === "isout") {
                    j.isout = false;
                    j.isover = true;
                    j._over.call(j, f)
                }
            })
        },
        dragStop: function(d, f) {
            d.element.parentsUntil("body").unbind("scroll.droppable");
            if (!d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, f)
            }
        }
    }
})(jQuery);
(function(c, d) {
    function b(f) {
        return parseInt(f, 10) || 0
    }

    function a(f) {
        return !isNaN(parseInt(f, 10))
    }
    c.widget("ui.resizable", c.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var m, g, k, h, f, j = this,
                l = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {
                _aspectRatio: !!(l.aspectRatio),
                aspectRatio: l.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = l.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                m = this.handles.split(",");
                this.handles = {};
                for (g = 0; g < m.length; g++) {
                    k = c.trim(m[g]);
                    f = "ui-resizable-" + k;
                    h = c("<div class='ui-resizable-handle " + f + "'></div>");
                    h.css({
                        zIndex: l.zIndex
                    });
                    if ("se" === k) {
                        h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[k] = ".ui-resizable-" + k;
                    this.element.append(h)
                }
            }
            this._renderAxis = function(r) {
                var o, p, n, q;
                r = r || this.element;
                for (o in this.handles) {
                    if (this.handles[o].constructor === String) {
                        this.handles[o] = c(this.handles[o], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        p = c(this.handles[o], this.element);
                        q = /sw|ne|nw|se|n|s/.test(o) ? p.outerHeight() : p.outerWidth();
                        n = ["padding", /ne|nw|n/.test(o) ? "Top" : /se|sw|s/.test(o) ? "Bottom" : /^e$/.test(o) ? "Right" : "Left"].join("");
                        r.css(n, q);
                        this._proportionallyResize()
                    }
                    if (!c(this.handles[o]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!j.resizing) {
                    if (this.className) {
                        h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    j.axis = h && h[1] ? h[1] : "se"
                }
            });
            if (l.autoHide) {
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (l.disabled) {
                        return
                    }
                    c(this).removeClass("ui-resizable-autohide");
                    j._handles.show()
                }).mouseleave(function() {
                    if (l.disabled) {
                        return
                    }
                    if (!j.resizing) {
                        c(this).addClass("ui-resizable-autohide");
                        j._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var g, f = function(h) {
                c(h).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                f(this.element);
                g = this.element;
                this.originalElement.css({
                    position: g.css("position"),
                    width: g.outerWidth(),
                    height: g.outerHeight(),
                    top: g.css("top"),
                    left: g.css("left")
                }).insertAfter(g);
                g.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            f(this.originalElement);
            return this
        },
        _mouseCapture: function(h) {
            var g, j, f = false;
            for (g in this.handles) {
                j = c(this.handles[g])[0];
                if (j === h.target || c.contains(j, h.target)) {
                    f = true
                }
            }
            return !this.options.disabled && f
        },
        _mouseStart: function(h) {
            var l, i, k, j = this.options,
                g = this.element.position(),
                f = this.element;
            this.resizing = true;
            if ((/absolute/).test(f.css("position"))) {
                f.css({
                    position: "absolute",
                    top: f.css("top"),
                    left: f.css("left")
                })
            } else {
                if (f.is(".ui-draggable")) {
                    f.css({
                        position: "absolute",
                        top: g.top,
                        left: g.left
                    })
                }
            }
            this._renderProxy();
            l = b(this.helper.css("left"));
            i = b(this.helper.css("top"));
            if (j.containment) {
                l += c(j.containment).scrollLeft() || 0;
                i += c(j.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: l,
                top: i
            };
            this.size = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.originalPosition = {
                left: l,
                top: i
            };
            this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            };
            this.originalMousePosition = {
                left: h.pageX,
                top: h.pageY
            };
            this.aspectRatio = (typeof j.aspectRatio === "number") ? j.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            k = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", k === "auto" ? this.axis + "-resize" : k);
            f.addClass("ui-resizable-resizing");
            this._propagate("start", h);
            return true
        },
        _mouseDrag: function(f) {
            var l, h = this.helper,
                m = {},
                j = this.originalMousePosition,
                n = this.axis,
                p = this.position.top,
                g = this.position.left,
                o = this.size.width,
                k = this.size.height,
                r = (f.pageX - j.left) || 0,
                q = (f.pageY - j.top) || 0,
                i = this._change[n];
            if (!i) {
                return false
            }
            l = i.apply(this, [f, r, q]);
            this._updateVirtualBoundaries(f.shiftKey);
            if (this._aspectRatio || f.shiftKey) {
                l = this._updateRatio(l, f)
            }
            l = this._respectSize(l, f);
            this._updateCache(l);
            this._propagate("resize", f);
            if (this.position.top !== p) {
                m.top = this.position.top + "px"
            }
            if (this.position.left !== g) {
                m.left = this.position.left + "px"
            }
            if (this.size.width !== o) {
                m.width = this.size.width + "px"
            }
            if (this.size.height !== k) {
                m.height = this.size.height + "px"
            }
            h.css(m);
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!c.isEmptyObject(m)) {
                this._trigger("resize", f, this.ui())
            }
            return false
        },
        _mouseStop: function(i) {
            this.resizing = false;
            var h, f, g, l, p, k, n, j = this.options,
                m = this;
            if (this._helper) {
                h = this._proportionallyResizeElements;
                f = h.length && (/textarea/i).test(h[0].nodeName);
                g = f && c.ui.hasScroll(h[0], "left") ? 0 : m.sizeDiff.height;
                l = f ? 0 : m.sizeDiff.width;
                p = {
                    width: (m.helper.width() - l),
                    height: (m.helper.height() - g)
                };
                k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null;
                n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
                if (!j.animate) {
                    this.element.css(c.extend(p, {
                        top: n,
                        left: k
                    }))
                }
                m.helper.height(m.size.height);
                m.helper.width(m.size.width);
                if (this._helper && !j.animate) {
                    this._proportionallyResize()
                }
            }
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", i);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updateVirtualBoundaries: function(h) {
            var j, i, g, l, f, k = this.options;
            f = {
                minWidth: a(k.minWidth) ? k.minWidth : 0,
                maxWidth: a(k.maxWidth) ? k.maxWidth : Infinity,
                minHeight: a(k.minHeight) ? k.minHeight : 0,
                maxHeight: a(k.maxHeight) ? k.maxHeight : Infinity
            };
            if (this._aspectRatio || h) {
                j = f.minHeight * this.aspectRatio;
                g = f.minWidth / this.aspectRatio;
                i = f.maxHeight * this.aspectRatio;
                l = f.maxWidth / this.aspectRatio;
                if (j > f.minWidth) {
                    f.minWidth = j
                }
                if (g > f.minHeight) {
                    f.minHeight = g
                }
                if (i < f.maxWidth) {
                    f.maxWidth = i
                }
                if (l < f.maxHeight) {
                    f.maxHeight = l
                }
            }
            this._vBoundaries = f
        },
        _updateCache: function(f) {
            this.offset = this.helper.offset();
            if (a(f.left)) {
                this.position.left = f.left
            }
            if (a(f.top)) {
                this.position.top = f.top
            }
            if (a(f.height)) {
                this.size.height = f.height
            }
            if (a(f.width)) {
                this.size.width = f.width
            }
        },
        _updateRatio: function(h) {
            var i = this.position,
                g = this.size,
                f = this.axis;
            if (a(h.height)) {
                h.width = (h.height * this.aspectRatio)
            } else {
                if (a(h.width)) {
                    h.height = (h.width / this.aspectRatio)
                }
            }
            if (f === "sw") {
                h.left = i.left + (g.width - h.width);
                h.top = null
            }
            if (f === "nw") {
                h.top = i.top + (g.height - h.height);
                h.left = i.left + (g.width - h.width)
            }
            return h
        },
        _respectSize: function(k) {
            var h = this._vBoundaries,
                n = this.axis,
                q = a(k.width) && h.maxWidth && (h.maxWidth < k.width),
                l = a(k.height) && h.maxHeight && (h.maxHeight < k.height),
                i = a(k.width) && h.minWidth && (h.minWidth > k.width),
                p = a(k.height) && h.minHeight && (h.minHeight > k.height),
                g = this.originalPosition.left + this.originalSize.width,
                m = this.position.top + this.size.height,
                j = /sw|nw|w/.test(n),
                f = /nw|ne|n/.test(n);
            if (i) {
                k.width = h.minWidth
            }
            if (p) {
                k.height = h.minHeight
            }
            if (q) {
                k.width = h.maxWidth
            }
            if (l) {
                k.height = h.maxHeight
            }
            if (i && j) {
                k.left = g - h.minWidth
            }
            if (q && j) {
                k.left = g - h.maxWidth
            }
            if (p && f) {
                k.top = m - h.minHeight
            }
            if (l && f) {
                k.top = m - h.maxHeight
            }
            if (!k.width && !k.height && !k.left && k.top) {
                k.top = null
            } else {
                if (!k.width && !k.height && !k.top && k.left) {
                    k.left = null
                }
            }
            return k
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var k, g, m, f, l, h = this.helper || this.element;
            for (k = 0; k < this._proportionallyResizeElements.length; k++) {
                l = this._proportionallyResizeElements[k];
                if (!this.borderDif) {
                    this.borderDif = [];
                    m = [l.css("borderTopWidth"), l.css("borderRightWidth"), l.css("borderBottomWidth"), l.css("borderLeftWidth")];
                    f = [l.css("paddingTop"), l.css("paddingRight"), l.css("paddingBottom"), l.css("paddingLeft")];
                    for (g = 0; g < m.length; g++) {
                        this.borderDif[g] = (parseInt(m[g], 10) || 0) + (parseInt(f[g], 10) || 0)
                    }
                }
                l.css({
                    height: (h.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (h.width() - this.borderDif[1] - this.borderDif[3]) || 0
                })
            }
        },
        _renderProxy: function() {
            var f = this.element,
                g = this.options;
            this.elementOffset = f.offset();
            if (this._helper) {
                this.helper = this.helper || c("<div style='overflow:hidden;'></div>");
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++g.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(g, f) {
                return {
                    width: this.originalSize.width + f
                }
            },
            w: function(h, f) {
                var g = this.originalSize,
                    i = this.originalPosition;
                return {
                    left: i.left + f,
                    width: g.width - f
                }
            },
            n: function(i, g, f) {
                var h = this.originalSize,
                    j = this.originalPosition;
                return {
                    top: j.top + f,
                    height: h.height - f
                }
            },
            s: function(h, g, f) {
                return {
                    height: this.originalSize.height + f
                }
            },
            se: function(h, g, f) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [h, g, f]))
            },
            sw: function(h, g, f) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [h, g, f]))
            },
            ne: function(h, g, f) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [h, g, f]))
            },
            nw: function(h, g, f) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [h, g, f]))
            }
        },
        _propagate: function(g, f) {
            c.ui.plugin.call(this, g, [f, this.ui()]);
            (g !== "resize" && this._trigger(g, f, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    c.ui.plugin.add("resizable", "animate", {
        stop: function(i) {
            var n = c(this).data("ui-resizable"),
                k = n.options,
                h = n._proportionallyResizeElements,
                f = h.length && (/textarea/i).test(h[0].nodeName),
                g = f && c.ui.hasScroll(h[0], "left") ? 0 : n.sizeDiff.height,
                m = f ? 0 : n.sizeDiff.width,
                j = {
                    width: (n.size.width - m),
                    height: (n.size.height - g)
                },
                l = (parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left)) || null,
                p = (parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top)) || null;
            n.element.animate(c.extend(j, p && l ? {
                top: p,
                left: l
            } : {}), {
                duration: k.animateDuration,
                easing: k.animateEasing,
                step: function() {
                    var o = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    if (h && h.length) {
                        c(h[0]).css({
                            width: o.width,
                            height: o.height
                        })
                    }
                    n._updateCache(o);
                    n._propagate("resize", i)
                }
            })
        }
    });
    c.ui.plugin.add("resizable", "containment", {
        start: function() {
            var n, h, r, f, m, i, s, q = c(this).data("ui-resizable"),
                l = q.options,
                k = q.element,
                g = l.containment,
                j = (g instanceof c) ? g.get(0) : (/parent/.test(g)) ? k.parent().get(0) : g;
            if (!j) {
                return
            }
            q.containerElement = c(j);
            if (/document/.test(g) || g === document) {
                q.containerOffset = {
                    left: 0,
                    top: 0
                };
                q.containerPosition = {
                    left: 0,
                    top: 0
                };
                q.parentData = {
                    element: c(document),
                    left: 0,
                    top: 0,
                    width: c(document).width(),
                    height: c(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                n = c(j);
                h = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    h[p] = b(n.css("padding" + o))
                });
                q.containerOffset = n.offset();
                q.containerPosition = n.position();
                q.containerSize = {
                    height: (n.innerHeight() - h[3]),
                    width: (n.innerWidth() - h[1])
                };
                r = q.containerOffset;
                f = q.containerSize.height;
                m = q.containerSize.width;
                i = (c.ui.hasScroll(j, "left") ? j.scrollWidth : m);
                s = (c.ui.hasScroll(j) ? j.scrollHeight : f);
                q.parentData = {
                    element: j,
                    left: r.left,
                    top: r.top,
                    width: i,
                    height: s
                }
            }
        },
        resize: function(g) {
            var l, r, k, j, m = c(this).data("ui-resizable"),
                i = m.options,
                p = m.containerOffset,
                n = m.position,
                q = m._aspectRatio || g.shiftKey,
                f = {
                    top: 0,
                    left: 0
                },
                h = m.containerElement;
            if (h[0] !== document && (/static/).test(h.css("position"))) {
                f = p
            }
            if (n.left < (m._helper ? p.left : 0)) {
                m.size.width = m.size.width + (m._helper ? (m.position.left - p.left) : (m.position.left - f.left));
                if (q) {
                    m.size.height = m.size.width / m.aspectRatio
                }
                m.position.left = i.helper ? p.left : 0
            }
            if (n.top < (m._helper ? p.top : 0)) {
                m.size.height = m.size.height + (m._helper ? (m.position.top - p.top) : m.position.top);
                if (q) {
                    m.size.width = m.size.height * m.aspectRatio
                }
                m.position.top = m._helper ? p.top : 0
            }
            m.offset.left = m.parentData.left + m.position.left;
            m.offset.top = m.parentData.top + m.position.top;
            l = Math.abs((m._helper ? m.offset.left - f.left : (m.offset.left - f.left)) + m.sizeDiff.width);
            r = Math.abs((m._helper ? m.offset.top - f.top : (m.offset.top - p.top)) + m.sizeDiff.height);
            k = m.containerElement.get(0) === m.element.parent().get(0);
            j = /relative|absolute/.test(m.containerElement.css("position"));
            if (k && j) {
                l -= m.parentData.left
            }
            if (l + m.size.width >= m.parentData.width) {
                m.size.width = m.parentData.width - l;
                if (q) {
                    m.size.height = m.size.width / m.aspectRatio
                }
            }
            if (r + m.size.height >= m.parentData.height) {
                m.size.height = m.parentData.height - r;
                if (q) {
                    m.size.width = m.size.height * m.aspectRatio
                }
            }
        },
        stop: function() {
            var l = c(this).data("ui-resizable"),
                g = l.options,
                m = l.containerOffset,
                f = l.containerPosition,
                i = l.containerElement,
                j = c(l.helper),
                p = j.offset(),
                n = j.outerWidth() - l.sizeDiff.width,
                k = j.outerHeight() - l.sizeDiff.height;
            if (l._helper && !g.animate && (/relative/).test(i.css("position"))) {
                c(this).css({
                    left: p.left - f.left - m.left,
                    width: n,
                    height: k
                })
            }
            if (l._helper && !g.animate && (/static/).test(i.css("position"))) {
                c(this).css({
                    left: p.left - f.left - m.left,
                    width: n,
                    height: k
                })
            }
        }
    });
    c.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var f = c(this).data("ui-resizable"),
                h = f.options,
                g = function(i) {
                    c(i).each(function() {
                        var j = c(this);
                        j.data("ui-resizable-alsoresize", {
                            width: parseInt(j.width(), 10),
                            height: parseInt(j.height(), 10),
                            left: parseInt(j.css("left"), 10),
                            top: parseInt(j.css("top"), 10)
                        })
                    })
                };
            if (typeof(h.alsoResize) === "object" && !h.alsoResize.parentNode) {
                if (h.alsoResize.length) {
                    h.alsoResize = h.alsoResize[0];
                    g(h.alsoResize)
                } else {
                    c.each(h.alsoResize, function(i) {
                        g(i)
                    })
                }
            } else {
                g(h.alsoResize)
            }
        },
        resize: function(h, j) {
            var g = c(this).data("ui-resizable"),
                k = g.options,
                i = g.originalSize,
                m = g.originalPosition,
                l = {
                    height: (g.size.height - i.height) || 0,
                    width: (g.size.width - i.width) || 0,
                    top: (g.position.top - m.top) || 0,
                    left: (g.position.left - m.left) || 0
                },
                f = function(n, o) {
                    c(n).each(function() {
                        var r = c(this),
                            s = c(this).data("ui-resizable-alsoresize"),
                            q = {},
                            p = o && o.length ? o : r.parents(j.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        c.each(p, function(t, v) {
                            var u = (s[v] || 0) + (l[v] || 0);
                            if (u && u >= 0) {
                                q[v] = u || null
                            }
                        });
                        r.css(q)
                    })
                };
            if (typeof(k.alsoResize) === "object" && !k.alsoResize.nodeType) {
                c.each(k.alsoResize, function(n, o) {
                    f(n, o)
                })
            } else {
                f(k.alsoResize)
            }
        },
        stop: function() {
            c(this).removeData("resizable-alsoresize")
        }
    });
    c.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var g = c(this).data("ui-resizable"),
                h = g.options,
                f = g.size;
            g.ghost = g.originalElement.clone();
            g.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof h.ghost === "string" ? h.ghost : "");
            g.ghost.appendTo(g.helper)
        },
        resize: function() {
            var f = c(this).data("ui-resizable");
            if (f.ghost) {
                f.ghost.css({
                    position: "relative",
                    height: f.size.height,
                    width: f.size.width
                })
            }
        },
        stop: function() {
            var f = c(this).data("ui-resizable");
            if (f.ghost && f.helper) {
                f.helper.get(0).removeChild(f.ghost.get(0))
            }
        }
    });
    c.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var s = c(this).data("ui-resizable"),
                j = s.options,
                t = s.size,
                l = s.originalSize,
                p = s.originalPosition,
                u = s.axis,
                g = typeof j.grid === "number" ? [j.grid, j.grid] : j.grid,
                q = (g[0] || 1),
                n = (g[1] || 1),
                i = Math.round((t.width - l.width) / q) * q,
                h = Math.round((t.height - l.height) / n) * n,
                m = l.width + i,
                f = l.height + h,
                k = j.maxWidth && (j.maxWidth < m),
                v = j.maxHeight && (j.maxHeight < f),
                r = j.minWidth && (j.minWidth > m),
                w = j.minHeight && (j.minHeight > f);
            j.grid = g;
            if (r) {
                m = m + q
            }
            if (w) {
                f = f + n
            }
            if (k) {
                m = m - q
            }
            if (v) {
                f = f - n
            }
            if (/^(se|s|e)$/.test(u)) {
                s.size.width = m;
                s.size.height = f
            } else {
                if (/^(ne)$/.test(u)) {
                    s.size.width = m;
                    s.size.height = f;
                    s.position.top = p.top - h
                } else {
                    if (/^(sw)$/.test(u)) {
                        s.size.width = m;
                        s.size.height = f;
                        s.position.left = p.left - i
                    } else {
                        s.size.width = m;
                        s.size.height = f;
                        s.position.top = p.top - h;
                        s.position.left = p.left - i
                    }
                }
            }
        }
    })
})(jQuery);
(function(a, b) {
    a.widget("ui.selectable", a.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var d, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                d = a(c.options.filter, c.element[0]);
                d.addClass("ui-selectee");
                d.each(function() {
                    var f = a(this),
                        g = f.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: f,
                        left: g.left,
                        top: g.top,
                        right: g.left + f.outerWidth(),
                        bottom: g.top + f.outerHeight(),
                        startselected: false,
                        selected: f.hasClass("ui-selected"),
                        selecting: f.hasClass("ui-selecting"),
                        unselecting: f.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = d.addClass("ui-selectee");
            this._mouseInit();
            this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(f) {
            var d = this,
                c = this.options;
            this.opos = [f.pageX, f.pageY];
            if (this.options.disabled) {
                return
            }
            this.selectees = a(c.filter, this.element[0]);
            this._trigger("start", f);
            a(c.appendTo).append(this.helper);
            this.helper.css({
                left: f.pageX,
                top: f.pageY,
                width: 0,
                height: 0
            });
            if (c.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var g = a.data(this, "selectable-item");
                g.startselected = true;
                if (!f.metaKey && !f.ctrlKey) {
                    g.$element.removeClass("ui-selected");
                    g.selected = false;
                    g.$element.addClass("ui-unselecting");
                    g.unselecting = true;
                    d._trigger("unselecting", f, {
                        unselecting: g.element
                    })
                }
            });
            a(f.target).parents().addBack().each(function() {
                var g, h = a.data(this, "selectable-item");
                if (h) {
                    g = (!f.metaKey && !f.ctrlKey) || !h.$element.hasClass("ui-selected");
                    h.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting");
                    h.unselecting = !g;
                    h.selecting = g;
                    h.selected = g;
                    if (g) {
                        d._trigger("selecting", f, {
                            selecting: h.element
                        })
                    } else {
                        d._trigger("unselecting", f, {
                            unselecting: h.element
                        })
                    }
                    return false
                }
            })
        },
        _mouseDrag: function(k) {
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var h, j = this,
                f = this.options,
                d = this.opos[0],
                i = this.opos[1],
                c = k.pageX,
                g = k.pageY;
            if (d > c) {
                h = c;
                c = d;
                d = h
            }
            if (i > g) {
                h = g;
                g = i;
                i = h
            }
            this.helper.css({
                left: d,
                top: i,
                width: c - d,
                height: g - i
            });
            this.selectees.each(function() {
                var l = a.data(this, "selectable-item"),
                    m = false;
                if (!l || l.element === j.element[0]) {
                    return
                }
                if (f.tolerance === "touch") {
                    m = (!(l.left > c || l.right < d || l.top > g || l.bottom < i))
                } else {
                    if (f.tolerance === "fit") {
                        m = (l.left > d && l.right < c && l.top > i && l.bottom < g)
                    }
                }
                if (m) {
                    if (l.selected) {
                        l.$element.removeClass("ui-selected");
                        l.selected = false
                    }
                    if (l.unselecting) {
                        l.$element.removeClass("ui-unselecting");
                        l.unselecting = false
                    }
                    if (!l.selecting) {
                        l.$element.addClass("ui-selecting");
                        l.selecting = true;
                        j._trigger("selecting", k, {
                            selecting: l.element
                        })
                    }
                } else {
                    if (l.selecting) {
                        if ((k.metaKey || k.ctrlKey) && l.startselected) {
                            l.$element.removeClass("ui-selecting");
                            l.selecting = false;
                            l.$element.addClass("ui-selected");
                            l.selected = true
                        } else {
                            l.$element.removeClass("ui-selecting");
                            l.selecting = false;
                            if (l.startselected) {
                                l.$element.addClass("ui-unselecting");
                                l.unselecting = true
                            }
                            j._trigger("unselecting", k, {
                                unselecting: l.element
                            })
                        }
                    }
                    if (l.selected) {
                        if (!k.metaKey && !k.ctrlKey && !l.startselected) {
                            l.$element.removeClass("ui-selected");
                            l.selected = false;
                            l.$element.addClass("ui-unselecting");
                            l.unselecting = true;
                            j._trigger("unselecting", k, {
                                unselecting: l.element
                            })
                        }
                    }
                }
            });
            return false
        },
        _mouseStop: function(d) {
            var c = this;
            this.dragged = false;
            a(".ui-unselecting", this.element[0]).each(function() {
                var f = a.data(this, "selectable-item");
                f.$element.removeClass("ui-unselecting");
                f.unselecting = false;
                f.startselected = false;
                c._trigger("unselected", d, {
                    unselected: f.element
                })
            });
            a(".ui-selecting", this.element[0]).each(function() {
                var f = a.data(this, "selectable-item");
                f.$element.removeClass("ui-selecting").addClass("ui-selected");
                f.selecting = false;
                f.selected = true;
                f.startselected = true;
                c._trigger("selected", d, {
                    selected: f.element
                })
            });
            this._trigger("stop", d);
            this.helper.remove();
            return false
        }
    })
})(jQuery);
(function(b, d) {
    function a(g, f, h) {
        return (g > f) && (g < (f + h))
    }

    function c(f) {
        return (/left|right/).test(f.css("float")) || (/inline|table-cell/).test(f.css("display"))
    }
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var f = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? f.axis === "x" || c(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var f = this.items.length - 1; f >= 0; f--) {
                this.items[f].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _setOption: function(f, g) {
            if (f === "disabled") {
                this.options[f] = g;
                this.widget().toggleClass("ui-sortable-disabled", !!g)
            } else {
                b.Widget.prototype._setOption.apply(this, arguments)
            }
        },
        _mouseCapture: function(h, i) {
            var f = null,
                j = false,
                g = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(h);
            b(h.target).parents().each(function() {
                if (b.data(this, g.widgetName + "-item") === g) {
                    f = b(this);
                    return false
                }
            });
            if (b.data(h.target, g.widgetName + "-item") === g) {
                f = b(h.target)
            }
            if (!f) {
                return false
            }
            if (this.options.handle && !i) {
                b(this.options.handle, f).find("*").addBack().each(function() {
                    if (this === h.target) {
                        j = true
                    }
                });
                if (!j) {
                    return false
                }
            }
            this.currentItem = f;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(j, k, g) {
            var h, f, l = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(j);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            b.extend(this.offset, {
                click: {
                    left: j.pageX - this.offset.left,
                    top: j.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(j);
            this.originalPageX = j.pageX;
            this.originalPageY = j.pageY;
            (l.cursorAt && this._adjustOffsetFromHelper(l.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (l.containment) {
                this._setContainment()
            }
            if (l.cursor && l.cursor !== "auto") {
                f = this.document.find("body");
                this.storedCursor = f.css("cursor");
                f.css("cursor", l.cursor);
                this.storedStylesheet = b("<style>*{ cursor: " + l.cursor + " !important; }</style>").appendTo(f)
            }
            if (l.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", l.opacity)
            }
            if (l.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", l.zIndex)
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", j, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!g) {
                for (h = this.containers.length - 1; h >= 0; h--) {
                    this.containers[h]._trigger("activate", j, this._uiHash(this))
                }
            }
            if (b.ui.ddmanager) {
                b.ui.ddmanager.current = this
            }
            if (b.ui.ddmanager && !l.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, j)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(j);
            return true
        },
        _mouseDrag: function(k) {
            var h, j, g, m, l = this.options,
                f = false;
            this.position = this._generatePosition(k);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - k.pageY < l.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = f = this.scrollParent[0].scrollTop + l.scrollSpeed
                    } else {
                        if (k.pageY - this.overflowOffset.top < l.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = f = this.scrollParent[0].scrollTop - l.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - k.pageX < l.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = f = this.scrollParent[0].scrollLeft + l.scrollSpeed
                    } else {
                        if (k.pageX - this.overflowOffset.left < l.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = f = this.scrollParent[0].scrollLeft - l.scrollSpeed
                        }
                    }
                } else {
                    if (k.pageY - b(document).scrollTop() < l.scrollSensitivity) {
                        f = b(document).scrollTop(b(document).scrollTop() - l.scrollSpeed)
                    } else {
                        if (b(window).height() - (k.pageY - b(document).scrollTop()) < l.scrollSensitivity) {
                            f = b(document).scrollTop(b(document).scrollTop() + l.scrollSpeed)
                        }
                    }
                    if (k.pageX - b(document).scrollLeft() < l.scrollSensitivity) {
                        f = b(document).scrollLeft(b(document).scrollLeft() - l.scrollSpeed)
                    } else {
                        if (b(window).width() - (k.pageX - b(document).scrollLeft()) < l.scrollSensitivity) {
                            f = b(document).scrollLeft(b(document).scrollLeft() + l.scrollSpeed)
                        }
                    }
                }
                if (f !== false && b.ui.ddmanager && !l.dropBehaviour) {
                    b.ui.ddmanager.prepareOffsets(this, k)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (h = this.items.length - 1; h >= 0; h--) {
                j = this.items[h];
                g = j.item[0];
                m = this._intersectsWithPointer(j);
                if (!m) {
                    continue
                }
                if (j.instance !== this.currentContainer) {
                    continue
                }
                if (g !== this.currentItem[0] && this.placeholder[m === 1 ? "next" : "prev"]()[0] !== g && !b.contains(this.placeholder[0], g) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], g) : true)) {
                    this.direction = m === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(j)) {
                        this._rearrange(k, j)
                    } else {
                        break
                    }
                    this._trigger("change", k, this._uiHash());
                    break
                }
            }
            this._contactContainers(k);
            if (b.ui.ddmanager) {
                b.ui.ddmanager.drag(this, k)
            }
            this._trigger("sort", k, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(h, j) {
            if (!h) {
                return
            }
            if (b.ui.ddmanager && !this.options.dropBehaviour) {
                b.ui.ddmanager.drop(this, h)
            }
            if (this.options.revert) {
                var g = this,
                    k = this.placeholder.offset(),
                    f = this.options.axis,
                    i = {};
                if (!f || f === "x") {
                    i.left = k.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!f || f === "y") {
                    i.top = k.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                b(this.helper).animate(i, parseInt(this.options.revert, 10) || 500, function() {
                    g._clear(h)
                })
            } else {
                this._clear(h, j)
            }
            return false
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var f = this.containers.length - 1; f >= 0; f--) {
                    this.containers[f]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[f].containerCache.over) {
                        this.containers[f]._trigger("out", null, this._uiHash(this));
                        this.containers[f].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                b.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    b(this.domPosition.prev).after(this.currentItem)
                } else {
                    b(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize: function(h) {
            var f = this._getItemsAsjQuery(h && h.connected),
                g = [];
            h = h || {};
            b(f).each(function() {
                var i = (b(h.item || this).attr(h.attribute || "id") || "").match(h.expression || (/(.+)[\-=_](.+)/));
                if (i) {
                    g.push((h.key || i[1] + "[]") + "=" + (h.key && h.expression ? i[1] : i[2]))
                }
            });
            if (!g.length && h.key) {
                g.push(h.key + "=")
            }
            return g.join("&")
        },
        toArray: function(h) {
            var f = this._getItemsAsjQuery(h && h.connected),
                g = [];
            h = h || {};
            f.each(function() {
                g.push(b(h.item || this).attr(h.attribute || "id") || "")
            });
            return g
        },
        _intersectsWith: function(s) {
            var h = this.positionAbs.left,
                g = h + this.helperProportions.width,
                p = this.positionAbs.top,
                o = p + this.helperProportions.height,
                i = s.left,
                f = i + s.width,
                u = s.top,
                n = u + s.height,
                v = this.offset.click.top,
                m = this.offset.click.left,
                k = (this.options.axis === "x") || ((p + v) > u && (p + v) < n),
                q = (this.options.axis === "y") || ((h + m) > i && (h + m) < f),
                j = k && q;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > s[this.floating ? "width" : "height"])) {
                return j
            } else {
                return (i < h + (this.helperProportions.width / 2) && g - (this.helperProportions.width / 2) < f && u < p + (this.helperProportions.height / 2) && o - (this.helperProportions.height / 2) < n)
            }
        },
        _intersectsWithPointer: function(h) {
            var i = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, h.top, h.height),
                g = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, h.left, h.width),
                k = i && g,
                f = this._getDragVerticalDirection(),
                j = this._getDragHorizontalDirection();
            if (!k) {
                return false
            }
            return this.floating ? (((j && j === "right") || f === "down") ? 2 : 1) : (f && (f === "down" ? 2 : 1))
        },
        _intersectsWithSides: function(i) {
            var g = a(this.positionAbs.top + this.offset.click.top, i.top + (i.height / 2), i.height),
                h = a(this.positionAbs.left + this.offset.click.left, i.left + (i.width / 2), i.width),
                f = this._getDragVerticalDirection(),
                j = this._getDragHorizontalDirection();
            if (this.floating && j) {
                return ((j === "right" && h) || (j === "left" && !h))
            } else {
                return f && ((f === "down" && g) || (f === "up" && !g))
            }
        },
        _getDragVerticalDirection: function() {
            var f = this.positionAbs.top - this.lastPositionAbs.top;
            return f !== 0 && (f > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var f = this.positionAbs.left - this.lastPositionAbs.left;
            return f !== 0 && (f > 0 ? "right" : "left")
        },
        refresh: function(f) {
            this._refreshItems(f);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var f = this.options;
            return f.connectWith.constructor === String ? [f.connectWith] : f.connectWith
        },
        _getItemsAsjQuery: function(m) {
            var k, h, o, n, f = [],
                g = [],
                l = this._connectWith();
            if (l && m) {
                for (k = l.length - 1; k >= 0; k--) {
                    o = b(l[k]);
                    for (h = o.length - 1; h >= 0; h--) {
                        n = b.data(o[h], this.widgetFullName);
                        if (n && n !== this && !n.options.disabled) {
                            g.push([b.isFunction(n.options.items) ? n.options.items.call(n.element) : b(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n])
                        }
                    }
                }
            }
            g.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (k = g.length - 1; k >= 0; k--) {
                g[k][0].each(function() {
                    f.push(this)
                })
            }
            return b(f)
        },
        _removeCurrentsFromItems: function() {
            var f = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(h) {
                for (var g = 0; g < f.length; g++) {
                    if (f[g] === h.item[0]) {
                        return false
                    }
                }
                return true
            })
        },
        _refreshItems: function(f) {
            this.items = [];
            this.containers = [this];
            var l, h, q, m, p, g, s, r, n = this.items,
                k = [
                    [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], f, {
                        item: this.currentItem
                    }) : b(this.options.items, this.element), this]
                ],
                o = this._connectWith();
            if (o && this.ready) {
                for (l = o.length - 1; l >= 0; l--) {
                    q = b(o[l]);
                    for (h = q.length - 1; h >= 0; h--) {
                        m = b.data(q[h], this.widgetFullName);
                        if (m && m !== this && !m.options.disabled) {
                            k.push([b.isFunction(m.options.items) ? m.options.items.call(m.element[0], f, {
                                item: this.currentItem
                            }) : b(m.options.items, m.element), m]);
                            this.containers.push(m)
                        }
                    }
                }
            }
            for (l = k.length - 1; l >= 0; l--) {
                p = k[l][1];
                g = k[l][0];
                for (h = 0, r = g.length; h < r; h++) {
                    s = b(g[h]);
                    s.data(this.widgetName + "-item", p);
                    n.push({
                        item: s,
                        instance: p,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(f) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var h, j, g, k;
            for (h = this.items.length - 1; h >= 0; h--) {
                j = this.items[h];
                if (j.instance !== this.currentContainer && this.currentContainer && j.item[0] !== this.currentItem[0]) {
                    continue
                }
                g = this.options.toleranceElement ? b(this.options.toleranceElement, j.item) : j.item;
                if (!f) {
                    j.width = g.outerWidth();
                    j.height = g.outerHeight()
                }
                k = g.offset();
                j.left = k.left;
                j.top = k.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (h = this.containers.length - 1; h >= 0; h--) {
                    k = this.containers[h].element.offset();
                    this.containers[h].containerCache.left = k.left;
                    this.containers[h].containerCache.top = k.top;
                    this.containers[h].containerCache.width = this.containers[h].element.outerWidth();
                    this.containers[h].containerCache.height = this.containers[h].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(g) {
            g = g || this;
            var f, h = g.options;
            if (!h.placeholder || h.placeholder.constructor === String) {
                f = h.placeholder;
                h.placeholder = {
                    element: function() {
                        var j = g.currentItem[0].nodeName.toLowerCase(),
                            i = b("<" + j + ">", g.document[0]).addClass(f || g.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (j === "tr") {
                            g.currentItem.children().each(function() {
                                b("<td>&#160;</td>", g.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(i)
                            })
                        } else {
                            if (j === "img") {
                                i.attr("src", g.currentItem.attr("src"))
                            }
                        }
                        if (!f) {
                            i.css("visibility", "hidden")
                        }
                        return i
                    },
                    update: function(i, j) {
                        if (f && !h.forcePlaceholderSize) {
                            return
                        }
                        if (!j.height()) {
                            j.height(g.currentItem.innerHeight() - parseInt(g.currentItem.css("paddingTop") || 0, 10) - parseInt(g.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!j.width()) {
                            j.width(g.currentItem.innerWidth() - parseInt(g.currentItem.css("paddingLeft") || 0, 10) - parseInt(g.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            g.placeholder = b(h.placeholder.element.call(g.element, g.currentItem));
            g.currentItem.after(g.placeholder);
            h.placeholder.update(g, g.placeholder)
        },
        _contactContainers: function(f) {
            var m, k, q, n, o, s, g, t, l, p, h = null,
                r = null;
            for (m = this.containers.length - 1; m >= 0; m--) {
                if (b.contains(this.currentItem[0], this.containers[m].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[m].containerCache)) {
                    if (h && b.contains(this.containers[m].element[0], h.element[0])) {
                        continue
                    }
                    h = this.containers[m];
                    r = m
                } else {
                    if (this.containers[m].containerCache.over) {
                        this.containers[m]._trigger("out", f, this._uiHash(this));
                        this.containers[m].containerCache.over = 0
                    }
                }
            }
            if (!h) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[r].containerCache.over) {
                    this.containers[r]._trigger("over", f, this._uiHash(this));
                    this.containers[r].containerCache.over = 1
                }
            } else {
                q = 10000;
                n = null;
                p = h.floating || c(this.currentItem);
                o = p ? "left" : "top";
                s = p ? "width" : "height";
                g = this.positionAbs[o] + this.offset.click[o];
                for (k = this.items.length - 1; k >= 0; k--) {
                    if (!b.contains(this.containers[r].element[0], this.items[k].item[0])) {
                        continue
                    }
                    if (this.items[k].item[0] === this.currentItem[0]) {
                        continue
                    }
                    if (p && !a(this.positionAbs.top + this.offset.click.top, this.items[k].top, this.items[k].height)) {
                        continue
                    }
                    t = this.items[k].item.offset()[o];
                    l = false;
                    if (Math.abs(t - g) > Math.abs(t + this.items[k][s] - g)) {
                        l = true;
                        t += this.items[k][s]
                    }
                    if (Math.abs(t - g) < q) {
                        q = Math.abs(t - g);
                        n = this.items[k];
                        this.direction = l ? "up" : "down"
                    }
                }
                if (!n && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[r]) {
                    return
                }
                n ? this._rearrange(f, n, null, true) : this._rearrange(f, null, this.containers[r].element, true);
                this._trigger("change", f, this._uiHash());
                this.containers[r]._trigger("change", f, this._uiHash(this));
                this.currentContainer = this.containers[r];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[r]._trigger("over", f, this._uiHash(this));
                this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function(g) {
            var h = this.options,
                f = b.isFunction(h.helper) ? b(h.helper.apply(this.element[0], [g, this.currentItem])) : (h.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!f.parents("body").length) {
                b(h.appendTo !== "parent" ? h.appendTo : this.currentItem[0].parentNode)[0].appendChild(f[0])
            }
            if (f[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (!f[0].style.width || h.forceHelperSize) {
                f.width(this.currentItem.width())
            }
            if (!f[0].style.height || h.forceHelperSize) {
                f.height(this.currentItem.height())
            }
            return f
        },
        _adjustOffsetFromHelper: function(f) {
            if (typeof f === "string") {
                f = f.split(" ")
            }
            if (b.isArray(f)) {
                f = {
                    left: +f[0],
                    top: +f[1] || 0
                }
            }
            if ("left" in f) {
                this.offset.click.left = f.left + this.margins.left
            }
            if ("right" in f) {
                this.offset.click.left = this.helperProportions.width - f.right + this.margins.left
            }
            if ("top" in f) {
                this.offset.click.top = f.top + this.margins.top
            }
            if ("bottom" in f) {
                this.offset.click.top = this.helperProportions.height - f.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var f = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
                f.left += this.scrollParent.scrollLeft();
                f.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
                f = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: f.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: f.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var f = this.currentItem.position();
                return {
                    top: f.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: f.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var g, i, f, h = this.options;
            if (h.containment === "parent") {
                h.containment = this.helper[0].parentNode
            }
            if (h.containment === "document" || h.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(h.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(h.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(h.containment)) {
                g = b(h.containment)[0];
                i = b(h.containment).offset();
                f = (b(g).css("overflow") !== "hidden");
                this.containment = [i.left + (parseInt(b(g).css("borderLeftWidth"), 10) || 0) + (parseInt(b(g).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(b(g).css("borderTopWidth"), 10) || 0) + (parseInt(b(g).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (f ? Math.max(g.scrollWidth, g.offsetWidth) : g.offsetWidth) - (parseInt(b(g).css("borderLeftWidth"), 10) || 0) - (parseInt(b(g).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (f ? Math.max(g.scrollHeight, g.offsetHeight) : g.offsetHeight) - (parseInt(b(g).css("borderTopWidth"), 10) || 0) - (parseInt(b(g).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(h, j) {
            if (!j) {
                j = this.position
            }
            var g = h === "absolute" ? 1 : -1,
                f = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                i = (/(html|body)/i).test(f[0].tagName);
            return {
                top: (j.top + this.offset.relative.top * g + this.offset.parent.top * g - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : f.scrollTop())) * g)),
                left: (j.left + this.offset.relative.left * g + this.offset.parent.left * g - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : f.scrollLeft()) * g))
            }
        },
        _generatePosition: function(i) {
            var k, j, l = this.options,
                h = i.pageX,
                g = i.pageY,
                f = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                m = (/(html|body)/i).test(f[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (i.pageX - this.offset.click.left < this.containment[0]) {
                        h = this.containment[0] + this.offset.click.left
                    }
                    if (i.pageY - this.offset.click.top < this.containment[1]) {
                        g = this.containment[1] + this.offset.click.top
                    }
                    if (i.pageX - this.offset.click.left > this.containment[2]) {
                        h = this.containment[2] + this.offset.click.left
                    }
                    if (i.pageY - this.offset.click.top > this.containment[3]) {
                        g = this.containment[3] + this.offset.click.top
                    }
                }
                if (l.grid) {
                    k = this.originalPageY + Math.round((g - this.originalPageY) / l.grid[1]) * l.grid[1];
                    g = this.containment ? ((k - this.offset.click.top >= this.containment[1] && k - this.offset.click.top <= this.containment[3]) ? k : ((k - this.offset.click.top >= this.containment[1]) ? k - l.grid[1] : k + l.grid[1])) : k;
                    j = this.originalPageX + Math.round((h - this.originalPageX) / l.grid[0]) * l.grid[0];
                    h = this.containment ? ((j - this.offset.click.left >= this.containment[0] && j - this.offset.click.left <= this.containment[2]) ? j : ((j - this.offset.click.left >= this.containment[0]) ? j - l.grid[0] : j + l.grid[0])) : j
                }
            }
            return {
                top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (m ? 0 : f.scrollTop())))),
                left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : m ? 0 : f.scrollLeft())))
            }
        },
        _rearrange: function(k, j, g, h) {
            g ? g[0].appendChild(this.placeholder[0]) : j.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? j.item[0] : j.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var f = this.counter;
            this._delay(function() {
                if (f === this.counter) {
                    this.refreshPositions(!h)
                }
            })
        },
        _clear: function(g, h) {
            this.reverting = false;
            var f, j = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (f in this._storedCSS) {
                    if (this._storedCSS[f] === "auto" || this._storedCSS[f] === "static") {
                        this._storedCSS[f] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !h) {
                j.push(function(i) {
                    this._trigger("receive", i, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !h) {
                j.push(function(i) {
                    this._trigger("update", i, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!h) {
                    j.push(function(i) {
                        this._trigger("remove", i, this._uiHash())
                    });
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("receive", k, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("update", k, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }
            for (f = this.containers.length - 1; f >= 0; f--) {
                if (!h) {
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("deactivate", k, this._uiHash(this))
                        }
                    }).call(this, this.containers[f]))
                }
                if (this.containers[f].containerCache.over) {
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("out", k, this._uiHash(this))
                        }
                    }).call(this, this.containers[f]));
                    this.containers[f].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!h) {
                    this._trigger("beforeStop", g, this._uiHash());
                    for (f = 0; f < j.length; f++) {
                        j[f].call(this, g)
                    }
                    this._trigger("stop", g, this._uiHash())
                }
                this.fromOutside = false;
                return false
            }
            if (!h) {
                this._trigger("beforeStop", g, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove()
            }
            this.helper = null;
            if (!h) {
                for (f = 0; f < j.length; f++) {
                    j[f].call(this, g)
                }
                this._trigger("stop", g, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },
        _uiHash: function(f) {
            var g = f || this;
            return {
                helper: g.helper,
                placeholder: g.placeholder || b([]),
                position: g.position,
                originalPosition: g.originalPosition,
                offset: g.positionAbs,
                item: g.currentItem,
                sender: f ? f.element : null
            }
        }
    })
})(jQuery);
(function(a, c) {
    var b = "ui-effects-";
    a.effects = {
        effect: {}
    };
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function(s, h) {
        var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            l = /^([\-+])=\s*(\d+\.?\d*)/,
            k = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1] * 2.55, t[2] * 2.55, t[3] * 2.55, t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }],
            i = s.Color = function(u, v, t, w) {
                return new s.Color.fn.parse(u, v, t, w)
            },
            n = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            r = {
                "byte": {
                    floor: true,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: true
                }
            },
            q = i.support = {},
            f = s("<p>")[0],
            d, p = s.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)";
        q.rgba = f.style.backgroundColor.indexOf("rgba") > -1;
        p(n, function(t, u) {
            u.cache = "_" + t;
            u.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });

        function m(u, w, v) {
            var t = r[w.type] || {};
            if (u == null) {
                return (v || !w.def) ? null : w.def
            }
            u = t.floor ? ~~u : parseFloat(u);
            if (isNaN(u)) {
                return w.def
            }
            if (t.mod) {
                return (u + t.mod) % t.mod
            }
            return 0 > u ? 0 : t.max < u ? t.max : u
        }

        function j(t) {
            var v = i(),
                u = v._rgba = [];
            t = t.toLowerCase();
            p(k, function(A, B) {
                var y, z = B.re.exec(t),
                    x = z && B.parse(z),
                    w = B.space || "rgba";
                if (x) {
                    y = v[w](x);
                    v[n[w].cache] = y[n[w].cache];
                    u = v._rgba = y._rgba;
                    return false
                }
            });
            if (u.length) {
                if (u.join() === "0,0,0,0") {
                    s.extend(u, d.transparent)
                }
                return v
            }
            return d[t]
        }
        i.fn = s.extend(i.prototype, {
            parse: function(z, x, t, y) {
                if (z === h) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (z.jquery || z.nodeType) {
                    z = s(z).css(x);
                    x = h
                }
                var w = this,
                    v = s.type(z),
                    u = this._rgba = [];
                if (x !== h) {
                    z = [z, x, t, y];
                    v = "array"
                }
                if (v === "string") {
                    return this.parse(j(z) || d._default)
                }
                if (v === "array") {
                    p(n.rgba.props, function(A, B) {
                        u[B.idx] = m(z[B.idx], B)
                    });
                    return this
                }
                if (v === "object") {
                    if (z instanceof i) {
                        p(n, function(A, B) {
                            if (z[B.cache]) {
                                w[B.cache] = z[B.cache].slice()
                            }
                        })
                    } else {
                        p(n, function(B, C) {
                            var A = C.cache;
                            p(C.props, function(D, E) {
                                if (!w[A] && C.to) {
                                    if (D === "alpha" || z[D] == null) {
                                        return
                                    }
                                    w[A] = C.to(w._rgba)
                                }
                                w[A][E.idx] = m(z[D], E, true)
                            });
                            if (w[A] && s.inArray(null, w[A].slice(0, 3)) < 0) {
                                w[A][3] = 1;
                                if (C.from) {
                                    w._rgba = C.from(w[A])
                                }
                            }
                        })
                    }
                    return this
                }
            },
            is: function(v) {
                var t = i(v),
                    w = true,
                    u = this;
                p(n, function(x, z) {
                    var A, y = t[z.cache];
                    if (y) {
                        A = u[z.cache] || z.to && z.to(u._rgba) || [];
                        p(z.props, function(B, C) {
                            if (y[C.idx] != null) {
                                w = (y[C.idx] === A[C.idx]);
                                return w
                            }
                        })
                    }
                    return w
                });
                return w
            },
            _space: function() {
                var t = [],
                    u = this;
                p(n, function(v, w) {
                    if (u[w.cache]) {
                        t.push(v)
                    }
                });
                return t.pop()
            },
            transition: function(u, A) {
                var v = i(u),
                    w = v._space(),
                    x = n[w],
                    y = this.alpha() === 0 ? i("transparent") : this,
                    z = y[x.cache] || x.to(y._rgba),
                    t = z.slice();
                v = v[x.cache];
                p(x.props, function(E, G) {
                    var D = G.idx,
                        C = z[D],
                        B = v[D],
                        F = r[G.type] || {};
                    if (B === null) {
                        return
                    }
                    if (C === null) {
                        t[D] = B
                    } else {
                        if (F.mod) {
                            if (B - C > F.mod / 2) {
                                C += F.mod
                            } else {
                                if (C - B > F.mod / 2) {
                                    C -= F.mod
                                }
                            }
                        }
                        t[D] = m((B - C) * A + C, G)
                    }
                });
                return this[w](t)
            },
            blend: function(w) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var v = this._rgba.slice(),
                    u = v.pop(),
                    t = i(w)._rgba;
                return i(s.map(v, function(x, y) {
                    return (1 - u) * t[y] + u * x
                }))
            },
            toRgbaString: function() {
                var u = "rgba(",
                    t = s.map(this._rgba, function(w, x) {
                        return w == null ? (x > 2 ? 1 : 0) : w
                    });
                if (t[3] === 1) {
                    t.pop();
                    u = "rgb("
                }
                return u + t.join() + ")"
            },
            toHslaString: function() {
                var u = "hsla(",
                    t = s.map(this.hsla(), function(w, x) {
                        if (w == null) {
                            w = x > 2 ? 1 : 0
                        }
                        if (x && x < 3) {
                            w = Math.round(w * 100) + "%"
                        }
                        return w
                    });
                if (t[3] === 1) {
                    t.pop();
                    u = "hsl("
                }
                return u + t.join() + ")"
            },
            toHexString: function(t) {
                var u = this._rgba.slice(),
                    v = u.pop();
                if (t) {
                    u.push(~~(v * 255))
                }
                return "#" + s.map(u, function(w) {
                    w = (w || 0).toString(16);
                    return w.length === 1 ? "0" + w : w
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        i.fn.parse.prototype = i.fn;

        function g(v, u, t) {
            t = (t + 1) % 1;
            if (t * 6 < 1) {
                return v + (u - v) * t * 6
            }
            if (t * 2 < 1) {
                return u
            }
            if (t * 3 < 2) {
                return v + (u - v) * ((2 / 3) - t) * 6
            }
            return v
        }
        n.hsla.to = function(v) {
            if (v[0] == null || v[1] == null || v[2] == null) {
                return [null, null, null, v[3]]
            }
            var t = v[0] / 255,
                y = v[1] / 255,
                z = v[2] / 255,
                B = v[3],
                A = Math.max(t, y, z),
                w = Math.min(t, y, z),
                C = A - w,
                D = A + w,
                u = D * 0.5,
                x, E;
            if (w === A) {
                x = 0
            } else {
                if (t === A) {
                    x = (60 * (y - z) / C) + 360
                } else {
                    if (y === A) {
                        x = (60 * (z - t) / C) + 120
                    } else {
                        x = (60 * (t - y) / C) + 240
                    }
                }
            }
            if (C === 0) {
                E = 0
            } else {
                if (u <= 0.5) {
                    E = C / D
                } else {
                    E = C / (2 - D)
                }
            }
            return [Math.round(x) % 360, E, u, B == null ? 1 : B]
        };
        n.hsla.from = function(x) {
            if (x[0] == null || x[1] == null || x[2] == null) {
                return [null, null, null, x[3]]
            }
            var w = x[0] / 360,
                v = x[1],
                u = x[2],
                t = x[3],
                y = u <= 0.5 ? u * (1 + v) : u + v - u * v,
                z = 2 * u - y;
            return [Math.round(g(z, y, w + (1 / 3)) * 255), Math.round(g(z, y, w) * 255), Math.round(g(z, y, w - (1 / 3)) * 255), t]
        };
        p(n, function(u, w) {
            var v = w.props,
                t = w.cache,
                y = w.to,
                x = w.from;
            i.fn[u] = function(D) {
                if (y && !this[t]) {
                    this[t] = y(this._rgba)
                }
                if (D === h) {
                    return this[t].slice()
                }
                var A, C = s.type(D),
                    z = (C === "array" || C === "object") ? D : arguments,
                    B = this[t].slice();
                p(v, function(E, G) {
                    var F = z[C === "object" ? E : G.idx];
                    if (F == null) {
                        F = B[G.idx]
                    }
                    B[G.idx] = m(F, G)
                });
                if (x) {
                    A = i(x(B));
                    A[t] = B;
                    return A
                } else {
                    return i(B)
                }
            };
            p(v, function(z, A) {
                if (i.fn[z]) {
                    return
                }
                i.fn[z] = function(E) {
                    var G = s.type(E),
                        D = (z === "alpha" ? (this._hsla ? "hsla" : "rgba") : u),
                        C = this[D](),
                        F = C[A.idx],
                        B;
                    if (G === "undefined") {
                        return F
                    }
                    if (G === "function") {
                        E = E.call(this, F);
                        G = s.type(E)
                    }
                    if (E == null && A.empty) {
                        return this
                    }
                    if (G === "string") {
                        B = l.exec(E);
                        if (B) {
                            E = F + parseFloat(B[2]) * (B[1] === "+" ? 1 : -1)
                        }
                    }
                    C[A.idx] = E;
                    return this[D](C)
                }
            })
        });
        i.hook = function(u) {
            var t = u.split(" ");
            p(t, function(v, w) {
                s.cssHooks[w] = {
                    set: function(A, B) {
                        var y, z, x = "";
                        if (B !== "transparent" && (s.type(B) !== "string" || (y = j(B)))) {
                            B = i(y || B);
                            if (!q.rgba && B._rgba[3] !== 1) {
                                z = w === "backgroundColor" ? A.parentNode : A;
                                while ((x === "" || x === "transparent") && z && z.style) {
                                    try {
                                        x = s.css(z, "backgroundColor");
                                        z = z.parentNode
                                    } catch (C) {}
                                }
                                B = B.blend(x && x !== "transparent" ? x : "_default")
                            }
                            B = B.toRgbaString()
                        }
                        try {
                            A.style[w] = B
                        } catch (C) {}
                    }
                };
                s.fx.step[w] = function(x) {
                    if (!x.colorInit) {
                        x.start = i(x.elem, w);
                        x.end = i(x.end);
                        x.colorInit = true
                    }
                    s.cssHooks[w].set(x.elem, x.start.transition(x.end, x.pos))
                }
            })
        };
        i.hook(o);
        s.cssHooks.borderColor = {
            expand: function(u) {
                var t = {};
                p(["Top", "Right", "Bottom", "Left"], function(w, v) {
                    t["border" + v + "Color"] = u
                });
                return t
            }
        };
        d = s.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(jQuery);
    (function() {
        var f = ["add", "remove", "toggle"],
            g = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(i, j) {
            a.fx.step[j] = function(k) {
                if (k.end !== "none" && !k.setAttr || k.pos === 1 && !k.setAttr) {
                    jQuery.style(k.elem, j, k.end);
                    k.setAttr = true
                }
            }
        });

        function h(m) {
            var j, i, k = m.ownerDocument.defaultView ? m.ownerDocument.defaultView.getComputedStyle(m, null) : m.currentStyle,
                l = {};
            if (k && k.length && k[0] && k[k[0]]) {
                i = k.length;
                while (i--) {
                    j = k[i];
                    if (typeof k[j] === "string") {
                        l[a.camelCase(j)] = k[j]
                    }
                }
            } else {
                for (j in k) {
                    if (typeof k[j] === "string") {
                        l[j] = k[j]
                    }
                }
            }
            return l
        }

        function d(i, k) {
            var m = {},
                j, l;
            for (j in k) {
                l = k[j];
                if (i[j] !== l) {
                    if (!g[j]) {
                        if (a.fx.step[j] || !isNaN(parseFloat(l))) {
                            m[j] = l
                        }
                    }
                }
            }
            return m
        }
        if (!a.fn.addBack) {
            a.fn.addBack = function(i) {
                return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
            }
        }
        a.effects.animateClass = function(i, j, m, l) {
            var k = a.speed(j, m, l);
            return this.queue(function() {
                var p = a(this),
                    n = p.attr("class") || "",
                    o, q = k.children ? p.find("*").addBack() : p;
                q = q.map(function() {
                    var r = a(this);
                    return {
                        el: r,
                        start: h(this)
                    }
                });
                o = function() {
                    a.each(f, function(r, s) {
                        if (i[s]) {
                            p[s + "Class"](i[s])
                        }
                    })
                };
                o();
                q = q.map(function() {
                    this.end = h(this.el[0]);
                    this.diff = d(this.start, this.end);
                    return this
                });
                p.attr("class", n);
                q = q.map(function() {
                    var t = this,
                        r = a.Deferred(),
                        s = a.extend({}, k, {
                            queue: false,
                            complete: function() {
                                r.resolve(t)
                            }
                        });
                    this.el.animate(this.diff, s);
                    return r.promise()
                });
                a.when.apply(a, q.get()).done(function() {
                    o();
                    a.each(arguments, function() {
                        var r = this.el;
                        a.each(this.diff, function(s) {
                            r.css(s, "")
                        })
                    });
                    k.complete.call(p[0])
                })
            })
        };
        a.fn.extend({
            addClass: (function(i) {
                return function(k, j, m, l) {
                    return j ? a.effects.animateClass.call(this, {
                        add: k
                    }, j, m, l) : i.apply(this, arguments)
                }
            })(a.fn.addClass),
            removeClass: (function(i) {
                return function(k, j, m, l) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {
                        remove: k
                    }, j, m, l) : i.apply(this, arguments)
                }
            })(a.fn.removeClass),
            toggleClass: (function(i) {
                return function(l, k, j, n, m) {
                    if (typeof k === "boolean" || k === c) {
                        if (!j) {
                            return i.apply(this, arguments)
                        } else {
                            return a.effects.animateClass.call(this, (k ? {
                                add: l
                            } : {
                                remove: l
                            }), j, n, m)
                        }
                    } else {
                        return a.effects.animateClass.call(this, {
                            toggle: l
                        }, k, j, n)
                    }
                }
            })(a.fn.toggleClass),
            switchClass: function(i, k, j, m, l) {
                return a.effects.animateClass.call(this, {
                    add: k,
                    remove: i
                }, j, m, l)
            }
        })
    })();
    (function() {
        a.extend(a.effects, {
            version: "1.10.3",
            save: function(h, j) {
                for (var g = 0; g < j.length; g++) {
                    if (j[g] !== null) {
                        h.data(b + j[g], h[0].style[j[g]])
                    }
                }
            },
            restore: function(h, k) {
                var j, g;
                for (g = 0; g < k.length; g++) {
                    if (k[g] !== null) {
                        j = h.data(b + k[g]);
                        if (j === c) {
                            j = ""
                        }
                        h.css(k[g], j)
                    }
                }
            },
            setMode: function(g, h) {
                if (h === "toggle") {
                    h = g.is(":hidden") ? "show" : "hide"
                }
                return h
            },
            getBaseline: function(h, i) {
                var j, g;
                switch (h[0]) {
                    case "top":
                        j = 0;
                        break;
                    case "middle":
                        j = 0.5;
                        break;
                    case "bottom":
                        j = 1;
                        break;
                    default:
                        j = h[0] / i.height
                }
                switch (h[1]) {
                    case "left":
                        g = 0;
                        break;
                    case "center":
                        g = 0.5;
                        break;
                    case "right":
                        g = 1;
                        break;
                    default:
                        g = h[1] / i.width
                }
                return {
                    x: g,
                    y: j
                }
            },
            createWrapper: function(h) {
                if (h.parent().is(".ui-effects-wrapper")) {
                    return h.parent()
                }
                var i = {
                        width: h.outerWidth(true),
                        height: h.outerHeight(true),
                        "float": h.css("float")
                    },
                    l = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    g = {
                        width: h.width(),
                        height: h.height()
                    },
                    k = document.activeElement;
                try {
                    k.id
                } catch (j) {
                    k = document.body
                }
                h.wrap(l);
                if (h[0] === k || a.contains(h[0], k)) {
                    a(k).focus()
                }
                l = h.parent();
                if (h.css("position") === "static") {
                    l.css({
                        position: "relative"
                    });
                    h.css({
                        position: "relative"
                    })
                } else {
                    a.extend(i, {
                        position: h.css("position"),
                        zIndex: h.css("z-index")
                    });
                    a.each(["top", "left", "bottom", "right"], function(m, n) {
                        i[n] = h.css(n);
                        if (isNaN(parseInt(i[n], 10))) {
                            i[n] = "auto"
                        }
                    });
                    h.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })
                }
                h.css(g);
                return l.css(i).show()
            },
            removeWrapper: function(g) {
                var h = document.activeElement;
                if (g.parent().is(".ui-effects-wrapper")) {
                    g.parent().replaceWith(g);
                    if (g[0] === h || a.contains(g[0], h)) {
                        a(h).focus()
                    }
                }
                return g
            },
            setTransition: function(h, j, g, i) {
                i = i || {};
                a.each(j, function(l, k) {
                    var m = h.cssUnit(k);
                    if (m[0] > 0) {
                        i[k] = m[0] * g + m[1]
                    }
                });
                return i
            }
        });

        function d(h, g, i, j) {
            if (a.isPlainObject(h)) {
                g = h;
                h = h.effect
            }
            h = {
                effect: h
            };
            if (g == null) {
                g = {}
            }
            if (a.isFunction(g)) {
                j = g;
                i = null;
                g = {}
            }
            if (typeof g === "number" || a.fx.speeds[g]) {
                j = i;
                i = g;
                g = {}
            }
            if (a.isFunction(i)) {
                j = i;
                i = null
            }
            if (g) {
                a.extend(h, g)
            }
            i = i || g.duration;
            h.duration = a.fx.off ? 0 : typeof i === "number" ? i : i in a.fx.speeds ? a.fx.speeds[i] : a.fx.speeds._default;
            h.complete = j || g.complete;
            return h
        }

        function f(g) {
            if (!g || typeof g === "number" || a.fx.speeds[g]) {
                return true
            }
            if (typeof g === "string" && !a.effects.effect[g]) {
                return true
            }
            if (a.isFunction(g)) {
                return true
            }
            if (typeof g === "object" && !g.effect) {
                return true
            }
            return false
        }
        a.fn.extend({
            effect: function() {
                var i = d.apply(this, arguments),
                    k = i.mode,
                    g = i.queue,
                    h = a.effects.effect[i.effect];
                if (a.fx.off || !h) {
                    if (k) {
                        return this[k](i.duration, i.complete)
                    } else {
                        return this.each(function() {
                            if (i.complete) {
                                i.complete.call(this)
                            }
                        })
                    }
                }

                function j(n) {
                    var o = a(this),
                        m = i.complete,
                        p = i.mode;

                    function l() {
                        if (a.isFunction(m)) {
                            m.call(o[0])
                        }
                        if (a.isFunction(n)) {
                            n()
                        }
                    }
                    if (o.is(":hidden") ? p === "hide" : p === "show") {
                        o[p]();
                        l()
                    } else {
                        h.call(o[0], i, l)
                    }
                }
                return g === false ? this.each(j) : this.queue(g || "fx", j)
            },
            show: (function(g) {
                return function(i) {
                    if (f(i)) {
                        return g.apply(this, arguments)
                    } else {
                        var h = d.apply(this, arguments);
                        h.mode = "show";
                        return this.effect.call(this, h)
                    }
                }
            })(a.fn.show),
            hide: (function(g) {
                return function(i) {
                    if (f(i)) {
                        return g.apply(this, arguments)
                    } else {
                        var h = d.apply(this, arguments);
                        h.mode = "hide";
                        return this.effect.call(this, h)
                    }
                }
            })(a.fn.hide),
            toggle: (function(g) {
                return function(i) {
                    if (f(i) || typeof i === "boolean") {
                        return g.apply(this, arguments)
                    } else {
                        var h = d.apply(this, arguments);
                        h.mode = "toggle";
                        return this.effect.call(this, h)
                    }
                }
            })(a.fn.toggle),
            cssUnit: function(g) {
                var h = this.css(g),
                    i = [];
                a.each(["em", "px", "%", "pt"], function(j, k) {
                    if (h.indexOf(k) > 0) {
                        i = [parseFloat(h), k]
                    }
                });
                return i
            }
        })
    })();
    (function() {
        var d = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(g, f) {
            d[f] = function(h) {
                return Math.pow(h, g + 2)
            }
        });
        a.extend(d, {
            Sine: function(f) {
                return 1 - Math.cos(f * Math.PI / 2)
            },
            Circ: function(f) {
                return 1 - Math.sqrt(1 - f * f)
            },
            Elastic: function(f) {
                return f === 0 || f === 1 ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin(((f - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(f) {
                return f * f * (3 * f - 2)
            },
            Bounce: function(h) {
                var f, g = 4;
                while (h < ((f = Math.pow(2, --g)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - g) - 7.5625 * Math.pow((f * 3 - 2) / 22 - h, 2)
            }
        });
        a.each(d, function(g, f) {
            a.easing["easeIn" + g] = f;
            a.easing["easeOut" + g] = function(h) {
                return 1 - f(1 - h)
            };
            a.easing["easeInOut" + g] = function(h) {
                return h < 0.5 ? f(h * 2) / 2 : 1 - f(h * -2 + 2) / 2
            }
        })
    })()
})(jQuery);
(function(d, f) {
    var b = 0,
        c = {},
        a = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide";
    a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show";
    d.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var g = this.options;
            this.prevShow = this.prevHide = d();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            if (!g.collapsible && (g.active === false || g.active == null)) {
                g.active = 0
            }
            this._processPanels();
            if (g.active < 0) {
                g.active += this.headers.length
            }
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? d() : this.active.next(),
                content: !this.active.length ? d() : this.active.next()
            }
        },
        _createIcons: function() {
            var g = this.options.icons;
            if (g) {
                d("<span>").addClass("ui-accordion-header-icon ui-icon " + g.header).prependTo(this.headers);
                this.active.children(".ui-accordion-header-icon").removeClass(g.header).addClass(g.activeHeader);
                this.headers.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var g;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            this._destroyIcons();
            g = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            if (this.options.heightStyle !== "content") {
                g.css("height", "")
            }
        },
        _setOption: function(g, h) {
            if (g === "active") {
                this._activate(h);
                return
            }
            if (g === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(h)
            }
            this._super(g, h);
            if (g === "collapsible" && !h && this.options.active === false) {
                this._activate(0)
            }
            if (g === "icons") {
                this._destroyIcons();
                if (h) {
                    this._createIcons()
                }
            }
            if (g === "disabled") {
                this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!h)
            }
        },
        _keydown: function(j) {
            if (j.altKey || j.ctrlKey) {
                return
            }
            var k = d.ui.keyCode,
                i = this.headers.length,
                g = this.headers.index(j.target),
                h = false;
            switch (j.keyCode) {
                case k.RIGHT:
                case k.DOWN:
                    h = this.headers[(g + 1) % i];
                    break;
                case k.LEFT:
                case k.UP:
                    h = this.headers[(g - 1 + i) % i];
                    break;
                case k.SPACE:
                case k.ENTER:
                    this._eventHandler(j);
                    break;
                case k.HOME:
                    h = this.headers[0];
                    break;
                case k.END:
                    h = this.headers[i - 1];
                    break
            }
            if (h) {
                d(j.target).attr("tabIndex", -1);
                d(h).attr("tabIndex", 0);
                h.focus();
                j.preventDefault()
            }
        },
        _panelKeyDown: function(g) {
            if (g.keyCode === d.ui.keyCode.UP && g.ctrlKey) {
                d(g.currentTarget).prev().focus()
            }
        },
        refresh: function() {
            var g = this.options;
            this._processPanels();
            if ((g.active === false && g.collapsible === true) || !this.headers.length) {
                g.active = false;
                this.active = d()
            } else {
                if (g.active === false) {
                    this._activate(0)
                } else {
                    if (this.active.length && !d.contains(this.element[0], this.active[0])) {
                        if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                            g.active = false;
                            this.active = d()
                        } else {
                            this._activate(Math.max(0, g.active - 1))
                        }
                    } else {
                        g.active = this.headers.index(this.active)
                    }
                }
            }
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var k, i = this.options,
                h = i.heightStyle,
                j = this.element.parent(),
                g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function(o) {
                var p = d(this),
                    n = p.attr("id"),
                    l = p.next(),
                    m = l.attr("id");
                if (!n) {
                    n = g + "-header-" + o;
                    p.attr("id", n)
                }
                if (!m) {
                    m = g + "-panel-" + o;
                    l.attr("id", m)
                }
                p.attr("aria-controls", m);
                l.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
            this._createIcons();
            this._setupEvents(i.event);
            if (h === "fill") {
                k = j.height();
                this.element.siblings(":visible").each(function() {
                    var m = d(this),
                        l = m.css("position");
                    if (l === "absolute" || l === "fixed") {
                        return
                    }
                    k -= m.outerHeight(true)
                });
                this.headers.each(function() {
                    k -= d(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    d(this).height(Math.max(0, k - d(this).innerHeight() + d(this).height()))
                }).css("overflow", "auto")
            } else {
                if (h === "auto") {
                    k = 0;
                    this.headers.next().each(function() {
                        k = Math.max(k, d(this).css("height", "").height())
                    }).height(k)
                }
            }
        },
        _activate: function(g) {
            var h = this._findActive(g)[0];
            if (h === this.active[0]) {
                return
            }
            h = h || this.active[0];
            this._eventHandler({
                target: h,
                currentTarget: h,
                preventDefault: d.noop
            })
        },
        _findActive: function(g) {
            return typeof g === "number" ? this.headers.eq(g) : d()
        },
        _setupEvents: function(h) {
            var g = {
                keydown: "_keydown"
            };
            if (h) {
                d.each(h.split(" "), function(j, i) {
                    g[i] = "_eventHandler"
                })
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, g);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(g) {
            var o = this.options,
                j = this.active,
                k = d(g.currentTarget),
                m = k[0] === j[0],
                h = m && o.collapsible,
                i = h ? d() : k.next(),
                l = j.next(),
                n = {
                    oldHeader: j,
                    oldPanel: l,
                    newHeader: h ? d() : k,
                    newPanel: i
                };
            g.preventDefault();
            if ((m && !o.collapsible) || (this._trigger("beforeActivate", g, n) === false)) {
                return
            }
            o.active = h ? false : this.headers.index(k);
            this.active = m ? d() : k;
            this._toggle(n);
            j.removeClass("ui-accordion-header-active ui-state-active");
            if (o.icons) {
                j.children(".ui-accordion-header-icon").removeClass(o.icons.activeHeader).addClass(o.icons.header)
            }
            if (!m) {
                k.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
                if (o.icons) {
                    k.children(".ui-accordion-header-icon").removeClass(o.icons.header).addClass(o.icons.activeHeader)
                }
                k.next().addClass("ui-accordion-content-active")
            }
        },
        _toggle: function(i) {
            var g = i.newPanel,
                h = this.prevShow.length ? this.prevShow : i.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = g;
            this.prevHide = h;
            if (this.options.animate) {
                this._animate(g, h, i)
            } else {
                h.hide();
                g.show();
                this._toggleComplete(i)
            }
            h.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            h.prev().attr("aria-selected", "false");
            if (g.length && h.length) {
                h.prev().attr("tabIndex", -1)
            } else {
                if (g.length) {
                    this.headers.filter(function() {
                        return d(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            g.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(g, o, k) {
            var n, m, j, l = this,
                p = 0,
                q = g.length && (!o.length || (g.index() < o.index())),
                i = this.options.animate || {},
                r = q && i.down || i,
                h = function() {
                    l._toggleComplete(k)
                };
            if (typeof r === "number") {
                j = r
            }
            if (typeof r === "string") {
                m = r
            }
            m = m || r.easing || i.easing;
            j = j || r.duration || i.duration;
            if (!o.length) {
                return g.animate(a, j, m, h)
            }
            if (!g.length) {
                return o.animate(c, j, m, h)
            }
            n = g.show().outerHeight();
            o.animate(c, {
                duration: j,
                easing: m,
                step: function(s, t) {
                    t.now = Math.round(s)
                }
            });
            g.hide().animate(a, {
                duration: j,
                easing: m,
                complete: h,
                step: function(s, t) {
                    t.now = Math.round(s);
                    if (t.prop !== "height") {
                        p += t.now
                    } else {
                        if (l.options.heightStyle !== "content") {
                            t.now = Math.round(n - o.outerHeight() - p);
                            p = 0
                        }
                    }
                }
            })
        },
        _toggleComplete: function(h) {
            var g = h.oldPanel;
            g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            if (g.length) {
                g.parent()[0].className = g.parent()[0].className
            }
            this._trigger("activate", null, h)
        }
    })
})(jQuery);
(function(a, b) {
    var c = 0;
    a.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var g, d, h, j = this.element[0].nodeName.toLowerCase(),
                i = j === "textarea",
                f = j === "input";
            this.isMultiLine = i ? true : f ? false : this.element.prop("isContentEditable");
            this.valueMethod = this.element[i || f ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(k) {
                    if (this.element.prop("readOnly")) {
                        g = true;
                        h = true;
                        d = true;
                        return
                    }
                    g = false;
                    h = false;
                    d = false;
                    var l = a.ui.keyCode;
                    switch (k.keyCode) {
                        case l.PAGE_UP:
                            g = true;
                            this._move("previousPage", k);
                            break;
                        case l.PAGE_DOWN:
                            g = true;
                            this._move("nextPage", k);
                            break;
                        case l.UP:
                            g = true;
                            this._keyEvent("previous", k);
                            break;
                        case l.DOWN:
                            g = true;
                            this._keyEvent("next", k);
                            break;
                        case l.ENTER:
                        case l.NUMPAD_ENTER:
                            if (this.menu.active) {
                                g = true;
                                k.preventDefault();
                                this.menu.select(k)
                            }
                            break;
                        case l.TAB:
                            if (this.menu.active) {
                                this.menu.select(k)
                            }
                            break;
                        case l.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                this._value(this.term);
                                this.close(k);
                                k.preventDefault()
                            }
                            break;
                        default:
                            d = true;
                            this._searchTimeout(k);
                            break
                    }
                },
                keypress: function(k) {
                    if (g) {
                        g = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            k.preventDefault()
                        }
                        return
                    }
                    if (d) {
                        return
                    }
                    var l = a.ui.keyCode;
                    switch (k.keyCode) {
                        case l.PAGE_UP:
                            this._move("previousPage", k);
                            break;
                        case l.PAGE_DOWN:
                            this._move("nextPage", k);
                            break;
                        case l.UP:
                            this._keyEvent("previous", k);
                            break;
                        case l.DOWN:
                            this._keyEvent("next", k);
                            break
                    }
                },
                input: function(k) {
                    if (h) {
                        h = false;
                        k.preventDefault();
                        return
                    }
                    this._searchTimeout(k)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(k) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(k);
                    this._change(k)
                }
            });
            this._initSource();
            this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu");
            this._on(this.menu.element, {
                mousedown: function(k) {
                    k.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var l = this.menu.element[0];
                    if (!a(k.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var m = this;
                            this.document.one("mousedown", function(n) {
                                if (n.target !== m.element[0] && n.target !== l && !a.contains(l, n.target)) {
                                    m.close()
                                }
                            })
                        })
                    }
                },
                menufocus: function(l, m) {
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (l.originalEvent && /^mouse/.test(l.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(l.target).trigger(l.originalEvent)
                            });
                            return
                        }
                    }
                    var k = m.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", l, {
                            item: k
                        })) {
                        if (l.originalEvent && /^key/.test(l.originalEvent.type)) {
                            this._value(k.value)
                        }
                    } else {
                        this.liveRegion.text(k.value)
                    }
                },
                menuselect: function(m, n) {
                    var l = n.item.data("ui-autocomplete-item"),
                        k = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = k;
                        this._delay(function() {
                            this.previous = k;
                            this.selectedItem = l
                        })
                    }
                    if (false !== this._trigger("select", m, {
                            item: l
                        })) {
                        this._value(l.value)
                    }
                    this.term = this._value();
                    this.close(m);
                    this.selectedItem = l
                }
            });
            this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(d, f) {
            this._super(d, f);
            if (d === "source") {
                this._initSource()
            }
            if (d === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (d === "disabled" && f && this.xhr) {
                this.xhr.abort()
            }
        },
        _appendTo: function() {
            var d = this.options.appendTo;
            if (d) {
                d = d.jquery || d.nodeType ? a(d) : this.document.find(d).eq(0)
            }
            if (!d) {
                d = this.element.closest(".ui-front")
            }
            if (!d.length) {
                d = this.document[0].body
            }
            return d
        },
        _initSource: function() {
            var g, d, f = this;
            if (a.isArray(this.options.source)) {
                g = this.options.source;
                this.source = function(i, h) {
                    h(a.ui.autocomplete.filter(g, i.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    d = this.options.source;
                    this.source = function(i, h) {
                        if (f.xhr) {
                            f.xhr.abort()
                        }
                        f.xhr = a.ajax({
                            url: d,
                            data: i,
                            dataType: "json",
                            success: function(j) {
                                h(j)
                            },
                            error: function() {
                                h([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(d) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                if (this.term !== this._value()) {
                    this.selectedItem = null;
                    this.search(null, d)
                }
            }, this.options.delay)
        },
        search: function(f, d) {
            f = f != null ? f : this._value();
            this.term = this._value();
            if (f.length < this.options.minLength) {
                return this.close(d)
            }
            if (this._trigger("search", d) === false) {
                return
            }
            return this._search(f)
        },
        _search: function(d) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: d
            }, this._response())
        },
        _response: function() {
            var f = this,
                d = ++c;
            return function(g) {
                if (d === c) {
                    f.__response(g)
                }
                f.pending--;
                if (!f.pending) {
                    f.element.removeClass("ui-autocomplete-loading")
                }
            }
        },
        __response: function(d) {
            if (d) {
                d = this._normalize(d)
            }
            this._trigger("response", null, {
                content: d
            });
            if (!this.options.disabled && d && d.length && !this.cancelSearch) {
                this._suggest(d);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(d) {
            this.cancelSearch = true;
            this._close(d)
        },
        _close: function(d) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", d)
            }
        },
        _change: function(d) {
            if (this.previous !== this._value()) {
                this._trigger("change", d, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(d) {
            if (d.length && d[0].label && d[0].value) {
                return d
            }
            return a.map(d, function(f) {
                if (typeof f === "string") {
                    return {
                        label: f,
                        value: f
                    }
                }
                return a.extend({
                    label: f.label || f.value,
                    value: f.value || f.label
                }, f)
            })
        },
        _suggest: function(d) {
            var f = this.menu.element.empty();
            this._renderMenu(f, d);
            this.isNewMenu = true;
            this.menu.refresh();
            f.show();
            this._resizeMenu();
            f.position(a.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },
        _resizeMenu: function() {
            var d = this.menu.element;
            d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(f, d) {
            var g = this;
            a.each(d, function(h, i) {
                g._renderItemData(f, i)
            })
        },
        _renderItemData: function(d, f) {
            return this._renderItem(d, f).data("ui-autocomplete-item", f)
        },
        _renderItem: function(d, f) {
            return a("<li>").append(a("<a>").text(f.label)).appendTo(d)
        },
        _move: function(f, d) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, d);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(f) || this.menu.isLastItem() && /^next/.test(f)) {
                this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[f](d)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(f, d) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(f, d);
                d.preventDefault()
            }
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(d) {
            return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(g, d) {
            var f = new RegExp(a.ui.autocomplete.escapeRegex(d), "i");
            return a.grep(g, function(h) {
                return f.test(h.label || h.value || h)
            })
        }
    });
    a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(d) {
                    return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(f) {
            var d;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (f && f.length) {
                d = this.options.messages.results(f.length)
            } else {
                d = this.options.messages.noResults
            }
            this.liveRegion.text(d)
        }
    })
}(jQuery));
(function(g, b) {
    var l, f, a, i, j = "ui-button ui-widget ui-state-default ui-corner-all",
        c = "ui-state-hover ui-state-active ",
        h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        k = function() {
            var m = g(this);
            setTimeout(function() {
                m.find(":ui-button").button("refresh")
            }, 1)
        },
        d = function(n) {
            var m = n.name,
                o = n.form,
                p = g([]);
            if (m) {
                m = m.replace(/'/g, "\\'");
                if (o) {
                    p = g(o).find("[name='" + m + "']")
                } else {
                    p = g("[name='" + m + "']", n.ownerDocument).filter(function() {
                        return !this.form
                    })
                }
            }
            return p
        };
    g.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, k);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var p = this,
                n = this.options,
                q = this.type === "checkbox" || this.type === "radio",
                o = !q ? "ui-state-active" : "",
                m = "ui-state-focus";
            if (n.label === null) {
                n.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(j).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (n.disabled) {
                    return
                }
                if (this === l) {
                    g(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (n.disabled) {
                    return
                }
                g(this).removeClass(o)
            }).bind("click" + this.eventNamespace, function(r) {
                if (n.disabled) {
                    r.preventDefault();
                    r.stopImmediatePropagation()
                }
            });
            this.element.bind("focus" + this.eventNamespace, function() {
                p.buttonElement.addClass(m)
            }).bind("blur" + this.eventNamespace, function() {
                p.buttonElement.removeClass(m)
            });
            if (q) {
                this.element.bind("change" + this.eventNamespace, function() {
                    if (i) {
                        return
                    }
                    p.refresh()
                });
                this.buttonElement.bind("mousedown" + this.eventNamespace, function(r) {
                    if (n.disabled) {
                        return
                    }
                    i = false;
                    f = r.pageX;
                    a = r.pageY
                }).bind("mouseup" + this.eventNamespace, function(r) {
                    if (n.disabled) {
                        return
                    }
                    if (f !== r.pageX || a !== r.pageY) {
                        i = true
                    }
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (n.disabled || i) {
                        return false
                    }
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (n.disabled || i) {
                            return false
                        }
                        g(this).addClass("ui-state-active");
                        p.buttonElement.attr("aria-pressed", "true");
                        var r = p.element[0];
                        d(r).not(r).map(function() {
                            return g(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (n.disabled) {
                            return false
                        }
                        g(this).addClass("ui-state-active");
                        l = this;
                        p.document.one("mouseup", function() {
                            l = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (n.disabled) {
                            return false
                        }
                        g(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(r) {
                        if (n.disabled) {
                            return false
                        }
                        if (r.keyCode === g.ui.keyCode.SPACE || r.keyCode === g.ui.keyCode.ENTER) {
                            g(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        g(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(r) {
                            if (r.keyCode === g.ui.keyCode.SPACE) {
                                g(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", n.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var m, o, n;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                m = this.element.parents().last();
                o = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = m.find(o);
                if (!this.buttonElement.length) {
                    m = m.length ? m.siblings() : this.element.siblings();
                    this.buttonElement = m.filter(o);
                    if (!this.buttonElement.length) {
                        this.buttonElement = m.find(o)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                n = this.element.is(":checked");
                if (n) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", n)
            } else {
                this.buttonElement = this.element
            }
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(j + " " + c + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },
        _setOption: function(m, n) {
            this._super(m, n);
            if (m === "disabled") {
                if (n) {
                    this.element.prop("disabled", true)
                } else {
                    this.element.prop("disabled", false)
                }
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var m = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (m !== this.options.disabled) {
                this._setOption("disabled", m)
            }
            if (this.type === "radio") {
                d(this.element[0]).each(function() {
                    if (g(this).is(":checked")) {
                        g(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },
        _resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var q = this.buttonElement.removeClass(h),
                o = g("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(q.empty()).text(),
                n = this.options.icons,
                m = n.primary && n.secondary,
                p = [];
            if (n.primary || n.secondary) {
                if (this.options.text) {
                    p.push("ui-button-text-icon" + (m ? "s" : (n.primary ? "-primary" : "-secondary")))
                }
                if (n.primary) {
                    q.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>")
                }
                if (n.secondary) {
                    q.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>")
                }
                if (!this.options.text) {
                    p.push(m ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        q.attr("title", g.trim(o))
                    }
                }
            } else {
                p.push("ui-button-text-only")
            }
            q.addClass(p.join(" "))
        }
    });
    g.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(m, n) {
            if (m === "disabled") {
                this.buttons.button("option", m, n)
            }
            this._super(m, n)
        },
        refresh: function() {
            var m = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(m ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(m ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery));
(function(f, h) {
    f.extend(f.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var g = "datepicker",
        c;

    function b() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        f.extend(this._defaults, this.regional[""]);
        this.dpDiv = d(f("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    f.extend(b.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(i) {
            a(this._defaults, i || {});
            return this
        },
        _attachDatepicker: function(l, i) {
            var m, k, j;
            m = l.nodeName.toLowerCase();
            k = (m === "div" || m === "span");
            if (!l.id) {
                this.uuid += 1;
                l.id = "dp" + this.uuid
            }
            j = this._newInst(f(l), k);
            j.settings = f.extend({}, i || {});
            if (m === "input") {
                this._connectDatepicker(l, j)
            } else {
                if (k) {
                    this._inlineDatepicker(l, j)
                }
            }
        },
        _newInst: function(j, i) {
            var k = j[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: k,
                input: j,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: (!i ? this.dpDiv : d(f("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function(k, j) {
            var i = f(k);
            j.append = f([]);
            j.trigger = f([]);
            if (i.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(i, j);
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(j);
            f.data(k, g, j);
            if (j.settings.disabled) {
                this._disableDatepicker(k)
            }
        },
        _attachments: function(k, n) {
            var j, m, i, o = this._get(n, "appendText"),
                l = this._get(n, "isRTL");
            if (n.append) {
                n.append.remove()
            }
            if (o) {
                n.append = f("<span class='" + this._appendClass + "'>" + o + "</span>");
                k[l ? "before" : "after"](n.append)
            }
            k.unbind("focus", this._showDatepicker);
            if (n.trigger) {
                n.trigger.remove()
            }
            j = this._get(n, "showOn");
            if (j === "focus" || j === "both") {
                k.focus(this._showDatepicker)
            }
            if (j === "button" || j === "both") {
                m = this._get(n, "buttonText");
                i = this._get(n, "buttonImage");
                n.trigger = f(this._get(n, "buttonImageOnly") ? f("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: m,
                    title: m
                }) : f("<button type='button'></button>").addClass(this._triggerClass).html(!i ? m : f("<img/>").attr({
                    src: i,
                    alt: m,
                    title: m
                })));
                k[l ? "before" : "after"](n.trigger);
                n.trigger.click(function() {
                    if (f.datepicker._datepickerShowing && f.datepicker._lastInput === k[0]) {
                        f.datepicker._hideDatepicker()
                    } else {
                        if (f.datepicker._datepickerShowing && f.datepicker._lastInput !== k[0]) {
                            f.datepicker._hideDatepicker();
                            f.datepicker._showDatepicker(k[0])
                        } else {
                            f.datepicker._showDatepicker(k[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function(p) {
            if (this._get(p, "autoSize") && !p.inline) {
                var m, k, l, o, n = new Date(2009, 12 - 1, 20),
                    j = this._get(p, "dateFormat");
                if (j.match(/[DM]/)) {
                    m = function(i) {
                        k = 0;
                        l = 0;
                        for (o = 0; o < i.length; o++) {
                            if (i[o].length > k) {
                                k = i[o].length;
                                l = o
                            }
                        }
                        return l
                    };
                    n.setMonth(m(this._get(p, (j.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    n.setDate(m(this._get(p, (j.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - n.getDay())
                }
                p.input.attr("size", this._formatDate(p, n).length)
            }
        },
        _inlineDatepicker: function(j, i) {
            var k = f(j);
            if (k.hasClass(this.markerClassName)) {
                return
            }
            k.addClass(this.markerClassName).append(i.dpDiv);
            f.data(j, g, i);
            this._setDate(i, this._getDefaultDate(i), true);
            this._updateDatepicker(i);
            this._updateAlternate(i);
            if (i.settings.disabled) {
                this._disableDatepicker(j)
            }
            i.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(p, j, n, k, o) {
            var i, s, m, r, q, l = this._dialogInst;
            if (!l) {
                this.uuid += 1;
                i = "dp" + this.uuid;
                this._dialogInput = f("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                f("body").append(this._dialogInput);
                l = this._dialogInst = this._newInst(this._dialogInput, false);
                l.settings = {};
                f.data(this._dialogInput[0], g, l)
            }
            a(l.settings, k || {});
            j = (j && j.constructor === Date ? this._formatDate(l, j) : j);
            this._dialogInput.val(j);
            this._pos = (o ? (o.length ? o : [o.pageX, o.pageY]) : null);
            if (!this._pos) {
                s = document.documentElement.clientWidth;
                m = document.documentElement.clientHeight;
                r = document.documentElement.scrollLeft || document.body.scrollLeft;
                q = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(s / 2) - 100 + r, (m / 2) - 150 + q]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            l.settings.onSelect = n;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (f.blockUI) {
                f.blockUI(this.dpDiv)
            }
            f.data(this._dialogInput[0], g, l);
            return this
        },
        _destroyDatepicker: function(k) {
            var l, i = f(k),
                j = f.data(k, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            l = k.nodeName.toLowerCase();
            f.removeData(k, g);
            if (l === "input") {
                j.append.remove();
                j.trigger.remove();
                i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (l === "div" || l === "span") {
                    i.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function(l) {
            var m, k, i = f(l),
                j = f.data(l, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = false;
                j.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().removeClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = f.map(this._disabledInputs, function(n) {
                return (n === l ? null : n)
            })
        },
        _disableDatepicker: function(l) {
            var m, k, i = f(l),
                j = f.data(l, g);
            if (!i.hasClass(this.markerClassName)) {
                return
            }
            m = l.nodeName.toLowerCase();
            if (m === "input") {
                l.disabled = true;
                j.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (m === "div" || m === "span") {
                    k = i.children("." + this._inlineClass);
                    k.children().addClass("ui-state-disabled");
                    k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = f.map(this._disabledInputs, function(n) {
                return (n === l ? null : n)
            });
            this._disabledInputs[this._disabledInputs.length] = l
        },
        _isDisabledDatepicker: function(k) {
            if (!k) {
                return false
            }
            for (var j = 0; j < this._disabledInputs.length; j++) {
                if (this._disabledInputs[j] === k) {
                    return true
                }
            }
            return false
        },
        _getInst: function(j) {
            try {
                return f.data(j, g)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(o, j, n) {
            var k, i, m, p, l = this._getInst(o);
            if (arguments.length === 2 && typeof j === "string") {
                return (j === "defaults" ? f.extend({}, f.datepicker._defaults) : (l ? (j === "all" ? f.extend({}, l.settings) : this._get(l, j)) : null))
            }
            k = j || {};
            if (typeof j === "string") {
                k = {};
                k[j] = n
            }
            if (l) {
                if (this._curInst === l) {
                    this._hideDatepicker()
                }
                i = this._getDateDatepicker(o, true);
                m = this._getMinMaxDate(l, "min");
                p = this._getMinMaxDate(l, "max");
                a(l.settings, k);
                if (m !== null && k.dateFormat !== h && k.minDate === h) {
                    l.settings.minDate = this._formatDate(l, m)
                }
                if (p !== null && k.dateFormat !== h && k.maxDate === h) {
                    l.settings.maxDate = this._formatDate(l, p)
                }
                if ("disabled" in k) {
                    if (k.disabled) {
                        this._disableDatepicker(o)
                    } else {
                        this._enableDatepicker(o)
                    }
                }
                this._attachments(f(o), l);
                this._autoSize(l);
                this._setDate(l, i);
                this._updateAlternate(l);
                this._updateDatepicker(l)
            }
        },
        _changeDatepicker: function(k, i, j) {
            this._optionDatepicker(k, i, j)
        },
        _refreshDatepicker: function(j) {
            var i = this._getInst(j);
            if (i) {
                this._updateDatepicker(i)
            }
        },
        _setDateDatepicker: function(k, i) {
            var j = this._getInst(k);
            if (j) {
                this._setDate(j, i);
                this._updateDatepicker(j);
                this._updateAlternate(j)
            }
        },
        _getDateDatepicker: function(k, i) {
            var j = this._getInst(k);
            if (j && !j.inline) {
                this._setDateFromField(j, i)
            }
            return (j ? this._getDate(j) : null)
        },
        _doKeyDown: function(l) {
            var j, i, n, m = f.datepicker._getInst(l.target),
                o = true,
                k = m.dpDiv.is(".ui-datepicker-rtl");
            m._keyEvent = true;
            if (f.datepicker._datepickerShowing) {
                switch (l.keyCode) {
                    case 9:
                        f.datepicker._hideDatepicker();
                        o = false;
                        break;
                    case 13:
                        n = f("td." + f.datepicker._dayOverClass + ":not(." + f.datepicker._currentClass + ")", m.dpDiv);
                        if (n[0]) {
                            f.datepicker._selectDay(l.target, m.selectedMonth, m.selectedYear, n[0])
                        }
                        j = f.datepicker._get(m, "onSelect");
                        if (j) {
                            i = f.datepicker._formatDate(m);
                            j.apply((m.input ? m.input[0] : null), [i, m])
                        } else {
                            f.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        f.datepicker._hideDatepicker();
                        break;
                    case 33:
                        f.datepicker._adjustDate(l.target, (l.ctrlKey ? -f.datepicker._get(m, "stepBigMonths") : -f.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 34:
                        f.datepicker._adjustDate(l.target, (l.ctrlKey ? +f.datepicker._get(m, "stepBigMonths") : +f.datepicker._get(m, "stepMonths")), "M");
                        break;
                    case 35:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._clearDate(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 36:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._gotoToday(l.target)
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 37:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, (k ? +1 : -1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            f.datepicker._adjustDate(l.target, (l.ctrlKey ? -f.datepicker._get(m, "stepBigMonths") : -f.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, -7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    case 39:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, (k ? -1 : +1), "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        if (l.originalEvent.altKey) {
                            f.datepicker._adjustDate(l.target, (l.ctrlKey ? +f.datepicker._get(m, "stepBigMonths") : +f.datepicker._get(m, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (l.ctrlKey || l.metaKey) {
                            f.datepicker._adjustDate(l.target, +7, "D")
                        }
                        o = l.ctrlKey || l.metaKey;
                        break;
                    default:
                        o = false
                }
            } else {
                if (l.keyCode === 36 && l.ctrlKey) {
                    f.datepicker._showDatepicker(this)
                } else {
                    o = false
                }
            }
            if (o) {
                l.preventDefault();
                l.stopPropagation()
            }
        },
        _doKeyPress: function(k) {
            var j, i, l = f.datepicker._getInst(k.target);
            if (f.datepicker._get(l, "constrainInput")) {
                j = f.datepicker._possibleChars(f.datepicker._get(l, "dateFormat"));
                i = String.fromCharCode(k.charCode == null ? k.keyCode : k.charCode);
                return k.ctrlKey || k.metaKey || (i < " " || !j || j.indexOf(i) > -1)
            }
        },
        _doKeyUp: function(k) {
            var i, l = f.datepicker._getInst(k.target);
            if (l.input.val() !== l.lastVal) {
                try {
                    i = f.datepicker.parseDate(f.datepicker._get(l, "dateFormat"), (l.input ? l.input.val() : null), f.datepicker._getFormatConfig(l));
                    if (i) {
                        f.datepicker._setDateFromField(l);
                        f.datepicker._updateAlternate(l);
                        f.datepicker._updateDatepicker(l)
                    }
                } catch (j) {}
            }
            return true
        },
        _showDatepicker: function(j) {
            j = j.target || j;
            if (j.nodeName.toLowerCase() !== "input") {
                j = f("input", j.parentNode)[0]
            }
            if (f.datepicker._isDisabledDatepicker(j) || f.datepicker._lastInput === j) {
                return
            }
            var l, p, k, n, o, i, m;
            l = f.datepicker._getInst(j);
            if (f.datepicker._curInst && f.datepicker._curInst !== l) {
                f.datepicker._curInst.dpDiv.stop(true, true);
                if (l && f.datepicker._datepickerShowing) {
                    f.datepicker._hideDatepicker(f.datepicker._curInst.input[0])
                }
            }
            p = f.datepicker._get(l, "beforeShow");
            k = p ? p.apply(j, [j, l]) : {};
            if (k === false) {
                return
            }
            a(l.settings, k);
            l.lastVal = null;
            f.datepicker._lastInput = j;
            f.datepicker._setDateFromField(l);
            if (f.datepicker._inDialog) {
                j.value = ""
            }
            if (!f.datepicker._pos) {
                f.datepicker._pos = f.datepicker._findPos(j);
                f.datepicker._pos[1] += j.offsetHeight
            }
            n = false;
            f(j).parents().each(function() {
                n |= f(this).css("position") === "fixed";
                return !n
            });
            o = {
                left: f.datepicker._pos[0],
                top: f.datepicker._pos[1]
            };
            f.datepicker._pos = null;
            l.dpDiv.empty();
            l.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            f.datepicker._updateDatepicker(l);
            o = f.datepicker._checkOffset(l, o, n);
            l.dpDiv.css({
                position: (f.datepicker._inDialog && f.blockUI ? "static" : (n ? "fixed" : "absolute")),
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            });
            if (!l.inline) {
                i = f.datepicker._get(l, "showAnim");
                m = f.datepicker._get(l, "duration");
                l.dpDiv.zIndex(f(j).zIndex() + 1);
                f.datepicker._datepickerShowing = true;
                if (f.effects && f.effects.effect[i]) {
                    l.dpDiv.show(i, f.datepicker._get(l, "showOptions"), m)
                } else {
                    l.dpDiv[i || "show"](i ? m : null)
                }
                if (f.datepicker._shouldFocusInput(l)) {
                    l.input.focus()
                }
                f.datepicker._curInst = l
            }
        },
        _updateDatepicker: function(k) {
            this.maxRows = 4;
            c = k;
            k.dpDiv.empty().append(this._generateHTML(k));
            this._attachHandlers(k);
            k.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var m, i = this._getNumberOfMonths(k),
                l = i[1],
                j = 17;
            k.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (l > 1) {
                k.dpDiv.addClass("ui-datepicker-multi-" + l).css("width", (j * l) + "em")
            }
            k.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            k.dpDiv[(this._get(k, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (k === f.datepicker._curInst && f.datepicker._datepickerShowing && f.datepicker._shouldFocusInput(k)) {
                k.input.focus()
            }
            if (k.yearshtml) {
                m = k.yearshtml;
                setTimeout(function() {
                    if (m === k.yearshtml && k.yearshtml) {
                        k.dpDiv.find("select.ui-datepicker-year:first").replaceWith(k.yearshtml)
                    }
                    m = k.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function(i) {
            return i.input && i.input.is(":visible") && !i.input.is(":disabled") && !i.input.is(":focus")
        },
        _checkOffset: function(n, l, k) {
            var m = n.dpDiv.outerWidth(),
                q = n.dpDiv.outerHeight(),
                p = n.input ? n.input.outerWidth() : 0,
                i = n.input ? n.input.outerHeight() : 0,
                o = document.documentElement.clientWidth + (k ? 0 : f(document).scrollLeft()),
                j = document.documentElement.clientHeight + (k ? 0 : f(document).scrollTop());
            l.left -= (this._get(n, "isRTL") ? (m - p) : 0);
            l.left -= (k && l.left === n.input.offset().left) ? f(document).scrollLeft() : 0;
            l.top -= (k && l.top === (n.input.offset().top + i)) ? f(document).scrollTop() : 0;
            l.left -= Math.min(l.left, (l.left + m > o && o > m) ? Math.abs(l.left + m - o) : 0);
            l.top -= Math.min(l.top, (l.top + q > j && j > q) ? Math.abs(q + i) : 0);
            return l
        },
        _findPos: function(l) {
            var i, k = this._getInst(l),
                j = this._get(k, "isRTL");
            while (l && (l.type === "hidden" || l.nodeType !== 1 || f.expr.filters.hidden(l))) {
                l = l[j ? "previousSibling" : "nextSibling"]
            }
            i = f(l).offset();
            return [i.left, i.top]
        },
        _hideDatepicker: function(k) {
            var j, n, m, i, l = this._curInst;
            if (!l || (k && l !== f.data(k, g))) {
                return
            }
            if (this._datepickerShowing) {
                j = this._get(l, "showAnim");
                n = this._get(l, "duration");
                m = function() {
                    f.datepicker._tidyDialog(l)
                };
                if (f.effects && (f.effects.effect[j] || f.effects[j])) {
                    l.dpDiv.hide(j, f.datepicker._get(l, "showOptions"), n, m)
                } else {
                    l.dpDiv[(j === "slideDown" ? "slideUp" : (j === "fadeIn" ? "fadeOut" : "hide"))]((j ? n : null), m)
                }
                if (!j) {
                    m()
                }
                this._datepickerShowing = false;
                i = this._get(l, "onClose");
                if (i) {
                    i.apply((l.input ? l.input[0] : null), [(l.input ? l.input.val() : ""), l])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (f.blockUI) {
                        f.unblockUI();
                        f("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(i) {
            i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(j) {
            if (!f.datepicker._curInst) {
                return
            }
            var i = f(j.target),
                k = f.datepicker._getInst(i[0]);
            if (((i[0].id !== f.datepicker._mainDivId && i.parents("#" + f.datepicker._mainDivId).length === 0 && !i.hasClass(f.datepicker.markerClassName) && !i.closest("." + f.datepicker._triggerClass).length && f.datepicker._datepickerShowing && !(f.datepicker._inDialog && f.blockUI))) || (i.hasClass(f.datepicker.markerClassName) && f.datepicker._curInst !== k)) {
                f.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(m, l, k) {
            var j = f(m),
                i = this._getInst(j[0]);
            if (this._isDisabledDatepicker(j[0])) {
                return
            }
            this._adjustInstDate(i, l + (k === "M" ? this._get(i, "showCurrentAtPos") : 0), k);
            this._updateDatepicker(i)
        },
        _gotoToday: function(l) {
            var i, k = f(l),
                j = this._getInst(k[0]);
            if (this._get(j, "gotoCurrent") && j.currentDay) {
                j.selectedDay = j.currentDay;
                j.drawMonth = j.selectedMonth = j.currentMonth;
                j.drawYear = j.selectedYear = j.currentYear
            } else {
                i = new Date();
                j.selectedDay = i.getDate();
                j.drawMonth = j.selectedMonth = i.getMonth();
                j.drawYear = j.selectedYear = i.getFullYear()
            }
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectMonthYear: function(m, i, l) {
            var k = f(m),
                j = this._getInst(k[0]);
            j["selected" + (l === "M" ? "Month" : "Year")] = j["draw" + (l === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(j);
            this._adjustDate(k)
        },
        _selectDay: function(n, l, i, m) {
            var j, k = f(n);
            if (f(m).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0])) {
                return
            }
            j = this._getInst(k[0]);
            j.selectedDay = j.currentDay = f("a", m).html();
            j.selectedMonth = j.currentMonth = l;
            j.selectedYear = j.currentYear = i;
            this._selectDate(n, this._formatDate(j, j.currentDay, j.currentMonth, j.currentYear))
        },
        _clearDate: function(j) {
            var i = f(j);
            this._selectDate(i, "")
        },
        _selectDate: function(m, i) {
            var j, l = f(m),
                k = this._getInst(l[0]);
            i = (i != null ? i : this._formatDate(k));
            if (k.input) {
                k.input.val(i)
            }
            this._updateAlternate(k);
            j = this._get(k, "onSelect");
            if (j) {
                j.apply((k.input ? k.input[0] : null), [i, k])
            } else {
                if (k.input) {
                    k.input.trigger("change")
                }
            }
            if (k.inline) {
                this._updateDatepicker(k)
            } else {
                this._hideDatepicker();
                this._lastInput = k.input[0];
                if (typeof(k.input[0]) !== "object") {
                    k.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(m) {
            var l, k, i, j = this._get(m, "altField");
            if (j) {
                l = this._get(m, "altFormat") || this._get(m, "dateFormat");
                k = this._getDate(m);
                i = this.formatDate(l, k, this._getFormatConfig(m));
                f(j).each(function() {
                    f(this).val(i)
                })
            }
        },
        noWeekends: function(j) {
            var i = j.getDay();
            return [(i > 0 && i < 6), ""]
        },
        iso8601Week: function(i) {
            var j, k = new Date(i.getTime());
            k.setDate(k.getDate() + 4 - (k.getDay() || 7));
            j = k.getTime();
            k.setMonth(0);
            k.setDate(1);
            return Math.floor(Math.round((j - k) / 86400000) / 7) + 1
        },
        parseDate: function(y, t, A) {
            if (y == null || t == null) {
                throw "Invalid arguments"
            }
            t = (typeof t === "object" ? t.toString() : t + "");
            if (t === "") {
                return null
            }
            var l, v, j, z = 0,
                o = (A ? A.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                k = (typeof o !== "string" ? o : new Date().getFullYear() % 100 + parseInt(o, 10)),
                r = (A ? A.dayNamesShort : null) || this._defaults.dayNamesShort,
                C = (A ? A.dayNames : null) || this._defaults.dayNames,
                i = (A ? A.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (A ? A.monthNames : null) || this._defaults.monthNames,
                n = -1,
                D = -1,
                x = -1,
                q = -1,
                w = false,
                B, s = function(F) {
                    var G = (l + 1 < y.length && y.charAt(l + 1) === F);
                    if (G) {
                        l++
                    }
                    return G
                },
                E = function(H) {
                    var F = s(H),
                        I = (H === "@" ? 14 : (H === "!" ? 20 : (H === "y" && F ? 4 : (H === "o" ? 3 : 2)))),
                        J = new RegExp("^\\d{1," + I + "}"),
                        G = t.substring(z).match(J);
                    if (!G) {
                        throw "Missing number at position " + z
                    }
                    z += G[0].length;
                    return parseInt(G[0], 10)
                },
                p = function(G, H, J) {
                    var F = -1,
                        I = f.map(s(G) ? J : H, function(L, K) {
                            return [
                                [K, L]
                            ]
                        }).sort(function(L, K) {
                            return -(L[1].length - K[1].length)
                        });
                    f.each(I, function(L, M) {
                        var K = M[1];
                        if (t.substr(z, K.length).toLowerCase() === K.toLowerCase()) {
                            F = M[0];
                            z += K.length;
                            return false
                        }
                    });
                    if (F !== -1) {
                        return F + 1
                    } else {
                        throw "Unknown name at position " + z
                    }
                },
                u = function() {
                    if (t.charAt(z) !== y.charAt(l)) {
                        throw "Unexpected literal at position " + z
                    }
                    z++
                };
            for (l = 0; l < y.length; l++) {
                if (w) {
                    if (y.charAt(l) === "'" && !s("'")) {
                        w = false
                    } else {
                        u()
                    }
                } else {
                    switch (y.charAt(l)) {
                        case "d":
                            x = E("d");
                            break;
                        case "D":
                            p("D", r, C);
                            break;
                        case "o":
                            q = E("o");
                            break;
                        case "m":
                            D = E("m");
                            break;
                        case "M":
                            D = p("M", i, m);
                            break;
                        case "y":
                            n = E("y");
                            break;
                        case "@":
                            B = new Date(E("@"));
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case "!":
                            B = new Date((E("!") - this._ticksTo1970) / 10000);
                            n = B.getFullYear();
                            D = B.getMonth() + 1;
                            x = B.getDate();
                            break;
                        case "'":
                            if (s("'")) {
                                u()
                            } else {
                                w = true
                            }
                            break;
                        default:
                            u()
                    }
                }
            }
            if (z < t.length) {
                j = t.substr(z);
                if (!/^\s+/.test(j)) {
                    throw "Extra/unparsed characters found in date: " + j
                }
            }
            if (n === -1) {
                n = new Date().getFullYear()
            } else {
                if (n < 100) {
                    n += new Date().getFullYear() - new Date().getFullYear() % 100 + (n <= k ? 0 : -100)
                }
            }
            if (q > -1) {
                D = 1;
                x = q;
                do {
                    v = this._getDaysInMonth(n, D - 1);
                    if (x <= v) {
                        break
                    }
                    D++;
                    x -= v
                } while (true)
            }
            B = this._daylightSavingAdjust(new Date(n, D - 1, x));
            if (B.getFullYear() !== n || B.getMonth() + 1 !== D || B.getDate() !== x) {
                throw "Invalid date"
            }
            return B
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(r, l, m) {
            if (!l) {
                return ""
            }
            var t, u = (m ? m.dayNamesShort : null) || this._defaults.dayNamesShort,
                j = (m ? m.dayNames : null) || this._defaults.dayNames,
                p = (m ? m.monthNamesShort : null) || this._defaults.monthNamesShort,
                n = (m ? m.monthNames : null) || this._defaults.monthNames,
                s = function(v) {
                    var w = (t + 1 < r.length && r.charAt(t + 1) === v);
                    if (w) {
                        t++
                    }
                    return w
                },
                i = function(x, y, v) {
                    var w = "" + y;
                    if (s(x)) {
                        while (w.length < v) {
                            w = "0" + w
                        }
                    }
                    return w
                },
                o = function(v, x, w, y) {
                    return (s(v) ? y[x] : w[x])
                },
                k = "",
                q = false;
            if (l) {
                for (t = 0; t < r.length; t++) {
                    if (q) {
                        if (r.charAt(t) === "'" && !s("'")) {
                            q = false
                        } else {
                            k += r.charAt(t)
                        }
                    } else {
                        switch (r.charAt(t)) {
                            case "d":
                                k += i("d", l.getDate(), 2);
                                break;
                            case "D":
                                k += o("D", l.getDay(), u, j);
                                break;
                            case "o":
                                k += i("o", Math.round((new Date(l.getFullYear(), l.getMonth(), l.getDate()).getTime() - new Date(l.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                k += i("m", l.getMonth() + 1, 2);
                                break;
                            case "M":
                                k += o("M", l.getMonth(), p, n);
                                break;
                            case "y":
                                k += (s("y") ? l.getFullYear() : (l.getYear() % 100 < 10 ? "0" : "") + l.getYear() % 100);
                                break;
                            case "@":
                                k += l.getTime();
                                break;
                            case "!":
                                k += l.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (s("'")) {
                                    k += "'"
                                } else {
                                    q = true
                                }
                                break;
                            default:
                                k += r.charAt(t)
                        }
                    }
                }
            }
            return k
        },
        _possibleChars: function(m) {
            var l, k = "",
                j = false,
                i = function(n) {
                    var o = (l + 1 < m.length && m.charAt(l + 1) === n);
                    if (o) {
                        l++
                    }
                    return o
                };
            for (l = 0; l < m.length; l++) {
                if (j) {
                    if (m.charAt(l) === "'" && !i("'")) {
                        j = false
                    } else {
                        k += m.charAt(l)
                    }
                } else {
                    switch (m.charAt(l)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            k += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (i("'")) {
                                k += "'"
                            } else {
                                j = true
                            }
                            break;
                        default:
                            k += m.charAt(l)
                    }
                }
            }
            return k
        },
        _get: function(j, i) {
            return j.settings[i] !== h ? j.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(n, k) {
            if (n.input.val() === n.lastVal) {
                return
            }
            var i = this._get(n, "dateFormat"),
                p = n.lastVal = n.input ? n.input.val() : null,
                o = this._getDefaultDate(n),
                j = o,
                l = this._getFormatConfig(n);
            try {
                j = this.parseDate(i, p, l) || o
            } catch (m) {
                p = (k ? "" : p)
            }
            n.selectedDay = j.getDate();
            n.drawMonth = n.selectedMonth = j.getMonth();
            n.drawYear = n.selectedYear = j.getFullYear();
            n.currentDay = (p ? j.getDate() : 0);
            n.currentMonth = (p ? j.getMonth() : 0);
            n.currentYear = (p ? j.getFullYear() : 0);
            this._adjustInstDate(n)
        },
        _getDefaultDate: function(i) {
            return this._restrictMinMax(i, this._determineDate(i, this._get(i, "defaultDate"), new Date()))
        },
        _determineDate: function(m, j, n) {
            var l = function(p) {
                    var o = new Date();
                    o.setDate(o.getDate() + p);
                    return o
                },
                k = function(v) {
                    try {
                        return f.datepicker.parseDate(f.datepicker._get(m, "dateFormat"), v, f.datepicker._getFormatConfig(m))
                    } catch (u) {}
                    var p = (v.toLowerCase().match(/^c/) ? f.datepicker._getDate(m) : null) || new Date(),
                        q = p.getFullYear(),
                        t = p.getMonth(),
                        o = p.getDate(),
                        s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        r = s.exec(v);
                    while (r) {
                        switch (r[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(r[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += parseInt(r[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                t += parseInt(r[1], 10);
                                o = Math.min(o, f.datepicker._getDaysInMonth(q, t));
                                break;
                            case "y":
                            case "Y":
                                q += parseInt(r[1], 10);
                                o = Math.min(o, f.datepicker._getDaysInMonth(q, t));
                                break
                        }
                        r = s.exec(v)
                    }
                    return new Date(q, t, o)
                },
                i = (j == null || j === "" ? n : (typeof j === "string" ? k(j) : (typeof j === "number" ? (isNaN(j) ? n : l(j)) : new Date(j.getTime()))));
            i = (i && i.toString() === "Invalid Date" ? n : i);
            if (i) {
                i.setHours(0);
                i.setMinutes(0);
                i.setSeconds(0);
                i.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(i)
        },
        _daylightSavingAdjust: function(i) {
            if (!i) {
                return null
            }
            i.setHours(i.getHours() > 12 ? i.getHours() + 2 : 0);
            return i
        },
        _setDate: function(o, l, n) {
            var i = !l,
                k = o.selectedMonth,
                m = o.selectedYear,
                j = this._restrictMinMax(o, this._determineDate(o, l, new Date()));
            o.selectedDay = o.currentDay = j.getDate();
            o.drawMonth = o.selectedMonth = o.currentMonth = j.getMonth();
            o.drawYear = o.selectedYear = o.currentYear = j.getFullYear();
            if ((k !== o.selectedMonth || m !== o.selectedYear) && !n) {
                this._notifyChange(o)
            }
            this._adjustInstDate(o);
            if (o.input) {
                o.input.val(i ? "" : this._formatDate(o))
            }
        },
        _getDate: function(j) {
            var i = (!j.currentYear || (j.input && j.input.val() === "") ? null : this._daylightSavingAdjust(new Date(j.currentYear, j.currentMonth, j.currentDay)));
            return i
        },
        _attachHandlers: function(j) {
            var i = this._get(j, "stepMonths"),
                k = "#" + j.id.replace(/\\\\/g, "\\");
            j.dpDiv.find("[data-handler]").map(function() {
                var l = {
                    prev: function() {
                        f.datepicker._adjustDate(k, -i, "M")
                    },
                    next: function() {
                        f.datepicker._adjustDate(k, +i, "M")
                    },
                    hide: function() {
                        f.datepicker._hideDatepicker()
                    },
                    today: function() {
                        f.datepicker._gotoToday(k)
                    },
                    selectDay: function() {
                        f.datepicker._selectDay(k, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },
                    selectMonth: function() {
                        f.datepicker._selectMonthYear(k, this, "M");
                        return false
                    },
                    selectYear: function() {
                        f.datepicker._selectMonthYear(k, this, "Y");
                        return false
                    }
                };
                f(this).bind(this.getAttribute("data-event"), l[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(Y) {
            var B, A, T, L, m, ac, W, P, af, J, aj, t, v, u, j, ab, r, E, ae, R, ak, D, I, s, n, U, N, Q, O, q, G, w, X, aa, l, ad, ah, M, x, Z = new Date(),
                C = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth(), Z.getDate())),
                ag = this._get(Y, "isRTL"),
                ai = this._get(Y, "showButtonPanel"),
                S = this._get(Y, "hideIfNoPrevNext"),
                H = this._get(Y, "navigationAsDateFormat"),
                y = this._getNumberOfMonths(Y),
                p = this._get(Y, "showCurrentAtPos"),
                K = this._get(Y, "stepMonths"),
                F = (y[0] !== 1 || y[1] !== 1),
                k = this._daylightSavingAdjust((!Y.currentDay ? new Date(9999, 9, 9) : new Date(Y.currentYear, Y.currentMonth, Y.currentDay))),
                o = this._getMinMaxDate(Y, "min"),
                z = this._getMinMaxDate(Y, "max"),
                i = Y.drawMonth - p,
                V = Y.drawYear;
            if (i < 0) {
                i += 12;
                V--
            }
            if (z) {
                B = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - (y[0] * y[1]) + 1, z.getDate()));
                B = (o && B < o ? o : B);
                while (this._daylightSavingAdjust(new Date(V, i, 1)) > B) {
                    i--;
                    if (i < 0) {
                        i = 11;
                        V--
                    }
                }
            }
            Y.drawMonth = i;
            Y.drawYear = V;
            A = this._get(Y, "prevText");
            A = (!H ? A : this.formatDate(A, this._daylightSavingAdjust(new Date(V, i - K, 1)), this._getFormatConfig(Y)));
            T = (this._canAdjustMonth(Y, -1, V, i) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "e" : "w") + "'>" + A + "</span></a>" : (S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + A + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "e" : "w") + "'>" + A + "</span></a>"));
            L = this._get(Y, "nextText");
            L = (!H ? L : this.formatDate(L, this._daylightSavingAdjust(new Date(V, i + K, 1)), this._getFormatConfig(Y)));
            m = (this._canAdjustMonth(Y, +1, V, i) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "w" : "e") + "'>" + L + "</span></a>" : (S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + L + "'><span class='ui-icon ui-icon-circle-triangle-" + (ag ? "w" : "e") + "'>" + L + "</span></a>"));
            ac = this._get(Y, "currentText");
            W = (this._get(Y, "gotoCurrent") && Y.currentDay ? k : C);
            ac = (!H ? ac : this.formatDate(ac, W, this._getFormatConfig(Y)));
            P = (!Y.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(Y, "closeText") + "</button>" : "");
            af = (ai) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ag ? P : "") + (this._isInRange(Y, W) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + ac + "</button>" : "") + (ag ? "" : P) + "</div>" : "";
            J = parseInt(this._get(Y, "firstDay"), 10);
            J = (isNaN(J) ? 0 : J);
            aj = this._get(Y, "showWeek");
            t = this._get(Y, "dayNames");
            v = this._get(Y, "dayNamesMin");
            u = this._get(Y, "monthNames");
            j = this._get(Y, "monthNamesShort");
            ab = this._get(Y, "beforeShowDay");
            r = this._get(Y, "showOtherMonths");
            E = this._get(Y, "selectOtherMonths");
            ae = this._getDefaultDate(Y);
            R = "";
            ak;
            for (D = 0; D < y[0]; D++) {
                I = "";
                this.maxRows = 4;
                for (s = 0; s < y[1]; s++) {
                    n = this._daylightSavingAdjust(new Date(V, i, Y.selectedDay));
                    U = " ui-corner-all";
                    N = "";
                    if (F) {
                        N += "<div class='ui-datepicker-group";
                        if (y[1] > 1) {
                            switch (s) {
                                case 0:
                                    N += " ui-datepicker-group-first";
                                    U = " ui-corner-" + (ag ? "right" : "left");
                                    break;
                                case y[1] - 1:
                                    N += " ui-datepicker-group-last";
                                    U = " ui-corner-" + (ag ? "left" : "right");
                                    break;
                                default:
                                    N += " ui-datepicker-group-middle";
                                    U = "";
                                    break
                            }
                        }
                        N += "'>"
                    }
                    N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + U + "'>" + (/all|left/.test(U) && D === 0 ? (ag ? m : T) : "") + (/all|right/.test(U) && D === 0 ? (ag ? T : m) : "") + this._generateMonthYearHeader(Y, i, V, o, z, D > 0 || s > 0, u, j) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    Q = (aj ? "<th class='ui-datepicker-week-col'>" + this._get(Y, "weekHeader") + "</th>" : "");
                    for (ak = 0; ak < 7; ak++) {
                        O = (ak + J) % 7;
                        Q += "<th" + ((ak + J + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + t[O] + "'>" + v[O] + "</span></th>"
                    }
                    N += Q + "</tr></thead><tbody>";
                    q = this._getDaysInMonth(V, i);
                    if (V === Y.selectedYear && i === Y.selectedMonth) {
                        Y.selectedDay = Math.min(Y.selectedDay, q)
                    }
                    G = (this._getFirstDayOfMonth(V, i) - J + 7) % 7;
                    w = Math.ceil((G + q) / 7);
                    X = (F ? this.maxRows > w ? this.maxRows : w : w);
                    this.maxRows = X;
                    aa = this._daylightSavingAdjust(new Date(V, i, 1 - G));
                    for (l = 0; l < X; l++) {
                        N += "<tr>";
                        ad = (!aj ? "" : "<td class='ui-datepicker-week-col'>" + this._get(Y, "calculateWeek")(aa) + "</td>");
                        for (ak = 0; ak < 7; ak++) {
                            ah = (ab ? ab.apply((Y.input ? Y.input[0] : null), [aa]) : [true, ""]);
                            M = (aa.getMonth() !== i);
                            x = (M && !E) || !ah[0] || (o && aa < o) || (z && aa > z);
                            ad += "<td class='" + ((ak + J + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + ((aa.getTime() === n.getTime() && i === Y.selectedMonth && Y._keyEvent) || (ae.getTime() === aa.getTime() && ae.getTime() === n.getTime()) ? " " + this._dayOverClass : "") + (x ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + ah[1] + (aa.getTime() === k.getTime() ? " " + this._currentClass : "") + (aa.getTime() === C.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!M || r) && ah[2] ? " title='" + ah[2].replace(/'/g, "&#39;") + "'" : "") + (x ? "" : " data-handler='selectDay' data-event='click' data-month='" + aa.getMonth() + "' data-year='" + aa.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : (x ? "<span class='ui-state-default'>" + aa.getDate() + "</span>" : "<a class='ui-state-default" + (aa.getTime() === C.getTime() ? " ui-state-highlight" : "") + (aa.getTime() === k.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + aa.getDate() + "</a>")) + "</td>";
                            aa.setDate(aa.getDate() + 1);
                            aa = this._daylightSavingAdjust(aa)
                        }
                        N += ad + "</tr>"
                    }
                    i++;
                    if (i > 11) {
                        i = 0;
                        V++
                    }
                    N += "</tbody></table>" + (F ? "</div>" + ((y[0] > 0 && s === y[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    I += N
                }
                R += I
            }
            R += af;
            Y._keyEvent = false;
            return R
        },
        _generateMonthYearHeader: function(m, k, u, o, s, v, q, i) {
            var z, j, A, x, n, w, t, p, l = this._get(m, "changeMonth"),
                B = this._get(m, "changeYear"),
                C = this._get(m, "showMonthAfterYear"),
                r = "<div class='ui-datepicker-title'>",
                y = "";
            if (v || !l) {
                y += "<span class='ui-datepicker-month'>" + q[k] + "</span>"
            } else {
                z = (o && o.getFullYear() === u);
                j = (s && s.getFullYear() === u);
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (A = 0; A < 12; A++) {
                    if ((!z || A >= o.getMonth()) && (!j || A <= s.getMonth())) {
                        y += "<option value='" + A + "'" + (A === k ? " selected='selected'" : "") + ">" + i[A] + "</option>"
                    }
                }
                y += "</select>"
            }
            if (!C) {
                r += y + (v || !(l && B) ? "&#xa0;" : "")
            }
            if (!m.yearshtml) {
                m.yearshtml = "";
                if (v || !B) {
                    r += "<span class='ui-datepicker-year'>" + u + "</span>"
                } else {
                    x = this._get(m, "yearRange").split(":");
                    n = new Date().getFullYear();
                    w = function(E) {
                        var D = (E.match(/c[+\-].*/) ? u + parseInt(E.substring(1), 10) : (E.match(/[+\-].*/) ? n + parseInt(E, 10) : parseInt(E, 10)));
                        return (isNaN(D) ? n : D)
                    };
                    t = w(x[0]);
                    p = Math.max(t, w(x[1] || ""));
                    t = (o ? Math.max(t, o.getFullYear()) : t);
                    p = (s ? Math.min(p, s.getFullYear()) : p);
                    m.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; t <= p; t++) {
                        m.yearshtml += "<option value='" + t + "'" + (t === u ? " selected='selected'" : "") + ">" + t + "</option>"
                    }
                    m.yearshtml += "</select>";
                    r += m.yearshtml;
                    m.yearshtml = null
                }
            }
            r += this._get(m, "yearSuffix");
            if (C) {
                r += (v || !(l && B) ? "&#xa0;" : "") + y
            }
            r += "</div>";
            return r
        },
        _adjustInstDate: function(l, o, n) {
            var k = l.drawYear + (n === "Y" ? o : 0),
                m = l.drawMonth + (n === "M" ? o : 0),
                i = Math.min(l.selectedDay, this._getDaysInMonth(k, m)) + (n === "D" ? o : 0),
                j = this._restrictMinMax(l, this._daylightSavingAdjust(new Date(k, m, i)));
            l.selectedDay = j.getDate();
            l.drawMonth = l.selectedMonth = j.getMonth();
            l.drawYear = l.selectedYear = j.getFullYear();
            if (n === "M" || n === "Y") {
                this._notifyChange(l)
            }
        },
        _restrictMinMax: function(l, j) {
            var k = this._getMinMaxDate(l, "min"),
                m = this._getMinMaxDate(l, "max"),
                i = (k && j < k ? k : j);
            return (m && i > m ? m : i)
        },
        _notifyChange: function(j) {
            var i = this._get(j, "onChangeMonthYear");
            if (i) {
                i.apply((j.input ? j.input[0] : null), [j.selectedYear, j.selectedMonth + 1, j])
            }
        },
        _getNumberOfMonths: function(j) {
            var i = this._get(j, "numberOfMonths");
            return (i == null ? [1, 1] : (typeof i === "number" ? [1, i] : i))
        },
        _getMinMaxDate: function(j, i) {
            return this._determineDate(j, this._get(j, i + "Date"), null)
        },
        _getDaysInMonth: function(i, j) {
            return 32 - this._daylightSavingAdjust(new Date(i, j, 32)).getDate()
        },
        _getFirstDayOfMonth: function(i, j) {
            return new Date(i, j, 1).getDay()
        },
        _canAdjustMonth: function(l, n, k, m) {
            var i = this._getNumberOfMonths(l),
                j = this._daylightSavingAdjust(new Date(k, m + (n < 0 ? n : i[0] * i[1]), 1));
            if (n < 0) {
                j.setDate(this._getDaysInMonth(j.getFullYear(), j.getMonth()))
            }
            return this._isInRange(l, j)
        },
        _isInRange: function(m, k) {
            var j, p, l = this._getMinMaxDate(m, "min"),
                i = this._getMinMaxDate(m, "max"),
                q = null,
                n = null,
                o = this._get(m, "yearRange");
            if (o) {
                j = o.split(":");
                p = new Date().getFullYear();
                q = parseInt(j[0], 10);
                n = parseInt(j[1], 10);
                if (j[0].match(/[+\-].*/)) {
                    q += p
                }
                if (j[1].match(/[+\-].*/)) {
                    n += p
                }
            }
            return ((!l || k.getTime() >= l.getTime()) && (!i || k.getTime() <= i.getTime()) && (!q || k.getFullYear() >= q) && (!n || k.getFullYear() <= n))
        },
        _getFormatConfig: function(i) {
            var j = this._get(i, "shortYearCutoff");
            j = (typeof j !== "string" ? j : new Date().getFullYear() % 100 + parseInt(j, 10));
            return {
                shortYearCutoff: j,
                dayNamesShort: this._get(i, "dayNamesShort"),
                dayNames: this._get(i, "dayNames"),
                monthNamesShort: this._get(i, "monthNamesShort"),
                monthNames: this._get(i, "monthNames")
            }
        },
        _formatDate: function(l, i, m, k) {
            if (!i) {
                l.currentDay = l.selectedDay;
                l.currentMonth = l.selectedMonth;
                l.currentYear = l.selectedYear
            }
            var j = (i ? (typeof i === "object" ? i : this._daylightSavingAdjust(new Date(k, m, i))) : this._daylightSavingAdjust(new Date(l.currentYear, l.currentMonth, l.currentDay)));
            return this.formatDate(this._get(l, "dateFormat"), j, this._getFormatConfig(l))
        }
    });

    function d(j) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return j.delegate(i, "mouseout", function() {
            f(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                f(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                f(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(i, "mouseover", function() {
            if (!f.datepicker._isDisabledDatepicker(c.inline ? j.parent()[0] : c.input[0])) {
                f(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                f(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                    f(this).addClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") !== -1) {
                    f(this).addClass("ui-datepicker-next-hover")
                }
            }
        })
    }

    function a(k, j) {
        f.extend(k, j);
        for (var i in j) {
            if (j[i] == null) {
                k[i] = j[i]
            }
        }
        return k
    }
    f.fn.datepicker = function(j) {
        if (!this.length) {
            return this
        }
        if (!f.datepicker.initialized) {
            f(document).mousedown(f.datepicker._checkExternalClick);
            f.datepicker.initialized = true
        }
        if (f("#" + f.datepicker._mainDivId).length === 0) {
            f("body").append(f.datepicker.dpDiv)
        }
        var i = Array.prototype.slice.call(arguments, 1);
        if (typeof j === "string" && (j === "isDisabled" || j === "getDate" || j === "widget")) {
            return f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this[0]].concat(i))
        }
        if (j === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this[0]].concat(i))
        }
        return this.each(function() {
            typeof j === "string" ? f.datepicker["_" + j + "Datepicker"].apply(f.datepicker, [this].concat(i)) : f.datepicker._attachDatepicker(this, j)
        })
    };
    f.datepicker = new b();
    f.datepicker.initialized = false;
    f.datepicker.uuid = new Date().getTime();
    f.datepicker.version = "1.10.3"
})(jQuery);
(function(c, d) {
    var a = {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        b = {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        };
    c.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(g) {
                    var f = c(this).css(g).offset().top;
                    if (f < 0) {
                        c(this).css("top", g.top - f)
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && c.fn.draggable) {
                this._makeDraggable()
            }
            if (this.options.resizable && c.fn.resizable) {
                this._makeResizable()
            }
            this._isOpen = false
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _appendTo: function() {
            var f = this.options.appendTo;
            if (f && (f.jquery || f.nodeType)) {
                return c(f)
            }
            return this.document.find(f || "body").eq(0)
        },
        _destroy: function() {
            var g, f = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(true, true).remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            g = f.parent.children().eq(f.index);
            if (g.length && g[0] !== this.element[0]) {
                g.before(this.element)
            } else {
                f.parent.append(this.element)
            }
        },
        widget: function() {
            return this.uiDialog
        },
        disable: c.noop,
        enable: c.noop,
        close: function(g) {
            var f = this;
            if (!this._isOpen || this._trigger("beforeClose", g) === false) {
                return
            }
            this._isOpen = false;
            this._destroyOverlay();
            if (!this.opener.filter(":focusable").focus().length) {
                c(this.document[0].activeElement).blur()
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                f._trigger("close", g)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(h, f) {
            var g = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            if (g && !f) {
                this._trigger("focus", h)
            }
            return g
        },
        open: function() {
            var f = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable()
                }
                return
            }
            this._isOpen = true;
            this.opener = c(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            this._show(this.uiDialog, this.options.show, function() {
                f._focusTabbable();
                f._trigger("focus")
            });
            this._trigger("open")
        },
        _focusTabbable: function() {
            var f = this.element.find("[autofocus]");
            if (!f.length) {
                f = this.element.find(":tabbable")
            }
            if (!f.length) {
                f = this.uiDialogButtonPane.find(":tabbable")
            }
            if (!f.length) {
                f = this.uiDialogTitlebarClose.filter(":tabbable")
            }
            if (!f.length) {
                f = this.uiDialog
            }
            f.eq(0).focus()
        },
        _keepFocus: function(f) {
            function g() {
                var i = this.document[0].activeElement,
                    h = this.uiDialog[0] === i || c.contains(this.uiDialog[0], i);
                if (!h) {
                    this._focusTabbable()
                }
            }
            f.preventDefault();
            g.call(this);
            this._delay(g)
        },
        _createWrapper: function() {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(h) {
                    if (this.options.closeOnEscape && !h.isDefaultPrevented() && h.keyCode && h.keyCode === c.ui.keyCode.ESCAPE) {
                        h.preventDefault();
                        this.close(h);
                        return
                    }
                    if (h.keyCode !== c.ui.keyCode.TAB) {
                        return
                    }
                    var g = this.uiDialog.find(":tabbable"),
                        i = g.filter(":first"),
                        f = g.filter(":last");
                    if ((h.target === f[0] || h.target === this.uiDialog[0]) && !h.shiftKey) {
                        i.focus(1);
                        h.preventDefault()
                    } else {
                        if ((h.target === i[0] || h.target === this.uiDialog[0]) && h.shiftKey) {
                            f.focus(1);
                            h.preventDefault()
                        }
                    }
                },
                mousedown: function(f) {
                    if (this._moveToTop(f)) {
                        this._focusTabbable()
                    }
                }
            });
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            }
        },
        _createTitlebar: function() {
            var f;
            this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(g) {
                    if (!c(g.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.focus()
                    }
                }
            });
            this.uiDialogTitlebarClose = c("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: false
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(g) {
                    g.preventDefault();
                    this.close(g)
                }
            });
            f = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(f);
            this.uiDialog.attr({
                "aria-labelledby": f.attr("id")
            })
        },
        _title: function(f) {
            if (!this.options.title) {
                f.html("&#160;")
            }
            f.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var g = this,
                f = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (c.isEmptyObject(f) || (c.isArray(f) && !f.length)) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            c.each(f, function(h, i) {
                var j, k;
                i = c.isFunction(i) ? {
                    click: i,
                    text: h
                } : i;
                i = c.extend({
                    type: "button"
                }, i);
                j = i.click;
                i.click = function() {
                    j.apply(g.element[0], arguments)
                };
                k = {
                    icons: i.icons,
                    text: i.showText
                };
                delete i.icons;
                delete i.showText;
                c("<button></button>", i).button(k).appendTo(g.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            var h = this,
                g = this.options;

            function f(i) {
                return {
                    position: i.position,
                    offset: i.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, j) {
                    c(this).addClass("ui-dialog-dragging");
                    h._blockFrames();
                    h._trigger("dragStart", i, f(j))
                },
                drag: function(i, j) {
                    h._trigger("drag", i, f(j))
                },
                stop: function(i, j) {
                    g.position = [j.position.left - h.document.scrollLeft(), j.position.top - h.document.scrollTop()];
                    c(this).removeClass("ui-dialog-dragging");
                    h._unblockFrames();
                    h._trigger("dragStop", i, f(j))
                }
            })
        },
        _makeResizable: function() {
            var k = this,
                i = this.options,
                j = i.resizable,
                f = this.uiDialog.css("position"),
                h = typeof j === "string" ? j : "n,e,s,w,se,sw,ne,nw";

            function g(l) {
                return {
                    originalPosition: l.originalPosition,
                    originalSize: l.originalSize,
                    position: l.position,
                    size: l.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: h,
                start: function(l, m) {
                    c(this).addClass("ui-dialog-resizing");
                    k._blockFrames();
                    k._trigger("resizeStart", l, g(m))
                },
                resize: function(l, m) {
                    k._trigger("resize", l, g(m))
                },
                stop: function(l, m) {
                    i.height = c(this).height();
                    i.width = c(this).width();
                    c(this).removeClass("ui-dialog-resizing");
                    k._unblockFrames();
                    k._trigger("resizeStop", l, g(m))
                }
            }).css("position", f)
        },
        _minHeight: function() {
            var f = this.options;
            return f.height === "auto" ? f.minHeight : Math.min(f.minHeight, f.height)
        },
        _position: function() {
            var f = this.uiDialog.is(":visible");
            if (!f) {
                this.uiDialog.show()
            }
            this.uiDialog.position(this.options.position);
            if (!f) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function(h) {
            var i = this,
                g = false,
                f = {};
            c.each(h, function(j, k) {
                i._setOption(j, k);
                if (j in a) {
                    g = true
                }
                if (j in b) {
                    f[j] = k
                }
            });
            if (g) {
                this._size();
                this._position()
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", f)
            }
        },
        _setOption: function(h, i) {
            var g, j, f = this.uiDialog;
            if (h === "dialogClass") {
                f.removeClass(this.options.dialogClass).addClass(i)
            }
            if (h === "disabled") {
                return
            }
            this._super(h, i);
            if (h === "appendTo") {
                this.uiDialog.appendTo(this._appendTo())
            }
            if (h === "buttons") {
                this._createButtons()
            }
            if (h === "closeText") {
                this.uiDialogTitlebarClose.button({
                    label: "" + i
                })
            }
            if (h === "draggable") {
                g = f.is(":data(ui-draggable)");
                if (g && !i) {
                    f.draggable("destroy")
                }
                if (!g && i) {
                    this._makeDraggable()
                }
            }
            if (h === "position") {
                this._position()
            }
            if (h === "resizable") {
                j = f.is(":data(ui-resizable)");
                if (j && !i) {
                    f.resizable("destroy")
                }
                if (j && typeof i === "string") {
                    f.resizable("option", "handles", i)
                }
                if (!j && i !== false) {
                    this._makeResizable()
                }
            }
            if (h === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
            }
        },
        _size: function() {
            var f, h, i, g = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            if (g.minWidth > g.width) {
                g.width = g.minWidth
            }
            f = this.uiDialog.css({
                height: "auto",
                width: g.width
            }).outerHeight();
            h = Math.max(0, g.minHeight - f);
            i = typeof g.maxHeight === "number" ? Math.max(0, g.maxHeight - f) : "none";
            if (g.height === "auto") {
                this.element.css({
                    minHeight: h,
                    maxHeight: i,
                    height: "auto"
                })
            } else {
                this.element.height(Math.max(0, g.height - f))
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var f = c(this);
                return c("<div>").css({
                    position: "absolute",
                    width: f.outerWidth(),
                    height: f.outerHeight()
                }).appendTo(f.parent()).offset(f.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _allowInteraction: function(f) {
            if (c(f.target).closest(".ui-dialog").length) {
                return true
            }
            return !!c(f.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return
            }
            var g = this,
                f = this.widgetFullName;
            if (!c.ui.dialog.overlayInstances) {
                this._delay(function() {
                    if (c.ui.dialog.overlayInstances) {
                        this.document.bind("focusin.dialog", function(h) {
                            if (!g._allowInteraction(h)) {
                                h.preventDefault();
                                c(".ui-dialog:visible:last .ui-dialog-content").data(f)._focusTabbable()
                            }
                        })
                    }
                })
            }
            this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            c.ui.dialog.overlayInstances++
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return
            }
            if (this.overlay) {
                c.ui.dialog.overlayInstances--;
                if (!c.ui.dialog.overlayInstances) {
                    this.document.unbind("focusin.dialog")
                }
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    c.ui.dialog.overlayInstances = 0;
    if (c.uiBackCompat !== false) {
        c.widget("ui.dialog", c.ui.dialog, {
            _position: function() {
                var g = this.options.position,
                    h = [],
                    i = [0, 0],
                    f;
                if (g) {
                    if (typeof g === "string" || (typeof g === "object" && "0" in g)) {
                        h = g.split ? g.split(" ") : [g[0], g[1]];
                        if (h.length === 1) {
                            h[1] = h[0]
                        }
                        c.each(["left", "top"], function(k, j) {
                            if (+h[k] === h[k]) {
                                i[k] = h[k];
                                h[k] = j
                            }
                        });
                        g = {
                            my: h[0] + (i[0] < 0 ? i[0] : "+" + i[0]) + " " + h[1] + (i[1] < 0 ? i[1] : "+" + i[1]),
                            at: h.join(" ")
                        }
                    }
                    g = c.extend({}, c.ui.dialog.prototype.options.position, g)
                } else {
                    g = c.ui.dialog.prototype.options.position
                }
                f = this.uiDialog.is(":visible");
                if (!f) {
                    this.uiDialog.show()
                }
                this.uiDialog.position(g);
                if (!f) {
                    this.uiDialog.hide()
                }
            }
        })
    }
}(jQuery));
(function(b, d) {
    var a = /up|down|vertical/,
        c = /up|left|vertical|horizontal/;
    b.effects.effect.blind = function(h, n) {
        var i = b(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            p = b.effects.setMode(i, h.mode || "hide"),
            s = h.direction || "up",
            k = a.test(s),
            j = k ? "height" : "width",
            q = k ? "top" : "left",
            u = c.test(s),
            m = {},
            t = p === "show",
            g, f, l;
        if (i.parent().is(".ui-effects-wrapper")) {
            b.effects.save(i.parent(), r)
        } else {
            b.effects.save(i, r)
        }
        i.show();
        g = b.effects.createWrapper(i).css({
            overflow: "hidden"
        });
        f = g[j]();
        l = parseFloat(g.css(q)) || 0;
        m[j] = t ? f : 0;
        if (!u) {
            i.css(k ? "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({
                position: "absolute"
            });
            m[q] = t ? l : f + l
        }
        if (t) {
            g.css(j, 0);
            if (!u) {
                g.css(q, l + f)
            }
        }
        g.animate(m, {
            duration: h.duration,
            easing: h.easing,
            queue: false,
            complete: function() {
                if (p === "hide") {
                    i.hide()
                }
                b.effects.restore(i, r);
                b.effects.removeWrapper(i);
                n()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.bounce = function(n, m) {
        var c = a(this),
            d = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = a.effects.setMode(c, n.mode || "effect"),
            k = l === "hide",
            w = l === "show",
            x = n.direction || "up",
            f = n.distance,
            j = n.times || 5,
            y = j * 2 + (w || k ? 1 : 0),
            v = n.duration / y,
            q = n.easing,
            g = (x === "up" || x === "down") ? "top" : "left",
            p = (x === "up" || x === "left"),
            u, h, t, r = c.queue(),
            s = r.length;
        if (w || k) {
            d.push("opacity")
        }
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        if (!f) {
            f = c[g === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (w) {
            t = {
                opacity: 1
            };
            t[g] = 0;
            c.css("opacity", 0).css(g, p ? -f * 2 : f * 2).animate(t, v, q)
        }
        if (k) {
            f = f / Math.pow(2, j - 1)
        }
        t = {};
        t[g] = 0;
        for (u = 0; u < j; u++) {
            h = {};
            h[g] = (p ? "-=" : "+=") + f;
            c.animate(h, v, q).animate(t, v, q);
            f = k ? f * 2 : f / 2
        }
        if (k) {
            h = {
                opacity: 0
            };
            h[g] = (p ? "-=" : "+=") + f;
            c.animate(h, v, q)
        }
        c.queue(function() {
            if (k) {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            m()
        });
        if (s > 1) {
            r.splice.apply(r, [1, 0].concat(r.splice(s, y + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.clip = function(g, j) {
        var h = a(this),
            n = ["position", "top", "bottom", "left", "right", "height", "width"],
            m = a.effects.setMode(h, g.mode || "hide"),
            q = m === "show",
            p = g.direction || "vertical",
            l = p === "vertical",
            r = l ? "height" : "width",
            k = l ? "top" : "left",
            i = {},
            d, f, c;
        a.effects.save(h, n);
        h.show();
        d = a.effects.createWrapper(h).css({
            overflow: "hidden"
        });
        f = (h[0].tagName === "IMG") ? d : h;
        c = f[r]();
        if (q) {
            f.css(r, 0);
            f.css(k, c / 2)
        }
        i[r] = q ? c : 0;
        i[k] = q ? 0 : c / 2;
        f.animate(i, {
            queue: false,
            duration: g.duration,
            easing: g.easing,
            complete: function() {
                if (!q) {
                    h.hide()
                }
                a.effects.restore(h, n);
                a.effects.removeWrapper(h);
                j()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.drop = function(d, i) {
        var f = a(this),
            k = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            j = a.effects.setMode(f, d.mode || "hide"),
            m = j === "show",
            l = d.direction || "left",
            g = (l === "up" || l === "down") ? "top" : "left",
            n = (l === "up" || l === "left") ? "pos" : "neg",
            h = {
                opacity: m ? 1 : 0
            },
            c;
        a.effects.save(f, k);
        f.show();
        a.effects.createWrapper(f);
        c = d.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (m) {
            f.css("opacity", 0).css(g, n === "pos" ? -c : c)
        }
        h[g] = (m ? (n === "pos" ? "+=" : "-=") : (n === "pos" ? "-=" : "+=")) + c;
        f.animate(h, {
            queue: false,
            duration: d.duration,
            easing: d.easing,
            complete: function() {
                if (j === "hide") {
                    f.hide()
                }
                a.effects.restore(f, k);
                a.effects.removeWrapper(f);
                i()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.explode = function(t, s) {
        var l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            d = l,
            c = a(this),
            n = a.effects.setMode(c, t.mode || "hide"),
            x = n === "show",
            h = c.show().css("visibility", "hidden").offset(),
            u = Math.ceil(c.outerWidth() / d),
            r = Math.ceil(c.outerHeight() / l),
            k = [],
            w, v, f, q, p, m;

        function y() {
            k.push(this);
            if (k.length === l * d) {
                g()
            }
        }
        for (w = 0; w < l; w++) {
            q = h.top + w * r;
            m = w - (l - 1) / 2;
            for (v = 0; v < d; v++) {
                f = h.left + v * u;
                p = v - (d - 1) / 2;
                c.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -v * u,
                    top: -w * r
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: u,
                    height: r,
                    left: f + (x ? p * u : 0),
                    top: q + (x ? m * r : 0),
                    opacity: x ? 0 : 1
                }).animate({
                    left: f + (x ? 0 : p * u),
                    top: q + (x ? 0 : m * r),
                    opacity: x ? 1 : 0
                }, t.duration || 500, t.easing, y)
            }
        }

        function g() {
            c.css({
                visibility: "visible"
            });
            a(k).remove();
            if (!x) {
                c.hide()
            }
            s()
        }
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fade = function(g, c) {
        var d = a(this),
            f = a.effects.setMode(d, g.mode || "toggle");
        d.animate({
            opacity: f
        }, {
            queue: false,
            duration: g.duration,
            easing: g.easing,
            complete: c
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fold = function(f, j) {
        var g = a(this),
            p = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = a.effects.setMode(g, f.mode || "hide"),
            s = l === "show",
            m = l === "hide",
            u = f.size || 15,
            n = /([0-9]+)%/.exec(u),
            t = !!f.horizFirst,
            k = s !== t,
            h = k ? ["width", "height"] : ["height", "width"],
            i = f.duration / 2,
            d, c, r = {},
            q = {};
        a.effects.save(g, p);
        g.show();
        d = a.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        c = k ? [d.width(), d.height()] : [d.height(), d.width()];
        if (n) {
            u = parseInt(n[1], 10) / 100 * c[m ? 0 : 1]
        }
        if (s) {
            d.css(t ? {
                height: 0,
                width: u
            } : {
                height: u,
                width: 0
            })
        }
        r[h[0]] = s ? c[0] : u;
        q[h[1]] = s ? c[1] : 0;
        d.animate(r, i, f.easing).animate(q, i, f.easing, function() {
            if (m) {
                g.hide()
            }
            a.effects.restore(g, p);
            a.effects.removeWrapper(g);
            j()
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.highlight = function(i, c) {
        var f = a(this),
            d = ["backgroundImage", "backgroundColor", "opacity"],
            h = a.effects.setMode(f, i.mode || "show"),
            g = {
                backgroundColor: f.css("backgroundColor")
            };
        if (h === "hide") {
            g.opacity = 0
        }
        a.effects.save(f, d);
        f.show().css({
            backgroundImage: "none",
            backgroundColor: i.color || "#ffff99"
        }).animate(g, {
            queue: false,
            duration: i.duration,
            easing: i.easing,
            complete: function() {
                if (h === "hide") {
                    f.hide()
                }
                a.effects.restore(f, d);
                c()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.pulsate = function(c, h) {
        var f = a(this),
            l = a.effects.setMode(f, c.mode || "show"),
            q = l === "show",
            m = l === "hide",
            r = (q || l === "hide"),
            n = ((c.times || 5) * 2) + (r ? 1 : 0),
            g = c.duration / n,
            p = 0,
            k = f.queue(),
            d = k.length,
            j;
        if (q || !f.is(":visible")) {
            f.css("opacity", 0).show();
            p = 1
        }
        for (j = 1; j < n; j++) {
            f.animate({
                opacity: p
            }, g, c.easing);
            p = 1 - p
        }
        f.animate({
            opacity: p
        }, g, c.easing);
        f.queue(function() {
            if (m) {
                f.hide()
            }
            h()
        });
        if (d > 1) {
            k.splice.apply(k, [1, 0].concat(k.splice(d, n + 1)))
        }
        f.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.puff = function(k, c) {
        var i = a(this),
            j = a.effects.setMode(i, k.mode || "hide"),
            g = j === "hide",
            h = parseInt(k.percent, 10) || 150,
            f = h / 100,
            d = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
        a.extend(k, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: j,
            complete: c,
            percent: g ? h : 100,
            from: g ? d : {
                height: d.height * f,
                width: d.width * f,
                outerHeight: d.outerHeight * f,
                outerWidth: d.outerWidth * f
            }
        });
        i.effect(k)
    };
    a.effects.effect.scale = function(c, g) {
        var d = a(this),
            m = a.extend(true, {}, c),
            h = a.effects.setMode(d, c.mode || "effect"),
            i = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (h === "hide" ? 0 : 100)),
            k = c.direction || "both",
            l = c.origin,
            f = {
                height: d.height(),
                width: d.width(),
                outerHeight: d.outerHeight(),
                outerWidth: d.outerWidth()
            },
            j = {
                y: k !== "horizontal" ? (i / 100) : 1,
                x: k !== "vertical" ? (i / 100) : 1
            };
        m.effect = "size";
        m.queue = false;
        m.complete = g;
        if (h !== "effect") {
            m.origin = l || ["middle", "center"];
            m.restore = true
        }
        m.from = c.from || (h === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f);
        m.to = {
            height: f.height * j.y,
            width: f.width * j.x,
            outerHeight: f.outerHeight * j.y,
            outerWidth: f.outerWidth * j.x
        };
        if (m.fade) {
            if (h === "show") {
                m.from.opacity = 0;
                m.to.opacity = 1
            }
            if (h === "hide") {
                m.from.opacity = 1;
                m.to.opacity = 0
            }
        }
        d.effect(m)
    };
    a.effects.effect.size = function(m, l) {
        var r, j, k, c = a(this),
            q = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            p = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            n = ["width", "height", "overflow"],
            h = ["fontSize"],
            t = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            i = a.effects.setMode(c, m.mode || "effect"),
            s = m.restore || i !== "effect",
            w = m.scale || "both",
            u = m.origin || ["middle", "center"],
            v = c.css("position"),
            f = s ? q : p,
            g = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        if (i === "show") {
            c.show()
        }
        r = {
            height: c.height(),
            width: c.width(),
            outerHeight: c.outerHeight(),
            outerWidth: c.outerWidth()
        };
        if (m.mode === "toggle" && i === "show") {
            c.from = m.to || g;
            c.to = m.from || r
        } else {
            c.from = m.from || (i === "show" ? g : r);
            c.to = m.to || (i === "hide" ? g : r)
        }
        k = {
            from: {
                y: c.from.height / r.height,
                x: c.from.width / r.width
            },
            to: {
                y: c.to.height / r.height,
                x: c.to.width / r.width
            }
        };
        if (w === "box" || w === "both") {
            if (k.from.y !== k.to.y) {
                f = f.concat(t);
                c.from = a.effects.setTransition(c, t, k.from.y, c.from);
                c.to = a.effects.setTransition(c, t, k.to.y, c.to)
            }
            if (k.from.x !== k.to.x) {
                f = f.concat(d);
                c.from = a.effects.setTransition(c, d, k.from.x, c.from);
                c.to = a.effects.setTransition(c, d, k.to.x, c.to)
            }
        }
        if (w === "content" || w === "both") {
            if (k.from.y !== k.to.y) {
                f = f.concat(h).concat(n);
                c.from = a.effects.setTransition(c, h, k.from.y, c.from);
                c.to = a.effects.setTransition(c, h, k.to.y, c.to)
            }
        }
        a.effects.save(c, f);
        c.show();
        a.effects.createWrapper(c);
        c.css("overflow", "hidden").css(c.from);
        if (u) {
            j = a.effects.getBaseline(u, r);
            c.from.top = (r.outerHeight - c.outerHeight()) * j.y;
            c.from.left = (r.outerWidth - c.outerWidth()) * j.x;
            c.to.top = (r.outerHeight - c.to.outerHeight) * j.y;
            c.to.left = (r.outerWidth - c.to.outerWidth) * j.x
        }
        c.css(c.from);
        if (w === "content" || w === "both") {
            t = t.concat(["marginTop", "marginBottom"]).concat(h);
            d = d.concat(["marginLeft", "marginRight"]);
            n = q.concat(t).concat(d);
            c.find("*[width]").each(function() {
                var x = a(this),
                    o = {
                        height: x.height(),
                        width: x.width(),
                        outerHeight: x.outerHeight(),
                        outerWidth: x.outerWidth()
                    };
                if (s) {
                    a.effects.save(x, n)
                }
                x.from = {
                    height: o.height * k.from.y,
                    width: o.width * k.from.x,
                    outerHeight: o.outerHeight * k.from.y,
                    outerWidth: o.outerWidth * k.from.x
                };
                x.to = {
                    height: o.height * k.to.y,
                    width: o.width * k.to.x,
                    outerHeight: o.height * k.to.y,
                    outerWidth: o.width * k.to.x
                };
                if (k.from.y !== k.to.y) {
                    x.from = a.effects.setTransition(x, t, k.from.y, x.from);
                    x.to = a.effects.setTransition(x, t, k.to.y, x.to)
                }
                if (k.from.x !== k.to.x) {
                    x.from = a.effects.setTransition(x, d, k.from.x, x.from);
                    x.to = a.effects.setTransition(x, d, k.to.x, x.to)
                }
                x.css(x.from);
                x.animate(x.to, m.duration, m.easing, function() {
                    if (s) {
                        a.effects.restore(x, n)
                    }
                })
            })
        }
        c.animate(c.to, {
            queue: false,
            duration: m.duration,
            easing: m.easing,
            complete: function() {
                if (c.to.opacity === 0) {
                    c.css("opacity", c.from.opacity)
                }
                if (i === "hide") {
                    c.hide()
                }
                a.effects.restore(c, f);
                if (!s) {
                    if (v === "static") {
                        c.css({
                            position: "relative",
                            top: c.to.top,
                            left: c.to.left
                        })
                    } else {
                        a.each(["top", "left"], function(o, x) {
                            c.css(x, function(z, B) {
                                var A = parseInt(B, 10),
                                    y = o ? c.to.left : c.to.top;
                                if (B === "auto") {
                                    return y + "px"
                                }
                                return A + y + "px"
                            })
                        })
                    }
                }
                a.effects.removeWrapper(c);
                l()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.shake = function(m, l) {
        var c = a(this),
            d = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = a.effects.setMode(c, m.mode || "effect"),
            v = m.direction || "left",
            f = m.distance || 20,
            j = m.times || 3,
            w = j * 2 + 1,
            r = Math.round(m.duration / w),
            h = (v === "up" || v === "down") ? "top" : "left",
            g = (v === "up" || v === "left"),
            u = {},
            t = {},
            s = {},
            q, n = c.queue(),
            p = n.length;
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        u[h] = (g ? "-=" : "+=") + f;
        t[h] = (g ? "+=" : "-=") + f * 2;
        s[h] = (g ? "-=" : "+=") + f * 2;
        c.animate(u, r, m.easing);
        for (q = 1; q < j; q++) {
            c.animate(t, r, m.easing).animate(s, r, m.easing)
        }
        c.animate(t, r, m.easing).animate(u, r / 2, m.easing).queue(function() {
            if (k === "hide") {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            l()
        });
        if (p > 1) {
            n.splice.apply(n, [1, 0].concat(n.splice(p, w + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.slide = function(f, j) {
        var g = a(this),
            l = ["position", "top", "bottom", "left", "right", "width", "height"],
            k = a.effects.setMode(g, f.mode || "show"),
            n = k === "show",
            m = f.direction || "left",
            h = (m === "up" || m === "down") ? "top" : "left",
            d = (m === "up" || m === "left"),
            c, i = {};
        a.effects.save(g, l);
        g.show();
        c = f.distance || g[h === "top" ? "outerHeight" : "outerWidth"](true);
        a.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        if (n) {
            g.css(h, d ? (isNaN(c) ? "-" + c : -c) : c)
        }
        i[h] = (n ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
        g.animate(i, {
            queue: false,
            duration: f.duration,
            easing: f.easing,
            complete: function() {
                if (k === "hide") {
                    g.hide()
                }
                a.effects.restore(g, l);
                a.effects.removeWrapper(g);
                j()
            }
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.transfer = function(d, i) {
        var g = a(this),
            l = a(d.to),
            p = l.css("position") === "fixed",
            k = a("body"),
            m = p ? k.scrollTop() : 0,
            n = p ? k.scrollLeft() : 0,
            c = l.offset(),
            h = {
                top: c.top - m,
                left: c.left - n,
                height: l.innerHeight(),
                width: l.innerWidth()
            },
            j = g.offset(),
            f = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({
                top: j.top - m,
                left: j.left - n,
                height: g.innerHeight(),
                width: g.innerWidth(),
                position: p ? "fixed" : "absolute"
            }).animate(h, d.duration, d.easing, function() {
                f.remove();
                i()
            })
    }
})(jQuery);
(function(a, b) {
    a.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, a.proxy(function(c) {
                if (this.options.disabled) {
                    c.preventDefault()
                }
            }, this));
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({
                "mousedown .ui-menu-item > a": function(c) {
                    c.preventDefault()
                },
                "click .ui-state-disabled > a": function(c) {
                    c.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(c) {
                    var d = a(c.target).closest(".ui-menu-item");
                    if (!this.mouseHandled && d.not(".ui-state-disabled").length) {
                        this.mouseHandled = true;
                        this.select(c);
                        if (d.has(".ui-menu").length) {
                            this.expand(c)
                        } else {
                            if (!this.element.is(":focus")) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(c) {
                    var d = a(c.currentTarget);
                    d.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(c, d)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(f, c) {
                    var d = this.active || this.element.children(".ui-menu-item").eq(0);
                    if (!c) {
                        this.focus(f, d)
                    }
                },
                blur: function(c) {
                    this._delay(function() {
                        if (!a.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(c)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(c) {
                    if (!a(c.target).closest(".ui-menu").length) {
                        this.collapseAll(c)
                    }
                    this.mouseHandled = false
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var c = a(this);
                if (c.data("ui-menu-submenu-carat")) {
                    c.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(j) {
            var d, i, k, h, g, c = true;

            function f(l) {
                return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (j.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(j);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(j);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", j);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", j);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(j);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(j);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(j);
                    break;
                case a.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(j)
                    }
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(j);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(j);
                    break;
                default:
                    c = false;
                    i = this.previousFilter || "";
                    k = String.fromCharCode(j.keyCode);
                    h = false;
                    clearTimeout(this.filterTimer);
                    if (k === i) {
                        h = true
                    } else {
                        k = i + k
                    }
                    g = new RegExp("^" + f(k), "i");
                    d = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return g.test(a(this).children("a").text())
                    });
                    d = h && d.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : d;
                    if (!d.length) {
                        k = String.fromCharCode(j.keyCode);
                        g = new RegExp("^" + f(k), "i");
                        d = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return g.test(a(this).children("a").text())
                        })
                    }
                    if (d.length) {
                        this.focus(j, d);
                        if (d.length > 1) {
                            this.previousFilter = k;
                            this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1000)
                        } else {
                            delete this.previousFilter
                        }
                    } else {
                        delete this.previousFilter
                    }
            }
            if (c) {
                j.preventDefault()
            }
        },
        _activate: function(c) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.children("a[aria-haspopup='true']").length) {
                    this.expand(c)
                } else {
                    this.select(c)
                }
            }
        },
        refresh: function() {
            var f, d = this.options.icons.submenu,
                c = this.element.find(this.options.menus);
            c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var i = a(this),
                    h = i.prev("a"),
                    g = a("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", true);
                h.attr("aria-haspopup", "true").prepend(g);
                i.attr("aria-labelledby", h.attr("id"))
            });
            f = c.add(this.element);
            f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            f.children(":not(.ui-menu-item)").each(function() {
                var g = a(this);
                if (!/[^\-\u2014\u2013\s]/.test(g.text())) {
                    g.addClass("ui-widget-content ui-menu-divider")
                }
            });
            f.children(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !a.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(c, d) {
            if (c === "icons") {
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
            }
            this._super(c, d)
        },
        focus: function(d, c) {
            var g, f;
            this.blur(d, d && d.type === "focus");
            this._scrollIntoView(c);
            this.active = c.first();
            f = this.active.children("a").addClass("ui-state-focus");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", f.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            if (d && d.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            g = c.children(".ui-menu");
            if (g.length && (/^mouse/.test(d.type))) {
                this._startOpening(g)
            }
            this.activeMenu = c.parent();
            this._trigger("focus", d, {
                item: c
            })
        },
        _scrollIntoView: function(g) {
            var j, f, h, c, d, i;
            if (this._hasScroll()) {
                j = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
                f = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
                h = g.offset().top - this.activeMenu.offset().top - j - f;
                c = this.activeMenu.scrollTop();
                d = this.activeMenu.height();
                i = g.height();
                if (h < 0) {
                    this.activeMenu.scrollTop(c + h)
                } else {
                    if (h + i > d) {
                        this.activeMenu.scrollTop(c + h - d + i)
                    }
                }
            }
        },
        blur: function(d, c) {
            if (!c) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", d, {
                item: this.active
            })
        },
        _startOpening: function(c) {
            clearTimeout(this.timer);
            if (c.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(c)
            }, this.delay)
        },
        _open: function(d) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(d, c) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var f = c ? this.element : a(d && d.target).closest(this.element.find(".ui-menu"));
                if (!f.length) {
                    f = this.element
                }
                this._close(f);
                this.blur(d);
                this.activeMenu = f
            }, this.delay)
        },
        _close: function(c) {
            if (!c) {
                c = this.active ? this.active.parent() : this.element
            }
            c.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(d) {
            var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (c && c.length) {
                this._close();
                this.focus(d, c)
            }
        },
        expand: function(d) {
            var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            if (c && c.length) {
                this._open(c.parent());
                this._delay(function() {
                    this.focus(d, c)
                })
            }
        },
        next: function(c) {
            this._move("next", "first", c)
        },
        previous: function(c) {
            this._move("prev", "last", c)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(g, d, f) {
            var c;
            if (this.active) {
                if (g === "first" || g === "last") {
                    c = this.active[g === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    c = this.active[g + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!c || !c.length || !this.active) {
                c = this.activeMenu.children(".ui-menu-item")[d]()
            }
            this.focus(f, c)
        },
        nextPage: function(f) {
            var d, g, c;
            if (!this.active) {
                this.next(f);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                g = this.active.offset().top;
                c = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    d = a(this);
                    return d.offset().top - g - c < 0
                });
                this.focus(f, d)
            } else {
                this.focus(f, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(f) {
            var d, g, c;
            if (!this.active) {
                this.next(f);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                g = this.active.offset().top;
                c = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    d = a(this);
                    return d.offset().top - g + c > 0
                });
                this.focus(f, d)
            } else {
                this.focus(f, this.activeMenu.children(".ui-menu-item").first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(c) {
            this.active = this.active || a(c.target).closest(".ui-menu-item");
            var d = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(c, true)
            }
            this._trigger("select", c, d)
        }
    })
}(jQuery));
(function(f, c) {
    f.ui = f.ui || {};
    var k, l = Math.max,
        p = Math.abs,
        n = Math.round,
        d = /left|center|right/,
        i = /top|center|bottom/,
        a = /[\+\-]\d+(\.[\d]+)?%?/,
        m = /^\w+/,
        b = /%$/,
        h = f.fn.position;

    function o(s, r, q) {
        return [parseFloat(s[0]) * (b.test(s[0]) ? r / 100 : 1), parseFloat(s[1]) * (b.test(s[1]) ? q / 100 : 1)]
    }

    function j(q, r) {
        return parseInt(f.css(q, r), 10) || 0
    }

    function g(r) {
        var q = r[0];
        if (q.nodeType === 9) {
            return {
                width: r.width(),
                height: r.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            }
        }
        if (f.isWindow(q)) {
            return {
                width: r.width(),
                height: r.height(),
                offset: {
                    top: r.scrollTop(),
                    left: r.scrollLeft()
                }
            }
        }
        if (q.preventDefault) {
            return {
                width: 0,
                height: 0,
                offset: {
                    top: q.pageY,
                    left: q.pageX
                }
            }
        }
        return {
            width: r.outerWidth(),
            height: r.outerHeight(),
            offset: r.offset()
        }
    }
    f.position = {
        scrollbarWidth: function() {
            if (k !== c) {
                return k
            }
            var r, q, t = f("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                s = t.children()[0];
            f("body").append(t);
            r = s.offsetWidth;
            t.css("overflow", "scroll");
            q = s.offsetWidth;
            if (r === q) {
                q = t[0].clientWidth
            }
            t.remove();
            return (k = r - q)
        },
        getScrollInfo: function(u) {
            var t = u.isWindow ? "" : u.element.css("overflow-x"),
                s = u.isWindow ? "" : u.element.css("overflow-y"),
                r = t === "scroll" || (t === "auto" && u.width < u.element[0].scrollWidth),
                q = s === "scroll" || (s === "auto" && u.height < u.element[0].scrollHeight);
            return {
                width: q ? f.position.scrollbarWidth() : 0,
                height: r ? f.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(r) {
            var s = f(r || window),
                q = f.isWindow(s[0]);
            return {
                element: s,
                isWindow: q,
                offset: s.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: s.scrollLeft(),
                scrollTop: s.scrollTop(),
                width: q ? s.width() : s.outerWidth(),
                height: q ? s.height() : s.outerHeight()
            }
        }
    };
    f.fn.position = function(A) {
        if (!A || !A.of) {
            return h.apply(this, arguments)
        }
        A = f.extend({}, A);
        var B, x, v, z, u, q, w = f(A.of),
            t = f.position.getWithinInfo(A.within),
            r = f.position.getScrollInfo(t),
            y = (A.collision || "flip").split(" "),
            s = {};
        q = g(w);
        if (w[0].preventDefault) {
            A.at = "left top"
        }
        x = q.width;
        v = q.height;
        z = q.offset;
        u = f.extend({}, z);
        f.each(["my", "at"], function() {
            var E = (A[this] || "").split(" "),
                D, C;
            if (E.length === 1) {
                E = d.test(E[0]) ? E.concat(["center"]) : i.test(E[0]) ? ["center"].concat(E) : ["center", "center"]
            }
            E[0] = d.test(E[0]) ? E[0] : "center";
            E[1] = i.test(E[1]) ? E[1] : "center";
            D = a.exec(E[0]);
            C = a.exec(E[1]);
            s[this] = [D ? D[0] : 0, C ? C[0] : 0];
            A[this] = [m.exec(E[0])[0], m.exec(E[1])[0]]
        });
        if (y.length === 1) {
            y[1] = y[0]
        }
        if (A.at[0] === "right") {
            u.left += x
        } else {
            if (A.at[0] === "center") {
                u.left += x / 2
            }
        }
        if (A.at[1] === "bottom") {
            u.top += v
        } else {
            if (A.at[1] === "center") {
                u.top += v / 2
            }
        }
        B = o(s.at, x, v);
        u.left += B[0];
        u.top += B[1];
        return this.each(function() {
            var D, M, F = f(this),
                H = F.outerWidth(),
                E = F.outerHeight(),
                G = j(this, "marginLeft"),
                C = j(this, "marginTop"),
                L = H + G + j(this, "marginRight") + r.width,
                K = E + C + j(this, "marginBottom") + r.height,
                I = f.extend({}, u),
                J = o(s.my, F.outerWidth(), F.outerHeight());
            if (A.my[0] === "right") {
                I.left -= H
            } else {
                if (A.my[0] === "center") {
                    I.left -= H / 2
                }
            }
            if (A.my[1] === "bottom") {
                I.top -= E
            } else {
                if (A.my[1] === "center") {
                    I.top -= E / 2
                }
            }
            I.left += J[0];
            I.top += J[1];
            if (!f.support.offsetFractions) {
                I.left = n(I.left);
                I.top = n(I.top)
            }
            D = {
                marginLeft: G,
                marginTop: C
            };
            f.each(["left", "top"], function(O, N) {
                if (f.ui.position[y[O]]) {
                    f.ui.position[y[O]][N](I, {
                        targetWidth: x,
                        targetHeight: v,
                        elemWidth: H,
                        elemHeight: E,
                        collisionPosition: D,
                        collisionWidth: L,
                        collisionHeight: K,
                        offset: [B[0] + J[0], B[1] + J[1]],
                        my: A.my,
                        at: A.at,
                        within: t,
                        elem: F
                    })
                }
            });
            if (A.using) {
                M = function(Q) {
                    var S = z.left - I.left,
                        P = S + x - H,
                        R = z.top - I.top,
                        O = R + v - E,
                        N = {
                            target: {
                                element: w,
                                left: z.left,
                                top: z.top,
                                width: x,
                                height: v
                            },
                            element: {
                                element: F,
                                left: I.left,
                                top: I.top,
                                width: H,
                                height: E
                            },
                            horizontal: P < 0 ? "left" : S > 0 ? "right" : "center",
                            vertical: O < 0 ? "top" : R > 0 ? "bottom" : "middle"
                        };
                    if (x < H && p(S + P) < x) {
                        N.horizontal = "center"
                    }
                    if (v < E && p(R + O) < v) {
                        N.vertical = "middle"
                    }
                    if (l(p(S), p(P)) > l(p(R), p(O))) {
                        N.important = "horizontal"
                    } else {
                        N.important = "vertical"
                    }
                    A.using.call(this, Q, N)
                }
            }
            F.offset(f.extend(I, {
                using: M
            }))
        })
    };
    f.ui.position = {
        fit: {
            left: function(u, t) {
                var s = t.within,
                    w = s.isWindow ? s.scrollLeft : s.offset.left,
                    y = s.width,
                    v = u.left - t.collisionPosition.marginLeft,
                    x = w - v,
                    r = v + t.collisionWidth - y - w,
                    q;
                if (t.collisionWidth > y) {
                    if (x > 0 && r <= 0) {
                        q = u.left + x + t.collisionWidth - y - w;
                        u.left += x - q
                    } else {
                        if (r > 0 && x <= 0) {
                            u.left = w
                        } else {
                            if (x > r) {
                                u.left = w + y - t.collisionWidth
                            } else {
                                u.left = w
                            }
                        }
                    }
                } else {
                    if (x > 0) {
                        u.left += x
                    } else {
                        if (r > 0) {
                            u.left -= r
                        } else {
                            u.left = l(u.left - v, u.left)
                        }
                    }
                }
            },
            top: function(t, s) {
                var r = s.within,
                    x = r.isWindow ? r.scrollTop : r.offset.top,
                    y = s.within.height,
                    v = t.top - s.collisionPosition.marginTop,
                    w = x - v,
                    u = v + s.collisionHeight - y - x,
                    q;
                if (s.collisionHeight > y) {
                    if (w > 0 && u <= 0) {
                        q = t.top + w + s.collisionHeight - y - x;
                        t.top += w - q
                    } else {
                        if (u > 0 && w <= 0) {
                            t.top = x
                        } else {
                            if (w > u) {
                                t.top = x + y - s.collisionHeight
                            } else {
                                t.top = x
                            }
                        }
                    }
                } else {
                    if (w > 0) {
                        t.top += w
                    } else {
                        if (u > 0) {
                            t.top -= u
                        } else {
                            t.top = l(t.top - v, t.top)
                        }
                    }
                }
            }
        },
        flip: {
            left: function(w, v) {
                var u = v.within,
                    A = u.offset.left + u.scrollLeft,
                    D = u.width,
                    s = u.isWindow ? u.scrollLeft : u.offset.left,
                    x = w.left - v.collisionPosition.marginLeft,
                    B = x - s,
                    r = x + v.collisionWidth - D - s,
                    z = v.my[0] === "left" ? -v.elemWidth : v.my[0] === "right" ? v.elemWidth : 0,
                    C = v.at[0] === "left" ? v.targetWidth : v.at[0] === "right" ? -v.targetWidth : 0,
                    t = -2 * v.offset[0],
                    q, y;
                if (B < 0) {
                    q = w.left + z + C + t + v.collisionWidth - D - A;
                    if (q < 0 || q < p(B)) {
                        w.left += z + C + t
                    }
                } else {
                    if (r > 0) {
                        y = w.left - v.collisionPosition.marginLeft + z + C + t - s;
                        if (y > 0 || p(y) < r) {
                            w.left += z + C + t
                        }
                    }
                }
            },
            top: function(v, u) {
                var t = u.within,
                    C = t.offset.top + t.scrollTop,
                    D = t.height,
                    q = t.isWindow ? t.scrollTop : t.offset.top,
                    x = v.top - u.collisionPosition.marginTop,
                    z = x - q,
                    w = x + u.collisionHeight - D - q,
                    A = u.my[1] === "top",
                    y = A ? -u.elemHeight : u.my[1] === "bottom" ? u.elemHeight : 0,
                    E = u.at[1] === "top" ? u.targetHeight : u.at[1] === "bottom" ? -u.targetHeight : 0,
                    s = -2 * u.offset[1],
                    B, r;
                if (z < 0) {
                    r = v.top + y + E + s + u.collisionHeight - D - C;
                    if ((v.top + y + E + s) > z && (r < 0 || r < p(z))) {
                        v.top += y + E + s
                    }
                } else {
                    if (w > 0) {
                        B = v.top - u.collisionPosition.marginTop + y + E + s - q;
                        if ((v.top + y + E + s) > w && (B > 0 || p(B) < w)) {
                            v.top += y + E + s
                        }
                    }
                }
            }
        },
        flipfit: {
            left: function() {
                f.ui.position.flip.left.apply(this, arguments);
                f.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                f.ui.position.flip.top.apply(this, arguments);
                f.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    (function() {
        var u, w, r, t, s, q = document.getElementsByTagName("body")[0],
            v = document.createElement("div");
        u = document.createElement(q ? "div" : "body");
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (q) {
            f.extend(r, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            })
        }
        for (s in r) {
            u.style[s] = r[s]
        }
        u.appendChild(v);
        w = q || document.documentElement;
        w.insertBefore(u, w.firstChild);
        v.style.cssText = "position: absolute; left: 10.7432222px;";
        t = f(v).offset().left;
        f.support.offsetFractions = t > 10 && t < 11;
        u.innerHTML = "";
        w.removeChild(u)
    })()
}(jQuery));
(function(a, b) {
    a.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(c) {
            if (c === b) {
                return this.options.value
            }
            this.options.value = this._constrainedValue(c);
            this._refreshValue()
        },
        _constrainedValue: function(c) {
            if (c === b) {
                c = this.options.value
            }
            this.indeterminate = c === false;
            if (typeof c !== "number") {
                c = 0
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, c))
        },
        _setOptions: function(c) {
            var d = c.value;
            delete c.value;
            this._super(c);
            this.options.value = this._constrainedValue(d);
            this._refreshValue()
        },
        _setOption: function(c, d) {
            if (c === "max") {
                d = Math.max(this.min, d)
            }
            this._super(c, d)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var d = this.options.value,
                c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": d
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null
                }
            }
            if (this.oldValue !== d) {
                this.oldValue = d;
                this._trigger("change")
            }
            if (d === this.options.max) {
                this._trigger("complete")
            }
        }
    })
})(jQuery);
(function(b, c) {
    var a = 5;
    b.widget("ui.slider", b.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = false
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var h, d, f = this.options,
                k = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                j = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                g = [];
            d = (f.values && f.values.length) || 1;
            if (k.length > d) {
                k.slice(d).remove();
                k = k.slice(0, d)
            }
            for (h = k.length; h < d; h++) {
                g.push(j)
            }
            this.handles = k.add(b(g.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(l) {
                b(this).data("ui-slider-handle-index", l)
            })
        },
        _createRange: function() {
            var d = this.options,
                f = "";
            if (d.range) {
                if (d.range === true) {
                    if (!d.values) {
                        d.values = [this._valueMin(), this._valueMin()]
                    } else {
                        if (d.values.length && d.values.length !== 2) {
                            d.values = [d.values[0], d.values[0]]
                        } else {
                            if (b.isArray(d.values)) {
                                d.values = d.values.slice(0)
                            }
                        }
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = b("<div></div>").appendTo(this.element);
                    f = "ui-slider-range ui-widget-header ui-corner-all"
                } else {
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    })
                }
                this.range.addClass(f + ((d.range === "min" || d.range === "max") ? " ui-slider-range-" + d.range : ""))
            } else {
                this.range = b([])
            }
        },
        _setupEvents: function() {
            var d = this.handles.add(this.range).filter("a");
            this._off(d);
            this._on(d, this._handleEvents);
            this._hoverable(d);
            this._focusable(d)
        },
        _destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(g) {
            var k, n, f, i, m, p, j, d, l = this,
                h = this.options;
            if (h.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            k = {
                x: g.pageX,
                y: g.pageY
            };
            n = this._normValueFromMouse(k);
            f = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(o) {
                var q = Math.abs(n - l.values(o));
                if ((f > q) || (f === q && (o === l._lastChangedValue || l.values(o) === h.min))) {
                    f = q;
                    i = b(this);
                    m = o
                }
            });
            p = this._start(g, m);
            if (p === false) {
                return false
            }
            this._mouseSliding = true;
            this._handleIndex = m;
            i.addClass("ui-state-active").focus();
            j = i.offset();
            d = !b(g.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = d ? {
                left: 0,
                top: 0
            } : {
                left: g.pageX - j.left - (i.width() / 2),
                top: g.pageY - j.top - (i.height() / 2) - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(g, m, n)
            }
            this._animateOff = true;
            return true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(g) {
            var d = {
                    x: g.pageX,
                    y: g.pageY
                },
                f = this._normValueFromMouse(d);
            this._slide(g, this._handleIndex, f);
            return false
        },
        _mouseStop: function(d) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(d, this._handleIndex);
            this._change(d, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },
        _detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(f) {
            var d, i, h, g, j;
            if (this.orientation === "horizontal") {
                d = this.elementSize.width;
                i = f.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                d = this.elementSize.height;
                i = f.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            h = (i / d);
            if (h > 1) {
                h = 1
            }
            if (h < 0) {
                h = 0
            }
            if (this.orientation === "vertical") {
                h = 1 - h
            }
            g = this._valueMax() - this._valueMin();
            j = this._valueMin() + h * g;
            return this._trimAlignValue(j)
        },
        _start: function(g, f) {
            var d = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                d.value = this.values(f);
                d.values = this.values()
            }
            return this._trigger("start", g, d)
        },
        _slide: function(i, h, g) {
            var d, f, j;
            if (this.options.values && this.options.values.length) {
                d = this.values(h ? 0 : 1);
                if ((this.options.values.length === 2 && this.options.range === true) && ((h === 0 && g > d) || (h === 1 && g < d))) {
                    g = d
                }
                if (g !== this.values(h)) {
                    f = this.values();
                    f[h] = g;
                    j = this._trigger("slide", i, {
                        handle: this.handles[h],
                        value: g,
                        values: f
                    });
                    d = this.values(h ? 0 : 1);
                    if (j !== false) {
                        this.values(h, g, true)
                    }
                }
            } else {
                if (g !== this.value()) {
                    j = this._trigger("slide", i, {
                        handle: this.handles[h],
                        value: g
                    });
                    if (j !== false) {
                        this.value(g)
                    }
                }
            }
        },
        _stop: function(g, f) {
            var d = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                d.value = this.values(f);
                d.values = this.values()
            }
            this._trigger("stop", g, d)
        },
        _change: function(g, f) {
            if (!this._keySliding && !this._mouseSliding) {
                var d = {
                    handle: this.handles[f],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    d.value = this.values(f);
                    d.values = this.values()
                }
                this._lastChangedValue = f;
                this._trigger("change", g, d)
            }
        },
        value: function(d) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(d);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(f, j) {
            var h, d, g;
            if (arguments.length > 1) {
                this.options.values[f] = this._trimAlignValue(j);
                this._refreshValue();
                this._change(null, f);
                return
            }
            if (arguments.length) {
                if (b.isArray(arguments[0])) {
                    h = this.options.values;
                    d = arguments[0];
                    for (g = 0; g < h.length; g += 1) {
                        h[g] = this._trimAlignValue(d[g]);
                        this._change(null, g)
                    }
                    this._refreshValue()
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(f)
                    } else {
                        return this.value()
                    }
                }
            } else {
                return this._values()
            }
        },
        _setOption: function(f, g) {
            var d, h = 0;
            if (f === "range" && this.options.range === true) {
                if (g === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null
                } else {
                    if (g === "max") {
                        this.options.value = this._values(this.options.values.length - 1);
                        this.options.values = null
                    }
                }
            }
            if (b.isArray(this.options.values)) {
                h = this.options.values.length
            }
            b.Widget.prototype._setOption.apply(this, arguments);
            switch (f) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (d = 0; d < h; d += 1) {
                        this._change(null, d)
                    }
                    this._animateOff = false;
                    break;
                case "min":
                case "max":
                    this._animateOff = true;
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break
            }
        },
        _value: function() {
            var d = this.options.value;
            d = this._trimAlignValue(d);
            return d
        },
        _values: function(d) {
            var h, g, f;
            if (arguments.length) {
                h = this.options.values[d];
                h = this._trimAlignValue(h);
                return h
            } else {
                if (this.options.values && this.options.values.length) {
                    g = this.options.values.slice();
                    for (f = 0; f < g.length; f += 1) {
                        g[f] = this._trimAlignValue(g[f])
                    }
                    return g
                } else {
                    return []
                }
            }
        },
        _trimAlignValue: function(h) {
            if (h <= this._valueMin()) {
                return this._valueMin()
            }
            if (h >= this._valueMax()) {
                return this._valueMax()
            }
            var d = (this.options.step > 0) ? this.options.step : 1,
                g = (h - this._valueMin()) % d,
                f = h - g;
            if (Math.abs(g) * 2 >= d) {
                f += (g > 0) ? d : (-d)
            }
            return parseFloat(f.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var j, i, m, k, n, h = this.options.range,
                g = this.options,
                l = this,
                f = (!this._animateOff) ? g.animate : false,
                d = {};
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(o) {
                    i = (l.values(o) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100;
                    d[l.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
                    b(this).stop(1, 1)[f ? "animate" : "css"](d, g.animate);
                    if (l.options.range === true) {
                        if (l.orientation === "horizontal") {
                            if (o === 0) {
                                l.range.stop(1, 1)[f ? "animate" : "css"]({
                                    left: i + "%"
                                }, g.animate)
                            }
                            if (o === 1) {
                                l.range[f ? "animate" : "css"]({
                                    width: (i - j) + "%"
                                }, {
                                    queue: false,
                                    duration: g.animate
                                })
                            }
                        } else {
                            if (o === 0) {
                                l.range.stop(1, 1)[f ? "animate" : "css"]({
                                    bottom: (i) + "%"
                                }, g.animate)
                            }
                            if (o === 1) {
                                l.range[f ? "animate" : "css"]({
                                    height: (i - j) + "%"
                                }, {
                                    queue: false,
                                    duration: g.animate
                                })
                            }
                        }
                    }
                    j = i
                })
            } else {
                m = this.value();
                k = this._valueMin();
                n = this._valueMax();
                i = (n !== k) ? (m - k) / (n - k) * 100 : 0;
                d[this.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
                this.handle.stop(1, 1)[f ? "animate" : "css"](d, g.animate);
                if (h === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        width: i + "%"
                    }, g.animate)
                }
                if (h === "max" && this.orientation === "horizontal") {
                    this.range[f ? "animate" : "css"]({
                        width: (100 - i) + "%"
                    }, {
                        queue: false,
                        duration: g.animate
                    })
                }
                if (h === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        height: i + "%"
                    }, g.animate)
                }
                if (h === "max" && this.orientation === "vertical") {
                    this.range[f ? "animate" : "css"]({
                        height: (100 - i) + "%"
                    }, {
                        queue: false,
                        duration: g.animate
                    })
                }
            }
        },
        _handleEvents: {
            keydown: function(i) {
                var j, g, f, h, d = b(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        i.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            b(i.target).addClass("ui-state-active");
                            j = this._start(i, d);
                            if (j === false) {
                                return
                            }
                        }
                        break
                }
                h = this.options.step;
                if (this.options.values && this.options.values.length) {
                    g = f = this.values(d)
                } else {
                    g = f = this.value()
                }
                switch (i.keyCode) {
                    case b.ui.keyCode.HOME:
                        f = this._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        f = this._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        f = this._trimAlignValue(g + ((this._valueMax() - this._valueMin()) / a));
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        f = this._trimAlignValue(g - ((this._valueMax() - this._valueMin()) / a));
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (g === this._valueMax()) {
                            return
                        }
                        f = this._trimAlignValue(g + h);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (g === this._valueMin()) {
                            return
                        }
                        f = this._trimAlignValue(g - h);
                        break
                }
                this._slide(i, d, f)
            },
            click: function(d) {
                d.preventDefault()
            },
            keyup: function(f) {
                var d = b(f.target).data("ui-slider-handle-index");
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(f, d);
                    this._change(f, d);
                    b(f.target).removeClass("ui-state-active")
                }
            }
        }
    })
}(jQuery));
(function(b) {
    function a(c) {
        return function() {
            var d = this.element.val();
            c.apply(this, arguments);
            this._refresh();
            if (d !== this.element.val()) {
                this._trigger("change")
            }
        }
    }
    b.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this._value(this.element.val(), true);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var c = {},
                d = this.element;
            b.each(["min", "max", "step"], function(f, g) {
                var h = d.attr(g);
                if (h !== undefined && h.length) {
                    c[g] = h
                }
            });
            return c
        },
        _events: {
            keydown: function(c) {
                if (this._start(c) && this._keydown(c)) {
                    c.preventDefault()
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(c) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", c)
                }
            },
            mousewheel: function(c, d) {
                if (!d) {
                    return
                }
                if (!this.spinning && !this._start(c)) {
                    return false
                }
                this._spin((d > 0 ? 1 : -1) * this.options.step, c);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(c)
                    }
                }, 100);
                c.preventDefault()
            },
            "mousedown .ui-spinner-button": function(d) {
                var c;
                c = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

                function f() {
                    var g = this.element[0] === this.document[0].activeElement;
                    if (!g) {
                        this.element.focus();
                        this.previous = c;
                        this._delay(function() {
                            this.previous = c
                        })
                    }
                }
                d.preventDefault();
                f.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    f.call(this)
                });
                if (this._start(d) === false) {
                    return
                }
                this._repeat(null, b(d.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, d)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(c) {
                if (!b(c.currentTarget).hasClass("ui-state-active")) {
                    return
                }
                if (this._start(c) === false) {
                    return false
                }
                this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            if (this.buttons.height() > Math.ceil(c.height() * 0.5) && c.height() > 0) {
                c.height(c.height())
            }
            if (this.options.disabled) {
                this.disable()
            }
        },
        _keydown: function(d) {
            var c = this.options,
                f = b.ui.keyCode;
            switch (d.keyCode) {
                case f.UP:
                    this._repeat(null, 1, d);
                    return true;
                case f.DOWN:
                    this._repeat(null, -1, d);
                    return true;
                case f.PAGE_UP:
                    this._repeat(null, c.page, d);
                    return true;
                case f.PAGE_DOWN:
                    this._repeat(null, -c.page, d);
                    return true
            }
            return false
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(c) {
            if (!this.spinning && this._trigger("start", c) === false) {
                return false
            }
            if (!this.counter) {
                this.counter = 1
            }
            this.spinning = true;
            return true
        },
        _repeat: function(d, c, f) {
            d = d || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, c, f)
            }, d);
            this._spin(c * this.options.step, f)
        },
        _spin: function(d, c) {
            var f = this.value() || 0;
            if (!this.counter) {
                this.counter = 1
            }
            f = this._adjustValue(f + d * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", c, {
                    value: f
                }) !== false) {
                this._value(f);
                this.counter++
            }
        },
        _increment: function(c) {
            var d = this.options.incremental;
            if (d) {
                return b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1)
            }
            return 1
        },
        _precision: function() {
            var c = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                c = Math.max(c, this._precisionOf(this.options.min))
            }
            return c
        },
        _precisionOf: function(d) {
            var f = d.toString(),
                c = f.indexOf(".");
            return c === -1 ? 0 : f.length - c - 1
        },
        _adjustValue: function(f) {
            var d, g, c = this.options;
            d = c.min !== null ? c.min : 0;
            g = f - d;
            g = Math.round(g / c.step) * c.step;
            f = d + g;
            f = parseFloat(f.toFixed(this._precision()));
            if (c.max !== null && f > c.max) {
                return c.max
            }
            if (c.min !== null && f < c.min) {
                return c.min
            }
            return f
        },
        _stop: function(c) {
            if (!this.spinning) {
                return
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", c)
        },
        _setOption: function(c, d) {
            if (c === "culture" || c === "numberFormat") {
                var f = this._parse(this.element.val());
                this.options[c] = d;
                this.element.val(this._format(f));
                return
            }
            if (c === "max" || c === "min" || c === "step") {
                if (typeof d === "string") {
                    d = this._parse(d)
                }
            }
            if (c === "icons") {
                this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);
                this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)
            }
            this._super(c, d);
            if (c === "disabled") {
                if (d) {
                    this.element.prop("disabled", true);
                    this.buttons.button("disable")
                } else {
                    this.element.prop("disabled", false);
                    this.buttons.button("enable")
                }
            }
        },
        _setOptions: a(function(c) {
            this._super(c);
            this._value(this.element.val())
        }),
        _parse: function(c) {
            if (typeof c === "string" && c !== "") {
                c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c
            }
            return c === "" || isNaN(c) ? null : c
        },
        _format: function(c) {
            if (c === "") {
                return ""
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(f, c) {
            var d;
            if (f !== "") {
                d = this._parse(f);
                if (d !== null) {
                    if (!c) {
                        d = this._adjustValue(d)
                    }
                    f = this._format(d)
                }
            }
            this.element.val(f);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: a(function(c) {
            this._stepUp(c)
        }),
        _stepUp: function(c) {
            if (this._start()) {
                this._spin((c || 1) * this.options.step);
                this._stop()
            }
        },
        stepDown: a(function(c) {
            this._stepDown(c)
        }),
        _stepDown: function(c) {
            if (this._start()) {
                this._spin((c || 1) * -this.options.step);
                this._stop()
            }
        },
        pageUp: a(function(c) {
            this._stepUp((c || 1) * this.options.page)
        }),
        pageDown: a(function(c) {
            this._stepDown((c || 1) * this.options.page)
        }),
        value: function(c) {
            if (!arguments.length) {
                return this._parse(this.element.val())
            }
            a(this._value).call(this, c)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery));
(function(c, f) {
    var a = 0,
        g = /#.*$/;

    function d() {
        return ++a
    }

    function b(h) {
        return h.hash.length > 1 && decodeURIComponent(h.href.replace(g, "")) === decodeURIComponent(location.href.replace(g, ""))
    }
    c.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var i = this,
                h = this.options;
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", h.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(j) {
                if (c(this).is(".ui-state-disabled")) {
                    j.preventDefault()
                }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if (c(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this._processTabs();
            h.active = this._initialActive();
            if (c.isArray(h.disabled)) {
                h.disabled = c.unique(h.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function(j) {
                    return i.tabs.index(j)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(h.active)
            } else {
                this.active = c()
            }
            this._refresh();
            if (this.active.length) {
                this.load(h.active)
            }
        },
        _initialActive: function() {
            var i = this.options.active,
                h = this.options.collapsible,
                j = location.hash.substring(1);
            if (i === null) {
                if (j) {
                    this.tabs.each(function(k, l) {
                        if (c(l).attr("aria-controls") === j) {
                            i = k;
                            return false
                        }
                    })
                }
                if (i === null) {
                    i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (i === null || i === -1) {
                    i = this.tabs.length ? 0 : false
                }
            }
            if (i !== false) {
                i = this.tabs.index(this.tabs.eq(i));
                if (i === -1) {
                    i = h ? false : 0
                }
            }
            if (!h && i === false && this.anchors.length) {
                i = 0
            }
            return i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? c() : this._getPanelForTab(this.active)
            }
        },
        _tabKeydown: function(j) {
            var i = c(this.document[0].activeElement).closest("li"),
                h = this.tabs.index(i),
                k = true;
            if (this._handlePageNav(j)) {
                return
            }
            switch (j.keyCode) {
                case c.ui.keyCode.RIGHT:
                case c.ui.keyCode.DOWN:
                    h++;
                    break;
                case c.ui.keyCode.UP:
                case c.ui.keyCode.LEFT:
                    k = false;
                    h--;
                    break;
                case c.ui.keyCode.END:
                    h = this.anchors.length - 1;
                    break;
                case c.ui.keyCode.HOME:
                    h = 0;
                    break;
                case c.ui.keyCode.SPACE:
                    j.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(h);
                    return;
                case c.ui.keyCode.ENTER:
                    j.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(h === this.options.active ? false : h);
                    return;
                default:
                    return
            }
            j.preventDefault();
            clearTimeout(this.activating);
            h = this._focusNextTab(h, k);
            if (!j.ctrlKey) {
                i.attr("aria-selected", "false");
                this.tabs.eq(h).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", h)
                }, this.delay)
            }
        },
        _panelKeydown: function(h) {
            if (this._handlePageNav(h)) {
                return
            }
            if (h.ctrlKey && h.keyCode === c.ui.keyCode.UP) {
                h.preventDefault();
                this.active.focus()
            }
        },
        _handlePageNav: function(h) {
            if (h.altKey && h.keyCode === c.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (h.altKey && h.keyCode === c.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },
        _findNextTab: function(i, j) {
            var h = this.tabs.length - 1;

            function k() {
                if (i > h) {
                    i = 0
                }
                if (i < 0) {
                    i = h
                }
                return i
            }
            while (c.inArray(k(), this.options.disabled) !== -1) {
                i = j ? i + 1 : i - 1
            }
            return i
        },
        _focusNextTab: function(h, i) {
            h = this._findNextTab(h, i);
            this.tabs.eq(h).focus();
            return h
        },
        _setOption: function(h, i) {
            if (h === "active") {
                this._activate(i);
                return
            }
            if (h === "disabled") {
                this._setupDisabled(i);
                return
            }
            this._super(h, i);
            if (h === "collapsible") {
                this.element.toggleClass("ui-tabs-collapsible", i);
                if (!i && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (h === "event") {
                this._setupEvents(i)
            }
            if (h === "heightStyle") {
                this._setupHeightStyle(i)
            }
        },
        _tabId: function(h) {
            return h.attr("aria-controls") || "ui-tabs-" + d()
        },
        _sanitizeSelector: function(h) {
            return h ? h.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var i = this.options,
                h = this.tablist.children(":has(a[href])");
            i.disabled = c.map(h.filter(".ui-state-disabled"), function(j) {
                return h.index(j)
            });
            this._processTabs();
            if (i.active === false || !this.anchors.length) {
                i.active = false;
                this.active = c()
            } else {
                if (this.active.length && !c.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === i.disabled.length) {
                        i.active = false;
                        this.active = c()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, i.active - 1), false))
                    }
                } else {
                    i.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                });
                this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
        },
        _processTabs: function() {
            var h = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return c("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = c();
            this.anchors.each(function(o, m) {
                var j, k, n, l = c(m).uniqueId().attr("id"),
                    p = c(m).closest("li"),
                    q = p.attr("aria-controls");
                if (b(m)) {
                    j = m.hash;
                    k = h.element.find(h._sanitizeSelector(j))
                } else {
                    n = h._tabId(p);
                    j = "#" + n;
                    k = h.element.find(j);
                    if (!k.length) {
                        k = h._createPanel(n);
                        k.insertAfter(h.panels[o - 1] || h.tablist)
                    }
                    k.attr("aria-live", "polite")
                }
                if (k.length) {
                    h.panels = h.panels.add(k)
                }
                if (q) {
                    p.data("ui-tabs-aria-controls", q)
                }
                p.attr({
                    "aria-controls": j.substring(1),
                    "aria-labelledby": l
                });
                k.attr("aria-labelledby", l)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(h) {
            return c("<div>").attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
        },
        _setupDisabled: function(k) {
            if (c.isArray(k)) {
                if (!k.length) {
                    k = false
                } else {
                    if (k.length === this.anchors.length) {
                        k = true
                    }
                }
            }
            for (var j = 0, h;
                (h = this.tabs[j]); j++) {
                if (k === true || c.inArray(j, k) !== -1) {
                    c(h).addClass("ui-state-disabled").attr("aria-disabled", "true")
                } else {
                    c(h).removeClass("ui-state-disabled").removeAttr("aria-disabled")
                }
            }
            this.options.disabled = k
        },
        _setupEvents: function(i) {
            var h = {
                click: function(j) {
                    j.preventDefault()
                }
            };
            if (i) {
                c.each(i.split(" "), function(k, j) {
                    h[j] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, h);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(h) {
            var j, i = this.element.parent();
            if (h === "fill") {
                j = i.height();
                j -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var l = c(this),
                        k = l.css("position");
                    if (k === "absolute" || k === "fixed") {
                        return
                    }
                    j -= l.outerHeight(true)
                });
                this.element.children().not(this.panels).each(function() {
                    j -= c(this).outerHeight(true)
                });
                this.panels.each(function() {
                    c(this).height(Math.max(0, j - c(this).innerHeight() + c(this).height()))
                }).css("overflow", "auto")
            } else {
                if (h === "auto") {
                    j = 0;
                    this.panels.each(function() {
                        j = Math.max(j, c(this).height("").height())
                    }).height(j)
                }
            }
        },
        _eventHandler: function(h) {
            var q = this.options,
                l = this.active,
                m = c(h.currentTarget),
                k = m.closest("li"),
                o = k[0] === l[0],
                i = o && q.collapsible,
                j = i ? c() : this._getPanelForTab(k),
                n = !l.length ? c() : this._getPanelForTab(l),
                p = {
                    oldTab: l,
                    oldPanel: n,
                    newTab: i ? c() : k,
                    newPanel: j
                };
            h.preventDefault();
            if (k.hasClass("ui-state-disabled") || k.hasClass("ui-tabs-loading") || this.running || (o && !q.collapsible) || (this._trigger("beforeActivate", h, p) === false)) {
                return
            }
            q.active = i ? false : this.tabs.index(k);
            this.active = o ? c() : k;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!n.length && !j.length) {
                c.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (j.length) {
                this.load(this.tabs.index(k), h)
            }
            this._toggle(h, p)
        },
        _toggle: function(n, m) {
            var l = this,
                h = m.newPanel,
                k = m.oldPanel;
            this.running = true;

            function j() {
                l.running = false;
                l._trigger("activate", n, m)
            }

            function i() {
                m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                if (h.length && l.options.show) {
                    l._show(h, l.options.show, j)
                } else {
                    h.show();
                    j()
                }
            }
            if (k.length && this.options.hide) {
                this._hide(k, this.options.hide, function() {
                    m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    i()
                })
            } else {
                m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                k.hide();
                i()
            }
            k.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            m.oldTab.attr("aria-selected", "false");
            if (h.length && k.length) {
                m.oldTab.attr("tabIndex", -1)
            } else {
                if (h.length) {
                    this.tabs.filter(function() {
                        return c(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            h.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            m.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(i) {
            var h, j = this._findActive(i);
            if (j[0] === this.active[0]) {
                return
            }
            if (!j.length) {
                j = this.active
            }
            h = j.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: h,
                currentTarget: h,
                preventDefault: c.noop
            })
        },
        _findActive: function(h) {
            return h === false ? c() : this.tabs.eq(h)
        },
        _getIndex: function(h) {
            if (typeof h === "string") {
                h = this.anchors.index(this.anchors.filter("[href$='" + h + "']"))
            }
            return h
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if (c.data(this, "ui-tabs-destroy")) {
                    c(this).remove()
                } else {
                    c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
            });
            this.tabs.each(function() {
                var h = c(this),
                    i = h.data("ui-tabs-aria-controls");
                if (i) {
                    h.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
                } else {
                    h.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },
        enable: function(h) {
            var i = this.options.disabled;
            if (i === false) {
                return
            }
            if (h === f) {
                i = false
            } else {
                h = this._getIndex(h);
                if (c.isArray(i)) {
                    i = c.map(i, function(j) {
                        return j !== h ? j : null
                    })
                } else {
                    i = c.map(this.tabs, function(j, k) {
                        return k !== h ? k : null
                    })
                }
            }
            this._setupDisabled(i)
        },
        disable: function(h) {
            var i = this.options.disabled;
            if (i === true) {
                return
            }
            if (h === f) {
                i = true
            } else {
                h = this._getIndex(h);
                if (c.inArray(h, i) !== -1) {
                    return
                }
                if (c.isArray(i)) {
                    i = c.merge([h], i).sort()
                } else {
                    i = [h]
                }
            }
            this._setupDisabled(i)
        },
        load: function(j, n) {
            j = this._getIndex(j);
            var m = this,
                k = this.tabs.eq(j),
                i = k.find(".ui-tabs-anchor"),
                h = this._getPanelForTab(k),
                l = {
                    tab: k,
                    panel: h
                };
            if (b(i[0])) {
                return
            }
            this.xhr = c.ajax(this._ajaxSettings(i, n, l));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                k.addClass("ui-tabs-loading");
                h.attr("aria-busy", "true");
                this.xhr.success(function(o) {
                    setTimeout(function() {
                        h.html(o);
                        m._trigger("load", n, l)
                    }, 1)
                }).complete(function(p, o) {
                    setTimeout(function() {
                        if (o === "abort") {
                            m.panels.stop(false, true)
                        }
                        k.removeClass("ui-tabs-loading");
                        h.removeAttr("aria-busy");
                        if (p === m.xhr) {
                            delete m.xhr
                        }
                    }, 1)
                })
            }
        },
        _ajaxSettings: function(h, k, j) {
            var i = this;
            return {
                url: h.attr("href"),
                beforeSend: function(m, l) {
                    return i._trigger("beforeLoad", k, c.extend({
                        jqXHR: m,
                        ajaxSettings: l
                    }, j))
                }
            }
        },
        _getPanelForTab: function(h) {
            var i = c(h).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);
(function(d) {
    var b = 0;

    function c(g, h) {
        var f = (g.attr("aria-describedby") || "").split(/\s+/);
        f.push(h);
        g.data("ui-tooltip-id", h).attr("aria-describedby", d.trim(f.join(" ")))
    }

    function a(h) {
        var i = h.data("ui-tooltip-id"),
            g = (h.attr("aria-describedby") || "").split(/\s+/),
            f = d.inArray(i, g);
        if (f !== -1) {
            g.splice(f, 1)
        }
        h.removeData("ui-tooltip-id");
        g = d.trim(g.join(" "));
        if (g) {
            h.attr("aria-describedby", g)
        } else {
            h.removeAttr("aria-describedby")
        }
    }
    d.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var f = d(this).attr("title") || "";
                return d("<a>").text(f).html()
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            if (this.options.disabled) {
                this._disable()
            }
        },
        _setOption: function(f, h) {
            var g = this;
            if (f === "disabled") {
                this[h ? "_disable" : "_enable"]();
                this.options[f] = h;
                return
            }
            this._super(f, h);
            if (f === "content") {
                d.each(this.tooltips, function(j, i) {
                    g._updateContent(i)
                })
            }
        },
        _disable: function() {
            var f = this;
            d.each(this.tooltips, function(i, g) {
                var h = d.Event("blur");
                h.target = h.currentTarget = g[0];
                f.close(h, true)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var g = d(this);
                if (g.is("[title]")) {
                    g.data("ui-tooltip-title", g.attr("title")).attr("title", "")
                }
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var f = d(this);
                if (f.data("ui-tooltip-title")) {
                    f.attr("title", f.data("ui-tooltip-title"))
                }
            })
        },
        open: function(g) {
            var f = this,
                h = d(g ? g.target : this.element).closest(this.options.items);
            if (!h.length || h.data("ui-tooltip-id")) {
                return
            }
            if (h.attr("title")) {
                h.data("ui-tooltip-title", h.attr("title"))
            }
            h.data("ui-tooltip-open", true);
            if (g && g.type === "mouseover") {
                h.parents().each(function() {
                    var j = d(this),
                        i;
                    if (j.data("ui-tooltip-open")) {
                        i = d.Event("blur");
                        i.target = i.currentTarget = this;
                        f.close(i, true)
                    }
                    if (j.attr("title")) {
                        j.uniqueId();
                        f.parents[this.id] = {
                            element: this,
                            title: j.attr("title")
                        };
                        j.attr("title", "")
                    }
                })
            }
            this._updateContent(h, g)
        },
        _updateContent: function(k, j) {
            var i, f = this.options.content,
                h = this,
                g = j ? j.type : null;
            if (typeof f === "string") {
                return this._open(j, k, f)
            }
            i = f.call(k[0], function(l) {
                if (!k.data("ui-tooltip-open")) {
                    return
                }
                h._delay(function() {
                    if (j) {
                        j.type = g
                    }
                    this._open(j, k, l)
                })
            });
            if (i) {
                this._open(j, k, i)
            }
        },
        _open: function(j, l, i) {
            var k, h, g, m = d.extend({}, this.options.position);
            if (!i) {
                return
            }
            k = this._find(l);
            if (k.length) {
                k.find(".ui-tooltip-content").html(i);
                return
            }
            if (l.is("[title]")) {
                if (j && j.type === "mouseover") {
                    l.attr("title", "")
                } else {
                    l.removeAttr("title")
                }
            }
            k = this._tooltip(l);
            c(l, k.attr("id"));
            k.find(".ui-tooltip-content").html(i);

            function f(n) {
                m.of = n;
                if (k.is(":hidden")) {
                    return
                }
                k.position(m)
            }
            if (this.options.track && j && /^mouse/.test(j.type)) {
                this._on(this.document, {
                    mousemove: f
                });
                f(j)
            } else {
                k.position(d.extend({
                    of: l
                }, this.options.position))
            }
            k.hide();
            this._show(k, this.options.show);
            if (this.options.show && this.options.show.delay) {
                g = this.delayedShow = setInterval(function() {
                    if (k.is(":visible")) {
                        f(m.of);
                        clearInterval(g)
                    }
                }, d.fx.interval)
            }
            this._trigger("open", j, {
                tooltip: k
            });
            h = {
                keyup: function(n) {
                    if (n.keyCode === d.ui.keyCode.ESCAPE) {
                        var o = d.Event(n);
                        o.currentTarget = l[0];
                        this.close(o, true)
                    }
                },
                remove: function() {
                    this._removeTooltip(k)
                }
            };
            if (!j || j.type === "mouseover") {
                h.mouseleave = "close"
            }
            if (!j || j.type === "focusin") {
                h.focusout = "close"
            }
            this._on(true, l, h)
        },
        close: function(g) {
            var f = this,
                i = d(g ? g.currentTarget : this.element),
                h = this._find(i);
            if (this.closing) {
                return
            }
            clearInterval(this.delayedShow);
            if (i.data("ui-tooltip-title")) {
                i.attr("title", i.data("ui-tooltip-title"))
            }
            a(i);
            h.stop(true);
            this._hide(h, this.options.hide, function() {
                f._removeTooltip(d(this))
            });
            i.removeData("ui-tooltip-open");
            this._off(i, "mouseleave focusout keyup");
            if (i[0] !== this.element[0]) {
                this._off(i, "remove")
            }
            this._off(this.document, "mousemove");
            if (g && g.type === "mouseleave") {
                d.each(this.parents, function(k, j) {
                    d(j.element).attr("title", j.title);
                    delete f.parents[k]
                })
            }
            this.closing = true;
            this._trigger("close", g, {
                tooltip: h
            });
            this.closing = false
        },
        _tooltip: function(f) {
            var h = "ui-tooltip-" + b++,
                g = d("<div>").attr({
                    id: h,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            d("<div>").addClass("ui-tooltip-content").appendTo(g);
            g.appendTo(this.document[0].body);
            this.tooltips[h] = f;
            return g
        },
        _find: function(f) {
            var g = f.data("ui-tooltip-id");
            return g ? d("#" + g) : d()
        },
        _removeTooltip: function(f) {
            f.remove();
            delete this.tooltips[f.attr("id")]
        },
        _destroy: function() {
            var f = this;
            d.each(this.tooltips, function(i, g) {
                var h = d.Event("blur");
                h.target = h.currentTarget = g[0];
                f.close(h, true);
                d("#" + i).remove();
                if (g.data("ui-tooltip-title")) {
                    g.attr("title", g.data("ui-tooltip-title"));
                    g.removeData("ui-tooltip-title")
                }
            })
        }
    })
}(jQuery));
! function(b) {
    b(function() {
        b.support.transition = function() {
            var c = function() {
                var f = document.createElement("bootstrap"),
                    d = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    g;
                for (g in d) {
                    if (f.style[g] !== undefined) {
                        return d[g]
                    }
                }
            }();
            return c && {
                end: c
            }
        }()
    })
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.options = h, this.$element = f(a).delegate('[data-dismiss="modal"]', "click.dismiss.modal", f.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    d.prototype = {
        constructor: d,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var a = this,
                h = f.Event("show");
            this.$element.trigger(h);
            if (this.isShown || h.isDefaultPrevented()) {
                return
            }
            this.isShown = !0, this.escape(), this.backdrop(function() {
                var b = f.support.transition && a.$element.hasClass("fade");
                a.$element.parent().length || a.$element.appendTo(document.body), a.$element.show(), b && a.$element[0].offsetWidth, a.$element.addClass("in").attr("aria-hidden", !1), a.enforceFocus(), b ? a.$element.one(f.support.transition.end, function() {
                    a.$element.focus().trigger("shown")
                }) : a.$element.focus().trigger("shown")
            })
        },
        hide: function(a) {
            a && a.preventDefault();
            var h = this;
            a = f.Event("hide"), this.$element.trigger(a);
            if (!this.isShown || a.isDefaultPrevented()) {
                return
            }
            this.isShown = !1, this.escape(), f(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), f.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function() {
            var a = this;
            f(document).on("focusin.modal", function(b) {
                a.$element[0] !== b.target && !a.$element.has(b.target).length && a.$element.focus()
            })
        },
        escape: function() {
            var b = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(a) {
                a.which == 27 && b.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var a = this,
                h = setTimeout(function() {
                    a.$element.off(f.support.transition.end), a.hideModal()
                }, 500);
            this.$element.one(f.support.transition.end, function() {
                clearTimeout(h), a.hideModal()
            })
        },
        hideModal: function() {
            var b = this;
            this.$element.hide(), this.backdrop(function() {
                b.removeBackdrop(), b.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(a) {
            var j = this,
                i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var h = f.support.transition && i;
                this.$backdrop = f('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? f.proxy(this.$element[0].focus, this.$element[0]) : f.proxy(this.hide, this)), h && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                if (!a) {
                    return
                }
                h ? this.$backdrop.one(f.support.transition.end, a) : a()
            } else {
                !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(f.support.transition.end, a) : a()) : a && a()
            }
        }
    };
    var g = f.fn.modal;
    f.fn.modal = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("modal"),
                b = f.extend({}, f.fn.modal.defaults, h.data(), typeof a == "object" && a);
            c || h.data("modal", c = new d(this, b)), typeof a == "string" ? c[a]() : b.show && c.show()
        })
    }, f.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, f.fn.modal.Constructor = d, f.fn.modal.noConflict = function() {
        return f.fn.modal = g, this
    }, f(document).on("click.modal.data-api", '[data-toggle="modal"]', function(a) {
        var k = f(this),
            j = k.attr("href"),
            i = f(k.attr("data-target") || j && j.replace(/.*(?=#[^\s]+$)/, "")),
            h = i.data("modal") ? "toggle" : f.extend({
                remote: !/#/.test(j) && j
            }, i.data(), k.data());
        a.preventDefault(), i.modal(h).one("hide", function() {
            k.focus()
        })
    })
}(window.jQuery), ! function(h) {
    function k() {
        h(".dropdown-backdrop").remove(), h(g).each(function() {
            j(h(this)).removeClass("open")
        })
    }

    function j(a) {
        var m = a.attr("data-target"),
            f;
        m || (m = a.attr("href"), m = m && /#/.test(m) && m.replace(/.*(?=#[^\s]*$)/, "")), f = m && h(m);
        if (!f || !f.length) {
            f = a.parent()
        }
        return f
    }
    var g = "[data-toggle=dropdown]",
        l = function(a) {
            var d = h(a).on("click.dropdown.data-api", this.toggle);
            h("html").on("click.dropdown.data-api", function() {
                d.parent().removeClass("open")
            })
        };
    l.prototype = {
        constructor: l,
        toggle: function(a) {
            var n = h(this),
                m, d;
            if (n.is(".disabled, :disabled")) {
                return
            }
            return m = j(n), d = m.hasClass("open"), k(), d || ("ontouchstart" in document.documentElement && h('<div class="dropdown-backdrop"/>').insertBefore(h(this)).on("click", k), m.toggleClass("open")), n.focus(), !1
        },
        keydown: function(q) {
            var p, o, n, m, b, a;
            if (!/(38|40|27)/.test(q.keyCode)) {
                return
            }
            p = h(this), q.preventDefault(), q.stopPropagation();
            if (p.is(".disabled, :disabled")) {
                return
            }
            m = j(p), b = m.hasClass("open");
            if (!b || b && q.keyCode == 27) {
                return q.which == 27 && m.find(g).focus(), p.click()
            }
            o = h("[role=menu] li:not(.divider):visible a", m);
            if (!o.length) {
                return
            }
            a = o.index(o.filter(":focus")), q.keyCode == 38 && a > 0 && a--, q.keyCode == 40 && a < o.length - 1 && a++, ~a || (a = 0), o.eq(a).focus()
        }
    };
    var i = h.fn.dropdown;
    h.fn.dropdown = function(a) {
        return this.each(function() {
            var c = h(this),
                b = c.data("dropdown");
            b || c.data("dropdown", b = new l(this)), typeof a == "string" && b[a].call(c)
        })
    }, h.fn.dropdown.Constructor = l, h.fn.dropdown.noConflict = function() {
        return h.fn.dropdown = i, this
    }, h(document).on("click.dropdown.data-api", k).on("click.dropdown.data-api", ".dropdown form", function(b) {
        b.stopPropagation()
    }).on("click.dropdown.data-api", g, l.prototype.toggle).on("keydown.dropdown.data-api", g + ", [role=menu]", l.prototype.keydown)
}(window.jQuery), ! function(f) {
    function d(a, k) {
        var j = f.proxy(this.process, this),
            i = f(a).is("body") ? f(window) : f(a),
            h;
        this.options = f.extend({}, f.fn.scrollspy.defaults, k), this.$scrollElement = i.on("scroll.scroll-spy.data-api", j), this.selector = (this.options.target || (h = f(a).attr("href")) && h.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = f("body"), this.refresh(), this.process()
    }
    d.prototype = {
        constructor: d,
        refresh: function() {
            var a = this,
                h;
            this.offsets = f([]), this.targets = f([]), h = this.$body.find(this.selector).map(function() {
                var j = f(this),
                    i = j.data("target") || j.attr("href"),
                    b = /^#\w/.test(i) && f(i);
                return b && b.length && [
                    [b.position().top + (!f.isWindow(a.$scrollElement.get(0)) && a.$scrollElement.scrollTop()), i]
                ] || null
            }).sort(function(i, c) {
                return i[0] - c[0]
            }).each(function() {
                a.offsets.push(this[0]), a.targets.push(this[1])
            })
        },
        process: function() {
            var i = this.$scrollElement.scrollTop() + this.options.offset,
                h = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = h - this.$scrollElement.height(),
                m = this.offsets,
                l = this.targets,
                k = this.activeTarget,
                j;
            if (i >= n) {
                return k != (j = l.last()[0]) && this.activate(j)
            }
            for (j = m.length; j--;) {
                k != l[j] && i >= m[j] && (!m[j + 1] || i <= m[j + 1]) && this.activate(l[j])
            }
        },
        activate: function(a) {
            var i, h;
            this.activeTarget = a, f(this.selector).parent(".active").removeClass("active"), h = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]', i = f(h).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        }
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("scrollspy"),
                b = typeof a == "object" && a;
            c || h.data("scrollspy", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.scrollspy.Constructor = d, f.fn.scrollspy.defaults = {
        offset: 10
    }, f.fn.scrollspy.noConflict = function() {
        return f.fn.scrollspy = g, this
    }, f(window).on("load", function() {
        f('[data-spy="scroll"]').each(function() {
            var a = f(this);
            a.scrollspy(a.data())
        })
    })
}(window.jQuery), ! function(f) {
    var d = function(a) {
        this.element = f(a)
    };
    d.prototype = {
        constructor: d,
        show: function() {
            var a = this.element,
                l = a.closest("ul:not(.dropdown-menu)"),
                k = a.attr("data-target"),
                j, i, h;
            k || (k = a.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
            if (a.parent("li").hasClass("active")) {
                return
            }
            j = l.find(".active:last a")[0], h = f.Event("show", {
                relatedTarget: j
            }), a.trigger(h);
            if (h.isDefaultPrevented()) {
                return
            }
            i = f(k), this.activate(a.parent("li"), l), this.activate(i, i.parent(), function() {
                a.trigger({
                    type: "shown",
                    relatedTarget: j
                })
            })
        },
        activate: function(a, l, k) {
            function h() {
                j.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), a.addClass("active"), i ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active"), k && k()
            }
            var j = l.find("> .active"),
                i = k && f.support.transition && j.hasClass("fade");
            i ? j.one(f.support.transition.end, h) : h(), j.removeClass("in")
        }
    };
    var g = f.fn.tab;
    f.fn.tab = function(a) {
        return this.each(function() {
            var c = f(this),
                b = c.data("tab");
            b || c.data("tab", b = new d(this)), typeof a == "string" && b[a]()
        })
    }, f.fn.tab.Constructor = d, f.fn.tab.noConflict = function() {
        return f.fn.tab = g, this
    }, f(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(a) {
        a.preventDefault(), f(this).tab("show")
    })
}(window.jQuery), ! function(f) {
    var d = function(h, c) {
        this.init("tooltip", h, c)
    };
    d.prototype = {
        constructor: d,
        init: function(a, p, o) {
            var n, m, l, k, j;
            this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.enabled = !0, l = this.options.trigger.split(" ");
            for (j = l.length; j--;) {
                k = l[j], k == "click" ? this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this)) : k != "manual" && (n = k == "hover" ? "mouseenter" : "focus", m = k == "hover" ? "mouseleave" : "blur", this.$element.on(n + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(m + "." + this.type, this.options.selector, f.proxy(this.leave, this)))
            }
            this.options.selector ? this._options = f.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(a) {
            return a = f.extend({}, f.fn[this.type].defaults, this.$element.data(), a), a.delay && typeof a.delay == "number" && (a.delay = {
                show: a.delay,
                hide: a.delay
            }), a
        },
        enter: function(a) {
            var j = f.fn[this.type].defaults,
                i = {},
                h;
            this._options && f.each(this._options, function(k, c) {
                j[k] != c && (i[k] = c)
            }, this), h = f(a.currentTarget)[this.type](i).data(this.type);
            if (!h.options.delay || !h.options.delay.show) {
                return h.show()
            }
            clearTimeout(this.timeout), h.hoverState = "in", this.timeout = setTimeout(function() {
                h.hoverState == "in" && h.show()
            }, h.options.delay.show)
        },
        leave: function(a) {
            var h = f(a.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!h.options.delay || !h.options.delay.hide) {
                return h.hide()
            }
            h.hoverState = "out", this.timeout = setTimeout(function() {
                h.hoverState == "out" && h.hide()
            }, h.options.delay.hide)
        },
        show: function() {
            var a, n, m, l, k, j, i = f.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(i);
                if (i.isDefaultPrevented()) {
                    return
                }
                a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), k = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, a.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element), n = this.getPosition(), m = a[0].offsetWidth, l = a[0].offsetHeight;
                switch (k) {
                    case "bottom":
                        j = {
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - m / 2
                        };
                        break;
                    case "top":
                        j = {
                            top: n.top - l,
                            left: n.left + n.width / 2 - m / 2
                        };
                        break;
                    case "left":
                        j = {
                            top: n.top + n.height / 2 - l / 2,
                            left: n.left - m
                        };
                        break;
                    case "right":
                        j = {
                            top: n.top + n.height / 2 - l / 2,
                            left: n.left + n.width
                        }
                }
                this.applyPlacement(j, k), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(r, q) {
            var p = this.tip(),
                o = p[0].offsetWidth,
                n = p[0].offsetHeight,
                m, l, k, j;
            p.offset(r).addClass(q).addClass("in"), m = p[0].offsetWidth, l = p[0].offsetHeight, q == "top" && l != n && (r.top = r.top + n - l, j = !0), q == "bottom" || q == "top" ? (k = 0, r.left < 0 && (k = r.left * -2, r.left = 0, p.offset(r), m = p[0].offsetWidth, l = p[0].offsetHeight), this.replaceArrow(k - o + m, m, "left")) : this.replaceArrow(l - n, l, "top"), j && p.offset(r)
        },
        replaceArrow: function(i, h, j) {
            this.arrow().css(j, i ? 50 * (1 - i / h) + "%" : "")
        },
        setContent: function() {
            var h = this.tip(),
                c = this.getTitle();
            h.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), h.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function h() {
                var c = setTimeout(function() {
                    j.off(f.support.transition.end).detach()
                }, 500);
                j.one(f.support.transition.end, function() {
                    clearTimeout(c), j.detach()
                })
            }
            var a = this,
                j = this.tip(),
                i = f.Event("hide");
            this.$element.trigger(i);
            if (i.isDefaultPrevented()) {
                return
            }
            return j.removeClass("in"), f.support.transition && this.$tip.hasClass("fade") ? h() : j.detach(), this.$element.trigger("hidden"), this
        },
        fixTitle: function() {
            var b = this.$element;
            (b.attr("title") || typeof b.attr("data-original-title") != "string") && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var a = this.$element[0];
            return f.extend({}, typeof a.getBoundingClientRect == "function" ? a.getBoundingClientRect() : {
                width: a.offsetWidth,
                height: a.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var i, h = this.$element,
                j = this.options;
            return i = h.attr("data-original-title") || (typeof j.title == "function" ? j.title.call(h[0]) : j.title), i
        },
        tip: function() {
            return this.$tip = this.$tip || f(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(a) {
            var h = a ? f(a.currentTarget)[this.type](this._options).data(this.type) : this;
            h.tip().hasClass("in") ? h.hide() : h.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("tooltip"),
                b = typeof a == "object" && a;
            c || h.data("tooltip", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.tooltip.Constructor = d, f.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, f.fn.tooltip.noConflict = function() {
        return f.fn.tooltip = g, this
    }
}(window.jQuery), ! function(f) {
    var d = function(h, c) {
        this.init("popover", h, c)
    };
    d.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype, {
        constructor: d,
        setContent: function() {
            var i = this.tip(),
                h = this.getTitle(),
                j = this.getContent();
            i.find(".popover-title")[this.options.html ? "html" : "text"](h), i.find(".popover-content")[this.options.html ? "html" : "text"](j), i.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var i, h = this.$element,
                j = this.options;
            return i = (typeof j.content == "function" ? j.content.call(h[0]) : j.content) || h.attr("data-content"), i
        },
        tip: function() {
            return this.$tip || (this.$tip = f(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var g = f.fn.popover;
    f.fn.popover = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("popover"),
                b = typeof a == "object" && a;
            c || h.data("popover", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.popover.Constructor = d, f.fn.popover.defaults = f.extend({}, f.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), f.fn.popover.noConflict = function() {
        return f.fn.popover = g, this
    }
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.options = f.extend({}, f.fn.affix.defaults, h), this.$window = f(window).on("scroll.affix.data-api", f.proxy(this.checkPosition, this)).on("click.affix.data-api", f.proxy(function() {
            setTimeout(f.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = f(a), this.checkPosition()
    };
    d.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return
        }
        var a = f(document).height(),
            p = this.$window.scrollTop(),
            o = this.$element.offset(),
            n = this.options.offset,
            m = n.bottom,
            l = n.top,
            k = "affix affix-top affix-bottom",
            j;
        typeof n != "object" && (m = l = n), typeof l == "function" && (l = n.top()), typeof m == "function" && (m = n.bottom()), j = this.unpin != null && p + this.unpin <= o.top ? !1 : m != null && o.top + this.$element.height() >= a - m ? "bottom" : l != null && p <= l ? "top" : !1;
        if (this.affixed === j) {
            return
        }
        this.affixed = j, this.unpin = j == "bottom" ? o.top - p : null, this.$element.removeClass(k).addClass("affix" + (j ? "-" + j : ""))
    };
    var g = f.fn.affix;
    f.fn.affix = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("affix"),
                b = typeof a == "object" && a;
            c || h.data("affix", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.affix.Constructor = d, f.fn.affix.defaults = {
        offset: 0
    }, f.fn.affix.noConflict = function() {
        return f.fn.affix = g, this
    }, f(window).on("load", function() {
        f('[data-spy="affix"]').each(function() {
            var a = f(this),
                h = a.data();
            h.offset = h.offset || {}, h.offsetBottom && (h.offset.bottom = h.offsetBottom), h.offsetTop && (h.offset.top = h.offsetTop), a.affix(h)
        })
    })
}(window.jQuery), ! function(g) {
    var f = '[data-dismiss="alert"]',
        i = function(a) {
            g(a).on("click", f, this.close)
        };
    i.prototype.close = function(a) {
        function j() {
            k.trigger("closed").remove()
        }
        var m = g(this),
            l = m.attr("data-target"),
            k;
        l || (l = m.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, "")), k = g(l), a && a.preventDefault(), k.length || (k = m.hasClass("alert") ? m : m.parent()), k.trigger(a = g.Event("close"));
        if (a.isDefaultPrevented()) {
            return
        }
        k.removeClass("in"), g.support.transition && k.hasClass("fade") ? k.on(g.support.transition.end, j) : j()
    };
    var h = g.fn.alert;
    g.fn.alert = function(a) {
        return this.each(function() {
            var c = g(this),
                b = c.data("alert");
            b || c.data("alert", b = new i(this)), typeof a == "string" && b[a].call(c)
        })
    }, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function() {
        return g.fn.alert = h, this
    }, g(document).on("click.alert.data-api", f, i.prototype.close)
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.$element = f(a), this.options = f.extend({}, f.fn.button.defaults, h)
    };
    d.prototype.setState = function(i) {
        var h = "disabled",
            l = this.$element,
            k = l.data(),
            j = l.is("input") ? "val" : "html";
        i += "Text", k.resetText || l.data("resetText", l[j]()), l[j](k[i] || this.options[i]), setTimeout(function() {
            i == "loadingText" ? l.addClass(h).attr(h, h) : l.removeClass(h).removeAttr(h)
        }, 0)
    }, d.prototype.toggle = function() {
        var b = this.$element.closest('[data-toggle="buttons-radio"]');
        b && b.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var g = f.fn.button;
    f.fn.button = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("button"),
                b = typeof a == "object" && a;
            c || h.data("button", c = new d(this, b)), a == "toggle" ? c.toggle() : a && c.setState(a)
        })
    }, f.fn.button.defaults = {
        loadingText: "loading..."
    }, f.fn.button.Constructor = d, f.fn.button.noConflict = function() {
        return f.fn.button = g, this
    }, f(document).on("click.button.data-api", "[data-toggle^=button]", function(a) {
        var h = f(a.target);
        h.hasClass("btn") || (h = h.closest(".btn")), h.button("toggle")
    })
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.$element = f(a), this.options = f.extend({}, f.fn.collapse.defaults, h), this.options.parent && (this.$parent = f(this.options.parent)), this.options.toggle && this.toggle()
    };
    d.prototype = {
        constructor: d,
        dimension: function() {
            var b = this.$element.hasClass("width");
            return b ? "width" : "height"
        },
        show: function() {
            var a, j, i, h;
            if (this.transitioning || this.$element.hasClass("in")) {
                return
            }
            a = this.dimension(), j = f.camelCase(["scroll", a].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (i && i.length) {
                h = i.data("collapse");
                if (h && h.transitioning) {
                    return
                }
                i.collapse("hide"), h || i.data("collapse", null)
            }
            this.$element[a](0), this.transition("addClass", f.Event("show"), "shown"), f.support.transition && this.$element[a](this.$element[0][j])
        },
        hide: function() {
            var a;
            if (this.transitioning || !this.$element.hasClass("in")) {
                return
            }
            a = this.dimension(), this.reset(this.$element[a]()), this.transition("removeClass", f.Event("hide"), "hidden"), this.$element[a](0)
        },
        reset: function(h) {
            var c = this.dimension();
            return this.$element.removeClass("collapse")[c](h || "auto")[0].offsetWidth, this.$element[h !== null ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(a, k, j) {
            var i = this,
                h = function() {
                    k.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(j)
                };
            this.$element.trigger(k);
            if (k.isDefaultPrevented()) {
                return
            }
            this.transitioning = 1, this.$element[a]("in"), f.support.transition && this.$element.hasClass("collapse") ? this.$element.one(f.support.transition.end, h) : h()
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var g = f.fn.collapse;
    f.fn.collapse = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("collapse"),
                b = f.extend({}, f.fn.collapse.defaults, h.data(), typeof a == "object" && a);
            c || h.data("collapse", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.collapse.defaults = {
        toggle: !0
    }, f.fn.collapse.Constructor = d, f.fn.collapse.noConflict = function() {
        return f.fn.collapse = g, this
    }, f(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(a) {
        var k = f(this),
            j, i = k.attr("data-target") || a.preventDefault() || (j = k.attr("href")) && j.replace(/.*(?=#[^\s]+$)/, ""),
            h = f(i).data("collapse") ? "toggle" : k.data();
        k[f(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), f(i).collapse(h)
    })
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.$element = f(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = h, this.options.pause == "hover" && this.$element.on("mouseenter", f.proxy(this.pause, this)).on("mouseleave", f.proxy(this.cycle, this))
    };
    d.prototype = {
        cycle: function(a) {
            return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(f.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(a) {
            var i = this.getActiveIndex(),
                h = this;
            if (a > this.$items.length - 1 || a < 0) {
                return
            }
            return this.sliding ? this.$element.one("slid", function() {
                h.to(a)
            }) : i == a ? this.pause().cycle() : this.slide(a > i ? "next" : "prev", f(this.$items[a]))
        },
        pause: function(a) {
            return a || (this.paused = !0), this.$element.find(".next, .prev").length && f.support.transition.end && (this.$element.trigger(f.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            if (this.sliding) {
                return
            }
            return this.slide("next")
        },
        prev: function() {
            if (this.sliding) {
                return
            }
            return this.slide("prev")
        },
        slide: function(r, q) {
            var p = this.$element.find(".item.active"),
                o = q || p[r](),
                n = this.interval,
                m = r == "next" ? "left" : "right",
                l = r == "next" ? "first" : "last",
                k = this,
                a;
            this.sliding = !0, n && this.pause(), o = o.length ? o : this.$element.find(".item")[l](), a = f.Event("slide", {
                relatedTarget: o[0],
                direction: m
            });
            if (o.hasClass("active")) {
                return
            }
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                var c = f(k.$indicators.children()[k.getActiveIndex()]);
                c && c.addClass("active")
            }));
            if (f.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(a);
                if (a.isDefaultPrevented()) {
                    return
                }
                o.addClass(r), o[0].offsetWidth, p.addClass(m), o.addClass(m), this.$element.one(f.support.transition.end, function() {
                    o.removeClass([r, m].join(" ")).addClass("active"), p.removeClass(["active", m].join(" ")), k.sliding = !1, setTimeout(function() {
                        k.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(a);
                if (a.isDefaultPrevented()) {
                    return
                }
                p.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return n && this.cycle(), this
        }
    };
    var g = f.fn.carousel;
    f.fn.carousel = function(a) {
        return this.each(function() {
            var i = f(this),
                h = i.data("carousel"),
                c = f.extend({}, f.fn.carousel.defaults, typeof a == "object" && a),
                b = typeof a == "string" ? a : c.slide;
            h || i.data("carousel", h = new d(this, c)), typeof a == "number" ? h.to(a) : b ? h[b]() : c.interval && h.pause().cycle()
        })
    }, f.fn.carousel.defaults = {
        interval: 5000,
        pause: "hover"
    }, f.fn.carousel.Constructor = d, f.fn.carousel.noConflict = function() {
        return f.fn.carousel = g, this
    }, f(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(a) {
        var l = f(this),
            k, j = f(l.attr("data-target") || (k = l.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "")),
            i = f.extend({}, j.data(), l.data()),
            h;
        j.carousel(i), (h = l.attr("data-slide-to")) && j.data("carousel").pause().to(h).cycle(), a.preventDefault()
    })
}(window.jQuery), ! function(f) {
    var d = function(a, h) {
        this.$element = f(a), this.options = f.extend({}, f.fn.typeahead.defaults, h), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = f(this.options.menu), this.shown = !1, this.listen()
    };
    d.prototype = {
        constructor: d,
        select: function() {
            var b = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(b)).change(), this.hide()
        },
        updater: function(b) {
            return b
        },
        show: function() {
            var a = f.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: a.top + a.height,
                left: a.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function(a) {
            var h;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (h = f.isFunction(this.source) ? this.source(this.query, f.proxy(this.process, this)) : this.source, h ? this.process(h) : this)
        },
        process: function(a) {
            var h = this;
            return a = f.grep(a, function(b) {
                return h.matcher(b)
            }), a = this.sorter(a), a.length ? this.render(a.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(b) {
            return ~b.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(i) {
            var h = [],
                l = [],
                k = [],
                j;
            while (j = i.shift()) {
                j.toLowerCase().indexOf(this.query.toLowerCase()) ? ~j.indexOf(this.query) ? l.push(j) : k.push(j) : h.push(j)
            }
            return h.concat(l, k)
        },
        highlighter: function(h) {
            var c = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return h.replace(new RegExp("(" + c + ")", "ig"), function(j, i) {
                return "<strong>" + i + "</strong>"
            })
        },
        render: function(a) {
            var h = this;
            return a = f(a).map(function(c, i) {
                return c = f(h.options.item).attr("data-value", i), c.find("a").html(h.highlighter(i)), c[0]
            }), a.first().addClass("active"), this.$menu.html(a), this
        },
        next: function(a) {
            var i = this.$menu.find(".active").removeClass("active"),
                h = i.next();
            h.length || (h = f(this.$menu.find("li")[0])), h.addClass("active")
        },
        prev: function(i) {
            var h = this.$menu.find(".active").removeClass("active"),
                j = h.prev();
            j.length || (j = this.$menu.find("li").last()), j.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", f.proxy(this.focus, this)).on("blur", f.proxy(this.blur, this)).on("keypress", f.proxy(this.keypress, this)).on("keyup", f.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", f.proxy(this.keydown, this)), this.$menu.on("click", f.proxy(this.click, this)).on("mouseenter", "li", f.proxy(this.mouseenter, this)).on("mouseleave", "li", f.proxy(this.mouseleave, this))
        },
        eventSupported: function(h) {
            var c = h in this.$element;
            return c || (this.$element.setAttribute(h, "return;"), c = typeof this.$element[h] == "function"), c
        },
        move: function(b) {
            if (!this.shown) {
                return
            }
            switch (b.keyCode) {
                case 9:
                case 13:
                case 27:
                    b.preventDefault();
                    break;
                case 38:
                    b.preventDefault(), this.prev();
                    break;
                case 40:
                    b.preventDefault(), this.next()
            }
            b.stopPropagation()
        },
        keydown: function(a) {
            this.suppressKeyPressRepeat = ~f.inArray(a.keyCode, [40, 38, 9, 13, 27]), this.move(a)
        },
        keypress: function(b) {
            if (this.suppressKeyPressRepeat) {
                return
            }
            this.move(b)
        },
        keyup: function(b) {
            switch (b.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) {
                        return
                    }
                    this.select();
                    break;
                case 27:
                    if (!this.shown) {
                        return
                    }
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            b.stopPropagation(), b.preventDefault()
        },
        focus: function(b) {
            this.focused = !0
        },
        blur: function(b) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(b) {
            b.stopPropagation(), b.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(a) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), f(a.currentTarget).addClass("active")
        },
        mouseleave: function(b) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var g = f.fn.typeahead;
    f.fn.typeahead = function(a) {
        return this.each(function() {
            var h = f(this),
                c = h.data("typeahead"),
                b = typeof a == "object" && a;
            c || h.data("typeahead", c = new d(this, b)), typeof a == "string" && c[a]()
        })
    }, f.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, f.fn.typeahead.Constructor = d, f.fn.typeahead.noConflict = function() {
        return f.fn.typeahead = g, this
    }, f(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(a) {
        var h = f(this);
        if (h.data("typeahead")) {
            return
        }
        h.typeahead(h.data())
    })
}(window.jQuery);
if (typeof Object.create !== "function") {
    Object.create = function(b) {
        function a() {}
        a.prototype = b;
        return new a()
    }
}
var ua = {
    toString: function() {
        return navigator.userAgent
    },
    test: function(a) {
        return this.toString().toLowerCase().indexOf(a.toLowerCase()) > -1
    }
};
ua.version = (ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
ua.webkit = ua.test("webkit");
ua.gecko = ua.test("gecko") && !ua.webkit;
ua.opera = ua.test("opera");
ua.ie = ua.test("msie") && !ua.opera;
ua.ie6 = ua.ie && document.compatMode && typeof document.documentElement.style.maxHeight === "undefined";
ua.ie7 = ua.ie && document.documentElement && typeof document.documentElement.style.maxHeight !== "undefined" && typeof XDomainRequest === "undefined";
ua.ie8 = ua.ie && typeof XDomainRequest !== "undefined";
var domReady = function() {
    var b = [];
    var a = function() {
        if (!arguments.callee.done) {
            arguments.callee.done = true;
            for (var c = 0; c < b.length; c++) {
                b[c]()
            }
        }
    };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", a, false)
    }
    if (ua.ie) {
        (function() {
            try {
                document.documentElement.doScroll("left")
            } catch (c) {
                setTimeout(arguments.callee, 50);
                return
            }
            a()
        })();
        document.onreadystatechange = function() {
            if (document.readyState === "complete") {
                document.onreadystatechange = null;
                a()
            }
        }
    }
    if (ua.webkit && document.readyState) {
        (function() {
            if (document.readyState !== "loading") {
                a()
            } else {
                setTimeout(arguments.callee, 10)
            }
        })()
    }
    window.onload = a;
    return function(c) {
        if (typeof c === "function") {
            b[b.length] = c
        }
        return c
    }
}();
var cssHelper = function() {
    var n = {
        BLOCKS: /[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,
        BLOCKS_INSIDE: /[^\s{][^{]*\{[^{}]*\}/g,
        DECLARATIONS: /[a-zA-Z\-]+[^;]*:[^;]+;/g,
        RELATIVE_URLS: /url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,
        REDUNDANT_COMPONENTS: /(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,
        REDUNDANT_WHITESPACE: /\s*(,|:|;|\{|\})\s*/g,
        MORE_WHITESPACE: /\s{2,}/g,
        FINAL_SEMICOLONS: /;\}/g,
        NOT_WHITESPACE: /\S+/g
    };
    var l, k = false;
    var i = [];
    var h = function(u) {
        if (typeof u === "function") {
            i[i.length] = u
        }
    };
    var f = function() {
        for (var u = 0; u < i.length; u++) {
            i[u](l)
        }
    };
    var d = {};
    var o = function(y, u) {
        if (d[y]) {
            var w = d[y].listeners;
            if (w) {
                for (var x = 0; x < w.length; x++) {
                    w[x](u)
                }
            }
        }
    };
    var m = function(v, u, z) {
        if (ua.ie && !window.XMLHttpRequest) {
            window.XMLHttpRequest = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        if (!XMLHttpRequest) {
            return ""
        }
        var w = new XMLHttpRequest();
        try {
            w.open("get", v, true);
            w.setRequestHeader("X_REQUESTED_WITH", "XMLHttpRequest")
        } catch (x) {
            z();
            return
        }
        var y = false;
        setTimeout(function() {
            y = true
        }, 5000);
        document.documentElement.style.cursor = "progress";
        w.onreadystatechange = function() {
            if (w.readyState === 4 && !y) {
                if (!w.status && location.protocol === "file:" || (w.status >= 200 && w.status < 300) || w.status === 304 || navigator.userAgent.indexOf("Safari") > -1 && typeof w.status === "undefined") {
                    u(w.responseText)
                } else {
                    z()
                }
                document.documentElement.style.cursor = "";
                w = null
            }
        };
        w.send("")
    };
    var j = function(u) {
        u = u.replace(n.REDUNDANT_COMPONENTS, "");
        u = u.replace(n.REDUNDANT_WHITESPACE, "$1");
        u = u.replace(n.MORE_WHITESPACE, " ");
        u = u.replace(n.FINAL_SEMICOLONS, "}");
        return u
    };
    var g = {
        mediaQueryList: function(C) {
            var u = {};
            var B = C.indexOf("{");
            var y = C.substring(0, B);
            C = C.substring(B + 1, C.length - 1);
            var x = [],
                w = [];
            var v = y.toLowerCase().substring(7).split(",");
            for (var A = 0; A < v.length; A++) {
                x[x.length] = g.mediaQuery(v[A], u)
            }
            var z = C.match(n.BLOCKS_INSIDE);
            if (z !== null) {
                for (A = 0; A < z.length; A++) {
                    w[w.length] = g.rule(z[A], u)
                }
            }
            u.getMediaQueries = function() {
                return x
            };
            u.getRules = function() {
                return w
            };
            u.getListText = function() {
                return y
            };
            u.getCssText = function() {
                return C
            };
            return u
        },
        mediaQuery: function(D, C) {
            D = D || "";
            var w = false,
                A;
            var z = [];
            var y = true;
            var x = D.match(n.NOT_WHITESPACE);
            for (var B = 0; B < x.length; B++) {
                var v = x[B];
                if (!A && (v === "not" || v === "only")) {
                    if (v === "not") {
                        w = true
                    }
                } else {
                    if (!A) {
                        A = v
                    } else {
                        if (v.charAt(0) === "(") {
                            var u = v.substring(1, v.length - 1).split(":");
                            z[z.length] = {
                                mediaFeature: u[0],
                                value: u[1] || null
                            }
                        }
                    }
                }
            }
            return {
                getList: function() {
                    return C || null
                },
                getValid: function() {
                    return y
                },
                getNot: function() {
                    return w
                },
                getMediaType: function() {
                    return A
                },
                getExpressions: function() {
                    return z
                }
            }
        },
        rule: function(B, y) {
            var u = {};
            var z = B.indexOf("{");
            var A = B.substring(0, z);
            var C = A.split(",");
            var v = [];
            var w = B.substring(z + 1, B.length - 1).split(";");
            for (var x = 0; x < w.length; x++) {
                v[v.length] = g.declaration(w[x], u)
            }
            u.getMediaQueryList = function() {
                return y || null
            };
            u.getSelectors = function() {
                return C
            };
            u.getSelectorText = function() {
                return A
            };
            u.getDeclarations = function() {
                return v
            };
            u.getPropertyValue = function(E) {
                for (var D = 0; D < v.length; D++) {
                    if (v[D].getProperty() === E) {
                        return v[D].getValue()
                    }
                }
                return null
            };
            return u
        },
        declaration: function(x, y) {
            var u = x.indexOf(":");
            var z = x.substring(0, u);
            var w = x.substring(u + 1);
            return {
                getRule: function() {
                    return y || null
                },
                getProperty: function() {
                    return z
                },
                getValue: function() {
                    return w
                }
            }
        }
    };
    var a = function(x) {
        if (typeof x.cssHelperText !== "string") {
            return
        }
        var w = {
            mediaQueryLists: [],
            rules: [],
            selectors: {},
            declarations: [],
            properties: {}
        };
        var C = w.mediaQueryLists;
        var E = w.rules;
        var B = x.cssHelperText.match(n.BLOCKS);
        if (B !== null) {
            for (var D = 0; D < B.length; D++) {
                if (B[D].substring(0, 7) === "@media ") {
                    C[C.length] = g.mediaQueryList(B[D]);
                    E = w.rules = E.concat(C[C.length - 1].getRules())
                } else {
                    E[E.length] = g.rule(B[D])
                }
            }
        }
        var u = w.selectors;
        var z = function(H) {
            var G = H.getSelectors();
            for (var F = 0; F < G.length; F++) {
                var I = G[F];
                if (!u[I]) {
                    u[I] = []
                }
                u[I][u[I].length] = H
            }
        };
        for (D = 0; D < E.length; D++) {
            z(E[D])
        }
        var A = w.declarations;
        for (D = 0; D < E.length; D++) {
            A = w.declarations = A.concat(E[D].getDeclarations())
        }
        var v = w.properties;
        for (D = 0; D < A.length; D++) {
            var y = A[D].getProperty();
            if (!v[y]) {
                v[y] = []
            }
            v[y][v[y].length] = A[D]
        }
        x.cssHelperParsed = w;
        l[l.length] = x;
        return w
    };
    var c = function(v, u) {
        v.cssHelperText = j(u || v.innerHTML);
        return a(v)
    };
    var b = function() {
        k = true;
        l = [];
        var u = [];
        var v = function() {
            for (var D = 0; D < u.length; D++) {
                a(u[D])
            }
            var C = document.getElementsByTagName("style");
            for (D = 0; D < C.length; D++) {
                c(C[D])
            }
            k = false;
            f()
        };
        var B = document.getElementsByTagName("link");
        for (var w = 0; w < B.length; w++) {
            var z = B[w];
            if (z.getAttribute("rel").indexOf("style") > -1 && z.href && z.href.length !== 0 && !z.disabled) {
                u[u.length] = z
            }
        }
        if (u.length > 0) {
            var A = 0;
            var y = function() {
                A++;
                if (A === u.length) {
                    v()
                }
            };
            var x = function(D) {
                var C = D.href;
                m(C, function(E) {
                    E = j(E).replace(n.RELATIVE_URLS, "url(" + C.substring(0, C.lastIndexOf("/")) + "/$1)");
                    D.cssHelperText = E;
                    y()
                }, y)
            };
            for (w = 0; w < u.length; w++) {
                x(u[w])
            }
        } else {
            v()
        }
    };
    var p = {
        mediaQueryLists: "array",
        rules: "array",
        selectors: "object",
        declarations: "array",
        properties: "object"
    };
    var t = {
        mediaQueryLists: null,
        rules: null,
        selectors: null,
        declarations: null,
        properties: null
    };
    var s = function(w, u) {
        if (t[w] !== null) {
            if (p[w] === "array") {
                return (t[w] = t[w].concat(u))
            } else {
                var y = t[w];
                for (var x in u) {
                    if (u.hasOwnProperty(x)) {
                        if (!y[x]) {
                            y[x] = u[x]
                        } else {
                            y[x] = y[x].concat(u[x])
                        }
                    }
                }
                return y
            }
        }
    };
    var r = function(u) {
        t[u] = (p[u] === "array") ? [] : {};
        for (var v = 0; v < l.length; v++) {
            s(u, l[v].cssHelperParsed[u])
        }
        return t[u]
    };
    domReady(function() {
        var v = document.body.getElementsByTagName("*");
        for (var u = 0; u < v.length; u++) {
            v[u].checkedByCssHelper = true
        }
        if (document.implementation.hasFeature("MutationEvents", "2.0") || window.MutationEvent) {
            document.body.addEventListener("DOMNodeInserted", function(x) {
                var w = x.target;
                if (w.nodeType === 1) {
                    o("DOMElementInserted", w);
                    w.checkedByCssHelper = true
                }
            }, false)
        } else {
            setInterval(function() {
                var x = document.body.getElementsByTagName("*");
                for (var w = 0; w < x.length; w++) {
                    if (!x[w].checkedByCssHelper) {
                        o("DOMElementInserted", x[w]);
                        x[w].checkedByCssHelper = true
                    }
                }
            }, 1000)
        }
    });
    var q = function(u) {
        if (typeof window.innerWidth != "undefined") {
            return window["inner" + u]
        } else {
            if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
                return document.documentElement["client" + u]
            }
        }
    };
    return {
        addStyle: function(w, u) {
            var v = document.createElement("style");
            v.setAttribute("type", "text/css");
            document.getElementsByTagName("head")[0].appendChild(v);
            if (v.styleSheet) {
                v.styleSheet.cssText = w
            } else {
                v.appendChild(document.createTextNode(w))
            }
            v.addedWithCssHelper = true;
            if (typeof u === "undefined" || u === true) {
                cssHelper.parsed(function(x) {
                    var y = c(v, w);
                    for (var z in y) {
                        if (y.hasOwnProperty(z)) {
                            s(z, y[z])
                        }
                    }
                    o("newStyleParsed", v)
                })
            } else {
                v.parsingDisallowed = true
            }
            return v
        },
        removeStyle: function(u) {
            return u.parentNode.removeChild(u)
        },
        parsed: function(u) {
            if (k) {
                h(u)
            } else {
                if (typeof l !== "undefined") {
                    if (typeof u === "function") {
                        u(l)
                    }
                } else {
                    h(u);
                    b()
                }
            }
        },
        mediaQueryLists: function(u) {
            cssHelper.parsed(function(v) {
                u(t.mediaQueryLists || r("mediaQueryLists"))
            })
        },
        rules: function(u) {
            cssHelper.parsed(function(v) {
                u(t.rules || r("rules"))
            })
        },
        selectors: function(u) {
            cssHelper.parsed(function(v) {
                u(t.selectors || r("selectors"))
            })
        },
        declarations: function(u) {
            cssHelper.parsed(function(v) {
                u(t.declarations || r("declarations"))
            })
        },
        properties: function(u) {
            cssHelper.parsed(function(v) {
                u(t.properties || r("properties"))
            })
        },
        broadcast: o,
        addListener: function(v, u) {
            if (typeof u === "function") {
                if (!d[v]) {
                    d[v] = {
                        listeners: []
                    }
                }
                d[v].listeners[d[v].listeners.length] = u
            }
        },
        removeListener: function(x, w) {
            if (typeof w === "function" && d[x]) {
                var u = d[x].listeners;
                for (var v = 0; v < u.length; v++) {
                    if (u[v] === w) {
                        u.splice(v, 1);
                        v -= 1
                    }
                }
            }
        },
        getViewportWidth: function() {
            return q("Width")
        },
        getViewportHeight: function() {
            return q("Height")
        }
    }
}();
domReady(function enableCssMediaQueries() {
    var k;
    var i = {
        LENGTH_UNIT: /[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,
        RESOLUTION_UNIT: /[0-9]+(dpi|dpcm)$/,
        ASPECT_RATIO: /^[0-9]+\/[0-9]+$/,
        ABSOLUTE_VALUE: /^[0-9]*(\.[0-9]+)*$/
    };
    var h = [];
    var n = function() {
        var s = "css3-mediaqueries-test";
        var q = document.createElement("div");
        q.id = s;
        var r = cssHelper.addStyle("@media all and (width) { #" + s + " { width: 1px !important; } }", false);
        document.body.appendChild(q);
        var p = q.offsetWidth === 1;
        r.parentNode.removeChild(r);
        q.parentNode.removeChild(q);
        n = function() {
            return p
        };
        return p
    };
    var m = function() {
        k = document.createElement("div");
        k.style.cssText = "position:absolute;top:-9999em;left:-9999em;margin:0;border:none;padding:0;width:1em;font-size:1em;";
        document.body.appendChild(k);
        if (k.offsetWidth !== 16) {
            k.style.fontSize = 16 / k.offsetWidth + "em"
        }
        k.style.width = ""
    };
    var l = function(q) {
        k.style.width = q;
        var p = k.offsetWidth;
        k.style.width = "";
        return p
    };
    var j = function(z, y) {
        var u = z.length;
        var x = (z.substring(0, 4) === "min-");
        var B = (!x && z.substring(0, 4) === "max-");
        if (y !== null) {
            var w;
            var v;
            if (i.LENGTH_UNIT.exec(y)) {
                w = "length";
                v = l(y)
            } else {
                if (i.RESOLUTION_UNIT.exec(y)) {
                    w = "resolution";
                    v = parseInt(y, 10);
                    var t = y.substring((v + "").length)
                } else {
                    if (i.ASPECT_RATIO.exec(y)) {
                        w = "aspect-ratio";
                        v = y.split("/")
                    } else {
                        if (i.ABSOLUTE_VALUE) {
                            w = "absolute";
                            v = y
                        } else {
                            w = "unknown"
                        }
                    }
                }
            }
        }
        var s, r;
        if ("device-width" === z.substring(u - 12, u)) {
            s = screen.width;
            if (y !== null) {
                if (w === "length") {
                    return ((x && s >= v) || (B && s < v) || (!x && !B && s === v))
                } else {
                    return false
                }
            } else {
                return s > 0
            }
        } else {
            if ("device-height" === z.substring(u - 13, u)) {
                r = screen.height;
                if (y !== null) {
                    if (w === "length") {
                        return ((x && r >= v) || (B && r < v) || (!x && !B && r === v))
                    } else {
                        return false
                    }
                } else {
                    return r > 0
                }
            } else {
                if ("width" === z.substring(u - 5, u)) {
                    s = document.documentElement.clientWidth || document.body.clientWidth;
                    if (y !== null) {
                        if (w === "length") {
                            return ((x && s >= v) || (B && s < v) || (!x && !B && s === v))
                        } else {
                            return false
                        }
                    } else {
                        return s > 0
                    }
                } else {
                    if ("height" === z.substring(u - 6, u)) {
                        r = document.documentElement.clientHeight || document.body.clientHeight;
                        if (y !== null) {
                            if (w === "length") {
                                return ((x && r >= v) || (B && r < v) || (!x && !B && r === v))
                            } else {
                                return false
                            }
                        } else {
                            return r > 0
                        }
                    } else {
                        if ("device-aspect-ratio" === z.substring(u - 19, u)) {
                            return w === "aspect-ratio" && screen.width * v[1] === screen.height * v[0]
                        } else {
                            if ("color-index" === z.substring(u - 11, u)) {
                                var q = Math.pow(2, screen.colorDepth);
                                if (y !== null) {
                                    if (w === "absolute") {
                                        return ((x && q >= v) || (B && q < v) || (!x && !B && q === v))
                                    } else {
                                        return false
                                    }
                                } else {
                                    return q > 0
                                }
                            } else {
                                if ("color" === z.substring(u - 5, u)) {
                                    var p = screen.colorDepth;
                                    if (y !== null) {
                                        if (w === "absolute") {
                                            return ((x && p >= v) || (B && p < v) || (!x && !B && p === v))
                                        } else {
                                            return false
                                        }
                                    } else {
                                        return p > 0
                                    }
                                } else {
                                    if ("resolution" === z.substring(u - 10, u)) {
                                        var A;
                                        if (t === "dpcm") {
                                            A = l("1cm")
                                        } else {
                                            A = l("1in")
                                        }
                                        if (y !== null) {
                                            if (w === "resolution") {
                                                return ((x && A >= v) || (B && A < v) || (!x && !B && A === v))
                                            } else {
                                                return false
                                            }
                                        } else {
                                            return A > 0
                                        }
                                    } else {
                                        return false
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    var g = function(r) {
        var u = r.getValid();
        var t = r.getExpressions();
        var p = t.length;
        if (p > 0) {
            for (var q = 0; q < p && u; q++) {
                u = j(t[q].mediaFeature, t[q].value)
            }
            var s = r.getNot();
            return (u && !s || s && !u)
        }
    };
    var f = function(p) {
        var u = p.getMediaQueries();
        var r = {};
        for (var q = 0; q < u.length; q++) {
            if (g(u[q])) {
                r[u[q].getMediaType()] = true
            }
        }
        var v = [],
            x = 0;
        for (var w in r) {
            if (r.hasOwnProperty(w)) {
                if (x > 0) {
                    v[x++] = ","
                }
                v[x++] = w
            }
        }
        if (v.length > 0) {
            h[h.length] = cssHelper.addStyle("@media " + v.join("") + "{" + p.getCssText() + "}", false)
        }
    };
    var d = function(q) {
        for (var p = 0; p < q.length; p++) {
            f(q[p])
        }
        if (ua.ie) {
            document.documentElement.style.display = "block";
            setTimeout(function() {
                document.documentElement.style.display = ""
            }, 0);
            setTimeout(function() {
                cssHelper.broadcast("cssMediaQueriesTested")
            }, 100)
        } else {
            cssHelper.broadcast("cssMediaQueriesTested")
        }
    };
    var c = function() {
        for (var p = 0; p < h.length; p++) {
            cssHelper.removeStyle(h[p])
        }
        h = [];
        cssHelper.mediaQueryLists(d)
    };
    var b = 0;
    var a = function() {
        var s = cssHelper.getViewportWidth();
        var r = cssHelper.getViewportHeight();
        if (ua.ie) {
            var t = document.createElement("div");
            t.style.position = "absolute";
            t.style.top = "-9999em";
            t.style.overflow = "scroll";
            document.body.appendChild(t);
            b = t.offsetWidth - t.clientWidth;
            document.body.removeChild(t)
        }
        var q;
        var p = function() {
            var u = cssHelper.getViewportWidth();
            var v = cssHelper.getViewportHeight();
            if (Math.abs(u - s) > b || Math.abs(v - r) > b) {
                s = u;
                r = v;
                clearTimeout(q);
                q = setTimeout(function() {
                    if (!n()) {
                        c()
                    } else {
                        cssHelper.broadcast("cssMediaQueriesTested")
                    }
                }, 500)
            }
        };
        window.onresize = function() {
            var u = window.onresize || function() {};
            return function() {
                u();
                p()
            }
        }()
    };
    var o = document.documentElement;
    o.style.marginLeft = "-32767px";
    setTimeout(function() {
        o.style.marginTop = ""
    }, 20000);
    return function() {
        if (!n()) {
            cssHelper.addListener("newStyleParsed", function(p) {
                d(p.cssHelperParsed.mediaQueryLists)
            });
            cssHelper.addListener("cssMediaQueriesTested", function() {
                if (ua.ie) {
                    o.style.width = "1px"
                }
                setTimeout(function() {
                    o.style.width = "";
                    o.style.marginLeft = ""
                }, 0);
                cssHelper.removeListener("cssMediaQueriesTested", arguments.callee)
            });
            m();
            c()
        } else {
            o.style.marginLeft = ""
        }
        a()
    }
}());
try {
    document.execCommand("BackgroundImageCache", false, true)
} catch (e) {}! function(a) {
    a.flexslider = function(y, E) {
        var B = a(y);
        B.vars = a.extend({}, a.flexslider.defaults, E);
        var j = B.vars.namespace,
            w = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            F = ("ontouchstart" in window || w || window.DocumentTouch && document instanceof DocumentTouch) && B.vars.touch,
            b = "click touchend MSPointerUp keyup",
            h = "",
            q, A = "vertical" === B.vars.direction,
            z = B.vars.reverse,
            D = B.vars.itemWidth > 0,
            C = "fade" === B.vars.animation,
            g = "" !== B.vars.asNavFor,
            k = {},
            x = !0;
        a.data(y, "flexslider", B), k = {
            init: function() {
                B.animating = !1, B.currentSlide = parseInt(B.vars.startAt ? B.vars.startAt : 0, 10), isNaN(B.currentSlide) && (B.currentSlide = 0), B.animatingTo = B.currentSlide, B.atEnd = 0 === B.currentSlide || B.currentSlide === B.last, B.containerSelector = B.vars.selector.substr(0, B.vars.selector.search(" ")), B.slides = a(B.vars.selector, B), B.container = a(B.containerSelector, B), B.count = B.slides.length, B.syncExists = a(B.vars.sync).length > 0, "slide" === B.vars.animation && (B.vars.animation = "swing"), B.prop = A ? "top" : "marginLeft", B.args = {}, B.manualPause = !1, B.stopped = !1, B.started = !1, B.startTimeout = null, B.transitions = !B.vars.video && !C && B.vars.useCSS && function() {
                    var d = document.createElement("div"),
                        c = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var f in c) {
                        if (void 0 !== d.style[c[f]]) {
                            return B.pfx = c[f].replace("Perspective", "").toLowerCase(), B.prop = "-" + B.pfx + "-transform", !0
                        }
                    }
                    return !1
                }(), B.ensureAnimationEnd = "", "" !== B.vars.controlsContainer && (B.controlsContainer = a(B.vars.controlsContainer).length > 0 && a(B.vars.controlsContainer)), "" !== B.vars.manualControls && (B.manualControls = a(B.vars.manualControls).length > 0 && a(B.vars.manualControls)), B.vars.randomize && (B.slides.sort(function() {
                    return Math.round(Math.random()) - 0.5
                }), B.container.empty().append(B.slides)), B.doMath(), B.setup("init"), B.vars.controlNav && k.controlNav.setup(), B.vars.directionNav && k.directionNav.setup(), B.vars.keyboard && (1 === a(B.containerSelector).length || B.vars.multipleKeyboard) && a(document).bind("keyup", function(d) {
                    var c = d.keyCode;
                    if (!B.animating && (39 === c || 37 === c)) {
                        var f = 39 === c ? B.getTarget("next") : 37 === c ? B.getTarget("prev") : !1;
                        B.flexAnimate(f, B.vars.pauseOnAction)
                    }
                }), B.vars.mousewheel && B.bind("mousewheel", function(l, d, m, c) {
                    l.preventDefault();
                    var f = B.getTarget(0 > d ? "next" : "prev");
                    B.flexAnimate(f, B.vars.pauseOnAction)
                }), B.vars.pausePlay && k.pausePlay.setup(), B.vars.slideshow && B.vars.pauseInvisible && k.pauseInvisible.init(), B.vars.slideshow && (B.vars.pauseOnHover && B.hover(function() {
                    B.manualPlay || B.manualPause || B.pause()
                }, function() {
                    B.manualPause || B.manualPlay || B.stopped || B.play()
                }), B.vars.pauseInvisible && k.pauseInvisible.isHidden() || (B.vars.initDelay > 0 ? B.startTimeout = setTimeout(B.play, B.vars.initDelay) : B.play())), g && k.asNav.setup(), F && B.vars.touch && k.touch(), (!C || C && B.vars.smoothHeight) && a(window).bind("resize orientationchange focus", k.resize), B.find("img").attr("draggable", "false"), setTimeout(function() {
                    B.vars.start(B)
                }, 200)
            },
            asNav: {
                setup: function() {
                    B.asNav = !0, B.animatingTo = Math.floor(B.currentSlide / B.move), B.currentItem = B.currentSlide, B.slides.removeClass(j + "active-slide").eq(B.currentItem).addClass(j + "active-slide"), w ? (y._slider = B, B.slides.each(function() {
                        var c = this;
                        c._gesture = new MSGesture, c._gesture.target = c, c.addEventListener("MSPointerDown", function(d) {
                            d.preventDefault(), d.currentTarget._gesture && d.currentTarget._gesture.addPointer(d.pointerId)
                        }, !1), c.addEventListener("MSGestureTap", function(f) {
                            f.preventDefault();
                            var d = a(this),
                                i = d.index();
                            a(B.vars.asNavFor).data("flexslider").animating || d.hasClass("active") || (B.direction = B.currentItem < i ? "next" : "prev", B.flexAnimate(i, B.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : B.slides.on(b, function(l) {
                        l.preventDefault();
                        var d = a(this),
                            c = d.index(),
                            f = d.offset().left - a(B).scrollLeft();
                        0 >= f && d.hasClass(j + "active-slide") ? B.flexAnimate(B.getTarget("prev"), !0) : a(B.vars.asNavFor).data("flexslider").animating || d.hasClass(j + "active-slide") || (B.direction = B.currentItem < c ? "next" : "prev", B.flexAnimate(c, B.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    B.manualControls ? k.controlNav.setupManual() : k.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var o = "thumbnails" === B.vars.controlNav ? "control-thumbs" : "control-paging",
                        m = 1,
                        f, n;
                    if (B.controlNavScaffold = a('<ol class="' + j + "control-nav " + j + o + '"></ol>'), B.pagingCount > 1) {
                        for (var d = 0; d < B.pagingCount; d++) {
                            if (n = B.slides.eq(d), f = "thumbnails" === B.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + m + "</a>", "thumbnails" === B.vars.controlNav && !0 === B.vars.thumbCaptions) {
                                var p = n.attr("data-thumbcaption");
                                "" != p && void 0 != p && (f += '<span class="' + j + 'caption">' + p + "</span>")
                            }
                            B.controlNavScaffold.append("<li>" + f + "</li>"), m++
                        }
                    }
                    B.controlsContainer ? a(B.controlsContainer).append(B.controlNavScaffold) : B.append(B.controlNavScaffold), k.controlNav.set(), k.controlNav.active(), B.controlNavScaffold.delegate("a, img", b, function(r) {
                        if (r.preventDefault(), "" === h || h === r.type) {
                            var l = a(this),
                                c = B.controlNav.index(l);
                            l.hasClass(j + "active") || (B.direction = c > B.currentSlide ? "next" : "prev", B.flexAnimate(c, B.vars.pauseOnAction))
                        }
                        "" === h && (h = r.type), k.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    B.controlNav = B.manualControls, k.controlNav.active(), B.controlNav.bind(b, function(f) {
                        if (f.preventDefault(), "" === h || h === f.type) {
                            var d = a(this),
                                c = B.controlNav.index(d);
                            d.hasClass(j + "active") || (B.direction = c > B.currentSlide ? "next" : "prev", B.flexAnimate(c, B.vars.pauseOnAction))
                        }
                        "" === h && (h = f.type), k.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var c = "thumbnails" === B.vars.controlNav ? "img" : "a";
                    B.controlNav = a("." + j + "control-nav li " + c, B.controlsContainer ? B.controlsContainer : B)
                },
                active: function() {
                    B.controlNav.removeClass(j + "active").eq(B.animatingTo).addClass(j + "active")
                },
                update: function(d, c) {
                    B.pagingCount > 1 && "add" === d ? B.controlNavScaffold.append(a("<li><a>" + B.count + "</a></li>")) : 1 === B.pagingCount ? B.controlNavScaffold.find("li").remove() : B.controlNav.eq(c).closest("li").remove(), k.controlNav.set(), B.pagingCount > 1 && B.pagingCount !== B.controlNav.length ? B.update(c, d) : k.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var c = a('<ul class="' + j + 'direction-nav"><li class="' + j + 'nav-prev"><a class="' + j + 'prev" href="#">' + B.vars.prevText + '</a></li><li class="' + j + 'nav-next"><a class="' + j + 'next" href="#">' + B.vars.nextText + "</a></li></ul>");
                    B.controlsContainer ? (a(B.controlsContainer).append(c), B.directionNav = a("." + j + "direction-nav li a", B.controlsContainer)) : (B.append(c), B.directionNav = a("." + j + "direction-nav li a", B)), k.directionNav.update(), B.directionNav.bind(b, function(f) {
                        f.preventDefault();
                        var d;
                        ("" === h || h === f.type) && (d = B.getTarget(a(this).hasClass(j + "next") ? "next" : "prev"), B.flexAnimate(d, B.vars.pauseOnAction)), "" === h && (h = f.type), k.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var c = j + "disabled";
                    1 === B.pagingCount ? B.directionNav.addClass(c).attr("tabindex", "-1") : B.vars.animationLoop ? B.directionNav.removeClass(c).removeAttr("tabindex") : 0 === B.animatingTo ? B.directionNav.removeClass(c).filter("." + j + "prev").addClass(c).attr("tabindex", "-1") : B.animatingTo === B.last ? B.directionNav.removeClass(c).filter("." + j + "next").addClass(c).attr("tabindex", "-1") : B.directionNav.removeClass(c).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var c = a('<div class="' + j + 'pauseplay"><a></a></div>');
                    B.controlsContainer ? (B.controlsContainer.append(c), B.pausePlay = a("." + j + "pauseplay a", B.controlsContainer)) : (B.append(c), B.pausePlay = a("." + j + "pauseplay a", B)), k.pausePlay.update(B.vars.slideshow ? j + "pause" : j + "play"), B.pausePlay.bind(b, function(d) {
                        d.preventDefault(), ("" === h || h === d.type) && (a(this).hasClass(j + "pause") ? (B.manualPause = !0, B.manualPlay = !1, B.pause()) : (B.manualPause = !1, B.manualPlay = !0, B.play())), "" === h && (h = d.type), k.setToClearWatchedEvent()
                    })
                },
                update: function(c) {
                    "play" === c ? B.pausePlay.removeClass(j + "pause").addClass(j + "play").html(B.vars.playText) : B.pausePlay.removeClass(j + "play").addClass(j + "pause").html(B.vars.pauseText)
                }
            },
            touch: function() {
                function P(f) {
                    B.animating ? f.preventDefault() : (window.navigator.msPointerEnabled || 1 === f.touches.length) && (B.pause(), J = A ? B.h : B.w, H = Number(new Date), N = f.touches[0].pageX, L = f.touches[0].pageY, K = D && z && B.animatingTo === B.last ? 0 : D && z ? B.limit - (B.itemW + B.vars.itemMargin) * B.move * B.animatingTo : D && B.currentSlide === B.last ? B.limit : D ? (B.itemW + B.vars.itemMargin) * B.move * B.currentSlide : z ? (B.last - B.currentSlide + B.cloneOffset) * J : (B.currentSlide + B.cloneOffset) * J, d = A ? L : N, v = A ? N : L, y.addEventListener("touchmove", u, !1), y.addEventListener("touchend", Q, !1))
                }

                function u(l) {
                    N = l.touches[0].pageX, L = l.touches[0].pageY, I = A ? d - L : d - N, M = A ? Math.abs(I) < Math.abs(N - v) : Math.abs(I) < Math.abs(L - v);
                    var f = 500;
                    (!M || Number(new Date) - H > f) && (l.preventDefault(), !C && B.transitions && (B.vars.animationLoop || (I /= 0 === B.currentSlide && 0 > I || B.currentSlide === B.last && I > 0 ? Math.abs(I) / J + 2 : 1), B.setProps(K + I, "setTouch")))
                }

                function Q(l) {
                    if (y.removeEventListener("touchmove", u, !1), B.animatingTo === B.currentSlide && !M && null !== I) {
                        var f = z ? -I : I,
                            m = B.getTarget(f > 0 ? "next" : "prev");
                        B.canAdvance(m) && (Number(new Date) - H < 550 && Math.abs(f) > 50 || Math.abs(f) > J / 2) ? B.flexAnimate(m, B.vars.pauseOnAction) : C || B.flexAnimate(B.currentSlide, B.vars.pauseOnAction, !0)
                    }
                    y.removeEventListener("touchend", Q, !1), d = null, v = null, I = null, K = null
                }

                function c(f) {
                    f.stopPropagation(), B.animating ? f.preventDefault() : (B.pause(), y._gesture.addPointer(f.pointerId), O = 0, J = A ? B.h : B.w, H = Number(new Date), K = D && z && B.animatingTo === B.last ? 0 : D && z ? B.limit - (B.itemW + B.vars.itemMargin) * B.move * B.animatingTo : D && B.currentSlide === B.last ? B.limit : D ? (B.itemW + B.vars.itemMargin) * B.move * B.currentSlide : z ? (B.last - B.currentSlide + B.cloneOffset) * J : (B.currentSlide + B.cloneOffset) * J)
                }

                function i(m) {
                    m.stopPropagation();
                    var f = m.target._slider;
                    if (f) {
                        var o = -m.translationX,
                            l = -m.translationY;
                        return O += A ? l : o, I = O, M = A ? Math.abs(O) < Math.abs(-o) : Math.abs(O) < Math.abs(-l), m.detail === m.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            y._gesture.stop()
                        }) : void((!M || Number(new Date) - H > 500) && (m.preventDefault(), !C && f.transitions && (f.vars.animationLoop || (I = O / (0 === f.currentSlide && 0 > O || f.currentSlide === f.last && O > 0 ? Math.abs(O) / J + 2 : 1)), f.setProps(K + I, "setTouch"))))
                    }
                }

                function G(m) {
                    m.stopPropagation();
                    var l = m.target._slider;
                    if (l) {
                        if (l.animatingTo === l.currentSlide && !M && null !== I) {
                            var f = z ? -I : I,
                                o = l.getTarget(f > 0 ? "next" : "prev");
                            l.canAdvance(o) && (Number(new Date) - H < 550 && Math.abs(f) > 50 || Math.abs(f) > J / 2) ? l.flexAnimate(o, l.vars.pauseOnAction) : C || l.flexAnimate(l.currentSlide, l.vars.pauseOnAction, !0)
                        }
                        d = null, v = null, I = null, K = null, O = 0
                    }
                }
                var d, v, K, J, I, H, M = !1,
                    N = 0,
                    L = 0,
                    O = 0;
                w ? (y.style.msTouchAction = "none", y._gesture = new MSGesture, y._gesture.target = y, y.addEventListener("MSPointerDown", c, !1), y._slider = B, y.addEventListener("MSGestureChange", i, !1), y.addEventListener("MSGestureEnd", G, !1)) : y.addEventListener("touchstart", P, !1)
            },
            resize: function() {
                !B.animating && B.is(":visible") && (D || B.doMath(), C ? k.smoothHeight() : D ? (B.slides.width(B.computedW), B.update(B.pagingCount), B.setProps()) : A ? (B.viewport.height(B.h), B.setProps(B.h, "setTotal")) : (B.vars.smoothHeight && k.smoothHeight(), B.newSlides.width(B.computedW), B.setProps(B.computedW, "setTotal")))
            },
            smoothHeight: function(d) {
                if (!A || C) {
                    var c = C ? B : B.viewport;
                    d ? c.animate({
                        height: B.slides.eq(B.animatingTo).height()
                    }, d) : c.height(B.slides.eq(B.animatingTo).height())
                }
            },
            sync: function(d) {
                var c = a(B.vars.sync).data("flexslider"),
                    f = B.animatingTo;
                switch (d) {
                    case "animate":
                        c.flexAnimate(f, B.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        c.playing || c.asNav || c.play();
                        break;
                    case "pause":
                        c.pause()
                }
            },
            uniqueID: function(c) {
                return c.filter("[id]").add(c.find("[id]")).each(function() {
                    var d = a(this);
                    d.attr("id", d.attr("id") + "_clone")
                }), c
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var d = k.pauseInvisible.getHiddenProp();
                    if (d) {
                        var c = d.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            k.pauseInvisible.isHidden() ? B.startTimeout ? clearTimeout(B.startTimeout) : B.pause() : B.started ? B.play() : B.vars.initDelay > 0 ? setTimeout(B.play, B.vars.initDelay) : B.play()
                        })
                    }
                },
                isHidden: function() {
                    var c = k.pauseInvisible.getHiddenProp();
                    return c ? document[c] : !1
                },
                getHiddenProp: function() {
                    var d = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) {
                        return "hidden"
                    }
                    for (var c = 0; c < d.length; c++) {
                        if (d[c] + "Hidden" in document) {
                            return d[c] + "Hidden"
                        }
                    }
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(q), q = setTimeout(function() {
                    h = ""
                }, 3000)
            }
        }, B.flexAnimate = function(G, H, p, c, d) {
            if (B.vars.animationLoop || G === B.currentSlide || (B.direction = G > B.currentSlide ? "next" : "prev"), g && 1 === B.pagingCount && (B.direction = B.currentItem < G ? "next" : "prev"), !B.animating && (B.canAdvance(G, d) || p) && B.is(":visible")) {
                if (g && c) {
                    var m = a(B.vars.asNavFor).data("flexslider");
                    if (B.atEnd = 0 === G || G === B.count - 1, m.flexAnimate(G, !0, !1, !0, d), B.direction = B.currentItem < G ? "next" : "prev", m.direction = B.direction, Math.ceil((G + 1) / B.visible) - 1 === B.currentSlide || 0 === G) {
                        return B.currentItem = G, B.slides.removeClass(j + "active-slide").eq(G).addClass(j + "active-slide"), !1
                    }
                    B.currentItem = G, B.slides.removeClass(j + "active-slide").eq(G).addClass(j + "active-slide"), G = Math.floor(G / B.visible)
                }
                if (B.animating = !0, B.animatingTo = G, H && B.pause(), B.vars.before(B), B.syncExists && !d && k.sync("animate"), B.vars.controlNav && k.controlNav.active(), D || B.slides.removeClass(j + "active-slide").eq(G).addClass(j + "active-slide"), B.atEnd = 0 === G || G === B.last, B.vars.directionNav && k.directionNav.update(), G === B.last && (B.vars.end(B), B.vars.animationLoop || B.pause()), C) {
                    F ? (B.slides.eq(B.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), B.slides.eq(G).css({
                        opacity: 1,
                        zIndex: 2
                    }), B.wrapup(v)) : (B.slides.eq(B.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, B.vars.animationSpeed, B.vars.easing), B.slides.eq(G).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, B.vars.animationSpeed, B.vars.easing, B.wrapup))
                } else {
                    var v = A ? B.slides.filter(":first").height() : B.computedW,
                        u, s, n;
                    D ? (u = B.vars.itemMargin, n = (B.itemW + u) * B.move * B.animatingTo, s = n > B.limit && 1 !== B.visible ? B.limit : n) : s = 0 === B.currentSlide && G === B.count - 1 && B.vars.animationLoop && "next" !== B.direction ? z ? (B.count + B.cloneOffset) * v : 0 : B.currentSlide === B.last && 0 === G && B.vars.animationLoop && "prev" !== B.direction ? z ? 0 : (B.count + 1) * v : z ? (B.count - 1 - G + B.cloneOffset) * v : (G + B.cloneOffset) * v, B.setProps(s, "", B.vars.animationSpeed), B.transitions ? (B.vars.animationLoop && B.atEnd || (B.animating = !1, B.currentSlide = B.animatingTo), B.container.unbind("webkitTransitionEnd transitionend"), B.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(B.ensureAnimationEnd), B.wrapup(v)
                    }), clearTimeout(B.ensureAnimationEnd), B.ensureAnimationEnd = setTimeout(function() {
                        B.wrapup(v)
                    }, B.vars.animationSpeed + 100)) : B.container.animate(B.args, B.vars.animationSpeed, B.vars.easing, function() {
                        B.wrapup(v)
                    })
                }
                B.vars.smoothHeight && k.smoothHeight(B.vars.animationSpeed)
            }
        }, B.wrapup = function(c) {
            C || D || (0 === B.currentSlide && B.animatingTo === B.last && B.vars.animationLoop ? B.setProps(c, "jumpEnd") : B.currentSlide === B.last && 0 === B.animatingTo && B.vars.animationLoop && B.setProps(c, "jumpStart")), B.animating = !1, B.currentSlide = B.animatingTo, B.vars.after(B)
        }, B.animateSlides = function() {
            !B.animating && x && B.flexAnimate(B.getTarget("next"))
        }, B.pause = function() {
            clearInterval(B.animatedSlides), B.animatedSlides = null, B.playing = !1, B.vars.pausePlay && k.pausePlay.update("play"), B.syncExists && k.sync("pause")
        }, B.play = function() {
            B.playing && clearInterval(B.animatedSlides), B.animatedSlides = B.animatedSlides || setInterval(B.animateSlides, B.vars.slideshowSpeed), B.started = B.playing = !0, B.vars.pausePlay && k.pausePlay.update("pause"), B.syncExists && k.sync("play")
        }, B.stop = function() {
            B.pause(), B.stopped = !0
        }, B.canAdvance = function(d, c) {
            var f = g ? B.pagingCount - 1 : B.last;
            return c ? !0 : g && B.currentItem === B.count - 1 && 0 === d && "prev" === B.direction ? !0 : g && 0 === B.currentItem && d === B.pagingCount - 1 && "next" !== B.direction ? !1 : d !== B.currentSlide || g ? B.vars.animationLoop ? !0 : B.atEnd && 0 === B.currentSlide && d === f && "next" !== B.direction ? !1 : B.atEnd && B.currentSlide === f && 0 === d && "next" === B.direction ? !1 : !0 : !1
        }, B.getTarget = function(c) {
            return B.direction = c, "next" === c ? B.currentSlide === B.last ? 0 : B.currentSlide + 1 : 0 === B.currentSlide ? B.last : B.currentSlide - 1
        }, B.setProps = function(f, d, l) {
            var c = function() {
                var o = f ? f : (B.itemW + B.vars.itemMargin) * B.move * B.animatingTo,
                    m = function() {
                        if (D) {
                            return "setTouch" === d ? f : z && B.animatingTo === B.last ? 0 : z ? B.limit - (B.itemW + B.vars.itemMargin) * B.move * B.animatingTo : B.animatingTo === B.last ? B.limit : o
                        }
                        switch (d) {
                            case "setTotal":
                                return z ? (B.count - 1 - B.currentSlide + B.cloneOffset) * f : (B.currentSlide + B.cloneOffset) * f;
                            case "setTouch":
                                return z ? f : f;
                            case "jumpEnd":
                                return z ? f : B.count * f;
                            case "jumpStart":
                                return z ? B.count * f : f;
                            default:
                                return f
                        }
                    }();
                return -1 * m + "px"
            }();
            B.transitions && (c = A ? "translate3d(0," + c + ",0)" : "translate3d(" + c + ",0,0)", l = void 0 !== l ? l / 1000 + "s" : "0s", B.container.css("-" + B.pfx + "-transition-duration", l), B.container.css("transition-duration", l)), B.args[B.prop] = c, (B.transitions || void 0 === l) && B.container.css(B.args), B.container.css("transform", c)
        }, B.setup = function(f) {
            if (C) {
                B.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === f && (F ? B.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + B.vars.animationSpeed / 1000 + "s ease",
                    zIndex: 1
                }).eq(B.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == B.vars.fadeFirstSlide ? B.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(B.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : B.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(B.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, B.vars.animationSpeed, B.vars.easing)), B.vars.smoothHeight && k.smoothHeight()
            } else {
                var d, c;
                "init" === f && (B.viewport = a('<div class="' + j + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(B).append(B.container), B.cloneCount = 0, B.cloneOffset = 0, z && (c = a.makeArray(B.slides).reverse(), B.slides = a(c), B.container.empty().append(B.slides))), B.vars.animationLoop && !D && (B.cloneCount = 2, B.cloneOffset = 1, "init" !== f && B.container.find(".clone").remove(), B.container.append(k.uniqueID(B.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(k.uniqueID(B.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), B.newSlides = a(B.vars.selector, B), d = z ? B.count - 1 - B.currentSlide + B.cloneOffset : B.currentSlide + B.cloneOffset, A && !D ? (B.container.height(200 * (B.count + B.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    B.newSlides.css({
                        display: "block"
                    }), B.doMath(), B.viewport.height(B.h), B.setProps(d * B.h, "init")
                }, "init" === f ? 100 : 0)) : (B.container.width(200 * (B.count + B.cloneCount) + "%"), B.setProps(d * B.computedW, "init"), setTimeout(function() {
                    B.doMath(), B.newSlides.css({
                        width: B.computedW,
                        "float": "left",
                        display: "block"
                    }), B.vars.smoothHeight && k.smoothHeight()
                }, "init" === f ? 100 : 0))
            }
            D || B.slides.removeClass(j + "active-slide").eq(B.currentSlide).addClass(j + "active-slide"), B.vars.init(B)
        }, B.doMath = function() {
            var f = B.slides.first(),
                d = B.vars.itemMargin,
                l = B.vars.minItems,
                c = B.vars.maxItems;
            B.w = void 0 === B.viewport ? B.width() : B.viewport.width(), B.h = f.height(), B.boxPadding = f.outerWidth() - f.width(), D ? (B.itemT = B.vars.itemWidth + d, B.minW = l ? l * B.itemT : B.w, B.maxW = c ? c * B.itemT - d : B.w, B.itemW = B.minW > B.w ? (B.w - d * (l - 1)) / l : B.maxW < B.w ? (B.w - d * (c - 1)) / c : B.vars.itemWidth > B.w ? B.w : B.vars.itemWidth, B.visible = Math.floor(B.w / B.itemW), B.move = B.vars.move > 0 && B.vars.move < B.visible ? B.vars.move : B.visible, B.pagingCount = Math.ceil((B.count - B.visible) / B.move + 1), B.last = B.pagingCount - 1, B.limit = 1 === B.pagingCount ? 0 : B.vars.itemWidth > B.w ? B.itemW * (B.count - 1) + d * (B.count - 1) : (B.itemW + d) * B.count - B.w - d) : (B.itemW = B.w, B.pagingCount = B.count, B.last = B.count - 1), B.computedW = B.itemW - B.boxPadding
        }, B.update = function(d, c) {
            B.doMath(), D || (d < B.currentSlide ? B.currentSlide += 1 : d <= B.currentSlide && 0 !== d && (B.currentSlide -= 1), B.animatingTo = B.currentSlide), B.vars.controlNav && !B.manualControls && ("add" === c && !D || B.pagingCount > B.controlNav.length ? k.controlNav.update("add") : ("remove" === c && !D || B.pagingCount < B.controlNav.length) && (D && B.currentSlide > B.last && (B.currentSlide -= 1, B.animatingTo -= 1), k.controlNav.update("remove", B.last))), B.vars.directionNav && k.directionNav.update()
        }, B.addSlide = function(d, c) {
            var f = a(d);
            B.count += 1, B.last = B.count - 1, A && z ? void 0 !== c ? B.slides.eq(B.count - c).after(f) : B.container.prepend(f) : void 0 !== c ? B.slides.eq(c).before(f) : B.container.append(f), B.update(c, "add"), B.slides = a(B.vars.selector + ":not(.clone)", B), B.setup(), B.vars.added(B)
        }, B.removeSlide = function(d) {
            var c = isNaN(d) ? B.slides.index(a(d)) : d;
            B.count -= 1, B.last = B.count - 1, isNaN(d) ? a(d, B.slides).remove() : A && z ? B.slides.eq(B.last).remove() : B.slides.eq(d).remove(), B.doMath(), B.update(c, "remove"), B.slides = a(B.vars.selector + ":not(.clone)", B), B.setup(), B.vars.removed(B)
        }, k.init()
    }, a(window).blur(function(b) {
        focused = !1
    }).focus(function(b) {
        focused = !0
    }), a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, a.fn.flexslider = function(c) {
        if (void 0 === c && (c = {}), "object" == typeof c) {
            return this.each(function() {
                var f = a(this),
                    d = c.selector ? c.selector : ".slides > li",
                    g = f.find(d);
                1 === g.length && c.allowOneSlide === !0 || 0 === g.length ? (g.fadeIn(400), c.start && c.start(f)) : void 0 === f.data("flexslider") && new a.flexslider(this, c)
            })
        }
        var b = a(this).data("flexslider");
        switch (c) {
            case "play":
                b.play();
                break;
            case "pause":
                b.pause();
                break;
            case "stop":
                b.stop();
                break;
            case "next":
                b.flexAnimate(b.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                b.flexAnimate(b.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof c && b.flexAnimate(c, !0)
        }
    }
}(jQuery);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(d, j, h) {
    d instanceof String && (d = String(d));
    for (var i = d.length, g = 0; g < i; g++) {
        var c = d[g];
        if (j.call(h, c, g, d)) {
            return {
                i: g,
                v: c
            }
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, d, c) {
    b != Array.prototype && b != Object.prototype && (b[d] = c.value)
};
$jscomp.getGlobal = function(b) {
    return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(b, h, d, g) {
    if (h) {
        d = $jscomp.global;
        b = b.split(".");
        for (g = 0; g < b.length - 1; g++) {
            var c = b[g];
            c in d || (d[c] = {});
            d = d[c]
        }
        b = b[b.length - 1];
        g = d[b];
        h = h(g);
        h != g && null != h && $jscomp.defineProperty(d, b, {
            configurable: !0,
            writable: !0,
            value: h
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(b) {
    return b ? b : function(c, d) {
        return $jscomp.findInternal(this, c, d).v
    }
}, "es6", "es3");
(function(b, d, c) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports && "undefined" === typeof Meteor ? module.exports = b(require("jquery")) : b(d || c)
})(function(b) {
    var h = function(a, o, n) {
        var p = {
            invalid: [],
            getCaret: function() {
                try {
                    var f = 0,
                        l = a.get(0),
                        k = document.selection,
                        t = l.selectionStart;
                    if (k && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                        var q = k.createRange();
                        q.moveStart("character", -p.val().length);
                        f = q.text.length
                    } else {
                        if (t || "0" === t) {
                            f = t
                        }
                    }
                    return f
                } catch (s) {}
            },
            setCaret: function(f) {
                try {
                    if (a.is(":focus")) {
                        var q = a.get(0);
                        if (q.setSelectionRange) {
                            q.setSelectionRange(f, f)
                        } else {
                            var k = q.createTextRange();
                            k.collapse(!0);
                            k.moveEnd("character", f);
                            k.moveStart("character", f);
                            k.select()
                        }
                    }
                } catch (l) {}
            },
            events: function() {
                a.on("keydown.mask", function(f) {
                    a.data("mask-keycode", f.keyCode || f.which);
                    a.data("mask-previus-value", a.val());
                    a.data("mask-previus-caret-pos", p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap
                }).on(b.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", p.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        a.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    a.data("changed", !0)
                }).on("blur.mask", function() {
                    m === p.val() || a.data("changed") || a.trigger("change");
                    a.data("changed", !1)
                }).on("blur.mask", function() {
                    m = p.val()
                }).on("focus.mask", function(f) {
                    !0 === n.selectOnFocus && b(f.target).select()
                }).on("focusout.mask", function() {
                    n.clearIfNotMatch && !j.test(p.val()) && p.val("")
                })
            },
            getRegexMask: function() {
                for (var l = [], k, u, s, q, r = 0; r < o.length; r++) {
                    (k = i.translation[o.charAt(r)]) ? (u = k.pattern.toString().replace(/.{1}$|^.{1}/g, ""), s = k.optional, (k = k.recursive) ? (l.push(o.charAt(r)), q = {
                        digit: o.charAt(r),
                        pattern: u
                    }) : l.push(s || k ? u + "?" : u)) : l.push(o.charAt(r).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
                }
                l = l.join("");
                q && (l = l.replace(new RegExp("(" + q.digit + "(.*" + q.digit + ")?)"), "($1)?").replace(new RegExp(q.digit, "g"), q.pattern));
                return new RegExp(l)
            },
            destroyEvents: function() {
                a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(f) {
                var k = a.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (a[k]() !== f) {
                        a[k](f)
                    }
                    k = a
                } else {
                    k = a[k]()
                }
                return k
            },
            calculateCaretPosition: function(y) {
                var x = p.getMasked(),
                    t = p.getCaret();
                if (y !== x) {
                    var w = a.data("mask-previus-caret-pos") || 0;
                    x = x.length;
                    var u = y.length,
                        v = y = 0,
                        r = 0,
                        s = 0,
                        q;
                    for (q = t; q < x && p.maskDigitPosMap[q]; q++) {
                        v++
                    }
                    for (q = t - 1; 0 <= q && p.maskDigitPosMap[q]; q--) {
                        y++
                    }
                    for (q = t - 1; 0 <= q; q--) {
                        p.maskDigitPosMap[q] && r++
                    }
                    for (q = w - 1; 0 <= q; q--) {
                        p.maskDigitPosMapOld[q] && s++
                    }
                    t > u ? t = 10 * x : w >= t && w !== u ? p.maskDigitPosMapOld[t] || (w = t, t = t - (s - r) - y, p.maskDigitPosMap[t] && (t = w)) : t > w && (t = t + (r - s) + v)
                }
                return t
            },
            behaviour: function(q) {
                q = q || window.event;
                p.invalid = [];
                var l = a.data("mask-keycode");
                if (-1 === b.inArray(l, i.byPassKeys)) {
                    l = p.getMasked();
                    var f = p.getCaret(),
                        k = a.data("mask-previus-value") || "";
                    setTimeout(function() {
                        p.setCaret(p.calculateCaretPosition(k))
                    }, b.jMaskGlobals.keyStrokeCompensation);
                    p.val(l);
                    p.setCaret(f);
                    return p.callbacks(q)
                }
            },
            getMasked: function(P, O) {
                var L = [],
                    N = void 0 === O ? p.val() : O + "",
                    M = 0,
                    K = o.length,
                    I = 0,
                    H = N.length,
                    J = 1,
                    E = "push",
                    D = -1,
                    B = 0;
                O = [];
                if (n.reverse) {
                    E = "unshift";
                    J = -1;
                    var t = 0;
                    M = K - 1;
                    I = H - 1;
                    var G = function() {
                        return -1 < M && -1 < I
                    }
                } else {
                    t = K - 1, G = function() {
                        return M < K && I < H
                    }
                }
                for (var l; G();) {
                    var s = o.charAt(M),
                        C = N.charAt(I),
                        F = i.translation[s];
                    if (F) {
                        C.match(F.pattern) ? (L[E](C), F.recursive && (-1 === D ? D = M : M === t && M !== D && (M = D - J), t === D && (M -= J)), M += J) : C === l ? (B--, l = void 0) : F.optional ? (M += J, I -= J) : F.fallback ? (L[E](F.fallback), M += J, I -= J) : p.invalid.push({
                            p: I,
                            v: C,
                            e: F.pattern
                        }), I += J
                    } else {
                        if (!P) {
                            L[E](s)
                        }
                        C === s ? (O.push(I), I += J) : (l = s, O.push(I + B), B++);
                        M += J
                    }
                }
                P = o.charAt(t);
                K !== H + 1 || i.translation[P] || L.push(P);
                L = L.join("");
                p.mapMaskdigitPositions(L, O, H);
                return L
            },
            mapMaskdigitPositions: function(k, f, l) {
                k = n.reverse ? k.length - l : 0;
                p.maskDigitPosMap = {};
                for (l = 0; l < f.length; l++) {
                    p.maskDigitPosMap[f[l] + k] = 1
                }
            },
            callbacks: function(q) {
                var t = p.val(),
                    s = t !== m,
                    r = [t, q, a, n],
                    f = function(l, k, u) {
                        "function" === typeof n[l] && k && n[l].apply(this, u)
                    };
                f("onChange", !0 === s, r);
                f("onKeyPress", !0 === s, r);
                f("onComplete", t.length === o.length, r);
                f("onInvalid", 0 < p.invalid.length, [t, q, a, p.invalid, n])
            }
        };
        a = b(a);
        var i = this,
            m = p.val(),
            j;
        o = "function" === typeof o ? o(p.val(), void 0, a, n) : o;
        i.mask = o;
        i.options = n;
        i.remove = function() {
            var f = p.getCaret();
            i.options.placeholder && a.removeAttr("placeholder");
            a.data("mask-maxlength") && a.removeAttr("maxlength");
            p.destroyEvents();
            p.val(i.getCleanVal());
            p.setCaret(f);
            return a
        };
        i.getCleanVal = function() {
            return p.getMasked(!0)
        };
        i.getMaskedVal = function(f) {
            return p.getMasked(!1, f)
        };
        i.init = function(l) {
            l = l || !1;
            n = n || {};
            i.clearIfNotMatch = b.jMaskGlobals.clearIfNotMatch;
            i.byPassKeys = b.jMaskGlobals.byPassKeys;
            i.translation = b.extend({}, b.jMaskGlobals.translation, n.translation);
            i = b.extend(!0, {}, i, n);
            j = p.getRegexMask();
            if (l) {
                p.events(), p.val(p.getMasked())
            } else {
                n.placeholder && a.attr("placeholder", n.placeholder);
                a.data("mask") && a.attr("autocomplete", "off");
                l = 0;
                for (var q = !0; l < o.length; l++) {
                    var k = i.translation[o.charAt(l)];
                    if (k && k.recursive) {
                        q = !1;
                        break
                    }
                }
                q && a.attr("maxlength", o.length).data("mask-maxlength", !0);
                p.destroyEvents();
                p.events();
                l = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(l)
            }
        };
        i.init(!a.is("input"))
    };
    b.maskWatchers = {};
    var d = function() {
            var a = b(this),
                i = {},
                f = a.attr("data-mask");
            a.attr("data-mask-reverse") && (i.reverse = !0);
            a.attr("data-mask-clearifnotmatch") && (i.clearIfNotMatch = !0);
            "true" === a.attr("data-mask-selectonfocus") && (i.selectOnFocus = !0);
            if (g(a, f, i)) {
                return a.data("mask", new h(this, f, i))
            }
        },
        g = function(a, l, k) {
            k = k || {};
            var m = b(a).data("mask"),
                j = JSON.stringify;
            a = b(a).val() || b(a).text();
            try {
                return "function" === typeof l && (l = l(a)), "object" !== typeof m || j(m.options) !== j(k) || m.mask !== l
            } catch (i) {}
        },
        c = function(i) {
            var f = document.createElement("div");
            i = "on" + i;
            var j = i in f;
            j || (f.setAttribute(i, "return;"), j = "function" === typeof f[i]);
            return j
        };
    b.fn.mask = function(a, m) {
        m = m || {};
        var l = this.selector,
            n = b.jMaskGlobals,
            j = n.watchInterval;
        n = m.watchInputs || n.watchInputs;
        var i = function() {
            if (g(this, a, m)) {
                return b(this).data("mask", new h(this, a, m))
            }
        };
        b(this).each(i);
        l && "" !== l && n && (clearInterval(b.maskWatchers[l]), b.maskWatchers[l] = setInterval(function() {
            b(document).find(l).each(i)
        }, j));
        return this
    };
    b.fn.masked = function(f) {
        return this.data("mask").getMaskedVal(f)
    };
    b.fn.unmask = function() {
        clearInterval(b.maskWatchers[this.selector]);
        delete b.maskWatchers[this.selector];
        return this.each(function() {
            var a = b(this).data("mask");
            a && a.remove().removeData("mask")
        })
    };
    b.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    };
    b.applyDataMask = function(a) {
        a = a || b.jMaskGlobals.maskElements;
        (a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(d)
    };
    c = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && c("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    b.jMaskGlobals = b.jMaskGlobals || {};
    c = b.jMaskGlobals = b.extend(!0, {}, c, b.jMaskGlobals);
    c.dataMask && b.applyDataMask();
    setInterval(function() {
        b.jMaskGlobals.watchDataMask && b.applyDataMask()
    }, c.watchInterval)
}, window.jQuery, window.Zepto);
window.Modernizr = function(an, am, al) {
        function H(b) {
            ae.cssText = b
        }

        function Y(d, c) {
            return H(ab.join(d + ";") + (c || ""))
        }

        function W(d, c) {
            return typeof d === c
        }

        function U(d, c) {
            return !!~("" + d).indexOf(c)
        }

        function S(f, c) {
            for (var h in f) {
                var g = f[h];
                if (!U(g, "-") && ae[g] !== al) {
                    return c == "pfx" ? g : !0
                }
            }
            return !1
        }

        function Q(g, c, j) {
            for (var i in g) {
                var h = c[g[i]];
                if (h !== al) {
                    return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h
                }
            }
            return !1
        }

        function O(g, f, j) {
            var i = g.charAt(0).toUpperCase() + g.slice(1),
                h = (g + " " + Z.join(i + " ") + i).split(" ");
            return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + X.join(i + " ") + i).split(" "), Q(h, f, j))
        }
        var ak = "2.6.2",
            aj = {},
            ai = !0,
            ah = am.documentElement,
            ag = "modernizr",
            af = am.createElement(ag),
            ae = af.style,
            ad, ac = {}.toString,
            ab = " -webkit- -moz- -o- -ms- ".split(" "),
            aa = "Webkit Moz O ms",
            Z = aa.split(" "),
            X = aa.toLowerCase().split(" "),
            V = {},
            T = {},
            R = {},
            P = [],
            N = P.slice,
            M, K = function(v, u, t, s) {
                var r, q, p, o, h = am.createElement("div"),
                    g = am.body,
                    b = g || am.createElement("body");
                if (parseInt(t, 10)) {
                    while (t--) {
                        p = am.createElement("div"), p.id = s ? s[t] : ag + (t + 1), h.appendChild(p)
                    }
                }
                return r = ["&#173;", '<style id="s', ag, '">', v, "</style>"].join(""), h.id = ag, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ah.style.overflow, ah.style.overflow = "hidden", ah.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ah.style.overflow = o), !!q
            },
            J = {}.hasOwnProperty,
            I;
        !W(J, "undefined") && !W(J.call, "undefined") ? I = function(d, c) {
            return J.call(d, c)
        } : I = function(d, c) {
            return c in d && W(d.constructor.prototype[c], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var h = this;
            if (typeof h != "function") {
                throw new TypeError
            }
            var g = N.call(arguments, 1),
                f = function() {
                    if (this instanceof f) {
                        var b = function() {};
                        b.prototype = h.prototype;
                        var d = new b,
                            c = h.apply(d, g.concat(N.call(arguments)));
                        return Object(c) === c ? c : d
                    }
                    return h.apply(a, g.concat(N.call(arguments)))
                };
            return f
        }), V.touch = function() {
            var a;
            return "ontouchstart" in an || an.DocumentTouch && am instanceof DocumentTouch ? a = !0 : K(["@media (", ab.join("touch-enabled),("), ag, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
                a = b.offsetTop === 9
            }), a
        }, V.csstransforms = function() {
            return !!O("transform")
        }, V.csstransitions = function() {
            return O("transition")
        };
        for (var L in V) {
            I(V, L) && (M = L.toLowerCase(), aj[M] = V[L](), P.push((aj[M] ? "" : "no-") + M))
        }
        return aj.addTest = function(f, c) {
                if (typeof f == "object") {
                    for (var g in f) {
                        I(f, g) && aj.addTest(g, f[g])
                    }
                } else {
                    f = f.toLowerCase();
                    if (aj[f] !== al) {
                        return aj
                    }
                    c = typeof c == "function" ? c() : c, typeof ai != "undefined" && ai && (ah.className += " " + (c ? "" : "no-") + f), aj[f] = c
                }
                return aj
            }, H(""), af = ad = null,
            function(aq, ap) {
                function z(g, f) {
                    var i = g.createElement("p"),
                        h = g.getElementsByTagName("head")[0] || g.documentElement;
                    return i.innerHTML = "x<style>" + f + "</style>", h.insertBefore(i.lastChild, h.firstChild)
                }

                function y() {
                    var b = s.elements;
                    return typeof b == "string" ? b.split(" ") : b
                }

                function x(d) {
                    var c = B[d[D]];
                    return c || (c = {}, C++, d[D] = C, B[C] = c), c
                }

                function w(b, i, h) {
                    i || (i = ap);
                    if (A) {
                        return i.createElement(b)
                    }
                    h || (h = x(i));
                    var d;
                    return h.cache[b] ? d = h.cache[b].cloneNode() : F.test(b) ? d = (h.cache[b] = h.createElem(b)).cloneNode() : d = h.createElem(b), d.canHaveChildren && !G.test(b) ? h.frag.appendChild(d) : d
                }

                function v(b, l) {
                    b || (b = ap);
                    if (A) {
                        return b.createDocumentFragment()
                    }
                    l = l || x(b);
                    var k = l.frag.cloneNode(),
                        j = 0,
                        i = y(),
                        h = i.length;
                    for (; j < h; j++) {
                        k.createElement(i[j])
                    }
                    return k
                }

                function u(d, c) {
                    c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(a) {
                        return s.shivMethods ? w(a, d, c) : c.createElem(a)
                    }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + y().join().replace(/\w+/g, function(b) {
                        return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
                    }) + ");return n}")(s, c.frag)
                }

                function t(b) {
                    b || (b = ap);
                    var d = x(b);
                    return s.shivCSS && !E && !d.hasCSS && (d.hasCSS = !!z(b, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), A || u(b, d), b
                }
                var ao = aq.html5 || {},
                    G = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    F = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    E, D = "_html5shiv",
                    C = 0,
                    B = {},
                    A;
                (function() {
                    try {
                        var b = ap.createElement("a");
                        b.innerHTML = "<xyz></xyz>", E = "hidden" in b, A = b.childNodes.length == 1 || function() {
                            ap.createElement("a");
                            var c = ap.createDocumentFragment();
                            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                        }()
                    } catch (d) {
                        E = !0, A = !0
                    }
                })();
                var s = {
                    elements: ao.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: ao.shivCSS !== !1,
                    supportsUnknownElements: A,
                    shivMethods: ao.shivMethods !== !1,
                    type: "default",
                    shivDocument: t,
                    createElement: w,
                    createDocumentFragment: v
                };
                aq.html5 = s, t(ap)
            }(this, am), aj._version = ak, aj._prefixes = ab, aj._domPrefixes = X, aj._cssomPrefixes = Z, aj.testProp = function(b) {
                return S([b])
            }, aj.testAllProps = O, aj.testStyles = K, aj.prefixed = function(f, d, g) {
                return d ? O(f, d, g) : O(f, "pfx")
            }, ah.className = ah.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ai ? " js " + P.join(" ") : ""), aj
    }(this, this.document),
    function(ad, ac, ab) {
        function aa(b) {
            return "[object Function]" == P.call(b)
        }

        function Z(b) {
            return "string" == typeof b
        }

        function Y() {}

        function X(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function W() {
            var b = O.shift();
            M = 1, b ? b.t ? R(function() {
                ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), W()) : M = 0
        }

        function V(w, v, t, s, q, p, n) {
            function m(a) {
                if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, a)) {
                    "img" != w && R(function() {
                        I.removeChild(h)
                    }, 50);
                    for (var c in D[v]) {
                        D[v].hasOwnProperty(c) && D[v][c].onload()
                    }
                }
            }
            var n = n || L.errorTimeout,
                h = ac.createElement(w),
                g = 0,
                b = 0,
                x = {
                    t: t,
                    s: v,
                    e: q,
                    a: p,
                    x: n
                };
            1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                m.call(this, b)
            }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
        }

        function U(h, g, k, j, i) {
            return M = 0, g = g || "j", Z(h) ? V("c" == g ? G : H, h, g, this.i++, k, j, i) : (O.splice(this.i++, 0, h), 1 == O.length && W()), this
        }

        function T() {
            var b = L;
            return b.loader = {
                load: U,
                i: 0
            }, b
        }
        var S = ac.documentElement,
            R = ad.setTimeout,
            Q = ac.getElementsByTagName("script")[0],
            P = {}.toString,
            O = [],
            M = 0,
            K = "MozAppearance" in S.style,
            J = K && !!ac.createRange().compareNode,
            I = J ? S : Q.parentNode,
            S = ad.opera && "[object Opera]" == P.call(ad.opera),
            S = !!ac.attachEvent && !S,
            H = K ? "object" : S ? "script" : "img",
            G = S ? "script" : H,
            F = Array.isArray || function(b) {
                return "[object Array]" == P.call(b)
            },
            E = [],
            D = {},
            C = {
                timeout: function(d, c) {
                    return c.length && (d.timeout = c[0]), d
                }
            },
            N, L;
        L = function(f) {
            function c(i) {
                var i = i.split("!"),
                    h = E.length,
                    r = i.pop(),
                    q = i.length,
                    r = {
                        url: r,
                        origUrl: r,
                        prefixes: i
                    },
                    p, l, j;
                for (l = 0; l < q; l++) {
                    j = i[l].split("="), (p = C[j.shift()]) && (r = p(r, j))
                }
                for (l = 0; l < h; l++) {
                    r = E[l](r)
                }
                return r
            }

            function o(b, t, s, r, q) {
                var p = c(b),
                    l = p.autoCallback;
                p.url.split(".").pop().split("?").shift(), p.bypass || (t && (t = aa(t) ? t : t[b] || t[r] || t[b.split("/").pop().split("?")[0]]), p.instead ? p.instead(b, t, s, r, q) : (D[p.url] ? p.noexec = !0 : D[p.url] = 1, s.load(p.url, p.forceCSS || !p.forceJS && "css" == p.url.split(".").pop().split("?").shift() ? "c" : ab, p.noexec, p.attrs, p.timeout), (aa(t) || aa(l)) && s.load(function() {
                    T(), t && t(p.origUrl, q, r), l && l(p.origUrl, q, r), D[p.url] = 2
                })))
            }

            function n(x, w) {
                function v(b, h) {
                    if (b) {
                        if (Z(b)) {
                            h || (s = function() {
                                var i = [].slice.call(arguments);
                                r.apply(this, i), q()
                            }), o(b, s, w, 0, u)
                        } else {
                            if (Object(b) === b) {
                                for (g in p = function() {
                                        var a = 0,
                                            i;
                                        for (i in b) {
                                            b.hasOwnProperty(i) && a++
                                        }
                                        return a
                                    }(), b) {
                                    b.hasOwnProperty(g) && (!h && !--p && (aa(s) ? s = function() {
                                        var i = [].slice.call(arguments);
                                        r.apply(this, i), q()
                                    } : s[g] = function(i) {
                                        return function() {
                                            var a = [].slice.call(arguments);
                                            i && i.apply(this, a), q()
                                        }
                                    }(r[g])), o(b[g], s, w, g, u))
                                }
                            }
                        }
                    } else {
                        !h && q()
                    }
                }
                var u = !!x.test,
                    t = x.load || x.both,
                    s = x.callback || Y,
                    r = s,
                    q = x.complete || Y,
                    p, g;
                v(u ? x.yep : x.nope, !!t), t && v(t)
            }
            var m, k, d = this.yepnope.loader;
            if (Z(f)) {
                o(f, 0, d, 0)
            } else {
                if (F(f)) {
                    for (m = 0; m < f.length; m++) {
                        k = f[m], Z(k) ? o(k, 0, d, 0) : F(k) ? L(k) : Object(k) === k && n(k, d)
                    }
                } else {
                    Object(f) === f && n(f, d)
                }
            }
        }, L.addPrefix = function(d, c) {
            C[d] = c
        }, L.addFilter = function(b) {
            E.push(b)
        }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
            ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
        }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
            var g = ac.createElement("script"),
                f, b, n = n || L.errorTimeout;
            g.src = r;
            for (b in p) {
                g.setAttribute(b, p[b])
            }
            q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
                !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
            }, R(function() {
                f || (f = 1, q(1))
            }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
        }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
            var l = ac.createElement("link"),
                f, n = h ? W : n || Y;
            l.href = b, l.rel = "stylesheet", l.type = "text/css";
            for (f in m) {
                l.setAttribute(f, m[f])
            }
            k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
})(function(f) {
    function g(h) {
        return h
    }

    function d(h) {
        return decodeURIComponent(h.replace(a, " "))
    }

    function b(i) {
        if (i.indexOf('"') === 0) {
            i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            return c.json ? JSON.parse(i) : i
        } catch (h) {}
    }
    var a = /\+/g;
    var c = f.cookie = function(B, j, A) {
        if (j !== undefined) {
            A = f.extend({}, c.defaults, A);
            if (typeof A.expires === "number") {
                var y = A.expires,
                    s = A.expires = new Date;
                s.setDate(s.getDate() + y)
            }
            j = c.json ? JSON.stringify(j) : String(j);
            return document.cookie = [c.raw ? B : encodeURIComponent(B), "=", c.raw ? j : encodeURIComponent(j), A.expires ? "; expires=" + A.expires.toUTCString() : "", A.path ? "; path=" + A.path : "", A.domain ? "; domain=" + A.domain : "", A.secure ? "; secure" : ""].join("")
        }
        var n = c.raw ? g : d;
        var x = document.cookie.split("; ");
        var q = B ? undefined : {};
        for (var i = 0, w = x.length; i < w; i++) {
            var z = x[i].split("=");
            var k = n(z.shift());
            var r = n(z.join("="));
            if (B && B === k) {
                q = b(r);
                break
            }
            if (!B) {
                q[k] = b(r)
            }
        }
        return q
    };
    c.defaults = {};
    f.removeCookie = function(h, i) {
        if (f.cookie(h) !== undefined) {
            f.cookie(h, "", f.extend({}, i, {
                expires: -1
            }));
            return true
        }
        return false
    }
});
(function(a) {
    a.fn.rwdImageMaps = function() {
        var c = this;
        var b = function() {
            c.each(function() {
                if (typeof(a(this).attr("usemap")) == "undefined") {
                    return
                }
                var f = this,
                    d = a(f);
                a("<img />").on("load", function() {
                    var j = "width",
                        o = "height",
                        p = d.attr(j),
                        l = d.attr(o);
                    if (!p || !l) {
                        try {
                            p = d[0].naturalWidth;
                            l = d[0].naturalHeight
                        } catch (k) {}
                    }
                    if (!p || !l) {
                        var q = new Image();
                        q.src = d.attr("src");
                        if (!p) {
                            p = q.width
                        }
                        if (!l) {
                            l = q.height
                        }
                    }
                    var g = d.width() / 100,
                        m = d.height() / 100,
                        i = d.attr("usemap").replace("#", ""),
                        n = "coords";
                    a('map[name="' + i + '"]').find("area").each(function() {
                        var t = a(this);
                        if (!t.data(n)) {
                            t.data(n, t.attr(n))
                        }
                        var s = t.data(n).split(","),
                            r = new Array(s.length);
                        for (var h = 0; h < r.length; ++h) {
                            if (h % 2 === 0) {
                                r[h] = parseInt(((s[h] / p) * 100) * g)
                            } else {
                                r[h] = parseInt(((s[h] / l) * 100) * m)
                            }
                        }
                        t.attr(n, r.toString())
                    })
                }).attr("src", d.attr("src"))
            })
        };
        a(window).resize(b).trigger("resize");
        return this
    }
})(jQuery);
var formatar_decimal_br = function(a) {
    if (a == 0) {
        return "0,00"
    }
    if (!a) {
        return a
    } else {
        a = parseFloat(a)
    }
    var a = a.toFixed(2);
    var f = a.split(".");
    var g = f[0];
    var d = f[1];
    var h = g.length / 3;
    var c = g.length % 3;
    var b = [];
    var j = false;
    var i = 0;
    $.each(g.toString().split(""), function(k) {
        if (c === 0 && i === 0) {
            j = true
        }
        if (i == c && j === false) {
            b.push(".");
            i = 0;
            j = true
        }
        if (i !== 0 && i % 3 === 0) {
            b.push(".")
        }
        b.push(g[k]);
        i++
    });
    return b.join("") + "," + d
};
var getdata = function(b, a) {
    if (jQuery.support.opacity) {
        if (b[0]) {
            return b[0].getAttribute("data-" + a)
        }
    } else {
        return b.data(a)
    }
};
jQuery.mostraAlerta = function(a) {
    var b;
    var a;
    if (a.closeOthers == true) {
        $("a[data-dismiss=alert]").click()
    }
    if (a.where == "modal") {
        b = '<div class="alert alert-' + a.type + '">';
        b += '<a class="close" data-dismiss="alert">x</a>';
        b += a.message;
        b += "</div>";
        $("#modal-window .modal-body").prepend(b)
    } else {
        $("#modalAlerta").modal();
        $("#modalAlerta").addClass(a.type);
        $("#modalAlerta").attr("rel", a.type);
        $("#modalAlerta .modal-body").html(a.message)
    }
};
$(window).ready(function() {
    $(".banner:not(.lateral) .flexslider").flexslider({
        animation: "fade",
        smoothHeight: false,
        before: function(p) {
            $("img[usemap]").rwdImageMaps()
        },
        start: function(p) {
            if (p.pagingCount === 1) {
                p.directionNav.hide()
            }
        }
    });
    if (!$(".secao-banners .conteiner *").length || ($(".secao-banners .conteiner .flexslider .slides").length && (!$(".secao-banners .conteiner .flexslider .slides li").length && !$(".secao-banners .conteiner .banner.tarja").length))) {
        $(".secao-banners").addClass("empty")
    }
    if ($(".banner.vitrine .flexslider .slides").length && !$(".banner.vitrine .flexslider .slides li").length) {
        $(".banner.vitrine").addClass("hide")
    }
    $(".marcas .flexslider").flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        smoothHeight: false,
        pauseOnAction: false,
        useCSS: false,
        itemWidth: 100,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4,
        start: function(p) {
            if (p.pagingCount === 1) {
                p.directionNav.hide()
            }
        }
    });
    if ($(".listagem .produtos-carrossel").length) {
        $(".listagem .produtos-carrossel").each(function() {
            var q = Number($(this).data("produtos-linha"));
            if (window.innerWidth < 770) {
                q = 1
            }
            var p = $(this).width() / q - 10;
            $(this).find(".listagem-linha").flexslider({
                animation: "slide",
                slideshow: false,
                selector: "ul > li",
                animationLoop: true,
                controlNav: false,
                smoothHeight: false,
                useCSS: false,
                touch: false,
                prevText: "",
                nextText: "",
                itemWidth: p,
                itemMargin: 0,
                minItems: 1,
                maxItems: q,
                start: function(r) {
                    if (r.pagingCount === 1) {
                        r.directionNav.hide()
                    }
                }
            })
        })
    }
    $(".botao-favoritos").tooltip();
    $(".imagens li a").tooltip();
    $(".tab-content .tab-pane:first-child").addClass("active");
    $(".nav-tabs li:first-child").addClass("active");
    if ($("#delimitadorBarra").length) {
        var k = $("#barraTopo");
        var g = $("#delimitadorBarra").length && $("#delimitadorBarra").offset().top;

        function j() {
            var p, q = $(window).scrollTop();
            if (q > (g + $("#delimitadorBarra").height())) {
                k.fadeIn("fast");
                $(".navegacao").addClass("fixo")
            } else {
                if (q < g) {
                    k.fadeOut();
                    $(".navegacao").removeClass("fixo")
                }
            }
        }
        j();
        $(window).on("scroll", j)
    }
    $(window).resize(function() {
        $(".navegacao").width($(".coluna").width())
    }).resize();
    $(".navegacao li a").click(function(q) {
        var p = $(this);
        $("html, body").stop().animate({
            scrollTop: $(p.attr("href")).offset().top
        }, 400, "easeInOutExpo");
        q.preventDefault()
    });
    if ($(".vitrine .componente.newsletter").length) {
        var b = $(".vitrine .componente.newsletter");
        if (b.height() <= 135) {
            b.find(".vitrine .texto-newsletter").hide()
        }
    }
    $(document).on("click", ".newsletter-assinar", function(t) {
        t.preventDefault();
        var p = this;
        var r = $(this).parent().find('input[name="email"]').val();
        var q = $(this).attr("data-action");
        var s = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
        if (s.test(r)) {
            $(p).parent().parent().parent().find(".erro-newsletter").remove();
            $.post(q, {
                email: r
            }, function(v) {
                if (v.estado == "ERRO") {
                    var u = '<p class="alert alert-error erro-newsletter text-error">' + v.mensagem;
                    u += '<button type="button" class="close" data-dismiss="alert">&times;</button></p>';
                    $(p).parent().parent().parent().find(".texto-newsletter").after(u);
                    $(p).parent().parent().parent().find(".newsletter-cadastro").addClass("control-group error")
                } else {
                    $(p).parent().parent().parent().find(".newsletter-cadastro").addClass("hide");
                    $(p).parent().parent().parent().find(".newsletter-confirmacao").removeClass("hide");
                    if ($(p).parents("#barraNewsletter").length) {
                        $(p).parent().parent().parent().find(".texto-newsletter").hide()
                    }
                }
            }).fail(function() {
                var u = '<p class="alert alert-error erro-newsletter text-error">Ocorreu um erro. Tente novamente mais tarde.';
                u += '<button type="button" class="close" data-dismiss="alert">&times;</button></p>';
                $(p).parent().parent().parent().find(".texto-newsletter").after(u)
            })
        } else {
            $(this).parents().find(".newsletter-cadastro").addClass("control-group error")
        }
    });
    if ($(".adicionar-favorito").length > 0) {
        $(".adicionar-favorito").click(function(s) {
            s.preventDefault();
            var q = $(this).attr("href");
            var t = $("#AdicionarFavoritoSucessoModal");
            var u = $("#AdicionarFavoritoErroModal");
            var r = $(this);
            var p = $("#AdicionarFavoritoLogin");
            $.getJSON(q, function(w) {
                if (w.status == "sucesso") {
                    r.tooltip("destroy");
                    r.remove();
                    t.modal("show")
                } else {
                    var y = "VocÃª precisa estar logado para adicionar aos favoritos",
                        x = '<p style="font-weight: bold; font-size: 18px; text-align: center">' + w.mensagem + "</p>";
                    u.find(".modal-header .cor-secundaria").hide();
                    u.find(".modal-body").html(x);
                    if (w.mensagem == y) {
                        var v = "/conta/login?next=" + q;
                        p.attr("href", v).show();
                        u.find(".modal-footer").append(p)
                    }
                    u.modal("show")
                }
            }).fail(function() {
                window.location = q
            })
        })
    }
    ultimo_cep = "";
    $("#id_cep").keyup(function() {
        var t = 0;
        var p = $(this).val();
        var q = "";
        for (var r = 0; r < p.length; ++r) {
            var s = p.charAt(r);
            if (((s < "0") || (s > "9")) && s !== "") {
                check = false
            } else {
                q = q + s
            }
        }
        $("#id_tipo option:selected").each(function() {
            if ($(this).val() == "IN") {
                t = 1
            }
        });
        if (q.length == 8 && ultimo_cep != q && !t && CONTRATO_BRAZIL) {
            $("#formularioEndereco .formEndereco-conteiner ul").empty().removeClass("hide").addClass("loading").slideDown();
            ultimo_cep = q;
            params = {
                data: {
                    cep: $(this).val()
                },
                dataType: "json",
                type: "get",
                success: function(u) {
                    if (u.logradouro) {
                        address = u.logradouro;
                        $("#id_endereco").val(address).attr("readonly", "readonly");
                        $("#id_numero").focus()
                    } else {
                        $("#id_endereco").val("").removeAttr("readonly")
                    }
                    if (u.bairro) {
                        $("#id_bairro").val(u.bairro).attr("readonly", "readonly")
                    } else {
                        $("#id_bairro").val("").removeAttr("readonly")
                    }
                    if (u.cidade) {
                        $("#id_cidade").val(u.cidade).attr("readonly", "readonly")
                    } else {
                        $("#id_cidade").val("").removeAttr("readonly")
                    }
                    if (u.estado) {
                        $('#id_estado option[value="' + u.estado + '"]').attr("selected", "selected");
                        $("#id_estado").attr("readonly", "readonly")
                    } else {
                        $("#id_estado").val("").removeAttr("readonly")
                    }
                    $("#formularioEndereco .formEndereco-conteiner ul").removeClass("loading")
                },
                error: function() {
                    $("#formularioEndereco .formEndereco-conteiner ul").removeClass("loading")
                },
                ttl: 3600
            };
            $.ajax("//api.awsli.com.br/v2/cep", params)
        }
    });
    $("#formCadastroCompleto").submit(function() {
        if ($("input[name=tipo]:checked").val() == "PF") {
            if (CONTRATO_BRAZIL) {
                if ($("#id_cpf").val().length < 14) {
                    $("#id_cpf").parent().parent().addClass("error");
                    if (!$("#id_cpf").parent().find(".help-inline").length) {
                        $("#id_cpf").parent().append('<span class="help-inline">Preencha o campo cpf corretamente.</span>')
                    }
                    $("#id_cpf").focus();
                    return false
                }
            }
        }
        if ($("input[name=tipo]:checked").val() == "PJ") {
            if ($("#id_cnpj").val().length < 18) {
                $("#id_cnpj").parent().parent().addClass("error");
                if (!$("#id_cnpj").parent().find(".help-inline").length) {
                    $("#id_cnpj").parent().append('<span class="help-inline">Preencha o campo CNPJ corretamente.</span>')
                }
                $("#id_cnpj").focus();
                return false
            }
            if ($("#id_razao_social").val().length < 5) {
                $("#id_razao_social").parent().parent().addClass("error");
                if (!$("#id_razao_social").parent().find(".help-inline").length) {
                    $("#id_razao_social").parent().append('<span class="help-inline">Preencha o campo RazÃ£o Social corretamente.</span>')
                }
                $("#id_razao_social").focus();
                return false
            }
        }
    });
    var o = "#id_telefone, #id_telefone_celular, #id_telefone_comercial, #id_telefone_principal, .input-telefone";
    var l = function(p) {
            return p.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009"
        },
        n = {
            onKeyPress: function(s, r, q, p) {
                q.mask(l.apply({}, arguments), p)
            },
            clearIfNotMatch: true
        };
    setTimeout(function() {
        $("#id_data_nascimento, .input-data-nascimento").mask("00/00/0000", {
            clearIfNotMatch: true
        });
        if (CONTRATO_BRAZIL) {
            $("#id_cpf, .input-cpf").mask("000.000.000-00", {
                clearIfNotMatch: true
            });
            $("#id_cep, .input-cep").mask("00000-000", {
                clearIfNotMatch: true
            });
            $("#id_cnpj, .input-cnpj").mask("00.000.000/0000-00", {
                clearIfNotMatch: true
            });
            $(o).mask(l, n)
        }
    }, 0);
    limpar_form = function(p) {
        p.find("input[type=text]").val("");
        p.find("input[type=email]").val("");
        p.find("textarea").val("")
    };
    $("#modalContato").on("show", function() {
        window.location.hash = "contato";
        $("#modalContato .modal-body").load("/contato/popup", function(q, p, r) {
            if (p == "error") {
                $("#modalContato .contato-loading").html("NÃ£o foi possÃ­vel carregar o formulÃ¡rio. Tente novamente.")
            }
        })
    });
    $("#modalContato").on("hide", function() {
        window.location.hash = ""
    });
    $("#modalContato").on("submit", "form", function(p) {
        p.preventDefault();
        var w = $(this);
        var v = w.parents("#modalContato");
        var x = {};
        w.find("#id_hostname").val(location.hostname);
        x.nome = w.find("#id_nome").val();
        x.email = w.find("#id_email").val();
        x.telefone = w.find("#id_telefone").val();
        x.numero_pedido = w.find("#id_numero_pedido").val();
        x.mensagem = w.find("#id_mensagem").val();
        x.hostname = w.find("#id_hostname").val();
        x.politica_privacidade = w.find("#id_politica_privacidade").is(":checked");
        var q = v.find("#g-recaptcha-response").val();
        var t = function() {
            v.find(".alert").remove()
        };
        var r = function(y, z) {
            var A = $("<div>").addClass("alert alert-" + y);
            A.html(z).insertBefore(v.find(".modal-body"))
        };
        var s = function(y) {
            r("error", y)
        };
        var u = function(y) {
            r("success", y);
            v.find(".modal-body").fadeOut();
            v.find(".modal-footer").fadeOut()
        };
        t();
        if (!x.nome || !x.email || !x.mensagem) {
            msg = "Nome, E-mail e Mensagem sÃ£o campos obrigatÃ³rios.";
            s(msg)
        } else {
            if (w.find("#id_politica_privacidade").length && !x.politica_privacidade) {
                msg = "VocÃª nÃ£o aceitou as polÃ­ticas de privacidade.";
                s(msg)
            } else {
                if (!q) {
                    msg = "Marque a verificaÃ§Ã£o reCAPTCHA.";
                    s(msg)
                } else {
                    x.json = true;
                    x["g-recaptcha-response"] = q;
                    $.post("/contato/popup/", x, function(y) {
                        if (y.estado == "SUCESSO") {
                            u(y.mensagem);
                            limpar_form(v)
                        } else {
                            $.each(y.errors, function(A, z) {
                                $("#id_" + A).parents(".control-group").addClass("error")
                            });
                            s(y.mensagem)
                        }
                    }, "json")
                }
            }
        }
    });
    if (window.location.hash.indexOf("contato") != -1) {
        $("#modalContato").modal("show")
    }
    var d;
    $(window).resize(function() {
        if (d != $(".atalhos-mobile").css("display")) {
            if ($(".atalhos-mobile").css("display") == "block") {
                $(".busca input").attr("placeholder", "Buscar...");
                $(".menu.superior").appendTo(".busca-mobile");
                $(".menu.lateral").appendTo(".sem-menu .busca-mobile");
                $(".info-principal-produto").prependTo(".secao-principal .produto");
                $(".zm-viewer").addClass("hidden-phone");
                $(".zm-handler").addClass("hidden-phone");
                $(".botao-comprar").attr("data-placement", "top");
                if (!$(".busca-mobile .menu .nivel-um *").length) {
                    $(".conteudo-topo .busca-mobile").addClass("hide-menu")
                } else {
                    $(".conteudo-topo .busca-mobile").removeClass("hide-menu")
                }
                if ($(".coluna .lateral.filtro-coluna").length && $(".ordenar-listagem.topo").length && !$(".ordenar-listagem.topo .span6 .filtro-mobile").length) {
                    $(".ordenar-listagem.topo .span6").first().append('<div class="filtro-mobile"></div><div class="filtro-mobile-itens"></div>');
                    $(".ordenar-listagem.topo .span6 .filtro-mobile").prepend('<button class="btn">Filtrar <i class="icon-caret-down"></i></button>');
                    $(".coluna .lateral.filtro-coluna").each(function() {
                        $(".ordenar-listagem.topo .span6 .filtro-mobile-itens").append($(this).clone())
                    })
                }
            } else {
                $(".busca input").attr("placeholder", "Digite o que vocÃª procura");
                $(".menu.superior").appendTo("#cabecalho .conteiner");
                $(".busca-mobile .menu.lateral").prependTo(".esquerda .row-fluid:first-child");
                $(".info-principal-produto").prependTo(".produto div.principal");
                $(".zm-viewer").removeClass("hidden-phone");
                $(".zm-handler").removeClass("hidden-phone");
                $(".botao-comprar").attr("data-placement", "left");
                if ($(".ordenar-listagem.topo .span6 .filtro-mobile").length || $(".ordenar-listagem.topo .span6 .filtro-mobile-itens").length) {
                    $(".ordenar-listagem.topo .span6 .filtro-mobile").remove();
                    $(".ordenar-listagem.topo .span6 .filtro-mobile-itens").remove()
                }
            }
        }
        d = $(".atalhos-mobile").css("display")
    }).resize();
    $(".atalho-menu").click(function() {
        $(".menu .nivel-um").toggleClass("active")
    });
    $(".ordenar-listagem.topo").on("click", ".filtro-mobile .btn", function() {
        $(".filtro-mobile-itens").toggleClass("active")
    });
    if (/Edge\/|Trident\/|MSIE /.test(window.navigator.userAgent)) {
        if ($(".filtro.lista ul li label").length && $(".filtro.lista ul li label").parent("a").length) {
            $(".filtro.lista ul li label").click(function() {
                location.search = $(this).parent("a").attr("href")
            })
        }
    }
    $(".botao-login").click(function() {
        $(".formulario-login").toggleClass("active")
    });
    var f = $(window),
        a = $(".acoes-flutuante"),
        c = $("#DelimiterFloat").length && $("#DelimiterFloat").offset().top;
    h();
    f.on("scroll", h);

    function h() {
        var p, q = f.scrollTop();
        if (q > (c + $("#DelimiterFloat").height())) {
            a.stop(true, true).fadeIn()
        } else {
            if (q < c) {
                a.stop(true, true).fadeOut()
            }
        }
    }
    $(".acoes-flutuante .close_float").click(function() {
        if ($("i", this).hasClass("icon-remove")) {
            $(".acoes-flutuante").animate({
                right: "-" + ($(".acoes-flutuante").outerWidth() + 2) + "px"
            }, 500, function() {
                $(this).addClass("closed")
            });
            $("i", this).removeClass("icon-remove").addClass("icon-arrow-left")
        } else {
            if ($("i", this).hasClass("icon-arrow-left")) {
                $(".acoes-flutuante").animate({
                    right: "-1px"
                }, 500);
                $("i", this).removeClass("icon-arrow-left").addClass("icon-remove");
                $(this).parent().removeClass("closed")
            }
        }
    });
    if ($(".acoes-flutuante").length) {
        if ($(".produto .info-principal-produto .nome-produto").length) {
            $(".acoes-flutuante").prepend('<span class="nome-produto titulo cor-secundaria">' + $(".produto .info-principal-produto .nome-produto").text() + "</span>")
        }
        if ($(".produto .conteiner-imagem img").length) {
            $(".acoes-flutuante").prepend('<div class="image"><img src="' + $(".produto .conteiner-imagem img").attr("src").replace("380x380", "210x210") + '" /></div>')
        }
    }
    $("[rel=popover]").popover();
    $(".navegacao").scrollspy();
    window.query_cache = {};
    if ($(".alert:contains('Seu usuÃ¡rio foi submetido a aprovaÃ§Ã£o de nossa equipe')").length) {
        $.mostraAlerta({
            type: "warning",
            message: '<span style="font-size: 15px; line-height: 20px;">' + $(".alert:contains('Seu usuÃ¡rio foi submetido a aprovaÃ§Ã£o de nossa equipe')").text().replace("Ã—", "") + "</span>",
            closeOthers: true
        });
        $(".alert:contains('Seu usuÃ¡rio foi submetido a aprovaÃ§Ã£o de nossa equipe')").hide()
    }
    $(".listagem .listagem-item .imagem-produto.has-zoom").parent().hover(function() {
        if (!$(this).find(".imagem-principal").data("imagem-caminho") || $(window).width() <= 750) {
            $(this).find(".imagem-produto").removeClass("has-zoom")
        } else {
            if (!$(this).find(".imagem-zoom").length) {
                $(this).find(".imagem-produto").append('<img src="' + $(this).find(".imagem-principal").data("imagem-caminho") + '" class="imagem-zoom" />')
            } else {
                if (!$(this).find(".imagem-produto").hasClass("has-zoom") && $(this).find(".imagem-zoom").length) {
                    $(this).find(".imagem-produto").addClass("has-zoom")
                }
            }
        }
    });
    $(document).on("click", ".botao-comprar-ajax", function(q) {
        q.preventDefault();
        var p = $(this);
        $(".botao-comprar-ajax").button("loading");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(r) {
            $.fancybox.showLoading();
            $.fancybox.helpers.overlay.open();
            if (r.status !== "sucesso") {
                $("#comprar-ajax-status .erro .msg").text(r.mensagem);
                $("#comprar-ajax-status .sucesso").hide();
                $("#comprar-ajax-status .erro").show();
                $.fancybox.helpers.overlay.close();
                $.fancybox({
                    type: "inline",
                    href: "#comprar-ajax-status"
                })
            } else {
                $("#comprar-ajax-status .sucesso").show();
                $("#comprar-ajax-status .erro").hide();
                $("#carrinho-mini").load("/carrinho/mini", function() {
                    $.fancybox.helpers.overlay.close();
                    $.fancybox({
                        type: "inline",
                        href: "#comprar-ajax-status",
                        maxWidth: 800
                    });
                    atualizarCarrinhoMini()
                })
            }
        }).fail(function(r) {
            window.location = p.attr("href")
        }).always(function() {
            $(".botao-comprar-ajax").button("reset")
        })
    });
    $(document).on("click", "#comprar-ajax-status #carrinho-mini .table-body .excluir a, #comprar-ajax-status #carrinho-mini .table-body .quantidade a:not(.atualizar-quantidade), #comprar-ajax-status #carrinho-mini .cupom-sucesso a", function(r) {
        r.preventDefault();
        $.fancybox.showLoading();
        var p = $(this);
        var q = $(this).attr("href");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(s) {
            $("#carrinho-mini").load("/carrinho/mini", function() {
                $.fancybox.hideLoading();
                atualizarCarrinhoMini()
            })
        }).fail(function(s) {
            window.location = q
        }).always(function() {})
    });
    $(document).on("submit", "#comprar-ajax-status #carrinho-mini .table-body form", function(q) {
        q.preventDefault();
        $.fancybox.showLoading();
        var p = $(this);
        $.ajax({
            url: $(this).attr("action").replace("https:", ""),
            dataType: "json",
            method: "POST",
            data: {
                quantidade: parseInt($(this).find("input").val())
            }
        }).done(function(r) {
            $("#carrinho-mini").load("/carrinho/mini", function() {
                $.fancybox.hideLoading();
                atualizarCarrinhoMini()
            })
        }).fail(function(r) {
            window.location = p.submit()
        }).always(function() {})
    });

    function m(t, p, q, s, r) {
        return {
            url: t + "/autocomplete/" + q,
            dataType: "json",
            data: {
                q: s,
                size: 6,
                ttl: 300
            },
            success: function(u) {
                r($.map(u.hits, function(v) {
                    if (v.imagens) {
                        return {
                            label: '<span class="img"><img src="' + p + "50x50/" + v.imagens[0].caminho + '?type=trim" /></span>' + v.nome,
                            value: v.nome,
                            url: v.url
                        }
                    } else {
                        return {
                            label: '<span class="img"></span>' + v.nome,
                            value: v.nome,
                            url: v.url
                        }
                    }
                }))
            }
        }
    }

    function i(t, p, q, s, r) {
        return {
            url: t + "/autocomplete",
            headers: {
                "x-store-id": q
            },
            dataType: "json",
            data: {
                q: s,
                page: {
                    size: 6
                }
            },
            success: function(u) {
                r($.map(u.data, function(v) {
                    if (v.images && v.images.length) {
                        return {
                            label: '<span class="img"><img src="' + p + "50x50/" + v.images[0].path + '?type=trim" /></span>' + v.name,
                            value: v.name,
                            url: v.url
                        }
                    } else {
                        return {
                            label: '<span class="img"></span>' + v.name,
                            value: v.name,
                            url: v.url
                        }
                    }
                }))
            }
        }
    }
    $("#cabecalho input#auto-complete, #barraTopo .busca input, .conteudo-topo.visible-phone #form-buscar input").autocomplete({
        delay: 300,
        minLength: 5,
        source: function(r, p) {
            var q = API_PRODUCT_ENABLED ? i : m;
            $.ajax(q(API_PRODUCT_URL, MEDIA_URL, LOJA_ID, r.term, p))
        },
        open: function(p, q) {
            $(this).autocomplete("widget").css("z-index", 100000);
            $(this).autocomplete("widget").width($(this).parent().width() - 2)
        },
        select: function(p, q) {
            window.location = q.item.url
        }
    });
    $("#cabecalho input#auto-complete, #barraTopo .busca input, .conteudo-topo.visible-phone #form-buscar input").each(function() {
        $(this).data("ui-autocomplete")._renderItem = function(p, q) {
            return $("<li></li>").data("item.autocomplete", q).append("<a>" + q.label + "</a>").appendTo(p)
        }
    });
    produtosCarrinho();
    if ($("#login-content").length) {
        $(".identificacao .submit-email").click(function() {
            if ($(".pagina-carrinho.carrinho-checkout").length) {
                calcularTotal()
            }
            $(".identificacao .submit-email").button("loading");
            var p = $(".identificacao #id_email_login").val();
            p = p.replace(/\s+/, "");
            $(".identificacao #id_email_login").val(p);
            if (!validateEmail(p)) {
                $(".identificacao .submit-email").button("reset");
                $(".identificacao #id_email_login").parent().parent().addClass("error");
                return false
            } else {
                $(".identificacao #id_email_login").parent().parent().removeClass("error")
            }
            $.getJSON("/conta/verificar_email", {
                email: p
            }, function(q) {
                if (q.situacao == "SUCESSO") {
                    exibirCadastro()
                } else {
                    if (q.situacao == "DESATIVADO") {
                        exibirAlerta(q.mensagem)
                    } else {
                        exibirLogin()
                    }
                }
                $(".identificacao .submit-email").button("reset")
            }).fail(function() {
                exibirCadastro()
            })
        });
        $("#formularioLogin").submit(function() {
            if ($(".identificacao .submit-email").is(":visible")) {
                $(".identificacao .submit-email").click();
                return false
            }
        });
        $(".identificacao .fazer-cadastro").click(function() {
            exibirCadastro()
        });
        $(".fazer-login-btn").click(function() {
            exibirLogin()
        });
        $(document).on("click", ".pagina-carrinho .finalizar-compra .acao-editar .botao.principal.grande, #comprar-ajax-status .ir-carrinho.hidden-phone", function(p) {
            p.preventDefault();
            $.fancybox({
                type: "inline",
                content: $("#login-content")
            })
        })
    }
    $.extend($.fancybox.defaults, {
        beforeShow: function(q, p) {
            if ($(".fancybox-inner > div").attr("id")) {
                $(".fancybox-wrap").addClass("modal-" + $(".fancybox-inner > div").attr("id"))
            }
        }
    });
    $(document).on("click", ".avise-me-pop-cadastro", function(r) {
        r.preventDefault();
        var p = $(this);
        var q = $(this).attr("href");
        $("#avise-me-cadastro .avise-me-form").attr("action", q);
        $.fancybox({
            type: "inline",
            href: "#avise-me-cadastro",
            maxWidth: 400
        })
    });
    $(".avise-me .avise-me-form").submit(function(u) {
        u.preventDefault();
        var q = $(this);
        var t = q.parents(".avise-me");
        var p = {};
        var v = function() {
            t.find(".alert").remove()
        };
        var s = function(w, x) {
            var y = $("<div>").addClass("alert alert-" + w);
            t.prepend(y.html(x))
        };
        var r = function(w) {
            s("error", w)
        };
        v();
        p.nome = q.find(".avise-nome").val();
        p.email = q.find(".avise-email").val();
        if (!p.email) {
            msg = "Preencha seu e-mail corretamente";
            r(msg)
        } else {
            $.ajax({
                url: q.attr("action").replace("https:", ""),
                dataType: "json",
                data: p,
                method: "POST"
            }).done(function(w) {
                if (w.estado != "ERRO") {
                    aviseMeSucesso()
                } else {
                    r("E-mail invÃ¡lido. Tente novamente.")
                }
            }).fail(function(w) {
                r("Falha ao realizar o cadastro. Tente novamente mais tarde.")
            }).always(function() {
                limpar_form(t)
            })
        }
    });
    if ($(".script-enviou").length && typeof CLIENT_TOKEN === "undefined") {
        $("body").append($(".script-enviou").first().html().replace("<!-- ", "").replace(" -->", ""))
    }
});
$(document).ready(function() {
    setTimeout(function() {
        $("img[usemap]").rwdImageMaps()
    }, 1);
    $("body").on("contextmenu", "img", function(a) {
        return false
    });
    $(".listagem .listagem-item .imagem-produto.has-zoom").each(function() {
        if (!$(this).find(".imagem-principal").data("imagem-caminho") || $(window).width() <= 750) {
            $(this).removeClass("has-zoom")
        }
    })
});
validateEmail = function(a) {
    var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return b.test(a)
};

function atualizarCarrinho(a) {
    if (a || a == 0) {
        $(".carrinho > a .qtd-carrinho").text(a)
    }
    if (a > 0) {
        $(".carrinho > a .qtd-carrinho, .carrinho > a span:not(.vazio-text)").show();
        $(".carrinho.vazio > a .vazio-text").hide();
        $(".carrinho.vazio").removeClass("vazio")
    } else {
        $(".carrinho > a .qtd-carrinho, .carrinho > a span:not(.vazio-text)").hide();
        $(".carrinho > a .vazio-text").css("display", "block");
        $(".carrinho").addClass("vazio")
    }
    if (a != 1) {
        $(".conteudo-topo .carrinho > a span span.cor-secundaria").text($(".conteudo-topo .carrinho > a span span.cor-secundaria").text().replace("Produto adicionado", "Produtos adicionados"));
        $("#barraTopo .carrinho > a span b.cor-secundaria span").text($("#barraTopo .carrinho > a span b.cor-secundaria span").text().replace("Produto ", "Produtos "))
    } else {
        $(".conteudo-topo .carrinho > a span span.cor-secundaria").text($(".conteudo-topo .carrinho > a span span.cor-secundaria").text().replace("Produtos adicionados", "Produto adicionado"));
        $("#barraTopo .carrinho > a span b.cor-secundaria span").text($("#barraTopo .carrinho > a span b.cor-secundaria span").text().replace("Produtos ", "Produto "))
    }
    if (a) {
        $(".carrinho-interno-ajax:first").load("/carrinho/listar_produtos", function() {
            $(".carrinho-interno-ajax:not(:first)").html($(".carrinho-interno-ajax:first").html())
        })
    }
}

function atualizarCarrinhoMini() {
    $("#comprar-ajax-status #carrinho-mini [name=quantidade]").keyup(function(c) {
        $(this).parent().find(".atualizar-quantidade").slideDown()
    });
    $("#comprar-ajax-status #carrinho-mini [name=quantidade]").focusout(function(c) {
        $(this).parent().find(".atualizar-quantidade").slideUp()
    });
    if ($("#carrinho-mini .scroll").length) {
        var b = $("#carrinho-mini .scroll").width() - $("#carrinho-mini .scroll").get(0).scrollWidth;
        if (b) {
            $("#comprar-ajax-status #carrinho-mini .table-header th:last-child").attr("width", parseInt($("#comprar-ajax-status #carrinho-mini .table-header th:last-child").attr("width")) + b);
            $("#comprar-ajax-status #carrinho-mini .table-footer td:last-child").attr("width", parseInt($("#comprar-ajax-status #carrinho-mini .table-footer td:last-child").attr("width")) + b);
            $("#comprar-ajax-status #carrinho-mini .scroll").addClass("shadow")
        }
    }
    if ($("#carrinho-mini .table-body td.coluna-preco").length) {
        var a = $("#carrinho-mini .table-body td.coluna-preco").width();
        if (a > 100) {
            $("#carrinho-mini .table-header th.coluna-preco").width(a + 1)
        }
    }
    $.fancybox.update()
}

function comprar_ajax_valido(b, c) {
    var a = $("#comprar-ajax-status .sucesso .buttons .ir-carrinho");
    if (b) {
        a.removeClass("desativo").tooltip("destroy");
        a.unbind("click")
    } else {
        a.addClass("desativo").tooltip("destroy").tooltip({
            title: c,
            placement: "left",
            container: ".fancybox-wrap"
        });
        a.click(function() {
            return false
        })
    }
}

function produtosCarrinho() {
    if ($(".listagem").length) {
        $(".listagem .produto-adicionado").removeClass("produto-adicionado");
        $(".listagem .produto-adicionado .bandeiras-produto .bandeira-carrinho").remove();
        if (CARRINHO_PRODS.length) {
            for (var a = 0; a < CARRINHO_PRODS.length; a++) {
                $(".listagem .prod-id-" + CARRINHO_PRODS[a]).addClass("produto-adicionado");
                if (!$(".listagem .prod-id-" + CARRINHO_PRODS[a] + " .bandeiras-produto .bandeira-carrinho").length) {
                    $(".listagem .prod-id-" + CARRINHO_PRODS[a] + " .bandeiras-produto").prepend('<span class="adicionado-carrinho bandeira-carrinho">produto adicionado</span>')
                }
            }
        }
    }
}

function exibirCadastro() {
    if ($(".pagina-carrinho.carrinho-checkout").length) {
        $("#formularioCheckout .row-fluid.hide").slideDown();
        if (window.innerWidth > 770) {
            $(".tabela-carrinho .tr-checkout-frete, .tabela-carrinho .tr-checkout-total").slideDown()
        }
        $(".identificacao, .checkout-alerta-seguro").slideUp();
        if ($(".identificacao #id_email_login").val()) {
            $("#id_email").val($(".identificacao #id_email_login").val())
        }
        $("#userExtraInfo #tipoFisica").addClass("in");
        $("#id_senha").focus();
        resize();
        selecionar_pagamento_padrao()
    } else {
        var a = encodeURIComponent($(".identificacao #id_email_login").val());
        window.location = "/checkout/?email=" + a
    }
}

function exibirLogin() {
    $(".identificacao").slideDown();
    $("#formularioCheckout .row-fluid.hide").slideUp();
    $(".identificacao .login-data").slideDown(function() {
        $.fancybox.update()
    });
    $(".identificacao .submit-email").hide();
    $(".identificacao .identificacao-title").fadeOut(300, function() {
        $(this).text("Identifique-se para continuar").fadeIn(300)
    });
    $(".identificacao .email-box").animate({
        marginRight: 0
    }, 500);
    if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
        $(".identificacao #id_senha_login").focus()
    }
}

function aviseMeSucesso() {
    $.fancybox({
        type: "inline",
        href: "#avise-me-sucesso",
        maxWidth: 400
    })
}

function exibirAlerta(b) {
    var a = '<div class="alert alert-danger alert-geral" data-type="danger"><button type="button" class="close" data-dismiss="alert">Ã—</button>' + b + "</div>";
    $(".identificacao .identificacao-inner").prepend(a)
}

function getUTMCampaign() {
    var c = document.location.search.substring(1).split("&");
    for (var b = c.length - 1; b >= 0; b--) {
        var a = c[b].split("=");
        if (a[0] === "utm_campaign" && a[1]) {
            return a[1]
        }
    }
}

function createUTMCampaignCookie(a) {
    if (!$.cookie("utm_campaign")) {
        $.cookie("utm_campaign", a, {
            expires: 7,
            path: "/"
        })
    }
}
$(function() {
    var a = getUTMCampaign();
    createUTMCampaignCookie(a)
});