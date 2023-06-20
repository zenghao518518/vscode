(function() {
    var k, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    }, ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    function ea() {
        ea = function() {};
        ca.Symbol || (ca.Symbol = fa);
    }
    var fa = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++;
        };
    }();
    function ha() {
        ea();
        var a = ca.Symbol.iterator;
        a || (a = ca.Symbol.iterator = ca.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ia(this);
            }
        });
        ha = function() {};
    }
    function ia(a) {
        var b = 0;
        return ka(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        });
    }
    function ka(a) {
        ha();
        a = {
            next: a
        };
        a[ca.Symbol.iterator] = function() {
            return this;
        };
        return a;
    }
    function la(a, b) {
        ha();
        a instanceof String && (a += "");
        var c = 0, d = {
            next: function() {
                if (c < a.length) {
                    var e = c++;
                    return {
                        value: b(e, a[e]),
                        done: !1
                    };
                }
                d.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    };
                };
                return d.next();
            }
        };
        d[Symbol.iterator] = function() {
            return d;
        };
        return d;
    }
    function na(a, b) {
        if (b) {
            var c = ca;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    na("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return la(this, function(a) {
                return a;
            });
        };
    });
    na("Math.cosh", function(a) {
        if (a) return a;
        var b = Math.exp;
        return function(a) {
            a = Number(a);
            return (b(a) + b(-a)) / 2;
        };
    });
    na("Math.log2", function(a) {
        return a ? a : function(a) {
            return Math.log(a) / Math.LN2;
        };
    });
    na("Array.prototype.values", function(a) {
        return a ? a : function() {
            return la(this, function(a, c) {
                return c;
            });
        };
    });
    na("Object.is", function(a) {
        return a ? a : function(a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
        };
    });
    na("Number.EPSILON", function() {
        return Math.pow(2, -52);
    });
    var oa = this;
    function t(a, b) {
        a = a.split(".");
        var c = oa;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    }
    function pa(a, b) {
        this.sa = a;
        this.b = b;
    }
    function qa(a, b) {
        if (!a) throw a = "Assertion failed", b && (a += ": " + b), Error(a);
    }
    var ra = "function" === typeof Object.assign ? Object.assign : function(a, b) {
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f) for (var g in f) f.hasOwnProperty(g) && (c[g] = f[g]);
        }
        return c;
    };
    function sa(a) {
        for (var b in a) delete a[b];
    }
    function ta(a) {
        function b(b) {
            var c = a.listener, e = a.bindTo || a.target;
            a.Td && va(a);
            return c.call(e, b);
        }
        return a.Sd = b;
    }
    function wa(a, b) {
        return (a = a.Lh) ? a[b] : void 0;
    }
    function xa(a, b) {
        var c = window, d = c.Lh;
        d || (d = c.Lh = {});
        var e = d;
        (d = e.resize) || (d = e.resize = []);
        a: {
            e = d;
            for (var f, g = 0, h = e.length; g < h; ++g) if (f = e[g], f.listener === a && f.bindTo === b) {
                e = f;
                break a;
            }
            e = void 0;
        }
        e ? e.Td = !1 : (e = {
            bindTo: b,
            Td: !1,
            listener: a,
            target: c,
            type: "resize"
        }, c.addEventListener("resize", ta(e)), d.push(e));
        return e;
    }
    function va(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.Sd);
            var b = wa(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                if (0 === b.length) {
                    b = a.target;
                    c = a.type;
                    var d = wa(b, c);
                    if (d) {
                        for (var e = 0, f = d.length; e < f; ++e) b.removeEventListener(c, d[e].Sd), sa(d[e]);
                        d.length = 0;
                        if (d = b.Da) delete d[c], 0 === Object.keys(d).length && delete b.Da;
                    }
                }
            }
            sa(a);
        }
    }
    var za, Aa;
    function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a;
    }
    function Ba() {}
    function x(a) {
        return a.hq || (a.hq = ++Ca);
    }
    var Ca = 0;
    function Da(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    }
    function Ea(a, b) {
        return 0 <= a.indexOf(b);
    }
    function Fa(a, b, c) {
        var d = a.length;
        if (a[0] <= b) return 0;
        if (!(b <= a[d - 1])) if (0 < c) for (c = 1; c < d; ++c) {
            if (a[c] < b) return c - 1;
        } else if (0 > c) for (c = 1; c < d; ++c) {
            if (a[c] <= b) return c;
        } else for (c = 1; c < d; ++c) {
            if (a[c] == b) return c;
            if (a[c] < b) return a[c - 1] - b < b - a[c] ? c - 1 : c;
        }
        return d - 1;
    }
    function Ga(a, b) {
        var c = Array.isArray(b) ? b : [ b ], d = c.length;
        for (b = 0; b < d; b++) a[a.length] = c[b];
    }
    function Ha(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++) if (d = a[e], b(d, e, a)) return d;
        return null;
    }
    function Ia(a, b) {
        var c = a.length;
        if (c !== b.length) return !1;
        for (var d = 0; d < c; d++) if (a[d] !== b[d]) return !1;
        return !0;
    }
    function Ka(a) {
        var b = La, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++) d[e] = {
            index: e,
            value: a[e]
        };
        d.sort(function(a, c) {
            return b(a.value, c.value) || a.index - c.index;
        });
        for (e = 0; e < a.length; e++) a[e] = d[e].value;
    }
    function Ma(a, b) {
        var c;
        return a.every(function(d, e) {
            c = e;
            return !b(d, e, a);
        }) ? -1 : c;
    }
    function Na(a, b) {
        var c = b || Da;
        return a.every(function(b, e) {
            if (0 === e) return !0;
            b = c(a[e - 1], b);
            return !(0 < b || 0 === b);
        });
    }
    function Oa(a) {
        this.message = "Assertion failed. See https://openlayers.org/en/latest/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError";
    }
    v(Oa, Error);
    function Pa(a, b) {
        if (!a) throw new Oa(b);
    }
    function Qa(a) {
        for (var b = Ra(), c = 0, d = a.length; c < d; ++c) Sa(b, a[c]);
        return b;
    }
    function Ta(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, 
        c) : [ a[0] - b, a[1] - b, a[2] + b, a[3] + b ];
    }
    function Ua(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice();
    }
    function Va(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a;
    }
    function Xa(a, b) {
        return Ya(a, b[0], b[1]);
    }
    function $a(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3];
    }
    function Ya(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3];
    }
    function ab(a, b) {
        var c = a[1], d = a[2], e = a[3], f = b[0];
        b = b[1];
        var g = 0;
        f < a[0] ? g |= 16 : f > d && (g |= 4);
        b < c ? g |= 8 : b > e && (g |= 2);
        0 === g && (g = 1);
        return g;
    }
    function Ra() {
        return [ Infinity, Infinity, -Infinity, -Infinity ];
    }
    function bb(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [ a, b, c, d ];
    }
    function cb(a) {
        return bb(Infinity, Infinity, -Infinity, -Infinity, a);
    }
    function db(a, b) {
        var c = a[0];
        a = a[1];
        return bb(c, a, c, a, b);
    }
    function eb(a, b, c, d, e) {
        e = cb(e);
        return fb(e, a, b, c, d);
    }
    function gb(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3];
    }
    function hb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a;
    }
    function Sa(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1]);
    }
    function fb(a, b, c, d, e) {
        for (;c < d; c += e) {
            var f = a, g = b[c], h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h);
        }
        return a;
    }
    function ib(a, b, c) {
        var d;
        return (d = b.call(c, jb(a))) || (d = b.call(c, kb(a))) || (d = b.call(c, lb(a))) ? d : (d = b.call(c, mb(a))) ? d : !1;
    }
    function nb(a) {
        var b = 0;
        ob(a) || (b = pb(a) * qb(a));
        return b;
    }
    function jb(a) {
        return [ a[0], a[1] ];
    }
    function kb(a) {
        return [ a[2], a[1] ];
    }
    function rb(a) {
        return [ (a[0] + a[2]) / 2, (a[1] + a[3]) / 2 ];
    }
    function sb(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g, l = a[0], m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        h = m - f - b;
        l = m - f + b;
        var n = m + f + b;
        f = m + f - b;
        return bb(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e);
    }
    function qb(a) {
        return a[3] - a[1];
    }
    function tb(a, b, c) {
        c = c ? c : Ra();
        ub(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], 
        c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c;
    }
    function vb(a) {
        return [ a[2] - a[0], a[3] - a[1] ];
    }
    function mb(a) {
        return [ a[0], a[3] ];
    }
    function lb(a) {
        return [ a[2], a[3] ];
    }
    function pb(a) {
        return a[2] - a[0];
    }
    function ub(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
    }
    function ob(a) {
        return a[2] < a[0] || a[3] < a[1];
    }
    function wb(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1);
        b = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= b;
        a[3] += b;
    }
    function xb(a, b, c) {
        a = [ a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3] ];
        b(a, a, 2);
        var d = [ a[0], a[2], a[4], a[6] ], e = [ a[1], a[3], a[5], a[7] ];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return bb(b, a, d, e, c);
    }
    function yb() {
        return !0;
    }
    function zb() {
        return !1;
    }
    var Ab = "function" === typeof Object.assign ? Object.assign : function(a, b) {
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f) for (var g in f) f.hasOwnProperty(g) && (c[g] = f[g]);
        }
        return c;
    };
    function Bb(a) {
        for (var b in a) delete a[b];
    }
    function Cb(a) {
        var b = [], c;
        for (c in a) b.push(a[c]);
        return b;
    }
    function Db(a) {
        for (var b in a) return !1;
        return !b;
    }
    function Eb(a) {
        function b(b) {
            var c = a.listener, e = a.bindTo || a.target;
            a.Td && Fb(a);
            return c.call(e, b);
        }
        return a.Sd = b;
    }
    function Gb(a, b, c, d) {
        for (var e, f = 0, g = a.length; f < g; ++f) if (e = a[f], e.listener === b && e.bindTo === c) return d && (e.deleteIndex = f), 
        e;
    }
    function Hb(a, b) {
        return (a = a.Da) ? a[b] : void 0;
    }
    function Ib(a) {
        var b = a.Da;
        b || (b = a.Da = {});
        return b;
    }
    function Jb(a, b) {
        var c = Hb(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d) a.removeEventListener(b, c[d].Sd), Bb(c[d]);
            c.length = 0;
            if (c = a.Da) delete c[b], 0 === Object.keys(c).length && delete a.Da;
        }
    }
    function y(a, b, c, d, e) {
        var f = Ib(a), g = f[b];
        g || (g = f[b] = []);
        (f = Gb(g, c, d, !1)) ? e || (f.Td = !1) : (f = {
            bindTo: d,
            Td: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, Eb(f)), g.push(f));
        return f;
    }
    function Kb(a, b, c, d) {
        return y(a, b, c, d, !0);
    }
    function Lb(a, b, c, d) {
        (a = Hb(a, b)) && (c = Gb(a, c, d, !0)) && Fb(c);
    }
    function Fb(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.Sd);
            var b = Hb(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                0 === b.length && Jb(a.target, a.type);
            }
            Bb(a);
        }
    }
    function Mb(a) {
        var b = Ib(a), c;
        for (c in b) Jb(a, c);
    }
    function Nb() {}
    Nb.prototype.Wb = !1;
    function Ob(a) {
        a.Wb || (a.Wb = !0, a.fa());
    }
    Nb.prototype.fa = Ba;
    function Pb(a) {
        this.type = a;
        this.target = null;
    }
    Pb.prototype.preventDefault = Pb.prototype.stopPropagation = function() {
        this.Wj = !0;
    };
    function Qb(a) {
        a.stopPropagation();
    }
    function Rb() {
        this.Xa = {};
        this.na = {};
        this.ma = {};
    }
    v(Rb, Nb);
    Rb.prototype.addEventListener = function(a, b) {
        var c = this.ma[a];
        c || (c = this.ma[a] = []);
        -1 === c.indexOf(b) && c.push(b);
    };
    Rb.prototype.b = function(a) {
        var b = "string" === typeof a ? new Pb(a) : a;
        a = b.type;
        b.target = this;
        var c = this.ma[a];
        if (c) {
            a in this.na || (this.na[a] = 0, this.Xa[a] = 0);
            ++this.na[a];
            for (var d = 0, e = c.length; d < e; ++d) if (!1 === c[d].call(this, b) || b.Wj) {
                var f = !1;
                break;
            }
            --this.na[a];
            if (0 === this.na[a]) {
                b = this.Xa[a];
                for (delete this.Xa[a]; b--; ) this.removeEventListener(a, Ba);
                delete this.na[a];
            }
            return f;
        }
    };
    Rb.prototype.fa = function() {
        Mb(this);
    };
    function Sb(a, b) {
        return b ? b in a.ma : 0 < Object.keys(a.ma).length;
    }
    Rb.prototype.removeEventListener = function(a, b) {
        var c = this.ma[a];
        c && (b = c.indexOf(b), a in this.Xa ? (c[b] = Ba, ++this.Xa[a]) : (c.splice(b, 1), 
        0 === c.length && delete this.ma[a]));
    };
    function Tb() {
        Rb.call(this);
        this.f = 0;
    }
    v(Tb, Rb);
    function Ub(a) {
        if (Array.isArray(a)) for (var b = 0, c = a.length; b < c; ++b) Fb(a[b]); else Fb(a);
    }
    k = Tb.prototype;
    k.changed = function() {
        ++this.f;
        this.b("change");
    };
    k.J = function() {
        return this.f;
    };
    k.G = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f) e[f] = y(this, a[f], b, c);
            return e;
        }
        return y(this, a, b, c);
    };
    k.once = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f) e[f] = Kb(this, a[f], b, c);
            return e;
        }
        return Kb(this, a, b, c);
    };
    k.I = function(a, b, c) {
        if (Array.isArray(a)) for (var d = 0, e = a.length; d < e; ++d) Lb(this, a[d], b, c); else Lb(this, a, b, c);
    };
    function Vb(a) {
        Tb.call(this);
        x(this);
        this.L = {};
        void 0 !== a && this.H(a);
    }
    v(Vb, Tb);
    var Wb = {};
    function Xb(a) {
        return Wb.hasOwnProperty(a) ? Wb[a] : Wb[a] = "change:" + a;
    }
    k = Vb.prototype;
    k.get = function(a) {
        var b;
        this.L.hasOwnProperty(a) && (b = this.L[a]);
        return b;
    };
    k.N = function() {
        return Object.keys(this.L);
    };
    k.K = function() {
        return Ab({}, this.L);
    };
    function Yb(a, b, c) {
        var d = Xb(b);
        a.b(new $b(d, b, c));
        a.b(new $b("propertychange", b, c));
    }
    k.set = function(a, b, c) {
        c ? this.L[a] = b : (c = this.L[a], this.L[a] = b, c !== b && Yb(this, a, c));
    };
    k.H = function(a, b) {
        for (var c in a) this.set(c, a[c], b);
    };
    k.O = function(a, b) {
        if (a in this.L) {
            var c = this.L[a];
            delete this.L[a];
            b || Yb(this, a, c);
        }
    };
    function $b(a, b, c) {
        Pb.call(this, a);
        this.key = b;
        this.oldValue = c;
    }
    v($b, Pb);
    function ac(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var l = a[b], m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5];
        }
        f && g.length != h && (g.length = h);
        return g;
    }
    function bc(a, b, c, d, e, f, g) {
        for (var h = g ? g : [], l = 0, m; b < c; b += d) for (h[l++] = a[b] + e, h[l++] = a[b + 1] + f, 
        m = b + 2; m < b + d; ++m) h[l++] = a[m];
        g && h.length != l && (h.length = l);
        return h;
    }
    function cc(a, b, c) {
        return Math.min(Math.max(a, b), c);
    }
    var dc = function() {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function(a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2;
        };
        return a;
    }();
    function ec(a) {
        Pa(0 < a, 29);
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
    }
    function fc(a, b, c, d, e, f) {
        var g = e - c, h = f - d;
        if (0 !== g || 0 !== h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l);
        }
        return gc(a, b, c, d);
    }
    function gc(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b;
    }
    function hc(a) {
        return a * Math.PI / 180;
    }
    function ic(a, b) {
        a %= b;
        return 0 > a * b ? a + b : a;
    }
    function kc(a, b, c) {
        return a + c * (b - a);
    }
    function lc(a) {
        this.radius = a;
    }
    lc.prototype.a = function(a) {
        return mc(a, this.radius);
    };
    lc.prototype.b = function(a, b) {
        return nc(a, b, this.radius);
    };
    lc.prototype.offset = function(a, b, c) {
        var d = hc(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [ 180 * (hc(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI ];
    };
    function oc(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().transform(c, "EPSG:4326");
        var e = a.getType();
        c = 0;
        var f;
        switch (e) {
          case "Point":
          case "MultiPoint":
            break;

          case "LineString":
          case "LinearRing":
            b = a.S();
            c = pc(b, d);
            break;

          case "MultiLineString":
          case "Polygon":
            b = a.S();
            a = 0;
            for (e = b.length; a < e; ++a) c += pc(b[a], d);
            break;

          case "MultiPolygon":
            b = a.S();
            a = 0;
            for (e = b.length; a < e; ++a) {
                var g = b[a];
                var h = 0;
                for (f = g.length; h < f; ++h) c += pc(g[h], d);
            }
            break;

          case "GeometryCollection":
            d = a.yd();
            a = 0;
            for (e = d.length; a < e; ++a) c += oc(d[a], b);
            break;

          default:
            throw Error("Unsupported geometry type: " + e);
        }
        return c;
    }
    function pc(a, b) {
        for (var c = 0, d = 0, e = a.length; d < e - 1; ++d) c += nc(a[d], a[d + 1], b);
        return c;
    }
    function nc(a, b, c) {
        var d = hc(a[1]), e = hc(b[1]), f = (e - d) / 2;
        a = hc(b[0] - a[0]) / 2;
        d = Math.sin(f) * Math.sin(f) + Math.sin(a) * Math.sin(a) * Math.cos(d) * Math.cos(e);
        return 2 * c * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
    }
    function qc(a, b) {
        var c = b || {}, d = c.radius || 6371008.8;
        c = c.projection || "EPSG:3857";
        a = a.clone().transform(c, "EPSG:4326");
        var e = a.getType();
        c = 0;
        var f;
        switch (e) {
          case "Point":
          case "MultiPoint":
          case "LineString":
          case "MultiLineString":
          case "LinearRing":
            break;

          case "Polygon":
            b = a.S();
            c = Math.abs(mc(b[0], d));
            a = 1;
            for (e = b.length; a < e; ++a) c -= Math.abs(mc(b[a], d));
            break;

          case "MultiPolygon":
            b = a.S();
            a = 0;
            for (e = b.length; a < e; ++a) {
                var g = b[a];
                c += Math.abs(mc(g[0], d));
                var h = 1;
                for (f = g.length; h < f; ++h) c -= Math.abs(mc(g[h], d));
            }
            break;

          case "GeometryCollection":
            d = a.yd();
            a = 0;
            for (e = d.length; a < e; ++a) c += qc(d[a], b);
            break;

          default:
            throw Error("Unsupported geometry type: " + e);
        }
        return c;
    }
    function mc(a, b) {
        for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) {
            var h = a[g][0], l = a[g][1];
            c += hc(h - e) * (2 + Math.sin(hc(f)) + Math.sin(hc(l)));
            e = h;
            f = l;
        }
        return c * b * b / 2;
    }
    var rc = {};
    rc.degrees = 12741994 * Math.PI / 360;
    rc.ft = .3048;
    rc.m = 1;
    rc["us-ft"] = 1200 / 3937;
    var sc = null;
    function tc(a) {
        this.wb = a.code;
        this.a = a.units;
        this.i = void 0 !== a.extent ? a.extent : null;
        this.ve = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.c = void 0 !== a.global ? a.global : !1;
        this.f = !(!this.c || !this.i);
        this.j = a.getPointResolution;
        this.g = null;
        this.l = a.metersPerUnit;
        var b = a.code, c = sc || window.proj4;
        "function" == typeof c && (b = c.defs(b), void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.b = b.axis), 
        void 0 === a.metersPerUnit && (this.l = b.to_meter), void 0 === a.units && (this.a = b.units)));
    }
    k = tc.prototype;
    k.Sl = function() {
        return this.wb;
    };
    k.A = function() {
        return this.i;
    };
    k.lp = function() {
        return this.a;
    };
    k.Jc = function() {
        return this.l || rc[this.a];
    };
    k.Bm = function() {
        return this.ve;
    };
    k.Ol = function() {
        return this.b;
    };
    k.sn = function() {
        return this.c;
    };
    k.sr = function(a) {
        this.c = a;
        this.f = !(!a || !this.i);
    };
    k.kj = function(a) {
        this.i = a;
        this.f = !(!this.c || !a);
    };
    k.wk = function(a) {
        this.ve = a;
    };
    k.rr = function(a) {
        this.j = a;
    };
    function uc(a) {
        tc.call(this, {
            code: a,
            units: "m",
            extent: vc,
            global: !0,
            worldExtent: wc,
            getPointResolution: function(a, c) {
                return a / dc(c[1] / 6378137);
            }
        });
    }
    v(uc, tc);
    var xc = 6378137 * Math.PI, vc = [ -xc, -xc, xc, xc ], wc = [ -180, -85, 180, 85 ], yc = [ new uc("EPSG:3857"), new uc("EPSG:102100"), new uc("EPSG:102113"), new uc("EPSG:900913"), new uc("urn:ogc:def:crs:EPSG:6.18:3:3857"), new uc("urn:ogc:def:crs:EPSG::3857"), new uc("http://www.opengis.net/gml/srs/epsg.xml#3857") ];
    function zc(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) {
            b[e] = xc * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > xc ? f = xc : f < -xc && (f = -xc);
            b[e + 1] = f;
        }
        return b;
    }
    function Ac(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) b[e] = 180 * a[e] / xc, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b;
    }
    function Bc(a, b) {
        tc.call(this, {
            code: a,
            units: "degrees",
            extent: Cc,
            axisOrientation: b,
            global: !0,
            metersPerUnit: Dc,
            worldExtent: Cc
        });
    }
    v(Bc, tc);
    var Cc = [ -180, -90, 180, 90 ], Dc = 6378137 * Math.PI / 180, Ec = [ new Bc("CRS:84"), new Bc("EPSG:4326", "neu"), new Bc("urn:ogc:def:crs:EPSG::4326", "neu"), new Bc("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Bc("urn:ogc:def:crs:OGC:1.3:CRS84"), new Bc("urn:ogc:def:crs:OGC:2:84"), new Bc("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Bc("urn:x-ogc:def:crs:EPSG:4326", "neu") ];
    var Fc = {};
    var Gc = {};
    function Hc(a, b, c) {
        a = a.wb;
        b = b.wb;
        a in Gc || (Gc[a] = {});
        Gc[a][b] = c;
    }
    function Ic(a, b) {
        var c;
        a in Gc && b in Gc[a] && (c = Gc[a][b]);
        return c;
    }
    var Jc = new lc(6371008.8);
    function Kc(a, b, c, d) {
        a = Lc(a);
        var e = a.j;
        e ? b = e(b, c) : "degrees" == a.a && !d || "degrees" == d || (e = Mc(a, Lc("EPSG:4326")), 
        b = [ c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2 ], 
        b = e(b, b, 2), b = (Jc.b(b.slice(0, 2), b.slice(2, 4)) + Jc.b(b.slice(4, 6), b.slice(6, 8))) / 2, 
        a = d ? rc[d] : a.Jc(), void 0 !== a && (b /= a));
        return b;
    }
    function Nc(a) {
        a.forEach(Oc);
        a.forEach(function(b) {
            a.forEach(function(a) {
                b !== a && Hc(b, a, Pc);
            });
        });
    }
    function Qc() {
        Ec.forEach(function(a) {
            yc.forEach(function(b) {
                Hc(a, b, zc);
                Hc(b, a, Ac);
            });
        });
    }
    function Oc(a) {
        Fc[a.wb] = a;
        Hc(a, a, Pc);
    }
    function Rc(a) {
        return a ? "string" === typeof a ? Lc(a) : a : Lc("EPSG:3857");
    }
    function Sc(a, b, c, d) {
        a = Lc(a);
        b = Lc(b);
        Hc(a, b, Tc(c));
        Hc(b, a, Tc(d));
    }
    function Tc(a) {
        return function(b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f;
            for (f = 0; f < e; f += d) {
                var g = a([ b[f], b[f + 1] ]);
                c[f] = g[0];
                c[f + 1] = g[1];
                for (g = d - 1; 2 <= g; --g) c[f + g] = b[f + g];
            }
            return c;
        };
    }
    function Lc(a) {
        var b = null;
        if (a instanceof tc) b = a; else if ("string" === typeof a && (b = Fc[a] || null, 
        !b)) {
            var c = sc || window.proj4;
            "function" == typeof c && void 0 !== c.defs(a) && (b = new tc({
                code: a
            }), Oc(b));
        }
        return b;
    }
    function Uc(a, b) {
        if (a === b) return !0;
        var c = a.a === b.a;
        return a.wb === b.wb ? c : Mc(a, b) === Pc && c;
    }
    function Vc(a, b) {
        a = Lc(a);
        b = Lc(b);
        return Mc(a, b);
    }
    function Mc(a, b) {
        var c = a.wb, d = b.wb, e = Ic(c, d);
        if (!e) {
            var f = sc || window.proj4;
            if ("function" == typeof f) {
                var g = f.defs(c), h = f.defs(d);
                void 0 !== g && void 0 !== h && (g === h ? Nc([ b, a ]) : (e = f(d, c), Sc(b, a, e.forward, e.inverse)), 
                e = Ic(c, d));
            }
        }
        e || (e = Wc);
        return e;
    }
    function Wc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
            a = b;
        }
        return a;
    }
    function Pc(a, b) {
        if (void 0 !== b) {
            for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
            a = b;
        } else a = a.slice();
        return a;
    }
    function Xc(a, b, c) {
        return Vc(b, c)(a, void 0, a.length);
    }
    function Yc(a, b, c) {
        b = Vc(b, c);
        return xb(a, b);
    }
    function Zc() {
        Nc(yc);
        Nc(Ec);
        Qc();
    }
    Zc();
    var $c = Array(6);
    function ad() {
        return [ 1, 0, 0, 1, 0, 0 ];
    }
    function bd(a) {
        return cd(a, 1, 0, 0, 1, 0, 0);
    }
    function dd(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = b[0], m = b[1], n = b[2], p = b[3], q = b[4];
        b = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * b + g;
        a[5] = d * q + f * b + h;
        return a;
    }
    function cd(a, b, c, d, e, f, g) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        return a;
    }
    function ed(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a;
    }
    function fd(a, b) {
        var c = b[0], d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b;
    }
    function gd(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        dd(a, cd($c, c, b, -b, c, 0, 0));
    }
    function hd(a, b, c) {
        return dd(a, cd($c, b, 0, 0, c, 0, 0));
    }
    function id(a, b, c) {
        dd(a, cd($c, 1, 0, 0, 1, b, c));
    }
    function jd(a, b, c, d, e, f, g, h) {
        var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c;
        return a;
    }
    function kd(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        Pa(0 !== b, 32);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b;
        return a;
    }
    function ld() {
        Vb.call(this);
        this.o = Ra();
        this.u = -1;
        this.i = {};
        this.l = this.g = 0;
        this.R = ad();
    }
    v(ld, Vb);
    k = ld.prototype;
    k.Jb = function(a, b) {
        b = b ? b : [ NaN, NaN ];
        this.Nb(a[0], a[1], b, Infinity);
        return b;
    };
    k.Db = function(a) {
        return this.cd(a[0], a[1]);
    };
    k.cd = zb;
    k.A = function(a) {
        this.u != this.f && (this.o = this.Ie(this.o), this.u = this.f);
        var b = this.o;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a;
    };
    k.Ub = function(a) {
        return this.ae(a * a);
    };
    k.transform = function(a, b) {
        var c = this.R;
        a = Lc(a);
        var d = "tile-pixels" == a.a ? function(d, f, g) {
            var e = a.A(), l = a.ve;
            e = qb(l) / qb(e);
            jd(c, l[0], l[3], e, -e, 0, 0, 0);
            ac(d, 0, d.length, g, c, f);
            return Vc(a, b)(d, f, g);
        } : Vc(a, b);
        this.Vc(d);
        return this;
    };
    function md() {
        ld.call(this);
        this.ga = "XY";
        this.a = 2;
        this.v = null;
    }
    v(md, ld);
    function nd(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        return b;
    }
    k = md.prototype;
    k.cd = zb;
    k.Ie = function(a) {
        return eb(this.v, 0, this.v.length, this.a, a);
    };
    k.jc = function() {
        return this.v.slice(0, this.a);
    };
    k.ba = function() {
        return this.v;
    };
    k.kc = function() {
        return this.v.slice(this.v.length - this.a);
    };
    k.mc = function() {
        return this.ga;
    };
    k.ae = function(a) {
        this.l != this.f && (Bb(this.i), this.g = 0, this.l = this.f);
        if (0 > a || 0 !== this.g && a <= this.g) return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b)) return this.i[b];
        var c = this.Bd(a);
        if (c.ba().length < this.v.length) return this.i[b] = c;
        this.g = a;
        return this;
    };
    k.Bd = function() {
        return this;
    };
    k.la = function() {
        return this.a;
    };
    function od(a, b, c) {
        a.a = nd(b);
        a.ga = b;
        a.v = c;
    }
    function pd(a, b, c, d) {
        if (b) c = nd(b); else {
            for (b = 0; b < d; ++b) {
                if (0 === c.length) {
                    a.ga = "XY";
                    a.a = 2;
                    return;
                }
                c = c[0];
            }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e;
        }
        a.ga = b;
        a.a = c;
    }
    k.Vc = function(a) {
        this.v && (a(this.v, this.v, this.a), this.changed());
    };
    k.rotate = function(a, b) {
        var c = this.ba();
        if (c) {
            var d = c.length, e = this.la(), f = c ? c : [], g = Math.cos(a);
            a = Math.sin(a);
            var h = b[0];
            b = b[1];
            for (var l = 0, m = 0; m < d; m += e) {
                var n = c[m] - h, p = c[m + 1] - b;
                f[l++] = h + n * g - p * a;
                f[l++] = b + n * a + p * g;
                for (n = m + 2; n < m + e; ++n) f[l++] = c[n];
            }
            c && f.length != l && (f.length = l);
            this.changed();
        }
    };
    k.scale = function(a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = rb(this.A()));
        if (c = this.ba()) {
            b = c.length;
            var f = this.la(), g = c ? c : [], h = e[0];
            e = e[1];
            for (var l = 0, m = 0; m < b; m += f) {
                var n = c[m] - h, p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p;
                for (n = m + 2; n < m + f; ++n) g[l++] = c[n];
            }
            c && g.length != l && (g.length = l);
            this.changed();
        }
    };
    k.translate = function(a, b) {
        var c = this.ba();
        c && (bc(c, 0, c.length, this.la(), a, b, c), this.changed());
    };
    function qd(a, b, c, d, e, f, g) {
        var h = a[b], l = a[b + 1], m = a[c] - h, n = a[c + 1] - l;
        if (0 !== m || 0 !== n) if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f) b = c; else if (0 < f) {
            for (e = 0; e < d; ++e) g[e] = kc(a[b + e], a[c + e], f);
            g.length = d;
            return;
        }
        for (e = 0; e < d; ++e) g[e] = a[b + e];
        g.length = d;
    }
    function rd(a, b, c, d, e) {
        var f = a[b], g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            f = gc(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l;
        }
        return e;
    }
    function sd(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e = rd(a, b, h, d, e);
            b = h;
        }
        return e;
    }
    function td(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c) return m;
        if (0 === e) {
            var p = gc(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n) l[n] = a[b + n];
                l.length = d;
                return p;
            }
            return m;
        }
        for (var q = n ? n : [ NaN, NaN ], r = b + d; r < c; ) if (qd(a, r - d, r, d, g, h, q), 
        p = gc(g, h, q[0], q[1]), p < m) {
            m = p;
            for (n = 0; n < d; ++n) l[n] = q[n];
            l.length = d;
            r += d;
        } else r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (qd(a, c - d, b, d, g, h, q), p = gc(g, h, q[0], q[1]), p < m)) {
            m = p;
            for (n = 0; n < d; ++n) l[n] = q[n];
            l.length = d;
        }
        return m;
    }
    function ud(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [ NaN, NaN ];
        var p;
        var q = 0;
        for (p = c.length; q < p; ++q) {
            var r = c[q];
            m = td(a, b, r, d, e, f, g, h, l, m, n);
            b = r;
        }
        return m;
    }
    function vd(a, b) {
        var c = 0, d;
        var e = 0;
        for (d = b.length; e < d; ++e) a[c++] = b[e];
        return c;
    }
    function wd(a, b, c, d) {
        var e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f], h;
            for (h = 0; h < d; ++h) a[b++] = g[h];
        }
        return b;
    }
    function xd(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) b = wd(a, b, c[h], d), e[f++] = b;
        e.length = f;
        return e;
    }
    function yd(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d) e[f++] = a.slice(b, b + d);
        e.length = f;
        return e;
    }
    function zd(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = yd(a, b, l, d, e[f]);
            b = l;
        }
        e.length = f;
        return e;
    }
    function Ad(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g;
        var h = 0;
        for (g = c.length; h < g; ++h) {
            var l = c[h];
            e[f++] = zd(a, b, l, d, e[f]);
            b = l[l.length - 1];
        }
        e.length = f;
        return e;
    }
    function Bd(a, b, c, d, e, f) {
        var g = NaN, h = NaN, l = (c - b) / d;
        if (1 === l) g = a[b], h = a[b + 1]; else if (2 == l) g = (1 - e) * a[b] + e * a[b + d], 
        h = (1 - e) * a[b + 1] + e * a[b + d + 1]; else if (0 !== l) {
            h = a[b];
            l = a[b + 1];
            var m = 0;
            g = [ 0 ];
            var n;
            for (n = b + d; n < c; n += d) {
                var p = a[n], q = a[n + 1];
                m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q;
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m; ) e = l + (m - l >> 1), h = +Da(g[e], c), 0 > h ? l = e + 1 : (m = e, 
            n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = kc(a[b], a[b + d], c), 
            h = kc(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1]);
        }
        return f ? (f[0] = g, f[1] = h, f) : [ g, h ];
    }
    function Cd(a, b, c, d, e, f) {
        if (c == b) return null;
        if (e < a[b + d - 1]) return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
        if (a[c - 1] < e) return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
        if (e == a[b + d - 1]) return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c; ) f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c) return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g) c.push(kc(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c;
    }
    function Dd(a, b, c, d, e, f) {
        var g = 0;
        if (f) return Cd(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1]) return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
        if (a[a.length - 1] < d) return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1]) break; else if (d <= a[h - 1]) return Cd(a, g, h, c, d, !1);
                g = h;
            }
        }
        return null;
    }
    function Ed(a, b, c, d, e) {
        return !ib(e, function(e) {
            return !Fd(a, b, c, d, e[0], e[1]);
        });
    }
    function Fd(a, b, c, d, e, f) {
        for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b], n = a[b + 1];
            l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
            h = m;
            l = n;
        }
        return 0 !== g;
    }
    function Gd(a, b, c, d, e, f) {
        if (0 === c.length || !Fd(a, b, c[0], d, e, f)) return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b) if (Fd(a, c[b - 1], c[b], d, e, f)) return !1;
        return !0;
    }
    function Hd(a, b, c, d, e, f) {
        for (var g = [ a[b], a[b + 1] ], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h)) return l;
            g[0] = h[0];
            g[1] = h[1];
        }
        return !1;
    }
    function Id(a, b, c, d, e) {
        var f = fb(Ra(), a, b, c, d);
        return ub(e, f) ? $a(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Hd(a, b, c, d, function(a, b) {
            var c = !1, d = ab(e, a), f = ab(e, b);
            if (1 === d || 1 === f) c = !0; else {
                var g = e[0], h = e[1], r = e[2], u = e[3], w = b[0];
                b = b[1];
                a = (b - a[1]) / (w - a[0]);
                f & 2 && !(d & 2) && (c = w - (b - u) / a, c = c >= g && c <= r);
                c || !(f & 4) || d & 4 || (c = b - (w - r) * a, c = c >= h && c <= u);
                c || !(f & 8) || d & 8 || (c = w - (b - h) / a, c = c >= g && c <= r);
                c || !(f & 16) || d & 16 || (c = b - (w - g) * a, c = c >= h && c <= u);
            }
            return c;
        }) : !1;
    }
    function Jd(a, b, c, d, e) {
        var f = c[0];
        if (!(Id(a, b, f, d, e) || Fd(a, b, f, d, e[0], e[1]) || Fd(a, b, f, d, e[0], e[3]) || Fd(a, b, f, d, e[2], e[1]) || Fd(a, b, f, d, e[2], e[3]))) return !1;
        if (1 === c.length) return !0;
        b = 1;
        for (f = c.length; b < f; ++b) if (Ed(a, c[b - 1], c[b], d, e)) return !1;
        return !0;
    }
    function Kd(a, b, c, d) {
        var e = a[b], f = a[b + 1], g = 0;
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            g += Math.sqrt((h - e) * (h - e) + (l - f) * (l - f));
            e = h;
            f = l;
        }
        return g;
    }
    function Ld(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (;b < c; b += d) f[g++] = a[b], f[g++] = a[b + 1];
            return g;
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [ b, c - d ];
        for (var m = 0, n; 0 < c.length; ) {
            var p = c.pop(), q = c.pop(), r = 0, u = a[q], w = a[q + 1], z = a[p], A = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var E = fc(a[n], a[n + 1], u, w, z, A);
                E > r && (m = n, r = E);
            }
            r > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p));
        }
        for (n = 0; n < h; ++n) l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g;
    }
    function Md(a, b, c, d, e, f, g, h) {
        var l;
        var m = 0;
        for (l = c.length; m < l; ++m) {
            var n = c[m];
            a: {
                var p = a, q = n, r = d, u = e, w = f, z = g;
                if (b != q) {
                    var A = u * Math.round(p[b] / u), E = u * Math.round(p[b + 1] / u);
                    b += r;
                    w[z++] = A;
                    w[z++] = E;
                    do {
                        var T = u * Math.round(p[b] / u);
                        g = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (b == q) {
                            w[z++] = T;
                            w[z++] = g;
                            g = z;
                            break a;
                        }
                    } while (T == A && g == E);
                    for (;b < q; ) {
                        var Ja = u * Math.round(p[b] / u);
                        var ua = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (Ja != T || ua != g) {
                            var ma = T - A, da = g - E, ja = Ja - A, ya = ua - E;
                            ma * ya == da * ja && (0 > ma && ja < ma || ma == ja || 0 < ma && ja > ma) && (0 > da && ya < da || da == ya || 0 < da && ya > da) || (w[z++] = T, 
                            w[z++] = g, A = T, E = g);
                            T = Ja;
                            g = ua;
                        }
                    }
                    w[z++] = T;
                    w[z++] = g;
                }
                g = z;
            }
            h.push(g);
            b = n;
        }
        return g;
    }
    function B(a, b) {
        md.call(this);
        this.c = null;
        this.s = this.C = this.j = -1;
        this.ka(a, b);
    }
    v(B, md);
    k = B.prototype;
    k.jl = function(a) {
        this.v ? Ga(this.v, a) : this.v = a.slice();
        this.changed();
    };
    k.clone = function() {
        var a = new B(null);
        a.Y(this.ga, this.v.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        this.s != this.f && (this.C = Math.sqrt(rd(this.v, 0, this.v.length, this.a, 0)), 
        this.s = this.f);
        return td(this.v, 0, this.v.length, this.a, this.C, !1, a, b, c, d);
    };
    k.Il = function(a, b) {
        return Hd(this.v, 0, this.v.length, this.a, a, b);
    };
    k.Eo = function(a, b) {
        return "XYM" != this.ga && "XYZM" != this.ga ? null : Cd(this.v, 0, this.v.length, this.a, a, void 0 !== b ? b : !1);
    };
    k.S = function() {
        return yd(this.v, 0, this.v.length, this.a);
    };
    k.hi = function(a, b) {
        return Bd(this.v, 0, this.v.length, this.a, a, b);
    };
    k.Fo = function() {
        return Kd(this.v, 0, this.v.length, this.a);
    };
    k.Ne = function() {
        this.j != this.f && (this.c = this.hi(.5, this.c), this.j = this.f);
        return this.c;
    };
    k.Bd = function(a) {
        var b = [];
        b.length = Ld(this.v, 0, this.v.length, this.a, a, b, 0);
        a = new B(null);
        a.Y("XY", b);
        return a;
    };
    k.getType = function() {
        return "LineString";
    };
    k.cb = function(a) {
        return Id(this.v, 0, this.v.length, this.a, a);
    };
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 1), this.v || (this.v = []), this.v.length = wd(this.v, 0, a, this.a), 
        this.changed()) : this.Y("XY", null);
    };
    k.Y = function(a, b) {
        od(this, a, b);
        this.changed();
    };
    function C(a, b) {
        md.call(this);
        this.ka(a, b);
    }
    v(C, md);
    k = C.prototype;
    k.clone = function() {
        var a = new C(null);
        a.Y(this.ga, this.v.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        var e = this.v;
        a = gc(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b) c[b] = e[b];
            c.length = d;
            return a;
        }
        return d;
    };
    k.S = function() {
        return this.v ? this.v.slice() : [];
    };
    k.Ie = function(a) {
        return db(this.v, a);
    };
    k.getType = function() {
        return "Point";
    };
    k.cb = function(a) {
        return Ya(a, this.v[0], this.v[1]);
    };
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 0), this.v || (this.v = []), this.v.length = vd(this.v, a), 
        this.changed()) : this.Y("XY", null);
    };
    k.Y = function(a, b) {
        od(this, a, b);
        this.changed();
    };
    function Nd(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += g * h - f * l;
            f = h;
            g = l;
        }
        return e / 2;
    }
    function Od(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            e += Nd(a, b, h, d);
            b = h;
        }
        return e;
    }
    function Pd(a, b) {
        md.call(this);
        this.c = this.j = -1;
        this.ka(a, b);
    }
    v(Pd, md);
    k = Pd.prototype;
    k.clone = function() {
        var a = new Pd(null);
        Qd(a, this.ga, this.v.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        this.c != this.f && (this.j = Math.sqrt(rd(this.v, 0, this.v.length, this.a, 0)), 
        this.c = this.f);
        return td(this.v, 0, this.v.length, this.a, this.j, !0, a, b, c, d);
    };
    k.Go = function() {
        return Nd(this.v, 0, this.v.length, this.a);
    };
    k.S = function() {
        return yd(this.v, 0, this.v.length, this.a);
    };
    k.Bd = function(a) {
        var b = [];
        b.length = Ld(this.v, 0, this.v.length, this.a, a, b, 0);
        a = new Pd(null);
        Qd(a, "XY", b);
        return a;
    };
    k.getType = function() {
        return "LinearRing";
    };
    k.cb = function() {};
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 1), this.v || (this.v = []), this.v.length = wd(this.v, 0, a, this.a), 
        this.changed()) : Qd(this, "XY", null);
    };
    function Qd(a, b, c) {
        od(a, b, c);
        a.changed();
    }
    function Rd(a, b, c, d, e, f, g) {
        for (var h, l, m, n, p, q = e[f + 1], r = [], u = 0, w = c.length; u < w; ++u) {
            var z = c[u];
            m = a[z - d];
            p = a[z - d + 1];
            for (h = b; h < z; h += d) {
                n = a[h];
                l = a[h + 1];
                if (q <= p && l <= q || p <= q && q <= l) m = (q - p) / (l - p) * (n - m) + m, r.push(m);
                m = n;
                p = l;
            }
        }
        u = NaN;
        w = -Infinity;
        r.sort(Da);
        m = r[0];
        h = 1;
        for (l = r.length; h < l; ++h) n = r[h], z = Math.abs(n - m), z > w && (m = (m + n) / 2, 
        Gd(a, b, c, d, m, q) && (u = m, w = z)), m = n;
        isNaN(u) && (u = e[f]);
        return g ? (g.push(u, q, w), g) : [ u, q, w ];
    }
    function Sd(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
            var h = a[b], l = a[b + 1];
            e += (h - f) * (l + g);
            f = h;
            g = l;
        }
        return 0 < e;
    }
    function Td(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            e = Sd(a, e, h, c);
            if (0 === g) {
                if (d && e || !d && !e) return !1;
            } else if (d && !e || !d && e) return !1;
            e = h;
        }
        return !0;
    }
    function Ud(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = Sd(a, b, h, d);
            if (0 === g ? e && l || !e && !l : e && !l || !e && l) {
                l = a;
                for (var m = h, n = d; b < m - n; ) {
                    var p;
                    for (p = 0; p < n; ++p) {
                        var q = l[b + p];
                        l[b + p] = l[m - n + p];
                        l[m - n + p] = q;
                    }
                    b += n;
                    m -= n;
                }
            }
            b = h;
        }
        return b;
    }
    function Wd(a, b, c, d) {
        var e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g) e = Ud(a, e, b[g], c, d);
        return e;
    }
    function D(a, b) {
        md.call(this);
        this.c = [];
        this.s = -1;
        this.C = null;
        this.P = this.B = this.D = -1;
        this.j = null;
        this.ka(a, b);
    }
    v(D, md);
    k = D.prototype;
    k.ll = function(a) {
        this.v ? Ga(this.v, a.ba()) : this.v = a.ba().slice();
        this.c.push(this.v.length);
        this.changed();
    };
    k.clone = function() {
        var a = new D(null);
        a.Y(this.ga, this.v.slice(), this.c.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        this.B != this.f && (this.D = Math.sqrt(sd(this.v, 0, this.c, this.a, 0)), this.B = this.f);
        return ud(this.v, 0, this.c, this.a, this.D, !0, a, b, c, d);
    };
    k.cd = function(a, b) {
        return Gd(this.$b(), 0, this.c, this.a, a, b);
    };
    k.Jo = function() {
        return Od(this.$b(), 0, this.c, this.a);
    };
    k.S = function(a) {
        if (void 0 !== a) {
            var b = this.$b().slice();
            Ud(b, 0, this.c, this.a, a);
        } else b = this.v;
        return zd(b, 0, this.c, this.a);
    };
    k.qb = function() {
        return this.c;
    };
    k.Zd = function() {
        if (this.s != this.f) {
            var a = rb(this.A());
            this.C = Rd(this.$b(), 0, this.c, this.a, a, 0);
            this.s = this.f;
        }
        return this.C;
    };
    k.ni = function() {
        return new C(this.Zd(), "XYM");
    };
    k.em = function() {
        return this.c.length;
    };
    k.oi = function(a) {
        if (0 > a || this.c.length <= a) return null;
        var b = new Pd(null);
        Qd(b, this.ga, this.v.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b;
    };
    k.$d = function() {
        var a = this.ga, b = this.v, c = this.c, d = [], e = 0, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g], l = new Pd(null);
            Qd(l, a, b.slice(e, h));
            d.push(l);
            e = h;
        }
        return d;
    };
    k.$b = function() {
        if (this.P != this.f) {
            var a = this.v;
            Td(a, this.c, this.a) ? this.j = a : (this.j = a.slice(), this.j.length = Ud(this.j, 0, this.c, this.a));
            this.P = this.f;
        }
        return this.j;
    };
    k.Bd = function(a) {
        var b = [], c = [];
        b.length = Md(this.v, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new D(null);
        a.Y("XY", b, c);
        return a;
    };
    k.getType = function() {
        return "Polygon";
    };
    k.cb = function(a) {
        return Jd(this.$b(), 0, this.c, this.a, a);
    };
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 2), this.v || (this.v = []), a = xd(this.v, 0, a, this.a, this.c), 
        this.v.length = 0 === a.length ? 0 : a[a.length - 1], this.changed()) : this.Y("XY", null, this.c);
    };
    k.Y = function(a, b, c) {
        od(this, a, b);
        this.c = c;
        this.changed();
    };
    function Xd(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f) Ga(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new D(null);
        a.Y("XY", d, [ d.length ]);
        return a;
    }
    function Yd(a) {
        var b = a[0], c = a[1], d = a[2];
        a = a[3];
        b = [ b, c, b, a, d, a, d, c, b, c ];
        c = new D(null);
        c.Y("XY", b, [ b.length ]);
        return c;
    }
    function Zd(a, b, c) {
        var d = b ? b : 32, e = a.la();
        b = a.ga;
        var f = new D(null, b);
        d = e * (d + 1);
        e = Array(d);
        for (var g = 0; g < d; g++) e[g] = 0;
        f.Y(b, e, [ e.length ]);
        $d(f, a.getCenter(), a.Fd(), c);
        return f;
    }
    function $d(a, b, c, d) {
        var e = a.ba(), f = a.ga, g = a.la(), h = a.qb(), l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n, p = 0; p <= l; ++p) n = p * g, m = d + 2 * ic(p, l) * Math.PI / l, 
        e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.Y(f, e, h);
    }
    function F(a, b) {
        md.call(this);
        this.c = [];
        this.j = this.s = -1;
        this.ka(a, b);
    }
    v(F, md);
    k = F.prototype;
    k.kl = function(a) {
        this.v ? Ga(this.v, a.ba().slice()) : this.v = a.ba().slice();
        this.c.push(this.v.length);
        this.changed();
    };
    k.clone = function() {
        var a = new F(null);
        a.Y(this.ga, this.v.slice(), this.c.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        this.j != this.f && (this.s = Math.sqrt(sd(this.v, 0, this.c, this.a, 0)), this.j = this.f);
        return ud(this.v, 0, this.c, this.a, this.s, !1, a, b, c, d);
    };
    k.Ho = function(a, b, c) {
        return "XYM" != this.ga && "XYZM" != this.ga || 0 === this.v.length ? null : Dd(this.v, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1);
    };
    k.S = function() {
        return zd(this.v, 0, this.c, this.a);
    };
    k.qb = function() {
        return this.c;
    };
    k.dm = function(a) {
        if (0 > a || this.c.length <= a) return null;
        var b = new B(null);
        b.Y(this.ga, this.v.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b;
    };
    k.zd = function() {
        var a = this.v, b = this.c, c = this.ga, d = [], e = 0, f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g], l = new B(null);
            l.Y(c, a.slice(e, h));
            d.push(l);
            e = h;
        }
        return d;
    };
    k.Oe = function() {
        var a = [], b = this.v, c = 0, d = this.c, e = this.a, f;
        var g = 0;
        for (f = d.length; g < f; ++g) {
            var h = d[g];
            c = Bd(b, c, h, e, .5);
            Ga(a, c);
            c = h;
        }
        return a;
    };
    k.Bd = function(a) {
        var b = [], c = [], d = this.v, e = this.c, f = this.a, g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m];
            h = Ld(d, g, n, f, a, b, h);
            c.push(h);
            g = n;
        }
        b.length = h;
        a = new F(null);
        a.Y("XY", b, c);
        return a;
    };
    k.getType = function() {
        return "MultiLineString";
    };
    k.cb = function(a) {
        a: {
            var b = this.v, c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                if (Id(b, e, c[g], d, a)) {
                    a = !0;
                    break a;
                }
                e = c[g];
            }
            a = !1;
        }
        return a;
    };
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 2), this.v || (this.v = []), a = xd(this.v, 0, a, this.a, this.c), 
        this.v.length = 0 === a.length ? 0 : a[a.length - 1], this.changed()) : this.Y("XY", null, this.c);
    };
    k.Y = function(a, b, c) {
        od(this, a, b);
        this.c = c;
        this.changed();
    };
    function ae(a, b) {
        var c = a.ga, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            0 === g && (c = h.ga);
            Ga(d, h.ba());
            e.push(d.length);
        }
        a.Y(c, d, e);
    }
    function G(a, b) {
        md.call(this);
        this.ka(a, b);
    }
    v(G, md);
    k = G.prototype;
    k.ml = function(a) {
        this.v ? Ga(this.v, a.ba()) : this.v = a.ba().slice();
        this.changed();
    };
    k.clone = function() {
        var a = new G(null);
        a.Y(this.ga, this.v.slice());
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        var e = this.v, f = this.a, g;
        var h = 0;
        for (g = e.length; h < g; h += f) {
            var l = gc(a, b, e[h], e[h + 1]);
            if (l < d) {
                d = l;
                for (l = 0; l < f; ++l) c[l] = e[h + l];
                c.length = f;
            }
        }
        return d;
    };
    k.S = function() {
        return yd(this.v, 0, this.v.length, this.a);
    };
    k.rm = function(a) {
        var b = this.v ? this.v.length / this.a : 0;
        if (0 > a || b <= a) return null;
        b = new C(null);
        b.Y(this.ga, this.v.slice(a * this.a, (a + 1) * this.a));
        return b;
    };
    k.ke = function() {
        var a = this.v, b = this.ga, c = this.a, d = [], e;
        var f = 0;
        for (e = a.length; f < e; f += c) {
            var g = new C(null);
            g.Y(b, a.slice(f, f + c));
            d.push(g);
        }
        return d;
    };
    k.getType = function() {
        return "MultiPoint";
    };
    k.cb = function(a) {
        var b = this.v, c = this.a, d;
        var e = 0;
        for (d = b.length; e < d; e += c) {
            var f = b[e];
            var g = b[e + 1];
            if (Ya(a, f, g)) return !0;
        }
        return !1;
    };
    k.ka = function(a, b) {
        a ? (pd(this, b, a, 1), this.v || (this.v = []), this.v.length = wd(this.v, 0, a, this.a), 
        this.changed()) : this.Y("XY", null);
    };
    k.Y = function(a, b) {
        od(this, a, b);
        this.changed();
    };
    function H(a, b) {
        md.call(this);
        this.c = [];
        this.s = -1;
        this.C = null;
        this.P = this.B = this.D = -1;
        this.j = null;
        this.ka(a, b);
    }
    v(H, md);
    k = H.prototype;
    k.nl = function(a) {
        if (this.v) {
            var b = this.v.length;
            Ga(this.v, a.ba());
            a = a.qb().slice();
            var c;
            var d = 0;
            for (c = a.length; d < c; ++d) a[d] += b;
        } else this.v = a.ba().slice(), a = a.qb().slice(), this.c.push();
        this.c.push(a);
        this.changed();
    };
    k.clone = function() {
        for (var a = new H(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d) c[d] = this.c[d].slice();
        a.Y(this.ga, this.v.slice(), c);
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        if (this.B != this.f) {
            var e = this.c, f = 0, g = 0, h;
            var l = 0;
            for (h = e.length; l < h; ++l) {
                var m = e[l];
                g = sd(this.v, f, m, this.a, g);
                f = m[m.length - 1];
            }
            this.D = Math.sqrt(g);
            this.B = this.f;
        }
        e = be(this);
        f = this.c;
        g = this.a;
        l = this.D;
        h = 0;
        m = [ NaN, NaN ];
        var n;
        var p = 0;
        for (n = f.length; p < n; ++p) {
            var q = f[p];
            d = ud(e, h, q, g, l, !0, a, b, c, d, m);
            h = q[q.length - 1];
        }
        return d;
    };
    k.cd = function(a, b) {
        a: {
            var c = be(this), d = this.c, e = 0;
            if (0 !== d.length) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g) {
                    var h = d[g];
                    if (Gd(c, e, h, this.a, a, b)) {
                        a = !0;
                        break a;
                    }
                    e = h[h.length - 1];
                }
            }
            a = !1;
        }
        return a;
    };
    k.Io = function() {
        var a = be(this), b = this.c, c = 0, d = 0, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            d += Od(a, c, g, this.a);
            c = g[g.length - 1];
        }
        return d;
    };
    k.S = function(a) {
        if (void 0 !== a) {
            var b = be(this).slice();
            Wd(b, this.c, this.a, a);
        } else b = this.v;
        return Ad(b, 0, this.c, this.a);
    };
    k.wd = function() {
        return this.c;
    };
    function ce(a) {
        if (a.s != a.f) {
            var b = a.v, c = a.c, d = a.a, e = 0, f = [], g;
            var h = 0;
            for (g = c.length; h < g; ++h) {
                var l = c[h];
                e = eb(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1];
            }
            b = be(a);
            c = a.c;
            d = a.a;
            h = 0;
            g = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                g = Rd(b, h, m, d, f, 2 * l, g);
                h = m[m.length - 1];
            }
            a.C = g;
            a.s = a.f;
        }
        return a.C;
    }
    k.$l = function() {
        var a = new G(null);
        a.Y("XYM", ce(this).slice());
        return a;
    };
    function be(a) {
        if (a.P != a.f) {
            var b = a.v;
            a: {
                var c = a.c;
                var d;
                var e = 0;
                for (d = c.length; e < d; ++e) if (!Td(b, c[e], a.a, void 0)) {
                    c = !1;
                    break a;
                }
                c = !0;
            }
            c ? a.j = b : (a.j = b.slice(), a.j.length = Wd(a.j, a.c, a.a));
            a.P = a.f;
        }
        return a.j;
    }
    k.Bd = function(a) {
        var b = [], c = [], d = this.v, e = this.c, f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l;
        var m = 0;
        for (l = e.length; m < l; ++m) {
            var n = e[m], p = [];
            h = Md(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1];
        }
        b.length = h;
        d = new H(null);
        d.Y("XY", b, c);
        return d;
    };
    k.sm = function(a) {
        if (0 > a || this.c.length <= a) return null;
        if (0 === a) var b = 0; else b = this.c[a - 1], b = b[b.length - 1];
        a = this.c[a].slice();
        var c = a[a.length - 1];
        if (0 !== b) {
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e) a[e] -= b;
        }
        e = new D(null);
        e.Y(this.ga, this.v.slice(b, c), a);
        return e;
    };
    k.Ad = function() {
        var a = this.ga, b = this.v, c = this.c, d = [], e = 0, f, g;
        var h = 0;
        for (f = c.length; h < f; ++h) {
            var l = c[h].slice(), m = l[l.length - 1];
            if (0 !== e) {
                var n = 0;
                for (g = l.length; n < g; ++n) l[n] -= e;
            }
            n = new D(null);
            n.Y(a, b.slice(e, m), l);
            d.push(n);
            e = m;
        }
        return d;
    };
    k.getType = function() {
        return "MultiPolygon";
    };
    k.cb = function(a) {
        a: {
            var b = be(this), c = this.c, d = this.a, e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) {
                var h = c[g];
                if (Jd(b, e, h, d, a)) {
                    a = !0;
                    break a;
                }
                e = h[h.length - 1];
            }
            a = !1;
        }
        return a;
    };
    k.ka = function(a, b) {
        if (a) {
            pd(this, b, a, 3);
            this.v || (this.v = []);
            b = this.v;
            var c = this.a, d = this.c, e = 0;
            d = d ? d : [];
            var f = 0, g;
            var h = 0;
            for (g = a.length; h < g; ++h) e = xd(b, e, a[h], c, d[f]), d[f++] = e, e = e[e.length - 1];
            d.length = f;
            0 === d.length ? this.v.length = 0 : (a = d[d.length - 1], this.v.length = 0 === a.length ? 0 : a[a.length - 1]);
            this.changed();
        } else this.Y("XY", null, this.c);
    };
    k.Y = function(a, b, c) {
        od(this, a, b);
        this.c = c;
        this.changed();
    };
    function de(a, b) {
        var c = a.ga, d = [], e = [], f;
        var g = 0;
        for (f = b.length; g < f; ++g) {
            var h = b[g];
            0 === g && (c = h.ga);
            var l = d.length;
            var m = h.qb();
            var n;
            var p = 0;
            for (n = m.length; p < n; ++p) m[p] += l;
            Ga(d, h.ba());
            e.push(m);
        }
        a.Y(c, d, e);
    }
    var ee = /^#(?:[0-9a-f]{3,4}){1,2}$/i, fe = /^([a-z]*)$/i;
    function ge(a) {
        return Array.isArray(a) ? a : he(a);
    }
    function ie(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")";
        }
        return a;
    }
    var he = function() {
        var a = {}, b = 0;
        return function(c) {
            if (a.hasOwnProperty(c)) var d = a[c]; else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a) 0 === (d++ & 3) && (delete a[e], --b);
                }
                d = c;
                fe.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), 
                d = getComputedStyle(e).color, document.body.removeChild(e));
                if (ee.exec(d)) {
                    e = d.length - 1;
                    var f = 4 >= e ? 1 : 2;
                    var g = 4 === e || 8 === e;
                    e = parseInt(d.substr(1 + 0 * f, f), 16);
                    var h = parseInt(d.substr(1 + 1 * f, f), 16);
                    var l = parseInt(d.substr(1 + 2 * f, f), 16);
                    d = g ? parseInt(d.substr(1 + 3 * f, f), 16) : 255;
                    1 == f && (e = (e << 4) + e, h = (h << 4) + h, l = (l << 4) + l, g && (d = (d << 4) + d));
                    f = [ e, h, l, d / 255 ];
                } else 0 == d.indexOf("rgba(") ? (d = d.slice(5, -1).split(",").map(Number), f = je(d)) : 0 == d.indexOf("rgb(") ? (d = d.slice(4, -1).split(",").map(Number), 
                d.push(1), f = je(d)) : Pa(!1, 14);
                d = f;
                a[c] = d;
                ++b;
            }
            return d;
        };
    }();
    function je(a) {
        var b = [];
        b[0] = cc(a[0] + .5 | 0, 0, 255);
        b[1] = cc(a[1] + .5 | 0, 0, 255);
        b[2] = cc(a[2] + .5 | 0, 0, 255);
        b[3] = cc(a[3], 0, 1);
        return b;
    }
    function ke(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : ie(a);
    }
    function le(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d");
    }
    function me(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b);
    }
    function ne(a) {
        a && a.parentNode && a.parentNode.removeChild(a);
    }
    var oe = [ "experimental-webgl", "webgl", "webkit-3d", "moz-webgl" ];
    function pe(a, b) {
        var c, d, e = oe.length;
        for (d = 0; d < e; ++d) try {
            if (c = a.getContext(oe[d], b)) return c;
        } catch (f) {}
        return null;
    }
    var re, se = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", te = -1 !== se.indexOf("firefox"), ue = -1 !== se.indexOf("safari") && -1 == se.indexOf("chrom"), ve = -1 !== se.indexOf("webkit") && -1 == se.indexOf("edge"), we = -1 !== se.indexOf("macintosh"), xe = window.devicePixelRatio || 1, ye = !1, ze = function() {
        if (!("HTMLCanvasElement" in window)) return !1;
        try {
            var a = document.createElement("CANVAS").getContext("2d");
            return a ? (void 0 !== a.setLineDash && (ye = !0), !0) : !1;
        } catch (b) {
            return !1;
        }
    }(), Ae = "DeviceOrientationEvent" in window, Be = "geolocation" in navigator, Ce = "ontouchstart" in window, De = "PointerEvent" in window, Ee = !!navigator.msPointerEnabled, Fe = !1, Ge, Ie = [];
    if ("WebGLRenderingContext" in window) try {
        var Ke = pe(document.createElement("CANVAS"), {
            failIfMajorPerformanceCaveat: !0
        });
        Ke && (Fe = !0, Ge = Ke.getParameter(Ke.MAX_TEXTURE_SIZE), Ie = Ke.getSupportedExtensions());
    } catch (a) {}
    re = Fe;
    Aa = Ie;
    za = Ge;
    var Le = function() {
        var a, b = {};
        return function(c) {
            a || (a = document.createElement("div").style);
            if (!(c in b)) {
                a.font = c;
                var d = a.fontFamily;
                a.font = "";
                if (!d) return null;
                b[c] = d.split(/,\s?/);
            }
            return b[c];
        };
    }();
    function Me(a) {
        Rb.call(this);
        this.highWaterMark = void 0 !== a ? a : 2048;
        this.i = 0;
        this.a = {};
        this.c = this.f = null;
    }
    v(Me, Rb);
    function Ne(a) {
        return a.i > a.highWaterMark;
    }
    k = Me.prototype;
    k.clear = function() {
        this.i = 0;
        this.a = {};
        this.c = this.f = null;
        this.b("clear");
    };
    k.forEach = function(a, b) {
        for (var c = this.f; c; ) a.call(b, c.Tc, c.oc, this), c = c.nb;
    };
    k.get = function(a) {
        a = this.a[a];
        Pa(void 0 !== a, 15);
        if (a === this.c) return a.Tc;
        a === this.f ? (this.f = this.f.nb, this.f.Qb = null) : (a.nb.Qb = a.Qb, a.Qb.nb = a.nb);
        a.nb = null;
        a.Qb = this.c;
        this.c = this.c.nb = a;
        return a.Tc;
    };
    k.remove = function(a) {
        var b = this.a[a];
        Pa(void 0 !== b, 15);
        if (b === this.c) {
            if (this.c = b.Qb) this.c.nb = null;
        } else if (b === this.f) {
            if (this.f = b.nb) this.f.Qb = null;
        } else b.nb.Qb = b.Qb, b.Qb.nb = b.nb;
        delete this.a[a];
        --this.i;
        return b.Tc;
    };
    k.pop = function() {
        var a = this.f;
        delete this.a[a.oc];
        a.nb && (a.nb.Qb = null);
        this.f = a.nb;
        this.f || (this.c = null);
        --this.i;
        return a.Tc;
    };
    k.replace = function(a, b) {
        this.get(a);
        this.a[a].Tc = b;
    };
    k.set = function(a, b) {
        Pa(!(a in this.a), 16);
        b = {
            oc: a,
            nb: null,
            Qb: this.c,
            Tc: b
        };
        this.c ? this.c.nb = b : this.f = b;
        this.c = b;
        this.a[a] = b;
        ++this.i;
    };
    var Oe = [ 0, 0, 0, 1 ], Pe = [], Qe = [ 0, 0, 0, 1 ], Re = [ 0, 0, 0, 0 ], Se = new Me(), Te = {}, Ue = null, Ve = {}, Xe = function() {
        function a(a) {
            var b = We();
            b.font = "32px monospace";
            f = b.measureText("wmytzilWMYTZIL@#/&?$%10").width;
            var c = !0;
            "monospace" != a && (b.font = "32px " + a + ",monospace", c = b.measureText("wmytzilWMYTZIL@#/&?$%10").width != f);
            return c;
        }
        function b() {
            var b = !0, f;
            for (f in c) 60 > c[f] && (a(f) ? (c[f] = 60, Bb(Ve), Ue = null, d.clear()) : (++c[f], 
            b = !1));
            b && (window.clearInterval(e), e = void 0);
        }
        var c = Te, d = Se, e, f;
        return function(d) {
            if (d = Le(d)) for (var f = 0, g = d.length; f < g; ++f) {
                var m = d[f];
                m in c || (c[m] = 60, a(m) || (c[m] = 0, void 0 === e && (e = window.setInterval(b, 32))));
            }
        };
    }();
    function We() {
        var a = Ue;
        a || (a = Ue = le(1, 1));
        return a;
    }
    var Ye = function() {
        var a;
        return function(b) {
            var c = Ve[b];
            void 0 == c && (a || (a = document.createElement("span"), a.textContent = "M", a.style.margin = a.style.padding = "0 !important", 
            a.style.position = "absolute !important", a.style.left = "-99999px !important"), 
            a.style.font = b, document.body.appendChild(a), c = Ve[b] = a.offsetHeight, document.body.removeChild(a));
            return c;
        };
    }();
    function $e(a, b) {
        var c = We();
        a != c.font && (c.font = a);
        return c.measureText(b).width;
    }
    function bf(a, b, c, d) {
        0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d));
    }
    var cf = ad();
    function df(a, b, c, d, e, f, g, h, l, m, n) {
        if (1 != c) {
            var p = a.globalAlpha;
            a.globalAlpha = p * c;
        }
        b && a.setTransform.apply(a, b);
        a.drawImage(d, e, f, g, h, l, m, g * n, h * n);
        p && (a.globalAlpha = p);
        b && a.setTransform.apply(a, cf);
    }
    function ef(a) {
        this.j = a.opacity;
        this.u = a.rotateWithView;
        this.i = a.rotation;
        this.c = a.scale;
        this.s = a.snapToPixel;
    }
    k = ef.prototype;
    k.rf = function() {
        return this.j;
    };
    k.sf = function() {
        return this.u;
    };
    k.tf = function() {
        return this.i;
    };
    k.uf = function() {
        return this.c;
    };
    k.Se = function() {
        return this.s;
    };
    k.Hd = function(a) {
        this.j = a;
    };
    k.vf = function(a) {
        this.i = a;
    };
    k.Id = function(a) {
        this.c = a;
    };
    function ff(a) {
        this.C = this.a = this.g = null;
        this.Ya = void 0 !== a.fill ? a.fill : null;
        this.ma = [ 0, 0 ];
        this.o = a.points;
        this.b = void 0 !== a.radius ? a.radius : a.radius1;
        this.f = a.radius2;
        this.l = void 0 !== a.angle ? a.angle : 0;
        this.bb = void 0 !== a.stroke ? a.stroke : null;
        this.D = this.na = this.B = null;
        this.L = a.atlasManager;
        gf(this, this.L);
        ef.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        });
    }
    v(ff, ef);
    k = ff.prototype;
    k.clone = function() {
        var a = new ff({
            fill: this.wa() ? this.wa().clone() : void 0,
            points: this.o,
            radius: this.b,
            radius2: this.f,
            angle: this.l,
            snapToPixel: this.s,
            stroke: this.xa() ? this.xa().clone() : void 0,
            rotation: this.i,
            rotateWithView: this.u,
            atlasManager: this.L
        });
        a.Hd(this.j);
        a.Id(this.c);
        return a;
    };
    k.ic = function() {
        return this.B;
    };
    k.Bj = function() {
        return this.l;
    };
    k.wa = function() {
        return this.Ya;
    };
    k.Tg = function() {
        return this.C;
    };
    k.U = function() {
        return this.a;
    };
    k.Pe = function() {
        return this.D;
    };
    k.qf = function() {
        return 2;
    };
    k.Oc = function() {
        return this.ma;
    };
    k.Cj = function() {
        return this.o;
    };
    k.Dj = function() {
        return this.b;
    };
    k.si = function() {
        return this.f;
    };
    k.ac = function() {
        return this.na;
    };
    k.xa = function() {
        return this.bb;
    };
    k.Ai = function() {};
    k.load = function() {};
    k.Bk = function() {};
    function gf(a, b) {
        var c = "", d = "", e = 0, f = null, g = 0, h = 0;
        if (a.bb) {
            var l = a.bb.b;
            null === l && (l = Qe);
            l = ke(l);
            h = a.bb.a;
            void 0 === h && (h = 1);
            f = a.bb.c;
            g = a.bb.i;
            ye || (f = null, g = 0);
            d = a.bb.j;
            void 0 === d && (d = "round");
            c = a.bb.g;
            void 0 === c && (c = "round");
            e = a.bb.l;
            void 0 === e && (e = 10);
        }
        var m = 2 * (a.b + h) + 1;
        c = {
            strokeStyle: l,
            zk: h,
            size: m,
            lineCap: c,
            lineDash: f,
            lineDashOffset: g,
            lineJoin: d,
            miterLimit: e
        };
        if (void 0 === b) {
            var n = le(m, m);
            a.a = n.canvas;
            b = m = a.a.width;
            a.ai(c, n, 0, 0);
            a.Ya ? a.C = a.a : (n = le(c.size, c.size), a.C = n.canvas, a.$h(c, n, 0, 0));
        } else m = Math.round(m), (d = !a.Ya) && (n = a.$h.bind(a, c)), a.bb ? (e = a.bb, 
        void 0 === e.f && (e.f = "s", e.f = e.b ? "string" === typeof e.b ? e.f + e.b : e.f + x(e.b).toString() : e.f + "-", 
        e.f += "," + (void 0 !== e.g ? e.g.toString() : "-") + "," + (e.c ? e.c.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.a ? e.a.toString() : "-")), 
        e = e.f) : e = "-", a.Ya ? (f = a.Ya, void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? x(f.b).toString() : "f" + (f.b ? ie(f.b) : "-")), 
        f = f.a) : f = "-", a.g && e == a.g[1] && f == a.g[2] && a.b == a.g[3] && a.f == a.g[4] && a.l == a.g[5] && a.o == a.g[6] || (a.g = [ "r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.f ? a.f.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-") + (void 0 !== a.o ? a.o.toString() : "-"), e, f, a.b, a.f, a.l, a.o ]), 
        n = b.add(a.g[0], m, m, a.ai.bind(a, c), n), a.a = n.image, a.ma = [ n.offsetX, n.offsetY ], 
        b = n.image.width, a.C = d ? n.mn : a.a;
        a.B = [ m / 2, m / 2 ];
        a.na = [ m, m ];
        a.D = [ b, b ];
    }
    k.ai = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        var e = this.o;
        if (Infinity === e) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            var f = void 0 !== this.f ? this.f : this.b;
            f !== this.b && (e *= 2);
            for (c = 0; c <= e; c++) {
                d = 2 * c * Math.PI / e - Math.PI / 2 + this.l;
                var g = 0 === c % 2 ? this.b : f;
                b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d));
            }
        }
        this.Ya && (c = this.Ya.b, null === c && (c = Oe), b.fillStyle = ke(c), b.fill());
        this.bb && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.zk, a.lineDash && (b.setLineDash(a.lineDash), 
        b.lineDashOffset = a.lineDashOffset), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, 
        b.miterLimit = a.miterLimit, b.stroke());
        b.closePath();
    };
    k.$h = function(a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        c = this.o;
        if (Infinity === c) b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0); else {
            d = void 0 !== this.f ? this.f : this.b;
            d !== this.b && (c *= 2);
            var e;
            for (e = 0; e <= c; e++) {
                var f = 2 * e * Math.PI / c - Math.PI / 2 + this.l;
                var g = 0 === e % 2 ? this.b : d;
                b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f));
            }
        }
        b.fillStyle = Oe;
        b.fill();
        this.bb && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.zk, a.lineDash && (b.setLineDash(a.lineDash), 
        b.lineDashOffset = a.lineDashOffset), b.stroke());
        b.closePath();
    };
    function hf(a) {
        a = a || {};
        ff.call(this, {
            points: Infinity,
            fill: a.fill,
            radius: a.radius,
            snapToPixel: a.snapToPixel,
            stroke: a.stroke,
            atlasManager: a.atlasManager
        });
    }
    v(hf, ff);
    hf.prototype.clone = function() {
        var a = new hf({
            fill: this.wa() ? this.wa().clone() : void 0,
            stroke: this.xa() ? this.xa().clone() : void 0,
            radius: this.b,
            snapToPixel: this.s,
            atlasManager: this.L
        });
        a.Hd(this.j);
        a.Id(this.c);
        return a;
    };
    hf.prototype.setRadius = function(a) {
        this.b = a;
        gf(this, this.L);
    };
    function jf() {
        this.b = {};
        this.a = 0;
        this.f = 32;
    }
    jf.prototype.clear = function() {
        this.b = {};
        this.a = 0;
    };
    function kf(a) {
        if (a.a > a.f) {
            var b = 0, c;
            for (c in a.b) {
                var d = a.b[c];
                0 !== (b++ & 3) || Sb(d) || (delete a.b[c], --a.a);
            }
        }
    }
    jf.prototype.get = function(a, b, c) {
        a = b + ":" + a + ":" + (c ? ie(c) : "null");
        return a in this.b ? this.b[a] : null;
    };
    jf.prototype.set = function(a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? ie(c) : "null")] = d;
        ++this.a;
    };
    jf.prototype.c = function(a) {
        this.f = a;
        kf(this);
    };
    var lf = new jf();
    function mf(a, b, c, d, e, f) {
        Rb.call(this);
        this.l = null;
        this.M = a ? a : new Image();
        null !== d && (this.M.crossOrigin = d);
        this.a = f ? document.createElement("CANVAS") : null;
        this.j = f;
        this.i = null;
        this.c = e;
        this.f = c;
        this.g = b;
        this.o = !1;
        2 == this.c && nf(this);
    }
    v(mf, Rb);
    function nf(a) {
        var b = le(1, 1);
        try {
            b.drawImage(a.M, 0, 0), b.getImageData(0, 0, 1, 1);
        } catch (c) {
            a.o = !0;
        }
    }
    mf.prototype.u = function() {
        this.c = 3;
        this.i.forEach(Fb);
        this.i = null;
        this.b("change");
    };
    mf.prototype.s = function() {
        this.c = 2;
        this.f && (this.M.width = this.f[0], this.M.height = this.f[1]);
        this.f = [ this.M.width, this.M.height ];
        this.i.forEach(Fb);
        this.i = null;
        nf(this);
        if (!this.o && null !== this.j) {
            this.a.width = this.M.width;
            this.a.height = this.M.height;
            var a = this.a.getContext("2d");
            a.drawImage(this.M, 0, 0);
            for (var b = a.getImageData(0, 0, this.M.width, this.M.height), c = b.data, d = this.j[0] / 255, e = this.j[1] / 255, f = this.j[2] / 255, g = 0, h = c.length; g < h; g += 4) c[g] *= d, 
            c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0);
        }
        this.b("change");
    };
    mf.prototype.U = function() {
        return this.a ? this.a : this.M;
    };
    mf.prototype.load = function() {
        if (0 == this.c) {
            this.c = 1;
            this.i = [ Kb(this.M, "error", this.u, this), Kb(this.M, "load", this.s, this) ];
            try {
                this.M.src = this.g;
            } catch (a) {
                this.u();
            }
        }
    };
    function of(a) {
        a = a || {};
        this.l = void 0 !== a.anchor ? a.anchor : [ .5, .5 ];
        this.o = null;
        this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
        this.B = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
        this.D = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
        this.na = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null, c = void 0 !== a.imgSize ? a.imgSize : null, d = a.src;
        Pa(!(void 0 !== d && b), 4);
        Pa(!b || b && c, 5);
        void 0 !== d && 0 !== d.length || !b || (d = b.src || x(b).toString());
        Pa(void 0 !== d && 0 < d.length, 6);
        var e = void 0 !== a.src ? 0 : 2;
        this.g = void 0 !== a.color ? ge(a.color) : null;
        var f = this.na, g = this.g, h = lf.get(d, f, g);
        h || (h = new mf(b, d, c, f, e, g), lf.set(d, f, g, h));
        this.b = h;
        this.ma = void 0 !== a.offset ? a.offset : [ 0, 0 ];
        this.f = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
        this.L = null;
        this.C = void 0 !== a.size ? a.size : null;
        ef.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
        });
    }
    v(of, ef);
    k = of.prototype;
    k.clone = function() {
        return new of({
            anchor: this.l.slice(),
            anchorOrigin: this.a,
            anchorXUnits: this.B,
            anchorYUnits: this.D,
            crossOrigin: this.na,
            color: this.g && this.g.slice ? this.g.slice() : this.g || void 0,
            src: this.b.g,
            offset: this.ma.slice(),
            offsetOrigin: this.f,
            size: null !== this.C ? this.C.slice() : void 0,
            opacity: this.j,
            scale: this.c,
            snapToPixel: this.s,
            rotation: this.i,
            rotateWithView: this.u
        });
    };
    k.ic = function() {
        if (this.o) return this.o;
        var a = this.l, b = this.ac();
        if ("fraction" == this.B || "fraction" == this.D) {
            if (!b) return null;
            a = this.l.slice();
            "fraction" == this.B && (a[0] *= b[0]);
            "fraction" == this.D && (a[1] *= b[1]);
        }
        if ("top-left" != this.a) {
            if (!b) return null;
            a === this.l && (a = this.l.slice());
            if ("top-right" == this.a || "bottom-right" == this.a) a[0] = -a[0] + b[0];
            if ("bottom-left" == this.a || "bottom-right" == this.a) a[1] = -a[1] + b[1];
        }
        return this.o = a;
    };
    k.Xp = function() {
        return this.g;
    };
    k.U = function(a) {
        return this.b.U(a);
    };
    k.Pe = function() {
        return this.b.f;
    };
    k.qf = function() {
        return this.b.c;
    };
    k.Tg = function() {
        var a = this.b;
        if (!a.l) if (a.o) {
            var b = a.f[0], c = a.f[1], d = le(b, c);
            d.fillRect(0, 0, b, c);
            a.l = d.canvas;
        } else a.l = a.M;
        return a.l;
    };
    k.Oc = function() {
        if (this.L) return this.L;
        var a = this.ma;
        if ("top-left" != this.f) {
            var b = this.ac(), c = this.b.f;
            if (!b || !c) return null;
            a = a.slice();
            if ("top-right" == this.f || "bottom-right" == this.f) a[0] = c[0] - b[0] - a[0];
            if ("bottom-left" == this.f || "bottom-right" == this.f) a[1] = c[1] - b[1] - a[1];
        }
        return this.L = a;
    };
    k.Yp = function() {
        return this.b.g;
    };
    k.ac = function() {
        return this.C ? this.C : this.b.f;
    };
    k.Ai = function(a, b) {
        y(this.b, "change", a, b);
    };
    k.load = function() {
        this.b.load();
    };
    k.Bk = function(a, b) {
        Lb(this.b, "change", a, b);
    };
    function pf(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0;
    }
    pf.prototype.clone = function() {
        var a = this.b;
        return new pf({
            color: a && a.slice ? a.slice() : a || void 0
        });
    };
    pf.prototype.f = function() {
        return this.b;
    };
    pf.prototype.c = function(a) {
        this.b = a;
        this.a = void 0;
    };
    function qf(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.g = a.lineCap;
        this.c = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineDashOffset;
        this.j = a.lineJoin;
        this.l = a.miterLimit;
        this.a = a.width;
        this.f = void 0;
    }
    k = qf.prototype;
    k.clone = function() {
        var a = this.b;
        return new qf({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.g,
            lineDash: this.c ? this.c.slice() : void 0,
            lineDashOffset: this.i,
            lineJoin: this.j,
            miterLimit: this.l,
            width: this.a
        });
    };
    k.Zp = function() {
        return this.b;
    };
    k.am = function() {
        return this.g;
    };
    k.$p = function() {
        return this.c;
    };
    k.bm = function() {
        return this.i;
    };
    k.cm = function() {
        return this.j;
    };
    k.jm = function() {
        return this.l;
    };
    k.aq = function() {
        return this.a;
    };
    k.bq = function(a) {
        this.b = a;
        this.f = void 0;
    };
    k.tr = function(a) {
        this.g = a;
        this.f = void 0;
    };
    k.setLineDash = function(a) {
        this.c = a;
        this.f = void 0;
    };
    k.ur = function(a) {
        this.i = a;
        this.f = void 0;
    };
    k.vr = function(a) {
        this.j = a;
        this.f = void 0;
    };
    k.zr = function(a) {
        this.l = a;
        this.f = void 0;
    };
    k.Fr = function(a) {
        this.a = a;
        this.f = void 0;
    };
    function rf(a) {
        a = a || {};
        this.Yc = null;
        this.fb = sf;
        void 0 !== a.geometry && this.setGeometry(a.geometry);
        this.Ya = void 0 !== a.fill ? a.fill : null;
        this.M = void 0 !== a.image ? a.image : null;
        this.sc = void 0 !== a.renderer ? a.renderer : null;
        this.bb = void 0 !== a.stroke ? a.stroke : null;
        this.pa = void 0 !== a.text ? a.text : null;
        this.Ae = a.zIndex;
    }
    k = rf.prototype;
    k.clone = function() {
        var a = this.getGeometry();
        a && a.clone && (a = a.clone());
        return new rf({
            geometry: a,
            fill: this.wa() ? this.wa().clone() : void 0,
            image: this.U() ? this.U().clone() : void 0,
            stroke: this.xa() ? this.xa().clone() : void 0,
            text: this.Fa() ? this.Fa().clone() : void 0,
            zIndex: this.getZIndex()
        });
    };
    k.Qe = function() {
        return this.sc;
    };
    k.Dr = function(a) {
        this.sc = a;
    };
    k.getGeometry = function() {
        return this.Yc;
    };
    k.Xl = function() {
        return this.fb;
    };
    k.wa = function() {
        return this.Ya;
    };
    k.If = function(a) {
        this.Ya = a;
    };
    k.U = function() {
        return this.M;
    };
    k.Ch = function(a) {
        this.M = a;
    };
    k.xa = function() {
        return this.bb;
    };
    k.Kf = function(a) {
        this.bb = a;
    };
    k.Fa = function() {
        return this.pa;
    };
    k.Kd = function(a) {
        this.pa = a;
    };
    k.getZIndex = function() {
        return this.Ae;
    };
    k.setGeometry = function(a) {
        "function" === typeof a ? this.fb = a : "string" === typeof a ? this.fb = function(b) {
            return b.get(a);
        } : a ? void 0 !== a && (this.fb = function() {
            return a;
        }) : this.fb = sf;
        this.Yc = a;
    };
    k.setZIndex = function(a) {
        this.Ae = a;
    };
    function tf(a) {
        if ("function" !== typeof a) {
            if (Array.isArray(a)) var b = a; else Pa(a instanceof rf, 41), b = [ a ];
            a = function() {
                return b;
            };
        }
        return a;
    }
    var uf = null;
    function vf() {
        if (!uf) {
            var a = new pf({
                color: "rgba(255,255,255,0.4)"
            }), b = new qf({
                color: "#3399CC",
                width: 1.25
            });
            uf = [ new rf({
                image: new hf({
                    fill: a,
                    stroke: b,
                    radius: 5
                }),
                fill: a,
                stroke: b
            }) ];
        }
        return uf;
    }
    function wf() {
        var a = {}, b = [ 255, 255, 255, 1 ], c = [ 0, 153, 255, 1 ];
        a.Polygon = [ new rf({
            fill: new pf({
                color: [ 255, 255, 255, .5 ]
            })
        }) ];
        a.MultiPolygon = a.Polygon;
        a.LineString = [ new rf({
            stroke: new qf({
                color: b,
                width: 5
            })
        }), new rf({
            stroke: new qf({
                color: c,
                width: 3
            })
        }) ];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [ new rf({
            image: new hf({
                radius: 6,
                fill: new pf({
                    color: c
                }),
                stroke: new qf({
                    color: b,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        }) ];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString, a.Point);
        return a;
    }
    function sf(a) {
        return a.getGeometry();
    }
    function xf(a) {
        Vb.call(this);
        this.c = void 0;
        this.a = "geometry";
        this.j = null;
        this.g = void 0;
        this.i = null;
        y(this, Xb(this.a), this.We, this);
        void 0 !== a && (a instanceof ld || !a ? this.setGeometry(a) : this.H(a));
    }
    v(xf, Vb);
    k = xf.prototype;
    k.clone = function() {
        var a = new xf(this.K());
        a.Rc(this.a);
        var b = this.getGeometry();
        b && a.setGeometry(b.clone());
        (b = this.ad()) && a.Eg(b);
        return a;
    };
    k.getGeometry = function() {
        return this.get(this.a);
    };
    k.Pn = function() {
        return this.c;
    };
    k.Yl = function() {
        return this.a;
    };
    k.ad = function() {
        return this.j;
    };
    k.lb = function() {
        return this.g;
    };
    k.Qn = function() {
        this.changed();
    };
    k.We = function() {
        this.i && (Fb(this.i), this.i = null);
        var a = this.getGeometry();
        a && (this.i = y(a, "change", this.Qn, this));
        this.changed();
    };
    k.setGeometry = function(a) {
        this.set(this.a, a);
    };
    k.Eg = function(a) {
        this.g = (this.j = a) ? yf(a) : void 0;
        this.changed();
    };
    k.tc = function(a) {
        this.c = a;
        this.changed();
    };
    k.Rc = function(a) {
        Lb(this, Xb(this.a), this.We, this);
        this.a = a;
        y(this, Xb(this.a), this.We, this);
        this.We();
    };
    function yf(a) {
        var b;
        if ("function" === typeof a) 2 == a.length ? b = function(b) {
            return a(this, b);
        } : b = a; else {
            if (Array.isArray(a)) var c = a; else Pa(a instanceof rf, 41), c = [ a ];
            b = function() {
                return c;
            };
        }
        return b;
    }
    function zf(a) {
        Vb.call(this);
        var b = Ab({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.H(b);
        this.a = {
            layer: this,
            $e: !0
        };
    }
    v(zf, Vb);
    k = zf.prototype;
    k.getType = function() {
        return this.type;
    };
    function Af(a) {
        a.a.opacity = cc(a.xb(), 0, 1);
        a.a.yk = a.rg();
        a.a.visible = a.Ma();
        a.a.extent = a.A();
        a.a.zIndex = a.getZIndex();
        a.a.maxResolution = a.Za();
        a.a.minResolution = Math.max(a.$a(), 0);
        return a.a;
    }
    k.A = function() {
        return this.get("extent");
    };
    k.Za = function() {
        return this.get("maxResolution");
    };
    k.$a = function() {
        return this.get("minResolution");
    };
    k.xb = function() {
        return this.get("opacity");
    };
    k.Ma = function() {
        return this.get("visible");
    };
    k.getZIndex = function() {
        return this.get("zIndex");
    };
    k.qc = function(a) {
        this.set("extent", a);
    };
    k.uc = function(a) {
        this.set("maxResolution", a);
    };
    k.vc = function(a) {
        this.set("minResolution", a);
    };
    k.ab = function(a) {
        this.set("opacity", a);
    };
    k.setVisible = function(a) {
        this.set("visible", a);
    };
    k.setZIndex = function(a) {
        this.set("zIndex", a);
    };
    function Bf(a) {
        var b = Ab({}, a);
        delete b.source;
        zf.call(this, b);
        this.s = this.u = this.o = null;
        a.map && this.setMap(a.map);
        y(this, Xb("source"), this.fn, this);
        this.ld(a.source ? a.source : null);
    }
    v(Bf, zf);
    function Cf(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution;
    }
    k = Bf.prototype;
    k.ng = function(a) {
        a = a ? a : [];
        a.push(Af(this));
        return a;
    };
    k.aa = function() {
        return this.get("source") || null;
    };
    k.rg = function() {
        var a = this.aa();
        return a ? a.getState() : "undefined";
    };
    k.kp = function() {
        this.changed();
    };
    k.fn = function() {
        this.s && (Fb(this.s), this.s = null);
        var a = this.aa();
        a && (this.s = y(a, "change", this.kp, this));
        this.changed();
    };
    k.setMap = function(a) {
        this.o && (Fb(this.o), this.o = null);
        a || this.changed();
        this.u && (Fb(this.u), this.u = null);
        a && (this.o = y(a, "precompose", function(a) {
            var b = Af(this);
            b.$e = !1;
            b.zIndex = Infinity;
            a.frameState.layerStatesArray.push(b);
            a.frameState.layerStates[x(this)] = b;
        }, this), this.u = y(this, "change", a.render, a), this.changed());
    };
    k.ld = function(a) {
        this.set("source", a);
    };
    function I(a) {
        a = a ? a : {};
        var b = Ab({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        Bf.call(this, b);
        this.C = void 0 !== a.declutter ? a.declutter : !1;
        this.g = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.B = null;
        this.R = void 0;
        this.j(a.style);
        this.Z = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.$ = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
        this.l = a.renderMode || "vector";
        this.type = "VECTOR";
    }
    v(I, Bf);
    I.prototype.ad = function() {
        return this.B;
    };
    I.prototype.lb = function() {
        return this.R;
    };
    I.prototype.j = function(a) {
        this.B = void 0 !== a ? a : vf;
        this.R = null === a ? void 0 : tf(this.B);
        this.changed();
    };
    var Df = [ 156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, .5971642833948135, .298582141697, .14929107084, .07464553542, .03732276771 ];
    function Ef(a) {
        return a instanceof C ? a.S() : a instanceof D ? a.ni().S() : rb(a.A());
    }
    function Hf(a) {
        var b = "", c = null;
        "string" === typeof a ? 0 === a.indexOf("rgba") ? c = If(a) : b = a : Array.isArray(a) && (c = a);
        null !== c && (b = [ "rgb(", c[0], ",", c[1], ",", c[2], ")" ].join(""));
        return b;
    }
    function Jf(a) {
        var b = null, c = null;
        "string" === typeof a ? 0 === a.indexOf("rgba") && (c = If(a)) : Array.isArray(a) && (c = a);
        c && void 0 !== c[3] && (b = +c[3]);
        return b;
    }
    function Kf(a) {
        var b = null;
        a instanceof rf ? b = a : a instanceof I || a instanceof xf ? (b = a.ad()) && b instanceof Function && (b = b()[0]) : a instanceof Function && (b = a()[0]);
        return b;
    }
    function If(a) {
        var b = null;
        (a = a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)) && a.length && (b = [ +a[1], +a[2], +a[3], +a[4] ]);
        return b;
    }
    function Lf(a, b) {
        a.forEach(Ub);
        a.length = 0;
        b && (b.forEach(va), b.length = 0);
    }
    function Mf() {}
    window.google && window.google.maps && v(Mf, google.maps.OverlayView);
    k = Mf.prototype;
    k.bi = !1;
    k.Kj = 0;
    k.Lj = 0;
    k.draw = function() {
        if (this.bi) Nf(this); else {
            var a = this.a;
            if (a) {
                a = a.getContext("2d");
                var b = a.canvas.height;
                this.Lj = a.canvas.width;
                this.Kj = b;
                Nf(this) && (this.bi = !0);
            }
        }
    };
    function Nf(a) {
        var b = a.get("position");
        if (!b) return !1;
        var c = a.getProjection();
        if (!c) return !1;
        c = c.fromLatLngToDivPixel(b);
        var d = a.Kj, e = a.Lj, f = a.get("offsetX") || 0, g = a.get("offsetY") || 0;
        b = a.a.style;
        b.top = c.y - d / 2 + g + "px";
        b.left = c.x - e / 2 + f + "px";
        c = a.get("minZoom");
        d = a.get("maxZoom");
        void 0 === c && void 0 === d ? a = "" : (a = a.getMap()) ? (a = a.getZoom(), a = a < c || a > d ? "hidden" : "") : a = "";
        b.visibility = a;
        return !0;
    }
    k.onRemove = function() {
        var a = this.a;
        a && a.parentNode && a.parentNode.removeChild(a);
    };
    function Of(a) {
        this.set("font", "normal 10px sans-serif");
        this.set("textAlign", "center");
        this.set("textBaseline", "middle");
        this.set("zIndex", 1e3);
        this.setValues(a);
    }
    v(Of, Mf);
    Of.prototype.changed = function(a) {
        switch (a) {
          case "fontColor":
          case "fontFamily":
          case "fontSize":
          case "fontWeight":
          case "strokeColor":
          case "strokeWeight":
          case "text":
          case "textAlign":
          case "textBaseline":
            Pf(this);
            break;

          case "maxZoom":
          case "minZoom":
          case "offsetX":
          case "offsetY":
          case "position":
            this.draw();
        }
    };
    function Pf(a) {
        var b = a.a;
        if (b) {
            var c = b.style, d = a.get("fontColor");
            if (d && (c.zIndex = a.get("zIndex"), c = b.getContext("2d"), c.clearRect(0, 0, b.width, b.height), 
            c.textBaseline = a.get("textBaseline"), c.strokeStyle = a.get("strokeColor"), c.fillStyle = d, 
            c.font = a.get("font"), c.textAlign = a.get("textAlign"), d = a.get("text"))) {
                var e = b.width / 2;
                b = b.height / 2;
                if (a = Number(a.get("strokeWeight"))) c.lineWidth = a, c.strokeText(d, e, b);
                c.fillText(d, e, b);
            }
        }
    }
    Of.prototype.onAdd = function() {
        var a = this.a = document.createElement("canvas");
        a.style.position = "absolute";
        a.getContext("2d").lineJoin = "round";
        Pf(this);
        var b = this.getPanes();
        b && b.markerLayer.appendChild(a);
    };
    function Qf(a, b) {
        this.b = a;
        this.setValues(b);
    }
    v(Qf, Mf);
    Qf.prototype.changed = function(a) {
        switch (a) {
          case "maxZoom":
          case "minZoom":
          case "offsetX":
          case "offsetY":
          case "position":
            this.draw();
        }
    };
    Qf.prototype.onAdd = function() {
        var a = this.a = document.createElement("canvas");
        a.style.position = "absolute";
        var b = this.a;
        if (b) {
            var c = this.b.U(1);
            if (c) {
                b.style.zIndex = this.get("zIndex");
                var d = b.getContext("2d");
                d.clearRect(0, 0, b.width, b.height);
                var e = this.b.ic() || [ 0, 0 ], f = this.b.c || 1, g = this.b.i || 0, h = this.b.j || 1, l = e[0] * f;
                e = e[1] * f;
                var m = b.width / 2 - l;
                b = b.height / 2 - e;
                d.translate(m + l, b + e);
                d.rotate(g);
                d.translate(-m - l, -b - e);
                d.globalAlpha = h;
                d.drawImage(c, m, b, c.width * f, c.height * f);
            }
        }
        (c = this.getPanes()) && c.markerLayer.appendChild(a);
    };
    function Rf(a, b) {
        var c = null;
        if (a instanceof C) c = Sf(a, b); else if (a instanceof G || a instanceof B || a instanceof F || a instanceof D || a instanceof H) if (b = void 0 !== b ? b.T().j : "EPSG:3857", 
        c = null, a instanceof B) b = Tf(a.S(), b), c = new google.maps.Data.LineString(b); else if (a instanceof D) b = Tf(a.S()[0], b), 
        c = new google.maps.Data.Polygon([ b ]); else if (a instanceof F) b = Uf(a.S(), b), 
        c = new google.maps.Data.MultiLineString(b); else if (a instanceof H) {
            a = a.Ad();
            c = [];
            for (var d = 0, e = a.length; d < e; d++) {
                var f = Uf(a[d].S(), b);
                f = new google.maps.Data.Polygon(f);
                c.push(f);
            }
            c = new google.maps.Data.MultiPolygon(c);
        } else a instanceof G && (b = Tf(a.S(), b), c = new google.maps.Data.MultiPoint(b));
        qa(null !== c, "Expected geometry to be ol.geom.Point|MultiPoint|LineString|MultiLineString|Polygon|MultiPolygon");
        return c;
    }
    function Sf(a, b) {
        b = void 0 !== b ? b.T().j : "EPSG:3857";
        a = a instanceof C ? a.S() : a;
        a = Xc(a, b, "EPSG:4326");
        return new google.maps.LatLng(a[1], a[0]);
    }
    function Tf(a, b) {
        b = b || "EPSG:3857";
        for (var c = [], d, e = 0, f = a.length; e < f; e++) d = Xc(a[e], b, "EPSG:4326"), 
        c.push(new google.maps.LatLng(d[1], d[0]));
        return c;
    }
    function Uf(a, b) {
        b = b || "EPSG:3857";
        for (var c = [], d = 0, e = a.length; d < e; d++) c.push(Tf(a[d], b));
        return c;
    }
    function Vf(a, b, c) {
        var d = null;
        if (a = Kf(a)) {
            d = {};
            var e = a.xa();
            if (e) {
                var f = e.b;
                f && (d.strokeColor = Hf(f), f = Jf(f), null !== f && (d.strokeOpacity = f));
                (e = e.a) && (d.strokeWeight = e);
            }
            if (e = a.wa()) if (e = e.b) d.fillColor = Hf(e), e = Jf(e), null !== e && (d.fillOpacity = e);
            if (f = a.U()) {
                a = {};
                e = {};
                b = void 0 !== b.useCanvas ? b.useCanvas : !1;
                if (f instanceof hf || f instanceof ff) {
                    if (f instanceof hf) e.path = google.maps.SymbolPath.CIRCLE; else if (f instanceof ff) {
                        b = "M ";
                        var g = f.o, h = f.b, l = void 0 !== f.f ? f.f : f.b, m = f.i + f.l;
                        0 == l && void 0 === f.f && (g /= 2);
                        l !== h && (g *= 2);
                        for (var n = 0; n < g; n++) {
                            var p = 0 == n % 2 ? h : l, q = 2 * n * Math.PI / g - Math.PI / 2 + m;
                            b += .1 * p * Math.cos(q) + "," + .1 * p * Math.sin(q) + " ";
                        }
                        e.path = b + "Z";
                    }
                    if (b = f.xa()) (g = b.b) && (e.strokeColor = Hf(g)), e.strokeWeight = b.a;
                    if (b = f.wa()) if (b = b.b) e.fillColor = Hf(b), b = Jf(b), e.fillOpacity = null !== b ? b : 1;
                    (f = f.b) && (e.scale = f);
                } else f instanceof of && !b && ((b = f.b.g) && (e.url = b), b = f.c, (g = f.ic()) && (e.anchor = void 0 !== b ? new google.maps.Point(g[0] * b, g[1] * b) : new google.maps.Point(g[0], g[1])), 
                (g = f.Oc()) && (e.origin = new google.maps.Point(g[0], g[1])), f = f.ac()) && (e.size = new google.maps.Size(f[0], f[1]), 
                void 0 !== b && (e.scaledSize = new google.maps.Size(f[0] * b, f[1] * b)));
                Object.keys(a).length ? d.icon = a : Object.keys(e).length && (d.icon = e);
            }
            0 === Object.keys(d).length ? d.visible = !1 : void 0 !== c && (d.zIndex = 2 * c);
        }
        return d;
    }
    function Wf(a, b, c) {
        this.f = a;
        this.a = b;
        this.c = c;
        this.b = null;
        this.Ae = 0;
    }
    window.google && window.google.maps && v(Wf, google.maps.OverlayView);
    Wf.prototype.onAdd = function() {
        var a = document.createElement("div");
        a.style.borderStyle = "none";
        a.style.borderWidth = "0px";
        a.style.position = "absolute";
        a.style.zIndex = this.Ae;
        var b = document.createElement("img");
        b.src = this.f;
        b.style.width = "100%";
        b.style.height = "100%";
        b.style.position = "absolute";
        a.appendChild(b);
        this.b = a;
        this.getPanes().mapPane.appendChild(a);
    };
    Wf.prototype.draw = function() {
        var a = this.b, b = this.a[0], c = this.a[1];
        a.style.width = b + "px";
        a.style.height = c + "px";
        var d = this.getProjection(), e = d.fromLatLngToDivPixel(this.c);
        c = e.x;
        e = e.y;
        d = d.getWorldWidth();
        d < b && (c -= d * Math.max(Math.floor(b / d) / 2, 1));
        a.style.top = e + "px";
        a.style.left = c + "px";
    };
    Wf.prototype.setZIndex = function(a) {
        this.Ae = a;
        this.b && (this.b.style.zIndex = a);
    };
    Wf.prototype.onRemove = function() {
        this.b && (this.b.parentNode.removeChild(this.b), this.b = null);
    };
    function Xf(a) {
        this.setMap(a);
    }
    window.google && window.google.maps && v(Xf, google.maps.OverlayView);
    Xf.prototype.b = function() {
        return this.getPanes();
    };
    Xf.prototype.onAdd = function() {};
    Xf.prototype.draw = function() {};
    Xf.prototype.onRemove = function() {};
    function Yf(a, b) {
        this.qa = [];
        this.L = [];
        pa.call(this, a, b);
    }
    v(Yf, pa);
    Yf.prototype.Na = function() {};
    Yf.prototype.Ia = function() {
        Lf(this.qa, this.L);
    };
    function Zf(a, b, c) {
        this.a = c.feature;
        this.c = c.data;
        this.j = c.index;
        this.g = c.mapIconOptions;
        this.f = void 0 !== c.visible ? c.visible : !0;
        Yf.call(this, a, b);
    }
    v(Zf, Yf);
    k = Zf.prototype;
    k.Lc = null;
    k.Rb = null;
    k.Pb = null;
    k.Na = function() {
        Yf.prototype.Na.call(this);
        var a = $f(this), b = this.a.getGeometry();
        b = Rf(b, void 0);
        this.Lc = new google.maps.Data.Feature({
            geometry: b
        });
        this.f && this.c.add(this.Lc);
        (b = Vf(this.a, this.g, this.j)) && this.c.overrideStyle(this.Lc, b);
        var c = Sf(Ef(a));
        if (b = Kf(this.a)) {
            var d = b.getZIndex();
            d = void 0 !== d ? d : this.j;
            var e = b.U(), f = void 0 !== this.g.useCanvas ? this.g.useCanvas : !1;
            e && e instanceof of && f && (this.Pb = new Qf(e, {
                align: "center",
                position: c,
                zIndex: 2 * d + 1
            }), this.f && this.Pb.setMap(this.b));
            if (b = b.Fa()) {
                c = {
                    align: "center",
                    position: c,
                    zIndex: 2 * d + 1
                };
                (d = b.Fa()) && (c.text = d);
                (d = b.b) && (c.font = d);
                (d = b.wa()) && (d = d.b) && (c.fontColor = d);
                if (d = b.xa()) (e = d.b) && (c.strokeColor = e), (d = d.a) && (c.strokeWeight = d);
                (d = b.f) && (c.offsetX = d);
                (d = b.c) && (c.offsetY = d);
                (d = b.i) && (c.textAlign = d);
                (b = b.g) && (c.textBaseline = b);
                this.Rb = new Of(c);
                this.f && this.Rb.setMap(this.b);
            }
        }
        b = this.qa;
        this.i = a.G("change", this.Ug, this);
        b.push(this.i);
        b.push(this.a.G("change:" + this.a.a, this.Km, this));
    };
    k.Ia = function() {
        this.c.remove(this.Lc);
        this.Lc = null;
        this.Pb && (this.Pb.setMap(null), this.Pb = null);
        this.Rb && (this.Rb.setMap(null), this.Rb = null);
        Yf.prototype.Ia.call(this);
    };
    k.setVisible = function(a) {
        a && !this.f ? (this.c.add(this.Lc), this.Pb && this.Pb.setMap(this.b), this.Rb && this.Rb.setMap(this.b), 
        this.f = !0) : !a && this.f && (this.c.remove(this.Lc), this.Pb && this.Pb.setMap(null), 
        this.Rb && this.Rb.setMap(null), this.f = !1);
    };
    function $f(a) {
        a = a.a.getGeometry();
        qa(void 0 !== a, "Expected feature to have geometry");
        return a;
    }
    k.Ug = function() {
        var a = $f(this);
        this.Lc.setGeometry(Rf(a));
        if (this.Rb) {
            var b = Sf(Ef(a));
            this.Rb.set("position", b);
        }
        this.Pb && (b = Sf(Ef(a)), this.Pb.set("position", b));
    };
    k.Km = function() {
        var a = this.qa;
        Ub(this.i);
        a.splice(a.indexOf(this.i), 1);
        this.i = this.a.getGeometry().G("change", this.Ug, this);
        a.push(this.i);
        this.Ug();
    };
    function ag(a, b, c, d) {
        Rb.call(this);
        this.extent = a;
        this.f = c;
        this.resolution = b;
        this.state = d;
    }
    v(ag, Rb);
    ag.prototype.changed = function() {
        this.b("change");
    };
    ag.prototype.A = function() {
        return this.extent;
    };
    ag.prototype.getState = function() {
        return this.state;
    };
    function bg(a, b, c, d, e, f) {
        ag.call(this, a, b, c, 0);
        this.i = d;
        this.M = new Image();
        null !== e && (this.M.crossOrigin = e);
        this.a = null;
        this.state = 0;
        this.c = f;
    }
    v(bg, ag);
    k = bg.prototype;
    k.U = function() {
        return this.M;
    };
    k.Yn = function() {
        this.state = 3;
        this.a.forEach(Fb);
        this.a = null;
        this.changed();
    };
    k.Zn = function() {
        void 0 === this.resolution && (this.resolution = qb(this.extent) / this.M.height);
        this.state = 2;
        this.a.forEach(Fb);
        this.a = null;
        this.changed();
    };
    k.load = function() {
        if (0 == this.state || 3 == this.state) this.state = 1, this.changed(), this.a = [ Kb(this.M, "error", this.Yn, this), Kb(this.M, "load", this.Zn, this) ], 
        this.c(this, this.i);
    };
    k.Ch = function(a) {
        this.M = a;
    };
    function cg(a, b, c, d) {
        var e = Xc(c, b, a);
        c = Kc(b, d, c);
        b = b.Jc();
        void 0 !== b && (c *= b);
        b = a.Jc();
        void 0 !== b && (c /= b);
        b = a.A();
        if (!b || Xa(b, e)) a = Kc(a, c, e) / c, isFinite(a) && 0 < a && (c /= a);
        return c;
    }
    function dg(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [ Math.round(c + a / e), Math.round(d + b / e) ];
    }
    function eg(a, b, c, d, e, f, g, h, l, m, n) {
        var p = le(Math.round(c * a), Math.round(c * b));
        if (0 === l.length) return p.canvas;
        p.scale(c, c);
        var q = Ra();
        l.forEach(function(a) {
            hb(q, a.extent);
        });
        var r = le(Math.round(c * pb(q) / d), Math.round(c * qb(q) / d)), u = c / d;
        l.forEach(function(a) {
            r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, pb(a.extent) * u, qb(a.extent) * u);
        });
        var w = mb(g);
        h.c.forEach(function(a) {
            var b = a.source, e = a.target, g = b[1][0], h = b[1][1], l = b[2][0], m = b[2][1];
            a = (e[0][0] - w[0]) / f;
            var n = -(e[0][1] - w[1]) / f, u = (e[1][0] - w[0]) / f, z = -(e[1][1] - w[1]) / f, Wa = (e[2][0] - w[0]) / f, jc = -(e[2][1] - w[1]) / f;
            e = b[0][0];
            b = b[0][1];
            g -= e;
            h -= b;
            l -= e;
            m -= b;
            a: {
                g = [ [ g, h, 0, 0, u - a ], [ l, m, 0, 0, Wa - a ], [ 0, 0, g, h, z - n ], [ 0, 0, l, m, jc - n ] ];
                h = g.length;
                for (l = 0; l < h; l++) {
                    m = l;
                    for (var Za = Math.abs(g[l][l]), ba = l + 1; ba < h; ba++) {
                        var Zb = Math.abs(g[ba][l]);
                        Zb > Za && (Za = Zb, m = ba);
                    }
                    if (0 === Za) {
                        g = null;
                        break a;
                    }
                    Za = g[m];
                    g[m] = g[l];
                    g[l] = Za;
                    for (m = l + 1; m < h; m++) for (Za = -g[m][l] / g[l][l], ba = l; ba < h + 1; ba++) g[m][ba] = l == ba ? 0 : g[m][ba] + Za * g[l][ba];
                }
                l = Array(h);
                for (m = h - 1; 0 <= m; m--) for (l[m] = g[m][h] / g[m][m], Za = m - 1; 0 <= Za; Za--) g[Za][h] -= g[Za][m] * l[m];
                g = l;
            }
            g && (p.save(), p.beginPath(), l = (a + u + Wa) / 3, m = (n + z + jc) / 3, h = dg(l, m, a, n), 
            u = dg(l, m, u, z), Wa = dg(l, m, Wa, jc), p.moveTo(u[0], u[1]), p.lineTo(h[0], h[1]), 
            p.lineTo(Wa[0], Wa[1]), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), 
            p.scale(d / c, -d / c), p.drawImage(r.canvas, 0, 0), p.restore());
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.c.forEach(function(a) {
            var b = a.target;
            a = (b[0][0] - w[0]) / f;
            var c = -(b[0][1] - w[1]) / f, d = (b[1][0] - w[0]) / f, e = -(b[1][1] - w[1]) / f, g = (b[2][0] - w[0]) / f;
            b = -(b[2][1] - w[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke();
        }), p.restore());
        return p.canvas;
    }
    function fg(a, b, c, d, e) {
        this.f = a;
        this.i = b;
        var f = {}, g = Vc(this.i, this.f);
        this.a = function(a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b];
        };
        this.g = d;
        this.u = e * e;
        this.c = [];
        this.l = !1;
        this.o = this.f.f && !!d && !!this.f.A() && pb(d) == pb(this.f.A());
        this.b = this.f.A() ? pb(this.f.A()) : null;
        this.j = this.i.A() ? pb(this.i.A()) : null;
        a = mb(c);
        b = lb(c);
        d = kb(c);
        c = jb(c);
        e = this.a(a);
        var h = this.a(b), l = this.a(d), m = this.a(c);
        gg(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.c.forEach(function(a) {
                n = Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0]);
            });
            this.c.forEach(function(a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [ [ a.source[0][0], a.source[0][1] ], [ a.source[1][0], a.source[1][1] ], [ a.source[2][0], a.source[2][1] ] ];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b);
                }
            }, this);
        }
        f = {};
    }
    function gg(a, b, c, d, e, f, g, h, l, m) {
        var n = Qa([ f, g, h, l ]), p = a.b ? pb(n) / a.b : null, q = a.b, r = a.f.f && .5 < p && 1 > p, u = !1;
        if (0 < m) {
            if (a.i.c && a.j) {
                var w = Qa([ b, c, d, e ]);
                u |= .25 < pb(w) / a.j;
            }
            !r && a.f.c && p && (u |= .25 < p);
        }
        if (u || !a.g || ub(n, a.g)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1]))) if (0 < m) u = !0; else return;
            if (0 < m && (u || (n = a.a([ (b[0] + d[0]) / 2, (b[1] + d[1]) / 2 ]), q = r ? (ic(f[0], q) + ic(h[0], q)) / 2 - ic(n[0], q) : (f[0] + h[0]) / 2 - n[0], 
            n = (f[1] + h[1]) / 2 - n[1], u = q * q + n * n > a.u), u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [ (c[0] + d[0]) / 2, (c[1] + d[1]) / 2 ], 
                q = a.a(r), n = [ (e[0] + b[0]) / 2, (e[1] + b[1]) / 2 ], p = a.a(n), gg(a, b, c, r, n, f, g, q, p, m - 1), 
                gg(a, n, r, d, e, p, q, h, l, m - 1)) : (r = [ (b[0] + c[0]) / 2, (b[1] + c[1]) / 2 ], 
                q = a.a(r), n = [ (d[0] + e[0]) / 2, (d[1] + e[1]) / 2 ], p = a.a(n), gg(a, b, r, n, e, f, q, p, l, m - 1), 
                gg(a, r, c, d, n, q, g, h, p, m - 1));
                return;
            }
            if (r) {
                if (!a.o) return;
                a.l = !0;
            }
            a.c.push({
                source: [ f, h, l ],
                target: [ b, d, e ]
            });
            a.c.push({
                source: [ f, g, h ],
                target: [ b, c, d ]
            });
        }
    }
    function hg(a) {
        var b = Ra();
        a.c.forEach(function(a) {
            a = a.source;
            Sa(b, a[0]);
            Sa(b, a[1]);
            Sa(b, a[2]);
        });
        return b;
    }
    function ig(a, b, c, d, e, f) {
        this.o = b;
        this.l = a.A();
        var g = b.A(), h = g ? tb(c, g) : c;
        g = cg(a, b, rb(h), d);
        this.g = new fg(a, b, h, this.l, .5 * g);
        this.i = d;
        this.c = c;
        a = hg(this.g);
        this.j = (this.Vb = f(a, g, e)) ? this.Vb.f : 1;
        this.qe = this.a = null;
        e = 2;
        this.Vb && (e = 0);
        ag.call(this, c, d, this.j, e);
    }
    v(ig, ag);
    ig.prototype.fa = function() {
        1 == this.state && (Fb(this.qe), this.qe = null);
        ag.prototype.fa.call(this);
    };
    ig.prototype.U = function() {
        return this.a;
    };
    ig.prototype.oe = function() {
        var a = this.Vb.getState();
        2 == a && (this.a = eg(pb(this.c) / this.i, qb(this.c) / this.i, this.j, this.Vb.resolution, 0, this.i, this.c, this.g, [ {
            extent: this.Vb.A(),
            image: this.Vb.U()
        } ], 0));
        this.state = a;
        this.changed();
    };
    ig.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            this.changed();
            var a = this.Vb.getState();
            2 == a || 3 == a ? this.oe() : (this.qe = y(this.Vb, "change", function() {
                var a = this.Vb.getState();
                if (2 == a || 3 == a) Fb(this.qe), this.qe = null, this.oe();
            }, this), this.Vb.load());
        }
    };
    function jg(a, b, c, d) {
        this.da = a;
        this.ia = b;
        this.ca = c;
        this.ha = d;
    }
    function lg(a, b, c, d, e) {
        return void 0 !== e ? (e.da = a, e.ia = b, e.ca = c, e.ha = d, e) : new jg(a, b, c, d);
    }
    function qg(a, b, c) {
        return a.da <= b && b <= a.ia && a.ca <= c && c <= a.ha;
    }
    function rg(a, b) {
        return a.da == b.da && a.ca == b.ca && a.ia == b.ia && a.ha == b.ha;
    }
    function sg(a, b, c) {
        void 0 === c && (c = [ 0, 0 ]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c;
    }
    function tg(a, b, c) {
        void 0 === c && (c = [ 0, 0 ]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c;
    }
    function ug(a, b) {
        if (Array.isArray(a)) return a;
        void 0 === b ? b = [ a, a ] : b[0] = b[1] = a;
        return b;
    }
    function vg(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [ a, b, c ];
    }
    function wg(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e;
        for (e = 0; e < b; ++e) {
            var f = 48;
            a[1] & d && (f += 1);
            a[2] & d && (f += 2);
            c[e] = String.fromCharCode(f);
            d >>= 1;
        }
        return c.join("");
    }
    function xg(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        Pa(Na(this.b, function(a, b) {
            return b - a;
        }), 17);
        if (!a.origins) for (var b = 0, c = this.b.length - 1; b < c; ++b) if (!d) var d = this.b[b] / this.b[b + 1]; else if (this.b[b] / this.b[b + 1] !== d) {
            d = void 0;
            break;
        }
        this.l = d;
        this.maxZoom = this.b.length - 1;
        this.f = void 0 !== a.origin ? a.origin : null;
        this.c = null;
        void 0 !== a.origins && (this.c = a.origins, Pa(this.c.length == this.b.length, 20));
        d = a.extent;
        void 0 === d || this.f || this.c || (this.f = mb(d));
        Pa(!this.f && this.c || this.f && !this.c, 18);
        this.i = null;
        void 0 !== a.tileSizes && (this.i = a.tileSizes, Pa(this.i.length == this.b.length, 19));
        this.j = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
        Pa(!this.j && this.i || this.j && !this.i, 22);
        this.s = void 0 !== d ? d : null;
        this.a = null;
        this.g = [ 0, 0 ];
        void 0 !== a.sizes ? this.a = a.sizes.map(function(a) {
            return new jg(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1));
        }, this) : d && yg(this, d);
    }
    var zg = [ 0, 0, 0 ];
    k = xg.prototype;
    k.fg = function(a, b, c) {
        a = Ag(this, a, b);
        for (var d = a.da, e = a.ia; d <= e; ++d) for (var f = a.ca, g = a.ha; f <= g; ++f) c([ b, d, f ]);
    };
    function Bg(a, b, c, d, e) {
        var f = null, g = b[0] - 1;
        if (2 === a.l) {
            var h = b[1];
            var l = b[2];
        } else f = a.La(b, e);
        for (;g >= a.minZoom; ) {
            2 === a.l ? (h = Math.floor(h / 2), l = Math.floor(l / 2), b = lg(h, h, l, l, d)) : b = Ag(a, f, g, d);
            if (c.call(null, g, b)) return !0;
            --g;
        }
        return !1;
    }
    k.A = function() {
        return this.s;
    };
    k.Fj = function() {
        return this.maxZoom;
    };
    k.Gj = function() {
        return this.minZoom;
    };
    k.rc = function(a) {
        return this.f ? this.f : this.c[a];
    };
    k.Va = function(a) {
        return this.b[a];
    };
    k.Hj = function() {
        return this.b;
    };
    function Cg(a, b, c, d) {
        if (b[0] < a.maxZoom) {
            if (2 === a.l) return a = 2 * b[1], b = 2 * b[2], lg(a, a + 1, b, b + 1, c);
            d = a.La(b, d);
            return Ag(a, d, b[0] + 1, c);
        }
        return null;
    }
    function Dg(a, b, c) {
        var d = a.rc(b), e = a.Va(b);
        a = ug(a.Ua(b), a.g);
        return bb(d[0] + c.da * a[0] * e, d[1] + c.ca * a[1] * e, d[0] + (c.ia + 1) * a[0] * e, d[1] + (c.ha + 1) * a[1] * e, void 0);
    }
    function Ag(a, b, c, d) {
        Eg(a, b[0], b[1], c, !1, zg);
        var e = zg[1], f = zg[2];
        Eg(a, b[2], b[3], c, !0, zg);
        return lg(e, zg[1], f, zg[2], d);
    }
    function Fg(a, b) {
        var c = a.rc(b[0]), d = a.Va(b[0]);
        a = ug(a.Ua(b[0]), a.g);
        return [ c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d ];
    }
    k.La = function(a, b) {
        var c = this.rc(a[0]), d = this.Va(a[0]), e = ug(this.Ua(a[0]), this.g), f = c[0] + a[1] * e[0] * d;
        a = c[1] + a[2] * e[1] * d;
        return bb(f, a, f + e[0] * d, a + e[1] * d, b);
    };
    k.Te = function(a, b, c) {
        var d = a[0], e = a[1];
        a = this.Kc(b);
        var f = b / this.Va(a), g = this.rc(a), h = ug(this.Ua(a), this.g);
        d = f * Math.floor((d - g[0]) / b + 0) / h[0];
        b = f * Math.floor((e - g[1]) / b + .5) / h[1];
        d = Math.floor(d);
        b = Math.floor(b);
        return vg(a, d, b, c);
    };
    function Eg(a, b, c, d, e, f) {
        var g = a.rc(d), h = a.Va(d);
        a = ug(a.Ua(d), a.g);
        b = Math.floor((b - g[0]) / h + (e ? .5 : 0)) / a[0];
        c = Math.floor((c - g[1]) / h + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return vg(d, b, c, f);
    }
    k.tg = function(a, b, c) {
        return Eg(this, a[0], a[1], b, !1, c);
    };
    k.Ua = function(a) {
        return this.j ? this.j : this.i[a];
    };
    k.Kc = function(a, b) {
        return cc(Fa(this.b, a, b || 0), this.minZoom, this.maxZoom);
    };
    function yg(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e) d[e] = Ag(a, b, e);
        a.a = d;
    }
    function Gg(a) {
        var b = a.g;
        b || (b = Hg(a), a.g = b);
        return b;
    }
    function Ig(a) {
        var b = {};
        Ab(b, void 0 !== a ? a : {});
        void 0 === b.extent && (b.extent = Lc("EPSG:3857").A());
        b.resolutions = Jg(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new xg(b);
    }
    function Jg(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = qb(a);
        a = pb(a);
        c = ug(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a) d[a] = c / Math.pow(2, a);
        return d;
    }
    function Hg(a, b, c) {
        a = Kg(a);
        b = Jg(a, b, c);
        return new xg({
            extent: a,
            origin: mb(a),
            resolutions: b,
            tileSize: c
        });
    }
    function Kg(a) {
        a = Lc(a);
        var b = a.A();
        b || (a = 180 * rc.degrees / a.Jc(), b = bb(-a, -a, a, a));
        return b;
    }
    function Lg(a) {
        this.yg = a.html;
    }
    Lg.prototype.b = function() {
        return this.yg;
    };
    function Mg(a) {
        Vb.call(this);
        this.c = Lc(a.projection);
        this.u = null;
        this.B = Ng(this, a.attributions);
        this.P = a.logo;
        this.ua = void 0 !== a.state ? a.state : "ready";
        this.C = void 0 !== a.wrapX ? a.wrapX : !1;
    }
    v(Mg, Vb);
    function Ng(a, b) {
        if (!b) return null;
        if (b instanceof Lg) return a.u = [ b ], function() {
            return [ b.yg ];
        };
        if (Array.isArray(b)) {
            if (b[0] instanceof Lg) {
                a.u = b;
                var c = b.map(function(a) {
                    return a.yg;
                });
                return function() {
                    return c;
                };
            }
            a.u = b.map(function(a) {
                return new Lg({
                    html: a
                });
            });
            return function() {
                return b;
            };
        }
        if ("function" === typeof b) return b;
        a.u = [ new Lg({
            html: b
        }) ];
        return function() {
            return [ b ];
        };
    }
    k = Mg.prototype;
    k.va = Ba;
    k.za = function() {
        return this.u;
    };
    k.Aa = function() {
        return this.P;
    };
    k.Ca = function() {
        return this.c;
    };
    k.getState = function() {
        return this.ua;
    };
    k.oa = function() {
        this.changed();
    };
    k.ta = function(a) {
        this.B = Ng(this, a);
        this.changed();
    };
    function Og(a, b) {
        a.ua = b;
        a.changed();
    }
    function Pg(a) {
        Mg.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.D = void 0 !== a.resolutions ? a.resolutions : null;
        this.i = null;
        this.ra = 0;
    }
    v(Pg, Mg);
    function Qg(a, b) {
        a.D && (b = a.D[Fa(a.D, b, 0)]);
        return b;
    }
    Pg.prototype.U = function(a, b, c, d) {
        var e = this.c;
        if (e && d && !Uc(e, d)) {
            if (this.i) {
                if (this.ra == this.f && Uc(this.i.o, d) && this.i.resolution == b && gb(this.i.A(), a)) return this.i;
                Ob(this.i);
                this.i = null;
            }
            this.i = new ig(e, d, a, b, c, function(a, b, c) {
                return this.Zc(a, b, c, e);
            }.bind(this));
            this.ra = this.f;
            return this.i;
        }
        e && (d = e);
        return this.Zc(a, b, c, d);
    };
    Pg.prototype.j = function(a) {
        a = a.target;
        switch (a.getState()) {
          case 1:
            this.b(new Rg(Sg, a));
            break;

          case 2:
            this.b(new Rg(Tg, a));
            break;

          case 3:
            this.b(new Rg(Ug, a));
        }
    };
    function Vg(a, b) {
        a.U().src = b;
    }
    function Rg(a, b) {
        Pb.call(this, a);
        this.image = b;
    }
    v(Rg, Pb);
    var Sg = "imageloadstart", Tg = "imageloadend", Ug = "imageloaderror";
    function Wg(a, b) {
        a = void 0 !== b ? a.toFixed(b) : "" + a;
        b = a.indexOf(".");
        b = -1 === b ? a.length : b;
        return 2 < b ? a : Array(3 - b).join("0") + a;
    }
    function Xg(a) {
        a = ("" + a).split(".");
        for (var b = [ "1", "3" ], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10), e = parseInt(b[c] || "0", 10);
            if (d > e) return 1;
            if (e > d) return -1;
        }
        return 0;
    }
    function Yg(a, b) {
        var c = [];
        Object.keys(b).forEach(function(a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]));
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d;
    }
    function Zg(a) {
        a = a || {};
        Pg.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.$ = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.g = a.url;
        this.o = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vg;
        this.a = a.params || {};
        this.l = !0;
        $g(this);
        this.Z = a.serverType;
        this.Ea = void 0 !== a.hidpi ? a.hidpi : !0;
        this.M = null;
        this.s = [ 0, 0 ];
        this.W = 0;
        this.R = void 0 !== a.ratio ? a.ratio : 1.5;
    }
    v(Zg, Pg);
    var ah = [ 101, 101 ];
    k = Zg.prototype;
    k.Fp = function(a, b, c, d) {
        if (void 0 !== this.g) {
            c = Lc(c);
            var e = this.c;
            e && e !== c && (b = cg(e, c, a, b), a = Xc(a, c, e));
            var f = sb(a, b, 0, ah), g = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.a.LAYERS
            };
            Ab(g, this.a, d);
            d = Math.floor((f[3] - a[1]) / b);
            g[this.l ? "I" : "X"] = Math.floor((a[0] - f[0]) / b);
            g[this.l ? "J" : "Y"] = d;
            return bh(this, f, ah, 1, e || c, g);
        }
    };
    k.Hp = function() {
        return this.a;
    };
    k.Zc = function(a, b, c, d) {
        if (void 0 === this.g) return null;
        b = Qg(this, b);
        1 == c || this.Ea && void 0 !== this.Z || (c = 1);
        var e = b / c, f = rb(a), g = sb(f, e, 0, [ Math.ceil(pb(a) / e), Math.ceil(qb(a) / e) ]);
        a = sb(f, e, 0, [ Math.ceil(this.R * pb(a) / e), Math.ceil(this.R * qb(a) / e) ]);
        if ((f = this.M) && this.W == this.f && f.resolution == b && f.f == c && $a(f.A(), g)) return f;
        g = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        Ab(g, this.a);
        this.s[0] = Math.round(pb(a) / e);
        this.s[1] = Math.round(qb(a) / e);
        d = bh(this, a, this.s, c, d, g);
        this.M = new bg(a, b, c, d, this.$, this.o);
        this.W = this.f;
        y(this.M, "change", this.j, this);
        return this.M;
    };
    k.Gp = function() {
        return this.o;
    };
    function bh(a, b, c, d, e, f) {
        Pa(void 0 !== a.g, 9);
        f[a.l ? "CRS" : "SRS"] = e.wb;
        "STYLES" in a.a || (f.STYLES = "");
        if (1 != d) switch (a.Z) {
          case "geoserver":
            d = 90 * d + .5 | 0;
            f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
            break;

          case "mapserver":
            f.MAP_RESOLUTION = 90 * d;
            break;

          case "carmentaserver":
          case "qgis":
            f.DPI = 90 * d;
            break;

          default:
            Pa(!1, 8);
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.b;
        var g;
        a.l && "ne" == c.substr(0, 2) ? g = [ b[1], b[0], b[3], b[2] ] : g = b;
        f.BBOX = g.join(",");
        return Yg(a.g, f);
    }
    k.getUrl = function() {
        return this.g;
    };
    k.Ip = function(a) {
        this.M = null;
        this.o = a;
        this.changed();
    };
    k.Jp = function(a) {
        a != this.g && (this.g = a, this.M = null, this.changed());
    };
    k.Kp = function(a) {
        Ab(this.a, a);
        $g(this);
        this.M = null;
        this.changed();
    };
    function $g(a) {
        a.l = 0 <= Xg(a.a.VERSION || "1.3.0");
    }
    function ch(a, b) {
        Yf.call(this, a, b);
    }
    v(ch, Yf);
    ch.prototype.f = function(a) {
        this.c = a;
    };
    ch.prototype.findIndex = function(a) {
        var b = this.sa.Nc().a.indexOf(a);
        a = a.getZIndex();
        0 != a && (b = a);
        return b;
    };
    function kh(a, b) {
        var c = [];
        Object.keys(b).forEach(function(a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]));
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d;
    }
    function lh(a, b) {
        this.a = [];
        this.i = [];
        Yf.call(this, a, b);
    }
    v(lh, ch);
    k = lh.prototype;
    k.yc = function(a) {
        if (a.aa() instanceof Zg) {
            this.i.push(a);
            var b = a.xb();
            b = {
                nc: null,
                Ag: null,
                layer: a,
                qa: [],
                opacity: b,
                zIndex: 0
            };
            b.qa.push(a.G("change:visible", this.qq.bind(this, b), this));
            b.qa.push(this.sa.G("moveend", this.vg.bind(this, b), this));
            b.qa.push(this.sa.T().G("change:resolution", this.vg.bind(this, b), this));
            b.qa.push(a.aa().G("change", this.vg.bind(this, b), this));
            this.Vg(b);
            this.a.push(b);
        }
    };
    k.xc = function(a) {
        var b = this.i.indexOf(a);
        if (-1 !== b) {
            this.i.splice(b, 1);
            var c = this.a[b];
            Lf(c.qa);
            mh(c);
            a.ab(c.opacity);
            this.a.splice(b, 1);
        }
    };
    k.Na = function() {
        ch.prototype.Na.call(this);
        this.a.forEach(this.Vg, this);
    };
    k.Vg = function(a) {
        a.layer.Ma() && this.c && (a.Ag = null, a.layer.ab(0), nh(this, a));
    };
    k.Ia = function() {
        ch.prototype.Ia.call(this);
        this.a.forEach(this.Mj, this);
    };
    k.Mj = function(a) {
        a.nc && (a.nc.setMap(null), a.nc = null);
        a.layer.ab(a.opacity);
    };
    function mh(a) {
        a.nc && (a.nc.setMap(null), a.nc = null);
    }
    function nh(a, b, c) {
        var d = b.layer;
        if (d.Ma()) {
            var e = d.aa();
            var f = e.a, g = a.sa;
            e = e.getUrl();
            qa(void 0 !== e, "Expected the source to have an url");
            var h = g.ib();
            qa(void 0 !== h, "Expected the map to have a size");
            var l = g.T().Bc(h), m = "CRS BBOX FORMAT HEIGHT LAYERS REQUEST SERVICE SRS STYLES TILED TRANSPARENT VERSION WIDTH".split(" ");
            g = {};
            var n = {};
            for (q in f) {
                var p = q.toUpperCase();
                -1 === m.indexOf(p) ? void 0 !== f[q] && null !== f[q] && (g[q] = f[q]) : n[p] = f[q];
            }
            f = n.VERSION ? n.VERSION : "1.3.0";
            var q = f.split(".");
            h = {
                BBOX: l,
                FORMAT: n.FORMAT ? n.FORMAT : "image/png",
                HEIGHT: h[1],
                LAYERS: n.LAYERS ? n.LAYERS : "",
                REQUEST: "GetMap",
                SERVICE: "WMS",
                STYLES: n.STYLES ? n.STYLES : "",
                TILED: n.TILED ? n.TILED : "FALSE",
                TRANSPARENT: n.TRANSPARENT ? n.TRANSPARENT : "TRUE",
                VERSION: f,
                WIDTH: h[0]
            };
            1 <= parseInt(q[0], 10) && 3 <= parseInt(q[1], 10) ? h.CRS = "EPSG:3857" : h.SRS = "EPSG:3857";
            ra(h, g);
            e = kh(e, h);
            1 == c && (e += "&timestamp=" + new Date().getTime());
            c = d.$a();
            d = d.Za();
            h = a.sa.T().Ga();
            h < c || h > d ? mh(b) : e != b.Ag && (b.Ag = e, c = a.sa.T(), d = a.sa.ib(), qa(void 0 !== d, "Expected the map to have a size"), 
            c = c.Bc(d), c = Xc(mb(c), "EPSG:3857", "EPSG:4326"), c = new google.maps.LatLng(c[1], c[0]), 
            d = new Wf(e, d, c), d.setZIndex(b.zIndex), d.setMap(a.b), mh(b), b.nc = d);
        }
    }
    k.Nj = function() {
        for (var a = 0; a < this.a.length; a++) {
            var b = this.a[a], c = this.findIndex(b.layer);
            b.zIndex = c;
            b.nc && b.nc.setZIndex(c);
        }
    };
    k.Oj = function() {
        for (var a = 0; a < this.a.length; a++) nh(this, this.a[a], !0);
    };
    k.qq = function(a) {
        a.layer.Ma() ? this.Vg(a) : this.Mj(a);
    };
    k.vg = function(a) {
        a.layer.Ma() && this.sa.T().getCenter() && nh(this, a);
    };
    function oh(a) {
        Bf.call(this, a ? a : {});
        this.type = "IMAGE";
    }
    v(oh, Bf);
    function ph(a) {
        a = a ? a : {};
        var b = Ab({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        Bf.call(this, b);
        this.j(void 0 !== a.preload ? a.preload : 0);
        this.B(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.type = "TILE";
    }
    v(ph, Bf);
    ph.prototype.c = function() {
        return this.get("preload");
    };
    ph.prototype.j = function(a) {
        this.set("preload", a);
    };
    ph.prototype.i = function() {
        return this.get("useInterimTilesOnError");
    };
    ph.prototype.B = function(a) {
        this.set("useInterimTilesOnError", a);
    };
    function qh(a) {
        return Math.pow(a, 3);
    }
    function rh(a) {
        return 1 - qh(1 - a);
    }
    function sh(a) {
        return 3 * a * a - 2 * a * a * a;
    }
    function th(a) {
        return a;
    }
    function uh(a, b, c) {
        Rb.call(this);
        c = c ? c : {};
        this.ya = a;
        this.state = b;
        this.f = null;
        this.key = "";
        this.g = void 0 === c.transition ? 250 : c.transition;
        this.u = {};
    }
    v(uh, Rb);
    uh.prototype.changed = function() {
        this.b("change");
    };
    uh.prototype.ob = function() {
        return this.key + "/" + this.ya;
    };
    function vh(a) {
        if (!a.f) return a;
        var b = a.f;
        do {
            if (2 == b.getState()) return b;
            b = b.f;
        } while (b);
        return a;
    }
    function wh(a) {
        if (a.f) {
            var b = a.f;
            do {
                if (2 == b.getState()) {
                    b.f = null;
                    break;
                } else 1 == b.getState() ? a = b : 0 == b.getState() ? a.f = b.f : a = b;
                b = a.f;
            } while (b);
        }
    }
    uh.prototype.i = function() {
        return this.ya;
    };
    uh.prototype.getState = function() {
        return this.state;
    };
    function xh(a, b) {
        a.state = b;
        a.changed();
    }
    function yh(a, b, c) {
        if (!a.g) return 1;
        var d = a.u[b];
        if (!d) d = c, a.u[b] = d; else if (-1 === d) return 1;
        b = c - d + 1e3 / 60;
        return b >= a.g ? 1 : qh(b / a.g);
    }
    function zh(a, b, c, d, e, f) {
        uh.call(this, a, b, f);
        this.j = d;
        this.l = c;
        this.M = new Image();
        null !== d && (this.M.crossOrigin = d);
        this.c = null;
        this.o = e;
    }
    v(zh, uh);
    k = zh.prototype;
    k.fa = function() {
        1 == this.state && (Ah(this), this.M = Bh());
        this.f && Ob(this.f);
        this.state = 5;
        this.changed();
        uh.prototype.fa.call(this);
    };
    k.U = function() {
        return this.M;
    };
    k.ob = function() {
        return this.l;
    };
    k.Wn = function() {
        this.state = 3;
        Ah(this);
        this.M = Bh();
        this.changed();
    };
    k.Xn = function() {
        this.state = this.M.naturalWidth && this.M.naturalHeight ? 2 : 4;
        Ah(this);
        this.changed();
    };
    k.load = function() {
        3 == this.state && (this.state = 0, this.M = new Image(), null !== this.j && (this.M.crossOrigin = this.j));
        0 == this.state && (this.state = 1, this.changed(), this.c = [ Kb(this.M, "error", this.Wn, this), Kb(this.M, "load", this.Xn, this) ], 
        this.o(this, this.l));
    };
    function Ah(a) {
        a.c.forEach(Fb);
        a.c = null;
    }
    function Bh() {
        var a = le(1, 1);
        a.fillStyle = "rgba(0,0,0,0)";
        a.fillRect(0, 0, 1, 1);
        return a.canvas;
    }
    function Ch(a) {
        Me.call(this, a);
    }
    v(Ch, Me);
    Ch.prototype.vd = function(a) {
        for (var b, c; Ne(this); ) {
            b = this.f.Tc;
            c = b.ya[0].toString();
            var d;
            if (d = c in a) b = b.ya, d = qg(a[c], b[1], b[2]);
            if (d) break; else Ob(this.pop());
        }
    };
    function Dh(a) {
        if (0 !== a.i) {
            var b = a.c.oc.split("/").map(Number)[0];
            a.forEach(function(a) {
                if (a.ya[0] !== b) {
                    var c = a.ya;
                    this.remove(c[0] + "/" + c[1] + "/" + c[2]);
                    Ob(a);
                }
            }, a);
        }
    }
    function Eh(a, b, c, d, e, f, g, h, l, m, n) {
        uh.call(this, e, 0);
        this.D = void 0 !== n ? n : !1;
        this.B = g;
        this.C = h;
        this.a = null;
        this.j = b;
        this.o = d;
        this.s = f ? f : e;
        this.c = [];
        this.Ld = null;
        this.l = 0;
        f = d.La(this.s);
        h = this.o.A();
        e = this.j.A();
        f = h ? tb(f, h) : f;
        if (0 === nb(f)) this.state = 4; else if ((h = a.A()) && (e ? e = tb(e, h) : e = h), 
        d = cg(a, c, rb(f), d.Va(this.s[0])), !isFinite(d) || 0 >= d) this.state = 4; else if (this.L = new fg(a, c, f, e, d * (void 0 !== m ? m : .5)), 
        0 === this.L.c.length) this.state = 4; else if (this.l = b.Kc(d), c = hg(this.L), 
        e && (a.f ? (c[1] = cc(c[1], e[1], e[3]), c[3] = cc(c[3], e[1], e[3])) : c = tb(c, e)), 
        nb(c)) {
            a = Ag(b, c, this.l);
            for (b = a.da; b <= a.ia; b++) for (c = a.ca; c <= a.ha; c++) (m = l(this.l, b, c, g)) && this.c.push(m);
            0 === this.c.length && (this.state = 4);
        } else this.state = 4;
    }
    v(Eh, uh);
    Eh.prototype.fa = function() {
        1 == this.state && (this.Ld.forEach(Fb), this.Ld = null);
        uh.prototype.fa.call(this);
    };
    Eh.prototype.U = function() {
        return this.a;
    };
    Eh.prototype.oe = function() {
        var a = [];
        this.c.forEach(function(b) {
            b && 2 == b.getState() && a.push({
                extent: this.j.La(b.ya),
                image: b.U()
            });
        }, this);
        this.c.length = 0;
        if (0 === a.length) this.state = 3; else {
            var b = this.s[0], c = this.o.Ua(b), d = "number" === typeof c ? c : c[0];
            c = "number" === typeof c ? c : c[1];
            b = this.o.Va(b);
            var e = this.j.Va(this.l), f = this.o.La(this.s);
            this.a = eg(d, c, this.B, e, this.j.A(), b, f, this.L, a, this.C, this.D);
            this.state = 2;
        }
        this.changed();
    };
    Eh.prototype.load = function() {
        if (0 == this.state) {
            this.state = 1;
            this.changed();
            var a = 0;
            this.Ld = [];
            this.c.forEach(function(b) {
                var c = b.getState();
                if (0 == c || 1 == c) {
                    a++;
                    var d = y(b, "change", function() {
                        var c = b.getState();
                        if (2 == c || 3 == c || 4 == c) Fb(d), a--, 0 === a && (this.Ld.forEach(Fb), this.Ld = null, 
                        this.oe());
                    }, this);
                    this.Ld.push(d);
                }
            }, this);
            this.c.forEach(function(a) {
                0 == a.getState() && a.load();
            });
            0 === a && setTimeout(this.oe.bind(this), 0);
        }
    };
    function Fh(a, b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function(g) {
            if (g) return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() {
                return (-g[2] - 1).toString();
            }).replace(f, function() {
                var a = b.a ? b.a[g[0]] : null;
                Pa(a, 55);
                return (a.ha - a.ca + 1 + g[2]).toString();
            });
        };
    }
    function Gh(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e) d[e] = Fh(a[e], b);
        return Hh(d);
    }
    function Hh(a) {
        return 1 === a.length ? a[0] : function(b, c, d) {
            if (b) return a[ic((b[1] << b[0]) + b[2], a.length)](b, c, d);
        };
    }
    function Ih() {}
    function Jh(a) {
        var b = [], c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e) b.push(a.replace(c[0], String.fromCharCode(e)));
            return b;
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++) b.push(a.replace(c[0], e.toString()));
            return b;
        }
        b.push(a);
        return b;
    }
    function Kh(a) {
        Mg.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.eb = void 0 !== a.opaque ? a.opaque : !1;
        this.zc = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Ch(a.cacheSize);
        this.j = [ 0, 0 ];
        this.oc = "";
        this.Ea = {
            transition: a.transition
        };
    }
    v(Kh, Mg);
    k = Kh.prototype;
    k.vj = function() {
        return Ne(this.a);
    };
    k.vd = function(a, b) {
        (a = this.ce(a)) && a.vd(b);
    };
    function Lh(a, b, c, d, e) {
        a = a.ce(b);
        if (!a) return !1;
        b = !0;
        for (var f, g, h = d.da; h <= d.ia; ++h) for (var l = d.ca; l <= d.ha; ++l) f = c + "/" + h + "/" + l, 
        g = !1, a.a.hasOwnProperty(f) && (f = a.get(f), (g = 2 === f.getState()) && (g = !1 !== e(f))), 
        g || (b = !1);
        return b;
    }
    k.ig = function() {
        return 0;
    };
    function Mh(a, b) {
        a.oc !== b && (a.oc = b, a.changed());
    }
    k.og = function() {
        return this.eb;
    };
    k.mb = function() {
        return this.tileGrid;
    };
    k.gb = function(a) {
        return this.tileGrid ? this.tileGrid : Gg(a);
    };
    k.ce = function(a) {
        var b = this.c;
        return b && !Uc(b, a) ? null : this.a;
    };
    k.$c = function() {
        return this.zc;
    };
    k.de = function(a, b, c) {
        c = this.gb(c);
        b = this.$c(b);
        a = ug(c.Ua(a), this.j);
        return 1 == b ? a : tg(a, b, this.j);
    };
    function Nh(a, b, c) {
        var d = void 0 !== c ? c : a.c;
        c = a.gb(d);
        if (a.C && d.c) {
            var e = b;
            b = e[0];
            a = Fg(c, e);
            d = Kg(d);
            Xa(d, a) ? b = e : (e = pb(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.tg(a, b));
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom) c = !1; else {
            var f = c.A();
            c = (c = f ? Ag(c, f, e) : c.a ? c.a[e] : null) ? qg(c, d, a) : !0;
        }
        return c ? b : null;
    }
    k.oa = function() {
        this.a.clear();
        this.changed();
    };
    k.Eh = Ba;
    function Oh(a, b) {
        Pb.call(this, a);
        this.tile = b;
    }
    v(Oh, Pb);
    function Ph(a) {
        Kh.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX,
            transition: a.transition
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.gc ? this.gc.bind(this) : Ih;
        this.urls = null;
        a.urls ? this.vb(a.urls) : a.url && this.sb(a.url);
        a.tileUrlFunction && this.kb(a.tileUrlFunction);
        this.W = {};
    }
    v(Ph, Kh);
    k = Ph.prototype;
    k.Ab = function() {
        return this.tileLoadFunction;
    };
    k.Bb = function() {
        return this.tileUrlFunction;
    };
    k.Cb = function() {
        return this.urls;
    };
    k.wj = function(a) {
        a = a.target;
        var b = x(a), c = a.getState();
        if (1 == c) {
            this.W[b] = !0;
            var d = "tileloadstart";
        } else b in this.W && (delete this.W[b], d = 3 == c ? "tileloaderror" : 2 == c || 5 == c ? "tileloadend" : void 0);
        void 0 != d && this.b(new Oh(d, a));
    };
    k.Gb = function(a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.changed();
    };
    k.kb = function(a, b) {
        this.tileUrlFunction = a;
        Dh(this.a);
        "undefined" !== typeof b ? Mh(this, b) : this.changed();
    };
    k.sb = function(a) {
        var b = this.urls = Jh(a);
        this.kb(this.gc ? this.gc.bind(this) : Gh(b, this.tileGrid), a);
    };
    k.vb = function(a) {
        this.urls = a;
        var b = a.join("\n");
        this.kb(this.gc ? this.gc.bind(this) : Gh(a, this.tileGrid), b);
    };
    k.Eh = function(a, b, c) {
        a = a + "/" + b + "/" + c;
        this.a.a.hasOwnProperty(a) && this.a.get(a);
    };
    function J(a) {
        Ph.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Qh,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX,
            transition: a.transition
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass : zh;
        this.g = {};
        this.o = {};
        this.zb = a.reprojectionErrorThreshold;
        this.R = !1;
    }
    v(J, Ph);
    k = J.prototype;
    k.vj = function() {
        if (Ne(this.a)) return !0;
        for (var a in this.g) if (Ne(this.g[a])) return !0;
        return !1;
    };
    k.vd = function(a, b) {
        a = this.ce(a);
        this.a.vd(this.a == a ? b : {});
        for (var c in this.g) {
            var d = this.g[c];
            d.vd(d == a ? b : {});
        }
    };
    k.ig = function(a) {
        return this.c && a && !Uc(this.c, a) ? 0 : this.jg();
    };
    k.jg = function() {
        return 0;
    };
    k.og = function(a) {
        return this.c && a && !Uc(this.c, a) ? !1 : Ph.prototype.og.call(this, a);
    };
    k.gb = function(a) {
        var b = this.c;
        return !this.tileGrid || b && !Uc(b, a) ? (b = x(a).toString(), b in this.o || (this.o[b] = Gg(a)), 
        this.o[b]) : this.tileGrid;
    };
    k.ce = function(a) {
        var b = this.c;
        if (!b || Uc(b, a)) return this.a;
        a = x(a).toString();
        a in this.g || (this.g[a] = new Ch(this.a.highWaterMark));
        return this.g[a];
    };
    function Rh(a, b, c, d, e, f, g) {
        b = [ b, c, d ];
        e = (c = Nh(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction, a.Ea);
        e.key = g;
        y(e, "change", a.wj, a);
        return e;
    }
    k.getTile = function(a, b, c, d, e) {
        var f = this.c;
        if (f && e && !Uc(f, e)) {
            var g = this.ce(e);
            c = [ a, b, c ];
            var h;
            a = c[0] + "/" + c[1] + "/" + c[2];
            g.a.hasOwnProperty(a) && (h = g.get(a));
            b = this.oc;
            if (h && h.key == b) return h;
            var l = this.gb(f), m = this.gb(e), n = Nh(this, c, e);
            d = new Eh(f, l, e, m, c, n, this.$c(d), this.jg(), function(a, b, c, d) {
                return Sh(this, a, b, c, d, f);
            }.bind(this), this.zb, this.R);
            d.key = b;
            h ? (d.f = h, wh(d), g.replace(a, d)) : g.set(a, d);
            return d;
        }
        return Sh(this, a, b, c, d, f || e);
    };
    function Sh(a, b, c, d, e, f) {
        var g = b + "/" + c + "/" + d, h = a.oc;
        if (a.a.a.hasOwnProperty(g)) {
            var l = a.a.get(g);
            if (l.key != h) {
                var m = l;
                l = Rh(a, b, c, d, e, f, h);
                0 == m.getState() ? l.f = m.f : l.f = m;
                wh(l);
                a.a.replace(g, l);
            }
        } else l = Rh(a, b, c, d, e, f, h), a.a.set(g, l);
        return l;
    }
    k.Sb = function(a) {
        if (this.R != a) {
            this.R = a;
            for (var b in this.g) this.g[b].clear();
            this.changed();
        }
    };
    k.Tb = function(a, b) {
        if (a = Lc(a)) a = x(a).toString(), a in this.o || (this.o[a] = b);
    };
    function Qh(a, b) {
        a.U().src = b;
    }
    function Th(a, b) {
        this.a = [];
        this.i = [];
        this.g = new Xf(b);
        google.maps.event.addListenerOnce(b, "idle", function() {
            this.Xg();
        }.bind(this));
        Yf.call(this, a, b);
    }
    v(Th, ch);
    k = Th.prototype;
    k.yc = function(a) {
        var b = a.aa();
        if (b instanceof J) {
            this.i.push(a);
            var c = a.xb(), d = {
                element: null,
                fe: !0,
                layer: a,
                qa: [],
                opacity: c,
                zIndex: 0
            }, e = b.tileGrid;
            b = 256;
            e && (e = e.Ua(0), "number" === typeof e && (b = e));
            b = new google.maps.Size(b, b);
            c = new google.maps.ImageMapType({
                getTileUrl: this.Cm.bind(this, a),
                tileSize: b,
                isPng: !0,
                opacity: c
            });
            a.Ma() && this.b.overlayMapTypes.push(c);
            d.ee = c;
            d.qa.push(a.G("change:visible", this.uq.bind(this, d), this));
            d.qa.push(a.G("change:opacity", this.Wm.bind(this, d), this));
            d.qa.push(a.aa().G("change", this.tq.bind(this, d), this));
            this.Wg(d);
            this.a.push(d);
        }
    };
    k.Cm = function(a, b, c) {
        var d = a.aa(), e = a.$a(), f = a.Za(), g = this.sa.T().Ga();
        if (!(g < e || g > f)) {
            f = d.tileUrlFunction;
            e = Lc("EPSG:3857");
            b = [ c, b.x, -b.y - 1 ];
            (a = a.A()) || (a = e.A());
            if (g = d.tileGrid) {
                var h = [ -20037508.342789244, 20037508.342789244 ], l = g.rc(0);
                if (l[0] != h[0] || l[1] != h[1]) c = Math.pow(2, c - (Math.log2(g.Ua(c)) - Math.log2(256))) / 2, 
                b[1] -= c, b[2] += c;
                c = tb(a, g.La(b));
                c = vb(c);
                c = c[0] * c[1];
                if (1 > c || Infinity == c) return;
            }
            f = f(b, 1, e);
            void 0 === f && (f = d.tileUrlFunction, f = f(b, 1, e));
            return f;
        }
    };
    k.xc = function(a) {
        var b = this.i.indexOf(a);
        if (-1 !== b) {
            this.i.splice(b, 1);
            var c = this.a[b];
            Lf(c.qa);
            var d = this.b.overlayMapTypes, e = d.getArray().indexOf(c.ee);
            -1 != e && d.removeAt(e);
            a.ab(c.opacity);
            this.a.splice(b, 1);
        }
    };
    k.Na = function() {
        ch.prototype.Na.call(this);
        this.a.forEach(this.Wg, this);
    };
    k.Wg = function(a) {
        a.layer.Ma() && this.c && (a.fe = !0, a.layer.ab(0));
    };
    k.Ia = function() {
        ch.prototype.Ia.call(this);
        this.a.forEach(this.Rj, this);
    };
    k.Rj = function(a) {
        a.fe = !0;
        a.layer.ab(a.opacity);
    };
    k.Xg = function() {
        var a = this.g.b();
        if (a) {
            a = a.mapPane;
            for (var b = this.b.overlayMapTypes, c = 0; c < this.a.length; c++) {
                var d = this.a[c];
                d.zIndex = this.findIndex(d.layer);
                var e = d.ee, f = b.getArray().indexOf(e);
                if (-1 != f) {
                    b.removeAt(f);
                    f = Array.prototype.slice.call(a.childNodes);
                    b.push(e);
                    e = a.childNodes;
                    for (var g = 0; g < e.length; g++) -1 == f.indexOf(e[g]) && (d.element = e[g], setTimeout(function() {
                        this.element.style.zIndex = this.zIndex;
                    }.bind(d), 0));
                }
            }
        }
    };
    k.Wm = function(a) {
        var b = a.layer, c = a.layer.xb();
        a.fe ? a.fe = !1 : (a.ee.setOpacity(c), a.opacity = c, b.Ma() && this.c && (a.fe = !0, 
        a.layer.ab(0)));
    };
    k.uq = function(a) {
        var b = a.layer.Ma(), c = a.ee, d = this.b.overlayMapTypes, e = d.getArray().indexOf(c);
        b ? (-1 == e && d.push(c), this.Wg(a)) : (-1 != e && d.removeAt(e), this.Rj(a));
    };
    k.tq = function(a) {
        a.ee.changed("foo");
    };
    function Uh(a, b, c, d, e) {
        this.f = [];
        this.a = [];
        this.g = d;
        this.c = c;
        this.j = e;
        this.i = !0;
        Yf.call(this, a, b);
    }
    v(Uh, Yf);
    k = Uh.prototype;
    k.Na = function() {
        Yf.prototype.Na.call(this);
        this.c.fd().forEach(this.Gk, this);
        var a = this.qa;
        a.push(this.c.G("addfeature", this.Em, this));
        a.push(this.c.G("removefeature", this.an, this));
    };
    k.Ia = function() {
        this.c.fd().forEach(this.Dk, this);
        Yf.prototype.Ia.call(this);
    };
    k.setVisible = function(a) {
        this.i = a;
        for (var b = 0; b < this.a.length; b++) this.a[b].herald.setVisible(a);
    };
    k.Em = function(a) {
        this.Gk(a.feature);
    };
    k.an = function(a) {
        this.Dk(a.feature);
    };
    k.Gk = function(a) {
        var b = this.sa, c = this.b, d = this.g;
        this.f.push(a);
        b = new Zf(b, c, {
            feature: a,
            data: d,
            index: this.f.indexOf(a),
            mapIconOptions: this.j,
            visible: this.i
        });
        b.Na();
        this.a.push({
            feature: a,
            herald: b
        });
    };
    k.Dk = function(a) {
        a = this.f.indexOf(a);
        -1 !== a && (this.f.splice(a, 1), this.a[a].herald.Ia(), this.a.splice(a, 1));
    };
    function Vh(a, b, c) {
        this.a = [];
        this.i = [];
        this.g = c;
        Yf.call(this, a, b);
    }
    v(Vh, ch);
    k = Vh.prototype;
    k.yc = function(a) {
        var b = a.aa();
        if (b) {
            this.i.push(a);
            var c = new google.maps.Data({
                map: this.b
            }), d = Vf(a, this.g);
            d && c.setStyle(d);
            b = new Uh(this.sa, this.b, b, c, this.g);
            d = a.xb();
            c = {
                data: c,
                herald: b,
                layer: a,
                qa: [],
                opacity: d
            };
            c.qa.push(a.G("change:visible", this.vq.bind(this, c), this));
            a = this.sa.T();
            c.qa.push(a.G("change:resolution", this.cn.bind(this, c), this));
            this.Yg(c);
            this.a.push(c);
        }
    };
    k.xc = function(a) {
        var b = this.i.indexOf(a);
        if (-1 !== b) {
            this.i.splice(b, 1);
            var c = this.a[b];
            Lf(c.qa);
            c.data.setMap(null);
            c.herald.Ia();
            a.ab(c.opacity);
            this.a.splice(b, 1);
        }
    };
    k.Na = function() {
        ch.prototype.Na.call(this);
        this.a.forEach(this.Yg, this);
    };
    k.Yg = function(a) {
        a.layer.Ma() && this.c && (a.herald.Na(), a.layer.ab(0));
    };
    k.Ia = function() {
        ch.prototype.Ia.call(this);
        this.a.forEach(this.Sj, this);
    };
    k.Sj = function(a) {
        a.herald.Ia();
        a.layer.ab(a.opacity);
    };
    k.cn = function(a) {
        var b = a.layer, c = b.$a();
        b = b.Za();
        var d = this.sa.T().Ga();
        d < c || d > b ? a.herald.setVisible(!1) : a.herald.setVisible(!0);
    };
    k.vq = function(a) {
        a.layer.Ma() ? this.Yg(a) : this.Sj(a);
    };
    function Wh(a, b) {
        Yf.call(this, a, b);
    }
    v(Wh, Yf);
    k = Wh.prototype;
    k.Qf = null;
    k.Na = function() {
        Yf.prototype.Na.call(this);
        var a = this.sa.T(), b = this.qa;
        b.push(a.G("change:center", this.setCenter, this));
        b.push(a.G("change:resolution", this.xf, this));
        b.push(a.G("change:rotation", this.Zg, this));
        this.L.push(xa(this.ln, this));
        google.maps.event.addListenerOnce(this.b, "idle", function() {
            this.Zg();
            this.setCenter();
            this.xf();
        }.bind(this));
    };
    k.Ia = function() {
        Yf.prototype.Ia.call(this);
    };
    k.setCenter = function() {
        var a = this.sa.T(), b = a.j;
        a = a.getCenter();
        Array.isArray(a) && (a = Xc(a, b, "EPSG:4326"), this.b.setCenter(new google.maps.LatLng(a[1], a[0])));
    };
    k.Zg = function() {
        var a = this.sa.T().Ra(), b = this.b.getDiv(), c = b.childNodes[0].childNodes[0];
        if (c) {
            var d = c.style;
            d.transform = "rotate(" + a + "rad)";
            var e = this.sa.ib()[0];
            c = this.sa.ib()[1];
            if (e != c && 0 != a) {
                var f = Math.max(e, c);
                a = b.style;
                a.width = f + "px";
                a.height = f + "px";
                this.sa.Zb().style.overflow = "hidden";
                a = c - f;
                d.top = a / 2 + "px";
                d.left = (e - f) / 2 + "px";
                google.maps.event.trigger(this.b, "resize");
                this.setCenter();
                this.xf();
                b = b.childNodes[0].childNodes;
                for (d = 0; d < b.length; d++) e = b[d].style, "0px" == e.bottom && (e.bottom = Math.abs(a) + "px");
                b = this.sa.a.style;
                "100%" == b.height && (b.height = c + "px");
            }
        }
    };
    k.xf = function() {
        var a = this.sa.T().Ga();
        if ("number" === typeof a) {
            for (var b = 0, c = Df[b], d = Df[Df.length - 1], e, f = 0, g = Df.length; f < g; ++f) if (e = Df[f], 
            e >= a && (c = e, b = f), e <= a) {
                d = e;
                break;
            }
            d = c - d;
            this.b.setZoom(Math.round(1e3 * (0 < d ? b + (c - a) / d : b)) / 1e3);
        }
    };
    k.ln = function() {
        this.Qf && window.clearTimeout(this.Qf);
        this.Qf = window.setTimeout(this.nr.bind(this), 100);
    };
    k.nr = function() {
        this.setCenter();
        this.Qf = null;
    };
    function Xh(a, b) {
        Vb.call(this);
        this.c = !!(b || {}).unique;
        this.a = a ? a : [];
        if (this.c) for (a = 0, b = this.a.length; a < b; ++a) Yh(this, this.a[a], a);
        Zh(this);
    }
    v(Xh, Vb);
    k = Xh.prototype;
    k.clear = function() {
        for (;0 < this.pc(); ) this.pop();
    };
    k.af = function(a) {
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) this.push(a[c]);
        return this;
    };
    k.forEach = function(a, b) {
        a = b ? a.bind(b) : a;
        b = this.a;
        for (var c = 0, d = b.length; c < d; ++c) a(b[c], c, b);
    };
    k.Kn = function() {
        return this.a;
    };
    k.item = function(a) {
        return this.a[a];
    };
    k.pc = function() {
        return this.get($h);
    };
    k.bf = function(a, b) {
        this.c && Yh(this, b);
        this.a.splice(a, 0, b);
        Zh(this);
        this.b(new ai("add", b));
    };
    k.pop = function() {
        return this.Cg(this.pc() - 1);
    };
    k.push = function(a) {
        this.c && Yh(this, a);
        var b = this.pc();
        this.bf(b, a);
        return this.pc();
    };
    k.remove = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d) if (b[d] === a) return this.Cg(d);
    };
    k.Cg = function(a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        Zh(this);
        this.b(new ai("remove", b));
        return b;
    };
    k.Ln = function(a, b) {
        var c = this.pc();
        if (a < c) this.c && Yh(this, b, a), c = this.a[a], this.a[a] = b, this.b(new ai("remove", c)), 
        this.b(new ai("add", b)); else {
            for (;c < a; ++c) this.bf(c, void 0);
            this.bf(a, b);
        }
    };
    function Zh(a) {
        a.set($h, a.a.length);
    }
    function Yh(a, b, c) {
        for (var d = 0, e = a.a.length; d < e; ++d) if (a.a[d] === b && d !== c) throw new Oa(58);
    }
    var $h = "length";
    function ai(a, b) {
        Pb.call(this, a);
        this.element = b;
    }
    v(ai, Pb);
    function bi(a) {
        var b = a || {};
        a = Ab({}, b);
        delete a.layers;
        b = b.layers;
        zf.call(this, a);
        this.i = [];
        this.c = {};
        y(this, Xb(ci), this.Qm, this);
        b ? Array.isArray(b) ? b = new Xh(b.slice(), {
            unique: !0
        }) : Pa(b instanceof Xh, 43) : b = new Xh(void 0, {
            unique: !0
        });
        this.Mg(b);
    }
    v(bi, zf);
    k = bi.prototype;
    k.Xe = function() {
        this.changed();
    };
    k.Qm = function() {
        this.i.forEach(Fb);
        this.i.length = 0;
        var a = this.dd();
        this.i.push(y(a, "add", this.ip, this), y(a, "remove", this.jp, this));
        for (var b in this.c) this.c[b].forEach(Fb);
        Bb(this.c);
        a = a.a;
        var c;
        b = 0;
        for (c = a.length; b < c; b++) {
            var d = a[b];
            this.c[x(d).toString()] = [ y(d, "propertychange", this.Xe, this), y(d, "change", this.Xe, this) ];
        }
        this.changed();
    };
    k.ip = function(a) {
        a = a.element;
        var b = x(a).toString();
        this.c[b] = [ y(a, "propertychange", this.Xe, this), y(a, "change", this.Xe, this) ];
        this.changed();
    };
    k.jp = function(a) {
        a = x(a.element).toString();
        this.c[a].forEach(Fb);
        delete this.c[a];
        this.changed();
    };
    k.dd = function() {
        return this.get(ci);
    };
    k.Mg = function(a) {
        this.set(ci, a);
    };
    k.ng = function(a) {
        var b = void 0 !== a ? a : [], c = b.length;
        this.dd().forEach(function(a) {
            a.ng(b);
        });
        a = Af(this);
        var d;
        for (d = b.length; c < d; c++) {
            var e = b[c];
            e.opacity *= a.opacity;
            e.visible = e.visible && a.visible;
            e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
            e.minResolution = Math.max(e.minResolution, a.minResolution);
            void 0 !== a.extent && (e.extent = void 0 !== e.extent ? tb(e.extent, a.extent) : a.extent);
        }
        return b;
    };
    k.rg = function() {
        return "ready";
    };
    var ci = "layers";
    function ji(a) {
        a = void 0 !== a ? a : {};
        bi.call(this, a);
        this.g = void 0 !== a.mapTypeId ? a.mapTypeId : google.maps.MapTypeId.ROADMAP;
        this.j = a.styles ? a.styles : null;
    }
    v(ji, bi);
    ji.prototype.l = function() {
        return this.g;
    };
    function ki(a, b, c, d) {
        this.g = [];
        this.u = [];
        this.a = new lh(a, b);
        this.f = new Th(a, b);
        this.c = new Vh(a, b, c);
        this.i = new Wh(a, b);
        this.o = d;
        this.s = b.getDiv();
        this.j = a.a;
        this.l = a.Zb();
        Yf.call(this, a, b);
        if (this.sa.T().getCenter()) this.sa.once("postrender", function() {
            this.Bg = !0;
            this.Md();
        }, this); else this.sa.T().once("change:center", function() {
            this.sa.once("postrender", function() {
                this.Bg = !0;
                this.Md();
            }, this);
            this.Md();
        }, this);
    }
    v(ki, Yf);
    k = ki.prototype;
    k.wf = !1;
    k.Bg = !1;
    k.Na = function() {
        Yf.prototype.Na.call(this);
        var a = this.sa.Nc();
        a.forEach(this.Hk, this);
        var b = this.qa;
        b.push(a.G("add", this.rq, this));
        b.push(a.G("remove", this.sq, this));
    };
    k.Ia = function() {
        this.sa.Nc().forEach(this.Ek, this);
        Yf.prototype.Ia.call(this);
    };
    function li(a, b) {
        a.wf = b;
        a.a.f(b);
        a.f.f(b);
        a.c.f(b);
    }
    k.Qj = function(a) {
        this.o = a;
        this.Ia();
        this.Na();
    };
    k.rq = function(a) {
        this.Hk(a.element);
        this.le();
    };
    k.sq = function(a) {
        this.Ek(a.element);
        this.le();
    };
    k.Hk = function(a) {
        a instanceof ji ? (this.g.push(a), this.u.push({
            layer: a,
            qa: [ a.G("change:visible", this.Md, this) ]
        }), this.Md()) : a instanceof I && !1 !== this.o.vector ? this.c.yc(a) : a instanceof ph && !1 !== this.o.tile ? this.f.yc(a) : a instanceof oh && !1 !== this.o.image && this.a.yc(a);
    };
    k.Ek = function(a) {
        a instanceof ji ? (a = this.g.indexOf(a), -1 !== a && (this.g.splice(a, 1), Lf(this.u[a].qa), 
        this.u.splice(a, 1), this.Md())) : a instanceof I ? this.c.xc(a) : a instanceof ph ? this.f.xc(a) : a instanceof oh && this.a.xc(a);
    };
    function mi(a) {
        var b = a.sa.T().getCenter();
        !a.wf && a.Bg && b && (a.l.removeChild(a.j), a.l.appendChild(a.s), a.b.controls[parseInt(google.maps.ControlPosition.TOP_LEFT, 10)].push(a.j), 
        a.i.Na(), google.maps.event.trigger(a.b, "resize"), a.i.setCenter(), a.i.Zg(), a.i.xf(), 
        li(a, !0), a.a.Na(), a.f.Na(), a.c.Na(), a.le());
    }
    k.Md = function() {
        var a = null;
        this.sa.Nc().a.slice(0).reverse().every(function(b) {
            return b instanceof ji && b.Ma() && -1 !== this.g.indexOf(b) ? (a = b, !1) : !0;
        }, this);
        if (a) {
            this.b.setMapTypeId(a.g);
            var b = a.j;
            b ? this.b.setOptions({
                styles: b
            }) : this.b.setOptions({
                styles: null
            });
            mi(this);
        } else this.wf && (this.b.controls[parseInt(google.maps.ControlPosition.TOP_LEFT, 10)].removeAt(0), 
        this.l.removeChild(this.s), this.l.appendChild(this.j), this.i.Ia(), this.j.style.position = "relative", 
        this.a.Ia(), this.f.Ia(), this.c.Ia(), li(this, !1));
    };
    k.le = function() {
        this.a.Nj();
        this.f.Xg();
    };
    k.Pj = function() {
        this.a.Oj();
    };
    function ni(a, b, c) {
        this.i = a;
        this.c = b;
        this.g = c;
        this.b = [];
        this.a = this.f = 0;
    }
    function oi(a) {
        a.b.length = 0;
        a.f = 0;
        a.a = 0;
    }
    function pi(a) {
        if (6 > a.b.length) return !1;
        var b = Date.now() - a.g, c = a.b.length - 3;
        if (a.b[c + 2] < b) return !1;
        for (var d = c - 3; 0 < d && a.b[d + 2] > b; ) d -= 3;
        b = a.b[c + 2] - a.b[d + 2];
        if (b < 1e3 / 60) return !1;
        var e = a.b[c] - a.b[d];
        c = a.b[c + 1] - a.b[d + 1];
        a.f = Math.atan2(c, e);
        a.a = Math.sqrt(e * e + c * c) / b;
        return a.a > a.c;
    }
    var qi = {
        ds: "singleclick",
        Sr: "click",
        Tr: "dblclick",
        Wr: "pointerdrag",
        Zr: "pointermove",
        Vr: "pointerdown",
        cs: "pointerup",
        bs: "pointerover",
        $r: "pointerout",
        Xr: "pointerenter",
        Yr: "pointerleave",
        Ur: "pointercancel"
    };
    function ri(a) {
        Vb.call(this);
        this.u = null;
        this.Ha(!0);
        this.handleEvent = a.handleEvent;
    }
    v(ri, Vb);
    ri.prototype.c = function() {
        return this.get("active");
    };
    ri.prototype.i = function() {
        return this.u;
    };
    ri.prototype.Ha = function(a) {
        this.set("active", a);
    };
    ri.prototype.setMap = function(a) {
        this.u = a;
    };
    function si(a, b, c, d) {
        if (void 0 !== b) {
            var e = a.Ra(), f = a.getCenter();
            void 0 !== e && f && 0 < d ? a.animate({
                rotation: b,
                anchor: c,
                duration: d,
                easing: rh
            }) : a.rotate(b, c);
        }
    }
    function ti(a, b, c, d) {
        var e = a.Ga();
        b = a.constrainResolution(e, b, 0);
        if (void 0 !== b) {
            var f = a.g;
            b = cc(b, a.$a() || f[f.length - 1], a.Za() || f[0]);
        }
        c && void 0 !== b && b !== e && (f = a.getCenter(), c = ui(a, b, c), c = a.Wc(c), 
        c = [ (b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e) ]);
        vi(a, b, c, d);
    }
    function vi(a, b, c, d) {
        if (b) {
            var e = a.Ga(), f = a.getCenter();
            void 0 !== e && f && b !== e && d ? a.animate({
                resolution: b,
                anchor: c,
                duration: d,
                easing: rh
            }) : (c && (c = ui(a, b, c), a.setCenter(c)), a.kd(b));
        }
    }
    function wi(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        ri.call(this, {
            handleEvent: xi
        });
        this.g = void 0 !== a.duration ? a.duration : 250;
    }
    v(wi, ri);
    function xi(a) {
        var b = !1, c = a.originalEvent;
        if ("dblclick" == a.type) {
            b = a.coordinate;
            c = c.shiftKey ? -this.a : this.a;
            var d = a.map.T();
            ti(d, c, b, this.g);
            a.preventDefault();
            b = !0;
        }
        return !b;
    }
    function yi(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a;
    }
    function zi(a, b) {
        var c = b.Fd(), d = b.getCenter();
        b = d[0];
        d = d[1];
        var e = a[0] - b;
        a = a[1] - d;
        0 === e && 0 === a && (e = 1);
        var f = Math.sqrt(e * e + a * a);
        return [ b + c * e / f, d + c * a / f ];
    }
    function Ai(a, b) {
        var c = a[0];
        a = a[1];
        var d = b[0], e = b[1];
        b = d[0];
        d = d[1];
        var f = e[0];
        e = e[1];
        var g = f - b, h = e - d;
        c = 0 === g && 0 === h ? 0 : (g * (c - b) + h * (a - d)) / (g * g + h * h || 0);
        0 >= c ? (a = b, c = d) : 1 <= c ? (a = f, c = e) : (a = b + c * g, c = d + c * h);
        return [ a, c ];
    }
    function Bi(a, b, c) {
        b = ic(b + 180, 360) - 180;
        var d = Math.abs(3600 * b);
        c = c || 0;
        var e = Math.pow(10, c), f = Math.floor(d / 3600), g = Math.floor((d - 3600 * f) / 60);
        d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
        60 <= d && (d = 0, g += 1);
        60 <= g && (g = 0, f += 1);
        return f + "° " + Wg(g) + "′ " + Wg(d, c) + "″" + (0 == b ? "" : " " + a.charAt(0 > b ? 1 : 0));
    }
    function Ci(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : "";
    }
    function Di(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d) if (a[d] != b[d]) {
            c = !1;
            break;
        }
        return c;
    }
    function Ei(a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = a[1] * c + a[0] * b;
        a[0] = a[0] * c - a[1] * b;
        a[1] = d;
        return a;
    }
    function Fi(a, b) {
        a[0] *= b;
        a[1] *= b;
    }
    function Gi(a, b) {
        var c = a[0] - b[0];
        a = a[1] - b[1];
        return c * c + a * a;
    }
    function Hi(a, b) {
        return Math.sqrt(Gi(a, b));
    }
    function Ii(a, b) {
        return Gi(a, Ai(a, b));
    }
    function Ji(a, b) {
        return Ci(a, "{x}, {y}", b);
    }
    function Ki(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey;
    }
    function Li(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
    }
    function Mi(a) {
        a = a.originalEvent;
        return 0 == a.button && !(ve && we && a.ctrlKey);
    }
    function Ni(a) {
        return "pointermove" == a.type;
    }
    function Oi(a) {
        return "singleclick" == a.type;
    }
    function Pi(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey;
    }
    function Qi(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
    }
    function Ri(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a;
    }
    function Si(a) {
        Pa(a.b, 56);
        return "mouse" == a.b.pointerType;
    }
    function Ti(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button;
    }
    function Ui(a, b, c) {
        Pb.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null;
    }
    v(Ui, Pb);
    function Vi(a, b, c, d, e) {
        Ui.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.xd(c);
        this.coordinate = b.Ta(this.pixel);
        this.dragging = void 0 !== d ? d : !1;
    }
    v(Vi, Ui);
    Vi.prototype.preventDefault = function() {
        Ui.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault();
    };
    Vi.prototype.stopPropagation = function() {
        Ui.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation();
    };
    function Wi(a, b, c, d, e) {
        Vi.call(this, a, b, c.b, d, e);
        this.b = c;
    }
    v(Wi, Vi);
    function Xi(a) {
        a = a ? a : {};
        ri.call(this, {
            handleEvent: a.handleEvent ? a.handleEvent : Yi
        });
        this.il = a.handleDownEvent ? a.handleDownEvent : zb;
        this.ol = a.handleDragEvent ? a.handleDragEvent : Ba;
        this.pl = a.handleMoveEvent ? a.handleMoveEvent : Ba;
        this.Al = a.handleUpEvent ? a.handleUpEvent : zb;
        this.C = !1;
        this.Z = {};
        this.l = [];
    }
    v(Xi, ri);
    function Zi(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++) c += a[e].clientX, d += a[e].clientY;
        return [ c / b, d / b ];
    }
    function Yi(a) {
        if (!(a instanceof Wi)) return !0;
        var b = !1, c = a.type;
        if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c) {
            c = a.b;
            var d = c.pointerId.toString();
            "pointerup" == a.type ? delete this.Z[d] : "pointerdown" == a.type ? this.Z[d] = c : d in this.Z && (this.Z[d] = c);
            this.l = Cb(this.Z);
        }
        this.C ? "pointerdrag" == a.type ? this.ol(a) : "pointerup" == a.type && (this.C = this.Al(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.C = a = this.il(a), 
        b = this.md(a)) : "pointermove" == a.type && this.pl(a);
        return !b;
    }
    Xi.prototype.md = function(a) {
        return a;
    };
    function $i(a) {
        Xi.call(this, {
            handleDownEvent: aj,
            handleDragEvent: bj,
            handleUpEvent: cj
        });
        a = a ? a : {};
        this.a = a.kinetic;
        this.g = null;
        this.s = a.condition ? a.condition : Pi;
        this.j = !1;
    }
    v($i, Xi);
    function bj(a) {
        var b = this.l, c = Zi(b);
        if (b.length == this.o) {
            if (this.a && this.a.b.push(c[0], c[1], Date.now()), this.g) {
                var d = this.g[0] - c[0], e = c[1] - this.g[1];
                a = a.map.T();
                var f = a.getState();
                d = [ d, e ];
                Fi(d, f.resolution);
                Ei(d, f.rotation);
                yi(d, f.center);
                d = a.Wc(d);
                a.setCenter(d);
            }
        } else this.a && oi(this.a);
        this.g = c;
        this.o = b.length;
    }
    function cj(a) {
        var b = a.map;
        a = b.T();
        if (0 === this.l.length) {
            if (!this.j && this.a && pi(this.a)) {
                var c = this.a;
                c = (c.c - c.a) / c.i;
                var d = this.a.f, e = a.getCenter();
                e = b.Ja(e);
                b = b.Ta([ e[0] - c * Math.cos(d), e[1] - c * Math.sin(d) ]);
                a.animate({
                    center: a.Wc(b),
                    duration: 500,
                    easing: rh
                });
            }
            dj(a, 1, -1);
            return !1;
        }
        this.a && oi(this.a);
        this.g = null;
        return !0;
    }
    function aj(a) {
        if (0 < this.l.length && this.s(a)) {
            var b = a.map.T();
            this.g = null;
            this.C || dj(b, 1, 1);
            b.Ic() && b.setCenter(a.frameState.viewState.center);
            this.a && oi(this.a);
            this.j = 1 < this.l.length;
            return !0;
        }
        return !1;
    }
    $i.prototype.md = zb;
    function ej(a) {
        if (void 0 !== a) return 0;
    }
    function fj(a, b) {
        if (void 0 !== a) return a + b;
    }
    function gj(a) {
        var b = 2 * Math.PI / a;
        return function(a, d) {
            if (void 0 !== a) return a = Math.floor((a + d) / b + .5) * b;
        };
    }
    function hj() {
        var a = hc(5);
        return function(b, c) {
            if (void 0 !== b) return Math.abs(b + c) <= a ? 0 : b + c;
        };
    }
    function ij(a) {
        a = a ? a : {};
        Xi.call(this, {
            handleDownEvent: jj,
            handleDragEvent: kj,
            handleUpEvent: lj
        });
        this.g = a.condition ? a.condition : Li;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250;
    }
    v(ij, Xi);
    function kj(a) {
        if (Si(a)) {
            var b = a.map, c = b.T();
            if (c.l.rotation !== ej) {
                b = b.ib();
                a = a.pixel;
                a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2);
                if (void 0 !== this.a) {
                    b = a - this.a;
                    var d = c.Ra();
                    si(c, d - b);
                }
                this.a = a;
            }
        }
    }
    function lj(a) {
        if (!Si(a)) return !0;
        a = a.map.T();
        dj(a, 1, -1);
        var b = a.Ra(), c = this.j;
        b = a.constrainRotation(b, 0);
        si(a, b, void 0, c);
        return !1;
    }
    function jj(a) {
        return Si(a) && Mi(a) && this.g(a) ? (dj(a.map.T(), 1, 1), this.a = void 0, !0) : !1;
    }
    ij.prototype.md = zb;
    function mj(a) {
        this.Yc = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.f = this.c = this.b = null;
    }
    v(mj, Nb);
    mj.prototype.fa = function() {
        this.setMap(null);
    };
    function nj(a) {
        var b = a.c, c = a.f;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px";
    }
    mj.prototype.setMap = function(a) {
        if (this.b) {
            this.b.s.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit";
        }
        (this.b = a) && this.b.s.appendChild(this.a);
    };
    function oj(a) {
        var b = a.c, c = a.f;
        b = [ b, [ b[0], c[1] ], c, [ c[0], b[1] ] ].map(a.b.Ta, a.b);
        b[4] = b[0].slice();
        a.Yc ? a.Yc.ka([ b ]) : a.Yc = new D([ b ]);
    }
    mj.prototype.getGeometry = function() {
        return this.Yc;
    };
    function pj(a) {
        Xi.call(this, {
            handleDownEvent: vj,
            handleDragEvent: wj,
            handleUpEvent: xj
        });
        a = a ? a : {};
        this.a = new mj(a.className || "ol-dragbox");
        this.s = void 0 !== a.minArea ? a.minArea : 64;
        this.g = null;
        this.B = a.condition ? a.condition : yb;
        this.o = a.boxEndCondition ? a.boxEndCondition : yj;
    }
    v(pj, Xi);
    function yj(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return a * a + b * b >= this.s;
    }
    function wj(a) {
        if (Si(a)) {
            var b = this.a, c = a.pixel;
            b.c = this.g;
            b.f = c;
            oj(b);
            nj(b);
            this.b(new zj(Aj, a.coordinate, a));
        }
    }
    pj.prototype.getGeometry = function() {
        return this.a.getGeometry();
    };
    pj.prototype.j = Ba;
    function xj(a) {
        if (!Si(a)) return !0;
        this.a.setMap(null);
        this.o(a, this.g, a.pixel) && (this.j(a), this.b(new zj(Bj, a.coordinate, a)));
        return !1;
    }
    function vj(a) {
        if (Si(a) && Mi(a) && this.B(a)) {
            this.g = a.pixel;
            this.a.setMap(a.map);
            var b = this.a, c = this.g;
            b.c = this.g;
            b.f = c;
            oj(b);
            nj(b);
            this.b(new zj(Cj, a.coordinate, a));
            return !0;
        }
        return !1;
    }
    var Cj = "boxstart", Aj = "boxdrag", Bj = "boxend";
    function zj(a, b, c) {
        Pb.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c;
    }
    v(zj, Pb);
    function Dj(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : Qi;
        this.D = void 0 !== a.duration ? a.duration : 200;
        this.P = void 0 !== a.out ? a.out : !1;
        pj.call(this, {
            condition: b,
            className: a.className || "ol-dragzoom"
        });
    }
    v(Dj, pj);
    Dj.prototype.j = function() {
        var a = this.u, b = a.T(), c = a.ib(), d = this.getGeometry().A();
        if (this.P) {
            var e = b.Bc(c);
            d = [ a.Ja(jb(d)), a.Ja(lb(d)) ];
            a = cb(void 0);
            var f;
            var g = 0;
            for (f = d.length; g < f; ++g) Sa(a, d[g]);
            d = b.Re(a, c);
            wb(e, 1 / d);
            d = e;
        }
        c = b.constrainResolution(b.Re(d, c));
        e = rb(d);
        e = b.Wc(e);
        b.animate({
            resolution: c,
            center: e,
            duration: this.D,
            easing: rh
        });
    };
    function Ej(a) {
        ri.call(this, {
            handleEvent: Fj
        });
        a = a || {};
        this.a = function(a) {
            return Pi(a) && Ri(a);
        };
        this.g = void 0 !== a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128;
    }
    v(Ej, ri);
    function Fj(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.g(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                b = a.map.T();
                var d = b.Ga() * this.l, e = 0, f = 0;
                40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
                d = [ e, f ];
                Ei(d, b.Ra());
                c = this.j;
                if (e = b.getCenter()) d = b.Wc([ e[0] + d[0], e[1] + d[1] ]), c ? b.animate({
                    duration: c,
                    easing: th,
                    center: d
                }) : b.setCenter(d);
                a.preventDefault();
                b = !0;
            }
        }
        return !b;
    }
    function Gj(a) {
        ri.call(this, {
            handleEvent: Hj
        });
        a = a ? a : {};
        this.g = a.condition ? a.condition : Ri;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100;
    }
    v(Gj, ri);
    function Hj(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            !this.g(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a, c = a.map.T(), 
            ti(c, b, void 0, this.j), a.preventDefault(), b = !0);
        }
        return !b;
    }
    function Ij(a) {
        ri.call(this, {
            handleEvent: Jj
        });
        a = a || {};
        this.j = 0;
        this.C = void 0 !== a.duration ? a.duration : 250;
        this.Z = void 0 !== a.timeout ? a.timeout : 80;
        this.B = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.R = a.constrainResolution || !1;
        this.a = null;
        this.o = this.l = this.s = this.g = void 0;
    }
    v(Ij, ri);
    function Jj(a) {
        var b = a.type;
        if ("wheel" !== b && "mousewheel" !== b) return !0;
        a.preventDefault();
        b = a.map;
        var c = a.originalEvent;
        this.B && (this.a = a.coordinate);
        if ("wheel" == a.type) {
            var d = c.deltaY;
            te && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= xe);
            c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40);
        } else "mousewheel" == a.type && (d = -c.wheelDeltaY, ue && (d /= 3));
        if (0 === d) return !1;
        a = Date.now();
        void 0 === this.g && (this.g = a);
        if (!this.l || 400 < a - this.g) this.l = 4 > Math.abs(d) ? Kj : Lj;
        if (this.l === Kj) {
            b = b.T();
            this.o ? clearTimeout(this.o) : dj(b, 1, 1);
            this.o = setTimeout(this.D.bind(this), 400);
            c = b.Ga() * Math.pow(2, d / 300);
            var e = b.$a(), f = b.Za(), g = 0;
            c < e ? (c = Math.max(c, e / 1.5), g = 1) : c > f && (c = Math.min(c, 1.5 * f), 
            g = -1);
            if (this.a) {
                var h = ui(b, c, this.a);
                b.setCenter(b.Wc(h));
            }
            b.kd(c);
            0 === g && this.R && b.animate({
                resolution: b.constrainResolution(c, 0 < d ? -1 : 1),
                easing: rh,
                anchor: this.a,
                duration: this.C
            });
            0 < g ? b.animate({
                resolution: e,
                easing: rh,
                anchor: this.a,
                duration: 500
            }) : 0 > g && b.animate({
                resolution: f,
                easing: rh,
                anchor: this.a,
                duration: 500
            });
            this.g = a;
            return !1;
        }
        this.j += d;
        d = Math.max(this.Z - (a - this.g), 0);
        clearTimeout(this.s);
        this.s = setTimeout(this.P.bind(this, b), d);
        return !1;
    }
    Ij.prototype.D = function() {
        this.o = void 0;
        dj(this.u.T(), 1, -1);
    };
    Ij.prototype.P = function(a) {
        a = a.T();
        a.Ic() && a.ud();
        ti(a, -cc(this.j, -1, 1), this.a, this.C);
        this.l = void 0;
        this.j = 0;
        this.a = null;
        this.s = this.g = void 0;
    };
    Ij.prototype.W = function(a) {
        this.B = a;
        a || (this.a = null);
    };
    var Kj = "trackpad", Lj = "wheel";
    function Mj(a) {
        Xi.call(this, {
            handleDownEvent: Nj,
            handleDragEvent: Oj,
            handleUpEvent: Pj
        });
        a = a || {};
        this.g = null;
        this.j = void 0;
        this.a = !1;
        this.o = 0;
        this.B = void 0 !== a.threshold ? a.threshold : .3;
        this.s = void 0 !== a.duration ? a.duration : 250;
    }
    v(Mj, Xi);
    function Oj(a) {
        var b = 0, c = this.l[0], d = this.l[1];
        c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.o += b, !this.a && Math.abs(this.o) > this.B && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.T();
        if (c.l.rotation !== ej) {
            d = a.a.getBoundingClientRect();
            var e = Zi(this.l);
            e[0] -= d.left;
            e[1] -= d.top;
            this.g = a.Ta(e);
            this.a && (d = c.Ra(), a.render(), si(c, d + b, this.g));
        }
    }
    function Pj(a) {
        if (2 > this.l.length) {
            a = a.map.T();
            dj(a, 1, -1);
            if (this.a) {
                var b = a.Ra(), c = this.g, d = this.s;
                b = a.constrainRotation(b, 0);
                si(a, b, c, d);
            }
            return !1;
        }
        return !0;
    }
    function Nj(a) {
        return 2 <= this.l.length ? (a = a.map, this.g = null, this.j = void 0, this.a = !1, 
        this.o = 0, this.C || dj(a.T(), 1, 1), !0) : !1;
    }
    Mj.prototype.md = zb;
    function Qj(a) {
        Xi.call(this, {
            handleDownEvent: Rj,
            handleDragEvent: Sj,
            handleUpEvent: Tj
        });
        a = a ? a : {};
        this.o = a.constrainResolution || !1;
        this.g = null;
        this.s = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1;
    }
    v(Qj, Xi);
    function Sj(a) {
        var b = 1, c = this.l[0], d = this.l[1], e = c.clientX - d.clientX;
        c = c.clientY - d.clientY;
        e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        a = a.map;
        e = a.T();
        d = e.Ga();
        var f = e.Za(), g = e.$a();
        c = d * b;
        c > f ? (b = f / d, c = f) : c < g && (b = g / d, c = g);
        1 != b && (this.j = b);
        b = a.a.getBoundingClientRect();
        d = Zi(this.l);
        d[0] -= b.left;
        d[1] -= b.top;
        this.g = a.Ta(d);
        a.render();
        vi(e, c, this.g);
    }
    function Tj(a) {
        if (2 > this.l.length) {
            a = a.map.T();
            dj(a, 1, -1);
            var b = a.Ga();
            if (this.o || b < a.$a() || b > a.Za()) {
                var c = this.g, d = this.s;
                b = a.constrainResolution(b, 0, this.j - 1);
                vi(a, b, c, d);
            }
            return !1;
        }
        return !0;
    }
    function Rj(a) {
        return 2 <= this.l.length ? (a = a.map, this.g = null, this.a = void 0, this.j = 1, 
        this.C || dj(a.T(), 1, 1), !0) : !1;
    }
    Qj.prototype.md = zb;
    function Uj(a) {
        a = a ? a : {};
        var b = new Xh(), c = new ni(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new ij());
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new wi({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new $i({
            kinetic: c
        }));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new Mj());
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new Qj({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        if (void 0 !== a.keyboard ? a.keyboard : 1) b.push(new Ej()), b.push(new Gj({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new Ij({
            constrainResolution: a.constrainResolution,
            duration: a.zoomDuration
        }));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new Dj({
            duration: a.zoomDuration
        }));
        return b;
    }
    function Vj(a) {
        this.a = [];
        var b = document.createElement("div");
        b.style.height = "inherit";
        b.style.width = "inherit";
        b = new google.maps.Map(b, {
            disableDefaultUI: !0,
            disableDoubleClickZoom: !0,
            draggable: !1,
            keyboardShortcuts: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1,
            streetViewControl: !1
        });
        pa.call(this, a.map, b);
        this.f = new ki(this.sa, this.b, void 0 !== a.mapIconOptions ? a.mapIconOptions : {}, void 0 !== a.watch ? a.watch : {});
        this.a.push(this.f);
    }
    v(Vj, pa);
    k = Vj.prototype;
    k.sd = !1;
    k.Ij = function() {
        if (!this.sd) {
            for (var a = 0, b = this.a.length; a < b; a++) this.a[a].Na();
            this.sd = !0;
        }
    };
    k.Jj = function() {
        if (this.sd) {
            for (var a = 0, b = this.a.length; a < b; a++) this.a[a].Ia();
            this.sd = !1;
        }
    };
    k.lq = function() {
        return this.sd && this.f.wf;
    };
    k.Zl = function() {
        return this.b;
    };
    k.oq = function(a) {
        this.f.Qj(void 0 !== a ? a : {});
    };
    k.pq = function() {
        this.sd ? this.Jj() : this.Ij();
    };
    k.mq = function() {
        this.f.le();
    };
    k.nq = function() {
        this.f.Pj();
    };
    function Wj(a, b) {
        this.b = a;
        this.i = b;
    }
    function Xj(a) {
        Wj.call(this, a, {
            mousedown: this.wn,
            mousemove: this.xn,
            mouseup: this.An,
            mouseover: this.zn,
            mouseout: this.yn
        });
        this.a = a.f;
        this.f = [];
    }
    v(Xj, Wj);
    function Yj(a, b) {
        a = a.f;
        var c = b.clientX;
        b = b.clientY;
        for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) {
            var g = Math.abs(b - f[1]);
            if (25 >= Math.abs(c - f[0]) && 25 >= g) return !0;
        }
        return !1;
    }
    function Zj(a) {
        var b = ak(a, a), c = b.preventDefault;
        b.preventDefault = function() {
            a.preventDefault();
            c();
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b;
    }
    k = Xj.prototype;
    k.wn = function(a) {
        if (!Yj(this, a)) {
            1..toString() in this.a && this.cancel(a);
            var b = Zj(a);
            this.a[1..toString()] = a;
            bk(this.b, "pointerdown", b, a);
        }
    };
    k.xn = function(a) {
        if (!Yj(this, a)) {
            var b = Zj(a);
            bk(this.b, "pointermove", b, a);
        }
    };
    k.An = function(a) {
        if (!Yj(this, a)) {
            var b = this.a[1..toString()];
            b && b.button === a.button && (b = Zj(a), bk(this.b, "pointerup", b, a), delete this.a[1..toString()]);
        }
    };
    k.zn = function(a) {
        if (!Yj(this, a)) {
            var b = Zj(a);
            ck(this.b, b, a);
        }
    };
    k.yn = function(a) {
        if (!Yj(this, a)) {
            var b = Zj(a);
            dk(this.b, b, a);
        }
    };
    k.cancel = function(a) {
        var b = Zj(a);
        this.b.cancel(b, a);
        delete this.a[1..toString()];
    };
    function ek(a) {
        Wj.call(this, a, {
            MSPointerDown: this.Fn,
            MSPointerMove: this.Gn,
            MSPointerUp: this.Jn,
            MSPointerOut: this.Hn,
            MSPointerOver: this.In,
            MSPointerCancel: this.En,
            MSGotPointerCapture: this.Cn,
            MSLostPointerCapture: this.Dn
        });
        this.a = a.f;
        this.f = [ "", "unavailable", "touch", "pen", "mouse" ];
    }
    v(ek, Wj);
    function fk(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = ak(b, b), c.pointerType = a.f[b.pointerType]);
        return c;
    }
    k = ek.prototype;
    k.Fn = function(a) {
        this.a[a.pointerId.toString()] = a;
        var b = fk(this, a);
        bk(this.b, "pointerdown", b, a);
    };
    k.Gn = function(a) {
        var b = fk(this, a);
        bk(this.b, "pointermove", b, a);
    };
    k.Jn = function(a) {
        var b = fk(this, a);
        bk(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()];
    };
    k.Hn = function(a) {
        var b = fk(this, a);
        dk(this.b, b, a);
    };
    k.In = function(a) {
        var b = fk(this, a);
        ck(this.b, b, a);
    };
    k.En = function(a) {
        var b = fk(this, a);
        this.b.cancel(b, a);
        delete this.a[a.pointerId.toString()];
    };
    k.Dn = function(a) {
        this.b.b(new gk("lostpointercapture", a, a));
    };
    k.Cn = function(a) {
        this.b.b(new gk("gotpointercapture", a, a));
    };
    function hk(a) {
        Wj.call(this, a, {
            pointerdown: this.Fq,
            pointermove: this.Gq,
            pointerup: this.Jq,
            pointerout: this.Hq,
            pointerover: this.Iq,
            pointercancel: this.Eq,
            gotpointercapture: this.Dm,
            lostpointercapture: this.tn
        });
    }
    v(hk, Wj);
    k = hk.prototype;
    k.Fq = function(a) {
        ik(this.b, a);
    };
    k.Gq = function(a) {
        ik(this.b, a);
    };
    k.Jq = function(a) {
        ik(this.b, a);
    };
    k.Hq = function(a) {
        ik(this.b, a);
    };
    k.Iq = function(a) {
        ik(this.b, a);
    };
    k.Eq = function(a) {
        ik(this.b, a);
    };
    k.tn = function(a) {
        ik(this.b, a);
    };
    k.Dm = function(a) {
        ik(this.b, a);
    };
    function gk(a, b, c) {
        Pb.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = jk(a);
        this.pressure = kk(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.ctrlKey = "ctrlKey" in a ? a.ctrlKey : !1;
        this.altKey = "altKey" in a ? a.altKey : !1;
        this.shiftKey = "shiftKey" in a ? a.shiftKey : !1;
        this.metaKey = "metaKey" in a ? a.metaKey : !1;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.tiltX = "tiltX" in a ? a.tiltX : 0;
        this.tiltY = "tiltY" in a ? a.tiltY : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function() {
            b.preventDefault();
        });
    }
    v(gk, Pb);
    function jk(a) {
        if (a.buttons || lk) a = a.buttons; else switch (a.which) {
          case 1:
            a = 1;
            break;

          case 2:
            a = 4;
            break;

          case 3:
            a = 2;
            break;

          default:
            a = 0;
        }
        return a;
    }
    function kk(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c;
    }
    var lk = !1;
    try {
        lk = 1 === new MouseEvent("click", {
            buttons: 1
        }).buttons;
    } catch (a) {}
    function mk(a, b) {
        Wj.call(this, a, {
            touchstart: this.Lr,
            touchmove: this.Kr,
            touchend: this.Jr,
            touchcancel: this.Ir
        });
        this.a = a.f;
        this.j = b;
        this.f = void 0;
        this.g = 0;
        this.c = void 0;
    }
    v(mk, Wj);
    k = mk.prototype;
    k.hk = function() {
        this.g = 0;
        this.c = void 0;
    };
    function nk(a, b, c) {
        b = ak(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.g;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.f === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b;
    }
    function ok(a, b, c) {
        function d() {
            b.preventDefault();
        }
        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g;
        for (g = 0; g < f; ++g) {
            var h = nk(a, b, e[g]);
            h.preventDefault = d;
            c.call(a, b, h);
        }
    }
    k.Lr = function(a) {
        var b = a.touches, c = Object.keys(this.a), d = c.length;
        if (d >= b.length) {
            var e = [], f;
            for (f = 0; f < d; ++f) {
                var g = c[f];
                var h = this.a[g];
                var l;
                if (!(l = 1 == g)) a: {
                    for (var m = b.length, n = 0; n < m; n++) if (l = b[n], l.identifier === g - 2) {
                        l = !0;
                        break a;
                    }
                    l = !1;
                }
                l || e.push(h.out);
            }
            for (f = 0; f < e.length; ++f) this.Zf(a, e[f]);
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (0 === c || 1 === c && 1..toString() in this.a) this.f = b.identifier, void 0 !== this.c && clearTimeout(this.c);
        pk(this, a);
        this.g++;
        ok(this, a, this.Aq);
    };
    k.Aq = function(a, b) {
        this.a[b.pointerId] = {
            target: b.target,
            out: b,
            Tj: b.target
        };
        var c = this.b;
        b.bubbles = !0;
        bk(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        bk(c, "pointerenter", b, a);
        bk(this.b, "pointerdown", b, a);
    };
    k.Kr = function(a) {
        a.preventDefault();
        ok(this, a, this.Bn);
    };
    k.Bn = function(a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out, e = c.Tj;
            bk(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, 
            b.target ? (dk(this.b, d, a), ck(this.b, b, a)) : (b.target = e, b.relatedTarget = null, 
            this.Zf(a, b)));
            c.out = b;
            c.Tj = b.target;
        }
    };
    k.Jr = function(a) {
        pk(this, a);
        ok(this, a, this.Mr);
    };
    k.Mr = function(a, b) {
        bk(this.b, "pointerup", b, a);
        this.b.out(b, a);
        qk(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0, this.c = setTimeout(this.hk.bind(this), 200));
    };
    k.Ir = function(a) {
        ok(this, a, this.Zf);
    };
    k.Zf = function(a, b) {
        this.b.cancel(b, a);
        this.b.out(b, a);
        qk(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.f = void 0, this.c = setTimeout(this.hk.bind(this), 200));
    };
    function pk(a, b) {
        var c = a.j.f;
        b = b.changedTouches[0];
        if (a.f === b.identifier) {
            var d = [ b.clientX, b.clientY ];
            c.push(d);
            setTimeout(function() {
                var a = c.indexOf(d);
                -1 < a && c.splice(a, 1);
            }, 2500);
        }
    }
    function rk(a) {
        Rb.call(this);
        this.g = a;
        this.f = {};
        this.i = {};
        this.a = [];
        De ? sk(this, new hk(this)) : Ee ? sk(this, new ek(this)) : (a = new Xj(this), sk(this, a), 
        Ce && sk(this, new mk(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++) b = this.a[c], tk(this, Object.keys(b.i));
    }
    v(rk, Rb);
    function sk(a, b) {
        var c = Object.keys(b.i);
        c && (c.forEach(function(a) {
            var c = b.i[a];
            c && (this.i[a] = c.bind(b));
        }, a), a.a.push(b));
    }
    rk.prototype.c = function(a) {
        var b = this.i[a.type];
        b && b(a);
    };
    function tk(a, b) {
        b.forEach(function(a) {
            y(this.g, a, this.c, this);
        }, a);
    }
    function uk(a, b) {
        b.forEach(function(a) {
            Lb(this.g, a, this.c, this);
        }, a);
    }
    function ak(a, b) {
        for (var c = {}, d, e = 0, f = vk.length; e < f; e++) d = vk[e][0], c[d] = a[d] || b[d] || vk[e][1];
        return c;
    }
    function qk(a, b, c) {
        b.bubbles = !1;
        bk(a, "pointerleave", b, c);
    }
    rk.prototype.out = function(a, b) {
        a.bubbles = !0;
        bk(this, "pointerout", a, b);
    };
    rk.prototype.cancel = function(a, b) {
        bk(this, "pointercancel", a, b);
    };
    function dk(a, b, c) {
        a.out(b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || qk(a, b, c);
    }
    function ck(a, b, c) {
        b.bubbles = !0;
        bk(a, "pointerover", b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, bk(a, "pointerenter", b, c));
    }
    function bk(a, b, c, d) {
        a.b(new gk(b, d, c));
    }
    function ik(a, b) {
        a.b(new gk(b.type, b, b));
    }
    rk.prototype.fa = function() {
        for (var a = this.a.length, b, c = 0; c < a; c++) b = this.a[c], uk(this, Object.keys(b.i));
        Rb.prototype.fa.call(this);
    };
    var vk = [ [ "bubbles", !1 ], [ "cancelable", !1 ], [ "view", null ], [ "detail", null ], [ "screenX", 0 ], [ "screenY", 0 ], [ "clientX", 0 ], [ "clientY", 0 ], [ "ctrlKey", !1 ], [ "altKey", !1 ], [ "shiftKey", !1 ], [ "metaKey", !1 ], [ "button", 0 ], [ "relatedTarget", null ], [ "buttons", 0 ], [ "pointerId", 0 ], [ "width", 0 ], [ "height", 0 ], [ "pressure", 0 ], [ "tiltX", 0 ], [ "tiltY", 0 ], [ "pointerType", "" ], [ "hwTimestamp", 0 ], [ "isPrimary", !1 ], [ "type", "" ], [ "target", null ], [ "currentTarget", null ], [ "which", 0 ] ];
    function wk(a, b) {
        Rb.call(this);
        this.f = a;
        this.j = 0;
        this.l = !1;
        this.i = [];
        this.C = b ? b * xe : xe;
        this.c = null;
        a = this.f.a;
        this.L = 0;
        this.s = {};
        this.g = new rk(a);
        this.a = null;
        this.o = y(this.g, "pointerdown", this.Xm, this);
        this.u = y(this.g, "pointermove", this.gr, this);
    }
    v(wk, Rb);
    function xk(a, b) {
        var c = new Wi("click", a.f, b);
        a.b(c);
        0 !== a.j ? (clearTimeout(a.j), a.j = 0, c = new Wi("dblclick", a.f, b), a.b(c)) : a.j = setTimeout(function() {
            this.j = 0;
            var a = new Wi("singleclick", this.f, b);
            this.b(a);
        }.bind(a), 250);
    }
    function yk(a, b) {
        "pointerup" == b.type || "pointercancel" == b.type ? delete a.s[b.pointerId] : "pointerdown" == b.type && (a.s[b.pointerId] = !0);
        a.L = Object.keys(a.s).length;
    }
    k = wk.prototype;
    k.wi = function(a) {
        yk(this, a);
        var b = new Wi("pointerup", this.f, a);
        this.b(b);
        b.Wj || this.l || 0 !== a.button || xk(this, this.c);
        0 === this.L && (this.i.forEach(Fb), this.i.length = 0, this.l = !1, this.c = null, 
        Ob(this.a), this.a = null);
    };
    k.Xm = function(a) {
        yk(this, a);
        var b = new Wi("pointerdown", this.f, a);
        this.b(b);
        this.c = a;
        0 === this.i.length && (this.a = new rk(document), this.i.push(y(this.a, "pointermove", this.$n, this), y(this.a, "pointerup", this.wi, this), y(this.g, "pointercancel", this.wi, this)));
    };
    k.$n = function(a) {
        if (zk(this, a)) {
            this.l = !0;
            var b = new Wi("pointerdrag", this.f, a, this.l);
            this.b(b);
        }
        a.preventDefault();
    };
    k.gr = function(a) {
        this.b(new Wi(a.type, this.f, a, !(!this.c || !zk(this, a))));
    };
    function zk(a, b) {
        return Math.abs(b.clientX - a.c.clientX) > a.C || Math.abs(b.clientY - a.c.clientY) > a.C;
    }
    k.fa = function() {
        this.u && (Fb(this.u), this.u = null);
        this.o && (Fb(this.o), this.o = null);
        this.i.forEach(Fb);
        this.i.length = 0;
        this.a && (Ob(this.a), this.a = null);
        this.g && (Ob(this.g), this.g = null);
        Rb.prototype.fa.call(this);
    };
    function Ak(a, b) {
        this.o = a;
        this.c = b;
        this.b = [];
        this.f = [];
        this.a = {};
    }
    Ak.prototype.clear = function() {
        this.b.length = 0;
        this.f.length = 0;
        Bb(this.a);
    };
    function Bk(a) {
        var b = a.b, c = a.f, d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), 
        Ck(a, 0));
        b = a.c(d);
        delete a.a[b];
        return d;
    }
    Ak.prototype.i = function(a) {
        Pa(!(this.c(a) in this.a), 31);
        var b = this.o(a);
        return Infinity != b ? (this.b.push(a), this.f.push(b), this.a[this.c(a)] = !0, 
        Dk(this, 0, this.b.length - 1), !0) : !1;
    };
    function Ck(a, b) {
        for (var c = a.b, d = a.f, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1; ) {
            var l = 2 * b + 1, m = 2 * b + 2;
            l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l;
        }
        c[b] = f;
        d[b] = g;
        Dk(a, h, b);
    }
    function Dk(a, b, c) {
        var d = a.b;
        a = a.f;
        for (var e = d[c], f = a[c]; c > b; ) {
            var g = c - 1 >> 1;
            if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g; else break;
        }
        d[c] = e;
        a[c] = f;
    }
    function Ek(a) {
        var b = a.o, c = a.b, d = a.f, e = 0, f = c.length, g;
        for (g = 0; g < f; ++g) {
            var h = c[g];
            var l = b(h);
            Infinity == l ? delete a.a[a.c(h)] : (d[e] = l, c[e++] = h);
        }
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--) Ck(a, b);
    }
    function Fk(a, b) {
        Ak.call(this, function(b) {
            return a.apply(null, b);
        }, function(a) {
            return a[0].ob();
        });
        this.u = b;
        this.j = 0;
        this.g = {};
    }
    v(Fk, Ak);
    Fk.prototype.i = function(a) {
        var b = Ak.prototype.i.call(this, a);
        b && y(a[0], "change", this.l, this);
        return b;
    };
    Fk.prototype.l = function(a) {
        a = a.target;
        var b = a.getState();
        if (2 === b || 3 === b || 4 === b || 5 === b) Lb(a, "change", this.l, this), a = a.ob(), 
        a in this.g && (delete this.g[a], --this.j), this.u();
    };
    function Gk(a, b, c) {
        for (var d = 0, e = !1, f, g, h; a.j < b && d < c && 0 < a.b.length; ) g = Bk(a)[0], 
        h = g.ob(), f = g.getState(), 5 === f ? e = !0 : 0 !== f || h in a.g || (a.g[h] = !0, 
        ++a.j, ++d, g.load());
        0 === d && e && a.u();
    }
    function Hk(a) {
        return function(b) {
            if (b) return [ cc(b[0], a[0], a[2]), cc(b[1], a[1], a[3]) ];
        };
    }
    function Ik(a) {
        return a;
    }
    function Jk(a) {
        return function(b, c, d) {
            if (void 0 !== b) return b = Fa(a, b, d), b = cc(b + c, 0, a.length - 1), c = Math.floor(b), 
            b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c];
        };
    }
    function Kk(a, b, c) {
        return function(d, e, f) {
            if (void 0 !== d) return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), 
            void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d);
        };
    }
    function K(a) {
        Vb.call(this);
        a = Ab({}, a);
        this.i = [ 0, 0 ];
        this.c = [];
        this.Pf = this.Pf.bind(this);
        this.j = Rc(a.projection);
        Lk(this, a);
    }
    v(K, Vb);
    function Lk(a, b) {
        var c = {};
        c.center = void 0 !== b.center ? b.center : null;
        var d = void 0 !== b.minZoom ? b.minZoom : 0;
        var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
        var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
        if (void 0 !== b.resolutions) {
            var g = b.resolutions;
            var h = g[d];
            var l = void 0 !== g[e] ? g[e] : g[g.length - 1];
            e = Jk(g);
        } else {
            h = Rc(b.projection);
            l = h.A();
            g = (l ? Math.max(pb(l), qb(l)) : 360 * rc.degrees / h.Jc()) / 256 / Math.pow(2, 0);
            var m = g / Math.pow(2, 28);
            h = b.maxResolution;
            void 0 !== h ? d = 0 : h = g / Math.pow(f, d);
            l = b.minResolution;
            void 0 === l && (l = void 0 !== b.maxZoom ? void 0 !== b.maxResolution ? h / Math.pow(f, e) : g / Math.pow(f, e) : m);
            e = d + Math.floor(Math.log(h / l) / Math.log(f));
            l = h / Math.pow(f, e - d);
            e = Kk(f, h, e - d);
        }
        a.a = h;
        a.o = l;
        a.C = f;
        a.g = b.resolutions;
        a.u = d;
        (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation, 
        d = void 0 === d || !0 === d ? hj() : !1 === d ? fj : "number" === typeof d ? gj(d) : fj) : d = ej;
        a.l = {
            center: void 0 !== b.extent ? Hk(b.extent) : Ik,
            resolution: e,
            rotation: d
        };
        void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.u), 
        a.g && (c.resolution = cc(Number(a.Ga() || c.resolution), a.o, a.a)));
        c.rotation = void 0 !== b.rotation ? b.rotation : 0;
        a.H(c);
        a.B = b;
    }
    function Mk(a, b) {
        var c = Ab({}, a.B);
        void 0 !== c.resolution ? c.resolution = a.Ga() : c.zoom = a.Jg();
        c.center = a.getCenter();
        c.rotation = a.Ra();
        return Ab({}, c, b);
    }
    k = K.prototype;
    k.animate = function(a) {
        var b = arguments.length;
        if (1 < b && "function" === typeof arguments[b - 1]) {
            var c = arguments[b - 1];
            --b;
        }
        if (Nk(this)) {
            for (var d = Date.now(), e = this.getCenter().slice(), f = this.Ga(), g = this.Ra(), h = [], l = 0; l < b; ++l) {
                var m = arguments[l], n = {
                    start: d,
                    complete: !1,
                    anchor: m.anchor,
                    duration: void 0 !== m.duration ? m.duration : 1e3,
                    easing: m.easing || sh
                };
                m.center && (n.pe = e, n.te = m.center, e = n.te);
                void 0 !== m.zoom ? (n.re = f, n.od = this.constrainResolution(this.a, m.zoom - this.u, 0), 
                f = n.od) : m.resolution && (n.re = f, n.od = m.resolution, f = n.od);
                void 0 !== m.rotation && (n.Nf = g, n.ue = g + (ic(m.rotation - g + Math.PI, 2 * Math.PI) - Math.PI), 
                g = n.ue);
                n.callback = c;
                n.pe && n.te && !Di(n.pe, n.te) || n.re !== n.od || n.Nf !== n.ue ? d += n.duration : n.complete = !0;
                h.push(n);
            }
            this.c.push(h);
            dj(this, 0, 1);
            this.Pf();
        } else b = arguments[b - 1], b.center && this.setCenter(b.center), void 0 !== b.zoom && this.Li(b.zoom), 
        void 0 !== b.rotation && this.je(b.rotation), c && c(!0);
    };
    k.Ic = function() {
        return 0 < this.i[0];
    };
    k.mi = function() {
        return 0 < this.i[1];
    };
    k.ud = function() {
        dj(this, 0, -this.i[0]);
        for (var a = 0, b = this.c.length; a < b; ++a) {
            var c = this.c[a];
            c[0].callback && c[0].callback(!1);
        }
        this.c.length = 0;
    };
    k.Pf = function() {
        void 0 !== this.s && (cancelAnimationFrame(this.s), this.s = void 0);
        if (this.Ic()) {
            for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
                for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                    var h = d[f];
                    if (!h.complete) {
                        b = a - h.start;
                        b = 0 < h.duration ? b / h.duration : 1;
                        1 <= b ? (h.complete = !0, b = 1) : e = !1;
                        b = h.easing(b);
                        if (h.pe) {
                            var l = h.pe[0], m = h.pe[1];
                            this.set("center", [ l + b * (h.te[0] - l), m + b * (h.te[1] - m) ]);
                        }
                        h.re && h.od && (l = 1 === b ? h.od : h.re + b * (h.od - h.re), h.anchor && this.set("center", ui(this, l, h.anchor)), 
                        this.set("resolution", l));
                        void 0 !== h.Nf && void 0 !== h.ue && (b = 1 === b ? ic(h.ue + Math.PI, 2 * Math.PI) - Math.PI : h.Nf + b * (h.ue - h.Nf), 
                        h.anchor && this.set("center", Ok(this, b, h.anchor)), this.set("rotation", b));
                        b = !0;
                        if (!h.complete) break;
                    }
                }
                e && (this.c[c] = null, dj(this, 0, -1), (d = d[0].callback) && d(!0));
            }
            this.c = this.c.filter(Boolean);
            b && void 0 === this.s && (this.s = requestAnimationFrame(this.Pf));
        }
    };
    function Ok(a, b, c) {
        var d = a.getCenter();
        if (void 0 !== d) {
            var e = [ d[0] - c[0], d[1] - c[1] ];
            Ei(e, b - a.Ra());
            yi(e, c);
        }
        return e;
    }
    function ui(a, b, c) {
        var d, e = a.getCenter();
        a = a.Ga();
        void 0 !== e && void 0 !== a && (d = [ c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a ]);
        return d;
    }
    function Pk(a) {
        var b = [ 100, 100 ];
        a = '.ol-viewport[data-view="' + x(a) + '"]';
        if (a = document.querySelector(a)) a = getComputedStyle(a), b[0] = parseInt(a.width, 10), 
        b[1] = parseInt(a.height, 10);
        return b;
    }
    k.Wc = function(a) {
        return this.l.center(a);
    };
    k.constrainResolution = function(a, b, c) {
        return this.l.resolution(a, b || 0, c || 0);
    };
    k.constrainRotation = function(a, b) {
        return this.l.rotation(a, b || 0);
    };
    k.getCenter = function() {
        return this.get("center");
    };
    k.Bc = function(a) {
        a = a || Pk(this);
        var b = this.getCenter();
        Pa(b, 1);
        var c = this.Ga();
        Pa(void 0 !== c, 2);
        var d = this.Ra();
        Pa(void 0 !== d, 3);
        return sb(b, c, d, a);
    };
    k.Za = function() {
        return this.a;
    };
    k.$a = function() {
        return this.o;
    };
    k.fo = function() {
        return this.Ue(this.o);
    };
    k.xr = function(a) {
        Lk(this, Mk(this, {
            maxZoom: a
        }));
    };
    k.ho = function() {
        return this.Ue(this.a);
    };
    k.yr = function(a) {
        Lk(this, Mk(this, {
            minZoom: a
        }));
    };
    k.io = function() {
        return this.j;
    };
    k.Ga = function() {
        return this.get("resolution");
    };
    k.jo = function() {
        return this.g;
    };
    k.Re = function(a, b) {
        b = b || Pk(this);
        return Math.max(pb(a) / b[0], qb(a) / b[1]);
    };
    function Qk(a) {
        var b = a.a, c = Math.log(b / a.o) / Math.log(2);
        return function(a) {
            return b / Math.pow(2, a * c);
        };
    }
    k.Ra = function() {
        return this.get("rotation");
    };
    function Rk(a) {
        var b = a.a, c = Math.log(b / a.o) / Math.log(2);
        return function(a) {
            return Math.log(b / a) / Math.log(2) / c;
        };
    }
    k.getState = function() {
        var a = this.getCenter(), b = this.j, c = this.Ga(), d = this.Ra();
        return {
            center: a.slice(),
            projection: void 0 !== b ? b : null,
            resolution: c,
            rotation: d,
            zoom: this.Jg()
        };
    };
    k.Jg = function() {
        var a, b = this.Ga();
        void 0 !== b && (a = this.Ue(b));
        return a;
    };
    k.Ue = function(a) {
        var b = this.u || 0, c;
        if (this.g) {
            b = c = Fa(this.g, a, 1);
            var d = this.g[c];
            c = c == this.g.length - 1 ? 2 : d / this.g[c + 1];
        } else d = this.a, c = this.C;
        return b + Math.log(d / a) / Math.log(c);
    };
    k.ti = function(a) {
        return this.constrainResolution(this.a, a - this.u, 0);
    };
    k.eg = function(a, b) {
        b = b || {};
        var c = b.size;
        c || (c = Pk(this));
        if (a instanceof md) if ("Circle" === a.getType()) {
            a = a.A();
            var d = Yd(a);
            d.rotate(this.Ra(), rb(a));
        } else d = a; else Pa(Array.isArray(a), 24), Pa(!ob(a), 25), d = Yd(a);
        var e = void 0 !== b.padding ? b.padding : [ 0, 0, 0, 0 ], f = void 0 !== b.constrainResolution ? b.constrainResolution : !0, g = void 0 !== b.nearest ? b.nearest : !1, h;
        void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.u, 0) : h = 0;
        var l = d.ba(), m = this.Ra();
        a = Math.cos(-m);
        m = Math.sin(-m);
        var n = Infinity, p = Infinity, q = -Infinity, r = -Infinity;
        d = d.la();
        for (var u = 0, w = l.length; u < w; u += d) {
            var z = l[u] * a - l[u + 1] * m, A = l[u] * m + l[u + 1] * a;
            n = Math.min(n, z);
            p = Math.min(p, A);
            q = Math.max(q, z);
            r = Math.max(r, A);
        }
        c = this.Re([ n, p, q, r ], [ c[0] - e[1] - e[3], c[1] - e[0] - e[2] ]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), 
        c = h);
        m = -m;
        h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
        e = (p + r) / 2 + (e[0] - e[2]) / 2 * c;
        a = [ h * a - e * m, e * a + h * m ];
        e = b.callback ? b.callback : Ba;
        void 0 !== b.duration ? this.animate({
            resolution: c,
            center: a,
            duration: b.duration,
            easing: b.easing
        }, e) : (this.kd(c), this.setCenter(a), setTimeout(e.bind(void 0, !0), 0));
    };
    k.rl = function(a, b, c) {
        var d = this.Ra(), e = Math.cos(-d);
        d = Math.sin(-d);
        var f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.Ga();
        f += (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.setCenter([ f * e - a * d, a * e + f * d ]);
    };
    function Nk(a) {
        return !!a.getCenter() && void 0 !== a.Ga();
    }
    k.rotate = function(a, b) {
        void 0 !== b && (b = Ok(this, a, b), this.setCenter(b));
        this.je(a);
    };
    k.setCenter = function(a) {
        this.set("center", a);
        this.Ic() && this.ud();
    };
    function dj(a, b, c) {
        a.i[b] += c;
        a.changed();
    }
    k.kd = function(a) {
        this.set("resolution", a);
        this.Ic() && this.ud();
    };
    k.je = function(a) {
        this.set("rotation", a);
        this.Ic() && this.ud();
    };
    k.Li = function(a) {
        this.kd(this.ti(a));
    };
    var Sk = [], Tk = [];
    function Uk(a, b) {
        switch (a) {
          case "MAP_RENDERER":
            a = Sk;
            a.push(b);
            break;

          case "LAYER_RENDERER":
            a = Tk;
            a.push(b);
            break;

          default:
            throw Error("Unsupported plugin type: " + a);
        }
    }
    function Vk(a) {
        for (var b = 0, c = a.length; b < c; ++b) Uk("LAYER_RENDERER", a[b]);
    }
    function L(a) {
        Vb.call(this);
        var b = Wk(a);
        this.zb = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.zc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.ua = void 0 !== a.pixelRatio ? a.pixelRatio : xe;
        this.Qd = b.logos;
        this.W = function() {
            this.j = void 0;
            this.jr.call(this);
        }.bind(this);
        this.Oa = ad();
        this.Rf = ad();
        this.eb = 0;
        this.C = this.B = this.D = this.g = this.c = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (Ce ? " ol-touch" : "");
        this.a.style.position = "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.s = document.createElement("DIV");
        this.s.className = "ol-overlaycontainer";
        this.a.appendChild(this.s);
        this.u = document.createElement("DIV");
        this.u.className = "ol-overlaycontainer-stopevent";
        for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0, e = c.length; d < e; ++d) y(this.u, c[d], Qb);
        this.a.appendChild(this.u);
        this.$ = new wk(this, a.moveTolerance);
        for (var f in qi) y(this.$, qi[f], this.vi, this);
        this.Z = b.keyboardEventTarget;
        this.o = null;
        y(this.a, "wheel", this.Cd, this);
        y(this.a, "mousewheel", this.Cd, this);
        this.controls = b.controls || new Xh();
        this.interactions = b.interactions || new Xh();
        this.l = b.overlays;
        this.$g = {};
        this.sc = b.vn.create(this.a, this);
        this.P = null;
        this.Ea = [];
        this.ra = new Fk(this.zm.bind(this), this.jn.bind(this));
        this.R = {};
        y(this, Xb("layergroup"), this.Om, this);
        y(this, Xb("view"), this.kn, this);
        y(this, Xb("size"), this.dn, this);
        y(this, Xb("target"), this.hn, this);
        this.H(b.values);
        this.controls.forEach(function(a) {
            a.setMap(this);
        }, this);
        y(this.controls, "add", function(a) {
            a.element.setMap(this);
        }, this);
        y(this.controls, "remove", function(a) {
            a.element.setMap(null);
        }, this);
        this.interactions.forEach(function(a) {
            a.setMap(this);
        }, this);
        y(this.interactions, "add", function(a) {
            a.element.setMap(this);
        }, this);
        y(this.interactions, "remove", function(a) {
            a.element.setMap(null);
        }, this);
        this.l.forEach(this.Uh, this);
        y(this.l, "add", function(a) {
            this.Uh(a.element);
        }, this);
        y(this.l, "remove", function(a) {
            var b = a.element.id;
            void 0 !== b && delete this.$g[b.toString()];
            a.element.setMap(null);
        }, this);
    }
    v(L, Vb);
    k = L.prototype;
    k.Xf = function(a) {
        this.controls.push(a);
    };
    k.Yf = function(a) {
        this.interactions.push(a);
    };
    k.Fe = function(a) {
        this.lc().dd().push(a);
    };
    k.Ge = function(a) {
        this.l.push(a);
    };
    k.Uh = function(a) {
        var b = a.id;
        void 0 !== b && (this.$g[b.toString()] = a);
        a.setMap(this);
    };
    k.fa = function() {
        Ob(this.$);
        Lb(this.a, "wheel", this.Cd, this);
        Lb(this.a, "mousewheel", this.Cd, this);
        void 0 !== this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0);
        this.j && (cancelAnimationFrame(this.j), this.j = void 0);
        this.Ed(null);
        Vb.prototype.fa.call(this);
    };
    k.Xc = function(a, b, c) {
        if (this.c) return a = this.Ta(a), c = void 0 !== c ? c : {}, this.sc.va(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, void 0 !== c.layerFilter ? c.layerFilter : yb, null);
    };
    k.gg = function(a, b) {
        var c = null;
        this.Xc(a, function(a) {
            c || (c = []);
            c.push(a);
        }, b);
        return c;
    };
    k.Fg = function(a, b, c, d, e) {
        if (this.c) return this.sc.lj(a, this.c, b, void 0 !== c ? c : null, void 0 !== d ? d : yb, void 0 !== e ? e : null);
    };
    k.xg = function(a, b) {
        if (!this.c) return !1;
        a = this.Ta(a);
        b = void 0 !== b ? b : {};
        return this.sc.mj(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, void 0 !== b.layerFilter ? b.layerFilter : yb, null);
    };
    k.Yd = function(a) {
        return this.Ta(this.xd(a));
    };
    k.xd = function(a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [ a.clientX - b.left, a.clientY - b.top ];
    };
    k.be = function() {
        return this.get("target");
    };
    k.Zb = function() {
        var a = this.be();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null;
    };
    k.Ta = function(a) {
        var b = this.c;
        return b ? fd(b.pixelToCoordinateTransform, a.slice()) : null;
    };
    k.Gg = function() {
        return this.controls;
    };
    k.qg = function() {
        return this.l;
    };
    k.pg = function(a) {
        a = this.$g[a.toString()];
        return void 0 !== a ? a : null;
    };
    k.lg = function() {
        return this.interactions;
    };
    k.lc = function() {
        return this.get("layergroup");
    };
    k.Nc = function() {
        return this.lc().dd();
    };
    k.Ja = function(a) {
        var b = this.c;
        return b ? fd(b.coordinateToPixelTransform, a.slice(0, 2)) : null;
    };
    k.Qe = function() {
        return this.sc;
    };
    k.ib = function() {
        return this.get("size");
    };
    k.T = function() {
        return this.get("view");
    };
    k.ug = function() {
        return this.a;
    };
    k.zm = function(a, b, c, d) {
        var e = this.c;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.ob()])) return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d;
    };
    k.Cd = function(a, b) {
        a = new Vi(b || a.type, this, a);
        this.vi(a);
    };
    k.vi = function(a) {
        if (this.c) {
            this.P = a.coordinate;
            a.frameState = this.c;
            var b = this.interactions.a, c;
            if (!1 !== this.b(a)) for (c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (d.c() && !d.handleEvent(a)) break;
            }
        }
    };
    k.$m = function() {
        var a = this.c, b = this.ra;
        if (0 !== b.b.length) {
            var c = 16, d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.zb ? 8 : 0, d = 2);
                e[1] && (c = this.zc ? 8 : 0, d = 2);
            }
            b.j < c && (Ek(b), Gk(b, c, d));
        }
        b = this.Ea;
        c = 0;
        for (d = b.length; c < d; ++c) b[c](this, a);
        b.length = 0;
    };
    k.dn = function() {
        this.render();
    };
    k.hn = function() {
        var a;
        this.be() && (a = this.Zb());
        if (this.o) {
            for (var b = 0, c = this.o.length; b < c; ++b) Fb(this.o[b]);
            this.o = null;
        }
        if (a) {
            a.appendChild(this.a);
            var d = this.Z ? this.Z : a;
            this.o = [ y(d, "keydown", this.Cd, this), y(d, "keypress", this.Cd, this) ];
            this.i || (this.i = this.Sc.bind(this), window.addEventListener("resize", this.i, !1));
        } else {
            a = this.sc;
            for (d in a.c) Ob(Xk(a, d));
            ne(this.a);
            void 0 !== this.i && (window.removeEventListener("resize", this.i, !1), this.i = void 0);
        }
        this.Sc();
    };
    k.jn = function() {
        this.render();
    };
    k.yi = function() {
        this.render();
    };
    k.kn = function() {
        this.D && (Fb(this.D), this.D = null);
        this.B && (Fb(this.B), this.B = null);
        var a = this.T();
        a && (this.a.setAttribute("data-view", x(a)), this.D = y(a, "propertychange", this.yi, this), 
        this.B = y(a, "change", this.yi, this));
        this.render();
    };
    k.Om = function() {
        this.C && (this.C.forEach(Fb), this.C = null);
        var a = this.lc();
        a && (this.C = [ y(a, "propertychange", this.render, this), y(a, "change", this.render, this) ]);
        this.render();
    };
    k.xh = function() {
        this.j && cancelAnimationFrame(this.j);
        this.W();
    };
    k.render = function() {
        void 0 === this.j && (this.j = requestAnimationFrame(this.W));
    };
    k.rh = function(a) {
        return this.controls.remove(a);
    };
    k.th = function(a) {
        return this.interactions.remove(a);
    };
    k.uh = function(a) {
        return this.lc().dd().remove(a);
    };
    k.vh = function(a) {
        return this.l.remove(a);
    };
    k.jr = function() {
        var a = Date.now(), b, c = this.ib(), d = this.T(), e = Ra(), f = this.c, g = null;
        if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && Nk(d)) {
            g = this.c ? this.c.viewHints : void 0;
            void 0 !== g ? (g[0] = d.i[0], g[1] = d.i[1]) : g = d.i.slice();
            var h = this.lc().ng(), l = {};
            var m = 0;
            for (b = h.length; m < b; ++m) l[x(h[m].layer)] = h[m];
            m = d.getState();
            d = m.center;
            b = m.resolution / this.ua;
            d[0] = Math.round(d[0] / b) * b;
            d[1] = Math.round(d[1] / b) * b;
            g = {
                animate: !1,
                coordinateToPixelTransform: this.Oa,
                extent: e,
                focus: this.P ? this.P : d,
                index: this.eb++,
                layerStates: l,
                layerStatesArray: h,
                logos: Ab({}, this.Qd),
                pixelRatio: this.ua,
                pixelToCoordinateTransform: this.Rf,
                postRenderFunctions: [],
                size: c,
                skippedFeatureUids: this.R,
                tileQueue: this.ra,
                time: a,
                usedTiles: {},
                viewState: m,
                viewHints: g,
                wantedTiles: {}
            };
        }
        g && (g.extent = sb(m.center, m.resolution, m.rotation, g.size, e));
        this.c = g;
        this.sc.wh(g);
        g && (g.animate && this.render(), Array.prototype.push.apply(this.Ea, g.postRenderFunctions), 
        !f || this.g && (ob(this.g) || gb(g.extent, this.g)) || (this.b(new Ui("movestart", this, f)), 
        this.g = cb(this.g)), !this.g || g.viewHints[0] || g.viewHints[1] || gb(g.extent, this.g) || (this.b(new Ui("moveend", this, g)), 
        Ua(g.extent, this.g)));
        this.b(new Ui("postrender", this, g));
        setTimeout(this.$m.bind(this), 0);
    };
    k.Jf = function(a) {
        this.set("layergroup", a);
    };
    k.ie = function(a) {
        this.set("size", a);
    };
    k.Ed = function(a) {
        this.set("target", a);
    };
    k.Dh = function(a) {
        this.set("view", a);
    };
    k.xk = function(a) {
        a = x(a).toString();
        this.R[a] = !0;
        this.render();
    };
    k.Sc = function() {
        var a = this.Zb();
        if (a) {
            var b = getComputedStyle(a);
            this.ie([ a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth) ]);
        } else this.ie(void 0);
    };
    k.Ck = function(a) {
        a = x(a).toString();
        delete this.R[a];
        this.render();
    };
    var Yk = [ "canvas", "webgl" ];
    function Wk(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "https://openlayers.org/"; else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[x(e).toString()] = e : e && (Pa("string" == typeof e.href, 44), 
            Pa("string" == typeof e.src, 45), d[e.src] = e.href);
        }
        e = a.layers instanceof bi ? a.layers : new bi({
            layers: a.layers
        });
        c.layergroup = e;
        c.target = a.target;
        c.view = void 0 !== a.view ? a.view : new K();
        var f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [ a.renderer ] : Pa(!1, 46), 
        0 <= f.indexOf("dom") && (f = f.concat(Yk))) : f = Yk;
        e = 0;
        var g = f.length;
        a: for (;e < g; ++e) for (var h = f[e], l = 0, m = Sk.length; l < m; ++l) {
            var n = Sk[l];
            if (n.handles(h)) {
                var p = n;
                break a;
            }
        }
        if (!p) throw Error("Unable to create a map renderer for types: " + f.join(", "));
        if (void 0 !== a.controls) if (Array.isArray(a.controls)) var q = new Xh(a.controls.slice()); else Pa(a.controls instanceof Xh, 47), 
        q = a.controls;
        if (void 0 !== a.interactions) if (Array.isArray(a.interactions)) var r = new Xh(a.interactions.slice()); else Pa(a.interactions instanceof Xh, 48), 
        r = a.interactions;
        void 0 !== a.overlays ? Array.isArray(a.overlays) ? a = new Xh(a.overlays.slice()) : (Pa(a.overlays instanceof Xh, 49), 
        a = a.overlays) : a = new Xh();
        return {
            controls: q,
            interactions: r,
            keyboardEventTarget: b,
            logos: d,
            overlays: a,
            vn: p,
            values: c
        };
    }
    function Zk(a) {
        Vb.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.D = null;
        this.qa = [];
        this.render = a.render ? a.render : Ba;
        a.target && this.i(a.target);
    }
    v(Zk, Vb);
    Zk.prototype.fa = function() {
        ne(this.element);
        Vb.prototype.fa.call(this);
    };
    Zk.prototype.g = function() {
        return this.a;
    };
    Zk.prototype.setMap = function(a) {
        this.a && ne(this.element);
        for (var b = 0, c = this.qa.length; b < c; ++b) Fb(this.qa[b]);
        this.qa.length = 0;
        if (this.a = a) (this.D ? this.D : a.u).appendChild(this.element), this.render !== Ba && this.qa.push(y(a, "postrender", this.render, this)), 
        a.render();
    };
    Zk.prototype.i = function(a) {
        this.D = "string" === typeof a ? document.getElementById(a) : a;
    };
    function $k(a) {
        a = a ? a : {};
        this.o = document.createElement("UL");
        this.l = document.createElement("LI");
        this.o.appendChild(this.l);
        this.l.style.display = "none";
        this.c = void 0 !== a.collapsed ? a.collapsed : !0;
        this.j = void 0 !== a.collapsible ? a.collapsible : !0;
        this.j || (this.c = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution", c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions", d = void 0 !== a.collapseLabel ? a.collapseLabel : "»";
        "string" === typeof d ? (this.u = document.createElement("span"), this.u.textContent = d) : this.u = d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.s = document.createElement("span"), this.s.textContent = d) : this.s = d;
        var e = this.j && !this.c ? this.u : this.s;
        d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        y(d, "click", this.mo, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.c && this.j ? " ol-collapsed" : "") + (this.j ? "" : " ol-uncollapsible");
        c.appendChild(this.o);
        c.appendChild(d);
        Zk.call(this, {
            element: c,
            render: a.render ? a.render : al,
            target: a.target
        });
        this.B = [];
        this.C = !0;
        this.P = {};
    }
    v($k, Zk);
    function al(a) {
        if (a = a.frameState) {
            for (var b = {}, c = [], d = a.layerStatesArray, e = a.viewState.resolution, f = 0, g = d.length; f < g; ++f) {
                var h = d[f];
                if (Cf(h, e) && (h = h.layer.aa()) && (h = h.B) && (h = h(a))) if (Array.isArray(h)) for (var l = 0, m = h.length; l < m; ++l) h[l] in b || (c.push(h[l]), 
                b[h[l]] = !0); else h in b || (c.push(h), b[h] = !0);
            }
            if (!Ia(c, this.B)) {
                for (;this.o.lastChild !== this.l; ) this.o.removeChild(this.o.lastChild);
                b = 0;
                for (d = c.length; b < d; ++b) e = document.createElement("LI"), e.innerHTML = c[b], 
                this.o.appendChild(e);
                0 === c.length && 0 < this.B.length ? this.element.classList.add("ol-logo-only") : 0 === this.B.length && 0 < c.length && this.element.classList.remove("ol-logo-only");
                b = 0 < c.length || !Db(a.logos);
                this.C != b && (this.element.style.display = b ? "" : "none", this.C = b);
                this.B = c;
                a = a.logos;
                c = this.P;
                for (p in c) p in a || (ne(c[p]), delete c[p]);
                for (var n in a) if (d = a[n], d instanceof HTMLElement && (this.l.appendChild(d), 
                c[n] = d), !(n in c)) {
                    var p = new Image();
                    p.src = n;
                    "" === d ? b = p : (b = document.createElement("a"), b.href = d, b.appendChild(p));
                    this.l.appendChild(b);
                    c[n] = b;
                }
                this.l.style.display = Db(a) ? "none" : "";
            }
        } else this.C && (this.element.style.display = "none", this.C = !1);
    }
    k = $k.prototype;
    k.mo = function(a) {
        a.preventDefault();
        bl(this);
    };
    function bl(a) {
        a.element.classList.toggle("ol-collapsed");
        a.c ? me(a.u, a.s) : me(a.s, a.u);
        a.c = !a.c;
    }
    k.lo = function() {
        return this.j;
    };
    k.oo = function(a) {
        this.j !== a && (this.j = a, this.element.classList.toggle("ol-uncollapsible"), 
        !a && this.c && bl(this));
    };
    k.no = function(a) {
        this.j && this.c !== a && bl(this);
    };
    k.ko = function() {
        return this.c;
    };
    function cl(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate", c = void 0 !== a.label ? a.label : "⇧";
        this.c = null;
        "string" === typeof c ? (this.c = document.createElement("span"), this.c.className = "ol-compass", 
        this.c.textContent = c) : (this.c = c, this.c.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation";
        c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.c);
        y(c, "click", cl.prototype.s, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : dl;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        Zk.call(this, {
            element: d,
            render: b,
            target: a.target
        });
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.u = void 0;
        this.j && this.element.classList.add("ol-hidden");
    }
    v(cl, Zk);
    cl.prototype.s = function(a) {
        a.preventDefault();
        void 0 !== this.l ? this.l() : (a = this.a.T()) && void 0 !== a.Ra() && (0 < this.o ? a.animate({
            rotation: 0,
            duration: this.o,
            easing: rh
        }) : a.je(0));
    };
    function dl(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.u) {
                var b = "rotate(" + a + "rad)";
                if (this.j) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden");
                }
                this.c.style.msTransform = b;
                this.c.style.webkitTransform = b;
                this.c.style.transform = b;
            }
            this.u = a;
        }
    }
    function el(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom", c = void 0 !== a.delta ? a.delta : 1, d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+", e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "−", f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in", g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        y(h, "click", el.prototype.j.bind(this, c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        y(d, "click", el.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        Zk.call(this, {
            element: c,
            target: a.target
        });
        this.c = void 0 !== a.duration ? a.duration : 250;
    }
    v(el, Zk);
    el.prototype.j = function(a, b) {
        b.preventDefault();
        if (b = this.a.T()) {
            var c = b.Ga();
            c && (a = b.constrainResolution(c, a), 0 < this.c ? (b.Ic() && b.ud(), b.animate({
                resolution: a,
                duration: this.c,
                easing: rh
            })) : b.kd(a));
        }
    };
    function fl(a) {
        a = a ? a : {};
        var b = new Xh();
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new el(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new cl(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new $k(a.attributionOptions));
        return b;
    }
    function gl(a, b, c, d, e) {
        this.c = void 0 !== e ? e : null;
        ag.call(this, a, b, c, void 0 !== e ? 0 : 2);
        this.a = d;
    }
    v(gl, ag);
    gl.prototype.i = function(a) {
        this.state = a ? 3 : 2;
        this.changed();
    };
    gl.prototype.load = function() {
        0 == this.state && (this.state = 1, this.changed(), this.c(this.i.bind(this)));
    };
    gl.prototype.U = function() {
        return this.a;
    };
    function hl(a, b, c, d, e) {
        Pb.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e;
    }
    v(hl, Pb);
    function il() {}
    k = il.prototype;
    k.Zh = function() {};
    k.Ib = function() {};
    k.Gd = function() {};
    k.fc = function() {};
    k.Ke = function() {};
    k.Le = function() {};
    k.Cc = function() {};
    k.Dc = function() {};
    k.Ec = function() {};
    k.Fc = function() {};
    k.Gc = function() {};
    k.Hc = function() {};
    k.Yb = function() {};
    k.Qa = function() {};
    k.cc = function() {};
    k.pb = function() {};
    function jl(a, b, c, d, e) {
        this.f = a;
        this.g = b;
        this.c = c;
        this.L = d;
        this.zb = e;
        this.M = this.b = this.a = this.R = this.P = this.Da = null;
        this.W = this.Xa = this.u = this.D = this.B = this.C = 0;
        this.Z = !1;
        this.i = this.$ = 0;
        this.ua = !1;
        this.ma = 0;
        this.pa = "";
        this.Wb = this.ra = 0;
        this.Ea = !1;
        this.o = this.Oa = 0;
        this.na = this.l = this.j = null;
        this.s = [];
        this.eb = ad();
    }
    v(jl, il);
    function kl(a, b, c) {
        if (a.M) {
            b = ac(b, 0, c, 2, a.L, a.s);
            c = a.f;
            var d = a.eb, e = c.globalAlpha;
            1 != a.u && (c.globalAlpha = e * a.u);
            var f = a.$;
            a.Z && (f += a.zb);
            var g;
            var h = 0;
            for (g = b.length; h < g; h += 2) {
                var l = b[h] - a.C, m = b[h + 1] - a.B;
                a.ua && (l = Math.round(l), m = Math.round(m));
                if (0 !== f || 1 != a.i) {
                    var n = l + a.C, p = m + a.B;
                    jd(d, n, p, a.i, a.i, f, -n, -p);
                    c.setTransform.apply(c, d);
                }
                c.drawImage(a.M, a.Xa, a.W, a.ma, a.D, l, m, a.ma, a.D);
            }
            0 === f && 1 == a.i || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.u && (c.globalAlpha = e);
        }
    }
    function ll(a, b, c, d) {
        var e = 0;
        if (a.na && "" !== a.pa) {
            a.j && ml(a, a.j);
            a.l && nl(a, a.l);
            var f = a.na, g = a.f, h = a.R, l = f.textAlign ? f.textAlign : "center";
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != l && (h.textAlign = l), 
            h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, 
            g.textAlign = l, g.textBaseline = f.textBaseline, a.R = {
                font: f.font,
                textAlign: l,
                textBaseline: f.textBaseline
            });
            b = ac(b, e, c, d, a.L, a.s);
            f = a.f;
            g = a.Oa;
            for (a.Ea && (g += a.zb); e < c; e += d) {
                h = b[e] + a.ra;
                l = b[e + 1] + a.Wb;
                if (0 !== g || 1 != a.o) {
                    var m = jd(a.eb, h, l, a.o, a.o, g, -h, -l);
                    f.setTransform.apply(f, m);
                }
                a.l && f.strokeText(a.pa, h, l);
                a.j && f.fillText(a.pa, h, l);
            }
            0 === g && 1 == a.o || f.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function pl(a, b, c, d, e, f) {
        var g = a.f;
        a = ac(b, c, d, e, a.L, a.s);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2) g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d;
    }
    function ql(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = d.length; g < f; ++g) c = pl(a, b, c, d[g], e, !0);
        return c;
    }
    k = jl.prototype;
    k.fc = function(a) {
        if (ub(this.c, a.A())) {
            if (this.a || this.b) {
                this.a && ml(this, this.a);
                this.b && nl(this, this.b);
                var b = this.L;
                var c = this.s, d = a.ba();
                b = d ? ac(d, 0, d.length, a.la(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.f;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke();
            }
            "" !== this.pa && ll(this, a.getCenter(), 2, 2);
        }
    };
    k.Gd = function(a) {
        this.Qa(a.wa(), a.xa());
        this.cc(a.U());
        this.pb(a.Fa());
    };
    k.Ib = function(a) {
        switch (a.getType()) {
          case "Point":
            this.Gc(a);
            break;

          case "LineString":
            this.Cc(a);
            break;

          case "Polygon":
            this.Hc(a);
            break;

          case "MultiPoint":
            this.Ec(a);
            break;

          case "MultiLineString":
            this.Dc(a);
            break;

          case "MultiPolygon":
            this.Fc(a);
            break;

          case "GeometryCollection":
            this.Le(a);
            break;

          case "Circle":
            this.fc(a);
        }
    };
    k.Ke = function(a, b) {
        (a = (0, b.fb)(a)) && ub(this.c, a.A()) && (this.Gd(b), this.Ib(a));
    };
    k.Le = function(a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) this.Ib(a[c]);
    };
    k.Gc = function(a) {
        var b = a.ba();
        a = a.la();
        this.M && kl(this, b, b.length);
        "" !== this.pa && ll(this, b, b.length, a);
    };
    k.Ec = function(a) {
        var b = a.ba();
        a = a.la();
        this.M && kl(this, b, b.length);
        "" !== this.pa && ll(this, b, b.length, a);
    };
    k.Cc = function(a) {
        if (ub(this.c, a.A())) {
            if (this.b) {
                nl(this, this.b);
                var b = this.f, c = a.ba();
                b.beginPath();
                pl(this, c, 0, c.length, a.la(), !1);
                b.stroke();
            }
            "" !== this.pa && (a = a.Ne(), ll(this, a, 2, 2));
        }
    };
    k.Dc = function(a) {
        var b = a.A();
        if (ub(this.c, b)) {
            if (this.b) {
                nl(this, this.b);
                b = this.f;
                var c = a.ba(), d = 0, e = a.qb(), f = a.la();
                b.beginPath();
                var g;
                var h = 0;
                for (g = e.length; h < g; ++h) d = pl(this, c, d, e[h], f, !1);
                b.stroke();
            }
            "" !== this.pa && (a = a.Oe(), ll(this, a, a.length, 2));
        }
    };
    k.Hc = function(a) {
        if (ub(this.c, a.A())) {
            if (this.b || this.a) {
                this.a && ml(this, this.a);
                this.b && nl(this, this.b);
                var b = this.f;
                b.beginPath();
                ql(this, a.$b(), 0, a.qb(), a.la());
                this.a && b.fill();
                this.b && b.stroke();
            }
            "" !== this.pa && (a = a.Zd(), ll(this, a, 2, 2));
        }
    };
    k.Fc = function(a) {
        if (ub(this.c, a.A())) {
            if (this.b || this.a) {
                this.a && ml(this, this.a);
                this.b && nl(this, this.b);
                var b = this.f, c = be(a), d = 0, e = a.wd(), f = a.la(), g;
                b.beginPath();
                var h = 0;
                for (g = e.length; h < g; ++h) d = ql(this, c, d, e[h], f);
                this.a && b.fill();
                this.b && b.stroke();
            }
            "" !== this.pa && (a = ce(a), ll(this, a, a.length, 2));
        }
    };
    function ml(a, b) {
        var c = a.f, d = a.Da;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, 
        a.Da = {
            fillStyle: b.fillStyle
        });
    }
    function nl(a, b) {
        var c = a.f, d = a.P;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), ye && (Ia(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash), 
        d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)), 
        d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), 
        d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap, 
        ye && (c.setLineDash(b.lineDash), c.lineDashOffset = b.lineDashOffset), c.lineJoin = b.lineJoin, 
        c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, 
        a.P = {
            lineCap: b.lineCap,
            lineDash: b.lineDash,
            lineDashOffset: b.lineDashOffset,
            lineJoin: b.lineJoin,
            lineWidth: b.lineWidth,
            miterLimit: b.miterLimit,
            strokeStyle: b.strokeStyle
        });
    }
    k.Qa = function(a, b) {
        a ? (a = a.b, this.a = {
            fillStyle: ke(a ? a : Oe)
        }) : this.a = null;
        if (b) {
            a = b.b;
            var c = b.g, d = b.c, e = b.i, f = b.j, g = b.a;
            b = b.l;
            this.b = {
                lineCap: void 0 !== c ? c : "round",
                lineDash: d ? d : Pe,
                lineDashOffset: e ? e : 0,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.g * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== b ? b : 10,
                strokeStyle: ke(a ? a : Qe)
            };
        } else this.b = null;
    };
    k.cc = function(a) {
        if (a) {
            var b = a.ic(), c = a.U(1), d = a.Oc(), e = a.ac();
            this.C = b[0];
            this.B = b[1];
            this.D = e[1];
            this.M = c;
            this.u = a.j;
            this.Xa = d[0];
            this.W = d[1];
            this.Z = a.u;
            this.$ = a.i;
            this.i = a.c * this.g;
            this.ua = a.s;
            this.ma = e[0];
        } else this.M = null;
    };
    k.pb = function(a) {
        if (a) {
            var b = a.wa();
            b ? (b = b.b, this.j = {
                fillStyle: ke(b ? b : Oe)
            }) : this.j = null;
            var c = a.xa();
            if (c) {
                b = c.b;
                var d = c.g, e = c.c, f = c.i, g = c.j, h = c.a;
                c = c.l;
                this.l = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : Pe,
                    lineDashOffset: f ? f : 0,
                    lineJoin: void 0 !== g ? g : "round",
                    lineWidth: void 0 !== h ? h : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: ke(b ? b : Qe)
                };
            } else this.l = null;
            b = a.b;
            d = a.f;
            e = a.c;
            f = a.l;
            g = a.j;
            h = a.a;
            c = a.Fa();
            var l = a.i;
            a = a.g;
            this.na = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.pa = void 0 !== c ? c : "";
            this.ra = void 0 !== d ? this.g * d : 0;
            this.Wb = void 0 !== e ? this.g * e : 0;
            this.Ea = void 0 !== f ? f : !1;
            this.Oa = void 0 !== g ? g : 0;
            this.o = this.g * (void 0 !== h ? h : 1);
        } else this.pa = "";
    };
    function rl(a) {
        Tb.call(this);
        this.a = a;
    }
    v(rl, Tb);
    rl.prototype.va = Ba;
    rl.prototype.lf = zb;
    rl.prototype.bg = function(a, b, c) {
        return function(d, e) {
            return Lh(a, b, d, e, function(a) {
                c[d] || (c[d] = {});
                c[d][a.ya.toString()] = a;
            });
        };
    };
    rl.prototype.Z = function(a) {
        2 === a.target.getState() && sl(this);
    };
    function tl(a, b) {
        var c = b.getState();
        2 != c && 3 != c && y(b, "change", a.Z, a);
        0 == c && (b.load(), c = b.getState());
        return 2 == c;
    }
    function sl(a) {
        var b = a.a;
        b.Ma() && "ready" == b.rg() && a.changed();
    }
    function ul(a, b) {
        b.vj() && a.postRenderFunctions.push(function(a, b, e) {
            b = x(a).toString();
            b in e.usedTiles && a.vd(e.viewState.projection, e.usedTiles[b]);
        }.bind(null, b));
    }
    function vl(a, b) {
        b = b.P;
        void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (Pa("string" == typeof b.href, 44), 
        Pa("string" == typeof b.src, 45), a.logos[b.src] = b.href));
    }
    function Dl(a, b, c, d) {
        b = x(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.da < a.da && (a.da = d.da), d.ia > a.ia && (a.ia = d.ia), 
        d.ca < a.ca && (a.ca = d.ca), d.ha > a.ha && (a.ha = d.ha)) : a[b][c] = d : (a[b] = {}, 
        a[b][c] = d);
    }
    function El(a, b, c, d, e, f, g, h, l, m) {
        var n = x(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q, r, u;
        for (u = c.minZoom; u <= g; ++u) {
            var w = Ag(c, f, u, w);
            var z = c.Va(u);
            for (q = w.da; q <= w.ia; ++q) for (r = w.ca; r <= w.ha; ++r) if (g - u <= h) {
                var A = b.getTile(u, q, r, d, e);
                0 == A.getState() && (p[A.ob()] = !0, A.ob() in a.a || a.i([ A, n, Fg(c, A.ya), z ]));
                void 0 !== l && l.call(m, A);
            } else b.Eh(u, q, r, e);
        }
    }
    function Fl(a) {
        rl.call(this, a);
        this.W = ad();
    }
    v(Fl, rl);
    function Gl(a, b, c) {
        var d = b.pixelRatio, e = b.size[0] * d, f = b.size[1] * d, g = b.viewState.rotation, h = mb(c), l = lb(c), m = kb(c);
        c = jb(c);
        fd(b.coordinateToPixelTransform, h);
        fd(b.coordinateToPixelTransform, l);
        fd(b.coordinateToPixelTransform, m);
        fd(b.coordinateToPixelTransform, c);
        a.save();
        bf(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        bf(a, g, e / 2, f / 2);
    }
    function Hl(a, b, c, d, e) {
        var f = a.a;
        if (Sb(f, b)) {
            var g = d.size[0] * d.pixelRatio, h = d.size[1] * d.pixelRatio, l = d.viewState.rotation;
            bf(c, -l, g / 2, h / 2);
            a = void 0 !== e ? e : Il(a, d, 0);
            f.b(new hl(b, new jl(c, d.pixelRatio, d.extent, a, d.viewState.rotation), d, c, null));
            bf(c, l, g / 2, h / 2);
        }
    }
    Fl.prototype.o = function(a, b, c, d) {
        if (this.va(a, b, 0, yb, this)) return c.call(d, this.a, null);
    };
    Fl.prototype.zf = function(a, b, c, d) {
        Hl(this, "postcompose", a, b, d);
    };
    function Il(a, b, c) {
        var d = b.viewState, e = b.pixelRatio, f = e / d.resolution;
        return jd(a.W, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1]);
    }
    function Jl(a) {
        Fl.call(this, a);
        this.l = ad();
        this.j = null;
    }
    v(Jl, Fl);
    Jl.prototype.mf = function(a, b, c) {
        Hl(this, "precompose", c, a, void 0);
        var d = this.U();
        if (d) {
            var e = b.extent, f = void 0 !== e && !$a(e, a.extent) && ub(e, a.extent);
            f && Gl(c, a, e);
            e = this.u();
            var g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore();
        }
        this.zf(c, a, b);
    };
    Jl.prototype.va = function(a, b, c, d, e) {
        var f = this.a;
        return f.aa().va(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
            return d.call(e, a, f);
        });
    };
    Jl.prototype.o = function(a, b, c, d) {
        if (this.U()) {
            if (this.a.aa().va !== Ba) return Fl.prototype.o.apply(this, arguments);
            var e = fd(this.l, a.slice());
            Fi(e, b.viewState.resolution / this.i);
            this.j || (this.j = le(1, 1));
            this.j.clearRect(0, 0, 1, 1);
            this.j.drawImage(this.U(), e[0], e[1], 1, 1, 0, 0, 1, 1);
            e = this.j.getImageData(0, 0, 1, 1).data;
            if (0 < e[3]) return c.call(d, this.a, e);
        }
    };
    function Kl(a) {
        Jl.call(this, a);
        this.M = null;
        this.g = ad();
        this.s = [];
        this.c = null;
    }
    v(Kl, Jl);
    Kl.handles = function(a, b) {
        return "canvas" === a && ("IMAGE" === b.getType() || "VECTOR" === b.getType() && "image" === b.l);
    };
    Kl.create = function(a, b) {
        var c = new Kl(b);
        if ("VECTOR" === b.getType()) for (var d = 0, e = Tk.length; d < e; ++d) {
            var f = Tk[d];
            f !== Kl && f.handles("canvas", b) && (f = f.create(a, b), c.c = f);
        }
        return c;
    };
    Kl.prototype.U = function() {
        return this.M ? this.M.U() : null;
    };
    Kl.prototype.u = function() {
        return this.g;
    };
    Kl.prototype.ed = function(a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.center, g = e.resolution, h = this.a.aa(), l = a.viewHints, m = a.extent;
        void 0 !== b.extent && (m = tb(m, b.extent));
        if (!l[0] && !l[1] && !ob(m)) if (l = e.projection, e = this.c) {
            l = e.context;
            var n = Ab({}, a, {
                size: [ pb(m) / g, qb(m) / g ],
                viewState: Ab({}, a.viewState, {
                    rotation: 0
                })
            }), p = Object.keys(n.skippedFeatureUids).sort();
            !e.ed(n, b) || !e.j && Ia(p, this.s) || (l.canvas.width = n.size[0] * c, l.canvas.height = n.size[1] * c, 
            e.mf(n, b, l), this.M = new gl(m, g, c, l.canvas), this.s = p);
        } else (e = h.U(m, g, c, l)) && tl(this, e) && (this.M = e);
        this.M && (e = this.M, m = e.A(), b = e.resolution, e = e.f, l = c * b / (g * e), 
        m = jd(this.g, c * d[0] / 2, c * d[1] / 2, l, l, 0, e * (m[0] - f[0]) / b, e * (f[1] - m[3]) / b), 
        jd(this.l, c * d[0] / 2 - m[4], c * d[1] / 2 - m[5], c / g, -c / g, 0, -f[0], -f[1]), 
        vl(a, h), this.i = b * c / e);
        return !!this.M;
    };
    Kl.prototype.va = function(a, b, c, d, e) {
        return this.c ? this.c.va(a, b, c, d, e) : Jl.prototype.va.call(this, a, b, c, d, e);
    };
    function Ll(a, b) {
        this.j = b;
        this.c = {};
        this.o = {};
    }
    v(Ll, Nb);
    function Ml(a) {
        var b = a.viewState, c = a.coordinateToPixelTransform, d = a.pixelToCoordinateTransform;
        jd(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        kd(ed(d, c));
    }
    function Nl() {
        kf(lf);
    }
    k = Ll.prototype;
    k.va = function(a, b, c, d, e, f, g) {
        function h(a, c) {
            var f = x(a).toString(), g = b.layerStates[x(c)].$e;
            if (!(f in b.skippedFeatureUids) || g) return d.call(e, a, g ? c : null);
        }
        var l, m = b.viewState, n = m.resolution, p = m.projection;
        m = a;
        if (p.f) {
            p = p.A();
            var q = pb(p), r = a[0];
            if (r < p[0] || r > p[2]) m = [ r + q * Math.ceil((p[0] - r) / q), a[1] ];
        }
        p = b.layerStatesArray;
        for (q = p.length - 1; 0 <= q; --q) {
            var u = p[q];
            r = u.layer;
            if (Cf(u, n) && f.call(g, r) && (u = Ol(this, r), r.aa() && (l = u.va(r.aa().C ? m : a, b, c, h, e)), 
            l)) return l;
        }
    };
    k.mj = function(a, b, c, d, e) {
        return void 0 !== this.va(a, b, c, yb, this, d, e);
    };
    function Ol(a, b) {
        var c = x(b).toString();
        if (c in a.c) return a.c[c];
        for (var d, e = a.getType(), f = 0, g = Tk.length; f < g; ++f) {
            var h = Tk[f];
            if (h.handles(e, b)) {
                d = h.create(a, b);
                break;
            }
        }
        if (d) a.c[c] = d, a.o[c] = y(d, "change", a.Pm, a); else throw Error("Unable to create renderer for layer: " + b.getType());
        return d;
    }
    k.Pm = function() {
        this.j.render();
    };
    function Xk(a, b) {
        var c = a.c[b];
        delete a.c[b];
        Fb(a.o[b]);
        delete a.o[b];
        return c;
    }
    k.wh = Ba;
    k.ir = function(a, b) {
        for (var c in this.c) b && c in b.layerStates || Ob(Xk(this, c));
    };
    function Pl(a, b) {
        for (var c in a.c) if (!(c in b.layerStates)) {
            b.postRenderFunctions.push(a.ir.bind(a));
            break;
        }
    }
    function La(a, b) {
        return a.zIndex - b.zIndex;
    }
    function Ql(a, b) {
        Ll.call(this, a, b);
        this.f = le();
        this.a = this.f.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.display = "block";
        this.a.className = "ol-unselectable";
        a.insertBefore(this.a, a.childNodes[0] || null);
        this.b = !0;
        this.i = ad();
    }
    v(Ql, Ll);
    Ql.handles = function(a) {
        return "canvas" === a;
    };
    Ql.create = function(a, b) {
        return new Ql(a, b);
    };
    function Rl(a, b, c) {
        var d = a.j, e = a.f;
        if (Sb(d, b)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState.rotation, l = c.viewState, m = c.pixelRatio / l.resolution;
            a = jd(a.i, a.a.width / 2, a.a.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new hl(b, new jl(e, g, f, a, h), c, e, null));
        }
    }
    Ql.prototype.getType = function() {
        return "canvas";
    };
    Ql.prototype.wh = function(a) {
        if (a) {
            var b = this.f, c = a.pixelRatio, d = Math.round(a.size[0] * c), e = Math.round(a.size[1] * c);
            this.a.width != d || this.a.height != e ? (this.a.width = d, this.a.height = e) : b.clearRect(0, 0, d, e);
            c = a.viewState.rotation;
            Ml(a);
            Rl(this, "precompose", a);
            var f = a.layerStatesArray;
            Ka(f);
            c && (b.save(), bf(b, c, d / 2, e / 2));
            d = a.viewState.resolution;
            var g;
            e = 0;
            for (g = f.length; e < g; ++e) {
                var h = f[e];
                var l = h.layer;
                l = Ol(this, l);
                Cf(h, d) && "ready" == h.yk && l.ed(a, h) && l.mf(a, h, b);
            }
            c && b.restore();
            Rl(this, "postcompose", a);
            this.b || (this.a.style.display = "", this.b = !0);
            Pl(this, a);
            a.postRenderFunctions.push(Nl);
        } else this.b && (this.a.style.display = "none", this.b = !1);
    };
    Ql.prototype.lj = function(a, b, c, d, e, f) {
        var g = b.viewState.resolution, h = b.layerStatesArray, l = h.length;
        a = fd(b.pixelToCoordinateTransform, a.slice());
        for (--l; 0 <= l; --l) {
            var m = h[l];
            var n = m.layer;
            if (Cf(m, g) && e.call(f, n) && (m = Ol(this, n).o(a, b, c, d))) return m;
        }
    };
    function Sl(a) {
        Jl.call(this, a);
        this.context = null === this.context ? null : le();
        this.c = null;
        this.g = [];
        this.P = Ra();
        this.ua = new jg(0, 0, 0, 0);
        this.s = ad();
        this.R = 0;
    }
    v(Sl, Jl);
    Sl.handles = function(a, b) {
        return "canvas" === a && "TILE" === b.getType();
    };
    Sl.create = function(a, b) {
        return new Sl(b);
    };
    function Tl(a, b) {
        b = b.getState();
        a = a.a.i();
        return 2 == b || 4 == b || 3 == b && !a;
    }
    Sl.prototype.ed = function(a, b) {
        var c = a.pixelRatio, d = a.size, e = a.viewState, f = e.projection, g = e.resolution;
        e = e.center;
        var h = this.a, l = h.aa(), m = l.f, n = l.gb(f), p = n.Kc(g, this.R), q = n.Va(p), r = Math.round(g / q) || 1, u = a.extent;
        void 0 !== b.extent && (u = tb(u, b.extent));
        if (ob(u)) return !1;
        var w = Ag(n, u, p), z = Dg(n, p, w), A = l.$c(c), E = {};
        E[p] = {};
        var T = this.bg(l, f, E), Ja = this.P, ua = this.ua, ma = !1, da, ja;
        for (da = w.da; da <= w.ia; ++da) for (ja = w.ca; ja <= w.ha; ++ja) {
            var ya = l.getTile(p, da, ja, c, f);
            3 == ya.getState() && (h.i() ? 0 < h.c() && (ma = !0) : xh(ya, 2));
            Tl(this, ya) || (ya = vh(ya));
            if (Tl(this, ya)) {
                var Wa = x(this);
                if (2 == ya.getState()) {
                    E[p][ya.ya.toString()] = ya;
                    var jc = ya.g ? -1 !== ya.u[Wa] : !1;
                    ma || !jc && -1 !== this.g.indexOf(ya) || (ma = !0);
                }
                if (1 === yh(ya, Wa, a.time)) continue;
            }
            Wa = Cg(n, ya.ya, ua, Ja);
            jc = !1;
            Wa && (jc = T(p + 1, Wa));
            jc || Bg(n, ya.ya, T, ua, Ja);
        }
        ya = a.viewHints;
        ya = ya[0] || ya[1];
        if (!(this.i && 16 < Date.now() - a.time && ya || !ma && this.c && $a(this.c, u) && this.Gf == m && r == this.B && (ya || q * c / A * r == this.i))) {
            if (ya = this.context) ja = l.de(p, c, f), da = Math.round((w.ia - w.da + 1) * ja[0] / r), 
            ja = Math.round((w.ha - w.ca + 1) * ja[1] / r), ma = ya.canvas, ma.width != da || ma.height != ja ? (this.B = r, 
            ma.width = da, ma.height = ja) : (this.c && !gb(z, this.c) && ya.clearRect(0, 0, da, ja), 
            r = this.B);
            this.g.length = 0;
            ma = Object.keys(E).map(Number);
            ma.sort(function(a, b) {
                return a === p ? 1 : b === p ? -1 : a > b ? 1 : a < b ? -1 : 0;
            });
            Wa = 0;
            for (jc = ma.length; Wa < jc; ++Wa) {
                ua = ma[Wa];
                T = l.de(ua, c, f);
                ya = n.Va(ua);
                var Za = ya / q;
                var ba = A * l.ig(f);
                var Zb = E[ua];
                for (var Ze in Zb) {
                    ya = Zb[Ze];
                    ja = n.La(ya.ya, Ja);
                    da = (ja[0] - z[0]) / q * A / r;
                    ja = (z[3] - ja[3]) / q * A / r;
                    var kg = T[0] * Za / r;
                    var Vd = T[1] * Za / r;
                    this.cg(ya, a, b, da, ja, kg, Vd, ba, p === ua);
                    this.g.push(ya);
                }
            }
            this.Gf = m;
            this.i = q * c / A * r;
            this.c = z;
        }
        b = this.i / g;
        b = jd(this.s, c * d[0] / 2, c * d[1] / 2, b, b, 0, (this.c[0] - e[0]) / this.i * c, (e[1] - this.c[3]) / this.i * c);
        jd(this.l, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
        Dl(a.usedTiles, l, p, w);
        El(a, l, n, c, f, u, p, h.c());
        ul(a, l);
        vl(a, l);
        return 0 < this.g.length;
    };
    Sl.prototype.cg = function(a, b, c, d, e, f, g, h, l) {
        if (c = a.U(this.a)) {
            var m = x(this), n = l ? yh(a, m, b.time) : 1;
            1 !== n || this.a.aa().og(b.viewState.projection) || this.context.clearRect(d, e, f, g);
            var p = n !== this.context.globalAlpha;
            p && (this.context.save(), this.context.globalAlpha = n);
            this.context.drawImage(c, h, h, c.width - 2 * h, c.height - 2 * h, d, e, f, g);
            p && this.context.restore();
            1 !== n ? b.animate = !0 : l && a.g && (a.u[m] = -1);
        }
    };
    Sl.prototype.U = function() {
        var a = this.context;
        return a ? a.canvas : null;
    };
    Sl.prototype.u = function() {
        return this.s;
    };
    var Ul = {
        Pc: function() {}
    };
    (function(a) {
        function b(a, b, d, f, g) {
            c(a, b, d || 0, f || a.length - 1, g || e);
        }
        function c(a, b, e, f, g) {
            for (;f > e; ) {
                if (600 < f - e) {
                    var h = f - e + 1, l = b - e + 1, m = Math.log(h), n = .5 * Math.exp(2 * m / 3);
                    m = .5 * Math.sqrt(m * n * (h - n) / h) * (0 > l - h / 2 ? -1 : 1);
                    c(a, b, Math.max(e, Math.floor(b - l * n / h + m)), Math.min(f, Math.floor(b + (h - l) * n / h + m)), g);
                }
                h = a[b];
                l = e;
                n = f;
                d(a, e, b);
                for (0 < g(a[f], h) && d(a, e, f); l < n; ) {
                    d(a, l, n);
                    l++;
                    for (n--; 0 > g(a[l], h); ) l++;
                    for (;0 < g(a[n], h); ) n--;
                }
                0 === g(a[e], h) ? d(a, e, n) : (n++, d(a, n, f));
                n <= b && (e = n + 1);
                b <= n && (f = n - 1);
            }
        }
        function d(a, b, c) {
            var d = a[b];
            a[b] = a[c];
            a[c] = d;
        }
        function e(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }
        function f(a, b) {
            if (!(this instanceof f)) return new f(a, b);
            this.Wf = Math.max(4, a || 9);
            this.Rh = Math.max(2, Math.ceil(.4 * this.Wf));
            b && this.el(b);
            this.clear();
        }
        function g(a, b) {
            h(a, 0, a.children.length, b, a);
        }
        function h(a, b, c, d, e) {
            e || (e = w(null));
            e.da = Infinity;
            e.ca = Infinity;
            e.ia = -Infinity;
            e.ha = -Infinity;
            for (var f; b < c; b++) f = a.children[b], l(e, a.hb ? d(f) : f);
            return e;
        }
        function l(a, b) {
            a.da = Math.min(a.da, b.da);
            a.ca = Math.min(a.ca, b.ca);
            a.ia = Math.max(a.ia, b.ia);
            a.ha = Math.max(a.ha, b.ha);
            return a;
        }
        function m(a, b) {
            return a.da - b.da;
        }
        function n(a, b) {
            return a.ca - b.ca;
        }
        function p(a) {
            return (a.ia - a.da) * (a.ha - a.ca);
        }
        function q(a) {
            return a.ia - a.da + (a.ha - a.ca);
        }
        function r(a, b) {
            return a.da <= b.da && a.ca <= b.ca && b.ia <= a.ia && b.ha <= a.ha;
        }
        function u(a, b) {
            return b.da <= a.ia && b.ca <= a.ha && b.ia >= a.da && b.ha >= a.ca;
        }
        function w(a) {
            return {
                children: a,
                height: 1,
                hb: !0,
                da: Infinity,
                ca: Infinity,
                ia: -Infinity,
                ha: -Infinity
            };
        }
        function z(a, b, c, d, e) {
            for (var f = [ b, c ], g; f.length; ) c = f.pop(), b = f.pop(), c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d, 
            A(a, g, b, c, e), f.push(b, g, g, c));
        }
        var A = b;
        A.default = b;
        f.prototype = {
            all: function() {
                return this.Mh(this.data, []);
            },
            search: function(a) {
                var b = this.data, c = [], d = this.yb;
                if (!u(a, b)) return c;
                for (var e = [], f, g, h, l; b; ) {
                    f = 0;
                    for (g = b.children.length; f < g; f++) h = b.children[f], l = b.hb ? d(h) : h, 
                    u(a, l) && (b.hb ? c.push(h) : r(a, l) ? this.Mh(h, c) : e.push(h));
                    b = e.pop();
                }
                return c;
            },
            sl: function(a) {
                var b = this.data, c = this.yb;
                if (!u(a, b)) return !1;
                for (var d = [], e, f, g, h; b; ) {
                    e = 0;
                    for (f = b.children.length; e < f; e++) if (g = b.children[e], h = b.hb ? c(g) : g, 
                    u(a, h)) {
                        if (b.hb || r(a, h)) return !0;
                        d.push(g);
                    }
                    b = d.pop();
                }
                return !1;
            },
            load: function(a) {
                if (!a || !a.length) return this;
                if (a.length < this.Rh) {
                    for (var b = 0, c = a.length; b < c; b++) this.Ba(a[b]);
                    return this;
                }
                a = this.Oh(a.slice(), 0, a.length - 1, 0);
                this.data.children.length ? this.data.height === a.height ? this.Th(this.data, a) : (this.data.height < a.height && (b = this.data, 
                this.data = a, a = b), this.Qh(a, this.data.height - a.height - 1, !0)) : this.data = a;
                return this;
            },
            Ba: function(a) {
                a && this.Qh(a, this.data.height - 1);
                return this;
            },
            clear: function() {
                this.data = w([]);
                return this;
            },
            remove: function(a, b) {
                if (!a) return this;
                for (var c = this.data, d = this.yb(a), e = [], f = [], g, h, l, m; c || e.length; ) {
                    c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), m = !0);
                    if (c.hb) {
                        a: {
                            l = a;
                            var n = c.children, p = b;
                            if (p) {
                                for (var q = 0; q < n.length; q++) if (p(l, n[q])) {
                                    l = q;
                                    break a;
                                }
                                l = -1;
                            } else l = n.indexOf(l);
                        }
                        if (-1 !== l) {
                            c.children.splice(l, 1);
                            e.push(c);
                            this.cl(e);
                            break;
                        }
                    }
                    m || c.hb || !r(c, d) ? h ? (g++, c = h.children[g], m = !1) : c = null : (e.push(c), 
                    f.push(g), g = 0, h = c, c = c.children[0]);
                }
                return this;
            },
            yb: function(a) {
                return a;
            },
            $f: m,
            ag: n,
            toJSON: function() {
                return this.data;
            },
            Mh: function(a, b) {
                for (var c = []; a; ) a.hb ? b.push.apply(b, a.children) : c.push.apply(c, a.children), 
                a = c.pop();
                return b;
            },
            Oh: function(a, b, c, d) {
                var e = c - b + 1, f = this.Wf;
                if (e <= f) {
                    var h = w(a.slice(b, c + 1));
                    g(h, this.yb);
                    return h;
                }
                d || (d = Math.ceil(Math.log(e) / Math.log(f)), f = Math.ceil(e / Math.pow(f, d - 1)));
                h = w([]);
                h.hb = !1;
                h.height = d;
                e = Math.ceil(e / f);
                f = e * Math.ceil(Math.sqrt(f));
                var l;
                for (z(a, b, c, f, this.$f); b <= c; b += f) {
                    var m = Math.min(b + f - 1, c);
                    z(a, b, m, e, this.ag);
                    for (l = b; l <= m; l += e) {
                        var n = Math.min(l + e - 1, m);
                        h.children.push(this.Oh(a, l, n, d - 1));
                    }
                }
                g(h, this.yb);
                return h;
            },
            bl: function(a, b, c, d) {
                for (var e, f, g, h, l, m, n, q; ;) {
                    d.push(b);
                    if (b.hb || d.length - 1 === c) break;
                    n = q = Infinity;
                    e = 0;
                    for (f = b.children.length; e < f; e++) g = b.children[e], l = p(g), m = (Math.max(g.ia, a.ia) - Math.min(g.da, a.da)) * (Math.max(g.ha, a.ha) - Math.min(g.ca, a.ca)) - l, 
                    m < q ? (q = m, n = l < n ? l : n, h = g) : m === q && l < n && (n = l, h = g);
                    b = h || b.children[0];
                }
                return b;
            },
            Qh: function(a, b, c) {
                var d = this.yb;
                c = c ? a : d(a);
                d = [];
                var e = this.bl(c, this.data, b, d);
                e.children.push(a);
                for (l(e, c); 0 <= b; ) if (d[b].children.length > this.Wf) this.hl(d, b), b--; else break;
                this.Zk(c, d, b);
            },
            hl: function(a, b) {
                var c = a[b], d = c.children.length, e = this.Rh;
                this.$k(c, e, d);
                d = this.al(c, e, d);
                d = w(c.children.splice(d, c.children.length - d));
                d.height = c.height;
                d.hb = c.hb;
                g(c, this.yb);
                g(d, this.yb);
                b ? a[b - 1].children.push(d) : this.Th(c, d);
            },
            Th: function(a, b) {
                this.data = w([ a, b ]);
                this.data.height = a.height + 1;
                this.data.hb = !1;
                g(this.data, this.yb);
            },
            al: function(a, b, c) {
                var d, e;
                var f = e = Infinity;
                for (d = b; d <= c - b; d++) {
                    var g = h(a, 0, d, this.yb);
                    var l = h(a, d, c, this.yb);
                    var m = Math.max(0, Math.min(g.ia, l.ia) - Math.max(g.da, l.da)) * Math.max(0, Math.min(g.ha, l.ha) - Math.max(g.ca, l.ca));
                    g = p(g) + p(l);
                    if (m < f) {
                        f = m;
                        var n = d;
                        e = g < e ? g : e;
                    } else m === f && g < e && (e = g, n = d);
                }
                return n;
            },
            $k: function(a, b, c) {
                var d = a.hb ? this.$f : m, e = a.hb ? this.ag : n, f = this.Nh(a, b, c, d);
                b = this.Nh(a, b, c, e);
                f < b && a.children.sort(d);
            },
            Nh: function(a, b, c, d) {
                a.children.sort(d);
                d = this.yb;
                var e = h(a, 0, b, d), f = h(a, c - b, c, d), g = q(e) + q(f), m;
                for (m = b; m < c - b; m++) {
                    var n = a.children[m];
                    l(e, a.hb ? d(n) : n);
                    g += q(e);
                }
                for (m = c - b - 1; m >= b; m--) n = a.children[m], l(f, a.hb ? d(n) : n), g += q(f);
                return g;
            },
            Zk: function(a, b, c) {
                for (;0 <= c; c--) l(b[c], a);
            },
            cl: function(a) {
                for (var b = a.length - 1, c; 0 <= b; b--) 0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children, 
                c.splice(c.indexOf(a[b]), 1)) : this.clear() : g(a[b], this.yb);
            },
            el: function(a) {
                var b = [ "return a", " - b", ";" ];
                this.$f = new Function("a", "b", b.join(a[0]));
                this.ag = new Function("a", "b", b.join(a[1]));
                this.yb = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};");
            }
        };
        a["default"] = f;
    })(Ul.Pc = Ul.Pc || {});
    Ul.Pc = Ul.Pc.default;
    function Vl() {}
    var Wl = "Polygon Circle LineString Image Text Default".split(" "), Xl = {
        left: 0,
        end: 0,
        center: .5,
        right: 1,
        start: 1,
        top: 0,
        middle: .5,
        hanging: .2,
        alphabetic: .8,
        ideographic: .8,
        bottom: 1
    };
    function Yl(a, b, c, d, e, f) {
        this.$ = f;
        this.Ea = Ra();
        this.eb = a;
        this.Wb = b;
        this.overlaps = e;
        this.pixelRatio = d;
        this.P = 0;
        this.resolution = c;
        this.c = this.na = this.ma = null;
        this.instructions = [];
        this.coordinates = [];
        this.ra = {};
        this.W = ad();
        this.b = [];
        this.D = null;
        this.state = {};
        this.Xa = 0;
        this.Oa = ad();
    }
    v(Yl, il);
    function Zl(a, b, c, d, e, f, g, h) {
        b.beginPath();
        b.moveTo.apply(b, c);
        b.lineTo.apply(b, d);
        b.lineTo.apply(b, e);
        b.lineTo.apply(b, f);
        b.lineTo.apply(b, c);
        g && (a.Da = g[2], a.Ya(b));
        h && ($l(b, h), b.stroke());
    }
    function am(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u, w, z, A, E) {
        var T = A || E, Ja = a.Oa;
        f *= r;
        g *= r;
        c -= f;
        d -= g;
        u && (c = Math.round(c), d = Math.round(d));
        u = w + n > e.width ? e.width - n : w;
        l = l + p > e.height ? e.height - p : l;
        w = a.Ea;
        var ua = z[3] + u * r + z[1], ma = z[0] + l * r + z[2], da = c - z[3], ja = d - z[0];
        if (T || 0 !== q) {
            var ya = [ da, ja ];
            var Wa = [ da + ua, ja ];
            var jc = [ da + ua, ja + ma ];
            var Za = [ da, ja + ma ];
        }
        z = null;
        0 !== q ? (f = c + f, g = d + g, z = jd(Ja, f, g, 1, 1, q, -f, -g), cb(w), Sa(w, fd(Ja, ya)), 
        Sa(w, fd(Ja, Wa)), Sa(w, fd(Ja, jc)), Sa(w, fd(Ja, Za))) : bb(da, ja, da + ua, ja + ma, w);
        q = b.canvas;
        q = w[0] <= q.width && 0 <= w[2] && w[1] <= q.height && 0 <= w[3];
        if (h) {
            if (q || 1 != h[4]) hb(h, w), (a = q ? [ b, z ? z.slice(0) : null, m, e, n, p, u, l, c, d, r ] : null) && T && a.push(A, E, ya, Wa, jc, Za), 
            h.push(a);
        } else q && (T && Zl(a, b, ya, Wa, jc, Za, A, E), df(b, z, m, e, n, p, u, l, c, d, r));
    }
    function bm(a, b) {
        var c = a.pixelRatio;
        return 1 == c ? b : b.map(function(a) {
            return a * c;
        });
    }
    function cm(a, b, c, d, e, f, g) {
        var h = a.coordinates.length, l = dm(a);
        g && (c += e);
        g = [ b[c], b[c + 1] ];
        var m = [ NaN, NaN ], n = !0, p;
        for (p = c + e; p < d; p += e) {
            m[0] = b[p];
            m[1] = b[p + 1];
            var q = ab(l, m);
            q !== r ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = m[0], 
            a.coordinates[h++] = m[1], n = !1) : 1 === q ? (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], 
            n = !1) : n = !0;
            g[0] = m[0];
            g[1] = m[1];
            var r = q;
        }
        if (f && n || p === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1];
        return h;
    }
    function em(a, b, c, d, e, f) {
        for (var g = 0, h = d.length; g < h; ++g) {
            var l = d[g];
            c = cm(a, b, c, l, e, !1, !1);
            f.push(c);
            c = l;
        }
        return c;
    }
    k = Yl.prototype;
    k.Zh = function(a, b, c) {
        fm(this, b);
        var d = a.getType(), e = a.la(), f = this.coordinates.length, g;
        if ("MultiPolygon" == d) {
            d = be(a);
            var h = [];
            for (var l = a.wd(), m = g = 0, n = l.length; m < n; ++m) {
                var p = [];
                g = em(this, d, g, l[m], e, p);
                h.push(p);
            }
            this.instructions.push([ 4, f, h, a, c, Ad ]);
        } else "Polygon" == d || "MultiLineString" == d ? (h = [], d = "Polygon" == d ? a.$b() : a.ba(), 
        em(this, d, 0, a.qb(), e, h), this.instructions.push([ 4, f, h, a, c, zd ])) : "LineString" == d || "MultiPoint" == d ? (d = a.ba(), 
        e = cm(this, d, 0, d.length, e, !1, !1), this.instructions.push([ 4, f, e, a, c, yd ])) : "Point" == d && (d = a.ba(), 
        this.coordinates.push(d[0], d[1]), e = this.coordinates.length, this.instructions.push([ 4, f, e, a, c ]));
        gm(this, b);
    };
    function fm(a, b) {
        a.ma = [ 0, b, 0 ];
        a.instructions.push(a.ma);
        a.na = [ 0, b, 0 ];
        a.b.push(a.na);
    }
    k.Ya = function(a) {
        if (this.Da) {
            var b = fd(this.W, this.Da.slice());
            a.translate(b[0], b[1]);
            a.rotate(this.Xa);
        }
        a.fill();
        this.Da && a.setTransform.apply(a, cf);
    };
    function $l(a, b) {
        a.strokeStyle = b[1];
        a.lineWidth = b[2];
        a.lineCap = b[3];
        a.lineJoin = b[4];
        a.miterLimit = b[5];
        ye && (a.lineDashOffset = b[7], a.setLineDash(b[6]));
    }
    function hm(a, b, c) {
        if (b && 5 < b.length) {
            var d = b[4];
            if (1 == d || d == b.length - 5) {
                c = {
                    da: b[0],
                    ca: b[1],
                    ia: b[2],
                    ha: b[3],
                    value: c
                };
                if (!a.$.sl(c)) for (a.$.Ba(c), c = 5, d = b.length; c < d; ++c) {
                    var e = b[c];
                    e && (11 < e.length && Zl(a, e[0], e[13], e[14], e[15], e[16], e[11], e[12]), df.apply(void 0, e));
                }
                b.length = 5;
                cb(b);
            }
        }
    }
    function im(a, b, c, d, e, f, g) {
        if (a.D && Ia(c, a.W)) var h = a.D; else a.D || (a.D = []), h = ac(a.coordinates, 0, a.coordinates.length, 2, c, a.D), 
        ed(a.W, c);
        for (var l = !Db(d), m = 0, n = e.length, p = 0, q, r, u, w, z, A, E, T, Ja, ua = 0, ma = 0, da = null, ja = null, ya = a.ra, Wa = a.Xa, jc = {
            context: b,
            pixelRatio: a.pixelRatio,
            resolution: a.resolution,
            rotation: Wa
        }, Za = a.instructions != e || a.overlaps ? 0 : 200; m < n; ) {
            var ba = e[m];
            switch (ba[0]) {
              case 0:
                var Zb = ba[1];
                l && d[x(Zb).toString()] || !Zb.getGeometry() ? m = ba[2] : void 0 === g || ub(g, Zb.getGeometry().A()) ? ++m : m = ba[2] + 1;
                break;

              case 1:
                ua > Za && (a.Ya(b), ua = 0);
                ma > Za && (b.stroke(), ma = 0);
                ua || ma || (b.beginPath(), w = z = NaN);
                ++m;
                break;

              case 2:
                p = ba[1];
                var Ze = h[p], kg = h[p + 1], Vd = h[p + 2] - Ze, He = h[p + 3] - kg, di = Math.sqrt(Vd * Vd + He * He);
                b.moveTo(Ze + di, kg);
                b.arc(Ze, kg, di, 0, 2 * Math.PI, !0);
                ++m;
                break;

              case 3:
                b.closePath();
                ++m;
                break;

              case 4:
                p = ba[1];
                q = ba[2];
                var dh = ba[4], eh = 6 == ba.length ? ba[5] : void 0;
                jc.geometry = ba[3];
                jc.feature = Zb;
                m in ya || (ya[m] = []);
                var mg = ya[m];
                eh ? eh(h, p, q, 2, mg) : (mg[0] = h[p], mg[1] = h[p + 1], mg.length = 2);
                dh(mg, jc);
                ++m;
                break;

              case 6:
                p = ba[1];
                q = ba[2];
                Ja = ba[3];
                r = ba[4];
                u = ba[5];
                T = f ? null : ba[6];
                var Ff = ba[7], Fv = ba[8], Gv = ba[9], Hv = ba[10], Iv = ba[11], sq = ba[12], Jv = ba[13], Kv = ba[14], Lv = ba[15];
                if (16 < ba.length) {
                    var tq = ba[16];
                    var uq = ba[17];
                    var vq = ba[18];
                } else tq = Re, uq = vq = !1;
                for (Iv && (sq += Wa); p < q; p += 2) am(a, b, h[p], h[p + 1], Ja, r, u, T, Ff, Fv, Gv, Hv, sq, Jv, Kv, Lv, tq, uq ? da : null, vq ? ja : null);
                hm(a, T, Zb);
                ++m;
                break;

              case 5:
                var wq = ba[1], xq = ba[2], wl = ba[3];
                T = f ? null : ba[4];
                var Mv = ba[5], yq = ba[6], Nv = ba[7], zq = ba[8], Aq = ba[9], Bq = ba[10], Cq = ba[11], Dq = ba[12], xl = ba[13], Eq = ba[14], Fq = Kd(h, wq, xq, 2), Gq = zq(Dq);
                if (Mv || Gq <= Fq) {
                    a: {
                        var qj = void 0, Hq = void 0, ng = void 0, Gf = h, Je = wq, Iq = xq, Jq = Dq, Ov = zq, Kq = (Fq - Gq) * Xl[a.l[xl].textAlign], Pv = Nv, yl = [], ei = Gf[Je] > Gf[Iq - 2], Lq = Jq.length, fi = Gf[Je], gi = Gf[Je + 1];
                        Je += 2;
                        for (var fh = Gf[Je], gh = Gf[Je + 1], zl = 0, rj = Math.sqrt(Math.pow(fh - fi, 2) + Math.pow(gh - gi, 2)), og = "", Al = 0, sj = 0; sj < Lq; ++sj) {
                            Hq = ei ? Lq - sj - 1 : sj;
                            var Bl = Jq.charAt(Hq);
                            og = ei ? Bl + og : og + Bl;
                            var hh = Ov(og) - Al;
                            Al += hh;
                            for (var Mq = Kq + hh / 2; Je < Iq - 2 && zl + rj < Mq; ) fi = fh, gi = gh, Je += 2, 
                            fh = Gf[Je], gh = Gf[Je + 1], zl += rj, rj = Math.sqrt(Math.pow(fh - fi, 2) + Math.pow(gh - gi, 2));
                            var Qv = Mq - zl, ih = Math.atan2(gh - gi, fh - fi);
                            ei && (ih += 0 < ih ? -Math.PI : Math.PI);
                            if (void 0 !== qj) {
                                var tj = ih - qj;
                                tj += tj > Math.PI ? -2 * Math.PI : tj < -Math.PI ? 2 * Math.PI : 0;
                                if (Math.abs(tj) > Pv) {
                                    var jh = null;
                                    break a;
                                }
                            }
                            var Nq = Qv / rj, Oq = kc(fi, fh, Nq), Pq = kc(gi, gh, Nq);
                            qj == ih ? (ei && (ng[0] = Oq, ng[1] = Pq, ng[2] = hh / 2), ng[4] = og) : (og = Bl, 
                            Al = hh, ng = [ Oq, Pq, hh / 2, ih, og ], ei ? yl.unshift(ng) : yl.push(ng), qj = ih);
                            Kq += hh;
                        }
                        jh = yl;
                    }
                    if (jh) {
                        var uj;
                        if (Bq) {
                            var pg = 0;
                            for (uj = jh.length; pg < uj; ++pg) {
                                var qe = jh[pg];
                                var Cl = qe[4];
                                var af = a.U(Cl, xl, "", Bq);
                                r = qe[2] + Cq;
                                u = wl * af.height + 2 * (.5 - wl) * Cq - Aq;
                                am(a, b, qe[0], qe[1], af, r, u, T, af.height, 1, 0, 0, qe[3], Eq, !1, af.width, Re, null, null);
                            }
                        }
                        if (yq) for (pg = 0, uj = jh.length; pg < uj; ++pg) qe = jh[pg], Cl = qe[4], af = a.U(Cl, xl, yq, ""), 
                        r = qe[2], u = wl * af.height - Aq, am(a, b, qe[0], qe[1], af, r, u, T, af.height, 1, 0, 0, qe[3], Eq, !1, af.width, Re, null, null);
                    }
                }
                hm(a, T, Zb);
                ++m;
                break;

              case 7:
                if (void 0 !== f) {
                    Zb = ba[1];
                    var Qq = f(Zb);
                    if (Qq) return Qq;
                }
                ++m;
                break;

              case 8:
                Za ? ua++ : a.Ya(b);
                ++m;
                break;

              case 9:
                p = ba[1];
                q = ba[2];
                var hi = h[p];
                var ii = h[p + 1];
                A = hi + .5 | 0;
                E = ii + .5 | 0;
                if (A !== w || E !== z) b.moveTo(hi, ii), w = A, z = E;
                for (p += 2; p < q; p += 2) if (hi = h[p], ii = h[p + 1], A = hi + .5 | 0, E = ii + .5 | 0, 
                p == q - 2 || A !== w || E !== z) b.lineTo(hi, ii), w = A, z = E;
                ++m;
                break;

              case 10:
                da = ba;
                a.Da = ba[2];
                ua && (a.Ya(b), ua = 0, ma && (b.stroke(), ma = 0));
                b.fillStyle = ba[1];
                ++m;
                break;

              case 11:
                ja = ba;
                ma && (b.stroke(), ma = 0);
                $l(b, ba);
                ++m;
                break;

              case 12:
                Za ? ma++ : b.stroke();
                ++m;
                break;

              default:
                ++m;
            }
        }
        ua && a.Ya(b);
        ma && b.stroke();
    }
    k.Pa = function(a, b, c, d) {
        this.Xa = c;
        im(this, a, b, d, this.instructions, void 0, void 0);
    };
    function jm(a, b, c, d, e, f, g) {
        a.Xa = d;
        return im(a, b, c, e, a.b, f, g);
    }
    function km(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e = -1;
        for (c = 0; c < d; ++c) {
            var f = b[c];
            var g = f[0];
            if (7 == g) e = c; else if (0 == g) {
                f[2] = c;
                f = a.b;
                for (g = c; e < g; ) {
                    var h = f[e];
                    f[e] = f[g];
                    f[g] = h;
                    ++e;
                    --g;
                }
                e = -1;
            }
        }
    }
    k.Qa = function(a, b) {
        var c = this.state;
        a ? (a = a.b, c.fillStyle = ke(a ? a : Oe)) : c.fillStyle = void 0;
        b ? (a = b.b, c.strokeStyle = ke(a ? a : Qe), a = b.g, c.lineCap = void 0 !== a ? a : "round", 
        a = b.c, c.lineDash = a ? a.slice() : Pe, a = b.i, c.lineDashOffset = a ? a : 0, 
        a = b.j, c.lineJoin = void 0 !== a ? a : "round", a = b.a, c.lineWidth = void 0 !== a ? a : 1, 
        b = b.l, c.miterLimit = void 0 !== b ? b : 10, c.lineWidth > this.P && (this.P = c.lineWidth, 
        this.c = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, 
        c.lineDashOffset = void 0, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0);
    };
    k.Vh = function(a, b) {
        var c = a.fillStyle;
        a = [ 10, c ];
        "string" !== typeof c && (b = b.A(), a.push([ b[0], b[3] ]));
        this.instructions.push(a);
    };
    k.td = function(a) {
        this.instructions.push([ 11, a.strokeStyle, a.lineWidth * this.pixelRatio, a.lineCap, a.lineJoin, a.miterLimit, bm(this, a.lineDash), a.lineDashOffset * this.pixelRatio ]);
    };
    function lm(a, b, c, d) {
        var e = b.fillStyle;
        if ("string" !== typeof e || b.tl != e) c.call(a, b, d), b.tl = e;
    }
    function mm(a, b, c) {
        var d = b.strokeStyle, e = b.lineCap, f = b.lineDash, g = b.lineDashOffset, h = b.lineJoin, l = b.lineWidth, m = b.miterLimit;
        if (b.zl != d || b.ul != e || f != b.Xh && !Ia(b.Xh, f) || b.vl != g || b.wl != h || b.xl != l || b.yl != m) c.call(a, b), 
        b.zl = d, b.ul = e, b.Xh = f, b.vl = g, b.wl = h, b.xl = l, b.yl = m;
    }
    function gm(a, b) {
        a.ma[2] = a.instructions.length;
        a.ma = null;
        a.na[2] = a.b.length;
        a.na = null;
        b = [ 7, b ];
        a.instructions.push(b);
        a.b.push(b);
    }
    k.kf = Ba;
    function dm(a) {
        a.c || (a.c = Ua(a.Wb), 0 < a.P && Ta(a.c, a.resolution * (a.P + 1) / 2, a.c));
        return a.c;
    }
    function nm(a, b, c, d, e, f) {
        Yl.call(this, a, b, c, d, e, f);
        this.M = this.R = this.B = null;
        this.s = this.u = this.o = this.l = this.j = this.C = this.L = this.g = this.i = this.f = this.a = void 0;
    }
    v(nm, Yl);
    nm.prototype.Gc = function(a, b) {
        if (this.M) {
            fm(this, b);
            var c = a.ba(), d = this.coordinates.length;
            a = cm(this, c, 0, c.length, a.la(), !1, !1);
            this.instructions.push([ 6, d, a, this.M, this.a, this.f, this.B, this.i, this.g, this.L, this.C, this.j, this.l, this.o * this.pixelRatio, this.u, this.s ]);
            this.b.push([ 6, d, a, this.R, this.a, this.f, this.B, this.i, this.g, this.L, this.C, this.j, this.l, this.o, this.u, this.s ]);
            gm(this, b);
        }
    };
    nm.prototype.Ec = function(a, b) {
        if (this.M) {
            fm(this, b);
            var c = a.ba(), d = this.coordinates.length;
            a = cm(this, c, 0, c.length, a.la(), !1, !1);
            this.instructions.push([ 6, d, a, this.M, this.a, this.f, this.B, this.i, this.g, this.L, this.C, this.j, this.l, this.o * this.pixelRatio, this.u, this.s ]);
            this.b.push([ 6, d, a, this.R, this.a, this.f, this.B, this.i, this.g, this.L, this.C, this.j, this.l, this.o, this.u, this.s ]);
            gm(this, b);
        }
    };
    nm.prototype.kf = function() {
        km(this);
        this.f = this.a = void 0;
        this.M = this.R = null;
        this.s = this.u = this.l = this.j = this.C = this.L = this.g = this.o = this.i = void 0;
    };
    nm.prototype.cc = function(a, b) {
        var c = a.ic(), d = a.ac(), e = a.Tg(), f = a.U(1), g = a.Oc();
        this.a = c[0];
        this.f = c[1];
        this.B = b;
        this.R = e;
        this.M = f;
        this.i = d[1];
        this.g = a.j;
        this.L = g[0];
        this.C = g[1];
        this.j = a.u;
        this.l = a.i;
        this.o = a.c;
        this.u = a.s;
        this.s = d[0];
    };
    function om(a, b, c, d, e, f) {
        Yl.call(this, a, b, c, d, e, f);
    }
    v(om, Yl);
    function pm(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = cm(a, b, c, d, e, !1, !1);
        f = [ 9, f, b ];
        a.instructions.push(f);
        a.b.push(f);
        return d;
    }
    om.prototype.Cc = function(a, b) {
        var c = this.state, d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (mm(this, c, this.td), fm(this, b), 
        this.b.push([ 11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset ], [ 1 ]), 
        c = a.ba(), pm(this, c, 0, c.length, a.la()), this.b.push([ 12 ]), gm(this, b));
    };
    om.prototype.Dc = function(a, b) {
        var c = this.state, d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            mm(this, c, this.td);
            fm(this, b);
            this.b.push([ 11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset ], [ 1 ]);
            c = a.qb();
            d = a.ba();
            a = a.la();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) e = pm(this, d, e, c[g], a);
            this.b.push([ 12 ]);
            gm(this, b);
        }
    };
    om.prototype.kf = function() {
        var a = this.state;
        void 0 != a.ge && a.ge != this.coordinates.length && this.instructions.push([ 12 ]);
        km(this);
        this.state = null;
    };
    om.prototype.td = function(a) {
        void 0 != a.ge && a.ge != this.coordinates.length && (this.instructions.push([ 12 ]), 
        a.ge = this.coordinates.length);
        a.ge = 0;
        Yl.prototype.td.call(this, a);
        this.instructions.push([ 1 ]);
    };
    function qm(a, b, c, d, e, f) {
        Yl.call(this, a, b, c, d, e, f);
    }
    v(qm, Yl);
    function rm(a, b, c, d, e) {
        var f = a.state, g = void 0 !== f.fillStyle;
        f = void 0 != f.strokeStyle;
        var h = d.length, l = [ 1 ];
        a.instructions.push(l);
        a.b.push(l);
        for (l = 0; l < h; ++l) {
            var m = d[l], n = a.coordinates.length;
            c = cm(a, b, c, m, e, !0, !f);
            c = [ 9, n, c ];
            a.instructions.push(c);
            a.b.push(c);
            f && (c = [ 3 ], a.instructions.push(c), a.b.push(c));
            c = m;
        }
        b = [ 8 ];
        a.b.push(b);
        g && a.instructions.push(b);
        f && (g = [ 12 ], a.instructions.push(g), a.b.push(g));
        return c;
    }
    qm.prototype.fc = function(a, b) {
        var c = this.state, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            sm(this, a);
            fm(this, b);
            this.b.push([ 10, ie(Oe) ]);
            void 0 !== c.strokeStyle && this.b.push([ 11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset ]);
            var e = a.ba();
            d = this.coordinates.length;
            cm(this, e, 0, e.length, a.la(), !1, !1);
            a = [ 1 ];
            d = [ 2, d ];
            this.instructions.push(a, d);
            this.b.push(a, d);
            a = [ 8 ];
            this.b.push(a);
            void 0 !== c.fillStyle && this.instructions.push(a);
            void 0 !== c.strokeStyle && (c = [ 12 ], this.instructions.push(c), this.b.push(c));
            gm(this, b);
        }
    };
    qm.prototype.Hc = function(a, b) {
        var c = this.state;
        sm(this, a);
        fm(this, b);
        this.b.push([ 10, ie(Oe) ]);
        void 0 !== c.strokeStyle && this.b.push([ 11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset ]);
        c = a.qb();
        var d = a.$b();
        rm(this, d, 0, c, a.la());
        gm(this, b);
    };
    qm.prototype.Fc = function(a, b) {
        var c = this.state, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            sm(this, a);
            fm(this, b);
            this.b.push([ 10, ie(Oe) ]);
            void 0 !== c.strokeStyle && this.b.push([ 11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset ]);
            c = a.wd();
            d = be(a);
            a = a.la();
            var e = 0, f;
            var g = 0;
            for (f = c.length; g < f; ++g) e = rm(this, d, e, c[g], a);
            gm(this, b);
        }
    };
    qm.prototype.kf = function() {
        km(this);
        this.state = null;
        var a = this.eb;
        if (0 !== a) {
            var b = this.coordinates, c;
            var d = 0;
            for (c = b.length; d < c; ++d) b[d] = a * Math.round(b[d] / a);
        }
    };
    function sm(a, b) {
        var c = a.state;
        void 0 !== c.fillStyle && lm(a, c, a.Vh, b);
        void 0 !== c.strokeStyle && mm(a, c, a.td);
    }
    function tm(a, b, c, d, e, f) {
        Yl.call(this, a, b, c, d, e, f);
        this.pa = "";
        this.j = this.L = 0;
        this.C = void 0;
        this.B = 0;
        this.f = null;
        this.u = {};
        this.a = null;
        this.Z = {};
        this.i = {};
        this.l = {};
        this.R = this.o = this.g = "";
        for (this.ua = {}; Ne(Se); ) Se.pop();
    }
    v(tm, Yl);
    tm.prototype.Yb = function(a, b) {
        var c = this.f, d = this.a, e = this.i;
        if ("" !== this.pa && e && (c || d)) {
            c = this.coordinates.length;
            var f = a.getType();
            d = null;
            var g = 2, h = 2;
            if ("line" === e.placement) {
                if (!ub(dm(this), a.A())) return;
                d = a.ba();
                h = a.la();
                if ("LineString" == f) var l = [ d.length ]; else if ("MultiLineString" == f) l = a.qb(); else if ("Polygon" == f) l = a.qb().slice(0, 1); else if ("MultiPolygon" == f) for (a = a.wd(), 
                l = [], g = 0, f = a.length; g < f; ++g) l.push(a[g][0]);
                fm(this, b);
                a = e.textAlign;
                var m = 0, n;
                f = 0;
                for (var p = l.length; f < p; ++f) {
                    if (void 0 == a) {
                        for (var q, r, u = void 0, w = void 0, z = g = r = q = void 0, A = n = m, E = 0, T = 0, Ja = m; m < l[f]; m += h) {
                            var ua = d[m], ma = d[m + 1];
                            void 0 !== r && (r = ua - r, q = ma - q, g = Math.sqrt(r * r + q * q), void 0 !== w && (T += z, 
                            u = Math.acos((w * r + u * q) / (z * g)), u > e.maxAngle && (T > E && (E = T, n = Ja, 
                            A = m), T = 0, Ja = m - h)), z = g, w = r, u = q);
                            r = ua;
                            q = ma;
                        }
                        g = T + g > E ? [ Ja, m ] : [ n, A ];
                        m = g[0];
                        n = g[1];
                    } else n = l[f];
                    for (g = m; g < n; g += h) this.coordinates.push(d[g], d[g + 1]);
                    g = this.coordinates.length;
                    m = l[f];
                    um(this, c, g, this.s);
                    c = g;
                }
            } else {
                l = this.U(this.pa, this.g, this.o, this.R);
                p = l.width / this.pixelRatio;
                switch (f) {
                  case "Point":
                  case "MultiPoint":
                    d = a.ba();
                    g = d.length;
                    break;

                  case "LineString":
                    d = a.Ne();
                    break;

                  case "Circle":
                    d = a.getCenter();
                    break;

                  case "MultiLineString":
                    d = a.Oe();
                    g = d.length;
                    break;

                  case "Polygon":
                    d = a.Zd();
                    if (!e.overflow && d[2] / this.resolution < p) return;
                    h = 3;
                    break;

                  case "MultiPolygon":
                    n = ce(a);
                    d = [];
                    g = 0;
                    for (f = n.length; g < f; g += 3) (e.overflow || n[g + 2] / this.resolution >= p) && d.push(n[g], n[g + 1]);
                    g = d.length;
                    if (0 == g) return;
                }
                g = cm(this, d, 0, g, h, !1, !1);
                fm(this, b);
                if (e.backgroundFill || e.backgroundStroke) this.Qa(e.backgroundFill, e.backgroundStroke), 
                lm(this, this.state, this.Vh, a), mm(this, this.state, this.td);
                vm(this, l, c, g);
            }
            gm(this, b);
        }
    };
    tm.prototype.U = function(a, b, c, d) {
        var e = d + b + a + c + this.pixelRatio;
        if (!Se.a.hasOwnProperty(e)) {
            var f = d ? this.Z[d] || this.a : null, g = c ? this.u[c] || this.f : null, h = this.l[b] || this.i, l = h.scale * this.pixelRatio, m = Xl[h.textAlign || "center"];
            b = d && f.lineWidth ? f.lineWidth : 0;
            a = a.split("\n");
            var n = a.length, p = [], q = h.font;
            var r = a.length;
            var u = 0;
            var w;
            for (w = 0; w < r; ++w) {
                var z = $e(q, a[w]);
                u = Math.max(u, z);
                p.push(z);
            }
            r = u;
            q = Ye(h.font);
            r = le(Math.ceil((r + b) * l), Math.ceil((q * n + b) * l));
            u = r.canvas;
            Se.set(e, u);
            1 != l && r.scale(l, l);
            r.font = h.font;
            d && (r.strokeStyle = f.strokeStyle, r.lineWidth = b * (ue ? l : 1), r.lineCap = f.lineCap, 
            r.lineJoin = f.lineJoin, r.miterLimit = f.miterLimit, ye && f.lineDash.length && (r.setLineDash(f.lineDash), 
            r.lineDashOffset = f.lineDashOffset));
            c && (r.fillStyle = g.fillStyle);
            r.textBaseline = "middle";
            r.textAlign = "center";
            f = .5 - m;
            g = m * u.width / l + f * b;
            if (d) for (d = 0; d < n; ++d) r.strokeText(a[d], g + f * p[d], .5 * (b + q) + d * q);
            if (c) for (d = 0; d < n; ++d) r.fillText(a[d], g + f * p[d], .5 * (b + q) + d * q);
        }
        return Se.get(e);
    };
    function vm(a, b, c, d) {
        var e = a.i, f = a.a, g = a.pixelRatio, h = Xl[e.textAlign || "center"], l = Xl[e.textBaseline];
        f = f && f.lineWidth ? f.lineWidth : 0;
        h = h * b.width / g + 2 * (.5 - h) * f;
        l = l * b.height / g + 2 * (.5 - l) * f;
        a.instructions.push([ 6, c, d, b, (h - a.L) * g, (l - a.j) * g, a.s, b.height, 1, 0, 0, a.C, a.B, 1, !0, b.width, e.padding == Re ? Re : e.padding.map(function(a) {
            return a * g;
        }), !!e.backgroundFill, !!e.backgroundStroke ]);
        a.b.push([ 6, c, d, b, (h - a.L) * g, (l - a.j) * g, a.s, b.height, 1, 0, 0, a.C, a.B, 1 / g, !0, b.width, e.padding, !!e.backgroundFill, !!e.backgroundStroke ]);
    }
    function um(a, b, c, d) {
        var e = a.a, f = a.i, g = a.f, h = a.R;
        e && (h in a.Z || (a.Z[h] = {
            strokeStyle: e.strokeStyle,
            lineCap: e.lineCap,
            lineDashOffset: e.lineDashOffset,
            lineWidth: e.lineWidth,
            lineJoin: e.lineJoin,
            miterLimit: e.miterLimit,
            lineDash: e.lineDash
        }));
        var l = a.g;
        a.g in a.l || (a.l[a.g] = {
            font: f.font,
            textAlign: f.textAlign || "center",
            scale: f.scale
        });
        var m = a.o;
        g && (m in a.u || (a.u[m] = {
            fillStyle: g.fillStyle
        }));
        var n = a.pixelRatio;
        g = Xl[f.textBaseline];
        var p = a.j * n, q = a.pa, r = f.font, u = f.scale;
        e = e ? e.lineWidth * u / 2 : 0;
        var w = a.ua[r];
        w || (a.ua[r] = w = {});
        a.instructions.push([ 5, b, c, g, d, f.overflow, m, f.maxAngle, function(a) {
            var b = w[a];
            b || (b = w[a] = $e(r, a));
            return b * u * n;
        }, p, h, e * n, q, l, 1 ]);
        a.b.push([ 5, b, c, g, d, f.overflow, m, f.maxAngle, function(a) {
            var b = w[a];
            b || (b = w[a] = $e(r, a));
            return b * u;
        }, p, h, e, q, l, 1 / n ]);
    }
    tm.prototype.pb = function(a, b) {
        var c, d;
        if (a) {
            this.s = b;
            (d = a.wa()) ? (b = this.f, b || (b = this.f = {}), b.fillStyle = ke(d.b || Oe)) : b = this.f = null;
            if (c = a.xa()) {
                d = this.a;
                d || (d = this.a = {});
                var e = c.c, f = c.i, g = c.a, h = c.l;
                d.lineCap = c.g || "round";
                d.lineDash = e ? e.slice() : Pe;
                d.lineDashOffset = void 0 === f ? 0 : f;
                d.lineJoin = c.j || "round";
                d.lineWidth = void 0 === g ? 1 : g;
                d.miterLimit = void 0 === h ? 10 : h;
                d.strokeStyle = ke(c.b || Qe);
            } else d = this.a = null;
            c = this.i;
            e = a.b || "10px sans-serif";
            Xe(e);
            f = a.a;
            c.overflow = a.u;
            c.font = e;
            c.maxAngle = a.o;
            c.placement = a.s;
            c.textAlign = a.i;
            c.textBaseline = a.g || "middle";
            c.backgroundFill = a.L;
            c.backgroundStroke = a.C;
            c.padding = a.B || Re;
            c.scale = void 0 === f ? 1 : f;
            e = a.f;
            f = a.c;
            g = a.l;
            h = a.j;
            this.pa = a.Fa() || "";
            this.L = void 0 === e ? 0 : e;
            this.j = void 0 === f ? 0 : f;
            this.C = void 0 === g ? !1 : g;
            this.B = void 0 === h ? 0 : h;
            this.R = d ? ("string" == typeof d.strokeStyle ? d.strokeStyle : x(d.strokeStyle)) + d.lineCap + d.lineDashOffset + "|" + d.lineWidth + d.lineJoin + d.miterLimit + "[" + d.lineDash.join() + "]" : "";
            this.g = c.font + c.scale + (c.textAlign || "?");
            this.o = b ? "string" == typeof b.fillStyle ? b.fillStyle : "|" + x(b.fillStyle) : "";
        } else this.pa = "";
    };
    function wm(a, b, c, d, e, f, g) {
        this.a = f;
        this.f = null;
        this.s = a;
        this.c = b;
        this.l = e;
        this.o = d;
        this.u = c;
        this.i = g;
        this.b = {};
        this.g = le(1, 1);
        this.j = ad();
    }
    v(wm, Vl);
    var xm = {
        0: [ [ !0 ] ]
    };
    function ym(a, b, c) {
        var d, e = Math.floor(a.length / 2);
        if (b >= e) for (d = e; d < b; d++) a[d][c] = !0; else if (b < e) for (d = b + 1; d < e; d++) a[d][c] = !0;
    }
    function zm(a) {
        if (void 0 !== xm[a]) return xm[a];
        for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++) c[d] = Array(b);
        b = a;
        for (var e = d = 0; b >= d; ) ym(c, a + b, a + d), ym(c, a + d, a + b), ym(c, a - d, a + b), 
        ym(c, a - b, a + d), ym(c, a - b, a - d), ym(c, a - d, a - b), ym(c, a + d, a - b), 
        ym(c, a + b, a - d), d++, e += 1 + 2 * d, 0 < 2 * (e - b) + 1 && (--b, e += 1 - 2 * b);
        return xm[a] = c;
    }
    k = wm.prototype;
    k.Xb = function(a) {
        var b = null;
        this.a && (a ? (b = this.f, b[4]++) : (b = this.f = Ra(), b.push(1)));
        return b;
    };
    function Am(a) {
        for (var b in a.b) {
            var c = a.b[b], d;
            for (d in c) c[d].kf();
        }
    }
    k.va = function(a, b, c, d, e, f, g) {
        function h(a) {
            for (var b = n.getImageData(0, 0, l, l).data, c = 0; c < l; c++) for (var d = 0; d < l; d++) if (q[c][d] && 0 < b[4 * (d * l + c) + 3]) {
                if (!r || "Image" != z && "Text" != z || -1 !== r.indexOf(a)) var e = f(a);
                if (e) return e;
                n.clearRect(0, 0, l, l);
                return;
            }
        }
        d = Math.round(d);
        var l = 2 * d + 1, m = jd(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1]), n = this.g;
        n.canvas.width !== l || n.canvas.height !== l ? (n.canvas.width = l, n.canvas.height = l) : n.clearRect(0, 0, l, l);
        if (void 0 !== this.i) {
            var p = Ra();
            Sa(p, a);
            Ta(p, b * (this.i + d), p);
        }
        var q = zm(d), r;
        this.a && (r = this.a.all().map(function(a) {
            return a.value;
        }));
        a = Object.keys(this.b).map(Number);
        a.sort(Da);
        for (b = a.length - 1; 0 <= b; --b) {
            var u = a[b].toString();
            var w = this.b[u];
            for (d = Wl.length - 1; 0 <= d; --d) {
                var z = Wl[d];
                var A = w[z];
                if (void 0 !== A) if (!g || "Image" != z && "Text" != z) {
                    if (A = jm(A, n, m, c, e, h, p)) return A;
                } else {
                    var E = g[u];
                    E ? E.push(A, m.slice(0)) : g[u] = [ A, m.slice(0) ];
                }
            }
        }
    };
    function Bm(a, b) {
        var c = a.c;
        a = c[0];
        var d = c[1], e = c[2];
        c = c[3];
        a = [ a, d, a, c, e, c, e, d ];
        ac(a, 0, 8, 2, b, a);
        return a;
    }
    k.Ka = function(a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.b[c];
        void 0 === a && (a = {}, this.b[c] = a);
        c = a[b];
        void 0 === c && (c = new Cm[b](this.s, this.c, this.u, this.o, this.l, this.a), 
        a[b] = c);
        return c;
    };
    k.Ng = function() {
        return Db(this.b);
    };
    k.Pa = function(a, b, c, d, e, f) {
        var g = Object.keys(this.b).map(Number);
        g.sort(Da);
        a.save();
        var h = Bm(this, b);
        a.beginPath();
        a.moveTo(h[0], h[1]);
        a.lineTo(h[2], h[3]);
        a.lineTo(h[4], h[5]);
        a.lineTo(h[6], h[7]);
        a.clip();
        e = e ? e : Wl;
        var l, m;
        h = 0;
        for (l = g.length; h < l; ++h) {
            var n = g[h].toString();
            var p = this.b[n];
            var q = 0;
            for (m = e.length; q < m; ++q) {
                var r = e[q];
                var u = p[r];
                void 0 !== u && (!f || "Image" != r && "Text" != r ? u.Pa(a, b, c, d) : (r = f[n]) ? r.push(u, b.slice(0)) : f[n] = [ u, b.slice(0) ]);
            }
        }
        a.restore();
    };
    var Cm = {
        Circle: qm,
        Default: Yl,
        Image: nm,
        LineString: om,
        Polygon: qm,
        Text: tm
    };
    function Dm(a, b) {
        return x(a) - x(b);
    }
    function Em(a, b) {
        a = .5 * a / b;
        return a * a;
    }
    function Fm(a, b, c, d, e, f) {
        var g = !1, h;
        if (h = c.U()) {
            var l = h.qf();
            2 == l || 3 == l ? h.Bk(e, f) : (0 == l && h.load(), h.Ai(e, f), g = !0);
        }
        if (e = (0, c.fb)(b)) if (d = e.ae(d), c.Qe()) Gm(a, d, c, b); else (0, Hm[d.getType()])(a, d, c, b);
        return g;
    }
    function Gm(a, b, c, d) {
        if ("GeometryCollection" == b.getType()) {
            b = b.yd();
            for (var e = 0, f = b.length; e < f; ++e) Gm(a, b[e], c, d);
        } else a.Ka(c.getZIndex(), "Default").Zh(b, d, c.Qe());
    }
    var Hm = {
        Point: function(a, b, c, d) {
            var e = c.U();
            if (e) {
                if (2 != e.qf()) return;
                var f = a.Ka(c.getZIndex(), "Image");
                f.cc(e, a.Xb(!1));
                f.Gc(b, d);
            }
            if (f = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(f, a.Xb(!!e)), c.Yb(b, d);
        },
        LineString: function(a, b, c, d) {
            var e = c.xa();
            if (e) {
                var f = a.Ka(c.getZIndex(), "LineString");
                f.Qa(null, e);
                f.Cc(b, d);
            }
            if (e = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(e, a.Xb(!1)), c.Yb(b, d);
        },
        Polygon: function(a, b, c, d) {
            var e = c.wa(), f = c.xa();
            if (e || f) {
                var g = a.Ka(c.getZIndex(), "Polygon");
                g.Qa(e, f);
                g.Hc(b, d);
            }
            if (e = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(e, a.Xb(!1)), c.Yb(b, d);
        },
        MultiPoint: function(a, b, c, d) {
            var e = c.U();
            if (e) {
                if (2 != e.qf()) return;
                var f = a.Ka(c.getZIndex(), "Image");
                f.cc(e, a.Xb(!1));
                f.Ec(b, d);
            }
            if (f = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(f, a.Xb(!!e)), c.Yb(b, d);
        },
        MultiLineString: function(a, b, c, d) {
            var e = c.xa();
            if (e) {
                var f = a.Ka(c.getZIndex(), "LineString");
                f.Qa(null, e);
                f.Dc(b, d);
            }
            if (e = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(e, a.Xb(!1)), c.Yb(b, d);
        },
        MultiPolygon: function(a, b, c, d) {
            var e = c.wa(), f = c.xa();
            if (f || e) {
                var g = a.Ka(c.getZIndex(), "Polygon");
                g.Qa(e, f);
                g.Fc(b, d);
            }
            if (e = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(e, a.Xb(!1)), c.Yb(b, d);
        },
        GeometryCollection: function(a, b, c, d) {
            b = b.a;
            var e;
            var f = 0;
            for (e = b.length; f < e; ++f) (0, Hm[b[f].getType()])(a, b[f], c, d);
        },
        Circle: function(a, b, c, d) {
            var e = c.wa(), f = c.xa();
            if (e || f) {
                var g = a.Ka(c.getZIndex(), "Circle");
                g.Qa(e, f);
                g.fc(b, d);
            }
            if (e = c.Fa()) c = a.Ka(c.getZIndex(), "Text"), c.pb(e, a.Xb(!1)), c.Yb(b, d);
        }
    };
    function Im(a) {
        Fl.call(this, a);
        this.g = a.C ? Ul.Pc(9) : null;
        this.i = !1;
        this.L = -1;
        this.s = NaN;
        this.l = Ra();
        this.c = this.u = null;
        this.j = !0;
        this.context = le();
        y(Se, "clear", this.nj, this);
    }
    v(Im, Fl);
    Im.handles = function(a, b) {
        return "canvas" === a && "VECTOR" === b.getType();
    };
    Im.create = function(a, b) {
        return new Im(b);
    };
    k = Im.prototype;
    k.fa = function() {
        Lb(Se, "clear", this.nj, this);
        Fl.prototype.fa.call(this);
    };
    k.mf = function(a, b, c) {
        var d = a.extent, e = a.pixelRatio, f = b.$e ? a.skippedFeatureUids : {}, g = a.viewState, h = g.projection, l = g.rotation, m = h.A(), n = this.a.aa(), p = Il(this, a, 0);
        Hl(this, "precompose", c, a, p);
        var q = b.extent;
        (g = void 0 !== q) && Gl(c, a, q);
        var r = this.c;
        if (r && !r.Ng()) {
            this.g && this.g.clear();
            var u = q = 0, w = 1 !== b.opacity, z = Sb(this.a, "render");
            if (w || z) {
                var A = c.canvas.width;
                var E = c.canvas.height;
                if (l) {
                    var T = Math.round(Math.sqrt(A * A + E * E));
                    q = (T - A) / 2;
                    u = (T - E) / 2;
                    A = E = T;
                }
                this.context.canvas.width = A;
                this.context.canvas.height = E;
                A = this.context;
            } else A = c;
            E = A.globalAlpha;
            w || (A.globalAlpha = b.opacity);
            A != c && A.translate(q, u);
            T = a.size[0] * e;
            e *= a.size[1];
            bf(A, -l, T / 2, e / 2);
            r.Pa(A, p, l, f);
            if (n.C && h.f && !$a(m, d)) {
                h = d[0];
                n = pb(m);
                for (var Ja = 0; h < m[0]; ) --Ja, p = n * Ja, p = Il(this, a, p), r.Pa(A, p, l, f), 
                h += n;
                Ja = 0;
                for (h = d[2]; h > m[2]; ) ++Ja, p = n * Ja, p = Il(this, a, p), r.Pa(A, p, l, f), 
                h -= n;
                p = Il(this, a, 0);
            }
            bf(A, l, T / 2, e / 2);
            A != c && (z && Hl(this, "render", A, a, p), w ? (d = c.globalAlpha, c.globalAlpha = b.opacity, 
            c.drawImage(A.canvas, -q, -u), c.globalAlpha = d) : c.drawImage(A.canvas, -q, -u), 
            A.translate(-q, -u));
            w || (A.globalAlpha = E);
        }
        g && c.restore();
        this.zf(c, a, b, p);
    };
    k.va = function(a, b, c, d, e) {
        if (this.c) {
            var f = this.a, g = {};
            return this.c.va(a, b.viewState.resolution, b.viewState.rotation, c, {}, function(a) {
                var b = x(a).toString();
                if (!(b in g)) return g[b] = !0, d.call(e, a, f);
            }, null);
        }
    };
    k.nj = function() {
        var a = this.a;
        a.Ma() && this.c && a.changed();
    };
    k.oj = function() {
        sl(this);
    };
    k.ed = function(a) {
        var b = this.a, c = b.aa();
        vl(a, c);
        var d = a.viewHints[0], e = a.viewHints[1], f = b.Z, g = b.$;
        if (!this.i && !f && d || !g && e) return !0;
        f = a.extent;
        var h = a.viewState;
        g = h.projection;
        var l = h.resolution, m = a.pixelRatio;
        d = b.f;
        var n = b.g;
        e = b.get("renderOrder");
        void 0 === e && (e = Dm);
        f = Ta(f, n * l);
        n = h.projection.A();
        c.C && h.projection.f && !$a(n, a.extent) && (a = Math.max(pb(f) / 2, pb(n)), f[0] = n[0] - a, 
        f[2] = n[2] + a);
        if (!this.i && this.s == l && this.L == d && this.u == e && $a(this.l, f)) return this.j = !1, 
        !0;
        this.c = null;
        this.i = !1;
        var p = new wm(.5 * l / m, f, l, m, c.Z, this.g, b.g);
        c.he(f, l, g);
        a = function(a) {
            var c = a.lb();
            if (c) var d = c.call(a, l); else (c = b.lb()) && (d = c(a, l));
            if (d) {
                if (d) {
                    c = !1;
                    if (Array.isArray(d)) for (var e = 0, f = d.length; e < f; ++e) c = Fm(p, a, d[e], Em(l, m), this.oj, this) || c; else c = Fm(p, a, d, Em(l, m), this.oj, this);
                    a = c;
                } else a = !1;
                this.i = this.i || a;
            }
        }.bind(this);
        if (e) {
            var q = [];
            c.hc(f, function(a) {
                q.push(a);
            }, this);
            q.sort(e);
            c = 0;
            for (g = q.length; c < g; ++c) a(q[c]);
        } else c.hc(f, a, this);
        Am(p);
        this.s = l;
        this.L = d;
        this.u = e;
        this.l = f;
        this.c = p;
        return this.j = !0;
    };
    function Jm(a) {
        this.context = null;
        Sl.call(this, a);
        this.L = a.C ? Ul.Pc(9) : null;
        this.C = !1;
        this.$ = ad();
        this.R = "vector" == a.l ? 1 : 0;
        y(Se, "clear", this.pj, this);
    }
    v(Jm, Sl);
    Jm.handles = function(a, b) {
        return "canvas" === a && "VECTOR_TILE" === b.getType();
    };
    Jm.create = function(a, b) {
        return new Jm(b);
    };
    var Km = {
        image: [ "Polygon", "Circle", "LineString", "Image", "Text" ],
        hybrid: [ "Polygon", "LineString" ]
    }, Lm = {
        image: [ "Default" ],
        hybrid: [ "Image", "Text", "Default" ],
        vector: Wl
    };
    k = Jm.prototype;
    k.fa = function() {
        Lb(Se, "clear", this.pj, this);
        Sl.prototype.fa.call(this);
    };
    k.ed = function(a, b) {
        var c = this.a, d = c.f;
        this.D != d && (this.g.length = 0, c = c.l, this.context || "vector" == c || (this.context = le()), 
        this.context && "vector" == c && (this.context = null));
        this.D = d;
        return Sl.prototype.ed.apply(this, arguments);
    };
    k.cg = function(a, b, c, d, e, f, g, h, l) {
        var m = a, n = this.a, p = b.pixelRatio, q = b.viewState.projection, r = n.f, u = n.get("renderOrder") || null, w = Mm(m, n);
        if (w.Je || w.Gf != r || w.yh != u) {
            var z = n.aa(), A = z.tileGrid, E = z.gb(q), T = E.Va(m.ya[0]);
            E = E.La(m.j);
            for (var Ja = 0, ua = m.a.length; Ja < ua; ++Ja) {
                var ma = m.getTile(m.a[Ja]);
                if (3 != ma.getState()) {
                    var da = A.La(ma.ya), ja = tb(E, da), ya = gb(da, ja) ? null : Ta(ja, n.g * T), Wa = ma.s, jc = !1;
                    Uc(q, Wa) || (jc = !0, ma.Ig(q));
                    w.Je = !1;
                    ja = new wm(0, ja, T, p, z.o, this.L, n.g);
                    var Za = Em(T, p), ba = ma.a;
                    u && u !== w.yh && ba.sort(u);
                    for (var Zb, Ze = 0, kg = ba.length; Ze < kg; ++Ze) if (Zb = ba[Ze], jc && ("tile-pixels" == Wa.a && (Wa.wk(da), 
                    Wa.kj(ma.A())), Zb.getGeometry().transform(Wa, q)), !ya || ub(ya, Zb.getGeometry().A())) {
                        var Vd = void 0, He = Zb.lb();
                        He ? Vd = He.call(Zb, T) : (He = n.lb()) && (Vd = He(Zb, T));
                        if (Vd) {
                            He = Za;
                            var di = ja;
                            if (Vd) {
                                var dh = !1;
                                if (Array.isArray(Vd)) for (var eh = 0, mg = Vd.length; eh < mg; ++eh) dh = Fm(di, Zb, Vd[eh], He, this.qj, this) || dh; else dh = Fm(di, Zb, Vd, He, this.qj, this);
                                Zb = dh;
                            } else Zb = !1;
                            this.C = this.C || Zb;
                            w.Je = w.Je || Zb;
                        }
                    }
                    Am(ja);
                    for (var Ff in ja.b) ;
                    da = m.ya.toString();
                    ya = ja;
                    ma.j[x(n) + "," + da] = ya;
                }
            }
            w.Gf = r;
            w.yh = u;
        }
        if (this.context) {
            w = b;
            n = this.a;
            q = Mm(m, n);
            r = n.f;
            if ((p = Km[n.l]) && q.zh !== r) for (q.zh = r, z = m.j, T = z[0], q = w.pixelRatio, 
            Ff = n.aa(), A = Ff.gb(w.viewState.projection), r = A.Va(T), u = m.getContext(n), 
            w = Ff.de(T, q, w.viewState.projection), u.canvas.width = w[0], u.canvas.height = w[1], 
            w = A.La(z), z = 0, A = m.a.length; z < A; ++z) T = m.getTile(m.a[z]), 3 != T.getState() && (Ff = q / r, 
            E = bd(this.$), hd(E, Ff, -Ff), id(E, -w[0], -w[3]), Nm(T, n, m.ya.toString()).Pa(u, E, 0, {}, p));
            Sl.prototype.cg.apply(this, arguments);
        }
    };
    k.va = function(a, b, c, d, e) {
        var f = b.viewState.resolution, g = b.viewState.rotation;
        c = void 0 == c ? 0 : c;
        var h = this.a, l = {}, m = this.g;
        b = h.aa().gb(b.viewState.projection);
        var n;
        var p = 0;
        for (n = m.length; p < n; ++p) {
            var q = m[p];
            var r = q.j;
            r = b.La(r, this.P);
            var u = Ta(r, c * f, u);
            if (Xa(u, a)) {
                r = 0;
                for (var w = q.a.length; r < w; ++r) {
                    var z = q.getTile(q.a[r]);
                    if (3 != z.getState()) {
                        z = Nm(z, h, q.ya.toString());
                        var A = A || z.va(a, f, g, c, {}, function(a) {
                            var b = x(a).toString();
                            if (!(b in l)) return l[b] = !0, d.call(e, a, h);
                        }, null);
                    }
                }
            }
        }
        return A;
    };
    k.pj = function() {
        var a = this.a;
        a.Ma() && void 0 !== this.D && a.changed();
    };
    k.qj = function() {
        sl(this);
    };
    k.zf = function(a, b, c) {
        var d = this.a, e = d.C ? {} : null, f = d.aa(), g = d.l, h = Lm[g], l = b.pixelRatio, m = b.viewState.rotation, n = b.size;
        if (m) {
            var p = Math.round(l * n[0] / 2);
            var q = Math.round(l * n[1] / 2);
            bf(a, -m, p, q);
        }
        e && this.L.clear();
        l = this.g;
        f = f.gb(b.viewState.projection);
        n = [];
        for (var r = [], u = l.length - 1; 0 <= u; --u) {
            var w = l[u];
            if (5 != w.getState()) for (var z = w.ya, A = f.La(z)[0] - f.La(w.j)[0], E = void 0, T = 0, Ja = w.a.length; T < Ja; ++T) {
                var ua = w.getTile(w.a[T]);
                if (3 != ua.getState()) {
                    var ma = Nm(ua, d, z.toString()), da;
                    if (!(da = "vector" == g)) a: {
                        da = void 0;
                        for (da in ma.b) for (var ja = ma.b[da], ya = 0, Wa = h.length; ya < Wa; ++ya) if (h[ya] in ja) {
                            da = !0;
                            break a;
                        }
                        da = !1;
                    }
                    if (da) {
                        E || (E = Il(this, b, A));
                        ua = ua.ya[0];
                        da = Bm(ma, E);
                        a.save();
                        a.globalAlpha = c.opacity;
                        ja = 0;
                        for (ya = n.length; ja < ya; ++ja) Wa = n[ja], ua < r[ja] && (a.beginPath(), a.moveTo(da[0], da[1]), 
                        a.lineTo(da[2], da[3]), a.lineTo(da[4], da[5]), a.lineTo(da[6], da[7]), a.moveTo(Wa[6], Wa[7]), 
                        a.lineTo(Wa[4], Wa[5]), a.lineTo(Wa[2], Wa[3]), a.lineTo(Wa[0], Wa[1]), a.clip());
                        ma.Pa(a, E, m, {}, h, e);
                        a.restore();
                        n.push(da);
                        r.push(ua);
                    }
                }
            }
        }
        if (e) for (d = a, g = Object.keys(e).map(Number).sort(Da), h = {}, l = 0, f = g.length; l < f; ++l) for (n = e[g[l].toString()], 
        r = 0, u = n.length; r < u; ) w = n[r++], z = n[r++], w.Pa(d, z, m, h);
        m && bf(a, m, p, q);
        Sl.prototype.zf.apply(this, arguments);
    };
    Uk("MAP_RENDERER", Ql);
    Vk([ Kl, Sl, Im, Jm ]);
    function M(a) {
        a = Ab({}, a);
        delete a.renderer;
        a.controls || (a.controls = fl());
        a.interactions || (a.interactions = Uj());
        L.call(this, a);
    }
    v(M, L);
    function Om(a) {
        a = a ? a : {};
        this.c = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "⤢";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "×";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
        b = document.createElement("button");
        b.className = this.c + "-" + Pm();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        y(b, "click", this.C, this);
        c = document.createElement("div");
        c.className = this.c + " ol-unselectable ol-control " + (Qm() ? "" : "ol-unsupported");
        c.appendChild(b);
        Zk.call(this, {
            element: c,
            target: a.target
        });
        this.s = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source;
    }
    v(Om, Zk);
    Om.prototype.C = function(a) {
        a.preventDefault();
        Qm() && (a = this.a) && (Pm() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.Zb(), 
        this.s ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : Rm(a) : Rm(a)));
    };
    Om.prototype.u = function() {
        var a = this.element.firstElementChild, b = this.a;
        Pm() ? (a.className = this.c + "-true", me(this.o, this.l)) : (a.className = this.c + "-false", 
        me(this.l, this.o));
        b && b.Sc();
    };
    Om.prototype.setMap = function(a) {
        Zk.prototype.setMap.call(this, a);
        a && this.qa.push(y(document, Sm(), this.u, this));
    };
    function Qm() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled);
    }
    function Pm() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }
    function Rm(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
    }
    var Sm = function() {
        var a;
        return function() {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange");
            }
            return a;
        };
    }();
    function Tm(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        Zk.call(this, {
            element: b,
            render: a.render ? a.render : Um,
            target: a.target
        });
        y(this, Xb(Vm), this.po, this);
        a.coordinateFormat && this.jk(a.coordinateFormat);
        a.projection && this.Ni(a.projection);
        this.u = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.o = b.innerHTML;
        this.l = this.j = this.c = null;
    }
    v(Tm, Zk);
    function Um(a) {
        a = a.frameState;
        a ? this.c != a.viewState.projection && (this.c = a.viewState.projection, this.j = null) : this.c = null;
        Wm(this, this.l);
    }
    k = Tm.prototype;
    k.po = function() {
        this.j = null;
    };
    k.ii = function() {
        return this.get(Xm);
    };
    k.Mi = function() {
        return this.get(Vm);
    };
    k.Tm = function(a) {
        this.l = this.a.xd(a);
        Wm(this, this.l);
    };
    k.Um = function() {
        Wm(this, null);
        this.l = null;
    };
    k.setMap = function(a) {
        Zk.prototype.setMap.call(this, a);
        a && (a = a.a, this.qa.push(y(a, "mousemove", this.Tm, this), y(a, "mouseout", this.Um, this)));
    };
    k.jk = function(a) {
        this.set(Xm, a);
    };
    k.Ni = function(a) {
        this.set(Vm, Lc(a));
    };
    function Wm(a, b) {
        var c = a.u;
        if (b && a.c) {
            if (!a.j) {
                var d = a.Mi();
                a.j = d ? Mc(a.c, d) : Wc;
            }
            if (b = a.a.Ta(b)) a.j(b, b), c = (c = a.ii()) ? c(b) : b.toString();
        }
        a.o && c == a.o || (a.element.innerHTML = c, a.o = c);
    }
    var Vm = "projection", Xm = "coordinateFormat";
    function Ym(a) {
        Vb.call(this);
        this.id = a.id;
        this.insertFirst = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.stopEvent = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.element = document.createElement("DIV");
        this.element.className = void 0 !== a.className ? a.className : "ol-overlay-container ol-selectable";
        this.element.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.autoPanAnimation = a.autoPanAnimation || {};
        this.autoPanMargin = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {
            He: "",
            Ze: "",
            Hf: "",
            Of: "",
            visible: !0
        };
        this.c = null;
        y(this, Xb(Zm), this.Jm, this);
        y(this, Xb($m), this.Rm, this);
        y(this, Xb(an), this.Vm, this);
        y(this, Xb(bn), this.Ym, this);
        y(this, Xb(cn), this.Zm, this);
        void 0 !== a.element && this.kk(a.element);
        this.qk(void 0 !== a.offset ? a.offset : [ 0, 0 ]);
        this.tk(void 0 !== a.positioning ? a.positioning : "top-left");
        void 0 !== a.position && this.ef(a.position);
    }
    v(Ym, Vb);
    k = Ym.prototype;
    k.Xd = function() {
        return this.get(Zm);
    };
    k.ao = function() {
        return this.id;
    };
    k.df = function() {
        return this.get($m);
    };
    k.pi = function() {
        return this.get(an);
    };
    k.Ji = function() {
        return this.get(bn);
    };
    k.ri = function() {
        return this.get(cn);
    };
    k.Jm = function() {
        for (var a = this.element; a.lastChild; ) a.removeChild(a.lastChild);
        (a = this.Xd()) && this.element.appendChild(a);
    };
    k.Rm = function() {
        this.c && (ne(this.element), Fb(this.c), this.c = null);
        var a = this.df();
        a && (this.c = y(a, "postrender", this.render, this), dn(this), a = this.stopEvent ? a.u : a.s, 
        this.insertFirst ? a.insertBefore(this.element, a.childNodes[0] || null) : a.appendChild(this.element));
    };
    k.render = function() {
        dn(this);
    };
    k.Vm = function() {
        dn(this);
    };
    k.Ym = function() {
        dn(this);
        if (this.get(bn) && this.autoPan) {
            var a = this.df();
            if (a && a.Zb()) {
                var b = en(a.Zb(), a.ib()), c = this.Xd(), d = c.offsetWidth, e = getComputedStyle(c);
                d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
                e = c.offsetHeight;
                var f = getComputedStyle(c);
                e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
                var g = en(c, [ d, e ]);
                c = this.autoPanMargin;
                $a(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], 
                b = [ 0, 0 ], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c), 
                0 === b[0] && 0 === b[1]) || (c = a.T().getCenter(), c = a.Ja(c), b = [ c[0] + b[0], c[1] + b[1] ], 
                a.T().animate({
                    center: a.Ta(b),
                    duration: this.autoPanAnimation.duration,
                    easing: this.autoPanAnimation.easing
                }));
            }
        }
    };
    k.Zm = function() {
        dn(this);
    };
    k.kk = function(a) {
        this.set(Zm, a);
    };
    k.setMap = function(a) {
        this.set($m, a);
    };
    k.qk = function(a) {
        this.set(an, a);
    };
    k.ef = function(a) {
        this.set(bn, a);
    };
    function en(a, b) {
        var c = a.getBoundingClientRect();
        a = c.left + window.pageXOffset;
        c = c.top + window.pageYOffset;
        return [ a, c, a + b[0], c + b[1] ];
    }
    k.tk = function(a) {
        this.set(cn, a);
    };
    k.setVisible = function(a) {
        this.a.visible !== a && (this.element.style.display = a ? "" : "none", this.a.visible = a);
    };
    function dn(a) {
        var b = a.df(), c = a.Ji();
        if (b && b.c && c) {
            c = b.Ja(c);
            var d = b.ib();
            b = a.element.style;
            var e = a.pi(), f = a.ri();
            a.setVisible(!0);
            var g = e[0];
            e = e[1];
            if ("bottom-right" == f || "center-right" == f || "top-right" == f) "" !== a.a.Ze && (a.a.Ze = b.left = ""), 
            g = Math.round(d[0] - c[0] - g) + "px", a.a.Hf != g && (a.a.Hf = b.right = g); else {
                "" !== a.a.Hf && (a.a.Hf = b.right = "");
                if ("bottom-center" == f || "center-center" == f || "top-center" == f) g -= a.element.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.a.Ze != g && (a.a.Ze = b.left = g);
            }
            if ("bottom-left" == f || "bottom-center" == f || "bottom-right" == f) "" !== a.a.Of && (a.a.Of = b.top = ""), 
            c = Math.round(d[1] - c[1] - e) + "px", a.a.He != c && (a.a.He = b.bottom = c); else {
                "" !== a.a.He && (a.a.He = b.bottom = "");
                if ("center-left" == f || "center-center" == f || "center-right" == f) e -= a.element.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.a.Of != c && (a.a.Of = b.top = c);
            }
        } else a.setVisible(!1);
    }
    var Zm = "element", $m = "map", an = "offset", bn = "position", cn = "positioning";
    function fn(a) {
        function b(a) {
            a = h.Yd(a);
            l.a.T().setCenter(a);
            window.removeEventListener("mousemove", c);
            window.removeEventListener("mouseup", b);
        }
        function c(a) {
            a = h.Yd({
                clientX: a.clientX - n.offsetWidth / 2,
                clientY: a.clientY + n.offsetHeight / 2
            });
            m.ef(a);
        }
        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var d = void 0 !== a.className ? a.className : "ol-overviewmap", e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", f = void 0 !== a.collapseLabel ? a.collapseLabel : "«";
        "string" === typeof f ? (this.u = document.createElement("span"), this.u.textContent = f) : this.u = f;
        f = void 0 !== a.label ? a.label : "»";
        "string" === typeof f ? (this.s = document.createElement("span"), this.s.textContent = f) : this.s = f;
        var g = this.l && !this.j ? this.u : this.s;
        f = document.createElement("button");
        f.setAttribute("type", "button");
        f.title = e;
        f.appendChild(g);
        y(f, "click", this.so, this);
        this.C = document.createElement("DIV");
        this.C.className = "ol-overviewmap-map";
        var h = this.c = new L({
            controls: new Xh(),
            interactions: new Xh(),
            view: a.view
        });
        a.layers && a.layers.forEach(function(a) {
            h.Fe(a);
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.o = new Ym({
            position: [ 0, 0 ],
            positioning: "bottom-left",
            element: e
        });
        this.c.Ge(this.o);
        e = document.createElement("div");
        e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(this.C);
        e.appendChild(f);
        Zk.call(this, {
            element: e,
            render: a.render ? a.render : gn,
            target: a.target
        });
        var l = this, m = this.o, n = this.o.Xd();
        n.addEventListener("mousedown", function() {
            window.addEventListener("mousemove", c);
            window.addEventListener("mouseup", b);
        });
    }
    v(fn, Zk);
    k = fn.prototype;
    k.setMap = function(a) {
        var b = this.a;
        a !== b && (b && ((b = b.T()) && Lb(b, Xb("rotation"), this.Ye, this), this.c.Ed(null)), 
        Zk.prototype.setMap.call(this, a), a && (this.c.Ed(this.C), this.qa.push(y(a, "propertychange", this.Sm, this)), 
        0 === this.c.Nc().pc() && this.c.Jf(a.lc()), a = a.T())) && (y(a, Xb("rotation"), this.Ye, this), 
        Nk(a) && (this.c.Sc(), hn(this)));
    };
    k.Sm = function(a) {
        "view" === a.key && ((a = a.oldValue) && Lb(a, Xb("rotation"), this.Ye, this), a = this.a.T(), 
        y(a, Xb("rotation"), this.Ye, this));
    };
    k.Ye = function() {
        this.c.T().je(this.a.T().Ra());
    };
    function gn() {
        var a = this.a, b = this.c;
        if (a.c && b.c) {
            var c = a.ib();
            a = a.T().Bc(c);
            var d = b.ib();
            c = b.T().Bc(d);
            var e = b.Ja(mb(a)), f = b.Ja(kb(a));
            b = Math.abs(e[0] - f[0]);
            e = Math.abs(e[1] - f[1]);
            f = d[0];
            d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? hn(this) : $a(c, a) || (a = this.c, 
            c = this.a.T(), a.T().setCenter(c.getCenter()));
        }
        jn(this);
    }
    function hn(a) {
        var b = a.a;
        a = a.c;
        var c = b.ib();
        b = b.T().Bc(c);
        a = a.T();
        wb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.eg(b);
    }
    function jn(a) {
        var b = a.a, c = a.c;
        if (b.c && c.c) {
            var d = b.ib(), e = b.T(), f = c.T();
            c = e.Ra();
            b = a.o;
            var g = a.o.Xd(), h = e.Bc(d);
            d = f.Ga();
            e = jb(h);
            f = lb(h);
            if (a = a.a.T().getCenter()) {
                var l = [ e[0] - a[0], e[1] - a[1] ];
                Ei(l, c);
                yi(l, a);
            }
            b.ef(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px", g.style.height = Math.abs((f[1] - e[1]) / d) + "px");
        }
    }
    k.so = function(a) {
        a.preventDefault();
        kn(this);
    };
    function kn(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? me(a.u, a.s) : me(a.s, a.u);
        a.j = !a.j;
        var b = a.c;
        a.j || b.c || (b.Sc(), hn(a), Kb(b, "postrender", function() {
            jn(this);
        }, a));
    }
    k.ro = function() {
        return this.l;
    };
    k.uo = function(a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), 
        !a && this.j && kn(this));
    };
    k.to = function(a) {
        this.l && this.j !== a && kn(this);
    };
    k.qo = function() {
        return this.j;
    };
    k.nm = function() {
        return this.c;
    };
    function ln(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.c = document.createElement("DIV");
        this.c.className = b + " ol-unselectable";
        this.c.appendChild(this.l);
        this.u = null;
        this.o = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.B = void 0;
        this.s = "";
        Zk.call(this, {
            element: this.c,
            render: a.render ? a.render : mn,
            target: a.target
        });
        y(this, Xb(nn), this.R, this);
        this.P(a.units || "metric");
    }
    v(ln, Zk);
    var on = [ 1, 2, 5 ];
    ln.prototype.C = function() {
        return this.get(nn);
    };
    function mn(a) {
        (a = a.frameState) ? this.u = a.viewState : this.u = null;
        pn(this);
    }
    ln.prototype.R = function() {
        pn(this);
    };
    ln.prototype.P = function(a) {
        this.set(nn, a);
    };
    function pn(a) {
        var b = a.u;
        if (b) {
            var c = b.center, d = b.projection, e = a.C();
            b = Kc(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
            "degrees" != e && (b *= d.Jc());
            var f = a.o * b;
            c = "";
            "degrees" == e ? (c = rc.degrees, "degrees" == d.a ? f *= c : b /= c, f < c / 60 ? (c = "″", 
            b *= 3600) : f < c ? (c = "′", b *= 60) : c = "°") : "imperial" == e ? .9144 > f ? (c = "in", 
            b /= .0254) : 1609.344 > f ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : "nautical" == e ? (b /= 1852, 
            c = "nm") : "metric" == e ? .001 > f ? (c = "μm", b *= 1e6) : 1 > f ? (c = "mm", 
            b *= 1e3) : 1e3 > f ? c = "m" : (c = "km", b /= 1e3) : "us" == e ? .9144 > f ? (c = "in", 
            b *= 39.37) : 1609.344 > f ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : Pa(!1, 33);
            for (e = 3 * Math.floor(Math.log(a.o * b) / Math.log(10)); ;) {
                f = on[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.c.style.display = "none";
                    a.j = !1;
                    return;
                }
                if (d >= a.o) break;
                ++e;
            }
            b = f + " " + c;
            a.s != b && (a.l.innerHTML = b, a.s = b);
            a.B != d && (a.l.style.width = d + "px", a.B = d);
            a.j || (a.c.style.display = "", a.j = !0);
        } else a.j && (a.c.style.display = "none", a.j = !1);
    }
    var nn = "units";
    function qn(a) {
        a = a ? a : {};
        this.c = void 0;
        this.j = rn;
        this.s = this.o = 0;
        this.P = null;
        this.W = !1;
        this.R = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider", c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new rk(d);
        y(this.l, "pointerdown", this.Im, this);
        y(this.l, "pointermove", this.Gm, this);
        y(this.l, "pointerup", this.Hm, this);
        y(d, "click", this.Fm, this);
        y(c, "click", Qb);
        Zk.call(this, {
            element: d,
            render: a.render ? a.render : sn
        });
    }
    v(qn, Zk);
    qn.prototype.fa = function() {
        Ob(this.l);
        Zk.prototype.fa.call(this);
    };
    var rn = 0;
    k = qn.prototype;
    k.setMap = function(a) {
        Zk.prototype.setMap.call(this, a);
        a && a.render();
    };
    function sn(a) {
        if (a.frameState) {
            if (!this.W) {
                var b = this.element, c = b.offsetWidth, d = b.offsetHeight, e = b.firstElementChild, f = getComputedStyle(e);
                b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
                e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.P = [ b, e ];
                c > d ? (this.j = 1, this.s = c - b) : (this.j = rn, this.o = d - e);
                this.W = !0;
            }
            a = a.frameState.viewState.resolution;
            a !== this.c && (this.c = a, tn(this, a));
        }
    }
    k.Fm = function(a) {
        var b = this.a.T();
        a = un(this, cc(1 === this.j ? (a.offsetX - this.P[0] / 2) / this.s : (a.offsetY - this.P[1] / 2) / this.o, 0, 1));
        b.animate({
            resolution: b.constrainResolution(a),
            duration: this.R,
            easing: rh
        });
    };
    k.Im = function(a) {
        this.u || a.b.target !== this.element.firstElementChild || (dj(this.a.T(), 1, 1), 
        this.C = a.clientX, this.B = a.clientY, this.u = !0);
    };
    k.Gm = function(a) {
        if (this.u) {
            var b = this.element.firstElementChild;
            this.c = un(this, cc(1 === this.j ? (a.clientX - this.C + parseInt(b.style.left, 10)) / this.s : (a.clientY - this.B + parseInt(b.style.top, 10)) / this.o, 0, 1));
            this.a.T().kd(this.c);
            tn(this, this.c);
            this.C = a.clientX;
            this.B = a.clientY;
        }
    };
    k.Hm = function() {
        if (this.u) {
            var a = this.a.T();
            dj(a, 1, -1);
            a.animate({
                resolution: a.constrainResolution(this.c),
                duration: this.R,
                easing: rh
            });
            this.u = !1;
            this.B = this.C = void 0;
        }
    };
    function tn(a, b) {
        b = 1 - Rk(a.a.T())(b);
        var c = a.element.firstElementChild;
        1 == a.j ? c.style.left = a.s * b + "px" : c.style.top = a.o * b + "px";
    }
    function un(a, b) {
        return Qk(a.a.T())(1 - b);
    }
    function vn(a) {
        a = a ? a : {};
        this.extent = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent", c = void 0 !== a.label ? a.label : "E", d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent", e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        y(e, "click", this.c, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        Zk.call(this, {
            element: c,
            target: a.target
        });
    }
    v(vn, Zk);
    vn.prototype.c = function(a) {
        a.preventDefault();
        a = this.a.T();
        var b = this.extent ? this.extent : a.j.A();
        a.eg(b);
    };
    function wn(a) {
        Vb.call(this);
        a = a ? a : {};
        this.a = null;
        y(this, Xb(xn), this.On, this);
        this.Dg(void 0 !== a.tracking ? a.tracking : !1);
    }
    v(wn, Vb);
    k = wn.prototype;
    k.fa = function() {
        this.Dg(!1);
        Vb.prototype.fa.call(this);
    };
    k.yq = function(a) {
        if (null !== a.alpha) {
            var b = hc(a.alpha);
            this.set(yn, b);
            "boolean" === typeof a.absolute && a.absolute ? this.set(zn, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(zn, hc(a.webkitCompassHeading));
        }
        null !== a.beta && this.set(An, hc(a.beta));
        null !== a.gamma && this.set(Bn, hc(a.gamma));
        this.changed();
    };
    k.Mn = function() {
        return this.get(yn);
    };
    k.Rl = function() {
        return this.get(An);
    };
    k.Wl = function() {
        return this.get(Bn);
    };
    k.Nn = function() {
        return this.get(zn);
    };
    k.Fi = function() {
        return this.get(xn);
    };
    k.On = function() {
        if (Ae) {
            var a = this.Fi();
            a && !this.a ? this.a = y(window, "deviceorientation", this.yq, this) : a || null === this.a || (Fb(this.a), 
            this.a = null);
        }
    };
    k.Dg = function(a) {
        this.set(xn, a);
    };
    var yn = "alpha", An = "beta", Bn = "gamma", zn = "heading", xn = "tracking";
    var Cn = document.implementation.createDocument("", "", null);
    function Dn(a, b) {
        return Cn.createElementNS(a, b);
    }
    function En(a, b) {
        return Fn(a, b, []).join("");
    }
    function Fn(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling) Fn(a, b, c);
        return c;
    }
    function Gn(a) {
        return a instanceof Document;
    }
    function Hn(a) {
        return a instanceof Node;
    }
    function In(a) {
        return new DOMParser().parseFromString(a, "application/xml");
    }
    function Jn(a, b) {
        return function(c, d) {
            c = a.call(b, c, d);
            void 0 !== c && Ga(d[d.length - 1], c);
        };
    }
    function Kn(a, b) {
        return function(c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && d[d.length - 1].push(c);
        };
    }
    function Ln(a, b) {
        return function(c, d) {
            c = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== c && (d[d.length - 1] = c);
        };
    }
    function Mn(a) {
        return function(b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                c = c[c.length - 1];
                b = b.localName;
                var e;
                b in c ? e = c[b] : e = c[b] = [];
                e.push(d);
            }
        };
    }
    function N(a, b) {
        return function(c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e);
        };
    }
    function O(a, b) {
        return function(c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c);
        };
    }
    function Nn(a) {
        var b, c;
        return function(d, e, f) {
            if (void 0 === b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = On(d.localName);
            }
            Pn(b, c, e, f);
        };
    }
    function On(a, b) {
        return function(c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return Dn(e, d);
        };
    }
    var Qn = On();
    function Rn(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e) d[e] = a[b[e]];
        return d;
    }
    function P(a, b, c) {
        c = void 0 !== c ? c : {};
        var d;
        var e = 0;
        for (d = a.length; e < d; ++e) c[a[e]] = b;
        return c;
    }
    function Sn(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName], void 0 !== e && e.call(d, b, c));
        }
    }
    function Q(a, b, c, d, e) {
        d.push(a);
        Sn(b, c, d, e);
        return d.pop();
    }
    function Pn(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m) h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), 
        void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d));
    }
    function Tn(a, b, c, d, e, f, g) {
        e.push(a);
        Pn(b, c, d, e, f, g);
        e.pop();
    }
    function Un(a, b, c, d) {
        return function(e, f, g) {
            var h = new XMLHttpRequest();
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.getType() && (h.responseType = "arraybuffer");
            h.onload = function() {
                if (!h.status || 200 <= h.status && 300 > h.status) {
                    var a = b.getType();
                    if ("json" == a || "text" == a) var e = h.responseText; else "xml" == a ? (e = h.responseXML) || (e = In(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Sa(e, {
                        featureProjection: g
                    }), b.tb(e), b.mg()) : d.call(this);
                } else d.call(this);
            }.bind(this);
            h.onerror = function() {
                d.call(this);
            }.bind(this);
            h.send();
        };
    }
    function Vn(a, b) {
        return Un(a, b, function(a) {
            this.Uc(a);
        }, Ba);
    }
    function Wn() {
        this.i = this.defaultDataProjection = null;
    }
    function Xn(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.tb(b),
            featureProjection: c.featureProjection
        });
        return Yn(a, d);
    }
    function Yn(a, b) {
        return Ab({
            dataProjection: a.defaultDataProjection,
            featureProjection: a.i
        }, b);
    }
    Wn.prototype.mg = function() {
        return null;
    };
    function Zn(a, b, c) {
        var d = c ? Lc(c.featureProjection) : null, e = c ? Lc(c.dataProjection) : null, f;
        d && e && !Uc(d, e) ? a instanceof ld ? f = (b ? a.clone() : a).transform(b ? d : e, b ? e : d) : f = Yc(a, e, d) : f = a;
        if (b && c && void 0 !== c.decimals) {
            var g = Math.pow(10, c.decimals);
            f === a && (f = f.clone());
            f.Vc(function(a) {
                for (var b = 0, c = a.length; b < c; ++b) a[b] = Math.round(a[b] * g) / g;
                return a;
            });
        }
        return f;
    }
    function $n() {
        Wn.call(this);
    }
    v($n, Wn);
    function ao(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null;
    }
    k = $n.prototype;
    k.getType = function() {
        return "json";
    };
    k.bc = function(a, b) {
        return this.hd(ao(a), Xn(this, a, b));
    };
    k.Sa = function(a, b) {
        return this.hh(ao(a), Xn(this, a, b));
    };
    k.jd = function(a, b) {
        return this.lh(ao(a), Xn(this, a, b));
    };
    k.tb = function(a) {
        return this.oh(ao(a));
    };
    k.Nd = function(a, b) {
        return JSON.stringify(this.pd(a, b));
    };
    k.dc = function(a, b) {
        return JSON.stringify(this.xe(a, b));
    };
    k.qd = function(a, b) {
        return JSON.stringify(this.ze(a, b));
    };
    function bo(a) {
        a = a ? a : {};
        Wn.call(this);
        this.b = a.geometryName;
    }
    v(bo, $n);
    function co(a, b) {
        if (!a) return null;
        if ("number" === typeof a.x && "number" === typeof a.y) var c = "Point"; else if (a.points) c = "MultiPoint"; else if (a.paths) c = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var d = a.rings, e = eo(a), f = [], g = [];
            c = [];
            var h;
            var l = 0;
            for (h = d.length; l < h; ++l) f.length = 0, wd(f, 0, d[l], e.length), Sd(f, 0, f.length, e.length) ? g.push([ d[l] ]) : c.push(d[l]);
            for (;c.length; ) {
                d = c.shift();
                e = !1;
                for (l = g.length - 1; 0 <= l; l--) if ($a(new Pd(g[l][0]).A(), new Pd(d).A())) {
                    g[l].push(d);
                    e = !0;
                    break;
                }
                e || g.push([ d.reverse() ]);
            }
            a = Ab({}, a);
            1 === g.length ? (c = "Polygon", a.rings = g[0]) : (c = "MultiPolygon", a.rings = g);
        }
        return Zn((0, fo[c])(a), !1, b);
    }
    function eo(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b;
    }
    function go(a) {
        a = a.ga;
        return {
            hasZ: "XYZ" === a || "XYZM" === a,
            hasM: "XYM" === a || "XYZM" === a
        };
    }
    var fo = {
        Point: function(a) {
            return void 0 !== a.m && void 0 !== a.z ? new C([ a.x, a.y, a.z, a.m ], "XYZM") : void 0 !== a.z ? new C([ a.x, a.y, a.z ], "XYZ") : void 0 !== a.m ? new C([ a.x, a.y, a.m ], "XYM") : new C([ a.x, a.y ]);
        },
        LineString: function(a) {
            return new B(a.paths[0], eo(a));
        },
        Polygon: function(a) {
            return new D(a.rings, eo(a));
        },
        MultiPoint: function(a) {
            return new G(a.points, eo(a));
        },
        MultiLineString: function(a) {
            return new F(a.paths, eo(a));
        },
        MultiPolygon: function(a) {
            return new H(a.rings, eo(a));
        }
    }, ho = {
        Point: function(a) {
            var b = a.S(), c;
            a = a.ga;
            "XYZ" === a ? c = {
                x: b[0],
                y: b[1],
                z: b[2]
            } : "XYM" === a ? c = {
                x: b[0],
                y: b[1],
                m: b[2]
            } : "XYZM" === a ? c = {
                x: b[0],
                y: b[1],
                z: b[2],
                m: b[3]
            } : "XY" === a ? c = {
                x: b[0],
                y: b[1]
            } : Pa(!1, 34);
            return c;
        },
        LineString: function(a) {
            var b = go(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                paths: [ a.S() ]
            };
        },
        Polygon: function(a) {
            var b = go(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                rings: a.S(!1)
            };
        },
        MultiPoint: function(a) {
            var b = go(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                points: a.S()
            };
        },
        MultiLineString: function(a) {
            var b = go(a);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                paths: a.S()
            };
        },
        MultiPolygon: function(a) {
            var b = go(a);
            a = a.S(!1);
            for (var c = [], d = 0; d < a.length; d++) for (var e = a[d].length - 1; 0 <= e; e--) c.push(a[d][e]);
            return {
                hasZ: b.hasZ,
                hasM: b.hasM,
                rings: c
            };
        }
    };
    k = bo.prototype;
    k.hd = function(a, b) {
        var c = co(a.geometry, b), d = new xf();
        this.b && d.Rc(this.b);
        d.setGeometry(c);
        b && b.zg && a.attributes[b.zg] && d.tc(a.attributes[b.zg]);
        a.attributes && d.H(a.attributes);
        return d;
    };
    k.hh = function(a, b) {
        b = b ? b : {};
        if (a.features) {
            var c = [], d = a.features, e;
            b.zg = a.objectIdFieldName;
            a = 0;
            for (e = d.length; a < e; ++a) c.push(this.hd(d[a], b));
            return c;
        }
        return [ this.hd(a, b) ];
    };
    k.lh = function(a, b) {
        return co(a, b);
    };
    k.oh = function(a) {
        return a.spatialReference && a.spatialReference.wkid ? Lc("EPSG:" + a.spatialReference.wkid) : null;
    };
    function io(a, b) {
        return (0, ho[a.getType()])(Zn(a, !0, b), b);
    }
    k.ze = function(a, b) {
        return io(a, Yn(this, b));
    };
    k.pd = function(a, b) {
        b = Yn(this, b);
        var c = {}, d = a.getGeometry();
        d && (c.geometry = io(d, b), b && b.featureProjection && (c.geometry.spatialReference = {
            wkid: Lc(b.featureProjection).wb.split(":").pop()
        }));
        b = a.K();
        delete b[a.a];
        c.attributes = Db(b) ? {} : b;
        return c;
    };
    k.xe = function(a, b) {
        b = Yn(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e) c.push(this.pd(a[e], b));
        return {
            features: c
        };
    };
    function jo(a) {
        this.wc = a;
    }
    function ko(a, b) {
        this.wc = a;
        this.b = Array.prototype.slice.call(arguments, 1);
        Pa(2 <= this.b.length, 57);
    }
    v(ko, jo);
    function lo(a) {
        var b = [ "And" ].concat(Array.prototype.slice.call(arguments));
        ko.apply(this, b);
    }
    v(lo, ko);
    function mo(a, b, c) {
        this.wc = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c;
    }
    v(mo, jo);
    function no(a, b, c, d) {
        this.wc = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d;
    }
    v(no, jo);
    function oo(a, b, c) {
        no.call(this, "Contains", a, b, c);
    }
    v(oo, no);
    function po(a, b) {
        this.wc = a;
        this.b = b;
    }
    v(po, jo);
    function qo(a, b, c) {
        po.call(this, "During", a);
        this.a = b;
        this.f = c;
    }
    v(qo, po);
    function ro(a, b, c, d) {
        po.call(this, a, b);
        this.f = c;
        this.a = d;
    }
    v(ro, po);
    function so(a, b, c) {
        ro.call(this, "PropertyIsEqualTo", a, b, c);
    }
    v(so, ro);
    function to(a, b) {
        ro.call(this, "PropertyIsGreaterThan", a, b);
    }
    v(to, ro);
    function uo(a, b) {
        ro.call(this, "PropertyIsGreaterThanOrEqualTo", a, b);
    }
    v(uo, ro);
    function vo(a, b, c) {
        no.call(this, "Intersects", a, b, c);
    }
    v(vo, no);
    function wo(a, b, c) {
        po.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.f = c;
    }
    v(wo, po);
    function xo(a, b, c, d, e, f) {
        po.call(this, "PropertyIsLike", a);
        this.c = b;
        this.g = void 0 !== c ? c : "*";
        this.i = void 0 !== d ? d : ".";
        this.f = void 0 !== e ? e : "!";
        this.a = f;
    }
    v(xo, po);
    function yo(a) {
        po.call(this, "PropertyIsNull", a);
    }
    v(yo, po);
    function zo(a, b) {
        ro.call(this, "PropertyIsLessThan", a, b);
    }
    v(zo, ro);
    function Ao(a, b) {
        ro.call(this, "PropertyIsLessThanOrEqualTo", a, b);
    }
    v(Ao, ro);
    function Bo(a) {
        this.wc = "Not";
        this.condition = a;
    }
    v(Bo, jo);
    function Co(a, b, c) {
        ro.call(this, "PropertyIsNotEqualTo", a, b, c);
    }
    v(Co, ro);
    function Do(a) {
        var b = [ "Or" ].concat(Array.prototype.slice.call(arguments));
        ko.apply(this, b);
    }
    v(Do, ko);
    function Eo(a, b, c) {
        no.call(this, "Within", a, b, c);
    }
    v(Eo, no);
    function Fo(a) {
        var b = [ null ].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(lo, b))();
    }
    function Go(a, b, c) {
        return new mo(a, b, c);
    }
    function Ho(a) {
        ld.call(this);
        this.a = a ? a : null;
        Io(this);
    }
    v(Ho, ld);
    function Jo(a) {
        var b = [], c;
        var d = 0;
        for (c = a.length; d < c; ++d) b.push(a[d].clone());
        return b;
    }
    function Ko(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c) Lb(a.a[c], "change", a.changed, a);
        }
    }
    function Io(a) {
        var b;
        if (a.a) {
            var c = 0;
            for (b = a.a.length; c < b; ++c) y(a.a[c], "change", a.changed, a);
        }
    }
    k = Ho.prototype;
    k.clone = function() {
        var a = new Ho(null);
        a.nk(this.a);
        return a;
    };
    k.Nb = function(a, b, c, d) {
        if (d < Va(this.A(), a, b)) return d;
        var e = this.a, f;
        var g = 0;
        for (f = e.length; g < f; ++g) d = e[g].Nb(a, b, c, d);
        return d;
    };
    k.cd = function(a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e) if (c[e].cd(a, b)) return !0;
        return !1;
    };
    k.Ie = function(a) {
        cb(a);
        for (var b = this.a, c = 0, d = b.length; c < d; ++c) hb(a, b[c].A());
        return a;
    };
    k.yd = function() {
        return Jo(this.a);
    };
    k.ae = function(a) {
        this.l != this.f && (Bb(this.i), this.g = 0, this.l = this.f);
        if (0 > a || 0 !== this.g && a < this.g) return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b)) return this.i[b];
        var c = [], d = this.a, e = !1, f;
        var g = 0;
        for (f = d.length; g < f; ++g) {
            var h = d[g], l = h.ae(a);
            c.push(l);
            l !== h && (e = !0);
        }
        if (e) return a = new Ho(null), Ko(a), a.a = c, Io(a), a.changed(), this.i[b] = a;
        this.g = a;
        return this;
    };
    k.getType = function() {
        return "GeometryCollection";
    };
    k.cb = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d) if (b[d].cb(a)) return !0;
        return !1;
    };
    k.rotate = function(a, b) {
        for (var c = this.a, d = 0, e = c.length; d < e; ++d) c[d].rotate(a, b);
        this.changed();
    };
    k.scale = function(a, b, c) {
        c || (c = rb(this.A()));
        for (var d = this.a, e = 0, f = d.length; e < f; ++e) d[e].scale(a, b, c);
        this.changed();
    };
    k.nk = function(a) {
        a = Jo(a);
        Ko(this);
        this.a = a;
        Io(this);
        this.changed();
    };
    k.Vc = function(a) {
        var b = this.a, c;
        var d = 0;
        for (c = b.length; d < c; ++d) b[d].Vc(a);
        this.changed();
    };
    k.translate = function(a, b) {
        var c = this.a, d;
        var e = 0;
        for (d = c.length; e < d; ++e) c[e].translate(a, b);
        this.changed();
    };
    k.fa = function() {
        Ko(this);
        ld.prototype.fa.call(this);
    };
    function Lo(a) {
        a = a ? a : {};
        Wn.call(this);
        this.defaultDataProjection = Lc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.i = Lc(a.featureProjection));
        this.b = a.geometryName;
        this.a = a.extractGeometryName;
    }
    v(Lo, $n);
    function Mo(a, b) {
        return a ? Zn((0, No[a.type])(a), !1, b) : null;
    }
    function Oo(a, b) {
        return (0, Po[a.getType()])(Zn(a, !0, b), b);
    }
    var No = {
        Point: function(a) {
            return new C(a.coordinates);
        },
        LineString: function(a) {
            return new B(a.coordinates);
        },
        Polygon: function(a) {
            return new D(a.coordinates);
        },
        MultiPoint: function(a) {
            return new G(a.coordinates);
        },
        MultiLineString: function(a) {
            return new F(a.coordinates);
        },
        MultiPolygon: function(a) {
            return new H(a.coordinates);
        },
        GeometryCollection: function(a, b) {
            a = a.geometries.map(function(a) {
                return Mo(a, b);
            });
            return new Ho(a);
        }
    }, Po = {
        Point: function(a) {
            return {
                type: "Point",
                coordinates: a.S()
            };
        },
        LineString: function(a) {
            return {
                type: "LineString",
                coordinates: a.S()
            };
        },
        Polygon: function(a, b) {
            if (b) var c = b.rightHanded;
            return {
                type: "Polygon",
                coordinates: a.S(c)
            };
        },
        MultiPoint: function(a) {
            return {
                type: "MultiPoint",
                coordinates: a.S()
            };
        },
        MultiLineString: function(a) {
            return {
                type: "MultiLineString",
                coordinates: a.S()
            };
        },
        MultiPolygon: function(a, b) {
            if (b) var c = b.rightHanded;
            return {
                type: "MultiPolygon",
                coordinates: a.S(c)
            };
        },
        GeometryCollection: function(a, b) {
            return {
                type: "GeometryCollection",
                geometries: a.a.map(function(a) {
                    var c = Ab({}, b);
                    delete c.featureProjection;
                    return Oo(a, c);
                })
            };
        },
        Circle: function() {
            return {
                type: "GeometryCollection",
                geometries: []
            };
        }
    };
    k = Lo.prototype;
    k.hd = function(a, b) {
        a = "Feature" === a.type ? a : {
            type: "Feature",
            geometry: a
        };
        b = Mo(a.geometry, b);
        var c = new xf();
        this.b ? c.Rc(this.b) : this.a && void 0 !== a.geometry_name && c.Rc(a.geometry_name);
        c.setGeometry(b);
        void 0 !== a.id && c.tc(a.id);
        a.properties && c.H(a.properties);
        return c;
    };
    k.hh = function(a, b) {
        if ("FeatureCollection" === a.type) {
            var c = [];
            a = a.features;
            var d;
            var e = 0;
            for (d = a.length; e < d; ++e) c.push(this.hd(a[e], b));
        } else c = [ this.hd(a, b) ];
        return c;
    };
    k.lh = function(a, b) {
        return Mo(a, b);
    };
    k.oh = function(a) {
        a = a.crs;
        var b;
        a ? "name" == a.type ? b = Lc(a.properties.name) : Pa(!1, 36) : b = this.defaultDataProjection;
        return b;
    };
    k.pd = function(a, b) {
        b = Yn(this, b);
        var c = {
            type: "Feature"
        }, d = a.c;
        void 0 !== d && (c.id = d);
        (d = a.getGeometry()) ? c.geometry = Oo(d, b) : c.geometry = null;
        b = a.K();
        delete b[a.a];
        Db(b) ? c.properties = null : c.properties = b;
        return c;
    };
    k.xe = function(a, b) {
        b = Yn(this, b);
        var c = [], d;
        var e = 0;
        for (d = a.length; e < d; ++e) c.push(this.pd(a[e], b));
        return {
            type: "FeatureCollection",
            features: c
        };
    };
    k.ze = function(a, b) {
        return Oo(a, Yn(this, b));
    };
    function Qo() {
        this.f = new XMLSerializer();
        Wn.call(this);
    }
    v(Qo, Wn);
    k = Qo.prototype;
    k.getType = function() {
        return "xml";
    };
    k.bc = function(a, b) {
        return Gn(a) ? Ro(this, a, b) : Hn(a) ? this.gh(a, b) : "string" === typeof a ? (a = In(a), 
        Ro(this, a, b)) : null;
    };
    function Ro(a, b, c) {
        a = So(a, b, c);
        return 0 < a.length ? a[0] : null;
    }
    k.gh = function() {
        return null;
    };
    k.Sa = function(a, b) {
        return Gn(a) ? So(this, a, b) : Hn(a) ? this.Qc(a, b) : "string" === typeof a ? (a = In(a), 
        So(this, a, b)) : [];
    };
    function So(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && Ga(d, a.Qc(b, c));
        return d;
    }
    k.jd = function(a, b) {
        if (Gn(a)) return null;
        if (Hn(a)) return this.Zj(a, b);
        "string" === typeof a && In(a);
        return null;
    };
    k.Zj = function() {
        return null;
    };
    k.tb = function(a) {
        return Gn(a) ? this.nh(a) : Hn(a) ? this.Ef(a) : "string" === typeof a ? (a = In(a), 
        this.nh(a)) : null;
    };
    k.nh = function() {
        return this.defaultDataProjection;
    };
    k.Ef = function() {
        return this.defaultDataProjection;
    };
    k.Nd = function() {
        return this.f.serializeToString(this.Gh());
    };
    k.Gh = function() {
        return null;
    };
    k.dc = function(a, b) {
        a = this.ec(a, b);
        return this.f.serializeToString(a);
    };
    k.ec = function() {
        return null;
    };
    k.qd = function(a, b) {
        a = this.ye(a, b);
        return this.f.serializeToString(a);
    };
    k.ye = function() {
        return null;
    };
    function To(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Ln(To.prototype.ne),
            featureMembers: Ln(To.prototype.ne)
        };
        Qo.call(this);
    }
    v(To, Qo);
    var Uo = /^[\s\xa0]*$/;
    k = To.prototype;
    k.ne = function(a, b) {
        var c = a.localName, d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = Q([], this.b, a, b, this) : d = Q(null, this.b, a, b, this); else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                var l = 0;
                for (h = a.childNodes.length; l < h; ++l) {
                    var m = a.childNodes[l];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "", q = 0;
                            m = m.namespaceURI;
                            for (var r in g) {
                                if (g[r] === m) {
                                    p = r;
                                    break;
                                }
                                ++q;
                            }
                            p || (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n);
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g);
            }
            "string" === typeof g && (l = g, g = {}, g.p0 = l);
            e = {};
            f = Array.isArray(f) ? f : [ f ];
            for (var u in g) {
                n = {};
                l = 0;
                for (h = f.length; l < h; ++l) (-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Kn(this.fh, this) : Ln(this.fh, this));
                e[g[u]] = n;
            }
            "featureMember" == c ? d = Q(void 0, e, a, b) : d = Q([], e, a, b);
        }
        null === d && (d = []);
        return d;
    };
    k.Bf = function(a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        c.srsDimension = a.firstElementChild.getAttribute("srsDimension");
        if (a = Q(null, this.Kh, a, b, this)) return Zn(a, !1, c);
    };
    k.fh = function(a, b) {
        var c;
        (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var d = {}, e;
        for (a = a.firstElementChild; a; a = a.nextElementSibling) {
            var f = a.localName;
            if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) {
                var g = En(a, !1);
                Uo.test(g) && (g = void 0);
                d[f] = g;
            } else "boundedBy" !== f && (e = f), d[f] = this.Bf(a, b);
        }
        b = new xf(d);
        e && b.Rc(e);
        c && b.tc(c);
        return b;
    };
    k.dk = function(a, b) {
        if (a = this.Af(a, b)) return b = new C(null), b.Y("XYZ", a), b;
    };
    k.bk = function(a, b) {
        if (a = Q([], this.Qk, a, b, this)) return new G(a);
    };
    k.ak = function(a, b) {
        if (a = Q([], this.Pk, a, b, this)) return b = new F(null), ae(b, a), b;
    };
    k.ck = function(a, b) {
        if (a = Q([], this.Rk, a, b, this)) return b = new H(null), de(b, a), b;
    };
    k.Uj = function(a, b) {
        Sn(this.Uk, a, b, this);
    };
    k.zi = function(a, b) {
        Sn(this.Nk, a, b, this);
    };
    k.Vj = function(a, b) {
        Sn(this.Vk, a, b, this);
    };
    k.Cf = function(a, b) {
        if (a = this.Af(a, b)) return b = new B(null), b.Y("XYZ", a), b;
    };
    k.Sq = function(a, b) {
        if (a = Q(null, this.Be, a, b, this)) return a;
    };
    k.$j = function(a, b) {
        if (a = this.Af(a, b)) return b = new Pd(null), Qd(b, "XYZ", a), b;
    };
    k.Df = function(a, b) {
        if ((a = Q([ null ], this.Sf, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [ c.length ], e;
            var f = 1;
            for (e = a.length; f < e; ++f) Ga(c, a[f]), d.push(c.length);
            b.Y("XYZ", c, d);
            return b;
        }
    };
    k.Af = function(a, b) {
        return Q(null, this.Be, a, b, this);
    };
    k.Qk = {
        "http://www.opengis.net/gml": {
            pointMember: Kn(To.prototype.Uj),
            pointMembers: Kn(To.prototype.Uj)
        }
    };
    k.Pk = {
        "http://www.opengis.net/gml": {
            lineStringMember: Kn(To.prototype.zi),
            lineStringMembers: Kn(To.prototype.zi)
        }
    };
    k.Rk = {
        "http://www.opengis.net/gml": {
            polygonMember: Kn(To.prototype.Vj),
            polygonMembers: Kn(To.prototype.Vj)
        }
    };
    k.Uk = {
        "http://www.opengis.net/gml": {
            Point: Kn(To.prototype.Af)
        }
    };
    k.Nk = {
        "http://www.opengis.net/gml": {
            LineString: Kn(To.prototype.Cf)
        }
    };
    k.Vk = {
        "http://www.opengis.net/gml": {
            Polygon: Kn(To.prototype.Df)
        }
    };
    k.Ce = {
        "http://www.opengis.net/gml": {
            LinearRing: Ln(To.prototype.Sq)
        }
    };
    k.Zj = function(a, b) {
        return (a = this.Bf(a, [ Xn(this, a, b ? b : {}) ])) ? a : null;
    };
    k.Qc = function(a, b) {
        var c = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        b && Ab(c, Xn(this, a, b));
        return this.ne(a, [ c ]) || [];
    };
    k.Ef = function(a) {
        return Lc(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"));
    };
    function Vo(a) {
        a = En(a, !1);
        return Wo(a);
    }
    function Wo(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a)) return void 0 !== a[1] || !1;
    }
    function Xo(a) {
        a = En(a, !1);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1e3;
    }
    function Yo(a) {
        a = En(a, !1);
        return Zo(a);
    }
    function Zo(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a)) return parseFloat(a[1]);
    }
    function $o(a) {
        a = En(a, !1);
        return ap(a);
    }
    function ap(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a)) return parseInt(a[1], 10);
    }
    function R(a) {
        return En(a, !1).trim();
    }
    function bp(a, b) {
        cp(a, b ? "1" : "0");
    }
    function dp(a, b) {
        a.appendChild(Cn.createTextNode(b.toPrecision()));
    }
    function ep(a, b) {
        a.appendChild(Cn.createTextNode(b.toString()));
    }
    function cp(a, b) {
        a.appendChild(Cn.createTextNode(b));
    }
    function fp(a) {
        a = a ? a : {};
        To.call(this, a);
        this.o = void 0 !== a.surface ? a.surface : !1;
        this.c = void 0 !== a.curve ? a.curve : !1;
        this.g = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
        this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1;
    }
    v(fp, To);
    k = fp.prototype;
    k.Wq = function(a, b) {
        if (a = Q([], this.Ok, a, b, this)) return b = new F(null), ae(b, a), b;
    };
    k.Xq = function(a, b) {
        if (a = Q([], this.Sk, a, b, this)) return b = new H(null), de(b, a), b;
    };
    k.Yh = function(a, b) {
        Sn(this.Kk, a, b, this);
    };
    k.Ak = function(a, b) {
        Sn(this.Xk, a, b, this);
    };
    k.$q = function(a, b) {
        return Q([ null ], this.Tk, a, b, this);
    };
    k.cr = function(a, b) {
        return Q([ null ], this.Wk, a, b, this);
    };
    k.ar = function(a, b) {
        return Q([ null ], this.Sf, a, b, this);
    };
    k.Vq = function(a, b) {
        return Q([ null ], this.Be, a, b, this);
    };
    k.rn = function(a, b) {
        (a = Q(void 0, this.Ce, a, b, this)) && b[b.length - 1].push(a);
    };
    k.Dl = function(a, b) {
        (a = Q(void 0, this.Ce, a, b, this)) && (b[b.length - 1][0] = a);
    };
    k.ek = function(a, b) {
        if ((a = Q([ null ], this.Yk, a, b, this)) && a[0]) {
            b = new D(null);
            var c = a[0], d = [ c.length ], e;
            var f = 1;
            for (e = a.length; f < e; ++f) Ga(c, a[f]), d.push(c.length);
            b.Y("XYZ", c, d);
            return b;
        }
    };
    k.Xj = function(a, b) {
        if (a = Q([ null ], this.Lk, a, b, this)) return b = new B(null), b.Y("XYZ", a), 
        b;
    };
    k.Rq = function(a, b) {
        a = Q([ null ], this.Mk, a, b, this);
        return bb(a[1][0], a[1][1], a[2][0], a[2][1]);
    };
    k.Tq = function(a, b) {
        var c = En(a, !1), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
        a = [];
        for (var e; e = d.exec(c); ) a.push(parseFloat(e[1])), c = c.substr(e[0].length);
        if ("" === c) {
            b = b[0].srsName;
            c = "enu";
            b && (c = Lc(b).b);
            if ("neu" === c) for (b = 0, c = a.length; b < c; b += 3) d = a[b], a[b] = a[b + 1], 
            a[b + 1] = d;
            b = a.length;
            2 == b && a.push(0);
            if (0 !== b) return a;
        }
    };
    k.kh = function(a, b) {
        var c = En(a, !1).replace(/^\s*|\s*$/g, "");
        b = b[0];
        var d = b.srsName, e = b.srsDimension;
        b = "enu";
        d && (b = Lc(d).b);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = ap(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = ap(a.getAttribute("dimension")) : a.parentNode.getAttribute("srsDimension") ? d = ap(a.parentNode.getAttribute("srsDimension")) : e && (d = ap(e));
        for (var f, g = [], h = 0, l = c.length; h < l; h += d) a = parseFloat(c[h]), e = parseFloat(c[h + 1]), 
        f = 3 === d ? parseFloat(c[h + 2]) : 0, "en" === b.substr(0, 2) ? g.push(a, e, f) : g.push(e, a, f);
        return g;
    };
    k.Be = {
        "http://www.opengis.net/gml": {
            pos: Ln(fp.prototype.Tq),
            posList: Ln(fp.prototype.kh)
        }
    };
    k.Sf = {
        "http://www.opengis.net/gml": {
            interior: fp.prototype.rn,
            exterior: fp.prototype.Dl
        }
    };
    k.Kh = {
        "http://www.opengis.net/gml": {
            Point: Ln(To.prototype.dk),
            MultiPoint: Ln(To.prototype.bk),
            LineString: Ln(To.prototype.Cf),
            MultiLineString: Ln(To.prototype.ak),
            LinearRing: Ln(To.prototype.$j),
            Polygon: Ln(To.prototype.Df),
            MultiPolygon: Ln(To.prototype.ck),
            Surface: Ln(fp.prototype.ek),
            MultiSurface: Ln(fp.prototype.Xq),
            Curve: Ln(fp.prototype.Xj),
            MultiCurve: Ln(fp.prototype.Wq),
            Envelope: Ln(fp.prototype.Rq)
        }
    };
    k.Ok = {
        "http://www.opengis.net/gml": {
            curveMember: Kn(fp.prototype.Yh),
            curveMembers: Kn(fp.prototype.Yh)
        }
    };
    k.Sk = {
        "http://www.opengis.net/gml": {
            surfaceMember: Kn(fp.prototype.Ak),
            surfaceMembers: Kn(fp.prototype.Ak)
        }
    };
    k.Kk = {
        "http://www.opengis.net/gml": {
            LineString: Kn(To.prototype.Cf),
            Curve: Kn(fp.prototype.Xj)
        }
    };
    k.Xk = {
        "http://www.opengis.net/gml": {
            Polygon: Kn(To.prototype.Df),
            Surface: Kn(fp.prototype.ek)
        }
    };
    k.Yk = {
        "http://www.opengis.net/gml": {
            patches: Ln(fp.prototype.$q)
        }
    };
    k.Lk = {
        "http://www.opengis.net/gml": {
            segments: Ln(fp.prototype.cr)
        }
    };
    k.Mk = {
        "http://www.opengis.net/gml": {
            lowerCorner: Kn(fp.prototype.kh),
            upperCorner: Kn(fp.prototype.kh)
        }
    };
    k.Tk = {
        "http://www.opengis.net/gml": {
            PolygonPatch: Ln(fp.prototype.ar)
        }
    };
    k.Wk = {
        "http://www.opengis.net/gml": {
            LineStringSegment: Ln(fp.prototype.Vq)
        }
    };
    function gp(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        a.setAttribute("srsDimension", c ? 3 : 2);
        d = d.srsName;
        b = b.S();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = b[h];
            var l = h, m = c, n = "enu";
            d && (n = Lc(d).b);
            n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
            m && (n += " " + (g[2] || 0));
            f[l] = n;
        }
        cp(a, f.join(" "));
    }
    k.aj = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Dn(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1];
        a = c.hasZ;
        d.setAttribute("srsDimension", a ? 3 : 2);
        var e = c.srsName;
        c = "enu";
        e && (c = Lc(e).b);
        b = b.S();
        c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
        a && (c += " " + (b[2] || 0));
        cp(d, c);
    };
    var hp = {
        "http://www.opengis.net/gml": {
            lowerCorner: O(cp),
            upperCorner: O(cp)
        }
    };
    k = fp.prototype;
    k.Ao = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Tn({
            node: a
        }, hp, Qn, [ b[0] + " " + b[1], b[2] + " " + b[3] ], c, [ "lowerCorner", "upperCorner" ], this);
    };
    k.Yi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = Dn(a.namespaceURI, "posList");
        a.appendChild(d);
        gp(d, b, c);
    };
    k.zo = function(a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return Dn(b.namespaceURI, void 0 !== c ? "interior" : "exterior");
    };
    k.jf = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.$d(), Tn({
            node: a,
            hasZ: e,
            srsName: d
        }, ip, this.zo, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Dn(a.namespaceURI, "patches"), 
        a.appendChild(e), a = Dn(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.jf(a, b, c));
    };
    k.hf = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Dn(a.namespaceURI, "posList"), 
        a.appendChild(d), gp(d, b, c)) : "Curve" === a.nodeName && (d = Dn(a.namespaceURI, "segments"), 
        a.appendChild(d), a = Dn(d.namespaceURI, "LineStringSegment"), d.appendChild(a), 
        this.hf(a, b, c));
    };
    k.$i = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Ad();
        Tn({
            node: a,
            hasZ: e,
            srsName: f,
            surface: d
        }, jp, this.l, b, c, void 0, this);
    };
    k.Bo = function(a, b, c) {
        var d = c[c.length - 1], e = d.srsName;
        d = d.hasZ;
        e && a.setAttribute("srsName", e);
        b = b.ke();
        Tn({
            node: a,
            hasZ: d,
            srsName: e
        }, kp, On("pointMember"), b, c, void 0, this);
    };
    k.Zi = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.zd();
        Tn({
            node: a,
            hasZ: e,
            srsName: f,
            curve: d
        }, lp, this.l, b, c, void 0, this);
    };
    k.bj = function(a, b, c) {
        var d = Dn(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Yi(d, b, c);
    };
    k.cj = function(a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.jf(d, b, c));
    };
    k.Co = function(a, b, c) {
        var d = Dn(a.namespaceURI, "Point");
        a.appendChild(d);
        this.aj(d, b, c);
    };
    k.Xi = function(a, b, c) {
        var d = this.a(b, c);
        d && (a.appendChild(d), this.hf(d, b, c));
    };
    k.bd = function(a, b, c) {
        var d = c[c.length - 1], e = Ab({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = Yc(b, d.featureProjection, d.dataProjection) : f = b : f = Zn(b, !0, d);
        Tn(e, mp, this.a, [ f ], c, void 0, this);
    };
    k.Wi = function(a, b, c) {
        var d = b.c;
        d && a.setAttribute("fid", d);
        d = c[c.length - 1];
        var e = d.featureNS, f = b.a;
        d.ub || (d.ub = {}, d.ub[e] = {});
        var g = b.K();
        b = [];
        var h = [];
        for (m in g) {
            var l = g[m];
            null !== l && (b.push(m), h.push(l), m == f || l instanceof ld ? m in d.ub[e] || (d.ub[e][m] = O(this.bd, this)) : m in d.ub[e] || (d.ub[e][m] = O(cp)));
        }
        var m = Ab({}, d);
        m.node = a;
        Tn(m, d.ub, On(void 0, e), h, c, b);
    };
    var jp = {
        "http://www.opengis.net/gml": {
            surfaceMember: O(fp.prototype.cj),
            polygonMember: O(fp.prototype.cj)
        }
    }, kp = {
        "http://www.opengis.net/gml": {
            pointMember: O(fp.prototype.Co)
        }
    }, lp = {
        "http://www.opengis.net/gml": {
            lineStringMember: O(fp.prototype.Xi),
            curveMember: O(fp.prototype.Xi)
        }
    }, ip = {
        "http://www.opengis.net/gml": {
            exterior: O(fp.prototype.bj),
            interior: O(fp.prototype.bj)
        }
    }, mp = {
        "http://www.opengis.net/gml": {
            Curve: O(fp.prototype.hf),
            MultiCurve: O(fp.prototype.Zi),
            Point: O(fp.prototype.aj),
            MultiPoint: O(fp.prototype.Bo),
            LineString: O(fp.prototype.hf),
            MultiLineString: O(fp.prototype.Zi),
            LinearRing: O(fp.prototype.Yi),
            Polygon: O(fp.prototype.jf),
            MultiPolygon: O(fp.prototype.$i),
            Surface: O(fp.prototype.jf),
            MultiSurface: O(fp.prototype.$i),
            Envelope: O(fp.prototype.Ao)
        }
    }, np = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    fp.prototype.l = function(a, b) {
        return Dn("http://www.opengis.net/gml", np[b[b.length - 1].node.nodeName]);
    };
    fp.prototype.a = function(a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface, e = c.curve;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.getType(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return Dn("http://www.opengis.net/gml", a);
    };
    fp.prototype.ye = function(a, b) {
        b = Yn(this, b);
        var c = Dn("http://www.opengis.net/gml", "geom"), d = {
            node: c,
            hasZ: this.hasZ,
            srsName: this.srsName,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g
        };
        b && Ab(d, b);
        this.bd(c, a, [ d ]);
        return c;
    };
    fp.prototype.ec = function(a, b) {
        b = Yn(this, b);
        var c = Dn("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            hasZ: this.hasZ,
            curve: this.c,
            surface: this.o,
            multiSurface: this.j,
            multiCurve: this.g,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && Ab(d, b);
        b = [ d ];
        var e = b[b.length - 1];
        d = e.featureType;
        var f = e.featureNS, g = {};
        g[f] = {};
        g[f][d] = O(this.Wi, this);
        e = Ab({}, e);
        e.node = c;
        Tn(e, g, On(d, f), a, b);
        return c;
    };
    function op(a) {
        a = a ? a : {};
        To.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Kn(To.prototype.ne);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd";
    }
    v(op, To);
    k = op.prototype;
    k.Yj = function(a, b) {
        a = En(a, !1).replace(/^\s*|\s*$/g, "");
        var c = b[0].srsName;
        b = "enu";
        c && (c = Lc(c)) && (b = c.b);
        a = a.trim().split(/\s+/);
        for (var d, e, f = [], g = 0, h = a.length; g < h; g++) e = a[g].split(/,+/), c = parseFloat(e[0]), 
        d = parseFloat(e[1]), e = 3 === e.length ? parseFloat(e[2]) : 0, "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e);
        return f;
    };
    k.Pq = function(a, b) {
        a = Q([ null ], this.Jk, a, b, this);
        return bb(a[1][0], a[1][1], a[1][3], a[1][4]);
    };
    k.pn = function(a, b) {
        (a = Q(void 0, this.Ce, a, b, this)) && b[b.length - 1].push(a);
    };
    k.zq = function(a, b) {
        (a = Q(void 0, this.Ce, a, b, this)) && (b[b.length - 1][0] = a);
    };
    k.Be = {
        "http://www.opengis.net/gml": {
            coordinates: Ln(op.prototype.Yj)
        }
    };
    k.Sf = {
        "http://www.opengis.net/gml": {
            innerBoundaryIs: op.prototype.pn,
            outerBoundaryIs: op.prototype.zq
        }
    };
    k.Jk = {
        "http://www.opengis.net/gml": {
            coordinates: Kn(op.prototype.Yj)
        }
    };
    k.Kh = {
        "http://www.opengis.net/gml": {
            Point: Ln(To.prototype.dk),
            MultiPoint: Ln(To.prototype.bk),
            LineString: Ln(To.prototype.Cf),
            MultiLineString: Ln(To.prototype.ak),
            LinearRing: Ln(To.prototype.$j),
            Polygon: Ln(To.prototype.Df),
            MultiPolygon: Ln(To.prototype.ck),
            Box: Ln(op.prototype.Pq)
        }
    };
    k.Kg = function(a, b) {
        var c = b[b.length - 1];
        b = c.multiSurface;
        var d = c.surface;
        c = c.multiCurve;
        Array.isArray(a) ? a = "Envelope" : (a = a.getType(), "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
        return Dn("http://www.opengis.net/gml", a);
    };
    k.Oi = function(a, b, c) {
        var d = c[c.length - 1], e = Ab({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = Yc(b, d.featureProjection, d.dataProjection) : f = b : f = Zn(b, !0, d);
        Tn(e, pp, this.Kg, [ f ], c, void 0, this);
    };
    k.ff = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = qp(a.namespaceURI), 
        a.appendChild(d), rp(d, b, c)) : "Curve" === a.nodeName && (d = Dn(a.namespaceURI, "segments"), 
        a.appendChild(d), a = Dn(d.namespaceURI, "LineStringSegment"), d.appendChild(a), 
        this.ff(a, b, c));
    };
    function qp(a) {
        a = Dn(a, "coordinates");
        a.setAttribute("decimal", ".");
        a.setAttribute("cs", ",");
        a.setAttribute("ts", " ");
        return a;
    }
    function rp(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        d = d.srsName;
        b = b.S();
        for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) g = b[h], f[h] = sp(g, d, c);
        cp(a, f.join(" "));
    }
    k.gf = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        d = d.srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.$d(), Tn({
            node: a,
            hasZ: e,
            srsName: d
        }, tp, this.vo, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Dn(a.namespaceURI, "patches"), 
        a.appendChild(e), a = Dn(e.namespaceURI, "PolygonPatch"), e.appendChild(a), this.gf(a, b, c));
    };
    k.vo = function(a, b) {
        a = b[b.length - 1];
        b = a.node;
        var c = a.exteriorWritten;
        void 0 === c && (a.exteriorWritten = !0);
        return Dn(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs");
    };
    k.Ui = function(a, b, c) {
        var d = Dn(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.Qi(d, b, c);
    };
    function sp(a, b, c) {
        var d = "enu";
        b && (d = Lc(b).b);
        b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
        c && (b += "," + (a[2] || 0));
        return b;
    }
    k.Ri = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.curve;
        f && a.setAttribute("srsName", f);
        b = b.zd();
        Tn({
            node: a,
            hasZ: e,
            srsName: f,
            curve: d
        }, up, this.a, b, c, void 0, this);
    };
    k.Ti = function(a, b, c) {
        var d = c[c.length - 1];
        c = d.hasZ;
        var e = d.srsName;
        e && a.setAttribute("srsName", e);
        d = qp(a.namespaceURI);
        a.appendChild(d);
        a = b.S();
        a = sp(a, e, c);
        cp(d, a);
    };
    k.xo = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ;
        (d = d.srsName) && a.setAttribute("srsName", d);
        b = b.ke();
        Tn({
            node: a,
            hasZ: e,
            srsName: d
        }, vp, On("pointMember"), b, c, void 0, this);
    };
    k.yo = function(a, b, c) {
        var d = Dn(a.namespaceURI, "Point");
        a.appendChild(d);
        this.Ti(d, b, c);
    };
    k.Pi = function(a, b, c) {
        var d = this.Kg(b, c);
        d && (a.appendChild(d), this.ff(d, b, c));
    };
    k.Qi = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = qp(a.namespaceURI);
        a.appendChild(d);
        rp(d, b, c);
    };
    k.Si = function(a, b, c) {
        var d = c[c.length - 1], e = d.hasZ, f = d.srsName;
        d = d.surface;
        f && a.setAttribute("srsName", f);
        b = b.Ad();
        Tn({
            node: a,
            hasZ: e,
            srsName: f,
            surface: d
        }, wp, this.a, b, c, void 0, this);
    };
    k.Vi = function(a, b, c) {
        var d = this.Kg(b, c);
        d && (a.appendChild(d), this.gf(d, b, c));
    };
    k.wo = function(a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Tn({
            node: a
        }, xp, Qn, [ b[0] + " " + b[1], b[2] + " " + b[3] ], c, [ "lowerCorner", "upperCorner" ], this);
    };
    var pp = {
        "http://www.opengis.net/gml": {
            Curve: O(op.prototype.ff),
            MultiCurve: O(op.prototype.Ri),
            Point: O(op.prototype.Ti),
            MultiPoint: O(op.prototype.xo),
            LineString: O(op.prototype.ff),
            MultiLineString: O(op.prototype.Ri),
            LinearRing: O(op.prototype.Qi),
            Polygon: O(op.prototype.gf),
            MultiPolygon: O(op.prototype.Si),
            Surface: O(op.prototype.gf),
            MultiSurface: O(op.prototype.Si),
            Envelope: O(op.prototype.wo)
        }
    }, tp = {
        "http://www.opengis.net/gml": {
            outerBoundaryIs: O(op.prototype.Ui),
            innerBoundaryIs: O(op.prototype.Ui)
        }
    }, vp = {
        "http://www.opengis.net/gml": {
            pointMember: O(op.prototype.yo)
        }
    }, up = {
        "http://www.opengis.net/gml": {
            lineStringMember: O(op.prototype.Pi),
            curveMember: O(op.prototype.Pi)
        }
    };
    op.prototype.a = function(a, b) {
        return Dn("http://www.opengis.net/gml", yp[b[b.length - 1].node.nodeName]);
    };
    var yp = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    }, wp = {
        "http://www.opengis.net/gml": {
            surfaceMember: O(op.prototype.Vi),
            polygonMember: O(op.prototype.Vi)
        }
    }, xp = {
        "http://www.opengis.net/gml": {
            lowerCorner: O(cp),
            upperCorner: O(cp)
        }
    };
    function zp(a) {
        a = a ? a : {};
        Qo.call(this);
        this.defaultDataProjection = Lc("EPSG:4326");
        this.b = a.readExtensions;
    }
    v(zp, Qo);
    var Ap = [ null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1" ];
    function Bp(a, b, c, d) {
        a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (a.push(d.ele), delete d.ele, b.hasZ = !0) : a.push(0);
        "time" in d ? (a.push(d.time), delete d.time, b.hasM = !0) : a.push(0);
        return a;
    }
    function Cp(a, b, c) {
        var d = "XY", e = 2;
        a.hasZ && a.hasM ? (d = "XYZM", e = 4) : a.hasZ ? (d = "XYZ", e = 3) : a.hasM && (d = "XYM", 
        e = 3);
        if (4 !== e) {
            var f;
            var g = 0;
            for (f = b.length / 4; g < f; g++) b[g * e] = b[4 * g], b[g * e + 1] = b[4 * g + 1], 
            a.hasZ && (b[g * e + 2] = b[4 * g + 2]), a.hasM && (b[g * e + 2] = b[4 * g + 3]);
            b.length = b.length / 4 * e;
            if (c) for (g = 0, f = c.length; g < f; g++) c[g] = c[g] / 4 * e;
        }
        return d;
    }
    function Dp(a, b) {
        var c = b[b.length - 1], d = a.getAttribute("href");
        null !== d && (c.link = d);
        Sn(Ep, a, b);
    }
    function Fp(a, b) {
        b[b.length - 1].extensionsNode_ = a;
    }
    function Gp(a, b) {
        var c = b[0];
        if (a = Q({
            flatCoordinates: [],
            layoutOptions: {}
        }, Hp, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.layoutOptions;
            delete a.layoutOptions;
            d = Cp(d, b);
            var e = new B(null);
            e.Y(d, b);
            Zn(e, !1, c);
            c = new xf(e);
            c.H(a);
            return c;
        }
    }
    function Ip(a, b) {
        var c = b[0];
        if (a = Q({
            flatCoordinates: [],
            ends: [],
            layoutOptions: {}
        }, Jp, a, b)) {
            b = a.flatCoordinates;
            delete a.flatCoordinates;
            var d = a.ends;
            delete a.ends;
            var e = a.layoutOptions;
            delete a.layoutOptions;
            e = Cp(e, b, d);
            var f = new F(null);
            f.Y(e, b, d);
            Zn(f, !1, c);
            c = new xf(f);
            c.H(a);
            return c;
        }
    }
    function Kp(a, b) {
        var c = b[0];
        if (b = Q({}, Lp, a, b)) {
            var d = {};
            a = Bp([], d, a, b);
            d = Cp(d, a);
            a = new C(a, d);
            Zn(a, !1, c);
            c = new xf(a);
            c.H(b);
            return c;
        }
    }
    var Mp = {
        rte: Gp,
        trk: Ip,
        wpt: Kp
    }, Np = P(Ap, {
        rte: Kn(Gp),
        trk: Kn(Ip),
        wpt: Kn(Kp)
    }), Ep = P(Ap, {
        text: N(R, "linkText"),
        type: N(R, "linkType")
    }), Hp = P(Ap, {
        name: N(R),
        cmt: N(R),
        desc: N(R),
        src: N(R),
        link: Dp,
        number: N($o),
        extensions: Fp,
        type: N(R),
        rtept: function(a, b) {
            var c = Q({}, Op, a, b);
            c && (b = b[b.length - 1], Bp(b.flatCoordinates, b.layoutOptions, a, c));
        }
    }), Op = P(Ap, {
        ele: N(Yo),
        time: N(Xo)
    }), Jp = P(Ap, {
        name: N(R),
        cmt: N(R),
        desc: N(R),
        src: N(R),
        link: Dp,
        number: N($o),
        type: N(R),
        extensions: Fp,
        trkseg: function(a, b) {
            var c = b[b.length - 1];
            Sn(Pp, a, b);
            c.ends.push(c.flatCoordinates.length);
        }
    }), Pp = P(Ap, {
        trkpt: function(a, b) {
            var c = Q({}, Qp, a, b);
            c && (b = b[b.length - 1], Bp(b.flatCoordinates, b.layoutOptions, a, c));
        }
    }), Qp = P(Ap, {
        ele: N(Yo),
        time: N(Xo)
    }), Lp = P(Ap, {
        ele: N(Yo),
        time: N(Xo),
        magvar: N(Yo),
        geoidheight: N(Yo),
        name: N(R),
        cmt: N(R),
        desc: N(R),
        src: N(R),
        link: Dp,
        sym: N(R),
        type: N(R),
        fix: N(R),
        sat: N($o),
        hdop: N(Yo),
        vdop: N(Yo),
        pdop: N(Yo),
        ageofdgpsdata: N(Yo),
        dgpsid: N($o),
        extensions: Fp
    });
    function Rp(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f);
            }
            e.set("extensionsNode_", void 0);
        }
    }
    zp.prototype.gh = function(a, b) {
        if (!Ea(Ap, a.namespaceURI)) return null;
        var c = Mp[a.localName];
        if (!c) return null;
        a = c(a, [ Xn(this, a, b) ]);
        if (!a) return null;
        Rp(this, [ a ]);
        return a;
    };
    zp.prototype.Qc = function(a, b) {
        return Ea(Ap, a.namespaceURI) ? "gpx" == a.localName && (a = Q([], Np, a, [ Xn(this, a, b) ])) ? (Rp(this, a), 
        a) : [] : [];
    };
    function Sp(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        Tn({
            node: a
        }, Tp, Qn, [ b.linkText, b.linkType ], c, Up);
    }
    function Vp(a, b, c) {
        var d = c[c.length - 1], e = d.node.namespaceURI, f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
          case "XYZM":
            0 !== b[3] && (f.time = b[3]);

          case "XYZ":
            0 !== b[2] && (f.ele = b[2]);
            break;

          case "XYM":
            0 !== b[2] && (f.time = b[2]);
        }
        b = "rtept" == a.nodeName ? Wp[e] : Xp[e];
        d = Rn(f, b);
        Tn({
            node: a,
            properties: f
        }, Yp, Qn, d, c, b);
    }
    var Up = [ "text", "type" ], Tp = P(Ap, {
        text: O(cp),
        type: O(cp)
    }), Zp = P(Ap, "name cmt desc src link number type rtept".split(" ")), $p = P(Ap, {
        name: O(cp),
        cmt: O(cp),
        desc: O(cp),
        src: O(cp),
        link: O(Sp),
        number: O(ep),
        type: O(cp),
        rtept: Nn(O(Vp))
    }), Wp = P(Ap, [ "ele", "time" ]), aq = P(Ap, "name cmt desc src link number type trkseg".split(" ")), dq = P(Ap, {
        name: O(cp),
        cmt: O(cp),
        desc: O(cp),
        src: O(cp),
        link: O(Sp),
        number: O(ep),
        type: O(cp),
        trkseg: Nn(O(function(a, b, c) {
            Tn({
                node: a,
                geometryLayout: b.ga,
                properties: {}
            }, bq, cq, b.S(), c);
        }))
    }), cq = On("trkpt"), bq = P(Ap, {
        trkpt: O(Vp)
    }), Xp = P(Ap, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), Yp = P(Ap, {
        ele: O(dp),
        time: O(function(a, b) {
            b = new Date(1e3 * b);
            a.appendChild(Cn.createTextNode(b.getUTCFullYear() + "-" + Wg(b.getUTCMonth() + 1) + "-" + Wg(b.getUTCDate()) + "T" + Wg(b.getUTCHours()) + ":" + Wg(b.getUTCMinutes()) + ":" + Wg(b.getUTCSeconds()) + "Z"));
        }),
        magvar: O(dp),
        geoidheight: O(dp),
        name: O(cp),
        cmt: O(cp),
        desc: O(cp),
        src: O(cp),
        link: O(Sp),
        sym: O(cp),
        type: O(cp),
        fix: O(cp),
        sat: O(ep),
        hdop: O(dp),
        vdop: O(dp),
        pdop: O(dp),
        ageofdgpsdata: O(dp),
        dgpsid: O(ep)
    }), eq = {
        Point: "wpt",
        LineString: "rte",
        MultiLineString: "trk"
    };
    function fq(a, b) {
        if (a = a.getGeometry()) if (a = eq[a.getType()]) return Dn(b[b.length - 1].node.namespaceURI, a);
    }
    var gq = P(Ap, {
        rte: O(function(a, b, c) {
            var d = c[0], e = b.K();
            a = {
                node: a,
                properties: e
            };
            if (b = b.getGeometry()) b = Zn(b, !0, d), a.geometryLayout = b.ga, e.rtept = b.S();
            d = Zp[c[c.length - 1].node.namespaceURI];
            e = Rn(e, d);
            Tn(a, $p, Qn, e, c, d);
        }),
        trk: O(function(a, b, c) {
            var d = c[0], e = b.K();
            a = {
                node: a,
                properties: e
            };
            if (b = b.getGeometry()) b = Zn(b, !0, d), e.trkseg = b.zd();
            d = aq[c[c.length - 1].node.namespaceURI];
            e = Rn(e, d);
            Tn(a, dq, Qn, e, c, d);
        }),
        wpt: O(function(a, b, c) {
            var d = c[0], e = c[c.length - 1];
            e.properties = b.K();
            if (b = b.getGeometry()) b = Zn(b, !0, d), e.geometryLayout = b.ga, Vp(a, b.S(), c);
        })
    });
    zp.prototype.ec = function(a, b) {
        b = Yn(this, b);
        var c = Dn("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers");
        Tn({
            node: c
        }, gq, fq, a, [ b ]);
        return c;
    };
    function hq() {
        Wn.call(this);
    }
    v(hq, Wn);
    function iq(a) {
        return "string" === typeof a ? a : "";
    }
    k = hq.prototype;
    k.getType = function() {
        return "text";
    };
    k.bc = function(a, b) {
        return this.me(iq(a), Yn(this, b));
    };
    k.Sa = function(a, b) {
        return this.ih(iq(a), Yn(this, b));
    };
    k.jd = function(a, b) {
        return this.Jd(iq(a), Yn(this, b));
    };
    k.tb = function() {
        return this.defaultDataProjection;
    };
    k.Nd = function(a, b) {
        return this.we(a, Yn(this, b));
    };
    k.dc = function(a, b) {
        return this.Hh(a, Yn(this, b));
    };
    k.qd = function(a, b) {
        return this.Od(a, Yn(this, b));
    };
    function jq(a) {
        a = a ? a : {};
        Wn.call(this);
        this.defaultDataProjection = Lc("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : "none";
    }
    v(jq, hq);
    var kq = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, lq = /^H.([A-Z]{3}).*?:(.*)/, mq = /^HFDTE(\d{2})(\d{2})(\d{2})/, nq = /\r\n|\r|\n/;
    k = jq.prototype;
    k.me = function(a, b) {
        var c = this.b, d = a.split(nq);
        a = {};
        var e = [], f = 2e3, g = 0, h = 1, l = -1, m;
        var n = 0;
        for (m = d.length; n < m; ++n) {
            var p = d[n], q;
            if ("B" == p.charAt(0)) {
                if (q = kq.exec(p)) {
                    p = parseInt(q[1], 10);
                    var r = parseInt(q[2], 10), u = parseInt(q[3], 10), w = parseInt(q[4], 10) + parseInt(q[5], 10) / 6e4;
                    "S" == q[6] && (w = -w);
                    var z = parseInt(q[7], 10) + parseInt(q[8], 10) / 6e4;
                    "W" == q[9] && (z = -z);
                    e.push(z, w);
                    "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                    q = Date.UTC(f, g, h, p, r, u);
                    q < l && (q = Date.UTC(f, g, h + 1, p, r, u));
                    e.push(q / 1e3);
                    l = q;
                }
            } else "H" == p.charAt(0) && ((q = mq.exec(p)) ? (h = parseInt(q[1], 10), g = parseInt(q[2], 10) - 1, 
            f = 2e3 + parseInt(q[3], 10)) : (q = lq.exec(p)) && (a[q[1]] = q[2].trim()));
        }
        if (0 === e.length) return null;
        d = new B(null);
        d.Y("none" == c ? "XYM" : "XYZM", e);
        b = new xf(Zn(d, !1, b));
        b.H(a);
        return b;
    };
    k.ih = function(a, b) {
        return (a = this.me(a, b)) ? [ a ] : [];
    };
    k.we = function() {};
    k.Hh = function() {};
    k.Od = function() {};
    k.Jd = function() {};
    function S(a) {
        a = a || {};
        this.b = a.font;
        this.j = a.rotation;
        this.l = a.rotateWithView;
        this.a = a.scale;
        this.pa = a.text;
        this.i = a.textAlign;
        this.g = a.textBaseline;
        this.Ya = void 0 !== a.fill ? a.fill : new pf({
            color: "#333"
        });
        this.o = void 0 !== a.maxAngle ? a.maxAngle : Math.PI / 4;
        this.s = void 0 !== a.placement ? a.placement : "point";
        var b = void 0 === a.overflow ? a.exceedLength : a.overflow;
        this.u = void 0 !== b ? b : !1;
        this.bb = void 0 !== a.stroke ? a.stroke : null;
        this.f = void 0 !== a.offsetX ? a.offsetX : 0;
        this.c = void 0 !== a.offsetY ? a.offsetY : 0;
        this.L = a.backgroundFill ? a.backgroundFill : null;
        this.C = a.backgroundStroke ? a.backgroundStroke : null;
        this.B = void 0 === a.padding ? null : a.padding;
    }
    k = S.prototype;
    k.clone = function() {
        return new S({
            font: this.b,
            placement: this.s,
            maxAngle: this.o,
            overflow: this.u,
            rotation: this.j,
            rotateWithView: this.l,
            scale: this.a,
            text: this.Fa(),
            textAlign: this.i,
            textBaseline: this.g,
            fill: this.wa() ? this.wa().clone() : void 0,
            stroke: this.xa() ? this.xa().clone() : void 0,
            offsetX: this.f,
            offsetY: this.c
        });
    };
    k.mm = function() {
        return this.u;
    };
    k.Vl = function() {
        return this.b;
    };
    k.hm = function() {
        return this.o;
    };
    k.qm = function() {
        return this.s;
    };
    k.km = function() {
        return this.f;
    };
    k.lm = function() {
        return this.c;
    };
    k.wa = function() {
        return this.Ya;
    };
    k.cq = function() {
        return this.l;
    };
    k.eq = function() {
        return this.j;
    };
    k.fq = function() {
        return this.a;
    };
    k.xa = function() {
        return this.bb;
    };
    k.Fa = function() {
        return this.pa;
    };
    k.wm = function() {
        return this.i;
    };
    k.xm = function() {
        return this.g;
    };
    k.Pl = function() {
        return this.L;
    };
    k.Ql = function() {
        return this.C;
    };
    k.om = function() {
        return this.B;
    };
    k.Ar = function(a) {
        this.u = a;
    };
    k.mk = function(a) {
        this.b = a;
    };
    k.wr = function(a) {
        this.o = a;
    };
    k.rk = function(a) {
        this.f = a;
    };
    k.sk = function(a) {
        this.c = a;
    };
    k.Cr = function(a) {
        this.s = a;
    };
    k.If = function(a) {
        this.Ya = a;
    };
    k.gq = function(a) {
        this.j = a;
    };
    k.Ej = function(a) {
        this.a = a;
    };
    k.Kf = function(a) {
        this.bb = a;
    };
    k.Kd = function(a) {
        this.pa = a;
    };
    k.uk = function(a) {
        this.i = a;
    };
    k.Er = function(a) {
        this.g = a;
    };
    k.lr = function(a) {
        this.L = a;
    };
    k.mr = function(a) {
        this.C = a;
    };
    k.Br = function(a) {
        this.B = a;
    };
    function oq(a) {
        a = a ? a : {};
        Qo.call(this);
        pq || (qq = [ 255, 255, 255, 1 ], rq = new pf({
            color: qq
        }), Rq = [ 20, 2 ], Sq = Tq = "pixels", Uq = [ 64, 64 ], Vq = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", 
        Wq = .5, Xq = new of({
            anchor: Rq,
            anchorOrigin: "bottom-left",
            anchorXUnits: Tq,
            anchorYUnits: Sq,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: Wq,
            size: Uq,
            src: Vq
        }), Yq = "NO_IMAGE", Zq = new qf({
            color: qq,
            width: 1
        }), $q = new qf({
            color: [ 51, 51, 51, 1 ],
            width: 2
        }), ar = new S({
            font: "bold 16px Helvetica",
            fill: rq,
            stroke: $q,
            scale: .8
        }), br = new rf({
            fill: rq,
            image: Xq,
            text: ar,
            stroke: Zq,
            zIndex: 0
        }), pq = [ br ]);
        this.defaultDataProjection = Lc("EPSG:4326");
        this.a = a.defaultStyle ? a.defaultStyle : pq;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.g = void 0 !== a.showPointNames ? a.showPointNames : !0;
    }
    var pq, qq, rq, Rq, Tq, Sq, Uq, Vq, Wq, Xq, Yq, Zq, $q, ar, br;
    v(oq, Qo);
    var cr = [ "http://www.google.com/kml/ext/2.2" ], dr = [ null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2" ], er = {
        fraction: "fraction",
        pixels: "pixels",
        insetPixels: "pixels"
    };
    function fr(a, b) {
        var c = [ 0, 0 ], d = "start";
        if (a.U()) {
            var e = a.U().Pe();
            null === e && (e = Uq);
            2 == e.length && (d = a.U().c, c[0] = d * e[0] / 2, c[1] = -d * e[1] / 2, d = "left");
        }
        null !== a.Fa() ? (e = a.Fa(), a = e.clone(), a.mk(e.b || ar.b), a.Ej(e.a || ar.a), 
        a.If(e.wa() || ar.wa()), a.Kf(e.xa() || $q)) : a = ar.clone();
        a.Kd(b);
        a.rk(c[0]);
        a.sk(c[1]);
        a.uk(d);
        return new rf({
            text: a
        });
    }
    function gr(a, b, c, d, e) {
        return function() {
            var f = e, g = "";
            f && this.getGeometry() && (f = "Point" === this.getGeometry().getType());
            f && (g = this.get("name"), f = f && g);
            if (a) return f ? (f = fr(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = hr(b, c, d);
                return f ? (f = fr(h[0], g), h.concat(f)) : h;
            }
            return f ? (f = fr(c[0], g), c.concat(f)) : c;
        };
    }
    function hr(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), 
        hr(c[a], b, c)) : b;
    }
    function ir(a) {
        a = En(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a)) return a = a[1], [ parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255 ];
    }
    function jr(a) {
        a = En(a, !1);
        for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a); ) b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), 
        a = a.substr(d[0].length);
        if ("" === a) return b;
    }
    function kr(a) {
        var b = En(a, !1).trim();
        a = a.baseURI;
        a && "about:blank" != a || (a = window.location.href);
        return a ? new URL(b, a).href : b;
    }
    function lr(a) {
        return Yo(a);
    }
    function mr(a, b) {
        return Q(null, nr, a, b);
    }
    function or(a, b) {
        if (b = Q({
            v: [],
            Ik: []
        }, pr, a, b)) {
            a = b.v;
            b = b.Ik;
            var c;
            var d = 0;
            for (c = Math.min(a.length, b.length); d < c; ++d) a[4 * d + 3] = b[d];
            b = new B(null);
            b.Y("XYZM", a);
            return b;
        }
    }
    function qr(a, b) {
        var c = Q({}, rr, a, b);
        if (a = Q(null, sr, a, b)) return b = new B(null), b.Y("XYZ", a), b.H(c), b;
    }
    function tr(a, b) {
        var c = Q({}, rr, a, b);
        if (a = Q(null, sr, a, b)) return b = new D(null), b.Y("XYZ", a, [ a.length ]), 
        b.H(c), b;
    }
    function ur(a, b) {
        a = Q([], vr, a, b);
        if (!a) return null;
        if (0 === a.length) return new Ho(a);
        var c = !0, d = a[0].getType(), e;
        var f = 1;
        for (e = a.length; f < e; ++f) if (b = a[f], b.getType() != d) {
            c = !1;
            break;
        }
        if (c) if ("Point" == d) {
            var g = a[0];
            c = g.ga;
            d = g.ba();
            f = 1;
            for (e = a.length; f < e; ++f) b = a[f], Ga(d, b.ba());
            g = new G(null);
            g.Y(c, d);
            wr(g, a);
        } else "LineString" == d ? (g = new F(null), ae(g, a), wr(g, a)) : "Polygon" == d ? (g = new H(null), 
        de(g, a), wr(g, a)) : "GeometryCollection" == d ? g = new Ho(a) : Pa(!1, 37); else g = new Ho(a);
        return g;
    }
    function xr(a, b) {
        var c = Q({}, rr, a, b);
        if (a = Q(null, sr, a, b)) return b = new C(null), b.Y("XYZ", a), b.H(c), b;
    }
    function yr(a, b) {
        var c = Q({}, rr, a, b);
        if ((a = Q([ null ], zr, a, b)) && a[0]) {
            b = new D(null);
            var d = a[0], e = [ d.length ], f;
            var g = 1;
            for (f = a.length; g < f; ++g) Ga(d, a[g]), e.push(d.length);
            b.Y("XYZ", d, e);
            b.H(c);
            return b;
        }
    }
    function Ar(a, b) {
        b = Q({}, Br, a, b);
        if (!b) return null;
        a = "fillStyle" in b ? b.fillStyle : rq;
        var c = b.fill;
        void 0 === c || c || (a = null);
        c = "imageStyle" in b ? b.imageStyle : Xq;
        c == Yq && (c = void 0);
        var d = "textStyle" in b ? b.textStyle : ar, e = "strokeStyle" in b ? b.strokeStyle : Zq;
        b = b.outline;
        void 0 === b || b || (e = null);
        return [ new rf({
            fill: a,
            image: c,
            stroke: e,
            text: d,
            zIndex: void 0
        }) ];
    }
    function wr(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f = Array(b.length), g, h, l;
        var m = h = l = !1;
        for (g = 0; g < c; ++g) {
            var n = b[g];
            d[g] = n.get("extrude");
            e[g] = n.get("tessellate");
            f[g] = n.get("altitudeMode");
            m = m || void 0 !== d[g];
            h = h || void 0 !== e[g];
            l = l || f[g];
        }
        m && a.set("extrude", d);
        h && a.set("tessellate", e);
        l && a.set("altitudeMode", f);
    }
    function Cr(a, b) {
        Sn(Dr, a, b);
    }
    function Er(a, b) {
        Sn(Fr, a, b);
    }
    var Gr = P(dr, {
        displayName: N(R),
        value: N(R)
    }), Dr = P(dr, {
        Data: function(a, b) {
            var c = a.getAttribute("name");
            Sn(Gr, a, b);
            a = b[b.length - 1];
            null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
            delete a.value;
        },
        SchemaData: function(a, b) {
            Sn(Hr, a, b);
        }
    }), Fr = P(dr, {
        LatLonAltBox: function(a, b) {
            if (a = Q({}, Ir, a, b)) b = b[b.length - 1], b.extent = [ parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north) ], 
            b.altitudeMode = a.altitudeMode, b.minAltitude = parseFloat(a.minAltitude), b.maxAltitude = parseFloat(a.maxAltitude);
        },
        Lod: function(a, b) {
            if (a = Q({}, Jr, a, b)) b = b[b.length - 1], b.minLodPixels = parseFloat(a.minLodPixels), 
            b.maxLodPixels = parseFloat(a.maxLodPixels), b.minFadeExtent = parseFloat(a.minFadeExtent), 
            b.maxFadeExtent = parseFloat(a.maxFadeExtent);
        }
    }), Ir = P(dr, {
        altitudeMode: N(R),
        minAltitude: N(Yo),
        maxAltitude: N(Yo),
        north: N(Yo),
        south: N(Yo),
        east: N(Yo),
        west: N(Yo)
    }), Jr = P(dr, {
        minLodPixels: N(Yo),
        maxLodPixels: N(Yo),
        minFadeExtent: N(Yo),
        maxFadeExtent: N(Yo)
    }), rr = P(dr, {
        extrude: N(Vo),
        tessellate: N(Vo),
        altitudeMode: N(R)
    }), nr = P(dr, {
        coordinates: Ln(jr)
    }), zr = P(dr, {
        innerBoundaryIs: function(a, b) {
            (a = Q(void 0, Kr, a, b)) && b[b.length - 1].push(a);
        },
        outerBoundaryIs: function(a, b) {
            (a = Q(void 0, Lr, a, b)) && (b[b.length - 1][0] = a);
        }
    }), pr = P(dr, {
        when: function(a, b) {
            b = b[b.length - 1].Ik;
            a = En(a, !1);
            a = Date.parse(a);
            b.push(isNaN(a) ? 0 : a);
        }
    }, P(cr, {
        coord: function(a, b) {
            b = b[b.length - 1].v;
            a = En(a, !1);
            (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), 0) : b.push(0, 0, 0, 0);
        }
    })), sr = P(dr, {
        coordinates: Ln(jr)
    }), Mr = P(dr, {
        href: N(kr)
    }, P(cr, {
        x: N(Yo),
        y: N(Yo),
        w: N(Yo),
        h: N(Yo)
    })), Nr = P(dr, {
        Icon: N(function(a, b) {
            return (a = Q({}, Mr, a, b)) ? a : null;
        }),
        heading: N(Yo),
        hotSpot: N(function(a) {
            var b = a.getAttribute("xunits"), c = a.getAttribute("yunits");
            var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right";
            return {
                x: parseFloat(a.getAttribute("x")),
                Ih: er[b],
                y: parseFloat(a.getAttribute("y")),
                Jh: er[c],
                origin: d
            };
        }),
        scale: N(lr)
    }), Kr = P(dr, {
        LinearRing: Ln(mr)
    }), Or = P(dr, {
        color: N(ir),
        scale: N(lr)
    }), Pr = P(dr, {
        color: N(ir),
        width: N(Yo)
    }), vr = P(dr, {
        LineString: Kn(qr),
        LinearRing: Kn(tr),
        MultiGeometry: Kn(ur),
        Point: Kn(xr),
        Polygon: Kn(yr)
    }), Qr = P(cr, {
        Track: Kn(or)
    }), Sr = P(dr, {
        ExtendedData: Cr,
        Region: Er,
        Link: function(a, b) {
            Sn(Rr, a, b);
        },
        address: N(R),
        description: N(R),
        name: N(R),
        open: N(Vo),
        phoneNumber: N(R),
        visibility: N(Vo)
    }), Rr = P(dr, {
        href: N(kr)
    }), Lr = P(dr, {
        LinearRing: Ln(mr)
    }), Tr = P(dr, {
        Style: N(Ar),
        key: N(R),
        styleUrl: N(kr)
    }), Vr = P(dr, {
        ExtendedData: Cr,
        Region: Er,
        MultiGeometry: N(ur, "geometry"),
        LineString: N(qr, "geometry"),
        LinearRing: N(tr, "geometry"),
        Point: N(xr, "geometry"),
        Polygon: N(yr, "geometry"),
        Style: N(Ar),
        StyleMap: function(a, b) {
            if (a = Q(void 0, Ur, a, b)) b = b[b.length - 1], Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : Pa(!1, 38);
        },
        address: N(R),
        description: N(R),
        name: N(R),
        open: N(Vo),
        phoneNumber: N(R),
        styleUrl: N(kr),
        visibility: N(Vo)
    }, P(cr, {
        MultiTrack: N(function(a, b) {
            if (a = Q([], Qr, a, b)) return b = new F(null), ae(b, a), b;
        }, "geometry"),
        Track: N(or, "geometry")
    })), Wr = P(dr, {
        color: N(ir),
        fill: N(Vo),
        outline: N(Vo)
    }), Hr = P(dr, {
        SimpleData: function(a, b) {
            var c = a.getAttribute("name");
            null !== c && (a = R(a), b[b.length - 1][c] = a);
        }
    }), Br = P(dr, {
        IconStyle: function(a, b) {
            if (a = Q({}, Nr, a, b)) {
                b = b[b.length - 1];
                var c = "Icon" in a ? a.Icon : {}, d = !("Icon" in a) || 0 < Object.keys(c).length, e, f = c.href;
                f ? e = f : d && (e = Vq);
                f = "bottom-left";
                var g = a.hotSpot;
                if (g) {
                    var h = [ g.x, g.y ];
                    var l = g.Ih;
                    var m = g.Jh;
                    f = g.origin;
                } else e === Vq ? (h = Rq, l = Tq, m = Sq) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [ .5, 0 ], 
                m = l = "fraction");
                var n;
                g = c.x;
                var p = c.y;
                void 0 !== g && void 0 !== p && (n = [ g, p ]);
                var q;
                g = c.w;
                c = c.h;
                void 0 !== g && void 0 !== c && (q = [ g, c ]);
                var r;
                c = a.heading;
                void 0 !== c && (r = hc(c));
                a = a.scale;
                d ? (e == Vq && (q = Uq, void 0 === a && (a = Wq)), e = new of({
                    anchor: h,
                    anchorOrigin: f,
                    anchorXUnits: l,
                    anchorYUnits: m,
                    crossOrigin: "anonymous",
                    offset: n,
                    offsetOrigin: "bottom-left",
                    rotation: r,
                    scale: a,
                    size: q,
                    src: e
                }), b.imageStyle = e) : b.imageStyle = Yq;
            }
        },
        LabelStyle: function(a, b) {
            (a = Q({}, Or, a, b)) && (b[b.length - 1].textStyle = new S({
                fill: new pf({
                    color: "color" in a ? a.color : qq
                }),
                scale: a.scale
            }));
        },
        LineStyle: function(a, b) {
            (a = Q({}, Pr, a, b)) && (b[b.length - 1].strokeStyle = new qf({
                color: "color" in a ? a.color : qq,
                width: "width" in a ? a.width : 1
            }));
        },
        PolyStyle: function(a, b) {
            if (a = Q({}, Wr, a, b)) {
                b = b[b.length - 1];
                b.fillStyle = new pf({
                    color: "color" in a ? a.color : qq
                });
                var c = a.fill;
                void 0 !== c && (b.fill = c);
                a = a.outline;
                void 0 !== a && (b.outline = a);
            }
        }
    }), Ur = P(dr, {
        Pair: function(a, b) {
            if (a = Q({}, Tr, a, b)) {
                var c = a.key;
                c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c), (a = a.Style) && (b[b.length - 1] = a));
            }
        }
    });
    k = oq.prototype;
    k.eh = function(a, b) {
        var c = P(dr, {
            Document: Jn(this.eh, this),
            Folder: Jn(this.eh, this),
            Placemark: Kn(this.mh, this),
            Style: this.er.bind(this),
            StyleMap: this.dr.bind(this)
        });
        if (a = Q([], c, a, b, this)) return a;
    };
    k.mh = function(a, b) {
        var c = Q({
            geometry: null
        }, Vr, a, b);
        if (c) {
            var d = new xf();
            a = a.getAttribute("id");
            null !== a && d.tc(a);
            b = b[0];
            (a = c.geometry) && Zn(a, !1, b);
            d.setGeometry(a);
            delete c.geometry;
            this.c && d.Eg(gr(c.Style, c.styleUrl, this.a, this.b, this.g));
            delete c.Style;
            d.H(c);
            return d;
        }
    };
    k.er = function(a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = Ar(a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), 
        c = a ? new URL("#" + c, a).href : "#" + c, this.b[c] = b);
    };
    k.dr = function(a, b) {
        var c = a.getAttribute("id");
        null !== c && (b = Q(void 0, Ur, a, b)) && (a = a.baseURI, a && "about:blank" != a || (a = window.location.href), 
        c = a ? new URL("#" + c, a).href : "#" + c, this.b[c] = b);
    };
    k.gh = function(a, b) {
        return Ea(dr, a.namespaceURI) ? (a = this.mh(a, [ Xn(this, a, b) ])) ? a : null : null;
    };
    k.Qc = function(a, b) {
        if (!Ea(dr, a.namespaceURI)) return [];
        var c = a.localName;
        if ("Document" == c || "Folder" == c) return (c = this.eh(a, [ Xn(this, a, b) ])) ? c : [];
        if ("Placemark" == c) return (b = this.mh(a, [ Xn(this, a, b) ])) ? [ b ] : [];
        if ("kml" == c) {
            c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) {
                var d = this.Qc(a, b);
                d && Ga(c, d);
            }
            return c;
        }
        return [];
    };
    k.Yq = function(a) {
        if (Gn(a)) return Xr(this, a);
        if (Hn(a)) return Yr(this, a);
        if ("string" === typeof a) return a = In(a), Xr(this, a);
    };
    function Xr(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling) if (b.nodeType == Node.ELEMENT_NODE) {
            var c = Yr(a, b);
            if (c) return c;
        }
    }
    function Yr(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling) if (Ea(dr, c.namespaceURI) && "name" == c.localName) return R(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling) if (b = c.localName, 
        Ea(dr, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = Yr(a, c))) return b;
    }
    k.Zq = function(a) {
        var b = [];
        Gn(a) ? Ga(b, Zr(this, a)) : Hn(a) ? Ga(b, $r(this, a)) : "string" === typeof a && (a = In(a), 
        Ga(b, Zr(this, a)));
        return b;
    };
    function Zr(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && Ga(c, $r(a, b));
        return c;
    }
    function $r(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling) if (Ea(dr, c.namespaceURI) && "NetworkLink" == c.localName) {
            var e = Q({}, Sr, c, []);
            d.push(e);
        }
        for (c = b.firstElementChild; c; c = c.nextElementSibling) b = c.localName, !Ea(dr, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || Ga(d, $r(a, c));
        return d;
    }
    k.br = function(a) {
        var b = [];
        Gn(a) ? Ga(b, as(this, a)) : Hn(a) ? Ga(b, this.Ff(a)) : "string" === typeof a && (a = In(a), 
        Ga(b, as(this, a)));
        return b;
    };
    function as(a, b) {
        var c = [];
        for (b = b.firstChild; b; b = b.nextSibling) b.nodeType == Node.ELEMENT_NODE && Ga(c, a.Ff(b));
        return c;
    }
    k.Ff = function(a) {
        var b, c = [];
        for (b = a.firstElementChild; b; b = b.nextElementSibling) if (Ea(dr, b.namespaceURI) && "Region" == b.localName) {
            var d = Q({}, Fr, b, []);
            c.push(d);
        }
        for (b = a.firstElementChild; b; b = b.nextElementSibling) a = b.localName, !Ea(dr, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || Ga(c, this.Ff(b));
        return c;
    };
    function bs(a, b) {
        b = ge(b);
        b = [ 255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0] ];
        var c;
        for (c = 0; 4 > c; ++c) {
            var d = parseInt(b[c], 10).toString(16);
            b[c] = 1 == d.length ? "0" + d : d;
        }
        cp(a, b.join(""));
    }
    function cs(a, b, c) {
        a = {
            node: a
        };
        var d = b.getType();
        if ("GeometryCollection" == d) {
            var e = b.yd();
            var f = ds;
        } else "MultiPoint" == d ? (e = b.ke(), f = es) : "MultiLineString" == d ? (e = b.zd(), 
        f = fs) : "MultiPolygon" == d ? (e = b.Ad(), f = gs) : Pa(!1, 39);
        Tn(a, hs, f, e, c);
    }
    function is(a, b, c) {
        Tn({
            node: a
        }, js, ks, [ b ], c);
    }
    function ls(a, b, c) {
        var d = {
            node: a
        };
        b.c && a.setAttribute("id", b.c);
        a = b.K();
        var e = {
            address: 1,
            description: 1,
            name: 1,
            open: 1,
            phoneNumber: 1,
            styleUrl: 1,
            visibility: 1
        };
        e[b.a] = 1;
        var f = Object.keys(a || {}).sort().filter(function(a) {
            return !e[a];
        });
        if (0 < f.length) {
            var g = Rn(a, f);
            Tn(d, ms, ns, [ {
                names: f,
                values: g
            } ], c);
        }
        if (f = b.lb()) if (f = f.call(b, 0)) f = Array.isArray(f) ? f[0] : f, this.j && (a.Style = f), 
        (f = f.Fa()) && (a.name = f.Fa());
        f = os[c[c.length - 1].node.namespaceURI];
        a = Rn(a, f);
        Tn(d, ms, Qn, a, c, f);
        a = c[0];
        (b = b.getGeometry()) && (b = Zn(b, !0, a));
        Tn(d, ms, ds, [ b ], c);
    }
    function ps(a, b, c) {
        var d = b.ba();
        a = {
            node: a
        };
        a.layout = b.ga;
        a.stride = b.la();
        b = b.K();
        b.coordinates = d;
        d = qs[c[c.length - 1].node.namespaceURI];
        b = Rn(b, d);
        Tn(a, rs, Qn, b, c, d);
    }
    function ss(a, b, c) {
        b = b.$d();
        var d = b.shift();
        a = {
            node: a
        };
        Tn(a, ts, us, b, c);
        Tn(a, ts, vs, [ d ], c);
    }
    function ws(a, b) {
        dp(a, Math.round(1e6 * b) / 1e6);
    }
    var xs = P(dr, [ "Document", "Placemark" ]), As = P(dr, {
        Document: O(function(a, b, c) {
            Tn({
                node: a
            }, ys, zs, b, c, void 0, this);
        }),
        Placemark: O(ls)
    }), ys = P(dr, {
        Placemark: O(ls)
    }), Bs = P(dr, {
        Data: O(function(a, b, c) {
            a.setAttribute("name", b.name);
            a = {
                node: a
            };
            b = b.value;
            "object" == typeof b ? (null !== b && b.displayName && Tn(a, Bs, Qn, [ b.displayName ], c, [ "displayName" ]), 
            null !== b && b.value && Tn(a, Bs, Qn, [ b.value ], c, [ "value" ])) : Tn(a, Bs, Qn, [ b ], c, [ "value" ]);
        }),
        value: O(function(a, b) {
            cp(a, b);
        }),
        displayName: O(function(a, b) {
            a.appendChild(Cn.createCDATASection(b));
        })
    }), Cs = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry",
        GeometryCollection: "MultiGeometry"
    }, Ds = P(dr, [ "href" ], P(cr, [ "x", "y", "w", "h" ])), Es = P(dr, {
        href: O(cp)
    }, P(cr, {
        x: O(dp),
        y: O(dp),
        w: O(dp),
        h: O(dp)
    })), Fs = P(dr, [ "scale", "heading", "Icon", "hotSpot" ]), Hs = P(dr, {
        Icon: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = Ds[c[c.length - 1].node.namespaceURI], e = Rn(b, d);
            Tn(a, Es, Qn, e, c, d);
            d = Ds[cr[0]];
            e = Rn(b, d);
            Tn(a, Es, Gs, e, c, d);
        }),
        heading: O(dp),
        hotSpot: O(function(a, b) {
            a.setAttribute("x", b.x);
            a.setAttribute("y", b.y);
            a.setAttribute("xunits", b.Ih);
            a.setAttribute("yunits", b.Jh);
        }),
        scale: O(ws)
    }), Is = P(dr, [ "color", "scale" ]), Js = P(dr, {
        color: O(bs),
        scale: O(ws)
    }), Ks = P(dr, [ "color", "width" ]), Ls = P(dr, {
        color: O(bs),
        width: O(dp)
    }), js = P(dr, {
        LinearRing: O(ps)
    }), hs = P(dr, {
        LineString: O(ps),
        Point: O(ps),
        Polygon: O(ss),
        GeometryCollection: O(cs)
    }), os = P(dr, "name open visibility address phoneNumber description styleUrl Style".split(" ")), ms = P(dr, {
        ExtendedData: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = b.names;
            b = b.values;
            for (var e = d.length, f = 0; f < e; f++) Tn(a, Bs, Ms, [ {
                name: d[f],
                value: b[f]
            } ], c);
        }),
        MultiGeometry: O(cs),
        LineString: O(ps),
        LinearRing: O(ps),
        Point: O(ps),
        Polygon: O(ss),
        Style: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}, e = b.wa(), f = b.xa(), g = b.U();
            b = b.Fa();
            g instanceof of && (d.IconStyle = g);
            b && (d.LabelStyle = b);
            f && (d.LineStyle = f);
            e && (d.PolyStyle = e);
            b = Ns[c[c.length - 1].node.namespaceURI];
            d = Rn(d, b);
            Tn(a, Os, Qn, d, c, b);
        }),
        address: O(cp),
        description: O(cp),
        name: O(cp),
        open: O(bp),
        phoneNumber: O(cp),
        styleUrl: O(cp),
        visibility: O(bp)
    }), qs = P(dr, [ "extrude", "tessellate", "altitudeMode", "coordinates" ]), rs = P(dr, {
        extrude: O(bp),
        tessellate: O(bp),
        altitudeMode: O(cp),
        coordinates: O(function(a, b, c) {
            c = c[c.length - 1];
            var d = c.layout;
            c = c.stride;
            var e;
            "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : Pa(!1, 34);
            var f, g = b.length, h = "";
            if (0 < g) {
                h += b[0];
                for (d = 1; d < e; ++d) h += "," + b[d];
                for (f = c; f < g; f += c) for (h += " " + b[f], d = 1; d < e; ++d) h += "," + b[f + d];
            }
            cp(a, h);
        })
    }), ts = P(dr, {
        outerBoundaryIs: O(is),
        innerBoundaryIs: O(is)
    }), Ps = P(dr, {
        color: O(bs)
    }), Ns = P(dr, [ "IconStyle", "LabelStyle", "LineStyle", "PolyStyle" ]), Os = P(dr, {
        IconStyle: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}, e = b.ac(), f = b.Pe(), g = {
                href: b.b.g
            };
            if (e) {
                g.w = e[0];
                g.h = e[1];
                var h = b.ic(), l = b.Oc();
                l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));
                !h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = {
                    x: h[0],
                    Ih: "pixels",
                    y: e[1] - h[1],
                    Jh: "pixels"
                });
            }
            d.Icon = g;
            e = b.c;
            1 !== e && (d.scale = e);
            b = b.i;
            0 !== b && (d.heading = b);
            b = Fs[c[c.length - 1].node.namespaceURI];
            d = Rn(d, b);
            Tn(a, Hs, Qn, d, c, b);
        }),
        LabelStyle: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = {}, e = b.wa();
            e && (d.color = e.b);
            (b = b.a) && 1 !== b && (d.scale = b);
            b = Is[c[c.length - 1].node.namespaceURI];
            d = Rn(d, b);
            Tn(a, Js, Qn, d, c, b);
        }),
        LineStyle: O(function(a, b, c) {
            a = {
                node: a
            };
            var d = Ks[c[c.length - 1].node.namespaceURI];
            b = Rn({
                color: b.b,
                width: b.a
            }, d);
            Tn(a, Ls, Qn, b, c, d);
        }),
        PolyStyle: O(function(a, b, c) {
            Tn({
                node: a
            }, Ps, Qs, [ b.b ], c);
        })
    });
    function Gs(a, b, c) {
        return Dn(cr[0], "gx:" + c);
    }
    function zs(a, b) {
        return Dn(b[b.length - 1].node.namespaceURI, "Placemark");
    }
    function ds(a, b) {
        if (a) return Dn(b[b.length - 1].node.namespaceURI, Cs[a.getType()]);
    }
    var Qs = On("color"), Ms = On("Data"), ns = On("ExtendedData"), us = On("innerBoundaryIs"), es = On("Point"), fs = On("LineString"), ks = On("LinearRing"), gs = On("Polygon"), vs = On("outerBoundaryIs");
    oq.prototype.ec = function(a, b) {
        b = Yn(this, b);
        var c = Dn(dr[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", cr[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {
            node: c
        }, e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        a = xs[c.namespaceURI];
        e = Rn(e, a);
        Tn(d, As, Qn, e, [ b ], a, this);
        return c;
    };
    Ul.Pd = function() {};
    (function(a) {
        function b(a) {
            this.Ac = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
            this.type = this.ea = 0;
            this.length = this.Ac.length;
        }
        function c(a, b, c) {
            var e = c.Ac;
            var f = e[c.ea++];
            var g = (f & 112) >> 4;
            if (128 > f) return d(a, g, b);
            f = e[c.ea++];
            g |= (f & 127) << 3;
            if (128 > f) return d(a, g, b);
            f = e[c.ea++];
            g |= (f & 127) << 10;
            if (128 > f) return d(a, g, b);
            f = e[c.ea++];
            g |= (f & 127) << 17;
            if (128 > f) return d(a, g, b);
            f = e[c.ea++];
            g |= (f & 127) << 24;
            if (128 > f) return d(a, g, b);
            f = e[c.ea++];
            if (128 > f) return d(a, g | (f & 1) << 31, b);
            throw Error("Expected varint not more than 10 bytes");
        }
        function d(a, b, c) {
            return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0);
        }
        var e = {
            read: function(a, b, c, d, e) {
                var f = 8 * e - d - 1;
                var g = (1 << f) - 1, h = g >> 1, l = -7;
                e = c ? e - 1 : 0;
                var m = c ? -1 : 1, w = a[b + e];
                e += m;
                c = w & (1 << -l) - 1;
                w >>= -l;
                for (l += f; 0 < l; c = 256 * c + a[b + e], e += m, l -= 8) ;
                f = c & (1 << -l) - 1;
                c >>= -l;
                for (l += d; 0 < l; f = 256 * f + a[b + e], e += m, l -= 8) ;
                if (0 === c) c = 1 - h; else {
                    if (c === g) return f ? NaN : Infinity * (w ? -1 : 1);
                    f += Math.pow(2, d);
                    c -= h;
                }
                return (w ? -1 : 1) * f * Math.pow(2, c - d);
            },
            write: function(a, b, c, d, e, n) {
                var f, g = 8 * n - e - 1, h = (1 << g) - 1, l = h >> 1, m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                n = d ? 0 : n - 1;
                var z = d ? 1 : -1, A = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                b = Math.abs(b);
                isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = h) : (d = Math.floor(Math.log(b) / Math.LN2), 
                1 > b * (f = Math.pow(2, -d)) && (d--, f *= 2), b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l), 
                2 <= b * f && (d++, f /= 2), d + l >= h ? (b = 0, d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e), 
                d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e), d = 0));
                for (;8 <= e; a[c + n] = b & 255, n += z, b /= 256, e -= 8) ;
                d = d << e | b;
                for (g += e; 0 < g; a[c + n] = d & 255, n += z, d /= 256, g -= 8) ;
                a[c + n - z] |= 128 * A;
            }
        };
        b.c = 0;
        b.f = 1;
        b.b = 2;
        b.a = 5;
        b.prototype = {
            jh: function(a, b, c) {
                for (c = c || this.length; this.ea < c; ) {
                    var d = this.Wa(), e = d >> 3, f = this.ea;
                    this.type = d & 7;
                    a(e, b, this);
                    this.ea === f && this.Gr(d);
                }
                return b;
            },
            Uq: function() {
                var a = e.read(this.Ac, this.ea, !0, 23, 4);
                this.ea += 4;
                return a;
            },
            Qq: function() {
                var a = e.read(this.Ac, this.ea, !0, 52, 8);
                this.ea += 8;
                return a;
            },
            Wa: function(a) {
                var b = this.Ac;
                var d = b[this.ea++];
                var e = d & 127;
                if (128 > d) return e;
                d = b[this.ea++];
                e |= (d & 127) << 7;
                if (128 > d) return e;
                d = b[this.ea++];
                e |= (d & 127) << 14;
                if (128 > d) return e;
                d = b[this.ea++];
                e |= (d & 127) << 21;
                if (128 > d) return e;
                d = b[this.ea];
                return c(e | (d & 15) << 28, a, this);
            },
            fr: function() {
                return this.Wa(!0);
            },
            ph: function() {
                var a = this.Wa();
                return 1 === a % 2 ? (a + 1) / -2 : a / 2;
            },
            Oq: function() {
                return !!this.Wa();
            },
            qh: function() {
                for (var a = this.Wa() + this.ea, b = this.Ac, c = "", d = this.ea; d < a; ) {
                    var e = b[d], n = null, p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                    if (d + p > a) break;
                    if (1 === p) 128 > e && (n = e); else if (2 === p) {
                        var q = b[d + 1];
                        128 === (q & 192) && (n = (e & 31) << 6 | q & 63, 127 >= n && (n = null));
                    } else if (3 === p) {
                        q = b[d + 1];
                        var r = b[d + 2];
                        128 === (q & 192) && 128 === (r & 192) && (n = (e & 15) << 12 | (q & 63) << 6 | r & 63, 
                        2047 >= n || 55296 <= n && 57343 >= n) && (n = null);
                    } else if (4 === p) {
                        q = b[d + 1];
                        r = b[d + 2];
                        var u = b[d + 3];
                        128 === (q & 192) && 128 === (r & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (r & 63) << 6 | u & 63, 
                        65535 >= n || 1114112 <= n) && (n = null);
                    }
                    null === n ? (n = 65533, p = 1) : 65535 < n && (n -= 65536, c += String.fromCharCode(n >>> 10 & 1023 | 55296), 
                    n = 56320 | n & 1023);
                    c += String.fromCharCode(n);
                    d += p;
                }
                this.ea = a;
                return c;
            },
            Gr: function(a) {
                a &= 7;
                if (a === b.c) for (;127 < this.Ac[this.ea++]; ) ; else if (a === b.b) this.ea = this.Wa() + this.ea; else if (a === b.a) this.ea += 4; else if (a === b.f) this.ea += 8; else throw Error("Unimplemented type: " + a);
            }
        };
        a["default"] = b;
    })(Ul.Pd = Ul.Pd || {});
    Ul.Pd = Ul.Pd.default;
    function Rs(a, b, c, d, e) {
        this.l = e;
        this.g = a;
        this.b = b;
        this.a = this.c = null;
        this.f = c;
        this.j = d;
        this.o = ad();
    }
    k = Rs.prototype;
    k.get = function(a) {
        return this.j[a];
    };
    k.qb = Rs.prototype.wd = function() {
        return this.f;
    };
    k.A = function() {
        this.i || (this.i = "Point" === this.g ? db(this.b) : eb(this.b, 0, this.b.length, 2));
        return this.i;
    };
    k.Zd = function() {
        if (!this.c) {
            var a = rb(this.A());
            this.c = Rd(this.b, 0, this.f, 2, a, 0);
        }
        return this.c;
    };
    k.Ne = function() {
        this.a || (this.a = Bd(this.b, 0, this.b.length, 2, .5));
        return this.a;
    };
    k.Oe = function() {
        if (!this.a) {
            this.a = [];
            for (var a = this.b, b = 0, c = this.f, d = 0, e = c.length; d < e; ++d) {
                var f = c[d];
                b = Bd(a, b, f, 2, .5);
                Ga(this.a, b);
                b = f;
            }
        }
        return this.a;
    };
    k.mp = function() {
        return this.l;
    };
    k.$b = function() {
        return this.b;
    };
    k.ba = Rs.prototype.$b;
    k.getGeometry = function() {
        return this;
    };
    k.np = function() {
        return this.j;
    };
    k.ae = Rs.prototype.getGeometry;
    k.la = function() {
        return 2;
    };
    k.lb = Ba;
    k.getType = function() {
        return this.g;
    };
    k.transform = function(a) {
        var b = a.A();
        a = a.ve;
        b = qb(a) / qb(b);
        var c = this.o;
        jd(c, a[0], a[3], b, -b, 0, 0, 0);
        ac(this.b, 0, this.b.length, 2, c, this.b);
    };
    function Ss(a) {
        Wn.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new tc({
            code: "EPSG:3857",
            units: "tile-pixels"
        });
        this.b = a.featureClass ? a.featureClass : Rs;
        this.f = a.geometryName;
        this.g = a.layerName ? a.layerName : "layer";
        this.c = a.layers ? a.layers : null;
        this.a = null;
    }
    v(Ss, Wn);
    function Ts(a, b, c) {
        if (3 === a) {
            a = {
                keys: [],
                values: [],
                features: []
            };
            var d = c.Wa() + c.ea;
            c.jh(Us, a, d);
            a.length = a.features.length;
            a.length && (b[a.name] = a);
        }
    }
    function Us(a, b, c) {
        if (15 === a) b.version = c.Wa(); else if (1 === a) b.name = c.qh(); else if (5 === a) b.extent = c.Wa(); else if (2 === a) b.features.push(c.ea); else if (3 === a) b.keys.push(c.qh()); else if (4 === a) {
            a = null;
            for (var d = c.Wa() + c.ea; c.ea < d; ) a = c.Wa() >> 3, a = 1 === a ? c.qh() : 2 === a ? c.Uq() : 3 === a ? c.Qq() : 4 === a ? c.fr() : 5 === a ? c.Wa() : 6 === a ? c.ph() : 7 === a ? c.Oq() : null;
            b.values.push(a);
        }
    }
    function Vs(a, b, c) {
        if (1 == a) b.id = c.Wa(); else if (2 == a) for (a = c.Wa() + c.ea; c.ea < a; ) {
            var d = b.layer.keys[c.Wa()], e = b.layer.values[c.Wa()];
            b.properties[d] = e;
        } else 3 == a ? b.type = c.Wa() : 4 == a && (b.geometry = c.ea);
    }
    function Ws(a, b, c) {
        var d = c.type;
        if (0 === d) return null;
        var e = c.id, f = c.properties;
        f[a.g] = c.layer.name;
        var g = [];
        var h = [], l = h;
        b.ea = c.geometry;
        c = b.Wa() + b.ea;
        for (var m = 1, n = 0, p = 0, q = 0, r = 0, u = 0; b.ea < c; ) n || (n = b.Wa(), 
        m = n & 7, n >>= 3), n--, 1 === m || 2 === m ? (p += b.ph(), q += b.ph(), 1 === m && r > u && (l.push(r), 
        u = r), g.push(p, q), r += 2) : 7 === m ? r > u && (g.push(g[u], g[u + 1]), r += 2) : Pa(!1, 59);
        r > u && l.push(r);
        b = h.length;
        var w;
        1 === d ? w = 1 === b ? "Point" : "MultiPoint" : 2 === d ? w = 1 === b ? "LineString" : "MultiLineString" : 3 === d && (w = "Polygon");
        d = w;
        if (a.b === Rs) g = new a.b(d, g, h, f, e); else {
            if ("Polygon" == d) {
                d = [];
                l = b = w = 0;
                for (c = h.length; l < c; ++l) m = h[l], Sd(g, w, m, 2) || (d.push(h.slice(b, l)), 
                b = l), w = m;
                1 < d.length ? (h = d, d = new H(null)) : d = new D(null);
            } else d = "Point" === d ? new C(null) : "LineString" === d ? new B(null) : "Polygon" === d ? new D(null) : "MultiPoint" === d ? new G(null) : "MultiLineString" === d ? new F(null) : null;
            d.Y("XY", g, h);
            g = new a.b();
            a.f && g.Rc(a.f);
            a = Zn(d, !1, Yn(a, void 0));
            g.setGeometry(a);
            g.tc(e);
            g.H(f);
        }
        return g;
    }
    k = Ss.prototype;
    k.mg = function() {
        return this.a;
    };
    k.getType = function() {
        return "arraybuffer";
    };
    k.Sa = function(a) {
        var b = this.c;
        a = new Ul.Pd(a);
        var c = a.jh(Ts, {}), d = [], e;
        for (e in c) if (!b || -1 != b.indexOf(e)) {
            var f = c[e];
            for (var g, h = 0, l = f.length; h < l; ++h) {
                g = a;
                var m = f;
                g.ea = m.features[h];
                var n = g.Wa() + g.ea;
                m = {
                    layer: m,
                    type: 0,
                    properties: {}
                };
                g.jh(Vs, m, n);
                g = m;
                d.push(Ws(this, a, g));
            }
            this.a = f ? [ 0, 0, f.extent, f.extent ] : null;
        }
        return d;
    };
    k.tb = function() {
        return this.defaultDataProjection;
    };
    k.Do = function(a) {
        this.c = a;
    };
    k.bc = function() {};
    k.jd = function() {};
    k.Nd = function() {};
    k.qd = function() {};
    k.dc = function() {};
    function Xs() {
        Qo.call(this);
        this.defaultDataProjection = Lc("EPSG:4326");
    }
    v(Xs, Qo);
    function Ys(a, b) {
        b[b.length - 1].se[a.getAttribute("k")] = a.getAttribute("v");
    }
    var Zs = [ null ], $s = P(Zs, {
        nd: function(a, b) {
            b[b.length - 1].Dd.push(a.getAttribute("ref"));
        },
        tag: Ys
    }), bt = P(Zs, {
        node: function(a, b) {
            var c = b[0], d = b[b.length - 1], e = a.getAttribute("id"), f = [ parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat")) ];
            d.Ei[e] = f;
            a = Q({
                se: {}
            }, at, a, b);
            Db(a.se) || (f = new C(f), Zn(f, !1, c), c = new xf(f), c.tc(e), c.H(a.se), d.features.push(c));
        },
        way: function(a, b) {
            var c = a.getAttribute("id");
            a = Q({
                id: c,
                Dd: [],
                se: {}
            }, $s, a, b);
            b[b.length - 1].Fh.push(a);
        }
    }), at = P(Zs, {
        tag: Ys
    });
    Xs.prototype.Qc = function(a, b) {
        b = Xn(this, a, b);
        if ("osm" == a.localName) {
            a = Q({
                Ei: {},
                Fh: [],
                features: []
            }, bt, a, [ b ]);
            for (var c = 0; c < a.Fh.length; c++) {
                for (var d = a.Fh[c], e = [], f = 0, g = d.Dd.length; f < g; f++) Ga(e, a.Ei[d.Dd[f]]);
                d.Dd[0] == d.Dd[d.Dd.length - 1] ? (f = new D(null), f.Y("XY", e, [ e.length ])) : (f = new B(null), 
                f.Y("XY", e));
                Zn(f, !1, b);
                e = new xf(f);
                e.tc(d.id);
                e.H(d.se);
                a.features.push(e);
            }
            if (a.features) return a.features;
        }
        return [];
    };
    Xs.prototype.Gh = function() {};
    Xs.prototype.ec = function() {};
    Xs.prototype.ye = function() {};
    function ct(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href");
    }
    function dt() {}
    dt.prototype.read = function(a) {
        return Gn(a) ? this.a(a) : Hn(a) ? this.b(a) : "string" === typeof a ? (a = In(a), 
        this.a(a)) : null;
    };
    function et() {}
    v(et, dt);
    et.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null;
    };
    et.prototype.b = function(a) {
        return (a = Q({}, ft, a, [])) ? a : null;
    };
    var gt = [ null, "http://www.opengis.net/ows/1.1" ], ft = P(gt, {
        ServiceIdentification: N(function(a, b) {
            return Q({}, ht, a, b);
        }),
        ServiceProvider: N(function(a, b) {
            return Q({}, it, a, b);
        }),
        OperationsMetadata: N(function(a, b) {
            return Q({}, jt, a, b);
        })
    }), kt = P(gt, {
        DeliveryPoint: N(R),
        City: N(R),
        AdministrativeArea: N(R),
        PostalCode: N(R),
        Country: N(R),
        ElectronicMailAddress: N(R)
    }), lt = P(gt, {
        Value: Mn(function(a) {
            return R(a);
        })
    }), mt = P(gt, {
        AllowedValues: N(function(a, b) {
            return Q({}, lt, a, b);
        })
    }), ot = P(gt, {
        Phone: N(function(a, b) {
            return Q({}, nt, a, b);
        }),
        Address: N(function(a, b) {
            return Q({}, kt, a, b);
        })
    }), qt = P(gt, {
        HTTP: N(function(a, b) {
            return Q({}, pt, a, b);
        })
    }), pt = P(gt, {
        Get: Mn(function(a, b) {
            var c = ct(a);
            if (c) return Q({
                href: c
            }, rt, a, b);
        }),
        Post: void 0
    }), st = P(gt, {
        DCP: N(function(a, b) {
            return Q({}, qt, a, b);
        })
    }), jt = P(gt, {
        Operation: function(a, b) {
            var c = a.getAttribute("name");
            (a = Q({}, st, a, b)) && (b[b.length - 1][c] = a);
        }
    }), nt = P(gt, {
        Voice: N(R),
        Facsimile: N(R)
    }), rt = P(gt, {
        Constraint: Mn(function(a, b) {
            var c = a.getAttribute("name");
            if (c) return Q({
                name: c
            }, mt, a, b);
        })
    }), tt = P(gt, {
        IndividualName: N(R),
        PositionName: N(R),
        ContactInfo: N(function(a, b) {
            return Q({}, ot, a, b);
        })
    }), ht = P(gt, {
        Abstract: N(R),
        AccessConstraints: N(R),
        Fees: N(R),
        Title: N(R),
        ServiceTypeVersion: N(R),
        ServiceType: N(R)
    }), it = P(gt, {
        ProviderName: N(R),
        ProviderSite: N(ct),
        ServiceContact: N(function(a, b) {
            return Q({}, tt, a, b);
        })
    });
    function ut(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b; ) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g) e[d++] = a[f++];
        }
        e.length = d;
    }
    function vt(a) {
        a = a ? a : {};
        Wn.call(this);
        this.defaultDataProjection = Lc("EPSG:4326");
        this.b = a.factor ? a.factor : 1e5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY";
    }
    v(vt, hq);
    function wt(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d) e[d] = 0;
        var f;
        var g = 0;
        for (f = a.length; g < f; ) for (d = 0; d < b; ++d, ++g) {
            var h = a[g], l = h - e[d];
            e[d] = h;
            a[g] = l;
        }
        return xt(a, c ? c : 1e5);
    }
    function yt(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d) e[d] = 0;
        a = zt(a, c ? c : 1e5);
        var f;
        c = 0;
        for (f = a.length; c < f; ) for (d = 0; d < b; ++d, ++c) e[d] += a[c], a[c] = e[d];
        return a;
    }
    function xt(a, b) {
        b = b ? b : 1e5;
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d) a[d] = Math.round(a[d] * b);
        b = 0;
        for (d = a.length; b < d; ++b) c = a[b], a[b] = 0 > c ? ~(c << 1) : c << 1;
        b = "";
        d = 0;
        for (c = a.length; d < c; ++d) {
            for (var e, f = a[d], g = ""; 32 <= f; ) e = (32 | f & 31) + 63, g += String.fromCharCode(e), 
            f >>= 5;
            g += String.fromCharCode(f + 63);
            b += g;
        }
        return b;
    }
    function zt(a, b) {
        b = b ? b : 1e5;
        var c = [], d = 0, e = 0, f;
        var g = 0;
        for (f = a.length; g < f; ++g) {
            var h = a.charCodeAt(g) - 63;
            d |= (h & 31) << e;
            32 > h ? (c.push(d), e = d = 0) : e += 5;
        }
        a = 0;
        for (d = c.length; a < d; ++a) e = c[a], c[a] = e & 1 ? ~(e >> 1) : e >> 1;
        a = 0;
        for (d = c.length; a < d; ++a) c[a] /= b;
        return c;
    }
    k = vt.prototype;
    k.me = function(a, b) {
        a = this.Jd(a, b);
        return new xf(a);
    };
    k.ih = function(a, b) {
        return [ this.me(a, b) ];
    };
    k.Jd = function(a, b) {
        var c = nd(this.a);
        a = yt(a, c, this.b);
        ut(a, a.length, c, a);
        c = yd(a, 0, a.length, c);
        return Zn(new B(c, this.a), !1, Yn(this, b));
    };
    k.we = function(a, b) {
        if (a = a.getGeometry()) return this.Od(a, b);
        Pa(!1, 40);
        return "";
    };
    k.Hh = function(a, b) {
        return this.we(a[0], b);
    };
    k.Od = function(a, b) {
        a = Zn(a, !0, Yn(this, b));
        b = a.ba();
        a = a.la();
        ut(b, b.length, a, b);
        return wt(b, a, this.b);
    };
    function At(a) {
        a = a ? a : {};
        Wn.call(this);
        this.a = a.layerName;
        this.b = a.layers ? a.layers : null;
        this.defaultDataProjection = Lc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
    }
    v(At, $n);
    function Bt(a, b) {
        var c = [], d, e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            0 < f && c.pop();
            0 <= g ? d = b[g] : d = b[~g].slice().reverse();
            c.push.apply(c, d);
        }
        a = 0;
        for (b = c.length; a < b; ++a) c[a] = c[a].slice();
        return c;
    }
    function Ct(a, b, c, d, e, f, g) {
        a = a.geometries;
        var h = [], l;
        var m = 0;
        for (l = a.length; m < l; ++m) h[m] = Dt(a[m], b, c, d, e, f, g);
        return h;
    }
    function Dt(a, b, c, d, e, f, g) {
        var h = a.type, l = Et[h];
        c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
        b = new xf();
        b.setGeometry(Zn(c, !1, g));
        void 0 !== a.id && b.tc(a.id);
        a = a.properties;
        e && (a || (a = {}), a[e] = f);
        a && b.H(a);
        return b;
    }
    At.prototype.hh = function(a, b) {
        if ("Topology" == a.type) {
            var c = null, d = null;
            if (a.transform) {
                var e = a.transform;
                c = e.scale;
                d = e.translate;
            }
            var f = a.arcs;
            if (e) {
                e = c;
                var g = d, h;
                var l = 0;
                for (h = f.length; l < h; ++l) {
                    var m, n = f[l], p = e, q = g, r = 0, u = 0;
                    var w = 0;
                    for (m = n.length; w < m; ++w) {
                        var z = n[w];
                        r += z[0];
                        u += z[1];
                        z[0] = r;
                        z[1] = u;
                        Ft(z, p, q);
                    }
                }
            }
            e = [];
            a = a.objects;
            g = this.a;
            for (var A in a) this.b && -1 == this.b.indexOf(A) || ("GeometryCollection" === a[A].type ? (l = a[A], 
            e.push.apply(e, Ct(l, f, c, d, g, A, b))) : (l = a[A], e.push(Dt(l, f, c, d, g, A, b))));
            return e;
        }
        return [];
    };
    function Ft(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1];
    }
    At.prototype.oh = function() {
        return this.defaultDataProjection;
    };
    var Et = {
        Point: function(a, b, c) {
            a = a.coordinates;
            b && c && Ft(a, b, c);
            return new C(a);
        },
        LineString: function(a, b) {
            a = Bt(a.arcs, b);
            return new B(a);
        },
        Polygon: function(a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e) c[e] = Bt(a.arcs[e], b);
            return new D(c);
        },
        MultiPoint: function(a, b, c) {
            a = a.coordinates;
            var d;
            if (b && c) {
                var e = 0;
                for (d = a.length; e < d; ++e) Ft(a[e], b, c);
            }
            return new G(a);
        },
        MultiLineString: function(a, b) {
            var c = [], d;
            var e = 0;
            for (d = a.arcs.length; e < d; ++e) c[e] = Bt(a.arcs[e], b);
            return new F(c);
        },
        MultiPolygon: function(a, b) {
            var c = [], d, e;
            var f = 0;
            for (e = a.arcs.length; f < e; ++f) {
                var g = a.arcs[f];
                var h = [];
                var l = 0;
                for (d = g.length; l < d; ++l) h[l] = Bt(g[l], b);
                c[f] = h;
            }
            return new H(c);
        }
    };
    k = At.prototype;
    k.pd = function() {};
    k.xe = function() {};
    k.ze = function() {};
    k.lh = function() {};
    k.hd = function() {};
    function Gt(a) {
        a = a ? a : {};
        this.c = a.featureType;
        this.a = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new fp();
        this.l = a.schemaLocation ? a.schemaLocation : Ht["1.1.0"];
        Qo.call(this);
    }
    v(Gt, Qo);
    var Ht = {
        "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
        "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
    };
    Gt.prototype.Qc = function(a, b) {
        var c = {
            featureType: this.c,
            featureNS: this.a
        };
        Ab(c, Xn(this, a, b ? b : {}));
        b = [ c ];
        this.b.b["http://www.opengis.net/gml"].featureMember = Kn(To.prototype.ne);
        (a = Q([], this.b.b, a, b, this.b)) || (a = []);
        return a;
    };
    Gt.prototype.j = function(a) {
        if (Gn(a)) return It(a);
        if (Hn(a)) return Q({}, Jt, a, []);
        if ("string" === typeof a) return a = In(a), It(a);
    };
    Gt.prototype.g = function(a) {
        if (Gn(a)) return Kt(this, a);
        if (Hn(a)) return Lt(this, a);
        if ("string" === typeof a) return a = In(a), Kt(this, a);
    };
    function Kt(a, b) {
        for (b = b.firstChild; b; b = b.nextSibling) if (b.nodeType == Node.ELEMENT_NODE) return Lt(a, b);
    }
    var Mt = {
        "http://www.opengis.net/gml": {
            boundedBy: N(To.prototype.Bf, "bounds")
        }
    };
    function Lt(a, b) {
        var c = {}, d = ap(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return Q(c, Mt, b, [], a.b);
    }
    var Nt = {
        "http://www.opengis.net/wfs": {
            totalInserted: N($o),
            totalUpdated: N($o),
            totalDeleted: N($o)
        }
    }, Ot = {
        "http://www.opengis.net/ogc": {
            FeatureId: Kn(function(a) {
                return a.getAttribute("fid");
            })
        }
    }, Pt = {
        "http://www.opengis.net/wfs": {
            Feature: function(a, b) {
                Sn(Ot, a, b);
            }
        }
    }, Jt = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: N(function(a, b) {
                return Q({}, Nt, a, b);
            }, "transactionSummary"),
            InsertResults: N(function(a, b) {
                return Q([], Pt, a, b);
            }, "insertIds")
        }
    };
    function It(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType == Node.ELEMENT_NODE) return Q({}, Jt, a, []);
    }
    var Qt = {
        "http://www.opengis.net/wfs": {
            PropertyName: O(cp)
        }
    };
    function Rt(a, b) {
        var c = Dn("http://www.opengis.net/ogc", "Filter"), d = Dn("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c);
    }
    function St(a, b) {
        a = (a ? a : "feature") + ":";
        return 0 === b.indexOf(a) ? b : a + b;
    }
    var Tt = {
        "http://www.opengis.net/wfs": {
            Insert: O(function(a, b, c) {
                var d = c[c.length - 1], e = d.gmlVersion;
                d = Dn(d.featureNS, d.featureType);
                a.appendChild(d);
                if (2 === e) {
                    a = op.prototype;
                    (e = b.c) && d.setAttribute("fid", e);
                    e = c[c.length - 1];
                    var f = e.featureNS, g = b.a;
                    e.ub || (e.ub = {}, e.ub[f] = {});
                    var h = b.K();
                    b = [];
                    var l = [];
                    for (n in h) {
                        var m = h[n];
                        null !== m && (b.push(n), l.push(m), n == g || m instanceof ld ? n in e.ub[f] || (e.ub[f][n] = O(a.Oi, a)) : n in e.ub[f] || (e.ub[f][n] = O(cp)));
                    }
                    var n = Ab({}, e);
                    n.node = d;
                    Tn(n, e.ub, On(void 0, f), l, c, b);
                } else fp.prototype.Wi(d, b, c);
            }),
            Update: O(function(a, b, c) {
                var d = c[c.length - 1];
                Pa(void 0 !== b.c, 27);
                var e = d.featurePrefix, f = d.featureNS, g = b.a;
                a.setAttribute("typeName", St(e, d.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                e = b.c;
                if (void 0 !== e) {
                    f = b.N();
                    for (var h = [], l = 0, m = f.length; l < m; l++) {
                        var n = b.get(f[l]);
                        if (void 0 !== n) {
                            var p = f[l];
                            n instanceof ld && (p = g);
                            h.push({
                                name: p,
                                value: n
                            });
                        }
                    }
                    Tn({
                        gmlVersion: d.gmlVersion,
                        node: a,
                        hasZ: d.hasZ,
                        srsName: d.srsName
                    }, Tt, On("Property"), h, c);
                    Rt(a, e);
                }
            }),
            Delete: O(function(a, b, c) {
                c = c[c.length - 1];
                Pa(void 0 !== b.c, 26);
                var d = c.featurePrefix, e = c.featureNS;
                a.setAttribute("typeName", St(d, c.featureType));
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
                b = b.c;
                void 0 !== b && Rt(a, b);
            }),
            Property: O(function(a, b, c) {
                var d = Dn("http://www.opengis.net/wfs", "Name"), e = c[c.length - 1].gmlVersion;
                a.appendChild(d);
                cp(d, b.name);
                void 0 !== b.value && null !== b.value && (d = Dn("http://www.opengis.net/wfs", "Value"), 
                a.appendChild(d), b.value instanceof ld ? 2 === e ? op.prototype.Oi(d, b.value, c) : fp.prototype.bd(d, b.value, c) : cp(d, b.value));
            }),
            Native: O(function(a, b) {
                b.Qr && a.setAttribute("vendorId", b.Qr);
                void 0 !== b.kr && a.setAttribute("safeToIgnore", b.kr);
                void 0 !== b.value && cp(a, b.value);
            })
        }
    };
    function Ut(a, b, c) {
        a = {
            node: a
        };
        b = b.b;
        for (var d = 0, e = b.length; d < e; ++d) {
            var f = b[d];
            Tn(a, Vt, On(f.wc), [ f ], c);
        }
    }
    function Wt(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        Xt(a, b.b);
        Yt(a, "" + b.f);
    }
    function Zt(a, b, c) {
        a = Dn("http://www.opengis.net/ogc", a);
        cp(a, c);
        b.appendChild(a);
    }
    function Xt(a, b) {
        Zt("PropertyName", a, b);
    }
    function Yt(a, b) {
        Zt("Literal", a, b);
    }
    function $t(a, b) {
        var c = Dn("http://www.opengis.net/gml", "TimeInstant");
        a.appendChild(c);
        a = Dn("http://www.opengis.net/gml", "timePosition");
        c.appendChild(a);
        cp(a, b);
    }
    var Vt = {
        "http://www.opengis.net/wfs": {
            Query: O(function(a, b, c) {
                var d = c[c.length - 1], e = d.featurePrefix, f = d.featureNS, g = d.propertyNames, h = d.srsName;
                a.setAttribute("typeName", e ? St(e, b) : b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = Ab({}, d);
                b.node = a;
                Tn(b, Qt, On("PropertyName"), g, c);
                if (d = d.filter) g = Dn("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), 
                Tn({
                    node: g
                }, Vt, On(d.wc), [ d ], c);
            })
        },
        "http://www.opengis.net/ogc": {
            During: O(function(a, b) {
                var c = Dn("http://www.opengis.net/fes", "ValueReference");
                cp(c, b.b);
                a.appendChild(c);
                c = Dn("http://www.opengis.net/gml", "TimePeriod");
                a.appendChild(c);
                a = Dn("http://www.opengis.net/gml", "begin");
                c.appendChild(a);
                $t(a, b.a);
                a = Dn("http://www.opengis.net/gml", "end");
                c.appendChild(a);
                $t(a, b.f);
            }),
            And: O(Ut),
            Or: O(Ut),
            Not: O(function(a, b, c) {
                b = b.condition;
                Tn({
                    node: a
                }, Vt, On(b.wc), [ b ], c);
            }),
            BBOX: O(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Xt(a, b.geometryName);
                fp.prototype.bd(a, b.extent, c);
            }),
            Contains: O(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Xt(a, b.geometryName);
                fp.prototype.bd(a, b.geometry, c);
            }),
            Intersects: O(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Xt(a, b.geometryName);
                fp.prototype.bd(a, b.geometry, c);
            }),
            Within: O(function(a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                Xt(a, b.geometryName);
                fp.prototype.bd(a, b.geometry, c);
            }),
            PropertyIsEqualTo: O(Wt),
            PropertyIsNotEqualTo: O(Wt),
            PropertyIsLessThan: O(Wt),
            PropertyIsLessThanOrEqualTo: O(Wt),
            PropertyIsGreaterThan: O(Wt),
            PropertyIsGreaterThanOrEqualTo: O(Wt),
            PropertyIsNull: O(function(a, b) {
                Xt(a, b.b);
            }),
            PropertyIsBetween: O(function(a, b) {
                Xt(a, b.b);
                var c = Dn("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                Yt(c, "" + b.a);
                c = Dn("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                Yt(c, "" + b.f);
            }),
            PropertyIsLike: O(function(a, b) {
                a.setAttribute("wildCard", b.g);
                a.setAttribute("singleChar", b.i);
                a.setAttribute("escapeChar", b.f);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                Xt(a, b.b);
                Yt(a, "" + b.c);
            })
        }
    };
    Gt.prototype.o = function(a) {
        var b = Dn("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        if (a) {
            a.handle && b.setAttribute("handle", a.handle);
            a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
            void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
            a.resultType && b.setAttribute("resultType", a.resultType);
            void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
            void 0 !== a.count && b.setAttribute("count", a.count);
            var c = a.filter;
            if (a.bbox) {
                Pa(a.geometryName, 12);
                var d = Go(a.geometryName, a.bbox, a.srsName);
                c ? c = Fo(c, d) : c = d;
            }
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
        c = {
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.a,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        };
        Pa(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [ c ];
        d = Ab({}, c[c.length - 1]);
        d.node = b;
        Tn(d, Vt, On("Query"), a, c);
        return b;
    };
    Gt.prototype.u = function(a, b, c, d) {
        var e = [], f = Dn("http://www.opengis.net/wfs", "Transaction"), g = d.version ? d.version : "1.1.0", h = "1.0.0" === g ? 2 : 3;
        f.setAttribute("service", "WFS");
        f.setAttribute("version", g);
        if (d) {
            var l = d.gmlOptions ? d.gmlOptions : {};
            d.handle && f.setAttribute("handle", d.handle);
        }
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", Ht[g]);
        var m = d.featurePrefix ? d.featurePrefix : "feature";
        a && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        }, Ab(g, l), Tn(g, Tt, On("Insert"), a, e));
        b && (g = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            hasZ: d.hasZ,
            srsName: d.srsName
        }, Ab(g, l), Tn(g, Tt, On("Update"), b, e));
        c && Tn({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, Tt, On("Delete"), c, e);
        d.nativeElements && Tn({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: m,
            gmlVersion: h,
            srsName: d.srsName
        }, Tt, On("Native"), d.nativeElements, e);
        return f;
    };
    Gt.prototype.nh = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType == Node.ELEMENT_NODE) return this.Ef(a);
        return null;
    };
    Gt.prototype.Ef = function(a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild) for (a = a.firstElementChild.firstElementChild, 
        a = a.firstElementChild; a; a = a.nextElementSibling) if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var b = [ {} ];
            this.b.Bf(a, b);
            return Lc(b.pop().srsName);
        }
        return null;
    };
    function au(a) {
        a = a ? a : {};
        Wn.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1;
    }
    v(au, hq);
    function bu(a) {
        a = a.S();
        return 0 === a.length ? "" : a.join(" ");
    }
    function cu(a) {
        a = a.S();
        for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a[c].join(" "));
        return b.join(",");
    }
    function du(a) {
        var b = [];
        a = a.$d();
        for (var c = 0, d = a.length; c < d; ++c) b.push("(" + cu(a[c]) + ")");
        return b.join(",");
    }
    function eu(a) {
        var b = a.getType(), c = (0, fu[b])(a);
        b = b.toUpperCase();
        if (a instanceof md) {
            a = a.ga;
            var d = "";
            if ("XYZ" === a || "XYZM" === a) d += "Z";
            if ("XYM" === a || "XYZM" === a) d += "M";
            a = d;
            0 < a.length && (b += " " + a);
        }
        return 0 === c.length ? b + " EMPTY" : b + "(" + c + ")";
    }
    var fu = {
        Point: bu,
        LineString: cu,
        Polygon: du,
        MultiPoint: function(a) {
            var b = [];
            a = a.ke();
            for (var c = 0, d = a.length; c < d; ++c) b.push("(" + bu(a[c]) + ")");
            return b.join(",");
        },
        MultiLineString: function(a) {
            var b = [];
            a = a.zd();
            for (var c = 0, d = a.length; c < d; ++c) b.push("(" + cu(a[c]) + ")");
            return b.join(",");
        },
        MultiPolygon: function(a) {
            var b = [];
            a = a.Ad();
            for (var c = 0, d = a.length; c < d; ++c) b.push("(" + du(a[c]) + ")");
            return b.join(",");
        },
        GeometryCollection: function(a) {
            var b = [];
            a = a.yd();
            for (var c = 0, d = a.length; c < d; ++c) b.push(eu(a[c]));
            return b.join(",");
        }
    };
    k = au.prototype;
    k.me = function(a, b) {
        return (a = this.Jd(a, b)) ? (b = new xf(), b.setGeometry(a), b) : null;
    };
    k.ih = function(a, b) {
        var c = [];
        a = this.Jd(a, b);
        this.b && "GeometryCollection" == a.getType() ? c = a.a : c = [ a ];
        b = [];
        for (var d = 0, e = c.length; d < e; ++d) a = new xf(), a.setGeometry(c[d]), b.push(a);
        return b;
    };
    k.Jd = function(a, b) {
        a = new gu(new hu(a));
        iu(a);
        return (a = ju(a)) ? Zn(a, !1, b) : null;
    };
    k.we = function(a, b) {
        return (a = a.getGeometry()) ? this.Od(a, b) : "";
    };
    k.Hh = function(a, b) {
        if (1 == a.length) return this.we(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a[d].getGeometry());
        a = new Ho(c);
        return this.Od(a, b);
    };
    k.Od = function(a, b) {
        return eu(Zn(a, !0, b));
    };
    function hu(a) {
        this.a = a;
        this.b = -1;
    }
    function ku(a) {
        var b = a.a.charAt(++a.b), c = {
            position: a.b,
            value: b
        };
        if ("(" == b) c.type = 2; else if ("," == b) c.type = 5; else if (")" == b) c.type = 3; else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            b = a.b;
            var d = !1, e = !1;
            do {
                if ("." == f) d = !0; else if ("e" == f || "E" == f) e = !0;
                var f = a.a.charAt(++a.b);
            } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a;
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do f = a.a.charAt(++a.b); while ("a" <= f && "z" >= f || "A" <= f && "Z" >= f);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a;
        } else {
            if (" " == b || "	" == b || "\r" == b || "\n" == b) return ku(a);
            if ("" === b) c.type = 6; else throw Error("Unexpected character: " + b);
        }
        return c;
    }
    function gu(a) {
        this.f = a;
        this.a = "XY";
    }
    function iu(a) {
        a.b = ku(a.f);
    }
    function lu(a, b) {
        (b = a.b.type == b) && iu(a);
        return b;
    }
    function ju(a) {
        var b = a.b;
        if (lu(a, 1)) {
            b = b.value;
            var c = "XY", d = a.b;
            1 == a.b.type && (d = d.value, "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"), 
            "XY" !== c && iu(a));
            a.a = c;
            if ("GEOMETRYCOLLECTION" == b) {
                a: {
                    if (lu(a, 2)) {
                        b = [];
                        do b.push(ju(a)); while (lu(a, 5));
                        if (lu(a, 3)) {
                            a = b;
                            break a;
                        }
                    } else if (mu(a)) {
                        a = [];
                        break a;
                    }
                    throw Error(nu(a));
                }
                return new Ho(a);
            }
            d = ou[b];
            c = pu[b];
            if (!d || !c) throw Error("Invalid geometry type: " + b);
            b = d.call(a);
            return new c(b, a.a);
        }
        throw Error(nu(a));
    }
    k = gu.prototype;
    k.bh = function() {
        if (lu(this, 2)) {
            var a = qu(this);
            if (lu(this, 3)) return a;
        } else if (mu(this)) return null;
        throw Error(nu(this));
    };
    k.ah = function() {
        if (lu(this, 2)) {
            var a = ru(this);
            if (lu(this, 3)) return a;
        } else if (mu(this)) return [];
        throw Error(nu(this));
    };
    k.dh = function() {
        if (lu(this, 2)) {
            var a = su(this);
            if (lu(this, 3)) return a;
        } else if (mu(this)) return [];
        throw Error(nu(this));
    };
    k.Cq = function() {
        if (lu(this, 2)) {
            var a;
            if (2 == this.b.type) for (a = [ this.bh() ]; lu(this, 5); ) a.push(this.bh()); else a = ru(this);
            if (lu(this, 3)) return a;
        } else if (mu(this)) return [];
        throw Error(nu(this));
    };
    k.Bq = function() {
        if (lu(this, 2)) {
            var a = su(this);
            if (lu(this, 3)) return a;
        } else if (mu(this)) return [];
        throw Error(nu(this));
    };
    k.Dq = function() {
        if (lu(this, 2)) {
            for (var a = [ this.dh() ]; lu(this, 5); ) a.push(this.dh());
            if (lu(this, 3)) return a;
        } else if (mu(this)) return [];
        throw Error(nu(this));
    };
    function qu(a) {
        for (var b = [], c = a.a.length, d = 0; d < c; ++d) {
            var e = a.b;
            if (lu(a, 4)) b.push(e.value); else break;
        }
        if (b.length == c) return b;
        throw Error(nu(a));
    }
    function ru(a) {
        for (var b = [ qu(a) ]; lu(a, 5); ) b.push(qu(a));
        return b;
    }
    function su(a) {
        for (var b = [ a.ah() ]; lu(a, 5); ) b.push(a.ah());
        return b;
    }
    function mu(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && iu(a);
        return b;
    }
    function nu(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.f.a + "`";
    }
    var pu = {
        POINT: C,
        LINESTRING: B,
        POLYGON: D,
        MULTIPOINT: G,
        MULTILINESTRING: F,
        MULTIPOLYGON: H
    }, ou = {
        POINT: gu.prototype.bh,
        LINESTRING: gu.prototype.ah,
        POLYGON: gu.prototype.dh,
        MULTIPOINT: gu.prototype.Cq,
        MULTILINESTRING: gu.prototype.Bq,
        MULTIPOLYGON: gu.prototype.Dq
    };
    function tu() {
        this.version = void 0;
    }
    v(tu, dt);
    tu.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null;
    };
    tu.prototype.b = function(a) {
        this.version = a.getAttribute("version").trim();
        return (a = Q({
            version: this.version
        }, uu, a, [])) ? a : null;
    };
    function vu(a, b) {
        return Q({}, wu, a, b);
    }
    function xu(a, b) {
        return Q({}, yu, a, b);
    }
    function zu(a, b) {
        if (b = vu(a, b)) return a = [ ap(a.getAttribute("width")), ap(a.getAttribute("height")) ], 
        b.size = a, b;
    }
    function Au(a, b) {
        return Q([], Bu, a, b);
    }
    var Cu = [ null, "http://www.opengis.net/wms" ], uu = P(Cu, {
        Service: N(function(a, b) {
            return Q({}, Du, a, b);
        }),
        Capability: N(function(a, b) {
            return Q({}, Eu, a, b);
        })
    }), Eu = P(Cu, {
        Request: N(function(a, b) {
            return Q({}, Fu, a, b);
        }),
        Exception: N(function(a, b) {
            return Q([], Gu, a, b);
        }),
        Layer: N(function(a, b) {
            return Q({}, Hu, a, b);
        })
    }), Du = P(Cu, {
        Name: N(R),
        Title: N(R),
        Abstract: N(R),
        KeywordList: N(Au),
        OnlineResource: N(ct),
        ContactInformation: N(function(a, b) {
            return Q({}, Iu, a, b);
        }),
        Fees: N(R),
        AccessConstraints: N(R),
        LayerLimit: N($o),
        MaxWidth: N($o),
        MaxHeight: N($o)
    }), Iu = P(Cu, {
        ContactPersonPrimary: N(function(a, b) {
            return Q({}, Ju, a, b);
        }),
        ContactPosition: N(R),
        ContactAddress: N(function(a, b) {
            return Q({}, Ku, a, b);
        }),
        ContactVoiceTelephone: N(R),
        ContactFacsimileTelephone: N(R),
        ContactElectronicMailAddress: N(R)
    }), Ju = P(Cu, {
        ContactPerson: N(R),
        ContactOrganization: N(R)
    }), Ku = P(Cu, {
        AddressType: N(R),
        Address: N(R),
        City: N(R),
        StateOrProvince: N(R),
        PostCode: N(R),
        Country: N(R)
    }), Gu = P(Cu, {
        Format: Kn(R)
    }), Hu = P(Cu, {
        Name: N(R),
        Title: N(R),
        Abstract: N(R),
        KeywordList: N(Au),
        CRS: Mn(R),
        EX_GeographicBoundingBox: N(function(a, b) {
            var c = Q({}, Lu, a, b);
            if (c) {
                a = c.westBoundLongitude;
                b = c.southBoundLatitude;
                var d = c.eastBoundLongitude;
                c = c.northBoundLatitude;
                if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c) return [ a, b, d, c ];
            }
        }),
        BoundingBox: Mn(function(a) {
            var b = [ Zo(a.getAttribute("minx")), Zo(a.getAttribute("miny")), Zo(a.getAttribute("maxx")), Zo(a.getAttribute("maxy")) ], c = [ Zo(a.getAttribute("resx")), Zo(a.getAttribute("resy")) ];
            return {
                crs: a.getAttribute("CRS"),
                extent: b,
                res: c
            };
        }),
        Dimension: Mn(function(a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: Wo(a.getAttribute("multipleValues")),
                nearestValue: Wo(a.getAttribute("nearestValue")),
                current: Wo(a.getAttribute("current")),
                values: R(a)
            };
        }),
        Attribution: N(function(a, b) {
            return Q({}, Mu, a, b);
        }),
        AuthorityURL: Mn(function(a, b) {
            if (b = vu(a, b)) return b.name = a.getAttribute("name"), b;
        }),
        Identifier: Mn(R),
        MetadataURL: Mn(function(a, b) {
            if (b = vu(a, b)) return b.type = a.getAttribute("type"), b;
        }),
        DataURL: Mn(vu),
        FeatureListURL: Mn(vu),
        Style: Mn(function(a, b) {
            return Q({}, Nu, a, b);
        }),
        MinScaleDenominator: N(Yo),
        MaxScaleDenominator: N(Yo),
        Layer: Mn(function(a, b) {
            var c = b[b.length - 1], d = Q({}, Hu, a, b);
            if (d) return b = Wo(a.getAttribute("queryable")), void 0 === b && (b = c.queryable), 
            d.queryable = void 0 !== b ? b : !1, b = ap(a.getAttribute("cascaded")), void 0 === b && (b = c.cascaded), 
            d.cascaded = b, b = Wo(a.getAttribute("opaque")), void 0 === b && (b = c.opaque), 
            d.opaque = void 0 !== b ? b : !1, b = Wo(a.getAttribute("noSubsets")), void 0 === b && (b = c.noSubsets), 
            d.noSubsets = void 0 !== b ? b : !1, (b = Zo(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth), 
            d.fixedWidth = b, (a = Zo(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight), 
            d.fixedHeight = a, [ "Style", "CRS", "AuthorityURL" ].forEach(function(a) {
                a in c && (d[a] = (d[a] || []).concat(c[a]));
            }), "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
                a in d || (d[a] = c[a]);
            }), d;
        })
    }), Mu = P(Cu, {
        Title: N(R),
        OnlineResource: N(ct),
        LogoURL: N(zu)
    }), Lu = P(Cu, {
        westBoundLongitude: N(Yo),
        eastBoundLongitude: N(Yo),
        southBoundLatitude: N(Yo),
        northBoundLatitude: N(Yo)
    }), Fu = P(Cu, {
        GetCapabilities: N(xu),
        GetMap: N(xu),
        GetFeatureInfo: N(xu)
    }), yu = P(Cu, {
        Format: Mn(R),
        DCPType: Mn(function(a, b) {
            return Q({}, Ou, a, b);
        })
    }), Ou = P(Cu, {
        HTTP: N(function(a, b) {
            return Q({}, Pu, a, b);
        })
    }), Pu = P(Cu, {
        Get: N(vu),
        Post: N(vu)
    }), Nu = P(Cu, {
        Name: N(R),
        Title: N(R),
        Abstract: N(R),
        LegendURL: Mn(zu),
        StyleSheetURL: N(vu),
        StyleURL: N(vu)
    }), wu = P(Cu, {
        Format: N(R),
        OnlineResource: N(ct)
    }), Bu = P(Cu, {
        Keyword: Kn(R)
    });
    function Qu(a) {
        a = a ? a : {};
        this.a = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new op();
        this.c = a.layers ? a.layers : null;
        Qo.call(this);
    }
    v(Qu, Qo);
    Qu.prototype.Qc = function(a, b) {
        var c = {};
        b && Ab(c, Xn(this, a, b));
        c = [ c ];
        a.setAttribute("namespaceURI", this.a);
        var d = a.localName;
        b = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == d) for (var e = 0, f = a.childNodes.length; e < f; e++) {
                var g = a.childNodes[e];
                if (g.nodeType === Node.ELEMENT_NODE) {
                    var h = c[0], l = g.localName.replace("_layer", "");
                    if (!this.c || Ea(this.c, l)) {
                        l += "_feature";
                        h.featureType = l;
                        h.featureNS = this.a;
                        var m = {};
                        m[l] = Kn(this.b.fh, this.b);
                        h = P([ h.featureNS, null ], m);
                        g.setAttribute("namespaceURI", this.a);
                        (g = Q([], h, g, c, this.b)) && Ga(b, g);
                    }
                }
            }
            "FeatureCollection" == d && (a = Q([], this.b.b, a, [ {} ], this.b)) && (b = a);
        }
        return b;
    };
    Qu.prototype.Gh = function() {};
    Qu.prototype.ec = function() {};
    Qu.prototype.ye = function() {};
    function Ru() {
        this.f = new et();
    }
    v(Ru, dt);
    Ru.prototype.a = function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType == Node.ELEMENT_NODE) return this.b(a);
        return null;
    };
    Ru.prototype.b = function(a) {
        var b = a.getAttribute("version").trim(), c = this.f.b(a);
        if (!c) return null;
        c.version = b;
        return (c = Q(c, Su, a, [])) ? c : null;
    };
    function Tu(a) {
        var b = R(a).split(" ");
        if (b && 2 == b.length && (a = +b[0], b = +b[1], !isNaN(a) && !isNaN(b))) return [ a, b ];
    }
    var Uu = [ null, "http://www.opengis.net/wmts/1.0" ], Vu = [ null, "http://www.opengis.net/ows/1.1" ], Su = P(Uu, {
        Contents: N(function(a, b) {
            return Q({}, Wu, a, b);
        })
    }), Wu = P(Uu, {
        Layer: Mn(function(a, b) {
            return Q({}, Xu, a, b);
        }),
        TileMatrixSet: Mn(function(a, b) {
            return Q({}, Yu, a, b);
        })
    }), Xu = P(Uu, {
        Style: Mn(function(a, b) {
            if (b = Q({}, Zu, a, b)) return a = "true" === a.getAttribute("isDefault"), b.isDefault = a, 
            b;
        }),
        Format: Mn(R),
        TileMatrixSetLink: Mn(function(a, b) {
            return Q({}, $u, a, b);
        }),
        Dimension: Mn(function(a, b) {
            return Q({}, av, a, b);
        }),
        ResourceURL: Mn(function(a) {
            var b = a.getAttribute("format"), c = a.getAttribute("template");
            a = a.getAttribute("resourceType");
            var d = {};
            b && (d.format = b);
            c && (d.template = c);
            a && (d.resourceType = a);
            return d;
        })
    }, P(Vu, {
        Title: N(R),
        Abstract: N(R),
        WGS84BoundingBox: N(function(a, b) {
            a = Q([], bv, a, b);
            if (2 == a.length) return Qa(a);
        }),
        Identifier: N(R)
    })), Zu = P(Uu, {
        LegendURL: Mn(function(a) {
            var b = {};
            b.format = a.getAttribute("format");
            b.href = ct(a);
            return b;
        })
    }, P(Vu, {
        Title: N(R),
        Identifier: N(R)
    })), $u = P(Uu, {
        TileMatrixSet: N(R),
        TileMatrixSetLimits: N(function(a, b) {
            return Q([], cv, a, b);
        })
    }), cv = P(Uu, {
        TileMatrixLimits: Kn(function(a, b) {
            return Q({}, dv, a, b);
        })
    }), dv = P(Uu, {
        TileMatrix: N(R),
        MinTileRow: N($o),
        MaxTileRow: N($o),
        MinTileCol: N($o),
        MaxTileCol: N($o)
    }), av = P(Uu, {
        Default: N(R),
        Value: Mn(R)
    }, P(Vu, {
        Identifier: N(R)
    })), bv = P(Vu, {
        LowerCorner: Kn(Tu),
        UpperCorner: Kn(Tu)
    }), Yu = P(Uu, {
        WellKnownScaleSet: N(R),
        TileMatrix: Mn(function(a, b) {
            return Q({}, ev, a, b);
        })
    }, P(Vu, {
        SupportedCRS: N(R),
        Identifier: N(R)
    })), ev = P(Uu, {
        TopLeftCorner: N(Tu),
        ScaleDenominator: N(Yo),
        TileWidth: N($o),
        TileHeight: N($o),
        MatrixWidth: N($o),
        MatrixHeight: N($o)
    }, P(Vu, {
        Identifier: N(R)
    }));
    function fv(a) {
        Vb.call(this);
        a = a || {};
        this.a = null;
        this.i = Wc;
        this.g = new lc(6378137);
        this.c = void 0;
        y(this, Xb("projection"), this.Tn, this);
        y(this, Xb("tracking"), this.Un, this);
        void 0 !== a.projection && this.Ii(a.projection);
        void 0 !== a.trackingOptions && this.vk(a.trackingOptions);
        this.cf(void 0 !== a.tracking ? a.tracking : !1);
    }
    v(fv, Vb);
    k = fv.prototype;
    k.fa = function() {
        this.cf(!1);
        Vb.prototype.fa.call(this);
    };
    k.Tn = function() {
        var a = this.Gi();
        a && (this.i = Mc(Lc("EPSG:4326"), a), this.a && this.set("position", this.i(this.a)));
    };
    k.Un = function() {
        if (Be) {
            var a = this.Hi();
            a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.Kq.bind(this), this.Lq.bind(this), this.ui()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c), 
            this.c = void 0);
        }
    };
    k.Kq = function(a) {
        a = a.coords;
        this.set("accuracy", a.accuracy);
        this.set("altitude", null === a.altitude ? void 0 : a.altitude);
        this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set("heading", null === a.heading ? void 0 : hc(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [ a.longitude, a.latitude ];
        var b = this.i(this.a);
        this.set("position", b);
        this.set("speed", null === a.speed ? void 0 : a.speed);
        a = Xd(this.g, this.a, a.accuracy);
        a.Vc(this.i);
        this.set("accuracyGeometry", a);
        this.changed();
    };
    k.Lq = function(a) {
        a.type = "error";
        this.cf(!1);
        this.b(a);
    };
    k.Kl = function() {
        return this.get("accuracy");
    };
    k.Ll = function() {
        return this.get("accuracyGeometry") || null;
    };
    k.Ml = function() {
        return this.get("altitude");
    };
    k.Nl = function() {
        return this.get("altitudeAccuracy");
    };
    k.Rn = function() {
        return this.get("heading");
    };
    k.Sn = function() {
        return this.get("position");
    };
    k.Gi = function() {
        return this.get("projection");
    };
    k.um = function() {
        return this.get("speed");
    };
    k.Hi = function() {
        return this.get("tracking");
    };
    k.ui = function() {
        return this.get("trackingOptions");
    };
    k.Ii = function(a) {
        this.set("projection", Lc(a));
    };
    k.cf = function(a) {
        this.set("tracking", a);
    };
    k.vk = function(a) {
        this.set("trackingOptions", a);
    };
    function gv(a, b, c) {
        md.call(this);
        this.Bh(a, b ? b : 0, c);
    }
    v(gv, md);
    k = gv.prototype;
    k.clone = function() {
        var a = new gv(null);
        od(a, this.ga, this.v.slice());
        a.changed();
        return a;
    };
    k.Nb = function(a, b, c, d) {
        var e = this.v;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (0 === b) for (d = 0; d < this.a; ++d) c[d] = e[d]; else for (d = this.Fd() / Math.sqrt(b), 
            c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d) c[d] = e[d];
            c.length = this.a;
            return b;
        }
        return d;
    };
    k.cd = function(a, b) {
        var c = this.v;
        a -= c[0];
        b -= c[1];
        return a * a + b * b <= hv(this);
    };
    k.getCenter = function() {
        return this.v.slice(0, this.a);
    };
    k.Ie = function(a) {
        var b = this.v, c = b[this.a] - b[0];
        return bb(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a);
    };
    k.Fd = function() {
        return Math.sqrt(hv(this));
    };
    function hv(a) {
        var b = a.v[a.a] - a.v[0];
        a = a.v[a.a + 1] - a.v[1];
        return b * b + a * a;
    }
    k.getType = function() {
        return "Circle";
    };
    k.cb = function(a) {
        var b = this.A();
        return ub(a, b) ? (b = this.getCenter(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : ib(a, this.Db, this)) : !1;
    };
    k.setCenter = function(a) {
        var b = this.a, c = a.slice();
        c[b] = c[0] + (this.v[b] - this.v[0]);
        var d;
        for (d = 1; d < b; ++d) c[b + d] = a[d];
        od(this, this.ga, c);
        this.changed();
    };
    k.Bh = function(a, b, c) {
        if (a) {
            pd(this, c, a, 0);
            this.v || (this.v = []);
            c = this.v;
            a = vd(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b) c[a++] = c[b];
            c.length = a;
        } else od(this, "XY", null);
        this.changed();
    };
    k.S = function() {};
    k.ka = function() {};
    k.setRadius = function(a) {
        this.v[this.a] = this.v[0] + a;
        this.changed();
    };
    function iv(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [ f, e ], m = [ h, g ], n = [ 1, 0 ], p = {}, q = 1e5, r, u, w, z, A; 0 < --q && 0 < n.length; ) w = n.pop(), 
        e = l.pop(), g = m.pop(), f = w.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), 
        z = n.pop(), f = l.pop(), h = m.pop(), A = (w + z) / 2, r = a(A), u = b(r), fc(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), 
        f = z.toString(), p[f] = !0) : (n.push(z, A, A, w), m.push(h, u, u, g), l.push(f, r, r, e));
        return d;
    }
    function jv(a, b, c, d, e) {
        var f = Lc("EPSG:4326");
        return iv(function(d) {
            return [ a, b + (c - b) * d ];
        }, Vc(f, d), e);
    }
    function kv(a, b, c, d, e) {
        var f = Lc("EPSG:4326");
        return iv(function(d) {
            return [ b + (c - b) * d, a ];
        }, Vc(f, d), e);
    }
    function lv(a, b, c) {
        var d = b - c;
        return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!Nd(a, 0, b, c) : !1;
    }
    function mv(a) {
        a = a || {};
        this.i = this.u = null;
        this.j = this.g = Infinity;
        this.o = this.l = -Infinity;
        this.na = this.ma = Infinity;
        this.P = this.Da = -Infinity;
        this.ra = void 0 !== a.targetSize ? a.targetSize : 100;
        this.$ = void 0 !== a.maxLines ? a.maxLines : 100;
        this.f = [];
        this.c = [];
        this.ua = void 0 !== a.strokeStyle ? a.strokeStyle : nv;
        this.C = this.s = void 0;
        this.a = this.b = this.L = null;
        1 == a.showLabels && (this.W = void 0 == a.lonLabelFormatter ? Bi.bind(this, "EW") : a.lonLabelFormatter, 
        this.R = void 0 == a.latLabelFormatter ? Bi.bind(this, "NS") : a.latLabelFormatter, 
        this.Z = void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition, this.Xa = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition, 
        this.D = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new S({
            font: "12px Calibri,sans-serif",
            textBaseline: "bottom",
            fill: new pf({
                color: "rgba(0,0,0,1)"
            }),
            stroke: new qf({
                color: "rgba(255,255,255,1)",
                width: 3
            })
        }), this.B = void 0 !== a.latLabelStyle ? a.latLabelStyle : new S({
            font: "12px Calibri,sans-serif",
            textAlign: "end",
            fill: new pf({
                color: "rgba(0,0,0,1)"
            }),
            stroke: new qf({
                color: "rgba(255,255,255,1)",
                width: 3
            })
        }), this.b = [], this.a = []);
        this.setMap(void 0 !== a.map ? a.map : null);
    }
    var nv = new qf({
        color: "rgba(0,0,0,0.2)"
    }), ov = [ 90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001 ];
    function pv(a, b, c, d, e, f, g) {
        var h = g;
        c = jv(b, c, d, a.i, e);
        h = void 0 !== a.f[h] ? a.f[h] : new B(null);
        h.Y("XY", c);
        ub(h.A(), f) && (a.b && (c = g, d = h.ba(), f = [ d[0], cc(f[1] + Math.abs(f[1] - f[3]) * a.Z, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1])) ], 
        c = void 0 !== a.b[c] ? a.b[c].Wd : new C(null), c.ka(f), a.b[g] = {
            Wd: c,
            text: a.W(b)
        }), a.f[g++] = h);
        return g;
    }
    function qv(a, b, c, d, e, f, g) {
        var h = g;
        c = kv(b, c, d, a.i, e);
        h = void 0 !== a.c[h] ? a.c[h] : new B(null);
        h.Y("XY", c);
        ub(h.A(), f) && (a.a && (c = g, d = h.ba(), f = [ cc(f[0] + Math.abs(f[0] - f[2]) * a.Xa, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1] ], 
        c = void 0 !== a.a[c] ? a.a[c].Wd : new C(null), c.ka(f), a.a[g] = {
            Wd: c,
            text: a.R(b)
        }), a.c[g++] = h);
        return g;
    }
    k = mv.prototype;
    k.Vn = function() {
        return this.u;
    };
    k.im = function() {
        return this.f;
    };
    k.pm = function() {
        return this.c;
    };
    k.xi = function(a) {
        var b = a.vectorContext, c = a.frameState;
        a = c.extent;
        var d = c.viewState, e = d.center, f = d.projection;
        d = d.resolution;
        c = c.pixelRatio;
        c = d * d / (4 * c * c);
        if (!this.i || !Uc(this.i, f)) {
            var g = Lc("EPSG:4326"), h = f.A(), l = f.ve, m = Yc(l, g, f), n = l[2], p = l[1], q = l[0], r = m[3], u = m[2], w = m[1];
            m = m[0];
            this.g = l[3];
            this.j = n;
            this.l = p;
            this.o = q;
            this.ma = r;
            this.na = u;
            this.Da = w;
            this.P = m;
            this.s = Vc(g, f);
            this.C = Vc(f, g);
            this.L = this.C(rb(h));
            this.i = f;
        }
        f = this.L[0];
        g = this.L[1];
        h = -1;
        n = Math.pow(this.ra * d, 2);
        p = [];
        q = [];
        d = 0;
        for (l = ov.length; d < l; ++d) {
            r = ov[d] / 2;
            p[0] = f - r;
            p[1] = g - r;
            q[0] = f + r;
            q[1] = g + r;
            this.s(p, p);
            this.s(q, q);
            r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (r <= n) break;
            h = ov[d];
        }
        d = h;
        if (-1 == d) this.f.length = this.c.length = 0, this.b && (this.b.length = 0), this.a && (this.a.length = 0); else {
            f = this.C(e);
            e = f[0];
            f = f[1];
            g = this.$;
            l = [ Math.max(a[0], this.P), Math.max(a[1], this.Da), Math.min(a[2], this.na), Math.min(a[3], this.ma) ];
            l = Yc(l, this.i, "EPSG:4326");
            p = l[3];
            h = l[2];
            q = l[1];
            r = l[0];
            e = Math.floor(e / d) * d;
            u = cc(e, this.o, this.j);
            n = pv(this, u, q, p, c, a, 0);
            for (l = 0; u != this.o && l++ < g; ) u = Math.max(u - d, this.o), n = pv(this, u, q, p, c, a, n);
            u = cc(e, this.o, this.j);
            for (l = 0; u != this.j && l++ < g; ) u = Math.min(u + d, this.j), n = pv(this, u, q, p, c, a, n);
            this.f.length = n;
            this.b && (this.b.length = n);
            f = Math.floor(f / d) * d;
            e = cc(f, this.l, this.g);
            n = qv(this, e, r, h, c, a, 0);
            for (l = 0; e != this.l && l++ < g; ) e = Math.max(e - d, this.l), n = qv(this, e, r, h, c, a, n);
            e = cc(f, this.l, this.g);
            for (l = 0; e != this.g && l++ < g; ) e = Math.min(e + d, this.g), n = qv(this, e, r, h, c, a, n);
            this.c.length = n;
            this.a && (this.a.length = n);
        }
        b.Qa(null, this.ua);
        a = 0;
        for (c = this.f.length; a < c; ++a) e = this.f[a], b.Ib(e);
        a = 0;
        for (c = this.c.length; a < c; ++a) e = this.c[a], b.Ib(e);
        if (this.b) for (a = 0, c = this.b.length; a < c; ++a) e = this.b[a], this.D.Kd(e.text), 
        b.pb(this.D), b.Ib(e.Wd);
        if (this.a) for (a = 0, c = this.a.length; a < c; ++a) e = this.a[a], this.B.Kd(e.text), 
        b.pb(this.B), b.Ib(e.Wd);
    };
    k.setMap = function(a) {
        this.u && (this.u.I("postcompose", this.xi, this), this.u.render());
        a && (a.G("postcompose", this.xi, this), a.render());
        this.u = a;
    };
    function rv(a) {
        a = a ? a : {};
        ri.call(this, {
            handleEvent: yb
        });
        this.j = a.formatConstructors ? a.formatConstructors : [];
        this.o = a.projection ? Lc(a.projection) : null;
        this.a = null;
        this.g = a.source || null;
        this.target = a.target ? a.target : null;
    }
    v(rv, ri);
    function sv(a) {
        a = a.dataTransfer.files;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) {
            var d = a.item(c);
            var e = new FileReader();
            e.addEventListener("load", this.l.bind(this, d));
            e.readAsText(d);
        }
    }
    function tv(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy";
    }
    rv.prototype.l = function(a, b) {
        b = b.target.result;
        var c = this.u, d = this.o;
        d || (d = c.T().j);
        c = this.j;
        var e = [], f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = new c[g]();
            var l = {
                featureProjection: d
            };
            try {
                e = h.Sa(b, l);
            } catch (m) {
                e = null;
            }
            if (e && 0 < e.length) break;
        }
        this.g && (this.g.clear(), this.g.Uc(e));
        this.b(new uv(vv, a, e, d));
    };
    function wv(a) {
        var b = a.u;
        b && (b = a.target ? a.target : b.a, a.a = [ y(b, "drop", sv, a), y(b, "dragenter", tv, a), y(b, "dragover", tv, a), y(b, "drop", tv, a) ]);
    }
    rv.prototype.Ha = function(a) {
        ri.prototype.Ha.call(this, a);
        a ? wv(this) : xv(this);
    };
    rv.prototype.setMap = function(a) {
        xv(this);
        ri.prototype.setMap.call(this, a);
        this.c() && wv(this);
    };
    function xv(a) {
        a.a && (a.a.forEach(Fb), a.a = null);
    }
    var vv = "addfeatures";
    function uv(a, b, c, d) {
        Pb.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d;
    }
    v(uv, Pb);
    function yv(a) {
        a = a ? a : {};
        Xi.call(this, {
            handleDownEvent: zv,
            handleDragEvent: Av,
            handleUpEvent: Bv
        });
        this.o = a.condition ? a.condition : Qi;
        this.a = this.g = void 0;
        this.j = 0;
        this.s = void 0 !== a.duration ? a.duration : 400;
    }
    v(yv, Xi);
    function Av(a) {
        if (Si(a)) {
            var b = a.map, c = b.ib(), d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            b = b.T();
            b.l.rotation !== ej && void 0 !== this.g && (d = c - this.g, si(b, b.Ra() - d));
            this.g = c;
            void 0 !== this.a && (c = this.a * (b.Ga() / a), vi(b, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a;
        }
    }
    function Bv(a) {
        if (!Si(a)) return !0;
        a = a.map.T();
        dj(a, 1, -1);
        var b = this.j - 1, c = a.Ra();
        c = a.constrainRotation(c, 0);
        si(a, c, void 0, void 0);
        c = a.Ga();
        var d = this.s;
        c = a.constrainResolution(c, 0, b);
        vi(a, c, void 0, d);
        this.j = 0;
        return !1;
    }
    function zv(a) {
        return Si(a) && this.o(a) ? (dj(a.map.T(), 1, 1), this.a = this.g = void 0, !0) : !1;
    }
    function Cv() {
        return [ [ -Infinity, -Infinity, Infinity, Infinity ] ];
    }
    function Dv() {
        this.a = Ul.Pc(void 0);
        this.b = {};
    }
    k = Dv.prototype;
    k.Ba = function(a, b) {
        a = {
            da: a[0],
            ca: a[1],
            ia: a[2],
            ha: a[3],
            value: b
        };
        this.a.Ba(a);
        this.b[x(b)] = a;
    };
    k.load = function(a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d], g = b[d];
            f = {
                da: f[0],
                ca: f[1],
                ia: f[2],
                ha: f[3],
                value: g
            };
            c[d] = f;
            this.b[x(g)] = f;
        }
        this.a.load(c);
    };
    k.remove = function(a) {
        a = x(a);
        var b = this.b[a];
        delete this.b[a];
        return null !== this.a.remove(b);
    };
    function Ev(a, b, c) {
        var d = a.b[x(c)];
        gb([ d.da, d.ca, d.ia, d.ha ], b) || (a.remove(c), a.Ba(b, c));
    }
    function Rv(a) {
        return a.a.all().map(function(a) {
            return a.value;
        });
    }
    function Sv(a, b) {
        return a.a.search({
            da: b[0],
            ca: b[1],
            ia: b[2],
            ha: b[3]
        }).map(function(a) {
            return a.value;
        });
    }
    k.forEach = function(a, b) {
        return Tv(Rv(this), a, b);
    };
    function Uv(a, b, c, d) {
        return Tv(Sv(a, b), c, d);
    }
    function Tv(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++) ;
        return d;
    }
    k.clear = function() {
        this.a.clear();
        this.b = {};
    };
    k.A = function(a) {
        var b = this.a.data;
        return bb(b.da, b.ca, b.ia, b.ha, a);
    };
    k.concat = function(a) {
        this.a.load(a.a.all());
        for (var b in a.b) this.b[b | 0] = a.b[b | 0];
    };
    function U(a) {
        a = a || {};
        Mg.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.s = Ba;
        this.R = a.format;
        this.Z = void 0 == a.overlaps ? !0 : a.overlaps;
        this.W = a.url;
        void 0 !== a.loader ? this.s = a.loader : void 0 !== this.W && (Pa(this.R, 7), this.s = Vn(this.W, this.R));
        this.$ = void 0 !== a.strategy ? a.strategy : Cv;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new Dv() : null;
        this.D = new Dv();
        this.g = {};
        this.j = {};
        this.l = {};
        this.o = {};
        this.i = null;
        if (a.features instanceof Xh) {
            var c = a.features;
            var d = c.a;
        } else Array.isArray(a.features) && (d = a.features);
        b || void 0 !== c || (c = new Xh(d));
        void 0 !== d && Vv(this, d);
        void 0 !== c && Wv(this, c);
    }
    v(U, Mg);
    k = U.prototype;
    k.Hb = function(a) {
        var b = x(a).toString();
        if (Xv(this, b, a)) {
            Yv(this, b, a);
            var c = a.getGeometry();
            c ? (b = c.A(), this.a && this.a.Ba(b, a)) : this.g[b] = a;
            this.b(new Zv("addfeature", a));
        }
        this.changed();
    };
    function Yv(a, b, c) {
        a.o[b] = [ y(c, "change", a.zj, a), y(c, "propertychange", a.zj, a) ];
    }
    function Xv(a, b, c) {
        var d = !0, e = c.c;
        void 0 !== e ? e.toString() in a.j ? d = !1 : a.j[e.toString()] = c : (Pa(!(b in a.l), 30), 
        a.l[b] = c);
        return d;
    }
    k.Uc = function(a) {
        Vv(this, a);
        this.changed();
    };
    function Vv(a, b) {
        var c, d = [], e = [], f = [];
        var g = 0;
        for (c = b.length; g < c; g++) {
            var h = b[g];
            var l = x(h).toString();
            Xv(a, l, h) && e.push(h);
        }
        g = 0;
        for (c = e.length; g < c; g++) h = e[g], l = x(h).toString(), Yv(a, l, h), (b = h.getGeometry()) ? (l = b.A(), 
        d.push(l), f.push(h)) : a.g[l] = h;
        a.a && a.a.load(d, f);
        g = 0;
        for (c = e.length; g < c; g++) a.b(new Zv("addfeature", e[g]));
    }
    function Wv(a, b) {
        var c = !1;
        y(a, "addfeature", function(a) {
            c || (c = !0, b.push(a.feature), c = !1);
        });
        y(a, "removefeature", function(a) {
            c || (c = !0, b.remove(a.feature), c = !1);
        });
        y(b, "add", function(a) {
            c || (c = !0, this.Hb(a.element), c = !1);
        }, a);
        y(b, "remove", function(a) {
            c || (c = !0, this.Lb(a.element), c = !1);
        }, a);
        a.i = b;
    }
    k.clear = function(a) {
        if (a) {
            for (var b in this.o) this.o[b].forEach(Fb);
            this.i || (this.o = {}, this.j = {}, this.l = {});
        } else if (this.a) {
            this.a.forEach(this.sh, this);
            for (var c in this.g) this.sh(this.g[c]);
        }
        this.i && this.i.clear();
        this.a && this.a.clear();
        this.D.clear();
        this.g = {};
        this.b(new Zv("clear"));
        this.changed();
    };
    k.di = function(a, b) {
        if (this.a) return this.a.forEach(a, b);
        if (this.i) return this.i.forEach(a, b);
    };
    function $v(a, b, c) {
        a.hc([ b[0], b[1], b[0], b[1] ], function(a) {
            if (a.getGeometry().Db(b)) return c.call(void 0, a);
        });
    }
    k.hc = function(a, b, c) {
        if (this.a) return Uv(this.a, a, b, c);
        if (this.i) return this.i.forEach(b, c);
    };
    k.ei = function(a, b, c) {
        return this.hc(a, function(d) {
            if (d.getGeometry().cb(a) && (d = b.call(c, d))) return d;
        });
    };
    k.ki = function() {
        return this.i;
    };
    k.fd = function() {
        if (this.i) var a = this.i.a; else this.a && (a = Rv(this.a), Db(this.g) || Ga(a, Cb(this.g)));
        return a;
    };
    k.ji = function(a) {
        var b = [];
        $v(this, a, function(a) {
            b.push(a);
        });
        return b;
    };
    k.hg = function(a) {
        return Sv(this.a, a);
    };
    k.gi = function(a, b) {
        var c = a[0], d = a[1], e = null, f = [ NaN, NaN ], g = Infinity, h = [ -Infinity, -Infinity, Infinity, Infinity ], l = b ? b : yb;
        Uv(this.a, h, function(a) {
            if (l(a)) {
                var b = a.getGeometry(), m = g;
                g = b.Nb(c, d, f, g);
                g < m && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a);
            }
        });
        return e;
    };
    k.A = function(a) {
        return this.a.A(a);
    };
    k.xj = function(a) {
        a = this.j[a.toString()];
        return void 0 !== a ? a : null;
    };
    k.yj = function() {
        return this.R;
    };
    k.getUrl = function() {
        return this.W;
    };
    k.zj = function(a) {
        a = a.target;
        var b = x(a).toString(), c = a.getGeometry();
        c ? (c = c.A(), b in this.g ? (delete this.g[b], this.a && this.a.Ba(c, a)) : this.a && Ev(this.a, c, a)) : b in this.g || (this.a && this.a.remove(a), 
        this.g[b] = a);
        c = a.c;
        void 0 !== c ? (c = c.toString(), b in this.l ? (delete this.l[b], this.j[c] = a) : this.j[c] !== a && (aw(this, a), 
        this.j[c] = a)) : b in this.l || (aw(this, a), this.l[b] = a);
        this.changed();
        this.b(new Zv("changefeature", a));
    };
    k.he = function(a, b, c) {
        var d = this.D;
        a = this.$(a, b);
        var e;
        var f = 0;
        for (e = a.length; f < e; ++f) {
            var g = a[f];
            Uv(d, g, function(a) {
                return $a(a.extent, g);
            }) || (this.s.call(this, g, b, c), d.Ba(g, {
                extent: g.slice()
            }));
        }
    };
    k.fk = function(a) {
        var b = this.D, c;
        Uv(b, a, function(b) {
            if (gb(b.extent, a)) return c = b, !0;
        });
        c && b.remove(c);
    };
    k.Lb = function(a) {
        var b = x(a).toString();
        b in this.g ? delete this.g[b] : this.a && this.a.remove(a);
        this.sh(a);
        this.changed();
    };
    k.sh = function(a) {
        var b = x(a).toString();
        this.o[b].forEach(Fb);
        delete this.o[b];
        var c = a.c;
        void 0 !== c ? delete this.j[c.toString()] : delete this.l[b];
        this.b(new Zv("removefeature", a));
    };
    function aw(a, b) {
        for (var c in a.j) if (a.j[c] === b) {
            delete a.j[c];
            break;
        }
    }
    k.Aj = function(a) {
        this.s = a;
    };
    function Zv(a, b) {
        Pb.call(this, a);
        this.feature = b;
    }
    v(Zv, Pb);
    function bw(a) {
        Xi.call(this, {
            handleDownEvent: cw,
            handleEvent: dw,
            handleUpEvent: ew
        });
        this.W = !1;
        this.$ = null;
        this.s = !1;
        this.zb = a.source ? a.source : null;
        this.Oa = a.features ? a.features : null;
        this.El = a.snapTolerance ? a.snapTolerance : 12;
        this.R = a.type;
        this.g = fw(this.R);
        this.Jl = !!a.stopClick;
        this.Ea = a.minPoints ? a.minPoints : this.g === gw ? 3 : 2;
        this.ra = a.maxPoints ? a.maxPoints : Infinity;
        this.Qd = a.finishCondition ? a.finishCondition : yb;
        var b = a.geometryFunction;
        if (!b) if ("Circle" === this.R) b = function(a, b) {
            b = b ? b : new gv([ NaN, NaN ]);
            b.Bh(a[0], Math.sqrt(Gi(a[0], a[1])));
            return b;
        }; else {
            var c, d = this.g;
            d === hw ? c = C : d === iw ? c = B : d === gw && (c = D);
            b = function(a, b) {
                b ? d === gw ? a[0].length ? b.ka([ a[0].concat([ a[0][0] ]) ]) : b.ka([]) : b.ka(a) : b = new c(a);
                return b;
            };
        }
        this.fb = b;
        this.P = this.B = this.a = this.D = this.j = this.o = null;
        this.zc = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.ua = new I({
            source: new U({
                useSpatialIndex: !1,
                wrapX: a.wrapX ? a.wrapX : !1
            }),
            style: a.style ? a.style : jw()
        });
        this.eb = a.geometryName;
        this.Bl = a.condition ? a.condition : Pi;
        this.Rf = a.freehand ? yb : a.freehandCondition ? a.freehandCondition : Qi;
        y(this, Xb("active"), this.dj, this);
    }
    v(bw, Xi);
    function jw() {
        var a = wf();
        return function(b) {
            return a[b.getGeometry().getType()];
        };
    }
    k = bw.prototype;
    k.setMap = function(a) {
        Xi.prototype.setMap.call(this, a);
        this.dj();
    };
    function dw(a) {
        this.s = this.g !== hw && this.Rf(a);
        var b = !0;
        this.s && "pointerdrag" === a.type && null !== this.j ? (kw(this, a), b = !1) : this.s && "pointerdown" === a.type ? b = !1 : "pointermove" === a.type ? b = lw(this, a) : "dblclick" === a.type && (b = !1);
        return Yi.call(this, a) && b;
    }
    function cw(a) {
        this.W = !this.s;
        return this.s ? (this.$ = a.pixel, this.o || mw(this, a), !0) : this.Bl(a) ? (this.$ = a.pixel, 
        !0) : !1;
    }
    function ew(a) {
        var b = !0;
        lw(this, a);
        var c = this.g === nw;
        this.W ? (this.o ? this.s || c ? this.Vd() : ow(this, a) ? this.Qd(a) && this.Vd() : kw(this, a) : (mw(this, a), 
        this.g === hw && this.Vd()), b = !1) : this.s && (this.o = null, pw(this));
        !b && this.Jl && a.stopPropagation();
        return b;
    }
    function lw(a, b) {
        if (a.$ && (!a.s && a.W || a.s && !a.W)) {
            var c = a.$, d = b.pixel, e = c[0] - d[0];
            c = c[1] - d[1];
            e = e * e + c * c;
            a.W = a.s ? e > a.zc : e <= a.zc;
        }
        a.o ? (e = b.coordinate, c = a.j.getGeometry(), a.g === hw ? d = a.a : a.g === gw ? (d = a.a[0], 
        d = d[d.length - 1], ow(a, b) && (e = a.o.slice())) : (d = a.a, d = d[d.length - 1]), 
        d[0] = e[0], d[1] = e[1], a.fb(a.a, c), a.D && a.D.getGeometry().ka(e), c instanceof D && a.g !== gw ? (a.B || (a.B = new xf(new B(null))), 
        e = c.oi(0), b = a.B.getGeometry(), b.Y(e.ga, e.ba())) : a.P && (b = a.B.getGeometry(), 
        b.ka(a.P)), qw(a)) : (b = b.coordinate.slice(), a.D ? a.D.getGeometry().ka(b) : (a.D = new xf(new C(b)), 
        qw(a)));
        return !0;
    }
    function ow(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1, e = [ a.o ];
            a.g === iw ? d = a.a.length > a.Ea : a.g === gw && (d = a.a[0].length > a.Ea, e = [ a.a[0][0], a.a[0][a.a[0].length - 2] ]);
            if (d) {
                d = b.map;
                for (var f = 0, g = e.length; f < g; f++) {
                    var h = e[f], l = d.Ja(h), m = b.pixel;
                    c = m[0] - l[0];
                    l = m[1] - l[1];
                    if (c = Math.sqrt(c * c + l * l) <= (a.s ? 1 : a.El)) {
                        a.o = h;
                        break;
                    }
                }
            }
        }
        return c;
    }
    function mw(a, b) {
        b = b.coordinate;
        a.o = b;
        a.g === hw ? a.a = b.slice() : a.g === gw ? (a.a = [ [ b.slice(), b.slice() ] ], 
        a.P = a.a[0]) : (a.a = [ b.slice(), b.slice() ], a.g === nw && (a.P = a.a));
        a.P && (a.B = new xf(new B(a.P)));
        b = a.fb(a.a);
        a.j = new xf();
        a.eb && a.j.Rc(a.eb);
        a.j.setGeometry(b);
        qw(a);
        a.b(new rw("drawstart", a.j));
    }
    function kw(a, b) {
        b = b.coordinate;
        var c = a.j.getGeometry(), d;
        if (a.g === iw) {
            a.o = b.slice();
            var e = a.a;
            e.length >= a.ra && (a.s ? e.pop() : d = !0);
            e.push(b.slice());
            a.fb(e, c);
        } else a.g === gw && (e = a.a[0], e.length >= a.ra && (a.s ? e.pop() : d = !0), 
        e.push(b.slice()), d && (a.o = e[0]), a.fb(a.a, c));
        qw(a);
        d && a.Vd();
    }
    k.hr = function() {
        if (this.j) {
            var a = this.j.getGeometry();
            if (this.g === iw) {
                var b = this.a;
                b.splice(-2, 1);
                this.fb(b, a);
                2 <= b.length && (this.o = b[b.length - 2].slice());
            } else if (this.g === gw) {
                b = this.a[0];
                b.splice(-2, 1);
                var c = this.B.getGeometry();
                c.ka(b);
                this.fb(this.a, a);
            }
            0 === b.length && (this.o = null);
            qw(this);
        }
    };
    k.Vd = function() {
        var a = pw(this), b = this.a, c = a.getGeometry();
        this.g === iw ? (b.pop(), this.fb(b, c)) : this.g === gw && (b[0].pop(), this.fb(b, c), 
        b = c.S());
        "MultiPoint" === this.R ? a.setGeometry(new G([ b ])) : "MultiLineString" === this.R ? a.setGeometry(new F([ b ])) : "MultiPolygon" === this.R && a.setGeometry(new H([ b ]));
        this.b(new rw("drawend", a));
        this.Oa && this.Oa.push(a);
        this.zb && this.zb.Hb(a);
    };
    function pw(a) {
        a.o = null;
        var b = a.j;
        b && (a.j = null, a.D = null, a.B = null, a.ua.aa().clear(!0));
        return b;
    }
    k.Ko = function(a) {
        var b = a.getGeometry();
        this.j = a;
        this.a = b.S();
        a = this.a[this.a.length - 1];
        this.o = a.slice();
        this.a.push(a.slice());
        qw(this);
        this.b(new rw("drawstart", this.j));
    };
    k.md = zb;
    function qw(a) {
        var b = [];
        a.j && b.push(a.j);
        a.B && b.push(a.B);
        a.D && b.push(a.D);
        a = a.ua.aa();
        a.clear(!0);
        a.Uc(b);
    }
    k.dj = function() {
        var a = this.u, b = this.c();
        a && b || pw(this);
        this.ua.setMap(b ? a : null);
    };
    function fw(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = hw : "LineString" === a || "MultiLineString" === a ? b = iw : "Polygon" === a || "MultiPolygon" === a ? b = gw : "Circle" === a && (b = nw);
        return b;
    }
    var hw = "Point", iw = "LineString", gw = "Polygon", nw = "Circle";
    function rw(a, b) {
        Pb.call(this, a);
        this.feature = b;
    }
    v(rw, Pb);
    function sw(a) {
        var b = a || {};
        this.a = this.j = null;
        this.B = void 0 !== b.pixelTolerance ? b.pixelTolerance : 10;
        this.D = !1;
        this.P = this.o = null;
        a || (a = {});
        Xi.call(this, {
            handleDownEvent: tw,
            handleDragEvent: uw,
            handleEvent: vw,
            handleUpEvent: ww
        });
        this.s = new I({
            source: new U({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.boxStyle ? a.boxStyle : xw(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.R = new I({
            source: new U({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.pointerStyle ? a.pointerStyle : yw(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        a.extent && this.g(a.extent);
    }
    v(sw, Xi);
    function vw(a) {
        if (!(a instanceof Wi)) return !0;
        if ("pointermove" == a.type && !this.C) {
            var b = a.pixel, c = a.map, d = zw(this, b, c);
            d || (d = c.Ta(b));
            Aw(this, d);
        }
        Yi.call(this, a);
        return !1;
    }
    function tw(a) {
        function b(a) {
            var b = null, c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
            return null !== b && null !== c ? [ b, c ] : null;
        }
        var c = a.pixel, d = a.map, e = this.A();
        (a = zw(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null, d = a[1] == e[1] || a[1] == e[3] ? a[1] : null, 
        null !== c && null !== d ? this.a = Bw(b(a)) : null !== c ? this.a = Cw(b([ c, e[1] ]), b([ c, e[3] ])) : null !== d && (this.a = Cw(b([ e[0], d ]), b([ e[2], d ])))) : (a = d.Ta(c), 
        this.g([ a[0], a[1], a[0], a[1] ]), this.a = Bw(a));
        return !0;
    }
    function uw(a) {
        this.a && (a = a.coordinate, this.g(this.a(a)), Aw(this, a));
        return !0;
    }
    function ww() {
        this.a = null;
        var a = this.A();
        a && 0 !== nb(a) || this.g(null);
        return !1;
    }
    function xw() {
        var a = wf();
        return function() {
            return a.Polygon;
        };
    }
    function yw() {
        var a = wf();
        return function() {
            return a.Point;
        };
    }
    function Bw(a) {
        return function(b) {
            return Qa([ a, b ]);
        };
    }
    function Cw(a, b) {
        return a[0] == b[0] ? function(c) {
            return Qa([ a, [ c[0], b[1] ] ]);
        } : a[1] == b[1] ? function(c) {
            return Qa([ a, [ b[0], c[1] ] ]);
        } : null;
    }
    function zw(a, b, c) {
        function d(a, b) {
            return Ii(e, a) - Ii(e, b);
        }
        var e = c.Ta(b), f = a.A();
        if (f) {
            f = [ [ [ f[0], f[1] ], [ f[0], f[3] ] ], [ [ f[0], f[3] ], [ f[2], f[3] ] ], [ [ f[2], f[3] ], [ f[2], f[1] ] ], [ [ f[2], f[1] ], [ f[0], f[1] ] ] ];
            f.sort(d);
            f = f[0];
            var g = Ai(e, f), h = c.Ja(g);
            if (Hi(b, h) <= a.B) return b = c.Ja(f[0]), c = c.Ja(f[1]), b = Gi(h, b), c = Gi(h, c), 
            a.D = Math.sqrt(Math.min(b, c)) <= a.B, a.D && (g = b > c ? f[1] : f[0]), g;
        }
        return null;
    }
    function Aw(a, b) {
        var c = a.P;
        c ? c.getGeometry().ka(b) : (c = new xf(new C(b)), a.P = c, a.R.aa().Hb(c));
    }
    sw.prototype.setMap = function(a) {
        this.s.setMap(a);
        this.R.setMap(a);
        Xi.prototype.setMap.call(this, a);
    };
    sw.prototype.A = function() {
        return this.j;
    };
    sw.prototype.g = function(a) {
        this.j = a ? a : null;
        var b = this.o;
        b ? a ? b.setGeometry(Yd(a)) : b.setGeometry(void 0) : (this.o = b = a ? new xf(Yd(a)) : new xf({}), 
        this.s.aa().Hb(b));
        this.b(new Dw(this.j));
    };
    function Dw(a) {
        Pb.call(this, "extentchanged");
        this.extent = a;
    }
    v(Dw, Pb);
    function Ew(a) {
        Xi.call(this, {
            handleDownEvent: Fw,
            handleDragEvent: Gw,
            handleEvent: Hw,
            handleUpEvent: Iw
        });
        this.Qd = a.condition ? a.condition : Ti;
        this.eb = function(a) {
            return Ki(a) && Oi(a);
        };
        this.zb = a.deleteCondition ? a.deleteCondition : this.eb;
        this.zc = a.insertVertexCondition ? a.insertVertexCondition : yb;
        this.Oa = this.g = null;
        this.Ea = [ 0, 0 ];
        this.B = this.P = !1;
        this.a = new Dv();
        this.ua = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.o = this.ra = !1;
        this.j = [];
        this.D = new I({
            source: new U({
                useSpatialIndex: !1,
                wrapX: !!a.wrapX
            }),
            style: a.style ? a.style : Jw(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.$ = {
            Point: this.So,
            LineString: this.fj,
            LinearRing: this.fj,
            Polygon: this.To,
            MultiPoint: this.Qo,
            MultiLineString: this.Po,
            MultiPolygon: this.Ro,
            Circle: this.No,
            GeometryCollection: this.Oo
        };
        this.W = null;
        a.source ? (this.W = a.source, a = new Xh(this.W.fd()), y(this.W, "addfeature", this.en, this), 
        y(this.W, "removefeature", this.gn, this)) : a = a.features;
        if (!a) throw Error("The modify interaction requires features or a source");
        this.s = a;
        this.s.forEach(this.Lg, this);
        y(this.s, "add", this.Lo, this);
        y(this.s, "remove", this.Mo, this);
        this.R = null;
    }
    v(Ew, Xi);
    k = Ew.prototype;
    k.Lg = function(a) {
        var b = a.getGeometry();
        b && b.getType() in this.$ && this.$[b.getType()].call(this, a, b);
        (b = this.u) && b.c && this.c() && Kw(this, this.Ea, b);
        y(a, "change", this.ej, this);
    };
    function Lw(a, b) {
        a.B || (a.B = !0, a.b(new Mw("modifystart", a.s, b)));
    }
    function Nw(a, b) {
        Ow(a, b);
        a.g && 0 === a.s.pc() && (a.D.aa().Lb(a.g), a.g = null);
        Lb(b, "change", a.ej, a);
    }
    function Ow(a, b) {
        a = a.a;
        var c = [];
        a.forEach(function(a) {
            b === a.feature && c.push(a);
        });
        for (var d = c.length - 1; 0 <= d; --d) a.remove(c[d]);
    }
    k.Ha = function(a) {
        this.g && !a && (this.D.aa().Lb(this.g), this.g = null);
        Xi.prototype.Ha.call(this, a);
    };
    k.setMap = function(a) {
        this.D.setMap(a);
        Xi.prototype.setMap.call(this, a);
    };
    k.en = function(a) {
        a.feature && this.s.push(a.feature);
    };
    k.gn = function(a) {
        a.feature && this.s.remove(a.feature);
    };
    k.Lo = function(a) {
        this.Lg(a.element);
    };
    k.ej = function(a) {
        this.o || (a = a.target, Nw(this, a), this.Lg(a));
    };
    k.Mo = function(a) {
        Nw(this, a.element);
    };
    k.So = function(a, b) {
        var c = b.S();
        a = {
            feature: a,
            geometry: b,
            ja: [ c, c ]
        };
        this.a.Ba(b.A(), a);
    };
    k.Qo = function(a, b) {
        var c = b.S(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {
                feature: a,
                geometry: b,
                depth: [ e ],
                index: e,
                ja: [ f, f ]
            };
            this.a.Ba(b.A(), f);
        }
    };
    k.fj = function(a, b) {
        var c = b.S(), d;
        var e = 0;
        for (d = c.length - 1; e < d; ++e) {
            var f = c.slice(e, e + 2);
            var g = {
                feature: a,
                geometry: b,
                index: e,
                ja: f
            };
            this.a.Ba(Qa(f), g);
        }
    };
    k.Po = function(a, b) {
        var c = b.S(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {
                    feature: a,
                    geometry: b,
                    depth: [ f ],
                    index: h,
                    ja: l
                };
                this.a.Ba(Qa(l), m);
            }
        }
    };
    k.To = function(a, b) {
        var c = b.S(), d, e;
        var f = 0;
        for (e = c.length; f < e; ++f) {
            var g = c[f];
            var h = 0;
            for (d = g.length - 1; h < d; ++h) {
                var l = g.slice(h, h + 2);
                var m = {
                    feature: a,
                    geometry: b,
                    depth: [ f ],
                    index: h,
                    ja: l
                };
                this.a.Ba(Qa(l), m);
            }
        }
    };
    k.Ro = function(a, b) {
        var c = b.S(), d, e, f;
        var g = 0;
        for (f = c.length; g < f; ++g) {
            var h = c[g];
            var l = 0;
            for (e = h.length; l < e; ++l) {
                var m = h[l];
                var n = 0;
                for (d = m.length - 1; n < d; ++n) {
                    var p = m.slice(n, n + 2);
                    var q = {
                        feature: a,
                        geometry: b,
                        depth: [ l, g ],
                        index: n,
                        ja: p
                    };
                    this.a.Ba(Qa(p), q);
                }
            }
        }
    };
    k.No = function(a, b) {
        var c = b.getCenter(), d = {
            feature: a,
            geometry: b,
            index: 0,
            ja: [ c, c ]
        };
        a = {
            feature: a,
            geometry: b,
            index: 1,
            ja: [ c, c ]
        };
        d.dg = a.dg = [ d, a ];
        this.a.Ba(db(c), d);
        this.a.Ba(b.A(), a);
    };
    k.Oo = function(a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b) this.$[c[b].getType()].call(this, a, c[b]);
    };
    function Pw(a, b) {
        var c = a.g;
        c ? c.getGeometry().ka(b) : (c = new xf(new C(b)), a.g = c, a.D.aa().Hb(c));
    }
    function Qw(a, b) {
        return a.index - b.index;
    }
    function Fw(a) {
        if (!this.Qd(a)) return !1;
        Kw(this, a.pixel, a.map);
        var b = a.map.Ta(a.pixel);
        this.j.length = 0;
        this.B = !1;
        var c = this.g;
        if (c) {
            var d = [];
            c = c.getGeometry().S();
            var e = Qa([ c ]);
            e = Sv(this.a, e);
            var f = {};
            e.sort(Qw);
            for (var g = 0, h = e.length; g < h; ++g) {
                var l = e[g], m = l.ja, n = x(l.feature), p = l.depth;
                p && (n += "-" + p.join("-"));
                f[n] || (f[n] = Array(2));
                if ("Circle" === l.geometry.getType() && 1 === l.index) m = Rw(b, l), Di(m, c) && !f[n][0] && (this.j.push([ l, 0 ]), 
                f[n][0] = l); else if (Di(m[0], c) && !f[n][0]) this.j.push([ l, 0 ]), f[n][0] = l; else if (Di(m[1], c) && !f[n][1]) {
                    if ("LineString" !== l.geometry.getType() && "MultiLineString" !== l.geometry.getType() || !f[n][0] || 0 !== f[n][0].index) this.j.push([ l, 1 ]), 
                    f[n][1] = l;
                } else this.zc(a) && x(m) in this.Oa && !f[n][0] && !f[n][1] && d.push([ l, c ]);
            }
            d.length && Lw(this, a);
            for (a = d.length - 1; 0 <= a; --a) this.qn.apply(this, d[a]);
        }
        return !!this.g;
    }
    function Gw(a) {
        this.P = !1;
        Lw(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            var d = this.j[b], e = d[0], f = e.depth, g = e.geometry, h = e.ja;
            for (d = d[1]; a.length < g.la(); ) a.push(h[d][a.length]);
            switch (g.getType()) {
              case "Point":
                var l = a;
                h[0] = h[1] = a;
                break;

              case "MultiPoint":
                l = g.S();
                l[e.index] = a;
                h[0] = h[1] = a;
                break;

              case "LineString":
                l = g.S();
                l[e.index + d] = a;
                h[d] = a;
                break;

              case "MultiLineString":
                l = g.S();
                l[f[0]][e.index + d] = a;
                h[d] = a;
                break;

              case "Polygon":
                l = g.S();
                l[f[0]][e.index + d] = a;
                h[d] = a;
                break;

              case "MultiPolygon":
                l = g.S();
                l[f[1]][f[0]][e.index + d] = a;
                h[d] = a;
                break;

              case "Circle":
                h[0] = h[1] = a, 0 === e.index ? (this.o = !0, g.setCenter(a)) : (this.o = !0, g.setRadius(Hi(g.getCenter(), a))), 
                this.o = !1;
            }
            l && (e = g, f = l, this.o = !0, e.ka(f), this.o = !1);
        }
        Pw(this, a);
    }
    function Iw(a) {
        for (var b, c, d = this.j.length - 1; 0 <= d; --d) if (b = this.j[d][0], c = b.geometry, 
        "Circle" === c.getType()) {
            var e = c.getCenter(), f = b.dg[0];
            b = b.dg[1];
            f.ja[0] = f.ja[1] = e;
            b.ja[0] = b.ja[1] = e;
            Ev(this.a, db(e), f);
            Ev(this.a, c.A(), b);
        } else Ev(this.a, Qa(b.ja), b);
        this.B && (this.b(new Mw("modifyend", this.s, a)), this.B = !1);
        return !1;
    }
    function Hw(a) {
        if (!(a instanceof Wi)) return !0;
        this.R = a;
        var b;
        a.map.T().mi() || "pointermove" != a.type || this.C || (this.Ea = a.pixel, Kw(this, a.pixel, a.map));
        this.g && this.zb(a) && (b = "singleclick" == a.type && this.P ? !0 : this.gk());
        "singleclick" == a.type && (this.P = !1);
        return Yi.call(this, a) && !b;
    }
    function Kw(a, b, c) {
        function d(a, b) {
            return Sw(e, a) - Sw(e, b);
        }
        var e = c.Ta(b), f = Ta(db(e), c.T().Ga() * a.ua);
        f = Sv(a.a, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0], h = g.ja, l = Rw(e, g), m = c.Ja(l), n = Hi(b, m);
            if (n <= a.ua) {
                b = {};
                if ("Circle" === g.geometry.getType() && 1 === g.index) a.ra = !0, Pw(a, l); else for (n = c.Ja(h[0]), 
                g = c.Ja(h[1]), c = Gi(m, n), m = Gi(m, g), n = Math.sqrt(Math.min(c, m)), a.ra = n <= a.ua, 
                a.ra && (l = c > m ? h[1] : h[0]), Pw(a, l), m = 1, c = f.length; m < c; ++m) if (l = f[m].ja, 
                Di(h[0], l[0]) && Di(h[1], l[1]) || Di(h[0], l[1]) && Di(h[1], l[0])) b[x(l)] = !0; else break;
                b[x(h)] = !0;
                a.Oa = b;
                return;
            }
        }
        a.g && (a.D.aa().Lb(a.g), a.g = null);
    }
    function Sw(a, b) {
        var c = b.geometry;
        return "Circle" === c.getType() && 1 === b.index ? (a = Gi(c.getCenter(), a), c = Math.sqrt(a) - c.Fd(), 
        c * c) : Ii(a, b.ja);
    }
    function Rw(a, b) {
        var c = b.geometry;
        return "Circle" === c.getType() && 1 === b.index ? c.Jb(a) : Ai(a, b.ja);
    }
    k.qn = function(a, b) {
        for (var c = a.ja, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.la(); ) b.push(0);
        switch (e.getType()) {
          case "MultiLineString":
            h = e.S();
            h[f[0]].splice(g + 1, 0, b);
            break;

          case "Polygon":
            h = e.S();
            h[f[0]].splice(g + 1, 0, b);
            break;

          case "MultiPolygon":
            h = e.S();
            h[f[1]][f[0]].splice(g + 1, 0, b);
            break;

          case "LineString":
            h = e.S();
            h.splice(g + 1, 0, b);
            break;

          default:
            return;
        }
        this.o = !0;
        e.ka(h);
        this.o = !1;
        h = this.a;
        h.remove(a);
        Tw(this, e, g, f, 1);
        a = {
            ja: [ c[0], b ],
            feature: d,
            geometry: e,
            depth: f,
            index: g
        };
        h.Ba(Qa(a.ja), a);
        this.j.push([ a, 1 ]);
        b = {
            ja: [ b, c[1] ],
            feature: d,
            geometry: e,
            depth: f,
            index: g + 1
        };
        h.Ba(Qa(b.ja), b);
        this.j.push([ b, 0 ]);
        this.P = !0;
    };
    k.gk = function() {
        if (this.R && "pointerdrag" != this.R.type) {
            var a = this.R;
            Lw(this, a);
            var b = this.j, c = {}, d, e;
            for (e = b.length - 1; 0 <= e; --e) {
                var f = b[e];
                var g = f[0];
                var h = x(g.feature);
                g.depth && (h += "-" + g.depth.join("-"));
                h in c || (c[h] = {});
                0 === f[1] ? (c[h].right = g, c[h].index = g.index) : 1 == f[1] && (c[h].left = g, 
                c[h].index = g.index + 1);
            }
            for (h in c) {
                var l = c[h].right;
                var m = c[h].left;
                e = c[h].index;
                var n = e - 1;
                g = void 0 !== m ? m : l;
                0 > n && (n = 0);
                f = g.geometry;
                var p = d = f.S();
                var q = !1;
                switch (f.getType()) {
                  case "MultiLineString":
                    2 < d[g.depth[0]].length && (d[g.depth[0]].splice(e, 1), q = !0);
                    break;

                  case "LineString":
                    2 < d.length && (d.splice(e, 1), q = !0);
                    break;

                  case "MultiPolygon":
                    p = p[g.depth[1]];

                  case "Polygon":
                    p = p[g.depth[0]], 4 < p.length && (e == p.length - 1 && (e = 0), p.splice(e, 1), 
                    q = !0, 0 === e && (p.pop(), p.push(p[0]), n = p.length - 1));
                }
                q && (q = f, this.o = !0, q.ka(d), this.o = !1, d = [], void 0 !== m && (this.a.remove(m), 
                d.push(m.ja[0])), void 0 !== l && (this.a.remove(l), d.push(l.ja[1])), void 0 !== m && void 0 !== l && (m = {
                    depth: g.depth,
                    feature: g.feature,
                    geometry: g.geometry,
                    index: n,
                    ja: d
                }, this.a.Ba(Qa(m.ja), m)), Tw(this, f, e, g.depth, -1), this.g && (this.D.aa().Lb(this.g), 
                this.g = null), b.length = 0);
            }
            this.b(new Mw("modifyend", this.s, a));
            this.B = !1;
            return !0;
        }
        return !1;
    };
    function Tw(a, b, c, d, e) {
        Uv(a.a, b.A(), function(a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || Ia(a.depth, d)) && a.index > c && (a.index += e);
        });
    }
    function Jw() {
        var a = wf();
        return function() {
            return a.Point;
        };
    }
    function Mw(a, b, c) {
        Pb.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c;
    }
    v(Mw, Pb);
    function Uw(a) {
        ri.call(this, {
            handleEvent: Vw
        });
        a = a ? a : {};
        this.B = a.condition ? a.condition : Oi;
        this.C = a.addCondition ? a.addCondition : zb;
        this.D = a.removeCondition ? a.removeCondition : zb;
        this.P = a.toggleCondition ? a.toggleCondition : Qi;
        this.o = a.multi ? a.multi : !1;
        this.l = a.filter ? a.filter : yb;
        this.j = a.hitTolerance ? a.hitTolerance : 0;
        this.g = new I({
            source: new U({
                useSpatialIndex: !1,
                features: a.features,
                wrapX: a.wrapX
            }),
            style: a.style ? a.style : Ww(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (a.layers) if ("function" === typeof a.layers) a = a.layers; else {
            var b = a.layers;
            a = function(a) {
                return Ea(b, a);
            };
        } else a = yb;
        this.s = a;
        this.a = {};
        a = this.g.aa().i;
        y(a, "add", this.Uo, this);
        y(a, "remove", this.Yo, this);
    }
    v(Uw, ri);
    k = Uw.prototype;
    k.Vo = function() {
        return this.g.aa().i;
    };
    k.Wo = function() {
        return this.j;
    };
    k.Xo = function(a) {
        a = x(a);
        return this.a[a];
    };
    function Vw(a) {
        if (!this.B(a)) return !0;
        var b = this.C(a), c = this.D(a), d = this.P(a), e = !b && !c && !d, f = a.map, g = this.g.aa().i, h = [], l = [];
        if (e) {
            Bb(this.a);
            f.Xc(a.pixel, function(a, b) {
                if (this.l(a, b)) return l.push(a), a = x(a), this.a[a] = b, !this.o;
            }.bind(this), {
                layerFilter: this.s,
                hitTolerance: this.j
            });
            for (e = g.pc() - 1; 0 <= e; --e) {
                f = g.item(e);
                var m = l.indexOf(f);
                -1 < m ? l.splice(m, 1) : (g.remove(f), h.push(f));
            }
            0 !== l.length && g.af(l);
        } else {
            f.Xc(a.pixel, function(a, e) {
                if (this.l(a, e)) return !b && !d || Ea(g.a, a) ? (c || d) && Ea(g.a, a) && (h.push(a), 
                e = x(a), delete this.a[e]) : (l.push(a), a = x(a), this.a[a] = e), !this.o;
            }.bind(this), {
                layerFilter: this.s,
                hitTolerance: this.j
            });
            for (e = h.length - 1; 0 <= e; --e) g.remove(h[e]);
            g.af(l);
        }
        (0 < l.length || 0 < h.length) && this.b(new Xw(Yw, l, h, a));
        return Ni(a);
    }
    k.Zo = function(a) {
        this.j = a;
    };
    k.setMap = function(a) {
        var b = this.u, c = this.g.aa().i;
        b && c.forEach(b.Ck, b);
        ri.prototype.setMap.call(this, a);
        this.g.setMap(a);
        a && c.forEach(a.xk, a);
    };
    function Ww() {
        var a = wf();
        Ga(a.Polygon, a.LineString);
        Ga(a.GeometryCollection, a.LineString);
        return function(b) {
            return b.getGeometry() ? a[b.getGeometry().getType()] : null;
        };
    }
    k.Uo = function(a) {
        var b = this.u;
        b && b.xk(a.element);
    };
    k.Yo = function(a) {
        var b = this.u;
        b && b.Ck(a.element);
    };
    function Xw(a, b, c, d) {
        Pb.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d;
    }
    v(Xw, Pb);
    var Yw = "select";
    function Zw(a) {
        Xi.call(this, {
            handleEvent: $w,
            handleDownEvent: yb,
            handleUpEvent: ax
        });
        a = a ? a : {};
        this.o = a.source ? a.source : null;
        this.R = void 0 !== a.vertex ? a.vertex : !0;
        this.B = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.ua = [];
        this.D = {};
        this.W = {};
        this.s = {};
        this.P = null;
        this.g = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.ra = bx.bind(this);
        this.a = new Dv();
        this.$ = {
            Point: this.gp,
            LineString: this.ij,
            LinearRing: this.ij,
            Polygon: this.hp,
            MultiPoint: this.ep,
            MultiLineString: this.cp,
            MultiPolygon: this.fp,
            GeometryCollection: this.bp,
            Circle: this.ap
        };
    }
    v(Zw, Xi);
    k = Zw.prototype;
    k.Hb = function(a, b) {
        b = void 0 !== b ? b : !0;
        var c = x(a), d = a.getGeometry();
        if (d) {
            var e = this.$[d.getType()];
            e && (this.W[c] = d.A(Ra()), e.call(this, a, d));
        }
        b && (this.D[c] = y(a, "change", this.$o, this));
    };
    k.Gl = function(a) {
        this.Hb(a);
    };
    k.Hl = function(a) {
        this.Lb(a);
    };
    k.gj = function(a) {
        if (a instanceof Zv) var b = a.feature; else a instanceof ai && (b = a.element);
        this.Hb(b);
    };
    k.hj = function(a) {
        if (a instanceof Zv) var b = a.feature; else a instanceof ai && (b = a.element);
        this.Lb(b);
    };
    k.$o = function(a) {
        a = a.target;
        if (this.C) {
            var b = x(a);
            b in this.s || (this.s[b] = a);
        } else this.Fk(a);
    };
    k.Lb = function(a, b) {
        b = void 0 !== b ? b : !0;
        var c = x(a), d = this.W[c];
        if (d) {
            var e = this.a, f = [];
            Uv(e, d, function(b) {
                a === b.feature && f.push(b);
            });
            for (d = f.length - 1; 0 <= d; --d) e.remove(f[d]);
        }
        b && (Fb(this.D[c]), delete this.D[c]);
    };
    k.setMap = function(a) {
        var b = this.u, c = this.ua, d;
        this.j ? d = this.j : this.o && (d = this.o.fd());
        b && (c.forEach(Fb), c.length = 0, d.forEach(this.Hl, this));
        Xi.prototype.setMap.call(this, a);
        a && (this.j ? c.push(y(this.j, "add", this.gj, this), y(this.j, "remove", this.hj, this)) : this.o && c.push(y(this.o, "addfeature", this.gj, this), y(this.o, "removefeature", this.hj, this)), 
        d.forEach(this.Gl, this));
    };
    k.md = zb;
    function cx(a, b, c, d) {
        var e = d.Ta([ b[0] - a.g, b[1] + a.g ]), f = d.Ta([ b[0] + a.g, b[1] - a.g ]);
        e = Qa([ e, f ]);
        var g = Sv(a.a, e);
        a.R && !a.B && (g = g.filter(function(a) {
            return "Circle" !== a.feature.getGeometry().getType();
        }));
        var h = !1;
        e = !1;
        var l = f = null;
        if (0 < g.length) {
            a.P = c;
            g.sort(a.ra);
            var m = g[0].ja;
            h = "Circle" === g[0].feature.getGeometry().getType();
            if (a.R && !a.B) {
                if (c = d.Ja(m[0]), h = d.Ja(m[1]), c = Gi(b, c), b = Gi(b, h), h = Math.sqrt(Math.min(c, b)), 
                h = h <= a.g) e = !0, f = c > b ? m[1] : m[0], l = d.Ja(f);
            } else a.B && (f = h ? zi(c, g[0].feature.getGeometry()) : Ai(c, m), l = d.Ja(f), 
            Hi(b, l) <= a.g && (e = !0, a.R && !h && (c = d.Ja(m[0]), h = d.Ja(m[1]), c = Gi(l, c), 
            b = Gi(l, h), h = Math.sqrt(Math.min(c, b)), h = h <= a.g))) && (f = c > b ? m[1] : m[0], 
            l = d.Ja(f));
            e && (l = [ Math.round(l[0]), Math.round(l[1]) ]);
        }
        return {
            Hr: e,
            vertex: f,
            Rr: l
        };
    }
    k.Fk = function(a) {
        this.Lb(a, !1);
        this.Hb(a, !1);
    };
    k.ap = function(a, b) {
        b = Zd(b).S()[0];
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {
                feature: a,
                ja: e
            };
            this.a.Ba(Qa(e), f);
        }
    };
    k.bp = function(a, b) {
        var c = b.a;
        for (b = 0; b < c.length; ++b) {
            var d = this.$[c[b].getType()];
            d && d.call(this, a, c[b]);
        }
    };
    k.ij = function(a, b) {
        b = b.S();
        var c;
        var d = 0;
        for (c = b.length - 1; d < c; ++d) {
            var e = b.slice(d, d + 2);
            var f = {
                feature: a,
                ja: e
            };
            this.a.Ba(Qa(e), f);
        }
    };
    k.cp = function(a, b) {
        b = b.S();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {
                    feature: a,
                    ja: h
                };
                this.a.Ba(Qa(h), l);
            }
        }
    };
    k.ep = function(a, b) {
        var c = b.S(), d;
        var e = 0;
        for (d = c.length; e < d; ++e) {
            var f = c[e];
            f = {
                feature: a,
                ja: [ f, f ]
            };
            this.a.Ba(b.A(), f);
        }
    };
    k.fp = function(a, b) {
        b = b.S();
        var c, d, e;
        var f = 0;
        for (e = b.length; f < e; ++f) {
            var g = b[f];
            var h = 0;
            for (d = g.length; h < d; ++h) {
                var l = g[h];
                var m = 0;
                for (c = l.length - 1; m < c; ++m) {
                    var n = l.slice(m, m + 2);
                    var p = {
                        feature: a,
                        ja: n
                    };
                    this.a.Ba(Qa(n), p);
                }
            }
        }
    };
    k.gp = function(a, b) {
        var c = b.S();
        a = {
            feature: a,
            ja: [ c, c ]
        };
        this.a.Ba(b.A(), a);
    };
    k.hp = function(a, b) {
        b = b.S();
        var c, d;
        var e = 0;
        for (d = b.length; e < d; ++e) {
            var f = b[e];
            var g = 0;
            for (c = f.length - 1; g < c; ++g) {
                var h = f.slice(g, g + 2);
                var l = {
                    feature: a,
                    ja: h
                };
                this.a.Ba(Qa(h), l);
            }
        }
    };
    function $w(a) {
        var b = cx(this, a.pixel, a.coordinate, a.map);
        b.Hr && (a.coordinate = b.vertex.slice(0, 2), a.pixel = b.Rr);
        return Yi.call(this, a);
    }
    function ax() {
        var a = Cb(this.s);
        a.length && (a.forEach(this.Fk, this), this.s = {});
        return !1;
    }
    function bx(a, b) {
        return Ii(this.P, a.ja) - Ii(this.P, b.ja);
    }
    function dx(a) {
        Xi.call(this, {
            handleDownEvent: ex,
            handleDragEvent: fx,
            handleMoveEvent: gx,
            handleUpEvent: hx
        });
        a = a ? a : {};
        this.a = null;
        this.j = void 0 !== a.features ? a.features : null;
        if (a.layers) if ("function" === typeof a.layers) var b = a.layers; else {
            var c = a.layers;
            b = function(a) {
                return Ea(c, a);
            };
        } else b = yb;
        this.B = b;
        this.o = a.hitTolerance ? a.hitTolerance : 0;
        this.g = null;
        y(this, Xb("active"), this.s, this);
    }
    v(dx, Xi);
    function ex(a) {
        this.g = ix(this, a.pixel, a.map);
        if (!this.a && this.g) {
            this.a = a.coordinate;
            gx.call(this, a);
            var b = this.j || new Xh([ this.g ]);
            this.b(new jx("translatestart", b, a.coordinate));
            return !0;
        }
        return !1;
    }
    function hx(a) {
        if (this.a) {
            this.a = null;
            gx.call(this, a);
            var b = this.j || new Xh([ this.g ]);
            this.b(new jx("translateend", b, a.coordinate));
            return !0;
        }
        return !1;
    }
    function fx(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0], c = a[1] - this.a[1], d = this.j || new Xh([ this.g ]);
            d.forEach(function(a) {
                var d = a.getGeometry();
                d.translate(b, c);
                a.setGeometry(d);
            });
            this.a = a;
            this.b(new jx("translating", d, a));
        }
    }
    function gx(a) {
        var b = a.map.a;
        ix(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"), 
        b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing");
    }
    function ix(a, b, c) {
        return c.Xc(b, function(a) {
            if (!this.j || Ea(this.j.a, a)) return a;
        }.bind(a), {
            layerFilter: a.B,
            hitTolerance: a.o
        });
    }
    dx.prototype.D = function() {
        return this.o;
    };
    dx.prototype.P = function(a) {
        this.o = a;
    };
    dx.prototype.setMap = function(a) {
        var b = this.u;
        Xi.prototype.setMap.call(this, a);
        kx(this, b);
    };
    dx.prototype.s = function() {
        kx(this, null);
    };
    function kx(a, b) {
        var c = a.u;
        a = a.c();
        c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing");
    }
    function jx(a, b, c) {
        Pb.call(this, a);
        this.features = b;
        this.coordinate = c;
    }
    v(jx, Pb);
    function V(a) {
        a = a ? a : {};
        var b = Ab({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        I.call(this, b);
        this.c = null;
        this.W = void 0 !== a.shadow ? a.shadow : 250;
        this.P = void 0;
        this.D = null;
        y(this, Xb(lx), this.Lm, this);
        this.pk(a.gradient ? a.gradient : mx);
        this.ik(void 0 !== a.blur ? a.blur : 15);
        this.setRadius(void 0 !== a.radius ? a.radius : 8);
        y(this, Xb(nx), this.wg, this);
        y(this, Xb(ox), this.wg, this);
        this.wg();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function(a) {
            return a.get(c);
        } : d = c;
        this.j(function(a) {
            a = d(a);
            a = void 0 !== a ? cc(a, 0, 1) : 1;
            var b = 255 * a | 0, c = this.D[b];
            c || (c = [ new rf({
                image: new of({
                    opacity: a,
                    src: this.P
                })
            }) ], this.D[b] = c);
            return c;
        }.bind(this));
        this.set("renderOrder", null);
        y(this, "render", this.bn, this);
    }
    v(V, I);
    var mx = [ "#00f", "#0ff", "#0f0", "#ff0", "#f00" ];
    k = V.prototype;
    k.fi = function() {
        return this.get(nx);
    };
    k.li = function() {
        return this.get(lx);
    };
    k.jj = function() {
        return this.get(ox);
    };
    k.Lm = function() {
        for (var a = this.li(), b = le(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e) c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.c = b.getImageData(0, 0, 1, 256).data;
    };
    k.wg = function() {
        var a = this.jj(), b = this.fi(), c = a + b + 1, d = 2 * c;
        d = le(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.W;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.W;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.P = d.canvas.toDataURL();
        this.D = Array(256);
        this.changed();
    };
    k.bn = function(a) {
        a = a.context;
        var b = a.canvas;
        b = a.getImageData(0, 0, b.width, b.height);
        var c = b.data, d, e;
        var f = 0;
        for (d = c.length; f < d; f += 4) if (e = 4 * c[f + 3]) c[f] = this.c[e], c[f + 1] = this.c[e + 1], 
        c[f + 2] = this.c[e + 2];
        a.putImageData(b, 0, 0);
    };
    k.ik = function(a) {
        this.set(nx, a);
    };
    k.pk = function(a) {
        this.set(lx, a);
    };
    k.setRadius = function(a) {
        this.set(ox, a);
    };
    var nx = "blur", lx = "gradient", ox = "radius";
    function W(a) {
        a = a ? a : {};
        var b = a.renderMode || "hybrid";
        Pa(void 0 == b || "image" == b || "hybrid" == b || "vector" == b, 28);
        a.declutter && "image" == b && (b = "hybrid");
        a.renderMode = b;
        b = Ab({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        I.call(this, b);
        this.D(a.preload ? a.preload : 0);
        this.P(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        this.type = "VECTOR_TILE";
    }
    v(W, I);
    W.prototype.c = function() {
        return this.get("preload");
    };
    W.prototype.i = function() {
        return this.get("useInterimTilesOnError");
    };
    W.prototype.D = function(a) {
        this.set("preload", a);
    };
    W.prototype.P = function(a) {
        this.set("useInterimTilesOnError", a);
    };
    function px(a) {
        this.b = a;
    }
    function qx(a) {
        this.b = a;
    }
    v(qx, px);
    qx.prototype.getType = function() {
        return 35632;
    };
    function rx(a) {
        this.b = a;
    }
    v(rx, px);
    rx.prototype.getType = function() {
        return 35633;
    };
    var sx = new qx("precision mediump float;\nvarying vec2 v_center;\nvarying vec2 v_offset;\nvarying float v_halfWidth;\nvarying float v_pixelRatio;\n\n\n\nuniform float u_opacity;\nuniform vec4 u_fillColor;\nuniform vec4 u_strokeColor;\nuniform vec2 u_size;\n\nvoid main(void) {\n  vec2 windowCenter = vec2((v_center.x + 1.0) / 2.0 * u_size.x * v_pixelRatio,\n      (v_center.y + 1.0) / 2.0 * u_size.y * v_pixelRatio);\n  vec2 windowOffset = vec2((v_offset.x + 1.0) / 2.0 * u_size.x * v_pixelRatio,\n      (v_offset.y + 1.0) / 2.0 * u_size.y * v_pixelRatio);\n  float radius = length(windowCenter - windowOffset);\n  float dist = length(windowCenter - gl_FragCoord.xy);\n  if (dist > radius + v_halfWidth) {\n    if (u_strokeColor.a == 0.0) {\n      gl_FragColor = u_fillColor;\n    } else {\n      gl_FragColor = u_strokeColor;\n    }\n    gl_FragColor.a = gl_FragColor.a - (dist - (radius + v_halfWidth));\n  } else if (u_fillColor.a == 0.0) {\n    // Hooray, no fill, just stroke. We can use real antialiasing.\n    gl_FragColor = u_strokeColor;\n    if (dist < radius - v_halfWidth) {\n      gl_FragColor.a = gl_FragColor.a - (radius - v_halfWidth - dist);\n    }\n  } else {\n    gl_FragColor = u_fillColor;\n    float strokeDist = radius - v_halfWidth;\n    float antialias = 2.0 * v_pixelRatio;\n    if (dist > strokeDist) {\n      gl_FragColor = u_strokeColor;\n    } else if (dist >= strokeDist - antialias) {\n      float step = smoothstep(strokeDist - antialias, strokeDist, dist);\n      gl_FragColor = mix(u_fillColor, u_strokeColor, step);\n    }\n  }\n  gl_FragColor.a = gl_FragColor.a * u_opacity;\n  if (gl_FragColor.a <= 0.0) {\n    discard;\n  }\n}\n"), tx = new rx("varying vec2 v_center;\nvarying vec2 v_offset;\nvarying float v_halfWidth;\nvarying float v_pixelRatio;\n\n\nattribute vec2 a_position;\nattribute float a_instruction;\nattribute float a_radius;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_lineWidth;\nuniform float u_pixelRatio;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  v_center = vec4(u_projectionMatrix * vec4(a_position, 0.0, 1.0)).xy;\n  v_pixelRatio = u_pixelRatio;\n  float lineWidth = u_lineWidth * u_pixelRatio;\n  v_halfWidth = lineWidth / 2.0;\n  if (lineWidth == 0.0) {\n    lineWidth = 2.0 * u_pixelRatio;\n  }\n  vec2 offset;\n  // Radius with anitaliasing (roughly).\n  float radius = a_radius + 3.0 * u_pixelRatio;\n  // Until we get gl_VertexID in WebGL, we store an instruction.\n  if (a_instruction == 0.0) {\n    // Offsetting the edges of the triangle by lineWidth / 2 is necessary, however\n    // we should also leave some space for the antialiasing, thus we offset by lineWidth.\n    offset = vec2(-1.0, 1.0);\n  } else if (a_instruction == 1.0) {\n    offset = vec2(-1.0, -1.0);\n  } else if (a_instruction == 2.0) {\n    offset = vec2(1.0, -1.0);\n  } else {\n    offset = vec2(1.0, 1.0);\n  }\n\n  gl_Position = u_projectionMatrix * vec4(a_position + offset * radius, 0.0, 1.0) +\n      offsetMatrix * vec4(offset * lineWidth, 0.0, 0.0);\n  v_offset = vec4(u_projectionMatrix * vec4(a_position.x + a_radius, a_position.y,\n      0.0, 1.0)).xy;\n\n  if (distance(v_center, v_offset) > 20000.0) {\n    gl_Position = vec4(v_center, 0.0, 1.0);\n  }\n}\n\n\n");
    function ux(a, b) {
        this.f = a.getUniformLocation(b, "u_projectionMatrix");
        this.i = a.getUniformLocation(b, "u_offsetScaleMatrix");
        this.c = a.getUniformLocation(b, "u_offsetRotateMatrix");
        this.ma = a.getUniformLocation(b, "u_lineWidth");
        this.na = a.getUniformLocation(b, "u_pixelRatio");
        this.a = a.getUniformLocation(b, "u_opacity");
        this.B = a.getUniformLocation(b, "u_fillColor");
        this.P = a.getUniformLocation(b, "u_strokeColor");
        this.Da = a.getUniformLocation(b, "u_size");
        this.b = a.getAttribLocation(b, "a_position");
        this.j = a.getAttribLocation(b, "a_instruction");
        this.L = a.getAttribLocation(b, "a_radius");
    }
    function vx() {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    }
    function wx(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5];
        return a;
    }
    function xx(a, b) {
        this.origin = rb(b);
        this.eb = ad();
        this.Ea = ad();
        this.Oa = ad();
        this.Xa = vx();
        this.b = [];
        this.j = null;
        this.f = [];
        this.i = [];
        this.a = [];
        this.o = null;
        this.g = void 0;
    }
    v(xx, il);
    xx.prototype.Pa = function(a, b, c, d, e, f, g, h, l, m, n) {
        var p = a.b;
        if (this.g) {
            var q = p.isEnabled(p.STENCIL_TEST);
            var r = p.getParameter(p.STENCIL_FUNC);
            var u = p.getParameter(p.STENCIL_VALUE_MASK);
            var w = p.getParameter(p.STENCIL_REF);
            var z = p.getParameter(p.STENCIL_WRITEMASK);
            var A = p.getParameter(p.STENCIL_FAIL);
            var E = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
            var T = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
            p.enable(p.STENCIL_TEST);
            p.clear(p.STENCIL_BUFFER_BIT);
            p.stencilMask(255);
            p.stencilFunc(p.ALWAYS, 1, 255);
            p.stencilOp(p.KEEP, p.KEEP, p.REPLACE);
            this.g.Pa(a, b, c, d, e, f, g, h, l, m, n);
            p.stencilMask(0);
            p.stencilFunc(p.NOTEQUAL, 1, 255);
        }
        yx(a, 34962, this.o);
        yx(a, 34963, this.j);
        f = this.Lf(p, a, e, f);
        var Ja = bd(this.eb);
        hd(Ja, 2 / (c * e[0]), 2 / (c * e[1]));
        gd(Ja, -d);
        id(Ja, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
        b = bd(this.Oa);
        hd(b, 2 / e[0], 2 / e[1]);
        e = bd(this.Ea);
        0 !== d && gd(e, -d);
        p.uniformMatrix4fv(f.f, !1, wx(this.Xa, Ja));
        p.uniformMatrix4fv(f.i, !1, wx(this.Xa, b));
        p.uniformMatrix4fv(f.c, !1, wx(this.Xa, e));
        p.uniform1f(f.a, g);
        if (void 0 === l) this.Ud(p, a, h, !1); else {
            m ? a = this.Me(p, a, h, l, n) : (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), 
            this.Ud(p, a, h, !0), a = (a = l(null)) ? a : void 0);
            var ua = a;
        }
        this.Mf(p, f);
        this.g && (q || p.disable(p.STENCIL_TEST), p.clear(p.STENCIL_BUFFER_BIT), p.stencilFunc(r, w, u), 
        p.stencilMask(z), p.stencilOp(A, T, E));
        return ua;
    };
    function zx(a, b, c, d) {
        a.drawElements(4, d - c, b.j ? 5125 : 5123, c * (b.j ? 4 : 2));
    }
    var Ax = [ 0, 0, 0, 1 ], Bx = [], Cx = [ 0, 0, 0, 1 ];
    function Dx(a, b, c, d, e, f) {
        a = (c - a) * (f - b) - (e - a) * (d - b);
        return a <= Ex && a >= -Ex ? void 0 : 0 < a;
    }
    var Ex = Number.EPSILON || 2.220446049250313e-16;
    function Fx(a) {
        this.b = void 0 !== a ? a : [];
        this.a = Gx;
    }
    var Gx = 35044;
    function Hx(a, b) {
        xx.call(this, a, b);
        this.u = null;
        this.l = [];
        this.s = [];
        this.L = 0;
        this.c = {
            fillColor: null,
            strokeColor: null,
            lineDash: null,
            lineDashOffset: void 0,
            lineWidth: void 0,
            changed: !1
        };
    }
    v(Hx, xx);
    k = Hx.prototype;
    k.fc = function(a, b) {
        var c = a.Fd(), d = a.la();
        if (c) {
            this.f.push(this.b.length);
            this.i.push(b);
            this.c.changed && (this.s.push(this.b.length), this.c.changed = !1);
            this.L = c;
            a = a.ba();
            a = bc(a, 0, 2, d, -this.origin[0], -this.origin[1]);
            b = this.a.length;
            c = this.b.length;
            var e = b / 4, f;
            for (f = 0; 2 > f; f += d) this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 0, 
            this.a[b++] = this.L, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 1, 
            this.a[b++] = this.L, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 2, 
            this.a[b++] = this.L, this.a[b++] = a[f], this.a[b++] = a[f + 1], this.a[b++] = 3, 
            this.a[b++] = this.L, this.b[c++] = e, this.b[c++] = e + 1, this.b[c++] = e + 2, 
            this.b[c++] = e + 2, this.b[c++] = e + 3, this.b[c++] = e, e += 4;
        } else this.c.changed && (this.l.pop(), this.l.length && (d = this.l[this.l.length - 1], 
        this.c.fillColor = d[0], this.c.strokeColor = d[1], this.c.lineWidth = d[2], this.c.changed = !1));
    };
    k.jb = function() {
        this.o = new Fx(this.a);
        this.j = new Fx(this.b);
        this.f.push(this.b.length);
        0 === this.s.length && 0 < this.l.length && (this.l = []);
        this.b = this.a = null;
    };
    k.Eb = function(a) {
        var b = this.o, c = this.j;
        return function() {
            Ix(a, b);
            Ix(a, c);
        };
    };
    k.Lf = function(a, b, c, d) {
        var e = Jx(b, sx, tx);
        if (this.u) var f = this.u; else this.u = f = new ux(a, e);
        b.gd(e);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
        a.enableVertexAttribArray(f.j);
        a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
        a.enableVertexAttribArray(f.L);
        a.vertexAttribPointer(f.L, 1, 5126, !1, 16, 12);
        a.uniform2fv(f.Da, c);
        a.uniform1f(f.na, d);
        return f;
    };
    k.Mf = function(a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.j);
        a.disableVertexAttribArray(b.L);
    };
    k.Ud = function(a, b, c) {
        if (Db(c)) {
            var d = this.f[this.f.length - 1];
            for (c = this.s.length - 1; 0 <= c; --c) {
                var e = this.s[c];
                var f = this.l[c];
                a.uniform4fv(this.u.B, f[0]);
                Kx(this, a, f[1], f[2]);
                zx(a, b, e, d);
                d = e;
            }
        } else {
            var g = this.f.length - 2;
            f = d = this.f[g + 1];
            for (e = this.s.length - 1; 0 <= e; --e) {
                var h = this.l[e];
                a.uniform4fv(this.u.B, h[0]);
                Kx(this, a, h[1], h[2]);
                for (h = this.s[e]; 0 <= g && this.f[g] >= h; ) {
                    var l = this.f[g];
                    var m = this.i[g];
                    m = x(m).toString();
                    c[m] && (d !== f && zx(a, b, d, f), f = l);
                    g--;
                    d = l;
                }
                d !== f && zx(a, b, d, f);
                d = f = h;
            }
        }
    };
    k.Me = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.s.length - 1; 0 <= f; --f) {
            var m = this.l[f];
            a.uniform4fv(this.u.B, m[0]);
            Kx(this, a, m[1], m[2]);
            for (g = this.s[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = x(n).toString();
                if (void 0 === c[p] && n.getGeometry() && (void 0 === e || ub(e, n.getGeometry().A())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), 
                zx(a, b, m, l), l = d(n))) return l;
                h--;
                l = m;
            }
        }
    };
    function Kx(a, b, c, d) {
        b.uniform4fv(a.u.P, c);
        b.uniform1f(a.u.ma, d);
    }
    k.Qa = function(a, b) {
        if (b) {
            var c = b.c;
            this.c.lineDash = c ? c : Bx;
            c = b.i;
            this.c.lineDashOffset = c ? c : 0;
            c = b.b;
            c instanceof CanvasGradient || c instanceof CanvasPattern ? c = Cx : c = ge(c).map(function(a, b) {
                return 3 != b ? a / 255 : a;
            }) || Cx;
            b = b.a;
            b = void 0 !== b ? b : 1;
        } else c = [ 0, 0, 0, 0 ], b = 0;
        a = a ? a.b : [ 0, 0, 0, 0 ];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Ax : a = ge(a).map(function(a, b) {
            return 3 != b ? a / 255 : a;
        }) || Ax;
        this.c.strokeColor && Ia(this.c.strokeColor, c) && this.c.fillColor && Ia(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.changed = !0, 
        this.c.fillColor = a, this.c.strokeColor = c, this.c.lineWidth = b, this.l.push([ a, c, b ]));
    };
    var Lx = new qx("precision mediump float;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\n\nuniform float u_opacity;\nuniform sampler2D u_image;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_image, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  float alpha = texColor.a * v_opacity * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"), Mx = new rx("varying vec2 v_texCoord;\nvarying float v_opacity;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nattribute vec2 a_offsets;\nattribute float a_opacity;\nattribute float a_rotateWithView;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  mat4 offsetMatrix = u_offsetScaleMatrix;\n  if (a_rotateWithView == 1.0) {\n    offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  }\n  vec4 offsets = offsetMatrix * vec4(a_offsets, 0.0, 0.0);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n  v_texCoord = a_texCoord;\n  v_opacity = a_opacity;\n}\n\n\n");
    function Nx(a, b) {
        this.f = a.getUniformLocation(b, "u_projectionMatrix");
        this.i = a.getUniformLocation(b, "u_offsetScaleMatrix");
        this.c = a.getUniformLocation(b, "u_offsetRotateMatrix");
        this.a = a.getUniformLocation(b, "u_opacity");
        this.b = a.getAttribLocation(b, "a_position");
        this.D = a.getAttribLocation(b, "a_texCoord");
        this.u = a.getAttribLocation(b, "a_offsets");
        this.s = a.getAttribLocation(b, "a_opacity");
        this.C = a.getAttribLocation(b, "a_rotateWithView");
    }
    function Ox(a, b) {
        this.a = a;
        this.b = b;
        this.f = {};
        this.i = {};
        this.c = {};
        this.o = this.u = this.g = this.l = null;
        (this.j = Ea(Aa, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        y(this.a, "webglcontextlost", this.jq, this);
        y(this.a, "webglcontextrestored", this.kq, this);
    }
    v(Ox, Nb);
    function yx(a, b, c) {
        var d = a.b, e = c.b, f = String(x(c));
        if (f in a.f) d.bindBuffer(b, a.f[f].buffer); else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.j ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.f[f] = {
                Ac: c,
                buffer: g
            };
        }
    }
    function Ix(a, b) {
        var c = a.b;
        b = String(x(b));
        var d = a.f[b];
        c.isContextLost() || c.deleteBuffer(d.buffer);
        delete a.f[b];
    }
    k = Ox.prototype;
    k.fa = function() {
        Mb(this.a);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.f) a.deleteBuffer(this.f[b].buffer);
            for (b in this.c) a.deleteProgram(this.c[b]);
            for (b in this.i) a.deleteShader(this.i[b]);
            a.deleteFramebuffer(this.g);
            a.deleteRenderbuffer(this.o);
            a.deleteTexture(this.u);
        }
    };
    k.iq = function() {
        return this.b;
    };
    function Px(a) {
        if (!a.g) {
            var b = a.b, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = Qx(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.g = c;
            a.u = d;
            a.o = e;
        }
        return a.g;
    }
    function Rx(a, b) {
        var c = String(x(b));
        if (c in a.i) return a.i[c];
        var d = a.b, e = d.createShader(b.getType());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.i[c] = e;
    }
    function Jx(a, b, c) {
        var d = x(b) + "/" + x(c);
        if (d in a.c) return a.c[d];
        var e = a.b, f = e.createProgram();
        e.attachShader(f, Rx(a, b));
        e.attachShader(f, Rx(a, c));
        e.linkProgram(f);
        return a.c[d] = f;
    }
    k.jq = function() {
        Bb(this.f);
        Bb(this.i);
        Bb(this.c);
        this.o = this.u = this.g = this.l = null;
    };
    k.kq = function() {};
    k.gd = function(a) {
        if (a == this.l) return !1;
        this.b.useProgram(a);
        this.l = a;
        return !0;
    };
    function Sx(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d;
    }
    function Qx(a, b, c) {
        var d = Sx(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d;
    }
    function Tx(a, b) {
        var c = Sx(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c;
    }
    function Ux(a, b) {
        xx.call(this, a, b);
        this.B = this.C = void 0;
        this.u = [];
        this.s = [];
        this.na = this.ma = this.height = void 0;
        this.R = null;
        this.width = this.scale = this.rotation = this.rotateWithView = this.P = this.Da = this.opacity = void 0;
    }
    v(Ux, xx);
    k = Ux.prototype;
    k.Eb = function(a) {
        var b = this.o, c = this.j, d = this.sg(!0), e = a.b;
        return function() {
            if (!e.isContextLost()) {
                var f;
                var g = 0;
                for (f = d.length; g < f; ++g) e.deleteTexture(d[g]);
            }
            Ix(a, b);
            Ix(a, c);
        };
    };
    function Vx(a, b, c, d) {
        var e = a.C, f = a.B, g = a.height, h = a.ma, l = a.na, m = a.opacity, n = a.Da, p = a.P, q = a.rotateWithView ? 1 : 0, r = -a.rotation, u = a.scale, w = a.width, z = Math.cos(r);
        r = Math.sin(r);
        var A = a.b.length, E = a.a.length, T;
        for (T = 0; T < c; T += d) {
            var Ja = b[T] - a.origin[0];
            var ua = b[T + 1] - a.origin[1];
            var ma = E / 8;
            var da = -u * e;
            var ja = -u * (g - f);
            a.a[E++] = Ja;
            a.a[E++] = ua;
            a.a[E++] = da * z - ja * r;
            a.a[E++] = da * r + ja * z;
            a.a[E++] = n / l;
            a.a[E++] = (p + g) / h;
            a.a[E++] = m;
            a.a[E++] = q;
            da = u * (w - e);
            ja = -u * (g - f);
            a.a[E++] = Ja;
            a.a[E++] = ua;
            a.a[E++] = da * z - ja * r;
            a.a[E++] = da * r + ja * z;
            a.a[E++] = (n + w) / l;
            a.a[E++] = (p + g) / h;
            a.a[E++] = m;
            a.a[E++] = q;
            da = u * (w - e);
            ja = u * f;
            a.a[E++] = Ja;
            a.a[E++] = ua;
            a.a[E++] = da * z - ja * r;
            a.a[E++] = da * r + ja * z;
            a.a[E++] = (n + w) / l;
            a.a[E++] = p / h;
            a.a[E++] = m;
            a.a[E++] = q;
            da = -u * e;
            ja = u * f;
            a.a[E++] = Ja;
            a.a[E++] = ua;
            a.a[E++] = da * z - ja * r;
            a.a[E++] = da * r + ja * z;
            a.a[E++] = n / l;
            a.a[E++] = p / h;
            a.a[E++] = m;
            a.a[E++] = q;
            a.b[A++] = ma;
            a.b[A++] = ma + 1;
            a.b[A++] = ma + 2;
            a.b[A++] = ma;
            a.b[A++] = ma + 2;
            a.b[A++] = ma + 3;
        }
    }
    function Wx(a, b, c, d) {
        var e, f = b.length;
        for (e = 0; e < f; ++e) {
            var g = b[e];
            var h = x(g).toString();
            h in c ? g = c[h] : (g = Tx(d, g), c[h] = g);
            a[e] = g;
        }
    }
    k.Lf = function(a, b) {
        var c = Jx(b, Lx, Mx);
        if (this.R) var d = this.R; else this.R = d = new Nx(a, c);
        b.gd(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
        a.enableVertexAttribArray(d.u);
        a.vertexAttribPointer(d.u, 2, 5126, !1, 32, 8);
        a.enableVertexAttribArray(d.D);
        a.vertexAttribPointer(d.D, 2, 5126, !1, 32, 16);
        a.enableVertexAttribArray(d.s);
        a.vertexAttribPointer(d.s, 1, 5126, !1, 32, 24);
        a.enableVertexAttribArray(d.C);
        a.vertexAttribPointer(d.C, 1, 5126, !1, 32, 28);
        return d;
    };
    k.Mf = function(a, b) {
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.u);
        a.disableVertexAttribArray(b.D);
        a.disableVertexAttribArray(b.s);
        a.disableVertexAttribArray(b.C);
    };
    k.Ud = function(a, b, c, d) {
        var e = d ? this.kg() : this.sg();
        d = d ? this.s : this.u;
        if (Db(c)) {
            var f;
            c = 0;
            var g = e.length;
            for (f = 0; c < g; ++c) {
                a.bindTexture(3553, e[c]);
                var h = d[c];
                zx(a, b, f, h);
                f = h;
            }
        } else for (f = g = 0, h = e.length; f < h; ++f) {
            a.bindTexture(3553, e[f]);
            for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.f.length && this.f[g] <= m; ) {
                var p = x(this.i[g]).toString();
                void 0 !== c[p] ? (n !== l && zx(a, b, n, l), l = n = g === this.f.length - 1 ? m : this.f[g + 1]) : l = g === this.f.length - 1 ? m : this.f[g + 1];
                g++;
            }
            n !== l && zx(a, b, n, l);
        }
    };
    k.Me = function(a, b, c, d, e) {
        var f, g, h = this.f.length - 1, l = this.kg();
        for (f = l.length - 1; 0 <= f; --f) {
            a.bindTexture(3553, l[f]);
            var m = 0 < f ? this.s[f - 1] : 0;
            for (g = this.s[f]; 0 <= h && this.f[h] >= m; ) {
                var n = this.f[h];
                var p = this.i[h];
                var q = x(p).toString();
                if (void 0 === c[q] && p.getGeometry() && (void 0 === e || ub(e, p.getGeometry().A())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), 
                zx(a, b, n, g), g = d(p))) return g;
                g = n;
                h--;
            }
        }
    };
    k.jb = function() {
        this.na = this.ma = this.height = this.B = this.C = void 0;
        this.b = null;
        this.scale = this.rotation = this.rotateWithView = this.P = this.Da = this.opacity = void 0;
        this.a = null;
        this.width = void 0;
    };
    function Xx(a, b) {
        Ux.call(this, a, b);
        this.l = [];
        this.c = [];
        this.D = [];
        this.L = [];
    }
    v(Xx, Ux);
    k = Xx.prototype;
    k.Ec = function(a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        Vx(this, b, b.length, a.la());
    };
    k.Gc = function(a, b) {
        this.f.push(this.b.length);
        this.i.push(b);
        b = a.ba();
        Vx(this, b, b.length, a.la());
    };
    k.jb = function(a) {
        var b = a.b;
        this.u.push(this.b.length);
        this.s.push(this.b.length);
        this.o = new Fx(this.a);
        this.j = new Fx(this.b);
        var c = {};
        Wx(this.D, this.l, c, b);
        Wx(this.L, this.c, c, b);
        this.c = this.l = null;
        Ux.prototype.jb.call(this, a);
    };
    k.cc = function(a) {
        var b = a.ic(), c = a.U(1), d = a.Pe(), e = a.Tg(), f = a.j, g = a.Oc(), h = a.u, l = a.i, m = a.ac();
        a = a.c;
        if (0 === this.l.length) this.l.push(c); else {
            var n = this.l[this.l.length - 1];
            x(n) != x(c) && (this.u.push(this.b.length), this.l.push(c));
        }
        0 === this.c.length ? this.c.push(e) : (n = this.c[this.c.length - 1], x(n) != x(e) && (this.s.push(this.b.length), 
        this.c.push(e)));
        this.C = b[0];
        this.B = b[1];
        this.height = m[1];
        this.ma = d[1];
        this.na = d[0];
        this.opacity = f;
        this.Da = g[0];
        this.P = g[1];
        this.rotation = l;
        this.rotateWithView = h;
        this.scale = a;
        this.width = m[0];
    };
    k.sg = function(a) {
        return a ? this.D.concat(this.L) : this.D;
    };
    k.kg = function() {
        return this.L;
    };
    var Yx = new qx("precision mediump float;\nvarying float v_round;\nvarying vec2 v_roundVertex;\nvarying float v_halfWidth;\n\n\n\nuniform float u_opacity;\nuniform vec4 u_color;\nuniform vec2 u_size;\nuniform float u_pixelRatio;\n\nvoid main(void) {\n  if (v_round > 0.0) {\n    vec2 windowCoords = vec2((v_roundVertex.x + 1.0) / 2.0 * u_size.x * u_pixelRatio,\n        (v_roundVertex.y + 1.0) / 2.0 * u_size.y * u_pixelRatio);\n    if (length(windowCoords - gl_FragCoord.xy) > v_halfWidth * u_pixelRatio) {\n      discard;\n    }\n  }\n  gl_FragColor = u_color;\n  float alpha = u_color.a * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"), Zx = new rx("varying float v_round;\nvarying vec2 v_roundVertex;\nvarying float v_halfWidth;\n\n\nattribute vec2 a_lastPos;\nattribute vec2 a_position;\nattribute vec2 a_nextPos;\nattribute float a_direction;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\nuniform float u_lineWidth;\nuniform float u_miterLimit;\n\nbool nearlyEquals(in float value, in float ref) {\n  float epsilon = 0.000000000001;\n  return value >= ref - epsilon && value <= ref + epsilon;\n}\n\nvoid alongNormal(out vec2 offset, in vec2 nextP, in float turnDir, in float direction) {\n  vec2 dirVect = nextP - a_position;\n  vec2 normal = normalize(vec2(-turnDir * dirVect.y, turnDir * dirVect.x));\n  offset = u_lineWidth / 2.0 * normal * direction;\n}\n\nvoid miterUp(out vec2 offset, out float round, in bool isRound, in float direction) {\n  float halfWidth = u_lineWidth / 2.0;\n  vec2 tangent = normalize(normalize(a_nextPos - a_position) + normalize(a_position - a_lastPos));\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 dirVect = a_nextPos - a_position;\n  vec2 tmpNormal = normalize(vec2(-dirVect.y, dirVect.x));\n  float miterLength = abs(halfWidth / dot(normal, tmpNormal));\n  offset = normal * direction * miterLength;\n  round = 0.0;\n  if (isRound) {\n    round = 1.0;\n  } else if (miterLength > u_miterLimit + u_lineWidth) {\n    offset = halfWidth * tmpNormal * direction;\n  }\n}\n\nbool miterDown(out vec2 offset, in vec4 projPos, in mat4 offsetMatrix, in float direction) {\n  bool degenerate = false;\n  vec2 tangent = normalize(normalize(a_nextPos - a_position) + normalize(a_position - a_lastPos));\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 dirVect = a_lastPos - a_position;\n  vec2 tmpNormal = normalize(vec2(-dirVect.y, dirVect.x));\n  vec2 longOffset, shortOffset, longVertex;\n  vec4 shortProjVertex;\n  float halfWidth = u_lineWidth / 2.0;\n  if (length(a_nextPos - a_position) > length(a_lastPos - a_position)) {\n    longOffset = tmpNormal * direction * halfWidth;\n    shortOffset = normalize(vec2(dirVect.y, -dirVect.x)) * direction * halfWidth;\n    longVertex = a_nextPos;\n    shortProjVertex = u_projectionMatrix * vec4(a_lastPos, 0.0, 1.0);\n  } else {\n    shortOffset = tmpNormal * direction * halfWidth;\n    longOffset = normalize(vec2(dirVect.y, -dirVect.x)) * direction * halfWidth;\n    longVertex = a_lastPos;\n    shortProjVertex = u_projectionMatrix * vec4(a_nextPos, 0.0, 1.0);\n  }\n  //Intersection algorithm based on theory by Paul Bourke (http://paulbourke.net/geometry/pointlineplane/).\n  vec4 p1 = u_projectionMatrix * vec4(longVertex, 0.0, 1.0) + offsetMatrix * vec4(longOffset, 0.0, 0.0);\n  vec4 p2 = projPos + offsetMatrix * vec4(longOffset, 0.0, 0.0);\n  vec4 p3 = shortProjVertex + offsetMatrix * vec4(-shortOffset, 0.0, 0.0);\n  vec4 p4 = shortProjVertex + offsetMatrix * vec4(shortOffset, 0.0, 0.0);\n  float denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);\n  float firstU = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;\n  float secondU = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;\n  float epsilon = 0.000000000001;\n  if (firstU > epsilon && firstU < 1.0 - epsilon && secondU > epsilon && secondU < 1.0 - epsilon) {\n    shortProjVertex.x = p1.x + firstU * (p2.x - p1.x);\n    shortProjVertex.y = p1.y + firstU * (p2.y - p1.y);\n    offset = shortProjVertex.xy;\n    degenerate = true;\n  } else {\n    float miterLength = abs(halfWidth / dot(normal, tmpNormal));\n    offset = normal * direction * miterLength;\n  }\n  return degenerate;\n}\n\nvoid squareCap(out vec2 offset, out float round, in bool isRound, in vec2 nextP,\n    in float turnDir, in float direction) {\n  round = 0.0;\n  vec2 dirVect = a_position - nextP;\n  vec2 firstNormal = normalize(dirVect);\n  vec2 secondNormal = vec2(turnDir * firstNormal.y * direction, -turnDir * firstNormal.x * direction);\n  vec2 hypotenuse = normalize(firstNormal - secondNormal);\n  vec2 normal = vec2(turnDir * hypotenuse.y * direction, -turnDir * hypotenuse.x * direction);\n  float length = sqrt(v_halfWidth * v_halfWidth * 2.0);\n  offset = normal * length;\n  if (isRound) {\n    round = 1.0;\n  }\n}\n\nvoid main(void) {\n  bool degenerate = false;\n  float direction = float(sign(a_direction));\n  mat4 offsetMatrix = u_offsetScaleMatrix * u_offsetRotateMatrix;\n  vec2 offset;\n  vec4 projPos = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n  bool round = nearlyEquals(mod(a_direction, 2.0), 0.0);\n\n  v_round = 0.0;\n  v_halfWidth = u_lineWidth / 2.0;\n  v_roundVertex = projPos.xy;\n\n  if (nearlyEquals(mod(a_direction, 3.0), 0.0) || nearlyEquals(mod(a_direction, 17.0), 0.0)) {\n    alongNormal(offset, a_nextPos, 1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 5.0), 0.0) || nearlyEquals(mod(a_direction, 13.0), 0.0)) {\n    alongNormal(offset, a_lastPos, -1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 23.0), 0.0)) {\n    miterUp(offset, v_round, round, direction);\n  } else if (nearlyEquals(mod(a_direction, 19.0), 0.0)) {\n    degenerate = miterDown(offset, projPos, offsetMatrix, direction);\n  } else if (nearlyEquals(mod(a_direction, 7.0), 0.0)) {\n    squareCap(offset, v_round, round, a_nextPos, 1.0, direction);\n  } else if (nearlyEquals(mod(a_direction, 11.0), 0.0)) {\n    squareCap(offset, v_round, round, a_lastPos, -1.0, direction);\n  }\n  if (!degenerate) {\n    vec4 offsets = offsetMatrix * vec4(offset, 0.0, 0.0);\n    gl_Position = projPos + offsets;\n  } else {\n    gl_Position = vec4(offset, 0.0, 1.0);\n  }\n}\n\n\n");
    function $x(a, b) {
        this.f = a.getUniformLocation(b, "u_projectionMatrix");
        this.i = a.getUniformLocation(b, "u_offsetScaleMatrix");
        this.c = a.getUniformLocation(b, "u_offsetRotateMatrix");
        this.ma = a.getUniformLocation(b, "u_lineWidth");
        this.P = a.getUniformLocation(b, "u_miterLimit");
        this.a = a.getUniformLocation(b, "u_opacity");
        this.B = a.getUniformLocation(b, "u_color");
        this.Da = a.getUniformLocation(b, "u_size");
        this.na = a.getUniformLocation(b, "u_pixelRatio");
        this.l = a.getAttribLocation(b, "a_lastPos");
        this.b = a.getAttribLocation(b, "a_position");
        this.o = a.getAttribLocation(b, "a_nextPos");
        this.g = a.getAttribLocation(b, "a_direction");
    }
    function ay(a, b) {
        xx.call(this, a, b);
        this.u = null;
        this.s = [];
        this.l = [];
        this.c = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0,
            changed: !1
        };
    }
    v(ay, xx);
    function by(a, b, c, d) {
        var e, f = a.a.length, g = a.b.length, h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2, l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2, m = lv(b, c, d), n = g, p = 1;
        for (e = 0; e < c; e += d) {
            var q = f / 7;
            var r = u;
            var u = w || [ b[e], b[e + 1] ];
            if (0 === e) {
                var w = [ b[e + d], b[e + d + 1] ];
                if (c - 0 === 2 * d && Ia(u, w)) break;
                if (m) {
                    r = [ b[c - 2 * d], b[c - 2 * d + 1] ];
                    var z = w;
                } else {
                    l && (f = cy(a, [ 0, 0 ], u, w, p * dy * l, f), f = cy(a, [ 0, 0 ], u, w, -p * dy * l, f), 
                    a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, a.b[g++] = q + 1, a.b[g++] = q + 3, 
                    a.b[g++] = q + 2);
                    f = cy(a, [ 0, 0 ], u, w, p * ey * (l || 1), f);
                    f = cy(a, [ 0, 0 ], u, w, -p * ey * (l || 1), f);
                    n = f / 7 - 1;
                    continue;
                }
            } else if (e === c - d) {
                m ? w = z : (r = r || [ 0, 0 ], f = cy(a, r, u, [ 0, 0 ], p * fy * (l || 1), f), 
                f = cy(a, r, u, [ 0, 0 ], -p * fy * (l || 1), f), a.b[g++] = q, a.b[g++] = n - 1, 
                a.b[g++] = n, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, l && (f = cy(a, r, u, [ 0, 0 ], p * gy * l, f), 
                f = cy(a, r, u, [ 0, 0 ], -p * gy * l, f), a.b[g++] = q + 2, a.b[g++] = q, a.b[g++] = q + 1, 
                a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q + 2));
                break;
            } else w = [ b[e + d], b[e + d + 1] ];
            var A = Dx(r[0], r[1], u[0], u[1], w[0], w[1]) ? -1 : 1;
            f = cy(a, r, u, w, A * hy * (h || 1), f);
            f = cy(a, r, u, w, A * iy * (h || 1), f);
            f = cy(a, r, u, w, -A * jy * (h || 1), f);
            0 < e && (a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 2, a.b[g++] = q, 
            a.b[g++] = 0 < p * A ? n : n - 1);
            a.b[g++] = q;
            a.b[g++] = q + 2;
            a.b[g++] = q + 1;
            n = q + 2;
            p = A;
            h && (f = cy(a, r, u, w, A * ky * h, f), a.b[g++] = q + 1, a.b[g++] = q + 3, a.b[g++] = q);
        }
        m && (q = q || f / 7, A = Sd([ r[0], r[1], u[0], u[1], w[0], w[1] ], 0, 6, 2) ? 1 : -1, 
        f = cy(a, r, u, w, A * hy * (h || 1), f), cy(a, r, u, w, -A * jy * (h || 1), f), 
        a.b[g++] = q, a.b[g++] = n - 1, a.b[g++] = n, a.b[g++] = q + 1, a.b[g++] = q, a.b[g++] = 0 < p * A ? n : n - 1);
    }
    function cy(a, b, c, d, e, f) {
        a.a[f++] = b[0];
        a.a[f++] = b[1];
        a.a[f++] = c[0];
        a.a[f++] = c[1];
        a.a[f++] = d[0];
        a.a[f++] = d[1];
        a.a[f++] = e;
        return f;
    }
    function ly(a, b, c, d) {
        c -= b;
        return c < 2 * d ? !1 : c === 2 * d ? !Ia([ a[b], a[b + 1] ], [ a[b + d], a[b + d + 1] ]) : !0;
    }
    k = ay.prototype;
    k.Cc = function(a, b) {
        var c = a.ba();
        a = a.la();
        ly(c, 0, c.length, a) && (c = bc(c, 0, c.length, a, -this.origin[0], -this.origin[1]), 
        this.c.changed && (this.l.push(this.b.length), this.c.changed = !1), this.f.push(this.b.length), 
        this.i.push(b), by(this, c, c.length, a));
    };
    k.Dc = function(a, b) {
        var c = this.b.length, d = a.qb();
        d.unshift(0);
        var e = a.ba();
        a = a.la();
        var f;
        if (1 < d.length) {
            var g = 1;
            for (f = d.length; g < f; ++g) if (ly(e, d[g - 1], d[g], a)) {
                var h = bc(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                by(this, h, h.length, a);
            }
        }
        this.b.length > c && (this.f.push(c), this.i.push(b), this.c.changed && (this.l.push(c), 
        this.c.changed = !1));
    };
    function my(a, b, c, d) {
        lv(b, b.length, d) || (b.push(b[0]), b.push(b[1]));
        by(a, b, b.length, d);
        if (c.length) {
            var e;
            b = 0;
            for (e = c.length; b < e; ++b) lv(c[b], c[b].length, d) || (c[b].push(c[b][0]), 
            c[b].push(c[b][1])), by(a, c[b], c[b].length, d);
        }
    }
    function ny(a, b, c) {
        c = void 0 === c ? a.b.length : c;
        a.f.push(c);
        a.i.push(b);
        a.c.changed && (a.l.push(c), a.c.changed = !1);
    }
    k.jb = function() {
        this.o = new Fx(this.a);
        this.j = new Fx(this.b);
        this.f.push(this.b.length);
        0 === this.l.length && 0 < this.s.length && (this.s = []);
        this.b = this.a = null;
    };
    k.Eb = function(a) {
        var b = this.o, c = this.j;
        return function() {
            Ix(a, b);
            Ix(a, c);
        };
    };
    k.Lf = function(a, b, c, d) {
        var e = Jx(b, Yx, Zx);
        if (this.u) var f = this.u; else this.u = f = new $x(a, e);
        b.gd(e);
        a.enableVertexAttribArray(f.l);
        a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
        a.enableVertexAttribArray(f.b);
        a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
        a.enableVertexAttribArray(f.o);
        a.vertexAttribPointer(f.o, 2, 5126, !1, 28, 16);
        a.enableVertexAttribArray(f.g);
        a.vertexAttribPointer(f.g, 1, 5126, !1, 28, 24);
        a.uniform2fv(f.Da, c);
        a.uniform1f(f.na, d);
        return f;
    };
    k.Mf = function(a, b) {
        a.disableVertexAttribArray(b.l);
        a.disableVertexAttribArray(b.b);
        a.disableVertexAttribArray(b.o);
        a.disableVertexAttribArray(b.g);
    };
    k.Ud = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (Db(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.l.length - 1; 0 <= c; --c) {
                var h = this.l[c];
                var l = this.s[c];
                oy(this, a, l[0], l[1], l[2]);
                zx(a, b, h, g);
                a.clear(a.DEPTH_BUFFER_BIT);
                g = h;
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.l.length - 1; 0 <= h; --h) {
                var n = this.s[h];
                oy(this, a, n[0], n[1], n[2]);
                for (n = this.l[h]; 0 <= m && this.f[m] >= n; ) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = x(q).toString();
                    c[q] && (g !== l && (zx(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p;
                }
                g !== l && (zx(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n;
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e));
    };
    k.Me = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.l.length - 1; 0 <= f; --f) {
            var m = this.s[f];
            oy(this, a, m[0], m[1], m[2]);
            for (g = this.l[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = x(n).toString();
                if (void 0 === c[p] && n.getGeometry() && (void 0 === e || ub(e, n.getGeometry().A())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), 
                zx(a, b, m, l), l = d(n))) return l;
                h--;
                l = m;
            }
        }
    };
    function oy(a, b, c, d, e) {
        b.uniform4fv(a.u.B, c);
        b.uniform1f(a.u.ma, d);
        b.uniform1f(a.u.P, e);
    }
    k.Qa = function(a, b) {
        a = b.g;
        this.c.lineCap = void 0 !== a ? a : "round";
        a = b.c;
        this.c.lineDash = a ? a : Bx;
        a = b.i;
        this.c.lineDashOffset = a ? a : 0;
        a = b.j;
        this.c.lineJoin = void 0 !== a ? a : "round";
        a = b.b;
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Cx : a = ge(a).map(function(a, b) {
            return 3 != b ? a / 255 : a;
        }) || Cx;
        var c = b.a;
        c = void 0 !== c ? c : 1;
        b = b.l;
        b = void 0 !== b ? b : 10;
        this.c.strokeColor && Ia(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.changed = !0, 
        this.c.strokeColor = a, this.c.lineWidth = c, this.c.miterLimit = b, this.s.push([ a, c, b ]));
    };
    var ey = 3, fy = 5, dy = 7, gy = 11, hy = 13, iy = 17, jy = 19, ky = 23;
    var py = new qx("precision mediump float;\n\n\n\nuniform vec4 u_color;\nuniform float u_opacity;\n\nvoid main(void) {\n  gl_FragColor = u_color;\n  float alpha = u_color.a * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n"), qy = new rx("\n\nattribute vec2 a_position;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n}\n\n\n");
    function ry(a, b) {
        this.f = a.getUniformLocation(b, "u_projectionMatrix");
        this.i = a.getUniformLocation(b, "u_offsetScaleMatrix");
        this.c = a.getUniformLocation(b, "u_offsetRotateMatrix");
        this.B = a.getUniformLocation(b, "u_color");
        this.a = a.getUniformLocation(b, "u_opacity");
        this.b = a.getAttribLocation(b, "a_position");
    }
    function sy() {
        this.b = this.a = this.f = void 0;
        this.c = 0;
    }
    function ty(a) {
        var b = a.b;
        if (b) {
            var c = b.next, d = b.Fb;
            c && (c.Fb = d);
            d && (d.next = c);
            a.b = c || d;
            a.f === a.a ? (a.b = void 0, a.f = void 0, a.a = void 0) : a.f === b ? a.f = a.b : a.a === b && (a.a = d ? a.b.Fb : a.b);
            a.c--;
        }
    }
    function uy(a) {
        a.b = a.f;
        if (a.b) return a.b.data;
    }
    function vy(a) {
        if (a.b && a.b.next) return a.b = a.b.next, a.b.data;
    }
    function wy(a) {
        if (a.b && a.b.next) return a.b.next.data;
    }
    function xy(a) {
        if (a.b && a.b.Fb) return a.b = a.b.Fb, a.b.data;
    }
    function yy(a) {
        if (a.b && a.b.Fb) return a.b.Fb.data;
    }
    function zy(a) {
        if (a.b) return a.b.data;
    }
    sy.prototype.concat = function(a) {
        if (a.b) {
            if (this.b) {
                var b = this.b.next;
                this.b.next = a.f;
                a.f.Fb = this.b;
                b.Fb = a.a;
                a.a.next = b;
                this.c += a.c;
            } else this.b = a.b, this.f = a.f, this.a = a.a, this.c = a.c;
            a.b = void 0;
            a.f = void 0;
            a.a = void 0;
            a.c = 0;
        }
    };
    function Ay(a, b) {
        xx.call(this, a, b);
        this.g = new ay(a, b);
        this.u = null;
        this.s = [];
        this.c = [];
        this.l = {
            fillColor: null,
            changed: !1
        };
    }
    v(Ay, xx);
    function By(a, b, c, d) {
        var e = new sy(), f = new Dv();
        Cy(a, b, d, e, f, !0);
        b = Dy(e);
        if (c.length) {
            var g, h = [];
            var l = 0;
            for (g = c.length; l < g; ++l) {
                var m = {
                    list: new sy(),
                    Mc: void 0,
                    Ah: new Dv()
                };
                h.push(m);
                Cy(a, c[l], d, m.list, m.Ah, !1);
                Ey(m.list, m.Ah, !0);
                m.Mc = Dy(m.list);
            }
            h.sort(function(a, b) {
                return b.Mc[0] === a.Mc[0] ? a.Mc[1] - b.Mc[1] : b.Mc[0] - a.Mc[0];
            });
            for (l = 0; l < h.length; ++l) {
                c = h[l].list;
                g = d = uy(c);
                do {
                    if (Fy(g, f).length) {
                        var n = !0;
                        break;
                    }
                    g = vy(c);
                } while (d !== g);
                !n && Gy(c, h[l].Mc[0], e, b[0], f) && (f.concat(h[l].Ah), Ey(e, f, !1));
            }
        } else Ey(e, f, !1);
        Hy(a, e, f);
    }
    function Cy(a, b, c, d, e, f) {
        var g, h = a.a.length / 2, l = [], m = [];
        if (f === Sd(b, 0, b.length, c)) {
            var n = f = Iy(a, b[0], b[1], h++);
            var p = c;
            for (g = b.length; p < g; p += c) {
                var q = Iy(a, b[p], b[p + 1], h++);
                m.push(Jy(n, q, d));
                l.push([ Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y) ]);
                n = q;
            }
        } else for (p = b.length - c, n = f = Iy(a, b[p], b[p + 1], h++), p -= c, g = 0; p >= g; p -= c) q = Iy(a, b[p], b[p + 1], h++), 
        m.push(Jy(n, q, d)), l.push([ Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y) ]), 
        n = q;
        m.push(Jy(q, f, d));
        l.push([ Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y) ]);
        e.load(l, m);
    }
    function Dy(a) {
        var b = uy(a), c = b, d = [ c.X.x, c.X.y ];
        do c = vy(a), c.X.x > d[0] && (d = [ c.X.x, c.X.y ]); while (c !== b);
        return d;
    }
    function Ey(a, b, c) {
        var d = uy(a), e = d, f = vy(a), g = !1;
        do {
            var h = c ? Dx(f.V.x, f.V.y, e.V.x, e.V.y, e.X.x, e.X.y) : Dx(e.X.x, e.X.y, e.V.x, e.V.y, f.V.x, f.V.y);
            void 0 === h ? (Ky(e, f, a, b), g = !0, f === d && (d = wy(a)), f = e, xy(a)) : e.V.Kb !== h && (e.V.Kb = h, 
            g = !0);
            e = f;
            f = vy(a);
        } while (e !== d);
        return g;
    }
    function Gy(a, b, c, d, e) {
        for (var f = uy(a); f.V.x !== b; ) f = vy(a);
        b = f.V;
        d = {
            x: d,
            y: b.y,
            rb: -1
        };
        var g = Infinity, h;
        var l = Fy({
            X: b,
            V: d
        }, e, !0);
        var m = 0;
        for (h = l.length; m < h; ++m) {
            var n = l[m], p = Ly(b, d, n.X, n.V, !0), q = Math.abs(b.x - p[0]);
            if (q < g && void 0 !== Dx(b.x, b.y, n.X.x, n.X.y, n.V.x, n.V.y)) {
                g = q;
                var r = {
                    x: p[0],
                    y: p[1],
                    rb: -1
                };
                f = n;
            }
        }
        if (Infinity === g) return !1;
        l = f.V;
        if (0 < g && (f = My(b, r, f.V, e), f.length)) for (r = Infinity, m = 0, h = f.length; m < h; ++m) if (g = f[m], 
        n = Math.atan2(b.y - g.y, d.x - g.x), n < r || n === r && g.x < l.x) r = n, l = g;
        for (f = uy(c); f.V.x !== l.x || f.V.y !== l.y; ) f = vy(c);
        d = {
            x: b.x,
            y: b.y,
            rb: b.rb,
            Kb: void 0
        };
        m = {
            x: f.V.x,
            y: f.V.y,
            rb: f.V.rb,
            Kb: void 0
        };
        wy(a).X = d;
        Jy(b, f.V, a, e);
        Jy(m, d, a, e);
        f.V = m;
        a.b && (a.f = a.b, a.a = a.b.Fb);
        c.concat(a);
        return !0;
    }
    function Hy(a, b, c) {
        for (var d = !1, e = Ny(b, c); 3 < b.c; ) if (e) {
            if (!Oy(a, b, c, e, d) && !Ey(b, c, d) && !Py(a, b, c, !0)) break;
        } else if (!Oy(a, b, c, e, d) && !Ey(b, c, d) && !Py(a, b, c)) if (e = Ny(b, c)) {
            d = b;
            var f = 2 * d.c, g = Array(f), h = uy(d), l = h, m = 0;
            do g[m++] = l.X.x, g[m++] = l.X.y, l = vy(d); while (l !== h);
            d = !Sd(g, 0, f, 2);
            Ey(b, c, d);
        } else {
            e = a;
            d = b;
            f = g = uy(d);
            do {
                h = Fy(f, c);
                if (h.length) {
                    g = h[0];
                    h = Ly(f.X, f.V, g.X, g.V);
                    h = Iy(e, h[0], h[1], e.a.length / 2);
                    l = new sy();
                    m = new Dv();
                    Jy(h, f.V, l, m);
                    f.V = h;
                    Ev(c, [ Math.min(f.X.x, h.x), Math.min(f.X.y, h.y), Math.max(f.X.x, h.x), Math.max(f.X.y, h.y) ], f);
                    for (f = vy(d); f !== g; ) Jy(f.X, f.V, l, m), c.remove(f), ty(d), f = zy(d);
                    Jy(g.X, h, l, m);
                    g.X = h;
                    Ev(c, [ Math.min(g.V.x, h.x), Math.min(g.V.y, h.y), Math.max(g.V.x, h.x), Math.max(g.V.y, h.y) ], g);
                    Ey(d, c, !1);
                    Hy(e, d, c);
                    Ey(l, m, !1);
                    Hy(e, l, m);
                    break;
                }
                f = vy(d);
            } while (f !== g);
            break;
        }
        3 === b.c && (e = a.b.length, a.b[e++] = yy(b).X.rb, a.b[e++] = zy(b).X.rb, a.b[e++] = wy(b).X.rb);
    }
    function Oy(a, b, c, d, e) {
        var f = a.b.length, g = uy(b), h = yy(b), l = g, m = vy(b), n = wy(b), p = !1;
        do {
            var q = l.X;
            var r = l.V;
            var u = m.V;
            if (!1 === r.Kb) {
                var w = d ? 0 === My(q, r, u, c, !0).length : e ? Qy(n.V, u, r, q, h.X) : Qy(h.X, q, r, u, n.V);
                !d && 0 !== Fy({
                    X: q,
                    V: u
                }, c).length || !w || !d && !1 !== q.Kb && !1 !== u.Kb && Sd([ h.X.x, h.X.y, q.x, q.y, r.x, r.y, u.x, u.y, n.V.x, n.V.y ], 0, 10, 2) !== !e || (a.b[f++] = q.rb, 
                a.b[f++] = r.rb, a.b[f++] = u.rb, Ky(l, m, b, c), m === g && (g = n), p = !0);
            }
            h = yy(b);
            l = zy(b);
            m = vy(b);
            n = wy(b);
        } while (l !== g && 3 < b.c);
        return p;
    }
    function Py(a, b, c, d) {
        var e = uy(b);
        vy(b);
        var f = e, g = vy(b), h = !1;
        do {
            var l = Ly(f.X, f.V, g.X, g.V, d);
            if (l) {
                h = a.b.length;
                var m = a.a.length / 2, n = xy(b);
                ty(b);
                c.remove(n);
                var p = n === e;
                d ? (l[0] === f.X.x && l[1] === f.X.y ? (xy(b), l = f.X, g.X = l, c.remove(f), p = p || f === e) : (l = g.V, 
                f.V = l, c.remove(g), p = p || g === e), ty(b)) : (l = Iy(a, l[0], l[1], m), f.V = l, 
                g.X = l, Ev(c, [ Math.min(f.X.x, f.V.x), Math.min(f.X.y, f.V.y), Math.max(f.X.x, f.V.x), Math.max(f.X.y, f.V.y) ], f), 
                Ev(c, [ Math.min(g.X.x, g.V.x), Math.min(g.X.y, g.V.y), Math.max(g.X.x, g.V.x), Math.max(g.X.y, g.V.y) ], g));
                a.b[h++] = n.X.rb;
                a.b[h++] = n.V.rb;
                a.b[h++] = l.rb;
                h = !0;
                if (p) break;
            }
            f = yy(b);
            g = vy(b);
        } while (f !== e);
        return h;
    }
    function Ny(a, b) {
        var c = uy(a), d = c;
        do {
            if (Fy(d, b).length) return !1;
            d = vy(a);
        } while (d !== c);
        return !0;
    }
    function Iy(a, b, c, d) {
        var e = a.a.length;
        a.a[e++] = b;
        a.a[e++] = c;
        return {
            x: b,
            y: c,
            rb: d,
            Kb: void 0
        };
    }
    function Jy(a, b, c, d) {
        var e = {
            X: a,
            V: b
        }, f = {
            Fb: void 0,
            next: void 0,
            data: e
        }, g = c.b;
        if (g) {
            var h = g.next;
            f.Fb = g;
            f.next = h;
            g.next = f;
            h && (h.Fb = f);
            g === c.a && (c.a = f);
        } else c.f = f, c.a = f, f.next = f, f.Fb = f;
        c.b = f;
        c.c++;
        d && d.Ba([ Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y) ], e);
        return e;
    }
    function Ky(a, b, c, d) {
        zy(c) === b && (ty(c), a.V = b.V, d.remove(b), Ev(d, [ Math.min(a.X.x, a.V.x), Math.min(a.X.y, a.V.y), Math.max(a.X.x, a.V.x), Math.max(a.X.y, a.V.y) ], a));
    }
    function My(a, b, c, d, e) {
        var f, g, h = [], l = Sv(d, [ Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y) ]);
        d = 0;
        for (f = l.length; d < f; ++d) for (g in l[d]) {
            var m = l[d][g];
            "object" !== typeof m || e && !m.Kb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Fd([ a.x, a.y, b.x, b.y, c.x, c.y ], 0, 6, 2, m.x, m.y) || h.push(m);
        }
        return h;
    }
    function Fy(a, b, c) {
        var d = a.X, e = a.V;
        b = Sv(b, [ Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y) ]);
        var f = [], g;
        var h = 0;
        for (g = b.length; h < g; ++h) {
            var l = b[h];
            a !== l && (c || l.X !== e || l.V !== d) && Ly(d, e, l.X, l.V, c) && f.push(l);
        }
        return f;
    }
    function Ly(a, b, c, d, e) {
        var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
        if (0 !== f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f, 
        c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f, !e && d > Ex && d < 1 - Ex && c > Ex && c < 1 - Ex || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c)) return [ a.x + d * (b.x - a.x), a.y + d * (b.y - a.y) ];
    }
    function Qy(a, b, c, d, e) {
        if (void 0 === b.Kb || void 0 === d.Kb) return !1;
        var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
        e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
        a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
        c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
        b = b.Kb ? c || a : c && a;
        return (d.Kb ? e || f : e && f) && b;
    }
    k = Ay.prototype;
    k.Fc = function(a, b) {
        var c = a.wd(), d = a.la(), e = this.b.length, f = this.g.b.length;
        a = a.ba();
        var g, h, l;
        var m = h = 0;
        for (g = c.length; m < g; ++m) {
            var n = c[m];
            if (0 < n.length) {
                var p = bc(a, h, n[0], d, -this.origin[0], -this.origin[1]);
                if (p.length) {
                    var q = [];
                    h = 1;
                    for (l = n.length; h < l; ++h) if (n[h] !== n[h - 1]) {
                        var r = bc(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                        q.push(r);
                    }
                    my(this.g, p, q, d);
                    By(this, p, q, d);
                }
            }
            h = n[n.length - 1];
        }
        this.b.length > e && (this.f.push(e), this.i.push(b), this.l.changed && (this.c.push(e), 
        this.l.changed = !1));
        this.g.b.length > f && ny(this.g, b, f);
    };
    k.Hc = function(a, b) {
        var c = a.qb(), d = a.la();
        if (0 < c.length) {
            a = a.ba().map(Number);
            var e = bc(a, 0, c[0], d, -this.origin[0], -this.origin[1]);
            if (e.length) {
                var f = [], g;
                var h = 1;
                for (g = c.length; h < g; ++h) if (c[h] !== c[h - 1]) {
                    var l = bc(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                    f.push(l);
                }
                this.f.push(this.b.length);
                this.i.push(b);
                this.l.changed && (this.c.push(this.b.length), this.l.changed = !1);
                ny(this.g, b);
                my(this.g, e, f, d);
                By(this, e, f, d);
            }
        }
    };
    k.jb = function(a) {
        this.o = new Fx(this.a);
        this.j = new Fx(this.b);
        this.f.push(this.b.length);
        this.g.jb(a);
        0 === this.c.length && 0 < this.s.length && (this.s = []);
        this.b = this.a = null;
    };
    k.Eb = function(a) {
        var b = this.o, c = this.j, d = this.g.Eb(a);
        return function() {
            Ix(a, b);
            Ix(a, c);
            d();
        };
    };
    k.Lf = function(a, b) {
        var c = Jx(b, py, qy);
        if (this.u) var d = this.u; else this.u = d = new ry(a, c);
        b.gd(c);
        a.enableVertexAttribArray(d.b);
        a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0);
        return d;
    };
    k.Mf = function(a, b) {
        a.disableVertexAttribArray(b.b);
    };
    k.Ud = function(a, b, c, d) {
        var e = a.getParameter(a.DEPTH_FUNC), f = a.getParameter(a.DEPTH_WRITEMASK);
        d || (a.enable(a.DEPTH_TEST), a.depthMask(!0), a.depthFunc(a.NOTEQUAL));
        if (Db(c)) {
            var g = this.f[this.f.length - 1];
            for (c = this.c.length - 1; 0 <= c; --c) {
                var h = this.c[c];
                var l = this.s[c];
                a.uniform4fv(this.u.B, l);
                zx(a, b, h, g);
                g = h;
            }
        } else {
            var m = this.f.length - 2;
            l = g = this.f[m + 1];
            for (h = this.c.length - 1; 0 <= h; --h) {
                var n = this.s[h];
                a.uniform4fv(this.u.B, n);
                for (n = this.c[h]; 0 <= m && this.f[m] >= n; ) {
                    var p = this.f[m];
                    var q = this.i[m];
                    q = x(q).toString();
                    c[q] && (g !== l && (zx(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT)), l = p);
                    m--;
                    g = p;
                }
                g !== l && (zx(a, b, g, l), a.clear(a.DEPTH_BUFFER_BIT));
                g = l = n;
            }
        }
        d || (a.disable(a.DEPTH_TEST), a.clear(a.DEPTH_BUFFER_BIT), a.depthMask(f), a.depthFunc(e));
    };
    k.Me = function(a, b, c, d, e) {
        var f, g;
        var h = this.f.length - 2;
        var l = this.f[h + 1];
        for (f = this.c.length - 1; 0 <= f; --f) {
            var m = this.s[f];
            a.uniform4fv(this.u.B, m);
            for (g = this.c[f]; 0 <= h && this.f[h] >= g; ) {
                m = this.f[h];
                var n = this.i[h];
                var p = x(n).toString();
                if (void 0 === c[p] && n.getGeometry() && (void 0 === e || ub(e, n.getGeometry().A())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), 
                zx(a, b, m, l), l = d(n))) return l;
                h--;
                l = m;
            }
        }
    };
    k.Qa = function(a, b) {
        a = a ? a.b : [ 0, 0, 0, 0 ];
        a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Ax : a = ge(a).map(function(a, b) {
            return 3 != b ? a / 255 : a;
        }) || Ax;
        this.l.fillColor && Ia(a, this.l.fillColor) || (this.l.fillColor = a, this.l.changed = !0, 
        this.s.push(a));
        b ? this.g.Qa(null, b) : this.g.Qa(null, new qf({
            color: [ 0, 0, 0, 0 ],
            lineWidth: 0
        }));
    };
    function Ry(a, b) {
        this.b = b;
        this.f = [ {
            x: 0,
            y: 0,
            width: a,
            height: a
        } ];
        this.i = {};
        this.c = le(a, a);
        this.a = this.c.canvas;
    }
    Ry.prototype.get = function(a) {
        return this.i[a] || null;
    };
    Ry.prototype.add = function(a, b, c, d, e) {
        var f;
        var g = 0;
        for (f = this.f.length; g < f; ++g) {
            var h = this.f[g];
            if (h.width >= b + this.b && h.height >= c + this.b) return f = {
                offsetX: h.x + this.b,
                offsetY: h.y + this.b,
                image: this.a
            }, this.i[a] = f, d.call(e, this.c, h.x + this.b, h.y + this.b), a = g, b += this.b, 
            d = c + this.b, h.width - b > h.height - d ? (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: h.height
            }, b = {
                x: h.x,
                y: h.y + d,
                width: b,
                height: h.height - d
            }, Sy(this, a, c, b)) : (c = {
                x: h.x + b,
                y: h.y,
                width: h.width - b,
                height: d
            }, b = {
                x: h.x,
                y: h.y + d,
                width: h.width,
                height: h.height - d
            }, Sy(this, a, c, b)), f;
        }
        return null;
    };
    function Sy(a, b, c, d) {
        b = [ b, 1 ];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.f.splice.apply(a.f, b);
    }
    function Ty(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.f = void 0 !== a.maxSize ? a.maxSize : void 0 !== za ? za : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.g = [ new Ry(this.a, this.b) ];
        this.c = this.a;
        this.i = [ new Ry(this.c, this.b) ];
    }
    function Uy(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; ++d) {
            var e = a[d];
            if (e = e.get(b)) return e;
        }
        return null;
    }
    function Vy(a, b) {
        return {
            offsetX: a.offsetX,
            offsetY: a.offsetY,
            image: a.image,
            mn: b.image
        };
    }
    Ty.prototype.add = function(a, b, c, d, e, f) {
        if (b + this.b > this.f || c + this.b > this.f) return null;
        d = Wy(this, !1, a, b, c, d, f);
        if (!d) return null;
        a = Wy(this, !0, a, b, c, void 0 !== e ? e : Ba, f);
        return Vy(d, a);
    };
    function Wy(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.g, l;
        var m = 0;
        for (l = h.length; m < l; ++m) {
            var n = h[m];
            if (n = n.add(c, d, e, f, g)) return n;
            n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.f), a.c = n) : (n = Math.min(2 * a.a, a.f), 
            a.a = n), n = new Ry(n, a.b), h.push(n), ++l);
        }
        return null;
    }
    function Xy(a, b) {
        Ux.call(this, a, b);
        this.c = [];
        this.ra = [];
        this.Wb = le(0, 0).canvas;
        this.L = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.pa = "";
        this.Z = this.W = this.ua = this.$ = void 0;
        this.D = {};
        this.l = void 0;
        this.opacity = this.scale = 1;
    }
    v(Xy, Ux);
    k = Xy.prototype;
    k.Yb = function(a, b) {
        if (this.pa) {
            var c = null, d = 2, e = 2;
            switch (a.getType()) {
              case "Point":
              case "MultiPoint":
                c = a.ba();
                d = c.length;
                e = a.la();
                break;

              case "Circle":
                c = a.getCenter();
                break;

              case "LineString":
                c = a.Ne();
                break;

              case "MultiLineString":
                c = a.Oe();
                d = c.length;
                break;

              case "Polygon":
                c = a.Zd();
                break;

              case "MultiPolygon":
                c = ce(a), d = c.length;
            }
            this.f.push(this.b.length);
            this.i.push(b);
            a = this.l;
            b = this.pa.split("\n");
            var f = Yy(this, b), g, h, l = Math.round(f[0] * this.$ - this.W), m = Math.round(f[1] * this.ua - this.Z), n = this.L.lineWidth / 2 * this.L.scale;
            f = 0;
            for (g = b.length; f < g; ++f) {
                var p = 0;
                var q = a.height * f;
                var r = b[f].split("");
                var u = 0;
                for (h = r.length; u < h; ++u) {
                    var w = a.Wh;
                    var z = r[u], A = Uy(w.g, z);
                    A ? (w = Uy(w.i, z), w = Vy(A, w)) : w = null;
                    if (w) {
                        A = w.image;
                        this.C = l - p;
                        this.B = m - q;
                        this.Da = 0 === u ? w.offsetX - n : w.offsetX;
                        this.P = w.offsetY;
                        this.height = a.height;
                        this.width = 0 === u || u === r.length - 1 ? a.width[r[u]] + n : a.width[r[u]];
                        this.ma = A.height;
                        this.na = A.width;
                        0 === this.c.length ? this.c.push(A) : (w = this.c[this.c.length - 1], x(w) != x(A) && (this.u.push(this.b.length), 
                        this.c.push(A)));
                        w = c;
                        z = d;
                        var E = e;
                        for (A = 0; A < z; A += E) Vx(this, w, z, E);
                    }
                    p += this.width;
                }
            }
        }
    };
    function Yy(a, b) {
        var c = a.l, d = b.length * c.height;
        return [ b.map(function(b) {
            var d = 0, e;
            var h = 0;
            for (e = b.length; h < e; ++h) {
                var l = b[h];
                c.width[l] || Zy(a, l);
                d += c.width[l] ? c.width[l] : 0;
            }
            return d;
        }).reduce(function(a, b) {
            return Math.max(a, b);
        }), d ];
    }
    function Zy(a, b) {
        if (1 === b.length) {
            var c = a.l, d = a.L;
            a = a.Wb.getContext("2d");
            a.font = d.font;
            a = Math.ceil(a.measureText(b).width * d.scale);
            c.Wh.add(b, a, c.height, function(a, c, g) {
                a.font = d.font;
                a.fillStyle = d.fillColor;
                a.strokeStyle = d.strokeColor;
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                a.miterLimit = d.miterLimit;
                a.textAlign = "left";
                a.textBaseline = "top";
                ye && d.lineDash && (a.setLineDash(d.lineDash), a.lineDashOffset = d.lineDashOffset);
                1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
                d.strokeColor && a.strokeText(b, c, g);
                d.fillColor && a.fillText(b, c, g);
            }) && (c.width[b] = a);
        }
    }
    k.jb = function(a) {
        var b = a.b;
        this.u.push(this.b.length);
        this.s = this.u;
        this.o = new Fx(this.a);
        this.j = new Fx(this.b);
        Wx(this.ra, this.c, {}, b);
        this.L = {
            strokeColor: null,
            lineCap: void 0,
            lineDash: null,
            lineDashOffset: void 0,
            lineJoin: void 0,
            lineWidth: 0,
            miterLimit: void 0,
            fillColor: null,
            font: void 0,
            scale: void 0
        };
        this.pa = "";
        this.Z = this.W = this.ua = this.$ = void 0;
        this.c = null;
        this.D = {};
        this.l = void 0;
        Ux.prototype.jb.call(this, a);
    };
    k.pb = function(a) {
        var b = this.L, c = a.wa(), d = a.xa();
        if (a && a.Fa() && (c || d)) {
            c ? (c = c.b, b.fillColor = ke(c ? c : Ax)) : b.fillColor = null;
            d ? (c = d.b, b.strokeColor = ke(c ? c : Cx), b.lineWidth = d.a || 1, b.lineCap = d.g || "round", 
            b.lineDashOffset = d.i || 0, b.lineJoin = d.j || "round", b.miterLimit = d.l || 10, 
            d = d.c, b.lineDash = d ? d.slice() : Bx) : (b.strokeColor = null, b.lineWidth = 0);
            b.font = a.b || "10px sans-serif";
            b.scale = a.a || 1;
            this.pa = a.Fa();
            d = Xl[a.i];
            c = Xl[a.g];
            this.$ = void 0 === d ? .5 : d;
            this.ua = void 0 === c ? .5 : c;
            this.W = a.f || 0;
            this.Z = a.c || 0;
            this.rotateWithView = !!a.l;
            this.rotation = a.j || 0;
            a = [];
            for (var e in b) if (b[e] || 0 === b[e]) Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
            c = "";
            e = 0;
            for (d = a.length; e < d; ++e) c += a[e];
            e = c;
            this.D[e] || (a = this.Wb.getContext("2d"), a.font = b.font, a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale), 
            this.D[e] = {
                Wh: new Ty({
                    space: b.lineWidth + 1
                }),
                width: {},
                height: a
            });
            this.l = this.D[e];
        } else this.pa = "";
    };
    k.sg = function() {
        return this.ra;
    };
    k.kg = function() {
        return this.ra;
    };
    function $y(a, b, c) {
        this.c = b;
        this.i = a;
        this.f = c;
        this.a = {};
    }
    v($y, Vl);
    k = $y.prototype;
    k.Xb = function() {};
    function az(a, b) {
        var c = [], d;
        for (d in a.a) {
            var e = a.a[d], f;
            for (f in e) c.push(e[f].Eb(b));
        }
        return function() {
            for (var a = c.length, b, d = 0; d < a; d++) b = c[d].apply(this, arguments);
            return b;
        };
    }
    function bz(a, b) {
        for (var c in a.a) {
            var d = a.a[c], e;
            for (e in d) d[e].jb(b);
        }
    }
    k.Ka = function(a, b) {
        var c = void 0 !== a ? a.toString() : "0";
        a = this.a[c];
        void 0 === a && (a = {}, this.a[c] = a);
        c = a[b];
        void 0 === c && (c = new cz[b](this.i, this.c), a[b] = c);
        return c;
    };
    k.Ng = function() {
        return Db(this.a);
    };
    k.Pa = function(a, b, c, d, e, f, g, h) {
        var l = Object.keys(this.a).map(Number);
        l.sort(Da);
        var m, n;
        var p = 0;
        for (m = l.length; p < m; ++p) {
            var q = this.a[l[p].toString()];
            var r = 0;
            for (n = Wl.length; r < n; ++r) {
                var u = q[Wl[r]];
                void 0 !== u && u.Pa(a, b, c, d, e, f, g, h, void 0, !1);
            }
        }
    };
    function dz(a, b, c, d, e, f, g, h, l, m, n) {
        var p = ez, q = Object.keys(a.a).map(Number);
        q.sort(function(a, b) {
            return b - a;
        });
        var r, u;
        var w = 0;
        for (r = q.length; w < r; ++w) {
            var z = a.a[q[w].toString()];
            for (u = Wl.length - 1; 0 <= u; --u) {
                var A = z[Wl[u]];
                if (void 0 !== A && (A = A.Pa(b, c, d, e, p, f, g, h, l, m, n))) return A;
            }
        }
    }
    k.va = function(a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, Px(b));
        var p;
        void 0 !== this.f && (p = Ta(db(a), d * this.f));
        return dz(this, b, a, d, e, g, h, l, function(a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a))) return a;
        }, !0, p);
    };
    function fz(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, Px(c));
        return void 0 !== dz(a, c, b, d, e, f, g, h, function() {
            var a = new Uint8Array(4);
            l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
            return 0 < a[3];
        }, !1);
    }
    var ez = [ 1, 1 ], cz = {
        Circle: Hx,
        Image: Xx,
        LineString: ay,
        Polygon: Ay,
        Text: Xy
    };
    function gz(a, b, c, d, e, f, g) {
        this.b = a;
        this.f = b;
        this.c = f;
        this.i = g;
        this.l = e;
        this.j = d;
        this.g = c;
        this.a = this.o = this.u = this.s = null;
    }
    v(gz, il);
    function hz(a, b, c) {
        var d = a.b;
        b = b.Ka(0, "Text");
        b.pb(a.a);
        b.Yb(c, null);
        b.jb(d);
        b.Pa(a.b, a.f, a.g, a.j, a.l, a.i, 1, {}, void 0, !1);
        b.Eb(d)();
    }
    k = gz.prototype;
    k.Gd = function(a) {
        this.Qa(a.wa(), a.xa());
        this.cc(a.U());
        this.pb(a.Fa());
    };
    k.Ib = function(a) {
        switch (a.getType()) {
          case "Point":
            this.Gc(a, null);
            break;

          case "LineString":
            this.Cc(a, null);
            break;

          case "Polygon":
            this.Hc(a, null);
            break;

          case "MultiPoint":
            this.Ec(a, null);
            break;

          case "MultiLineString":
            this.Dc(a, null);
            break;

          case "MultiPolygon":
            this.Fc(a, null);
            break;

          case "GeometryCollection":
            this.Le(a);
            break;

          case "Circle":
            this.fc(a, null);
        }
    };
    k.Ke = function(a, b) {
        (a = (0, b.fb)(a)) && ub(this.c, a.A()) && (this.Gd(b), this.Ib(a));
    };
    k.Le = function(a) {
        a = a.a;
        var b;
        var c = 0;
        for (b = a.length; c < b; ++c) this.Ib(a[c]);
    };
    k.Gc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "Image");
        e.cc(this.s);
        e.Gc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.Ec = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "Image");
        e.cc(this.s);
        e.Ec(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.Cc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "LineString");
        e.Qa(null, this.o);
        e.Cc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.Dc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "LineString");
        e.Qa(null, this.o);
        e.Dc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.Hc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "Polygon");
        e.Qa(this.u, this.o);
        e.Hc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.Fc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "Polygon");
        e.Qa(this.u, this.o);
        e.Fc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.fc = function(a, b) {
        var c = this.b, d = new $y(1, this.c), e = d.Ka(0, "Circle");
        e.Qa(this.u, this.o);
        e.fc(a, b);
        e.jb(c);
        e.Pa(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
        e.Eb(c)();
        this.a && hz(this, d, a);
    };
    k.cc = function(a) {
        this.s = a;
    };
    k.Qa = function(a, b) {
        this.u = a;
        this.o = b;
    };
    k.pb = function(a) {
        this.a = a;
    };
    var iz = new qx("precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform float u_opacity;\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_texture, v_texCoord);\n  gl_FragColor.rgb = texColor.rgb;\n  gl_FragColor.a = texColor.a * u_opacity;\n}\n"), jz = new rx("varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nuniform mat4 u_texCoordMatrix;\nuniform mat4 u_projectionMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.);\n  v_texCoord = (u_texCoordMatrix * vec4(a_texCoord, 0., 1.)).st;\n}\n\n\n");
    function kz(a, b) {
        this.g = a.getUniformLocation(b, "u_texCoordMatrix");
        this.c = a.getUniformLocation(b, "u_projectionMatrix");
        this.f = a.getUniformLocation(b, "u_opacity");
        this.i = a.getUniformLocation(b, "u_texture");
        this.b = a.getAttribLocation(b, "a_position");
        this.a = a.getAttribLocation(b, "a_texCoord");
    }
    function lz(a, b) {
        rl.call(this, b);
        this.c = a;
        this.W = new Fx([ -1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1 ]);
        this.g = this.Mb = null;
        this.j = void 0;
        this.u = ad();
        this.L = ad();
        this.B = vx();
        this.s = null;
    }
    v(lz, rl);
    function mz(a, b, c) {
        var d = a.c.f;
        if (void 0 === a.j || a.j != c) {
            b.postRenderFunctions.push(function(a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c));
            }.bind(null, d, a.g, a.Mb));
            b = Qx(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.Mb = b;
            a.g = e;
            a.j = c;
        } else d.bindFramebuffer(36160, a.g);
    }
    lz.prototype.rj = function(a, b, c) {
        nz(this, "precompose", c, a);
        yx(c, 34962, this.W);
        var d = c.b, e = Jx(c, iz, jz);
        if (this.s) var f = this.s; else this.s = f = new kz(d, e);
        c.gd(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), 
        d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), 
        d.uniform1i(f.i, 0));
        d.uniformMatrix4fv(f.g, !1, wx(this.B, this.u));
        d.uniformMatrix4fv(f.c, !1, wx(this.B, this.L));
        d.uniform1f(f.f, b.opacity);
        d.bindTexture(3553, this.Mb);
        d.drawArrays(5, 0, 4);
        nz(this, "postcompose", c, a);
    };
    function nz(a, b, c, d) {
        a = a.a;
        if (Sb(a, b)) {
            var e = d.viewState;
            a.b(new hl(b, new gz(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c));
        }
    }
    lz.prototype.Pg = function() {
        this.g = this.Mb = null;
        this.j = void 0;
    };
    function oz(a, b) {
        lz.call(this, a, b);
        this.l = this.i = this.M = null;
    }
    v(oz, lz);
    oz.handles = function(a, b) {
        return "webgl" === a && "IMAGE" === b.getType();
    };
    oz.create = function(a, b) {
        return new oz(a, b);
    };
    function pz(a, b) {
        b = b.U();
        return Tx(a.c.f, b);
    }
    oz.prototype.va = function(a, b, c, d, e) {
        var f = this.a;
        return f.aa().va(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
            return d.call(e, a, f);
        });
    };
    oz.prototype.Qg = function(a, b) {
        var c = this.c.f, d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = e.rotation, l = this.M, m = this.Mb, n = this.a.aa(), p = a.viewHints, q = a.extent;
        void 0 !== b.extent && (q = tb(q, b.extent));
        p[0] || p[1] || ob(q) || (b = n.U(q, g, d, e.projection)) && tl(this, b) && (l = b, 
        m = pz(this, b), this.Mb && a.postRenderFunctions.push(function(a, b) {
            a.isContextLost() || a.deleteTexture(b);
        }.bind(null, c, this.Mb)));
        l && (c = this.c.getContext().a, qz(this, c.width, c.height, d, f, g, h, l.A()), 
        this.l = null, d = this.u, bd(d), hd(d, 1, -1), id(d, 0, -1), this.M = l, this.Mb = m, 
        vl(a, n));
        return !!l;
    };
    function qz(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.L;
        bd(a);
        hd(a, 2 * d / b, 2 * d / c);
        gd(a, -g);
        id(a, h[0] - e[0], h[1] - e[1]);
        hd(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        id(a, 1, 1);
    }
    oz.prototype.lf = function(a, b) {
        return void 0 !== this.va(a, b, 0, yb, this);
    };
    oz.prototype.Og = function(a, b, c, d) {
        if (this.M && this.M.U()) if (this.a.aa().va !== Ba) {
            var e = fd(b.pixelToCoordinateTransform, a.slice());
            if (this.va(e, b, 0, yb, this)) return c.call(d, this.a, null);
        } else {
            e = [ this.M.U().width, this.M.U().height ];
            if (!this.l) {
                var f = b.size;
                b = ad();
                id(b, -1, -1);
                hd(b, 2 / f[0], 2 / f[1]);
                id(b, 0, f[1]);
                hd(b, 1, -1);
                f = kd(this.L.slice());
                var g = ad();
                id(g, 0, e[1]);
                hd(g, 1, -1);
                hd(g, e[0] / 2, e[1] / 2);
                id(g, 1, 1);
                dd(g, f);
                dd(g, b);
                this.l = g;
            }
            a = fd(this.l, a.slice());
            if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i || (this.i = le(1, 1)), 
            this.i.clearRect(0, 0, 1, 1), this.i.drawImage(this.M.U(), a[0], a[1], 1, 1, 0, 0, 1, 1), 
            e = this.i.getImageData(0, 0, 1, 1).data, 0 < e[3])) return c.call(d, this.a, e);
        }
    };
    function rz(a, b) {
        Ll.call(this, a, b);
        this.a = document.createElement("CANVAS");
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.display = "block";
        this.a.className = "ol-unselectable";
        a.insertBefore(this.a, a.childNodes[0] || null);
        this.L = this.C = 0;
        this.B = le();
        this.l = !0;
        this.f = pe(this.a, {
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.u = new Ox(this.a, this.f);
        y(this.a, "webglcontextlost", this.op, this);
        y(this.a, "webglcontextrestored", this.pp, this);
        this.b = new Me();
        this.s = null;
        this.g = new Ak(function(a) {
            var b = a[1];
            a = a[2];
            var c = b[0] - this.s[0];
            b = b[1] - this.s[1];
            return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a;
        }.bind(this), function(a) {
            return a[0].ob();
        });
        this.D = function() {
            if (0 !== this.g.b.length) {
                Ek(this.g);
                var a = Bk(this.g);
                sz(this, a[0], a[3], a[4]);
            }
            return !1;
        }.bind(this);
        this.i = 0;
        tz(this);
    }
    v(rz, Ll);
    rz.handles = function(a) {
        return re && "webgl" === a;
    };
    rz.create = function(a, b) {
        return new rz(a, b);
    };
    function sz(a, b, c, d) {
        var e = a.f, f = b.ob();
        if (a.b.a.hasOwnProperty(f)) a = a.b.get(f), e.bindTexture(3553, a.Mb), 9729 != a.Bi && (e.texParameteri(3553, 10240, 9729), 
        a.Bi = 9729), 9729 != a.Di && (e.texParameteri(3553, 10241, 9729), a.Di = 9729); else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.B.canvas, l = a.B;
                a.C !== c[0] || a.L !== c[1] ? (h.width = c[0], h.height = c[1], a.C = c[0], a.L = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.U(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h);
            } else e.texImage2D(3553, 0, 6408, 6408, 5121, b.U());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.b.set(f, {
                Mb: g,
                Bi: 9729,
                Di: 9729
            });
        }
    }
    function uz(a, b, c) {
        var d = a.j;
        if (Sb(d, b)) {
            a = a.u;
            var e = c.viewState;
            d.b(new hl(b, new gz(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a));
        }
    }
    k = rz.prototype;
    k.fa = function() {
        var a = this.f;
        a.isContextLost() || this.b.forEach(function(b) {
            b && a.deleteTexture(b.Mb);
        });
        Ob(this.u);
        Ll.prototype.fa.call(this);
    };
    k.Cl = function(a, b) {
        a = this.f;
        for (var c; 1024 < this.b.i - this.i; ) {
            if (c = this.b.f.Tc) a.deleteTexture(c.Mb); else if (+this.b.f.oc == b.index) break; else --this.i;
            this.b.pop();
        }
    };
    k.getContext = function() {
        return this.u;
    };
    k.getType = function() {
        return "webgl";
    };
    k.op = function(a) {
        a.preventDefault();
        this.b.clear();
        this.i = 0;
        a = this.c;
        for (var b in a) a[b].Pg();
    };
    k.pp = function() {
        tz(this);
        this.j.render();
    };
    function tz(a) {
        a = a.f;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960);
    }
    k.wh = function(a) {
        var b = this.getContext(), c = this.f;
        if (c.isContextLost()) return !1;
        if (!a) return this.l && (this.a.style.display = "none", this.l = !1), !1;
        this.s = a.focus;
        this.b.set((-a.index).toString(), null);
        ++this.i;
        uz(this, "precompose", a);
        var d = [], e = a.layerStatesArray;
        Ka(e);
        var f = a.viewState.resolution, g;
        var h = 0;
        for (g = e.length; h < g; ++h) {
            var l = e[h];
            if (Cf(l, f) && "ready" == l.yk) {
                var m = Ol(this, l.layer);
                m.Qg(a, l, b) && d.push(l);
            }
        }
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.a.width != e || this.a.height != f) this.a.width = e, this.a.height = f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.a.width, this.a.height);
        h = 0;
        for (g = d.length; h < g; ++h) l = d[h], m = Ol(this, l.layer), m.rj(a, l, b);
        this.l || (this.a.style.display = "", this.l = !0);
        Ml(a);
        1024 < this.b.i - this.i && a.postRenderFunctions.push(this.Cl.bind(this));
        0 !== this.g.b.length && (a.postRenderFunctions.push(this.D), a.animate = !0);
        uz(this, "postcompose", a);
        Pl(this, a);
        a.postRenderFunctions.push(Nl);
    };
    k.va = function(a, b, c, d, e, f, g) {
        if (this.f.isContextLost()) return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            var n = l[m];
            var p = n.layer;
            if (Cf(n, h.resolution) && f.call(g, p) && (n = Ol(this, p).va(a, b, c, d, e))) return n;
        }
    };
    k.mj = function(a, b, c, d, e) {
        c = !1;
        if (this.f.isContextLost()) return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h], m = l.layer;
            if (Cf(l, f.resolution) && d.call(e, m) && (c = Ol(this, m).lf(a, b))) return !0;
        }
        return c;
    };
    k.lj = function(a, b, c, d, e) {
        if (this.f.isContextLost()) return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h];
            var m = l.layer;
            if (Cf(l, f.resolution) && e.call(d, m) && (l = Ol(this, m).Og(a, b, c, d))) return l;
        }
    };
    var vz = new qx("precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_texture, v_texCoord);\n}\n"), wz = new rx("varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform vec4 u_tileOffset;\n\nvoid main(void) {\n  gl_Position = vec4(a_position * u_tileOffset.xy + u_tileOffset.zw, 0., 1.);\n  v_texCoord = a_texCoord;\n}\n\n\n");
    function xz(a, b) {
        this.c = a.getUniformLocation(b, "u_tileOffset");
        this.f = a.getUniformLocation(b, "u_texture");
        this.b = a.getAttribLocation(b, "a_position");
        this.a = a.getAttribLocation(b, "a_texCoord");
    }
    function yz(a, b) {
        lz.call(this, a, b);
        this.P = vz;
        this.$ = wz;
        this.i = null;
        this.D = new Fx([ 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0 ]);
        this.C = this.l = null;
        this.o = -1;
        this.R = [ 0, 0 ];
    }
    v(yz, lz);
    yz.handles = function(a, b) {
        return "webgl" === a && "TILE" === b.getType();
    };
    yz.create = function(a, b) {
        return new yz(a, b);
    };
    k = yz.prototype;
    k.fa = function() {
        Ix(this.c.getContext(), this.D);
        lz.prototype.fa.call(this);
    };
    k.bg = function(a, b, c) {
        var d = this.c;
        return function(e, f) {
            return Lh(a, b, e, f, function(a) {
                var b = d.b.a.hasOwnProperty(a.ob());
                b && (c[e] || (c[e] = {}), c[e][a.ya.toString()] = a);
                return b;
            });
        };
    };
    k.Pg = function() {
        lz.prototype.Pg.call(this);
        this.i = null;
    };
    k.Qg = function(a, b, c) {
        var d = this.c, e = c.b, f = a.viewState, g = f.projection, h = this.a, l = h.aa(), m = l.gb(g), n = m.Kc(f.resolution), p = m.Va(n), q = l.de(n, a.pixelRatio, g), r = q[0] / ug(m.Ua(n), this.R)[0], u = p / r, w = l.$c(r) * l.ig(g), z = f.center, A = a.extent, E = Ag(m, A, n);
        if (this.l && rg(this.l, E) && this.o == l.f) u = this.C; else {
            var T = [ E.ia - E.da + 1, E.ha - E.ca + 1 ], Ja = ec(Math.max(T[0] * q[0], T[1] * q[1]));
            T = u * Ja;
            var ua = m.rc(n), ma = ua[0] + E.da * q[0] * u;
            u = ua[1] + E.ca * q[1] * u;
            u = [ ma, u, ma + T, u + T ];
            mz(this, a, Ja);
            e.viewport(0, 0, Ja, Ja);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            Ja = Jx(c, this.P, this.$);
            c.gd(Ja);
            this.i || (this.i = new xz(e, Ja));
            yx(c, 34962, this.D);
            e.enableVertexAttribArray(this.i.b);
            e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.i.a);
            e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.i.f, 0);
            c = {};
            c[n] = {};
            var da = this.bg(l, g, c), ja = h.i();
            Ja = !0;
            ma = Ra();
            var ya = new jg(0, 0, 0, 0), Wa, jc;
            for (Wa = E.da; Wa <= E.ia; ++Wa) for (jc = E.ca; jc <= E.ha; ++jc) {
                ua = l.getTile(n, Wa, jc, r, g);
                if (void 0 !== b.extent) {
                    var Za = m.La(ua.ya, ma);
                    if (!ub(Za, b.extent)) continue;
                }
                Za = ua.getState();
                (Za = 2 == Za || 4 == Za || 3 == Za && !ja) || (ua = vh(ua));
                Za = ua.getState();
                if (2 == Za) {
                    if (d.b.a.hasOwnProperty(ua.ob())) {
                        c[n][ua.ya.toString()] = ua;
                        continue;
                    }
                } else if (4 == Za || 3 == Za && !ja) continue;
                Ja = !1;
                Za = Bg(m, ua.ya, da, ya, ma);
                Za || (ua = Cg(m, ua.ya, ya, ma)) && da(n + 1, ua);
            }
            b = Object.keys(c).map(Number);
            b.sort(Da);
            da = new Float32Array(4);
            var ba;
            ja = 0;
            for (ya = b.length; ja < ya; ++ja) for (ba in Wa = c[b[ja]], Wa) ua = Wa[ba], Za = m.La(ua.ya, ma), 
            da[0] = 2 * (Za[2] - Za[0]) / T, da[1] = 2 * (Za[3] - Za[1]) / T, da[2] = 2 * (Za[0] - u[0]) / T - 1, 
            da[3] = 2 * (Za[1] - u[1]) / T - 1, e.uniform4fv(this.i.c, da), sz(d, ua, q, w * r), 
            e.drawArrays(5, 0, 4);
            Ja ? (this.l = E, this.C = u, this.o = l.f) : (this.C = this.l = null, this.o = -1, 
            a.animate = !0);
        }
        Dl(a.usedTiles, l, n, E);
        var Zb = d.g;
        El(a, l, m, r, g, A, n, h.c(), function(a) {
            2 != a.getState() || d.b.a.hasOwnProperty(a.ob()) || a.ob() in Zb.a || Zb.i([ a, Fg(m, a.ya), m.Va(a.ya[0]), q, w * r ]);
        }, this);
        ul(a, l);
        vl(a, l);
        e = this.u;
        bd(e);
        id(e, (Math.round(z[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(z[1] / p) * p - u[1]) / (u[3] - u[1]));
        0 !== f.rotation && gd(e, f.rotation);
        hd(e, a.size[0] * f.resolution / (u[2] - u[0]), a.size[1] * f.resolution / (u[3] - u[1]));
        id(e, -.5, -.5);
        return !0;
    };
    k.Og = function(a, b, c, d) {
        if (this.g) {
            a = fd(this.u, [ a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1] ].slice());
            a = [ a[0] * this.j, a[1] * this.j ];
            b = this.c.getContext().b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.g);
            var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3]) return c.call(d, this.a, e);
        }
    };
    function zz(a, b) {
        lz.call(this, a, b);
        this.o = !1;
        this.R = -1;
        this.P = NaN;
        this.C = Ra();
        this.l = this.i = this.D = null;
    }
    v(zz, lz);
    zz.handles = function(a, b) {
        return "webgl" === a && "VECTOR" === b.getType();
    };
    zz.create = function(a, b) {
        return new zz(a, b);
    };
    k = zz.prototype;
    k.rj = function(a, b, c) {
        this.l = b;
        var d = a.viewState, e = this.i, f = a.size, g = a.pixelRatio, h = this.c.f;
        e && !e.Ng() && (h.enable(h.SCISSOR_TEST), h.scissor(0, 0, f[0] * g, f[1] * g), 
        e.Pa(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.$e ? a.skippedFeatureUids : {}), 
        h.disable(h.SCISSOR_TEST));
    };
    k.fa = function() {
        var a = this.i;
        if (a) {
            var b = this.c.getContext();
            az(a, b)();
            this.i = null;
        }
        lz.prototype.fa.call(this);
    };
    k.va = function(a, b, c, d, e) {
        if (this.i && this.l) {
            c = this.c.getContext();
            var f = b.viewState, g = this.a, h = {};
            return this.i.va(a, c, f.center, f.resolution, f.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function(a) {
                var b = x(a).toString();
                if (!(b in h)) return h[b] = !0, d.call(e, a, g);
            });
        }
    };
    k.lf = function(a, b) {
        if (this.i && this.l) {
            var c = this.c.getContext(), d = b.viewState;
            return fz(this.i, a, c, d.resolution, d.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids);
        }
        return !1;
    };
    k.Og = function(a, b, c, d) {
        a = fd(b.pixelToCoordinateTransform, a.slice());
        if (this.lf(a, b)) return c.call(d, this.a, null);
    };
    k.sj = function() {
        sl(this);
    };
    k.Qg = function(a, b, c) {
        function d(a) {
            var b = a.lb();
            if (b) var c = b.call(a, m); else (b = e.lb()) && (c = b(a, m));
            if (c) {
                if (c) {
                    b = !1;
                    if (Array.isArray(c)) for (var d = c.length - 1; 0 <= d; --d) b = Fm(q, a, c[d], Em(m, n), this.sj, this) || b; else b = Fm(q, a, c, Em(m, n), this.sj, this) || b;
                    a = b;
                } else a = !1;
                this.o = this.o || a;
            }
        }
        var e = this.a;
        b = e.aa();
        vl(a, b);
        var f = a.viewHints[0], g = a.viewHints[1], h = e.Z, l = e.$;
        if (!this.o && !h && f || !l && g) return !0;
        g = a.extent;
        h = a.viewState;
        f = h.projection;
        var m = h.resolution, n = a.pixelRatio;
        h = e.f;
        var p = e.g;
        l = e.get("renderOrder");
        void 0 === l && (l = Dm);
        g = Ta(g, p * m);
        if (!this.o && this.P == m && this.R == h && this.D == l && $a(this.C, g)) return !0;
        this.i && a.postRenderFunctions.push(az(this.i, c));
        this.o = !1;
        var q = new $y(.5 * m / n, g, e.g);
        b.he(g, m, f);
        if (l) {
            var r = [];
            b.hc(g, function(a) {
                r.push(a);
            }, this);
            r.sort(l);
            r.forEach(d, this);
        } else b.hc(g, d, this);
        bz(q, c);
        this.P = m;
        this.R = h;
        this.D = l;
        this.C = g;
        this.i = q;
        return !0;
    };
    Uk("MAP_RENDERER", Ql);
    Vk([ Kl, Sl, Im, Jm ]);
    Uk("MAP_RENDERER", rz);
    Vk([ oz, yz, zz ]);
    function X(a) {
        a = Ab({}, a);
        a.controls || (a.controls = fl());
        a.interactions || (a.interactions = Uj());
        L.call(this, a);
    }
    v(X, L);
    function Az(a, b, c, d) {
        function e() {
            delete window[g];
            f.parentNode.removeChild(f);
        }
        var f = document.createElement("script"), g = "olc_" + x(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = setTimeout(function() {
            e();
            c && c();
        }, 1e4);
        window[g] = function(a) {
            clearTimeout(h);
            e();
            b(a);
        };
        document.getElementsByTagName("head")[0].appendChild(f);
    }
    function Bz(a) {
        this.i = void 0 !== a.hidpi ? a.hidpi : !1;
        J.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Lc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: this.i ? 2 : 1,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.s = void 0 !== a.culture ? a.culture : "en-us";
        this.Z = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.l = a.key;
        this.D = a.imagerySet;
        Az("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.D + "?uriScheme=https&include=ImageryProviders&key=" + this.l + "&c=" + this.s, this.Oa.bind(this), void 0, "jsonp");
    }
    v(Bz, J);
    Bz.prototype.$ = function() {
        return this.l;
    };
    Bz.prototype.ra = function() {
        return this.D;
    };
    Bz.prototype.Oa = function(a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) Og(this, "error"); else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0];
            a = -1 == this.Z ? c.zoomMax : this.Z;
            var d = Kg(this.c);
            this.tileGrid = Ig({
                extent: d,
                minZoom: c.zoomMin,
                maxZoom: a,
                tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [ c.imageWidth, c.imageHeight ]) / (this.i ? 2 : 1)
            });
            var e = this.s, f = this.i;
            this.tileUrlFunction = Hh(c.imageUrlSubdomains.map(function(a) {
                var b = [ 0, 0, 0 ], d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", e);
                return function(a) {
                    if (a) return vg(a[0], a[1], -a[2] - 1, b), a = d, f && (a += "&dpi=d1&device=mobile"), 
                    a.replace("{quadkey}", wg(b));
                };
            }));
            if (c.imageryProviders) {
                var g = Mc(Lc("EPSG:4326"), this.c);
                this.ta(function(a) {
                    var b = [], d = a.viewState.zoom;
                    c.imageryProviders.map(function(c) {
                        for (var e = !1, f = c.coverageAreas, h = 0, l = f.length; h < l; ++h) {
                            var m = f[h];
                            if (d >= m.zoomMin && d <= m.zoomMax && (m = m.bbox, m = xb([ m[1], m[0], m[3], m[2] ], g), 
                            ub(m, a.extent))) {
                                e = !0;
                                break;
                            }
                        }
                        e && b.push(c.attribution);
                    });
                    b.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>');
                    return b;
                });
            }
            this.P = b;
            Og(this, "ready");
        }
    };
    function Cz(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857", c = void 0 !== a.tileGrid ? a.tileGrid : Ig({
            extent: Kg(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
    }
    v(Cz, J);
    function Dz(a) {
        this.s = a.account;
        this.D = a.map || "";
        this.i = a.config || {};
        this.l = {};
        Cz.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        Ez(this);
    }
    v(Dz, Cz);
    k = Dz.prototype;
    k.Tl = function() {
        return this.i;
    };
    k.Nr = function(a) {
        Ab(this.i, a);
        Ez(this);
    };
    k.pr = function(a) {
        this.i = a || {};
        Ez(this);
    };
    function Ez(a) {
        var b = JSON.stringify(a.i);
        if (a.l[b]) Fz(a, a.l[b]); else {
            var c = "https://" + a.s + ".carto.com/api/v1/map";
            a.D && (c += "/named/" + a.D);
            var d = new XMLHttpRequest();
            d.addEventListener("load", a.Nm.bind(a, b));
            d.addEventListener("error", a.Mm.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.i));
        }
    }
    k.Nm = function(a, b) {
        b = b.target;
        if (!b.status || 200 <= b.status && 300 > b.status) {
            try {
                var c = JSON.parse(b.responseText);
            } catch (d) {
                Og(this, "error");
                return;
            }
            Fz(this, c);
            this.l[a] = c;
            Og(this, "ready");
        } else Og(this, "error");
    };
    k.Mm = function() {
        Og(this, "error");
    };
    function Fz(a, b) {
        a.sb("https://" + b.cdn_url.https + "/" + a.s + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png");
    }
    function Y(a) {
        U.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.resolution = void 0;
        this.distance = void 0 !== a.distance ? a.distance : 20;
        this.features = [];
        this.geometryFunction = a.geometryFunction || function(a) {
            a = a.getGeometry();
            Pa(a instanceof C, 10);
            return a;
        };
        this.source = a.source;
        this.source.G("change", Y.prototype.oa, this);
    }
    v(Y, U);
    k = Y.prototype;
    k.qp = function() {
        return this.distance;
    };
    k.rp = function() {
        return this.source;
    };
    k.he = function(a, b, c) {
        this.source.he(a, b, c);
        b !== this.resolution && (this.clear(), this.resolution = b, Gz(this), this.Uc(this.features));
    };
    k.qr = function(a) {
        this.distance = a;
        this.oa();
    };
    k.oa = function() {
        this.clear();
        Gz(this);
        this.Uc(this.features);
        U.prototype.oa.call(this);
    };
    function Gz(a) {
        if (void 0 !== a.resolution) {
            a.features.length = 0;
            for (var b = Ra(), c = a.distance * a.resolution, d = a.source.fd(), e = {}, f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                x(h).toString() in e || !(h = a.geometryFunction(h)) || (h = h.S(), db(h, b), Ta(b, c, b), 
                h = a.source.hg(b), h = h.filter(function(a) {
                    a = x(a).toString();
                    return a in e ? !1 : e[a] = !0;
                }), a.features.push(Hz(a, h)));
            }
        }
    }
    function Hz(a, b) {
        for (var c = [ 0, 0 ], d = b.length - 1; 0 <= d; --d) {
            var e = a.geometryFunction(b[d]);
            e ? yi(c, e.S()) : b.splice(d, 1);
        }
        Fi(c, 1 / b.length);
        a = new xf(new C(c));
        a.set("features", b);
        return a;
    }
    function Iz(a) {
        a = a || {};
        Pg.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.W = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.Z = void 0 !== a.hidpi ? a.hidpi : !0;
        this.a = a.url;
        this.g = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vg;
        this.o = a.params || {};
        this.M = null;
        this.l = [ 0, 0 ];
        this.R = 0;
        this.s = void 0 !== a.ratio ? a.ratio : 1.5;
    }
    v(Iz, Pg);
    k = Iz.prototype;
    k.tp = function() {
        return this.o;
    };
    k.Zc = function(a, b, c, d) {
        if (void 0 === this.a) return null;
        b = Qg(this, b);
        c = this.Z ? c : 1;
        var e = this.M;
        if (e && this.R == this.f && e.resolution == b && e.f == c && $a(e.A(), a)) return e;
        e = {
            F: "image",
            FORMAT: "PNG32",
            TRANSPARENT: !0
        };
        Ab(e, this.o);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2;
        if (1 != this.s) {
            var h = this.s * pb(a) / 2, l = this.s * qb(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l;
        }
        h = b / c;
        l = Math.ceil(pb(a) / h);
        var m = Math.ceil(qb(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.l[0] = l;
        this.l[1] = m;
        f = a;
        g = this.l;
        h = c;
        d = d.wb.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = Math.round(90 * h);
        d = this.a;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && Pa(!1, 50);
        e = Yg(f, e);
        this.M = new bg(a, b, c, e, this.W, this.g);
        this.R = this.f;
        y(this.M, "change", this.j, this);
        return this.M;
    };
    k.sp = function() {
        return this.g;
    };
    k.getUrl = function() {
        return this.a;
    };
    k.up = function(a) {
        this.M = null;
        this.g = a;
        this.changed();
    };
    k.vp = function(a) {
        a != this.a && (this.a = a, this.M = null, this.changed());
    };
    k.wp = function(a) {
        Ab(this.o, a);
        this.M = null;
        this.changed();
    };
    function Jz(a) {
        Pg.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.Ea = a.canvasFunction;
        this.a = null;
        this.Z = 0;
        this.Oa = void 0 !== a.ratio ? a.ratio : 1.5;
    }
    v(Jz, Pg);
    Jz.prototype.Zc = function(a, b, c, d) {
        b = Qg(this, b);
        var e = this.a;
        if (e && this.Z == this.f && e.resolution == b && e.f == c && $a(e.A(), a)) return e;
        a = a.slice();
        wb(a, this.Oa);
        (d = this.Ea(a, b, c, [ pb(a) / b * c, qb(a) / b * c ], d)) && (e = new gl(a, b, c, d));
        this.a = e;
        this.Z = this.f;
        return e;
    };
    function Kz(a) {
        Pg.call(this, {
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.W = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.l = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.g = a.params || {};
        this.R = a.url;
        this.a = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vg;
        this.Z = void 0 !== a.hidpi ? a.hidpi : !0;
        this.$ = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.o = void 0 !== a.ratio ? a.ratio : 1;
        this.Ea = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.M = null;
        this.s = 0;
    }
    v(Kz, Pg);
    k = Kz.prototype;
    k.yp = function() {
        return this.g;
    };
    k.Zc = function(a, b, c, d) {
        b = Qg(this, b);
        c = this.Z ? c : 1;
        var e = this.M;
        if (e && this.s == this.f && e.resolution == b && e.f == c && $a(e.A(), a)) return e;
        1 != this.o && (a = a.slice(), wb(a, this.o));
        e = [ pb(a) / b * c, qb(a) / b * c ];
        void 0 !== this.R ? (d = this.getUrl(this.R, this.g, a, e, d), e = new bg(a, b, c, d, this.W, this.a), 
        y(e, "change", this.j, this)) : e = null;
        this.M = e;
        this.s = this.f;
        return e;
    };
    k.xp = function() {
        return this.a;
    };
    k.Ap = function(a) {
        Ab(this.g, a);
        this.changed();
    };
    k.getUrl = function(a, b, c, d) {
        var e = rb(c), f = this.$, g = pb(c);
        c = qb(c);
        var h = d[0], l = d[1], m = .0254 / this.l;
        d = {
            OPERATION: this.Ea ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
            VERSION: "2.0.0",
            LOCALE: "en",
            CLIENTAGENT: "ol.source.ImageMapGuide source",
            CLIP: "1",
            SETDISPLAYDPI: this.l,
            SETDISPLAYWIDTH: Math.round(d[0]),
            SETDISPLAYHEIGHT: Math.round(d[1]),
            SETVIEWSCALE: l * g > h * c ? g * f / (h * m) : c * f / (l * m),
            SETVIEWCENTERX: e[0],
            SETVIEWCENTERY: e[1]
        };
        Ab(d, b);
        return Yg(a, d);
    };
    k.zp = function(a) {
        this.M = null;
        this.a = a;
        this.changed();
    };
    function Lz(a) {
        var b = a.imageExtent, c = void 0 !== a.crossOrigin ? a.crossOrigin : null, d = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : Vg;
        Pg.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: Lc(a.projection)
        });
        this.M = new bg(b, void 0, 1, a.url, c, d);
        this.a = a.imageSize ? a.imageSize : null;
        y(this.M, "change", this.j, this);
    }
    v(Lz, Pg);
    Lz.prototype.Zc = function(a) {
        return ub(a, this.M.A()) ? this.M : null;
    };
    Lz.prototype.j = function(a) {
        if (2 == this.M.getState()) {
            var b = this.M.A(), c = this.M.U();
            if (this.a) {
                var d = this.a[0];
                var e = this.a[1];
            } else d = c.width, e = c.height;
            b = Math.ceil(pb(b) / (qb(b) / e));
            if (b != d) {
                b = le(b, e);
                var f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.M.Ch(f);
            }
        }
        Pg.prototype.j.call(this, a);
    };
    function Mz(a) {
        this.g = a.source;
        this.zb = ad();
        this.l = le();
        this.o = [ 0, 0 ];
        this.$ = Ul.Pc(9);
        this.eb = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.R = null;
        Jz.call(this, {
            attributions: a.attributions,
            canvasFunction: this.ql.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.g.getState()
        });
        this.W = null;
        this.s = void 0;
        this.tj(a.style);
        y(this.g, "change", this.Ep, this);
    }
    v(Mz, Jz);
    k = Mz.prototype;
    k.ql = function(a, b, c, d, e) {
        var f = new wm(.5 * b / c, a, b, c, this.g.Z, this.$, this.eb);
        this.g.he(a, b, e);
        var g = !1;
        this.g.hc(a, function(a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.lb()) ? e = d.call(a, b) : this.s && (e = this.s(a, b));
                if (e) {
                    var h, p = !1;
                    Array.isArray(e) || (e = [ e ]);
                    d = 0;
                    for (h = e.length; d < h; ++d) p = Fm(f, a, e[d], Em(b, c), this.Dp, this) || p;
                    d = p;
                } else d = !1;
            }
            g = d;
        }, this);
        Am(f);
        if (g) return null;
        this.o[0] != d[0] || this.o[1] != d[1] ? (this.l.canvas.width = d[0], this.l.canvas.height = d[1], 
        this.o[0] = d[0], this.o[1] = d[1]) : this.l.clearRect(0, 0, d[0], d[1]);
        this.$.clear();
        a = Nz(this, rb(a), b, c, d);
        f.Pa(this.l, a, 0, {});
        this.R = f;
        return this.l.canvas;
    };
    k.va = function(a, b, c, d, e, f) {
        if (this.R) {
            var g = {};
            return this.R.va(a, b, 0, d, e, function(a) {
                var b = x(a).toString();
                if (!(b in g)) return g[b] = !0, f(a);
            }, null);
        }
    };
    k.Bp = function() {
        return this.g;
    };
    k.Cp = function() {
        return this.W;
    };
    k.lb = function() {
        return this.s;
    };
    function Nz(a, b, c, d, e) {
        c = d / c;
        return jd(a.zb, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1]);
    }
    k.Dp = function() {
        this.changed();
    };
    k.Ep = function() {
        Og(this, this.g.getState());
    };
    k.tj = function(a) {
        this.W = void 0 !== a ? a : vf;
        this.s = a ? tf(this.W) : void 0;
        this.changed();
    };
    function Oz(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [ '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.' ];
        Cz.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        });
    }
    v(Oz, Cz);
    Ul.yf = {};
    Ul.yf.Tf = function() {};
    (function(a) {
        function b(a, b, c) {
            if (g) return new ImageData(a, b, c);
            b = h.createImageData(b, c);
            b.data.set(a);
            return b;
        }
        function c(a) {
            var b = !0;
            try {
                new ImageData(10, 10);
            } catch (n) {
                b = !1;
            }
            return function(c) {
                var d = c.buffers, e = c.meta, f = c.width, g = c.height, h = d.length, l = d[0].byteLength;
                if (c.imageOps) {
                    l = Array(h);
                    for (c = 0; c < h; ++c) {
                        var m = c;
                        var n = new Uint8ClampedArray(d[c]);
                        var T = f, Ja = g;
                        n = b ? new ImageData(n, T, Ja) : {
                            data: n,
                            width: T,
                            height: Ja
                        };
                        l[m] = n;
                    }
                    f = a(l, e).data;
                } else {
                    f = new Uint8ClampedArray(l);
                    g = Array(h);
                    m = Array(h);
                    for (c = 0; c < h; ++c) g[c] = new Uint8ClampedArray(d[c]), m[c] = [ 0, 0, 0, 0 ];
                    for (d = 0; d < l; d += 4) {
                        for (c = 0; c < h; ++c) n = g[c], m[c][0] = n[d], m[c][1] = n[d + 1], m[c][2] = n[d + 2], 
                        m[c][3] = n[d + 3];
                        c = a(m, e);
                        f[d] = c[0];
                        f[d + 1] = c[1];
                        f[d + 2] = c[2];
                        f[d + 3] = c[3];
                    }
                }
                return f.buffer;
            };
        }
        function d(a, b) {
            var d = Object.keys(a.lib || {}).map(function(b) {
                return "var " + b + " = " + a.lib[b].toString() + ";";
            }).concat([ "var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});" ]);
            d = URL.createObjectURL(new Blob(d, {
                type: "text/javascript"
            }));
            d = new Worker(d);
            d.addEventListener("message", b);
            return d;
        }
        function e(a, b) {
            var d = c(a.operation);
            return {
                postMessage: function(a) {
                    setTimeout(function() {
                        b({
                            data: {
                                buffer: d(a),
                                meta: a.meta
                            }
                        });
                    }, 0);
                }
            };
        }
        function f(a) {
            this.Uf = !!a.nn;
            var b;
            0 === a.threads ? b = 0 : this.Uf ? b = 1 : b = a.threads || 1;
            var c = [];
            if (b) for (var f = 0; f < b; ++f) c[f] = d(a, this.Sh.bind(this, f)); else c[0] = e(a, this.Sh.bind(this, 0));
            this.Ee = c;
            this.Rd = [];
            this.fl = a.Nq || Infinity;
            this.De = 0;
            this.rd = {};
            this.Vf = null;
        }
        var g = !0;
        try {
            new ImageData(10, 10);
        } catch (l) {
            g = !1;
        }
        var h = document.createElement("canvas").getContext("2d");
        f.prototype.Mq = function(a, b, c) {
            this.dl({
                inputs: a,
                Ci: b,
                callback: c
            });
            this.Ph();
        };
        f.prototype.dl = function(a) {
            for (this.Rd.push(a); this.Rd.length > this.fl; ) this.Rd.shift().callback(null, null);
        };
        f.prototype.Ph = function() {
            if (0 === this.De && 0 < this.Rd.length) {
                var a = this.Vf = this.Rd.shift(), b = a.inputs[0].width, c = a.inputs[0].height, d = a.inputs.map(function(a) {
                    return a.data.buffer;
                }), e = this.Ee.length;
                this.De = e;
                if (1 === e) this.Ee[0].postMessage({
                    buffers: d,
                    meta: a.Ci,
                    imageOps: this.Uf,
                    width: b,
                    height: c
                }, d); else for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) {
                    for (var h = g * f, z = [], A = 0, E = d.length; A < E; ++A) z.push(d[g].slice(h, h + f));
                    this.Ee[g].postMessage({
                        buffers: z,
                        meta: a.Ci,
                        imageOps: this.Uf,
                        width: b,
                        height: c
                    }, z);
                }
            }
        };
        f.prototype.Sh = function(a, b) {
            this.es || (this.rd[a] = b.data, --this.De, 0 === this.De && this.gl());
        };
        f.prototype.gl = function() {
            var a = this.Vf, c = this.Ee.length;
            if (1 === c) {
                var d = new Uint8ClampedArray(this.rd[0].buffer);
                var e = this.rd[0].meta;
            } else {
                var f = a.inputs[0].data.length;
                d = new Uint8ClampedArray(f);
                e = Array(f);
                f = 4 * Math.ceil(f / 4 / c);
                for (var g = 0; g < c; ++g) {
                    var h = g * f;
                    d.set(new Uint8ClampedArray(this.rd[g].buffer), h);
                    e[g] = this.rd[g].meta;
                }
            }
            this.Vf = null;
            this.rd = {};
            a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
            this.Ph();
        };
        a["default"] = {
            Tf: f
        };
        a.Tf = f;
    })(Ul.yf = Ul.yf || {});
    function Pz(a) {
        this.s = null;
        this.Ea = void 0 !== a.operationType ? a.operationType : "pixel";
        this.Oa = void 0 !== a.threads ? a.threads : 1;
        this.g = Qz(a.sources);
        for (var b = 0, c = this.g.length; b < c; ++b) y(this.g[b], "change", this.changed, this);
        this.Z = new Fk(function() {
            return 1;
        }, this.changed.bind(this));
        b = Rz(this.g);
        c = {};
        for (var d = 0, e = b.length; d < e; ++d) c[x(b[d].layer)] = b[d];
        this.a = null;
        this.R = {
            animate: !1,
            coordinateToPixelTransform: ad(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: ad(),
            postRenderFunctions: [],
            size: [ 0, 0 ],
            skippedFeatureUids: {},
            tileQueue: this.Z,
            time: Date.now(),
            usedTiles: {},
            viewState: {
                rotation: 0
            },
            viewHints: [],
            wantedTiles: {}
        };
        Pg.call(this, {});
        void 0 !== a.operation && this.o(a.operation, a.lib);
    }
    v(Pz, Pg);
    Pz.prototype.o = function(a, b) {
        this.s = new Ul.yf.Tf({
            operation: a,
            nn: "image" === this.Ea,
            Nq: 1,
            lib: b,
            threads: this.Oa
        });
        this.changed();
    };
    Pz.prototype.U = function(a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.g.length; f < g; ++f) if (e = this.g[f].a.aa(), "ready" !== e.getState()) {
            c = !1;
            break;
        }
        if (!c) return null;
        c = Ab({}, this.R);
        c.viewState = Ab({}, c.viewState);
        e = rb(a);
        c.extent = a.slice();
        c.focus = e;
        c.size[0] = Math.round(pb(a) / b);
        c.size[1] = Math.round(qb(a) / b);
        c.time = Date.now();
        c.animate = !1;
        f = c.viewState;
        f.center = e;
        f.projection = d;
        f.resolution = b;
        this.l = c;
        this.a && (d = this.a.resolution, e = this.a.A(), b === d && gb(a, e) || (this.a = null));
        if (!this.a || this.f !== this.W) a: {
            a = this.l;
            d = this.g.length;
            b = Array(d);
            for (e = 0; e < d; ++e) {
                f = this.g[e];
                g = a;
                var h = a.layerStatesArray[e];
                if (f.ed(g, h)) {
                    var l = g.size[0], m = g.size[1];
                    if (Sz) {
                        var n = Sz.canvas;
                        n.width !== l || n.height !== m ? Sz = le(l, m) : Sz.clearRect(0, 0, l, m);
                    } else Sz = le(l, m);
                    f.mf(g, h, Sz);
                    f = Sz.getImageData(0, 0, l, m);
                } else f = null;
                if (f) b[e] = f; else break a;
            }
            d = {};
            this.b(new Tz(Uz, a, d));
            this.s.Mq(b, d, this.$.bind(this, a));
        }
        Gk(c.tileQueue, 16, 16);
        c.animate && requestAnimationFrame(this.changed.bind(this));
        return this.a;
    };
    Pz.prototype.$ = function(a, b, c, d) {
        if (!b && c) {
            b = a.extent;
            var e = a.viewState.resolution;
            if (e === this.l.viewState.resolution && gb(b, this.l.extent)) {
                if (this.a) var f = this.a.U().getContext("2d"); else f = le(Math.round(pb(b) / e), Math.round(qb(b) / e)), 
                this.a = new gl(b, e, 1, f.canvas);
                f.putImageData(c, 0, 0);
                this.changed();
                this.W = this.f;
                this.b(new Tz(Vz, a, d));
            }
        }
    };
    var Sz = null;
    function Rz(a) {
        return a.map(function(a) {
            return Af(a.a);
        });
    }
    function Qz(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d, f = a[d], g = null;
            f instanceof Kh ? (f = new ph({
                source: f
            }), g = new Sl(f)) : f instanceof Pg && (f = new oh({
                source: f
            }), g = new Kl(f));
            c[e] = g;
        }
        return c;
    }
    function Tz(a, b, c) {
        Pb.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c;
    }
    v(Tz, Pb);
    Pz.prototype.Zc = function() {
        return null;
    };
    var Uz = "beforeoperations", Vz = "afteroperations";
    function Wz(a) {
        var b = a.layer.indexOf("-");
        b = Xz[-1 == b ? a.layer : a.layer.slice(0, b)];
        var c = Yz[a.layer];
        Cz.call(this, {
            attributions: Zz,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Ob,
            wrapX: a.wrapX
        });
    }
    v(Wz, Cz);
    var Zz = [ 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.', '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.' ], Yz = {
        terrain: {
            Ob: "jpg",
            opaque: !0
        },
        "terrain-background": {
            Ob: "jpg",
            opaque: !0
        },
        "terrain-labels": {
            Ob: "png",
            opaque: !1
        },
        "terrain-lines": {
            Ob: "png",
            opaque: !1
        },
        "toner-background": {
            Ob: "png",
            opaque: !0
        },
        toner: {
            Ob: "png",
            opaque: !0
        },
        "toner-hybrid": {
            Ob: "png",
            opaque: !1
        },
        "toner-labels": {
            Ob: "png",
            opaque: !1
        },
        "toner-lines": {
            Ob: "png",
            opaque: !1
        },
        "toner-lite": {
            Ob: "png",
            opaque: !0
        },
        watercolor: {
            Ob: "jpg",
            opaque: !0
        }
    }, Xz = {
        terrain: {
            minZoom: 4,
            maxZoom: 18
        },
        toner: {
            minZoom: 0,
            maxZoom: 20
        },
        watercolor: {
            minZoom: 1,
            maxZoom: 16
        }
    };
    function $z(a) {
        a = a || {};
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.i = a.params || {};
        this.l = Ra();
        Mh(this, aA(this));
    }
    v($z, J);
    function aA(a) {
        var b = 0, c = [], d;
        for (d in a.i) c[b++] = d + "-" + a.i[d];
        return c.join("/");
    }
    $z.prototype.s = function() {
        return this.i;
    };
    $z.prototype.$c = function(a) {
        return a;
    };
    $z.prototype.gc = function(a, b, c) {
        var d = this.tileGrid;
        d || (d = this.gb(c));
        if (!(d.b.length <= a[0])) {
            var e = d.La(a, this.l), f = ug(d.Ua(a[0]), this.j);
            1 != b && (f = tg(f, b, this.j));
            d = {
                F: "image",
                FORMAT: "PNG32",
                TRANSPARENT: !0
            };
            Ab(d, this.i);
            var g = this.urls;
            g ? (c = c.wb.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), 
            d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = (1 == g.length ? g[0] : g[ic((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"), 
            a = Yg(a, d)) : a = void 0;
            return a;
        }
    };
    $z.prototype.D = function(a) {
        Ab(this.i, a);
        Mh(this, aA(this));
    };
    function bA(a) {
        Kh.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
    }
    v(bA, Kh);
    bA.prototype.getTile = function(a, b, c) {
        var d = a + "/" + b + "/" + c;
        if (this.a.a.hasOwnProperty(d)) return this.a.get(d);
        var e = ug(this.tileGrid.Ua(a));
        a = [ a, b, c ];
        b = (b = Nh(this, a)) ? Nh(this, b).toString() : "";
        e = new cA(a, e, b);
        this.a.set(d, e);
        return e;
    };
    function cA(a, b, c) {
        uh.call(this, a, 2);
        this.c = b;
        this.pa = c;
        this.a = null;
    }
    v(cA, uh);
    cA.prototype.U = function() {
        if (this.a) return this.a;
        var a = this.c, b = le(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.pa, a[0] / 2, a[1] / 2);
        return this.a = b.canvas;
    };
    cA.prototype.load = function() {};
    function dA(a) {
        this.i = null;
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: Lc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        if (a.url) if (a.jsonp) Az(a.url, this.Rg.bind(this), this.nf.bind(this)); else {
            var b = new XMLHttpRequest();
            b.addEventListener("load", this.Mp.bind(this));
            b.addEventListener("error", this.Lp.bind(this));
            b.open("GET", a.url);
            b.send();
        } else a.tileJSON ? this.Rg(a.tileJSON) : Pa(!1, 51);
    }
    v(dA, J);
    k = dA.prototype;
    k.Mp = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText);
            } catch (c) {
                this.nf();
                return;
            }
            this.Rg(b);
        } else this.nf();
    };
    k.Lp = function() {
        this.nf();
    };
    k.ym = function() {
        return this.i;
    };
    k.Rg = function(a) {
        var b = Lc("EPSG:4326"), c = this.c;
        if (void 0 !== a.bounds) {
            var d = Mc(b, c);
            d = xb(a.bounds, d);
        }
        var e = a.minzoom || 0, f = a.maxzoom || 22;
        this.tileGrid = c = Ig({
            extent: Kg(c),
            maxZoom: f,
            minZoom: e
        });
        this.tileUrlFunction = Gh(a.tiles, c);
        if (void 0 !== a.attribution && !this.B) {
            var g = void 0 !== d ? d : b.A();
            this.ta(function(b) {
                return ub(g, b.extent) ? [ a.attribution ] : null;
            });
        }
        this.i = a;
        Og(this, "ready");
    };
    k.nf = function() {
        Og(this, "error");
    };
    function eA(a) {
        Kh.call(this, {
            projection: Lc("EPSG:3857"),
            state: "loading"
        });
        this.o = void 0 !== a.preemptive ? a.preemptive : !0;
        this.l = Ih;
        this.g = void 0;
        this.i = a.jsonp || !1;
        if (a.url) if (this.i) Az(a.url, this.Sg.bind(this), this.pf.bind(this)); else {
            var b = new XMLHttpRequest();
            b.addEventListener("load", this.Qp.bind(this));
            b.addEventListener("error", this.Pp.bind(this));
            b.open("GET", a.url);
            b.send();
        } else a.tileJSON ? this.Sg(a.tileJSON) : Pa(!1, 51);
    }
    v(eA, Kh);
    k = eA.prototype;
    k.Qp = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText);
            } catch (c) {
                this.pf();
                return;
            }
            this.Sg(b);
        } else this.pf();
    };
    k.Pp = function() {
        this.pf();
    };
    k.vm = function() {
        return this.g;
    };
    k.Fl = function(a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Te(a, b), fA(this.getTile(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function() {
            c.call(d, null);
        }, 0) : c.call(d, null);
    };
    k.pf = function() {
        Og(this, "error");
    };
    k.Sg = function(a) {
        var b = Lc("EPSG:4326"), c = this.c;
        if (void 0 !== a.bounds) {
            var d = Mc(b, c);
            d = xb(a.bounds, d);
        }
        var e = a.minzoom || 0, f = a.maxzoom || 22;
        this.tileGrid = c = Ig({
            extent: Kg(c),
            maxZoom: f,
            minZoom: e
        });
        this.g = a.template;
        if (e = a.grids) {
            this.l = Gh(e, c);
            if (void 0 !== a.attribution) {
                var g = void 0 !== d ? d : b.A();
                this.ta(function(b) {
                    return ub(g, b.extent) ? [ a.attribution ] : null;
                });
            }
            Og(this, "ready");
        } else Og(this, "error");
    };
    k.getTile = function(a, b, c, d, e) {
        var f = a + "/" + b + "/" + c;
        if (this.a.a.hasOwnProperty(f)) return this.a.get(f);
        a = [ a, b, c ];
        b = Nh(this, a, e);
        d = this.l(b, d, e);
        d = new gA(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.La(a), this.o, this.i);
        this.a.set(f, d);
        return d;
    };
    k.Eh = function(a, b, c) {
        a = a + "/" + b + "/" + c;
        this.a.a.hasOwnProperty(a) && this.a.get(a);
    };
    function gA(a, b, c, d, e, f) {
        uh.call(this, a, b);
        this.o = c;
        this.a = d;
        this.L = e;
        this.j = this.l = this.c = null;
        this.s = f;
    }
    v(gA, uh);
    k = gA.prototype;
    k.U = function() {
        return null;
    };
    k.getData = function(a) {
        if (!this.c || !this.l) return null;
        var b = this.c[Math.floor((1 - (a[1] - this.a[1]) / (this.a[3] - this.a[1])) * this.c.length)];
        if ("string" !== typeof b) return null;
        b = b.charCodeAt(Math.floor((a[0] - this.a[0]) / (this.a[2] - this.a[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.l && (b = this.l[b], this.j && b in this.j ? a = this.j[b] : a = b);
        return a;
    };
    function fA(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Kb(a, "change", function() {
            c.call(d, this.getData(b));
        }, a), hA(a)) : !0 === e ? setTimeout(function() {
            c.call(d, this.getData(b));
        }.bind(a), 0) : c.call(d, a.getData(b));
    }
    k.ob = function() {
        return this.o;
    };
    k.Ve = function() {
        this.state = 3;
        this.changed();
    };
    k.uj = function(a) {
        this.c = a.grid;
        this.l = a.keys;
        this.j = a.data;
        this.state = 4;
        this.changed();
    };
    function hA(a) {
        if (0 == a.state) if (a.state = 1, a.s) Az(a.o, a.uj.bind(a), a.Ve.bind(a)); else {
            var b = new XMLHttpRequest();
            b.addEventListener("load", a.Op.bind(a));
            b.addEventListener("error", a.Np.bind(a));
            b.open("GET", a.o);
            b.send();
        }
    }
    k.Op = function(a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            try {
                var b = JSON.parse(a.responseText);
            } catch (c) {
                this.Ve();
                return;
            }
            this.uj(b);
        } else this.Ve();
    };
    k.Np = function() {
        this.Ve();
    };
    k.load = function() {
        this.L && hA(this);
    };
    function iA(a) {
        a = a || {};
        var b = a.params || {};
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
            transition: a.transition
        });
        this.s = void 0 !== a.gutter ? a.gutter : 0;
        this.i = b;
        this.l = !0;
        this.D = a.serverType;
        this.Z = void 0 !== a.hidpi ? a.hidpi : !0;
        this.$ = Ra();
        jA(this);
        Mh(this, kA(this));
    }
    v(iA, J);
    k = iA.prototype;
    k.Rp = function(a, b, c, d) {
        c = Lc(c);
        var e = this.c, f = this.tileGrid;
        f || (f = this.gb(c));
        b = f.Te(a, b);
        if (!(f.b.length <= b[0])) {
            var g = f.Va(b[0]), h = f.La(b, this.$);
            f = ug(f.Ua(b[0]), this.j);
            var l = this.s;
            0 !== l && (f = sg(f, l, this.j), h = Ta(h, g * l, h));
            e && e !== c && (g = cg(e, c, a, g), h = Yc(h, c, e), a = Xc(a, c, e));
            l = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            Ab(l, this.i, d);
            d = Math.floor((h[3] - a[1]) / g);
            l[this.l ? "I" : "X"] = Math.floor((a[0] - h[0]) / g);
            l[this.l ? "J" : "Y"] = d;
            return lA(this, b, f, h, 1, e || c, l);
        }
    };
    k.jg = function() {
        return this.s;
    };
    k.Sp = function() {
        return this.i;
    };
    function lA(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.l ? "CRS" : "SRS"] = f.wb;
            "STYLES" in a.i || (g.STYLES = "");
            if (1 != e) switch (a.D) {
              case "geoserver":
                c = 90 * e + .5 | 0;
                g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                break;

              case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;

              case "carmentaserver":
              case "qgis":
                g.DPI = 90 * e;
                break;

              default:
                Pa(!1, 52);
            }
            f = f.b;
            a.l && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], 
            d[3] = a);
            g.BBOX = d.join(",");
            return Yg(1 == h.length ? h[0] : h[ic((b[1] << b[0]) + b[2], h.length)], g);
        }
    }
    k.$c = function(a) {
        return this.Z && void 0 !== this.D ? a : 1;
    };
    function kA(a) {
        var b = 0, c = [], d;
        for (d in a.i) c[b++] = d + "-" + a.i[d];
        return c.join("/");
    }
    k.gc = function(a, b, c) {
        var d = this.tileGrid;
        d || (d = this.gb(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.Z && void 0 !== this.D || (b = 1);
            var e = d.Va(a[0]), f = d.La(a, this.$);
            d = ug(d.Ua(a[0]), this.j);
            var g = this.s;
            0 !== g && (d = sg(d, g, this.j), f = Ta(f, e * g, f));
            1 != b && (d = tg(d, b, this.j));
            e = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetMap",
                FORMAT: "image/png",
                TRANSPARENT: !0
            };
            Ab(e, this.i);
            return lA(this, a, d, f, b, c, e);
        }
    };
    k.Tp = function(a) {
        Ab(this.i, a);
        jA(this);
        Mh(this, kA(this));
    };
    function jA(a) {
        a.l = 0 <= Xg(a.i.VERSION || "1.3.0");
    }
    function mA(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) {
        uh.call(this, a, b, u);
        this.l = {};
        this.s = {};
        this.o = m;
        this.a = [];
        this.C = c;
        this.j = f;
        this.c = [];
        this.L = [];
        if (f) {
            var w = l.La(f), z = l.Va(a[0]);
            h.fg(w, h.Kc(z), function(a) {
                var b = tb(w, h.La(a)), c = h.A();
                c && (b = tb(b, c));
                .5 <= pb(b) / z && .5 <= qb(b) / z && (b = a.toString(), c = m[b], c || (c = g(a, n, p), 
                c = m[b] = new q(a, void 0 == c ? 4 : 0, void 0 == c ? "" : c, d, e), this.L.push(y(c, "change", r))), 
                c.c++, this.a.push(b));
            }.bind(this));
        }
    }
    v(mA, uh);
    k = mA.prototype;
    k.fa = function() {
        for (var a = 0, b = this.a.length; a < b; ++a) {
            var c = this.a[a], d = this.getTile(c);
            d.c--;
            0 == d.c && (delete this.o[c], Ob(d));
        }
        this.a.length = 0;
        this.o = null;
        this.c.forEach(Fb);
        this.c.length = 0;
        this.f && Ob(this.f);
        this.state = 5;
        this.changed();
        this.L.forEach(Fb);
        this.L.length = 0;
        uh.prototype.fa.call(this);
    };
    k.getContext = function(a) {
        a = x(a).toString();
        a in this.l || (this.l[a] = le());
        return this.l[a];
    };
    k.U = function(a) {
        return -1 == Mm(this, a).zh ? null : this.getContext(a).canvas;
    };
    function Mm(a, b) {
        b = x(b).toString();
        b in a.s || (a.s[b] = {
            Je: !1,
            yh: null,
            Gf: -1,
            zh: -1
        });
        return a.s[b];
    }
    k.ob = function() {
        return this.a.join("/") + "-" + this.C;
    };
    k.getTile = function(a) {
        return this.o[a];
    };
    k.load = function() {
        var a = 0, b = {};
        0 == this.state && xh(this, 1);
        1 == this.state && this.a.forEach(function(c) {
            var d = this.getTile(c);
            0 == d.state && (d.Hg(this.B), d.load());
            1 == d.state && (c = y(d, "change", function() {
                var c = d.getState();
                if (2 == c || 3 == c) {
                    var f = x(d);
                    3 == c ? b[f] = !0 : (--a, delete b[f]);
                    0 == a - Object.keys(b).length && this.ci();
                }
            }.bind(this)), this.c.push(c), ++a);
        }.bind(this));
        0 == a - Object.keys(b).length && setTimeout(this.ci.bind(this), 0);
    };
    k.ci = function() {
        for (var a = this.a.length, b = 0, c = a - 1; 0 <= c; --c) {
            var d = this.getTile(this.a[c]).getState();
            2 != d && --a;
            4 == d && ++b;
        }
        a == this.a.length ? (this.c.forEach(Fb), this.c.length = 0, xh(this, 2)) : xh(this, b == this.a.length ? 4 : 3);
    };
    function nA(a, b) {
        a.Hg(Un(b, a.o, a.xq.bind(a), a.wq.bind(a)));
    }
    function oA(a, b, c, d, e, f) {
        uh.call(this, a, b, f);
        this.c = 0;
        this.l = null;
        this.o = d;
        this.a = null;
        this.j = {};
        this.B = e;
        this.L = c;
    }
    v(oA, uh);
    k = oA.prototype;
    k.fa = function() {
        this.a = null;
        this.j = {};
        this.state = 5;
        this.changed();
        uh.prototype.fa.call(this);
    };
    k.A = function() {
        return this.l || pA;
    };
    k.co = function() {
        return this.o;
    };
    k.bo = function() {
        return this.a;
    };
    k.ob = function() {
        return this.L;
    };
    k.eo = function() {
        return this.s;
    };
    function Nm(a, b, c) {
        return a.j[x(b) + "," + c];
    }
    k.load = function() {
        0 == this.state && (xh(this, 1), this.B(this, this.L), this.C(null, NaN, null));
    };
    k.xq = function(a, b, c) {
        this.Ig(b);
        this.lk(a);
        this.Ki(c);
    };
    k.wq = function() {
        xh(this, 3);
    };
    k.Ki = function(a) {
        this.l = a;
    };
    k.lk = function(a) {
        this.a = a;
        xh(this, 2);
    };
    k.Ig = function(a) {
        this.s = a;
    };
    k.Hg = function(a) {
        this.C = a;
    };
    var pA = [ 0, 0, 4096, 4096 ];
    function qA(a) {
        var b = a.projection || "EPSG:3857", c = a.extent || Kg(b), d = a.tileGrid || Ig({
            extent: c,
            maxZoom: a.maxZoom || 22,
            minZoom: a.minZoom,
            tileSize: a.tileSize || 512
        });
        Ph.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: c,
            logo: a.logo,
            opaque: !1,
            projection: b,
            state: a.state,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : nA,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX,
            transition: a.transition
        });
        this.l = a.format ? a.format : null;
        this.i = {};
        this.o = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : oA;
        this.g = {};
    }
    v(qA, Ph);
    k = qA.prototype;
    k.clear = function() {
        this.a.clear();
        this.i = {};
    };
    k.getTile = function(a, b, c, d, e) {
        var f = a + "/" + b + "/" + c;
        if (this.a.a.hasOwnProperty(f)) return this.a.get(f);
        a = [ a, b, c ];
        b = Nh(this, a, e);
        d = new mA(a, null !== b ? 0 : 4, this.f, this.l, this.tileLoadFunction, b, this.tileUrlFunction, this.tileGrid, this.gb(e), this.i, d, e, this.tileClass, this.wj.bind(this), this.Ea);
        this.a.set(f, d);
        return d;
    };
    k.gb = function(a) {
        var b = a.wb, c = this.g[b];
        c || (c = this.tileGrid, c = this.g[b] = Hg(a, void 0, c ? c.Ua(c.minZoom) : void 0));
        return c;
    };
    k.$c = function(a) {
        return a;
    };
    k.de = function(a, b, c) {
        a = ug(this.gb(c).Ua(a));
        return [ Math.round(a[0] * b), Math.round(a[1] * b) ];
    };
    function rA(a) {
        this.o = a.matrixIds;
        xg.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        });
    }
    v(rA, xg);
    rA.prototype.u = function() {
        return this.o;
    };
    function sA(a, b, c) {
        var d = [], e = [], f = [], g = [], h = [], l = void 0 !== c ? c : [];
        c = a.SupportedCRS;
        c = Lc(c.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Lc(c);
        var m = c.Jc(), n = "ne" == c.b.substr(0, 2);
        a.TileMatrix.sort(function(a, b) {
            return b.ScaleDenominator - a.ScaleDenominator;
        });
        a.TileMatrix.forEach(function(a) {
            var b;
            0 < l.length ? b = Ha(l, function(b) {
                return a.Identifier == b.TileMatrix;
            }) : b = !0;
            if (b) {
                e.push(a.Identifier);
                b = 28e-5 * a.ScaleDenominator / m;
                var c = a.TileWidth, p = a.TileHeight;
                n ? f.push([ a.TopLeftCorner[1], a.TopLeftCorner[0] ]) : f.push(a.TopLeftCorner);
                d.push(b);
                g.push(c == p ? c : [ c, p ]);
                h.push([ a.MatrixWidth, -a.MatrixHeight ]);
            }
        });
        return new rA({
            extent: b,
            origins: f,
            resolutions: d,
            matrixIds: e,
            tileSizes: g,
            sizes: h
        });
    }
    function Z(a) {
        this.Oa = void 0 !== a.version ? a.version : "1.0.0";
        this.D = void 0 !== a.format ? a.format : "image/jpeg";
        this.i = void 0 !== a.dimensions ? a.dimensions : {};
        this.Z = a.layer;
        this.s = a.matrixSet;
        this.$ = a.style;
        var b = a.urls;
        void 0 === b && void 0 !== a.url && (b = Jh(a.url));
        var c = this.ra = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP", d = a.tileGrid, e = {
            layer: this.Z,
            style: this.$,
            tilematrixset: this.s
        };
        "KVP" == c && Ab(e, {
            Service: "WMTS",
            Request: "GetTile",
            Version: this.Oa,
            Format: this.D
        });
        var f = this.i;
        this.l = function(a) {
            a = "KVP" == c ? Yg(a, e) : a.replace(/\{(\w+?)\}/g, function(a, b) {
                return b.toLowerCase() in e ? e[b.toLowerCase()] : a;
            });
            return function(b) {
                if (b) {
                    var e = {
                        TileMatrix: d.o[b[0]],
                        TileCol: b[1],
                        TileRow: -b[2] - 1
                    };
                    Ab(e, f);
                    b = a;
                    return b = "KVP" == c ? Yg(b, e) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                        return e[b];
                    });
                }
            };
        };
        var g = b && 0 < b.length ? Hh(b.map(this.l)) : Ih;
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: d,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: g,
            urls: b,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1,
            transition: a.transition
        });
        Mh(this, tA(this));
    }
    v(Z, J);
    k = Z.prototype;
    k.vb = function(a) {
        this.urls = a;
        var b = a.join("\n");
        this.kb(this.gc ? this.gc.bind(this) : Hh(a.map(this.l.bind(this))), b);
    };
    k.Ul = function() {
        return this.i;
    };
    k.Up = function() {
        return this.D;
    };
    k.Vp = function() {
        return this.Z;
    };
    k.fm = function() {
        return this.s;
    };
    k.tm = function() {
        return this.ra;
    };
    k.Wp = function() {
        return this.$;
    };
    k.Am = function() {
        return this.Oa;
    };
    function tA(a) {
        var b = 0, c = [], d;
        for (d in a.i) c[b++] = d + "-" + a.i[d];
        return c.join("/");
    }
    k.Pr = function(a) {
        Ab(this.i, a);
        Mh(this, tA(this));
    };
    function uA(a) {
        a = a || {};
        var b = a.size, c = b[0], d = b[1];
        b = a.extent || [ 0, -b[1], b[0], 0 ];
        var e = [], f = a.tileSize || 256, g = f;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : vA) {
          case vA:
            for (;c > g || d > g; ) e.push([ Math.ceil(c / g), Math.ceil(d / g) ]), g += g;
            break;

          case wA:
            for (;c > g || d > g; ) e.push([ Math.ceil(c / g), Math.ceil(d / g) ]), c >>= 1, 
            d >>= 1;
            break;

          default:
            Pa(!1, 53);
        }
        e.push([ 1, 1 ]);
        e.reverse();
        d = [ 1 ];
        var h = [ 0 ];
        g = 1;
        for (c = e.length; g < c; g++) d.push(1 << g), h.push(e[g - 1][0] * e[g - 1][1] + h[g - 1]);
        d.reverse();
        var l = new xg({
            tileSize: f,
            extent: b,
            origin: mb(b),
            resolutions: d
        });
        (b = a.url) && -1 == b.indexOf("{TileGroup}") && -1 == b.indexOf("{tileIndex}") && (b += "{TileGroup}/{z}-{x}-{y}.jpg");
        b = Jh(b);
        b = Hh(b.map(function(a) {
            return function(b) {
                if (b) {
                    var c = b[0], d = b[1];
                    b = -b[2] - 1;
                    var f = d + b * e[c][0], g = {
                        z: c,
                        x: d,
                        y: b,
                        tileIndex: f,
                        TileGroup: "TileGroup" + ((f + h[c]) / l.Ua(c) | 0)
                    };
                    return a.replace(/\{(\w+?)\}/g, function(a, b) {
                        return g[b];
                    });
                }
            };
        }));
        J.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: xA.bind(null, l),
            tileGrid: l,
            tileUrlFunction: b,
            transition: a.transition
        });
    }
    v(uA, J);
    function xA(a, b, c, d, e, f, g) {
        zh.call(this, b, c, d, e, f, g);
        this.a = null;
        this.s = ug(a.Ua(b[0]));
    }
    v(xA, zh);
    xA.prototype.U = function() {
        if (this.a) return this.a;
        var a = zh.prototype.U.call(this);
        if (2 == this.state) {
            var b = this.s;
            if (a.width == b[0] && a.height == b[1]) return this.a = a;
            b = le(b[0], b[1]);
            b.drawImage(a, 0, 0);
            return this.a = b.canvas;
        }
        return a;
    };
    var vA = "default", wA = "truncated";
    Oa.prototype.code = Oa.prototype.code;
    t("ol.Attribution", Lg);
    Lg.prototype.getHTML = Lg.prototype.b;
    t("ol.CanvasMap", M);
    t("ol.Collection", Xh);
    Xh.prototype.clear = Xh.prototype.clear;
    Xh.prototype.extend = Xh.prototype.af;
    Xh.prototype.forEach = Xh.prototype.forEach;
    Xh.prototype.getArray = Xh.prototype.Kn;
    Xh.prototype.item = Xh.prototype.item;
    Xh.prototype.getLength = Xh.prototype.pc;
    Xh.prototype.insertAt = Xh.prototype.bf;
    Xh.prototype.pop = Xh.prototype.pop;
    Xh.prototype.push = Xh.prototype.push;
    Xh.prototype.remove = Xh.prototype.remove;
    Xh.prototype.removeAt = Xh.prototype.Cg;
    Xh.prototype.setAt = Xh.prototype.Ln;
    ai.prototype.element = ai.prototype.element;
    t("ol.color.asArray", ge);
    t("ol.color.asString", ie);
    t("ol.colorlike.asColorLike", ke);
    t("ol.control.defaults", fl);
    t("ol.coordinate.add", yi);
    t("ol.coordinate.createStringXY", function(a) {
        return function(b) {
            return Ji(b, a);
        };
    });
    t("ol.coordinate.format", Ci);
    t("ol.coordinate.rotate", Ei);
    t("ol.coordinate.toStringHDMS", function(a, b) {
        return a ? Bi("NS", a[1], b) + " " + Bi("EW", a[0], b) : "";
    });
    t("ol.coordinate.toStringXY", Ji);
    t("ol.DeviceOrientation", wn);
    wn.prototype.getAlpha = wn.prototype.Mn;
    wn.prototype.getBeta = wn.prototype.Rl;
    wn.prototype.getGamma = wn.prototype.Wl;
    wn.prototype.getHeading = wn.prototype.Nn;
    wn.prototype.getTracking = wn.prototype.Fi;
    wn.prototype.setTracking = wn.prototype.Dg;
    t("ol.easing.easeIn", qh);
    t("ol.easing.easeOut", rh);
    t("ol.easing.inAndOut", sh);
    t("ol.easing.linear", th);
    t("ol.easing.upAndDown", function(a) {
        return .5 > a ? sh(2 * a) : 1 - sh(2 * (a - .5));
    });
    t("ol.extent.boundingExtent", Qa);
    t("ol.extent.buffer", Ta);
    t("ol.extent.containsCoordinate", Xa);
    t("ol.extent.containsExtent", $a);
    t("ol.extent.containsXY", Ya);
    t("ol.extent.createEmpty", Ra);
    t("ol.extent.equals", gb);
    t("ol.extent.extend", hb);
    t("ol.extent.getArea", nb);
    t("ol.extent.getBottomLeft", jb);
    t("ol.extent.getBottomRight", kb);
    t("ol.extent.getCenter", rb);
    t("ol.extent.getHeight", qb);
    t("ol.extent.getIntersection", tb);
    t("ol.extent.getSize", vb);
    t("ol.extent.getTopLeft", mb);
    t("ol.extent.getTopRight", lb);
    t("ol.extent.getWidth", pb);
    t("ol.extent.intersects", ub);
    t("ol.extent.isEmpty", ob);
    t("ol.extent.applyTransform", xb);
    t("ol.Feature", xf);
    xf.prototype.clone = xf.prototype.clone;
    xf.prototype.getGeometry = xf.prototype.getGeometry;
    xf.prototype.getId = xf.prototype.Pn;
    xf.prototype.getGeometryName = xf.prototype.Yl;
    xf.prototype.getStyle = xf.prototype.ad;
    xf.prototype.getStyleFunction = xf.prototype.lb;
    xf.prototype.setGeometry = xf.prototype.setGeometry;
    xf.prototype.setStyle = xf.prototype.Eg;
    xf.prototype.setId = xf.prototype.tc;
    xf.prototype.setGeometryName = xf.prototype.Rc;
    t("ol.featureloader.xhr", Vn);
    t("ol.Geolocation", fv);
    fv.prototype.getAccuracy = fv.prototype.Kl;
    fv.prototype.getAccuracyGeometry = fv.prototype.Ll;
    fv.prototype.getAltitude = fv.prototype.Ml;
    fv.prototype.getAltitudeAccuracy = fv.prototype.Nl;
    fv.prototype.getHeading = fv.prototype.Rn;
    fv.prototype.getPosition = fv.prototype.Sn;
    fv.prototype.getProjection = fv.prototype.Gi;
    fv.prototype.getSpeed = fv.prototype.um;
    fv.prototype.getTracking = fv.prototype.Hi;
    fv.prototype.getTrackingOptions = fv.prototype.ui;
    fv.prototype.setProjection = fv.prototype.Ii;
    fv.prototype.setTracking = fv.prototype.cf;
    fv.prototype.setTrackingOptions = fv.prototype.vk;
    t("ol.Graticule", mv);
    mv.prototype.getMap = mv.prototype.Vn;
    mv.prototype.getMeridians = mv.prototype.im;
    mv.prototype.getParallels = mv.prototype.pm;
    mv.prototype.setMap = mv.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", xe);
    t("ol.has.CANVAS", ze);
    t("ol.has.DEVICE_ORIENTATION", Ae);
    t("ol.has.GEOLOCATION", Be);
    t("ol.has.TOUCH", Ce);
    t("ol.has.WEBGL", re);
    bg.prototype.getImage = bg.prototype.U;
    bg.prototype.load = bg.prototype.load;
    zh.prototype.getImage = zh.prototype.U;
    zh.prototype.load = zh.prototype.load;
    t("ol.inherits", v);
    t("ol.interaction.defaults", Uj);
    t("ol.Kinetic", ni);
    t("ol.loadingstrategy.all", Cv);
    t("ol.loadingstrategy.bbox", function(a) {
        return [ a ];
    });
    t("ol.loadingstrategy.tile", function(a) {
        return function(b, c) {
            c = a.Kc(c);
            b = Ag(a, b, c);
            var d = [];
            c = [ c, 0, 0 ];
            for (c[1] = b.da; c[1] <= b.ia; ++c[1]) for (c[2] = b.ca; c[2] <= b.ha; ++c[2]) d.push(a.La(c));
            return d;
        };
    });
    t("ol.Map", X);
    Vi.prototype.originalEvent = Vi.prototype.originalEvent;
    Vi.prototype.pixel = Vi.prototype.pixel;
    Vi.prototype.coordinate = Vi.prototype.coordinate;
    Vi.prototype.dragging = Vi.prototype.dragging;
    Vi.prototype.preventDefault = Vi.prototype.preventDefault;
    Vi.prototype.stopPropagation = Vi.prototype.stopPropagation;
    Ui.prototype.map = Ui.prototype.map;
    Ui.prototype.frameState = Ui.prototype.frameState;
    t("ol.Object", Vb);
    Vb.prototype.get = Vb.prototype.get;
    Vb.prototype.getKeys = Vb.prototype.N;
    Vb.prototype.getProperties = Vb.prototype.K;
    Vb.prototype.set = Vb.prototype.set;
    Vb.prototype.setProperties = Vb.prototype.H;
    Vb.prototype.unset = Vb.prototype.O;
    $b.prototype.key = $b.prototype.key;
    $b.prototype.oldValue = $b.prototype.oldValue;
    t("ol.Observable", Tb);
    t("ol.Observable.unByKey", Ub);
    Tb.prototype.changed = Tb.prototype.changed;
    Tb.prototype.dispatchEvent = Tb.prototype.b;
    Tb.prototype.getRevision = Tb.prototype.J;
    Tb.prototype.on = Tb.prototype.G;
    Tb.prototype.once = Tb.prototype.once;
    Tb.prototype.un = Tb.prototype.I;
    t("ol.Overlay", Ym);
    Ym.prototype.getElement = Ym.prototype.Xd;
    Ym.prototype.getId = Ym.prototype.ao;
    Ym.prototype.getMap = Ym.prototype.df;
    Ym.prototype.getOffset = Ym.prototype.pi;
    Ym.prototype.getPosition = Ym.prototype.Ji;
    Ym.prototype.getPositioning = Ym.prototype.ri;
    Ym.prototype.setElement = Ym.prototype.kk;
    Ym.prototype.setMap = Ym.prototype.setMap;
    Ym.prototype.setOffset = Ym.prototype.qk;
    Ym.prototype.setPosition = Ym.prototype.ef;
    Ym.prototype.setPositioning = Ym.prototype.tk;
    t("ol.PluggableMap", L);
    L.prototype.addControl = L.prototype.Xf;
    L.prototype.addInteraction = L.prototype.Yf;
    L.prototype.addLayer = L.prototype.Fe;
    L.prototype.addOverlay = L.prototype.Ge;
    L.prototype.forEachFeatureAtPixel = L.prototype.Xc;
    L.prototype.getFeaturesAtPixel = L.prototype.gg;
    L.prototype.forEachLayerAtPixel = L.prototype.Fg;
    L.prototype.hasFeatureAtPixel = L.prototype.xg;
    L.prototype.getEventCoordinate = L.prototype.Yd;
    L.prototype.getEventPixel = L.prototype.xd;
    L.prototype.getTarget = L.prototype.be;
    L.prototype.getTargetElement = L.prototype.Zb;
    L.prototype.getCoordinateFromPixel = L.prototype.Ta;
    L.prototype.getControls = L.prototype.Gg;
    L.prototype.getOverlays = L.prototype.qg;
    L.prototype.getOverlayById = L.prototype.pg;
    L.prototype.getInteractions = L.prototype.lg;
    L.prototype.getLayerGroup = L.prototype.lc;
    L.prototype.getLayers = L.prototype.Nc;
    L.prototype.getPixelFromCoordinate = L.prototype.Ja;
    L.prototype.getSize = L.prototype.ib;
    L.prototype.getView = L.prototype.T;
    L.prototype.getViewport = L.prototype.ug;
    L.prototype.renderSync = L.prototype.xh;
    L.prototype.render = L.prototype.render;
    L.prototype.removeControl = L.prototype.rh;
    L.prototype.removeInteraction = L.prototype.th;
    L.prototype.removeLayer = L.prototype.uh;
    L.prototype.removeOverlay = L.prototype.vh;
    L.prototype.setLayerGroup = L.prototype.Jf;
    L.prototype.setSize = L.prototype.ie;
    L.prototype.setTarget = L.prototype.Ed;
    L.prototype.setView = L.prototype.Dh;
    L.prototype.updateSize = L.prototype.Sc;
    t("ol.proj.METERS_PER_UNIT", rc);
    t("ol.proj.setProj4", function(a) {
        sc = a;
    });
    t("ol.proj.getPointResolution", Kc);
    t("ol.proj.addEquivalentProjections", Nc);
    t("ol.proj.addProjection", Oc);
    t("ol.proj.addCoordinateTransforms", Sc);
    t("ol.proj.fromLonLat", function(a, b) {
        return Xc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857");
    });
    t("ol.proj.toLonLat", function(a, b) {
        a = Xc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326");
        b = a[0];
        if (-180 > b || 180 < b) a[0] = ic(b + 180, 360) - 180;
        return a;
    });
    t("ol.proj.get", Lc);
    t("ol.proj.equivalent", Uc);
    t("ol.proj.getTransform", Vc);
    t("ol.proj.transform", Xc);
    t("ol.proj.transformExtent", Yc);
    t("ol.render.toContext", function(a, b) {
        var c = a.canvas, d = b ? b : {};
        b = d.pixelRatio || xe;
        if (d = d.size) c.width = d[0] * b, c.height = d[1] * b, c.style.width = d[0] + "px", 
        c.style.height = d[1] + "px";
        c = [ 0, 0, c.width, c.height ];
        d = hd(ad(), b, b);
        return new jl(a, b, c, d, 0);
    });
    t("ol.size.toSize", ug);
    t("ol.Sphere", lc);
    lc.prototype.geodesicArea = lc.prototype.a;
    lc.prototype.haversineDistance = lc.prototype.b;
    t("ol.Sphere.getLength", oc);
    t("ol.Sphere.getArea", qc);
    t("ol.style.iconImageCache", lf);
    uh.prototype.getTileCoord = uh.prototype.i;
    uh.prototype.load = uh.prototype.load;
    t("ol.tilegrid.createXYZ", Ig);
    oA.prototype.getExtent = oA.prototype.A;
    oA.prototype.getFormat = oA.prototype.co;
    oA.prototype.getFeatures = oA.prototype.bo;
    oA.prototype.getProjection = oA.prototype.eo;
    oA.prototype.setExtent = oA.prototype.Ki;
    oA.prototype.setFeatures = oA.prototype.lk;
    oA.prototype.setProjection = oA.prototype.Ig;
    oA.prototype.setLoader = oA.prototype.Hg;
    t("ol.View", K);
    K.prototype.animate = K.prototype.animate;
    K.prototype.getAnimating = K.prototype.Ic;
    K.prototype.getInteracting = K.prototype.mi;
    K.prototype.cancelAnimations = K.prototype.ud;
    K.prototype.constrainCenter = K.prototype.Wc;
    K.prototype.constrainResolution = K.prototype.constrainResolution;
    K.prototype.constrainRotation = K.prototype.constrainRotation;
    K.prototype.getCenter = K.prototype.getCenter;
    K.prototype.calculateExtent = K.prototype.Bc;
    K.prototype.getMaxResolution = K.prototype.Za;
    K.prototype.getMinResolution = K.prototype.$a;
    K.prototype.getMaxZoom = K.prototype.fo;
    K.prototype.setMaxZoom = K.prototype.xr;
    K.prototype.getMinZoom = K.prototype.ho;
    K.prototype.setMinZoom = K.prototype.yr;
    K.prototype.getProjection = K.prototype.io;
    K.prototype.getResolution = K.prototype.Ga;
    K.prototype.getResolutions = K.prototype.jo;
    K.prototype.getResolutionForExtent = K.prototype.Re;
    K.prototype.getRotation = K.prototype.Ra;
    K.prototype.getZoom = K.prototype.Jg;
    K.prototype.getZoomForResolution = K.prototype.Ue;
    K.prototype.getResolutionForZoom = K.prototype.ti;
    K.prototype.fit = K.prototype.eg;
    K.prototype.centerOn = K.prototype.rl;
    K.prototype.rotate = K.prototype.rotate;
    K.prototype.setCenter = K.prototype.setCenter;
    K.prototype.setResolution = K.prototype.kd;
    K.prototype.setRotation = K.prototype.je;
    K.prototype.setZoom = K.prototype.Li;
    t("ol.xml.getAllTextContent", En);
    t("ol.xml.parse", In);
    Ox.prototype.getGL = Ox.prototype.iq;
    Ox.prototype.useProgram = Ox.prototype.gd;
    t("ol.tilegrid.TileGrid", xg);
    xg.prototype.forEachTileCoord = xg.prototype.fg;
    xg.prototype.getMaxZoom = xg.prototype.Fj;
    xg.prototype.getMinZoom = xg.prototype.Gj;
    xg.prototype.getOrigin = xg.prototype.rc;
    xg.prototype.getResolution = xg.prototype.Va;
    xg.prototype.getResolutions = xg.prototype.Hj;
    xg.prototype.getTileCoordExtent = xg.prototype.La;
    xg.prototype.getTileCoordForCoordAndResolution = xg.prototype.Te;
    xg.prototype.getTileCoordForCoordAndZ = xg.prototype.tg;
    xg.prototype.getTileSize = xg.prototype.Ua;
    xg.prototype.getZForResolution = xg.prototype.Kc;
    t("ol.tilegrid.WMTS", rA);
    rA.prototype.getMatrixIds = rA.prototype.u;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", sA);
    t("ol.style.AtlasManager", Ty);
    t("ol.style.Circle", hf);
    hf.prototype.clone = hf.prototype.clone;
    hf.prototype.setRadius = hf.prototype.setRadius;
    t("ol.style.Fill", pf);
    pf.prototype.clone = pf.prototype.clone;
    pf.prototype.getColor = pf.prototype.f;
    pf.prototype.setColor = pf.prototype.c;
    t("ol.style.Icon", of);
    of.prototype.clone = of.prototype.clone;
    of.prototype.getAnchor = of.prototype.ic;
    of.prototype.getColor = of.prototype.Xp;
    of.prototype.getImage = of.prototype.U;
    of.prototype.getOrigin = of.prototype.Oc;
    of.prototype.getSrc = of.prototype.Yp;
    of.prototype.getSize = of.prototype.ac;
    of.prototype.load = of.prototype.load;
    jf.prototype.setSize = jf.prototype.c;
    t("ol.style.Image", ef);
    ef.prototype.getOpacity = ef.prototype.rf;
    ef.prototype.getRotateWithView = ef.prototype.sf;
    ef.prototype.getRotation = ef.prototype.tf;
    ef.prototype.getScale = ef.prototype.uf;
    ef.prototype.getSnapToPixel = ef.prototype.Se;
    ef.prototype.setOpacity = ef.prototype.Hd;
    ef.prototype.setRotation = ef.prototype.vf;
    ef.prototype.setScale = ef.prototype.Id;
    t("ol.style.RegularShape", ff);
    ff.prototype.clone = ff.prototype.clone;
    ff.prototype.getAnchor = ff.prototype.ic;
    ff.prototype.getAngle = ff.prototype.Bj;
    ff.prototype.getFill = ff.prototype.wa;
    ff.prototype.getImage = ff.prototype.U;
    ff.prototype.getOrigin = ff.prototype.Oc;
    ff.prototype.getPoints = ff.prototype.Cj;
    ff.prototype.getRadius = ff.prototype.Dj;
    ff.prototype.getRadius2 = ff.prototype.si;
    ff.prototype.getSize = ff.prototype.ac;
    ff.prototype.getStroke = ff.prototype.xa;
    t("ol.style.Stroke", qf);
    qf.prototype.clone = qf.prototype.clone;
    qf.prototype.getColor = qf.prototype.Zp;
    qf.prototype.getLineCap = qf.prototype.am;
    qf.prototype.getLineDash = qf.prototype.$p;
    qf.prototype.getLineDashOffset = qf.prototype.bm;
    qf.prototype.getLineJoin = qf.prototype.cm;
    qf.prototype.getMiterLimit = qf.prototype.jm;
    qf.prototype.getWidth = qf.prototype.aq;
    qf.prototype.setColor = qf.prototype.bq;
    qf.prototype.setLineCap = qf.prototype.tr;
    qf.prototype.setLineDash = qf.prototype.setLineDash;
    qf.prototype.setLineDashOffset = qf.prototype.ur;
    qf.prototype.setLineJoin = qf.prototype.vr;
    qf.prototype.setMiterLimit = qf.prototype.zr;
    qf.prototype.setWidth = qf.prototype.Fr;
    t("ol.style.Style", rf);
    rf.prototype.clone = rf.prototype.clone;
    rf.prototype.getRenderer = rf.prototype.Qe;
    rf.prototype.setRenderer = rf.prototype.Dr;
    rf.prototype.getGeometry = rf.prototype.getGeometry;
    rf.prototype.getGeometryFunction = rf.prototype.Xl;
    rf.prototype.getFill = rf.prototype.wa;
    rf.prototype.setFill = rf.prototype.If;
    rf.prototype.getImage = rf.prototype.U;
    rf.prototype.setImage = rf.prototype.Ch;
    rf.prototype.getStroke = rf.prototype.xa;
    rf.prototype.setStroke = rf.prototype.Kf;
    rf.prototype.getText = rf.prototype.Fa;
    rf.prototype.setText = rf.prototype.Kd;
    rf.prototype.getZIndex = rf.prototype.getZIndex;
    rf.prototype.setGeometry = rf.prototype.setGeometry;
    rf.prototype.setZIndex = rf.prototype.setZIndex;
    t("ol.style.Text", S);
    S.prototype.clone = S.prototype.clone;
    S.prototype.getOverflow = S.prototype.mm;
    S.prototype.getFont = S.prototype.Vl;
    S.prototype.getMaxAngle = S.prototype.hm;
    S.prototype.getPlacement = S.prototype.qm;
    S.prototype.getOffsetX = S.prototype.km;
    S.prototype.getOffsetY = S.prototype.lm;
    S.prototype.getFill = S.prototype.wa;
    S.prototype.getRotateWithView = S.prototype.cq;
    S.prototype.getRotation = S.prototype.eq;
    S.prototype.getScale = S.prototype.fq;
    S.prototype.getStroke = S.prototype.xa;
    S.prototype.getText = S.prototype.Fa;
    S.prototype.getTextAlign = S.prototype.wm;
    S.prototype.getTextBaseline = S.prototype.xm;
    S.prototype.getBackgroundFill = S.prototype.Pl;
    S.prototype.getBackgroundStroke = S.prototype.Ql;
    S.prototype.getPadding = S.prototype.om;
    S.prototype.setOverflow = S.prototype.Ar;
    S.prototype.setFont = S.prototype.mk;
    S.prototype.setMaxAngle = S.prototype.wr;
    S.prototype.setOffsetX = S.prototype.rk;
    S.prototype.setOffsetY = S.prototype.sk;
    S.prototype.setPlacement = S.prototype.Cr;
    S.prototype.setFill = S.prototype.If;
    S.prototype.setRotation = S.prototype.gq;
    S.prototype.setScale = S.prototype.Ej;
    S.prototype.setStroke = S.prototype.Kf;
    S.prototype.setText = S.prototype.Kd;
    S.prototype.setTextAlign = S.prototype.uk;
    S.prototype.setTextBaseline = S.prototype.Er;
    S.prototype.setBackgroundFill = S.prototype.lr;
    S.prototype.setBackgroundStroke = S.prototype.mr;
    S.prototype.setPadding = S.prototype.Br;
    t("ol.source.BingMaps", Bz);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>');
    Bz.prototype.getApiKey = Bz.prototype.$;
    Bz.prototype.getImagerySet = Bz.prototype.ra;
    t("ol.source.CartoDB", Dz);
    Dz.prototype.getConfig = Dz.prototype.Tl;
    Dz.prototype.updateConfig = Dz.prototype.Nr;
    Dz.prototype.setConfig = Dz.prototype.pr;
    t("ol.source.Cluster", Y);
    Y.prototype.getDistance = Y.prototype.qp;
    Y.prototype.getSource = Y.prototype.rp;
    Y.prototype.setDistance = Y.prototype.qr;
    t("ol.source.Image", Pg);
    Rg.prototype.image = Rg.prototype.image;
    t("ol.source.ImageArcGISRest", Iz);
    Iz.prototype.getParams = Iz.prototype.tp;
    Iz.prototype.getImageLoadFunction = Iz.prototype.sp;
    Iz.prototype.getUrl = Iz.prototype.getUrl;
    Iz.prototype.setImageLoadFunction = Iz.prototype.up;
    Iz.prototype.setUrl = Iz.prototype.vp;
    Iz.prototype.updateParams = Iz.prototype.wp;
    t("ol.source.ImageCanvas", Jz);
    t("ol.source.ImageMapGuide", Kz);
    Kz.prototype.getParams = Kz.prototype.yp;
    Kz.prototype.getImageLoadFunction = Kz.prototype.xp;
    Kz.prototype.updateParams = Kz.prototype.Ap;
    Kz.prototype.setImageLoadFunction = Kz.prototype.zp;
    t("ol.source.ImageStatic", Lz);
    t("ol.source.ImageVector", Mz);
    Mz.prototype.getSource = Mz.prototype.Bp;
    Mz.prototype.getStyle = Mz.prototype.Cp;
    Mz.prototype.getStyleFunction = Mz.prototype.lb;
    Mz.prototype.setStyle = Mz.prototype.tj;
    t("ol.source.ImageWMS", Zg);
    Zg.prototype.getGetFeatureInfoUrl = Zg.prototype.Fp;
    Zg.prototype.getParams = Zg.prototype.Hp;
    Zg.prototype.getImageLoadFunction = Zg.prototype.Gp;
    Zg.prototype.getUrl = Zg.prototype.getUrl;
    Zg.prototype.setImageLoadFunction = Zg.prototype.Ip;
    Zg.prototype.setUrl = Zg.prototype.Jp;
    Zg.prototype.updateParams = Zg.prototype.Kp;
    t("ol.source.OSM", Oz);
    t("ol.source.OSM.ATTRIBUTION", '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.');
    t("ol.source.Raster", Pz);
    Pz.prototype.setOperation = Pz.prototype.o;
    Tz.prototype.extent = Tz.prototype.extent;
    Tz.prototype.resolution = Tz.prototype.resolution;
    Tz.prototype.data = Tz.prototype.data;
    t("ol.source.Source", Mg);
    Mg.prototype.getAttributions = Mg.prototype.za;
    Mg.prototype.getLogo = Mg.prototype.Aa;
    Mg.prototype.getProjection = Mg.prototype.Ca;
    Mg.prototype.getState = Mg.prototype.getState;
    Mg.prototype.refresh = Mg.prototype.oa;
    Mg.prototype.setAttributions = Mg.prototype.ta;
    t("ol.source.Stamen", Wz);
    t("ol.source.Tile", Kh);
    Kh.prototype.getTileGrid = Kh.prototype.mb;
    Oh.prototype.tile = Oh.prototype.tile;
    t("ol.source.TileArcGISRest", $z);
    $z.prototype.getParams = $z.prototype.s;
    $z.prototype.updateParams = $z.prototype.D;
    t("ol.source.TileDebug", bA);
    t("ol.source.TileImage", J);
    J.prototype.setRenderReprojectionEdges = J.prototype.Sb;
    J.prototype.setTileGridForProjection = J.prototype.Tb;
    t("ol.source.TileJSON", dA);
    dA.prototype.getTileJSON = dA.prototype.ym;
    t("ol.source.TileUTFGrid", eA);
    eA.prototype.getTemplate = eA.prototype.vm;
    eA.prototype.forDataAtCoordinateAndResolution = eA.prototype.Fl;
    t("ol.source.TileWMS", iA);
    iA.prototype.getGetFeatureInfoUrl = iA.prototype.Rp;
    iA.prototype.getParams = iA.prototype.Sp;
    iA.prototype.updateParams = iA.prototype.Tp;
    Ph.prototype.getTileLoadFunction = Ph.prototype.Ab;
    Ph.prototype.getTileUrlFunction = Ph.prototype.Bb;
    Ph.prototype.getUrls = Ph.prototype.Cb;
    Ph.prototype.setTileLoadFunction = Ph.prototype.Gb;
    Ph.prototype.setTileUrlFunction = Ph.prototype.kb;
    Ph.prototype.setUrl = Ph.prototype.sb;
    Ph.prototype.setUrls = Ph.prototype.vb;
    t("ol.source.Vector", U);
    U.prototype.addFeature = U.prototype.Hb;
    U.prototype.addFeatures = U.prototype.Uc;
    U.prototype.clear = U.prototype.clear;
    U.prototype.forEachFeature = U.prototype.di;
    U.prototype.forEachFeatureInExtent = U.prototype.hc;
    U.prototype.forEachFeatureIntersectingExtent = U.prototype.ei;
    U.prototype.getFeaturesCollection = U.prototype.ki;
    U.prototype.getFeatures = U.prototype.fd;
    U.prototype.getFeaturesAtCoordinate = U.prototype.ji;
    U.prototype.getFeaturesInExtent = U.prototype.hg;
    U.prototype.getClosestFeatureToCoordinate = U.prototype.gi;
    U.prototype.getExtent = U.prototype.A;
    U.prototype.getFeatureById = U.prototype.xj;
    U.prototype.getFormat = U.prototype.yj;
    U.prototype.getUrl = U.prototype.getUrl;
    U.prototype.removeLoadedExtent = U.prototype.fk;
    U.prototype.removeFeature = U.prototype.Lb;
    U.prototype.setLoader = U.prototype.Aj;
    Zv.prototype.feature = Zv.prototype.feature;
    t("ol.source.VectorTile", qA);
    qA.prototype.clear = qA.prototype.clear;
    t("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.Ul;
    Z.prototype.getFormat = Z.prototype.Up;
    Z.prototype.getLayer = Z.prototype.Vp;
    Z.prototype.getMatrixSet = Z.prototype.fm;
    Z.prototype.getRequestEncoding = Z.prototype.tm;
    Z.prototype.getStyle = Z.prototype.Wp;
    Z.prototype.getVersion = Z.prototype.Am;
    Z.prototype.updateDimensions = Z.prototype.Pr;
    t("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
        var c = Ha(a.Contents.Layer, function(a) {
            return a.Identifier == b.layer;
        });
        if (null === c) return null;
        var d = a.Contents.TileMatrixSet;
        var e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? Ma(c.TileMatrixSetLink, function(a) {
            var c = Ha(d, function(b) {
                return b.Identifier == a.TileMatrixSet;
            }).SupportedCRS, e = Lc(c.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Lc(c), f = Lc(b.projection);
            return e && f ? Uc(e, f) : c == b.projection;
        }) : Ma(c.TileMatrixSetLink, function(a) {
            return a.TileMatrixSet == b.matrixSet;
        }) : 0;
        0 > e && (e = 0);
        var f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
        var h = c.Format[0];
        "format" in b && (h = b.format);
        e = Ma(c.Style, function(a) {
            return "style" in b ? a.Title == b.style : a.isDefault;
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var l = {};
        "Dimension" in c && c.Dimension.forEach(function(a) {
            var b = a.Identifier, c = a.Default;
            void 0 === c && (c = a.Value[0]);
            l[b] = c;
        });
        var m = Ha(a.Contents.TileMatrixSet, function(a) {
            return a.Identifier == f;
        }), n, p = m.SupportedCRS;
        p && (n = Lc(p.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")) || Lc(p));
        "projection" in b && (p = Lc(b.projection), !p || n && !Uc(p, n) || (n = p));
        p = c.WGS84BoundingBox;
        if (void 0 !== p) {
            var q = Lc("EPSG:4326").A();
            q = p[0] == q[0] && p[2] == q[2];
            var r = Yc(p, "EPSG:4326", n);
            (p = n.A()) && ($a(p, r) || (r = void 0));
        }
        g = sA(m, r, g);
        var u = [];
        m = b.requestEncoding;
        m = void 0 !== m ? m : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata) for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get, 
        r = 0, p = a.length; r < p; ++r) if (a[r].Constraint) {
            var w = Ha(a[r].Constraint, function(a) {
                return "GetEncoding" == a.name;
            }).AllowedValues.Value;
            "" === m && (m = w[0]);
            if ("KVP" === m) Ea(w, "KVP") && u.push(a[r].href); else break;
        } else a[r].href && (m = "KVP", u.push(a[r].href));
        0 === u.length && (m = "REST", c.ResourceURL.forEach(function(a) {
            "tile" === a.resourceType && (h = a.format, u.push(a.template));
        }));
        return {
            urls: u,
            layer: b.layer,
            matrixSet: f,
            format: h,
            projection: n,
            requestEncoding: m,
            tileGrid: g,
            style: e,
            dimensions: l,
            wrapX: q,
            crossOrigin: b.crossOrigin
        };
    });
    t("ol.source.XYZ", Cz);
    t("ol.source.Zoomify", uA);
    t("ol.renderer.webgl.ImageLayer", oz);
    t("ol.renderer.webgl.Map", rz);
    t("ol.renderer.webgl.TileLayer", yz);
    t("ol.renderer.webgl.VectorLayer", zz);
    t("ol.renderer.canvas.ImageLayer", Kl);
    t("ol.renderer.canvas.Map", Ql);
    t("ol.renderer.canvas.TileLayer", Sl);
    t("ol.renderer.canvas.VectorLayer", Im);
    t("ol.renderer.canvas.VectorTileLayer", Jm);
    hl.prototype.vectorContext = hl.prototype.vectorContext;
    hl.prototype.frameState = hl.prototype.frameState;
    hl.prototype.context = hl.prototype.context;
    hl.prototype.glContext = hl.prototype.glContext;
    Rs.prototype.get = Rs.prototype.get;
    Rs.prototype.getExtent = Rs.prototype.A;
    Rs.prototype.getId = Rs.prototype.mp;
    Rs.prototype.getGeometry = Rs.prototype.getGeometry;
    Rs.prototype.getProperties = Rs.prototype.np;
    Rs.prototype.getType = Rs.prototype.getType;
    t("ol.render.VectorContext", il);
    gz.prototype.setStyle = gz.prototype.Gd;
    gz.prototype.drawGeometry = gz.prototype.Ib;
    gz.prototype.drawFeature = gz.prototype.Ke;
    jl.prototype.drawCircle = jl.prototype.fc;
    jl.prototype.setStyle = jl.prototype.Gd;
    jl.prototype.drawGeometry = jl.prototype.Ib;
    jl.prototype.drawFeature = jl.prototype.Ke;
    t("ol.proj.common.add", Zc);
    t("ol.proj.Projection", tc);
    tc.prototype.getCode = tc.prototype.Sl;
    tc.prototype.getExtent = tc.prototype.A;
    tc.prototype.getUnits = tc.prototype.lp;
    tc.prototype.getMetersPerUnit = tc.prototype.Jc;
    tc.prototype.getWorldExtent = tc.prototype.Bm;
    tc.prototype.getAxisOrientation = tc.prototype.Ol;
    tc.prototype.isGlobal = tc.prototype.sn;
    tc.prototype.setGlobal = tc.prototype.sr;
    tc.prototype.setExtent = tc.prototype.kj;
    tc.prototype.setWorldExtent = tc.prototype.wk;
    tc.prototype.setGetPointResolution = tc.prototype.rr;
    t("ol.proj.Units.METERS_PER_UNIT", rc);
    t("ol.layer.Base", zf);
    zf.prototype.getExtent = zf.prototype.A;
    zf.prototype.getMaxResolution = zf.prototype.Za;
    zf.prototype.getMinResolution = zf.prototype.$a;
    zf.prototype.getOpacity = zf.prototype.xb;
    zf.prototype.getVisible = zf.prototype.Ma;
    zf.prototype.getZIndex = zf.prototype.getZIndex;
    zf.prototype.setExtent = zf.prototype.qc;
    zf.prototype.setMaxResolution = zf.prototype.uc;
    zf.prototype.setMinResolution = zf.prototype.vc;
    zf.prototype.setOpacity = zf.prototype.ab;
    zf.prototype.setVisible = zf.prototype.setVisible;
    zf.prototype.setZIndex = zf.prototype.setZIndex;
    t("ol.layer.Group", bi);
    bi.prototype.getLayers = bi.prototype.dd;
    bi.prototype.setLayers = bi.prototype.Mg;
    t("ol.layer.Heatmap", V);
    V.prototype.getBlur = V.prototype.fi;
    V.prototype.getGradient = V.prototype.li;
    V.prototype.getRadius = V.prototype.jj;
    V.prototype.setBlur = V.prototype.ik;
    V.prototype.setGradient = V.prototype.pk;
    V.prototype.setRadius = V.prototype.setRadius;
    t("ol.layer.Image", oh);
    oh.prototype.getSource = oh.prototype.aa;
    t("ol.layer.Layer", Bf);
    Bf.prototype.getSource = Bf.prototype.aa;
    Bf.prototype.setMap = Bf.prototype.setMap;
    Bf.prototype.setSource = Bf.prototype.ld;
    t("ol.layer.Tile", ph);
    ph.prototype.getPreload = ph.prototype.c;
    ph.prototype.getSource = ph.prototype.aa;
    ph.prototype.setPreload = ph.prototype.j;
    ph.prototype.getUseInterimTilesOnError = ph.prototype.i;
    ph.prototype.setUseInterimTilesOnError = ph.prototype.B;
    t("ol.layer.Vector", I);
    I.prototype.getSource = I.prototype.aa;
    I.prototype.getStyle = I.prototype.ad;
    I.prototype.getStyleFunction = I.prototype.lb;
    I.prototype.setStyle = I.prototype.j;
    t("ol.layer.VectorTile", W);
    W.prototype.getPreload = W.prototype.c;
    W.prototype.getUseInterimTilesOnError = W.prototype.i;
    W.prototype.setPreload = W.prototype.D;
    W.prototype.setUseInterimTilesOnError = W.prototype.P;
    W.prototype.getSource = W.prototype.aa;
    t("ol.interaction.DoubleClickZoom", wi);
    t("ol.interaction.DoubleClickZoom.handleEvent", xi);
    t("ol.interaction.DragAndDrop", rv);
    t("ol.interaction.DragAndDrop.handleEvent", yb);
    uv.prototype.features = uv.prototype.features;
    uv.prototype.file = uv.prototype.file;
    uv.prototype.projection = uv.prototype.projection;
    t("ol.interaction.DragBox", pj);
    pj.prototype.getGeometry = pj.prototype.getGeometry;
    zj.prototype.coordinate = zj.prototype.coordinate;
    zj.prototype.mapBrowserEvent = zj.prototype.mapBrowserEvent;
    t("ol.interaction.DragPan", $i);
    t("ol.interaction.DragRotate", ij);
    t("ol.interaction.DragRotateAndZoom", yv);
    t("ol.interaction.DragZoom", Dj);
    t("ol.interaction.Draw", bw);
    t("ol.interaction.Draw.handleEvent", dw);
    bw.prototype.removeLastPoint = bw.prototype.hr;
    bw.prototype.finishDrawing = bw.prototype.Vd;
    bw.prototype.extend = bw.prototype.Ko;
    t("ol.interaction.Draw.createRegularPolygon", function(a, b) {
        return function(c, d) {
            var e = c[0];
            c = c[1];
            var f = Math.sqrt(Gi(e, c));
            d = d ? d : Zd(new gv(e), a);
            $d(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0])));
            return d;
        };
    });
    t("ol.interaction.Draw.createBox", function() {
        return function(a, b) {
            a = Qa(a);
            b = b || new D(null);
            b.ka([ [ jb(a), kb(a), lb(a), mb(a), jb(a) ] ]);
            return b;
        };
    });
    rw.prototype.feature = rw.prototype.feature;
    t("ol.interaction.Extent", sw);
    sw.prototype.getExtent = sw.prototype.A;
    sw.prototype.setExtent = sw.prototype.g;
    Dw.prototype.extent = Dw.prototype.extent;
    t("ol.interaction.Interaction", ri);
    ri.prototype.getActive = ri.prototype.c;
    ri.prototype.getMap = ri.prototype.i;
    ri.prototype.setActive = ri.prototype.Ha;
    t("ol.interaction.KeyboardPan", Ej);
    t("ol.interaction.KeyboardPan.handleEvent", Fj);
    t("ol.interaction.KeyboardZoom", Gj);
    t("ol.interaction.KeyboardZoom.handleEvent", Hj);
    t("ol.interaction.Modify", Ew);
    t("ol.interaction.Modify.handleEvent", Hw);
    Ew.prototype.removePoint = Ew.prototype.gk;
    Mw.prototype.features = Mw.prototype.features;
    Mw.prototype.mapBrowserEvent = Mw.prototype.mapBrowserEvent;
    t("ol.interaction.MouseWheelZoom", Ij);
    t("ol.interaction.MouseWheelZoom.handleEvent", Jj);
    Ij.prototype.setMouseAnchor = Ij.prototype.W;
    t("ol.interaction.PinchRotate", Mj);
    t("ol.interaction.PinchZoom", Qj);
    t("ol.interaction.Pointer", Xi);
    t("ol.interaction.Pointer.handleEvent", Yi);
    t("ol.interaction.Select", Uw);
    Uw.prototype.getFeatures = Uw.prototype.Vo;
    Uw.prototype.getHitTolerance = Uw.prototype.Wo;
    Uw.prototype.getLayer = Uw.prototype.Xo;
    t("ol.interaction.Select.handleEvent", Vw);
    Uw.prototype.setHitTolerance = Uw.prototype.Zo;
    Uw.prototype.setMap = Uw.prototype.setMap;
    Xw.prototype.selected = Xw.prototype.selected;
    Xw.prototype.deselected = Xw.prototype.deselected;
    Xw.prototype.mapBrowserEvent = Xw.prototype.mapBrowserEvent;
    t("ol.interaction.Snap", Zw);
    Zw.prototype.addFeature = Zw.prototype.Hb;
    Zw.prototype.removeFeature = Zw.prototype.Lb;
    t("ol.interaction.Translate", dx);
    dx.prototype.getHitTolerance = dx.prototype.D;
    dx.prototype.setHitTolerance = dx.prototype.P;
    jx.prototype.features = jx.prototype.features;
    jx.prototype.coordinate = jx.prototype.coordinate;
    t("ol.geom.Circle", gv);
    gv.prototype.clone = gv.prototype.clone;
    gv.prototype.getCenter = gv.prototype.getCenter;
    gv.prototype.getRadius = gv.prototype.Fd;
    gv.prototype.getType = gv.prototype.getType;
    gv.prototype.intersectsExtent = gv.prototype.cb;
    gv.prototype.setCenter = gv.prototype.setCenter;
    gv.prototype.setCenterAndRadius = gv.prototype.Bh;
    gv.prototype.setRadius = gv.prototype.setRadius;
    gv.prototype.transform = gv.prototype.transform;
    t("ol.geom.Geometry", ld);
    ld.prototype.getClosestPoint = ld.prototype.Jb;
    ld.prototype.intersectsCoordinate = ld.prototype.Db;
    ld.prototype.getExtent = ld.prototype.A;
    ld.prototype.rotate = ld.prototype.rotate;
    ld.prototype.scale = ld.prototype.scale;
    ld.prototype.simplify = ld.prototype.Ub;
    ld.prototype.transform = ld.prototype.transform;
    t("ol.geom.GeometryCollection", Ho);
    Ho.prototype.clone = Ho.prototype.clone;
    Ho.prototype.getGeometries = Ho.prototype.yd;
    Ho.prototype.getType = Ho.prototype.getType;
    Ho.prototype.intersectsExtent = Ho.prototype.cb;
    Ho.prototype.rotate = Ho.prototype.rotate;
    Ho.prototype.scale = Ho.prototype.scale;
    Ho.prototype.setGeometries = Ho.prototype.nk;
    Ho.prototype.applyTransform = Ho.prototype.Vc;
    Ho.prototype.translate = Ho.prototype.translate;
    t("ol.geom.LinearRing", Pd);
    Pd.prototype.clone = Pd.prototype.clone;
    Pd.prototype.getArea = Pd.prototype.Go;
    Pd.prototype.getCoordinates = Pd.prototype.S;
    Pd.prototype.getType = Pd.prototype.getType;
    Pd.prototype.setCoordinates = Pd.prototype.ka;
    t("ol.geom.LineString", B);
    B.prototype.appendCoordinate = B.prototype.jl;
    B.prototype.clone = B.prototype.clone;
    B.prototype.forEachSegment = B.prototype.Il;
    B.prototype.getCoordinateAtM = B.prototype.Eo;
    B.prototype.getCoordinates = B.prototype.S;
    B.prototype.getCoordinateAt = B.prototype.hi;
    B.prototype.getLength = B.prototype.Fo;
    B.prototype.getType = B.prototype.getType;
    B.prototype.intersectsExtent = B.prototype.cb;
    B.prototype.setCoordinates = B.prototype.ka;
    t("ol.geom.MultiLineString", F);
    F.prototype.appendLineString = F.prototype.kl;
    F.prototype.clone = F.prototype.clone;
    F.prototype.getCoordinateAtM = F.prototype.Ho;
    F.prototype.getCoordinates = F.prototype.S;
    F.prototype.getLineString = F.prototype.dm;
    F.prototype.getLineStrings = F.prototype.zd;
    F.prototype.getType = F.prototype.getType;
    F.prototype.intersectsExtent = F.prototype.cb;
    F.prototype.setCoordinates = F.prototype.ka;
    t("ol.geom.MultiPoint", G);
    G.prototype.appendPoint = G.prototype.ml;
    G.prototype.clone = G.prototype.clone;
    G.prototype.getCoordinates = G.prototype.S;
    G.prototype.getPoint = G.prototype.rm;
    G.prototype.getPoints = G.prototype.ke;
    G.prototype.getType = G.prototype.getType;
    G.prototype.intersectsExtent = G.prototype.cb;
    G.prototype.setCoordinates = G.prototype.ka;
    t("ol.geom.MultiPolygon", H);
    H.prototype.appendPolygon = H.prototype.nl;
    H.prototype.clone = H.prototype.clone;
    H.prototype.getArea = H.prototype.Io;
    H.prototype.getCoordinates = H.prototype.S;
    H.prototype.getInteriorPoints = H.prototype.$l;
    H.prototype.getPolygon = H.prototype.sm;
    H.prototype.getPolygons = H.prototype.Ad;
    H.prototype.getType = H.prototype.getType;
    H.prototype.intersectsExtent = H.prototype.cb;
    H.prototype.setCoordinates = H.prototype.ka;
    t("ol.geom.Point", C);
    C.prototype.clone = C.prototype.clone;
    C.prototype.getCoordinates = C.prototype.S;
    C.prototype.getType = C.prototype.getType;
    C.prototype.intersectsExtent = C.prototype.cb;
    C.prototype.setCoordinates = C.prototype.ka;
    t("ol.geom.Polygon", D);
    D.prototype.appendLinearRing = D.prototype.ll;
    D.prototype.clone = D.prototype.clone;
    D.prototype.getArea = D.prototype.Jo;
    D.prototype.getCoordinates = D.prototype.S;
    D.prototype.getInteriorPoint = D.prototype.ni;
    D.prototype.getLinearRingCount = D.prototype.em;
    D.prototype.getLinearRing = D.prototype.oi;
    D.prototype.getLinearRings = D.prototype.$d;
    D.prototype.getType = D.prototype.getType;
    D.prototype.intersectsExtent = D.prototype.cb;
    D.prototype.setCoordinates = D.prototype.ka;
    t("ol.geom.Polygon.circular", Xd);
    t("ol.geom.Polygon.fromExtent", Yd);
    t("ol.geom.Polygon.fromCircle", Zd);
    t("ol.geom.SimpleGeometry", md);
    md.prototype.getFirstCoordinate = md.prototype.jc;
    md.prototype.getLastCoordinate = md.prototype.kc;
    md.prototype.getLayout = md.prototype.mc;
    md.prototype.applyTransform = md.prototype.Vc;
    md.prototype.rotate = md.prototype.rotate;
    md.prototype.scale = md.prototype.scale;
    md.prototype.translate = md.prototype.translate;
    t("ol.format.EsriJSON", bo);
    bo.prototype.readFeature = bo.prototype.bc;
    bo.prototype.readFeatures = bo.prototype.Sa;
    bo.prototype.readGeometry = bo.prototype.jd;
    bo.prototype.readProjection = bo.prototype.tb;
    bo.prototype.writeGeometry = bo.prototype.qd;
    bo.prototype.writeGeometryObject = bo.prototype.ze;
    bo.prototype.writeFeature = bo.prototype.Nd;
    bo.prototype.writeFeatureObject = bo.prototype.pd;
    bo.prototype.writeFeatures = bo.prototype.dc;
    bo.prototype.writeFeaturesObject = bo.prototype.xe;
    t("ol.format.Feature", Wn);
    t("ol.format.filter.and", Fo);
    t("ol.format.filter.or", function(a) {
        var b = [ null ].concat(Array.prototype.slice.call(arguments));
        return new (Function.prototype.bind.apply(Do, b))();
    });
    t("ol.format.filter.not", function(a) {
        return new Bo(a);
    });
    t("ol.format.filter.bbox", Go);
    t("ol.format.filter.contains", function(a, b, c) {
        return new oo(a, b, c);
    });
    t("ol.format.filter.intersects", function(a, b, c) {
        return new vo(a, b, c);
    });
    t("ol.format.filter.within", function(a, b, c) {
        return new Eo(a, b, c);
    });
    t("ol.format.filter.equalTo", function(a, b, c) {
        return new so(a, b, c);
    });
    t("ol.format.filter.notEqualTo", function(a, b, c) {
        return new Co(a, b, c);
    });
    t("ol.format.filter.lessThan", function(a, b) {
        return new zo(a, b);
    });
    t("ol.format.filter.lessThanOrEqualTo", function(a, b) {
        return new Ao(a, b);
    });
    t("ol.format.filter.greaterThan", function(a, b) {
        return new to(a, b);
    });
    t("ol.format.filter.greaterThanOrEqualTo", function(a, b) {
        return new uo(a, b);
    });
    t("ol.format.filter.isNull", function(a) {
        return new yo(a);
    });
    t("ol.format.filter.between", function(a, b, c) {
        return new wo(a, b, c);
    });
    t("ol.format.filter.like", function(a, b, c, d, e, f) {
        return new xo(a, b, c, d, e, f);
    });
    t("ol.format.filter.during", function(a, b, c) {
        return new qo(a, b, c);
    });
    t("ol.format.GeoJSON", Lo);
    Lo.prototype.readFeature = Lo.prototype.bc;
    Lo.prototype.readFeatures = Lo.prototype.Sa;
    Lo.prototype.readGeometry = Lo.prototype.jd;
    Lo.prototype.readProjection = Lo.prototype.tb;
    Lo.prototype.writeFeature = Lo.prototype.Nd;
    Lo.prototype.writeFeatureObject = Lo.prototype.pd;
    Lo.prototype.writeFeatures = Lo.prototype.dc;
    Lo.prototype.writeFeaturesObject = Lo.prototype.xe;
    Lo.prototype.writeGeometry = Lo.prototype.qd;
    Lo.prototype.writeGeometryObject = Lo.prototype.ze;
    t("ol.format.GML", fp);
    fp.prototype.writeFeatures = fp.prototype.dc;
    fp.prototype.writeFeaturesNode = fp.prototype.ec;
    t("ol.format.GML2", op);
    t("ol.format.GML3", fp);
    fp.prototype.writeGeometryNode = fp.prototype.ye;
    fp.prototype.writeFeatures = fp.prototype.dc;
    fp.prototype.writeFeaturesNode = fp.prototype.ec;
    To.prototype.readFeatures = To.prototype.Sa;
    t("ol.format.GPX", zp);
    zp.prototype.readFeature = zp.prototype.bc;
    zp.prototype.readFeatures = zp.prototype.Sa;
    zp.prototype.readProjection = zp.prototype.tb;
    zp.prototype.writeFeatures = zp.prototype.dc;
    zp.prototype.writeFeaturesNode = zp.prototype.ec;
    t("ol.format.IGC", jq);
    jq.prototype.readFeature = jq.prototype.bc;
    jq.prototype.readFeatures = jq.prototype.Sa;
    jq.prototype.readProjection = jq.prototype.tb;
    t("ol.format.KML", oq);
    oq.prototype.readFeature = oq.prototype.bc;
    oq.prototype.readFeatures = oq.prototype.Sa;
    oq.prototype.readName = oq.prototype.Yq;
    oq.prototype.readNetworkLinks = oq.prototype.Zq;
    oq.prototype.readRegion = oq.prototype.br;
    oq.prototype.readRegionFromNode = oq.prototype.Ff;
    oq.prototype.readProjection = oq.prototype.tb;
    oq.prototype.writeFeatures = oq.prototype.dc;
    oq.prototype.writeFeaturesNode = oq.prototype.ec;
    t("ol.format.MVT", Ss);
    Ss.prototype.getLastExtent = Ss.prototype.mg;
    Ss.prototype.readFeatures = Ss.prototype.Sa;
    Ss.prototype.readProjection = Ss.prototype.tb;
    Ss.prototype.setLayers = Ss.prototype.Do;
    t("ol.format.OSMXML", Xs);
    Xs.prototype.readFeatures = Xs.prototype.Sa;
    Xs.prototype.readProjection = Xs.prototype.tb;
    t("ol.format.Polyline", vt);
    t("ol.format.Polyline.encodeDeltas", wt);
    t("ol.format.Polyline.decodeDeltas", yt);
    t("ol.format.Polyline.encodeFloats", xt);
    t("ol.format.Polyline.decodeFloats", zt);
    vt.prototype.readFeature = vt.prototype.bc;
    vt.prototype.readFeatures = vt.prototype.Sa;
    vt.prototype.readGeometry = vt.prototype.jd;
    vt.prototype.readProjection = vt.prototype.tb;
    vt.prototype.writeGeometry = vt.prototype.qd;
    t("ol.format.TopoJSON", At);
    At.prototype.readFeatures = At.prototype.Sa;
    At.prototype.readProjection = At.prototype.tb;
    t("ol.format.WFS", Gt);
    Gt.prototype.readFeatures = Gt.prototype.Sa;
    Gt.prototype.readTransactionResponse = Gt.prototype.j;
    Gt.prototype.readFeatureCollectionMetadata = Gt.prototype.g;
    t("ol.format.WFS.writeFilter", function(a) {
        var b = Dn("http://www.opengis.net/ogc", "Filter");
        Tn({
            node: b
        }, Vt, On(a.wc), [ a ], []);
        return b;
    });
    Gt.prototype.writeGetFeature = Gt.prototype.o;
    Gt.prototype.writeTransaction = Gt.prototype.u;
    Gt.prototype.readProjection = Gt.prototype.tb;
    t("ol.format.WKT", au);
    au.prototype.readFeature = au.prototype.bc;
    au.prototype.readFeatures = au.prototype.Sa;
    au.prototype.readGeometry = au.prototype.jd;
    au.prototype.writeFeature = au.prototype.Nd;
    au.prototype.writeFeatures = au.prototype.dc;
    au.prototype.writeGeometry = au.prototype.qd;
    t("ol.format.WMSCapabilities", tu);
    tu.prototype.read = tu.prototype.read;
    t("ol.format.WMSGetFeatureInfo", Qu);
    Qu.prototype.readFeatures = Qu.prototype.Sa;
    t("ol.format.WMTSCapabilities", Ru);
    Ru.prototype.read = Ru.prototype.read;
    t("ol.format.filter.And", lo);
    t("ol.format.filter.Bbox", mo);
    t("ol.format.filter.Comparison", po);
    t("ol.format.filter.ComparisonBinary", ro);
    t("ol.format.filter.Contains", oo);
    t("ol.format.filter.During", qo);
    t("ol.format.filter.EqualTo", so);
    t("ol.format.filter.Filter", jo);
    t("ol.format.filter.GreaterThan", to);
    t("ol.format.filter.GreaterThanOrEqualTo", uo);
    t("ol.format.filter.Intersects", vo);
    t("ol.format.filter.IsBetween", wo);
    t("ol.format.filter.IsLike", xo);
    t("ol.format.filter.IsNull", yo);
    t("ol.format.filter.LessThan", zo);
    t("ol.format.filter.LessThanOrEqualTo", Ao);
    t("ol.format.filter.Not", Bo);
    t("ol.format.filter.NotEqualTo", Co);
    t("ol.format.filter.Or", Do);
    t("ol.format.filter.Spatial", no);
    t("ol.format.filter.Within", Eo);
    t("ol.events.condition.altKeyOnly", Ki);
    t("ol.events.condition.altShiftKeysOnly", Li);
    t("ol.events.condition.always", yb);
    t("ol.events.condition.click", function(a) {
        return "click" == a.type;
    });
    t("ol.events.condition.never", zb);
    t("ol.events.condition.pointerMove", Ni);
    t("ol.events.condition.singleClick", Oi);
    t("ol.events.condition.doubleClick", function(a) {
        return "dblclick" == a.type;
    });
    t("ol.events.condition.noModifierKeys", Pi);
    t("ol.events.condition.platformModifierKeyOnly", function(a) {
        a = a.originalEvent;
        return !a.altKey && (we ? a.metaKey : a.ctrlKey) && !a.shiftKey;
    });
    t("ol.events.condition.shiftKeyOnly", Qi);
    t("ol.events.condition.targetNotEditable", Ri);
    t("ol.events.condition.mouseOnly", Si);
    t("ol.events.condition.primaryAction", Ti);
    Pb.prototype.type = Pb.prototype.type;
    Pb.prototype.target = Pb.prototype.target;
    Pb.prototype.preventDefault = Pb.prototype.preventDefault;
    Pb.prototype.stopPropagation = Pb.prototype.stopPropagation;
    t("ol.control.Attribution", $k);
    t("ol.control.Attribution.render", al);
    $k.prototype.getCollapsible = $k.prototype.lo;
    $k.prototype.setCollapsible = $k.prototype.oo;
    $k.prototype.setCollapsed = $k.prototype.no;
    $k.prototype.getCollapsed = $k.prototype.ko;
    t("ol.control.Control", Zk);
    Zk.prototype.getMap = Zk.prototype.g;
    Zk.prototype.setMap = Zk.prototype.setMap;
    Zk.prototype.setTarget = Zk.prototype.i;
    t("ol.control.FullScreen", Om);
    Om.prototype.setMap = Om.prototype.setMap;
    t("ol.control.MousePosition", Tm);
    t("ol.control.MousePosition.render", Um);
    Tm.prototype.getCoordinateFormat = Tm.prototype.ii;
    Tm.prototype.getProjection = Tm.prototype.Mi;
    Tm.prototype.setMap = Tm.prototype.setMap;
    Tm.prototype.setCoordinateFormat = Tm.prototype.jk;
    Tm.prototype.setProjection = Tm.prototype.Ni;
    t("ol.control.OverviewMap", fn);
    fn.prototype.setMap = fn.prototype.setMap;
    t("ol.control.OverviewMap.render", gn);
    fn.prototype.getCollapsible = fn.prototype.ro;
    fn.prototype.setCollapsible = fn.prototype.uo;
    fn.prototype.setCollapsed = fn.prototype.to;
    fn.prototype.getCollapsed = fn.prototype.qo;
    fn.prototype.getOverviewMap = fn.prototype.nm;
    t("ol.control.Rotate", cl);
    t("ol.control.Rotate.render", dl);
    t("ol.control.ScaleLine", ln);
    ln.prototype.getUnits = ln.prototype.C;
    t("ol.control.ScaleLine.render", mn);
    ln.prototype.setUnits = ln.prototype.P;
    t("ol.control.Zoom", el);
    t("ol.control.ZoomSlider", qn);
    t("ol.control.ZoomSlider.render", sn);
    t("ol.control.ZoomToExtent", vn);
    t("olgm.interaction.defaults", function(a) {
        a = void 0 !== a ? a : {};
        a.altShiftDragRotate = !1;
        a.dragPan = !1;
        a.pinchRotate = !1;
        return Uj(a).af([ new $i() ]);
    });
    t("olgm.OLGoogleMaps", Vj);
    Vj.prototype.activate = Vj.prototype.Ij;
    Vj.prototype.deactivate = Vj.prototype.Jj;
    Vj.prototype.getGoogleMapsActive = Vj.prototype.lq;
    Vj.prototype.getGoogleMapsMap = Vj.prototype.Zl;
    Vj.prototype.setWatchOptions = Vj.prototype.oq;
    Vj.prototype.toggle = Vj.prototype.pq;
    Vj.prototype.orderLayers = Vj.prototype.mq;
    Vj.prototype.refresh = Vj.prototype.nq;
    t("olgm.layer.Google", ji);
    ji.prototype.getMapTypeId = ji.prototype.l;
    lh.prototype.orderLayers = lh.prototype.Nj;
    lh.prototype.refresh = lh.prototype.Oj;
    ki.prototype.setWatchOptions = ki.prototype.Qj;
    ki.prototype.orderLayers = ki.prototype.le;
    ki.prototype.refresh = ki.prototype.Pj;
    ch.prototype.watchLayer = ch.prototype.yc;
    ch.prototype.unwatchLayer = ch.prototype.xc;
    ch.prototype.setGoogleMapsActive = ch.prototype.f;
    ch.prototype.findIndex = ch.prototype.findIndex;
    Th.prototype.activate = Th.prototype.Na;
    Th.prototype.deactivate = Th.prototype.Ia;
    Th.prototype.orderLayers = Th.prototype.Xg;
    Vh.prototype.activate = Vh.prototype.Na;
    Vh.prototype.deactivate = Vh.prototype.Ia;
    t("olgm.gm.ImageOverlay", Wf);
    Wf.prototype.onAdd = Wf.prototype.onAdd;
    Wf.prototype.draw = Wf.prototype.draw;
    Wf.prototype.setZIndex = Wf.prototype.setZIndex;
    Wf.prototype.onRemove = Wf.prototype.onRemove;
    t("olgm.gm.MapElement", Mf);
    Mf.prototype.draw = Mf.prototype.draw;
    Mf.prototype.onRemove = Mf.prototype.onRemove;
    t("olgm.gm.MapIcon", Qf);
    Qf.prototype.changed = Qf.prototype.changed;
    Qf.prototype.onAdd = Qf.prototype.onAdd;
    t("olgm.gm.MapLabel", Of);
    Of.prototype.changed = Of.prototype.changed;
    Of.prototype.onAdd = Of.prototype.onAdd;
    t("olgm.gm.PanesOverlay", Xf);
    Xf.prototype.getMapPanes = Xf.prototype.b;
    Xf.prototype.onAdd = Xf.prototype.onAdd;
    Xf.prototype.draw = Xf.prototype.draw;
    Xf.prototype.onRemove = Xf.prototype.onRemove;
    Vb.prototype.changed = Vb.prototype.changed;
    Vb.prototype.dispatchEvent = Vb.prototype.b;
    Vb.prototype.getRevision = Vb.prototype.J;
    Vb.prototype.on = Vb.prototype.G;
    Vb.prototype.once = Vb.prototype.once;
    Vb.prototype.un = Vb.prototype.I;
    L.prototype.get = L.prototype.get;
    L.prototype.getKeys = L.prototype.N;
    L.prototype.getProperties = L.prototype.K;
    L.prototype.set = L.prototype.set;
    L.prototype.setProperties = L.prototype.H;
    L.prototype.unset = L.prototype.O;
    L.prototype.changed = L.prototype.changed;
    L.prototype.dispatchEvent = L.prototype.b;
    L.prototype.getRevision = L.prototype.J;
    L.prototype.on = L.prototype.G;
    L.prototype.once = L.prototype.once;
    L.prototype.un = L.prototype.I;
    M.prototype.addControl = M.prototype.Xf;
    M.prototype.addInteraction = M.prototype.Yf;
    M.prototype.addLayer = M.prototype.Fe;
    M.prototype.addOverlay = M.prototype.Ge;
    M.prototype.forEachFeatureAtPixel = M.prototype.Xc;
    M.prototype.getFeaturesAtPixel = M.prototype.gg;
    M.prototype.forEachLayerAtPixel = M.prototype.Fg;
    M.prototype.hasFeatureAtPixel = M.prototype.xg;
    M.prototype.getEventCoordinate = M.prototype.Yd;
    M.prototype.getEventPixel = M.prototype.xd;
    M.prototype.getTarget = M.prototype.be;
    M.prototype.getTargetElement = M.prototype.Zb;
    M.prototype.getCoordinateFromPixel = M.prototype.Ta;
    M.prototype.getControls = M.prototype.Gg;
    M.prototype.getOverlays = M.prototype.qg;
    M.prototype.getOverlayById = M.prototype.pg;
    M.prototype.getInteractions = M.prototype.lg;
    M.prototype.getLayerGroup = M.prototype.lc;
    M.prototype.getLayers = M.prototype.Nc;
    M.prototype.getPixelFromCoordinate = M.prototype.Ja;
    M.prototype.getSize = M.prototype.ib;
    M.prototype.getView = M.prototype.T;
    M.prototype.getViewport = M.prototype.ug;
    M.prototype.renderSync = M.prototype.xh;
    M.prototype.render = M.prototype.render;
    M.prototype.removeControl = M.prototype.rh;
    M.prototype.removeInteraction = M.prototype.th;
    M.prototype.removeLayer = M.prototype.uh;
    M.prototype.removeOverlay = M.prototype.vh;
    M.prototype.setLayerGroup = M.prototype.Jf;
    M.prototype.setSize = M.prototype.ie;
    M.prototype.setTarget = M.prototype.Ed;
    M.prototype.setView = M.prototype.Dh;
    M.prototype.updateSize = M.prototype.Sc;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.N;
    M.prototype.getProperties = M.prototype.K;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.H;
    M.prototype.unset = M.prototype.O;
    M.prototype.changed = M.prototype.changed;
    M.prototype.dispatchEvent = M.prototype.b;
    M.prototype.getRevision = M.prototype.J;
    M.prototype.on = M.prototype.G;
    M.prototype.once = M.prototype.once;
    M.prototype.un = M.prototype.I;
    Xh.prototype.get = Xh.prototype.get;
    Xh.prototype.getKeys = Xh.prototype.N;
    Xh.prototype.getProperties = Xh.prototype.K;
    Xh.prototype.set = Xh.prototype.set;
    Xh.prototype.setProperties = Xh.prototype.H;
    Xh.prototype.unset = Xh.prototype.O;
    Xh.prototype.changed = Xh.prototype.changed;
    Xh.prototype.dispatchEvent = Xh.prototype.b;
    Xh.prototype.getRevision = Xh.prototype.J;
    Xh.prototype.on = Xh.prototype.G;
    Xh.prototype.once = Xh.prototype.once;
    Xh.prototype.un = Xh.prototype.I;
    ai.prototype.type = ai.prototype.type;
    ai.prototype.target = ai.prototype.target;
    ai.prototype.preventDefault = ai.prototype.preventDefault;
    ai.prototype.stopPropagation = ai.prototype.stopPropagation;
    wn.prototype.get = wn.prototype.get;
    wn.prototype.getKeys = wn.prototype.N;
    wn.prototype.getProperties = wn.prototype.K;
    wn.prototype.set = wn.prototype.set;
    wn.prototype.setProperties = wn.prototype.H;
    wn.prototype.unset = wn.prototype.O;
    wn.prototype.changed = wn.prototype.changed;
    wn.prototype.dispatchEvent = wn.prototype.b;
    wn.prototype.getRevision = wn.prototype.J;
    wn.prototype.on = wn.prototype.G;
    wn.prototype.once = wn.prototype.once;
    wn.prototype.un = wn.prototype.I;
    xf.prototype.get = xf.prototype.get;
    xf.prototype.getKeys = xf.prototype.N;
    xf.prototype.getProperties = xf.prototype.K;
    xf.prototype.set = xf.prototype.set;
    xf.prototype.setProperties = xf.prototype.H;
    xf.prototype.unset = xf.prototype.O;
    xf.prototype.changed = xf.prototype.changed;
    xf.prototype.dispatchEvent = xf.prototype.b;
    xf.prototype.getRevision = xf.prototype.J;
    xf.prototype.on = xf.prototype.G;
    xf.prototype.once = xf.prototype.once;
    xf.prototype.un = xf.prototype.I;
    fv.prototype.get = fv.prototype.get;
    fv.prototype.getKeys = fv.prototype.N;
    fv.prototype.getProperties = fv.prototype.K;
    fv.prototype.set = fv.prototype.set;
    fv.prototype.setProperties = fv.prototype.H;
    fv.prototype.unset = fv.prototype.O;
    fv.prototype.changed = fv.prototype.changed;
    fv.prototype.dispatchEvent = fv.prototype.b;
    fv.prototype.getRevision = fv.prototype.J;
    fv.prototype.on = fv.prototype.G;
    fv.prototype.once = fv.prototype.once;
    fv.prototype.un = fv.prototype.I;
    zh.prototype.getTileCoord = zh.prototype.i;
    zh.prototype.load = zh.prototype.load;
    X.prototype.addControl = X.prototype.Xf;
    X.prototype.addInteraction = X.prototype.Yf;
    X.prototype.addLayer = X.prototype.Fe;
    X.prototype.addOverlay = X.prototype.Ge;
    X.prototype.forEachFeatureAtPixel = X.prototype.Xc;
    X.prototype.getFeaturesAtPixel = X.prototype.gg;
    X.prototype.forEachLayerAtPixel = X.prototype.Fg;
    X.prototype.hasFeatureAtPixel = X.prototype.xg;
    X.prototype.getEventCoordinate = X.prototype.Yd;
    X.prototype.getEventPixel = X.prototype.xd;
    X.prototype.getTarget = X.prototype.be;
    X.prototype.getTargetElement = X.prototype.Zb;
    X.prototype.getCoordinateFromPixel = X.prototype.Ta;
    X.prototype.getControls = X.prototype.Gg;
    X.prototype.getOverlays = X.prototype.qg;
    X.prototype.getOverlayById = X.prototype.pg;
    X.prototype.getInteractions = X.prototype.lg;
    X.prototype.getLayerGroup = X.prototype.lc;
    X.prototype.getLayers = X.prototype.Nc;
    X.prototype.getPixelFromCoordinate = X.prototype.Ja;
    X.prototype.getSize = X.prototype.ib;
    X.prototype.getView = X.prototype.T;
    X.prototype.getViewport = X.prototype.ug;
    X.prototype.renderSync = X.prototype.xh;
    X.prototype.render = X.prototype.render;
    X.prototype.removeControl = X.prototype.rh;
    X.prototype.removeInteraction = X.prototype.th;
    X.prototype.removeLayer = X.prototype.uh;
    X.prototype.removeOverlay = X.prototype.vh;
    X.prototype.setLayerGroup = X.prototype.Jf;
    X.prototype.setSize = X.prototype.ie;
    X.prototype.setTarget = X.prototype.Ed;
    X.prototype.setView = X.prototype.Dh;
    X.prototype.updateSize = X.prototype.Sc;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.N;
    X.prototype.getProperties = X.prototype.K;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.H;
    X.prototype.unset = X.prototype.O;
    X.prototype.changed = X.prototype.changed;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.J;
    X.prototype.on = X.prototype.G;
    X.prototype.once = X.prototype.once;
    X.prototype.un = X.prototype.I;
    Ui.prototype.type = Ui.prototype.type;
    Ui.prototype.target = Ui.prototype.target;
    Ui.prototype.preventDefault = Ui.prototype.preventDefault;
    Ui.prototype.stopPropagation = Ui.prototype.stopPropagation;
    Vi.prototype.map = Vi.prototype.map;
    Vi.prototype.frameState = Vi.prototype.frameState;
    Vi.prototype.type = Vi.prototype.type;
    Vi.prototype.target = Vi.prototype.target;
    Vi.prototype.preventDefault = Vi.prototype.preventDefault;
    Vi.prototype.stopPropagation = Vi.prototype.stopPropagation;
    Wi.prototype.originalEvent = Wi.prototype.originalEvent;
    Wi.prototype.pixel = Wi.prototype.pixel;
    Wi.prototype.coordinate = Wi.prototype.coordinate;
    Wi.prototype.dragging = Wi.prototype.dragging;
    Wi.prototype.preventDefault = Wi.prototype.preventDefault;
    Wi.prototype.stopPropagation = Wi.prototype.stopPropagation;
    Wi.prototype.map = Wi.prototype.map;
    Wi.prototype.frameState = Wi.prototype.frameState;
    Wi.prototype.type = Wi.prototype.type;
    Wi.prototype.target = Wi.prototype.target;
    $b.prototype.type = $b.prototype.type;
    $b.prototype.target = $b.prototype.target;
    $b.prototype.preventDefault = $b.prototype.preventDefault;
    $b.prototype.stopPropagation = $b.prototype.stopPropagation;
    Ym.prototype.get = Ym.prototype.get;
    Ym.prototype.getKeys = Ym.prototype.N;
    Ym.prototype.getProperties = Ym.prototype.K;
    Ym.prototype.set = Ym.prototype.set;
    Ym.prototype.setProperties = Ym.prototype.H;
    Ym.prototype.unset = Ym.prototype.O;
    Ym.prototype.changed = Ym.prototype.changed;
    Ym.prototype.dispatchEvent = Ym.prototype.b;
    Ym.prototype.getRevision = Ym.prototype.J;
    Ym.prototype.on = Ym.prototype.G;
    Ym.prototype.once = Ym.prototype.once;
    Ym.prototype.un = Ym.prototype.I;
    mA.prototype.getTileCoord = mA.prototype.i;
    mA.prototype.load = mA.prototype.load;
    oA.prototype.getTileCoord = oA.prototype.i;
    oA.prototype.load = oA.prototype.load;
    K.prototype.get = K.prototype.get;
    K.prototype.getKeys = K.prototype.N;
    K.prototype.getProperties = K.prototype.K;
    K.prototype.set = K.prototype.set;
    K.prototype.setProperties = K.prototype.H;
    K.prototype.unset = K.prototype.O;
    K.prototype.changed = K.prototype.changed;
    K.prototype.dispatchEvent = K.prototype.b;
    K.prototype.getRevision = K.prototype.J;
    K.prototype.on = K.prototype.G;
    K.prototype.once = K.prototype.once;
    K.prototype.un = K.prototype.I;
    rA.prototype.forEachTileCoord = rA.prototype.fg;
    rA.prototype.getMaxZoom = rA.prototype.Fj;
    rA.prototype.getMinZoom = rA.prototype.Gj;
    rA.prototype.getOrigin = rA.prototype.rc;
    rA.prototype.getResolution = rA.prototype.Va;
    rA.prototype.getResolutions = rA.prototype.Hj;
    rA.prototype.getTileCoordExtent = rA.prototype.La;
    rA.prototype.getTileCoordForCoordAndResolution = rA.prototype.Te;
    rA.prototype.getTileCoordForCoordAndZ = rA.prototype.tg;
    rA.prototype.getTileSize = rA.prototype.Ua;
    rA.prototype.getZForResolution = rA.prototype.Kc;
    ff.prototype.getOpacity = ff.prototype.rf;
    ff.prototype.getRotateWithView = ff.prototype.sf;
    ff.prototype.getRotation = ff.prototype.tf;
    ff.prototype.getScale = ff.prototype.uf;
    ff.prototype.getSnapToPixel = ff.prototype.Se;
    ff.prototype.setOpacity = ff.prototype.Hd;
    ff.prototype.setRotation = ff.prototype.vf;
    ff.prototype.setScale = ff.prototype.Id;
    hf.prototype.clone = hf.prototype.clone;
    hf.prototype.getAngle = hf.prototype.Bj;
    hf.prototype.getFill = hf.prototype.wa;
    hf.prototype.getPoints = hf.prototype.Cj;
    hf.prototype.getRadius = hf.prototype.Dj;
    hf.prototype.getRadius2 = hf.prototype.si;
    hf.prototype.getStroke = hf.prototype.xa;
    hf.prototype.getOpacity = hf.prototype.rf;
    hf.prototype.getRotateWithView = hf.prototype.sf;
    hf.prototype.getRotation = hf.prototype.tf;
    hf.prototype.getScale = hf.prototype.uf;
    hf.prototype.getSnapToPixel = hf.prototype.Se;
    hf.prototype.setOpacity = hf.prototype.Hd;
    hf.prototype.setRotation = hf.prototype.vf;
    hf.prototype.setScale = hf.prototype.Id;
    of.prototype.getOpacity = of.prototype.rf;
    of.prototype.getRotateWithView = of.prototype.sf;
    of.prototype.getRotation = of.prototype.tf;
    of.prototype.getScale = of.prototype.uf;
    of.prototype.getSnapToPixel = of.prototype.Se;
    of.prototype.setOpacity = of.prototype.Hd;
    of.prototype.setRotation = of.prototype.vf;
    of.prototype.setScale = of.prototype.Id;
    Mg.prototype.get = Mg.prototype.get;
    Mg.prototype.getKeys = Mg.prototype.N;
    Mg.prototype.getProperties = Mg.prototype.K;
    Mg.prototype.set = Mg.prototype.set;
    Mg.prototype.setProperties = Mg.prototype.H;
    Mg.prototype.unset = Mg.prototype.O;
    Mg.prototype.changed = Mg.prototype.changed;
    Mg.prototype.dispatchEvent = Mg.prototype.b;
    Mg.prototype.getRevision = Mg.prototype.J;
    Mg.prototype.on = Mg.prototype.G;
    Mg.prototype.once = Mg.prototype.once;
    Mg.prototype.un = Mg.prototype.I;
    Kh.prototype.getAttributions = Kh.prototype.za;
    Kh.prototype.getLogo = Kh.prototype.Aa;
    Kh.prototype.getProjection = Kh.prototype.Ca;
    Kh.prototype.getState = Kh.prototype.getState;
    Kh.prototype.refresh = Kh.prototype.oa;
    Kh.prototype.setAttributions = Kh.prototype.ta;
    Kh.prototype.get = Kh.prototype.get;
    Kh.prototype.getKeys = Kh.prototype.N;
    Kh.prototype.getProperties = Kh.prototype.K;
    Kh.prototype.set = Kh.prototype.set;
    Kh.prototype.setProperties = Kh.prototype.H;
    Kh.prototype.unset = Kh.prototype.O;
    Kh.prototype.changed = Kh.prototype.changed;
    Kh.prototype.dispatchEvent = Kh.prototype.b;
    Kh.prototype.getRevision = Kh.prototype.J;
    Kh.prototype.on = Kh.prototype.G;
    Kh.prototype.once = Kh.prototype.once;
    Kh.prototype.un = Kh.prototype.I;
    Ph.prototype.getTileGrid = Ph.prototype.mb;
    Ph.prototype.refresh = Ph.prototype.oa;
    Ph.prototype.getAttributions = Ph.prototype.za;
    Ph.prototype.getLogo = Ph.prototype.Aa;
    Ph.prototype.getProjection = Ph.prototype.Ca;
    Ph.prototype.getState = Ph.prototype.getState;
    Ph.prototype.setAttributions = Ph.prototype.ta;
    Ph.prototype.get = Ph.prototype.get;
    Ph.prototype.getKeys = Ph.prototype.N;
    Ph.prototype.getProperties = Ph.prototype.K;
    Ph.prototype.set = Ph.prototype.set;
    Ph.prototype.setProperties = Ph.prototype.H;
    Ph.prototype.unset = Ph.prototype.O;
    Ph.prototype.changed = Ph.prototype.changed;
    Ph.prototype.dispatchEvent = Ph.prototype.b;
    Ph.prototype.getRevision = Ph.prototype.J;
    Ph.prototype.on = Ph.prototype.G;
    Ph.prototype.once = Ph.prototype.once;
    Ph.prototype.un = Ph.prototype.I;
    J.prototype.getTileLoadFunction = J.prototype.Ab;
    J.prototype.getTileUrlFunction = J.prototype.Bb;
    J.prototype.getUrls = J.prototype.Cb;
    J.prototype.setTileLoadFunction = J.prototype.Gb;
    J.prototype.setTileUrlFunction = J.prototype.kb;
    J.prototype.setUrl = J.prototype.sb;
    J.prototype.setUrls = J.prototype.vb;
    J.prototype.getTileGrid = J.prototype.mb;
    J.prototype.refresh = J.prototype.oa;
    J.prototype.getAttributions = J.prototype.za;
    J.prototype.getLogo = J.prototype.Aa;
    J.prototype.getProjection = J.prototype.Ca;
    J.prototype.getState = J.prototype.getState;
    J.prototype.setAttributions = J.prototype.ta;
    J.prototype.get = J.prototype.get;
    J.prototype.getKeys = J.prototype.N;
    J.prototype.getProperties = J.prototype.K;
    J.prototype.set = J.prototype.set;
    J.prototype.setProperties = J.prototype.H;
    J.prototype.unset = J.prototype.O;
    J.prototype.changed = J.prototype.changed;
    J.prototype.dispatchEvent = J.prototype.b;
    J.prototype.getRevision = J.prototype.J;
    J.prototype.on = J.prototype.G;
    J.prototype.once = J.prototype.once;
    J.prototype.un = J.prototype.I;
    Bz.prototype.setRenderReprojectionEdges = Bz.prototype.Sb;
    Bz.prototype.setTileGridForProjection = Bz.prototype.Tb;
    Bz.prototype.getTileLoadFunction = Bz.prototype.Ab;
    Bz.prototype.getTileUrlFunction = Bz.prototype.Bb;
    Bz.prototype.getUrls = Bz.prototype.Cb;
    Bz.prototype.setTileLoadFunction = Bz.prototype.Gb;
    Bz.prototype.setTileUrlFunction = Bz.prototype.kb;
    Bz.prototype.setUrl = Bz.prototype.sb;
    Bz.prototype.setUrls = Bz.prototype.vb;
    Bz.prototype.getTileGrid = Bz.prototype.mb;
    Bz.prototype.refresh = Bz.prototype.oa;
    Bz.prototype.getAttributions = Bz.prototype.za;
    Bz.prototype.getLogo = Bz.prototype.Aa;
    Bz.prototype.getProjection = Bz.prototype.Ca;
    Bz.prototype.getState = Bz.prototype.getState;
    Bz.prototype.setAttributions = Bz.prototype.ta;
    Bz.prototype.get = Bz.prototype.get;
    Bz.prototype.getKeys = Bz.prototype.N;
    Bz.prototype.getProperties = Bz.prototype.K;
    Bz.prototype.set = Bz.prototype.set;
    Bz.prototype.setProperties = Bz.prototype.H;
    Bz.prototype.unset = Bz.prototype.O;
    Bz.prototype.changed = Bz.prototype.changed;
    Bz.prototype.dispatchEvent = Bz.prototype.b;
    Bz.prototype.getRevision = Bz.prototype.J;
    Bz.prototype.on = Bz.prototype.G;
    Bz.prototype.once = Bz.prototype.once;
    Bz.prototype.un = Bz.prototype.I;
    Cz.prototype.setRenderReprojectionEdges = Cz.prototype.Sb;
    Cz.prototype.setTileGridForProjection = Cz.prototype.Tb;
    Cz.prototype.getTileLoadFunction = Cz.prototype.Ab;
    Cz.prototype.getTileUrlFunction = Cz.prototype.Bb;
    Cz.prototype.getUrls = Cz.prototype.Cb;
    Cz.prototype.setTileLoadFunction = Cz.prototype.Gb;
    Cz.prototype.setTileUrlFunction = Cz.prototype.kb;
    Cz.prototype.setUrl = Cz.prototype.sb;
    Cz.prototype.setUrls = Cz.prototype.vb;
    Cz.prototype.getTileGrid = Cz.prototype.mb;
    Cz.prototype.refresh = Cz.prototype.oa;
    Cz.prototype.getAttributions = Cz.prototype.za;
    Cz.prototype.getLogo = Cz.prototype.Aa;
    Cz.prototype.getProjection = Cz.prototype.Ca;
    Cz.prototype.getState = Cz.prototype.getState;
    Cz.prototype.setAttributions = Cz.prototype.ta;
    Cz.prototype.get = Cz.prototype.get;
    Cz.prototype.getKeys = Cz.prototype.N;
    Cz.prototype.getProperties = Cz.prototype.K;
    Cz.prototype.set = Cz.prototype.set;
    Cz.prototype.setProperties = Cz.prototype.H;
    Cz.prototype.unset = Cz.prototype.O;
    Cz.prototype.changed = Cz.prototype.changed;
    Cz.prototype.dispatchEvent = Cz.prototype.b;
    Cz.prototype.getRevision = Cz.prototype.J;
    Cz.prototype.on = Cz.prototype.G;
    Cz.prototype.once = Cz.prototype.once;
    Cz.prototype.un = Cz.prototype.I;
    Dz.prototype.setRenderReprojectionEdges = Dz.prototype.Sb;
    Dz.prototype.setTileGridForProjection = Dz.prototype.Tb;
    Dz.prototype.getTileLoadFunction = Dz.prototype.Ab;
    Dz.prototype.getTileUrlFunction = Dz.prototype.Bb;
    Dz.prototype.getUrls = Dz.prototype.Cb;
    Dz.prototype.setTileLoadFunction = Dz.prototype.Gb;
    Dz.prototype.setTileUrlFunction = Dz.prototype.kb;
    Dz.prototype.setUrl = Dz.prototype.sb;
    Dz.prototype.setUrls = Dz.prototype.vb;
    Dz.prototype.getTileGrid = Dz.prototype.mb;
    Dz.prototype.refresh = Dz.prototype.oa;
    Dz.prototype.getAttributions = Dz.prototype.za;
    Dz.prototype.getLogo = Dz.prototype.Aa;
    Dz.prototype.getProjection = Dz.prototype.Ca;
    Dz.prototype.getState = Dz.prototype.getState;
    Dz.prototype.setAttributions = Dz.prototype.ta;
    Dz.prototype.get = Dz.prototype.get;
    Dz.prototype.getKeys = Dz.prototype.N;
    Dz.prototype.getProperties = Dz.prototype.K;
    Dz.prototype.set = Dz.prototype.set;
    Dz.prototype.setProperties = Dz.prototype.H;
    Dz.prototype.unset = Dz.prototype.O;
    Dz.prototype.changed = Dz.prototype.changed;
    Dz.prototype.dispatchEvent = Dz.prototype.b;
    Dz.prototype.getRevision = Dz.prototype.J;
    Dz.prototype.on = Dz.prototype.G;
    Dz.prototype.once = Dz.prototype.once;
    Dz.prototype.un = Dz.prototype.I;
    U.prototype.getAttributions = U.prototype.za;
    U.prototype.getLogo = U.prototype.Aa;
    U.prototype.getProjection = U.prototype.Ca;
    U.prototype.getState = U.prototype.getState;
    U.prototype.refresh = U.prototype.oa;
    U.prototype.setAttributions = U.prototype.ta;
    U.prototype.get = U.prototype.get;
    U.prototype.getKeys = U.prototype.N;
    U.prototype.getProperties = U.prototype.K;
    U.prototype.set = U.prototype.set;
    U.prototype.setProperties = U.prototype.H;
    U.prototype.unset = U.prototype.O;
    U.prototype.changed = U.prototype.changed;
    U.prototype.dispatchEvent = U.prototype.b;
    U.prototype.getRevision = U.prototype.J;
    U.prototype.on = U.prototype.G;
    U.prototype.once = U.prototype.once;
    U.prototype.un = U.prototype.I;
    Y.prototype.addFeature = Y.prototype.Hb;
    Y.prototype.addFeatures = Y.prototype.Uc;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.di;
    Y.prototype.forEachFeatureInExtent = Y.prototype.hc;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.ei;
    Y.prototype.getFeaturesCollection = Y.prototype.ki;
    Y.prototype.getFeatures = Y.prototype.fd;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.ji;
    Y.prototype.getFeaturesInExtent = Y.prototype.hg;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.gi;
    Y.prototype.getExtent = Y.prototype.A;
    Y.prototype.getFeatureById = Y.prototype.xj;
    Y.prototype.getFormat = Y.prototype.yj;
    Y.prototype.getUrl = Y.prototype.getUrl;
    Y.prototype.removeLoadedExtent = Y.prototype.fk;
    Y.prototype.removeFeature = Y.prototype.Lb;
    Y.prototype.setLoader = Y.prototype.Aj;
    Y.prototype.getAttributions = Y.prototype.za;
    Y.prototype.getLogo = Y.prototype.Aa;
    Y.prototype.getProjection = Y.prototype.Ca;
    Y.prototype.getState = Y.prototype.getState;
    Y.prototype.refresh = Y.prototype.oa;
    Y.prototype.setAttributions = Y.prototype.ta;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.N;
    Y.prototype.getProperties = Y.prototype.K;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.H;
    Y.prototype.unset = Y.prototype.O;
    Y.prototype.changed = Y.prototype.changed;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.J;
    Y.prototype.on = Y.prototype.G;
    Y.prototype.once = Y.prototype.once;
    Y.prototype.un = Y.prototype.I;
    Pg.prototype.getAttributions = Pg.prototype.za;
    Pg.prototype.getLogo = Pg.prototype.Aa;
    Pg.prototype.getProjection = Pg.prototype.Ca;
    Pg.prototype.getState = Pg.prototype.getState;
    Pg.prototype.refresh = Pg.prototype.oa;
    Pg.prototype.setAttributions = Pg.prototype.ta;
    Pg.prototype.get = Pg.prototype.get;
    Pg.prototype.getKeys = Pg.prototype.N;
    Pg.prototype.getProperties = Pg.prototype.K;
    Pg.prototype.set = Pg.prototype.set;
    Pg.prototype.setProperties = Pg.prototype.H;
    Pg.prototype.unset = Pg.prototype.O;
    Pg.prototype.changed = Pg.prototype.changed;
    Pg.prototype.dispatchEvent = Pg.prototype.b;
    Pg.prototype.getRevision = Pg.prototype.J;
    Pg.prototype.on = Pg.prototype.G;
    Pg.prototype.once = Pg.prototype.once;
    Pg.prototype.un = Pg.prototype.I;
    Rg.prototype.type = Rg.prototype.type;
    Rg.prototype.target = Rg.prototype.target;
    Rg.prototype.preventDefault = Rg.prototype.preventDefault;
    Rg.prototype.stopPropagation = Rg.prototype.stopPropagation;
    Iz.prototype.getAttributions = Iz.prototype.za;
    Iz.prototype.getLogo = Iz.prototype.Aa;
    Iz.prototype.getProjection = Iz.prototype.Ca;
    Iz.prototype.getState = Iz.prototype.getState;
    Iz.prototype.refresh = Iz.prototype.oa;
    Iz.prototype.setAttributions = Iz.prototype.ta;
    Iz.prototype.get = Iz.prototype.get;
    Iz.prototype.getKeys = Iz.prototype.N;
    Iz.prototype.getProperties = Iz.prototype.K;
    Iz.prototype.set = Iz.prototype.set;
    Iz.prototype.setProperties = Iz.prototype.H;
    Iz.prototype.unset = Iz.prototype.O;
    Iz.prototype.changed = Iz.prototype.changed;
    Iz.prototype.dispatchEvent = Iz.prototype.b;
    Iz.prototype.getRevision = Iz.prototype.J;
    Iz.prototype.on = Iz.prototype.G;
    Iz.prototype.once = Iz.prototype.once;
    Iz.prototype.un = Iz.prototype.I;
    Jz.prototype.getAttributions = Jz.prototype.za;
    Jz.prototype.getLogo = Jz.prototype.Aa;
    Jz.prototype.getProjection = Jz.prototype.Ca;
    Jz.prototype.getState = Jz.prototype.getState;
    Jz.prototype.refresh = Jz.prototype.oa;
    Jz.prototype.setAttributions = Jz.prototype.ta;
    Jz.prototype.get = Jz.prototype.get;
    Jz.prototype.getKeys = Jz.prototype.N;
    Jz.prototype.getProperties = Jz.prototype.K;
    Jz.prototype.set = Jz.prototype.set;
    Jz.prototype.setProperties = Jz.prototype.H;
    Jz.prototype.unset = Jz.prototype.O;
    Jz.prototype.changed = Jz.prototype.changed;
    Jz.prototype.dispatchEvent = Jz.prototype.b;
    Jz.prototype.getRevision = Jz.prototype.J;
    Jz.prototype.on = Jz.prototype.G;
    Jz.prototype.once = Jz.prototype.once;
    Jz.prototype.un = Jz.prototype.I;
    Kz.prototype.getAttributions = Kz.prototype.za;
    Kz.prototype.getLogo = Kz.prototype.Aa;
    Kz.prototype.getProjection = Kz.prototype.Ca;
    Kz.prototype.getState = Kz.prototype.getState;
    Kz.prototype.refresh = Kz.prototype.oa;
    Kz.prototype.setAttributions = Kz.prototype.ta;
    Kz.prototype.get = Kz.prototype.get;
    Kz.prototype.getKeys = Kz.prototype.N;
    Kz.prototype.getProperties = Kz.prototype.K;
    Kz.prototype.set = Kz.prototype.set;
    Kz.prototype.setProperties = Kz.prototype.H;
    Kz.prototype.unset = Kz.prototype.O;
    Kz.prototype.changed = Kz.prototype.changed;
    Kz.prototype.dispatchEvent = Kz.prototype.b;
    Kz.prototype.getRevision = Kz.prototype.J;
    Kz.prototype.on = Kz.prototype.G;
    Kz.prototype.once = Kz.prototype.once;
    Kz.prototype.un = Kz.prototype.I;
    Lz.prototype.getAttributions = Lz.prototype.za;
    Lz.prototype.getLogo = Lz.prototype.Aa;
    Lz.prototype.getProjection = Lz.prototype.Ca;
    Lz.prototype.getState = Lz.prototype.getState;
    Lz.prototype.refresh = Lz.prototype.oa;
    Lz.prototype.setAttributions = Lz.prototype.ta;
    Lz.prototype.get = Lz.prototype.get;
    Lz.prototype.getKeys = Lz.prototype.N;
    Lz.prototype.getProperties = Lz.prototype.K;
    Lz.prototype.set = Lz.prototype.set;
    Lz.prototype.setProperties = Lz.prototype.H;
    Lz.prototype.unset = Lz.prototype.O;
    Lz.prototype.changed = Lz.prototype.changed;
    Lz.prototype.dispatchEvent = Lz.prototype.b;
    Lz.prototype.getRevision = Lz.prototype.J;
    Lz.prototype.on = Lz.prototype.G;
    Lz.prototype.once = Lz.prototype.once;
    Lz.prototype.un = Lz.prototype.I;
    Mz.prototype.getAttributions = Mz.prototype.za;
    Mz.prototype.getLogo = Mz.prototype.Aa;
    Mz.prototype.getProjection = Mz.prototype.Ca;
    Mz.prototype.getState = Mz.prototype.getState;
    Mz.prototype.refresh = Mz.prototype.oa;
    Mz.prototype.setAttributions = Mz.prototype.ta;
    Mz.prototype.get = Mz.prototype.get;
    Mz.prototype.getKeys = Mz.prototype.N;
    Mz.prototype.getProperties = Mz.prototype.K;
    Mz.prototype.set = Mz.prototype.set;
    Mz.prototype.setProperties = Mz.prototype.H;
    Mz.prototype.unset = Mz.prototype.O;
    Mz.prototype.changed = Mz.prototype.changed;
    Mz.prototype.dispatchEvent = Mz.prototype.b;
    Mz.prototype.getRevision = Mz.prototype.J;
    Mz.prototype.on = Mz.prototype.G;
    Mz.prototype.once = Mz.prototype.once;
    Mz.prototype.un = Mz.prototype.I;
    Zg.prototype.getAttributions = Zg.prototype.za;
    Zg.prototype.getLogo = Zg.prototype.Aa;
    Zg.prototype.getProjection = Zg.prototype.Ca;
    Zg.prototype.getState = Zg.prototype.getState;
    Zg.prototype.refresh = Zg.prototype.oa;
    Zg.prototype.setAttributions = Zg.prototype.ta;
    Zg.prototype.get = Zg.prototype.get;
    Zg.prototype.getKeys = Zg.prototype.N;
    Zg.prototype.getProperties = Zg.prototype.K;
    Zg.prototype.set = Zg.prototype.set;
    Zg.prototype.setProperties = Zg.prototype.H;
    Zg.prototype.unset = Zg.prototype.O;
    Zg.prototype.changed = Zg.prototype.changed;
    Zg.prototype.dispatchEvent = Zg.prototype.b;
    Zg.prototype.getRevision = Zg.prototype.J;
    Zg.prototype.on = Zg.prototype.G;
    Zg.prototype.once = Zg.prototype.once;
    Zg.prototype.un = Zg.prototype.I;
    Oz.prototype.setRenderReprojectionEdges = Oz.prototype.Sb;
    Oz.prototype.setTileGridForProjection = Oz.prototype.Tb;
    Oz.prototype.getTileLoadFunction = Oz.prototype.Ab;
    Oz.prototype.getTileUrlFunction = Oz.prototype.Bb;
    Oz.prototype.getUrls = Oz.prototype.Cb;
    Oz.prototype.setTileLoadFunction = Oz.prototype.Gb;
    Oz.prototype.setTileUrlFunction = Oz.prototype.kb;
    Oz.prototype.setUrl = Oz.prototype.sb;
    Oz.prototype.setUrls = Oz.prototype.vb;
    Oz.prototype.getTileGrid = Oz.prototype.mb;
    Oz.prototype.refresh = Oz.prototype.oa;
    Oz.prototype.getAttributions = Oz.prototype.za;
    Oz.prototype.getLogo = Oz.prototype.Aa;
    Oz.prototype.getProjection = Oz.prototype.Ca;
    Oz.prototype.getState = Oz.prototype.getState;
    Oz.prototype.setAttributions = Oz.prototype.ta;
    Oz.prototype.get = Oz.prototype.get;
    Oz.prototype.getKeys = Oz.prototype.N;
    Oz.prototype.getProperties = Oz.prototype.K;
    Oz.prototype.set = Oz.prototype.set;
    Oz.prototype.setProperties = Oz.prototype.H;
    Oz.prototype.unset = Oz.prototype.O;
    Oz.prototype.changed = Oz.prototype.changed;
    Oz.prototype.dispatchEvent = Oz.prototype.b;
    Oz.prototype.getRevision = Oz.prototype.J;
    Oz.prototype.on = Oz.prototype.G;
    Oz.prototype.once = Oz.prototype.once;
    Oz.prototype.un = Oz.prototype.I;
    Pz.prototype.getAttributions = Pz.prototype.za;
    Pz.prototype.getLogo = Pz.prototype.Aa;
    Pz.prototype.getProjection = Pz.prototype.Ca;
    Pz.prototype.getState = Pz.prototype.getState;
    Pz.prototype.refresh = Pz.prototype.oa;
    Pz.prototype.setAttributions = Pz.prototype.ta;
    Pz.prototype.get = Pz.prototype.get;
    Pz.prototype.getKeys = Pz.prototype.N;
    Pz.prototype.getProperties = Pz.prototype.K;
    Pz.prototype.set = Pz.prototype.set;
    Pz.prototype.setProperties = Pz.prototype.H;
    Pz.prototype.unset = Pz.prototype.O;
    Pz.prototype.changed = Pz.prototype.changed;
    Pz.prototype.dispatchEvent = Pz.prototype.b;
    Pz.prototype.getRevision = Pz.prototype.J;
    Pz.prototype.on = Pz.prototype.G;
    Pz.prototype.once = Pz.prototype.once;
    Pz.prototype.un = Pz.prototype.I;
    Tz.prototype.type = Tz.prototype.type;
    Tz.prototype.target = Tz.prototype.target;
    Tz.prototype.preventDefault = Tz.prototype.preventDefault;
    Tz.prototype.stopPropagation = Tz.prototype.stopPropagation;
    Wz.prototype.setRenderReprojectionEdges = Wz.prototype.Sb;
    Wz.prototype.setTileGridForProjection = Wz.prototype.Tb;
    Wz.prototype.getTileLoadFunction = Wz.prototype.Ab;
    Wz.prototype.getTileUrlFunction = Wz.prototype.Bb;
    Wz.prototype.getUrls = Wz.prototype.Cb;
    Wz.prototype.setTileLoadFunction = Wz.prototype.Gb;
    Wz.prototype.setTileUrlFunction = Wz.prototype.kb;
    Wz.prototype.setUrl = Wz.prototype.sb;
    Wz.prototype.setUrls = Wz.prototype.vb;
    Wz.prototype.getTileGrid = Wz.prototype.mb;
    Wz.prototype.refresh = Wz.prototype.oa;
    Wz.prototype.getAttributions = Wz.prototype.za;
    Wz.prototype.getLogo = Wz.prototype.Aa;
    Wz.prototype.getProjection = Wz.prototype.Ca;
    Wz.prototype.getState = Wz.prototype.getState;
    Wz.prototype.setAttributions = Wz.prototype.ta;
    Wz.prototype.get = Wz.prototype.get;
    Wz.prototype.getKeys = Wz.prototype.N;
    Wz.prototype.getProperties = Wz.prototype.K;
    Wz.prototype.set = Wz.prototype.set;
    Wz.prototype.setProperties = Wz.prototype.H;
    Wz.prototype.unset = Wz.prototype.O;
    Wz.prototype.changed = Wz.prototype.changed;
    Wz.prototype.dispatchEvent = Wz.prototype.b;
    Wz.prototype.getRevision = Wz.prototype.J;
    Wz.prototype.on = Wz.prototype.G;
    Wz.prototype.once = Wz.prototype.once;
    Wz.prototype.un = Wz.prototype.I;
    Oh.prototype.type = Oh.prototype.type;
    Oh.prototype.target = Oh.prototype.target;
    Oh.prototype.preventDefault = Oh.prototype.preventDefault;
    Oh.prototype.stopPropagation = Oh.prototype.stopPropagation;
    $z.prototype.setRenderReprojectionEdges = $z.prototype.Sb;
    $z.prototype.setTileGridForProjection = $z.prototype.Tb;
    $z.prototype.getTileLoadFunction = $z.prototype.Ab;
    $z.prototype.getTileUrlFunction = $z.prototype.Bb;
    $z.prototype.getUrls = $z.prototype.Cb;
    $z.prototype.setTileLoadFunction = $z.prototype.Gb;
    $z.prototype.setTileUrlFunction = $z.prototype.kb;
    $z.prototype.setUrl = $z.prototype.sb;
    $z.prototype.setUrls = $z.prototype.vb;
    $z.prototype.getTileGrid = $z.prototype.mb;
    $z.prototype.refresh = $z.prototype.oa;
    $z.prototype.getAttributions = $z.prototype.za;
    $z.prototype.getLogo = $z.prototype.Aa;
    $z.prototype.getProjection = $z.prototype.Ca;
    $z.prototype.getState = $z.prototype.getState;
    $z.prototype.setAttributions = $z.prototype.ta;
    $z.prototype.get = $z.prototype.get;
    $z.prototype.getKeys = $z.prototype.N;
    $z.prototype.getProperties = $z.prototype.K;
    $z.prototype.set = $z.prototype.set;
    $z.prototype.setProperties = $z.prototype.H;
    $z.prototype.unset = $z.prototype.O;
    $z.prototype.changed = $z.prototype.changed;
    $z.prototype.dispatchEvent = $z.prototype.b;
    $z.prototype.getRevision = $z.prototype.J;
    $z.prototype.on = $z.prototype.G;
    $z.prototype.once = $z.prototype.once;
    $z.prototype.un = $z.prototype.I;
    bA.prototype.getTileGrid = bA.prototype.mb;
    bA.prototype.refresh = bA.prototype.oa;
    bA.prototype.getAttributions = bA.prototype.za;
    bA.prototype.getLogo = bA.prototype.Aa;
    bA.prototype.getProjection = bA.prototype.Ca;
    bA.prototype.getState = bA.prototype.getState;
    bA.prototype.setAttributions = bA.prototype.ta;
    bA.prototype.get = bA.prototype.get;
    bA.prototype.getKeys = bA.prototype.N;
    bA.prototype.getProperties = bA.prototype.K;
    bA.prototype.set = bA.prototype.set;
    bA.prototype.setProperties = bA.prototype.H;
    bA.prototype.unset = bA.prototype.O;
    bA.prototype.changed = bA.prototype.changed;
    bA.prototype.dispatchEvent = bA.prototype.b;
    bA.prototype.getRevision = bA.prototype.J;
    bA.prototype.on = bA.prototype.G;
    bA.prototype.once = bA.prototype.once;
    bA.prototype.un = bA.prototype.I;
    dA.prototype.setRenderReprojectionEdges = dA.prototype.Sb;
    dA.prototype.setTileGridForProjection = dA.prototype.Tb;
    dA.prototype.getTileLoadFunction = dA.prototype.Ab;
    dA.prototype.getTileUrlFunction = dA.prototype.Bb;
    dA.prototype.getUrls = dA.prototype.Cb;
    dA.prototype.setTileLoadFunction = dA.prototype.Gb;
    dA.prototype.setTileUrlFunction = dA.prototype.kb;
    dA.prototype.setUrl = dA.prototype.sb;
    dA.prototype.setUrls = dA.prototype.vb;
    dA.prototype.getTileGrid = dA.prototype.mb;
    dA.prototype.refresh = dA.prototype.oa;
    dA.prototype.getAttributions = dA.prototype.za;
    dA.prototype.getLogo = dA.prototype.Aa;
    dA.prototype.getProjection = dA.prototype.Ca;
    dA.prototype.getState = dA.prototype.getState;
    dA.prototype.setAttributions = dA.prototype.ta;
    dA.prototype.get = dA.prototype.get;
    dA.prototype.getKeys = dA.prototype.N;
    dA.prototype.getProperties = dA.prototype.K;
    dA.prototype.set = dA.prototype.set;
    dA.prototype.setProperties = dA.prototype.H;
    dA.prototype.unset = dA.prototype.O;
    dA.prototype.changed = dA.prototype.changed;
    dA.prototype.dispatchEvent = dA.prototype.b;
    dA.prototype.getRevision = dA.prototype.J;
    dA.prototype.on = dA.prototype.G;
    dA.prototype.once = dA.prototype.once;
    dA.prototype.un = dA.prototype.I;
    eA.prototype.getTileGrid = eA.prototype.mb;
    eA.prototype.refresh = eA.prototype.oa;
    eA.prototype.getAttributions = eA.prototype.za;
    eA.prototype.getLogo = eA.prototype.Aa;
    eA.prototype.getProjection = eA.prototype.Ca;
    eA.prototype.getState = eA.prototype.getState;
    eA.prototype.setAttributions = eA.prototype.ta;
    eA.prototype.get = eA.prototype.get;
    eA.prototype.getKeys = eA.prototype.N;
    eA.prototype.getProperties = eA.prototype.K;
    eA.prototype.set = eA.prototype.set;
    eA.prototype.setProperties = eA.prototype.H;
    eA.prototype.unset = eA.prototype.O;
    eA.prototype.changed = eA.prototype.changed;
    eA.prototype.dispatchEvent = eA.prototype.b;
    eA.prototype.getRevision = eA.prototype.J;
    eA.prototype.on = eA.prototype.G;
    eA.prototype.once = eA.prototype.once;
    eA.prototype.un = eA.prototype.I;
    iA.prototype.setRenderReprojectionEdges = iA.prototype.Sb;
    iA.prototype.setTileGridForProjection = iA.prototype.Tb;
    iA.prototype.getTileLoadFunction = iA.prototype.Ab;
    iA.prototype.getTileUrlFunction = iA.prototype.Bb;
    iA.prototype.getUrls = iA.prototype.Cb;
    iA.prototype.setTileLoadFunction = iA.prototype.Gb;
    iA.prototype.setTileUrlFunction = iA.prototype.kb;
    iA.prototype.setUrl = iA.prototype.sb;
    iA.prototype.setUrls = iA.prototype.vb;
    iA.prototype.getTileGrid = iA.prototype.mb;
    iA.prototype.refresh = iA.prototype.oa;
    iA.prototype.getAttributions = iA.prototype.za;
    iA.prototype.getLogo = iA.prototype.Aa;
    iA.prototype.getProjection = iA.prototype.Ca;
    iA.prototype.getState = iA.prototype.getState;
    iA.prototype.setAttributions = iA.prototype.ta;
    iA.prototype.get = iA.prototype.get;
    iA.prototype.getKeys = iA.prototype.N;
    iA.prototype.getProperties = iA.prototype.K;
    iA.prototype.set = iA.prototype.set;
    iA.prototype.setProperties = iA.prototype.H;
    iA.prototype.unset = iA.prototype.O;
    iA.prototype.changed = iA.prototype.changed;
    iA.prototype.dispatchEvent = iA.prototype.b;
    iA.prototype.getRevision = iA.prototype.J;
    iA.prototype.on = iA.prototype.G;
    iA.prototype.once = iA.prototype.once;
    iA.prototype.un = iA.prototype.I;
    Zv.prototype.type = Zv.prototype.type;
    Zv.prototype.target = Zv.prototype.target;
    Zv.prototype.preventDefault = Zv.prototype.preventDefault;
    Zv.prototype.stopPropagation = Zv.prototype.stopPropagation;
    qA.prototype.getTileLoadFunction = qA.prototype.Ab;
    qA.prototype.getTileUrlFunction = qA.prototype.Bb;
    qA.prototype.getUrls = qA.prototype.Cb;
    qA.prototype.setTileLoadFunction = qA.prototype.Gb;
    qA.prototype.setTileUrlFunction = qA.prototype.kb;
    qA.prototype.setUrl = qA.prototype.sb;
    qA.prototype.setUrls = qA.prototype.vb;
    qA.prototype.getTileGrid = qA.prototype.mb;
    qA.prototype.refresh = qA.prototype.oa;
    qA.prototype.getAttributions = qA.prototype.za;
    qA.prototype.getLogo = qA.prototype.Aa;
    qA.prototype.getProjection = qA.prototype.Ca;
    qA.prototype.getState = qA.prototype.getState;
    qA.prototype.setAttributions = qA.prototype.ta;
    qA.prototype.get = qA.prototype.get;
    qA.prototype.getKeys = qA.prototype.N;
    qA.prototype.getProperties = qA.prototype.K;
    qA.prototype.set = qA.prototype.set;
    qA.prototype.setProperties = qA.prototype.H;
    qA.prototype.unset = qA.prototype.O;
    qA.prototype.changed = qA.prototype.changed;
    qA.prototype.dispatchEvent = qA.prototype.b;
    qA.prototype.getRevision = qA.prototype.J;
    qA.prototype.on = qA.prototype.G;
    qA.prototype.once = qA.prototype.once;
    qA.prototype.un = qA.prototype.I;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Sb;
    Z.prototype.setTileGridForProjection = Z.prototype.Tb;
    Z.prototype.getTileLoadFunction = Z.prototype.Ab;
    Z.prototype.getTileUrlFunction = Z.prototype.Bb;
    Z.prototype.getUrls = Z.prototype.Cb;
    Z.prototype.setTileLoadFunction = Z.prototype.Gb;
    Z.prototype.setTileUrlFunction = Z.prototype.kb;
    Z.prototype.setUrl = Z.prototype.sb;
    Z.prototype.setUrls = Z.prototype.vb;
    Z.prototype.getTileGrid = Z.prototype.mb;
    Z.prototype.refresh = Z.prototype.oa;
    Z.prototype.getAttributions = Z.prototype.za;
    Z.prototype.getLogo = Z.prototype.Aa;
    Z.prototype.getProjection = Z.prototype.Ca;
    Z.prototype.getState = Z.prototype.getState;
    Z.prototype.setAttributions = Z.prototype.ta;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.N;
    Z.prototype.getProperties = Z.prototype.K;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.H;
    Z.prototype.unset = Z.prototype.O;
    Z.prototype.changed = Z.prototype.changed;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.J;
    Z.prototype.on = Z.prototype.G;
    Z.prototype.once = Z.prototype.once;
    Z.prototype.un = Z.prototype.I;
    uA.prototype.setRenderReprojectionEdges = uA.prototype.Sb;
    uA.prototype.setTileGridForProjection = uA.prototype.Tb;
    uA.prototype.getTileLoadFunction = uA.prototype.Ab;
    uA.prototype.getTileUrlFunction = uA.prototype.Bb;
    uA.prototype.getUrls = uA.prototype.Cb;
    uA.prototype.setTileLoadFunction = uA.prototype.Gb;
    uA.prototype.setTileUrlFunction = uA.prototype.kb;
    uA.prototype.setUrl = uA.prototype.sb;
    uA.prototype.setUrls = uA.prototype.vb;
    uA.prototype.getTileGrid = uA.prototype.mb;
    uA.prototype.refresh = uA.prototype.oa;
    uA.prototype.getAttributions = uA.prototype.za;
    uA.prototype.getLogo = uA.prototype.Aa;
    uA.prototype.getProjection = uA.prototype.Ca;
    uA.prototype.getState = uA.prototype.getState;
    uA.prototype.setAttributions = uA.prototype.ta;
    uA.prototype.get = uA.prototype.get;
    uA.prototype.getKeys = uA.prototype.N;
    uA.prototype.getProperties = uA.prototype.K;
    uA.prototype.set = uA.prototype.set;
    uA.prototype.setProperties = uA.prototype.H;
    uA.prototype.unset = uA.prototype.O;
    uA.prototype.changed = uA.prototype.changed;
    uA.prototype.dispatchEvent = uA.prototype.b;
    uA.prototype.getRevision = uA.prototype.J;
    uA.prototype.on = uA.prototype.G;
    uA.prototype.once = uA.prototype.once;
    uA.prototype.un = uA.prototype.I;
    Eh.prototype.getTileCoord = Eh.prototype.i;
    Eh.prototype.load = Eh.prototype.load;
    rl.prototype.changed = rl.prototype.changed;
    rl.prototype.dispatchEvent = rl.prototype.b;
    rl.prototype.getRevision = rl.prototype.J;
    rl.prototype.on = rl.prototype.G;
    rl.prototype.once = rl.prototype.once;
    rl.prototype.un = rl.prototype.I;
    lz.prototype.changed = lz.prototype.changed;
    lz.prototype.dispatchEvent = lz.prototype.b;
    lz.prototype.getRevision = lz.prototype.J;
    lz.prototype.on = lz.prototype.G;
    lz.prototype.once = lz.prototype.once;
    lz.prototype.un = lz.prototype.I;
    oz.prototype.changed = oz.prototype.changed;
    oz.prototype.dispatchEvent = oz.prototype.b;
    oz.prototype.getRevision = oz.prototype.J;
    oz.prototype.on = oz.prototype.G;
    oz.prototype.once = oz.prototype.once;
    oz.prototype.un = oz.prototype.I;
    yz.prototype.changed = yz.prototype.changed;
    yz.prototype.dispatchEvent = yz.prototype.b;
    yz.prototype.getRevision = yz.prototype.J;
    yz.prototype.on = yz.prototype.G;
    yz.prototype.once = yz.prototype.once;
    yz.prototype.un = yz.prototype.I;
    zz.prototype.changed = zz.prototype.changed;
    zz.prototype.dispatchEvent = zz.prototype.b;
    zz.prototype.getRevision = zz.prototype.J;
    zz.prototype.on = zz.prototype.G;
    zz.prototype.once = zz.prototype.once;
    zz.prototype.un = zz.prototype.I;
    Fl.prototype.changed = Fl.prototype.changed;
    Fl.prototype.dispatchEvent = Fl.prototype.b;
    Fl.prototype.getRevision = Fl.prototype.J;
    Fl.prototype.on = Fl.prototype.G;
    Fl.prototype.once = Fl.prototype.once;
    Fl.prototype.un = Fl.prototype.I;
    Jl.prototype.changed = Jl.prototype.changed;
    Jl.prototype.dispatchEvent = Jl.prototype.b;
    Jl.prototype.getRevision = Jl.prototype.J;
    Jl.prototype.on = Jl.prototype.G;
    Jl.prototype.once = Jl.prototype.once;
    Jl.prototype.un = Jl.prototype.I;
    Kl.prototype.changed = Kl.prototype.changed;
    Kl.prototype.dispatchEvent = Kl.prototype.b;
    Kl.prototype.getRevision = Kl.prototype.J;
    Kl.prototype.on = Kl.prototype.G;
    Kl.prototype.once = Kl.prototype.once;
    Kl.prototype.un = Kl.prototype.I;
    Sl.prototype.changed = Sl.prototype.changed;
    Sl.prototype.dispatchEvent = Sl.prototype.b;
    Sl.prototype.getRevision = Sl.prototype.J;
    Sl.prototype.on = Sl.prototype.G;
    Sl.prototype.once = Sl.prototype.once;
    Sl.prototype.un = Sl.prototype.I;
    Im.prototype.changed = Im.prototype.changed;
    Im.prototype.dispatchEvent = Im.prototype.b;
    Im.prototype.getRevision = Im.prototype.J;
    Im.prototype.on = Im.prototype.G;
    Im.prototype.once = Im.prototype.once;
    Im.prototype.un = Im.prototype.I;
    Jm.prototype.changed = Jm.prototype.changed;
    Jm.prototype.dispatchEvent = Jm.prototype.b;
    Jm.prototype.getRevision = Jm.prototype.J;
    Jm.prototype.on = Jm.prototype.G;
    Jm.prototype.once = Jm.prototype.once;
    Jm.prototype.un = Jm.prototype.I;
    hl.prototype.type = hl.prototype.type;
    hl.prototype.target = hl.prototype.target;
    hl.prototype.preventDefault = hl.prototype.preventDefault;
    hl.prototype.stopPropagation = hl.prototype.stopPropagation;
    gk.prototype.type = gk.prototype.type;
    gk.prototype.target = gk.prototype.target;
    gk.prototype.preventDefault = gk.prototype.preventDefault;
    gk.prototype.stopPropagation = gk.prototype.stopPropagation;
    zf.prototype.get = zf.prototype.get;
    zf.prototype.getKeys = zf.prototype.N;
    zf.prototype.getProperties = zf.prototype.K;
    zf.prototype.set = zf.prototype.set;
    zf.prototype.setProperties = zf.prototype.H;
    zf.prototype.unset = zf.prototype.O;
    zf.prototype.changed = zf.prototype.changed;
    zf.prototype.dispatchEvent = zf.prototype.b;
    zf.prototype.getRevision = zf.prototype.J;
    zf.prototype.on = zf.prototype.G;
    zf.prototype.once = zf.prototype.once;
    zf.prototype.un = zf.prototype.I;
    bi.prototype.getExtent = bi.prototype.A;
    bi.prototype.getMaxResolution = bi.prototype.Za;
    bi.prototype.getMinResolution = bi.prototype.$a;
    bi.prototype.getOpacity = bi.prototype.xb;
    bi.prototype.getVisible = bi.prototype.Ma;
    bi.prototype.getZIndex = bi.prototype.getZIndex;
    bi.prototype.setExtent = bi.prototype.qc;
    bi.prototype.setMaxResolution = bi.prototype.uc;
    bi.prototype.setMinResolution = bi.prototype.vc;
    bi.prototype.setOpacity = bi.prototype.ab;
    bi.prototype.setVisible = bi.prototype.setVisible;
    bi.prototype.setZIndex = bi.prototype.setZIndex;
    bi.prototype.get = bi.prototype.get;
    bi.prototype.getKeys = bi.prototype.N;
    bi.prototype.getProperties = bi.prototype.K;
    bi.prototype.set = bi.prototype.set;
    bi.prototype.setProperties = bi.prototype.H;
    bi.prototype.unset = bi.prototype.O;
    bi.prototype.changed = bi.prototype.changed;
    bi.prototype.dispatchEvent = bi.prototype.b;
    bi.prototype.getRevision = bi.prototype.J;
    bi.prototype.on = bi.prototype.G;
    bi.prototype.once = bi.prototype.once;
    bi.prototype.un = bi.prototype.I;
    Bf.prototype.getExtent = Bf.prototype.A;
    Bf.prototype.getMaxResolution = Bf.prototype.Za;
    Bf.prototype.getMinResolution = Bf.prototype.$a;
    Bf.prototype.getOpacity = Bf.prototype.xb;
    Bf.prototype.getVisible = Bf.prototype.Ma;
    Bf.prototype.getZIndex = Bf.prototype.getZIndex;
    Bf.prototype.setExtent = Bf.prototype.qc;
    Bf.prototype.setMaxResolution = Bf.prototype.uc;
    Bf.prototype.setMinResolution = Bf.prototype.vc;
    Bf.prototype.setOpacity = Bf.prototype.ab;
    Bf.prototype.setVisible = Bf.prototype.setVisible;
    Bf.prototype.setZIndex = Bf.prototype.setZIndex;
    Bf.prototype.get = Bf.prototype.get;
    Bf.prototype.getKeys = Bf.prototype.N;
    Bf.prototype.getProperties = Bf.prototype.K;
    Bf.prototype.set = Bf.prototype.set;
    Bf.prototype.setProperties = Bf.prototype.H;
    Bf.prototype.unset = Bf.prototype.O;
    Bf.prototype.changed = Bf.prototype.changed;
    Bf.prototype.dispatchEvent = Bf.prototype.b;
    Bf.prototype.getRevision = Bf.prototype.J;
    Bf.prototype.on = Bf.prototype.G;
    Bf.prototype.once = Bf.prototype.once;
    Bf.prototype.un = Bf.prototype.I;
    I.prototype.setMap = I.prototype.setMap;
    I.prototype.setSource = I.prototype.ld;
    I.prototype.getExtent = I.prototype.A;
    I.prototype.getMaxResolution = I.prototype.Za;
    I.prototype.getMinResolution = I.prototype.$a;
    I.prototype.getOpacity = I.prototype.xb;
    I.prototype.getVisible = I.prototype.Ma;
    I.prototype.getZIndex = I.prototype.getZIndex;
    I.prototype.setExtent = I.prototype.qc;
    I.prototype.setMaxResolution = I.prototype.uc;
    I.prototype.setMinResolution = I.prototype.vc;
    I.prototype.setOpacity = I.prototype.ab;
    I.prototype.setVisible = I.prototype.setVisible;
    I.prototype.setZIndex = I.prototype.setZIndex;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.N;
    I.prototype.getProperties = I.prototype.K;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.H;
    I.prototype.unset = I.prototype.O;
    I.prototype.changed = I.prototype.changed;
    I.prototype.dispatchEvent = I.prototype.b;
    I.prototype.getRevision = I.prototype.J;
    I.prototype.on = I.prototype.G;
    I.prototype.once = I.prototype.once;
    I.prototype.un = I.prototype.I;
    V.prototype.getSource = V.prototype.aa;
    V.prototype.getStyle = V.prototype.ad;
    V.prototype.getStyleFunction = V.prototype.lb;
    V.prototype.setStyle = V.prototype.j;
    V.prototype.setMap = V.prototype.setMap;
    V.prototype.setSource = V.prototype.ld;
    V.prototype.getExtent = V.prototype.A;
    V.prototype.getMaxResolution = V.prototype.Za;
    V.prototype.getMinResolution = V.prototype.$a;
    V.prototype.getOpacity = V.prototype.xb;
    V.prototype.getVisible = V.prototype.Ma;
    V.prototype.getZIndex = V.prototype.getZIndex;
    V.prototype.setExtent = V.prototype.qc;
    V.prototype.setMaxResolution = V.prototype.uc;
    V.prototype.setMinResolution = V.prototype.vc;
    V.prototype.setOpacity = V.prototype.ab;
    V.prototype.setVisible = V.prototype.setVisible;
    V.prototype.setZIndex = V.prototype.setZIndex;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.N;
    V.prototype.getProperties = V.prototype.K;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.H;
    V.prototype.unset = V.prototype.O;
    V.prototype.changed = V.prototype.changed;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.J;
    V.prototype.on = V.prototype.G;
    V.prototype.once = V.prototype.once;
    V.prototype.un = V.prototype.I;
    oh.prototype.setMap = oh.prototype.setMap;
    oh.prototype.setSource = oh.prototype.ld;
    oh.prototype.getExtent = oh.prototype.A;
    oh.prototype.getMaxResolution = oh.prototype.Za;
    oh.prototype.getMinResolution = oh.prototype.$a;
    oh.prototype.getOpacity = oh.prototype.xb;
    oh.prototype.getVisible = oh.prototype.Ma;
    oh.prototype.getZIndex = oh.prototype.getZIndex;
    oh.prototype.setExtent = oh.prototype.qc;
    oh.prototype.setMaxResolution = oh.prototype.uc;
    oh.prototype.setMinResolution = oh.prototype.vc;
    oh.prototype.setOpacity = oh.prototype.ab;
    oh.prototype.setVisible = oh.prototype.setVisible;
    oh.prototype.setZIndex = oh.prototype.setZIndex;
    oh.prototype.get = oh.prototype.get;
    oh.prototype.getKeys = oh.prototype.N;
    oh.prototype.getProperties = oh.prototype.K;
    oh.prototype.set = oh.prototype.set;
    oh.prototype.setProperties = oh.prototype.H;
    oh.prototype.unset = oh.prototype.O;
    oh.prototype.changed = oh.prototype.changed;
    oh.prototype.dispatchEvent = oh.prototype.b;
    oh.prototype.getRevision = oh.prototype.J;
    oh.prototype.on = oh.prototype.G;
    oh.prototype.once = oh.prototype.once;
    oh.prototype.un = oh.prototype.I;
    ph.prototype.setMap = ph.prototype.setMap;
    ph.prototype.setSource = ph.prototype.ld;
    ph.prototype.getExtent = ph.prototype.A;
    ph.prototype.getMaxResolution = ph.prototype.Za;
    ph.prototype.getMinResolution = ph.prototype.$a;
    ph.prototype.getOpacity = ph.prototype.xb;
    ph.prototype.getVisible = ph.prototype.Ma;
    ph.prototype.getZIndex = ph.prototype.getZIndex;
    ph.prototype.setExtent = ph.prototype.qc;
    ph.prototype.setMaxResolution = ph.prototype.uc;
    ph.prototype.setMinResolution = ph.prototype.vc;
    ph.prototype.setOpacity = ph.prototype.ab;
    ph.prototype.setVisible = ph.prototype.setVisible;
    ph.prototype.setZIndex = ph.prototype.setZIndex;
    ph.prototype.get = ph.prototype.get;
    ph.prototype.getKeys = ph.prototype.N;
    ph.prototype.getProperties = ph.prototype.K;
    ph.prototype.set = ph.prototype.set;
    ph.prototype.setProperties = ph.prototype.H;
    ph.prototype.unset = ph.prototype.O;
    ph.prototype.changed = ph.prototype.changed;
    ph.prototype.dispatchEvent = ph.prototype.b;
    ph.prototype.getRevision = ph.prototype.J;
    ph.prototype.on = ph.prototype.G;
    ph.prototype.once = ph.prototype.once;
    ph.prototype.un = ph.prototype.I;
    W.prototype.getStyle = W.prototype.ad;
    W.prototype.getStyleFunction = W.prototype.lb;
    W.prototype.setStyle = W.prototype.j;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.ld;
    W.prototype.getExtent = W.prototype.A;
    W.prototype.getMaxResolution = W.prototype.Za;
    W.prototype.getMinResolution = W.prototype.$a;
    W.prototype.getOpacity = W.prototype.xb;
    W.prototype.getVisible = W.prototype.Ma;
    W.prototype.getZIndex = W.prototype.getZIndex;
    W.prototype.setExtent = W.prototype.qc;
    W.prototype.setMaxResolution = W.prototype.uc;
    W.prototype.setMinResolution = W.prototype.vc;
    W.prototype.setOpacity = W.prototype.ab;
    W.prototype.setVisible = W.prototype.setVisible;
    W.prototype.setZIndex = W.prototype.setZIndex;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.N;
    W.prototype.getProperties = W.prototype.K;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.H;
    W.prototype.unset = W.prototype.O;
    W.prototype.changed = W.prototype.changed;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.J;
    W.prototype.on = W.prototype.G;
    W.prototype.once = W.prototype.once;
    W.prototype.un = W.prototype.I;
    ri.prototype.get = ri.prototype.get;
    ri.prototype.getKeys = ri.prototype.N;
    ri.prototype.getProperties = ri.prototype.K;
    ri.prototype.set = ri.prototype.set;
    ri.prototype.setProperties = ri.prototype.H;
    ri.prototype.unset = ri.prototype.O;
    ri.prototype.changed = ri.prototype.changed;
    ri.prototype.dispatchEvent = ri.prototype.b;
    ri.prototype.getRevision = ri.prototype.J;
    ri.prototype.on = ri.prototype.G;
    ri.prototype.once = ri.prototype.once;
    ri.prototype.un = ri.prototype.I;
    wi.prototype.getActive = wi.prototype.c;
    wi.prototype.getMap = wi.prototype.i;
    wi.prototype.setActive = wi.prototype.Ha;
    wi.prototype.get = wi.prototype.get;
    wi.prototype.getKeys = wi.prototype.N;
    wi.prototype.getProperties = wi.prototype.K;
    wi.prototype.set = wi.prototype.set;
    wi.prototype.setProperties = wi.prototype.H;
    wi.prototype.unset = wi.prototype.O;
    wi.prototype.changed = wi.prototype.changed;
    wi.prototype.dispatchEvent = wi.prototype.b;
    wi.prototype.getRevision = wi.prototype.J;
    wi.prototype.on = wi.prototype.G;
    wi.prototype.once = wi.prototype.once;
    wi.prototype.un = wi.prototype.I;
    rv.prototype.getActive = rv.prototype.c;
    rv.prototype.getMap = rv.prototype.i;
    rv.prototype.setActive = rv.prototype.Ha;
    rv.prototype.get = rv.prototype.get;
    rv.prototype.getKeys = rv.prototype.N;
    rv.prototype.getProperties = rv.prototype.K;
    rv.prototype.set = rv.prototype.set;
    rv.prototype.setProperties = rv.prototype.H;
    rv.prototype.unset = rv.prototype.O;
    rv.prototype.changed = rv.prototype.changed;
    rv.prototype.dispatchEvent = rv.prototype.b;
    rv.prototype.getRevision = rv.prototype.J;
    rv.prototype.on = rv.prototype.G;
    rv.prototype.once = rv.prototype.once;
    rv.prototype.un = rv.prototype.I;
    uv.prototype.type = uv.prototype.type;
    uv.prototype.target = uv.prototype.target;
    uv.prototype.preventDefault = uv.prototype.preventDefault;
    uv.prototype.stopPropagation = uv.prototype.stopPropagation;
    Xi.prototype.getActive = Xi.prototype.c;
    Xi.prototype.getMap = Xi.prototype.i;
    Xi.prototype.setActive = Xi.prototype.Ha;
    Xi.prototype.get = Xi.prototype.get;
    Xi.prototype.getKeys = Xi.prototype.N;
    Xi.prototype.getProperties = Xi.prototype.K;
    Xi.prototype.set = Xi.prototype.set;
    Xi.prototype.setProperties = Xi.prototype.H;
    Xi.prototype.unset = Xi.prototype.O;
    Xi.prototype.changed = Xi.prototype.changed;
    Xi.prototype.dispatchEvent = Xi.prototype.b;
    Xi.prototype.getRevision = Xi.prototype.J;
    Xi.prototype.on = Xi.prototype.G;
    Xi.prototype.once = Xi.prototype.once;
    Xi.prototype.un = Xi.prototype.I;
    pj.prototype.getActive = pj.prototype.c;
    pj.prototype.getMap = pj.prototype.i;
    pj.prototype.setActive = pj.prototype.Ha;
    pj.prototype.get = pj.prototype.get;
    pj.prototype.getKeys = pj.prototype.N;
    pj.prototype.getProperties = pj.prototype.K;
    pj.prototype.set = pj.prototype.set;
    pj.prototype.setProperties = pj.prototype.H;
    pj.prototype.unset = pj.prototype.O;
    pj.prototype.changed = pj.prototype.changed;
    pj.prototype.dispatchEvent = pj.prototype.b;
    pj.prototype.getRevision = pj.prototype.J;
    pj.prototype.on = pj.prototype.G;
    pj.prototype.once = pj.prototype.once;
    pj.prototype.un = pj.prototype.I;
    zj.prototype.type = zj.prototype.type;
    zj.prototype.target = zj.prototype.target;
    zj.prototype.preventDefault = zj.prototype.preventDefault;
    zj.prototype.stopPropagation = zj.prototype.stopPropagation;
    $i.prototype.getActive = $i.prototype.c;
    $i.prototype.getMap = $i.prototype.i;
    $i.prototype.setActive = $i.prototype.Ha;
    $i.prototype.get = $i.prototype.get;
    $i.prototype.getKeys = $i.prototype.N;
    $i.prototype.getProperties = $i.prototype.K;
    $i.prototype.set = $i.prototype.set;
    $i.prototype.setProperties = $i.prototype.H;
    $i.prototype.unset = $i.prototype.O;
    $i.prototype.changed = $i.prototype.changed;
    $i.prototype.dispatchEvent = $i.prototype.b;
    $i.prototype.getRevision = $i.prototype.J;
    $i.prototype.on = $i.prototype.G;
    $i.prototype.once = $i.prototype.once;
    $i.prototype.un = $i.prototype.I;
    ij.prototype.getActive = ij.prototype.c;
    ij.prototype.getMap = ij.prototype.i;
    ij.prototype.setActive = ij.prototype.Ha;
    ij.prototype.get = ij.prototype.get;
    ij.prototype.getKeys = ij.prototype.N;
    ij.prototype.getProperties = ij.prototype.K;
    ij.prototype.set = ij.prototype.set;
    ij.prototype.setProperties = ij.prototype.H;
    ij.prototype.unset = ij.prototype.O;
    ij.prototype.changed = ij.prototype.changed;
    ij.prototype.dispatchEvent = ij.prototype.b;
    ij.prototype.getRevision = ij.prototype.J;
    ij.prototype.on = ij.prototype.G;
    ij.prototype.once = ij.prototype.once;
    ij.prototype.un = ij.prototype.I;
    yv.prototype.getActive = yv.prototype.c;
    yv.prototype.getMap = yv.prototype.i;
    yv.prototype.setActive = yv.prototype.Ha;
    yv.prototype.get = yv.prototype.get;
    yv.prototype.getKeys = yv.prototype.N;
    yv.prototype.getProperties = yv.prototype.K;
    yv.prototype.set = yv.prototype.set;
    yv.prototype.setProperties = yv.prototype.H;
    yv.prototype.unset = yv.prototype.O;
    yv.prototype.changed = yv.prototype.changed;
    yv.prototype.dispatchEvent = yv.prototype.b;
    yv.prototype.getRevision = yv.prototype.J;
    yv.prototype.on = yv.prototype.G;
    yv.prototype.once = yv.prototype.once;
    yv.prototype.un = yv.prototype.I;
    Dj.prototype.getGeometry = Dj.prototype.getGeometry;
    Dj.prototype.getActive = Dj.prototype.c;
    Dj.prototype.getMap = Dj.prototype.i;
    Dj.prototype.setActive = Dj.prototype.Ha;
    Dj.prototype.get = Dj.prototype.get;
    Dj.prototype.getKeys = Dj.prototype.N;
    Dj.prototype.getProperties = Dj.prototype.K;
    Dj.prototype.set = Dj.prototype.set;
    Dj.prototype.setProperties = Dj.prototype.H;
    Dj.prototype.unset = Dj.prototype.O;
    Dj.prototype.changed = Dj.prototype.changed;
    Dj.prototype.dispatchEvent = Dj.prototype.b;
    Dj.prototype.getRevision = Dj.prototype.J;
    Dj.prototype.on = Dj.prototype.G;
    Dj.prototype.once = Dj.prototype.once;
    Dj.prototype.un = Dj.prototype.I;
    bw.prototype.getActive = bw.prototype.c;
    bw.prototype.getMap = bw.prototype.i;
    bw.prototype.setActive = bw.prototype.Ha;
    bw.prototype.get = bw.prototype.get;
    bw.prototype.getKeys = bw.prototype.N;
    bw.prototype.getProperties = bw.prototype.K;
    bw.prototype.set = bw.prototype.set;
    bw.prototype.setProperties = bw.prototype.H;
    bw.prototype.unset = bw.prototype.O;
    bw.prototype.changed = bw.prototype.changed;
    bw.prototype.dispatchEvent = bw.prototype.b;
    bw.prototype.getRevision = bw.prototype.J;
    bw.prototype.on = bw.prototype.G;
    bw.prototype.once = bw.prototype.once;
    bw.prototype.un = bw.prototype.I;
    rw.prototype.type = rw.prototype.type;
    rw.prototype.target = rw.prototype.target;
    rw.prototype.preventDefault = rw.prototype.preventDefault;
    rw.prototype.stopPropagation = rw.prototype.stopPropagation;
    sw.prototype.getActive = sw.prototype.c;
    sw.prototype.getMap = sw.prototype.i;
    sw.prototype.setActive = sw.prototype.Ha;
    sw.prototype.get = sw.prototype.get;
    sw.prototype.getKeys = sw.prototype.N;
    sw.prototype.getProperties = sw.prototype.K;
    sw.prototype.set = sw.prototype.set;
    sw.prototype.setProperties = sw.prototype.H;
    sw.prototype.unset = sw.prototype.O;
    sw.prototype.changed = sw.prototype.changed;
    sw.prototype.dispatchEvent = sw.prototype.b;
    sw.prototype.getRevision = sw.prototype.J;
    sw.prototype.on = sw.prototype.G;
    sw.prototype.once = sw.prototype.once;
    sw.prototype.un = sw.prototype.I;
    Dw.prototype.type = Dw.prototype.type;
    Dw.prototype.target = Dw.prototype.target;
    Dw.prototype.preventDefault = Dw.prototype.preventDefault;
    Dw.prototype.stopPropagation = Dw.prototype.stopPropagation;
    Ej.prototype.getActive = Ej.prototype.c;
    Ej.prototype.getMap = Ej.prototype.i;
    Ej.prototype.setActive = Ej.prototype.Ha;
    Ej.prototype.get = Ej.prototype.get;
    Ej.prototype.getKeys = Ej.prototype.N;
    Ej.prototype.getProperties = Ej.prototype.K;
    Ej.prototype.set = Ej.prototype.set;
    Ej.prototype.setProperties = Ej.prototype.H;
    Ej.prototype.unset = Ej.prototype.O;
    Ej.prototype.changed = Ej.prototype.changed;
    Ej.prototype.dispatchEvent = Ej.prototype.b;
    Ej.prototype.getRevision = Ej.prototype.J;
    Ej.prototype.on = Ej.prototype.G;
    Ej.prototype.once = Ej.prototype.once;
    Ej.prototype.un = Ej.prototype.I;
    Gj.prototype.getActive = Gj.prototype.c;
    Gj.prototype.getMap = Gj.prototype.i;
    Gj.prototype.setActive = Gj.prototype.Ha;
    Gj.prototype.get = Gj.prototype.get;
    Gj.prototype.getKeys = Gj.prototype.N;
    Gj.prototype.getProperties = Gj.prototype.K;
    Gj.prototype.set = Gj.prototype.set;
    Gj.prototype.setProperties = Gj.prototype.H;
    Gj.prototype.unset = Gj.prototype.O;
    Gj.prototype.changed = Gj.prototype.changed;
    Gj.prototype.dispatchEvent = Gj.prototype.b;
    Gj.prototype.getRevision = Gj.prototype.J;
    Gj.prototype.on = Gj.prototype.G;
    Gj.prototype.once = Gj.prototype.once;
    Gj.prototype.un = Gj.prototype.I;
    Ew.prototype.getActive = Ew.prototype.c;
    Ew.prototype.getMap = Ew.prototype.i;
    Ew.prototype.setActive = Ew.prototype.Ha;
    Ew.prototype.get = Ew.prototype.get;
    Ew.prototype.getKeys = Ew.prototype.N;
    Ew.prototype.getProperties = Ew.prototype.K;
    Ew.prototype.set = Ew.prototype.set;
    Ew.prototype.setProperties = Ew.prototype.H;
    Ew.prototype.unset = Ew.prototype.O;
    Ew.prototype.changed = Ew.prototype.changed;
    Ew.prototype.dispatchEvent = Ew.prototype.b;
    Ew.prototype.getRevision = Ew.prototype.J;
    Ew.prototype.on = Ew.prototype.G;
    Ew.prototype.once = Ew.prototype.once;
    Ew.prototype.un = Ew.prototype.I;
    Mw.prototype.type = Mw.prototype.type;
    Mw.prototype.target = Mw.prototype.target;
    Mw.prototype.preventDefault = Mw.prototype.preventDefault;
    Mw.prototype.stopPropagation = Mw.prototype.stopPropagation;
    Ij.prototype.getActive = Ij.prototype.c;
    Ij.prototype.getMap = Ij.prototype.i;
    Ij.prototype.setActive = Ij.prototype.Ha;
    Ij.prototype.get = Ij.prototype.get;
    Ij.prototype.getKeys = Ij.prototype.N;
    Ij.prototype.getProperties = Ij.prototype.K;
    Ij.prototype.set = Ij.prototype.set;
    Ij.prototype.setProperties = Ij.prototype.H;
    Ij.prototype.unset = Ij.prototype.O;
    Ij.prototype.changed = Ij.prototype.changed;
    Ij.prototype.dispatchEvent = Ij.prototype.b;
    Ij.prototype.getRevision = Ij.prototype.J;
    Ij.prototype.on = Ij.prototype.G;
    Ij.prototype.once = Ij.prototype.once;
    Ij.prototype.un = Ij.prototype.I;
    Mj.prototype.getActive = Mj.prototype.c;
    Mj.prototype.getMap = Mj.prototype.i;
    Mj.prototype.setActive = Mj.prototype.Ha;
    Mj.prototype.get = Mj.prototype.get;
    Mj.prototype.getKeys = Mj.prototype.N;
    Mj.prototype.getProperties = Mj.prototype.K;
    Mj.prototype.set = Mj.prototype.set;
    Mj.prototype.setProperties = Mj.prototype.H;
    Mj.prototype.unset = Mj.prototype.O;
    Mj.prototype.changed = Mj.prototype.changed;
    Mj.prototype.dispatchEvent = Mj.prototype.b;
    Mj.prototype.getRevision = Mj.prototype.J;
    Mj.prototype.on = Mj.prototype.G;
    Mj.prototype.once = Mj.prototype.once;
    Mj.prototype.un = Mj.prototype.I;
    Qj.prototype.getActive = Qj.prototype.c;
    Qj.prototype.getMap = Qj.prototype.i;
    Qj.prototype.setActive = Qj.prototype.Ha;
    Qj.prototype.get = Qj.prototype.get;
    Qj.prototype.getKeys = Qj.prototype.N;
    Qj.prototype.getProperties = Qj.prototype.K;
    Qj.prototype.set = Qj.prototype.set;
    Qj.prototype.setProperties = Qj.prototype.H;
    Qj.prototype.unset = Qj.prototype.O;
    Qj.prototype.changed = Qj.prototype.changed;
    Qj.prototype.dispatchEvent = Qj.prototype.b;
    Qj.prototype.getRevision = Qj.prototype.J;
    Qj.prototype.on = Qj.prototype.G;
    Qj.prototype.once = Qj.prototype.once;
    Qj.prototype.un = Qj.prototype.I;
    Uw.prototype.getActive = Uw.prototype.c;
    Uw.prototype.getMap = Uw.prototype.i;
    Uw.prototype.setActive = Uw.prototype.Ha;
    Uw.prototype.get = Uw.prototype.get;
    Uw.prototype.getKeys = Uw.prototype.N;
    Uw.prototype.getProperties = Uw.prototype.K;
    Uw.prototype.set = Uw.prototype.set;
    Uw.prototype.setProperties = Uw.prototype.H;
    Uw.prototype.unset = Uw.prototype.O;
    Uw.prototype.changed = Uw.prototype.changed;
    Uw.prototype.dispatchEvent = Uw.prototype.b;
    Uw.prototype.getRevision = Uw.prototype.J;
    Uw.prototype.on = Uw.prototype.G;
    Uw.prototype.once = Uw.prototype.once;
    Uw.prototype.un = Uw.prototype.I;
    Xw.prototype.type = Xw.prototype.type;
    Xw.prototype.target = Xw.prototype.target;
    Xw.prototype.preventDefault = Xw.prototype.preventDefault;
    Xw.prototype.stopPropagation = Xw.prototype.stopPropagation;
    Zw.prototype.getActive = Zw.prototype.c;
    Zw.prototype.getMap = Zw.prototype.i;
    Zw.prototype.setActive = Zw.prototype.Ha;
    Zw.prototype.get = Zw.prototype.get;
    Zw.prototype.getKeys = Zw.prototype.N;
    Zw.prototype.getProperties = Zw.prototype.K;
    Zw.prototype.set = Zw.prototype.set;
    Zw.prototype.setProperties = Zw.prototype.H;
    Zw.prototype.unset = Zw.prototype.O;
    Zw.prototype.changed = Zw.prototype.changed;
    Zw.prototype.dispatchEvent = Zw.prototype.b;
    Zw.prototype.getRevision = Zw.prototype.J;
    Zw.prototype.on = Zw.prototype.G;
    Zw.prototype.once = Zw.prototype.once;
    Zw.prototype.un = Zw.prototype.I;
    dx.prototype.getActive = dx.prototype.c;
    dx.prototype.getMap = dx.prototype.i;
    dx.prototype.setActive = dx.prototype.Ha;
    dx.prototype.get = dx.prototype.get;
    dx.prototype.getKeys = dx.prototype.N;
    dx.prototype.getProperties = dx.prototype.K;
    dx.prototype.set = dx.prototype.set;
    dx.prototype.setProperties = dx.prototype.H;
    dx.prototype.unset = dx.prototype.O;
    dx.prototype.changed = dx.prototype.changed;
    dx.prototype.dispatchEvent = dx.prototype.b;
    dx.prototype.getRevision = dx.prototype.J;
    dx.prototype.on = dx.prototype.G;
    dx.prototype.once = dx.prototype.once;
    dx.prototype.un = dx.prototype.I;
    jx.prototype.type = jx.prototype.type;
    jx.prototype.target = jx.prototype.target;
    jx.prototype.preventDefault = jx.prototype.preventDefault;
    jx.prototype.stopPropagation = jx.prototype.stopPropagation;
    ld.prototype.get = ld.prototype.get;
    ld.prototype.getKeys = ld.prototype.N;
    ld.prototype.getProperties = ld.prototype.K;
    ld.prototype.set = ld.prototype.set;
    ld.prototype.setProperties = ld.prototype.H;
    ld.prototype.unset = ld.prototype.O;
    ld.prototype.changed = ld.prototype.changed;
    ld.prototype.dispatchEvent = ld.prototype.b;
    ld.prototype.getRevision = ld.prototype.J;
    ld.prototype.on = ld.prototype.G;
    ld.prototype.once = ld.prototype.once;
    ld.prototype.un = ld.prototype.I;
    md.prototype.getClosestPoint = md.prototype.Jb;
    md.prototype.intersectsCoordinate = md.prototype.Db;
    md.prototype.getExtent = md.prototype.A;
    md.prototype.rotate = md.prototype.rotate;
    md.prototype.scale = md.prototype.scale;
    md.prototype.simplify = md.prototype.Ub;
    md.prototype.transform = md.prototype.transform;
    md.prototype.get = md.prototype.get;
    md.prototype.getKeys = md.prototype.N;
    md.prototype.getProperties = md.prototype.K;
    md.prototype.set = md.prototype.set;
    md.prototype.setProperties = md.prototype.H;
    md.prototype.unset = md.prototype.O;
    md.prototype.changed = md.prototype.changed;
    md.prototype.dispatchEvent = md.prototype.b;
    md.prototype.getRevision = md.prototype.J;
    md.prototype.on = md.prototype.G;
    md.prototype.once = md.prototype.once;
    md.prototype.un = md.prototype.I;
    gv.prototype.getFirstCoordinate = gv.prototype.jc;
    gv.prototype.getLastCoordinate = gv.prototype.kc;
    gv.prototype.getLayout = gv.prototype.mc;
    gv.prototype.rotate = gv.prototype.rotate;
    gv.prototype.scale = gv.prototype.scale;
    gv.prototype.getClosestPoint = gv.prototype.Jb;
    gv.prototype.intersectsCoordinate = gv.prototype.Db;
    gv.prototype.getExtent = gv.prototype.A;
    gv.prototype.simplify = gv.prototype.Ub;
    gv.prototype.get = gv.prototype.get;
    gv.prototype.getKeys = gv.prototype.N;
    gv.prototype.getProperties = gv.prototype.K;
    gv.prototype.set = gv.prototype.set;
    gv.prototype.setProperties = gv.prototype.H;
    gv.prototype.unset = gv.prototype.O;
    gv.prototype.changed = gv.prototype.changed;
    gv.prototype.dispatchEvent = gv.prototype.b;
    gv.prototype.getRevision = gv.prototype.J;
    gv.prototype.on = gv.prototype.G;
    gv.prototype.once = gv.prototype.once;
    gv.prototype.un = gv.prototype.I;
    Ho.prototype.getClosestPoint = Ho.prototype.Jb;
    Ho.prototype.intersectsCoordinate = Ho.prototype.Db;
    Ho.prototype.getExtent = Ho.prototype.A;
    Ho.prototype.rotate = Ho.prototype.rotate;
    Ho.prototype.scale = Ho.prototype.scale;
    Ho.prototype.simplify = Ho.prototype.Ub;
    Ho.prototype.transform = Ho.prototype.transform;
    Ho.prototype.get = Ho.prototype.get;
    Ho.prototype.getKeys = Ho.prototype.N;
    Ho.prototype.getProperties = Ho.prototype.K;
    Ho.prototype.set = Ho.prototype.set;
    Ho.prototype.setProperties = Ho.prototype.H;
    Ho.prototype.unset = Ho.prototype.O;
    Ho.prototype.changed = Ho.prototype.changed;
    Ho.prototype.dispatchEvent = Ho.prototype.b;
    Ho.prototype.getRevision = Ho.prototype.J;
    Ho.prototype.on = Ho.prototype.G;
    Ho.prototype.once = Ho.prototype.once;
    Ho.prototype.un = Ho.prototype.I;
    Pd.prototype.getFirstCoordinate = Pd.prototype.jc;
    Pd.prototype.getLastCoordinate = Pd.prototype.kc;
    Pd.prototype.getLayout = Pd.prototype.mc;
    Pd.prototype.rotate = Pd.prototype.rotate;
    Pd.prototype.scale = Pd.prototype.scale;
    Pd.prototype.getClosestPoint = Pd.prototype.Jb;
    Pd.prototype.intersectsCoordinate = Pd.prototype.Db;
    Pd.prototype.getExtent = Pd.prototype.A;
    Pd.prototype.simplify = Pd.prototype.Ub;
    Pd.prototype.transform = Pd.prototype.transform;
    Pd.prototype.get = Pd.prototype.get;
    Pd.prototype.getKeys = Pd.prototype.N;
    Pd.prototype.getProperties = Pd.prototype.K;
    Pd.prototype.set = Pd.prototype.set;
    Pd.prototype.setProperties = Pd.prototype.H;
    Pd.prototype.unset = Pd.prototype.O;
    Pd.prototype.changed = Pd.prototype.changed;
    Pd.prototype.dispatchEvent = Pd.prototype.b;
    Pd.prototype.getRevision = Pd.prototype.J;
    Pd.prototype.on = Pd.prototype.G;
    Pd.prototype.once = Pd.prototype.once;
    Pd.prototype.un = Pd.prototype.I;
    B.prototype.getFirstCoordinate = B.prototype.jc;
    B.prototype.getLastCoordinate = B.prototype.kc;
    B.prototype.getLayout = B.prototype.mc;
    B.prototype.rotate = B.prototype.rotate;
    B.prototype.scale = B.prototype.scale;
    B.prototype.getClosestPoint = B.prototype.Jb;
    B.prototype.intersectsCoordinate = B.prototype.Db;
    B.prototype.getExtent = B.prototype.A;
    B.prototype.simplify = B.prototype.Ub;
    B.prototype.transform = B.prototype.transform;
    B.prototype.get = B.prototype.get;
    B.prototype.getKeys = B.prototype.N;
    B.prototype.getProperties = B.prototype.K;
    B.prototype.set = B.prototype.set;
    B.prototype.setProperties = B.prototype.H;
    B.prototype.unset = B.prototype.O;
    B.prototype.changed = B.prototype.changed;
    B.prototype.dispatchEvent = B.prototype.b;
    B.prototype.getRevision = B.prototype.J;
    B.prototype.on = B.prototype.G;
    B.prototype.once = B.prototype.once;
    B.prototype.un = B.prototype.I;
    F.prototype.getFirstCoordinate = F.prototype.jc;
    F.prototype.getLastCoordinate = F.prototype.kc;
    F.prototype.getLayout = F.prototype.mc;
    F.prototype.rotate = F.prototype.rotate;
    F.prototype.scale = F.prototype.scale;
    F.prototype.getClosestPoint = F.prototype.Jb;
    F.prototype.intersectsCoordinate = F.prototype.Db;
    F.prototype.getExtent = F.prototype.A;
    F.prototype.simplify = F.prototype.Ub;
    F.prototype.transform = F.prototype.transform;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.N;
    F.prototype.getProperties = F.prototype.K;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.H;
    F.prototype.unset = F.prototype.O;
    F.prototype.changed = F.prototype.changed;
    F.prototype.dispatchEvent = F.prototype.b;
    F.prototype.getRevision = F.prototype.J;
    F.prototype.on = F.prototype.G;
    F.prototype.once = F.prototype.once;
    F.prototype.un = F.prototype.I;
    G.prototype.getFirstCoordinate = G.prototype.jc;
    G.prototype.getLastCoordinate = G.prototype.kc;
    G.prototype.getLayout = G.prototype.mc;
    G.prototype.rotate = G.prototype.rotate;
    G.prototype.scale = G.prototype.scale;
    G.prototype.getClosestPoint = G.prototype.Jb;
    G.prototype.intersectsCoordinate = G.prototype.Db;
    G.prototype.getExtent = G.prototype.A;
    G.prototype.simplify = G.prototype.Ub;
    G.prototype.transform = G.prototype.transform;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.N;
    G.prototype.getProperties = G.prototype.K;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.H;
    G.prototype.unset = G.prototype.O;
    G.prototype.changed = G.prototype.changed;
    G.prototype.dispatchEvent = G.prototype.b;
    G.prototype.getRevision = G.prototype.J;
    G.prototype.on = G.prototype.G;
    G.prototype.once = G.prototype.once;
    G.prototype.un = G.prototype.I;
    H.prototype.getFirstCoordinate = H.prototype.jc;
    H.prototype.getLastCoordinate = H.prototype.kc;
    H.prototype.getLayout = H.prototype.mc;
    H.prototype.rotate = H.prototype.rotate;
    H.prototype.scale = H.prototype.scale;
    H.prototype.getClosestPoint = H.prototype.Jb;
    H.prototype.intersectsCoordinate = H.prototype.Db;
    H.prototype.getExtent = H.prototype.A;
    H.prototype.simplify = H.prototype.Ub;
    H.prototype.transform = H.prototype.transform;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.N;
    H.prototype.getProperties = H.prototype.K;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.H;
    H.prototype.unset = H.prototype.O;
    H.prototype.changed = H.prototype.changed;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.J;
    H.prototype.on = H.prototype.G;
    H.prototype.once = H.prototype.once;
    H.prototype.un = H.prototype.I;
    C.prototype.getFirstCoordinate = C.prototype.jc;
    C.prototype.getLastCoordinate = C.prototype.kc;
    C.prototype.getLayout = C.prototype.mc;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.scale = C.prototype.scale;
    C.prototype.getClosestPoint = C.prototype.Jb;
    C.prototype.intersectsCoordinate = C.prototype.Db;
    C.prototype.getExtent = C.prototype.A;
    C.prototype.simplify = C.prototype.Ub;
    C.prototype.transform = C.prototype.transform;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.N;
    C.prototype.getProperties = C.prototype.K;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.H;
    C.prototype.unset = C.prototype.O;
    C.prototype.changed = C.prototype.changed;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.J;
    C.prototype.on = C.prototype.G;
    C.prototype.once = C.prototype.once;
    C.prototype.un = C.prototype.I;
    D.prototype.getFirstCoordinate = D.prototype.jc;
    D.prototype.getLastCoordinate = D.prototype.kc;
    D.prototype.getLayout = D.prototype.mc;
    D.prototype.rotate = D.prototype.rotate;
    D.prototype.scale = D.prototype.scale;
    D.prototype.getClosestPoint = D.prototype.Jb;
    D.prototype.intersectsCoordinate = D.prototype.Db;
    D.prototype.getExtent = D.prototype.A;
    D.prototype.simplify = D.prototype.Ub;
    D.prototype.transform = D.prototype.transform;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.N;
    D.prototype.getProperties = D.prototype.K;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.H;
    D.prototype.unset = D.prototype.O;
    D.prototype.changed = D.prototype.changed;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.J;
    D.prototype.on = D.prototype.G;
    D.prototype.once = D.prototype.once;
    D.prototype.un = D.prototype.I;
    fp.prototype.readFeatures = fp.prototype.Sa;
    op.prototype.readFeatures = op.prototype.Sa;
    fp.prototype.readFeatures = fp.prototype.Sa;
    Zk.prototype.get = Zk.prototype.get;
    Zk.prototype.getKeys = Zk.prototype.N;
    Zk.prototype.getProperties = Zk.prototype.K;
    Zk.prototype.set = Zk.prototype.set;
    Zk.prototype.setProperties = Zk.prototype.H;
    Zk.prototype.unset = Zk.prototype.O;
    Zk.prototype.changed = Zk.prototype.changed;
    Zk.prototype.dispatchEvent = Zk.prototype.b;
    Zk.prototype.getRevision = Zk.prototype.J;
    Zk.prototype.on = Zk.prototype.G;
    Zk.prototype.once = Zk.prototype.once;
    Zk.prototype.un = Zk.prototype.I;
    $k.prototype.getMap = $k.prototype.g;
    $k.prototype.setMap = $k.prototype.setMap;
    $k.prototype.setTarget = $k.prototype.i;
    $k.prototype.get = $k.prototype.get;
    $k.prototype.getKeys = $k.prototype.N;
    $k.prototype.getProperties = $k.prototype.K;
    $k.prototype.set = $k.prototype.set;
    $k.prototype.setProperties = $k.prototype.H;
    $k.prototype.unset = $k.prototype.O;
    $k.prototype.changed = $k.prototype.changed;
    $k.prototype.dispatchEvent = $k.prototype.b;
    $k.prototype.getRevision = $k.prototype.J;
    $k.prototype.on = $k.prototype.G;
    $k.prototype.once = $k.prototype.once;
    $k.prototype.un = $k.prototype.I;
    Om.prototype.getMap = Om.prototype.g;
    Om.prototype.setMap = Om.prototype.setMap;
    Om.prototype.setTarget = Om.prototype.i;
    Om.prototype.get = Om.prototype.get;
    Om.prototype.getKeys = Om.prototype.N;
    Om.prototype.getProperties = Om.prototype.K;
    Om.prototype.set = Om.prototype.set;
    Om.prototype.setProperties = Om.prototype.H;
    Om.prototype.unset = Om.prototype.O;
    Om.prototype.changed = Om.prototype.changed;
    Om.prototype.dispatchEvent = Om.prototype.b;
    Om.prototype.getRevision = Om.prototype.J;
    Om.prototype.on = Om.prototype.G;
    Om.prototype.once = Om.prototype.once;
    Om.prototype.un = Om.prototype.I;
    Tm.prototype.getMap = Tm.prototype.g;
    Tm.prototype.setMap = Tm.prototype.setMap;
    Tm.prototype.setTarget = Tm.prototype.i;
    Tm.prototype.get = Tm.prototype.get;
    Tm.prototype.getKeys = Tm.prototype.N;
    Tm.prototype.getProperties = Tm.prototype.K;
    Tm.prototype.set = Tm.prototype.set;
    Tm.prototype.setProperties = Tm.prototype.H;
    Tm.prototype.unset = Tm.prototype.O;
    Tm.prototype.changed = Tm.prototype.changed;
    Tm.prototype.dispatchEvent = Tm.prototype.b;
    Tm.prototype.getRevision = Tm.prototype.J;
    Tm.prototype.on = Tm.prototype.G;
    Tm.prototype.once = Tm.prototype.once;
    Tm.prototype.un = Tm.prototype.I;
    fn.prototype.getMap = fn.prototype.g;
    fn.prototype.setMap = fn.prototype.setMap;
    fn.prototype.setTarget = fn.prototype.i;
    fn.prototype.get = fn.prototype.get;
    fn.prototype.getKeys = fn.prototype.N;
    fn.prototype.getProperties = fn.prototype.K;
    fn.prototype.set = fn.prototype.set;
    fn.prototype.setProperties = fn.prototype.H;
    fn.prototype.unset = fn.prototype.O;
    fn.prototype.changed = fn.prototype.changed;
    fn.prototype.dispatchEvent = fn.prototype.b;
    fn.prototype.getRevision = fn.prototype.J;
    fn.prototype.on = fn.prototype.G;
    fn.prototype.once = fn.prototype.once;
    fn.prototype.un = fn.prototype.I;
    cl.prototype.getMap = cl.prototype.g;
    cl.prototype.setMap = cl.prototype.setMap;
    cl.prototype.setTarget = cl.prototype.i;
    cl.prototype.get = cl.prototype.get;
    cl.prototype.getKeys = cl.prototype.N;
    cl.prototype.getProperties = cl.prototype.K;
    cl.prototype.set = cl.prototype.set;
    cl.prototype.setProperties = cl.prototype.H;
    cl.prototype.unset = cl.prototype.O;
    cl.prototype.changed = cl.prototype.changed;
    cl.prototype.dispatchEvent = cl.prototype.b;
    cl.prototype.getRevision = cl.prototype.J;
    cl.prototype.on = cl.prototype.G;
    cl.prototype.once = cl.prototype.once;
    cl.prototype.un = cl.prototype.I;
    ln.prototype.getMap = ln.prototype.g;
    ln.prototype.setMap = ln.prototype.setMap;
    ln.prototype.setTarget = ln.prototype.i;
    ln.prototype.get = ln.prototype.get;
    ln.prototype.getKeys = ln.prototype.N;
    ln.prototype.getProperties = ln.prototype.K;
    ln.prototype.set = ln.prototype.set;
    ln.prototype.setProperties = ln.prototype.H;
    ln.prototype.unset = ln.prototype.O;
    ln.prototype.changed = ln.prototype.changed;
    ln.prototype.dispatchEvent = ln.prototype.b;
    ln.prototype.getRevision = ln.prototype.J;
    ln.prototype.on = ln.prototype.G;
    ln.prototype.once = ln.prototype.once;
    ln.prototype.un = ln.prototype.I;
    el.prototype.getMap = el.prototype.g;
    el.prototype.setMap = el.prototype.setMap;
    el.prototype.setTarget = el.prototype.i;
    el.prototype.get = el.prototype.get;
    el.prototype.getKeys = el.prototype.N;
    el.prototype.getProperties = el.prototype.K;
    el.prototype.set = el.prototype.set;
    el.prototype.setProperties = el.prototype.H;
    el.prototype.unset = el.prototype.O;
    el.prototype.changed = el.prototype.changed;
    el.prototype.dispatchEvent = el.prototype.b;
    el.prototype.getRevision = el.prototype.J;
    el.prototype.on = el.prototype.G;
    el.prototype.once = el.prototype.once;
    el.prototype.un = el.prototype.I;
    qn.prototype.getMap = qn.prototype.g;
    qn.prototype.setMap = qn.prototype.setMap;
    qn.prototype.setTarget = qn.prototype.i;
    qn.prototype.get = qn.prototype.get;
    qn.prototype.getKeys = qn.prototype.N;
    qn.prototype.getProperties = qn.prototype.K;
    qn.prototype.set = qn.prototype.set;
    qn.prototype.setProperties = qn.prototype.H;
    qn.prototype.unset = qn.prototype.O;
    qn.prototype.changed = qn.prototype.changed;
    qn.prototype.dispatchEvent = qn.prototype.b;
    qn.prototype.getRevision = qn.prototype.J;
    qn.prototype.on = qn.prototype.G;
    qn.prototype.once = qn.prototype.once;
    qn.prototype.un = qn.prototype.I;
    vn.prototype.getMap = vn.prototype.g;
    vn.prototype.setMap = vn.prototype.setMap;
    vn.prototype.setTarget = vn.prototype.i;
    vn.prototype.get = vn.prototype.get;
    vn.prototype.getKeys = vn.prototype.N;
    vn.prototype.getProperties = vn.prototype.K;
    vn.prototype.set = vn.prototype.set;
    vn.prototype.setProperties = vn.prototype.H;
    vn.prototype.unset = vn.prototype.O;
    vn.prototype.changed = vn.prototype.changed;
    vn.prototype.dispatchEvent = vn.prototype.b;
    vn.prototype.getRevision = vn.prototype.J;
    vn.prototype.on = vn.prototype.G;
    vn.prototype.once = vn.prototype.once;
    vn.prototype.un = vn.prototype.I;
    ji.prototype.getLayers = ji.prototype.dd;
    ji.prototype.setLayers = ji.prototype.Mg;
    ji.prototype.getExtent = ji.prototype.A;
    ji.prototype.getMaxResolution = ji.prototype.Za;
    ji.prototype.getMinResolution = ji.prototype.$a;
    ji.prototype.getOpacity = ji.prototype.xb;
    ji.prototype.getVisible = ji.prototype.Ma;
    ji.prototype.getZIndex = ji.prototype.getZIndex;
    ji.prototype.setExtent = ji.prototype.qc;
    ji.prototype.setMaxResolution = ji.prototype.uc;
    ji.prototype.setMinResolution = ji.prototype.vc;
    ji.prototype.setOpacity = ji.prototype.ab;
    ji.prototype.setVisible = ji.prototype.setVisible;
    ji.prototype.setZIndex = ji.prototype.setZIndex;
    ji.prototype.get = ji.prototype.get;
    ji.prototype.getKeys = ji.prototype.N;
    ji.prototype.getProperties = ji.prototype.K;
    ji.prototype.set = ji.prototype.set;
    ji.prototype.setProperties = ji.prototype.H;
    ji.prototype.unset = ji.prototype.O;
    ji.prototype.changed = ji.prototype.changed;
    ji.prototype.dispatchEvent = ji.prototype.b;
    ji.prototype.getRevision = ji.prototype.J;
    ji.prototype.on = ji.prototype.G;
    ji.prototype.once = ji.prototype.once;
    ji.prototype.un = ji.prototype.I;
    lh.prototype.watchLayer = lh.prototype.yc;
    lh.prototype.unwatchLayer = lh.prototype.xc;
    lh.prototype.setGoogleMapsActive = lh.prototype.f;
    lh.prototype.findIndex = lh.prototype.findIndex;
    Th.prototype.watchLayer = Th.prototype.yc;
    Th.prototype.unwatchLayer = Th.prototype.xc;
    Th.prototype.setGoogleMapsActive = Th.prototype.f;
    Th.prototype.findIndex = Th.prototype.findIndex;
    Vh.prototype.watchLayer = Vh.prototype.yc;
    Vh.prototype.unwatchLayer = Vh.prototype.xc;
    Vh.prototype.setGoogleMapsActive = Vh.prototype.f;
    Vh.prototype.findIndex = Vh.prototype.findIndex;
    Qf.prototype.draw = Qf.prototype.draw;
    Qf.prototype.onRemove = Qf.prototype.onRemove;
    Of.prototype.draw = Of.prototype.draw;
    Of.prototype.onRemove = Of.prototype.onRemove;
}).call(window);