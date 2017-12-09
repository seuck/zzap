webpackJsonp([ 9 ], [ /* 0 */
/***/
function(e, t) {
    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file.
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.
    e.exports = function(e, t, r, n, a, i) {
        var o;
        var s = e = e || {};
        // ES6 modules interop
        var u = typeof e.default;
        if ("object" === u || "function" === u) {
            o = e;
            s = e.default;
        }
        // Vue.extend constructor export interop
        var l = "function" === typeof s ? s.options : s;
        // render functions
        if (t) {
            l.render = t.render;
            l.staticRenderFns = t.staticRenderFns;
            l._compiled = true;
        }
        // functional template
        if (r) l.functional = true;
        // scopedId
        if (a) l._scopeId = a;
        var c;
        if (i) {
            // server build
            c = function(e) {
                // 2.3 injection
                e = e || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                // functional
                // 2.2 with runInNewContext: true
                if (!e && "undefined" !== typeof __VUE_SSR_CONTEXT__) e = __VUE_SSR_CONTEXT__;
                // inject component styles
                if (n) n.call(this, e);
                // register component module identifier for async chunk inferrence
                if (e && e._registeredComponents) e._registeredComponents.add(i);
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            l._ssrRegister = c;
        } else if (n) c = n;
        if (c) {
            var f = l.functional;
            var d = f ? l.render : l.beforeCreate;
            if (!f) // inject component registration as beforeCreate hook
            l.beforeCreate = d ? [].concat(d, c) : [ c ]; else {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                l._injectStyles = c;
                // register for functioal component in vue file
                l.render = function(e, t) {
                    c.call(t);
                    return d(e, t);
                };
            }
        }
        return {
            esModule: o,
            exports: s,
            options: l
        };
    };
}, /* 1 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var a = p(n);
    var i = r(34);
    var o = p(i);
    var s = r(35);
    var u = p(s);
    var l = r(37);
    var c = p(l);
    var f = r(6);
    var d = p(f);
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        components: {
            ContentContainer: o.default,
            ContentSection: u.default,
            ContentImage: c.default,
            ScrollLink: d.default
        },
        methods: {
            announceBookmark: function(e) {
                this.$emit(a.default.announceBookmark, e);
            },
            dismissBookmark: function(e) {
                this.$emit(a.default.dismissBookmark, e);
            }
        }
    };
}, /* 2 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(22);
    var a = r(77);
    /*global toString:true*/
    // utils is a library of generic helper functions non-specific to axios
    var i = Object.prototype.toString;
    /**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
    function o(e) {
        return "[object Array]" === i.call(e);
    }
    /**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
    function s(e) {
        return "[object ArrayBuffer]" === i.call(e);
    }
    /**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
    function u(e) {
        return "undefined" !== typeof FormData && e instanceof FormData;
    }
    /**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
    function l(e) {
        var t;
        if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView) t = ArrayBuffer.isView(e); else t = e && e.buffer && e.buffer instanceof ArrayBuffer;
        return t;
    }
    /**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
    function c(e) {
        return "string" === typeof e;
    }
    /**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
    function f(e) {
        return "number" === typeof e;
    }
    /**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
    function d(e) {
        return "undefined" === typeof e;
    }
    /**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
    function p(e) {
        return null !== e && "object" === typeof e;
    }
    /**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
    function v(e) {
        return "[object Date]" === i.call(e);
    }
    /**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
    function h(e) {
        return "[object File]" === i.call(e);
    }
    /**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
    function m(e) {
        return "[object Blob]" === i.call(e);
    }
    /**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
    function y(e) {
        return "[object Function]" === i.call(e);
    }
    /**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
    function _(e) {
        return p(e) && y(e.pipe);
    }
    /**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
    function g(e) {
        return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams;
    }
    /**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
    function b(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    /**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
    function w() {
        if ("undefined" !== typeof navigator && "ReactNative" === navigator.product) return false;
        return "undefined" !== typeof window && "undefined" !== typeof document;
    }
    /**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
    function k(e, t) {
        // Don't bother if no value provided
        if (null === e || "undefined" === typeof e) return;
        // Force an array if not already something iterable
        if ("object" !== typeof e) /*eslint no-param-reassign:0*/
        e = [ e ];
        if (o(e)) // Iterate over array values
        for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e); else // Iterate over object keys
        for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) t.call(null, e[a], a, e);
    }
    /**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
    function C() {
        var e = {};
        function t(t, r) {
            if ("object" === typeof e[r] && "object" === typeof t) e[r] = C(e[r], t); else e[r] = t;
        }
        for (var r = 0, n = arguments.length; r < n; r++) k(arguments[r], t);
        return e;
    }
    /**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
    function x(e, t, r) {
        k(t, function(t, a) {
            if (r && "function" === typeof t) e[a] = n(t, r); else e[a] = t;
        });
        return e;
    }
    e.exports = {
        isArray: o,
        isArrayBuffer: s,
        isBuffer: a,
        isFormData: u,
        isArrayBufferView: l,
        isString: c,
        isNumber: f,
        isObject: p,
        isUndefined: d,
        isDate: v,
        isFile: h,
        isBlob: m,
        isFunction: y,
        isStream: _,
        isURLSearchParams: g,
        isStandardBrowserEnv: w,
        forEach: k,
        merge: C,
        extend: x,
        trim: b
    };
}, /* 3 */
/***/
function(e, t, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    var a = Object.prototype.toString;
    var i = function(e) {
        if ("function" === typeof Array.isArray) return Array.isArray(e);
        return "[object Array]" === a.call(e);
    };
    var o = function(e) {
        if (!e || "[object Object]" !== a.call(e)) return false;
        var t = n.call(e, "constructor");
        var r = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
        // Not own constructor property must be Object
        if (e.constructor && !t && !r) return false;
        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var i;
        for (i in e) ;
        return "undefined" === typeof i || n.call(e, i);
    };
    e.exports = function e() {
        var t, r, n, a, s, u;
        var l = arguments[0];
        var c = 1;
        var f = arguments.length;
        var d = false;
        // Handle a deep copy situation
        if ("boolean" === typeof l) {
            d = l;
            l = arguments[1] || {};
            // skip the boolean and the target
            c = 2;
        }
        if (null == l || "object" !== typeof l && "function" !== typeof l) l = {};
        for (;c < f; ++c) {
            t = arguments[c];
            // Only deal with non-null/undefined values
            if (null != t) // Extend the base object
            for (r in t) {
                n = l[r];
                a = t[r];
                // Prevent never-ending loop
                if (l !== a) // Recurse if we're merging plain objects or arrays
                if (d && a && (o(a) || (s = i(a)))) {
                    if (s) {
                        s = false;
                        u = n && i(n) ? n : [];
                    } else u = n && o(n) ? n : {};
                    // Never move original objects, clone them
                    l[r] = e(d, u, a);
                } else if ("undefined" !== typeof a) l[r] = a;
            }
        }
        // Return the modified object
        return l;
    };
}, /* 4 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.scrollToClassWithOptions = o;
    t.scrollToClassWithDefaultOffset = s;
    t.jumpToClass = u;
    var n = "smooth";
    var a = "auto";
    var i = 55;
    /**
 * @param {string} className 
 * @param {object} [options] 
 * @param {string} [options.behavior] `auto`|`smooth`
 * @param {number} [options.offset] 
 */
    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        // eslint-disable-next-line no-console
        console.log("Scroll to: " + e);
        var r = document.querySelector("." + e);
        if (null !== r) if ("undefined" !== typeof t.offset) window.scroll({
            top: r.offsetTop - t.offset,
            left: 0,
            behavior: t.behavior
        }); else r.scrollIntoView(t);
    }
    function s(e) {
        o(e, {
            behavior: n,
            offset: i
        });
    }
    function u(e) {
        o(e, {
            behavior: a,
            offset: i
        });
    }
}, /* 5 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        openReader: "openReader",
        closeReader: "closeReader",
        selectedIssue: "selectedIssue",
        announceBookmark: "announceBookmark",
        dismissBookmark: "dismissBookmark"
    };
}, /* 6 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(13);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(63);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/scrolllink/scrolllink.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-21fc4baf", u.options); else t.reload("data-v-21fc4baf", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 7 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.CLASS_NAME = void 0;
    var n = r(5);
    var a = u(n);
    var i = r(14);
    var o = u(i);
    var s = r(4);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "content-container",
        props: [ "title", "date", "anchor" ],
        data: function() {
            return {
                componentClass: "content content__" + this.anchor
            };
        },
        mounted: function() {
            var e = this;
            (0, s.scrollToClassWithDefaultOffset)("content__" + this.anchor);
            // Gives time to destroyed pages to close their bookmarks
            window.setTimeout(function() {
                e.$emit(a.default.announceBookmark, [ {
                    title: e.title,
                    anchor: e.anchor,
                    target: "content"
                } ]);
            }, o.default.bookmarkCloseDelay);
        },
        beforeDestroy: function() {
            this.$emit(a.default.dismissBookmark, [ this.anchor ]);
        }
    };
    t.CLASS_NAME = "content";
}, /* 8 */
/***/
function(e, t, r) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    (function(t) {
        var n = r(2);
        var a = r(79);
        var i = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function o(e, t) {
            if (!n.isUndefined(e) && n.isUndefined(e["Content-Type"])) e["Content-Type"] = t;
        }
        var s = {
            adapter: function() {
                var e;
                if ("undefined" !== typeof XMLHttpRequest) // For browsers use XHR adapter
                e = r(23); else if ("undefined" !== typeof t) // For node use HTTP adapter
                e = r(23);
                return e;
            }(),
            transformRequest: [ function(e, t) {
                a(t, "Content-Type");
                if (n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)) return e;
                if (n.isArrayBufferView(e)) return e.buffer;
                if (n.isURLSearchParams(e)) {
                    o(t, "application/x-www-form-urlencoded;charset=utf-8");
                    return e.toString();
                }
                if (n.isObject(e)) {
                    o(t, "application/json;charset=utf-8");
                    return JSON.stringify(e);
                }
                return e;
            } ],
            transformResponse: [ function(e) {
                /*eslint no-param-reassign:0*/
                if ("string" === typeof e) try {
                    e = JSON.parse(e);
                } catch (e) {}
                return e;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            }
        };
        s.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        };
        n.forEach([ "delete", "get", "head" ], function(e) {
            s.headers[e] = {};
        });
        n.forEach([ "post", "put", "patch" ], function(e) {
            s.headers[e] = n.merge(i);
        });
        e.exports = s;
    }).call(t, r(10));
}, /* 9 */
/***/
function(e, t) {
    var r;
    // This works in non-strict mode
    r = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        r = r || Function("return this")() || (0, eval)("this");
    } catch (e) {
        // This works if the window reference is available
        if ("object" === typeof window) r = window;
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
    e.exports = r;
}, /* 10 */
/***/
function(e, t) {
    // shim for using process in browser
    var r = e.exports = {};
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    var n;
    var a;
    function i() {
        throw new Error("setTimeout has not been defined");
    }
    function o() {
        throw new Error("clearTimeout has not been defined");
    }
    !function() {
        try {
            if ("function" === typeof setTimeout) n = setTimeout; else n = i;
        } catch (e) {
            n = i;
        }
        try {
            if ("function" === typeof clearTimeout) a = clearTimeout; else a = o;
        } catch (e) {
            a = o;
        }
    }();
    function s(e) {
        if (n === setTimeout) //normal enviroments in sane situations
        return setTimeout(e, 0);
        // if setTimeout wasn't available but was latter defined
        if ((n === i || !n) && setTimeout) {
            n = setTimeout;
            return setTimeout(e, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return n(e, 0);
        } catch (t) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return n.call(null, e, 0);
            } catch (t) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return n.call(this, e, 0);
            }
        }
    }
    function u(e) {
        if (a === clearTimeout) //normal enviroments in sane situations
        return clearTimeout(e);
        // if clearTimeout wasn't available but was latter defined
        if ((a === o || !a) && clearTimeout) {
            a = clearTimeout;
            return clearTimeout(e);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return a(e);
        } catch (t) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return a.call(null, e);
            } catch (t) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return a.call(this, e);
            }
        }
    }
    var l = [];
    var c = false;
    var f;
    var d = -1;
    function p() {
        if (!c || !f) return;
        c = false;
        if (f.length) l = f.concat(l); else d = -1;
        if (l.length) v();
    }
    function v() {
        if (c) return;
        var e = s(p);
        c = true;
        var t = l.length;
        while (t) {
            f = l;
            l = [];
            while (++d < t) if (f) f[d].run();
            d = -1;
            t = l.length;
        }
        f = null;
        c = false;
        u(e);
    }
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new h(e, t));
        if (1 === l.length && !c) s(v);
    };
    // v8 likes predictible objects
    function h(e, t) {
        this.fun = e;
        this.array = t;
    }
    h.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    r.title = "browser";
    r.browser = true;
    r.env = {};
    r.argv = [];
    r.version = "";
    // empty string to avoid regexp issues
    r.versions = {};
    function m() {}
    r.on = m;
    r.addListener = m;
    r.once = m;
    r.off = m;
    r.removeListener = m;
    r.removeAllListeners = m;
    r.emit = m;
    r.prependListener = m;
    r.prependOnceListener = m;
    r.listeners = function(e) {
        return [];
    };
    r.binding = function(e) {
        throw new Error("process.binding is not supported");
    };
    r.cwd = function() {
        return "/";
    };
    r.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    };
    r.umask = function() {
        return 0;
    };
}, /* 11 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(62);
    var a = w(n);
    var i = r(65);
    var o = w(i);
    var s = r(67);
    var u = w(s);
    var l = r(69);
    var c = w(l);
    var f = r(71);
    var d = w(f);
    var p = r(75);
    var v = w(p);
    var h = r(95);
    var m = w(h);
    var y = r(97);
    var _ = w(y);
    var g = r(99);
    var b = r(4);
    function w(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "home",
        components: {
            Cover: a.default,
            DynamicNavigation: o.default,
            Index: u.default,
            Loader: c.default,
            Reader: d.default,
            Scanindex: v.default,
            ZzapHeader: m.default,
            ZzapFooter: _.default
        },
        data: function() {
            return {
                readerData: {},
                homeClass: "home",
                dynamicNavSections: []
            };
        },
        methods: {
            initReader: function(e) {
                this.readerData = e;
                this.homeClass = "home " + g.CLASSES.overlay;
            },
            resetReader: function() {
                var e = this.readerData.returnBookmark;
                this.homeClass = "home";
                this.readerData = {};
                window.setTimeout(function() {
                    (0, b.jumpToClass)(e);
                }, 500);
            },
            addDynamicNavSection: function(e) {
                var t = this;
                e.forEach(function(e) {
                    t.dynamicNavSections.push(e);
                });
            },
            removeDynamicNavSection: function(e) {
                for (var t = this.dynamicNavSections.length - 1; t >= 0; t--) if (-1 !== e.indexOf(this.dynamicNavSections[t].anchor)) this.dynamicNavSections.splice(t, 1);
            }
        }
    };
}, /* 12 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(6);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    t.default = {
        components: {
            ScrollLink: a.default
        }
    };
}, /* 13 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var a = r(7);
    t.default = {
        name: "scroll-link",
        props: {
            anchor: {
                type: String,
                required: false
            },
            target: {
                type: String,
                required: false
            },
            isScrollOnly: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        data: function() {
            return {
                linkTarget: a.CLASS_NAME
            };
        },
        methods: {
            scrollToAnchor: function() {
                if ("undefined" !== typeof this.anchor) (0, n.scrollToClassWithDefaultOffset)(this.linkTarget + "__" + this.anchor); else (0, 
                n.scrollToClassWithDefaultOffset)("" + this.linkTarget);
            }
        },
        mounted: function() {
            if ("undefined" !== typeof this.target) this.linkTarget = this.target;
        }
    };
}, /* 14 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        bookmarkCloseDelay: 500
    };
}, /* 15 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(6);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    t.default = {
        name: "dynamic-navigation",
        props: [ "sections" ],
        components: {
            ScrollLink: a.default
        },
        data: function() {
            return {
                closedBookmark: ""
            };
        },
        methods: {
            getBookmarkClass: function(e) {
                var t = "";
                if (e === this.closeBookmark) t = "dynamicnavigation__bookmark--closed";
                return "dynamicnavigation__bookmark " + t;
            },
            closeBookmark: function(e) {
                this.closedBookmark = e;
            }
        }
    };
}, /* 16 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(6);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    t.default = {
        components: {
            ScrollLink: a.default
        }
    };
}, /* 17 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        name: "loader",
        props: [ "payload" ]
    };
}, /* 18 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(72);
    var a = s(n);
    var i = r(5);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var u = {
        esc: 27,
        left: 37,
        right: 39
    };
    t.default = {
        name: "reader",
        props: [ "pages", "startPage", "title", "returnBookmark" ],
        components: {
            ReaderImage: a.default
        },
        data: function() {
            return {
                actualPage: "",
                keyupEventListenerAtteched: false
            };
        },
        computed: {
            hasContent: function() {
                return this.pages && this.pages.length > 0;
            }
        },
        methods: {
            doesPageExist: function(e) {
                return "undefined" !== typeof this.pages[e];
            },
            nextPage: function() {
                var e = +this.actualPage + 1;
                if (this.doesPageExist(e)) this.actualPage = e;
            },
            previousPage: function() {
                var e = +this.actualPage - 1;
                if (this.doesPageExist(e)) this.actualPage = e;
            },
            keyboardEventHandler: function(e) {
                switch (e.which) {
                  case u.esc:
                    this.close();
                    e.preventDefault();
                    break;

                  case u.left:
                    this.previousPage();
                    e.preventDefault();
                    break;

                  case u.right:
                    this.nextPage();
                    e.preventDefault();
                }
            },
            initActualPage: function(e) {
                if ("" === this.actualPage && "undefined" !== typeof e) {
                    if (this.doesPageExist(e)) this.actualPage = +e; else this.actualPage = 0;
                    if (!this.keyupEventListenerAtteched) {
                        window.document.addEventListener("keydown", this.keyboardEventHandler);
                        this.keyupEventListenerAtteched = true;
                    }
                }
            },
            close: function() {
                window.document.removeEventListener("keydown", this.keyboardEventHandler);
                this.keyupEventListenerAtteched = false;
                this.$emit(o.default.closeReader);
                this.actualPage = "";
            },
            hasPage: function(e) {
                return this.doesPageExist(this.actualPage) && "undefined" !== typeof this.pages[this.actualPage][e];
            },
            getNavigationClass: function(e) {
                var t = [];
                t.push("reader__navigation-page");
                if (e === this.actualPage) t.push("reader__navigation-page-actual");
                return t.join(" ");
            },
            getComponentClass: function() {
                var e = [ "reader" ];
                if (1 === this.pages.length) e.push("reader--singlepage");
                return e.join(" ");
            }
        },
        beforeMount: function() {
            this.initActualPage(this.startPage);
        },
        beforeUpdate: function() {
            this.initActualPage(this.startPage);
        }
    };
}, /* 19 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        name: "reader-image",
        props: {
            path: "",
            label: "",
            labelPrefix: ""
        },
        data: function() {
            return {
                defaultLabelPrefix: "Pagina",
                navigationHint: "Premi per sfogliare",
                pageNumberSeparator: "di"
            };
        },
        computed: {
            decoratedLabel: function() {
                var e = void 0;
                if ("undefined" !== typeof this.label) if ("undefined" !== typeof this.labelPrefix) e = this.labelPrefix + ": " + this.label; else e = this.defaultLabelPrefix + ": " + this.label;
                return e;
            },
            labelWithNavigationHint: function() {
                var e = "";
                if ("undefined" !== typeof this.label) e = this.decoratedLabel + " - " + this.navigationHint;
                return e;
            }
        }
    };
}, /* 20 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(21);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    var i = r(27);
    var o = r(4);
    var s = r(28);
    t.default = {
        name: "scanindex",
        props: [ "magazineId" ],
        data: function() {
            return {
                magazine: {},
                errors: []
            };
        },
        computed: {
            magazineName: function() {
                return this.magazine.name.replace(/[^a-z0-9]/gi, "").toLowerCase();
            },
            issues: function() {
                if ("undefined" !== typeof this.magazine) return this.magazine.issues;
                return [];
            },
            paddingIssues: function() {
                if ("undefined" !== typeof this.issues) return Array(this.issues[0].month - 1);
                return [];
            }
        },
        methods: {
            loadMagazine: function() {
                var e = this;
                a.default.get(i.ZZAPI_RESOURCES.magazine(this.magazineId)).then(function(t) {
                    e.magazine = t.data;
                }).catch(function(t) {
                    return e.errors.push(t);
                });
            },
            selectIssue: function(e) {
                this.$root.$router.push({
                    name: "numero",
                    params: {
                        issueId: e
                    }
                });
                (0, o.scrollToClassWithDefaultOffset)("scanissue");
            },
            buildCoverThumbPath: function(e) {
                return "img/issue_selector/" + this.magazineName + "/" + e.sequence + ".jpg";
            },
            buildRetinaCoverThumbPath: function(e) {
                return (0, s.getRetinaPath)(this.buildCoverThumbPath(e));
            },
            getLinkClass: function(e) {
                var t = [ "scanindex__link" ];
                if (+this.$route.params.issueId === e) t.push("scanindex__link--selected");
                return t.join(" ");
            }
        },
        mounted: function() {
            this.loadMagazine();
        }
    };
}, /* 21 */
/***/
function(e, t, r) {
    e.exports = r(76);
}, /* 22 */
/***/
function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            var r = new Array(arguments.length);
            for (var n = 0; n < r.length; n++) r[n] = arguments[n];
            return e.apply(t, r);
        };
    };
}, /* 23 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    var a = r(80);
    var i = r(82);
    var o = r(83);
    var s = r(84);
    var u = r(24);
    var l = "undefined" !== typeof window && window.btoa && window.btoa.bind(window) || r(85);
    e.exports = function(e) {
        return new Promise(function(t, c) {
            var f = e.data;
            var d = e.headers;
            if (n.isFormData(f)) delete d["Content-Type"];
            var p = new XMLHttpRequest();
            var v = "onreadystatechange";
            var h = false;
            // For IE 8/9 CORS support
            // Only supports POST and GET calls and doesn't returns the response headers.
            // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
            if ("undefined" !== typeof window && window.XDomainRequest && !("withCredentials" in p) && !s(e.url)) {
                p = new window.XDomainRequest();
                v = "onload";
                h = true;
                p.onprogress = function() {};
                p.ontimeout = function() {};
            }
            // HTTP basic authentication
            if (e.auth) {
                var m = e.auth.username || "";
                var y = e.auth.password || "";
                d.Authorization = "Basic " + l(m + ":" + y);
            }
            p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), true);
            // Set the request timeout in MS
            p.timeout = e.timeout;
            // Listen for ready state
            p[v] = function() {
                if (!p || 4 !== p.readyState && !h) return;
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (0 === p.status && !(p.responseURL && 0 === p.responseURL.indexOf("file:"))) return;
                // Prepare the response
                var r = "getAllResponseHeaders" in p ? o(p.getAllResponseHeaders()) : null;
                var n = !e.responseType || "text" === e.responseType ? p.responseText : p.response;
                var i = {
                    data: n,
                    // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                    status: 1223 === p.status ? 204 : p.status,
                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                    headers: r,
                    config: e,
                    request: p
                };
                a(t, c, i);
                // Clean up request
                p = null;
            };
            // Handle low level network errors
            p.onerror = function() {
                // Real errors are hidden from us by the browser
                // onerror should only fire if it's a network error
                c(u("Network Error", e, null, p));
                // Clean up request
                p = null;
            };
            // Handle timeout
            p.ontimeout = function() {
                c(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p));
                // Clean up request
                p = null;
            };
            // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.
            if (n.isStandardBrowserEnv()) {
                var _ = r(86);
                // Add xsrf header
                var g = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                if (g) d[e.xsrfHeaderName] = g;
            }
            // Add headers to the request
            if ("setRequestHeader" in p) n.forEach(d, function(e, t) {
                if ("undefined" === typeof f && "content-type" === t.toLowerCase()) // Remove Content-Type if data is undefined
                delete d[t]; else // Otherwise add header to the request
                p.setRequestHeader(t, e);
            });
            // Add withCredentials to request if needed
            if (e.withCredentials) p.withCredentials = true;
            // Add responseType to request if needed
            if (e.responseType) try {
                p.responseType = e.responseType;
            } catch (t) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if ("json" !== e.responseType) throw t;
            }
            // Handle progress if needed
            if ("function" === typeof e.onDownloadProgress) p.addEventListener("progress", e.onDownloadProgress);
            // Not all browsers support upload events
            if ("function" === typeof e.onUploadProgress && p.upload) p.upload.addEventListener("progress", e.onUploadProgress);
            if (e.cancelToken) // Handle cancellation
            e.cancelToken.promise.then(function(e) {
                if (!p) return;
                p.abort();
                c(e);
                // Clean up request
                p = null;
            });
            if (void 0 === f) f = null;
            // Send the request
            p.send(f);
        });
    };
}, /* 24 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(81);
    /**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
    e.exports = function(e, t, r, a, i) {
        var o = new Error(e);
        return n(o, t, r, a, i);
    };
}, /* 25 */
/***/
function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !!(e && e.__CANCEL__);
    };
}, /* 26 */
/***/
function(e, t, r) {
    "use strict";
    /**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
    function n(e) {
        this.message = e;
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    };
    n.prototype.__CANCEL__ = true;
    e.exports = n;
}, /* 27 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.ZZAPI_RESOURCES = {
        issue: function(e, t) {
            return "api/v1/magazine/" + e + "/issue/" + t;
        },
        magazine: function(e) {
            return "api/v1/magazine/" + e;
        }
    };
}, /* 28 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.getRetinaPath = function(e) {
        var t = e.split(".");
        t[t.length - 2] = t[t.length - 2] + "@2x";
        return t.join(".") + " 2x";
    };
}, /* 29 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    // A component can't be named as an HTML tag
    var a = "header";
    var i = 250;
    t.default = {
        name: "zzap-header",
        methods: {
            scrollToCover: function() {
                (0, n.scrollToClassWithOptions)("cover", {
                    behavior: "smooth",
                    offset: -(i + 1)
                });
            },
            scrollToClassWithDefaultOffset: function(e) {
                (0, n.scrollToClassWithDefaultOffset)(e);
            },
            initScroll: function() {
                var e = document.querySelector("." + a + "__logo");
                var t = a + "--compact";
                var r = document.querySelector("." + a);
                var n = .3;
                var o = 900;
                var s = -1;
                var u = -1;
                function l() {
                    var c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    if (s === window.pageYOffset && u === c) requestAnimationFrame(l); else {
                        s = window.pageYOffset;
                        u = c;
                        var f = window.pageYOffset || document.documentElement.scrollTop;
                        if (f >= 0) {
                            var d = Math.min(c, o);
                            if (f > i / o * d) {
                                r.className = a + " " + t;
                                e.style.transform = "scale(" + n + ")";
                            } else {
                                var p = d / i;
                                var v = Math.max(n, 1 - f / 100 / p);
                                e.style.transform = "scale(" + v + ")";
                                r.className = a;
                            }
                        } else e.style.transform = "scale(1)";
                        requestAnimationFrame(l);
                    }
                }
                l();
            }
        },
        mounted: function() {
            this.initScroll();
        }
    };
}, /* 30 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(6);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    // A component can't be named as an HTML tag
    t.default = {
        name: "zzap-footer",
        components: {
            ScrollLink: a.default
        }
    };
}, /* 31 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(21);
    var a = m(n);
    var i = r(5);
    var o = m(i);
    var s = r(14);
    var u = m(s);
    var l = r(102);
    var c = m(l);
    var f = r(104);
    var d = function(e) {
        if (e && e.__esModule) {
            return e;
        } else {
            var t = {};
            if (e != null) {
                for (var r in e) {
                    if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
                }
            }
            t.default = e;
            return t;
        }
    }(f);
    var p = r(105);
    var v = r(27);
    var h = r(4);
    function m(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "scanissue",
        props: [ "magazineId", "issueId" ],
        components: {
            ScanissueImage: c.default
        },
        data: function() {
            return {
                issue: {},
                readerData: {},
                doublePagesCache: [],
                errors: [],
                specialBookmarks: {
                    cover: "cover",
                    backcover: "backcover"
                },
                bookmarks: []
            };
        },
        watch: {
            // Can't use arrow functions here. See: https://vuejs.org/v2/api/#watch
            // eslint-disable-next-line object-shorthand
            issueId: function(e) {
                this.loadIssue(e);
            }
        },
        computed: {
            isIssueId: function() {
                return !(0, p.isEmptyObject)(this.issue);
            },
            doublePages: function() {
                if (0 === this.doublePagesCache.length) {
                    var e = [];
                    if (this.isIssueId) for (var t = 1; t < this.issue.volumes[0].pages.length - 1; t += 2) e.push(t);
                    this.doublePagesCache = e;
                }
                return this.doublePagesCache;
            },
            anchors: function() {
                return this.bookmarks.map(function(e) {
                    return e.anchor;
                });
            }
        },
        methods: {
            resetLoadedIssue: function() {
                this.doublePagesCache = [];
                this.readerData = {};
                this.dismissBookmarks();
            },
            loadIssue: function(e) {
                var t = this;
                if ("" !== e) a.default.get(v.ZZAPI_RESOURCES.issue(this.magazineId, this.issueId)).then(function(e) {
                    t.resetLoadedIssue();
                    t.issue = e.data;
                    t.bookmarks = t.getBookmarks();
                    t.announceBookmarks();
                }).catch(function(e) {
                    return t.errors.push(e);
                });
            },
            buildPageThumbPath: function(e) {
                return "img/thumbs/" + e;
            },
            buildScanPath: function(e) {
                return "img/scans/" + e;
            },
            getMonth: function(e) {
                return d.MONTHS.it[e - 1];
            },
            getReaderData: function(e) {
                var t = this;
                if ((0, p.isEmptyObject)(this.readerData)) {
                    var r = {};
                    var n = this.getMonth(+this.issue.month) + " " + this.issue.year;
                    // eslint-disable-next-line max-len
                    r.title = this.issue.magazine.name + " " + d.TEXTS.it.issue + " " + this.issue.sequence + " - " + n;
                    r.pages = [];
                    // Cover
                    r.pages.push(this.buildDoublePageForReader(void 0, this.issue.volumes[0].pages[0]));
                    // Spreads
                    this.doublePages.forEach(function(e) {
                        r.pages.push(t.buildDoublePageForReader(t.issue.volumes[0].pages[+e], t.issue.volumes[0].pages[+e + 1]));
                    });
                    // Back cover
                    r.pages.push(this.buildDoublePageForReader(this.issue.volumes[0].pages[this.issue.volumes[0].pages.length - 1]));
                    this.readerData = r;
                }
                this.readerData.startPage = Math.floor(+e / 2);
                this.readerData.returnBookmark = "scanissue__" + e;
                return this.readerData;
            },
            buildDoublePageForReader: function(e, t) {
                var r = {};
                if ("undefined" !== typeof e) r.first = {
                    label: e.label,
                    path: this.buildScanPath(e.scan.path)
                };
                if ("undefined" !== typeof t) r.last = {
                    label: t.label,
                    path: this.buildScanPath(t.scan.path)
                };
                return r;
            },
            openReader: function(e) {
                this.$emit(o.default.openReader, this.getReaderData(e));
            },
            getContentClass: function(e) {
                var t = [ "page", e.sequence ];
                if (e.content.length > 0) e.content.forEach(function(e) {
                    t.push("content-type-" + e.content_type_id);
                });
                if (e.sequence === this.issue.volumes[0].pages) t.push("backcover");
                return t.map(function(e) {
                    return "scanissue__" + e;
                }).join(" ");
            },
            getBookmarks: function() {
                var e = [ {
                    title: d.CONTENT_TYPES.it[0],
                    anchor: this.specialBookmarks.cover,
                    target: "scanissue"
                } ];
                this.issue.volumes[0].pages.forEach(function(t) {
                    t.content.forEach(function(t) {
                        e.push({
                            title: d.CONTENT_TYPES.it[t.content_type_id],
                            anchor: "content-type-" + t.content_type_id,
                            target: "scanissue"
                        });
                    });
                });
                e.push({
                    title: d.CONTENT_TYPES.it[d.CONTENT_TYPES.it.length - 1],
                    anchor: this.specialBookmarks.backcover,
                    target: "scanissue"
                });
                return e;
            },
            announceBookmarks: function() {
                var e = this;
                // Gives time to destroyed pages to close their bookmarks
                window.setTimeout(function() {
                    e.$emit(o.default.announceBookmark, e.bookmarks);
                }, u.default.bookmarkCloseDelay);
            },
            dismissBookmarks: function() {
                this.$emit(o.default.dismissBookmark, this.anchors);
            }
        },
        mounted: function() {
            this.loadIssue(this.issueId);
            (0, h.scrollToClassWithDefaultOffset)("scanissue");
        },
        updated: function() {
            (0, h.scrollToClassWithDefaultOffset)("scanissue");
        },
        beforeDestroy: function() {
            this.dismissBookmarks();
        }
    };
}, /* 32 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        name: "scanissue-info",
        props: [ "issueNumber", "issueMonth", "issueYear", "issueEditor", "contributors" ],
        methods: {
            buildContributorPath: function(e) {
                return "/redazione/" + e;
            }
        }
    };
}, /* 33 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 34 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(7);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(108);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/contentcontainer/contentcontainer.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-3924d062", u.options); else t.reload("data-v-3924d062", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 35 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(36);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(109);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/contentsection/contentsection.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5fac450f", u.options); else t.reload("data-v-5fac450f", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 36 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        name: "content-section",
        props: [ "title" ]
    };
}, /* 37 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(38);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(110);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/contentimage/contentimage.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-c99984e2", u.options); else t.reload("data-v-c99984e2", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 38 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    var i = r(28);
    /**
 * align: left | right
 * rotation: cw, cc
 */
    t.default = {
        name: "content__image",
        props: [ "imagePath", "linkUrl", "caption", "align", "rotation", "readerData", "noShadow", "noSrcset" ],
        computed: {
            fullStyle: function() {
                var e = [];
                var t = "content__image";
                e.push(t);
                if ("undefined" !== typeof this.linkUrl || "undefined" !== typeof this.readerData) e.push(t + "--link");
                if ("undefined" !== typeof this.align) e.push(t + "--" + this.align);
                if ("undefined" !== typeof this.rotation) e.push(t + "--" + this.rotation);
                if ("undefined" !== typeof this.noShadow) e.push(t + "--no-shadow");
                return e.join(" ");
            },
            srcset: function() {
                if ("undefined" !== typeof this.noSrcset) return "";
                return (0, i.getRetinaPath)(this.imagePath);
            }
        },
        methods: {
            openReader: function() {
                this.$emit(a.default.openReader, this.readerData);
            }
        }
    };
}, /* 39 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 40 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 41 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 42 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 43 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 44 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 45 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 46 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var a = c(n);
    var i = r(3);
    var o = c(i);
    var s = r(1);
    var u = c(s);
    var l = r(120);
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, o.default)(true, {}, u.default, {
        methods: {
            generateReaderPages: function(e, t, r) {
                var n = [];
                n.push({
                    last: {
                        label: "1",
                        path: "" + e + (0, l.addLeftPadding)(1, "0", 2) + t
                    }
                });
                if (r > 2) for (var a = 2; a <= r - 2; a += 2) n.push({
                    first: {
                        label: "" + a,
                        path: "" + e + (0, l.addLeftPadding)(a, "0", 2) + t
                    },
                    last: {
                        label: "" + (a + 1),
                        path: "" + e + (0, l.addLeftPadding)(a + 1, "0", 2) + t
                    }
                });
                if (r > 1) n.push({
                    first: {
                        label: r,
                        path: "" + e + (0, l.addLeftPadding)(r, "0", 2) + t
                    }
                });
                return n;
            },
            getReaderData: function() {
                return {
                    title: "Antologia di BovaByte",
                    startPage: 0,
                    returnBookmark: "content__speciali-bovabyte",
                    pages: this.generateReaderPages("assets/content/speciali/bovabyte/bva/", ".jpg", 36)
                };
            },
            getBovaByte2ReaderData: function(e) {
                return {
                    title: "BovaByte 2 - Numero " + e,
                    startPage: 0,
                    returnBookmark: "content__speciali-bovabyte",
                    pages: [ {
                        first: {
                            label: "Fronte",
                            path: "assets/content/speciali/bovabyte/bv2/bovabyte2-" + e + "-1.jpg"
                        },
                        last: {
                            label: "Retro",
                            path: "assets/content/speciali/bovabyte/bv2/bovabyte2-" + e + "-2.jpg"
                        }
                    } ]
                };
            },
            openReader: function(e) {
                this.$emit(a.default.openReader, e);
            }
        }
    });
}, /* 47 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 48 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 49 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(34);
    var a = l(n);
    var i = r(35);
    var o = l(i);
    var s = r(37);
    var u = l(s);
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        components: {
            ContentContainer: a.default,
            ContentSection: o.default,
            ContentImage: u.default
        }
    };
}, /* 50 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(3);
    var a = s(n);
    var i = r(1);
    var o = s(i);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, a.default)(true, {}, o.default);
}, /* 51 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(52);
    var a = v(n);
    var i = r(55);
    var o = v(i);
    var s = r(56);
    var u = v(s);
    var l = r(57);
    var c = v(l);
    var f = r(58);
    var d = v(f);
    var p = r(60);
    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    // Init Polyfills
    c.default.polyfill();
    // Init Vue routes
    var h = new o.default({
        routes: p.routes
    });
    // Init Vue
    a.default.config.productionTip = false;
    a.default.use(o.default);
    a.default.use(u.default);
    // eslint-disable-next-line no-unused-vars
    new a.default({
        el: ".vueroot",
        router: h,
        render: function(e) {
            return e(d.default);
        }
    });
    // Include all *.js files in the "components" folder but exclude .test files
    var m = r(121);
    m.keys().forEach(m);
}, /* 52 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* WEBPACK VAR INJECTION */
    (function(e, r) {
        /*!
 * Vue.js v2.5.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
        /*  */
        // these helpers produces better vm code in JS engines due to their
        // explicitness and function inlining
        function n(e) {
            return void 0 === e || null === e;
        }
        function a(e) {
            return void 0 !== e && null !== e;
        }
        function i(e) {
            return true === e;
        }
        function o(e) {
            return false === e;
        }
        /**
 * Check if value is primitive
 */
        function s(e) {
            return "string" === typeof e || "number" === typeof e || "boolean" === typeof e;
        }
        /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
        function u(e) {
            return null !== e && "object" === typeof e;
        }
        /**
 * Get the raw type string of a value e.g. [object Object]
 */
        var l = Object.prototype.toString;
        function c(e) {
            return l.call(e).slice(8, -1);
        }
        /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
        function f(e) {
            return "[object Object]" === l.call(e);
        }
        function d(e) {
            return "[object RegExp]" === l.call(e);
        }
        /**
 * Check if val is a valid array index.
 */
        function p(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e);
        }
        /**
 * Convert a value to a string that is actually rendered.
 */
        function v(e) {
            return null == e ? "" : "object" === typeof e ? JSON.stringify(e, null, 2) : String(e);
        }
        /**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
        function h(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t;
        }
        /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
        function m(e, t) {
            var r = Object.create(null);
            var n = e.split(",");
            for (var a = 0; a < n.length; a++) r[n[a]] = true;
            return t ? function(e) {
                return r[e.toLowerCase()];
            } : function(e) {
                return r[e];
            };
        }
        /**
 * Check if a tag is a built-in tag.
 */
        var y = m("slot,component", true);
        /**
 * Check if a attribute is a reserved attribute.
 */
        var _ = m("key,ref,slot,slot-scope,is");
        /**
 * Remove an item from an array
 */
        function g(e, t) {
            if (e.length) {
                var r = e.indexOf(t);
                if (r > -1) return e.splice(r, 1);
            }
        }
        /**
 * Check whether the object has the property.
 */
        var b = Object.prototype.hasOwnProperty;
        function w(e, t) {
            return b.call(e, t);
        }
        /**
 * Create a cached version of a pure function.
 */
        function k(e) {
            var t = Object.create(null);
            return function(r) {
                return t[r] || (t[r] = e(r));
            };
        }
        /**
 * Camelize a hyphen-delimited string.
 */
        var C = /-(\w)/g;
        var x = k(function(e) {
            return e.replace(C, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        });
        /**
 * Capitalize a string.
 */
        var O = k(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        });
        /**
 * Hyphenate a camelCase string.
 */
        var A = /\B([A-Z])/g;
        var j = k(function(e) {
            return e.replace(A, "-$1").toLowerCase();
        });
        /**
 * Simple bind, faster than native
 */
        function E(e, t) {
            function r(r) {
                var n = arguments.length;
                return n ? n > 1 ? e.apply(t, arguments) : e.call(t, r) : e.call(t);
            }
            // record original fn length
            r._length = e.length;
            return r;
        }
        /**
 * Convert an Array-like object to a real Array.
 */
        function S(e, t) {
            t = t || 0;
            var r = e.length - t;
            var n = new Array(r);
            while (r--) n[r] = e[r + t];
            return n;
        }
        /**
 * Mix properties into target object.
 */
        function T(e, t) {
            for (var r in t) e[r] = t[r];
            return e;
        }
        /**
 * Merge an Array of Objects into a single Object.
 */
        function P(e) {
            var t = {};
            for (var r = 0; r < e.length; r++) if (e[r]) T(t, e[r]);
            return t;
        }
        /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
        function $(e, t, r) {}
        /**
 * Always return false.
 */
        var M = function(e, t, r) {
            return false;
        };
        /**
 * Return same value
 */
        var R = function(e) {
            return e;
        };
        /**
 * Generate a static keys string from compiler modules.
 */
        /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
        function L(e, t) {
            if (e === t) return true;
            var r = u(e);
            var n = u(t);
            if (r && n) try {
                var a = Array.isArray(e);
                var i = Array.isArray(t);
                if (a && i) return e.length === t.length && e.every(function(e, r) {
                    return L(e, t[r]);
                }); else if (!a && !i) {
                    var o = Object.keys(e);
                    var s = Object.keys(t);
                    return o.length === s.length && o.every(function(r) {
                        return L(e[r], t[r]);
                    });
                } else /* istanbul ignore next */
                return false;
            } catch (e) {
                /* istanbul ignore next */
                return false;
            } else if (!r && !n) return String(e) === String(t); else return false;
        }
        function I(e, t) {
            for (var r = 0; r < e.length; r++) if (L(e[r], t)) return r;
            return -1;
        }
        /**
 * Ensure a function is called only once.
 */
        function z(e) {
            var t = false;
            return function() {
                if (!t) {
                    t = true;
                    e.apply(this, arguments);
                }
            };
        }
        var D = "data-server-rendered";
        var N = [ "component", "directive", "filter" ];
        var B = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ];
        /*  */
        var q = {
            /**
   * Option merge strategies (used in core/util/options)
   */
            optionMergeStrategies: Object.create(null),
            /**
   * Whether to suppress warnings.
   */
            silent: false,
            /**
   * Show production mode tip message on boot?
   */
            productionTip: true,
            /**
   * Whether to enable devtools
   */
            devtools: true,
            /**
   * Whether to record perf
   */
            performance: false,
            /**
   * Error handler for watcher errors
   */
            errorHandler: null,
            /**
   * Warn handler for watcher warns
   */
            warnHandler: null,
            /**
   * Ignore certain custom elements
   */
            ignoredElements: [],
            /**
   * Custom user key aliases for v-on
   */
            keyCodes: Object.create(null),
            /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
            isReservedTag: M,
            /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
            isReservedAttr: M,
            /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
            isUnknownElement: M,
            /**
   * Get the namespace of an element
   */
            getTagNamespace: $,
            /**
   * Parse the real tag name for the specific platform.
   */
            parsePlatformTagName: R,
            /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
            mustUseProp: M,
            /**
   * Exposed for legacy reasons
   */
            _lifecycleHooks: B
        };
        /*  */
        var F = Object.freeze({});
        /**
 * Check if a string starts with $ or _
 */
        function U(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t;
        }
        /**
 * Define a property.
 */
        function H(e, t, r, n) {
            Object.defineProperty(e, t, {
                value: r,
                enumerable: !!n,
                writable: true,
                configurable: true
            });
        }
        /**
 * Parse simple path.
 */
        var V = /[^\w.$]/;
        function W(e) {
            if (V.test(e)) return;
            var t = e.split(".");
            return function(e) {
                for (var r = 0; r < t.length; r++) {
                    if (!e) return;
                    e = e[t[r]];
                }
                return e;
            };
        }
        /*  */
        // can we use __proto__?
        var Y = "__proto__" in {};
        // Browser environment sniffing
        var Z = "undefined" !== typeof window;
        var X = Z && window.navigator.userAgent.toLowerCase();
        var Q = X && /msie|trident/.test(X);
        var J = X && X.indexOf("msie 9.0") > 0;
        var K = X && X.indexOf("edge/") > 0;
        var G = X && X.indexOf("android") > 0;
        var ee = X && /iphone|ipad|ipod|ios/.test(X);
        var te = X && /chrome\/\d+/.test(X) && !K;
        // Firefox has a "watch" function on Object.prototype...
        var re = {}.watch;
        var ne = false;
        if (Z) try {
            var ae = {};
            Object.defineProperty(ae, "passive", {
                get: function() {
                    /* istanbul ignore next */
                    ne = true;
                }
            });
            // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, ae);
        } catch (e) {}
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
        var ie;
        var oe = function() {
            if (void 0 === ie) /* istanbul ignore if */
            if (!Z && "undefined" !== typeof e) // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            ie = "server" === e["process"].env.VUE_ENV; else ie = false;
            return ie;
        };
        // detect devtools
        var se = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */
        function ue(e) {
            return "function" === typeof e && /native code/.test(e.toString());
        }
        var le = "undefined" !== typeof Symbol && ue(Symbol) && "undefined" !== typeof Reflect && ue(Reflect.ownKeys);
        var ce;
        /* istanbul ignore if */
        // $flow-disable-line
        if ("undefined" !== typeof Set && ue(Set)) // use native Set when available.
        ce = Set; else // a non-standard Set polyfill that only works with primitive keys.
        ce = function() {
            function e() {
                this.set = Object.create(null);
            }
            e.prototype.has = function(e) {
                return true === this.set[e];
            };
            e.prototype.add = function(e) {
                this.set[e] = true;
            };
            e.prototype.clear = function() {
                this.set = Object.create(null);
            };
            return e;
        }();
        /*  */
        var fe = $;
        var de = $;
        var pe = $;
        // work around flow check
        var ve = $;
        if (true) {
            var he = "undefined" !== typeof console;
            var me = /(?:^|[-_])(\w)/g;
            var ye = function(e) {
                return e.replace(me, function(e) {
                    return e.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            fe = function(e, t) {
                var r = t ? pe(t) : "";
                if (q.warnHandler) q.warnHandler.call(null, e, t, r); else if (he && !q.silent) console.error("[Vue warn]: " + e + r);
            };
            de = function(e, t) {
                if (he && !q.silent) console.warn("[Vue tip]: " + e + (t ? pe(t) : ""));
            };
            ve = function(e, t) {
                if (e.$root === e) return "<Root>";
                var r = "function" === typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e || {};
                var n = r.name || r._componentTag;
                var a = r.__file;
                if (!n && a) {
                    var i = a.match(/([^\/\\]+)\.vue$/);
                    n = i && i[1];
                }
                return (n ? "<" + ye(n) + ">" : "<Anonymous>") + (a && false !== t ? " at " + a : "");
            };
            var _e = function(e, t) {
                var r = "";
                while (t) {
                    if (t % 2 === 1) r += e;
                    if (t > 1) e += e;
                    t >>= 1;
                }
                return r;
            };
            pe = function(e) {
                if (e._isVue && e.$parent) {
                    var t = [];
                    var r = 0;
                    while (e) {
                        if (t.length > 0) {
                            var n = t[t.length - 1];
                            if (n.constructor === e.constructor) {
                                r++;
                                e = e.$parent;
                                continue;
                            } else if (r > 0) {
                                t[t.length - 1] = [ n, r ];
                                r = 0;
                            }
                        }
                        t.push(e);
                        e = e.$parent;
                    }
                    return "\n\nfound in\n\n" + t.map(function(e, t) {
                        return "" + (0 === t ? "---\x3e " : _e(" ", 5 + 2 * t)) + (Array.isArray(e) ? ve(e[0]) + "... (" + e[1] + " recursive calls)" : ve(e));
                    }).join("\n");
                } else return "\n\n(found in " + ve(e) + ")";
            };
        }
        /*  */
        var ge = 0;
        /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
        var be = function() {
            this.id = ge++;
            this.subs = [];
        };
        be.prototype.addSub = function(e) {
            this.subs.push(e);
        };
        be.prototype.removeSub = function(e) {
            g(this.subs, e);
        };
        be.prototype.depend = function() {
            if (be.target) be.target.addDep(this);
        };
        be.prototype.notify = function() {
            // stabilize the subscriber list first
            var e = this.subs.slice();
            for (var t = 0, r = e.length; t < r; t++) e[t].update();
        };
        // the current target watcher being evaluated.
        // this is globally unique because there could be only one
        // watcher being evaluated at any time.
        be.target = null;
        var we = [];
        function ke(e) {
            if (be.target) we.push(be.target);
            be.target = e;
        }
        function Ce() {
            be.target = we.pop();
        }
        /*  */
        var xe = function(e, t, r, n, a, i, o, s) {
            this.tag = e;
            this.data = t;
            this.children = r;
            this.text = n;
            this.elm = a;
            this.ns = void 0;
            this.context = i;
            this.functionalContext = void 0;
            this.functionalOptions = void 0;
            this.functionalScopeId = void 0;
            this.key = t && t.key;
            this.componentOptions = o;
            this.componentInstance = void 0;
            this.parent = void 0;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = s;
            this.asyncMeta = void 0;
            this.isAsyncPlaceholder = false;
        };
        var Oe = {
            child: {
                configurable: true
            }
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        Oe.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(xe.prototype, Oe);
        var Ae = function(e) {
            if (void 0 === e) e = "";
            var t = new xe();
            t.text = e;
            t.isComment = true;
            return t;
        };
        function je(e) {
            return new xe(void 0, void 0, void 0, String(e));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
        function Ee(e, t) {
            var r = e.componentOptions;
            var n = new xe(e.tag, e.data, e.children, e.text, e.elm, e.context, r, e.asyncFactory);
            n.ns = e.ns;
            n.isStatic = e.isStatic;
            n.key = e.key;
            n.isComment = e.isComment;
            n.isCloned = true;
            if (t) {
                if (e.children) n.children = Se(e.children, true);
                if (r && r.children) r.children = Se(r.children, true);
            }
            return n;
        }
        function Se(e, t) {
            var r = e.length;
            var n = new Array(r);
            for (var a = 0; a < r; a++) n[a] = Ee(e[a], t);
            return n;
        }
        /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
        var Te = Array.prototype;
        var Pe = Object.create(Te);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
            // cache original method
            var t = Te[e];
            H(Pe, e, function() {
                var r = [], n = arguments.length;
                while (n--) r[n] = arguments[n];
                var a = t.apply(this, r);
                var i = this.__ob__;
                var o;
                switch (e) {
                  case "push":
                  case "unshift":
                    o = r;
                    break;

                  case "splice":
                    o = r.slice(2);
                }
                if (o) i.observeArray(o);
                // notify change
                i.dep.notify();
                return a;
            });
        });
        /*  */
        var $e = Object.getOwnPropertyNames(Pe);
        /**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
        var Me = {
            shouldConvert: true
        };
        /**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
        var Re = function(e) {
            this.value = e;
            this.dep = new be();
            this.vmCount = 0;
            H(e, "__ob__", this);
            if (Array.isArray(e)) {
                (Y ? Le : Ie)(e, Pe, $e);
                this.observeArray(e);
            } else this.walk(e);
        };
        /**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
        Re.prototype.walk = function(e) {
            var t = Object.keys(e);
            for (var r = 0; r < t.length; r++) De(e, t[r], e[t[r]]);
        };
        /**
 * Observe a list of Array items.
 */
        Re.prototype.observeArray = function(e) {
            for (var t = 0, r = e.length; t < r; t++) ze(e[t]);
        };
        // helpers
        /**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
        function Le(e, t, r) {
            /* eslint-disable no-proto */
            e.__proto__ = t;
        }
        /**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
        /* istanbul ignore next */
        function Ie(e, t, r) {
            for (var n = 0, a = r.length; n < a; n++) {
                var i = r[n];
                H(e, i, t[i]);
            }
        }
        /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
        function ze(e, t) {
            if (!u(e) || e instanceof xe) return;
            var r;
            if (w(e, "__ob__") && e.__ob__ instanceof Re) r = e.__ob__; else if (Me.shouldConvert && !oe() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue) r = new Re(e);
            if (t && r) r.vmCount++;
            return r;
        }
        /**
 * Define a reactive property on an Object.
 */
        function De(e, t, r, n, a) {
            var i = new be();
            var o = Object.getOwnPropertyDescriptor(e, t);
            if (o && false === o.configurable) return;
            // cater for pre-defined getter/setters
            var s = o && o.get;
            var u = o && o.set;
            var l = !a && ze(r);
            Object.defineProperty(e, t, {
                enumerable: true,
                configurable: true,
                get: function() {
                    var t = s ? s.call(e) : r;
                    if (be.target) {
                        i.depend();
                        if (l) {
                            l.dep.depend();
                            if (Array.isArray(t)) qe(t);
                        }
                    }
                    return t;
                },
                set: function(t) {
                    var o = s ? s.call(e) : r;
                    /* eslint-disable no-self-compare */
                    if (t === o || t !== t && o !== o) return;
                    /* eslint-enable no-self-compare */
                    if (n) n();
                    if (u) u.call(e, t); else r = t;
                    l = !a && ze(t);
                    i.notify();
                }
            });
        }
        /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
        function Ne(e, t, r) {
            if (Array.isArray(e) && p(t)) {
                e.length = Math.max(e.length, t);
                e.splice(t, 1, r);
                return r;
            }
            if (t in e && !(t in Object.prototype)) {
                e[t] = r;
                return r;
            }
            var n = e.__ob__;
            if (e._isVue || n && n.vmCount) {
                fe("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
                return r;
            }
            if (!n) {
                e[t] = r;
                return r;
            }
            De(n.value, t, r);
            n.dep.notify();
            return r;
        }
        /**
 * Delete a property and trigger change if necessary.
 */
        function Be(e, t) {
            if (Array.isArray(e) && p(t)) {
                e.splice(t, 1);
                return;
            }
            var r = e.__ob__;
            if (e._isVue || r && r.vmCount) {
                fe("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
                return;
            }
            if (!w(e, t)) return;
            delete e[t];
            if (!r) return;
            r.dep.notify();
        }
        /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
        function qe(e) {
            for (var t = void 0, r = 0, n = e.length; r < n; r++) {
                t = e[r];
                t && t.__ob__ && t.__ob__.dep.depend();
                if (Array.isArray(t)) qe(t);
            }
        }
        /*  */
        /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
        var Fe = q.optionMergeStrategies;
        /**
 * Options with restrictions
 */
        if (true) Fe.el = Fe.propsData = function(e, t, r, n) {
            if (!r) fe('option "' + n + '" can only be used during instance creation with the `new` keyword.');
            return Ye(e, t);
        };
        /**
 * Helper that recursively merges two data objects together.
 */
        function Ue(e, t) {
            if (!t) return e;
            var r, n, a;
            var i = Object.keys(t);
            for (var o = 0; o < i.length; o++) {
                r = i[o];
                n = e[r];
                a = t[r];
                if (!w(e, r)) Ne(e, r, a); else if (f(n) && f(a)) Ue(n, a);
            }
            return e;
        }
        /**
 * Data
 */
        function He(e, t, r) {
            if (!r) {
                // in a Vue.extend merge, both should be functions
                if (!t) return e;
                if (!e) return t;
                // when parentVal & childVal are both present,
                // we need to return a function that returns the
                // merged result of both functions... no need to
                // check if parentVal is a function here because
                // it has to be a function to pass previous merges.
                return function() {
                    return Ue("function" === typeof t ? t.call(this) : t, "function" === typeof e ? e.call(this) : e);
                };
            } else return function() {
                // instance merge
                var n = "function" === typeof t ? t.call(r) : t;
                var a = "function" === typeof e ? e.call(r) : e;
                if (n) return Ue(n, a); else return a;
            };
        }
        Fe.data = function(e, t, r) {
            if (!r) {
                if (t && "function" !== typeof t) {
                    fe('The "data" option should be a function that returns a per-instance value in component definitions.', r);
                    return e;
                }
                return He(e, t);
            }
            return He(e, t, r);
        };
        /**
 * Hooks and props are merged as arrays.
 */
        function Ve(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
        }
        B.forEach(function(e) {
            Fe[e] = Ve;
        });
        /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
        function We(e, t, r, n) {
            var a = Object.create(e || null);
            if (t) {
                Ke(n, t, r);
                return T(a, t);
            } else return a;
        }
        N.forEach(function(e) {
            Fe[e + "s"] = We;
        });
        /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
        Fe.watch = function(e, t, r, n) {
            // work around Firefox's Object.prototype.watch...
            if (e === re) e = void 0;
            if (t === re) t = void 0;
            /* istanbul ignore if */
            if (!t) return Object.create(e || null);
            if (true) Ke(n, t, r);
            if (!e) return t;
            var a = {};
            T(a, e);
            for (var i in t) {
                var o = a[i];
                var s = t[i];
                if (o && !Array.isArray(o)) o = [ o ];
                a[i] = o ? o.concat(s) : Array.isArray(s) ? s : [ s ];
            }
            return a;
        };
        /**
 * Other object hashes.
 */
        Fe.props = Fe.methods = Fe.inject = Fe.computed = function(e, t, r, n) {
            if (t && true) Ke(n, t, r);
            if (!e) return t;
            var a = Object.create(null);
            T(a, e);
            if (t) T(a, t);
            return a;
        };
        Fe.provide = He;
        /**
 * Default strategy.
 */
        var Ye = function(e, t) {
            return void 0 === t ? e : t;
        };
        /**
 * Validate component names
 */
        function Ze(e) {
            for (var t in e.components) {
                var r = t.toLowerCase();
                if (y(r) || q.isReservedTag(r)) fe("Do not use built-in or reserved HTML elements as component id: " + t);
            }
        }
        /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
        function Xe(e, t) {
            var r = e.props;
            if (!r) return;
            var n = {};
            var a, i, o;
            if (Array.isArray(r)) {
                a = r.length;
                while (a--) {
                    i = r[a];
                    if ("string" === typeof i) {
                        o = x(i);
                        n[o] = {
                            type: null
                        };
                    } else if (true) fe("props must be strings when using array syntax.");
                }
            } else if (f(r)) for (var s in r) {
                i = r[s];
                o = x(s);
                n[o] = f(i) ? i : {
                    type: i
                };
            } else if (true) fe('Invalid value for option "props": expected an Array or an Object, but got ' + c(r) + ".", t);
            e.props = n;
        }
        /**
 * Normalize all injections into Object-based format
 */
        function Qe(e, t) {
            var r = e.inject;
            var n = e.inject = {};
            if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n[r[a]] = {
                from: r[a]
            }; else if (f(r)) for (var i in r) {
                var o = r[i];
                n[i] = f(o) ? T({
                    from: i
                }, o) : {
                    from: o
                };
            } else if (r) fe('Invalid value for option "inject": expected an Array or an Object, but got ' + c(r) + ".", t);
        }
        /**
 * Normalize raw function directives into object format.
 */
        function Je(e) {
            var t = e.directives;
            if (t) for (var r in t) {
                var n = t[r];
                if ("function" === typeof n) t[r] = {
                    bind: n,
                    update: n
                };
            }
        }
        function Ke(e, t, r) {
            if (!f(t)) fe('Invalid value for option "' + e + '": expected an Object, but got ' + c(t) + ".", r);
        }
        /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
        function Ge(e, t, r) {
            if (true) Ze(t);
            if ("function" === typeof t) t = t.options;
            Xe(t, r);
            Qe(t, r);
            Je(t);
            var n = t.extends;
            if (n) e = Ge(e, n, r);
            if (t.mixins) for (var a = 0, i = t.mixins.length; a < i; a++) e = Ge(e, t.mixins[a], r);
            var o = {};
            var s;
            for (s in e) u(s);
            for (s in t) if (!w(e, s)) u(s);
            function u(n) {
                var a = Fe[n] || Ye;
                o[n] = a(e[n], t[n], r, n);
            }
            return o;
        }
        /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
        function et(e, t, r, n) {
            /* istanbul ignore if */
            if ("string" !== typeof r) return;
            var a = e[t];
            // check local registration variations first
            if (w(a, r)) return a[r];
            var i = x(r);
            if (w(a, i)) return a[i];
            var o = O(i);
            if (w(a, o)) return a[o];
            // fallback to prototype chain
            var s = a[r] || a[i] || a[o];
            if (n && !s) fe("Failed to resolve " + t.slice(0, -1) + ": " + r, e);
            return s;
        }
        /*  */
        function tt(e, t, r, n) {
            var a = t[e];
            var i = !w(r, e);
            var o = r[e];
            // handle boolean props
            if (st(Boolean, a.type)) if (i && !w(a, "default")) o = false; else if (!st(String, a.type) && ("" === o || o === j(e))) o = true;
            // check default value
            if (void 0 === o) {
                o = rt(n, a, e);
                // since the default value is a fresh copy,
                // make sure to observe it.
                var s = Me.shouldConvert;
                Me.shouldConvert = true;
                ze(o);
                Me.shouldConvert = s;
            }
            if (true) nt(a, e, o, n, i);
            return o;
        }
        /**
 * Get the default value of a prop.
 */
        function rt(e, t, r) {
            // no default, return undefined
            if (!w(t, "default")) return;
            var n = t.default;
            // warn against non-factory defaults for Object & Array
            if (u(n)) fe('Invalid default value for prop "' + r + '": Props with type Object/Array must use a factory function to return the default value.', e);
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
            if (e && e.$options.propsData && void 0 === e.$options.propsData[r] && void 0 !== e._props[r]) return e._props[r];
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
            return "function" === typeof n && "Function" !== ot(t.type) ? n.call(e) : n;
        }
        /**
 * Assert whether a prop is valid.
 */
        function nt(e, t, r, n, a) {
            if (e.required && a) {
                fe('Missing required prop: "' + t + '"', n);
                return;
            }
            if (null == r && !e.required) return;
            var i = e.type;
            var o = !i || true === i;
            var s = [];
            if (i) {
                if (!Array.isArray(i)) i = [ i ];
                for (var u = 0; u < i.length && !o; u++) {
                    var l = it(r, i[u]);
                    s.push(l.expectedType || "");
                    o = l.valid;
                }
            }
            if (!o) {
                fe('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(O).join(", ") + ", got " + c(r) + ".", n);
                return;
            }
            var f = e.validator;
            if (f) if (!f(r)) fe('Invalid prop: custom validator check failed for prop "' + t + '".', n);
        }
        var at = /^(String|Number|Boolean|Function|Symbol)$/;
        function it(e, t) {
            var r;
            var n = ot(t);
            if (at.test(n)) {
                var a = typeof e;
                r = a === n.toLowerCase();
                // for primitive wrapper objects
                if (!r && "object" === a) r = e instanceof t;
            } else if ("Object" === n) r = f(e); else if ("Array" === n) r = Array.isArray(e); else r = e instanceof t;
            return {
                valid: r,
                expectedType: n
            };
        }
        /**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
        function ot(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : "";
        }
        function st(e, t) {
            if (!Array.isArray(t)) return ot(t) === ot(e);
            for (var r = 0, n = t.length; r < n; r++) if (ot(t[r]) === ot(e)) return true;
            /* istanbul ignore next */
            return false;
        }
        /*  */
        function ut(e, t, r) {
            if (t) {
                var n = t;
                while (n = n.$parent) {
                    var a = n.$options.errorCaptured;
                    if (a) for (var i = 0; i < a.length; i++) try {
                        var o = false === a[i].call(n, e, t, r);
                        if (o) return;
                    } catch (e) {
                        lt(e, n, "errorCaptured hook");
                    }
                }
            }
            lt(e, t, r);
        }
        function lt(e, t, r) {
            if (q.errorHandler) try {
                return q.errorHandler.call(null, e, t, r);
            } catch (e) {
                ct(e, null, "config.errorHandler");
            }
            ct(e, t, r);
        }
        function ct(e, t, r) {
            if (true) fe("Error in " + r + ': "' + e.toString() + '"', t);
            /* istanbul ignore else */
            if (Z && "undefined" !== typeof console) console.error(e); else throw e;
        }
        /*  */
        /* globals MessageChannel */
        var ft = [];
        var dt = false;
        function pt() {
            dt = false;
            var e = ft.slice(0);
            ft.length = 0;
            for (var t = 0; t < e.length; t++) e[t]();
        }
        // Here we have async deferring wrappers using both micro and macro tasks.
        // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
        // micro tasks have too high a priority and fires in between supposedly
        // sequential events (e.g. #4521, #6690) or even between bubbling of the same
        // event (#6566). However, using macro tasks everywhere also has subtle problems
        // when state is changed right before repaint (e.g. #6813, out-in transitions).
        // Here we use micro task by default, but expose a way to force macro task when
        // needed (e.g. in event handlers attached by v-on).
        var vt;
        var ht;
        var mt = false;
        // Determine (macro) Task defer implementation.
        // Technically setImmediate should be the ideal choice, but it's only available
        // in IE. The only polyfill that consistently queues the callback after all DOM
        // events triggered in the same loop is by using MessageChannel.
        /* istanbul ignore if */
        if ("undefined" !== typeof r && ue(r)) ht = function() {
            r(pt);
        }; else if ("undefined" !== typeof MessageChannel && (ue(MessageChannel) || // PhantomJS
        "[object MessageChannelConstructor]" === MessageChannel.toString())) {
            var yt = new MessageChannel();
            var _t = yt.port2;
            yt.port1.onmessage = pt;
            ht = function() {
                _t.postMessage(1);
            };
        } else /* istanbul ignore next */
        ht = function() {
            setTimeout(pt, 0);
        };
        // Determine MicroTask defer implementation.
        /* istanbul ignore next, $flow-disable-line */
        if ("undefined" !== typeof Promise && ue(Promise)) {
            var gt = Promise.resolve();
            vt = function() {
                gt.then(pt);
                // in problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                if (ee) setTimeout($);
            };
        } else // fallback to macro
        vt = ht;
        /**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
        function bt(e) {
            return e._withTask || (e._withTask = function() {
                mt = true;
                var t = e.apply(null, arguments);
                mt = false;
                return t;
            });
        }
        function wt(e, t) {
            var r;
            ft.push(function() {
                if (e) try {
                    e.call(t);
                } catch (e) {
                    ut(e, t, "nextTick");
                } else if (r) r(t);
            });
            if (!dt) {
                dt = true;
                if (mt) ht(); else vt();
            }
            // $flow-disable-line
            if (!e && "undefined" !== typeof Promise) return new Promise(function(e) {
                r = e;
            });
        }
        /*  */
        /* not type checking this file because flow doesn't play well with Proxy */
        var kt;
        if (true) {
            var Ct = m("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require");
            var xt = function(e, t) {
                fe('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', e);
            };
            var Ot = "undefined" !== typeof Proxy && Proxy.toString().match(/native code/);
            if (Ot) {
                var At = m("stop,prevent,self,ctrl,shift,alt,meta,exact");
                q.keyCodes = new Proxy(q.keyCodes, {
                    set: function(e, t, r) {
                        if (At(t)) {
                            fe("Avoid overwriting built-in modifier in config.keyCodes: ." + t);
                            return false;
                        } else {
                            e[t] = r;
                            return true;
                        }
                    }
                });
            }
            var jt = {
                has: function(e, t) {
                    var r = t in e;
                    var n = Ct(t) || "_" === t.charAt(0);
                    if (!r && !n) xt(e, t);
                    return r || !n;
                }
            };
            var Et = {
                get: function(e, t) {
                    if ("string" === typeof t && !(t in e)) xt(e, t);
                    return e[t];
                }
            };
            kt = function(e) {
                if (Ot) {
                    // determine which proxy handler to use
                    var t = e.$options;
                    var r = t.render && t.render._withStripped ? Et : jt;
                    e._renderProxy = new Proxy(e, r);
                } else e._renderProxy = e;
            };
        }
        var St;
        var Tt;
        if (true) {
            var Pt = Z && window.performance;
            /* istanbul ignore if */
            if (Pt && Pt.mark && Pt.measure && Pt.clearMarks && Pt.clearMeasures) {
                St = function(e) {
                    return Pt.mark(e);
                };
                Tt = function(e, t, r) {
                    Pt.measure(e, t, r);
                    Pt.clearMarks(t);
                    Pt.clearMarks(r);
                    Pt.clearMeasures(e);
                };
            }
        }
        /*  */
        var $t = k(function(e) {
            var t = "&" === e.charAt(0);
            e = t ? e.slice(1) : e;
            var r = "~" === e.charAt(0);
            // Prefixed last, checked first
            e = r ? e.slice(1) : e;
            var n = "!" === e.charAt(0);
            e = n ? e.slice(1) : e;
            return {
                name: e,
                once: r,
                capture: n,
                passive: t
            };
        });
        function Mt(e) {
            function t() {
                var e = arguments;
                var r = t.fns;
                if (Array.isArray(r)) {
                    var n = r.slice();
                    for (var a = 0; a < n.length; a++) n[a].apply(null, e);
                } else // return handler return value for single handlers
                return r.apply(null, arguments);
            }
            t.fns = e;
            return t;
        }
        function Rt(e, t, r, a, i) {
            var o, s, u, l;
            for (o in e) {
                s = e[o];
                u = t[o];
                l = $t(o);
                if (n(s)) fe('Invalid handler for event "' + l.name + '": got ' + String(s), i); else if (n(u)) {
                    if (n(s.fns)) s = e[o] = Mt(s);
                    r(l.name, s, l.once, l.capture, l.passive);
                } else if (s !== u) {
                    u.fns = s;
                    e[o] = u;
                }
            }
            for (o in t) if (n(e[o])) {
                l = $t(o);
                a(l.name, t[o], l.capture);
            }
        }
        /*  */
        function Lt(e, t, r) {
            if (e instanceof xe) e = e.data.hook || (e.data.hook = {});
            var o;
            var s = e[t];
            function u() {
                r.apply(this, arguments);
                // important: remove merged hook to ensure it's called only once
                // and prevent memory leak
                g(o.fns, u);
            }
            if (n(s)) // no existing hook
            o = Mt([ u ]); else /* istanbul ignore if */
            if (a(s.fns) && i(s.merged)) {
                // already a merged invoker
                o = s;
                o.fns.push(u);
            } else // existing plain hook
            o = Mt([ s, u ]);
            o.merged = true;
            e[t] = o;
        }
        /*  */
        function It(e, t, r) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var i = t.options.props;
            if (n(i)) return;
            var o = {};
            var s = e.attrs;
            var u = e.props;
            if (a(s) || a(u)) for (var l in i) {
                var c = j(l);
                if (true) {
                    var f = l.toLowerCase();
                    if (l !== f && s && w(s, f)) de('Prop "' + f + '" is passed to component ' + ve(r || t) + ', but the declared prop name is "' + l + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + c + '" instead of "' + l + '".');
                }
                zt(o, u, l, c, true) || zt(o, s, l, c, false);
            }
            return o;
        }
        function zt(e, t, r, n, i) {
            if (a(t)) if (w(t, r)) {
                e[r] = t[r];
                if (!i) delete t[r];
                return true;
            } else if (w(t, n)) {
                e[r] = t[n];
                if (!i) delete t[n];
                return true;
            }
            return false;
        }
        /*  */
        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:
        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.
        function Dt(e) {
            for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e;
        }
        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
        function Nt(e) {
            return s(e) ? [ je(e) ] : Array.isArray(e) ? qt(e) : void 0;
        }
        function Bt(e) {
            return a(e) && a(e.text) && o(e.isComment);
        }
        function qt(e, t) {
            var r = [];
            var o, u, l, c;
            for (o = 0; o < e.length; o++) {
                u = e[o];
                if (n(u) || "boolean" === typeof u) continue;
                l = r.length - 1;
                c = r[l];
                //  nested
                if (Array.isArray(u)) {
                    if (u.length > 0) {
                        u = qt(u, (t || "") + "_" + o);
                        // merge adjacent text nodes
                        if (Bt(u[0]) && Bt(c)) {
                            r[l] = je(c.text + u[0].text);
                            u.shift();
                        }
                        r.push.apply(r, u);
                    }
                } else if (s(u)) {
                    if (Bt(c)) // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    r[l] = je(c.text + u); else if ("" !== u) // convert primitive to vnode
                    r.push(je(u));
                } else if (Bt(u) && Bt(c)) // merge adjacent text nodes
                r[l] = je(c.text + u.text); else {
                    // default key for nested array children (likely generated by v-for)
                    if (i(e._isVList) && a(u.tag) && n(u.key) && a(t)) u.key = "__vlist" + t + "_" + o + "__";
                    r.push(u);
                }
            }
            return r;
        }
        /*  */
        function Ft(e, t) {
            if (e.__esModule || le && "Module" === e[Symbol.toStringTag]) e = e.default;
            return u(e) ? t.extend(e) : e;
        }
        function Ut(e, t, r, n, a) {
            var i = Ae();
            i.asyncFactory = e;
            i.asyncMeta = {
                data: t,
                context: r,
                children: n,
                tag: a
            };
            return i;
        }
        function Ht(e, t, r) {
            if (i(e.error) && a(e.errorComp)) return e.errorComp;
            if (a(e.resolved)) return e.resolved;
            if (i(e.loading) && a(e.loadingComp)) return e.loadingComp;
            if (a(e.contexts)) // already pending
            e.contexts.push(r); else {
                var o = e.contexts = [ r ];
                var s = true;
                var l = function() {
                    for (var e = 0, t = o.length; e < t; e++) o[e].$forceUpdate();
                };
                var c = z(function(r) {
                    // cache resolved
                    e.resolved = Ft(r, t);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                    if (!s) l();
                });
                var f = z(function(t) {
                    fe("Failed to resolve async component: " + String(e) + (t ? "\nReason: " + t : ""));
                    if (a(e.errorComp)) {
                        e.error = true;
                        l();
                    }
                });
                var d = e(c, f);
                if (u(d)) if ("function" === typeof d.then) {
                    // () => Promise
                    if (n(e.resolved)) d.then(c, f);
                } else if (a(d.component) && "function" === typeof d.component.then) {
                    d.component.then(c, f);
                    if (a(d.error)) e.errorComp = Ft(d.error, t);
                    if (a(d.loading)) {
                        e.loadingComp = Ft(d.loading, t);
                        if (0 === d.delay) e.loading = true; else setTimeout(function() {
                            if (n(e.resolved) && n(e.error)) {
                                e.loading = true;
                                l();
                            }
                        }, d.delay || 200);
                    }
                    if (a(d.timeout)) setTimeout(function() {
                        if (n(e.resolved)) f(true ? "timeout (" + d.timeout + "ms)" : null);
                    }, d.timeout);
                }
                s = false;
                // return in case resolved synchronously
                return e.loading ? e.loadingComp : e.resolved;
            }
        }
        /*  */
        function Vt(e) {
            return e.isComment && e.asyncFactory;
        }
        /*  */
        function Wt(e) {
            if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (a(r) && (a(r.componentOptions) || Vt(r))) return r;
            }
        }
        /*  */
        /*  */
        function Yt(e) {
            e._events = Object.create(null);
            e._hasHookEvent = false;
            // init parent attached events
            var t = e.$options._parentListeners;
            if (t) Jt(e, t);
        }
        var Zt;
        function Xt(e, t, r) {
            if (r) Zt.$once(e, t); else Zt.$on(e, t);
        }
        function Qt(e, t) {
            Zt.$off(e, t);
        }
        function Jt(e, t, r) {
            Zt = e;
            Rt(t, r || {}, Xt, Qt, e);
            Zt = void 0;
        }
        /*  */
        /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
        function Kt(e, t) {
            var r = {};
            if (!e) return r;
            for (var n = 0, a = e.length; n < a; n++) {
                var i = e[n];
                var o = i.data;
                // remove slot attribute if the node is resolved as a Vue slot node
                if (o && o.attrs && o.attrs.slot) delete o.attrs.slot;
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                if ((i.context === t || i.functionalContext === t) && o && null != o.slot) {
                    var s = i.data.slot;
                    var u = r[s] || (r[s] = []);
                    if ("template" === i.tag) u.push.apply(u, i.children); else u.push(i);
                } else (r.default || (r.default = [])).push(i);
            }
            // ignore slots that contains only whitespace
            for (var l in r) if (r[l].every(Gt)) delete r[l];
            return r;
        }
        function Gt(e) {
            return e.isComment || " " === e.text;
        }
        function er(e, // see flow/vnode
        t) {
            t = t || {};
            for (var r = 0; r < e.length; r++) if (Array.isArray(e[r])) er(e[r], t); else t[e[r].key] = e[r].fn;
            return t;
        }
        /*  */
        var tr = null;
        var rr = false;
        function nr(e) {
            var t = e.$options;
            // locate first non-abstract parent
            var r = t.parent;
            if (r && !t.abstract) {
                while (r.$options.abstract && r.$parent) r = r.$parent;
                r.$children.push(e);
            }
            e.$parent = r;
            e.$root = r ? r.$root : e;
            e.$children = [];
            e.$refs = {};
            e._watcher = null;
            e._inactive = null;
            e._directInactive = false;
            e._isMounted = false;
            e._isDestroyed = false;
            e._isBeingDestroyed = false;
        }
        function ar(e, t, r) {
            e.$el = t;
            if (!e.$options.render) {
                e.$options.render = Ae;
                if (true) /* istanbul ignore if */
                if (e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t) fe("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e); else fe("Failed to mount component: template or render function not defined.", e);
            }
            lr(e, "beforeMount");
            var n;
            /* istanbul ignore if */
            if (q.performance && St) n = function() {
                var t = e._name;
                var n = e._uid;
                var a = "vue-perf-start:" + n;
                var i = "vue-perf-end:" + n;
                St(a);
                var o = e._render();
                St(i);
                Tt("vue " + t + " render", a, i);
                St(a);
                e._update(o, r);
                St(i);
                Tt("vue " + t + " patch", a, i);
            }; else n = function() {
                e._update(e._render(), r);
            };
            e._watcher = new Or(e, n, $);
            r = false;
            // manually mounted instance, call mounted on self
            // mounted is called for render-created child components in its inserted hook
            if (null == e.$vnode) {
                e._isMounted = true;
                lr(e, "mounted");
            }
            return e;
        }
        function ir(e, t, r, n, a) {
            if (true) rr = true;
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren
            var i = !!(a || // has new static slots
            e.$options._renderChildren || // has old static slots
            n.data.scopedSlots || // has new scoped slots
            e.$scopedSlots !== F);
            e.$options._parentVnode = n;
            e.$vnode = n;
            // update vm's placeholder node without re-render
            if (e._vnode) // update child tree's parent
            e._vnode.parent = n;
            e.$options._renderChildren = a;
            // update $attrs and $listeners hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
            e.$attrs = n.data && n.data.attrs || F;
            e.$listeners = r || F;
            // update props
            if (t && e.$options.props) {
                Me.shouldConvert = false;
                var o = e._props;
                var s = e.$options._propKeys || [];
                for (var u = 0; u < s.length; u++) {
                    var l = s[u];
                    o[l] = tt(l, e.$options.props, t, e);
                }
                Me.shouldConvert = true;
                // keep a copy of raw propsData
                e.$options.propsData = t;
            }
            // update listeners
            if (r) {
                var c = e.$options._parentListeners;
                e.$options._parentListeners = r;
                Jt(e, r, c);
            }
            // resolve slots + force update if has children
            if (i) {
                e.$slots = Kt(a, n.context);
                e.$forceUpdate();
            }
            if (true) rr = false;
        }
        function or(e) {
            while (e && (e = e.$parent)) if (e._inactive) return true;
            return false;
        }
        function sr(e, t) {
            if (t) {
                e._directInactive = false;
                if (or(e)) return;
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = false;
                for (var r = 0; r < e.$children.length; r++) sr(e.$children[r]);
                lr(e, "activated");
            }
        }
        function ur(e, t) {
            if (t) {
                e._directInactive = true;
                if (or(e)) return;
            }
            if (!e._inactive) {
                e._inactive = true;
                for (var r = 0; r < e.$children.length; r++) ur(e.$children[r]);
                lr(e, "deactivated");
            }
        }
        function lr(e, t) {
            var r = e.$options[t];
            if (r) for (var n = 0, a = r.length; n < a; n++) try {
                r[n].call(e);
            } catch (r) {
                ut(r, e, t + " hook");
            }
            if (e._hasHookEvent) e.$emit("hook:" + t);
        }
        /*  */
        var cr = 100;
        var fr = [];
        var dr = [];
        var pr = {};
        var vr = {};
        var hr = false;
        var mr = false;
        var yr = 0;
        /**
 * Reset the scheduler's state.
 */
        function _r() {
            yr = fr.length = dr.length = 0;
            pr = {};
            if (true) vr = {};
            hr = mr = false;
        }
        /**
 * Flush both queues and run the watchers.
 */
        function gr() {
            mr = true;
            var e, t;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
            fr.sort(function(e, t) {
                return e.id - t.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
            for (yr = 0; yr < fr.length; yr++) {
                e = fr[yr];
                t = e.id;
                pr[t] = null;
                e.run();
                // in dev build, check and stop circular updates.
                if (null != pr[t]) {
                    vr[t] = (vr[t] || 0) + 1;
                    if (vr[t] > cr) {
                        fe("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
            var r = dr.slice();
            var n = fr.slice();
            _r();
            // call component updated and activated hooks
            kr(r);
            br(n);
            // devtool hook
            /* istanbul ignore if */
            if (se && q.devtools) se.emit("flush");
        }
        function br(e) {
            var t = e.length;
            while (t--) {
                var r = e[t];
                var n = r.vm;
                if (n._watcher === r && n._isMounted) lr(n, "updated");
            }
        }
        /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
        function wr(e) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            e._inactive = false;
            dr.push(e);
        }
        function kr(e) {
            for (var t = 0; t < e.length; t++) {
                e[t]._inactive = true;
                sr(e[t], true);
            }
        }
        /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
        function Cr(e) {
            var t = e.id;
            if (null == pr[t]) {
                pr[t] = true;
                if (!mr) fr.push(e); else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var r = fr.length - 1;
                    while (r > yr && fr[r].id > e.id) r--;
                    fr.splice(r + 1, 0, e);
                }
                // queue the flush
                if (!hr) {
                    hr = true;
                    wt(gr);
                }
            }
        }
        /*  */
        var xr = 0;
        /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
        var Or = function(e, t, r, n) {
            this.vm = e;
            e._watchers.push(this);
            // options
            if (n) {
                this.deep = !!n.deep;
                this.user = !!n.user;
                this.lazy = !!n.lazy;
                this.sync = !!n.sync;
            } else this.deep = this.user = this.lazy = this.sync = false;
            this.cb = r;
            this.id = ++xr;
            // uid for batching
            this.active = true;
            this.dirty = this.lazy;
            // for lazy watchers
            this.deps = [];
            this.newDeps = [];
            this.depIds = new ce();
            this.newDepIds = new ce();
            this.expression = true ? t.toString() : "";
            // parse expression for getter
            if ("function" === typeof t) this.getter = t; else {
                this.getter = W(t);
                if (!this.getter) {
                    this.getter = function() {};
                    fe('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e);
                }
            }
            this.value = this.lazy ? void 0 : this.get();
        };
        /**
 * Evaluate the getter, and re-collect dependencies.
 */
        Or.prototype.get = function() {
            ke(this);
            var e;
            var t = this.vm;
            try {
                e = this.getter.call(t, t);
            } catch (e) {
                if (this.user) ut(e, t, 'getter for watcher "' + this.expression + '"'); else throw e;
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) jr(e);
                Ce();
                this.cleanupDeps();
            }
            return e;
        };
        /**
 * Add a dependency to this directive.
 */
        Or.prototype.addDep = function(e) {
            var t = e.id;
            if (!this.newDepIds.has(t)) {
                this.newDepIds.add(t);
                this.newDeps.push(e);
                if (!this.depIds.has(t)) e.addSub(this);
            }
        };
        /**
 * Clean up for dependency collection.
 */
        Or.prototype.cleanupDeps = function() {
            var e = this;
            var t = this.deps.length;
            while (t--) {
                var r = e.deps[t];
                if (!e.newDepIds.has(r.id)) r.removeSub(e);
            }
            var n = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = n;
            this.newDepIds.clear();
            n = this.deps;
            this.deps = this.newDeps;
            this.newDeps = n;
            this.newDeps.length = 0;
        };
        /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
        Or.prototype.update = function() {
            /* istanbul ignore else */
            if (this.lazy) this.dirty = true; else if (this.sync) this.run(); else Cr(this);
        };
        /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
        Or.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                u(e) || this.deep) {
                    // set new value
                    var t = this.value;
                    this.value = e;
                    if (this.user) try {
                        this.cb.call(this.vm, e, t);
                    } catch (e) {
                        ut(e, this.vm, 'callback for watcher "' + this.expression + '"');
                    } else this.cb.call(this.vm, e, t);
                }
            }
        };
        /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
        Or.prototype.evaluate = function() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
 * Depend on all deps collected by this watcher.
 */
        Or.prototype.depend = function() {
            var e = this;
            var t = this.deps.length;
            while (t--) e.deps[t].depend();
        };
        /**
 * Remove self from all dependencies' subscriber list.
 */
        Or.prototype.teardown = function() {
            var e = this;
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) g(this.vm._watchers, this);
                var t = this.deps.length;
                while (t--) e.deps[t].removeSub(e);
                this.active = false;
            }
        };
        /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
        var Ar = new ce();
        function jr(e) {
            Ar.clear();
            Er(e, Ar);
        }
        function Er(e, t) {
            var r, n;
            var a = Array.isArray(e);
            if (!a && !u(e) || !Object.isExtensible(e)) return;
            if (e.__ob__) {
                var i = e.__ob__.dep.id;
                if (t.has(i)) return;
                t.add(i);
            }
            if (a) {
                r = e.length;
                while (r--) Er(e[r], t);
            } else {
                n = Object.keys(e);
                r = n.length;
                while (r--) Er(e[n[r]], t);
            }
        }
        /*  */
        var Sr = {
            enumerable: true,
            configurable: true,
            get: $,
            set: $
        };
        function Tr(e, t, r) {
            Sr.get = function() {
                return this[t][r];
            };
            Sr.set = function(e) {
                this[t][r] = e;
            };
            Object.defineProperty(e, r, Sr);
        }
        function Pr(e) {
            e._watchers = [];
            var t = e.$options;
            if (t.props) $r(e, t.props);
            if (t.methods) Nr(e, t.methods);
            if (t.data) Mr(e); else ze(e._data = {}, true);
            if (t.computed) Ir(e, t.computed);
            if (t.watch && t.watch !== re) Br(e, t.watch);
        }
        function $r(e, t) {
            var r = e.$options.propsData || {};
            var n = e._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
            var a = e.$options._propKeys = [];
            var i = !e.$parent;
            // root instance props should be converted
            Me.shouldConvert = i;
            for (var o in t) !function(i) {
                a.push(i);
                var o = tt(i, t, r, e);
                /* istanbul ignore else */
                if (true) {
                    var s = j(i);
                    if (_(s) || q.isReservedAttr(s)) fe('"' + s + '" is a reserved attribute and cannot be used as component prop.', e);
                    De(n, i, o, function() {
                        if (e.$parent && !rr) fe("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + i + '"', e);
                    });
                } else De(n, i, o);
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                if (!(i in e)) Tr(e, "_props", i);
            }(o);
            Me.shouldConvert = true;
        }
        function Mr(e) {
            var t = e.$options.data;
            t = e._data = "function" === typeof t ? Rr(t, e) : t || {};
            if (!f(t)) {
                t = {};
                fe("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e);
            }
            // proxy data on instance
            var r = Object.keys(t);
            var n = e.$options.props;
            var a = e.$options.methods;
            var i = r.length;
            while (i--) {
                var o = r[i];
                if (true) if (a && w(a, o)) fe('Method "' + o + '" has already been defined as a data property.', e);
                if (n && w(n, o)) fe('The data property "' + o + '" is already declared as a prop. Use prop default value instead.', e); else if (!U(o)) Tr(e, "_data", o);
            }
            // observe data
            ze(t, true);
        }
        function Rr(e, t) {
            try {
                return e.call(t, t);
            } catch (e) {
                ut(e, t, "data()");
                return {};
            }
        }
        var Lr = {
            lazy: true
        };
        function Ir(e, t) {
            var r = e._computedWatchers = Object.create(null);
            // computed properties are just getters during SSR
            var n = oe();
            for (var a in t) {
                var i = t[a];
                var o = "function" === typeof i ? i : i.get;
                if (null == o) fe('Getter is missing for computed property "' + a + '".', e);
                if (!n) // create internal watcher for the computed property.
                r[a] = new Or(e, o || $, $, Lr);
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                if (!(a in e)) zr(e, a, i); else if (true) if (a in e.$data) fe('The computed property "' + a + '" is already defined in data.', e); else if (e.$options.props && a in e.$options.props) fe('The computed property "' + a + '" is already defined as a prop.', e);
            }
        }
        function zr(e, t, r) {
            var n = !oe();
            if ("function" === typeof r) {
                Sr.get = n ? Dr(t) : r;
                Sr.set = $;
            } else {
                Sr.get = r.get ? n && false !== r.cache ? Dr(t) : r.get : $;
                Sr.set = r.set ? r.set : $;
            }
            if (Sr.set === $) Sr.set = function() {
                fe('Computed property "' + t + '" was assigned to but it has no setter.', this);
            };
            Object.defineProperty(e, t, Sr);
        }
        function Dr(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) {
                    if (t.dirty) t.evaluate();
                    if (be.target) t.depend();
                    return t.value;
                }
            };
        }
        function Nr(e, t) {
            var r = e.$options.props;
            for (var n in t) {
                if (true) {
                    if (null == t[n]) fe('Method "' + n + '" has an undefined value in the component definition. Did you reference the function correctly?', e);
                    if (r && w(r, n)) fe('Method "' + n + '" has already been defined as a prop.', e);
                    if (n in e && U(n)) fe('Method "' + n + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
                }
                e[n] = null == t[n] ? $ : E(t[n], e);
            }
        }
        function Br(e, t) {
            for (var r in t) {
                var n = t[r];
                if (Array.isArray(n)) for (var a = 0; a < n.length; a++) qr(e, r, n[a]); else qr(e, r, n);
            }
        }
        function qr(e, t, r, n) {
            if (f(r)) {
                n = r;
                r = r.handler;
            }
            if ("string" === typeof r) r = e[r];
            return e.$watch(t, r, n);
        }
        /*  */
        function Fr(e) {
            var t = e.$options.provide;
            if (t) e._provided = "function" === typeof t ? t.call(e) : t;
        }
        function Ur(e) {
            var t = Hr(e.$options.inject, e);
            if (t) {
                Me.shouldConvert = false;
                Object.keys(t).forEach(function(r) {
                    /* istanbul ignore else */
                    if (true) De(e, r, t[r], function() {
                        fe('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + r + '"', e);
                    }); else De(e, r, t[r]);
                });
                Me.shouldConvert = true;
            }
        }
        function Hr(e, t) {
            if (e) {
                // inject is :any because flow is not smart enough to figure out cached
                var r = Object.create(null);
                var n = le ? Reflect.ownKeys(e).filter(function(t) {
                    /* istanbul ignore next */
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }) : Object.keys(e);
                for (var a = 0; a < n.length; a++) {
                    var i = n[a];
                    var o = e[i].from;
                    var s = t;
                    while (s) {
                        if (s._provided && o in s._provided) {
                            r[i] = s._provided[o];
                            break;
                        }
                        s = s.$parent;
                    }
                    if (!s) if ("default" in e[i]) {
                        var u = e[i].default;
                        r[i] = "function" === typeof u ? u.call(t) : u;
                    } else if (true) fe('Injection "' + i + '" not found', t);
                }
                return r;
            }
        }
        /*  */
        /**
 * Runtime helper for rendering v-for lists.
 */
        function Vr(e, t) {
            var r, n, i, o, s;
            if (Array.isArray(e) || "string" === typeof e) {
                r = new Array(e.length);
                for (n = 0, i = e.length; n < i; n++) r[n] = t(e[n], n);
            } else if ("number" === typeof e) {
                r = new Array(e);
                for (n = 0; n < e; n++) r[n] = t(n + 1, n);
            } else if (u(e)) {
                o = Object.keys(e);
                r = new Array(o.length);
                for (n = 0, i = o.length; n < i; n++) {
                    s = o[n];
                    r[n] = t(e[s], s, n);
                }
            }
            if (a(r)) r._isVList = true;
            return r;
        }
        /*  */
        /**
 * Runtime helper for rendering <slot>
 */
        function Wr(e, t, r, n) {
            var a = this.$scopedSlots[e];
            var i;
            if (a) {
                // scoped slot
                r = r || {};
                if (n) {
                    if (!u(n)) fe("slot v-bind without argument expects an Object", this);
                    r = T(T({}, n), r);
                }
                i = a(r) || t;
            } else {
                var o = this.$slots[e];
                // warn duplicate slot usage
                if (o) {
                    if (o._rendered) fe('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this);
                    o._rendered = true;
                }
                i = o || t;
            }
            var s = r && r.slot;
            if (s) return this.$createElement("template", {
                slot: s
            }, i); else return i;
        }
        /*  */
        /**
 * Runtime helper for resolving filters
 */
        function Yr(e) {
            return et(this.$options, "filters", e, true) || R;
        }
        /*  */
        /**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
        function Zr(e, t, r, n) {
            var a = q.keyCodes[t] || r;
            if (a) if (Array.isArray(a)) return -1 === a.indexOf(e); else return a !== e; else if (n) return j(n) !== t;
        }
        /*  */
        /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
        function Xr(e, t, r, n, a) {
            if (r) if (!u(r)) fe("v-bind without argument expects an Object or Array value", this); else {
                if (Array.isArray(r)) r = P(r);
                var i;
                for (var o in r) !function(o) {
                    if ("class" === o || "style" === o || _(o)) i = e; else {
                        var s = e.attrs && e.attrs.type;
                        i = n || q.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                    }
                    if (!(o in i)) {
                        i[o] = r[o];
                        if (a) {
                            (e.on || (e.on = {}))["update:" + o] = function(e) {
                                r[o] = e;
                            };
                        }
                    }
                }(o);
            }
            return e;
        }
        /*  */
        /**
 * Runtime helper for rendering static trees.
 */
        function Qr(e, t) {
            // static trees can be rendered once and cached on the contructor options
            // so every instance shares the same cached trees
            var r = this.$options;
            var n = r.cached || (r.cached = []);
            var a = n[e];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree by doing a shallow clone.
            if (a && !t) return Array.isArray(a) ? Se(a) : Ee(a);
            // otherwise, render a fresh tree.
            a = n[e] = r.staticRenderFns[e].call(this._renderProxy, null, this);
            Kr(a, "__static__" + e, false);
            return a;
        }
        /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
        function Jr(e, t, r) {
            Kr(e, "__once__" + t + (r ? "_" + r : ""), true);
            return e;
        }
        function Kr(e, t, r) {
            if (Array.isArray(e)) {
                for (var n = 0; n < e.length; n++) if (e[n] && "string" !== typeof e[n]) Gr(e[n], t + "_" + n, r);
            } else Gr(e, t, r);
        }
        function Gr(e, t, r) {
            e.isStatic = true;
            e.key = t;
            e.isOnce = r;
        }
        /*  */
        function en(e, t) {
            if (t) if (!f(t)) fe("v-on without argument expects an Object value", this); else {
                var r = e.on = e.on ? T({}, e.on) : {};
                for (var n in t) {
                    var a = r[n];
                    var i = t[n];
                    r[n] = a ? [].concat(a, i) : i;
                }
            }
            return e;
        }
        /*  */
        function tn(e) {
            e._o = Jr;
            e._n = h;
            e._s = v;
            e._l = Vr;
            e._t = Wr;
            e._q = L;
            e._i = I;
            e._m = Qr;
            e._f = Yr;
            e._k = Zr;
            e._b = Xr;
            e._v = je;
            e._e = Ae;
            e._u = er;
            e._g = en;
        }
        /*  */
        function rn(e, t, r, n, a) {
            var o = a.options;
            this.data = e;
            this.props = t;
            this.children = r;
            this.parent = n;
            this.listeners = e.on || F;
            this.injections = Hr(o.inject, n);
            this.slots = function() {
                return Kt(r, n);
            };
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
            var s = Object.create(n);
            var u = i(o._compiled);
            var l = !u;
            // support for compiled functional template
            if (u) {
                // exposing $options for renderStatic()
                this.$options = o;
                // pre-resolve slots for renderSlot()
                this.$slots = this.slots();
                this.$scopedSlots = e.scopedSlots || F;
            }
            if (o._scopeId) this._c = function(e, t, r, a) {
                var i = hn(s, e, t, r, a, l);
                if (i) {
                    i.functionalScopeId = o._scopeId;
                    i.functionalContext = n;
                }
                return i;
            }; else this._c = function(e, t, r, n) {
                return hn(s, e, t, r, n, l);
            };
        }
        tn(rn.prototype);
        function nn(e, t, r, n, i) {
            var o = e.options;
            var s = {};
            var u = o.props;
            if (a(u)) for (var l in u) s[l] = tt(l, u, t || F); else {
                if (a(r.attrs)) an(s, r.attrs);
                if (a(r.props)) an(s, r.props);
            }
            var c = new rn(r, s, i, n, e);
            var f = o.render.call(null, c._c, c);
            if (f instanceof xe) {
                f.functionalContext = n;
                f.functionalOptions = o;
                if (r.slot) (f.data || (f.data = {})).slot = r.slot;
            }
            return f;
        }
        function an(e, t) {
            for (var r in t) e[x(r)] = t[r];
        }
        /*  */
        // hooks to be invoked on component VNodes during patch
        var on = {
            init: function(e, t, r, n) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    (e.componentInstance = ln(e, tr, r, n)).$mount(t ? e.elm : void 0, t);
                } else if (e.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var a = e;
                    // work around flow
                    on.prepatch(a, a);
                }
            },
            prepatch: function(e, t) {
                var r = t.componentOptions;
                ir(t.componentInstance = e.componentInstance, r.propsData, // updated props
                r.listeners, // updated listeners
                t, // new parent vnode
                r.children);
            },
            insert: function(e) {
                var t = e.context;
                var r = e.componentInstance;
                if (!r._isMounted) {
                    r._isMounted = true;
                    lr(r, "mounted");
                }
                if (e.data.keepAlive) if (t._isMounted) // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                wr(r); else sr(r, true);
            },
            destroy: function(e) {
                var t = e.componentInstance;
                if (!t._isDestroyed) if (!e.data.keepAlive) t.$destroy(); else ur(t, true);
            }
        };
        var sn = Object.keys(on);
        function un(e, t, r, o, s) {
            if (n(e)) return;
            var l = r.$options._base;
            // plain options object: turn it into a constructor
            if (u(e)) e = l.extend(e);
            // if at this stage it's not a constructor or an async component factory,
            // reject.
            if ("function" !== typeof e) {
                if (true) fe("Invalid Component definition: " + String(e), r);
                return;
            }
            // async component
            var c;
            if (n(e.cid)) {
                c = e;
                e = Ht(c, l, r);
                if (void 0 === e) // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return Ut(c, t, r, o, s);
            }
            t = t || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
            wn(e);
            // transform component v-model data into props & events
            if (a(t.model)) dn(e.options, t);
            // extract props
            var f = It(t, e, s);
            // functional component
            if (i(e.options.functional)) return nn(e, f, t, r, o);
            // extract listeners, since these needs to be treated as
            // child component listeners instead of DOM listeners
            var d = t.on;
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
            t.on = t.nativeOn;
            if (i(e.options.abstract)) {
                // abstract components do not keep anything
                // other than props & listeners & slot
                // work around flow
                var p = t.slot;
                t = {};
                if (p) t.slot = p;
            }
            // merge component management hooks onto the placeholder node
            cn(t);
            // return a placeholder vnode
            var v = e.options.name || s;
            return new xe("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, r, {
                Ctor: e,
                propsData: f,
                listeners: d,
                tag: s,
                children: o
            }, c);
        }
        function ln(e, // we know it's MountedComponentVNode but flow doesn't
        t, // activeInstance in lifecycle state
        r, n) {
            var i = e.componentOptions;
            var o = {
                _isComponent: true,
                parent: t,
                propsData: i.propsData,
                _componentTag: i.tag,
                _parentVnode: e,
                _parentListeners: i.listeners,
                _renderChildren: i.children,
                _parentElm: r || null,
                _refElm: n || null
            };
            // check inline-template render functions
            var s = e.data.inlineTemplate;
            if (a(s)) {
                o.render = s.render;
                o.staticRenderFns = s.staticRenderFns;
            }
            return new i.Ctor(o);
        }
        function cn(e) {
            if (!e.hook) e.hook = {};
            for (var t = 0; t < sn.length; t++) {
                var r = sn[t];
                var n = e.hook[r];
                var a = on[r];
                e.hook[r] = n ? fn(a, n) : a;
            }
        }
        function fn(e, t) {
            return function(r, n, a, i) {
                e(r, n, a, i);
                t(r, n, a, i);
            };
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
        function dn(e, t) {
            var r = e.model && e.model.prop || "value";
            var n = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[r] = t.model.value;
            var i = t.on || (t.on = {});
            if (a(i[n])) i[n] = [ t.model.callback ].concat(i[n]); else i[n] = t.model.callback;
        }
        /*  */
        var pn = 1;
        var vn = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
        function hn(e, t, r, n, a, o) {
            if (Array.isArray(r) || s(r)) {
                a = n;
                n = r;
                r = void 0;
            }
            if (i(o)) a = vn;
            return mn(e, t, r, n, a);
        }
        function mn(e, t, r, n, i) {
            if (a(r) && a(r.__ob__)) {
                fe("Avoid using observed data object as vnode data: " + JSON.stringify(r) + "\nAlways create fresh vnode data objects in each render!", e);
                return Ae();
            }
            // object syntax in v-bind
            if (a(r) && a(r.is)) t = r.is;
            if (!t) // in case of component :is set to falsy value
            return Ae();
            // warn against non-primitive key
            if (a(r) && a(r.key) && !s(r.key)) fe("Avoid using non-primitive value as key, use string/number value instead.", e);
            // support single function children as default scoped slot
            if (Array.isArray(n) && "function" === typeof n[0]) {
                r = r || {};
                r.scopedSlots = {
                    default: n[0]
                };
                n.length = 0;
            }
            if (i === vn) n = Nt(n); else if (i === pn) n = Dt(n);
            var o, u;
            if ("string" === typeof t) {
                var l;
                u = e.$vnode && e.$vnode.ns || q.getTagNamespace(t);
                if (q.isReservedTag(t)) // platform built-in elements
                o = new xe(q.parsePlatformTagName(t), r, n, void 0, void 0, e); else if (a(l = et(e.$options, "components", t))) // component
                o = un(l, r, e, n, t); else // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                o = new xe(t, r, n, void 0, void 0, e);
            } else // direct component options / constructor
            o = un(t, r, e, n);
            if (a(o)) {
                if (u) yn(o, u);
                return o;
            } else return Ae();
        }
        function yn(e, t, r) {
            e.ns = t;
            if ("foreignObject" === e.tag) {
                // use default namespace inside foreignObject
                t = void 0;
                r = true;
            }
            if (a(e.children)) for (var o = 0, s = e.children.length; o < s; o++) {
                var u = e.children[o];
                if (a(u.tag) && (n(u.ns) || i(r))) yn(u, t, r);
            }
        }
        /*  */
        function _n(e) {
            e._vnode = null;
            // the root of the child tree
            var t = e.$options;
            var r = e.$vnode = t._parentVnode;
            // the placeholder node in parent tree
            var n = r && r.context;
            e.$slots = Kt(t._renderChildren, n);
            e.$scopedSlots = F;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
            e._c = function(t, r, n, a) {
                return hn(e, t, r, n, a, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
            e.$createElement = function(t, r, n, a) {
                return hn(e, t, r, n, a, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
            var a = r && r.data;
            /* istanbul ignore else */
            if (true) {
                De(e, "$attrs", a && a.attrs || F, function() {
                    !rr && fe("$attrs is readonly.", e);
                }, true);
                De(e, "$listeners", t._parentListeners || F, function() {
                    !rr && fe("$listeners is readonly.", e);
                }, true);
            } else {
                De(e, "$attrs", a && a.attrs || F, null, true);
                De(e, "$listeners", t._parentListeners || F, null, true);
            }
        }
        /*  */
        var gn = 0;
        function bn(e, t) {
            var r = e.$options = Object.create(e.constructor.options);
            // doing this because it's faster than dynamic enumeration.
            r.parent = t.parent;
            r.propsData = t.propsData;
            r._parentVnode = t._parentVnode;
            r._parentListeners = t._parentListeners;
            r._renderChildren = t._renderChildren;
            r._componentTag = t._componentTag;
            r._parentElm = t._parentElm;
            r._refElm = t._refElm;
            if (t.render) {
                r.render = t.render;
                r.staticRenderFns = t.staticRenderFns;
            }
        }
        function wn(e) {
            var t = e.options;
            if (e.super) {
                var r = wn(e.super);
                if (r !== e.superOptions) {
                    // super option changed,
                    // need to resolve new options.
                    e.superOptions = r;
                    // check if there are any late-modified/attached options (#4976)
                    var n = kn(e);
                    // update base extend options
                    if (n) T(e.extendOptions, n);
                    t = e.options = Ge(r, e.extendOptions);
                    if (t.name) t.components[t.name] = e;
                }
            }
            return t;
        }
        function kn(e) {
            var t;
            var r = e.options;
            var n = e.extendOptions;
            var a = e.sealedOptions;
            for (var i in r) if (r[i] !== a[i]) {
                if (!t) t = {};
                t[i] = Cn(r[i], n[i], a[i]);
            }
            return t;
        }
        function Cn(e, t, r) {
            // compare latest and sealed to ensure lifecycle hooks won't be duplicated
            // between merges
            if (Array.isArray(e)) {
                var n = [];
                r = Array.isArray(r) ? r : [ r ];
                t = Array.isArray(t) ? t : [ t ];
                for (var a = 0; a < e.length; a++) // push original options and not sealed options to exclude duplicated options
                if (t.indexOf(e[a]) >= 0 || r.indexOf(e[a]) < 0) n.push(e[a]);
                return n;
            } else return e;
        }
        function xn(e) {
            if (!(this instanceof xn)) fe("Vue is a constructor and should be called with the `new` keyword");
            this._init(e);
        }
        !function(e) {
            e.prototype._init = function(e) {
                var t = this;
                // a uid
                t._uid = gn++;
                var r, n;
                /* istanbul ignore if */
                if (q.performance && St) {
                    r = "vue-perf-start:" + t._uid;
                    n = "vue-perf-end:" + t._uid;
                    St(r);
                }
                // a flag to avoid this being observed
                t._isVue = true;
                // merge options
                if (e && e._isComponent) // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                bn(t, e); else t.$options = Ge(wn(t.constructor), e || {}, t);
                /* istanbul ignore else */
                if (true) kt(t); else t._renderProxy = t;
                // expose real self
                t._self = t;
                nr(t);
                Yt(t);
                _n(t);
                lr(t, "beforeCreate");
                Ur(t);
                // resolve injections before data/props
                Pr(t);
                Fr(t);
                // resolve provide after data/props
                lr(t, "created");
                /* istanbul ignore if */
                if (q.performance && St) {
                    t._name = ve(t, false);
                    St(n);
                    Tt("vue " + t._name + " init", r, n);
                }
                if (t.$options.el) t.$mount(t.$options.el);
            };
        }(xn);
        !function(e) {
            // flow somehow has problems with directly declared definition object
            // when using Object.defineProperty, so we have to procedurally build up
            // the object here.
            var t = {};
            t.get = function() {
                return this._data;
            };
            var r = {};
            r.get = function() {
                return this._props;
            };
            if (true) {
                t.set = function(e) {
                    fe("Avoid replacing instance root $data. Use nested data properties instead.", this);
                };
                r.set = function() {
                    fe("$props is readonly.", this);
                };
            }
            Object.defineProperty(e.prototype, "$data", t);
            Object.defineProperty(e.prototype, "$props", r);
            e.prototype.$set = Ne;
            e.prototype.$delete = Be;
            e.prototype.$watch = function(e, t, r) {
                var n = this;
                if (f(t)) return qr(n, e, t, r);
                r = r || {};
                r.user = true;
                var a = new Or(n, e, t, r);
                if (r.immediate) t.call(n, a.value);
                return function() {
                    a.teardown();
                };
            };
        }(xn);
        !function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, r) {
                var n = this;
                var a = this;
                if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) n.$on(e[i], r); else {
                    (a._events[e] || (a._events[e] = [])).push(r);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                    if (t.test(e)) a._hasHookEvent = true;
                }
                return a;
            };
            e.prototype.$once = function(e, t) {
                var r = this;
                function n() {
                    r.$off(e, n);
                    t.apply(r, arguments);
                }
                n.fn = t;
                r.$on(e, n);
                return r;
            };
            e.prototype.$off = function(e, t) {
                var r = this;
                var n = this;
                // all
                if (!arguments.length) {
                    n._events = Object.create(null);
                    return n;
                }
                // array of events
                if (Array.isArray(e)) {
                    for (var a = 0, i = e.length; a < i; a++) r.$off(e[a], t);
                    return n;
                }
                // specific event
                var o = n._events[e];
                if (!o) return n;
                if (!t) {
                    n._events[e] = null;
                    return n;
                }
                if (t) {
                    // specific handler
                    var s;
                    var u = o.length;
                    while (u--) {
                        s = o[u];
                        if (s === t || s.fn === t) {
                            o.splice(u, 1);
                            break;
                        }
                    }
                }
                return n;
            };
            e.prototype.$emit = function(e) {
                var t = this;
                if (true) {
                    var r = e.toLowerCase();
                    if (r !== e && t._events[r]) de('Event "' + r + '" is emitted in component ' + ve(t) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + j(e) + '" instead of "' + e + '".');
                }
                var n = t._events[e];
                if (n) {
                    n = n.length > 1 ? S(n) : n;
                    var a = S(arguments, 1);
                    for (var i = 0, o = n.length; i < o; i++) try {
                        n[i].apply(t, a);
                    } catch (r) {
                        ut(r, t, 'event handler for "' + e + '"');
                    }
                }
                return t;
            };
        }(xn);
        !function(e) {
            e.prototype._update = function(e, t) {
                var r = this;
                if (r._isMounted) lr(r, "beforeUpdate");
                var n = r.$el;
                var a = r._vnode;
                var i = tr;
                tr = r;
                r._vnode = e;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                if (!a) {
                    // initial render
                    r.$el = r.__patch__(r.$el, e, t, false, r.$options._parentElm, r.$options._refElm);
                    // no need for the ref nodes after initial patch
                    // this prevents keeping a detached DOM tree in memory (#5851)
                    r.$options._parentElm = r.$options._refElm = null;
                } else // updates
                r.$el = r.__patch__(a, e);
                tr = i;
                // update __vue__ reference
                if (n) n.__vue__ = null;
                if (r.$el) r.$el.__vue__ = r;
                // if parent is an HOC, update its $el as well
                if (r.$vnode && r.$parent && r.$vnode === r.$parent._vnode) r.$parent.$el = r.$el;
            };
            e.prototype.$forceUpdate = function() {
                var e = this;
                if (e._watcher) e._watcher.update();
            };
            e.prototype.$destroy = function() {
                var e = this;
                if (e._isBeingDestroyed) return;
                lr(e, "beforeDestroy");
                e._isBeingDestroyed = true;
                // remove self from parent
                var t = e.$parent;
                if (t && !t._isBeingDestroyed && !e.$options.abstract) g(t.$children, e);
                // teardown watchers
                if (e._watcher) e._watcher.teardown();
                var r = e._watchers.length;
                while (r--) e._watchers[r].teardown();
                // remove reference from data ob
                // frozen object may not have observer.
                if (e._data.__ob__) e._data.__ob__.vmCount--;
                // call the last hook...
                e._isDestroyed = true;
                // invoke destroy hooks on current rendered tree
                e.__patch__(e._vnode, null);
                // fire destroyed hook
                lr(e, "destroyed");
                // turn off all instance listeners.
                e.$off();
                // remove __vue__ reference
                if (e.$el) e.$el.__vue__ = null;
                // release circular reference (#6759)
                if (e.$vnode) e.$vnode.parent = null;
            };
        }(xn);
        !function(e) {
            // install runtime convenience helpers
            tn(e.prototype);
            e.prototype.$nextTick = function(e) {
                return wt(e, this);
            };
            e.prototype._render = function() {
                var e = this;
                var t = e.$options;
                var r = t.render;
                var n = t._parentVnode;
                if (e._isMounted) // if the parent didn't update, the slot nodes will be the ones from
                // last render. They need to be cloned to ensure "freshness" for this render.
                for (var a in e.$slots) {
                    var i = e.$slots[a];
                    if (i._rendered) e.$slots[a] = Se(i, true);
                }
                e.$scopedSlots = n && n.data.scopedSlots || F;
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                e.$vnode = n;
                // render self
                var o;
                try {
                    o = r.call(e._renderProxy, e.$createElement);
                } catch (t) {
                    ut(t, e, "render");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */
                    if (true) if (e.$options.renderError) try {
                        o = e.$options.renderError.call(e._renderProxy, e.$createElement, t);
                    } catch (t) {
                        ut(t, e, "renderError");
                        o = e._vnode;
                    } else o = e._vnode; else o = e._vnode;
                }
                // return empty vnode in case the render function errored out
                if (!(o instanceof xe)) {
                    if (Array.isArray(o)) fe("Multiple root nodes returned from render function. Render function should return a single root node.", e);
                    o = Ae();
                }
                // set parent
                o.parent = n;
                return o;
            };
        }(xn);
        /*  */
        function On(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                // additional parameters
                var r = S(arguments, 1);
                r.unshift(this);
                if ("function" === typeof e.install) e.install.apply(e, r); else if ("function" === typeof e) e.apply(null, r);
                t.push(e);
                return this;
            };
        }
        /*  */
        function An(e) {
            e.mixin = function(e) {
                this.options = Ge(this.options, e);
                return this;
            };
        }
        /*  */
        function jn(e) {
            /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
            e.cid = 0;
            var t = 1;
            /**
   * Class inheritance
   */
            e.extend = function(e) {
                e = e || {};
                var r = this;
                var n = r.cid;
                var a = e._Ctor || (e._Ctor = {});
                if (a[n]) return a[n];
                var i = e.name || r.options.name;
                if (true) if (!/^[a-zA-Z][\w-]*$/.test(i)) fe('Invalid component name: "' + i + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
                var o = function(e) {
                    this._init(e);
                };
                o.prototype = Object.create(r.prototype);
                o.prototype.constructor = o;
                o.cid = t++;
                o.options = Ge(r.options, e);
                o["super"] = r;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                if (o.options.props) En(o);
                if (o.options.computed) Sn(o);
                // allow further extension/mixin/plugin usage
                o.extend = r.extend;
                o.mixin = r.mixin;
                o.use = r.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                N.forEach(function(e) {
                    o[e] = r[e];
                });
                // enable recursive self-lookup
                if (i) o.options.components[i] = o;
                // keep a reference to the super options at extension time.
                // later at instantiation we can check if Super's options have
                // been updated.
                o.superOptions = r.options;
                o.extendOptions = e;
                o.sealedOptions = T({}, o.options);
                // cache constructor
                a[n] = o;
                return o;
            };
        }
        function En(e) {
            var t = e.options.props;
            for (var r in t) Tr(e.prototype, "_props", r);
        }
        function Sn(e) {
            var t = e.options.computed;
            for (var r in t) zr(e.prototype, r, t[r]);
        }
        /*  */
        function Tn(e) {
            /**
   * Create asset registration methods.
   */
            N.forEach(function(t) {
                e[t] = function(e, r) {
                    if (!r) return this.options[t + "s"][e]; else {
                        /* istanbul ignore if */
                        if (true) if ("component" === t && q.isReservedTag(e)) fe("Do not use built-in or reserved HTML elements as component id: " + e);
                        if ("component" === t && f(r)) {
                            r.name = r.name || e;
                            r = this.options._base.extend(r);
                        }
                        if ("directive" === t && "function" === typeof r) r = {
                            bind: r,
                            update: r
                        };
                        this.options[t + "s"][e] = r;
                        return r;
                    }
                };
            });
        }
        /*  */
        function Pn(e) {
            return e && (e.Ctor.options.name || e.tag);
        }
        function $n(e, t) {
            if (Array.isArray(e)) return e.indexOf(t) > -1; else if ("string" === typeof e) return e.split(",").indexOf(t) > -1; else if (d(e)) return e.test(t);
            /* istanbul ignore next */
            return false;
        }
        function Mn(e, t) {
            var r = e.cache;
            var n = e.keys;
            var a = e._vnode;
            for (var i in r) {
                var o = r[i];
                if (o) {
                    var s = Pn(o.componentOptions);
                    if (s && !t(s)) Rn(r, i, n, a);
                }
            }
        }
        function Rn(e, t, r, n) {
            var a = e[t];
            if (a && a !== n) a.componentInstance.$destroy();
            e[t] = null;
            g(r, t);
        }
        var Ln = [ String, RegExp, Array ];
        var In = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: Ln,
                exclude: Ln,
                max: [ String, Number ]
            },
            created: function() {
                this.cache = Object.create(null);
                this.keys = [];
            },
            destroyed: function() {
                var e = this;
                for (var t in e.cache) Rn(e.cache, t, e.keys);
            },
            watch: {
                include: function(e) {
                    Mn(this, function(t) {
                        return $n(e, t);
                    });
                },
                exclude: function(e) {
                    Mn(this, function(t) {
                        return !$n(e, t);
                    });
                }
            },
            render: function() {
                var e = Wt(this.$slots.default);
                var t = e && e.componentOptions;
                if (t) {
                    // check pattern
                    var r = Pn(t);
                    if (r && (this.exclude && $n(this.exclude, r) || this.include && !$n(this.include, r))) return e;
                    var n = this;
                    var a = n.cache;
                    var i = n.keys;
                    var o = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    if (a[o]) {
                        e.componentInstance = a[o].componentInstance;
                        // make current key freshest
                        g(i, o);
                        i.push(o);
                    } else {
                        a[o] = e;
                        i.push(o);
                        // prune oldest entry
                        if (this.max && i.length > parseInt(this.max)) Rn(a, i[0], i, this._vnode);
                    }
                    e.data.keepAlive = true;
                }
                return e;
            }
        };
        var zn = {
            KeepAlive: In
        };
        !/*  */
        function(e) {
            // config
            var t = {};
            t.get = function() {
                return q;
            };
            if (true) t.set = function() {
                fe("Do not replace the Vue.config object, set individual fields instead.");
            };
            Object.defineProperty(e, "config", t);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
            e.util = {
                warn: fe,
                extend: T,
                mergeOptions: Ge,
                defineReactive: De
            };
            e.set = Ne;
            e.delete = Be;
            e.nextTick = wt;
            e.options = Object.create(null);
            N.forEach(function(t) {
                e.options[t + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
            e.options._base = e;
            T(e.options.components, zn);
            On(e);
            An(e);
            jn(e);
            Tn(e);
        }(xn);
        Object.defineProperty(xn.prototype, "$isServer", {
            get: oe
        });
        Object.defineProperty(xn.prototype, "$ssrContext", {
            get: function() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        xn.version = "2.5.3";
        /*  */
        // these are reserved for web because they are directly compiled away
        // during template compilation
        var Dn = m("style,class");
        // attributes that should be using props for binding
        var Nn = m("input,textarea,option,select,progress");
        var Bn = function(e, t, r) {
            return "value" === r && Nn(e) && "button" !== t || "selected" === r && "option" === e || "checked" === r && "input" === e || "muted" === r && "video" === e;
        };
        var qn = m("contenteditable,draggable,spellcheck");
        var Fn = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible");
        var Un = "http://www.w3.org/1999/xlink";
        var Hn = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
        };
        var Vn = function(e) {
            return Hn(e) ? e.slice(6, e.length) : "";
        };
        var Wn = function(e) {
            return null == e || false === e;
        };
        /*  */
        function Yn(e) {
            var t = e.data;
            var r = e;
            var n = e;
            while (a(n.componentInstance)) {
                n = n.componentInstance._vnode;
                if (n.data) t = Zn(n.data, t);
            }
            while (a(r = r.parent)) if (r.data) t = Zn(t, r.data);
            return Xn(t.staticClass, t.class);
        }
        function Zn(e, t) {
            return {
                staticClass: Qn(e.staticClass, t.staticClass),
                class: a(e.class) ? [ e.class, t.class ] : t.class
            };
        }
        function Xn(e, t) {
            if (a(e) || a(t)) return Qn(e, Jn(t));
            /* istanbul ignore next */
            return "";
        }
        function Qn(e, t) {
            return e ? t ? e + " " + t : e : t || "";
        }
        function Jn(e) {
            if (Array.isArray(e)) return Kn(e);
            if (u(e)) return Gn(e);
            if ("string" === typeof e) return e;
            /* istanbul ignore next */
            return "";
        }
        function Kn(e) {
            var t = "";
            var r;
            for (var n = 0, i = e.length; n < i; n++) if (a(r = Jn(e[n])) && "" !== r) {
                if (t) t += " ";
                t += r;
            }
            return t;
        }
        function Gn(e) {
            var t = "";
            for (var r in e) if (e[r]) {
                if (t) t += " ";
                t += r;
            }
            return t;
        }
        /*  */
        var ea = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        var ta = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.
        var ra = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var na = function(e) {
            return ta(e) || ra(e);
        };
        function aa(e) {
            if (ra(e)) return "svg";
            // basic support for MathML
            // note it doesn't support other MathML elements being component roots
            if ("math" === e) return "math";
        }
        var ia = Object.create(null);
        function oa(e) {
            /* istanbul ignore if */
            if (!Z) return true;
            if (na(e)) return false;
            e = e.toLowerCase();
            /* istanbul ignore if */
            if (null != ia[e]) return ia[e];
            var t = document.createElement(e);
            if (e.indexOf("-") > -1) // http://stackoverflow.com/a/28210364/1070244
            return ia[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement; else return ia[e] = /HTMLUnknownElement/.test(t.toString());
        }
        var sa = m("text,number,password,search,email,tel,url");
        /*  */
        /**
 * Query an element selector if it's not an element already.
 */
        function ua(e) {
            if ("string" === typeof e) {
                var t = document.querySelector(e);
                if (!t) {
                    fe("Cannot find element: " + e);
                    return document.createElement("div");
                }
                return t;
            } else return e;
        }
        /*  */
        function la(e, t) {
            var r = document.createElement(e);
            if ("select" !== e) return r;
            // false or null will remove the attribute but undefined will not
            if (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple) r.setAttribute("multiple", "multiple");
            return r;
        }
        function ca(e, t) {
            return document.createElementNS(ea[e], t);
        }
        function fa(e) {
            return document.createTextNode(e);
        }
        function da(e) {
            return document.createComment(e);
        }
        function pa(e, t, r) {
            e.insertBefore(t, r);
        }
        function va(e, t) {
            e.removeChild(t);
        }
        function ha(e, t) {
            e.appendChild(t);
        }
        function ma(e) {
            return e.parentNode;
        }
        function ya(e) {
            return e.nextSibling;
        }
        function _a(e) {
            return e.tagName;
        }
        function ga(e, t) {
            e.textContent = t;
        }
        function ba(e, t, r) {
            e.setAttribute(t, r);
        }
        var wa = Object.freeze({
            createElement: la,
            createElementNS: ca,
            createTextNode: fa,
            createComment: da,
            insertBefore: pa,
            removeChild: va,
            appendChild: ha,
            parentNode: ma,
            nextSibling: ya,
            tagName: _a,
            setTextContent: ga,
            setAttribute: ba
        });
        /*  */
        var ka = {
            create: function(e, t) {
                Ca(t);
            },
            update: function(e, t) {
                if (e.data.ref !== t.data.ref) {
                    Ca(e, true);
                    Ca(t);
                }
            },
            destroy: function(e) {
                Ca(e, true);
            }
        };
        function Ca(e, t) {
            var r = e.data.ref;
            if (!r) return;
            var n = e.context;
            var a = e.componentInstance || e.elm;
            var i = n.$refs;
            if (t) {
                if (Array.isArray(i[r])) g(i[r], a); else if (i[r] === a) i[r] = void 0;
            } else if (e.data.refInFor) {
                if (!Array.isArray(i[r])) i[r] = [ a ]; else if (i[r].indexOf(a) < 0) // $flow-disable-line
                i[r].push(a);
            } else i[r] = a;
        }
        /**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
        var xa = new xe("", {}, []);
        var Oa = [ "create", "activate", "update", "remove", "destroy" ];
        function Aa(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && ja(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && n(t.asyncFactory.error));
        }
        function ja(e, t) {
            if ("input" !== e.tag) return true;
            var r;
            var n = a(r = e.data) && a(r = r.attrs) && r.type;
            var i = a(r = t.data) && a(r = r.attrs) && r.type;
            return n === i || sa(n) && sa(i);
        }
        function Ea(e, t, r) {
            var n, i;
            var o = {};
            for (n = t; n <= r; ++n) {
                i = e[n].key;
                if (a(i)) o[i] = n;
            }
            return o;
        }
        /*  */
        var Sa = {
            create: Ta,
            update: Ta,
            destroy: function(e) {
                Ta(e, xa);
            }
        };
        function Ta(e, t) {
            if (e.data.directives || t.data.directives) Pa(e, t);
        }
        function Pa(e, t) {
            var r = e === xa;
            var n = t === xa;
            var a = Ma(e.data.directives, e.context);
            var i = Ma(t.data.directives, t.context);
            var o = [];
            var s = [];
            var u, l, c;
            for (u in i) {
                l = a[u];
                c = i[u];
                if (!l) {
                    // new directive, bind
                    La(c, "bind", t, e);
                    if (c.def && c.def.inserted) o.push(c);
                } else {
                    // existing directive, update
                    c.oldValue = l.value;
                    La(c, "update", t, e);
                    if (c.def && c.def.componentUpdated) s.push(c);
                }
            }
            if (o.length) {
                var f = function() {
                    for (var r = 0; r < o.length; r++) La(o[r], "inserted", t, e);
                };
                if (r) Lt(t, "insert", f); else f();
            }
            if (s.length) Lt(t, "postpatch", function() {
                for (var r = 0; r < s.length; r++) La(s[r], "componentUpdated", t, e);
            });
            if (!r) for (u in a) if (!i[u]) // no longer present, unbind
            La(a[u], "unbind", e, e, n);
        }
        var $a = Object.create(null);
        function Ma(e, t) {
            var r = Object.create(null);
            if (!e) return r;
            var n, a;
            for (n = 0; n < e.length; n++) {
                a = e[n];
                if (!a.modifiers) a.modifiers = $a;
                r[Ra(a)] = a;
                a.def = et(t.$options, "directives", a.name, true);
            }
            return r;
        }
        function Ra(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
        }
        function La(e, t, r, n, a) {
            var i = e.def && e.def[t];
            if (i) try {
                i(r.elm, e, r, n, a);
            } catch (n) {
                ut(n, r.context, "directive " + e.name + " " + t + " hook");
            }
        }
        var Ia = [ ka, Sa ];
        /*  */
        function za(e, t) {
            var r = t.componentOptions;
            if (a(r) && false === r.Ctor.options.inheritAttrs) return;
            if (n(e.data.attrs) && n(t.data.attrs)) return;
            var i, o, s;
            var u = t.elm;
            var l = e.data.attrs || {};
            var c = t.data.attrs || {};
            // clone observed objects, as the user probably wants to mutate it
            if (a(c.__ob__)) c = t.data.attrs = T({}, c);
            for (i in c) {
                o = c[i];
                s = l[i];
                if (s !== o) Da(u, i, o);
            }
            // #4391: in IE9, setting type can reset value for input[type=radio]
            // #6666: IE/Edge forces progress value down to 1 before setting a max
            /* istanbul ignore if */
            if ((J || K) && c.value !== l.value) Da(u, "value", c.value);
            for (i in l) if (n(c[i])) if (Hn(i)) u.removeAttributeNS(Un, Vn(i)); else if (!qn(i)) u.removeAttribute(i);
        }
        function Da(e, t, r) {
            if (Fn(t)) // set attribute for blank value
            // e.g. <option disabled>Select one</option>
            if (Wn(r)) e.removeAttribute(t); else {
                // technically allowfullscreen is a boolean attribute for <iframe>,
                // but Flash expects a value of "true" when used on <embed> tag
                r = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t;
                e.setAttribute(t, r);
            } else if (qn(t)) e.setAttribute(t, Wn(r) || "false" === r ? "false" : "true"); else if (Hn(t)) if (Wn(r)) e.removeAttributeNS(Un, Vn(t)); else e.setAttributeNS(Un, t, r); else if (Wn(r)) e.removeAttribute(t); else e.setAttribute(t, r);
        }
        var Na = {
            create: za,
            update: za
        };
        /*  */
        function Ba(e, t) {
            var r = t.elm;
            var i = t.data;
            var o = e.data;
            if (n(i.staticClass) && n(i.class) && (n(o) || n(o.staticClass) && n(o.class))) return;
            var s = Yn(t);
            // handle transition classes
            var u = r._transitionClasses;
            if (a(u)) s = Qn(s, Jn(u));
            // set the class
            if (s !== r._prevClass) {
                r.setAttribute("class", s);
                r._prevClass = s;
            }
        }
        var qa = {
            create: Ba,
            update: Ba
        };
        /*  */
        /*  */
        // note: this only removes the attr from the Array (attrsList) so that it
        // doesn't get processed by processAttrs.
        // By default it does NOT remove it from the map (attrsMap) because the map is
        // needed during codegen.
        /*  */
        /**
 * Cross-platform code generation for component v-model
 */
        /**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
        /*  */
        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.
        var Fa = "__r";
        var Ua = "__c";
        /*  */
        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.
        function Ha(e) {
            /* istanbul ignore if */
            if (a(e[Fa])) {
                // IE input[type=range] only supports `change` event
                var t = Q ? "change" : "input";
                e[t] = [].concat(e[Fa], e[t] || []);
                delete e[Fa];
            }
            // This was originally intended to fix #4521 but no longer necessary
            // after 2.5. Keeping it for backwards compat with generated code from < 2.4
            /* istanbul ignore if */
            if (a(e[Ua])) {
                e.change = [].concat(e[Ua], e.change || []);
                delete e[Ua];
            }
        }
        var Va;
        function Wa(e, t, r) {
            var n = Va;
            // save current target element in closure
            return function a() {
                if (null !== e.apply(null, arguments)) Za(t, a, r, n);
            };
        }
        function Ya(e, t, r, n, a) {
            t = bt(t);
            if (r) t = Wa(t, e, n);
            Va.addEventListener(e, t, ne ? {
                capture: n,
                passive: a
            } : n);
        }
        function Za(e, t, r, n) {
            (n || Va).removeEventListener(e, t._withTask || t, r);
        }
        function Xa(e, t) {
            if (n(e.data.on) && n(t.data.on)) return;
            var r = t.data.on || {};
            var a = e.data.on || {};
            Va = t.elm;
            Ha(r);
            Rt(r, a, Ya, Za, t.context);
            Va = void 0;
        }
        var Qa = {
            create: Xa,
            update: Xa
        };
        /*  */
        function Ja(e, t) {
            if (n(e.data.domProps) && n(t.data.domProps)) return;
            var r, i;
            var o = t.elm;
            var s = e.data.domProps || {};
            var u = t.data.domProps || {};
            // clone observed objects, as the user probably wants to mutate it
            if (a(u.__ob__)) u = t.data.domProps = T({}, u);
            for (r in s) if (n(u[r])) o[r] = "";
            for (r in u) {
                i = u[r];
                // ignore children if the node has textContent or innerHTML,
                // as these will throw away existing DOM nodes and cause removal errors
                // on subsequent patches (#3360)
                if ("textContent" === r || "innerHTML" === r) {
                    if (t.children) t.children.length = 0;
                    if (i === s[r]) continue;
                    // #6601 work around Chrome version <= 55 bug where single textNode
                    // replaced by innerHTML/textContent retains its parentNode property
                    if (1 === o.childNodes.length) o.removeChild(o.childNodes[0]);
                }
                if ("value" === r) {
                    // store value as _value as well since
                    // non-string values will be stringified
                    o._value = i;
                    // avoid resetting cursor position when value is the same
                    var l = n(i) ? "" : String(i);
                    if (Ka(o, l)) o.value = l;
                } else o[r] = i;
            }
        }
        // check platforms/web/util/attrs.js acceptValue
        function Ka(e, t) {
            return !e.composing && ("OPTION" === e.tagName || Ga(e, t) || ei(e, t));
        }
        function Ga(e, t) {
            // return true when textbox (.number and .trim) loses focus and its value is
            // not equal to the updated value
            var r = true;
            // #6157
            // work around IE bug when accessing document.activeElement in an iframe
            try {
                r = document.activeElement !== e;
            } catch (e) {}
            return r && e.value !== t;
        }
        function ei(e, t) {
            var r = e.value;
            var n = e._vModifiers;
            // injected by v-model runtime
            if (a(n) && n.number) return h(r) !== h(t);
            if (a(n) && n.trim) return r.trim() !== t.trim();
            return r !== t;
        }
        var ti = {
            create: Ja,
            update: Ja
        };
        /*  */
        var ri = k(function(e) {
            var t = {};
            var r = /;(?![^(]*\))/g;
            var n = /:(.+)/;
            e.split(r).forEach(function(e) {
                if (e) {
                    var r = e.split(n);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim());
                }
            });
            return t;
        });
        // merge static and dynamic style data on the same vnode
        function ni(e) {
            var t = ai(e.style);
            // static style is pre-processed into an object during compilation
            // and is always a fresh object, so it's safe to merge into it
            return e.staticStyle ? T(e.staticStyle, t) : t;
        }
        // normalize possible array / string values into Object
        function ai(e) {
            if (Array.isArray(e)) return P(e);
            if ("string" === typeof e) return ri(e);
            return e;
        }
        /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
        function ii(e, t) {
            var r = {};
            var n;
            if (t) {
                var a = e;
                while (a.componentInstance) {
                    a = a.componentInstance._vnode;
                    if (a.data && (n = ni(a.data))) T(r, n);
                }
            }
            if (n = ni(e.data)) T(r, n);
            var i = e;
            while (i = i.parent) if (i.data && (n = ni(i.data))) T(r, n);
            return r;
        }
        /*  */
        var oi = /^--/;
        var si = /\s*!important$/;
        var ui = function(e, t, r) {
            /* istanbul ignore if */
            if (oi.test(t)) e.style.setProperty(t, r); else if (si.test(r)) e.style.setProperty(t, r.replace(si, ""), "important"); else {
                var n = fi(t);
                if (Array.isArray(r)) // Support values array created by autoprefixer, e.g.
                // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                // Set them one by one, and the browser will only set those it can recognize
                for (var a = 0, i = r.length; a < i; a++) e.style[n] = r[a]; else e.style[n] = r;
            }
        };
        var li = [ "Webkit", "Moz", "ms" ];
        var ci;
        var fi = k(function(e) {
            ci = ci || document.createElement("div").style;
            e = x(e);
            if ("filter" !== e && e in ci) return e;
            var t = e.charAt(0).toUpperCase() + e.slice(1);
            for (var r = 0; r < li.length; r++) {
                var n = li[r] + t;
                if (n in ci) return n;
            }
        });
        function di(e, t) {
            var r = t.data;
            var i = e.data;
            if (n(r.staticStyle) && n(r.style) && n(i.staticStyle) && n(i.style)) return;
            var o, s;
            var u = t.elm;
            var l = i.staticStyle;
            var c = i.normalizedStyle || i.style || {};
            // if static style exists, stylebinding already merged into it when doing normalizeStyleData
            var f = l || c;
            var d = ai(t.data.style) || {};
            // store normalized style under a different key for next diff
            // make sure to clone it if it's reactive, since the user likely wants
            // to mutate it.
            t.data.normalizedStyle = a(d.__ob__) ? T({}, d) : d;
            var p = ii(t, true);
            for (s in f) if (n(p[s])) ui(u, s, "");
            for (s in p) {
                o = p[s];
                if (o !== f[s]) // ie9 setting to null has no effect, must use empty string
                ui(u, s, null == o ? "" : o);
            }
        }
        var pi = {
            create: di,
            update: di
        };
        /*  */
        /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function vi(e, t) {
            /* istanbul ignore if */
            if (!t || !(t = t.trim())) return;
            /* istanbul ignore else */
            if (e.classList) if (t.indexOf(" ") > -1) t.split(/\s+/).forEach(function(t) {
                return e.classList.add(t);
            }); else e.classList.add(t); else {
                var r = " " + (e.getAttribute("class") || "") + " ";
                if (r.indexOf(" " + t + " ") < 0) e.setAttribute("class", (r + t).trim());
            }
        }
        /**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function hi(e, t) {
            /* istanbul ignore if */
            if (!t || !(t = t.trim())) return;
            /* istanbul ignore else */
            if (e.classList) {
                if (t.indexOf(" ") > -1) t.split(/\s+/).forEach(function(t) {
                    return e.classList.remove(t);
                }); else e.classList.remove(t);
                if (!e.classList.length) e.removeAttribute("class");
            } else {
                var r = " " + (e.getAttribute("class") || "") + " ";
                var n = " " + t + " ";
                while (r.indexOf(n) >= 0) r = r.replace(n, " ");
                r = r.trim();
                if (r) e.setAttribute("class", r); else e.removeAttribute("class");
            }
        }
        /*  */
        function mi(e) {
            if (!e) return;
            /* istanbul ignore else */
            if ("object" === typeof e) {
                var t = {};
                if (false !== e.css) T(t, yi(e.name || "v"));
                T(t, e);
                return t;
            } else if ("string" === typeof e) return yi(e);
        }
        var yi = k(function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            };
        });
        var _i = Z && !J;
        var gi = "transition";
        var bi = "animation";
        // Transition property/event sniffing
        var wi = "transition";
        var ki = "transitionend";
        var Ci = "animation";
        var xi = "animationend";
        if (_i) {
            /* istanbul ignore if */
            if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend) {
                wi = "WebkitTransition";
                ki = "webkitTransitionEnd";
            }
            if (void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend) {
                Ci = "WebkitAnimation";
                xi = "webkitAnimationEnd";
            }
        }
        // binding to window is necessary to make hot reload work in IE in strict mode
        var Oi = Z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */ function(e) {
            return e();
        };
        function Ai(e) {
            Oi(function() {
                Oi(e);
            });
        }
        function ji(e, t) {
            var r = e._transitionClasses || (e._transitionClasses = []);
            if (r.indexOf(t) < 0) {
                r.push(t);
                vi(e, t);
            }
        }
        function Ei(e, t) {
            if (e._transitionClasses) g(e._transitionClasses, t);
            hi(e, t);
        }
        function Si(e, t, r) {
            var n = Pi(e, t);
            var a = n.type;
            var i = n.timeout;
            var o = n.propCount;
            if (!a) return r();
            var s = a === gi ? ki : xi;
            var u = 0;
            var l = function() {
                e.removeEventListener(s, c);
                r();
            };
            var c = function(t) {
                if (t.target === e) if (++u >= o) l();
            };
            setTimeout(function() {
                if (u < o) l();
            }, i + 1);
            e.addEventListener(s, c);
        }
        var Ti = /\b(transform|all)(,|$)/;
        function Pi(e, t) {
            var r = window.getComputedStyle(e);
            var n = r[wi + "Delay"].split(", ");
            var a = r[wi + "Duration"].split(", ");
            var i = $i(n, a);
            var o = r[Ci + "Delay"].split(", ");
            var s = r[Ci + "Duration"].split(", ");
            var u = $i(o, s);
            var l;
            var c = 0;
            var f = 0;
            /* istanbul ignore if */
            if (t === gi) {
                if (i > 0) {
                    l = gi;
                    c = i;
                    f = a.length;
                }
            } else if (t === bi) {
                if (u > 0) {
                    l = bi;
                    c = u;
                    f = s.length;
                }
            } else {
                c = Math.max(i, u);
                l = c > 0 ? i > u ? gi : bi : null;
                f = l ? l === gi ? a.length : s.length : 0;
            }
            return {
                type: l,
                timeout: c,
                propCount: f,
                hasTransform: l === gi && Ti.test(r[wi + "Property"])
            };
        }
        function $i(e, t) {
            /* istanbul ignore next */
            while (e.length < t.length) e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, r) {
                return Mi(t) + Mi(e[r]);
            }));
        }
        function Mi(e) {
            return 1e3 * Number(e.slice(0, -1));
        }
        /*  */
        function Ri(e, t) {
            var r = e.elm;
            // call leave callback now
            if (a(r._leaveCb)) {
                r._leaveCb.cancelled = true;
                r._leaveCb();
            }
            var i = mi(e.data.transition);
            if (n(i)) return;
            /* istanbul ignore if */
            if (a(r._enterCb) || 1 !== r.nodeType) return;
            var o = i.css;
            var s = i.type;
            var l = i.enterClass;
            var c = i.enterToClass;
            var f = i.enterActiveClass;
            var d = i.appearClass;
            var p = i.appearToClass;
            var v = i.appearActiveClass;
            var m = i.beforeEnter;
            var y = i.enter;
            var _ = i.afterEnter;
            var g = i.enterCancelled;
            var b = i.beforeAppear;
            var w = i.appear;
            var k = i.afterAppear;
            var C = i.appearCancelled;
            var x = i.duration;
            // activeInstance will always be the <transition> component managing this
            // transition. One edge case to check is when the <transition> is placed
            // as the root node of a child component. In that case we need to check
            // <transition>'s parent for appear check.
            var O = tr;
            var A = tr.$vnode;
            while (A && A.parent) {
                A = A.parent;
                O = A.context;
            }
            var j = !O._isMounted || !e.isRootInsert;
            if (j && !w && "" !== w) return;
            var E = j && d ? d : l;
            var S = j && v ? v : f;
            var T = j && p ? p : c;
            var P = j ? b || m : m;
            var $ = j ? "function" === typeof w ? w : y : y;
            var M = j ? k || _ : _;
            var R = j ? C || g : g;
            var L = h(u(x) ? x.enter : x);
            if (null != L) Ii(L, "enter", e);
            var I = false !== o && !J;
            var D = Di($);
            var N = r._enterCb = z(function() {
                if (I) {
                    Ei(r, T);
                    Ei(r, S);
                }
                if (N.cancelled) {
                    if (I) Ei(r, E);
                    R && R(r);
                } else M && M(r);
                r._enterCb = null;
            });
            if (!e.data.show) // remove pending leave element on enter by injecting an insert hook
            Lt(e, "insert", function() {
                var t = r.parentNode;
                var n = t && t._pending && t._pending[e.key];
                if (n && n.tag === e.tag && n.elm._leaveCb) n.elm._leaveCb();
                $ && $(r, N);
            });
            // start enter transition
            P && P(r);
            if (I) {
                ji(r, E);
                ji(r, S);
                Ai(function() {
                    ji(r, T);
                    Ei(r, E);
                    if (!N.cancelled && !D) if (zi(L)) setTimeout(N, L); else Si(r, s, N);
                });
            }
            if (e.data.show) {
                t && t();
                $ && $(r, N);
            }
            if (!I && !D) N();
        }
        function Li(e, t) {
            var r = e.elm;
            // call enter callback now
            if (a(r._enterCb)) {
                r._enterCb.cancelled = true;
                r._enterCb();
            }
            var i = mi(e.data.transition);
            if (n(i)) return t();
            /* istanbul ignore if */
            if (a(r._leaveCb) || 1 !== r.nodeType) return;
            var o = i.css;
            var s = i.type;
            var l = i.leaveClass;
            var c = i.leaveToClass;
            var f = i.leaveActiveClass;
            var d = i.beforeLeave;
            var p = i.leave;
            var v = i.afterLeave;
            var m = i.leaveCancelled;
            var y = i.delayLeave;
            var _ = i.duration;
            var g = false !== o && !J;
            var b = Di(p);
            var w = h(u(_) ? _.leave : _);
            if (a(w)) Ii(w, "leave", e);
            var k = r._leaveCb = z(function() {
                if (r.parentNode && r.parentNode._pending) r.parentNode._pending[e.key] = null;
                if (g) {
                    Ei(r, c);
                    Ei(r, f);
                }
                if (k.cancelled) {
                    if (g) Ei(r, l);
                    m && m(r);
                } else {
                    t();
                    v && v(r);
                }
                r._leaveCb = null;
            });
            if (y) y(C); else C();
            function C() {
                // the delayed leave may have already been cancelled
                if (k.cancelled) return;
                // record leaving element
                if (!e.data.show) (r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e;
                d && d(r);
                if (g) {
                    ji(r, l);
                    ji(r, f);
                    Ai(function() {
                        ji(r, c);
                        Ei(r, l);
                        if (!k.cancelled && !b) if (zi(w)) setTimeout(k, w); else Si(r, s, k);
                    });
                }
                p && p(r, k);
                if (!g && !b) k();
            }
        }
        // only used in dev mode
        function Ii(e, t, r) {
            if ("number" !== typeof e) fe("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", r.context); else if (isNaN(e)) fe("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", r.context);
        }
        function zi(e) {
            return "number" === typeof e && !isNaN(e);
        }
        /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
        function Di(e) {
            if (n(e)) return false;
            var t = e.fns;
            if (a(t)) // invoker
            return Di(Array.isArray(t) ? t[0] : t); else return (e._length || e.length) > 1;
        }
        function Ni(e, t) {
            if (true !== t.data.show) Ri(t);
        }
        var Bi = Z ? {
            create: Ni,
            activate: Ni,
            remove: function(e, t) {
                /* istanbul ignore else */
                if (true !== e.data.show) Li(e, t); else t();
            }
        } : {};
        var qi = [ Na, qa, Qa, ti, pi, Bi ];
        /*  */
        // the directive module should be applied last, after all
        // built-in modules have been applied.
        var Fi = qi.concat(Ia);
        var Ui = function(e) {
            var t, r;
            var o = {};
            var u = e.modules;
            var l = e.nodeOps;
            for (t = 0; t < Oa.length; ++t) {
                o[Oa[t]] = [];
                for (r = 0; r < u.length; ++r) if (a(u[r][Oa[t]])) o[Oa[t]].push(u[r][Oa[t]]);
            }
            function c(e) {
                return new xe(l.tagName(e).toLowerCase(), {}, [], void 0, e);
            }
            function f(e, t) {
                function r() {
                    if (0 === --r.listeners) p(e);
                }
                r.listeners = t;
                return r;
            }
            function p(e) {
                var t = l.parentNode(e);
                // element may have already been removed due to v-html / v-text
                if (a(t)) l.removeChild(t, e);
            }
            var v = 0;
            function h(e, t, r, n, o) {
                e.isRootInsert = !o;
                // for transition enter check
                if (y(e, t, r, n)) return;
                var s = e.data;
                var u = e.children;
                var c = e.tag;
                if (a(c)) {
                    if (true) {
                        if (s && s.pre) v++;
                        if (!v && !e.ns && !(q.ignoredElements.length && q.ignoredElements.some(function(e) {
                            return d(e) ? e.test(c) : e === c;
                        })) && q.isUnknownElement(c)) fe("Unknown custom element: <" + c + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context);
                    }
                    e.elm = e.ns ? l.createElementNS(e.ns, c) : l.createElement(c, e);
                    x(e);
                    w(e, u, t);
                    if (a(s)) C(e, t);
                    b(r, e.elm, n);
                    if (s && s.pre) v--;
                } else if (i(e.isComment)) {
                    e.elm = l.createComment(e.text);
                    b(r, e.elm, n);
                } else {
                    e.elm = l.createTextNode(e.text);
                    b(r, e.elm, n);
                }
            }
            function y(e, t, r, n) {
                var o = e.data;
                if (a(o)) {
                    var s = a(e.componentInstance) && o.keepAlive;
                    if (a(o = o.hook) && a(o = o.init)) o(e, false, r, n);
                    // after calling the init hook, if the vnode is a child component
                    // it should've created a child instance and mounted it. the child
                    // component also has set the placeholder vnode's elm.
                    // in that case we can just return the element and be done.
                    if (a(e.componentInstance)) {
                        _(e, t);
                        if (i(s)) g(e, t, r, n);
                        return true;
                    }
                }
            }
            function _(e, t) {
                if (a(e.data.pendingInsert)) {
                    t.push.apply(t, e.data.pendingInsert);
                    e.data.pendingInsert = null;
                }
                e.elm = e.componentInstance.$el;
                if (k(e)) {
                    C(e, t);
                    x(e);
                } else {
                    // empty component root.
                    // skip all element-related modules except for ref (#3455)
                    Ca(e);
                    // make sure to invoke the insert hook
                    t.push(e);
                }
            }
            function g(e, t, r, n) {
                var i;
                // hack for #4339: a reactivated component with inner transition
                // does not trigger because the inner node's created hooks are not called
                // again. It's not ideal to involve module-specific logic in here but
                // there doesn't seem to be a better way to do it.
                var s = e;
                while (s.componentInstance) {
                    s = s.componentInstance._vnode;
                    if (a(i = s.data) && a(i = i.transition)) {
                        for (i = 0; i < o.activate.length; ++i) o.activate[i](xa, s);
                        t.push(s);
                        break;
                    }
                }
                // unlike a newly created component,
                // a reactivated keep-alive component doesn't insert itself
                b(r, e.elm, n);
            }
            function b(e, t, r) {
                if (a(e)) if (a(r)) {
                    if (r.parentNode === e) l.insertBefore(e, t, r);
                } else l.appendChild(e, t);
            }
            function w(e, t, r) {
                if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) h(t[n], r, e.elm, null, true); else if (s(e.text)) l.appendChild(e.elm, l.createTextNode(e.text));
            }
            function k(e) {
                while (e.componentInstance) e = e.componentInstance._vnode;
                return a(e.tag);
            }
            function C(e, r) {
                for (var n = 0; n < o.create.length; ++n) o.create[n](xa, e);
                t = e.data.hook;
                // Reuse variable
                if (a(t)) {
                    if (a(t.create)) t.create(xa, e);
                    if (a(t.insert)) r.push(e);
                }
            }
            // set scope id attribute for scoped CSS.
            // this is implemented as a special case to avoid the overhead
            // of going through the normal attribute patching process.
            function x(e) {
                var t;
                if (a(t = e.functionalScopeId)) l.setAttribute(e.elm, t, ""); else {
                    var r = e;
                    while (r) {
                        if (a(t = r.context) && a(t = t.$options._scopeId)) l.setAttribute(e.elm, t, "");
                        r = r.parent;
                    }
                }
                // for slot content they should also get the scopeId from the host instance.
                if (a(t = tr) && t !== e.context && t !== e.functionalContext && a(t = t.$options._scopeId)) l.setAttribute(e.elm, t, "");
            }
            function O(e, t, r, n, a, i) {
                for (;n <= a; ++n) h(r[n], i, e, t);
            }
            function A(e) {
                var t, r;
                var n = e.data;
                if (a(n)) {
                    if (a(t = n.hook) && a(t = t.destroy)) t(e);
                    for (t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
                }
                if (a(t = e.children)) for (r = 0; r < e.children.length; ++r) A(e.children[r]);
            }
            function j(e, t, r, n) {
                for (;r <= n; ++r) {
                    var i = t[r];
                    if (a(i)) if (a(i.tag)) {
                        E(i);
                        A(i);
                    } else // Text node
                    p(i.elm);
                }
            }
            function E(e, t) {
                if (a(t) || a(e.data)) {
                    var r;
                    var n = o.remove.length + 1;
                    if (a(t)) // we have a recursively passed down rm callback
                    // increase the listeners count
                    t.listeners += n; else // directly removing
                    t = f(e.elm, n);
                    // recursively invoke hooks on child component root node
                    if (a(r = e.componentInstance) && a(r = r._vnode) && a(r.data)) E(r, t);
                    for (r = 0; r < o.remove.length; ++r) o.remove[r](e, t);
                    if (a(r = e.data.hook) && a(r = r.remove)) r(e, t); else t();
                } else p(e.elm);
            }
            function S(e, t, r, i, o) {
                var s = 0;
                var u = 0;
                var c = t.length - 1;
                var f = t[0];
                var d = t[c];
                var p = r.length - 1;
                var v = r[0];
                var m = r[p];
                var y, _, g, b;
                // removeOnly is a special flag used only by <transition-group>
                // to ensure removed elements stay in correct relative positions
                // during leaving transitions
                var w = !o;
                while (s <= c && u <= p) if (n(f)) f = t[++s]; else if (n(d)) d = t[--c]; else if (Aa(f, v)) {
                    P(f, v, i);
                    f = t[++s];
                    v = r[++u];
                } else if (Aa(d, m)) {
                    P(d, m, i);
                    d = t[--c];
                    m = r[--p];
                } else if (Aa(f, m)) {
                    // Vnode moved right
                    P(f, m, i);
                    w && l.insertBefore(e, f.elm, l.nextSibling(d.elm));
                    f = t[++s];
                    m = r[--p];
                } else if (Aa(d, v)) {
                    // Vnode moved left
                    P(d, v, i);
                    w && l.insertBefore(e, d.elm, f.elm);
                    d = t[--c];
                    v = r[++u];
                } else {
                    if (n(y)) y = Ea(t, s, c);
                    _ = a(v.key) ? y[v.key] : T(v, t, s, c);
                    if (n(_)) // New element
                    h(v, i, e, f.elm); else {
                        g = t[_];
                        /* istanbul ignore if */
                        if (!g) fe("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key.");
                        if (Aa(g, v)) {
                            P(g, v, i);
                            t[_] = void 0;
                            w && l.insertBefore(e, g.elm, f.elm);
                        } else // same key but different element. treat as new element
                        h(v, i, e, f.elm);
                    }
                    v = r[++u];
                }
                if (s > c) {
                    b = n(r[p + 1]) ? null : r[p + 1].elm;
                    O(e, b, r, u, p, i);
                } else if (u > p) j(e, t, s, c);
            }
            function T(e, t, r, n) {
                for (var i = r; i < n; i++) {
                    var o = t[i];
                    if (a(o) && Aa(e, o)) return i;
                }
            }
            function P(e, t, r, s) {
                if (e === t) return;
                var u = t.elm = e.elm;
                if (i(e.isAsyncPlaceholder)) {
                    if (a(t.asyncFactory.resolved)) L(e.elm, t, r); else t.isAsyncPlaceholder = true;
                    return;
                }
                // reuse element for static trees.
                // note we only do this if the vnode is cloned -
                // if the new node is not cloned it means the render functions have been
                // reset by the hot-reload-api and we need to do a proper re-render.
                if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) {
                    t.componentInstance = e.componentInstance;
                    return;
                }
                var c;
                var f = t.data;
                if (a(f) && a(c = f.hook) && a(c = c.prepatch)) c(e, t);
                var d = e.children;
                var p = t.children;
                if (a(f) && k(t)) {
                    for (c = 0; c < o.update.length; ++c) o.update[c](e, t);
                    if (a(c = f.hook) && a(c = c.update)) c(e, t);
                }
                if (n(t.text)) {
                    if (a(d) && a(p)) {
                        if (d !== p) S(u, d, p, r, s);
                    } else if (a(p)) {
                        if (a(e.text)) l.setTextContent(u, "");
                        O(u, null, p, 0, p.length - 1, r);
                    } else if (a(d)) j(u, d, 0, d.length - 1); else if (a(e.text)) l.setTextContent(u, "");
                } else if (e.text !== t.text) l.setTextContent(u, t.text);
                if (a(f)) if (a(c = f.hook) && a(c = c.postpatch)) c(e, t);
            }
            function $(e, t, r) {
                // delay insert hooks for component root nodes, invoke them after the
                // element is really inserted
                if (i(r) && a(e.parent)) e.parent.data.pendingInsert = t; else for (var n = 0; n < t.length; ++n) t[n].data.hook.insert(t[n]);
            }
            var M = false;
            // list of modules that can skip create hook during hydration because they
            // are already rendered on the client or has no need for initialization
            var R = m("attrs,style,class,staticClass,staticStyle,key");
            // Note: this is a browser-only function so we can assume elms are DOM nodes.
            function L(e, r, n) {
                if (i(r.isComment) && a(r.asyncFactory)) {
                    r.elm = e;
                    r.isAsyncPlaceholder = true;
                    return true;
                }
                if (true) if (!I(e, r)) return false;
                r.elm = e;
                var o = r.tag;
                var s = r.data;
                var u = r.children;
                if (a(s)) {
                    if (a(t = s.hook) && a(t = t.init)) t(r, true);
                    if (a(t = r.componentInstance)) {
                        // child component. it should have hydrated its own tree.
                        _(r, n);
                        return true;
                    }
                }
                if (a(o)) {
                    if (a(u)) // empty element, allow client to pick up and populate children
                    if (!e.hasChildNodes()) w(r, u, n); else // v-html and domProps: innerHTML
                    if (a(t = s) && a(t = t.domProps) && a(t = t.innerHTML)) {
                        if (t !== e.innerHTML) {
                            /* istanbul ignore if */
                            if ("undefined" !== typeof console && !M) {
                                M = true;
                                console.warn("Parent: ", e);
                                console.warn("server innerHTML: ", t);
                                console.warn("client innerHTML: ", e.innerHTML);
                            }
                            return false;
                        }
                    } else {
                        // iterate and compare children lists
                        var l = true;
                        var c = e.firstChild;
                        for (var f = 0; f < u.length; f++) {
                            if (!c || !L(c, u[f], n)) {
                                l = false;
                                break;
                            }
                            c = c.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!l || c) {
                            /* istanbul ignore if */
                            if ("undefined" !== typeof console && !M) {
                                M = true;
                                console.warn("Parent: ", e);
                                console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, u);
                            }
                            return false;
                        }
                    }
                    if (a(s)) for (var d in s) if (!R(d)) {
                        C(r, n);
                        break;
                    }
                } else if (e.data !== r.text) e.data = r.text;
                return true;
            }
            function I(e, t) {
                if (a(t.tag)) return 0 === t.tag.indexOf("vue-component") || t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()); else return e.nodeType === (t.isComment ? 8 : 3);
            }
            return function(e, t, r, s, u, f) {
                if (n(t)) {
                    if (a(e)) A(e);
                    return;
                }
                var d = false;
                var p = [];
                if (n(e)) {
                    // empty mount (likely as component), create new root element
                    d = true;
                    h(t, p, u, f);
                } else {
                    var v = a(e.nodeType);
                    if (!v && Aa(e, t)) // patch existing root node
                    P(e, t, p, s); else {
                        if (v) {
                            // mounting to a real element
                            // check if this is server-rendered content and if we can perform
                            // a successful hydration.
                            if (1 === e.nodeType && e.hasAttribute(D)) {
                                e.removeAttribute(D);
                                r = true;
                            }
                            if (i(r)) if (L(e, t, p)) {
                                $(t, p, true);
                                return e;
                            } else if (true) fe("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                            // either not server-rendered, or hydration failed.
                            // create an empty node and replace it
                            e = c(e);
                        }
                        // replacing existing element
                        var m = e.elm;
                        var y = l.parentNode(m);
                        // create new node
                        h(t, p, // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        m._leaveCb ? null : y, l.nextSibling(m));
                        // update parent placeholder node element, recursively
                        if (a(t.parent)) {
                            var _ = t.parent;
                            var g = k(t);
                            while (_) {
                                for (var b = 0; b < o.destroy.length; ++b) o.destroy[b](_);
                                _.elm = t.elm;
                                if (g) {
                                    for (var w = 0; w < o.create.length; ++w) o.create[w](xa, _);
                                    // #6513
                                    // invoke insert hooks that may have been merged by create hooks.
                                    // e.g. for directives that uses the "inserted" hook.
                                    var C = _.data.hook.insert;
                                    if (C.merged) // start at index 1 to avoid re-invoking component mounted hook
                                    for (var x = 1; x < C.fns.length; x++) C.fns[x]();
                                } else Ca(_);
                                _ = _.parent;
                            }
                        }
                        // destroy old node
                        if (a(y)) j(y, [ e ], 0, 0); else if (a(e.tag)) A(e);
                    }
                }
                $(t, p, d);
                return t.elm;
            };
        }({
            nodeOps: wa,
            modules: Fi
        });
        /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
        /* istanbul ignore if */
        if (J) // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            if (e && e.vmodel) Ji(e, "input");
        });
        var Hi = {
            inserted: function(e, t, r, n) {
                if ("select" === r.tag) {
                    // #6903
                    if (n.elm && !n.elm._vOptions) Lt(r, "postpatch", function() {
                        Hi.componentUpdated(e, t, r);
                    }); else Vi(e, t, r.context);
                    e._vOptions = [].map.call(e.options, Zi);
                } else if ("textarea" === r.tag || sa(e.type)) {
                    e._vModifiers = t.modifiers;
                    if (!t.modifiers.lazy) {
                        // Safari < 10.2 & UIWebView doesn't fire compositionend when
                        // switching focus before confirming composition choice
                        // this also fixes the issue where some browsers e.g. iOS Chrome
                        // fires "change" instead of "input" on autocomplete.
                        e.addEventListener("change", Qi);
                        if (!G) {
                            e.addEventListener("compositionstart", Xi);
                            e.addEventListener("compositionend", Qi);
                        }
                        /* istanbul ignore if */
                        if (J) e.vmodel = true;
                    }
                }
            },
            componentUpdated: function(e, t, r) {
                if ("select" === r.tag) {
                    Vi(e, t, r.context);
                    // in case the options rendered by v-for have changed,
                    // it's possible that the value is out-of-sync with the rendered options.
                    // detect such cases and filter out values that no longer has a matching
                    // option in the DOM.
                    var n = e._vOptions;
                    var a = e._vOptions = [].map.call(e.options, Zi);
                    if (a.some(function(e, t) {
                        return !L(e, n[t]);
                    })) {
                        if (e.multiple ? t.value.some(function(e) {
                            return Yi(e, a);
                        }) : t.value !== t.oldValue && Yi(t.value, a)) Ji(e, "change");
                    }
                }
            }
        };
        function Vi(e, t, r) {
            Wi(e, t, r);
            /* istanbul ignore if */
            if (Q || K) setTimeout(function() {
                Wi(e, t, r);
            }, 0);
        }
        function Wi(e, t, r) {
            var n = t.value;
            var a = e.multiple;
            if (a && !Array.isArray(n)) {
                fe('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(n).slice(8, -1), r);
                return;
            }
            var i, o;
            for (var s = 0, u = e.options.length; s < u; s++) {
                o = e.options[s];
                if (a) {
                    i = I(n, Zi(o)) > -1;
                    if (o.selected !== i) o.selected = i;
                } else if (L(Zi(o), n)) {
                    if (e.selectedIndex !== s) e.selectedIndex = s;
                    return;
                }
            }
            if (!a) e.selectedIndex = -1;
        }
        function Yi(e, t) {
            return t.every(function(t) {
                return !L(t, e);
            });
        }
        function Zi(e) {
            return "_value" in e ? e._value : e.value;
        }
        function Xi(e) {
            e.target.composing = true;
        }
        function Qi(e) {
            // prevent triggering an input event for no reason
            if (!e.target.composing) return;
            e.target.composing = false;
            Ji(e.target, "input");
        }
        function Ji(e, t) {
            var r = document.createEvent("HTMLEvents");
            r.initEvent(t, true, true);
            e.dispatchEvent(r);
        }
        /*  */
        // recursively search for possible transition defined inside the component root
        function Ki(e) {
            return e.componentInstance && (!e.data || !e.data.transition) ? Ki(e.componentInstance._vnode) : e;
        }
        var Gi = {
            bind: function(e, t, r) {
                var n = t.value;
                r = Ki(r);
                var a = r.data && r.data.transition;
                var i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                if (n && a) {
                    r.data.show = true;
                    Ri(r, function() {
                        e.style.display = i;
                    });
                } else e.style.display = n ? i : "none";
            },
            update: function(e, t, r) {
                var n = t.value;
                /* istanbul ignore if */
                if (n === t.oldValue) return;
                r = Ki(r);
                if (r.data && r.data.transition) {
                    r.data.show = true;
                    if (n) Ri(r, function() {
                        e.style.display = e.__vOriginalDisplay;
                    }); else Li(r, function() {
                        e.style.display = "none";
                    });
                } else e.style.display = n ? e.__vOriginalDisplay : "none";
            },
            unbind: function(e, t, r, n, a) {
                if (!a) e.style.display = e.__vOriginalDisplay;
            }
        };
        var eo = {
            model: Hi,
            show: Gi
        };
        /*  */
        // Provides transition support for a single element/component.
        // supports transition mode (out-in / in-out)
        var to = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [ Number, String, Object ]
        };
        // in case the child is also an abstract component, e.g. <keep-alive>
        // we want to recursively retrieve the real component to be rendered
        function ro(e) {
            var t = e && e.componentOptions;
            if (t && t.Ctor.options.abstract) return ro(Wt(t.children)); else return e;
        }
        function no(e) {
            var t = {};
            var r = e.$options;
            // props
            for (var n in r.propsData) t[n] = e[n];
            // events.
            // extract listeners and pass them directly to the transition methods
            var a = r._parentListeners;
            for (var i in a) t[x(i)] = a[i];
            return t;
        }
        function ao(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
                props: t.componentOptions.propsData
            });
        }
        function io(e) {
            while (e = e.parent) if (e.data.transition) return true;
        }
        function oo(e, t) {
            return t.key === e.key && t.tag === e.tag;
        }
        var so = {
            name: "transition",
            props: to,
            abstract: true,
            render: function(e) {
                var t = this;
                var r = this.$options._renderChildren;
                if (!r) return;
                // filter out text nodes (possible whitespaces)
                r = r.filter(function(e) {
                    return e.tag || Vt(e);
                });
                /* istanbul ignore if */
                if (!r.length) return;
                // warn multiple elements
                if (r.length > 1) fe("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                var n = this.mode;
                // warn invalid mode
                if (n && "in-out" !== n && "out-in" !== n) fe("invalid <transition> mode: " + n, this.$parent);
                var a = r[0];
                // if this is a component root node and the component's
                // parent container node also has transition, skip.
                if (io(this.$vnode)) return a;
                // apply transition data to child
                // use getRealChild() to ignore abstract components e.g. keep-alive
                var i = ro(a);
                /* istanbul ignore if */
                if (!i) return a;
                if (this._leaving) return ao(e, a);
                // ensure a key that is unique to the vnode type and to this transition
                // component instance. This key will be used to remove pending leaving nodes
                // during entering.
                var o = "__transition-" + this._uid + "-";
                i.key = null == i.key ? i.isComment ? o + "comment" : o + i.tag : s(i.key) ? 0 === String(i.key).indexOf(o) ? i.key : o + i.key : i.key;
                var u = (i.data || (i.data = {})).transition = no(this);
                var l = this._vnode;
                var c = ro(l);
                // mark v-show
                // so that the transition module can hand over the control to the directive
                if (i.data.directives && i.data.directives.some(function(e) {
                    return "show" === e.name;
                })) i.data.show = true;
                if (c && c.data && !oo(i, c) && !Vt(c)) {
                    // replace old child transition data with fresh one
                    // important for dynamic transitions!
                    var f = c.data.transition = T({}, u);
                    // handle transition mode
                    if ("out-in" === n) {
                        // return placeholder node and queue update when leave finishes
                        this._leaving = true;
                        Lt(f, "afterLeave", function() {
                            t._leaving = false;
                            t.$forceUpdate();
                        });
                        return ao(e, a);
                    } else if ("in-out" === n) {
                        if (Vt(i)) return l;
                        var d;
                        var p = function() {
                            d();
                        };
                        Lt(u, "afterEnter", p);
                        Lt(u, "enterCancelled", p);
                        Lt(f, "delayLeave", function(e) {
                            d = e;
                        });
                    }
                }
                return a;
            }
        };
        /*  */
        // Provides transition support for list items.
        // supports move transitions using the FLIP technique.
        // Because the vdom's children update algorithm is "unstable" - i.e.
        // it doesn't guarantee the relative positioning of removed elements,
        // we force transition-group to update its children into two passes:
        // in the first pass, we remove all nodes that need to be removed,
        // triggering their leaving transition; in the second pass, we insert/move
        // into the final desired state. This way in the second pass removed
        // nodes will remain where they should be.
        var uo = T({
            tag: String,
            moveClass: String
        }, to);
        delete uo.mode;
        var lo = {
            props: uo,
            render: function(e) {
                var t = this.tag || this.$vnode.data.tag || "span";
                var r = Object.create(null);
                var n = this.prevChildren = this.children;
                var a = this.$slots.default || [];
                var i = this.children = [];
                var o = no(this);
                for (var s = 0; s < a.length; s++) {
                    var u = a[s];
                    if (u.tag) if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) {
                        i.push(u);
                        r[u.key] = u;
                        (u.data || (u.data = {})).transition = o;
                    } else if (true) {
                        var l = u.componentOptions;
                        var c = l ? l.Ctor.options.name || l.tag || "" : u.tag;
                        fe("<transition-group> children must be keyed: <" + c + ">");
                    }
                }
                if (n) {
                    var f = [];
                    var d = [];
                    for (var p = 0; p < n.length; p++) {
                        var v = n[p];
                        v.data.transition = o;
                        v.data.pos = v.elm.getBoundingClientRect();
                        if (r[v.key]) f.push(v); else d.push(v);
                    }
                    this.kept = e(t, null, f);
                    this.removed = d;
                }
                return e(t, null, i);
            },
            beforeUpdate: function() {
                // force removing pass
                this.__patch__(this._vnode, this.kept, false, // hydrating
                true);
                this._vnode = this.kept;
            },
            updated: function() {
                var e = this.prevChildren;
                var t = this.moveClass || (this.name || "v") + "-move";
                if (!e.length || !this.hasMove(e[0].elm, t)) return;
                // we divide the work into three loops to avoid mixing DOM reads and writes
                // in each iteration - which helps prevent layout thrashing.
                e.forEach(co);
                e.forEach(fo);
                e.forEach(po);
                // force reflow to put everything in position
                // assign to this to avoid being removed in tree-shaking
                // $flow-disable-line
                this._reflow = document.body.offsetHeight;
                e.forEach(function(e) {
                    if (e.data.moved) {
                        var r = e.elm;
                        var n = r.style;
                        ji(r, t);
                        n.transform = n.WebkitTransform = n.transitionDuration = "";
                        r.addEventListener(ki, r._moveCb = function e(n) {
                            if (!n || /transform$/.test(n.propertyName)) {
                                r.removeEventListener(ki, e);
                                r._moveCb = null;
                                Ei(r, t);
                            }
                        });
                    }
                });
            },
            methods: {
                hasMove: function(e, t) {
                    /* istanbul ignore if */
                    if (!_i) return false;
                    /* istanbul ignore if */
                    if (this._hasMove) return this._hasMove;
                    // Detect whether an element with the move class applied has
                    // CSS transitions. Since the element may be inside an entering
                    // transition at this very moment, we make a clone of it and remove
                    // all other transition classes applied to ensure only the move class
                    // is applied.
                    var r = e.cloneNode();
                    if (e._transitionClasses) e._transitionClasses.forEach(function(e) {
                        hi(r, e);
                    });
                    vi(r, t);
                    r.style.display = "none";
                    this.$el.appendChild(r);
                    var n = Pi(r);
                    this.$el.removeChild(r);
                    return this._hasMove = n.hasTransform;
                }
            }
        };
        function co(e) {
            /* istanbul ignore if */
            if (e.elm._moveCb) e.elm._moveCb();
            /* istanbul ignore if */
            if (e.elm._enterCb) e.elm._enterCb();
        }
        function fo(e) {
            e.data.newPos = e.elm.getBoundingClientRect();
        }
        function po(e) {
            var t = e.data.pos;
            var r = e.data.newPos;
            var n = t.left - r.left;
            var a = t.top - r.top;
            if (n || a) {
                e.data.moved = true;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + n + "px," + a + "px)";
                i.transitionDuration = "0s";
            }
        }
        var vo = {
            Transition: so,
            TransitionGroup: lo
        };
        /*  */
        // install platform specific utils
        xn.config.mustUseProp = Bn;
        xn.config.isReservedTag = na;
        xn.config.isReservedAttr = Dn;
        xn.config.getTagNamespace = aa;
        xn.config.isUnknownElement = oa;
        // install platform runtime directives & components
        T(xn.options.directives, eo);
        T(xn.options.components, vo);
        // install platform patch function
        xn.prototype.__patch__ = Z ? Ui : $;
        // public mount method
        xn.prototype.$mount = function(e, t) {
            e = e && Z ? ua(e) : void 0;
            return ar(this, e, t);
        };
        // devtools global hook
        /* istanbul ignore next */
        xn.nextTick(function() {
            if (q.devtools) if (se) se.emit("init", xn); else if (te) console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
            if (false !== q.productionTip && Z && "undefined" !== typeof console) console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
        }, 0);
        /*  */
        /* harmony default export */
        t["default"] = xn;
    }).call(t, r(9), r(53).setImmediate);
}, /* 53 */
/***/
function(e, t, r) {
    var n = Function.prototype.apply;
    // DOM APIs, for completeness
    t.setTimeout = function() {
        return new a(n.call(setTimeout, window, arguments), clearTimeout);
    };
    t.setInterval = function() {
        return new a(n.call(setInterval, window, arguments), clearInterval);
    };
    t.clearTimeout = t.clearInterval = function(e) {
        if (e) e.close();
    };
    function a(e, t) {
        this._id = e;
        this._clearFn = t;
    }
    a.prototype.unref = a.prototype.ref = function() {};
    a.prototype.close = function() {
        this._clearFn.call(window, this._id);
    };
    // Does not start the time, just sets up the members needed.
    t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId);
        e._idleTimeout = t;
    };
    t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId);
        e._idleTimeout = -1;
    };
    t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        if (t >= 0) e._idleTimeoutId = setTimeout(function() {
            if (e._onTimeout) e._onTimeout();
        }, t);
    };
    // setimmediate attaches itself to the global object
    r(54);
    t.setImmediate = setImmediate;
    t.clearImmediate = clearImmediate;
}, /* 54 */
/***/
function(e, t, r) {
    /* WEBPACK VAR INJECTION */
    (function(e, t) {
        !function(e, r) {
            "use strict";
            if (e.setImmediate) return;
            var n = 1;
            // Spec says greater than zero
            var a = {};
            var i = false;
            var o = e.document;
            var s;
            function u(e) {
                // Callback can either be a function or a string
                if ("function" !== typeof e) e = new Function("" + e);
                // Copy function arguments
                var t = new Array(arguments.length - 1);
                for (var r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                // Store and register the task
                var i = {
                    callback: e,
                    args: t
                };
                a[n] = i;
                s(n);
                return n++;
            }
            function l(e) {
                delete a[e];
            }
            function c(e) {
                var t = e.callback;
                var n = e.args;
                switch (n.length) {
                  case 0:
                    t();
                    break;

                  case 1:
                    t(n[0]);
                    break;

                  case 2:
                    t(n[0], n[1]);
                    break;

                  case 3:
                    t(n[0], n[1], n[2]);
                    break;

                  default:
                    t.apply(r, n);
                }
            }
            function f(e) {
                // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                // So if we're currently running a task, we'll need to delay this invocation.
                if (i) // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(f, 0, e); else {
                    var t = a[e];
                    if (t) {
                        i = true;
                        try {
                            c(t);
                        } finally {
                            l(e);
                            i = false;
                        }
                    }
                }
            }
            // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
            var d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            d = d && d.setTimeout ? d : e;
            // Don't get fooled by e.g. browserify environments.
            if ("[object process]" === {}.toString.call(e.process)) // For Node.js before 0.9
            !function() {
                s = function(e) {
                    t.nextTick(function() {
                        f(e);
                    });
                };
            }(); else if (function() {
                // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                // where `global.postMessage` means something completely different and can't be used for this purpose.
                if (e.postMessage && !e.importScripts) {
                    var t = true;
                    var r = e.onmessage;
                    e.onmessage = function() {
                        t = false;
                    };
                    e.postMessage("", "*");
                    e.onmessage = r;
                    return t;
                }
            }()) // For non-IE10 modern browsers
            !function() {
                // Installs an event handler on `global` for the `message` event: see
                // * https://developer.mozilla.org/en/DOM/window.postMessage
                // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
                var t = "setImmediate$" + Math.random() + "$";
                var r = function(r) {
                    if (r.source === e && "string" === typeof r.data && 0 === r.data.indexOf(t)) f(+r.data.slice(t.length));
                };
                if (e.addEventListener) e.addEventListener("message", r, false); else e.attachEvent("onmessage", r);
                s = function(r) {
                    e.postMessage(t + r, "*");
                };
            }(); else if (e.MessageChannel) // For web workers, where supported
            !function() {
                var e = new MessageChannel();
                e.port1.onmessage = function(e) {
                    f(e.data);
                };
                s = function(t) {
                    e.port2.postMessage(t);
                };
            }(); else if (o && "onreadystatechange" in o.createElement("script")) // For IE 6–8
            !function() {
                var e = o.documentElement;
                s = function(t) {
                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                    var r = o.createElement("script");
                    r.onreadystatechange = function() {
                        f(t);
                        r.onreadystatechange = null;
                        e.removeChild(r);
                        r = null;
                    };
                    e.appendChild(r);
                };
            }(); else // For older browsers
            !function() {
                s = function(e) {
                    setTimeout(f, 0, e);
                };
            }();
            d.setImmediate = u;
            d.clearImmediate = l;
        }("undefined" === typeof self ? "undefined" === typeof e ? this : e : self);
    }).call(t, r(9), r(10));
}, /* 55 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
    /*  */
    function n(e, t) {
        if (!e) throw new Error("[vue-router] " + t);
    }
    function a(e, t) {
        if (!e) "undefined" !== typeof console && console.warn("[vue-router] " + t);
    }
    function i(e) {
        return Object.prototype.toString.call(e).indexOf("Error") > -1;
    }
    var o = {
        name: "router-view",
        functional: true,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function(e, t) {
            var r = t.props;
            var n = t.children;
            var a = t.parent;
            var i = t.data;
            i.routerView = true;
            // directly use parent context's createElement() function
            // so that components rendered by router-view can resolve named slots
            var o = a.$createElement;
            var l = r.name;
            var c = a.$route;
            var f = a._routerViewCache || (a._routerViewCache = {});
            // determine current view depth, also check to see if the tree
            // has been toggled inactive but kept-alive.
            var d = 0;
            var p = false;
            while (a && a._routerRoot !== a) {
                if (a.$vnode && a.$vnode.data.routerView) d++;
                if (a._inactive) p = true;
                a = a.$parent;
            }
            i.routerViewDepth = d;
            // render previous view if the tree is inactive and kept-alive
            if (p) return o(f[l], i, n);
            var v = c.matched[d];
            // render empty node if no matched route
            if (!v) {
                f[l] = null;
                return o();
            }
            var h = f[l] = v.components[l];
            // attach instance registration hook
            // this will be called in the instance's injected lifecycle hooks
            i.registerRouteInstance = function(e, t) {
                // val could be undefined for unregistration
                var r = v.instances[l];
                if (t && r !== e || !t && r === e) v.instances[l] = t;
            };
            (i.hook || (i.hook = {})).prepatch = function(e, t) {
                v.instances[l] = t.componentInstance;
            };
            // resolve props
            var m = i.props = s(c, v.props && v.props[l]);
            if (m) {
                // clone to prevent mutation
                m = i.props = u({}, m);
                // pass non-declared props as attrs
                var y = i.attrs = i.attrs || {};
                for (var _ in m) if (!h.props || !(_ in h.props)) {
                    y[_] = m[_];
                    delete m[_];
                }
            }
            return o(h, i, n);
        }
    };
    function s(e, t) {
        switch (typeof t) {
          case "undefined":
            return;

          case "object":
            return t;

          case "function":
            return t(e);

          case "boolean":
            return t ? e.params : void 0;

          default:
            if (true) a(false, 'props in "' + e.path + '" is a ' + typeof t + ", expecting an object, function or boolean.");
        }
    }
    function u(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
    }
    /*  */
    var l = /[!'()*]/g;
    var c = function(e) {
        return "%" + e.charCodeAt(0).toString(16);
    };
    var f = /%2C/g;
    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
    var d = function(e) {
        return encodeURIComponent(e).replace(l, c).replace(f, ",");
    };
    var p = decodeURIComponent;
    function v(e, t, r) {
        if (void 0 === t) t = {};
        var n = r || h;
        var i;
        try {
            i = n(e || "");
        } catch (e) {
            a(false, e.message);
            i = {};
        }
        for (var o in t) i[o] = t[o];
        return i;
    }
    function h(e) {
        var t = {};
        e = e.trim().replace(/^(\?|#|&)/, "");
        if (!e) return t;
        e.split("&").forEach(function(e) {
            var r = e.replace(/\+/g, " ").split("=");
            var n = p(r.shift());
            var a = r.length > 0 ? p(r.join("=")) : null;
            if (void 0 === t[n]) t[n] = a; else if (Array.isArray(t[n])) t[n].push(a); else t[n] = [ t[n], a ];
        });
        return t;
    }
    function m(e) {
        var t = e ? Object.keys(e).map(function(t) {
            var r = e[t];
            if (void 0 === r) return "";
            if (null === r) return d(t);
            if (Array.isArray(r)) {
                var n = [];
                r.forEach(function(e) {
                    if (void 0 === e) return;
                    if (null === e) n.push(d(t)); else n.push(d(t) + "=" + d(e));
                });
                return n.join("&");
            }
            return d(t) + "=" + d(r);
        }).filter(function(e) {
            return e.length > 0;
        }).join("&") : null;
        return t ? "?" + t : "";
    }
    /*  */
    var y = /\/?$/;
    function _(e, t, r, n) {
        var a = n && n.options.stringifyQuery;
        var i = t.query || {};
        try {
            i = g(i);
        } catch (e) {}
        var o = {
            name: t.name || e && e.name,
            meta: e && e.meta || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: i,
            params: t.params || {},
            fullPath: k(t, a),
            matched: e ? w(e) : []
        };
        if (r) o.redirectedFrom = k(r, a);
        return Object.freeze(o);
    }
    function g(e) {
        if (Array.isArray(e)) return e.map(g); else if (e && "object" === typeof e) {
            var t = {};
            for (var r in e) t[r] = g(e[r]);
            return t;
        } else return e;
    }
    // the starting route that represents the initial state
    var b = _(null, {
        path: "/"
    });
    function w(e) {
        var t = [];
        while (e) {
            t.unshift(e);
            e = e.parent;
        }
        return t;
    }
    function k(e, t) {
        var r = e.path;
        var n = e.query;
        if (void 0 === n) n = {};
        var a = e.hash;
        if (void 0 === a) a = "";
        var i = t || m;
        return (r || "/") + i(n) + a;
    }
    function C(e, t) {
        if (t === b) return e === t; else if (!t) return false; else if (e.path && t.path) return e.path.replace(y, "") === t.path.replace(y, "") && e.hash === t.hash && x(e.query, t.query); else if (e.name && t.name) return e.name === t.name && e.hash === t.hash && x(e.query, t.query) && x(e.params, t.params); else return false;
    }
    function x(e, t) {
        if (void 0 === e) e = {};
        if (void 0 === t) t = {};
        // handle null value #1566
        if (!e || !t) return e === t;
        var r = Object.keys(e);
        var n = Object.keys(t);
        if (r.length !== n.length) return false;
        return r.every(function(r) {
            var n = e[r];
            var a = t[r];
            // check nested equality
            if ("object" === typeof n && "object" === typeof a) return x(n, a);
            return String(n) === String(a);
        });
    }
    function O(e, t) {
        return 0 === e.path.replace(y, "/").indexOf(t.path.replace(y, "/")) && (!t.hash || e.hash === t.hash) && A(e.query, t.query);
    }
    function A(e, t) {
        for (var r in t) if (!(r in e)) return false;
        return true;
    }
    /*  */
    // work around weird flow bug
    var j = [ String, Object ];
    var E = [ String, Array ];
    var S = {
        name: "router-link",
        props: {
            to: {
                type: j,
                required: true
            },
            tag: {
                type: String,
                default: "a"
            },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: {
                type: E,
                default: "click"
            }
        },
        render: function(e) {
            var t = this;
            var r = this.$router;
            var n = this.$route;
            var a = r.resolve(this.to, n, this.append);
            var i = a.location;
            var o = a.route;
            var s = a.href;
            var u = {};
            var l = r.options.linkActiveClass;
            var c = r.options.linkExactActiveClass;
            // Support global empty active class
            var f = null == l ? "router-link-active" : l;
            var d = null == c ? "router-link-exact-active" : c;
            var p = null == this.activeClass ? f : this.activeClass;
            var v = null == this.exactActiveClass ? d : this.exactActiveClass;
            var h = i.path ? _(null, i, null, r) : o;
            u[v] = C(n, h);
            u[p] = this.exact ? u[v] : O(n, h);
            var m = function(e) {
                if (T(e)) if (t.replace) r.replace(i); else r.push(i);
            };
            var y = {
                click: T
            };
            if (Array.isArray(this.event)) this.event.forEach(function(e) {
                y[e] = m;
            }); else y[this.event] = m;
            var g = {
                class: u
            };
            if ("a" === this.tag) {
                g.on = y;
                g.attrs = {
                    href: s
                };
            } else {
                // find the first <a> child and apply listener and href
                var b = P(this.$slots.default);
                if (b) {
                    // in case the <a> is a static node
                    b.isStatic = false;
                    var w = $.util.extend;
                    (b.data = w({}, b.data)).on = y;
                    (b.data.attrs = w({}, b.data.attrs)).href = s;
                } else // doesn't have <a> child, apply listener to self
                g.on = y;
            }
            return e(this.tag, g, this.$slots.default);
        }
    };
    function T(e) {
        // don't redirect with control keys
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        if (e.defaultPrevented) return;
        // don't redirect on right click
        if (void 0 !== e.button && 0 !== e.button) return;
        // don't redirect if `target="_blank"`
        if (e.currentTarget && e.currentTarget.getAttribute) {
            if (/\b_blank\b/i.test(e.currentTarget.getAttribute("target"))) return;
        }
        // this may be a Weex event which doesn't have this method
        if (e.preventDefault) e.preventDefault();
        return true;
    }
    function P(e) {
        if (e) {
            var t;
            for (var r = 0; r < e.length; r++) {
                t = e[r];
                if ("a" === t.tag) return t;
                if (t.children && (t = P(t.children))) return t;
            }
        }
    }
    var $;
    function M(e) {
        if (M.installed && $ === e) return;
        M.installed = true;
        $ = e;
        var t = function(e) {
            return void 0 !== e;
        };
        var r = function(e, r) {
            var n = e.$options._parentVnode;
            if (t(n) && t(n = n.data) && t(n = n.registerRouteInstance)) n(e, r);
        };
        e.mixin({
            beforeCreate: function() {
                if (t(this.$options.router)) {
                    this._routerRoot = this;
                    this._router = this.$options.router;
                    this._router.init(this);
                    e.util.defineReactive(this, "_route", this._router.history.current);
                } else this._routerRoot = this.$parent && this.$parent._routerRoot || this;
                r(this, this);
            },
            destroyed: function() {
                r(this);
            }
        });
        Object.defineProperty(e.prototype, "$router", {
            get: function() {
                return this._routerRoot._router;
            }
        });
        Object.defineProperty(e.prototype, "$route", {
            get: function() {
                return this._routerRoot._route;
            }
        });
        e.component("router-view", o);
        e.component("router-link", S);
        var n = e.config.optionMergeStrategies;
        // use the same hook merging strategy for route hooks
        n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created;
    }
    /*  */
    var R = "undefined" !== typeof window;
    /*  */
    function L(e, t, r) {
        var n = e.charAt(0);
        if ("/" === n) return e;
        if ("?" === n || "#" === n) return t + e;
        var a = t.split("/");
        // remove trailing segment if:
        // - not appending
        // - appending to trailing slash (last segment is empty)
        if (!r || !a[a.length - 1]) a.pop();
        // resolve relative path
        var i = e.replace(/^\//, "").split("/");
        for (var o = 0; o < i.length; o++) {
            var s = i[o];
            if (".." === s) a.pop(); else if ("." !== s) a.push(s);
        }
        // ensure leading slash
        if ("" !== a[0]) a.unshift("");
        return a.join("/");
    }
    function I(e) {
        var t = "";
        var r = "";
        var n = e.indexOf("#");
        if (n >= 0) {
            t = e.slice(n);
            e = e.slice(0, n);
        }
        var a = e.indexOf("?");
        if (a >= 0) {
            r = e.slice(a + 1);
            e = e.slice(0, a);
        }
        return {
            path: e,
            query: r,
            hash: t
        };
    }
    function z(e) {
        return e.replace(/\/\//g, "/");
    }
    var D = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e);
    };
    /**
 * Expose `pathToRegexp`.
 */
    var N = ae;
    var B = V;
    var q = W;
    var F = X;
    var U = ne;
    /**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
    var H = new RegExp([ // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)", // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))" ].join("|"), "g");
    /**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
    function V(e, t) {
        var r = [];
        var n = 0;
        var a = 0;
        var i = "";
        var o = t && t.delimiter || "/";
        var s;
        while (null != (s = H.exec(e))) {
            var u = s[0];
            var l = s[1];
            var c = s.index;
            i += e.slice(a, c);
            a = c + u.length;
            // Ignore already escaped sequences.
            if (l) {
                i += l[1];
                continue;
            }
            var f = e[a];
            var d = s[2];
            var p = s[3];
            var v = s[4];
            var h = s[5];
            var m = s[6];
            var y = s[7];
            // Push the current path onto the tokens.
            if (i) {
                r.push(i);
                i = "";
            }
            var _ = null != d && null != f && f !== d;
            var g = "+" === m || "*" === m;
            var b = "?" === m || "*" === m;
            var w = s[2] || o;
            var k = v || h;
            r.push({
                name: p || n++,
                prefix: d || "",
                delimiter: w,
                optional: b,
                repeat: g,
                partial: _,
                asterisk: !!y,
                pattern: k ? J(k) : y ? ".*" : "[^" + Q(w) + "]+?"
            });
        }
        // Match any characters still remaining.
        if (a < e.length) i += e.substr(a);
        // If the path exists, push it onto the end.
        if (i) r.push(i);
        return r;
    }
    /**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
    function W(e, t) {
        return X(V(e, t));
    }
    /**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
    function Y(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    /**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
    function Z(e) {
        return encodeURI(e).replace(/[?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    /**
 * Expose a method for transforming tokens into the path function.
 */
    function X(e) {
        // Compile all the tokens into regexps.
        var t = new Array(e.length);
        // Compile all the patterns before compilation.
        for (var r = 0; r < e.length; r++) if ("object" === typeof e[r]) t[r] = new RegExp("^(?:" + e[r].pattern + ")$");
        return function(r, n) {
            var a = "";
            var i = r || {};
            var o = n || {};
            var s = o.pretty ? Y : encodeURIComponent;
            for (var u = 0; u < e.length; u++) {
                var l = e[u];
                if ("string" === typeof l) {
                    a += l;
                    continue;
                }
                var c = i[l.name];
                var f;
                if (null == c) if (l.optional) {
                    // Prepend partial segment prefixes.
                    if (l.partial) a += l.prefix;
                    continue;
                } else throw new TypeError('Expected "' + l.name + '" to be defined');
                if (D(c)) {
                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                    if (0 === c.length) if (l.optional) continue; else throw new TypeError('Expected "' + l.name + '" to not be empty');
                    for (var d = 0; d < c.length; d++) {
                        f = s(c[d]);
                        if (!t[u].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                        a += (0 === d ? l.prefix : l.delimiter) + f;
                    }
                    continue;
                }
                f = l.asterisk ? Z(c) : s(c);
                if (!t[u].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                a += l.prefix + f;
            }
            return a;
        };
    }
    /**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
    function Q(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    /**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
    function J(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    /**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
    function K(e, t) {
        e.keys = t;
        return e;
    }
    /**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
    function G(e) {
        return e.sensitive ? "" : "i";
    }
    /**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
    function ee(e, t) {
        // Use a negative lookahead to match only capturing groups.
        var r = e.source.match(/\((?!\?)/g);
        if (r) for (var n = 0; n < r.length; n++) t.push({
            name: n,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            asterisk: false,
            pattern: null
        });
        return K(e, t);
    }
    /**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
    function te(e, t, r) {
        var n = [];
        for (var a = 0; a < e.length; a++) n.push(ae(e[a], t, r).source);
        return K(new RegExp("(?:" + n.join("|") + ")", G(r)), t);
    }
    /**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
    function re(e, t, r) {
        return ne(V(e, r), t, r);
    }
    /**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
    function ne(e, t, r) {
        if (!D(t)) {
            r = /** @type {!Object} */ t || r;
            t = [];
        }
        r = r || {};
        var n = r.strict;
        var a = false !== r.end;
        var i = "";
        // Iterate over the tokens and create our regexp string.
        for (var o = 0; o < e.length; o++) {
            var s = e[o];
            if ("string" === typeof s) i += Q(s); else {
                var u = Q(s.prefix);
                var l = "(?:" + s.pattern + ")";
                t.push(s);
                if (s.repeat) l += "(?:" + u + l + ")*";
                if (s.optional) if (!s.partial) l = "(?:" + u + "(" + l + "))?"; else l = u + "(" + l + ")?"; else l = u + "(" + l + ")";
                i += l;
            }
        }
        var c = Q(r.delimiter || "/");
        var f = i.slice(-c.length) === c;
        // In non-strict mode we allow a slash at the end of match. If the path to
        // match already ends with a slash, we remove it for consistency. The slash
        // is valid at the end of a path match, not in the middle. This is important
        // in non-ending mode, where "/test/" shouldn't match "/test//route".
        if (!n) i = (f ? i.slice(0, -c.length) : i) + "(?:" + c + "(?=$))?";
        if (a) i += "$"; else // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        i += n && f ? "" : "(?=" + c + "|$)";
        return K(new RegExp("^" + i, G(r)), t);
    }
    /**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
    function ae(e, t, r) {
        if (!D(t)) {
            r = /** @type {!Object} */ t || r;
            t = [];
        }
        r = r || {};
        if (e instanceof RegExp) /** @type {!Array} */
        return ee(e, t);
        if (D(e)) /** @type {!Array} */
        /** @type {!Array} */
        return te(e, t, r);
        /** @type {string} */
        /** @type {!Array} */
        return re(e, t, r);
    }
    N.parse = B;
    N.compile = q;
    N.tokensToFunction = F;
    N.tokensToRegExp = U;
    /*  */
    // $flow-disable-line
    var ie = Object.create(null);
    function oe(e, t, r) {
        try {
            return (ie[e] || (ie[e] = N.compile(e)))(t || {}, {
                pretty: true
            });
        } catch (e) {
            if (true) a(false, "missing param for " + r + ": " + e.message);
            return "";
        }
    }
    /*  */
    function se(e, t, r, n) {
        // the path list is used to control path matching priority
        var a = t || [];
        // $flow-disable-line
        var i = r || Object.create(null);
        // $flow-disable-line
        var o = n || Object.create(null);
        e.forEach(function(e) {
            ue(a, i, o, e);
        });
        // ensure wildcard routes are always at the end
        for (var s = 0, u = a.length; s < u; s++) if ("*" === a[s]) {
            a.push(a.splice(s, 1)[0]);
            u--;
            s--;
        }
        return {
            pathList: a,
            pathMap: i,
            nameMap: o
        };
    }
    function ue(e, t, r, i, o, s) {
        var u = i.path;
        var l = i.name;
        if (true) {
            n(null != u, '"path" is required in a route configuration.');
            n("string" !== typeof i.component, 'route config "component" for path: ' + String(u || l) + " cannot be a string id. Use an actual component instead.");
        }
        var c = i.pathToRegexpOptions || {};
        var f = ce(u, o, c.strict);
        if ("boolean" === typeof i.caseSensitive) c.sensitive = i.caseSensitive;
        var d = {
            path: f,
            regex: le(f, c),
            components: i.components || {
                default: i.component
            },
            instances: {},
            name: l,
            parent: o,
            matchAs: s,
            redirect: i.redirect,
            beforeEnter: i.beforeEnter,
            meta: i.meta || {},
            props: null == i.props ? {} : i.components ? i.props : {
                default: i.props
            }
        };
        if (i.children) {
            // Warn if route is named, does not redirect and has a default child route.
            // If users navigate to this route by name, the default child will
            // not be rendered (GH Issue #629)
            if (true) if (i.name && !i.redirect && i.children.some(function(e) {
                return /^\/?$/.test(e.path);
            })) a(false, "Named Route '" + i.name + "' has a default child route. When navigating to this named route (:to=\"{name: '" + i.name + "'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.");
            i.children.forEach(function(n) {
                var a = s ? z(s + "/" + n.path) : void 0;
                ue(e, t, r, n, d, a);
            });
        }
        if (void 0 !== i.alias) {
            (Array.isArray(i.alias) ? i.alias : [ i.alias ]).forEach(function(n) {
                var a = {
                    path: n,
                    children: i.children
                };
                ue(e, t, r, a, o, d.path || "/");
            });
        }
        if (!t[d.path]) {
            e.push(d.path);
            t[d.path] = d;
        }
        if (l) if (!r[l]) r[l] = d; else if (!s) a(false, 'Duplicate named routes definition: { name: "' + l + '", path: "' + d.path + '" }');
    }
    function le(e, t) {
        var r = N(e, [], t);
        if (true) {
            var n = Object.create(null);
            r.keys.forEach(function(t) {
                a(!n[t.name], 'Duplicate param keys in route with path: "' + e + '"');
                n[t.name] = true;
            });
        }
        return r;
    }
    function ce(e, t, r) {
        if (!r) e = e.replace(/\/$/, "");
        if ("/" === e[0]) return e;
        if (null == t) return e;
        return z(t.path + "/" + e);
    }
    /*  */
    function fe(e, t, r, n) {
        var i = "string" === typeof e ? {
            path: e
        } : e;
        // named target
        if (i.name || i._normalized) return i;
        // relative params
        if (!i.path && i.params && t) {
            i = de({}, i);
            i._normalized = true;
            var o = de(de({}, t.params), i.params);
            if (t.name) {
                i.name = t.name;
                i.params = o;
            } else if (t.matched.length) {
                var s = t.matched[t.matched.length - 1].path;
                i.path = oe(s, o, "path " + t.path);
            } else if (true) a(false, "relative params navigation requires a current route.");
            return i;
        }
        var u = I(i.path || "");
        var l = t && t.path || "/";
        var c = u.path ? L(u.path, l, r || i.append) : l;
        var f = v(u.query, i.query, n && n.options.parseQuery);
        var d = i.hash || u.hash;
        if (d && "#" !== d.charAt(0)) d = "#" + d;
        return {
            _normalized: true,
            path: c,
            query: f,
            hash: d
        };
    }
    function de(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
    }
    /*  */
    function pe(e, t) {
        var r = se(e);
        var i = r.pathList;
        var o = r.pathMap;
        var s = r.nameMap;
        function u(e) {
            se(e, i, o, s);
        }
        function l(e, r, n) {
            var u = fe(e, r, false, t);
            var l = u.name;
            if (l) {
                var c = s[l];
                if (true) a(c, "Route with name '" + l + "' does not exist");
                if (!c) return d(null, u);
                var f = c.regex.keys.filter(function(e) {
                    return !e.optional;
                }).map(function(e) {
                    return e.name;
                });
                if ("object" !== typeof u.params) u.params = {};
                if (r && "object" === typeof r.params) for (var p in r.params) if (!(p in u.params) && f.indexOf(p) > -1) u.params[p] = r.params[p];
                if (c) {
                    u.path = oe(c.path, u.params, 'named route "' + l + '"');
                    return d(c, u, n);
                }
            } else if (u.path) {
                u.params = {};
                for (var v = 0; v < i.length; v++) {
                    var h = i[v];
                    var m = o[h];
                    if (ve(m.regex, u.path, u.params)) return d(m, u, n);
                }
            }
            // no match
            return d(null, u);
        }
        function c(e, r) {
            var i = e.redirect;
            var o = "function" === typeof i ? i(_(e, r, null, t)) : i;
            if ("string" === typeof o) o = {
                path: o
            };
            if (!o || "object" !== typeof o) {
                if (true) a(false, "invalid redirect option: " + JSON.stringify(o));
                return d(null, r);
            }
            var u = o;
            var c = u.name;
            var f = u.path;
            var p = r.query;
            var v = r.hash;
            var h = r.params;
            p = u.hasOwnProperty("query") ? u.query : p;
            v = u.hasOwnProperty("hash") ? u.hash : v;
            h = u.hasOwnProperty("params") ? u.params : h;
            if (c) {
                // resolved named direct
                var m = s[c];
                if (true) n(m, 'redirect failed: named route "' + c + '" not found.');
                return l({
                    _normalized: true,
                    name: c,
                    query: p,
                    hash: v,
                    params: h
                }, void 0, r);
            } else if (f) {
                // 1. resolve relative redirect
                var y = he(f, e);
                // 2. resolve params
                var g = oe(y, h, 'redirect route with path "' + y + '"');
                // 3. rematch with existing query and hash
                return l({
                    _normalized: true,
                    path: g,
                    query: p,
                    hash: v
                }, void 0, r);
            } else {
                if (true) a(false, "invalid redirect option: " + JSON.stringify(o));
                return d(null, r);
            }
        }
        function f(e, t, r) {
            var n = oe(r, t.params, 'aliased route with path "' + r + '"');
            var a = l({
                _normalized: true,
                path: n
            });
            if (a) {
                var i = a.matched;
                var o = i[i.length - 1];
                t.params = a.params;
                return d(o, t);
            }
            return d(null, t);
        }
        function d(e, r, n) {
            if (e && e.redirect) return c(e, n || r);
            if (e && e.matchAs) return f(e, r, e.matchAs);
            return _(e, r, n, t);
        }
        return {
            match: l,
            addRoutes: u
        };
    }
    function ve(e, t, r) {
        var n = t.match(e);
        if (!n) return false; else if (!r) return true;
        for (var a = 1, i = n.length; a < i; ++a) {
            var o = e.keys[a - 1];
            var s = "string" === typeof n[a] ? decodeURIComponent(n[a]) : n[a];
            if (o) r[o.name] = s;
        }
        return true;
    }
    function he(e, t) {
        return L(e, t.parent ? t.parent.path : "/", true);
    }
    /*  */
    var me = Object.create(null);
    function ye() {
        // Fix for #1585 for Firefox
        window.history.replaceState({
            key: Pe()
        }, "");
        window.addEventListener("popstate", function(e) {
            ge();
            if (e.state && e.state.key) $e(e.state.key);
        });
    }
    function _e(e, t, r, a) {
        if (!e.app) return;
        var i = e.options.scrollBehavior;
        if (!i) return;
        if (true) n("function" === typeof i, "scrollBehavior must be a function");
        // wait until re-render finishes before scrolling
        e.app.$nextTick(function() {
            var e = be();
            var o = i(t, r, a ? e : null);
            if (!o) return;
            if ("function" === typeof o.then) o.then(function(t) {
                Ae(t, e);
            }).catch(function(e) {
                if (true) n(false, e.toString());
            }); else Ae(o, e);
        });
    }
    function ge() {
        var e = Pe();
        if (e) me[e] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        };
    }
    function be() {
        var e = Pe();
        if (e) return me[e];
    }
    function we(e, t) {
        var r = document.documentElement;
        var n = r.getBoundingClientRect();
        var a = e.getBoundingClientRect();
        return {
            x: a.left - n.left - t.x,
            y: a.top - n.top - t.y
        };
    }
    function ke(e) {
        return Oe(e.x) || Oe(e.y);
    }
    function Ce(e) {
        return {
            x: Oe(e.x) ? e.x : window.pageXOffset,
            y: Oe(e.y) ? e.y : window.pageYOffset
        };
    }
    function xe(e) {
        return {
            x: Oe(e.x) ? e.x : 0,
            y: Oe(e.y) ? e.y : 0
        };
    }
    function Oe(e) {
        return "number" === typeof e;
    }
    function Ae(e, t) {
        var r = "object" === typeof e;
        if (r && "string" === typeof e.selector) {
            var n = document.querySelector(e.selector);
            if (n) {
                var a = e.offset && "object" === typeof e.offset ? e.offset : {};
                a = xe(a);
                t = we(n, a);
            } else if (ke(e)) t = Ce(e);
        } else if (r && ke(e)) t = Ce(e);
        if (t) window.scrollTo(t.x, t.y);
    }
    /*  */
    var je = R && function() {
        var e = window.navigator.userAgent;
        if ((-1 !== e.indexOf("Android 2.") || -1 !== e.indexOf("Android 4.0")) && -1 !== e.indexOf("Mobile Safari") && -1 === e.indexOf("Chrome") && -1 === e.indexOf("Windows Phone")) return false;
        return window.history && "pushState" in window.history;
    }();
    // use User Timing api (if present) for more accurate key precision
    var Ee = R && window.performance && window.performance.now ? window.performance : Date;
    var Se = Te();
    function Te() {
        return Ee.now().toFixed(3);
    }
    function Pe() {
        return Se;
    }
    function $e(e) {
        Se = e;
    }
    function Me(e, t) {
        ge();
        // try...catch the pushState call to get around Safari
        // DOM Exception 18 where it limits to 100 pushState calls
        var r = window.history;
        try {
            if (t) r.replaceState({
                key: Se
            }, "", e); else {
                Se = Te();
                r.pushState({
                    key: Se
                }, "", e);
            }
        } catch (r) {
            window.location[t ? "replace" : "assign"](e);
        }
    }
    function Re(e) {
        Me(e, true);
    }
    /*  */
    function Le(e, t, r) {
        var n = function(a) {
            if (a >= e.length) r(); else if (e[a]) t(e[a], function() {
                n(a + 1);
            }); else n(a + 1);
        };
        n(0);
    }
    /*  */
    function Ie(e) {
        return function(t, r, n) {
            var o = false;
            var s = 0;
            var u = null;
            ze(e, function(e, t, r, l) {
                // if it's a function and doesn't have cid attached,
                // assume it's an async component resolve function.
                // we are not using Vue's default async resolving mechanism because
                // we want to halt the navigation until the incoming component has been
                // resolved.
                if ("function" === typeof e && void 0 === e.cid) {
                    o = true;
                    s++;
                    var c = qe(function(t) {
                        if (Be(t)) t = t.default;
                        // save resolved on async factory in case it's used elsewhere
                        e.resolved = "function" === typeof t ? t : $.extend(t);
                        r.components[l] = t;
                        s--;
                        if (s <= 0) n();
                    });
                    var f = qe(function(e) {
                        var t = "Failed to resolve async component " + l + ": " + e;
                        a(false, t);
                        if (!u) {
                            u = i(e) ? e : new Error(t);
                            n(u);
                        }
                    });
                    var d;
                    try {
                        d = e(c, f);
                    } catch (e) {
                        f(e);
                    }
                    if (d) if ("function" === typeof d.then) d.then(c, f); else {
                        // new syntax in Vue 2.3
                        var p = d.component;
                        if (p && "function" === typeof p.then) p.then(c, f);
                    }
                }
            });
            if (!o) n();
        };
    }
    function ze(e, t) {
        return De(e.map(function(e) {
            return Object.keys(e.components).map(function(r) {
                return t(e.components[r], e.instances[r], e, r);
            });
        }));
    }
    function De(e) {
        return Array.prototype.concat.apply([], e);
    }
    var Ne = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
    function Be(e) {
        return e.__esModule || Ne && "Module" === e[Symbol.toStringTag];
    }
    // in Webpack 2, require.ensure now also returns a Promise
    // so the resolve/reject functions may get called an extra time
    // if the user uses an arrow function shorthand that happens to
    // return that Promise.
    function qe(e) {
        var t = false;
        return function() {
            var r = [], n = arguments.length;
            while (n--) r[n] = arguments[n];
            if (t) return;
            t = true;
            return e.apply(this, r);
        };
    }
    /*  */
    var Fe = function(e, t) {
        this.router = e;
        this.base = Ue(t);
        // start with a route object that stands for "nowhere"
        this.current = b;
        this.pending = null;
        this.ready = false;
        this.readyCbs = [];
        this.readyErrorCbs = [];
        this.errorCbs = [];
    };
    Fe.prototype.listen = function(e) {
        this.cb = e;
    };
    Fe.prototype.onReady = function(e, t) {
        if (this.ready) e(); else {
            this.readyCbs.push(e);
            if (t) this.readyErrorCbs.push(t);
        }
    };
    Fe.prototype.onError = function(e) {
        this.errorCbs.push(e);
    };
    Fe.prototype.transitionTo = function(e, t, r) {
        var n = this;
        var a = this.router.match(e, this.current);
        this.confirmTransition(a, function() {
            n.updateRoute(a);
            t && t(a);
            n.ensureURL();
            // fire ready cbs once
            if (!n.ready) {
                n.ready = true;
                n.readyCbs.forEach(function(e) {
                    e(a);
                });
            }
        }, function(e) {
            if (r) r(e);
            if (e && !n.ready) {
                n.ready = true;
                n.readyErrorCbs.forEach(function(t) {
                    t(e);
                });
            }
        });
    };
    Fe.prototype.confirmTransition = function(e, t, r) {
        var n = this;
        var o = this.current;
        var s = function(e) {
            if (i(e)) if (n.errorCbs.length) n.errorCbs.forEach(function(t) {
                t(e);
            }); else {
                a(false, "uncaught error during route navigation:");
                console.error(e);
            }
            r && r(e);
        };
        if (C(e, o) && // in the case the route map has been dynamically appended to
        e.matched.length === o.matched.length) {
            this.ensureURL();
            return s();
        }
        var u = He(this.current.matched, e.matched);
        var l = u.updated;
        var c = u.deactivated;
        var f = u.activated;
        var d = [].concat(// in-component leave guards
        Ye(c), // global before hooks
        this.router.beforeHooks, // in-component update hooks
        Ze(l), // in-config enter guards
        f.map(function(e) {
            return e.beforeEnter;
        }), // async components
        Ie(f));
        this.pending = e;
        var p = function(t, r) {
            if (n.pending !== e) return s();
            try {
                t(e, o, function(e) {
                    if (false === e || i(e)) {
                        // next(false) -> abort navigation, ensure current URL
                        n.ensureURL(true);
                        s(e);
                    } else if ("string" === typeof e || "object" === typeof e && ("string" === typeof e.path || "string" === typeof e.name)) {
                        // next('/') or next({ path: '/' }) -> redirect
                        s();
                        if ("object" === typeof e && e.replace) n.replace(e); else n.push(e);
                    } else // confirm transition and pass on the value
                    r(e);
                });
            } catch (e) {
                s(e);
            }
        };
        Le(d, p, function() {
            var r = [];
            Le(Qe(f, r, function() {
                return n.current === e;
            }).concat(n.router.resolveHooks), p, function() {
                if (n.pending !== e) return s();
                n.pending = null;
                t(e);
                if (n.router.app) n.router.app.$nextTick(function() {
                    r.forEach(function(e) {
                        e();
                    });
                });
            });
        });
    };
    Fe.prototype.updateRoute = function(e) {
        var t = this.current;
        this.current = e;
        this.cb && this.cb(e);
        this.router.afterHooks.forEach(function(r) {
            r && r(e, t);
        });
    };
    function Ue(e) {
        if (!e) if (R) {
            // respect <base> tag
            var t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/";
            // strip full URL origin
            e = e.replace(/^https?:\/\/[^\/]+/, "");
        } else e = "/";
        // make sure there's the starting slash
        if ("/" !== e.charAt(0)) e = "/" + e;
        // remove trailing slash
        return e.replace(/\/$/, "");
    }
    function He(e, t) {
        var r;
        var n = Math.max(e.length, t.length);
        for (r = 0; r < n; r++) if (e[r] !== t[r]) break;
        return {
            updated: t.slice(0, r),
            activated: t.slice(r),
            deactivated: e.slice(r)
        };
    }
    function Ve(e, t, r, n) {
        var a = ze(e, function(e, n, a, i) {
            var o = We(e, t);
            if (o) return Array.isArray(o) ? o.map(function(e) {
                return r(e, n, a, i);
            }) : r(o, n, a, i);
        });
        return De(n ? a.reverse() : a);
    }
    function We(e, t) {
        if ("function" !== typeof e) // extend now so that global mixins are applied.
        e = $.extend(e);
        return e.options[t];
    }
    function Ye(e) {
        return Ve(e, "beforeRouteLeave", Xe, true);
    }
    function Ze(e) {
        return Ve(e, "beforeRouteUpdate", Xe);
    }
    function Xe(e, t) {
        if (t) return function() {
            return e.apply(t, arguments);
        };
    }
    function Qe(e, t, r) {
        return Ve(e, "beforeRouteEnter", function(e, n, a, i) {
            return Je(e, a, i, t, r);
        });
    }
    function Je(e, t, r, n, a) {
        return function(i, o, s) {
            return e(i, o, function(e) {
                s(e);
                if ("function" === typeof e) n.push(function() {
                    // #750
                    // if a router-view is wrapped with an out-in transition,
                    // the instance may not have been registered at this time.
                    // we will need to poll for registration until current route
                    // is no longer valid.
                    Ke(e, t.instances, r, a);
                });
            });
        };
    }
    function Ke(e, // somehow flow cannot infer this is a function
    t, r, n) {
        if (t[r]) e(t[r]); else if (n()) setTimeout(function() {
            Ke(e, t, r, n);
        }, 16);
    }
    /*  */
    var Ge = function(e) {
        function t(t, r) {
            var n = this;
            e.call(this, t, r);
            var a = t.options.scrollBehavior;
            if (a) ye();
            var i = et(this.base);
            window.addEventListener("popstate", function(e) {
                var r = n.current;
                // Avoiding first `popstate` event dispatched in some browsers but first
                // history route not updated since async guard at the same time.
                var o = et(n.base);
                if (n.current === b && o === i) return;
                n.transitionTo(o, function(e) {
                    if (a) _e(t, e, r, true);
                });
            });
        }
        if (e) t.__proto__ = e;
        t.prototype = Object.create(e && e.prototype);
        t.prototype.constructor = t;
        t.prototype.go = function(e) {
            window.history.go(e);
        };
        t.prototype.push = function(e, t, r) {
            var n = this;
            var a = this;
            var i = a.current;
            this.transitionTo(e, function(e) {
                Me(z(n.base + e.fullPath));
                _e(n.router, e, i, false);
                t && t(e);
            }, r);
        };
        t.prototype.replace = function(e, t, r) {
            var n = this;
            var a = this;
            var i = a.current;
            this.transitionTo(e, function(e) {
                Re(z(n.base + e.fullPath));
                _e(n.router, e, i, false);
                t && t(e);
            }, r);
        };
        t.prototype.ensureURL = function(e) {
            if (et(this.base) !== this.current.fullPath) {
                var t = z(this.base + this.current.fullPath);
                e ? Me(t) : Re(t);
            }
        };
        t.prototype.getCurrentLocation = function() {
            return et(this.base);
        };
        return t;
    }(Fe);
    function et(e) {
        var t = window.location.pathname;
        if (e && 0 === t.indexOf(e)) t = t.slice(e.length);
        return (t || "/") + window.location.search + window.location.hash;
    }
    /*  */
    var tt = function(e) {
        function t(t, r, n) {
            e.call(this, t, r);
            // check history fallback deeplinking
            if (n && rt(this.base)) return;
            nt();
        }
        if (e) t.__proto__ = e;
        t.prototype = Object.create(e && e.prototype);
        t.prototype.constructor = t;
        // this is delayed until the app mounts
        // to avoid the hashchange listener being fired too early
        t.prototype.setupListeners = function() {
            var e = this;
            var t = this.router;
            var r = t.options.scrollBehavior;
            var n = je && r;
            if (n) ye();
            window.addEventListener(je ? "popstate" : "hashchange", function() {
                var t = e.current;
                if (!nt()) return;
                e.transitionTo(at(), function(r) {
                    if (n) _e(e.router, r, t, true);
                    if (!je) st(r.fullPath);
                });
            });
        };
        t.prototype.push = function(e, t, r) {
            var n = this;
            var a = this;
            var i = a.current;
            this.transitionTo(e, function(e) {
                ot(e.fullPath);
                _e(n.router, e, i, false);
                t && t(e);
            }, r);
        };
        t.prototype.replace = function(e, t, r) {
            var n = this;
            var a = this;
            var i = a.current;
            this.transitionTo(e, function(e) {
                st(e.fullPath);
                _e(n.router, e, i, false);
                t && t(e);
            }, r);
        };
        t.prototype.go = function(e) {
            window.history.go(e);
        };
        t.prototype.ensureURL = function(e) {
            var t = this.current.fullPath;
            if (at() !== t) e ? ot(t) : st(t);
        };
        t.prototype.getCurrentLocation = function() {
            return at();
        };
        return t;
    }(Fe);
    function rt(e) {
        var t = et(e);
        if (!/^\/#/.test(t)) {
            window.location.replace(z(e + "/#" + t));
            return true;
        }
    }
    function nt() {
        var e = at();
        if ("/" === e.charAt(0)) return true;
        st("/" + e);
        return false;
    }
    function at() {
        // We can't use window.location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
        var e = window.location.href;
        var t = e.indexOf("#");
        return -1 === t ? "" : e.slice(t + 1);
    }
    function it(e) {
        var t = window.location.href;
        var r = t.indexOf("#");
        return (r >= 0 ? t.slice(0, r) : t) + "#" + e;
    }
    function ot(e) {
        if (je) Me(it(e)); else window.location.hash = e;
    }
    function st(e) {
        if (je) Re(it(e)); else window.location.replace(it(e));
    }
    /*  */
    var ut = function(e) {
        function t(t, r) {
            e.call(this, t, r);
            this.stack = [];
            this.index = -1;
        }
        if (e) t.__proto__ = e;
        t.prototype = Object.create(e && e.prototype);
        t.prototype.constructor = t;
        t.prototype.push = function(e, t, r) {
            var n = this;
            this.transitionTo(e, function(e) {
                n.stack = n.stack.slice(0, n.index + 1).concat(e);
                n.index++;
                t && t(e);
            }, r);
        };
        t.prototype.replace = function(e, t, r) {
            var n = this;
            this.transitionTo(e, function(e) {
                n.stack = n.stack.slice(0, n.index).concat(e);
                t && t(e);
            }, r);
        };
        t.prototype.go = function(e) {
            var t = this;
            var r = this.index + e;
            if (r < 0 || r >= this.stack.length) return;
            var n = this.stack[r];
            this.confirmTransition(n, function() {
                t.index = r;
                t.updateRoute(n);
            });
        };
        t.prototype.getCurrentLocation = function() {
            var e = this.stack[this.stack.length - 1];
            return e ? e.fullPath : "/";
        };
        t.prototype.ensureURL = function() {};
        return t;
    }(Fe);
    /*  */
    var lt = function(e) {
        if (void 0 === e) e = {};
        this.app = null;
        this.apps = [];
        this.options = e;
        this.beforeHooks = [];
        this.resolveHooks = [];
        this.afterHooks = [];
        this.matcher = pe(e.routes || [], this);
        var t = e.mode || "hash";
        this.fallback = "history" === t && !je && false !== e.fallback;
        if (this.fallback) t = "hash";
        if (!R) t = "abstract";
        this.mode = t;
        switch (t) {
          case "history":
            this.history = new Ge(this, e.base);
            break;

          case "hash":
            this.history = new tt(this, e.base, this.fallback);
            break;

          case "abstract":
            this.history = new ut(this, e.base);
            break;

          default:
            if (true) n(false, "invalid mode: " + t);
        }
    };
    var ct = {
        currentRoute: {
            configurable: true
        }
    };
    lt.prototype.match = function(e, t, r) {
        return this.matcher.match(e, t, r);
    };
    ct.currentRoute.get = function() {
        return this.history && this.history.current;
    };
    lt.prototype.init = function(e) {
        var t = this;
        n(M.installed, "not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance.");
        this.apps.push(e);
        // main app already initialized.
        if (this.app) return;
        this.app = e;
        var r = this.history;
        if (r instanceof Ge) r.transitionTo(r.getCurrentLocation()); else if (r instanceof tt) {
            var a = function() {
                r.setupListeners();
            };
            r.transitionTo(r.getCurrentLocation(), a, a);
        }
        r.listen(function(e) {
            t.apps.forEach(function(t) {
                t._route = e;
            });
        });
    };
    lt.prototype.beforeEach = function(e) {
        return ft(this.beforeHooks, e);
    };
    lt.prototype.beforeResolve = function(e) {
        return ft(this.resolveHooks, e);
    };
    lt.prototype.afterEach = function(e) {
        return ft(this.afterHooks, e);
    };
    lt.prototype.onReady = function(e, t) {
        this.history.onReady(e, t);
    };
    lt.prototype.onError = function(e) {
        this.history.onError(e);
    };
    lt.prototype.push = function(e, t, r) {
        this.history.push(e, t, r);
    };
    lt.prototype.replace = function(e, t, r) {
        this.history.replace(e, t, r);
    };
    lt.prototype.go = function(e) {
        this.history.go(e);
    };
    lt.prototype.back = function() {
        this.go(-1);
    };
    lt.prototype.forward = function() {
        this.go(1);
    };
    lt.prototype.getMatchedComponents = function(e) {
        var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
        if (!t) return [];
        return [].concat.apply([], t.matched.map(function(e) {
            return Object.keys(e.components).map(function(t) {
                return e.components[t];
            });
        }));
    };
    lt.prototype.resolve = function(e, t, r) {
        var n = fe(e, t || this.history.current, r, this);
        var a = this.match(n, t);
        var i = a.redirectedFrom || a.fullPath;
        return {
            location: n,
            route: a,
            href: dt(this.history.base, i, this.mode),
            // for backwards compat
            normalizedTo: n,
            resolved: a
        };
    };
    lt.prototype.addRoutes = function(e) {
        this.matcher.addRoutes(e);
        if (this.history.current !== b) this.history.transitionTo(this.history.getCurrentLocation());
    };
    Object.defineProperties(lt.prototype, ct);
    function ft(e, t) {
        e.push(t);
        return function() {
            var r = e.indexOf(t);
            if (r > -1) e.splice(r, 1);
        };
    }
    function dt(e, t, r) {
        var n = "hash" === r ? "#" + t : t;
        return e ? z(e + "/" + n) : n;
    }
    lt.install = M;
    lt.version = "3.0.1";
    if (R && window.Vue) window.Vue.use(lt);
    /* harmony default export */
    t["default"] = lt;
}, /* 56 */
/***/
function(e, t, r) {
    /*!
 * Vue-Lazyload.js v1.1.4
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
    !function(t, r) {
        true ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : t.VueLazyload = r();
    }(this, function() {
        "use strict";
        function e(e, t) {
            if (e.length) {
                var r = e.indexOf(t);
                return r > -1 ? e.splice(r, 1) : void 0;
            }
        }
        function t(e, t) {
            if (!e || !t) return e || {};
            if (e instanceof Object) for (var r in t) e[r] = t[r];
            return e;
        }
        function r(e, t) {
            for (var r = !1, n = 0, a = e.length; n < a; n++) if (t(e[n])) {
                r = !0;
                break;
            }
            return r;
        }
        function n(e, t) {
            if ("IMG" === e.tagName && e.getAttribute("data-srcset")) {
                var r = e.getAttribute("data-srcset"), n = [], a = e.parentNode, i = a.offsetWidth * t, o = void 0, s = void 0, u = void 0;
                r = r.trim().split(","), r.map(function(e) {
                    e = e.trim(), o = e.lastIndexOf(" "), -1 === o ? (s = e, u = 999998) : (s = e.substr(0, o), 
                    u = parseInt(e.substr(o + 1, e.length - o - 2), 10)), n.push([ u, s ]);
                }), n.sort(function(e, t) {
                    if (e[0] < t[0]) return -1;
                    if (e[0] > t[0]) return 1;
                    if (e[0] === t[0]) {
                        if (-1 !== t[1].indexOf(".webp", t[1].length - 5)) return 1;
                        if (-1 !== e[1].indexOf(".webp", e[1].length - 5)) return -1;
                    }
                    return 0;
                });
                for (var l = "", c = void 0, f = n.length, d = 0; d < f; d++) if (c = n[d], c[0] >= i) {
                    l = c[1];
                    break;
                }
                return l;
            }
        }
        function a(e, t) {
            for (var r = void 0, n = 0, a = e.length; n < a; n++) if (t(e[n])) {
                r = e[n];
                break;
            }
            return r;
        }
        function i() {
            if (!d) return !1;
            var e = !0, t = document;
            try {
                var r = t.createElement("object");
                r.type = "image/webp", r.style.visibility = "hidden", r.innerHTML = "!", t.body.appendChild(r), 
                e = !r.offsetWidth, t.body.removeChild(r);
            } catch (t) {
                e = !1;
            }
            return e;
        }
        function o(e, t) {
            var r = null, n = 0;
            return function() {
                if (!r) {
                    var a = Date.now() - n, i = this, o = arguments, s = function() {
                        n = Date.now(), r = !1, e.apply(i, o);
                    };
                    a >= t ? s() : r = setTimeout(s, t);
                }
            };
        }
        function s(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : f(e));
        }
        function u(e) {
            if (!(e instanceof Object)) return [];
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            return t;
        }
        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, d = "undefined" != typeof window, p = d && "IntersectionObserver" in window, v = {
            event: "event",
            observer: "observer"
        }, h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return d && window.devicePixelRatio || e;
        }, m = function() {
            if (d) {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0;
                        }
                    });
                    window.addEventListener("test", null, t);
                } catch (e) {}
                return e;
            }
        }(), y = {
            on: function(e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                m ? e.addEventListener(t, r, {
                    capture: n,
                    passive: !0
                }) : e.addEventListener(t, r, n);
            },
            off: function(e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.removeEventListener(t, r, n);
            }
        }, _ = function(e, t, r) {
            var n = new Image();
            n.src = e.src, n.onload = function() {
                t({
                    naturalHeight: n.naturalHeight,
                    naturalWidth: n.naturalWidth,
                    src: n.src
                });
            }, n.onerror = function(e) {
                r(e);
            };
        }, g = function(e, t) {
            return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t];
        }, b = function(e) {
            return g(e, "overflow") + g(e, "overflow-y") + g(e, "overflow-x");
        }, w = function(e) {
            if (d) {
                if (!(e instanceof HTMLElement)) return window;
                for (var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode; ) {
                    if (/(scroll|auto)/.test(b(t))) return t;
                    t = t.parentNode;
                }
                return window;
            }
        }, k = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), C = {}, x = function() {
            function e(t) {
                var r = t.el, n = t.src, a = t.error, i = t.loading, o = t.bindType, s = t.$parent, u = t.options, c = t.elRenderer;
                l(this, e), this.el = r, this.src = n, this.error = a, this.loading = i, this.bindType = o, 
                this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, 
                this.filter(), this.initState(), this.performanceData = {
                    init: Date.now(),
                    loadStart: null,
                    loadEnd: null
                }, this.rect = r.getBoundingClientRect(), this.$parent = s, this.elRenderer = c, 
                this.render("loading", !1);
            }
            return k(e, [ {
                key: "initState",
                value: function() {
                    this.state = {
                        error: !1,
                        loaded: !1,
                        rendered: !1
                    };
                }
            }, {
                key: "record",
                value: function(e) {
                    this.performanceData[e] = Date.now();
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = e.src, r = e.loading, n = e.error, a = this.src;
                    this.src = t, this.loading = r, this.error = n, this.filter(), a !== this.src && (this.attempt = 0, 
                    this.initState());
                }
            }, {
                key: "getRect",
                value: function() {
                    this.rect = this.el.getBoundingClientRect();
                }
            }, {
                key: "checkInView",
                value: function() {
                    return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;
                }
            }, {
                key: "filter",
                value: function() {
                    var e = this;
                    u(this.options.filter).map(function(t) {
                        e.options.filter[t](e, e.options);
                    });
                }
            }, {
                key: "renderLoading",
                value: function(e) {
                    var t = this;
                    _({
                        src: this.loading
                    }, function(r) {
                        t.render("loading", !1), e();
                    }, function(r) {
                        e(), t.options.silent || console.warn("VueLazyload log: load failed with loading image(" + t.loading + ")");
                    });
                }
            }, {
                key: "load",
                value: function() {
                    var e = this;
                    return this.attempt > this.options.attempt - 1 && this.state.error ? void (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times")) : this.state.loaded || C[this.src] ? this.render("loaded", !0) : void this.renderLoading(function() {
                        e.attempt++, e.record("loadStart"), _({
                            src: e.src
                        }, function(t) {
                            e.naturalHeight = t.naturalHeight, e.naturalWidth = t.naturalWidth, e.state.loaded = !0, 
                            e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), C[e.src] = 1;
                        }, function(t) {
                            e.state.error = !0, e.state.loaded = !1, e.render("error", !1);
                        });
                    });
                }
            }, {
                key: "render",
                value: function(e, t) {
                    this.elRenderer(this, e, t);
                }
            }, {
                key: "performance",
                value: function() {
                    var e = "loading", t = 0;
                    return this.state.loaded && (e = "loaded", t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), 
                    this.state.error && (e = "error"), {
                        src: this.src,
                        state: e,
                        time: t
                    };
                }
            }, {
                key: "destroy",
                value: function() {
                    this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, 
                    this.attempt = 0;
                }
            } ]), e;
        }(), O = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t;
            };
        }(), A = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", j = [ "scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove" ], E = {
            rootMargin: "0px",
            threshold: 0
        }, S = function(u) {
            return function() {
                function l(e) {
                    var t = e.preLoad, r = e.error, n = e.throttleWait, a = e.preLoadTop, s = e.dispatchEvent, u = e.loading, f = e.attempt, d = e.silent, p = e.scale, m = e.listenEvents, y = (e.hasbind, 
                    e.filter), _ = e.adapter, g = e.observer, b = e.observerOptions;
                    c(this, l), this.version = "1.1.4", this.mode = v.event, this.ListenerQueue = [], 
                    this.TargetIndex = 0, this.TargetQueue = [], this.options = {
                        silent: d || !0,
                        dispatchEvent: !!s,
                        throttleWait: n || 200,
                        preLoad: t || 1.3,
                        preLoadTop: a || 0,
                        error: r || A,
                        loading: u || A,
                        attempt: f || 3,
                        scale: p || h(p),
                        ListenEvents: m || j,
                        hasbind: !1,
                        supportWebp: i(),
                        filter: y || {},
                        adapter: _ || {},
                        observer: !!g,
                        observerOptions: b || E
                    }, this._initEvent(), this.lazyLoadHandler = o(this._lazyLoadHandler.bind(this), this.options.throttleWait), 
                    this.setMode(this.options.observer ? v.observer : v.event);
                }
                return O(l, [ {
                    key: "config",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t(this.options, e);
                    }
                }, {
                    key: "performance",
                    value: function() {
                        var e = [];
                        return this.ListenerQueue.map(function(t) {
                            e.push(t.performance());
                        }), e;
                    }
                }, {
                    key: "addLazyBox",
                    value: function(e) {
                        this.ListenerQueue.push(e), d && (this._addListenerTarget(window), this._observer && this._observer.observe(e.el), 
                        e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode));
                    }
                }, {
                    key: "add",
                    value: function(e, t, a) {
                        var i = this;
                        if (r(this.ListenerQueue, function(t) {
                            return t.el === e;
                        })) return this.update(e, t), u.nextTick(this.lazyLoadHandler);
                        var o = this._valueFormatter(t.value), s = o.src, l = o.loading, c = o.error;
                        u.nextTick(function() {
                            s = n(e, i.options.scale) || s, i._observer && i._observer.observe(e);
                            var r = Object.keys(t.modifiers)[0], o = void 0;
                            r && (o = a.context.$refs[r], o = o ? o.$el || o : document.getElementById(r)), 
                            o || (o = w(e));
                            var f = new x({
                                bindType: t.arg,
                                $parent: o,
                                el: e,
                                loading: l,
                                error: c,
                                src: s,
                                elRenderer: i._elRenderer.bind(i),
                                options: i.options
                            });
                            i.ListenerQueue.push(f), d && (i._addListenerTarget(window), i._addListenerTarget(o)), 
                            i.lazyLoadHandler(), u.nextTick(function() {
                                return i.lazyLoadHandler();
                            });
                        });
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var r = this, i = this._valueFormatter(t.value), o = i.src, s = i.loading, l = i.error;
                        o = n(e, this.options.scale) || o;
                        var c = a(this.ListenerQueue, function(t) {
                            return t.el === e;
                        });
                        c && c.update({
                            src: o,
                            loading: s,
                            error: l
                        }), this._observer && this._observer.observe(e), this.lazyLoadHandler(), u.nextTick(function() {
                            return r.lazyLoadHandler();
                        });
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        if (t) {
                            this._observer && this._observer.unobserve(t);
                            var r = a(this.ListenerQueue, function(e) {
                                return e.el === t;
                            });
                            r && (this._removeListenerTarget(r.$parent), this._removeListenerTarget(window), 
                            e(this.ListenerQueue, r) && r.destroy());
                        }
                    }
                }, {
                    key: "removeComponent",
                    value: function(t) {
                        t && (e(this.ListenerQueue, t), this._observer && this._observer.unobserve(t.el), 
                        t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode), this._removeListenerTarget(window));
                    }
                }, {
                    key: "setMode",
                    value: function(e) {
                        var t = this;
                        p || e !== v.observer || (e = v.event), this.mode = e, e === v.event ? (this._observer && (this.ListenerQueue.forEach(function(e) {
                            t._observer.unobserve(e.el);
                        }), this._observer = null), this.TargetQueue.forEach(function(e) {
                            t._initListen(e.el, !0);
                        })) : (this.TargetQueue.forEach(function(e) {
                            t._initListen(e.el, !1);
                        }), this._initIntersectionObserver());
                    }
                }, {
                    key: "_addListenerTarget",
                    value: function(e) {
                        if (e) {
                            var t = a(this.TargetQueue, function(t) {
                                return t.el === e;
                            });
                            return t ? t.childrenCount++ : (t = {
                                el: e,
                                id: ++this.TargetIndex,
                                childrenCount: 1,
                                listened: !0
                            }, this.mode === v.event && this._initListen(t.el, !0), this.TargetQueue.push(t)), 
                            this.TargetIndex;
                        }
                    }
                }, {
                    key: "_removeListenerTarget",
                    value: function(e) {
                        var t = this;
                        this.TargetQueue.forEach(function(r, n) {
                            r.el === e && (--r.childrenCount || (t._initListen(r.el, !1), t.TargetQueue.splice(n, 1), 
                            r = null));
                        });
                    }
                }, {
                    key: "_initListen",
                    value: function(e, t) {
                        var r = this;
                        this.options.ListenEvents.forEach(function(n) {
                            return y[t ? "on" : "off"](e, n, r.lazyLoadHandler);
                        });
                    }
                }, {
                    key: "_initEvent",
                    value: function() {
                        var t = this;
                        this.Event = {
                            listeners: {
                                loading: [],
                                loaded: [],
                                error: []
                            }
                        }, this.$on = function(e, r) {
                            t.Event.listeners[e].push(r);
                        }, this.$once = function(e, r) {
                            function n() {
                                a.$off(e, n), r.apply(a, arguments);
                            }
                            var a = t;
                            t.$on(e, n);
                        }, this.$off = function(r, n) {
                            if (!n) return void (t.Event.listeners[r] = []);
                            e(t.Event.listeners[r], n);
                        }, this.$emit = function(e, r, n) {
                            t.Event.listeners[e].forEach(function(e) {
                                return e(r, n);
                            });
                        };
                    }
                }, {
                    key: "_lazyLoadHandler",
                    value: function() {
                        var e = !1;
                        this.ListenerQueue.forEach(function(t) {
                            t.state.loaded || (e = t.checkInView()) && t.load();
                        });
                    }
                }, {
                    key: "_initIntersectionObserver",
                    value: function() {
                        var e = this;
                        p && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), 
                        this.ListenerQueue.length && this.ListenerQueue.forEach(function(t) {
                            e._observer.observe(t.el);
                        }));
                    }
                }, {
                    key: "_observerHandler",
                    value: function(e, t) {
                        var r = this;
                        e.forEach(function(e) {
                            e.isIntersecting && r.ListenerQueue.forEach(function(t) {
                                if (t.el === e.target) {
                                    if (t.state.loaded) return r._observer.unobserve(t.el);
                                    t.load();
                                }
                            });
                        });
                    }
                }, {
                    key: "_elRenderer",
                    value: function(e, t, r) {
                        if (e.el) {
                            var n = e.el, a = e.bindType, i = void 0;
                            switch (t) {
                              case "loading":
                                i = e.loading;
                                break;

                              case "error":
                                i = e.error;
                                break;

                              default:
                                i = e.src;
                            }
                            if (a ? n.style[a] = "url(" + i + ")" : n.getAttribute("src") !== i && n.setAttribute("src", i), 
                            n.setAttribute("lazy", t), this.$emit(t, e, r), this.options.adapter[t] && this.options.adapter[t](e, this.options), 
                            this.options.dispatchEvent) {
                                var o = new CustomEvent(t, {
                                    detail: e
                                });
                                n.dispatchEvent(o);
                            }
                        }
                    }
                }, {
                    key: "_valueFormatter",
                    value: function(e) {
                        var t = e, r = this.options.loading, n = this.options.error;
                        return s(e) && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e), 
                        t = e.src, r = e.loading || this.options.loading, n = e.error || this.options.error), 
                        {
                            src: t,
                            loading: r,
                            error: n
                        };
                    }
                } ]), l;
            }();
        }, T = function(e) {
            return {
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e) {
                    return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default);
                },
                data: function() {
                    return {
                        el: null,
                        state: {
                            loaded: !1
                        },
                        rect: {},
                        show: !1
                    };
                },
                mounted: function() {
                    this.el = this.$el, e.addLazyBox(this), e.lazyLoadHandler();
                },
                beforeDestroy: function() {
                    e.removeComponent(this);
                },
                methods: {
                    getRect: function() {
                        this.rect = this.$el.getBoundingClientRect();
                    },
                    checkInView: function() {
                        return this.getRect(), d && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0;
                    },
                    load: function() {
                        this.show = !0, this.state.loaded = !0, this.$emit("show", this);
                    }
                }
            };
        };
        return {
            install: function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = S(e), a = new n(r), i = "2" === e.version.split(".")[0];
                e.prototype.$Lazyload = a, r.lazyComponent && e.component("lazy-component", T(a)), 
                i ? e.directive("lazy", {
                    bind: a.add.bind(a),
                    update: a.update.bind(a),
                    componentUpdated: a.lazyLoadHandler.bind(a),
                    unbind: a.remove.bind(a)
                }) : e.directive("lazy", {
                    bind: a.lazyLoadHandler.bind(a),
                    update: function(e, r) {
                        t(this.vm.$refs, this.vm.$els), a.add(this.el, {
                            modifiers: this.modifiers || {},
                            arg: this.arg,
                            value: e,
                            oldValue: r
                        }, {
                            context: this.vm
                        });
                    },
                    unbind: function() {
                        a.remove(this.el);
                    }
                });
            }
        };
    });
}, /* 57 */
/***/
function(e, t, r) {
    /* smoothscroll v0.4.0 - 2017 - Dustan Kasten, Jeremias Menichelli - MIT License */
    !function() {
        "use strict";
        /*
   * aliases
   * w: window global object
   * d: document
   */
        var t = window;
        var r = document;
        /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
        function n(e) {
            var t = [ "MSIE ", "Trident/", "Edge/" ];
            return new RegExp(t.join("|")).test(e);
        }
        // polyfill
        function a() {
            // return if scroll behavior is supported and polyfill is not forced
            if ("scrollBehavior" in r.documentElement.style && true !== t.__forceSmoothScrollPolyfill__) return;
            // globals
            var e = t.HTMLElement || t.Element;
            var a = 468;
            /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
            var i = n(t.navigator.userAgent) ? 1 : 0;
            // object gathering original scroll methods
            var o = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: e.prototype.scroll || u,
                scrollIntoView: e.prototype.scrollIntoView
            };
            // define timing method
            var s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
            /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
            function u(e, t) {
                this.scrollLeft = e;
                this.scrollTop = t;
            }
            /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
            function l(e) {
                return .5 * (1 - Math.cos(Math.PI * e));
            }
            /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
            function c(e) {
                if (null === e || "object" !== typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) // first argument is not an object/null
                // or behavior is auto, instant or undefined
                return true;
                if ("object" === typeof e && "smooth" === e.behavior) // first argument is an object and behavior is smooth
                return false;
                // throw error when behavior is not supported
                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.");
            }
            /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
            function f(e, t) {
                if ("Y" === t) return e.clientHeight + i < e.scrollHeight;
                if ("X" === t) return e.clientWidth + i < e.scrollWidth;
            }
            /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
            function d(e, r) {
                var n = t.getComputedStyle(e, null)["overflow" + r];
                return "auto" === n || "scroll" === n;
            }
            /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
            function p(e) {
                var t = f(e, "Y") && d(e, "Y");
                var r = f(e, "X") && d(e, "X");
                return t || r;
            }
            /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
            function v(e) {
                var t;
                do {
                    e = e.parentNode;
                    t = e === r.body;
                } while (false === t && false === p(e));
                t = null;
                return e;
            }
            /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
            function h(e) {
                var r = s();
                var n;
                var i;
                var o;
                var u = (r - e.startTime) / a;
                // avoid elapsed times higher than one
                u = u > 1 ? 1 : u;
                // apply easing to elapsed time
                n = l(u);
                i = e.startX + (e.x - e.startX) * n;
                o = e.startY + (e.y - e.startY) * n;
                e.method.call(e.scrollable, i, o);
                // scroll more if we have not reached our destination
                if (i !== e.x || o !== e.y) t.requestAnimationFrame(h.bind(t, e));
            }
            /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
            function m(e, n, a) {
                var i;
                var l;
                var c;
                var f;
                var d = s();
                // define scroll context
                if (e === r.body) {
                    i = t;
                    l = t.scrollX || t.pageXOffset;
                    c = t.scrollY || t.pageYOffset;
                    f = o.scroll;
                } else {
                    i = e;
                    l = e.scrollLeft;
                    c = e.scrollTop;
                    f = u;
                }
                // scroll looping over a frame
                h({
                    scrollable: i,
                    method: f,
                    startTime: d,
                    startX: l,
                    startY: c,
                    x: n,
                    y: a
                });
            }
            // ORIGINAL METHODS OVERRIDES
            // w.scroll and w.scrollTo
            t.scroll = t.scrollTo = function() {
                // avoid action when no arguments are passed
                if (void 0 === arguments[0]) return;
                // avoid smooth behavior if not required
                if (true === c(arguments[0])) {
                    o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                    void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                m.call(t, r.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset);
            };
            // w.scrollBy
            t.scrollBy = function() {
                // avoid action when no arguments are passed
                if (void 0 === arguments[0]) return;
                // avoid smooth behavior if not required
                if (c(arguments[0])) {
                    o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                m.call(t, r.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset));
            };
            // Element.prototype.scroll and Element.prototype.scrollTo
            e.prototype.scroll = e.prototype.scrollTo = function() {
                // avoid action when no arguments are passed
                if (void 0 === arguments[0]) return;
                // avoid smooth behavior if not required
                if (true === c(arguments[0])) {
                    // if one number is passed, throw error to match Firefox implementation
                    if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");
                    o.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                    void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                    void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                    return;
                }
                var e = arguments[0].left;
                var t = arguments[0].top;
                // LET THE SMOOTHNESS BEGIN!
                m.call(this, this, "undefined" === typeof e ? this.scrollLeft : ~~e, "undefined" === typeof t ? this.scrollTop : ~~t);
            };
            // Element.prototype.scrollBy
            e.prototype.scrollBy = function() {
                // avoid action when no arguments are passed
                if (void 0 === arguments[0]) return;
                // avoid smooth behavior if not required
                if (true === c(arguments[0])) {
                    o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                    return;
                }
                this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                });
            };
            // Element.prototype.scrollIntoView
            e.prototype.scrollIntoView = function() {
                // avoid smooth behavior if not required
                if (true === c(arguments[0])) {
                    o.scrollIntoView.call(this, void 0 === arguments[0] ? true : arguments[0]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                var e = v(this);
                var n = e.getBoundingClientRect();
                var a = this.getBoundingClientRect();
                if (e !== r.body) {
                    // reveal element inside parent
                    m.call(this, e, e.scrollLeft + a.left - n.left, e.scrollTop + a.top - n.top);
                    // reveal parent in viewport unless is fixed
                    if ("fixed" !== t.getComputedStyle(e).position) t.scrollBy({
                        left: n.left,
                        top: n.top,
                        behavior: "smooth"
                    });
                } else // reveal element in viewport
                t.scrollBy({
                    left: a.left,
                    top: a.top,
                    behavior: "smooth"
                });
            };
        }
        if (true) // commonjs
        e.exports = {
            polyfill: a
        }; else // global
        a();
    }();
}, /* 58 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(59);
    var a = false;
    var i = r(0);
    var o = i(null, n["a"], false, null, null, null);
    o.options.__file = "src/components/basepage/basepage.vue";
    if (o.esModule && Object.keys(o.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-2d57edcf", o.options); else t.reload("data-v-2d57edcf", o.options);
        e.hot.dispose(function(e) {
            a = true;
        });
    }();
    /* harmony default export */
    t["default"] = o.exports;
}, /* 59 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        return (e._self._c || t)("router-view");
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-2d57edcf", i);
    }
}, /* 60 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.routes = void 0;
    var n = r(61);
    var a = y(n);
    var i = r(101);
    var o = y(i);
    var s = r(107);
    var u = y(s);
    var l = r(112);
    var c = y(l);
    var f = r(114);
    var d = y(f);
    var p = r(116);
    var v = y(p);
    var h = r(118);
    var m = y(h);
    function y(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    /*
function buildAsyncCallback(componentSectionName, componentName) {
  // const contentPath = 'components/content'
  const pagesPath = 'pages'

  let componentPath

  if (typeof componentName !== 'undefined') {
    componentPath = `${componentSectionName}/${pagesPath}/${componentName}`
  } else {
    componentPath = `${componentSectionName}/${componentSectionName}`
  }

  return (resolve) => {
    // eslint-disable-next-line import/no-dynamic-require
    require([`components/content/${componentPath}.vue`], resolve)
  }
}
*/
    /*
 * For semantic reasons, please localise both names and routes
 * according to content language.
 */
    var _ = [ {
        path: "/",
        component: a.default,
        children: [ {
            name: "numero",
            path: "/numero/:issueId",
            components: {
                issue: o.default
            },
            props: {
                issue: true
            }
        }, {
            name: "diari",
            path: "diari",
            components: {
                content: u.default
            }
        }, {
            name: "diari-zzap",
            path: "diari/zzap",
            components: {
                content: u.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(8).then(function() {
                        var t = [ r(122) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "speciali",
            path: "speciali",
            components: {
                content: c.default
            }
        }, {
            name: "speciali-leabbiamovistetutte",
            path: "speciali/leabbiamovistetutte",
            components: {
                content: c.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(2).then(function() {
                        var t = [ r(123) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "speciali-konixmultisystem",
            path: "speciali/konixmultisystem",
            components: {
                content: c.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(3).then(function() {
                        var t = [ r(124) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "speciali-elitesystems",
            path: "speciali/elitesystems",
            components: {
                content: c.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(4).then(function() {
                        var t = [ r(125) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "speciali-bovabyte",
            path: "speciali/bovabyte",
            components: {
                content: c.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(5).then(function() {
                        var t = [ r(126) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "mappe",
            path: "mappe",
            components: {
                content: v.default
            }
        }, {
            name: "mappe-citadel",
            path: "mappe/citadel",
            components: {
                content: v.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(7).then(function() {
                        var t = [ r(127) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "mappe-jackthenipper2",
            path: "mappe/jackthenipper2",
            components: {
                content: v.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(6).then(function() {
                        var t = [ r(128) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "demo-content-image",
            path: "demo/content/image",
            components: {
                content: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(0).then(function() {
                        var t = [ r(129) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        }, {
            name: "zzap",
            path: "zzap",
            components: {
                content: d.default
            }
        }, {
            name: "zzap-retroedicola",
            path: "zzap/retroedicola",
            components: {
                content: d.default,
                followup: function(e) {
                    // eslint-disable-next-line import/no-dynamic-require
                    r.e(1).then(function() {
                        var t = [ r(130) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        } ]
    }, {
        path: "*",
        component: m.default
    } ];
    t.routes = _;
}, /* 61 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(11);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(100);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/home/home.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-7c66a6a2", u.options); else t.reload("data-v-7c66a6a2", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 62 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(12);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(64);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/cover/cover.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-738045ff", u.options); else t.reload("data-v-738045ff", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 63 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.isScrollOnly ? r("a", {
            on: {
                click: e.scrollToAnchor
            }
        }, [ e._t("default") ], 2) : r("router-link", {
            attrs: {
                to: {
                    name: e.anchor
                }
            },
            nativeOn: {
                click: function(t) {
                    e.scrollToAnchor(t);
                }
            }
        }, [ e._t("default") ], 2);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-21fc4baf", i);
    }
}, /* 64 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "cover"
        }, [ r("h2", {
            attrs: {
                hidden: ""
            }
        }, [ e._v("Copertina") ]), e._v(" "), e._m(0), e._v(" "), r("nav", {
            staticClass: "cover__navigation"
        }, [ r("ul", {
            staticClass: "cover__navigationlist"
        }, [ r("li", [ r("scroll-link", {
            attrs: {
                target: "scanindex",
                isScrollOnly: true
            }
        }, [ r("span", [ e._v("Scansioni") ]), r("small", [ e._v("Sfoglia Zzap! a tutto schermo") ]) ]) ], 1), e._v(" "), r("li", [ r("scroll-link", {
            attrs: {
                anchor: "diari-zzap"
            }
        }, [ r("span", [ e._v("Diario") ]), r("small", [ e._v("Com'è nato il nuovo Zzap.it") ]) ]) ], 1), e._v(" "), r("li", [ r("scroll-link", {
            attrs: {
                anchor: "mappe"
            }
        }, [ r("small", [ e._v("Solo per temerari esploratori") ]), r("span", [ e._v("Mappe") ]) ]) ], 1), e._v(" "), r("li", [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ r("span", [ e._v("Speciali") ]), r("small", [ e._v("Rari ma imperdibili") ]) ]) ], 1), e._v(" "), r("li", {
            staticClass: "cover__navigation__side"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali-bovabyte"
            }
        }, [ r("small", [ e._v("Ne sentivamo la mancanza?") ]), r("span", [ e._v("Bovabyte") ]) ]) ], 1) ]) ]) ]);
    };
    var a = [ function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "cover__baloon"
        }, [ r("div", {
            staticClass: "cover__balooncontainer"
        }, [ r("img", {
            attrs: {
                src: "assets/cover/baloon.svg",
                alt: "baloon"
            }
        }), e._v(" "), r("span", [ e._v("Edizione online della rivista italiana più amata") ]) ]) ]);
    } ];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-738045ff", i);
    }
}, /* 65 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(15);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(66);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/dynamicnavigation/dynamicnavigation.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-922f8292", u.options); else t.reload("data-v-922f8292", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 66 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.sections.length > 0 ? r("nav", {
            staticClass: "dynamicnavigation"
        }, [ r("ol", {
            staticClass: "dynamicnavigation__container"
        }, e._l(e.sections, function(t) {
            return r("li", {
                class: e.getBookmarkClass(t.anchor),
                on: {
                    click: function(r) {
                        e.closeBookmark(t.anchor);
                    }
                }
            }, [ r("scroll-link", {
                attrs: {
                    anchor: t.anchor,
                    target: t.target,
                    "is-scroll-only": true
                }
            }, [ e._v(e._s(t.title)) ]) ], 1);
        })) ]) : e._e();
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-922f8292", i);
    }
}, /* 67 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(16);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(68);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/index/index.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-826af616", u.options); else t.reload("data-v-826af616", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 68 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "index"
        }, [ r("h2", {
            staticClass: "index__title"
        }, [ e._v("Sommario") ]), e._v(" "), r("div", {
            staticClass: "index__container"
        }, [ r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__listtitle"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "diari"
            }
        }, [ e._v("Diari e interviste") ]) ], 1), e._v(" "), r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ e._v("Anche il nuovo sito di Zzap.it ha il suo diario.\n      "), r("scroll-link", {
            attrs: {
                anchor: "diari-zzap"
            }
        }, [ e._v('"Il mio galeone", di Toni Bianchetti') ]) ], 1) ]) ]) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__listtitle"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("Speciali") ]) ], 1), e._v(" "), r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ e._v("Articolone storico di Paolo Besser scritto in occasione della temporanea rinascita di Zzap! sul web nel 1996. "), r("scroll-link", {
            attrs: {
                anchor: "speciali-leabbiamovistetutte"
            }
        }, [ e._v('"Le abbiamo viste tutte"') ]) ], 1), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ e._v("Un sogno mai realizzato: il "), r("scroll-link", {
            attrs: {
                anchor: "speciali-konixmultisystem"
            }
        }, [ e._v("Konix Multisystem") ]) ], 1), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ e._v("Che fine ha fatto la "), r("scroll-link", {
            attrs: {
                anchor: "speciali-elitesystems"
            }
        }, [ e._v("Elite Systems") ]), e._v("?") ], 1), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali-bovabyte"
            }
        }, [ e._v("Bovabyte") ]), e._v(", la rivista per chi di computer non ci capisce niente") ], 1) ]) ]) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__listtitle"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "mappe"
            }
        }, [ e._v("Mappe") ]) ], 1), e._v(" "), r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ e._v("Gettare scompiglio saltellando per la giungla non è mai stato cosí facile con la mappa, enorme, di "), r("scroll-link", {
            attrs: {
                anchor: "mappe-jackthenipper2"
            }
        }, [ e._v('"Jack the nipper 2: in coconut capers"') ]) ], 1), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ e._v("Esploriamo le cittá robotiche di "), r("scroll-link", {
            attrs: {
                anchor: "mappe-citadel"
            }
        }, [ e._v("Citadel") ]), e._v(", uno dei giochi piú anticipati della storia si Zzap!") ], 1) ]) ]) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__listtitle"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "zzap"
            }
        }, [ e._v('Gli "altri" Zzap!') ]) ], 1), e._v(" "), r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ e._v("Un numero di "), r("scroll-link", {
            attrs: {
                anchor: "zzap-retroedicola"
            }
        }, [ e._v("Zzap!") ]), e._v(" tutto nuovo creato dagli amici di Retroedicola Videoludica") ], 1) ]) ]) ]) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-826af616", i);
    }
}, /* 69 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(17);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(70);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/loader/loader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-7ea0cba2", u.options); else t.reload("data-v-7ea0cba2", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 70 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.payload ? r("section", {
            staticClass: "scans__loader"
        }, [ r("img", {
            staticClass: "scans__loader__image",
            attrs: {
                src: "img/c64_loader.gif"
            }
        }) ]) : e._e();
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-7ea0cba2", i);
    }
}, /* 71 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(18);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(74);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/reader/reader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-77f717a2", u.options); else t.reload("data-v-77f717a2", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 72 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(19);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(73);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/reader/reader-image.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-3db3e586", u.options); else t.reload("data-v-3db3e586", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 73 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        return (e._self._c || t)("img", {
            attrs: {
                src: e.path,
                alt: e.label,
                title: e.labelWithNavigationHint
            }
        });
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-3db3e586", i);
    }
}, /* 74 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.hasContent ? r("section", {
            class: e.getComponentClass()
        }, [ r("header", {
            staticClass: "reader__navigator"
        }, [ r("h2", {
            staticClass: "reader__info"
        }, [ e._v(e._s(e.title)) ]), e._v(" "), r("a", {
            staticClass: "reader__close",
            attrs: {
                title: "Chiudi (Esc)"
            },
            on: {
                click: e.close
            }
        }, [ r("img", {
            staticClass: "reader__closeicon",
            attrs: {
                src: "assets/icons/zoom-out.svg"
            }
        }) ]), e._v(" "), r("nav", {
            staticClass: "reader__navigation"
        }, [ r("ol", {
            staticClass: "reader__navigation-page-container"
        }, e._l(e.pages, function(t, n) {
            return r("li", {
                class: e.getNavigationClass(n)
            }, [ r("a", {
                on: {
                    click: function(t) {
                        e.actualPage = n;
                    }
                }
            }, [ r("img", {
                attrs: {
                    src: "assets/icons/paper-page.svg"
                }
            }) ]) ]);
        })) ]) ]), e._v(" "), r("div", {
            staticClass: "reader__content"
        }, [ e.hasPage("first") ? r("a", {
            staticClass: "reader__first",
            on: {
                click: e.previousPage
            }
        }, [ r("reader-image", {
            attrs: {
                path: e.pages[e.actualPage].first.path,
                label: e.pages[e.actualPage].first.label
            }
        }) ], 1) : e._e(), e._v(" "), e.hasPage("last") ? r("a", {
            staticClass: "reader__last",
            on: {
                click: e.nextPage
            }
        }, [ r("reader-image", {
            attrs: {
                path: e.pages[e.actualPage].last.path,
                label: e.pages[e.actualPage].last.label
            }
        }) ], 1) : e._e() ]) ]) : e._e();
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-77f717a2", i);
    }
}, /* 75 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(20);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(94);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/scanindex/scanindex.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-2db09ffb", u.options); else t.reload("data-v-2db09ffb", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 76 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    var a = r(22);
    var i = r(78);
    var o = r(8);
    /**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
    function s(e) {
        var t = new i(e);
        var r = a(i.prototype.request, t);
        // Copy axios.prototype to instance
        n.extend(r, i.prototype, t);
        // Copy context to instance
        n.extend(r, t);
        return r;
    }
    // Create the default instance to be exported
    var u = s(o);
    // Expose Axios class to allow class inheritance
    u.Axios = i;
    // Factory for creating new instances
    u.create = function(e) {
        return s(n.merge(o, e));
    };
    // Expose Cancel & CancelToken
    u.Cancel = r(26);
    u.CancelToken = r(92);
    u.isCancel = r(25);
    // Expose all/spread
    u.all = function(e) {
        return Promise.all(e);
    };
    u.spread = r(93);
    e.exports = u;
    // Allow use of default import syntax in TypeScript
    e.exports.default = u;
}, /* 77 */
/***/
function(e, t) {
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    e.exports = function(e) {
        return null != e && (r(e) || n(e) || !!e._isBuffer);
    };
    function r(e) {
        return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    // For Node v0.10 support. Remove this eventually.
    function n(e) {
        return "function" === typeof e.readFloatLE && "function" === typeof e.slice && r(e.slice(0, 0));
    }
}, /* 78 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(8);
    var a = r(2);
    var i = r(87);
    var o = r(88);
    /**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
    function s(e) {
        this.defaults = e;
        this.interceptors = {
            request: new i(),
            response: new i()
        };
    }
    /**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
    s.prototype.request = function(e) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if ("string" === typeof e) e = a.merge({
            url: arguments[0]
        }, arguments[1]);
        e = a.merge(n, this.defaults, {
            method: "get"
        }, e);
        e.method = e.method.toLowerCase();
        // Hook up interceptors middleware
        var t = [ o, void 0 ];
        var r = Promise.resolve(e);
        this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected);
        });
        this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected);
        });
        while (t.length) r = r.then(t.shift(), t.shift());
        return r;
    };
    // Provide aliases for supported request methods
    a.forEach([ "delete", "get", "head", "options" ], function(e) {
        /*eslint func-names:0*/
        s.prototype[e] = function(t, r) {
            return this.request(a.merge(r || {}, {
                method: e,
                url: t
            }));
        };
    });
    a.forEach([ "post", "put", "patch" ], function(e) {
        /*eslint func-names:0*/
        s.prototype[e] = function(t, r, n) {
            return this.request(a.merge(n || {}, {
                method: e,
                url: t,
                data: r
            }));
        };
    });
    e.exports = s;
}, /* 79 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t) {
        n.forEach(e, function(r, n) {
            if (n !== t && n.toUpperCase() === t.toUpperCase()) {
                e[t] = r;
                delete e[n];
            }
        });
    };
}, /* 80 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(24);
    /**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
    e.exports = function(e, t, r) {
        var a = r.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        if (!r.status || !a || a(r.status)) e(r); else t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
    };
}, /* 81 */
/***/
function(e, t, r) {
    "use strict";
    /**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
    e.exports = function(e, t, r, n, a) {
        e.config = t;
        if (r) e.code = r;
        e.request = n;
        e.response = a;
        return e;
    };
}, /* 82 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    function a(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    /**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
    e.exports = function(e, t, r) {
        /*eslint no-param-reassign:0*/
        if (!t) return e;
        var i;
        if (r) i = r(t); else if (n.isURLSearchParams(t)) i = t.toString(); else {
            var o = [];
            n.forEach(t, function(e, t) {
                if (null === e || "undefined" === typeof e) return;
                if (n.isArray(e)) t += "[]";
                if (!n.isArray(e)) e = [ e ];
                n.forEach(e, function(e) {
                    if (n.isDate(e)) e = e.toISOString(); else if (n.isObject(e)) e = JSON.stringify(e);
                    o.push(a(t) + "=" + a(e));
                });
            });
            i = o.join("&");
        }
        if (i) e += (-1 === e.indexOf("?") ? "?" : "&") + i;
        return e;
    };
}, /* 83 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var a = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
    e.exports = function(e) {
        var t = {};
        var r;
        var i;
        var o;
        if (!e) return t;
        n.forEach(e.split("\n"), function(e) {
            o = e.indexOf(":");
            r = n.trim(e.substr(0, o)).toLowerCase();
            i = n.trim(e.substr(o + 1));
            if (r) {
                if (t[r] && a.indexOf(r) >= 0) return;
                if ("set-cookie" === r) t[r] = (t[r] ? t[r] : []).concat([ i ]); else t[r] = t[r] ? t[r] + ", " + i : i;
            }
        });
        return t;
    };
}, /* 84 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
        var e = /(msie|trident)/i.test(navigator.userAgent);
        var t = document.createElement("a");
        var r;
        /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
        function a(r) {
            var n = r;
            if (e) {
                // IE needs attribute set twice to normalize properties
                t.setAttribute("href", n);
                n = t.href;
            }
            t.setAttribute("href", n);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
            };
        }
        r = a(window.location.href);
        /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
        return function(e) {
            var t = n.isString(e) ? a(e) : e;
            return t.protocol === r.protocol && t.host === r.host;
        };
    }() : // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
        return function() {
            return true;
        };
    }();
}, /* 85 */
/***/
function(e, t, r) {
    "use strict";
    // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function a() {
        this.message = "String contains an invalid character";
    }
    a.prototype = new Error();
    a.prototype.code = 5;
    a.prototype.name = "InvalidCharacterError";
    function i(e) {
        var t = String(e);
        var r = "";
        for (// initialize result and counter
        var i, o, s = 0, u = n; // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        t.charAt(0 | s) || (u = "=", s % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        r += u.charAt(63 & i >> 8 - s % 1 * 8)) {
            o = t.charCodeAt(s += .75);
            if (o > 255) throw new a();
            i = i << 8 | o;
        }
        return r;
    }
    e.exports = i;
}, /* 86 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
    function() {
        return {
            write: function(e, t, r, a, i, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t));
                if (n.isNumber(r)) s.push("expires=" + new Date(r).toGMTString());
                if (n.isString(a)) s.push("path=" + a);
                if (n.isString(i)) s.push("domain=" + i);
                if (true === o) s.push("secure");
                document.cookie = s.join("; ");
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        };
    }() : // Non standard browser env (web workers, react-native) lack needed support.
    function() {
        return {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    }();
}, /* 87 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    function a() {
        this.handlers = [];
    }
    /**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
    a.prototype.use = function(e, t) {
        this.handlers.push({
            fulfilled: e,
            rejected: t
        });
        return this.handlers.length - 1;
    };
    /**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
    a.prototype.eject = function(e) {
        if (this.handlers[e]) this.handlers[e] = null;
    };
    /**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
    a.prototype.forEach = function(e) {
        n.forEach(this.handlers, function(t) {
            if (null !== t) e(t);
        });
    };
    e.exports = a;
}, /* 88 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    var a = r(89);
    var i = r(25);
    var o = r(8);
    var s = r(90);
    var u = r(91);
    /**
 * Throws a `Cancel` if cancellation has been requested.
 */
    function l(e) {
        if (e.cancelToken) e.cancelToken.throwIfRequested();
    }
    /**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
    e.exports = function(e) {
        l(e);
        // Support baseURL config
        if (e.baseURL && !s(e.url)) e.url = u(e.baseURL, e.url);
        // Ensure headers exist
        e.headers = e.headers || {};
        // Transform request data
        e.data = a(e.data, e.headers, e.transformRequest);
        // Flatten headers
        e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {});
        n.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
            delete e.headers[t];
        });
        return (e.adapter || o.adapter)(e).then(function(t) {
            l(e);
            // Transform response data
            t.data = a(t.data, t.headers, e.transformResponse);
            return t;
        }, function(t) {
            if (!i(t)) {
                l(e);
                // Transform response data
                if (t && t.response) t.response.data = a(t.response.data, t.response.headers, e.transformResponse);
            }
            return Promise.reject(t);
        });
    };
}, /* 89 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(2);
    /**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
    e.exports = function(e, t, r) {
        /*eslint no-param-reassign:0*/
        n.forEach(r, function(r) {
            e = r(e, t);
        });
        return e;
    };
}, /* 90 */
/***/
function(e, t, r) {
    "use strict";
    /**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
    e.exports = function(e) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
}, /* 91 */
/***/
function(e, t, r) {
    "use strict";
    /**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
}, /* 92 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(26);
    /**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
    function a(e) {
        if ("function" !== typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e;
        });
        var r = this;
        e(function(e) {
            if (r.reason) // Cancellation has already been requested
            return;
            r.reason = new n(e);
            t(r.reason);
        });
    }
    /**
 * Throws a `Cancel` if cancellation has been requested.
 */
    a.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    };
    /**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
    a.source = function() {
        var e;
        return {
            token: new a(function(t) {
                e = t;
            }),
            cancel: e
        };
    };
    e.exports = a;
}, /* 93 */
/***/
function(e, t, r) {
    "use strict";
    /**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    };
}, /* 94 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "scanindex"
        }, [ r("h2", {
            staticClass: "scanindex__info"
        }, [ e._v("Scansioni") ]), e._v(" "), r("div", {
            staticClass: "scanindex__issues"
        }, [ e._l(e.paddingIssues, function(e) {
            return r("div", {
                staticClass: "scanindex__issue scanindex__issuepadding"
            }, [ r("span", {
                staticClass: "scanindex__link"
            }) ]);
        }), e._v(" "), e._l(e.magazine.issues, function(t) {
            return r("div", {
                staticClass: "scanindex__issue"
            }, [ r("a", {
                class: e.getLinkClass(t.id),
                on: {
                    click: function(r) {
                        e.selectIssue(t.id);
                    }
                }
            }, [ r("div", {
                staticClass: "scanindex__issueinfo"
            }, [ r("p", {
                staticClass: "scanindex__issueinfo__number"
            }, [ e._v(e._s(t.sequence)) ]), e._v(" "), r("p", {
                staticClass: "scanindex__issueinfo__date"
            }, [ r("span", {
                staticClass: "scanindex__issueinfo__month"
            }, [ e._v(e._s(t.month)) ]), e._v("/"), r("span", {
                staticClass: "scanindex__issueinfo__year"
            }, [ e._v(e._s(t.year)) ]) ]) ]), e._v(" "), r("img", {
                staticClass: "scanindex__image",
                attrs: {
                    src: e.buildCoverThumbPath(t),
                    srcset: e.buildRetinaCoverThumbPath(t)
                }
            }) ]) ]);
        }) ], 2) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-2db09ffb", i);
    }
}, /* 95 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(29);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(96);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/zzapheader/zzapheader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5c79b08f", u.options); else t.reload("data-v-5c79b08f", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 96 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("header", {
            staticClass: "header"
        }, [ r("h1", [ e._v("Zzap.it") ]), e._v(" "), r("div", {
            staticClass: "header__container"
        }, [ r("a", {
            on: {
                click: function(t) {
                    e.scrollToCover();
                }
            }
        }, [ r("img", {
            staticClass: "header__logo",
            attrs: {
                src: "assets/cover/zzap-logo.svg",
                alt: "Logo di Zzap!"
            }
        }) ]), e._v(" "), r("nav", {
            staticClass: "header__navigation"
        }, [ r("ul", {
            staticClass: "header__navigationlist"
        }, [ r("li", {
            staticClass: "header__navigationelement"
        }, [ r("a", {
            staticClass: "header__navigationlink",
            on: {
                click: function(t) {
                    e.scrollToClassWithDefaultOffset("index");
                }
            }
        }, [ e._v("Sommario") ]) ]), e._v(" "), r("li", {
            staticClass: "header__navigationelement"
        }, [ r("a", {
            staticClass: "header__navigationlink",
            on: {
                click: function(t) {
                    e.scrollToClassWithDefaultOffset("scanindex");
                }
            }
        }, [ e._v("Scansioni") ]) ]) ]), e._v(" "), e._m(0) ]) ]) ]);
    };
    var a = [ function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("ul", {
            staticClass: "header__sociallist"
        }, [ r("li", {
            staticClass: "header__socialelement"
        }, [ r("a", {
            staticClass: "header__sociallink",
            attrs: {
                href: "https://www.facebook.com/ProgettoZzapItalia"
            }
        }, [ r("img", {
            staticClass: "header__socialimage",
            attrs: {
                src: "assets/icons/social/facebook-logo.svg",
                alt: "Logo di Facebook"
            }
        }) ]) ]), e._v(" "), r("li", {
            staticClass: "header__socialelement"
        }, [ r("a", {
            staticClass: "header__sociallink",
            attrs: {
                href: "https://twitter.com/ZzapItalia"
            }
        }, [ r("img", {
            staticClass: "header__socialimage",
            attrs: {
                src: "assets/icons/social/twitter-logo.svg",
                alt: "Logo di Twitter"
            }
        }) ]) ]) ]);
    } ];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5c79b08f", i);
    }
}, /* 97 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(30);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(98);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/zzapfooter/zzapfooter.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-92518862", u.options); else t.reload("data-v-92518862", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 98 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("footer", {
            staticClass: "footer"
        }, [ r("p", [ e._v("Il Zzap.it è l'opera collettiva che ha\n    reso disponibili online tutte le scansioni della rivista\n    Zzap! "), r("scroll-link", {
            attrs: {
                anchor: "progetto-zzap-italia"
            }
        }, [ e._v("\n      Vuoi saperne di piú?\n    ") ]) ], 1), e._v(" "), e._m(0) ]);
    };
    var a = [ function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("nav", [ r("a", {
            attrs: {
                href: "progetto"
            }
        }, [ e._v("Il Progetto") ]), e._v(" "), r("a", {
            attrs: {
                href: "redazione"
            }
        }, [ e._v("Redazione") ]), e._v(" "), r("a", {
            attrs: {
                href: "rassegna-stampa"
            }
        }, [ e._v("Rassegna stampa") ]), e._v(" "), r("a", {
            attrs: {
                href: "note-legali"
            }
        }, [ e._v("Note legali") ]) ]);
    } ];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-92518862", i);
    }
}, /* 99 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = {
        overlay: "overlay"
    };
    t.CLASSES = n;
}, /* 100 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            class: e.homeClass
        }, [ r("loader", {
            attrs: {
                payload: ""
            }
        }), e._v(" "), r("reader", {
            attrs: {
                pages: e.readerData.pages,
                startPage: e.readerData.startPage,
                title: e.readerData.title,
                open: e.readerData.open,
                returnBookmark: e.readerData.returnBookmark
            },
            on: {
                closeReader: e.resetReader
            }
        }), e._v(" "), r("zzap-header"), e._v(" "), r("cover"), e._v(" "), r("index"), e._v(" "), r("scanindex", {
            attrs: {
                magazineId: "1"
            }
        }), e._v(" "), r("dynamic-navigation", {
            attrs: {
                sections: e.dynamicNavSections
            }
        }), e._v(" "), r("router-view", {
            attrs: {
                name: "issue",
                magazineId: "1"
            },
            on: {
                openReader: function(t) {
                    e.initReader(t);
                },
                announceBookmark: function(t) {
                    e.addDynamicNavSection(t);
                },
                dismissBookmark: function(t) {
                    e.removeDynamicNavSection(t);
                }
            }
        }), e._v(" "), r("router-view", {
            attrs: {
                name: "content"
            },
            on: {
                openReader: function(t) {
                    e.initReader(t);
                },
                announceBookmark: function(t) {
                    e.addDynamicNavSection(t);
                },
                dismissBookmark: function(t) {
                    e.removeDynamicNavSection(t);
                }
            }
        }), e._v(" "), r("router-view", {
            attrs: {
                name: "followup"
            },
            on: {
                openReader: function(t) {
                    e.initReader(t);
                },
                announceBookmark: function(t) {
                    e.addDynamicNavSection(t);
                },
                dismissBookmark: function(t) {
                    e.removeDynamicNavSection(t);
                }
            }
        }), e._v(" "), r("zzap-footer") ], 1);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-7c66a6a2", i);
    }
}, /* 101 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(31);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(106);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/scanissue/scanissue.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-67782c49", u.options); else t.reload("data-v-67782c49", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 102 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(32);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(103);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/scanissue/scanissue-info.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5f84ff3c", u.options); else t.reload("data-v-5f84ff3c", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 103 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "scanissue__info"
        }, [ r("h2", {
            staticClass: "scanissue__numberline"
        }, [ e._v("\n    Numero "), r("span", {
            staticClass: "scanissue__number"
        }, [ e._v(e._s(e.issueNumber)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__dateline"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/calendar.svg",
                alt: "calendario"
            }
        }), e._v(" "), r("span", {
            staticClass: "scanissue__month"
        }, [ e._v(e._s(e.issueMonth)) ]), e._v(" "), r("span", {
            staticClass: "scanissue__year"
        }, [ e._v(e._s(e.issueYear)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__editorline"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/edit.svg",
                alt: "matita"
            }
        }), e._v(" "), r("span", {
            staticClass: "scanissue__editor"
        }, [ e._v(e._s(e.issueEditor)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__contributorlabel"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/scanner.svg",
                alt: "scanner"
            }
        }), e._v("Scansioni di:\n    "), r("ul", {
            staticClass: "scanissue__contributorlist"
        }, e._l(e.contributors, function(t) {
            return r("li", {
                staticClass: "scanissue__contributor"
            }, [ r("a", {
                attrs: {
                    href: e.buildContributorPath(t.id)
                }
            }, [ e._v(e._s(t.name)) ]) ]);
        })) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5f84ff3c", i);
    }
}, /* 104 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = {
        it: [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ]
    };
    var a = {
        it: {
            issue: "numero"
        }
    };
    var i = {
        it: [ "Copertina", "Sommario", "Posta", "Top Secret", "Coin-op", "Adventure", "News", "Strategia", "Anteprima", // Insert new content types here
        "Quarta di copertina" ]
    };
    t.CONTENT_TYPES = i;
    t.MONTHS = n;
    t.TEXTS = a;
}, /* 105 */
/***/
function(e, t, r) {
    "use strict";
    e.exports.isEmptyObject = function(e) {
        return 0 === Object.keys(e).length && e.constructor === Object;
    };
}, /* 106 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.isIssueId ? r("section", {
            staticClass: "scanissue",
            on: {
                announceBookmark: function(t) {
                    e.announceBookmark(t);
                },
                dismissBookmark: function(t) {
                    e.dismissBookmark(t);
                }
            }
        }, [ r("div", {
            staticClass: "scanissue__content"
        }, [ r("div", {
            staticClass: "scanissue__doublepage"
        }, [ r("div", {
            staticClass: "scanissue__detaillink"
        }, [ r("scanissue-image", {
            attrs: {
                issueNumber: e.issue.sequence,
                issueMonth: e.getMonth(e.issue.month),
                issueYear: e.issue.year,
                issueEditor: e.issue.editor.name,
                contributors: e.issue.volumes[0].scan_authors
            }
        }), e._v(" "), r("a", {
            on: {
                click: function(t) {
                    e.openReader(e.issue.volumes[0].pages[0].sequence);
                }
            }
        }, [ r("img", {
            directives: [ {
                name: "lazy",
                rawName: "v-lazy",
                value: e.buildPageThumbPath(e.issue.volumes[0].pages[0].scan.path),
                expression: "buildPageThumbPath(issue.volumes[0].pages[0].scan.path)"
            } ],
            staticClass: "scanissue__page scanissue__cover scanissue__1"
        }) ]) ], 1) ]), e._v(" "), e._l(e.doublePages, function(t) {
            return r("div", {
                staticClass: "scanissue__doublepage"
            }, [ r("a", {
                staticClass: "scanissue__detaillink",
                on: {
                    click: function(r) {
                        e.openReader(e.issue.volumes[0].pages[t].sequence);
                    }
                }
            }, [ r("img", {
                directives: [ {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.buildPageThumbPath(e.issue.volumes[0].pages[t].scan.path),
                    expression: "buildPageThumbPath(issue.volumes[0].pages[page].scan.path)"
                } ],
                class: e.getContentClass(e.issue.volumes[0].pages[t])
            }), e._v(" "), r("img", {
                directives: [ {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.buildPageThumbPath(e.issue.volumes[0].pages[t + 1].scan.path),
                    expression: "buildPageThumbPath(issue.volumes[0].pages[page + 1].scan.path)"
                } ],
                class: e.getContentClass(e.issue.volumes[0].pages[t + 1])
            }) ]) ]);
        }), e._v(" "), r("div", {
            staticClass: "scanissue__doublepage"
        }, [ r("a", {
            staticClass: "scanissue__detaillink",
            on: {
                click: function(t) {
                    e.openReader(e.issue.volumes[0].pages[e.issue.volumes[0].pages.length - 1].sequence);
                }
            }
        }, [ r("img", {
            directives: [ {
                name: "lazy",
                rawName: "v-lazy",
                value: e.buildPageThumbPath(e.issue.volumes[0].pages[e.issue.volumes[0].pages.length - 1].scan.path),
                expression: "buildPageThumbPath(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].scan.path)"
            } ],
            staticClass: "scanissue__page scanissue__backcover",
            class: e.getContentClass(e.issue.volumes[0].pages[e.issue.volumes[0].pages.length - 1])
        }) ]) ]) ], 2) ]) : e._e();
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-67782c49", i);
    }
}, /* 107 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(33);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(111);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/content/diari/diari.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-11e81361", u.options); else t.reload("data-v-11e81361", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 108 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            class: e.componentClass
        }, [ e.date ? r("span", {
            staticClass: "content__date"
        }, [ e._v(e._s(e.date)) ]) : e._e(), e._v(" "), r("h2", [ e._v(e._s(e.title)) ]), e._v(" "), r("div", {
            staticClass: "content__container"
        }, [ e._t("default") ], 2) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-3924d062", i);
    }
}, /* 109 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "content__section"
        }, [ e.title ? r("h3", {
            staticClass: "content__title"
        }, [ e._v(e._s(e.title)) ]) : e._e(), e._v(" "), e._t("default") ], 2);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5fac450f", i);
    }
}, /* 110 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("figure", {
            class: e.fullStyle
        }, [ e.linkUrl ? r("a", {
            attrs: {
                href: e.linkUrl
            }
        }, [ r("img", {
            attrs: {
                src: e.imagePath,
                srcset: e.srcset
            }
        }) ]) : e.readerData ? r("a", {
            on: {
                click: e.openReader
            }
        }, [ r("img", {
            attrs: {
                src: e.imagePath,
                srcset: e.srcset
            }
        }) ]) : r("img", {
            attrs: {
                src: e.imagePath,
                srcset: e.srcset
            }
        }), e._v(" "), e.caption ? r("figcaption", [ e._v(e._s(e.caption)) ]) : e._e() ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-c99984e2", i);
    }
}, /* 111 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("content-container", {
            attrs: {
                title: "I diari dei programmatori",
                anchor: "diari"
            },
            on: {
                announceBookmark: function(t) {
                    e.announceBookmark(t);
                },
                dismissBookmark: function(t) {
                    e.dismissBookmark(t);
                }
            }
        }, [ r("ul", [ r("li", [ e._v("Anche il nuovo sito di Zzap.it ha il suo diario.\n      "), r("scroll-link", {
            attrs: {
                anchor: "diari-zzap"
            }
        }, [ e._v('"Il mio galeone", di Toni Bianchetti') ]) ], 1) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-11e81361", i);
    }
}, /* 112 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(39);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(113);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/content/speciali/speciali.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5b170a8e", u.options); else t.reload("data-v-5b170a8e", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 113 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("content-container", {
            attrs: {
                title: "Speciali",
                anchor: "speciali"
            },
            on: {
                announceBookmark: function(t) {
                    e.announceBookmark(t);
                },
                dismissBookmark: function(t) {
                    e.dismissBookmark(t);
                }
            }
        }, [ r("ul", [ r("li", [ e._v('Un mega articolone storico di Paolo Besser scritto in occasione della temporanea\n      "rinascita" di Zzap! sul web nel 1996.\n      '), r("scroll-link", {
            attrs: {
                anchor: "speciali-leabbiamovistetutte"
            }
        }, [ e._v('"Le abbiamo viste tutte"') ]) ], 1), e._v(" "), r("li", [ e._v("Un sogno mai realizzato: il "), r("scroll-link", {
            attrs: {
                anchor: "speciali-konixmultisystem"
            }
        }, [ e._v("Konix Multisystem") ]) ], 1), e._v(" "), r("li", [ e._v("Che fine ha fatto la "), r("scroll-link", {
            attrs: {
                anchor: "speciali-elitesystems"
            }
        }, [ e._v("Elite Systems") ]), e._v("?") ], 1), e._v(" "), r("li", [ r("scroll-link", {
            attrs: {
                anchor: "speciali-bovabyte"
            }
        }, [ e._v("Bovabyte") ]), e._v(", la rivista per chi di computer non ci capisce niente") ], 1) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5b170a8e", i);
    }
}, /* 114 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(40);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(115);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/content/zzap/zzap.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-1a42a0ce", u.options); else t.reload("data-v-1a42a0ce", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 115 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("content-container", {
            attrs: {
                title: 'Gli "altri" Zzap!',
                anchor: "zzap"
            },
            on: {
                announceBookmark: function(t) {
                    e.announceBookmark(t);
                },
                dismissBookmark: function(t) {
                    e.dismissBookmark(t);
                }
            }
        }, [ r("ul", [ r("li", [ e._v("Un numero di "), r("scroll-link", {
            attrs: {
                anchor: "zzap-retroedicola"
            }
        }, [ e._v("Zzap! tutto nuovo") ]), e._v(" creato dagli amici di Retroedicola Videoludica") ], 1) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-1a42a0ce", i);
    }
}, /* 116 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(41);
    /* harmony import */
    var a = r.n(n);
    /* harmony import */
    var i = r(117);
    var o = false;
    var s = r(0);
    var u = s(a.a, i["a"], false, null, null, null);
    u.options.__file = "src/components/content/mappe/mappe.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-60bc8fc6", u.options); else t.reload("data-v-60bc8fc6", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 117 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("content-container", {
            attrs: {
                title: "Mappe",
                anchor: "mappe"
            },
            on: {
                announceBookmark: function(t) {
                    e.announceBookmark(t);
                },
                dismissBookmark: function(t) {
                    e.dismissBookmark(t);
                }
            }
        }, [ r("p", [ e._v("Siamo orgogliosi di proporvi una raccolta di mappe inedite, prodotte esclusivamente per Zzap.it") ]), e._v(" "), r("ul", [ r("li", [ e._v("Gettare scompiglio saltellando per la giungla non è mai stato cosí facile con la mappa, enorme, di "), r("scroll-link", {
            attrs: {
                anchor: "mappe-jackthenipper2"
            }
        }, [ e._v('"Jack the nipper 2: in coconut capers"') ]) ], 1), e._v(" "), r("li", [ e._v("Esploriamo le cittá robotiche di "), r("scroll-link", {
            attrs: {
                anchor: "mappe-citadel"
            }
        }, [ e._v("Citadel") ]), e._v(", uno dei giochi piú anticipati della storia si Zzap!") ], 1) ]) ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-60bc8fc6", i);
    }
}, /* 118 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(119);
    var a = false;
    var i = r(0);
    var o = i(null, n["a"], false, null, null, null);
    o.options.__file = "src/components/notfoundcomponent/notfoundcomponent.vue";
    if (o.esModule && Object.keys(o.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-0b20766d", o.options); else t.reload("data-v-0b20766d", o.options);
        e.hot.dispose(function(e) {
            a = true;
        });
    }();
    /* harmony default export */
    t["default"] = o.exports;
}, /* 119 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        return (e._self._c || t)("p", [ e._v("Not found") ]);
    };
    var a = [];
    n._withStripped = true;
    var i = {
        render: n,
        staticRenderFns: a
    };
    /* harmony default export */
    t["a"] = i;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-0b20766d", i);
    }
}, /* 120 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.addLeftPadding = function(e, t, r) {
        var n = e.toString();
        while (n.length < r) n = "" + t + n;
        return n;
    };
}, /* 121 */
/***/
function(e, t, r) {
    var n = {
        "./content/basecontent.js": 1,
        "./content/diari/diari.js": 33,
        "./content/diari/pages/zzap.js": 42,
        "./content/mappe/mappe.js": 41,
        "./content/mappe/pages/citadel.js": 47,
        "./content/mappe/pages/jackthenipper2.js": 48,
        "./content/speciali/pages/bovabyte.js": 46,
        "./content/speciali/pages/elitesystems.js": 45,
        "./content/speciali/pages/konixmultisystem.js": 44,
        "./content/speciali/pages/leabbiamovistetutte.js": 43,
        "./content/speciali/speciali.js": 39,
        "./content/zzap/pages/retroedicola.js": 50,
        "./content/zzap/zzap.js": 40,
        "./contentcontainer/contentcontainer.js": 7,
        "./contentimage/contentimage.js": 38,
        "./contentsection/contentsection.js": 36,
        "./cover/cover.js": 12,
        "./demo/content/image.js": 49,
        "./dynamicnavigation/dynamicnavigation.js": 15,
        "./home/home.js": 11,
        "./index/index.js": 16,
        "./loader/loader.js": 17,
        "./reader/reader-image.js": 19,
        "./reader/reader.js": 18,
        "./scanindex/scanindex.js": 20,
        "./scanissue/scanissue-info.js": 32,
        "./scanissue/scanissue.js": 31,
        "./scrolllink/scrolllink.js": 13,
        "./zzapfooter/zzapfooter.js": 30,
        "./zzapheader/zzapheader.js": 29
    };
    function a(e) {
        return r(i(e));
    }
    function i(e) {
        var t = n[e];
        if (!(t + 1)) // check for number or string
        throw new Error("Cannot find module '" + e + "'.");
        return t;
    }
    a.keys = function() {
        return Object.keys(n);
    };
    a.resolve = i;
    e.exports = a;
    a.id = 121;
} ], [ 51 ]);