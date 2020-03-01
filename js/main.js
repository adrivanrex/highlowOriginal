/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        b = "undefined" !== typeof module && module.exports,
        c = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var c, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, e = b.length, f = {}; d < e; d++)
                if ((c = b[d]) && c[1] in a) {
                    for (d = 0; d < c.length; d++) f[b[0][d]] =
                        c[d];
                    return f
                } return !1
        }(),
        e = { change: d.fullscreenchange, error: d.fullscreenerror },
        f = {
            request: function(b) { var e = d.requestFullscreen;
                b = b || a.documentElement; if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[e]();
                else b[e](c && Element.ALLOW_KEYBOARD_INPUT) },
            exit: function() { a[d.exitFullscreen]() },
            toggle: function(a) { this.isFullscreen ? this.exit() : this.request(a) },
            onchange: function(a) { this.on("change", a) },
            onerror: function(a) { this.on("error", a) },
            on: function(c, b) { var d = e[c];
                d && a.addEventListener(d, b, !1) },
            off: function(c,
                b) { var d = e[c];
                d && a.removeEventListener(d, b, !1) },
            raw: d
        };
    d ? (Object.defineProperties(f, { isFullscreen: { get: function() { return !!a[d.fullscreenElement] } }, element: { enumerable: !0, get: function() { return a[d.fullscreenElement] } }, enabled: { enumerable: !0, get: function() { return !!a[d.fullscreenEnabled] } } }), b ? module.exports = f : window.screenfull = f) : b ? module.exports = !1 : window.screenfull = !1
})();
(function() {
    function a(a) { a = String(a); return a.charAt(0).toUpperCase() + a.slice(1) }

    function b(a, c) { var b = -1,
            e = a ? a.length : 0; if ("number" == typeof e && -1 < e && e <= w)
            for (; ++b < e;) c(a[b], b, a);
        else d(a, c) }

    function c(c) { c = String(c).replace(/^ +| +$/g, ""); return /^(?:webOS|i(?:OS|P))/.test(c) ? c : a(c) }

    function d(a, c) { for (var b in a) y.call(a, b) && c(a[b], b, a) }

    function e(c) { return null == c ? a(c) : C.call(c).slice(8, -1) }

    function f(a, c) {
        var b = null != a ? typeof a[c] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(b) &&
            ("object" == b ? !!a[c] : !0)
    }

    function h(a) { return String(a).replace(/([ -])(?!$)/g, "$1?") }

    function p(a, c) { var d = null;
        b(a, function(b, e) { d = c(d, b, e, a) }); return d }

    function m(a) {
        function b(b) {
            return p(b, function(b, d) {
                var e = d.pattern || h(d);
                !b && (b = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((b = String(d.label && !RegExp(e, "i").test(d.label) ? d.label : b).split("/"))[1] && !/[\d.]+/.test(b[0]) && (b[0] +=
                    " " + b[1]), d = d.label || d, b = c(b[0].replace(RegExp(e, "i"), d).replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ").replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return b
            })
        }

        function k(c) { return p(c, function(c, b) { return c || (RegExp(b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null }) }
        var l = u,
            n = a && "object" == typeof a && "String" != e(a);
        n && (l = a, a = null);
        var y = l.navigator || {},
            t = y.userAgent || "";
        a || (a = t);
        var w = n ? !!y.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(C.toString()),
            z = n ? "Object" : "ScriptBridgingProxyObject",
            x = n ? "Object" : "Environment",
            D = n && l.java ? "JavaPackage" : e(l.java),
            V = n ? "Object" : "RuntimeObject";
        x = (D = /\bJava/.test(D) && l.java) && e(l.environment) == x;
        var W = D ? "a" : "\u03b1",
            X = D ? "b" : "\u03b2",
            R = l.document || {},
            I = l.operamini || l.opera,
            O = v.test(O = n && I ? I["[[Class]]"] : e(I)) ? O : I = null,
            g, P = a;
        n = [];
        var Q = null,
            J = a == t;
        t = J && I && "function" == typeof I.version && I.version();
        var A = function(c) {
                return p(c, function(c, b) {
                    return c || RegExp("\\b" + (b.pattern || h(b)) + "\\b", "i").exec(a) && (b.label ||
                        b)
                })
            }([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            q = function(c) { return p(c, function(c, b) { return c || RegExp("\\b" + (b.pattern || h(b)) + "\\b", "i").exec(a) && (b.label || b) }) }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "Edge" }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" },
                { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"
            ]),
            B = b([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"
            ]),
            H = function(c) { return p(c, function(c, b, d) { return c || (b[B] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp("\\b" + h(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d }) }({
                Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                Archos: {},
                Amazon: { Kindle: 1, "Kindle Fire": 1 },
                Asus: { Transformer: 1 },
                "Barnes & Noble": { Nook: 1 },
                BlackBerry: { PlayBook: 1 },
                Google: { "Google TV": 1, Nexus: 1 },
                HP: { TouchPad: 1 },
                HTC: {},
                LG: {},
                Microsoft: { Xbox: 1, "Xbox One": 1 },
                Motorola: { Xoom: 1 },
                Nintendo: { "Wii U": 1, Wii: 1 },
                Nokia: { Lumia: 1 },
                Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                Sony: { PlayStation: 1, "PlayStation Vita": 1 }
            }),
            r = function(b) {
                return p(b, function(b, d) {
                    var e = d.pattern || h(d);
                    if (!b && (b = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                        var f = b,
                            g = d.label || d,
                            k = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        e && g && /^Win/i.test(f) && !/^Windows Phone /i.test(f) && (k = k[/[\d.]+$/.exec(f)]) && (f = "Windows " + k);
                        f = String(f);
                        e && g && (f = f.replace(RegExp(e, "i"), g));
                        b = f = c(f.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return b
                })
            }(["Windows Phone", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        A && (A = [A]);
        H && !B && (B = b([H]));
        if (g = /\bGoogle TV\b/.exec(B)) B = g[0];
        /\bSimulator\b/i.test(a) && (B = (B ? B + " " : "") + "Simulator");
        "Opera Mini" == q && /\bOPiOS\b/.test(a) && n.push("running in Turbo/Uncompressed mode");
        "IE" == q && /\blike iPhone OS\b/.test(a) ? (g = m(a.replace(/like iPhone OS/, "")), H = g.manufacturer, B = g.product) : /^iP/.test(B) ? (q || (q = "Safari"), r = "iOS" + ((g = / OS ([\d_]+)/i.exec(a)) ? " " + g[1].replace(/_/g, ".") : "")) : "Konqueror" != q || /buntu/i.test(r) ? H && "Google" != H && (/Chrome/.test(q) &&
            !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(B)) || /\bAndroid\b/.test(r) && /^Chrome/.test(q) && /\bVersion\//i.test(a) ? (q = "Android Browser", r = /\bAndroid\b/.test(r) ? r : "Android") : "Silk" == q ? (/\bMobi/i.test(a) || (r = "Android", n.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && n.unshift("accelerated")) : "PaleMoon" == q && (g = /\bFirefox\/([\d.]+)\b/.exec(a)) ? n.push("identifying as Firefox " + g[1]) : "Firefox" == q && (g = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (r || (r = "Firefox OS"), B || (B = g[1])) : !q || (g = !/\bMinefield\b/i.test(a) &&
            /\b(?:Firefox|Safari)\b/.exec(q)) ? (q && !B && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(g + "/") + 8)) && (q = null), (g = B || H || r) && (B || H || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r)) && (q = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r) ? r : g) + " Browser")) : "Electron" == q && (g = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && n.push("Chromium " + g) : r = "Kubuntu";
        t || (t = k(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", h(q), "(?:Firefox|Minefield|NetFront)"]));
        if (g = "iCab" == A && 3 < parseFloat(t) && "WebKit" || /\bOpera\b/.test(q) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(A) && "WebKit" || !A && /\bMSIE\b/i.test(a) && ("Mac OS" == r ? "Tasman" : "Trident") || "WebKit" == A && /\bPlayStation\b(?! Vita\b)/i.test(q) && "NetFront") A = [g];
        "IE" == q && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (q += " Mobile", r = "Windows Phone " + (/\+$/.test(g) ? g : g + ".x"), n.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (q = "IE Mobile", r = "Windows Phone 8.x",
            n.unshift("desktop mode"), t || (t = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != q && "Trident" == A && (g = /\brv:([\d.]+)/.exec(a)) && (q && n.push("identifying as " + q + (t ? " " + t : "")), q = "IE", t = g[1]);
        if (J) {
            if (f(l, "global"))
                if (D && (g = D.lang.System, P = g.getProperty("os.arch"), r = r || g.getProperty("os.name") + " " + g.getProperty("os.version")), x) { try { t = l.require("ringo/engine").version.join("."), q = "RingoJS" } catch (U) {
                        (g = l.system) && g.global.system == l.system && (q = "Narwhal", r || (r = g[0].os || null)) } q || (q = "Rhino") } else "object" == typeof l.process &&
                    !l.process.browser && (g = l.process) && ("object" == typeof g.versions && ("string" == typeof g.versions.electron ? (n.push("Node " + g.versions.node), q = "Electron", t = g.versions.electron) : "string" == typeof g.versions.nw && (n.push("Chromium " + t, "Node " + g.versions.node), q = "NW.js", t = g.versions.nw)), q || (q = "Node.js", P = g.arch, r = g.platform, t = (t = /[\d.]+/.exec(g.version)) ? t[0] : null));
            else e(g = l.runtime) == z ? (q = "Adobe AIR", r = g.flash.system.Capabilities.os) : e(g = l.phantom) == V ? (q = "PhantomJS", t = (g = g.version || null) && g.major + "." + g.minor +
                "." + g.patch) : "number" == typeof R.documentMode && (g = /\bTrident\/(\d+)/i.exec(a)) ? (t = [t, R.documentMode], (g = +g[1] + 4) != t[1] && (n.push("IE " + t[1] + " mode"), A && (A[1] = ""), t[1] = g), t = "IE" == q ? String(t[1].toFixed(1)) : t[0]) : "number" == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(q) && (n.push("masking as " + q + " " + t), q = "IE", t = "11.0", A = ["Trident"], r = "Windows");
            r = r && c(r)
        }
        t && (g = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(t) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (J && y.appMinorVersion)) || /\bMinefield\b/i.test(a) &&
            "a") && (Q = /b/i.test(g) ? "beta" : "alpha", t = t.replace(RegExp(g + "\\+?$"), "") + ("beta" == Q ? X : W) + (/\d+\+?/.exec(g) || ""));
        if ("Fennec" == q || "Firefox" == q && /\b(?:Android|Firefox OS)\b/.test(r)) q = "Firefox Mobile";
        else if ("Maxthon" == q && t) t = t.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(B)) "Xbox 360" == B && (r = null), "Xbox 360" == B && /\bIEMobile\b/.test(a) && n.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(q) && (!q || B || /Browser|Mobi/.test(q)) || "Windows CE" != r && !/Mobi/i.test(a))
            if ("IE" == q && J) try {
                null === l.external &&
                    n.unshift("platform preview")
            } catch (U) { n.unshift("embedded") } else(/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(a)) && (g = (RegExp(B.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || t) ? (g = [g, /BB10/.test(a)], r = (g[1] ? (B = null, H = "BlackBerry") : "Device Software") + " " + g[0], t = null) : this != d && "Wii" != B && (J && I || /Opera/.test(q) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == q && /\bOS X (?:\d+\.){2,}/.test(r) || "IE" == q && (r && !/^Win/.test(r) && 5.5 < t || /\bWindows XP\b/.test(r) && 8 < t || 8 == t && !/\bTrident\b/.test(a))) && !v.test(g =
                m.call(d, a.replace(v, "") + ";")) && g.name && (g = "ing as " + g.name + ((g = g.version) ? " " + g : ""), v.test(q) ? (/\bIE\b/.test(g) && "Mac OS" == r && (r = null), g = "identify" + g) : (g = "mask" + g, q = O ? c(O.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(g) && (r = null), J || (t = null)), A = ["Presto"], n.push(g));
            else q += " Mobile";
        if (g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            g = [parseFloat(g.replace(/\.(\d)$/, ".0$1")), g];
            if ("Safari" == q && "+" == g[1].slice(-1)) q = "WebKit Nightly", Q = "alpha", t = g[1].slice(0, -1);
            else if (t == g[1] || t == (g[2] =
                    (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) t = null;
            g[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == g[0] && 537.36 == g[2] && 28 <= parseFloat(g[1]) && "WebKit" == A && (A = ["Blink"]);
            J && (w || g[1]) ? (A && (A[1] = "like Chrome"), g = g[1] || (g = g[0], 530 > g ? 1 : 532 > g ? 2 : 532.05 > g ? 3 : 533 > g ? 4 : 534.03 > g ? 5 : 534.07 > g ? 6 : 534.1 > g ? 7 : 534.13 > g ? 8 : 534.16 > g ? 9 : 534.24 > g ? 10 : 534.3 > g ? 11 : 535.01 > g ? 12 : 535.02 > g ? "13+" : 535.07 > g ? 15 : 535.11 > g ? 16 : 535.19 > g ? 17 : 536.05 > g ? 18 : 536.1 > g ? 19 : 537.01 > g ? 20 : 537.11 > g ? "21+" : 537.13 > g ? 23 : 537.18 > g ? 24 : 537.24 > g ? 25 : 537.36 > g ? 26 : "Blink" !=
                A ? "27" : "28")) : (A && (A[1] = "like Safari"), g = (g = g[0], 400 > g ? 1 : 500 > g ? 2 : 526 > g ? 3 : 533 > g ? 4 : 534 > g ? "4+" : 535 > g ? 5 : 537 > g ? 6 : 538 > g ? 7 : 601 > g ? 8 : "8"));
            A && (A[1] += " " + (g += "number" == typeof g ? ".x" : /[.+]/.test(g) ? "" : "+"));
            "Safari" == q && (!t || 45 < parseInt(t)) && (t = g)
        }
        "Opera" == q && (g = /\bzbov|zvav$/.exec(r)) ? (q += " ", n.unshift("desktop mode"), "zvav" == g ? (q += "Mini", t = null) : q += "Mobile", r = r.replace(RegExp(" *" + g + "$"), "")) : "Safari" == q && /\bChrome\b/.exec(A && A[1]) && (n.unshift("desktop mode"), q = "Chrome Mobile", t = null, /\bOS X\b/.test(r) ? (H =
            "Apple", r = "iOS 4.3+") : r = null);
        t && 0 == t.indexOf(g = /[\d.]+$/.exec(r)) && -1 < a.indexOf("/" + g + "-") && (r = String(r.replace(g, "")).replace(/^ +| +$/g, ""));
        A && !/\b(?:Avant|Nook)\b/.test(q) && (/Browser|Lunascape|Maxthon/.test(q) || "Safari" != q && /^iOS/.test(r) && /\bSafari\b/.test(A[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(q) && A[1]) && (g = A[A.length - 1]) && n.push(g);
        n.length && (n = ["(" + n.join("; ") + ")"]);
        H && B && 0 > B.indexOf(H) && n.push("on " + H);
        B && n.push((/^on /.test(n[n.length -
            1]) ? "" : "on ") + B);
        if (r) { var T = (g = / ([\d.+]+)$/.exec(r)) && "/" == r.charAt(r.length - g[0].length - 1);
            r = { architecture: 32, family: g && !T ? r.replace(g[0], "") : r, version: g ? g[1] : null, toString: function() { var a = this.version; return this.family + (a && !T ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "") } } }(g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P) ? (r && (r.architecture = 64, r.family = r.family.replace(RegExp(" *" + g), "")), q && (/\bWOW64\b/i.test(a) || J && /\w(?:86|32)$/.test(y.cpuClass || y.platform) && !/\bWin64; x64\b/i.test(a)) &&
            n.unshift("32-bit")) : r && /^OS X/.test(r.family) && "Chrome" == q && 39 <= parseFloat(t) && (r.architecture = 64);
        a || (a = null);
        l = {};
        l.description = a;
        l.layout = A && A[0];
        l.manufacturer = H;
        l.name = q;
        l.prerelease = Q;
        l.product = B;
        l.ua = a;
        l.version = q && t;
        l.os = r || { architecture: null, family: null, version: null, toString: function() { return "null" } };
        l.parse = m;
        l.toString = function() { return this.description || "" };
        l.version && n.unshift(t);
        l.name && n.unshift(q);
        r && q && (r != String(r).split(" ")[0] || r != q.split(" ")[0] && !B) && n.push(B ? "(" + r + ")" : "on " +
            r);
        n.length && (l.description = n.join(" "));
        return l
    }
    var k = { "function": !0, object: !0 },
        u = k[typeof window] && window || this,
        l = k[typeof exports] && exports;
    k = k[typeof module] && module && !module.nodeType && module;
    var n = l && k && "object" == typeof global && global;
    !n || n.global !== n && n.window !== n && n.self !== n || (u = n);
    var w = Math.pow(2, 53) - 1,
        v = /\bOpera/;
    n = Object.prototype;
    var y = n.hasOwnProperty,
        C = n.toString,
        z = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (u.platform = z, define(function() { return z })) : l &&
        k ? d(z, function(a, b) { l[b] = a }) : u.platform = z
}).call(this);

function buildIOSMeta() { for (var a = [{ name: "viewport", content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" }, { name: "apple-mobile-web-app-capable", content: "yes" }, { name: "apple-mobile-web-app-status-bar-style", content: "black" }], b = 0; b < a.length; b++) { var c = document.createElement("meta");
        c.name = a[b].name;
        c.content = a[b].content; var d = window.document.head.querySelector('meta[name="' + c.name + '"]');
        d && d.parentNode.removeChild(d);
        window.document.head.appendChild(c) } }

function hideIOSFullscreenPanel() { jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se") }

function buildIOSFullscreenPanel() { jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>') }

function showIOSFullscreenPanel() { jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block") }

function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel(); break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel(); break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel(); break;
                default:
                    hideIOSFullscreenPanel() }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() { __iosResize();
    setTimeout(function() { __iosResize() }, 500) }

function iosInIframe() { try { return window.self !== window.top } catch (a) { return !0 } } $(document).ready(function() { platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && (buildIOSFullscreenPanel(), buildIOSMeta()) });
jQuery(window).resize(function() { platform && "iPhone" === platform.product && "safari" !== platform.name.toLowerCase() && iosResize() });
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() { sizeHandler() });

function trace(a) { console.log(a) }

function getSize(a) {
    var b = a.toLowerCase(),
        c = window.document,
        d = c.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var e = c.createElement("body");
        e.id = "vpw-test-b";
        e.style.cssText = "overflow:scroll";
        var f = c.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + b + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        e.appendChild(f);
        d.insertBefore(e, c.head);
        a = 7 == f["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(e)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() { window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler() }

function isChrome() { return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) }

function isIOS() { var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0; return s_bIsIphone = !1 }

function getIOSWindowHeight() { return document.documentElement.clientWidth / window.innerWidth * window.innerHeight }

function getHeightOfIOSToolbars() { var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight(); return 1 < a ? a : 0 }

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width");
        _checkOrientation(b, a);
        var c = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH),
            d = CANVAS_WIDTH * c;
        c *= CANVAS_HEIGHT;
        if (c < a) { var e = a - c;
            c += e;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * e } else d < b && (e = b - d, d += e, c += CANVAS_HEIGHT / CANVAS_WIDTH * e);
        e = a / 2 - c / 2;
        var f = b / 2 - d / 2,
            h = CANVAS_WIDTH / d;
        if (f * h < -EDGEBOARD_X || e * h < -EDGEBOARD_Y) c = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * c, c *= CANVAS_HEIGHT, e = (a - c) / 2, f = (b - d) / 2, h = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * f * h;
        s_iOffsetY = -1 * e * h;
        0 <= e && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * c, canvas.style.width = d + "px", canvas.style.height = c + "px", s_oStage.scaleX = s_oStage.scaleY =
            2 * Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", c + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = c, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, c / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > e || (e = (a - c) / 2);
        $("#canvas").css("top", e + "px");
        $("#canvas").css("left", f + "px");
        d = CANVAS_WIDTH;
        c = CANVAS_HEIGHT;
        b = window.innerWidth;
        a = window.innerHeight;
        s_iScaleFactor = Math.min(a / c, b / d);
        s_oCanvasLeft = $("#canvas").offset().left;
        s_oCanvasTop = $("#canvas").offset().top;
        fullscreenHandler()
    }
}

function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, b, c) { var d = new createjs.Bitmap(a),
        e = new createjs.Shape;
    b && c ? e.graphics.beginFill("#fff").drawRect(0, 0, b, c) : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = e; return d }

function createSprite(a, b, c, d, e, f) { a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-c, -d, e, f);
    a.hitArea = b; return a }

function randomFloatBetween(a, b, c) { "undefined" === typeof c && (c = 2); return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(c)) }

function shuffle(a) { for (var b = a.length, c, d; 0 !== b;) d = Math.floor(Math.random() * b), --b, c = a[b], a[b] = a[d], a[d] = c; return a }

function bubbleSort(a) { do { var b = !1; for (var c = 0; c < a.length - 1; c++) a[c] > a[c + 1] && (b = a[c], a[c] = a[c + 1], a[c + 1] = b, b = !0) } while (b) }
Array.prototype.sortOn = function() { var a = this.slice(); if (!arguments.length) return a.sort(); var b = Array.prototype.slice.call(arguments); return a.sort(function(a, d) { for (var c = b.slice(), f = c.shift(); a[f] == d[f] && c.length;) f = c.shift(); return a[f] == d[f] ? 0 : a[f] > d[f] ? 1 : -1 }) };

function easeLinear(a, b, c, d) { return c * a / d + b }

function easeInQuad(a, b, c, d) { return c * (a /= d) * a + b }

function easeInSine(a, b, c, d) { return -c * Math.cos(a / d * (Math.PI / 2)) + c + b }

function easeInCubic(a, b, c, d) { return c * (a /= d) * a * a + b }

function getTrajectoryPoint(a, b) { var c = new createjs.Point,
        d = (1 - a) * (1 - a),
        e = a * a;
    c.x = d * b.start.x + 2 * (1 - a) * a * b.traj.x + e * b.end.x;
    c.y = d * b.start.y + 2 * (1 - a) * a * b.traj.y + e * b.end.y; return c }

function formatTime(a) { a /= 1E3; var b = Math.floor(a / 60);
    a = parseFloat(a - 60 * b).toFixed(1); var c = "";
    c = 10 > b ? c + ("0" + b + ":") : c + (b + ":"); return 10 > a ? c + ("0" + a) : c + a }

function degreesToRadians(a) { return a * Math.PI / 180 }

function checkRectCollision(a, b) { var c = getBounds(a, .9); var d = getBounds(b, .98); return calculateIntersection(c, d) }

function calculateIntersection(a, b) { var c, d, e, f; var h = a.x + (c = a.width / 2); var p = a.y + (d = a.height / 2); var m = b.x + (e = b.width / 2); var k = b.y + (f = b.height / 2);
    h = Math.abs(h - m) - (c + e);
    p = Math.abs(p - k) - (d + f); return 0 > h && 0 > p ? (h = Math.min(Math.min(a.width, b.width), -h), p = Math.min(Math.min(a.height, b.height), -p), { x: Math.max(a.x, b.x), y: Math.max(a.y, b.y), width: h, height: p, rect1: a, rect2: b }) : null }

function getBounds(a, b) {
    var c = { x: Infinity, y: Infinity, width: 0, height: 0 };
    if (a instanceof createjs.Container) { c.x2 = -Infinity;
        c.y2 = -Infinity; var d = a.children,
            e = d.length,
            f; for (f = 0; f < e; f++) { var h = getBounds(d[f], 1);
            h.x < c.x && (c.x = h.x);
            h.y < c.y && (c.y = h.y);
            h.x + h.width > c.x2 && (c.x2 = h.x + h.width);
            h.y + h.height > c.y2 && (c.y2 = h.y + h.height) } Infinity == c.x && (c.x = 0);
        Infinity == c.y && (c.y = 0);
        Infinity == c.x2 && (c.x2 = 0);
        Infinity == c.y2 && (c.y2 = 0);
        c.width = c.x2 - c.x;
        c.height = c.y2 - c.y;
        delete c.x2;
        delete c.y2 } else {
        if (a instanceof createjs.Bitmap) {
            e =
                a.sourceRect || a.image;
            f = e.width * b;
            var p = e.height * b
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) { e = a.spriteSheet.getFrame(a.currentFrame);
                f = e.rect.width;
                p = e.rect.height;
                d = e.regX; var m = e.regY } else c.x = a.x || 0, c.y = a.y || 0;
        else c.x = a.x || 0, c.y = a.y || 0;
        d = d || 0;
        f = f || 0;
        m = m || 0;
        p = p || 0;
        c.regX = d;
        c.regY = m;
        e = a.localToGlobal(0 - d, 0 - m);
        h = a.localToGlobal(f - d, p - m);
        f = a.localToGlobal(f - d, 0 - m);
        d = a.localToGlobal(0 - d, p - m);
        c.x =
            Math.min(Math.min(Math.min(e.x, h.x), f.x), d.x);
        c.y = Math.min(Math.min(Math.min(e.y, h.y), f.y), d.y);
        c.width = Math.max(Math.max(Math.max(e.x, h.x), f.x), d.x) - c.x;
        c.height = Math.max(Math.max(Math.max(e.y, h.y), f.y), d.y) - c.y
    }
    return c
}

function NoClickDelay(a) { this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1) }

function shuffle(a) { for (var b = a.length, c, d; 0 < b;) d = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[d], a[d] = c; return a }
NoClickDelay.prototype = {
    handleEvent: function(a) { switch (a.type) {
            case "touchstart":
                this.onTouchStart(a); break;
            case "touchmove":
                this.onTouchMove(a); break;
            case "touchend":
                this.onTouchEnd(a) } },
    onTouchStart: function(a) { a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1) },
    onTouchMove: function(a) { this.moved = !0 },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) { a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode); var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b) }
    }
};
(function() {
    function a(a) { var c = { focus: "visible", focusin: "visible", pageshow: "visible", blur: "hidden", focusout: "hidden", pagehide: "hidden" };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[b] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate()) }
    var b = "hidden";
    b in document ? document.addEventListener("visibilitychange", a) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (b = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() { null !== s_oMain && s_oMain.startUpdate() }

function ctlArcadePause() { null !== s_oMain && s_oMain.stopUpdate() }

function getParamValue(a) { for (var b = window.location.search.substring(1).split("&"), c = 0; c < b.length; c++) { var d = b[c].split("="); if (d[0] == a) return d[1] } }

function playSound(a, b, c) { return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(b), s_aSounds[a].loop(c), s_aSounds[a]) : null }

function stopSound(a) {!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop() }

function setVolume(a, b) {!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b) }

function setMute(a, b) {!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b) }

function fullscreenHandler() { ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut()) }
if (screenfull.enabled) screenfull.on("change", function() { s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut() });

function CSpriteLibrary() {
    var a = {},
        b, c, d, e, f, h;
    this.init = function(a, m, k) { b = {};
        d = c = 0;
        e = a;
        f = m;
        h = k };
    this.addSprite = function(d, e) { if (a.hasOwnProperty(d)) return !1; var f = new Image;
        a[d] = b[d] = { szPath: e, oSprite: f, bLoaded: !1 };
        c++; return !0 };
    this.getSprite = function(b) { return a.hasOwnProperty(b) ? a[b].oSprite : null };
    this._onSpritesLoaded = function() { c = 0;
        f.call(h) };
    this._onSpriteLoaded = function() { e.call(h);++d === c && this._onSpritesLoaded() };
    this.loadSprites = function() {
        for (var a in b) b[a].oSprite.oSpriteLibrary = this,
            b[a].oSprite.szKey = a, b[a].oSprite.onload = function() { this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey) }, b[a].oSprite.onerror = function(a) { var c = a.currentTarget;
                setTimeout(function() { b[c.szKey].oSprite.src = b[c.szKey].szPath }, 500) }, b[a].oSprite.src = b[a].szPath
    };
    this.setLoaded = function(b) { a[b].bLoaded = !0 };
    this.isLoaded = function(b) { return a[b].bLoaded };
    this.getNumSprites = function() { return c }
}
var CANVAS_WIDTH = 1600,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 240,
    EDGEBOARD_Y = 0,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = !1,
    PRIMARY_FONT = "arialbold",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    FICHE_WIDTH = 40,
    FICHE_VALUE = [],
    WIN_OCCURRENCE, TURN_CARD_SPEED, CARD_WIDTH = 122,
    CARD_HEIGHT = 190,
    SHOWTEXT_SPEED, START_MONEY, GAME_CASH, COLOR_FICHE_PER_VALUE = ["#000", "#000", "#fff", "#000", "#fff"],
    AD_SHOW_COUNTER, ENABLE_FULLSCREEN,
    ENABLE_CHECK_ORIENTATION, SOUNDTRACK_VOLUME_IN_GAME = 1,
    TEXT_GAMEOVER = "YOU LOSE!\nOUT OF MONEY",
    TEXT_ALLIN = "ALL IN!",
    TEXT_CLEARBET = "CLEAR BET",
    TEXT_GIVEUP = "GIVE UP",
    TEXT_MAKE = "MAKE YOUR BET!",
    TEXT_ENDGIVEUP = "ARE YOU SURE YOU WANT TO EXIT AND SAVE ",
    TEXT_YES = "YES",
    TEXT_NO = "NO",
    TEXT_CURRENCY = "$",
    TEXT_TURN = "TURN ",
    TEXT_HIGHS = "HIGHs: ",
    TEXT_LOWS = "LOWs: ",
    TEXT_GUESS = "TOTAL GUESS: ",
    TEXT_BEST = "BEST SCORE: ",
    TEXT_RECHARGE = "RECHARGE",
    TEXT_WIN = "YOU WIN",
    TEXT_LOSE = "YOU LOSE",
    TEXT_CREDITS_DEVELOPED = "DEVELOPED BY",
    TEXT_PRELOADER_CONTINUE = "START",
    TEXT_HELP1 = "THE AIM OF THE GAME IS TO GUESS WHETHER THE FACE DOWN CARD IS HIGH OR LOW",
    TEXT_HELP2 = "CARDS FROM 2 TO 7 ARE LOW THOSE BETWEEN 8 AND KING ARE HIGH. THE ACE IS BOTH HIGH AND LOW, SO IT'S ALWAYS WINNING",
    TEXT_HELP3 = 'CLICK ON CHIPS TO CHOOSE HOW MUCH YOU WANT BET, THEN CLICK ON "BET" BUTTON TO PLAY. IF YOU WIN, YOU DOUBLE YOUR WAGER',
    TEXT_HELP4 = 'TO SAVE YOUR CURRENT PRIZE MONEY, CLICK ON "GIVE UP" BUTTON, THIS WILL END YOUR GAME',
    TEXT_SHARE_IMAGE = "200x200.jpg",
    TEXT_SHARE_TITLE = "Congratulations!",
    TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ",
    TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, b, c, d, e, f, h, p, m, k;
    this._init = function() { s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        k = new createjs.Container;
        s_oStage.addChild(k) };
    this.unload = function() { k.removeAllChildren();
        m.unload() };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() { this.attachSprites();
        s_oMain.preloaderReady() };
    this.attachSprites = function() {
        var u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(u);
        u = s_oSpriteLibrary.getSprite("200x200");
        h = createBitmap(u);
        h.regX = .5 * u.width;
        h.regY = .5 * u.height;
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2 - 180;
        k.addChild(h);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(h.x - 100, h.y - 100, 200, 200, 10);
        k.addChild(p);
        h.mask = p;
        u = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(u);
        d.x = CANVAS_WIDTH / 2 - u.width / 2;
        d.y = CANVAS_HEIGHT / 2 + 50;
        k.addChild(d);
        a = u.width;
        b = u.height;
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, b);
        k.addChild(e);
        d.mask = e;
        c = new createjs.Text("", "40px " + PRIMARY_FONT, "#fff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 110;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        k.addChild(c);
        u = s_oSpriteLibrary.getSprite("but_start");
        m = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, u, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", !0, k);
        m.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        m.setVisible(!1);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.addChild(f);
        createjs.Tween.get(f).to({ alpha: 0 }, 500).call(function() { createjs.Tween.removeTweens(f);
            k.removeChild(f) })
    };
    this._onButStartRelease = function() { s_oMain._onRemovePreloader() };
    this.refreshLoader = function(f) {
        c.text = f + "%";
        100 === f && (s_oMain._onRemovePreloader(), c.visible = !1, d.visible = !1);
        e.graphics.clear();
        f = Math.floor(f * a / 100);
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, f, b)
    };
    this._init()
}

function CMain(a) {
    var b, c = 0,
        d = 0,
        e = STATE_LOADING,
        f, h;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) { return !1 }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = 30;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        f = new CPreloader;
    };
    this.preloaderReady = function() { this._loadImages();!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        b = !0 };
    this.soundLoaded = function() { c++;
        f.refreshLoader(Math.floor(c / d * 100)) };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({ path: "./sounds/", filename: "card", loop: !1, volume: 1, ingamename: "card" });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "game_over", loop: !1, volume: 1, ingamename: "game_over" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "snap", loop: !1, volume: 1, ingamename: "snap" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "chip", loop: !1, volume: 1, ingamename: "chip" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "win", loop: !1, volume: 1, ingamename: "win" });
        s_aSoundsInfo.push({ path: "./sounds/", filename: "soundtrack", loop: !0, volume: 1, ingamename: "soundtrack" });
        d += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function(a, b) {
        setTimeout(function() {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(a, b) { for (var c = 0; c < s_aSoundsInfo.length; c++)
                        if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) { s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0); break } },
                onplayerror: function(a) {
                    for (var b =
                            0; b < s_aSoundsInfo.length; b++)
                        if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) { s_aSounds[s_aSoundsInfo[b].ingamename].once("unlock", function() { s_aSounds[s_aSoundsInfo[b].ingamename].play(); "soundtrack" === s_aSoundsInfo[b].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME) }); break }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box",
            "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_bet", "./sprites/but_bet.png");
        s_oSpriteLibrary.addSprite("but_clear_bet", "./sprites/but_clear_bet.png");
        s_oSpriteLibrary.addSprite("money_panel",
            "./sprites/money_panel.png");
        s_oSpriteLibrary.addSprite("panel_high_sx", "./sprites/panel_high_sx.png");
        s_oSpriteLibrary.addSprite("arrow_high", "./sprites/arrow_high.png");
        s_oSpriteLibrary.addSprite("arrow_low", "./sprites/arrow_low.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
        s_oSpriteLibrary.addSprite("card_spritesheet",
            "./sprites/card_spritesheet.png");
        for (var a, b = 0; 5 > b; b++) a = b, s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() { c++;
        f.refreshLoader(Math.floor(c / d * 100)) };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() { f.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu() };
    this.gotoMenu = function() { new CMenu;
        e = STATE_MENU };
    this.gotoGame = function(a) {
        s_bEasyMode = a;
        h = new CGame(p);
        e = STATE_GAME
    };
    this.gotoHelp = function() { new CHelp;
        e = STATE_HELP };
    this.stopUpdate = function() { b = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0) };
    this.startUpdate = function() { s_iPrevTime = (new Date).getTime();
        b = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1) };
    this._update = function(a) {
        if (!1 !== b) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            e === STATE_GAME && h.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var p = a;
    SHOW_CREDITS = a.show_credits;
    ENABLE_FULLSCREEN = p.fullscreen;
    ENABLE_CHECK_ORIENTATION = p.check_orientation;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bEasyMode, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_oGameSettings, s_bFullscreen = !1,
    s_aSounds, s_aSoundsInfo;

function CTextButton(a, b, c, d, e, f, h, p, m) {
    var k, u, l, n, w, v, y, C, z;
    this._init = function(a, b, c, d, e, f, h, l, m) {
        k = !1;
        n = [];
        w = [];
        v = new createjs.Container;
        v.x = a;
        v.y = b;
        v.regX = c.width / 2;
        v.regY = c.height / 2;
        m.addChild(v);
        l ? z = createBitmap(c) : (a = new createjs.SpriteSheet({ images: [c], frames: { width: c.width / 2, height: c.height, regX: c.width / 2 / 2, regY: c.height / 2 }, animations: { state_true: [0], state_false: [1] } }), z = createSprite(a, "state_false", c.width / 2 / 2, c.height / 2, c.width / 2, c.height), v.regX = 0, v.regY = 0);
        v.addChild(z);
        C = new CTLText(v,
            -c.width / 4 + 2, -c.height / 2 + 2, c.width / 2 - 10, c.height - 10, h, "center", "#000", e, 1, 0, 0, d, !0, !0, !1, !1);
        y = new CTLText(v, -c.width / 4, -c.height / 2, c.width / 2 - 10, c.height - 10, h, "center", f, e, 1, 0, 0, d, !0, !0, !1, !1);
        this._initListener()
    };
    this.unload = function() { v.off("mousedown", u);
        v.off("pressup", l);
        m.removeChild(v) };
    this.setVisible = function(a) { v.visible = a };
    this._initListener = function() { u = v.on("mousedown", this.buttonDown);
        l = v.on("pressup", this.buttonRelease) };
    this.addEventListener = function(a, b, c) { n[a] = b;
        w[a] = c };
    this.buttonRelease =
        function() { k || (v.scaleX = 1, v.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(w[ON_MOUSE_UP])) };
    this.buttonDown = function() { k || (v.scaleX = .9, v.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(w[ON_MOUSE_DOWN])) };
    this.enable = function() { k = !1;
        p || z.gotoAndStop("state_true") };
    this.disable = function() { k = !0;
        p || z.gotoAndStop("state_false") };
    this.setTextPosition = function(a, b) { var c = Math.ceil(h / 20);
        C.x = a + c;
        C.y = b + c;
        y.x = a;
        y.y = b };
    this.setPosition = function(a, b) { v.x = a;
        v.y = b };
    this.setX = function(a) { v.x = a };
    this.setY = function(a) {
        v.y =
            a
    };
    this.getButtonImage = function() { return v };
    this.getX = function() { return v.x };
    this.getY = function() { return v.y };
    this._init(a, b, c, d, e, f, h, p, m);
    return this
}

function CToggle(a, b, c, d) {
    var e, f, h, p, m, k;
    this._init = function(a, b, c, d) { f = [];
        h = []; var v = new createjs.SpriteSheet({ images: [c], frames: { width: c.width / 2, height: c.height, regX: c.width / 2 / 2, regY: c.height / 2 }, animations: { state_true: [0], state_false: [1] } });
        e = d;
        k = createSprite(v, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        k.x = a;
        k.y = b;
        k.stop();
        k.cursor = "pointer";
        s_oStage.addChild(k);
        this._initListener() };
    this.unload = function() { k.off("mousedown", p);
        k.off("pressup", m);
        s_oStage.removeChild(k) };
    this._initListener =
        function() { p = k.on("mousedown", this.buttonDown);
            m = k.on("pressup", this.buttonRelease) };
    this.addEventListener = function(a, c, b) { f[a] = c;
        h[a] = b };
    this.setActive = function(a) { e = a;
        k.gotoAndStop("state_" + e) };
    this.buttonRelease = function() { k.scaleX = 1;
        k.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        k.gotoAndStop("state_" + e);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(h[ON_MOUSE_UP], e) };
    this.buttonDown = function() { k.scaleX = .9;
        k.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]) };
    this.setPosition = function(a, c) {
        k.x =
            a;
        k.y = c
    };
    this._init(a, b, c, d)
}

function CGfxButton(a, b, c, d, e) {
    var f, h, p, m, k, u = [],
        l;
    this._init = function(a, c, b, d) { f = !1;
        h = [];
        p = [];
        d ? (l = createBitmap(b), l.regX = b.width / 2, l.regY = b.height / 2) : (d = new createjs.SpriteSheet({ images: [b], frames: { width: b.width / 2, height: b.height, regX: b.width / 2 / 2, regY: b.height / 2 }, animations: { state_true: [0], state_false: [1] } }), l = createSprite(d, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height));
        l.x = a;
        l.y = c;
        l.cursor = "pointer";
        e.addChild(l);
        this._initListener() };
    this.unload = function() {
        l.off("mousedown", m);
        l.off("pressup",
            k);
        e.removeChild(l)
    };
    this.setVisible = function(a) { l.visible = a };
    this._initListener = function() { m = l.on("mousedown", this.buttonDown);
        k = l.on("pressup", this.buttonRelease) };
    this.addEventListener = function(a, b, c) { h[a] = b;
        p[a] = c };
    this.addEventListenerWithParams = function(a, b, c, d) { h[a] = b;
        p[a] = c;
        u = d };
    this.buttonRelease = function() { f || (playSound("click", 1, !1), l.scaleX = 1, l.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(p[ON_MOUSE_UP], u)) };
    this.buttonDown = function() {
        f || (l.scaleX = .9, l.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN],
            u))
    };
    this.setPosition = function(a, b) { l.x = a;
        l.y = b };
    this.setX = function(a) { l.x = a };
    this.setY = function(a) { l.y = a };
    this.enable = function() { f = !1;
        d || l.gotoAndStop("state_true") };
    this.disable = function() { f = !0;
        d || l.gotoAndStop("state_false") };
    this.getButtonImage = function() { return l };
    this.getDisable = function() { return f };
    this.getX = function() { return l.x };
    this.getY = function() { return l.y };
    this._init(a, b, c, d);
    return this
}

function CMenu() {
    var a, b, c, d, e, f, h, p, m, k, u, l, n = null,
        w = null;
    this._init = function() {
        h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(h);
        var v = s_oSpriteLibrary.getSprite("but_play");
        p = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130, v, !0, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH - v.height / 2 - 10, f = v.height / 2 + 10, k = new CToggle(e, f, v, s_bAudioActive), k.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        SHOW_CREDITS ? (v = s_oSpriteLibrary.getSprite("but_credits"), a = v.width / 2 + 10, b = v.height / 2 + 10, u = new CGfxButton(a, b, v, !0, s_oStage), u.addEventListener(ON_MOUSE_UP, this._onCredits, this), v = s_oSpriteLibrary.getSprite("but_fullscreen"), c = a + v.width / 2 + 10) : (v = s_oSpriteLibrary.getSprite("but_fullscreen"), c = v.width / 4 + 10);
        d = v.height / 2 + 10;
        var y = window.document,
            C = y.documentElement;
        n = C.requestFullscreen || C.mozRequestFullScreen || C.webkitRequestFullScreen || C.msRequestFullscreen;
        w = y.exitFullscreen ||
            y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (n = !1);
        n && screenfull.enabled && (l = new CToggle(c, d, v, s_bFullscreen, !0), l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({ alpha: 0 }, 1E3).call(function() { m.visible = !1 });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(h, m) {
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || k.setPosition(e - h, m + f);
        SHOW_CREDITS && u.setPosition(a + h, m + b);
        n && screenfull.enabled && l.setPosition(c + h, d + m)
    };
    this.unload = function() { p.unload();
        p = null; if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k.unload(), k = null;
        SHOW_CREDITS && (u.unload(), u = null);
        n && screenfull.enabled && l.unload();
        s_oStage.removeChild(h);
        s_oMenu = h = null };
    this._onAudioToggle = function() { Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive };
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        $(s_oMain).trigger("start_level", 1);
        s_oMain.gotoGame()
    };
    this.resetFullscreenBut = function() { n && screenfull.enabled && l.setActive(s_bFullscreen) };
    this._onFullscreenRelease = function() { s_bFullscreen ? w.call(window.document) : n.call(window.document.documentElement);
        sizeHandler() };
    this._onCredits = function() { new CCreditsPanel };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var b, c, d, e, f, h, p, m, k, u, l, n, w, v, y, C, z, D, G, N, E, K = null,
        L, t;
    this._init = function() { d = !1;
        e = START_MONEY;
        k = GAME_CASH;
        h = f = 0;
        p = 1;
        v = w = n = l = u = m = 0;
        y = [];
        C = [];
        z = [];
        D = [];
        s_oGameSettings = new CGameSettings; var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        E = new CInterface;
        t = new createjs.Container;
        s_oStage.addChild(t);
        b = CANVAS_WIDTH / 2;
        c = CANVAS_HEIGHT / 2 - 30;
        this._setCards();
        this._setHideCardOnTable();
        L = new CFichesController(463, 519, t);
        0 >= e ? this.gameOver() : new CHelpPanel };
    this._setCards = function() { y = [];
        y = s_oGameSettings.getShuffledCardDeck();
        C = [];
        z = [];
        D = []; for (var a = 0; a < y.length; a++) { var b = s_oGameSettings.getCardValue(y[a]);
            1 < b && 8 > b ? C.push(y[a]) : 7 < b && 14 > b ? z.push(y[a]) : D.push(y[a]) } };
    this.tryShowAd = function() { v++;
        v === AD_SHOW_COUNTER && (v = 0, $(s_oMain).trigger("show_interlevel_ad")) };
    this.unload = function() { E.unload();
        null !== K && K.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren() };
    this.resetBet = function() { L.reset();
        e += f;
        f = 0;
        E.refreshMoney(e) };
    this.updateCurBet =
        function(a) { 0 > a && (a = e);
            e -= a;
            f += a;
            0 > e ? (f += e, e = 0, E.disableAllIn(), y = [], y = s_oGameSettings.getShuffledCardDeck()) : 0 === e && E.disableAllIn();
            E.refreshMoney(e);
            L.createFichesPile(f) };
    this._setHideCardOnTable = function() { N = new CCard(b, c, s_oStage, 0, s_oGameSettings.getCardValue(0)) };
    this._pickCard = function(a) { a = "high" === a ? z.pop() : "low" === a ? C.pop() : D.pop();
        G = new CCard(b, c, s_oStage, a, s_oGameSettings.getCardValue(a)) };
    this.onPlayerSelection = function(a) {
        if (0 === e + f) this.gameOver();
        else {
            N.unload();
            k += f;
            var b = 100 * Math.random();
            $(s_oMain).trigger("bet_placed", f);
            k < 2 * f && (b = WIN_OCCURRENCE + 1);
            if (b < WIN_OCCURRENCE) { b = Math.random(); var c = 4 / (52 - h); "high" === a ? (d = !0, b < c && 0 !== D.length || 0 === z.length ? this._pickCard("ace") : this._pickCard("high")) : (d = !1, b < c && 0 !== D.length || 0 === C.length ? this._pickCard("ace") : this._pickCard("low")) } else "high" === a ? (d = !0, this._pickCard("low")) : (d = !1, this._pickCard("high"));
            G.showCard()
        }
    };
    this.setMoney = function(a) { e = a;
        E.refreshMoney(a) };
    this.checkWin = function(a) {
        if (!d && 8 > a.getRank()) {
            var c = 2 * f;
            new CWinText(TEXT_WIN +
                " " + TEXT_CURRENCY + c + "!", b, c);
            m++;
            n++;
            w++;
            playSound("win", .3, !1)
        } else d && (8 <= a.getRank() || 1 === a.getRank()) ? (c = 2 * f, new CWinText(TEXT_WIN + " " + TEXT_CURRENCY + c + "!", b, c), m++, u++, l++, playSound("win", .3, !1)) : (playSound("game_over", .3, !1), c = f, new CWinText(TEXT_LOSE + " " + TEXT_CURRENCY + c + "!", b, 0), 8 > a.getRank() ? w++ : l++)
    };
    this._calculateStats = function() { var a = (m / p * 100).toFixed(2);
        E.refreshGuess(m, a);
        0 !== l && (a = (u / l * 100).toFixed(2), E.refreshHighs(u, l, a));
        0 !== w && (a = (n / w * 100).toFixed(2), E.refreshLows(n, w, a)) };
    this.refreshGame =
        function(a) { e += a;
            k -= a;
            $(s_oMain).trigger("save_score", [e, "standard"]);
            this._calculateStats();
            E.refreshMoney(e);
            f = 0;
            L.reset();
            G.unload();
            h++;
            p++;
            E.refreshTurn(p); if (0 === C.length || 0 === z.length) h = 0, this._setCards();
            this._setHideCardOnTable();
            E.initState();
            0 === e && this.gameOver() };
    this.onGiveUp = function() { new CGiveupPanel(s_oSpriteLibrary.getSprite("msg_box"), e) };
    this.onExit = function() { $(s_oMain).trigger("save_score", [e, "standard"]);
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("share_event", [e]) };
    this._onExitHelp = function() { _bStartGame = !0 };
    this.gameOver = function() { K = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        K.show() };
    this.update = function() {};
    s_oGame = this;
    WIN_OCCURRENCE = a.win_occurrence;
    START_MONEY = a.starting_money;
    GAME_CASH = a.starting_cash;
    FICHES_VALUE = a.fiches_value;
    TURN_CARD_SPEED = a.turn_card_speed;
    SHOWTEXT_SPEED = a.showtext_timespeed;
    AD_SHOW_COUNTER = a.ad_show_counter;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, b, c, d, e, f, h, p, m, k, u, l, n, w, v, y, C, z, D, G, N, E, K, L, t, M = null,
        S = null;
    this._init = function() {
        var x = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - x.height / 2 - 10;
        f = x.height / 2 + 10;
        p = new CGfxButton(e, f, x, !0, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var F = CANVAS_WIDTH - x.width / 2 - 80;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x = s_oSpriteLibrary.getSprite("audio_icon"), c = F, d = x.height / 2 + 10, h = new CToggle(c, d, x, s_bAudioActive), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        F = window.document;
        x = F.documentElement;
        M = x.requestFullscreen || x.mozRequestFullScreen || x.webkitRequestFullScreen || x.msRequestFullscreen;
        S = F.exitFullscreen || F.mozCancelFullScreen || F.webkitExitFullscreen || F.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (M = !1);
        M && screenfull.enabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), a = x.width / 4 + 10, b = x.height / 2 + 10, t = new CToggle(a, b, x, s_bFullscreen, !0), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = s_oSpriteLibrary.getSprite("but_bet");
        u = new CTextButton(1237, CANVAS_HEIGHT - 46, x, TEXT_ALLIN, PRIMARY_FONT, "#ffffff", 40, !1, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onButAllinRelease, this);
        u.enable();
        x = s_oSpriteLibrary.getSprite("but_clear_bet");
        m = new CTextButton(337, CANVAS_HEIGHT - 63, x, TEXT_CLEARBET, PRIMARY_FONT, "#ffffff", 20, !1, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButClearBetRelease, this);
        m.enable();
        x = s_oSpriteLibrary.getSprite("but_clear_bet");
        k = new CTextButton(337, CANVAS_HEIGHT - 19, x, TEXT_GIVEUP, PRIMARY_FONT, "#ffffff",
            20, !1, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButGiveupRelease, this);
        k.enable();
        x = s_oSpriteLibrary.getSprite("arrow_high");
        y = new CGfxButton(CANVAS_WIDTH / 2 - x.height / 2 - 100, CANVAS_HEIGHT / 2 - x.height / 2 - 5, x, !1, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onArrowHigh, this);
        x = s_oSpriteLibrary.getSprite("arrow_low");
        C = new CGfxButton(CANVAS_WIDTH / 2 - x.height / 2 + 235, CANVAS_HEIGHT / 2 - x.height / 2 + 85, x, !1, s_oStage);
        C.addEventListener(ON_MOUSE_UP, this._onArrowLow, this);
        z = new createjs.Shape;
        z.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0,
            0, 135, 135);
        z.visible = !1;
        z.on("mousedown", function() {});
        s_oStage.addChild(z);
        this.enableArrow(!1);
        F = [];
        for (x = 0; 5 > x; x++) F[x] = new CFiche(490 + 50 * x, 639, x, FICHES_VALUE[x], !0, s_oStage), F[x].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, x);
        D = new createjs.Shape;
        D.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(420, 614, CANVAS_WIDTH, 150);
        D.visible = !1;
        D.on("mousedown", function() {});
        s_oStage.addChild(D);
        w = new CTLText(s_oStage, 444, 560, 300, 58, 28, "center", "#000", PRIMARY_FONT, 1, 0, 0, TEXT_MAKE,
            !0, !0, !0, !1);
        v = new CTLText(s_oStage, 442, 558, 300, 58, 28, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_MAKE, !0, !0, !0, !1);
        x = s_oSpriteLibrary.getSprite("money_panel");
        F = createBitmap(x);
        F.x = 282;
        F.y = 659;
        s_oStage.addChild(F);
        l = new CTLText(s_oStage, 434, 664, 300, 32, 32, "center", "#000", PRIMARY_FONT, 1, 0, 0, TEXT_CURRENCY + " " + START_MONEY, !0, !0, !1, !1);
        n = new CTLText(s_oStage, 432, 662, 300, 32, 32, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_CURRENCY + " " + START_MONEY, !0, !0, !1, !1);
        G = new createjs.Container;
        G.x = 242;
        G.y = 74;
        s_oStage.addChild(G);
        x = s_oSpriteLibrary.getSprite("panel_high_sx");
        F = createBitmap(x);
        G.addChild(F);
        N = new CTLText(G, 10, 5, 250, 24, 24, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_TURN + "1", !0, !0, !1, !1);
        E = new CTLText(G, 10, 30, 250, 24, 18, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_HIGHS + "0/0", !0, !0, !1, !1);
        K = new CTLText(G, 10, 55, 250, 24, 18, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_LOWS + "0/0", !0, !0, !1, !1);
        L = new CTLText(G, 10, 80, 250, 24, 18, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_GUESS + "0", !0, !0, !1, !1);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos =
        function(k, l) { p.setPosition(e - k, f + l);!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(c - k, d + l);
            M && screenfull.enabled && t.setPosition(a + k, b + l) };
    this.unload = function() { if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
        M && screenfull.enabled && t.unload();
        p.unload();
        u.unload();
        m.unload();
        k.unload();
        y.unload();
        C.unload(); for (var a = 0; a < FICHE_VALUE.length; a++)(void 0)[a].unload();
        D.off("mousedown", function() {});
        z.off("mousedown", function() {});
        s_oStage.removeChild(G);
        s_oInterface = null };
    this.refreshMoney = function(a) { l.refreshText(TEXT_CURRENCY + " " + a);
        n.refreshText(TEXT_CURRENCY + " " + a) };
    this.refreshTurn = function(a) { N.refreshText(TEXT_TURN + a) };
    this.refreshHighs = function(a, b, c) { E.refreshText(TEXT_HIGHS + a + "/" + b + " (" + c + "%)") };
    this.refreshLows = function(a, b, c) { K.refreshText(TEXT_LOWS + a + "/" + b + " (" + c + "%)") };
    this.refreshGuess = function(a, b) { L.refreshText(TEXT_GUESS + a + " (" + b + "%)") };
    this.disableAllIn = function() { u.disable() };
    this.initState = function() {
        u.enable();
        m.enable();
        k.enable();
        z.visible = !1;
        w.setAlpha(1);
        v.setAlpha(1);
        this.enableArrow(!1);
        this._enableFiche(!0)
    };
    this._onButAllinRelease = function() { u.disable();
        k.disable();
        w.setAlpha(0);
        v.setAlpha(0);
        this.enableArrow(!0);
        this._enableFiche(!1);
        s_oGame.updateCurBet(-1) };
    this._onButGiveupRelease = function() { s_oGame.onGiveUp() };
    this._onButClearBetRelease = function() { s_oGame.resetBet();
        u.enable();
        k.enable();
        w.setAlpha(1);
        v.setAlpha(1);
        this.enableArrow(!1);
        this._enableFiche(!0) };
    this._onArrowHigh = function() {
        C.disable();
        m.disable();
        k.disable();
        this._enableFiche(!1);
        z.x = CANVAS_WIDTH / 2 - 230;
        z.y = CANVAS_HEIGHT / 2 - 140;
        z.visible = !0;
        s_oGame.onPlayerSelection("high")
    };
    this._onArrowLow = function() { y.disable();
        m.disable();
        k.disable();
        this._enableFiche(!1);
        z.x = CANVAS_WIDTH / 2 + 100;
        z.y = CANVAS_HEIGHT / 2 - 50;
        z.visible = !0;
        s_oGame.onPlayerSelection("low") };
    this._enableFiche = function(a) { D.visible = a ? !1 : !0 };
    this.enableArrow = function(a) { a ? (y.enable(), C.enable(), z.visible = !1) : (y.disable(), C.disable()) };
    this._onFicheClicked = function(a) {
        playSound("chip", 1, !1);
        w.setAlpha(0);
        v.setAlpha(0);
        this.enableArrow(!0);
        u.enable();
        k.disable();
        a = s_oGameSettings.getFichesValueAt(a);
        s_oGame.updateCurBet(a)
    };
    this._onAudioToggle = function() { Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive };
    this._onExit = function() { $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        s_oGame.onExit() };
    this.resetFullscreenBut = function() { M && screenfull.enabled && t.setActive(s_bFullscreen) };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? S.call(window.document) : M.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CHelpPanel() {
    var a, b;
    this._init = function() {
        var c = this;
        b = new createjs.Container;
        b.alpha = 0;
        s_oStage.addChild(b);
        a = createBitmap(s_oSpriteLibrary.getSprite("bg_help"));
        b.addChild(a);
        var e = CANVAS_WIDTH / 2 - 300,
            f = CANVAS_HEIGHT / 2 - 205;
        new CTLText(b, e + 2, f + 2, 600, 44, 22, "center", "#000", PRIMARY_FONT, 1, 0, 0, TEXT_HELP1, !0, !0, !0, !1);
        new CTLText(b, e, f, 600, 44, 22, "center", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_HELP1, !0, !0, !0, !1);
        e = CANVAS_WIDTH / 2 - 340;
        f = CANVAS_HEIGHT / 2 - 140;
        new CTLText(b, e + 2, f + 2, 320, 80, 18, "right", "#000",
            PRIMARY_FONT, 1, 0, 0, TEXT_HELP2, !0, !0, !0, !1);
        new CTLText(b, e, f, 320, 80, 18, "right", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_HELP2, !0, !0, !0, !1);
        e = CANVAS_WIDTH / 2 - 80;
        f = CANVAS_HEIGHT / 2 + 30;
        new CTLText(b, e + 2, f + 2, 360, 80, 18, "left", "#000", PRIMARY_FONT, 1, 0, 0, TEXT_HELP3, !0, !0, !0, !1);
        new CTLText(b, e, f, 360, 80, 18, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_HELP3, !0, !0, !0, !1);
        e = CANVAS_WIDTH / 2 - 340;
        f = CANVAS_HEIGHT / 2 + 140;
        new CTLText(b, e + 2, f + 2, 400, 80, 18, "left", "#000", PRIMARY_FONT, 1, 0, 0, TEXT_HELP4, !0, !0, !0, !1);
        new CTLText(b, e, f, 400, 80,
            18, "left", "#fff", PRIMARY_FONT, 1, 0, 0, TEXT_HELP4, !0, !0, !0, !1);
        createjs.Tween.get(b).to({ alpha: 1 }, 700);
        b.on("pressup", function() { c._onExitHelp() })
    };
    this.unload = function() { s_oStage.removeChild(b); var a = this;
        b.off("pressup", function() { a._onExitHelp() }) };
    this._onExitHelp = function() { c.unload();
        s_oGame._onExitHelp() };
    var c = this;
    this._init()
}

function CEndPanel(a) {
    var b, c, d, e, f, h, p, m = this;
    this._init = function(a) {
        d = new createjs.Container;
        d.alpha = 0;
        d.visible = !1;
        s_oStage.addChild(d);
        c = createBitmap(a);
        b = c.on("click", function() {});
        d.addChild(c);
        h = new CTLText(d, CANVAS_WIDTH / 2 - 248, CANVAS_HEIGHT / 2 - 198, 500, 300, 50, "center", "#000", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !1, !1);
        p = new CTLText(d, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 - 200, 500, 300, 50, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !1, !1);
        e = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 160, s_oSpriteLibrary.getSprite("but_bet"),
            TEXT_RECHARGE, PRIMARY_FONT, "#fff", 40, !1, d);
        e.enable();
        e.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        f = new CGfxButton(CANVAS_WIDTH / 2 + 300, CANVAS_HEIGHT / 2 - 160, s_oSpriteLibrary.getSprite("but_exit"), !0, d);
        f.addEventListener(ON_MOUSE_UP, this._onExit, this)
    };
    this.unload = function() { c.off("click", b);
        e.unload() };
    this.show = function() {
        playSound("game_over", 1, !1);
        h.refreshText(TEXT_GAMEOVER);
        p.refreshText(TEXT_GAMEOVER);
        d.visible = !0;
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("show_interlevel_ad");
        createjs.Tween.get(d).to({ alpha: 1 }, 500)
    };
    this.hide = function() { d.visible = !1;
        s_oInterface.enableArrow(!0) };
    this._onExit = function() { m.hide() };
    this._onRecharge = function() { $(s_oMain).trigger("recharge");
        m.hide();
        s_oInterface._enableFiche(!0) };
    this._init(a);
    return this
}

function CCard(a, b, c, d, e) {
    var f, h, p, m, k;
    this._init = function(a, b, c, d, e) {
        k = c;
        f = d;
        h = e;
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        k.addChild(m);
        a = {
            images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
            frames: { width: CARD_WIDTH, height: CARD_HEIGHT, regX: CARD_WIDTH / 2, regY: CARD_HEIGHT / 2 },
            animations: {
                card_1_1: [0],
                card_1_2: [1],
                card_1_3: [2],
                card_1_4: [3],
                card_1_5: [4],
                card_1_6: [5],
                card_1_7: [6],
                card_1_8: [7],
                card_1_9: [8],
                card_1_10: [9],
                card_1_J: [10],
                card_1_Q: [11],
                card_1_K: [12],
                card_2_1: [13],
                card_2_2: [14],
                card_2_3: [15],
                card_2_4: [16],
                card_2_5: [17],
                card_2_6: [18],
                card_2_7: [19],
                card_2_8: [20],
                card_2_9: [21],
                card_2_10: [22],
                card_2_J: [23],
                card_2_Q: [24],
                card_2_K: [25],
                card_3_1: [26],
                card_3_2: [27],
                card_3_3: [28],
                card_3_4: [29],
                card_3_5: [30],
                card_3_6: [31],
                card_3_7: [32],
                card_3_8: [33],
                card_3_9: [34],
                card_3_10: [35],
                card_3_J: [36],
                card_3_Q: [37],
                card_3_K: [38],
                card_4_1: [39],
                card_4_2: [40],
                card_4_3: [41],
                card_4_4: [42],
                card_4_5: [43],
                card_4_6: [44],
                card_4_7: [45],
                card_4_8: [46],
                card_4_9: [47],
                card_4_10: [48],
                card_4_J: [49],
                card_4_Q: [50],
                card_4_K: [51],
                back: [52]
            }
        };
        a = new createjs.SpriteSheet(a);
        p = createSprite(a, "back", 0, 0, CARD_WIDTH, CARD_HEIGHT);
        p.stop();
        m.addChild(p)
    };
    this.unload = function() { k.removeChild(m) };
    this.showCard = function() { var a = this;
        createjs.Tween.get(m).to({ scaleX: .1 }, TURN_CARD_SPEED / 2, createjs.Ease.cubicIn).call(function() { a.setValue() }).call(function() {}) };
    this.setValue = function() { p.gotoAndStop(f);
        playSound("card", 1, !1);
        createjs.Tween.get(m).to({ scaleX: 1 }, TURN_CARD_SPEED / 2, createjs.Ease.cubicOut).call(function() { s_oGame.checkWin(u) }) };
    this.hideCard = function() { var a = this;
        createjs.Tween.get(m).to({ scaleX: .1 }, TURN_CARD_SPEED / 2, createjs.Ease.linear).call(function() { a.setBack() }) };
    this.setBack = function() { p.gotoAndStop("back"); var a = this;
        createjs.Tween.get(m).to({ scaleX: 1 }, TURN_CARD_SPEED / 2, createjs.Ease.linear).call(function() { a.cardHidden() }) };
    this.getRank = function() { return h };
    var u = this;
    this._init(a, b, c, d, e)
}

function CGameSettings() {
    var a, b, c, d;
    this._init = function() { c = [];
        a = []; for (var b = 0; 52 > b; b++) { a.push(b); var f = (b + 1) % 13;
            0 === f && (f = 13);
            c.push(f) } d = []; for (b = 0; b < FICHES_VALUE.length; b++) d[b] = FICHES_VALUE[b] };
    this.getFichesValues = function() { return d };
    this.getFichesValueAt = function(a) { return d[a] };
    this.getIndexForFiches = function(a) { for (var b = 0, c = 0; c < d.length; c++) d[c] === a && (b = c); return b };
    this.generateFichesPile = function(a) {
        var b = [],
            c = d.length - 1,
            e = d[c];
        do {
            var m = a % e;
            m = CMath.roundDecimal(m, 1);
            a = Math.floor(a /
                e);
            for (var k = 0; k < a; k++) b.push(e);
            c--;
            e = d[c];
            a = m
        } while (0 < m && -1 < c);
        return b
    };
    this.timeToString = function(a) { a = Math.round(a / 1E3); var b = Math.floor(a / 60);
        a -= 60 * b; var c = "";
        c = 10 > b ? c + ("0" + b + ":") : c + (b + ":"); return 10 > a ? c + ("0" + a) : c + a };
    this.getShuffledCardDeck = function() { for (var c = [], d = 0; d < a.length; d++) c[d] = a[d]; for (b = []; 0 < c.length;) b.push(c.splice(Math.round(Math.random() * (c.length - 1)), 1)[0]); return b };
    this.getCardValue = function(a) { return c[a] };
    this._init()
}

function CFichesController(a, b, c) {
    var d, e, f, h, p, m, k, u, l, n, w;
    this._init = function(a, b, c) { k = new createjs.Container;
        k.x = a;
        k.y = b;
        c.addChild(k);
        h = f = 0;
        d = !1;
        n = [];
        w = [] };
    this.addEventListener = function(a, b, c) { n[a] = b;
        w[a] = c };
    this.reset = function() { e = !1;
        h = 0;
        k.removeAllChildren() };
    this.refreshFiches = function(a, b, c) { a = a.sortOn("value", "index"); for (var d = c, e = h = 0, f = 0; f < a.length; f++) new CFiche(b, d, a[f].index, FICHES_VALUE[a[f].index], !1, k), d -= 5, e++, 9 < e && (e = 0, b += FICHE_WIDTH, d = c), h += a[f].value;
        playSound("chip", 1, !1) };
    this._createFichesAmountText = function(a, b, c) { u = new createjs.Text(TEXT_CURRENCY + " " + c, "24px " + PRIMARY_FONT, "#000000");
        u.x = a + 3;
        u.y = b + 3;
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.lineWidth = 200;
        k.addChild(u);
        l = new createjs.Text(TEXT_CURRENCY + " " + c, "24px " + PRIMARY_FONT, "#ffffff");
        l.x = a;
        l.y = b;
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.lineWidth = 200;
        k.addChild(l) };
    this.createFichesPile = function(a) {
        k.removeAllChildren();
        this._createFichesAmountText(0, 60, a);
        var b = s_oGameSettings.getFichesValues(),
            c = [];
        do { for (var d = b[b.length - 1], e = b.length - 1; d > a;) e--, d = b[e];
            e = Math.floor(a / d); for (var f = 0; f < e; f++) c.push({ value: d, index: s_oGameSettings.getIndexForFiches(d) });
            a = d = a % d } while (0 < d);
        this.refreshFiches(c, 0, 0)
    };
    this.initMovement = function(a, b, c) { d = c;
        p = new CVector2(k.x, k.y);
        m = new CVector2(a, b) };
    this.getValue = function() { return h };
    this.update = function(a) {
        if (!e)
            if (f += a, f > TIME_FICHES_MOV) f = 0, e = !0, n[FICHES_END_MOV] && n[FICHES_END_MOV].call(w[FICHES_END_MOV], d, h);
            else {
                a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
                var b =
                    new CVector2;
                b = tweenVectors(p, m, a, b);
                k.x = b.getX();
                k.y = b.getY()
            }
    };
    this._init(a, b, c)
}

function CWinText(a, b, c) {
    var d, e, f;
    this._init = function(a, b, c) { f = new createjs.Container;
        f.x = 0;
        f.y = CANVAS_HEIGHT / 2 - 135;
        f.alpha = 1;
        s_oStage.addChild(f);
        e = new CTLText(f, -500, 0, 1E3, 60, 60, "center", "#000", PRIMARY_FONT, 1, 0, 0, a, !0, !0, !1, !1);
        e.setOutline(5);
        new CTLText(f, -500, 0, 1E3, 60, 60, "center", "#fff", PRIMARY_FONT, 1, 0, 0, a, !0, !0, !1, !1);
        d = f.getBounds().width;
        this.show(b, c) };
    this.show = function(a, b) {
        createjs.Tween.get(f).to({ x: a }, SHOWTEXT_SPEED / 4, createjs.Ease.elasticOut).wait(SHOWTEXT_SPEED / 2).to({
            x: CANVAS_WIDTH +
                d
        }, SHOWTEXT_SPEED / 4, createjs.Ease.quartOut).call(function() { h.unload();
            s_oGame.tryShowAd();
            s_oGame.refreshGame(b) })
    };
    this.unload = function() { s_oStage.removeChild(f) };
    var h = this;
    this._init(a, b, c)
}

function CGiveupPanel(a, b) {
    var c, d, e, f, h, p, m;
    this._init = function(a, b) {
        d = new createjs.Container;
        d.alpha = 0;
        s_oStage.addChild(d);
        c = createBitmap(a);
        d.addChild(c);
        e = new CTLText(d, CANVAS_WIDTH / 2 - 248, CANVAS_HEIGHT / 2 - 138, 500, 180, 60, "center", "#000", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        f = new CTLText(d, CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT / 2 - 140, 500, 180, 60, "center", "#fff", PRIMARY_FONT, 1, 0, 0, " ", !0, !0, !0, !1);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.on("mousedown", function() {});
        d.addChild(h);
        var k = s_oSpriteLibrary.getSprite("but_bet");
        p = new CTextButton(CANVAS_WIDTH / 2 - 200, CANVAS_HEIGHT / 2 + 170, k, TEXT_YES, PRIMARY_FONT, "#ffffff", 40, !1, d);
        p.addEventListener(ON_MOUSE_UP, this._onYesRelease, this);
        p.enable();
        m = new CTextButton(CANVAS_WIDTH / 2 + 200, CANVAS_HEIGHT / 2 + 170, k, TEXT_NO, PRIMARY_FONT, "#ffffff", 40, !1, d);
        m.addEventListener(ON_MOUSE_UP, this._onNoRelease, this);
        m.enable();
        playSound("click", 1, !1);
        e.refreshText(TEXT_ENDGIVEUP + TEXT_CURRENCY + b + " ?");
        f.refreshText(TEXT_ENDGIVEUP +
            TEXT_CURRENCY + b + " ?");
        createjs.Tween.get(d).to({ alpha: 1 }, 500)
    };
    this.unload = function() { s_oStage.removeChild(d) };
    this._onYesRelease = function() { $(s_oMain).trigger("save_score", [b, "standard"]);
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", [b]);
        s_oStage.removeChild(d);
        s_oGame.onExit() };
    this._onNoRelease = function() { this.unload() };
    this._init(a, b);
    return this
}

function CCreditsPanel() {
    var a, b, c, d, e, f, h, p;
    this._init = function() {
        h = new createjs.Container;
        s_oStage.addChild(h);
        var m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        h.addChild(m);
        m = s_oSpriteLibrary.getSprite("msg_box");
        b = createBitmap(m);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.regX = m.width / 2;
        b.regY = m.height / 2;
        h.addChild(b);
        e = new createjs.Shape;
        e.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .01;
        p = e.on("click", this._onLogoButRelease);
        h.addChild(e);
        m = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 320;
        c = new CGfxButton(a, 210, m, !0, h);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px " + PRIMARY_FONT, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = 300;
        d.textAlign = "center";
        h.addChild(d);
        m = s_oSpriteLibrary.getSprite("logo_credits");
        var k = createBitmap(m);
        k.regX = m.width / 2;
        k.regY = m.height / 2;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        h.addChild(k);
        f = new createjs.Text("hantak", "30px " + PRIMARY_FONT, "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = 444;
        f.textAlign =
            "center";
        h.addChild(f)
    };
    this.unload = function() { e.off("click", p);
        c.unload();
        c = null;
        s_oStage.removeChild(h) };
    this._onLogoButRelease = function() { window.open("http://hantak/index.php?&l=en") };
    this._init()
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() { if (this._bFitText) { for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a } },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() { this._oText.y = this._y + this._iPaddingV; switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize) } },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2; break;
            case "left":
                this._oText.x = this._x + this._iPaddingH; break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH } this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function(a) { this._bVerticalAlign = a },
    setOutline: function(a) { null !== this._oText && (this._oText.outline = a) },
    setShadow: function(a, b, c, d) { null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, b, c, d)) },
    setColor: function(a) { this._oText.color = a },
    setAlpha: function(a) { this._oText.alpha = a },
    removeTweens: function() { createjs.Tween.removeTweens(this._oText) },
    getText: function() { return this._oText },
    getY: function() { return this._y },
    getFontSize: function() { return this._iFontSize },
    refreshText: function(a) { "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign() }
};

function CTLText(a, b, c, d, e, f, h, p, m, k, u, l, n, w, v, y, C) { this._oContainer = a;
    this._x = b;
    this._y = c;
    this._iWidth = d;
    this._iHeight = e;
    this._bMultiline = y;
    this._iFontSize = f;
    this._szAlign = h;
    this._szColor = p;
    this._szFont = m;
    this._iPaddingH = u;
    this._iPaddingV = l;
    this._bVerticalAlign = v;
    this._bFitText = w;
    this._bDebug = C;
    this._oDebugShape = null;
    this._fLineHeightFactor = k;
    this._oText = null;
    n && this.__createText(n) }

function CFiche(a, b, c, d, e, f) {
    var h, p, m, k, u, l, n, w;
    this._init = function(a, b, c, d, e) { w = new createjs.Container;
        w.x = a;
        w.y = b;
        f.addChild(w);
        a = s_oSpriteLibrary.getSprite("fiche_" + c);
        n = createBitmap(a);
        w.addChild(n);
        new CTLText(w, 8, 8, a.width - 21, 20, 20, "center", COLOR_FICHE_PER_VALUE[c], PRIMARY_FONT, 1, 0, 0, d, !0, !0, !1, !1);
        e && (h = !1, p = a.width, m = a.height, k = [], u = [], w.on("mousedown", this.buttonDown), w.on("pressup", this.buttonRelease));
        w.regX = a.width / 2;
        w.regY = a.height / 2 };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        u[a] =
            c
    };
    this.addEventListenerWithParams = function(a, b, c, d) { k[a] = b;
        u[a] = c;
        l = d };
    this.enable = function() { h = !1;
        w.filters = [];
        w.cache(0, 0, p, m) };
    this.disable = function() { h = !0; var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        w.filters = [new createjs.ColorMatrixFilter(a)];
        w.cache(0, 0, p, m) };
    this.setScale = function(a) { w.scaleX = w.scaleY = a };
    this.buttonRelease = function() { h || (playSound("click", 1, !1), w.scaleX = 1, w.scaleY = 1, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(u[ON_MOUSE_UP], l)) };
    this.buttonDown = function() {
        h ||
            (w.scaleX = .9, w.scaleY = .9, k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN], l))
    };
    this._init(a, b, c, d, e)
}

function extractHostname(a) { a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0]; return a = a.split("?")[0] }

function extractRootDomain(a) { a = extractHostname(a); var b = a.split("."),
        c = b.length;
    2 < c && (a = b[c - 2] + "." + b[c - 1]); return a }
var getClosestTop = function() { var a = window,
            b = !1; try { for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else { b = !0; break } } catch (c) { b = !0 } return { topFrame: a, err: b } },
    getBestPageUrl = function(a) { var b = a.topFrame,
            c = ""; if (a.err) try { try { c = window.top.location.href } catch (e) { var d = window.location.ancestorOrigins;
                c = d[d.length - 1] } } catch (e) { c = b.document.referrer } else c = b.location.href; return c },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

