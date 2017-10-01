webpackJsonp([ 4 ], [ /* 0 */
/***/
function(e, t) {
    /* globals __VUE_SSR_CONTEXT__ */
    // this module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle
    e.exports = function(e, t, r, n, i) {
        var a;
        var o = e = e || {};
        // ES6 modules interop
        var s = typeof e.default;
        if ("object" === s || "function" === s) {
            a = e;
            o = e.default;
        }
        // Vue.extend constructor export interop
        var u = "function" === typeof o ? o.options : o;
        // render functions
        if (t) {
            u.render = t.render;
            u.staticRenderFns = t.staticRenderFns;
        }
        // scopedId
        if (n) u._scopeId = n;
        var l;
        if (i) {
            // server build
            l = function(e) {
                // 2.3 injection
                e = e || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                // functional
                // 2.2 with runInNewContext: true
                if (!e && "undefined" !== typeof __VUE_SSR_CONTEXT__) e = __VUE_SSR_CONTEXT__;
                // inject component styles
                if (r) r.call(this, e);
                // register component module identifier for async chunk inferrence
                if (e && e._registeredComponents) e._registeredComponents.add(i);
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            u._ssrRegister = l;
        } else if (r) l = r;
        if (l) {
            var c = u.functional;
            var f = c ? u.render : u.beforeCreate;
            if (!c) // inject component registration as beforeCreate hook
            u.beforeCreate = f ? [].concat(f, l) : [ l ]; else // register for functioal component in vue file
            u.render = function(e, t) {
                l.call(t);
                return f(e, t);
            };
        }
        return {
            esModule: a,
            exports: o,
            options: u
        };
    };
}, /* 1 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(19);
    var i = r(64);
    /*global toString:true*/
    // utils is a library of generic helper functions non-specific to axios
    var a = Object.prototype.toString;
    /**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
    function o(e) {
        return "[object Array]" === a.call(e);
    }
    /**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
    function s(e) {
        return "[object ArrayBuffer]" === a.call(e);
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
        return "[object Date]" === a.call(e);
    }
    /**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
    function h(e) {
        return "[object File]" === a.call(e);
    }
    /**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
    function m(e) {
        return "[object Blob]" === a.call(e);
    }
    /**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
    function _(e) {
        return "[object Function]" === a.call(e);
    }
    /**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
    function y(e) {
        return p(e) && _(e.pipe);
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
    function C(e, t) {
        // Don't bother if no value provided
        if (null === e || "undefined" === typeof e) return;
        // Force an array if not already something iterable
        if ("object" !== typeof e && !o(e)) /*eslint no-param-reassign:0*/
        e = [ e ];
        if (o(e)) // Iterate over array values
        for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e); else // Iterate over object keys
        for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) t.call(null, e[i], i, e);
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
    function x() {
        var e = {};
        function t(t, r) {
            if ("object" === typeof e[r] && "object" === typeof t) e[r] = x(e[r], t); else e[r] = t;
        }
        for (var r = 0, n = arguments.length; r < n; r++) C(arguments[r], t);
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
    function k(e, t, r) {
        C(t, function(t, i) {
            if (r && "function" === typeof t) e[i] = n(t, r); else e[i] = t;
        });
        return e;
    }
    e.exports = {
        isArray: o,
        isArrayBuffer: s,
        isBuffer: i,
        isFormData: u,
        isArrayBufferView: l,
        isString: c,
        isNumber: f,
        isObject: p,
        isUndefined: d,
        isDate: v,
        isFile: h,
        isBlob: m,
        isFunction: _,
        isStream: y,
        isURLSearchParams: g,
        isStandardBrowserEnv: w,
        forEach: C,
        merge: x,
        extend: k,
        trim: b
    };
}, /* 2 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = "smooth";
    var i = 55;
    function a(e, t) {
        var r = document.querySelector("." + e);
        if (null !== r) {
            if ("undefined" !== typeof t) window.scroll({
                top: r.offsetTop - t,
                left: 0,
                behavior: n
            }); else r.scrollIntoView({
                behavior: n
            });
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }
    function o(e) {
        a(e, i);
    }
    t.scrollToClass = a;
    t.scrollToClassWithDefaultOffset = o;
}, /* 3 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(6);
    var i = p(n);
    var a = r(29);
    var o = p(a);
    var s = r(30);
    var u = p(s);
    var l = r(32);
    var c = p(l);
    var f = r(5);
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
                this.$emit(i.default.announceBookmark, e);
            },
            dismissBookmark: function(e) {
                this.$emit(i.default.dismissBookmark, e);
            }
        }
    };
}, /* 4 */
/***/
function(e, t, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty;
    var i = Object.prototype.toString;
    var a = function(e) {
        if ("function" === typeof Array.isArray) return Array.isArray(e);
        return "[object Array]" === i.call(e);
    };
    var o = function(e) {
        if (!e || "[object Object]" !== i.call(e)) return false;
        var t = n.call(e, "constructor");
        var r = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
        // Not own constructor property must be Object
        if (e.constructor && !t && !r) return false;
        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var a;
        for (a in e) ;
        return "undefined" === typeof a || n.call(e, a);
    };
    e.exports = function e() {
        var t, r, n, i, s, u;
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
                i = t[r];
                // Prevent never-ending loop
                if (l !== i) // Recurse if we're merging plain objects or arrays
                if (d && i && (o(i) || (s = a(i)))) {
                    if (s) {
                        s = false;
                        u = n && a(n) ? n : [];
                    } else u = n && o(n) ? n : {};
                    // Never move original objects, clone them
                    l[r] = e(d, u, i);
                } else if ("undefined" !== typeof i) l[r] = i;
            }
        }
        // Return the modified object
        return l;
    };
}, /* 5 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(11);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(52);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/scrolllink/scrolllink.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] scrolllink.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-f5cce476", u.options); else t.reload("data-v-f5cce476", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 6 */
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
}, /* 7 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.CLASS_NAME = void 0;
    var n = r(6);
    var i = u(n);
    var a = r(12);
    var o = u(a);
    var s = r(2);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "content-container",
        props: [ "title", "anchor" ],
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
                e.$emit(i.default.announceBookmark, [ {
                    title: e.title,
                    anchor: e.anchor,
                    target: "content"
                } ]);
            }, o.default.bookmarkCloseDelay);
        },
        beforeDestroy: function() {
            this.$emit(i.default.dismissBookmark, [ this.anchor ]);
        }
    };
    t.CLASS_NAME = "content";
}, /* 8 */
/***/
function(e, t, r) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    (function(t) {
        var n = r(1);
        var i = r(67);
        var a = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function o(e, t) {
            if (!n.isUndefined(e) && n.isUndefined(e["Content-Type"])) e["Content-Type"] = t;
        }
        var s = {
            adapter: function() {
                var e;
                if ("undefined" !== typeof XMLHttpRequest) // For browsers use XHR adapter
                e = r(20); else if ("undefined" !== typeof t) // For node use HTTP adapter
                e = r(20);
                return e;
            }(),
            transformRequest: [ function(e, t) {
                i(t, "Content-Type");
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
            s.headers[e] = n.merge(a);
        });
        e.exports = s;
    }).call(t, r(66));
}, /* 9 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(49);
    var i = b(n);
    var a = r(51);
    var o = b(a);
    var s = r(54);
    var u = b(s);
    var l = r(56);
    var c = b(l);
    var f = r(58);
    var d = b(f);
    var p = r(62);
    var v = b(p);
    var h = r(83);
    var m = b(h);
    var _ = r(85);
    var y = b(_);
    var g = r(87);
    function b(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "home",
        components: {
            Cover: i.default,
            DynamicNavigation: o.default,
            Index: u.default,
            Loader: c.default,
            Reader: d.default,
            Scanindex: v.default,
            ZzapHeader: m.default,
            ZzapFooter: y.default
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
                this.readerData = {};
                this.homeClass = "home";
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
}, /* 10 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    t.default = {
        name: "dynamic-navigation",
        props: [ "sections" ],
        components: {
            ScrollLink: i.default
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
}, /* 11 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(2);
    var i = r(7);
    t.default = {
        name: "scroll-link",
        props: {
            anchor: {
                type: String,
                required: true
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
                linkTarget: i.CLASS_NAME
            };
        },
        methods: {
            scrollToAnchor: function() {
                (0, n.scrollToClassWithDefaultOffset)(this.linkTarget + "__" + this.anchor);
            }
        },
        mounted: function() {
            if ("undefined" !== typeof this.target) this.linkTarget = this.target;
        }
    };
}, /* 12 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.default = {
        bookmarkCloseDelay: 500
    };
}, /* 13 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    t.default = {
        components: {
            ScrollLink: i.default
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
        name: "loader",
        props: [ "payload" ]
    };
}, /* 15 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(59);
    var i = u(n);
    var a = r(6);
    var o = u(a);
    var s = r(2);
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var l = {
        esc: 27,
        left: 37,
        right: 39
    };
    t.default = {
        name: "reader",
        props: [ "pages", "startPage", "title" ],
        components: {
            ReaderImage: i.default
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
                  case l.esc:
                    this.close();
                    e.preventDefault();
                    break;

                  case l.left:
                    this.previousPage();
                    e.preventDefault();
                    break;

                  case l.right:
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
                (0, s.scrollToClassWithDefaultOffset)("scanissue");
            },
            hasPage: function(e) {
                return this.doesPageExist(this.actualPage) && "undefined" !== typeof this.pages[this.actualPage][e];
            }
        },
        beforeMount: function() {
            this.initActualPage(this.startPage);
        },
        beforeUpdate: function() {
            this.initActualPage(this.startPage);
        }
    };
}, /* 16 */
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
                navigationHint: "Premi per sfogliare"
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
}, /* 17 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(18);
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    var a = r(24);
    var o = r(2);
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
                i.default.get(a.ENTITIES.magazine(this.magazineId)).then(function(t) {
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
                return "/img/issue_selector/" + this.magazineName + "/" + e.sequence + ".jpg";
            }
        },
        mounted: function() {
            this.loadMagazine();
        }
    };
}, /* 18 */
/***/
function(e, t, r) {
    e.exports = r(63);
}, /* 19 */
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
}, /* 20 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    var i = r(68);
    var a = r(70);
    var o = r(71);
    var s = r(72);
    var u = r(21);
    var l = "undefined" !== typeof window && window.btoa && window.btoa.bind(window) || r(73);
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
                var _ = e.auth.password || "";
                d.Authorization = "Basic " + l(m + ":" + _);
            }
            p.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), true);
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
                var a = {
                    data: n,
                    // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
                    status: 1223 === p.status ? 204 : p.status,
                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                    headers: r,
                    config: e,
                    request: p
                };
                i(t, c, a);
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
                var y = r(74);
                // Add xsrf header
                var g = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
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
}, /* 21 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(69);
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
    e.exports = function(e, t, r, i, a) {
        var o = new Error(e);
        return n(o, t, r, i, a);
    };
}, /* 22 */
/***/
function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !!(e && e.__CANCEL__);
    };
}, /* 23 */
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
}, /* 24 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = {
        issue: function(e, t) {
            return "api/v1/magazine/" + e + "/issue/" + t;
        },
        magazine: function(e) {
            return "api/v1/magazine/" + e;
        }
    };
    t.ENTITIES = n;
}, /* 25 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(2);
    // A component can't be named as an HTML tag
    var i = "header";
    t.default = {
        name: "zzap-header",
        methods: {
            scrollToClass: function(e) {
                (0, n.scrollToClass)(e);
            },
            scrollToClassWithDefaultOffset: function(e) {
                (0, n.scrollToClassWithDefaultOffset)(e);
            },
            initScroll: function() {
                var e = document.querySelector("." + i + "__logo");
                var t = i + "--compact";
                var r = document.querySelector("." + i);
                var n = .3;
                var a = 900;
                var o = 250;
                var s = -1;
                var u = -1;
                function l() {
                    var c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    if (s === window.pageYOffset && u === c) requestAnimationFrame(l); else {
                        s = window.pageYOffset;
                        u = c;
                        var f = window.pageYOffset || document.documentElement.scrollTop;
                        if (f >= 0) {
                            var d = Math.min(c, a);
                            if (f > o / a * d) {
                                r.className = i + " " + t;
                                e.style.transform = "scale(" + n + ")";
                            } else {
                                var p = d / o;
                                var v = Math.max(n, 1 - f / 100 / p);
                                e.style.transform = "scale(" + v + ")";
                                r.className = i;
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
}, /* 26 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(5);
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n);
    // A component can't be named as an HTML tag
    t.default = {
        name: "zzap-footer",
        components: {
            ScrollLink: i.default
        }
    };
}, /* 27 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(18);
    var i = v(n);
    var a = r(6);
    var o = v(a);
    var s = r(12);
    var u = v(s);
    var l = r(90);
    var c = r(24);
    var f = r(91);
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
    var p = r(2);
    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        name: "scanissue",
        props: [ "magazineId", "issueId" ],
        data: function() {
            return {
                issue: {},
                readerData: {},
                doublePagesCache: [],
                errors: []
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
                return !(0, l.isEmptyObject)(this.issue);
            },
            doublePages: function() {
                if (0 === this.doublePagesCache.length) {
                    var e = [];
                    if (this.isIssueId) for (var t = 1; t < this.issue.volumes[0].pages.length - 1; t += 2) e.push(t);
                    this.doublePagesCache = e;
                }
                return this.doublePagesCache;
            }
        },
        methods: {
            loadIssue: function(e) {
                var t = this;
                if ("" !== e) i.default.get(c.ENTITIES.issue(this.magazineId, this.issueId)).then(function(e) {
                    t.issue = e.data;
                }).catch(function(e) {
                    return t.errors.push(e);
                });
            },
            buildPageThumbPath: function(e) {
                var t = this.addLeftPadding(e, "0", 2);
                return "/img/thumbs/zzap/" + this.issue.id + "/" + t + ".jpg";
            },
            buildScanPath: function(e) {
                var t = this.addLeftPadding(e, "0", 2);
                return "/zzap/" + this.issue.id + "/" + t + ".jpg";
            },
            buildContributorPath: function(e) {
                return "/contributor/" + e;
            },
            addLeftPadding: function(e, t, r) {
                var n = e.toString();
                while (n.length < r) n = "" + t + n;
                return n;
            },
            getMonth: function(e) {
                return d.MONTHS.it[e];
            },
            getReaderData: function(e) {
                if ((0, l.isEmptyObject)(this.readerData)) {
                    var t = {};
                    var r = this.getMonth(this.issue.month) + " " + this.issue.year;
                    t.title = this.issue.magazine.name + " numero " + this.issue.sequence + " - " + r;
                    t.pages = [];
                    // Cover
                    t.pages.push(this.buildDoublePageForReader(void 0, this.issue.volumes[0].pages[0].label));
                    // Spreads
                    this.doublePages.forEach(function(e) {
                        t.pages.push(this.buildDoublePageForReader(this.issue.volumes[0].pages[+e].label, this.issue.volumes[0].pages[+e + 1].label));
                    }, this);
                    // Back cover
                    t.pages.push(this.buildDoublePageForReader(this.issue.volumes[0].pages[this.issue.volumes[0].pages.length - 1].label, void 0));
                    this.readerData = t;
                }
                this.readerData.startPage = Math.floor(+e / 2);
                return this.readerData;
            },
            buildDoublePageForReader: function(e, t) {
                var r = {};
                if ("undefined" !== typeof e) r.first = {
                    label: e,
                    path: this.buildScanPath(e)
                };
                if ("undefined" !== typeof t) r.last = {
                    label: t,
                    path: this.buildScanPath(t)
                };
                return r;
            },
            openReader: function(e) {
                this.$emit(o.default.openReader, this.getReaderData(e));
            },
            getContentClass: function(e) {
                var t = [ "page" ];
                if (e.content.length > 0) e.content.forEach(function(e) {
                    t.push("content-type-" + e.content_type_id);
                });
                return t.map(function(e) {
                    return "scanissue__" + e;
                }).join(" ");
            }
        },
        updated: function() {
            (0, p.scrollToClassWithDefaultOffset)("scanissue");
        },
        mounted: function() {
            var e = this;
            this.loadIssue(this.issueId);
            (0, p.scrollToClassWithDefaultOffset)("scanissue");
            // Gives time to destroyed pages to close their bookmarks
            window.setTimeout(function() {
                e.$emit(o.default.announceBookmark, [ {
                    title: "Copertina",
                    anchor: "cover",
                    target: "scanissue"
                }, {
                    title: "Sommario",
                    anchor: "content-type-1",
                    target: "scanissue"
                } ]);
            }, u.default.bookmarkCloseDelay);
        },
        beforeDestroy: function() {
            this.$emit(o.default.dismissBookmark, [ "cover", "content-type-1" ]);
        }
    };
}, /* 28 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var i = s(n);
    var a = r(3);
    var o = s(a);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, i.default)(true, {}, o.default);
}, /* 29 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(7);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(94);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/contentcontainer/contentcontainer.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] contentcontainer.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-6c0b2e36", u.options); else t.reload("data-v-6c0b2e36", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 30 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(31);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(95);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/contentsection/contentsection.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] contentsection.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-8f6dddb6", u.options); else t.reload("data-v-8f6dddb6", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 31 */
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
}, /* 32 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(33);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(96);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/contentimage/contentimage.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] contentimage.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-69d4f6b6", u.options); else t.reload("data-v-69d4f6b6", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 33 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /**
 * align: left | right
 * rotation: cw, cc
 */
    t.default = {
        name: "content__image",
        props: [ "imagePath", "linkUrl", "caption", "align", "rotation" ],
        computed: {
            fullStyle: function() {
                var e = [];
                var t = "content__image";
                e.push(t);
                if ("undefined" !== typeof this.linkUrl) e.push(t + "-link");
                if ("undefined" !== typeof this.align) e.push(t + "-" + this.align);
                if ("undefined" !== typeof this.rotation) e.push(t + "-" + this.rotation);
                return e.join(" ");
            }
        }
    };
}, /* 34 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var i = s(n);
    var a = r(3);
    var o = s(a);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, i.default)(true, {}, o.default);
}, /* 35 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var i = s(n);
    var a = r(3);
    var o = s(a);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, i.default)(true, {}, o.default);
}, /* 36 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var i = s(n);
    var a = r(3);
    var o = s(a);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, i.default)(true, {}, o.default);
}, /* 37 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(4);
    var i = s(n);
    var a = r(3);
    var o = s(a);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = (0, i.default)(true, {}, o.default);
}, /* 38 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = r(29);
    var i = l(n);
    var a = r(30);
    var o = l(a);
    var s = r(32);
    var u = l(s);
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = {
        components: {
            ContentContainer: i.default,
            ContentSection: o.default,
            ContentImage: u.default
        }
    };
}, /* 39 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(40);
    var i = v(n);
    var a = r(42);
    var o = v(a);
    var s = r(43);
    var u = v(s);
    var l = r(44);
    var c = v(l);
    var f = r(45);
    var d = v(f);
    var p = r(47);
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
    i.default.config.productionTip = false;
    i.default.use(o.default);
    i.default.use(u.default);
    // eslint-disable-next-line no-unused-vars
    new i.default({
        el: ".vueroot",
        router: h,
        render: function(e) {
            return e(d.default);
        }
    });
    // Include all *.js files in the "components" folder but exclude .test files
    var m = r(102);
    m.keys().forEach(m);
}, /* 40 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* WEBPACK VAR INJECTION */
    (function(e) {
        /*!
 * Vue.js v2.4.4
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
        /*  */
        // these helpers produces better vm code in JS engines due to their
        // explicitness and function inlining
        function r(e) {
            return void 0 === e || null === e;
        }
        function n(e) {
            return void 0 !== e && null !== e;
        }
        function i(e) {
            return true === e;
        }
        function a(e) {
            return false === e;
        }
        /**
 * Check if value is primitive
 */
        function o(e) {
            return "string" === typeof e || "number" === typeof e || "boolean" === typeof e;
        }
        /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
        function s(e) {
            return null !== e && "object" === typeof e;
        }
        var u = Object.prototype.toString;
        /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
        function l(e) {
            return "[object Object]" === u.call(e);
        }
        function c(e) {
            return "[object RegExp]" === u.call(e);
        }
        /**
 * Check if val is a valid array index.
 */
        function f(e) {
            var t = parseFloat(e);
            return t >= 0 && Math.floor(t) === t && isFinite(e);
        }
        /**
 * Convert a value to a string that is actually rendered.
 */
        function d(e) {
            return null == e ? "" : "object" === typeof e ? JSON.stringify(e, null, 2) : String(e);
        }
        /**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
        function p(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t;
        }
        /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
        function v(e, t) {
            var r = Object.create(null);
            var n = e.split(",");
            for (var i = 0; i < n.length; i++) r[n[i]] = true;
            return t ? function(e) {
                return r[e.toLowerCase()];
            } : function(e) {
                return r[e];
            };
        }
        /**
 * Check if a tag is a built-in tag.
 */
        var h = v("slot,component", true);
        /**
 * Check if a attribute is a reserved attribute.
 */
        var m = v("key,ref,slot,is");
        /**
 * Remove an item from an array
 */
        function _(e, t) {
            if (e.length) {
                var r = e.indexOf(t);
                if (r > -1) return e.splice(r, 1);
            }
        }
        /**
 * Check whether the object has the property.
 */
        var y = Object.prototype.hasOwnProperty;
        function g(e, t) {
            return y.call(e, t);
        }
        /**
 * Create a cached version of a pure function.
 */
        function b(e) {
            var t = Object.create(null);
            return function(r) {
                return t[r] || (t[r] = e(r));
            };
        }
        /**
 * Camelize a hyphen-delimited string.
 */
        var w = /-(\w)/g;
        var C = b(function(e) {
            return e.replace(w, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        });
        /**
 * Capitalize a string.
 */
        var x = b(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        });
        /**
 * Hyphenate a camelCase string.
 */
        var k = /\B([A-Z])/g;
        var O = b(function(e) {
            return e.replace(k, "-$1").toLowerCase();
        });
        /**
 * Simple bind, faster than native
 */
        function A(e, t) {
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
        function E(e, t) {
            t = t || 0;
            var r = e.length - t;
            var n = new Array(r);
            while (r--) n[r] = e[r + t];
            return n;
        }
        /**
 * Mix properties into target object.
 */
        function $(e, t) {
            for (var r in t) e[r] = t[r];
            return e;
        }
        /**
 * Merge an Array of Objects into a single Object.
 */
        function j(e) {
            var t = {};
            for (var r = 0; r < e.length; r++) if (e[r]) $(t, e[r]);
            return t;
        }
        /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
        function S(e, t, r) {}
        /**
 * Always return false.
 */
        var T = function(e, t, r) {
            return false;
        };
        /**
 * Return same value
 */
        var P = function(e) {
            return e;
        };
        /**
 * Generate a static keys string from compiler modules.
 */
        /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
        function M(e, t) {
            if (e === t) return true;
            var r = s(e);
            var n = s(t);
            if (r && n) try {
                var i = Array.isArray(e);
                var a = Array.isArray(t);
                if (i && a) return e.length === t.length && e.every(function(e, r) {
                    return M(e, t[r]);
                }); else if (!i && !a) {
                    var o = Object.keys(e);
                    var u = Object.keys(t);
                    return o.length === u.length && o.every(function(r) {
                        return M(e[r], t[r]);
                    });
                } else /* istanbul ignore next */
                return false;
            } catch (e) {
                /* istanbul ignore next */
                return false;
            } else if (!r && !n) return String(e) === String(t); else return false;
        }
        function L(e, t) {
            for (var r = 0; r < e.length; r++) if (M(e[r], t)) return r;
            return -1;
        }
        /**
 * Ensure a function is called only once.
 */
        function R(e) {
            var t = false;
            return function() {
                if (!t) {
                    t = true;
                    e.apply(this, arguments);
                }
            };
        }
        var I = "data-server-rendered";
        var D = [ "component", "directive", "filter" ];
        var z = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated" ];
        /*  */
        var N = {
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
            isReservedTag: T,
            /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
            isReservedAttr: T,
            /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
            isUnknownElement: T,
            /**
   * Get the namespace of an element
   */
            getTagNamespace: S,
            /**
   * Parse the real tag name for the specific platform.
   */
            parsePlatformTagName: P,
            /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
            mustUseProp: T,
            /**
   * Exposed for legacy reasons
   */
            _lifecycleHooks: z
        };
        /*  */
        var q = Object.freeze({});
        /**
 * Check if a string starts with $ or _
 */
        function B(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t;
        }
        /**
 * Define a property.
 */
        function F(e, t, r, n) {
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
        var U = /[^\w.$]/;
        function H(e) {
            if (U.test(e)) return;
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
        var V = S;
        var W = S;
        var Q = null;
        // work around flow check
        if (true) {
            var X = "undefined" !== typeof console;
            var Y = /(?:^|[-_])(\w)/g;
            var K = function(e) {
                return e.replace(Y, function(e) {
                    return e.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            V = function(e, t) {
                var r = t ? J(t) : "";
                if (N.warnHandler) N.warnHandler.call(null, e, t, r); else if (X && !N.silent) console.error("[Vue warn]: " + e + r);
            };
            W = function(e, t) {
                if (X && !N.silent) console.warn("[Vue tip]: " + e + (t ? J(t) : ""));
            };
            Q = function(e, t) {
                if (e.$root === e) return "<Root>";
                var r = "string" === typeof e ? e : "function" === typeof e && e.options ? e.options.name : e._isVue ? e.$options.name || e.$options._componentTag : e.name;
                var n = e._isVue && e.$options.__file;
                if (!r && n) {
                    var i = n.match(/([^\/\\]+)\.vue$/);
                    r = i && i[1];
                }
                return (r ? "<" + K(r) + ">" : "<Anonymous>") + (n && false !== t ? " at " + n : "");
            };
            var Z = function(e, t) {
                var r = "";
                while (t) {
                    if (t % 2 === 1) r += e;
                    if (t > 1) e += e;
                    t >>= 1;
                }
                return r;
            };
            var J = function(e) {
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
                        return "" + (0 === t ? "---\x3e " : Z(" ", 5 + 2 * t)) + (Array.isArray(e) ? Q(e[0]) + "... (" + e[1] + " recursive calls)" : Q(e));
                    }).join("\n");
                } else return "\n\n(found in " + Q(e) + ")";
            };
        }
        /*  */
        function G(e, t, r) {
            if (N.errorHandler) N.errorHandler.call(null, e, t, r); else {
                if (true) V("Error in " + r + ': "' + e.toString() + '"', t);
                /* istanbul ignore else */
                if (te && "undefined" !== typeof console) console.error(e); else throw e;
            }
        }
        /*  */
        /* globals MutationObserver */
        // can we use __proto__?
        var ee = "__proto__" in {};
        // Browser environment sniffing
        var te = "undefined" !== typeof window;
        var re = te && window.navigator.userAgent.toLowerCase();
        var ne = re && /msie|trident/.test(re);
        var ie = re && re.indexOf("msie 9.0") > 0;
        var ae = re && re.indexOf("edge/") > 0;
        var oe = re && re.indexOf("android") > 0;
        var se = re && /iphone|ipad|ipod|ios/.test(re);
        var ue = re && /chrome\/\d+/.test(re) && !ae;
        // Firefox has a "watch" function on Object.prototype...
        var le = {}.watch;
        var ce = false;
        if (te) try {
            var fe = {};
            Object.defineProperty(fe, "passive", {
                get: function() {
                    /* istanbul ignore next */
                    ce = true;
                }
            });
            // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, fe);
        } catch (e) {}
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
        var de;
        var pe = function() {
            if (void 0 === de) /* istanbul ignore if */
            if (!te && "undefined" !== typeof e) // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            de = "server" === e["process"].env.VUE_ENV; else de = false;
            return de;
        };
        // detect devtools
        var ve = te && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */
        function he(e) {
            return "function" === typeof e && /native code/.test(e.toString());
        }
        var me = "undefined" !== typeof Symbol && he(Symbol) && "undefined" !== typeof Reflect && he(Reflect.ownKeys);
        /**
 * Defer a task to execute it asynchronously.
 */
        var _e = function() {
            var e = [];
            var t = false;
            var r;
            function n() {
                t = false;
                var r = e.slice(0);
                e.length = 0;
                for (var n = 0; n < r.length; n++) r[n]();
            }
            // the nextTick behavior leverages the microtask queue, which can be accessed
            // via either native Promise.then or MutationObserver.
            // MutationObserver has wider support, however it is seriously bugged in
            // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
            // completely stops working after triggering a few times... so, if native
            // Promise is available, we will use it:
            /* istanbul ignore if */
            if ("undefined" !== typeof Promise && he(Promise)) {
                var i = Promise.resolve();
                var a = function(e) {
                    console.error(e);
                };
                r = function() {
                    i.then(n).catch(a);
                    // in problematic UIWebViews, Promise.then doesn't completely break, but
                    // it can get stuck in a weird state where callbacks are pushed into the
                    // microtask queue but the queue isn't being flushed, until the browser
                    // needs to do some other work, e.g. handle a timer. Therefore we can
                    // "force" the microtask queue to be flushed by adding an empty timer.
                    if (se) setTimeout(S);
                };
            } else if (!ne && "undefined" !== typeof MutationObserver && (he(MutationObserver) || // PhantomJS and iOS 7.x
            "[object MutationObserverConstructor]" === MutationObserver.toString())) {
                // use MutationObserver where native Promise is not available,
                // e.g. PhantomJS, iOS7, Android 4.4
                var o = 1;
                var s = new MutationObserver(n);
                var u = document.createTextNode(String(o));
                s.observe(u, {
                    characterData: true
                });
                r = function() {
                    o = (o + 1) % 2;
                    u.data = String(o);
                };
            } else // fallback to setTimeout
            /* istanbul ignore next */
            r = function() {
                setTimeout(n, 0);
            };
            return function(n, i) {
                var a;
                e.push(function() {
                    if (n) try {
                        n.call(i);
                    } catch (e) {
                        G(e, i, "nextTick");
                    } else if (a) a(i);
                });
                if (!t) {
                    t = true;
                    r();
                }
                if (!n && "undefined" !== typeof Promise) return new Promise(function(e, t) {
                    a = e;
                });
            };
        }();
        var ye;
        /* istanbul ignore if */
        if ("undefined" !== typeof Set && he(Set)) // use native Set when available.
        ye = Set; else // a non-standard Set polyfill that only works with primitive keys.
        ye = function() {
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
            _(this.subs, e);
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
        function Ce(e) {
            if (be.target) we.push(be.target);
            be.target = e;
        }
        function xe() {
            be.target = we.pop();
        }
        /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
        var ke = Array.prototype;
        var Oe = Object.create(ke);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
            // cache original method
            var t = ke[e];
            F(Oe, e, function() {
                var r = [], n = arguments.length;
                while (n--) r[n] = arguments[n];
                var i = t.apply(this, r);
                var a = this.__ob__;
                var o;
                switch (e) {
                  case "push":
                  case "unshift":
                    o = r;
                    break;

                  case "splice":
                    o = r.slice(2);
                }
                if (o) a.observeArray(o);
                // notify change
                a.dep.notify();
                return i;
            });
        });
        /*  */
        var Ae = Object.getOwnPropertyNames(Oe);
        /**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
        var Ee = {
            shouldConvert: true
        };
        /**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
        var $e = function(e) {
            this.value = e;
            this.dep = new be();
            this.vmCount = 0;
            F(e, "__ob__", this);
            if (Array.isArray(e)) {
                (ee ? je : Se)(e, Oe, Ae);
                this.observeArray(e);
            } else this.walk(e);
        };
        /**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
        $e.prototype.walk = function(e) {
            var t = Object.keys(e);
            for (var r = 0; r < t.length; r++) Pe(e, t[r], e[t[r]]);
        };
        /**
 * Observe a list of Array items.
 */
        $e.prototype.observeArray = function(e) {
            for (var t = 0, r = e.length; t < r; t++) Te(e[t]);
        };
        // helpers
        /**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
        function je(e, t, r) {
            /* eslint-disable no-proto */
            e.__proto__ = t;
        }
        /**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
        /* istanbul ignore next */
        function Se(e, t, r) {
            for (var n = 0, i = r.length; n < i; n++) {
                var a = r[n];
                F(e, a, t[a]);
            }
        }
        /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
        function Te(e, t) {
            if (!s(e)) return;
            var r;
            if (g(e, "__ob__") && e.__ob__ instanceof $e) r = e.__ob__; else if (Ee.shouldConvert && !pe() && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue) r = new $e(e);
            if (t && r) r.vmCount++;
            return r;
        }
        /**
 * Define a reactive property on an Object.
 */
        function Pe(e, t, r, n, i) {
            var a = new be();
            var o = Object.getOwnPropertyDescriptor(e, t);
            if (o && false === o.configurable) return;
            // cater for pre-defined getter/setters
            var s = o && o.get;
            var u = o && o.set;
            var l = !i && Te(r);
            Object.defineProperty(e, t, {
                enumerable: true,
                configurable: true,
                get: function() {
                    var t = s ? s.call(e) : r;
                    if (be.target) {
                        a.depend();
                        if (l) {
                            l.dep.depend();
                            if (Array.isArray(t)) Re(t);
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
                    l = !i && Te(t);
                    a.notify();
                }
            });
        }
        /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
        function Me(e, t, r) {
            if (Array.isArray(e) && f(t)) {
                e.length = Math.max(e.length, t);
                e.splice(t, 1, r);
                return r;
            }
            if (g(e, t)) {
                e[t] = r;
                return r;
            }
            var n = e.__ob__;
            if (e._isVue || n && n.vmCount) {
                V("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
                return r;
            }
            if (!n) {
                e[t] = r;
                return r;
            }
            Pe(n.value, t, r);
            n.dep.notify();
            return r;
        }
        /**
 * Delete a property and trigger change if necessary.
 */
        function Le(e, t) {
            if (Array.isArray(e) && f(t)) {
                e.splice(t, 1);
                return;
            }
            var r = e.__ob__;
            if (e._isVue || r && r.vmCount) {
                V("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
                return;
            }
            if (!g(e, t)) return;
            delete e[t];
            if (!r) return;
            r.dep.notify();
        }
        /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
        function Re(e) {
            for (var t = void 0, r = 0, n = e.length; r < n; r++) {
                t = e[r];
                t && t.__ob__ && t.__ob__.dep.depend();
                if (Array.isArray(t)) Re(t);
            }
        }
        /*  */
        /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
        var Ie = N.optionMergeStrategies;
        /**
 * Options with restrictions
 */
        if (true) Ie.el = Ie.propsData = function(e, t, r, n) {
            if (!r) V('option "' + n + '" can only be used during instance creation with the `new` keyword.');
            return Be(e, t);
        };
        /**
 * Helper that recursively merges two data objects together.
 */
        function De(e, t) {
            if (!t) return e;
            var r, n, i;
            var a = Object.keys(t);
            for (var o = 0; o < a.length; o++) {
                r = a[o];
                n = e[r];
                i = t[r];
                if (!g(e, r)) Me(e, r, i); else if (l(n) && l(i)) De(n, i);
            }
            return e;
        }
        /**
 * Data
 */
        function ze(e, t, r) {
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
                    return De("function" === typeof t ? t.call(this) : t, "function" === typeof e ? e.call(this) : e);
                };
            } else if (e || t) return function() {
                // instance merge
                var n = "function" === typeof t ? t.call(r) : t;
                var i = "function" === typeof e ? e.call(r) : e;
                if (n) return De(n, i); else return i;
            };
        }
        Ie.data = function(e, t, r) {
            if (!r) {
                if (t && "function" !== typeof t) {
                    V('The "data" option should be a function that returns a per-instance value in component definitions.', r);
                    return e;
                }
                return ze.call(this, e, t);
            }
            return ze(e, t, r);
        };
        /**
 * Hooks and props are merged as arrays.
 */
        function Ne(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
        }
        z.forEach(function(e) {
            Ie[e] = Ne;
        });
        /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
        function qe(e, t) {
            var r = Object.create(e || null);
            return t ? $(r, t) : r;
        }
        D.forEach(function(e) {
            Ie[e + "s"] = qe;
        });
        /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
        Ie.watch = function(e, t) {
            // work around Firefox's Object.prototype.watch...
            if (e === le) e = void 0;
            if (t === le) t = void 0;
            /* istanbul ignore if */
            if (!t) return Object.create(e || null);
            if (!e) return t;
            var r = {};
            $(r, e);
            for (var n in t) {
                var i = r[n];
                var a = t[n];
                if (i && !Array.isArray(i)) i = [ i ];
                r[n] = i ? i.concat(a) : Array.isArray(a) ? a : [ a ];
            }
            return r;
        };
        /**
 * Other object hashes.
 */
        Ie.props = Ie.methods = Ie.inject = Ie.computed = function(e, t) {
            if (!e) return t;
            var r = Object.create(null);
            $(r, e);
            if (t) $(r, t);
            return r;
        };
        Ie.provide = ze;
        /**
 * Default strategy.
 */
        var Be = function(e, t) {
            return void 0 === t ? e : t;
        };
        /**
 * Validate component names
 */
        function Fe(e) {
            for (var t in e.components) {
                var r = t.toLowerCase();
                if (h(r) || N.isReservedTag(r)) V("Do not use built-in or reserved HTML elements as component id: " + t);
            }
        }
        /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
        function Ue(e) {
            var t = e.props;
            if (!t) return;
            var r = {};
            var n, i, a;
            if (Array.isArray(t)) {
                n = t.length;
                while (n--) {
                    i = t[n];
                    if ("string" === typeof i) {
                        a = C(i);
                        r[a] = {
                            type: null
                        };
                    } else if (true) V("props must be strings when using array syntax.");
                }
            } else if (l(t)) for (var o in t) {
                i = t[o];
                a = C(o);
                r[a] = l(i) ? i : {
                    type: i
                };
            }
            e.props = r;
        }
        /**
 * Normalize all injections into Object-based format
 */
        function He(e) {
            var t = e.inject;
            if (Array.isArray(t)) {
                var r = e.inject = {};
                for (var n = 0; n < t.length; n++) r[t[n]] = t[n];
            }
        }
        /**
 * Normalize raw function directives into object format.
 */
        function Ve(e) {
            var t = e.directives;
            if (t) for (var r in t) {
                var n = t[r];
                if ("function" === typeof n) t[r] = {
                    bind: n,
                    update: n
                };
            }
        }
        /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
        function We(e, t, r) {
            if (true) Fe(t);
            if ("function" === typeof t) t = t.options;
            Ue(t);
            He(t);
            Ve(t);
            var n = t.extends;
            if (n) e = We(e, n, r);
            if (t.mixins) for (var i = 0, a = t.mixins.length; i < a; i++) e = We(e, t.mixins[i], r);
            var o = {};
            var s;
            for (s in e) u(s);
            for (s in t) if (!g(e, s)) u(s);
            function u(n) {
                var i = Ie[n] || Be;
                o[n] = i(e[n], t[n], r, n);
            }
            return o;
        }
        /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
        function Qe(e, t, r, n) {
            /* istanbul ignore if */
            if ("string" !== typeof r) return;
            var i = e[t];
            // check local registration variations first
            if (g(i, r)) return i[r];
            var a = C(r);
            if (g(i, a)) return i[a];
            var o = x(a);
            if (g(i, o)) return i[o];
            // fallback to prototype chain
            var s = i[r] || i[a] || i[o];
            if (n && !s) V("Failed to resolve " + t.slice(0, -1) + ": " + r, e);
            return s;
        }
        /*  */
        function Xe(e, t, r, n) {
            var i = t[e];
            var a = !g(r, e);
            var o = r[e];
            // handle boolean props
            if (et(Boolean, i.type)) if (a && !g(i, "default")) o = false; else if (!et(String, i.type) && ("" === o || o === O(e))) o = true;
            // check default value
            if (void 0 === o) {
                o = Ye(n, i, e);
                // since the default value is a fresh copy,
                // make sure to observe it.
                var s = Ee.shouldConvert;
                Ee.shouldConvert = true;
                Te(o);
                Ee.shouldConvert = s;
            }
            if (true) Ke(i, e, o, n, a);
            return o;
        }
        /**
 * Get the default value of a prop.
 */
        function Ye(e, t, r) {
            // no default, return undefined
            if (!g(t, "default")) return;
            var n = t.default;
            // warn against non-factory defaults for Object & Array
            if (s(n)) V('Invalid default value for prop "' + r + '": Props with type Object/Array must use a factory function to return the default value.', e);
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
            if (e && e.$options.propsData && void 0 === e.$options.propsData[r] && void 0 !== e._props[r]) return e._props[r];
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
            return "function" === typeof n && "Function" !== Ge(t.type) ? n.call(e) : n;
        }
        /**
 * Assert whether a prop is valid.
 */
        function Ke(e, t, r, n, i) {
            if (e.required && i) {
                V('Missing required prop: "' + t + '"', n);
                return;
            }
            if (null == r && !e.required) return;
            var a = e.type;
            var o = !a || true === a;
            var s = [];
            if (a) {
                if (!Array.isArray(a)) a = [ a ];
                for (var u = 0; u < a.length && !o; u++) {
                    var l = Je(r, a[u]);
                    s.push(l.expectedType || "");
                    o = l.valid;
                }
            }
            if (!o) {
                V('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(x).join(", ") + ", got " + Object.prototype.toString.call(r).slice(8, -1) + ".", n);
                return;
            }
            var c = e.validator;
            if (c) if (!c(r)) V('Invalid prop: custom validator check failed for prop "' + t + '".', n);
        }
        var Ze = /^(String|Number|Boolean|Function|Symbol)$/;
        function Je(e, t) {
            var r;
            var n = Ge(t);
            if (Ze.test(n)) {
                var i = typeof e;
                r = i === n.toLowerCase();
                // for primitive wrapper objects
                if (!r && "object" === i) r = e instanceof t;
            } else if ("Object" === n) r = l(e); else if ("Array" === n) r = Array.isArray(e); else r = e instanceof t;
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
        function Ge(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : "";
        }
        function et(e, t) {
            if (!Array.isArray(t)) return Ge(t) === Ge(e);
            for (var r = 0, n = t.length; r < n; r++) if (Ge(t[r]) === Ge(e)) return true;
            /* istanbul ignore next */
            return false;
        }
        /*  */
        /* not type checking this file because flow doesn't play well with Proxy */
        var tt;
        if (true) {
            var rt = v("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require");
            var nt = function(e, t) {
                V('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', e);
            };
            var it = "undefined" !== typeof Proxy && Proxy.toString().match(/native code/);
            if (it) {
                var at = v("stop,prevent,self,ctrl,shift,alt,meta");
                N.keyCodes = new Proxy(N.keyCodes, {
                    set: function(e, t, r) {
                        if (at(t)) {
                            V("Avoid overwriting built-in modifier in config.keyCodes: ." + t);
                            return false;
                        } else {
                            e[t] = r;
                            return true;
                        }
                    }
                });
            }
            var ot = {
                has: function(e, t) {
                    var r = t in e;
                    var n = rt(t) || "_" === t.charAt(0);
                    if (!r && !n) nt(e, t);
                    return r || !n;
                }
            };
            var st = {
                get: function(e, t) {
                    if ("string" === typeof t && !(t in e)) nt(e, t);
                    return e[t];
                }
            };
            tt = function(e) {
                if (it) {
                    // determine which proxy handler to use
                    var t = e.$options;
                    var r = t.render && t.render._withStripped ? st : ot;
                    e._renderProxy = new Proxy(e, r);
                } else e._renderProxy = e;
            };
        }
        var ut;
        var lt;
        if (true) {
            var ct = te && window.performance;
            /* istanbul ignore if */
            if (ct && ct.mark && ct.measure && ct.clearMarks && ct.clearMeasures) {
                ut = function(e) {
                    return ct.mark(e);
                };
                lt = function(e, t, r) {
                    ct.measure(e, t, r);
                    ct.clearMarks(t);
                    ct.clearMarks(r);
                    ct.clearMeasures(e);
                };
            }
        }
        /*  */
        var ft = function(e, t, r, n, i, a, o, s) {
            this.tag = e;
            this.data = t;
            this.children = r;
            this.text = n;
            this.elm = i;
            this.ns = void 0;
            this.context = a;
            this.functionalContext = void 0;
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
        var dt = {
            child: {}
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        dt.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(ft.prototype, dt);
        var pt = function(e) {
            if (void 0 === e) e = "";
            var t = new ft();
            t.text = e;
            t.isComment = true;
            return t;
        };
        function vt(e) {
            return new ft(void 0, void 0, void 0, String(e));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
        function ht(e, t) {
            var r = new ft(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
            r.ns = e.ns;
            r.isStatic = e.isStatic;
            r.key = e.key;
            r.isComment = e.isComment;
            r.isCloned = true;
            if (t && e.children) r.children = mt(e.children);
            return r;
        }
        function mt(e, t) {
            var r = e.length;
            var n = new Array(r);
            for (var i = 0; i < r; i++) n[i] = ht(e[i], t);
            return n;
        }
        /*  */
        var _t = b(function(e) {
            var t = "&" === e.charAt(0);
            e = t ? e.slice(1) : e;
            var r = "~" === e.charAt(0);
            // Prefixed last, checked first
            e = r ? e.slice(1) : e;
            var n = "!" === e.charAt(0);
            e = n ? e.slice(1) : e;
            return {
                name: e,
                plain: !(t || r || n),
                once: r,
                capture: n,
                passive: t
            };
        });
        function yt(e) {
            function t() {
                var e = arguments;
                var r = t.fns;
                if (Array.isArray(r)) {
                    var n = r.slice();
                    for (var i = 0; i < n.length; i++) n[i].apply(null, e);
                } else // return handler return value for single handlers
                return r.apply(null, arguments);
            }
            t.fns = e;
            return t;
        }
        // #6552
        function gt(e, t) {
            return e.plain ? -1 : t.plain ? 1 : 0;
        }
        function bt(e, t, n, i, a) {
            var o, s, u, l;
            var c = [];
            var f = false;
            for (o in e) {
                s = e[o];
                u = t[o];
                l = _t(o);
                if (!l.plain) f = true;
                if (r(s)) V('Invalid handler for event "' + l.name + '": got ' + String(s), a); else if (r(u)) {
                    if (r(s.fns)) s = e[o] = yt(s);
                    l.handler = s;
                    c.push(l);
                } else if (s !== u) {
                    u.fns = s;
                    e[o] = u;
                }
            }
            if (c.length) {
                if (f) c.sort(gt);
                for (var d = 0; d < c.length; d++) {
                    var p = c[d];
                    n(p.name, p.handler, p.once, p.capture, p.passive);
                }
            }
            for (o in t) if (r(e[o])) {
                l = _t(o);
                i(l.name, t[o], l.capture);
            }
        }
        /*  */
        function wt(e, t, a) {
            var o;
            var s = e[t];
            function u() {
                a.apply(this, arguments);
                // important: remove merged hook to ensure it's called only once
                // and prevent memory leak
                _(o.fns, u);
            }
            if (r(s)) // no existing hook
            o = yt([ u ]); else /* istanbul ignore if */
            if (n(s.fns) && i(s.merged)) {
                // already a merged invoker
                o = s;
                o.fns.push(u);
            } else // existing plain hook
            o = yt([ s, u ]);
            o.merged = true;
            e[t] = o;
        }
        /*  */
        function Ct(e, t, i) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var a = t.options.props;
            if (r(a)) return;
            var o = {};
            var s = e.attrs;
            var u = e.props;
            if (n(s) || n(u)) for (var l in a) {
                var c = O(l);
                if (true) {
                    var f = l.toLowerCase();
                    if (l !== f && s && g(s, f)) W('Prop "' + f + '" is passed to component ' + Q(i || t) + ', but the declared prop name is "' + l + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + c + '" instead of "' + l + '".');
                }
                xt(o, u, l, c, true) || xt(o, s, l, c, false);
            }
            return o;
        }
        function xt(e, t, r, i, a) {
            if (n(t)) if (g(t, r)) {
                e[r] = t[r];
                if (!a) delete t[r];
                return true;
            } else if (g(t, i)) {
                e[r] = t[i];
                if (!a) delete t[i];
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
        function kt(e) {
            for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e;
        }
        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
        function Ot(e) {
            return o(e) ? [ vt(e) ] : Array.isArray(e) ? Et(e) : void 0;
        }
        function At(e) {
            return n(e) && n(e.text) && a(e.isComment);
        }
        function Et(e, t) {
            var a = [];
            var s, u, l;
            for (s = 0; s < e.length; s++) {
                u = e[s];
                if (r(u) || "boolean" === typeof u) continue;
                l = a[a.length - 1];
                //  nested
                if (Array.isArray(u)) a.push.apply(a, Et(u, (t || "") + "_" + s)); else if (o(u)) {
                    if (At(l)) // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    l.text += String(u); else if ("" !== u) // convert primitive to vnode
                    a.push(vt(u));
                } else if (At(u) && At(l)) // merge adjacent text nodes
                a[a.length - 1] = vt(l.text + u.text); else {
                    // default key for nested array children (likely generated by v-for)
                    if (i(e._isVList) && n(u.tag) && r(u.key) && n(t)) u.key = "__vlist" + t + "_" + s + "__";
                    a.push(u);
                }
            }
            return a;
        }
        /*  */
        function $t(e, t) {
            if (e.__esModule && e.default) e = e.default;
            return s(e) ? t.extend(e) : e;
        }
        function jt(e, t, r, n, i) {
            var a = pt();
            a.asyncFactory = e;
            a.asyncMeta = {
                data: t,
                context: r,
                children: n,
                tag: i
            };
            return a;
        }
        function St(e, t, a) {
            if (i(e.error) && n(e.errorComp)) return e.errorComp;
            if (n(e.resolved)) return e.resolved;
            if (i(e.loading) && n(e.loadingComp)) return e.loadingComp;
            if (n(e.contexts)) // already pending
            e.contexts.push(a); else {
                var o = e.contexts = [ a ];
                var u = true;
                var l = function() {
                    for (var e = 0, t = o.length; e < t; e++) o[e].$forceUpdate();
                };
                var c = R(function(r) {
                    // cache resolved
                    e.resolved = $t(r, t);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                    if (!u) l();
                });
                var f = R(function(t) {
                    V("Failed to resolve async component: " + String(e) + (t ? "\nReason: " + t : ""));
                    if (n(e.errorComp)) {
                        e.error = true;
                        l();
                    }
                });
                var d = e(c, f);
                if (s(d)) if ("function" === typeof d.then) {
                    // () => Promise
                    if (r(e.resolved)) d.then(c, f);
                } else if (n(d.component) && "function" === typeof d.component.then) {
                    d.component.then(c, f);
                    if (n(d.error)) e.errorComp = $t(d.error, t);
                    if (n(d.loading)) {
                        e.loadingComp = $t(d.loading, t);
                        if (0 === d.delay) e.loading = true; else setTimeout(function() {
                            if (r(e.resolved) && r(e.error)) {
                                e.loading = true;
                                l();
                            }
                        }, d.delay || 200);
                    }
                    if (n(d.timeout)) setTimeout(function() {
                        if (r(e.resolved)) f(true ? "timeout (" + d.timeout + "ms)" : null);
                    }, d.timeout);
                }
                u = false;
                // return in case resolved synchronously
                return e.loading ? e.loadingComp : e.resolved;
            }
        }
        /*  */
        function Tt(e) {
            return e.isComment && e.asyncFactory;
        }
        /*  */
        function Pt(e) {
            if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (n(r) && (n(r.componentOptions) || Tt(r))) return r;
            }
        }
        /*  */
        /*  */
        function Mt(e) {
            e._events = Object.create(null);
            e._hasHookEvent = false;
            // init parent attached events
            var t = e.$options._parentListeners;
            if (t) Dt(e, t);
        }
        var Lt;
        function Rt(e, t, r) {
            if (r) Lt.$once(e, t); else Lt.$on(e, t);
        }
        function It(e, t) {
            Lt.$off(e, t);
        }
        function Dt(e, t, r) {
            Lt = e;
            bt(t, r || {}, Rt, It, e);
        }
        /*  */
        /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
        function zt(e, t) {
            var r = {};
            if (!e) return r;
            var n = [];
            for (var i = 0, a = e.length; i < a; i++) {
                var o = e[i];
                var s = o.data;
                // remove slot attribute if the node is resolved as a Vue slot node
                if (s && s.attrs && s.attrs.slot) delete s.attrs.slot;
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                if ((o.context === t || o.functionalContext === t) && s && null != s.slot) {
                    var u = o.data.slot;
                    var l = r[u] || (r[u] = []);
                    if ("template" === o.tag) l.push.apply(l, o.children); else l.push(o);
                } else n.push(o);
            }
            // ignore whitespace
            if (!n.every(Nt)) r.default = n;
            return r;
        }
        function Nt(e) {
            return e.isComment || " " === e.text;
        }
        function qt(e, // see flow/vnode
        t) {
            t = t || {};
            for (var r = 0; r < e.length; r++) if (Array.isArray(e[r])) qt(e[r], t); else t[e[r].key] = e[r].fn;
            return t;
        }
        /*  */
        var Bt = null;
        var Ft = false;
        function Ut(e) {
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
        function Ht(e, t, r) {
            e.$el = t;
            if (!e.$options.render) {
                e.$options.render = pt;
                if (true) /* istanbul ignore if */
                if (e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t) V("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e); else V("Failed to mount component: template or render function not defined.", e);
            }
            Yt(e, "beforeMount");
            var n;
            /* istanbul ignore if */
            if (N.performance && ut) n = function() {
                var t = e._name;
                var n = e._uid;
                var i = "vue-perf-start:" + n;
                var a = "vue-perf-end:" + n;
                ut(i);
                var o = e._render();
                ut(a);
                lt(t + " render", i, a);
                ut(i);
                e._update(o, r);
                ut(a);
                lt(t + " patch", i, a);
            }; else n = function() {
                e._update(e._render(), r);
            };
            e._watcher = new fr(e, n, S);
            r = false;
            // manually mounted instance, call mounted on self
            // mounted is called for render-created child components in its inserted hook
            if (null == e.$vnode) {
                e._isMounted = true;
                Yt(e, "mounted");
            }
            return e;
        }
        function Vt(e, t, r, n, i) {
            if (true) Ft = true;
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren
            var a = !!(i || // has new static slots
            e.$options._renderChildren || // has old static slots
            n.data.scopedSlots || // has new scoped slots
            e.$scopedSlots !== q);
            e.$options._parentVnode = n;
            e.$vnode = n;
            // update vm's placeholder node without re-render
            if (e._vnode) // update child tree's parent
            e._vnode.parent = n;
            e.$options._renderChildren = i;
            // update $attrs and $listeners hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
            e.$attrs = n.data && n.data.attrs || q;
            e.$listeners = r || q;
            // update props
            if (t && e.$options.props) {
                Ee.shouldConvert = false;
                var o = e._props;
                var s = e.$options._propKeys || [];
                for (var u = 0; u < s.length; u++) {
                    var l = s[u];
                    o[l] = Xe(l, e.$options.props, t, e);
                }
                Ee.shouldConvert = true;
                // keep a copy of raw propsData
                e.$options.propsData = t;
            }
            // update listeners
            if (r) {
                var c = e.$options._parentListeners;
                e.$options._parentListeners = r;
                Dt(e, r, c);
            }
            // resolve slots + force update if has children
            if (a) {
                e.$slots = zt(i, n.context);
                e.$forceUpdate();
            }
            if (true) Ft = false;
        }
        function Wt(e) {
            while (e && (e = e.$parent)) if (e._inactive) return true;
            return false;
        }
        function Qt(e, t) {
            if (t) {
                e._directInactive = false;
                if (Wt(e)) return;
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = false;
                for (var r = 0; r < e.$children.length; r++) Qt(e.$children[r]);
                Yt(e, "activated");
            }
        }
        function Xt(e, t) {
            if (t) {
                e._directInactive = true;
                if (Wt(e)) return;
            }
            if (!e._inactive) {
                e._inactive = true;
                for (var r = 0; r < e.$children.length; r++) Xt(e.$children[r]);
                Yt(e, "deactivated");
            }
        }
        function Yt(e, t) {
            var r = e.$options[t];
            if (r) for (var n = 0, i = r.length; n < i; n++) try {
                r[n].call(e);
            } catch (r) {
                G(r, e, t + " hook");
            }
            if (e._hasHookEvent) e.$emit("hook:" + t);
        }
        /*  */
        var Kt = 100;
        var Zt = [];
        var Jt = [];
        var Gt = {};
        var er = {};
        var tr = false;
        var rr = false;
        var nr = 0;
        /**
 * Reset the scheduler's state.
 */
        function ir() {
            nr = Zt.length = Jt.length = 0;
            Gt = {};
            if (true) er = {};
            tr = rr = false;
        }
        /**
 * Flush both queues and run the watchers.
 */
        function ar() {
            rr = true;
            var e, t;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
            Zt.sort(function(e, t) {
                return e.id - t.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
            for (nr = 0; nr < Zt.length; nr++) {
                e = Zt[nr];
                t = e.id;
                Gt[t] = null;
                e.run();
                // in dev build, check and stop circular updates.
                if (null != Gt[t]) {
                    er[t] = (er[t] || 0) + 1;
                    if (er[t] > Kt) {
                        V("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
            var r = Jt.slice();
            var n = Zt.slice();
            ir();
            // call component updated and activated hooks
            ur(r);
            or(n);
            // devtool hook
            /* istanbul ignore if */
            if (ve && N.devtools) ve.emit("flush");
        }
        function or(e) {
            var t = e.length;
            while (t--) {
                var r = e[t];
                var n = r.vm;
                if (n._watcher === r && n._isMounted) Yt(n, "updated");
            }
        }
        /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
        function sr(e) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            e._inactive = false;
            Jt.push(e);
        }
        function ur(e) {
            for (var t = 0; t < e.length; t++) {
                e[t]._inactive = true;
                Qt(e[t], true);
            }
        }
        /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
        function lr(e) {
            var t = e.id;
            if (null == Gt[t]) {
                Gt[t] = true;
                if (!rr) Zt.push(e); else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var r = Zt.length - 1;
                    while (r > nr && Zt[r].id > e.id) r--;
                    Zt.splice(r + 1, 0, e);
                }
                // queue the flush
                if (!tr) {
                    tr = true;
                    _e(ar);
                }
            }
        }
        /*  */
        var cr = 0;
        /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
        var fr = function(e, t, r, n) {
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
            this.id = ++cr;
            // uid for batching
            this.active = true;
            this.dirty = this.lazy;
            // for lazy watchers
            this.deps = [];
            this.newDeps = [];
            this.depIds = new ye();
            this.newDepIds = new ye();
            this.expression = true ? t.toString() : "";
            // parse expression for getter
            if ("function" === typeof t) this.getter = t; else {
                this.getter = H(t);
                if (!this.getter) {
                    this.getter = function() {};
                    V('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e);
                }
            }
            this.value = this.lazy ? void 0 : this.get();
        };
        /**
 * Evaluate the getter, and re-collect dependencies.
 */
        fr.prototype.get = function() {
            Ce(this);
            var e;
            var t = this.vm;
            try {
                e = this.getter.call(t, t);
            } catch (e) {
                if (this.user) G(e, t, 'getter for watcher "' + this.expression + '"'); else throw e;
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) pr(e);
                xe();
                this.cleanupDeps();
            }
            return e;
        };
        /**
 * Add a dependency to this directive.
 */
        fr.prototype.addDep = function(e) {
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
        fr.prototype.cleanupDeps = function() {
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
        fr.prototype.update = function() {
            /* istanbul ignore else */
            if (this.lazy) this.dirty = true; else if (this.sync) this.run(); else lr(this);
        };
        /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
        fr.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                s(e) || this.deep) {
                    // set new value
                    var t = this.value;
                    this.value = e;
                    if (this.user) try {
                        this.cb.call(this.vm, e, t);
                    } catch (e) {
                        G(e, this.vm, 'callback for watcher "' + this.expression + '"');
                    } else this.cb.call(this.vm, e, t);
                }
            }
        };
        /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
        fr.prototype.evaluate = function() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
 * Depend on all deps collected by this watcher.
 */
        fr.prototype.depend = function() {
            var e = this;
            var t = this.deps.length;
            while (t--) e.deps[t].depend();
        };
        /**
 * Remove self from all dependencies' subscriber list.
 */
        fr.prototype.teardown = function() {
            var e = this;
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) _(this.vm._watchers, this);
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
        var dr = new ye();
        function pr(e) {
            dr.clear();
            vr(e, dr);
        }
        function vr(e, t) {
            var r, n;
            var i = Array.isArray(e);
            if (!i && !s(e) || !Object.isExtensible(e)) return;
            if (e.__ob__) {
                var a = e.__ob__.dep.id;
                if (t.has(a)) return;
                t.add(a);
            }
            if (i) {
                r = e.length;
                while (r--) vr(e[r], t);
            } else {
                n = Object.keys(e);
                r = n.length;
                while (r--) vr(e[n[r]], t);
            }
        }
        /*  */
        var hr = {
            enumerable: true,
            configurable: true,
            get: S,
            set: S
        };
        function mr(e, t, r) {
            hr.get = function() {
                return this[t][r];
            };
            hr.set = function(e) {
                this[t][r] = e;
            };
            Object.defineProperty(e, r, hr);
        }
        function _r(e) {
            e._watchers = [];
            var t = e.$options;
            if (t.props) gr(e, t.props);
            if (t.methods) Ar(e, t.methods);
            if (t.data) br(e); else Te(e._data = {}, true);
            if (t.computed) xr(e, t.computed);
            if (t.watch && t.watch !== le) Er(e, t.watch);
        }
        function yr(e, t) {
            if (!l(e.$options[t])) V('component option "' + t + '" should be an object.', e);
        }
        function gr(e, t) {
            var r = e.$options.propsData || {};
            var n = e._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
            var i = e.$options._propKeys = [];
            var a = !e.$parent;
            // root instance props should be converted
            Ee.shouldConvert = a;
            for (var o in t) !function(a) {
                i.push(a);
                var o = Xe(a, t, r, e);
                /* istanbul ignore else */
                if (true) {
                    if (m(a) || N.isReservedAttr(a)) V('"' + a + '" is a reserved attribute and cannot be used as component prop.', e);
                    Pe(n, a, o, function() {
                        if (e.$parent && !Ft) V("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + a + '"', e);
                    });
                } else Pe(n, a, o);
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                if (!(a in e)) mr(e, "_props", a);
            }(o);
            Ee.shouldConvert = true;
        }
        function br(e) {
            var t = e.$options.data;
            t = e._data = "function" === typeof t ? wr(t, e) : t || {};
            if (!l(t)) {
                t = {};
                V("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e);
            }
            // proxy data on instance
            var r = Object.keys(t);
            var n = e.$options.props;
            var i = e.$options.methods;
            var a = r.length;
            while (a--) {
                var o = r[a];
                if (true) if (i && g(i, o)) V('Method "' + o + '" has already been defined as a data property.', e);
                if (n && g(n, o)) V('The data property "' + o + '" is already declared as a prop. Use prop default value instead.', e); else if (!B(o)) mr(e, "_data", o);
            }
            // observe data
            Te(t, true);
        }
        function wr(e, t) {
            try {
                return e.call(t);
            } catch (e) {
                G(e, t, "data()");
                return {};
            }
        }
        var Cr = {
            lazy: true
        };
        function xr(e, t) {
            yr(e, "computed");
            var r = e._computedWatchers = Object.create(null);
            // computed properties are just getters during SSR
            var n = pe();
            for (var i in t) {
                var a = t[i];
                var o = "function" === typeof a ? a : a.get;
                if (null == o) V('Getter is missing for computed property "' + i + '".', e);
                if (!n) // create internal watcher for the computed property.
                r[i] = new fr(e, o || S, S, Cr);
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                if (!(i in e)) kr(e, i, a); else if (true) if (i in e.$data) V('The computed property "' + i + '" is already defined in data.', e); else if (e.$options.props && i in e.$options.props) V('The computed property "' + i + '" is already defined as a prop.', e);
            }
        }
        function kr(e, t, r) {
            var n = !pe();
            if ("function" === typeof r) {
                hr.get = n ? Or(t) : r;
                hr.set = S;
            } else {
                hr.get = r.get ? n && false !== r.cache ? Or(t) : r.get : S;
                hr.set = r.set ? r.set : S;
            }
            if (hr.set === S) hr.set = function() {
                V('Computed property "' + t + '" was assigned to but it has no setter.', this);
            };
            Object.defineProperty(e, t, hr);
        }
        function Or(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) {
                    if (t.dirty) t.evaluate();
                    if (be.target) t.depend();
                    return t.value;
                }
            };
        }
        function Ar(e, t) {
            yr(e, "methods");
            var r = e.$options.props;
            for (var n in t) {
                if (true) {
                    if (null == t[n]) V('Method "' + n + '" has an undefined value in the component definition. Did you reference the function correctly?', e);
                    if (r && g(r, n)) V('Method "' + n + '" has already been defined as a prop.', e);
                    if (n in e && B(n)) V('Method "' + n + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
                }
                e[n] = null == t[n] ? S : A(t[n], e);
            }
        }
        function Er(e, t) {
            yr(e, "watch");
            for (var r in t) {
                var n = t[r];
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) $r(e, r, n[i]); else $r(e, r, n);
            }
        }
        function $r(e, t, r, n) {
            if (l(r)) {
                n = r;
                r = r.handler;
            }
            if ("string" === typeof r) r = e[r];
            return e.$watch(t, r, n);
        }
        /*  */
        function jr(e) {
            var t = e.$options.provide;
            if (t) e._provided = "function" === typeof t ? t.call(e) : t;
        }
        function Sr(e) {
            var t = Tr(e.$options.inject, e);
            if (t) {
                Ee.shouldConvert = false;
                Object.keys(t).forEach(function(r) {
                    /* istanbul ignore else */
                    if (true) Pe(e, r, t[r], function() {
                        V('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + r + '"', e);
                    }); else Pe(e, r, t[r]);
                });
                Ee.shouldConvert = true;
            }
        }
        function Tr(e, t) {
            if (e) {
                // inject is :any because flow is not smart enough to figure out cached
                var r = Object.create(null);
                var n = me ? Reflect.ownKeys(e).filter(function(t) {
                    /* istanbul ignore next */
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }) : Object.keys(e);
                for (var i = 0; i < n.length; i++) {
                    var a = n[i];
                    var o = e[a];
                    var s = t;
                    while (s) {
                        if (s._provided && o in s._provided) {
                            r[a] = s._provided[o];
                            break;
                        }
                        s = s.$parent;
                    }
                    if (!s) V('Injection "' + a + '" not found', t);
                }
                return r;
            }
        }
        /*  */
        function Pr(e, t, r, i, a) {
            var o = {};
            var s = e.options.props;
            if (n(s)) for (var u in s) o[u] = Xe(u, s, t || q); else {
                if (n(r.attrs)) Mr(o, r.attrs);
                if (n(r.props)) Mr(o, r.props);
            }
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
            var l = Object.create(i);
            var c = function(e, t, r, n) {
                return Ur(l, e, t, r, n, true);
            };
            var f = e.options.render.call(null, c, {
                data: r,
                props: o,
                children: a,
                parent: i,
                listeners: r.on || q,
                injections: Tr(e.options.inject, i),
                slots: function() {
                    return zt(a, i);
                }
            });
            if (f instanceof ft) {
                f.functionalContext = i;
                f.functionalOptions = e.options;
                if (r.slot) (f.data || (f.data = {})).slot = r.slot;
            }
            return f;
        }
        function Mr(e, t) {
            for (var r in t) e[C(r)] = t[r];
        }
        /*  */
        // hooks to be invoked on component VNodes during patch
        var Lr = {
            init: function(e, t, r, n) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    (e.componentInstance = Dr(e, Bt, r, n)).$mount(t ? e.elm : void 0, t);
                } else if (e.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var i = e;
                    // work around flow
                    Lr.prepatch(i, i);
                }
            },
            prepatch: function(e, t) {
                var r = t.componentOptions;
                Vt(t.componentInstance = e.componentInstance, r.propsData, // updated props
                r.listeners, // updated listeners
                t, // new parent vnode
                r.children);
            },
            insert: function(e) {
                var t = e.context;
                var r = e.componentInstance;
                if (!r._isMounted) {
                    r._isMounted = true;
                    Yt(r, "mounted");
                }
                if (e.data.keepAlive) if (t._isMounted) // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                sr(r); else Qt(r, true);
            },
            destroy: function(e) {
                var t = e.componentInstance;
                if (!t._isDestroyed) if (!e.data.keepAlive) t.$destroy(); else Xt(t, true);
            }
        };
        var Rr = Object.keys(Lr);
        function Ir(e, t, a, o, u) {
            if (r(e)) return;
            var l = a.$options._base;
            // plain options object: turn it into a constructor
            if (s(e)) e = l.extend(e);
            // if at this stage it's not a constructor or an async component factory,
            // reject.
            if ("function" !== typeof e) {
                if (true) V("Invalid Component definition: " + String(e), a);
                return;
            }
            // async component
            var c;
            if (r(e.cid)) {
                c = e;
                e = St(c, l, a);
                if (void 0 === e) // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return jt(c, t, a, o, u);
            }
            t = t || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
            on(e);
            // transform component v-model data into props & events
            if (n(t.model)) qr(e.options, t);
            // extract props
            var f = Ct(t, e, u);
            // functional component
            if (i(e.options.functional)) return Pr(e, f, t, a, o);
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
            zr(t);
            // return a placeholder vnode
            var v = e.options.name || u;
            return new ft("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, a, {
                Ctor: e,
                propsData: f,
                listeners: d,
                tag: u,
                children: o
            }, c);
        }
        function Dr(e, // we know it's MountedComponentVNode but flow doesn't
        t, // activeInstance in lifecycle state
        r, i) {
            var a = e.componentOptions;
            var o = {
                _isComponent: true,
                parent: t,
                propsData: a.propsData,
                _componentTag: a.tag,
                _parentVnode: e,
                _parentListeners: a.listeners,
                _renderChildren: a.children,
                _parentElm: r || null,
                _refElm: i || null
            };
            // check inline-template render functions
            var s = e.data.inlineTemplate;
            if (n(s)) {
                o.render = s.render;
                o.staticRenderFns = s.staticRenderFns;
            }
            return new a.Ctor(o);
        }
        function zr(e) {
            if (!e.hook) e.hook = {};
            for (var t = 0; t < Rr.length; t++) {
                var r = Rr[t];
                var n = e.hook[r];
                var i = Lr[r];
                e.hook[r] = n ? Nr(i, n) : i;
            }
        }
        function Nr(e, t) {
            return function(r, n, i, a) {
                e(r, n, i, a);
                t(r, n, i, a);
            };
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
        function qr(e, t) {
            var r = e.model && e.model.prop || "value";
            var i = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[r] = t.model.value;
            var a = t.on || (t.on = {});
            if (n(a[i])) a[i] = [ t.model.callback ].concat(a[i]); else a[i] = t.model.callback;
        }
        /*  */
        var Br = 1;
        var Fr = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
        function Ur(e, t, r, n, a, s) {
            if (Array.isArray(r) || o(r)) {
                a = n;
                n = r;
                r = void 0;
            }
            if (i(s)) a = Fr;
            return Hr(e, t, r, n, a);
        }
        function Hr(e, t, r, i, a) {
            if (n(r) && n(r.__ob__)) {
                V("Avoid using observed data object as vnode data: " + JSON.stringify(r) + "\nAlways create fresh vnode data objects in each render!", e);
                return pt();
            }
            // object syntax in v-bind
            if (n(r) && n(r.is)) t = r.is;
            if (!t) // in case of component :is set to falsy value
            return pt();
            // warn against non-primitive key
            if (n(r) && n(r.key) && !o(r.key)) V("Avoid using non-primitive value as key, use string/number value instead.", e);
            // support single function children as default scoped slot
            if (Array.isArray(i) && "function" === typeof i[0]) {
                r = r || {};
                r.scopedSlots = {
                    default: i[0]
                };
                i.length = 0;
            }
            if (a === Fr) i = Ot(i); else if (a === Br) i = kt(i);
            var s, u;
            if ("string" === typeof t) {
                var l;
                u = e.$vnode && e.$vnode.ns || N.getTagNamespace(t);
                if (N.isReservedTag(t)) // platform built-in elements
                s = new ft(N.parsePlatformTagName(t), r, i, void 0, void 0, e); else if (n(l = Qe(e.$options, "components", t))) // component
                s = Ir(l, r, e, i, t); else // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                s = new ft(t, r, i, void 0, void 0, e);
            } else // direct component options / constructor
            s = Ir(t, r, e, i);
            if (n(s)) {
                if (u) Vr(s, u);
                return s;
            } else return pt();
        }
        function Vr(e, t) {
            e.ns = t;
            if ("foreignObject" === e.tag) // use default namespace inside foreignObject
            return;
            if (n(e.children)) for (var i = 0, a = e.children.length; i < a; i++) {
                var o = e.children[i];
                if (n(o.tag) && r(o.ns)) Vr(o, t);
            }
        }
        /*  */
        /**
 * Runtime helper for rendering v-for lists.
 */
        function Wr(e, t) {
            var r, i, a, o, u;
            if (Array.isArray(e) || "string" === typeof e) {
                r = new Array(e.length);
                for (i = 0, a = e.length; i < a; i++) r[i] = t(e[i], i);
            } else if ("number" === typeof e) {
                r = new Array(e);
                for (i = 0; i < e; i++) r[i] = t(i + 1, i);
            } else if (s(e)) {
                o = Object.keys(e);
                r = new Array(o.length);
                for (i = 0, a = o.length; i < a; i++) {
                    u = o[i];
                    r[i] = t(e[u], u, i);
                }
            }
            if (n(r)) r._isVList = true;
            return r;
        }
        /*  */
        /**
 * Runtime helper for rendering <slot>
 */
        function Qr(e, t, r, n) {
            var i = this.$scopedSlots[e];
            if (i) {
                // scoped slot
                r = r || {};
                if (n) r = $($({}, n), r);
                return i(r) || t;
            } else {
                var a = this.$slots[e];
                // warn duplicate slot usage
                if (a && true) {
                    a._rendered && V('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this);
                    a._rendered = true;
                }
                return a || t;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving filters
 */
        function Xr(e) {
            return Qe(this.$options, "filters", e, true) || P;
        }
        /*  */
        /**
 * Runtime helper for checking keyCodes from config.
 */
        function Yr(e, t, r) {
            var n = N.keyCodes[t] || r;
            if (Array.isArray(n)) return -1 === n.indexOf(e); else return n !== e;
        }
        /*  */
        /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
        function Kr(e, t, r, n, i) {
            if (r) if (!s(r)) V("v-bind without argument expects an Object or Array value", this); else {
                if (Array.isArray(r)) r = j(r);
                var a;
                for (var o in r) !function(o) {
                    if ("class" === o || "style" === o || m(o)) a = e; else {
                        var s = e.attrs && e.attrs.type;
                        a = n || N.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                    }
                    if (!(o in a)) {
                        a[o] = r[o];
                        if (i) {
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
        function Zr(e, t) {
            var r = this._staticTrees[e];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree by doing a shallow clone.
            if (r && !t) return Array.isArray(r) ? mt(r) : ht(r);
            // otherwise, render a fresh tree.
            r = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy);
            Gr(r, "__static__" + e, false);
            return r;
        }
        /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
        function Jr(e, t, r) {
            Gr(e, "__once__" + t + (r ? "_" + r : ""), true);
            return e;
        }
        function Gr(e, t, r) {
            if (Array.isArray(e)) {
                for (var n = 0; n < e.length; n++) if (e[n] && "string" !== typeof e[n]) en(e[n], t + "_" + n, r);
            } else en(e, t, r);
        }
        function en(e, t, r) {
            e.isStatic = true;
            e.key = t;
            e.isOnce = r;
        }
        /*  */
        function tn(e, t) {
            if (t) if (!l(t)) V("v-on without argument expects an Object value", this); else {
                var r = e.on = e.on ? $({}, e.on) : {};
                for (var n in t) {
                    var i = r[n];
                    var a = t[n];
                    r[n] = i ? [].concat(a, i) : a;
                }
            }
            return e;
        }
        /*  */
        function rn(e) {
            e._vnode = null;
            // the root of the child tree
            e._staticTrees = null;
            var t = e.$vnode = e.$options._parentVnode;
            // the placeholder node in parent tree
            var r = t && t.context;
            e.$slots = zt(e.$options._renderChildren, r);
            e.$scopedSlots = q;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
            e._c = function(t, r, n, i) {
                return Ur(e, t, r, n, i, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
            e.$createElement = function(t, r, n, i) {
                return Ur(e, t, r, n, i, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
            var n = t && t.data;
            /* istanbul ignore else */
            if (true) {
                Pe(e, "$attrs", n && n.attrs || q, function() {
                    !Ft && V("$attrs is readonly.", e);
                }, true);
                Pe(e, "$listeners", e.$options._parentListeners || q, function() {
                    !Ft && V("$listeners is readonly.", e);
                }, true);
            } else {
                Pe(e, "$attrs", n && n.attrs || q, null, true);
                Pe(e, "$listeners", e.$options._parentListeners || q, null, true);
            }
        }
        /*  */
        var nn = 0;
        function an(e, t) {
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
        function on(e) {
            var t = e.options;
            if (e.super) {
                var r = on(e.super);
                if (r !== e.superOptions) {
                    // super option changed,
                    // need to resolve new options.
                    e.superOptions = r;
                    // check if there are any late-modified/attached options (#4976)
                    var n = sn(e);
                    // update base extend options
                    if (n) $(e.extendOptions, n);
                    t = e.options = We(r, e.extendOptions);
                    if (t.name) t.components[t.name] = e;
                }
            }
            return t;
        }
        function sn(e) {
            var t;
            var r = e.options;
            var n = e.extendOptions;
            var i = e.sealedOptions;
            for (var a in r) if (r[a] !== i[a]) {
                if (!t) t = {};
                t[a] = un(r[a], n[a], i[a]);
            }
            return t;
        }
        function un(e, t, r) {
            // compare latest and sealed to ensure lifecycle hooks won't be duplicated
            // between merges
            if (Array.isArray(e)) {
                var n = [];
                r = Array.isArray(r) ? r : [ r ];
                t = Array.isArray(t) ? t : [ t ];
                for (var i = 0; i < e.length; i++) // push original options and not sealed options to exclude duplicated options
                if (t.indexOf(e[i]) >= 0 || r.indexOf(e[i]) < 0) n.push(e[i]);
                return n;
            } else return e;
        }
        function ln(e) {
            if (!(this instanceof ln)) V("Vue is a constructor and should be called with the `new` keyword");
            this._init(e);
        }
        !function(e) {
            e.prototype._init = function(e) {
                var t = this;
                // a uid
                t._uid = nn++;
                var r, n;
                /* istanbul ignore if */
                if (N.performance && ut) {
                    r = "vue-perf-init:" + t._uid;
                    n = "vue-perf-end:" + t._uid;
                    ut(r);
                }
                // a flag to avoid this being observed
                t._isVue = true;
                // merge options
                if (e && e._isComponent) // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                an(t, e); else t.$options = We(on(t.constructor), e || {}, t);
                /* istanbul ignore else */
                if (true) tt(t); else t._renderProxy = t;
                // expose real self
                t._self = t;
                Ut(t);
                Mt(t);
                rn(t);
                Yt(t, "beforeCreate");
                Sr(t);
                // resolve injections before data/props
                _r(t);
                jr(t);
                // resolve provide after data/props
                Yt(t, "created");
                /* istanbul ignore if */
                if (N.performance && ut) {
                    t._name = Q(t, false);
                    ut(n);
                    lt(t._name + " init", r, n);
                }
                if (t.$options.el) t.$mount(t.$options.el);
            };
        }(ln);
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
                    V("Avoid replacing instance root $data. Use nested data properties instead.", this);
                };
                r.set = function() {
                    V("$props is readonly.", this);
                };
            }
            Object.defineProperty(e.prototype, "$data", t);
            Object.defineProperty(e.prototype, "$props", r);
            e.prototype.$set = Me;
            e.prototype.$delete = Le;
            e.prototype.$watch = function(e, t, r) {
                var n = this;
                if (l(t)) return $r(n, e, t, r);
                r = r || {};
                r.user = true;
                var i = new fr(n, e, t, r);
                if (r.immediate) t.call(n, i.value);
                return function() {
                    i.teardown();
                };
            };
        }(ln);
        !function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, r) {
                var n = this;
                var i = this;
                if (Array.isArray(e)) for (var a = 0, o = e.length; a < o; a++) n.$on(e[a], r); else {
                    (i._events[e] || (i._events[e] = [])).push(r);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                    if (t.test(e)) i._hasHookEvent = true;
                }
                return i;
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
                    for (var i = 0, a = e.length; i < a; i++) r.$off(e[i], t);
                    return n;
                }
                // specific event
                var o = n._events[e];
                if (!o) return n;
                if (1 === arguments.length) {
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
                    if (r !== e && t._events[r]) W('Event "' + r + '" is emitted in component ' + Q(t) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + O(e) + '" instead of "' + e + '".');
                }
                var n = t._events[e];
                if (n) {
                    n = n.length > 1 ? E(n) : n;
                    var i = E(arguments, 1);
                    for (var a = 0, o = n.length; a < o; a++) try {
                        n[a].apply(t, i);
                    } catch (r) {
                        G(r, t, 'event handler for "' + e + '"');
                    }
                }
                return t;
            };
        }(ln);
        !function(e) {
            e.prototype._update = function(e, t) {
                var r = this;
                if (r._isMounted) Yt(r, "beforeUpdate");
                var n = r.$el;
                var i = r._vnode;
                var a = Bt;
                Bt = r;
                r._vnode = e;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                if (!i) {
                    // initial render
                    r.$el = r.__patch__(r.$el, e, t, false, r.$options._parentElm, r.$options._refElm);
                    // no need for the ref nodes after initial patch
                    // this prevents keeping a detached DOM tree in memory (#5851)
                    r.$options._parentElm = r.$options._refElm = null;
                } else // updates
                r.$el = r.__patch__(i, e);
                Bt = a;
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
                Yt(e, "beforeDestroy");
                e._isBeingDestroyed = true;
                // remove self from parent
                var t = e.$parent;
                if (t && !t._isBeingDestroyed && !e.$options.abstract) _(t.$children, e);
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
                Yt(e, "destroyed");
                // turn off all instance listeners.
                e.$off();
                // remove __vue__ reference
                if (e.$el) e.$el.__vue__ = null;
            };
        }(ln);
        !function(e) {
            e.prototype.$nextTick = function(e) {
                return _e(e, this);
            };
            e.prototype._render = function() {
                var e = this;
                var t = e.$options;
                var r = t.render;
                var n = t.staticRenderFns;
                var i = t._parentVnode;
                if (e._isMounted) // if the parent didn't update, the slot nodes will be the ones from
                // last render. They need to be cloned to ensure "freshness" for this render.
                for (var a in e.$slots) {
                    var o = e.$slots[a];
                    if (o._rendered) e.$slots[a] = mt(o, true);
                }
                e.$scopedSlots = i && i.data.scopedSlots || q;
                if (n && !e._staticTrees) e._staticTrees = [];
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                e.$vnode = i;
                // render self
                var s;
                try {
                    s = r.call(e._renderProxy, e.$createElement);
                } catch (t) {
                    G(t, e, "render function");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */
                    if (true) s = e.$options.renderError ? e.$options.renderError.call(e._renderProxy, e.$createElement, t) : e._vnode; else s = e._vnode;
                }
                // return empty vnode in case the render function errored out
                if (!(s instanceof ft)) {
                    if (Array.isArray(s)) V("Multiple root nodes returned from render function. Render function should return a single root node.", e);
                    s = pt();
                }
                // set parent
                s.parent = i;
                return s;
            };
            // internal render helpers.
            // these are exposed on the instance prototype to reduce generated render
            // code size.
            e.prototype._o = Jr;
            e.prototype._n = p;
            e.prototype._s = d;
            e.prototype._l = Wr;
            e.prototype._t = Qr;
            e.prototype._q = M;
            e.prototype._i = L;
            e.prototype._m = Zr;
            e.prototype._f = Xr;
            e.prototype._k = Yr;
            e.prototype._b = Kr;
            e.prototype._v = vt;
            e.prototype._e = pt;
            e.prototype._u = qt;
            e.prototype._g = tn;
        }(ln);
        /*  */
        function cn(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                // additional parameters
                var r = E(arguments, 1);
                r.unshift(this);
                if ("function" === typeof e.install) e.install.apply(e, r); else if ("function" === typeof e) e.apply(null, r);
                t.push(e);
                return this;
            };
        }
        /*  */
        function fn(e) {
            e.mixin = function(e) {
                this.options = We(this.options, e);
                return this;
            };
        }
        /*  */
        function dn(e) {
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
                var i = e._Ctor || (e._Ctor = {});
                if (i[n]) return i[n];
                var a = e.name || r.options.name;
                if (true) if (!/^[a-zA-Z][\w-]*$/.test(a)) V('Invalid component name: "' + a + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
                var o = function(e) {
                    this._init(e);
                };
                o.prototype = Object.create(r.prototype);
                o.prototype.constructor = o;
                o.cid = t++;
                o.options = We(r.options, e);
                o["super"] = r;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                if (o.options.props) pn(o);
                if (o.options.computed) vn(o);
                // allow further extension/mixin/plugin usage
                o.extend = r.extend;
                o.mixin = r.mixin;
                o.use = r.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                D.forEach(function(e) {
                    o[e] = r[e];
                });
                // enable recursive self-lookup
                if (a) o.options.components[a] = o;
                // keep a reference to the super options at extension time.
                // later at instantiation we can check if Super's options have
                // been updated.
                o.superOptions = r.options;
                o.extendOptions = e;
                o.sealedOptions = $({}, o.options);
                // cache constructor
                i[n] = o;
                return o;
            };
        }
        function pn(e) {
            var t = e.options.props;
            for (var r in t) mr(e.prototype, "_props", r);
        }
        function vn(e) {
            var t = e.options.computed;
            for (var r in t) kr(e.prototype, r, t[r]);
        }
        /*  */
        function hn(e) {
            /**
   * Create asset registration methods.
   */
            D.forEach(function(t) {
                e[t] = function(e, r) {
                    if (!r) return this.options[t + "s"][e]; else {
                        /* istanbul ignore if */
                        if (true) if ("component" === t && N.isReservedTag(e)) V("Do not use built-in or reserved HTML elements as component id: " + e);
                        if ("component" === t && l(r)) {
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
        var mn = [ String, RegExp, Array ];
        function _n(e) {
            return e && (e.Ctor.options.name || e.tag);
        }
        function yn(e, t) {
            if (Array.isArray(e)) return e.indexOf(t) > -1; else if ("string" === typeof e) return e.split(",").indexOf(t) > -1; else if (c(e)) return e.test(t);
            /* istanbul ignore next */
            return false;
        }
        function gn(e, t, r) {
            for (var n in e) {
                var i = e[n];
                if (i) {
                    var a = _n(i.componentOptions);
                    if (a && !r(a)) {
                        if (i !== t) bn(i);
                        e[n] = null;
                    }
                }
            }
        }
        function bn(e) {
            if (e) e.componentInstance.$destroy();
        }
        var wn = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: mn,
                exclude: mn
            },
            created: function() {
                this.cache = Object.create(null);
            },
            destroyed: function() {
                var e = this;
                for (var t in e.cache) bn(e.cache[t]);
            },
            watch: {
                include: function(e) {
                    gn(this.cache, this._vnode, function(t) {
                        return yn(e, t);
                    });
                },
                exclude: function(e) {
                    gn(this.cache, this._vnode, function(t) {
                        return !yn(e, t);
                    });
                }
            },
            render: function() {
                var e = Pt(this.$slots.default);
                var t = e && e.componentOptions;
                if (t) {
                    // check pattern
                    var r = _n(t);
                    if (r && (this.include && !yn(this.include, r) || this.exclude && yn(this.exclude, r))) return e;
                    var n = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    if (this.cache[n]) e.componentInstance = this.cache[n].componentInstance; else this.cache[n] = e;
                    e.data.keepAlive = true;
                }
                return e;
            }
        };
        var Cn = {
            KeepAlive: wn
        };
        !/*  */
        function(e) {
            // config
            var t = {};
            t.get = function() {
                return N;
            };
            if (true) t.set = function() {
                V("Do not replace the Vue.config object, set individual fields instead.");
            };
            Object.defineProperty(e, "config", t);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
            e.util = {
                warn: V,
                extend: $,
                mergeOptions: We,
                defineReactive: Pe
            };
            e.set = Me;
            e.delete = Le;
            e.nextTick = _e;
            e.options = Object.create(null);
            D.forEach(function(t) {
                e.options[t + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
            e.options._base = e;
            $(e.options.components, Cn);
            cn(e);
            fn(e);
            dn(e);
            hn(e);
        }(ln);
        Object.defineProperty(ln.prototype, "$isServer", {
            get: pe
        });
        Object.defineProperty(ln.prototype, "$ssrContext", {
            get: function() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        ln.version = "2.4.4";
        /*  */
        // these are reserved for web because they are directly compiled away
        // during template compilation
        var xn = v("style,class");
        // attributes that should be using props for binding
        var kn = v("input,textarea,option,select,progress");
        var On = function(e, t, r) {
            return "value" === r && kn(e) && "button" !== t || "selected" === r && "option" === e || "checked" === r && "input" === e || "muted" === r && "video" === e;
        };
        var An = v("contenteditable,draggable,spellcheck");
        var En = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible");
        var $n = "http://www.w3.org/1999/xlink";
        var jn = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
        };
        var Sn = function(e) {
            return jn(e) ? e.slice(6, e.length) : "";
        };
        var Tn = function(e) {
            return null == e || false === e;
        };
        /*  */
        function Pn(e) {
            var t = e.data;
            var r = e;
            var i = e;
            while (n(i.componentInstance)) {
                i = i.componentInstance._vnode;
                if (i.data) t = Mn(i.data, t);
            }
            while (n(r = r.parent)) if (r.data) t = Mn(t, r.data);
            return Ln(t.staticClass, t.class);
        }
        function Mn(e, t) {
            return {
                staticClass: Rn(e.staticClass, t.staticClass),
                class: n(e.class) ? [ e.class, t.class ] : t.class
            };
        }
        function Ln(e, t) {
            if (n(e) || n(t)) return Rn(e, In(t));
            /* istanbul ignore next */
            return "";
        }
        function Rn(e, t) {
            return e ? t ? e + " " + t : e : t || "";
        }
        function In(e) {
            if (Array.isArray(e)) return Dn(e);
            if (s(e)) return zn(e);
            if ("string" === typeof e) return e;
            /* istanbul ignore next */
            return "";
        }
        function Dn(e) {
            var t = "";
            var r;
            for (var i = 0, a = e.length; i < a; i++) if (n(r = In(e[i])) && "" !== r) {
                if (t) t += " ";
                t += r;
            }
            return t;
        }
        function zn(e) {
            var t = "";
            for (var r in e) if (e[r]) {
                if (t) t += " ";
                t += r;
            }
            return t;
        }
        /*  */
        var Nn = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        var qn = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.
        var Bn = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var Fn = function(e) {
            return qn(e) || Bn(e);
        };
        function Un(e) {
            if (Bn(e)) return "svg";
            // basic support for MathML
            // note it doesn't support other MathML elements being component roots
            if ("math" === e) return "math";
        }
        var Hn = Object.create(null);
        function Vn(e) {
            /* istanbul ignore if */
            if (!te) return true;
            if (Fn(e)) return false;
            e = e.toLowerCase();
            /* istanbul ignore if */
            if (null != Hn[e]) return Hn[e];
            var t = document.createElement(e);
            if (e.indexOf("-") > -1) // http://stackoverflow.com/a/28210364/1070244
            return Hn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement; else return Hn[e] = /HTMLUnknownElement/.test(t.toString());
        }
        var Wn = v("text,number,password,search,email,tel,url");
        /*  */
        /**
 * Query an element selector if it's not an element already.
 */
        function Qn(e) {
            if ("string" === typeof e) {
                var t = document.querySelector(e);
                if (!t) {
                    V("Cannot find element: " + e);
                    return document.createElement("div");
                }
                return t;
            } else return e;
        }
        /*  */
        function Xn(e, t) {
            var r = document.createElement(e);
            if ("select" !== e) return r;
            // false or null will remove the attribute but undefined will not
            if (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple) r.setAttribute("multiple", "multiple");
            return r;
        }
        function Yn(e, t) {
            return document.createElementNS(Nn[e], t);
        }
        function Kn(e) {
            return document.createTextNode(e);
        }
        function Zn(e) {
            return document.createComment(e);
        }
        function Jn(e, t, r) {
            e.insertBefore(t, r);
        }
        function Gn(e, t) {
            e.removeChild(t);
        }
        function ei(e, t) {
            e.appendChild(t);
        }
        function ti(e) {
            return e.parentNode;
        }
        function ri(e) {
            return e.nextSibling;
        }
        function ni(e) {
            return e.tagName;
        }
        function ii(e, t) {
            e.textContent = t;
        }
        function ai(e, t, r) {
            e.setAttribute(t, r);
        }
        var oi = Object.freeze({
            createElement: Xn,
            createElementNS: Yn,
            createTextNode: Kn,
            createComment: Zn,
            insertBefore: Jn,
            removeChild: Gn,
            appendChild: ei,
            parentNode: ti,
            nextSibling: ri,
            tagName: ni,
            setTextContent: ii,
            setAttribute: ai
        });
        /*  */
        var si = {
            create: function(e, t) {
                ui(t);
            },
            update: function(e, t) {
                if (e.data.ref !== t.data.ref) {
                    ui(e, true);
                    ui(t);
                }
            },
            destroy: function(e) {
                ui(e, true);
            }
        };
        function ui(e, t) {
            var r = e.data.ref;
            if (!r) return;
            var n = e.context;
            var i = e.componentInstance || e.elm;
            var a = n.$refs;
            if (t) {
                if (Array.isArray(a[r])) _(a[r], i); else if (a[r] === i) a[r] = void 0;
            } else if (e.data.refInFor) {
                if (!Array.isArray(a[r])) a[r] = [ i ]; else if (a[r].indexOf(i) < 0) // $flow-disable-line
                a[r].push(i);
            } else a[r] = i;
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
        var li = new ft("", {}, []);
        var ci = [ "create", "activate", "update", "remove", "destroy" ];
        function fi(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && n(e.data) === n(t.data) && di(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error));
        }
        function di(e, t) {
            if ("input" !== e.tag) return true;
            var r;
            var i = n(r = e.data) && n(r = r.attrs) && r.type;
            var a = n(r = t.data) && n(r = r.attrs) && r.type;
            return i === a || Wn(i) && Wn(a);
        }
        function pi(e, t, r) {
            var i, a;
            var o = {};
            for (i = t; i <= r; ++i) {
                a = e[i].key;
                if (n(a)) o[a] = i;
            }
            return o;
        }
        /*  */
        var vi = {
            create: hi,
            update: hi,
            destroy: function(e) {
                hi(e, li);
            }
        };
        function hi(e, t) {
            if (e.data.directives || t.data.directives) mi(e, t);
        }
        function mi(e, t) {
            var r = e === li;
            var n = t === li;
            var i = yi(e.data.directives, e.context);
            var a = yi(t.data.directives, t.context);
            var o = [];
            var s = [];
            var u, l, c;
            for (u in a) {
                l = i[u];
                c = a[u];
                if (!l) {
                    // new directive, bind
                    bi(c, "bind", t, e);
                    if (c.def && c.def.inserted) o.push(c);
                } else {
                    // existing directive, update
                    c.oldValue = l.value;
                    bi(c, "update", t, e);
                    if (c.def && c.def.componentUpdated) s.push(c);
                }
            }
            if (o.length) {
                var f = function() {
                    for (var r = 0; r < o.length; r++) bi(o[r], "inserted", t, e);
                };
                if (r) wt(t.data.hook || (t.data.hook = {}), "insert", f); else f();
            }
            if (s.length) wt(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var r = 0; r < s.length; r++) bi(s[r], "componentUpdated", t, e);
            });
            if (!r) for (u in i) if (!a[u]) // no longer present, unbind
            bi(i[u], "unbind", e, e, n);
        }
        var _i = Object.create(null);
        function yi(e, t) {
            var r = Object.create(null);
            if (!e) return r;
            var n, i;
            for (n = 0; n < e.length; n++) {
                i = e[n];
                if (!i.modifiers) i.modifiers = _i;
                r[gi(i)] = i;
                i.def = Qe(t.$options, "directives", i.name, true);
            }
            return r;
        }
        function gi(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
        }
        function bi(e, t, r, n, i) {
            var a = e.def && e.def[t];
            if (a) try {
                a(r.elm, e, r, n, i);
            } catch (n) {
                G(n, r.context, "directive " + e.name + " " + t + " hook");
            }
        }
        var wi = [ si, vi ];
        /*  */
        function Ci(e, t) {
            var i = t.componentOptions;
            if (n(i) && false === i.Ctor.options.inheritAttrs) return;
            if (r(e.data.attrs) && r(t.data.attrs)) return;
            var a, o, s;
            var u = t.elm;
            var l = e.data.attrs || {};
            var c = t.data.attrs || {};
            // clone observed objects, as the user probably wants to mutate it
            if (n(c.__ob__)) c = t.data.attrs = $({}, c);
            for (a in c) {
                o = c[a];
                s = l[a];
                if (s !== o) xi(u, a, o);
            }
            // #4391: in IE9, setting type can reset value for input[type=radio]
            /* istanbul ignore if */
            if (ie && c.value !== l.value) xi(u, "value", c.value);
            for (a in l) if (r(c[a])) if (jn(a)) u.removeAttributeNS($n, Sn(a)); else if (!An(a)) u.removeAttribute(a);
        }
        function xi(e, t, r) {
            if (En(t)) // set attribute for blank value
            // e.g. <option disabled>Select one</option>
            if (Tn(r)) e.removeAttribute(t); else {
                // technically allowfullscreen is a boolean attribute for <iframe>,
                // but Flash expects a value of "true" when used on <embed> tag
                r = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t;
                e.setAttribute(t, r);
            } else if (An(t)) e.setAttribute(t, Tn(r) || "false" === r ? "false" : "true"); else if (jn(t)) if (Tn(r)) e.removeAttributeNS($n, Sn(t)); else e.setAttributeNS($n, t, r); else if (Tn(r)) e.removeAttribute(t); else e.setAttribute(t, r);
        }
        var ki = {
            create: Ci,
            update: Ci
        };
        /*  */
        function Oi(e, t) {
            var i = t.elm;
            var a = t.data;
            var o = e.data;
            if (r(a.staticClass) && r(a.class) && (r(o) || r(o.staticClass) && r(o.class))) return;
            var s = Pn(t);
            // handle transition classes
            var u = i._transitionClasses;
            if (n(u)) s = Rn(s, In(u));
            // set the class
            if (s !== i._prevClass) {
                i.setAttribute("class", s);
                i._prevClass = s;
            }
        }
        var Ai = {
            create: Oi,
            update: Oi
        };
        /*  */
        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.
        var Ei = "__r";
        var $i = "__c";
        /*  */
        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.
        function ji(e) {
            var t;
            /* istanbul ignore if */
            if (n(e[Ei])) {
                // IE input[type=range] only supports `change` event
                t = ne ? "change" : "input";
                e[t] = [].concat(e[Ei], e[t] || []);
                delete e[Ei];
            }
            if (n(e[$i])) {
                // Chrome fires microtasks in between click/change, leads to #4521
                t = ue ? "click" : "change";
                e[t] = [].concat(e[$i], e[t] || []);
                delete e[$i];
            }
        }
        var Si;
        function Ti(e, t, r, n, i) {
            if (r) {
                var a = t;
                var o = Si;
                // save current target element in closure
                t = function(r) {
                    if (null !== (1 === arguments.length ? a(r) : a.apply(null, arguments))) Pi(e, t, n, o);
                };
            }
            Si.addEventListener(e, t, ce ? {
                capture: n,
                passive: i
            } : n);
        }
        function Pi(e, t, r, n) {
            (n || Si).removeEventListener(e, t, r);
        }
        function Mi(e, t) {
            if (r(e.data.on) && r(t.data.on)) return;
            var n = t.data.on || {};
            var i = e.data.on || {};
            Si = t.elm;
            ji(n);
            bt(n, i, Ti, Pi, t.context);
        }
        var Li = {
            create: Mi,
            update: Mi
        };
        /*  */
        function Ri(e, t) {
            if (r(e.data.domProps) && r(t.data.domProps)) return;
            var i, a;
            var o = t.elm;
            var s = e.data.domProps || {};
            var u = t.data.domProps || {};
            // clone observed objects, as the user probably wants to mutate it
            if (n(u.__ob__)) u = t.data.domProps = $({}, u);
            for (i in s) if (r(u[i])) o[i] = "";
            for (i in u) {
                a = u[i];
                // ignore children if the node has textContent or innerHTML,
                // as these will throw away existing DOM nodes and cause removal errors
                // on subsequent patches (#3360)
                if ("textContent" === i || "innerHTML" === i) {
                    if (t.children) t.children.length = 0;
                    if (a === s[i]) continue;
                }
                if ("value" === i) {
                    // store value as _value as well since
                    // non-string values will be stringified
                    o._value = a;
                    // avoid resetting cursor position when value is the same
                    var l = r(a) ? "" : String(a);
                    if (Ii(o, t, l)) o.value = l;
                } else o[i] = a;
            }
        }
        // check platforms/web/util/attrs.js acceptValue
        function Ii(e, t, r) {
            return !e.composing && ("option" === t.tag || Di(e, r) || zi(e, r));
        }
        function Di(e, t) {
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
        function zi(e, t) {
            var r = e.value;
            var i = e._vModifiers;
            // injected by v-model runtime
            if (n(i) && i.number) return p(r) !== p(t);
            if (n(i) && i.trim) return r.trim() !== t.trim();
            return r !== t;
        }
        var Ni = {
            create: Ri,
            update: Ri
        };
        /*  */
        var qi = b(function(e) {
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
        function Bi(e) {
            var t = Fi(e.style);
            // static style is pre-processed into an object during compilation
            // and is always a fresh object, so it's safe to merge into it
            return e.staticStyle ? $(e.staticStyle, t) : t;
        }
        // normalize possible array / string values into Object
        function Fi(e) {
            if (Array.isArray(e)) return j(e);
            if ("string" === typeof e) return qi(e);
            return e;
        }
        /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
        function Ui(e, t) {
            var r = {};
            var n;
            if (t) {
                var i = e;
                while (i.componentInstance) {
                    i = i.componentInstance._vnode;
                    if (i.data && (n = Bi(i.data))) $(r, n);
                }
            }
            if (n = Bi(e.data)) $(r, n);
            var a = e;
            while (a = a.parent) if (a.data && (n = Bi(a.data))) $(r, n);
            return r;
        }
        /*  */
        var Hi = /^--/;
        var Vi = /\s*!important$/;
        var Wi = function(e, t, r) {
            /* istanbul ignore if */
            if (Hi.test(t)) e.style.setProperty(t, r); else if (Vi.test(r)) e.style.setProperty(t, r.replace(Vi, ""), "important"); else {
                var n = Yi(t);
                if (Array.isArray(r)) // Support values array created by autoprefixer, e.g.
                // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                // Set them one by one, and the browser will only set those it can recognize
                for (var i = 0, a = r.length; i < a; i++) e.style[n] = r[i]; else e.style[n] = r;
            }
        };
        var Qi = [ "Webkit", "Moz", "ms" ];
        var Xi;
        var Yi = b(function(e) {
            Xi = Xi || document.createElement("div").style;
            e = C(e);
            if ("filter" !== e && e in Xi) return e;
            var t = e.charAt(0).toUpperCase() + e.slice(1);
            for (var r = 0; r < Qi.length; r++) {
                var n = Qi[r] + t;
                if (n in Xi) return n;
            }
        });
        function Ki(e, t) {
            var i = t.data;
            var a = e.data;
            if (r(i.staticStyle) && r(i.style) && r(a.staticStyle) && r(a.style)) return;
            var o, s;
            var u = t.elm;
            var l = a.staticStyle;
            var c = a.normalizedStyle || a.style || {};
            // if static style exists, stylebinding already merged into it when doing normalizeStyleData
            var f = l || c;
            var d = Fi(t.data.style) || {};
            // store normalized style under a different key for next diff
            // make sure to clone it if it's reactive, since the user likely wants
            // to mutate it.
            t.data.normalizedStyle = n(d.__ob__) ? $({}, d) : d;
            var p = Ui(t, true);
            for (s in f) if (r(p[s])) Wi(u, s, "");
            for (s in p) {
                o = p[s];
                if (o !== f[s]) // ie9 setting to null has no effect, must use empty string
                Wi(u, s, null == o ? "" : o);
            }
        }
        var Zi = {
            create: Ki,
            update: Ki
        };
        /*  */
        /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function Ji(e, t) {
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
        function Gi(e, t) {
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
        function ea(e) {
            if (!e) return;
            /* istanbul ignore else */
            if ("object" === typeof e) {
                var t = {};
                if (false !== e.css) $(t, ta(e.name || "v"));
                $(t, e);
                return t;
            } else if ("string" === typeof e) return ta(e);
        }
        var ta = b(function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            };
        });
        var ra = te && !ie;
        var na = "transition";
        var ia = "animation";
        // Transition property/event sniffing
        var aa = "transition";
        var oa = "transitionend";
        var sa = "animation";
        var ua = "animationend";
        if (ra) {
            /* istanbul ignore if */
            if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend) {
                aa = "WebkitTransition";
                oa = "webkitTransitionEnd";
            }
            if (void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend) {
                sa = "WebkitAnimation";
                ua = "webkitAnimationEnd";
            }
        }
        // binding to window is necessary to make hot reload work in IE in strict mode
        var la = te && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
        function ca(e) {
            la(function() {
                la(e);
            });
        }
        function fa(e, t) {
            var r = e._transitionClasses || (e._transitionClasses = []);
            if (r.indexOf(t) < 0) {
                r.push(t);
                Ji(e, t);
            }
        }
        function da(e, t) {
            if (e._transitionClasses) _(e._transitionClasses, t);
            Gi(e, t);
        }
        function pa(e, t, r) {
            var n = ha(e, t);
            var i = n.type;
            var a = n.timeout;
            var o = n.propCount;
            if (!i) return r();
            var s = i === na ? oa : ua;
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
            }, a + 1);
            e.addEventListener(s, c);
        }
        var va = /\b(transform|all)(,|$)/;
        function ha(e, t) {
            var r = window.getComputedStyle(e);
            var n = r[aa + "Delay"].split(", ");
            var i = r[aa + "Duration"].split(", ");
            var a = ma(n, i);
            var o = r[sa + "Delay"].split(", ");
            var s = r[sa + "Duration"].split(", ");
            var u = ma(o, s);
            var l;
            var c = 0;
            var f = 0;
            /* istanbul ignore if */
            if (t === na) {
                if (a > 0) {
                    l = na;
                    c = a;
                    f = i.length;
                }
            } else if (t === ia) {
                if (u > 0) {
                    l = ia;
                    c = u;
                    f = s.length;
                }
            } else {
                c = Math.max(a, u);
                l = c > 0 ? a > u ? na : ia : null;
                f = l ? l === na ? i.length : s.length : 0;
            }
            return {
                type: l,
                timeout: c,
                propCount: f,
                hasTransform: l === na && va.test(r[aa + "Property"])
            };
        }
        function ma(e, t) {
            /* istanbul ignore next */
            while (e.length < t.length) e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, r) {
                return _a(t) + _a(e[r]);
            }));
        }
        function _a(e) {
            return 1e3 * Number(e.slice(0, -1));
        }
        /*  */
        function ya(e, t) {
            var i = e.elm;
            // call leave callback now
            if (n(i._leaveCb)) {
                i._leaveCb.cancelled = true;
                i._leaveCb();
            }
            var a = ea(e.data.transition);
            if (r(a)) return;
            /* istanbul ignore if */
            if (n(i._enterCb) || 1 !== i.nodeType) return;
            var o = a.css;
            var u = a.type;
            var l = a.enterClass;
            var c = a.enterToClass;
            var f = a.enterActiveClass;
            var d = a.appearClass;
            var v = a.appearToClass;
            var h = a.appearActiveClass;
            var m = a.beforeEnter;
            var _ = a.enter;
            var y = a.afterEnter;
            var g = a.enterCancelled;
            var b = a.beforeAppear;
            var w = a.appear;
            var C = a.afterAppear;
            var x = a.appearCancelled;
            var k = a.duration;
            // activeInstance will always be the <transition> component managing this
            // transition. One edge case to check is when the <transition> is placed
            // as the root node of a child component. In that case we need to check
            // <transition>'s parent for appear check.
            var O = Bt;
            var A = Bt.$vnode;
            while (A && A.parent) {
                A = A.parent;
                O = A.context;
            }
            var E = !O._isMounted || !e.isRootInsert;
            if (E && !w && "" !== w) return;
            var $ = E && d ? d : l;
            var j = E && h ? h : f;
            var S = E && v ? v : c;
            var T = E ? b || m : m;
            var P = E ? "function" === typeof w ? w : _ : _;
            var M = E ? C || y : y;
            var L = E ? x || g : g;
            var I = p(s(k) ? k.enter : k);
            if (null != I) ba(I, "enter", e);
            var D = false !== o && !ie;
            var z = Ca(P);
            var N = i._enterCb = R(function() {
                if (D) {
                    da(i, S);
                    da(i, j);
                }
                if (N.cancelled) {
                    if (D) da(i, $);
                    L && L(i);
                } else M && M(i);
                i._enterCb = null;
            });
            if (!e.data.show) // remove pending leave element on enter by injecting an insert hook
            wt(e.data.hook || (e.data.hook = {}), "insert", function() {
                var t = i.parentNode;
                var r = t && t._pending && t._pending[e.key];
                if (r && r.tag === e.tag && r.elm._leaveCb) r.elm._leaveCb();
                P && P(i, N);
            });
            // start enter transition
            T && T(i);
            if (D) {
                fa(i, $);
                fa(i, j);
                ca(function() {
                    fa(i, S);
                    da(i, $);
                    if (!N.cancelled && !z) if (wa(I)) setTimeout(N, I); else pa(i, u, N);
                });
            }
            if (e.data.show) {
                t && t();
                P && P(i, N);
            }
            if (!D && !z) N();
        }
        function ga(e, t) {
            var i = e.elm;
            // call enter callback now
            if (n(i._enterCb)) {
                i._enterCb.cancelled = true;
                i._enterCb();
            }
            var a = ea(e.data.transition);
            if (r(a)) return t();
            /* istanbul ignore if */
            if (n(i._leaveCb) || 1 !== i.nodeType) return;
            var o = a.css;
            var u = a.type;
            var l = a.leaveClass;
            var c = a.leaveToClass;
            var f = a.leaveActiveClass;
            var d = a.beforeLeave;
            var v = a.leave;
            var h = a.afterLeave;
            var m = a.leaveCancelled;
            var _ = a.delayLeave;
            var y = a.duration;
            var g = false !== o && !ie;
            var b = Ca(v);
            var w = p(s(y) ? y.leave : y);
            if (n(w)) ba(w, "leave", e);
            var C = i._leaveCb = R(function() {
                if (i.parentNode && i.parentNode._pending) i.parentNode._pending[e.key] = null;
                if (g) {
                    da(i, c);
                    da(i, f);
                }
                if (C.cancelled) {
                    if (g) da(i, l);
                    m && m(i);
                } else {
                    t();
                    h && h(i);
                }
                i._leaveCb = null;
            });
            if (_) _(x); else x();
            function x() {
                // the delayed leave may have already been cancelled
                if (C.cancelled) return;
                // record leaving element
                if (!e.data.show) (i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e;
                d && d(i);
                if (g) {
                    fa(i, l);
                    fa(i, f);
                    ca(function() {
                        fa(i, c);
                        da(i, l);
                        if (!C.cancelled && !b) if (wa(w)) setTimeout(C, w); else pa(i, u, C);
                    });
                }
                v && v(i, C);
                if (!g && !b) C();
            }
        }
        // only used in dev mode
        function ba(e, t, r) {
            if ("number" !== typeof e) V("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", r.context); else if (isNaN(e)) V("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", r.context);
        }
        function wa(e) {
            return "number" === typeof e && !isNaN(e);
        }
        /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
        function Ca(e) {
            if (r(e)) return false;
            var t = e.fns;
            if (n(t)) // invoker
            return Ca(Array.isArray(t) ? t[0] : t); else return (e._length || e.length) > 1;
        }
        function xa(e, t) {
            if (true !== t.data.show) ya(t);
        }
        var ka = te ? {
            create: xa,
            activate: xa,
            remove: function(e, t) {
                /* istanbul ignore else */
                if (true !== e.data.show) ga(e, t); else t();
            }
        } : {};
        var Oa = [ ki, Ai, Li, Ni, Zi, ka ];
        /*  */
        // the directive module should be applied last, after all
        // built-in modules have been applied.
        var Aa = Oa.concat(wi);
        var Ea = function(e) {
            var t, a;
            var s = {};
            var u = e.modules;
            var l = e.nodeOps;
            for (t = 0; t < ci.length; ++t) {
                s[ci[t]] = [];
                for (a = 0; a < u.length; ++a) if (n(u[a][ci[t]])) s[ci[t]].push(u[a][ci[t]]);
            }
            function c(e) {
                return new ft(l.tagName(e).toLowerCase(), {}, [], void 0, e);
            }
            function f(e, t) {
                function r() {
                    if (0 === --r.listeners) d(e);
                }
                r.listeners = t;
                return r;
            }
            function d(e) {
                var t = l.parentNode(e);
                // element may have already been removed due to v-html / v-text
                if (n(t)) l.removeChild(t, e);
            }
            var p = 0;
            function h(e, t, r, a, o) {
                e.isRootInsert = !o;
                // for transition enter check
                if (m(e, t, r, a)) return;
                var s = e.data;
                var u = e.children;
                var c = e.tag;
                if (n(c)) {
                    if (true) {
                        if (s && s.pre) p++;
                        if (!p && !e.ns && !(N.ignoredElements.length && N.ignoredElements.indexOf(c) > -1) && N.isUnknownElement(c)) V("Unknown custom element: <" + c + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context);
                    }
                    e.elm = e.ns ? l.createElementNS(e.ns, c) : l.createElement(c, e);
                    x(e);
                    b(e, u, t);
                    if (n(s)) C(e, t);
                    g(r, e.elm, a);
                    if (s && s.pre) p--;
                } else if (i(e.isComment)) {
                    e.elm = l.createComment(e.text);
                    g(r, e.elm, a);
                } else {
                    e.elm = l.createTextNode(e.text);
                    g(r, e.elm, a);
                }
            }
            function m(e, t, r, a) {
                var o = e.data;
                if (n(o)) {
                    var s = n(e.componentInstance) && o.keepAlive;
                    if (n(o = o.hook) && n(o = o.init)) o(e, false, r, a);
                    // after calling the init hook, if the vnode is a child component
                    // it should've created a child instance and mounted it. the child
                    // component also has set the placeholder vnode's elm.
                    // in that case we can just return the element and be done.
                    if (n(e.componentInstance)) {
                        _(e, t);
                        if (i(s)) y(e, t, r, a);
                        return true;
                    }
                }
            }
            function _(e, t) {
                if (n(e.data.pendingInsert)) {
                    t.push.apply(t, e.data.pendingInsert);
                    e.data.pendingInsert = null;
                }
                e.elm = e.componentInstance.$el;
                if (w(e)) {
                    C(e, t);
                    x(e);
                } else {
                    // empty component root.
                    // skip all element-related modules except for ref (#3455)
                    ui(e);
                    // make sure to invoke the insert hook
                    t.push(e);
                }
            }
            function y(e, t, r, i) {
                var a;
                // hack for #4339: a reactivated component with inner transition
                // does not trigger because the inner node's created hooks are not called
                // again. It's not ideal to involve module-specific logic in here but
                // there doesn't seem to be a better way to do it.
                var o = e;
                while (o.componentInstance) {
                    o = o.componentInstance._vnode;
                    if (n(a = o.data) && n(a = a.transition)) {
                        for (a = 0; a < s.activate.length; ++a) s.activate[a](li, o);
                        t.push(o);
                        break;
                    }
                }
                // unlike a newly created component,
                // a reactivated keep-alive component doesn't insert itself
                g(r, e.elm, i);
            }
            function g(e, t, r) {
                if (n(e)) if (n(r)) {
                    if (r.parentNode === e) l.insertBefore(e, t, r);
                } else l.appendChild(e, t);
            }
            function b(e, t, r) {
                if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) h(t[n], r, e.elm, null, true); else if (o(e.text)) l.appendChild(e.elm, l.createTextNode(e.text));
            }
            function w(e) {
                while (e.componentInstance) e = e.componentInstance._vnode;
                return n(e.tag);
            }
            function C(e, r) {
                for (var i = 0; i < s.create.length; ++i) s.create[i](li, e);
                t = e.data.hook;
                // Reuse variable
                if (n(t)) {
                    if (n(t.create)) t.create(li, e);
                    if (n(t.insert)) r.push(e);
                }
            }
            // set scope id attribute for scoped CSS.
            // this is implemented as a special case to avoid the overhead
            // of going through the normal attribute patching process.
            function x(e) {
                var t;
                var r = e;
                while (r) {
                    if (n(t = r.context) && n(t = t.$options._scopeId)) l.setAttribute(e.elm, t, "");
                    r = r.parent;
                }
                // for slot content they should also get the scopeId from the host instance.
                if (n(t = Bt) && t !== e.context && n(t = t.$options._scopeId)) l.setAttribute(e.elm, t, "");
            }
            function k(e, t, r, n, i, a) {
                for (;n <= i; ++n) h(r[n], a, e, t);
            }
            function O(e) {
                var t, r;
                var i = e.data;
                if (n(i)) {
                    if (n(t = i.hook) && n(t = t.destroy)) t(e);
                    for (t = 0; t < s.destroy.length; ++t) s.destroy[t](e);
                }
                if (n(t = e.children)) for (r = 0; r < e.children.length; ++r) O(e.children[r]);
            }
            function A(e, t, r, i) {
                for (;r <= i; ++r) {
                    var a = t[r];
                    if (n(a)) if (n(a.tag)) {
                        E(a);
                        O(a);
                    } else // Text node
                    d(a.elm);
                }
            }
            function E(e, t) {
                if (n(t) || n(e.data)) {
                    var r;
                    var i = s.remove.length + 1;
                    if (n(t)) // we have a recursively passed down rm callback
                    // increase the listeners count
                    t.listeners += i; else // directly removing
                    t = f(e.elm, i);
                    // recursively invoke hooks on child component root node
                    if (n(r = e.componentInstance) && n(r = r._vnode) && n(r.data)) E(r, t);
                    for (r = 0; r < s.remove.length; ++r) s.remove[r](e, t);
                    if (n(r = e.data.hook) && n(r = r.remove)) r(e, t); else t();
                } else d(e.elm);
            }
            function $(e, t, i, a, o) {
                var s = 0;
                var u = 0;
                var c = t.length - 1;
                var f = t[0];
                var d = t[c];
                var p = i.length - 1;
                var v = i[0];
                var m = i[p];
                var _, y, g, b;
                // removeOnly is a special flag used only by <transition-group>
                // to ensure removed elements stay in correct relative positions
                // during leaving transitions
                var w = !o;
                while (s <= c && u <= p) if (r(f)) f = t[++s]; else if (r(d)) d = t[--c]; else if (fi(f, v)) {
                    S(f, v, a);
                    f = t[++s];
                    v = i[++u];
                } else if (fi(d, m)) {
                    S(d, m, a);
                    d = t[--c];
                    m = i[--p];
                } else if (fi(f, m)) {
                    // Vnode moved right
                    S(f, m, a);
                    w && l.insertBefore(e, f.elm, l.nextSibling(d.elm));
                    f = t[++s];
                    m = i[--p];
                } else if (fi(d, v)) {
                    // Vnode moved left
                    S(d, v, a);
                    w && l.insertBefore(e, d.elm, f.elm);
                    d = t[--c];
                    v = i[++u];
                } else {
                    if (r(_)) _ = pi(t, s, c);
                    y = n(v.key) ? _[v.key] : j(v, t, s, c);
                    if (r(y)) // New element
                    h(v, a, e, f.elm); else {
                        g = t[y];
                        /* istanbul ignore if */
                        if (!g) V("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key.");
                        if (fi(g, v)) {
                            S(g, v, a);
                            t[y] = void 0;
                            w && l.insertBefore(e, g.elm, f.elm);
                        } else // same key but different element. treat as new element
                        h(v, a, e, f.elm);
                    }
                    v = i[++u];
                }
                if (s > c) {
                    b = r(i[p + 1]) ? null : i[p + 1].elm;
                    k(e, b, i, u, p, a);
                } else if (u > p) A(e, t, s, c);
            }
            function j(e, t, r, i) {
                for (var a = r; a < i; a++) {
                    var o = t[a];
                    if (n(o) && fi(e, o)) return a;
                }
            }
            function S(e, t, a, o) {
                if (e === t) return;
                var u = t.elm = e.elm;
                if (i(e.isAsyncPlaceholder)) {
                    if (n(t.asyncFactory.resolved)) L(e.elm, t, a); else t.isAsyncPlaceholder = true;
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
                if (n(f) && n(c = f.hook) && n(c = c.prepatch)) c(e, t);
                var d = e.children;
                var p = t.children;
                if (n(f) && w(t)) {
                    for (c = 0; c < s.update.length; ++c) s.update[c](e, t);
                    if (n(c = f.hook) && n(c = c.update)) c(e, t);
                }
                if (r(t.text)) {
                    if (n(d) && n(p)) {
                        if (d !== p) $(u, d, p, a, o);
                    } else if (n(p)) {
                        if (n(e.text)) l.setTextContent(u, "");
                        k(u, null, p, 0, p.length - 1, a);
                    } else if (n(d)) A(u, d, 0, d.length - 1); else if (n(e.text)) l.setTextContent(u, "");
                } else if (e.text !== t.text) l.setTextContent(u, t.text);
                if (n(f)) if (n(c = f.hook) && n(c = c.postpatch)) c(e, t);
            }
            function T(e, t, r) {
                // delay insert hooks for component root nodes, invoke them after the
                // element is really inserted
                if (i(r) && n(e.parent)) e.parent.data.pendingInsert = t; else for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a]);
            }
            var P = false;
            // list of modules that can skip create hook during hydration because they
            // are already rendered on the client or has no need for initialization
            var M = v("attrs,style,class,staticClass,staticStyle,key");
            // Note: this is a browser-only function so we can assume elms are DOM nodes.
            function L(e, r, a) {
                if (i(r.isComment) && n(r.asyncFactory)) {
                    r.elm = e;
                    r.isAsyncPlaceholder = true;
                    return true;
                }
                if (true) if (!R(e, r)) return false;
                r.elm = e;
                var o = r.tag;
                var s = r.data;
                var u = r.children;
                if (n(s)) {
                    if (n(t = s.hook) && n(t = t.init)) t(r, true);
                    if (n(t = r.componentInstance)) {
                        // child component. it should have hydrated its own tree.
                        _(r, a);
                        return true;
                    }
                }
                if (n(o)) {
                    if (n(u)) // empty element, allow client to pick up and populate children
                    if (!e.hasChildNodes()) b(r, u, a); else // v-html and domProps: innerHTML
                    if (n(t = s) && n(t = t.domProps) && n(t = t.innerHTML)) {
                        if (t !== e.innerHTML) {
                            /* istanbul ignore if */
                            if ("undefined" !== typeof console && !P) {
                                P = true;
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
                            if (!c || !L(c, u[f], a)) {
                                l = false;
                                break;
                            }
                            c = c.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!l || c) {
                            /* istanbul ignore if */
                            if ("undefined" !== typeof console && !P) {
                                P = true;
                                console.warn("Parent: ", e);
                                console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, u);
                            }
                            return false;
                        }
                    }
                    if (n(s)) for (var d in s) if (!M(d)) {
                        C(r, a);
                        break;
                    }
                } else if (e.data !== r.text) e.data = r.text;
                return true;
            }
            function R(e, t) {
                if (n(t.tag)) return 0 === t.tag.indexOf("vue-component") || t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()); else return e.nodeType === (t.isComment ? 8 : 3);
            }
            return function(e, t, a, o, u, f) {
                if (r(t)) {
                    if (n(e)) O(e);
                    return;
                }
                var d = false;
                var p = [];
                if (r(e)) {
                    // empty mount (likely as component), create new root element
                    d = true;
                    h(t, p, u, f);
                } else {
                    var v = n(e.nodeType);
                    if (!v && fi(e, t)) // patch existing root node
                    S(e, t, p, o); else {
                        if (v) {
                            // mounting to a real element
                            // check if this is server-rendered content and if we can perform
                            // a successful hydration.
                            if (1 === e.nodeType && e.hasAttribute(I)) {
                                e.removeAttribute(I);
                                a = true;
                            }
                            if (i(a)) if (L(e, t, p)) {
                                T(t, p, true);
                                return e;
                            } else if (true) V("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                            // either not server-rendered, or hydration failed.
                            // create an empty node and replace it
                            e = c(e);
                        }
                        // replacing existing element
                        var m = e.elm;
                        var _ = l.parentNode(m);
                        h(t, p, // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        m._leaveCb ? null : _, l.nextSibling(m));
                        if (n(t.parent)) {
                            // component root element replaced.
                            // update parent placeholder node element, recursively
                            var y = t.parent;
                            var g = w(t);
                            while (y) {
                                for (var b = 0; b < s.destroy.length; ++b) s.destroy[b](y);
                                y.elm = t.elm;
                                if (g) {
                                    for (var C = 0; C < s.create.length; ++C) s.create[C](li, y);
                                    // #6513
                                    // invoke insert hooks that may have been merged by create hooks.
                                    // e.g. for directives that uses the "inserted" hook.
                                    var x = y.data.hook.insert;
                                    if (x.merged) // start at index 1 to avoid re-invoking component mounted hook
                                    for (var k = 1; k < x.fns.length; k++) x.fns[k]();
                                }
                                y = y.parent;
                            }
                        }
                        if (n(_)) A(_, [ e ], 0, 0); else if (n(e.tag)) O(e);
                    }
                }
                T(t, p, d);
                return t.elm;
            };
        }({
            nodeOps: oi,
            modules: Aa
        });
        /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
        /* istanbul ignore if */
        if (ie) // http://www.matts411.com/post/internet-explorer-9-oninput/
        document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            if (e && e.vmodel) Ra(e, "input");
        });
        var $a = {
            inserted: function(e, t, r) {
                if ("select" === r.tag) {
                    ja(e, t, r.context);
                    e._vOptions = [].map.call(e.options, Pa);
                } else if ("textarea" === r.tag || Wn(e.type)) {
                    e._vModifiers = t.modifiers;
                    if (!t.modifiers.lazy) {
                        // Safari < 10.2 & UIWebView doesn't fire compositionend when
                        // switching focus before confirming composition choice
                        // this also fixes the issue where some browsers e.g. iOS Chrome
                        // fires "change" instead of "input" on autocomplete.
                        e.addEventListener("change", La);
                        if (!oe) {
                            e.addEventListener("compositionstart", Ma);
                            e.addEventListener("compositionend", La);
                        }
                        /* istanbul ignore if */
                        if (ie) e.vmodel = true;
                    }
                }
            },
            componentUpdated: function(e, t, r) {
                if ("select" === r.tag) {
                    ja(e, t, r.context);
                    // in case the options rendered by v-for have changed,
                    // it's possible that the value is out-of-sync with the rendered options.
                    // detect such cases and filter out values that no longer has a matching
                    // option in the DOM.
                    var n = e._vOptions;
                    var i = e._vOptions = [].map.call(e.options, Pa);
                    if (i.some(function(e, t) {
                        return !M(e, n[t]);
                    })) {
                        if (e.multiple ? t.value.some(function(e) {
                            return Ta(e, i);
                        }) : t.value !== t.oldValue && Ta(t.value, i)) Ra(e, "change");
                    }
                }
            }
        };
        function ja(e, t, r) {
            Sa(e, t, r);
            /* istanbul ignore if */
            if (ne || ae) setTimeout(function() {
                Sa(e, t, r);
            }, 0);
        }
        function Sa(e, t, r) {
            var n = t.value;
            var i = e.multiple;
            if (i && !Array.isArray(n)) {
                V('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(n).slice(8, -1), r);
                return;
            }
            var a, o;
            for (var s = 0, u = e.options.length; s < u; s++) {
                o = e.options[s];
                if (i) {
                    a = L(n, Pa(o)) > -1;
                    if (o.selected !== a) o.selected = a;
                } else if (M(Pa(o), n)) {
                    if (e.selectedIndex !== s) e.selectedIndex = s;
                    return;
                }
            }
            if (!i) e.selectedIndex = -1;
        }
        function Ta(e, t) {
            return t.every(function(t) {
                return !M(t, e);
            });
        }
        function Pa(e) {
            return "_value" in e ? e._value : e.value;
        }
        function Ma(e) {
            e.target.composing = true;
        }
        function La(e) {
            // prevent triggering an input event for no reason
            if (!e.target.composing) return;
            e.target.composing = false;
            Ra(e.target, "input");
        }
        function Ra(e, t) {
            var r = document.createEvent("HTMLEvents");
            r.initEvent(t, true, true);
            e.dispatchEvent(r);
        }
        /*  */
        // recursively search for possible transition defined inside the component root
        function Ia(e) {
            return e.componentInstance && (!e.data || !e.data.transition) ? Ia(e.componentInstance._vnode) : e;
        }
        var Da = {
            bind: function(e, t, r) {
                var n = t.value;
                r = Ia(r);
                var i = r.data && r.data.transition;
                var a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                if (n && i) {
                    r.data.show = true;
                    ya(r, function() {
                        e.style.display = a;
                    });
                } else e.style.display = n ? a : "none";
            },
            update: function(e, t, r) {
                var n = t.value;
                /* istanbul ignore if */
                if (n === t.oldValue) return;
                r = Ia(r);
                if (r.data && r.data.transition) {
                    r.data.show = true;
                    if (n) ya(r, function() {
                        e.style.display = e.__vOriginalDisplay;
                    }); else ga(r, function() {
                        e.style.display = "none";
                    });
                } else e.style.display = n ? e.__vOriginalDisplay : "none";
            },
            unbind: function(e, t, r, n, i) {
                if (!i) e.style.display = e.__vOriginalDisplay;
            }
        };
        var za = {
            model: $a,
            show: Da
        };
        /*  */
        // Provides transition support for a single element/component.
        // supports transition mode (out-in / in-out)
        var Na = {
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
        function qa(e) {
            var t = e && e.componentOptions;
            if (t && t.Ctor.options.abstract) return qa(Pt(t.children)); else return e;
        }
        function Ba(e) {
            var t = {};
            var r = e.$options;
            // props
            for (var n in r.propsData) t[n] = e[n];
            // events.
            // extract listeners and pass them directly to the transition methods
            var i = r._parentListeners;
            for (var a in i) t[C(a)] = i[a];
            return t;
        }
        function Fa(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
                props: t.componentOptions.propsData
            });
        }
        function Ua(e) {
            while (e = e.parent) if (e.data.transition) return true;
        }
        function Ha(e, t) {
            return t.key === e.key && t.tag === e.tag;
        }
        var Va = {
            name: "transition",
            props: Na,
            abstract: true,
            render: function(e) {
                var t = this;
                var r = this.$options._renderChildren;
                if (!r) return;
                // filter out text nodes (possible whitespaces)
                r = r.filter(function(e) {
                    return e.tag || Tt(e);
                });
                /* istanbul ignore if */
                if (!r.length) return;
                // warn multiple elements
                if (r.length > 1) V("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                var n = this.mode;
                // warn invalid mode
                if (n && "in-out" !== n && "out-in" !== n) V("invalid <transition> mode: " + n, this.$parent);
                var i = r[0];
                // if this is a component root node and the component's
                // parent container node also has transition, skip.
                if (Ua(this.$vnode)) return i;
                // apply transition data to child
                // use getRealChild() to ignore abstract components e.g. keep-alive
                var a = qa(i);
                /* istanbul ignore if */
                if (!a) return i;
                if (this._leaving) return Fa(e, i);
                // ensure a key that is unique to the vnode type and to this transition
                // component instance. This key will be used to remove pending leaving nodes
                // during entering.
                var s = "__transition-" + this._uid + "-";
                a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : o(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                var u = (a.data || (a.data = {})).transition = Ba(this);
                var l = this._vnode;
                var c = qa(l);
                // mark v-show
                // so that the transition module can hand over the control to the directive
                if (a.data.directives && a.data.directives.some(function(e) {
                    return "show" === e.name;
                })) a.data.show = true;
                if (c && c.data && !Ha(a, c) && !Tt(c)) {
                    // replace old child transition data with fresh one
                    // important for dynamic transitions!
                    var f = c && (c.data.transition = $({}, u));
                    // handle transition mode
                    if ("out-in" === n) {
                        // return placeholder node and queue update when leave finishes
                        this._leaving = true;
                        wt(f, "afterLeave", function() {
                            t._leaving = false;
                            t.$forceUpdate();
                        });
                        return Fa(e, i);
                    } else if ("in-out" === n) {
                        if (Tt(a)) return l;
                        var d;
                        var p = function() {
                            d();
                        };
                        wt(u, "afterEnter", p);
                        wt(u, "enterCancelled", p);
                        wt(f, "delayLeave", function(e) {
                            d = e;
                        });
                    }
                }
                return i;
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
        var Wa = $({
            tag: String,
            moveClass: String
        }, Na);
        delete Wa.mode;
        var Qa = {
            props: Wa,
            render: function(e) {
                var t = this.tag || this.$vnode.data.tag || "span";
                var r = Object.create(null);
                var n = this.prevChildren = this.children;
                var i = this.$slots.default || [];
                var a = this.children = [];
                var o = Ba(this);
                for (var s = 0; s < i.length; s++) {
                    var u = i[s];
                    if (u.tag) if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) {
                        a.push(u);
                        r[u.key] = u;
                        (u.data || (u.data = {})).transition = o;
                    } else if (true) {
                        var l = u.componentOptions;
                        var c = l ? l.Ctor.options.name || l.tag || "" : u.tag;
                        V("<transition-group> children must be keyed: <" + c + ">");
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
                return e(t, null, a);
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
                e.forEach(Xa);
                e.forEach(Ya);
                e.forEach(Ka);
                // force reflow to put everything in position
                var r = document.body;
                r.offsetHeight;
                // eslint-disable-line
                e.forEach(function(e) {
                    if (e.data.moved) {
                        var r = e.elm;
                        var n = r.style;
                        fa(r, t);
                        n.transform = n.WebkitTransform = n.transitionDuration = "";
                        r.addEventListener(oa, r._moveCb = function e(n) {
                            if (!n || /transform$/.test(n.propertyName)) {
                                r.removeEventListener(oa, e);
                                r._moveCb = null;
                                da(r, t);
                            }
                        });
                    }
                });
            },
            methods: {
                hasMove: function(e, t) {
                    /* istanbul ignore if */
                    if (!ra) return false;
                    /* istanbul ignore if */
                    if (this._hasMove) return this._hasMove;
                    // Detect whether an element with the move class applied has
                    // CSS transitions. Since the element may be inside an entering
                    // transition at this very moment, we make a clone of it and remove
                    // all other transition classes applied to ensure only the move class
                    // is applied.
                    var r = e.cloneNode();
                    if (e._transitionClasses) e._transitionClasses.forEach(function(e) {
                        Gi(r, e);
                    });
                    Ji(r, t);
                    r.style.display = "none";
                    this.$el.appendChild(r);
                    var n = ha(r);
                    this.$el.removeChild(r);
                    return this._hasMove = n.hasTransform;
                }
            }
        };
        function Xa(e) {
            /* istanbul ignore if */
            if (e.elm._moveCb) e.elm._moveCb();
            /* istanbul ignore if */
            if (e.elm._enterCb) e.elm._enterCb();
        }
        function Ya(e) {
            e.data.newPos = e.elm.getBoundingClientRect();
        }
        function Ka(e) {
            var t = e.data.pos;
            var r = e.data.newPos;
            var n = t.left - r.left;
            var i = t.top - r.top;
            if (n || i) {
                e.data.moved = true;
                var a = e.elm.style;
                a.transform = a.WebkitTransform = "translate(" + n + "px," + i + "px)";
                a.transitionDuration = "0s";
            }
        }
        var Za = {
            Transition: Va,
            TransitionGroup: Qa
        };
        /*  */
        // install platform specific utils
        ln.config.mustUseProp = On;
        ln.config.isReservedTag = Fn;
        ln.config.isReservedAttr = xn;
        ln.config.getTagNamespace = Un;
        ln.config.isUnknownElement = Vn;
        // install platform runtime directives & components
        $(ln.options.directives, za);
        $(ln.options.components, Za);
        // install platform patch function
        ln.prototype.__patch__ = te ? Ea : S;
        // public mount method
        ln.prototype.$mount = function(e, t) {
            e = e && te ? Qn(e) : void 0;
            return Ht(this, e, t);
        };
        // devtools global hook
        /* istanbul ignore next */
        setTimeout(function() {
            if (N.devtools) if (ve) ve.emit("init", ln); else if (ue) console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
            if (false !== N.productionTip && te && "undefined" !== typeof console) console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
        }, 0);
        /*  */
        /* harmony default export */
        t["default"] = ln;
    }).call(t, r(41));
}, /* 41 */
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
}, /* 42 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
    /*  */
    function n(e, t) {
        if (!e) throw new Error("[vue-router] " + t);
    }
    function i(e, t) {
        if (!e) "undefined" !== typeof console && console.warn("[vue-router] " + t);
    }
    function a(e) {
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
            var i = t.parent;
            var a = t.data;
            a.routerView = true;
            // directly use parent context's createElement() function
            // so that components rendered by router-view can resolve named slots
            var o = i.$createElement;
            var u = r.name;
            var l = i.$route;
            var c = i._routerViewCache || (i._routerViewCache = {});
            // determine current view depth, also check to see if the tree
            // has been toggled inactive but kept-alive.
            var f = 0;
            var d = false;
            while (i && i._routerRoot !== i) {
                if (i.$vnode && i.$vnode.data.routerView) f++;
                if (i._inactive) d = true;
                i = i.$parent;
            }
            a.routerViewDepth = f;
            // render previous view if the tree is inactive and kept-alive
            if (d) return o(c[u], a, n);
            var p = l.matched[f];
            // render empty node if no matched route
            if (!p) {
                c[u] = null;
                return o();
            }
            var v = c[u] = p.components[u];
            // attach instance registration hook
            // this will be called in the instance's injected lifecycle hooks
            a.registerRouteInstance = function(e, t) {
                // val could be undefined for unregistration
                var r = p.instances[u];
                if (t && r !== e || !t && r === e) p.instances[u] = t;
            };
            (a.hook || (a.hook = {})).prepatch = function(e, t) {
                p.instances[u] = t.componentInstance;
            };
            // resolve props
            a.props = s(l, p.props && p.props[u]);
            return o(v, a, n);
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
            if (true) i(false, 'props in "' + e.path + '" is a ' + typeof t + ", expecting an object, function or boolean.");
        }
    }
    /*  */
    var u = /[!'()*]/g;
    var l = function(e) {
        return "%" + e.charCodeAt(0).toString(16);
    };
    var c = /%2C/g;
    // fixed encodeURIComponent which is more conformant to RFC3986:
    // - escapes [!'()*]
    // - preserve commas
    var f = function(e) {
        return encodeURIComponent(e).replace(u, l).replace(c, ",");
    };
    var d = decodeURIComponent;
    function p(e, t, r) {
        if (void 0 === t) t = {};
        var n = r || v;
        var a;
        try {
            a = n(e || "");
        } catch (e) {
            i(false, e.message);
            a = {};
        }
        for (var o in t) {
            var s = t[o];
            a[o] = Array.isArray(s) ? s.slice() : s;
        }
        return a;
    }
    function v(e) {
        var t = {};
        e = e.trim().replace(/^(\?|#|&)/, "");
        if (!e) return t;
        e.split("&").forEach(function(e) {
            var r = e.replace(/\+/g, " ").split("=");
            var n = d(r.shift());
            var i = r.length > 0 ? d(r.join("=")) : null;
            if (void 0 === t[n]) t[n] = i; else if (Array.isArray(t[n])) t[n].push(i); else t[n] = [ t[n], i ];
        });
        return t;
    }
    function h(e) {
        var t = e ? Object.keys(e).map(function(t) {
            var r = e[t];
            if (void 0 === r) return "";
            if (null === r) return f(t);
            if (Array.isArray(r)) {
                var n = [];
                r.forEach(function(e) {
                    if (void 0 === e) return;
                    if (null === e) n.push(f(t)); else n.push(f(t) + "=" + f(e));
                });
                return n.join("&");
            }
            return f(t) + "=" + f(r);
        }).filter(function(e) {
            return e.length > 0;
        }).join("&") : null;
        return t ? "?" + t : "";
    }
    /*  */
    var m = /\/?$/;
    function _(e, t, r, n) {
        var i = n && n.options.stringifyQuery;
        var a = {
            name: t.name || e && e.name,
            meta: e && e.meta || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: t.query || {},
            params: t.params || {},
            fullPath: b(t, i),
            matched: e ? g(e) : []
        };
        if (r) a.redirectedFrom = b(r, i);
        return Object.freeze(a);
    }
    // the starting route that represents the initial state
    var y = _(null, {
        path: "/"
    });
    function g(e) {
        var t = [];
        while (e) {
            t.unshift(e);
            e = e.parent;
        }
        return t;
    }
    function b(e, t) {
        var r = e.path;
        var n = e.query;
        if (void 0 === n) n = {};
        var i = e.hash;
        if (void 0 === i) i = "";
        var a = t || h;
        return (r || "/") + a(n) + i;
    }
    function w(e, t) {
        if (t === y) return e === t; else if (!t) return false; else if (e.path && t.path) return e.path.replace(m, "") === t.path.replace(m, "") && e.hash === t.hash && C(e.query, t.query); else if (e.name && t.name) return e.name === t.name && e.hash === t.hash && C(e.query, t.query) && C(e.params, t.params); else return false;
    }
    function C(e, t) {
        if (void 0 === e) e = {};
        if (void 0 === t) t = {};
        var r = Object.keys(e);
        var n = Object.keys(t);
        if (r.length !== n.length) return false;
        return r.every(function(r) {
            var n = e[r];
            var i = t[r];
            // check nested equality
            if ("object" === typeof n && "object" === typeof i) return C(n, i);
            return String(n) === String(i);
        });
    }
    function x(e, t) {
        return 0 === e.path.replace(m, "/").indexOf(t.path.replace(m, "/")) && (!t.hash || e.hash === t.hash) && k(e.query, t.query);
    }
    function k(e, t) {
        for (var r in t) if (!(r in e)) return false;
        return true;
    }
    /*  */
    // work around weird flow bug
    var O = [ String, Object ];
    var A = [ String, Array ];
    var E = {
        name: "router-link",
        props: {
            to: {
                type: O,
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
                type: A,
                default: "click"
            }
        },
        render: function(e) {
            var t = this;
            var r = this.$router;
            var n = this.$route;
            var i = r.resolve(this.to, n, this.append);
            var a = i.location;
            var o = i.route;
            var s = i.href;
            var u = {};
            var l = r.options.linkActiveClass;
            var c = r.options.linkExactActiveClass;
            // Support global empty active class
            var f = null == l ? "router-link-active" : l;
            var d = null == c ? "router-link-exact-active" : c;
            var p = null == this.activeClass ? f : this.activeClass;
            var v = null == this.exactActiveClass ? d : this.exactActiveClass;
            var h = a.path ? _(null, a, null, r) : o;
            u[v] = w(n, h);
            u[p] = this.exact ? u[v] : x(n, h);
            var m = function(e) {
                if ($(e)) if (t.replace) r.replace(a); else r.push(a);
            };
            var y = {
                click: $
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
                var b = j(this.$slots.default);
                if (b) {
                    // in case the <a> is a static node
                    b.isStatic = false;
                    var C = S.util.extend;
                    (b.data = C({}, b.data)).on = y;
                    (b.data.attrs = C({}, b.data.attrs)).href = s;
                } else // doesn't have <a> child, apply listener to self
                g.on = y;
            }
            return e(this.tag, g, this.$slots.default);
        }
    };
    function $(e) {
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
    function j(e) {
        if (e) {
            var t;
            for (var r = 0; r < e.length; r++) {
                t = e[r];
                if ("a" === t.tag) return t;
                if (t.children && (t = j(t.children))) return t;
            }
        }
    }
    var S;
    function T(e) {
        if (T.installed) return;
        T.installed = true;
        S = e;
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
        e.component("router-link", E);
        var n = e.config.optionMergeStrategies;
        // use the same hook merging strategy for route hooks
        n.beforeRouteEnter = n.beforeRouteLeave = n.beforeRouteUpdate = n.created;
    }
    /*  */
    var P = "undefined" !== typeof window;
    /*  */
    function M(e, t, r) {
        var n = e.charAt(0);
        if ("/" === n) return e;
        if ("?" === n || "#" === n) return t + e;
        var i = t.split("/");
        // remove trailing segment if:
        // - not appending
        // - appending to trailing slash (last segment is empty)
        if (!r || !i[i.length - 1]) i.pop();
        // resolve relative path
        var a = e.replace(/^\//, "").split("/");
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (".." === s) i.pop(); else if ("." !== s) i.push(s);
        }
        // ensure leading slash
        if ("" !== i[0]) i.unshift("");
        return i.join("/");
    }
    function L(e) {
        var t = "";
        var r = "";
        var n = e.indexOf("#");
        if (n >= 0) {
            t = e.slice(n);
            e = e.slice(0, n);
        }
        var i = e.indexOf("?");
        if (i >= 0) {
            r = e.slice(i + 1);
            e = e.slice(0, i);
        }
        return {
            path: e,
            query: r,
            hash: t
        };
    }
    function R(e) {
        return e.replace(/\/\//g, "/");
    }
    var I = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e);
    };
    /**
 * Expose `pathToRegexp`.
 */
    var D = re;
    var z = U;
    var N = H;
    var q = Q;
    var B = te;
    /**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
    var F = new RegExp([ // Match escaped characters that would otherwise appear in future matches.
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
    function U(e, t) {
        var r = [];
        var n = 0;
        var i = 0;
        var a = "";
        var o = t && t.delimiter || "/";
        var s;
        while (null != (s = F.exec(e))) {
            var u = s[0];
            var l = s[1];
            var c = s.index;
            a += e.slice(i, c);
            i = c + u.length;
            // Ignore already escaped sequences.
            if (l) {
                a += l[1];
                continue;
            }
            var f = e[i];
            var d = s[2];
            var p = s[3];
            var v = s[4];
            var h = s[5];
            var m = s[6];
            var _ = s[7];
            // Push the current path onto the tokens.
            if (a) {
                r.push(a);
                a = "";
            }
            var y = null != d && null != f && f !== d;
            var g = "+" === m || "*" === m;
            var b = "?" === m || "*" === m;
            var w = s[2] || o;
            var C = v || h;
            r.push({
                name: p || n++,
                prefix: d || "",
                delimiter: w,
                optional: b,
                repeat: g,
                partial: y,
                asterisk: !!_,
                pattern: C ? Y(C) : _ ? ".*" : "[^" + X(w) + "]+?"
            });
        }
        // Match any characters still remaining.
        if (i < e.length) a += e.substr(i);
        // If the path exists, push it onto the end.
        if (a) r.push(a);
        return r;
    }
    /**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
    function H(e, t) {
        return Q(U(e, t));
    }
    /**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
    function V(e) {
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
    function W(e) {
        return encodeURI(e).replace(/[?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    /**
 * Expose a method for transforming tokens into the path function.
 */
    function Q(e) {
        // Compile all the tokens into regexps.
        var t = new Array(e.length);
        // Compile all the patterns before compilation.
        for (var r = 0; r < e.length; r++) if ("object" === typeof e[r]) t[r] = new RegExp("^(?:" + e[r].pattern + ")$");
        return function(r, n) {
            var i = "";
            var a = r || {};
            var o = n || {};
            var s = o.pretty ? V : encodeURIComponent;
            for (var u = 0; u < e.length; u++) {
                var l = e[u];
                if ("string" === typeof l) {
                    i += l;
                    continue;
                }
                var c = a[l.name];
                var f;
                if (null == c) if (l.optional) {
                    // Prepend partial segment prefixes.
                    if (l.partial) i += l.prefix;
                    continue;
                } else throw new TypeError('Expected "' + l.name + '" to be defined');
                if (I(c)) {
                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                    if (0 === c.length) if (l.optional) continue; else throw new TypeError('Expected "' + l.name + '" to not be empty');
                    for (var d = 0; d < c.length; d++) {
                        f = s(c[d]);
                        if (!t[u].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                        i += (0 === d ? l.prefix : l.delimiter) + f;
                    }
                    continue;
                }
                f = l.asterisk ? W(c) : s(c);
                if (!t[u].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                i += l.prefix + f;
            }
            return i;
        };
    }
    /**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
    function X(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    /**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
    function Y(e) {
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
    function Z(e) {
        return e.sensitive ? "" : "i";
    }
    /**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
    function J(e, t) {
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
    function G(e, t, r) {
        var n = [];
        for (var i = 0; i < e.length; i++) n.push(re(e[i], t, r).source);
        return K(new RegExp("(?:" + n.join("|") + ")", Z(r)), t);
    }
    /**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
    function ee(e, t, r) {
        return te(U(e, r), t, r);
    }
    /**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
    function te(e, t, r) {
        if (!I(t)) {
            r = /** @type {!Object} */ t || r;
            t = [];
        }
        r = r || {};
        var n = r.strict;
        var i = false !== r.end;
        var a = "";
        // Iterate over the tokens and create our regexp string.
        for (var o = 0; o < e.length; o++) {
            var s = e[o];
            if ("string" === typeof s) a += X(s); else {
                var u = X(s.prefix);
                var l = "(?:" + s.pattern + ")";
                t.push(s);
                if (s.repeat) l += "(?:" + u + l + ")*";
                if (s.optional) if (!s.partial) l = "(?:" + u + "(" + l + "))?"; else l = u + "(" + l + ")?"; else l = u + "(" + l + ")";
                a += l;
            }
        }
        var c = X(r.delimiter || "/");
        var f = a.slice(-c.length) === c;
        // In non-strict mode we allow a slash at the end of match. If the path to
        // match already ends with a slash, we remove it for consistency. The slash
        // is valid at the end of a path match, not in the middle. This is important
        // in non-ending mode, where "/test/" shouldn't match "/test//route".
        if (!n) a = (f ? a.slice(0, -c.length) : a) + "(?:" + c + "(?=$))?";
        if (i) a += "$"; else // In non-ending mode, we need the capturing groups to match as much as
        // possible by using a positive lookahead to the end or next path segment.
        a += n && f ? "" : "(?=" + c + "|$)";
        return K(new RegExp("^" + a, Z(r)), t);
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
    function re(e, t, r) {
        if (!I(t)) {
            r = /** @type {!Object} */ t || r;
            t = [];
        }
        r = r || {};
        if (e instanceof RegExp) /** @type {!Array} */
        return J(e, t);
        if (I(e)) /** @type {!Array} */
        /** @type {!Array} */
        return G(e, t, r);
        /** @type {string} */
        /** @type {!Array} */
        return ee(e, t, r);
    }
    D.parse = z;
    D.compile = N;
    D.tokensToFunction = q;
    D.tokensToRegExp = B;
    /*  */
    var ne = Object.create(null);
    function ie(e, t, r) {
        try {
            return (ne[e] || (ne[e] = D.compile(e)))(t || {}, {
                pretty: true
            });
        } catch (e) {
            if (true) i(false, "missing param for " + r + ": " + e.message);
            return "";
        }
    }
    /*  */
    function ae(e, t, r, n) {
        // the path list is used to control path matching priority
        var i = t || [];
        var a = r || Object.create(null);
        var o = n || Object.create(null);
        e.forEach(function(e) {
            oe(i, a, o, e);
        });
        // ensure wildcard routes are always at the end
        for (var s = 0, u = i.length; s < u; s++) if ("*" === i[s]) {
            i.push(i.splice(s, 1)[0]);
            u--;
            s--;
        }
        return {
            pathList: i,
            pathMap: a,
            nameMap: o
        };
    }
    function oe(e, t, r, a, o, s) {
        var u = a.path;
        var l = a.name;
        if (true) {
            n(null != u, '"path" is required in a route configuration.');
            n("string" !== typeof a.component, 'route config "component" for path: ' + String(u || l) + " cannot be a string id. Use an actual component instead.");
        }
        var c = ue(u, o);
        var f = a.pathToRegexpOptions || {};
        if ("boolean" === typeof a.caseSensitive) f.sensitive = a.caseSensitive;
        var d = {
            path: c,
            regex: se(c, f),
            components: a.components || {
                default: a.component
            },
            instances: {},
            name: l,
            parent: o,
            matchAs: s,
            redirect: a.redirect,
            beforeEnter: a.beforeEnter,
            meta: a.meta || {},
            props: null == a.props ? {} : a.components ? a.props : {
                default: a.props
            }
        };
        if (a.children) {
            // Warn if route is named, does not redirect and has a default child route.
            // If users navigate to this route by name, the default child will
            // not be rendered (GH Issue #629)
            if (true) if (a.name && !a.redirect && a.children.some(function(e) {
                return /^\/?$/.test(e.path);
            })) i(false, "Named Route '" + a.name + "' has a default child route. When navigating to this named route (:to=\"{name: '" + a.name + "'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.");
            a.children.forEach(function(n) {
                var i = s ? R(s + "/" + n.path) : void 0;
                oe(e, t, r, n, d, i);
            });
        }
        if (void 0 !== a.alias) {
            (Array.isArray(a.alias) ? a.alias : [ a.alias ]).forEach(function(n) {
                var i = {
                    path: n,
                    children: a.children
                };
                oe(e, t, r, i, o, d.path || "/");
            });
        }
        if (!t[d.path]) {
            e.push(d.path);
            t[d.path] = d;
        }
        if (l) if (!r[l]) r[l] = d; else if (!s) i(false, 'Duplicate named routes definition: { name: "' + l + '", path: "' + d.path + '" }');
    }
    function se(e, t) {
        var r = D(e, [], t);
        if (true) {
            var n = {};
            r.keys.forEach(function(t) {
                i(!n[t.name], 'Duplicate param keys in route with path: "' + e + '"');
                n[t.name] = true;
            });
        }
        return r;
    }
    function ue(e, t) {
        e = e.replace(/\/$/, "");
        if ("/" === e[0]) return e;
        if (null == t) return e;
        return R(t.path + "/" + e);
    }
    /*  */
    function le(e, t, r, n) {
        var a = "string" === typeof e ? {
            path: e
        } : e;
        // named target
        if (a.name || a._normalized) return a;
        // relative params
        if (!a.path && a.params && t) {
            a = ce({}, a);
            a._normalized = true;
            var o = ce(ce({}, t.params), a.params);
            if (t.name) {
                a.name = t.name;
                a.params = o;
            } else if (t.matched.length) {
                var s = t.matched[t.matched.length - 1].path;
                a.path = ie(s, o, "path " + t.path);
            } else if (true) i(false, "relative params navigation requires a current route.");
            return a;
        }
        var u = L(a.path || "");
        var l = t && t.path || "/";
        var c = u.path ? M(u.path, l, r || a.append) : l;
        var f = p(u.query, a.query, n && n.options.parseQuery);
        var d = a.hash || u.hash;
        if (d && "#" !== d.charAt(0)) d = "#" + d;
        return {
            _normalized: true,
            path: c,
            query: f,
            hash: d
        };
    }
    function ce(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
    }
    /*  */
    function fe(e, t) {
        var r = ae(e);
        var a = r.pathList;
        var o = r.pathMap;
        var s = r.nameMap;
        function u(e) {
            ae(e, a, o, s);
        }
        function l(e, r, n) {
            var u = le(e, r, false, t);
            var l = u.name;
            if (l) {
                var c = s[l];
                if (true) i(c, "Route with name '" + l + "' does not exist");
                if (!c) return d(null, u);
                var f = c.regex.keys.filter(function(e) {
                    return !e.optional;
                }).map(function(e) {
                    return e.name;
                });
                if ("object" !== typeof u.params) u.params = {};
                if (r && "object" === typeof r.params) for (var p in r.params) if (!(p in u.params) && f.indexOf(p) > -1) u.params[p] = r.params[p];
                if (c) {
                    u.path = ie(c.path, u.params, 'named route "' + l + '"');
                    return d(c, u, n);
                }
            } else if (u.path) {
                u.params = {};
                for (var v = 0; v < a.length; v++) {
                    var h = a[v];
                    var m = o[h];
                    if (de(m.regex, u.path, u.params)) return d(m, u, n);
                }
            }
            // no match
            return d(null, u);
        }
        function c(e, r) {
            var a = e.redirect;
            var o = "function" === typeof a ? a(_(e, r, null, t)) : a;
            if ("string" === typeof o) o = {
                path: o
            };
            if (!o || "object" !== typeof o) {
                if (true) i(false, "invalid redirect option: " + JSON.stringify(o));
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
                var y = pe(f, e);
                // 2. resolve params
                var g = ie(y, h, 'redirect route with path "' + y + '"');
                // 3. rematch with existing query and hash
                return l({
                    _normalized: true,
                    path: g,
                    query: p,
                    hash: v
                }, void 0, r);
            } else {
                if (true) i(false, "invalid redirect option: " + JSON.stringify(o));
                return d(null, r);
            }
        }
        function f(e, t, r) {
            var n = ie(r, t.params, 'aliased route with path "' + r + '"');
            var i = l({
                _normalized: true,
                path: n
            });
            if (i) {
                var a = i.matched;
                var o = a[a.length - 1];
                t.params = i.params;
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
    function de(e, t, r) {
        var n = t.match(e);
        if (!n) return false; else if (!r) return true;
        for (var i = 1, a = n.length; i < a; ++i) {
            var o = e.keys[i - 1];
            var s = "string" === typeof n[i] ? decodeURIComponent(n[i]) : n[i];
            if (o) r[o.name] = s;
        }
        return true;
    }
    function pe(e, t) {
        return M(e, t.parent ? t.parent.path : "/", true);
    }
    /*  */
    var ve = Object.create(null);
    function he() {
        window.addEventListener("popstate", function(e) {
            _e();
            if (e.state && e.state.key) je(e.state.key);
        });
    }
    function me(e, t, r, i) {
        if (!e.app) return;
        var a = e.options.scrollBehavior;
        if (!a) return;
        if (true) n("function" === typeof a, "scrollBehavior must be a function");
        // wait until re-render finishes before scrolling
        e.app.$nextTick(function() {
            var e = ye();
            var n = a(t, r, i ? e : null);
            if (!n) return;
            var o = "object" === typeof n;
            if (o && "string" === typeof n.selector) {
                var s = document.querySelector(n.selector);
                if (s) {
                    var u = n.offset && "object" === typeof n.offset ? n.offset : {};
                    u = Ce(u);
                    e = ge(s, u);
                } else if (be(n)) e = we(n);
            } else if (o && be(n)) e = we(n);
            if (e) window.scrollTo(e.x, e.y);
        });
    }
    function _e() {
        var e = $e();
        if (e) ve[e] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        };
    }
    function ye() {
        var e = $e();
        if (e) return ve[e];
    }
    function ge(e, t) {
        var r = document.documentElement;
        var n = r.getBoundingClientRect();
        var i = e.getBoundingClientRect();
        return {
            x: i.left - n.left - t.x,
            y: i.top - n.top - t.y
        };
    }
    function be(e) {
        return xe(e.x) || xe(e.y);
    }
    function we(e) {
        return {
            x: xe(e.x) ? e.x : window.pageXOffset,
            y: xe(e.y) ? e.y : window.pageYOffset
        };
    }
    function Ce(e) {
        return {
            x: xe(e.x) ? e.x : 0,
            y: xe(e.y) ? e.y : 0
        };
    }
    function xe(e) {
        return "number" === typeof e;
    }
    /*  */
    var ke = P && function() {
        var e = window.navigator.userAgent;
        if ((-1 !== e.indexOf("Android 2.") || -1 !== e.indexOf("Android 4.0")) && -1 !== e.indexOf("Mobile Safari") && -1 === e.indexOf("Chrome") && -1 === e.indexOf("Windows Phone")) return false;
        return window.history && "pushState" in window.history;
    }();
    // use User Timing api (if present) for more accurate key precision
    var Oe = P && window.performance && window.performance.now ? window.performance : Date;
    var Ae = Ee();
    function Ee() {
        return Oe.now().toFixed(3);
    }
    function $e() {
        return Ae;
    }
    function je(e) {
        Ae = e;
    }
    function Se(e, t) {
        _e();
        // try...catch the pushState call to get around Safari
        // DOM Exception 18 where it limits to 100 pushState calls
        var r = window.history;
        try {
            if (t) r.replaceState({
                key: Ae
            }, "", e); else {
                Ae = Ee();
                r.pushState({
                    key: Ae
                }, "", e);
            }
        } catch (r) {
            window.location[t ? "replace" : "assign"](e);
        }
    }
    function Te(e) {
        Se(e, true);
    }
    /*  */
    function Pe(e, t, r) {
        var n = function(i) {
            if (i >= e.length) r(); else if (e[i]) t(e[i], function() {
                n(i + 1);
            }); else n(i + 1);
        };
        n(0);
    }
    /*  */
    function Me(e) {
        return function(t, r, n) {
            var o = false;
            var s = 0;
            var u = null;
            Le(e, function(e, t, r, l) {
                // if it's a function and doesn't have cid attached,
                // assume it's an async component resolve function.
                // we are not using Vue's default async resolving mechanism because
                // we want to halt the navigation until the incoming component has been
                // resolved.
                if ("function" === typeof e && void 0 === e.cid) {
                    o = true;
                    s++;
                    var c = Ie(function(t) {
                        if (t.__esModule && t.default) t = t.default;
                        // save resolved on async factory in case it's used elsewhere
                        e.resolved = "function" === typeof t ? t : S.extend(t);
                        r.components[l] = t;
                        s--;
                        if (s <= 0) n();
                    });
                    var f = Ie(function(e) {
                        var t = "Failed to resolve async component " + l + ": " + e;
                        i(false, t);
                        if (!u) {
                            u = a(e) ? e : new Error(t);
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
    function Le(e, t) {
        return Re(e.map(function(e) {
            return Object.keys(e.components).map(function(r) {
                return t(e.components[r], e.instances[r], e, r);
            });
        }));
    }
    function Re(e) {
        return Array.prototype.concat.apply([], e);
    }
    // in Webpack 2, require.ensure now also returns a Promise
    // so the resolve/reject functions may get called an extra time
    // if the user uses an arrow function shorthand that happens to
    // return that Promise.
    function Ie(e) {
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
    var De = function(e, t) {
        this.router = e;
        this.base = ze(t);
        // start with a route object that stands for "nowhere"
        this.current = y;
        this.pending = null;
        this.ready = false;
        this.readyCbs = [];
        this.readyErrorCbs = [];
        this.errorCbs = [];
    };
    De.prototype.listen = function(e) {
        this.cb = e;
    };
    De.prototype.onReady = function(e, t) {
        if (this.ready) e(); else {
            this.readyCbs.push(e);
            if (t) this.readyErrorCbs.push(t);
        }
    };
    De.prototype.onError = function(e) {
        this.errorCbs.push(e);
    };
    De.prototype.transitionTo = function(e, t, r) {
        var n = this;
        var i = this.router.match(e, this.current);
        this.confirmTransition(i, function() {
            n.updateRoute(i);
            t && t(i);
            n.ensureURL();
            // fire ready cbs once
            if (!n.ready) {
                n.ready = true;
                n.readyCbs.forEach(function(e) {
                    e(i);
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
    De.prototype.confirmTransition = function(e, t, r) {
        var n = this;
        var o = this.current;
        var s = function(e) {
            if (a(e)) if (n.errorCbs.length) n.errorCbs.forEach(function(t) {
                t(e);
            }); else {
                i(false, "uncaught error during route navigation:");
                console.error(e);
            }
            r && r(e);
        };
        if (w(e, o) && // in the case the route map has been dynamically appended to
        e.matched.length === o.matched.length) {
            this.ensureURL();
            return s();
        }
        var u = Ne(this.current.matched, e.matched);
        var l = u.updated;
        var c = u.deactivated;
        var f = u.activated;
        var d = [].concat(// in-component leave guards
        Fe(c), // global before hooks
        this.router.beforeHooks, // in-component update hooks
        Ue(l), // in-config enter guards
        f.map(function(e) {
            return e.beforeEnter;
        }), // async components
        Me(f));
        this.pending = e;
        var p = function(t, r) {
            if (n.pending !== e) return s();
            try {
                t(e, o, function(e) {
                    if (false === e || a(e)) {
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
        Pe(d, p, function() {
            var r = [];
            Pe(Ve(f, r, function() {
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
    De.prototype.updateRoute = function(e) {
        var t = this.current;
        this.current = e;
        this.cb && this.cb(e);
        this.router.afterHooks.forEach(function(r) {
            r && r(e, t);
        });
    };
    function ze(e) {
        if (!e) if (P) {
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
    function Ne(e, t) {
        var r;
        var n = Math.max(e.length, t.length);
        for (r = 0; r < n; r++) if (e[r] !== t[r]) break;
        return {
            updated: t.slice(0, r),
            activated: t.slice(r),
            deactivated: e.slice(r)
        };
    }
    function qe(e, t, r, n) {
        var i = Le(e, function(e, n, i, a) {
            var o = Be(e, t);
            if (o) return Array.isArray(o) ? o.map(function(e) {
                return r(e, n, i, a);
            }) : r(o, n, i, a);
        });
        return Re(n ? i.reverse() : i);
    }
    function Be(e, t) {
        if ("function" !== typeof e) // extend now so that global mixins are applied.
        e = S.extend(e);
        return e.options[t];
    }
    function Fe(e) {
        return qe(e, "beforeRouteLeave", He, true);
    }
    function Ue(e) {
        return qe(e, "beforeRouteUpdate", He);
    }
    function He(e, t) {
        if (t) return function() {
            return e.apply(t, arguments);
        };
    }
    function Ve(e, t, r) {
        return qe(e, "beforeRouteEnter", function(e, n, i, a) {
            return We(e, i, a, t, r);
        });
    }
    function We(e, t, r, n, i) {
        return function(a, o, s) {
            return e(a, o, function(e) {
                s(e);
                if ("function" === typeof e) n.push(function() {
                    // #750
                    // if a router-view is wrapped with an out-in transition,
                    // the instance may not have been registered at this time.
                    // we will need to poll for registration until current route
                    // is no longer valid.
                    Qe(e, t.instances, r, i);
                });
            });
        };
    }
    function Qe(e, // somehow flow cannot infer this is a function
    t, r, n) {
        if (t[r]) e(t[r]); else if (n()) setTimeout(function() {
            Qe(e, t, r, n);
        }, 16);
    }
    /*  */
    var Xe = function(e) {
        function t(t, r) {
            var n = this;
            e.call(this, t, r);
            var i = t.options.scrollBehavior;
            if (i) he();
            window.addEventListener("popstate", function(e) {
                var r = n.current;
                n.transitionTo(Ye(n.base), function(e) {
                    if (i) me(t, e, r, true);
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
            var i = this;
            var a = i.current;
            this.transitionTo(e, function(e) {
                Se(R(n.base + e.fullPath));
                me(n.router, e, a, false);
                t && t(e);
            }, r);
        };
        t.prototype.replace = function(e, t, r) {
            var n = this;
            var i = this;
            var a = i.current;
            this.transitionTo(e, function(e) {
                Te(R(n.base + e.fullPath));
                me(n.router, e, a, false);
                t && t(e);
            }, r);
        };
        t.prototype.ensureURL = function(e) {
            if (Ye(this.base) !== this.current.fullPath) {
                var t = R(this.base + this.current.fullPath);
                e ? Se(t) : Te(t);
            }
        };
        t.prototype.getCurrentLocation = function() {
            return Ye(this.base);
        };
        return t;
    }(De);
    function Ye(e) {
        var t = window.location.pathname;
        if (e && 0 === t.indexOf(e)) t = t.slice(e.length);
        return (t || "/") + window.location.search + window.location.hash;
    }
    /*  */
    var Ke = function(e) {
        function t(t, r, n) {
            e.call(this, t, r);
            // check history fallback deeplinking
            if (n && Ze(this.base)) return;
            Je();
        }
        if (e) t.__proto__ = e;
        t.prototype = Object.create(e && e.prototype);
        t.prototype.constructor = t;
        // this is delayed until the app mounts
        // to avoid the hashchange listener being fired too early
        t.prototype.setupListeners = function() {
            var e = this;
            window.addEventListener("hashchange", function() {
                if (!Je()) return;
                e.transitionTo(Ge(), function(e) {
                    tt(e.fullPath);
                });
            });
        };
        t.prototype.push = function(e, t, r) {
            this.transitionTo(e, function(e) {
                et(e.fullPath);
                t && t(e);
            }, r);
        };
        t.prototype.replace = function(e, t, r) {
            this.transitionTo(e, function(e) {
                tt(e.fullPath);
                t && t(e);
            }, r);
        };
        t.prototype.go = function(e) {
            window.history.go(e);
        };
        t.prototype.ensureURL = function(e) {
            var t = this.current.fullPath;
            if (Ge() !== t) e ? et(t) : tt(t);
        };
        t.prototype.getCurrentLocation = function() {
            return Ge();
        };
        return t;
    }(De);
    function Ze(e) {
        var t = Ye(e);
        if (!/^\/#/.test(t)) {
            window.location.replace(R(e + "/#" + t));
            return true;
        }
    }
    function Je() {
        var e = Ge();
        if ("/" === e.charAt(0)) return true;
        tt("/" + e);
        return false;
    }
    function Ge() {
        // We can't use window.location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
        var e = window.location.href;
        var t = e.indexOf("#");
        return -1 === t ? "" : e.slice(t + 1);
    }
    function et(e) {
        window.location.hash = e;
    }
    function tt(e) {
        var t = window.location.href;
        var r = t.indexOf("#");
        var n = r >= 0 ? t.slice(0, r) : t;
        window.location.replace(n + "#" + e);
    }
    /*  */
    var rt = function(e) {
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
    }(De);
    /*  */
    var nt = function(e) {
        if (void 0 === e) e = {};
        this.app = null;
        this.apps = [];
        this.options = e;
        this.beforeHooks = [];
        this.resolveHooks = [];
        this.afterHooks = [];
        this.matcher = fe(e.routes || [], this);
        var t = e.mode || "hash";
        this.fallback = "history" === t && !ke && false !== e.fallback;
        if (this.fallback) t = "hash";
        if (!P) t = "abstract";
        this.mode = t;
        switch (t) {
          case "history":
            this.history = new Xe(this, e.base);
            break;

          case "hash":
            this.history = new Ke(this, e.base, this.fallback);
            break;

          case "abstract":
            this.history = new rt(this, e.base);
            break;

          default:
            if (true) n(false, "invalid mode: " + t);
        }
    };
    var it = {
        currentRoute: {}
    };
    nt.prototype.match = function(e, t, r) {
        return this.matcher.match(e, t, r);
    };
    it.currentRoute.get = function() {
        return this.history && this.history.current;
    };
    nt.prototype.init = function(e) {
        var t = this;
        n(T.installed, "not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance.");
        this.apps.push(e);
        // main app already initialized.
        if (this.app) return;
        this.app = e;
        var r = this.history;
        if (r instanceof Xe) r.transitionTo(r.getCurrentLocation()); else if (r instanceof Ke) {
            var i = function() {
                r.setupListeners();
            };
            r.transitionTo(r.getCurrentLocation(), i, i);
        }
        r.listen(function(e) {
            t.apps.forEach(function(t) {
                t._route = e;
            });
        });
    };
    nt.prototype.beforeEach = function(e) {
        return at(this.beforeHooks, e);
    };
    nt.prototype.beforeResolve = function(e) {
        return at(this.resolveHooks, e);
    };
    nt.prototype.afterEach = function(e) {
        return at(this.afterHooks, e);
    };
    nt.prototype.onReady = function(e, t) {
        this.history.onReady(e, t);
    };
    nt.prototype.onError = function(e) {
        this.history.onError(e);
    };
    nt.prototype.push = function(e, t, r) {
        this.history.push(e, t, r);
    };
    nt.prototype.replace = function(e, t, r) {
        this.history.replace(e, t, r);
    };
    nt.prototype.go = function(e) {
        this.history.go(e);
    };
    nt.prototype.back = function() {
        this.go(-1);
    };
    nt.prototype.forward = function() {
        this.go(1);
    };
    nt.prototype.getMatchedComponents = function(e) {
        var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
        if (!t) return [];
        return [].concat.apply([], t.matched.map(function(e) {
            return Object.keys(e.components).map(function(t) {
                return e.components[t];
            });
        }));
    };
    nt.prototype.resolve = function(e, t, r) {
        var n = le(e, t || this.history.current, r, this);
        var i = this.match(n, t);
        var a = i.redirectedFrom || i.fullPath;
        return {
            location: n,
            route: i,
            href: ot(this.history.base, a, this.mode),
            // for backwards compat
            normalizedTo: n,
            resolved: i
        };
    };
    nt.prototype.addRoutes = function(e) {
        this.matcher.addRoutes(e);
        if (this.history.current !== y) this.history.transitionTo(this.history.getCurrentLocation());
    };
    Object.defineProperties(nt.prototype, it);
    function at(e, t) {
        e.push(t);
        return function() {
            var r = e.indexOf(t);
            if (r > -1) e.splice(r, 1);
        };
    }
    function ot(e, t, r) {
        var n = "hash" === r ? "#" + t : t;
        return e ? R(e + "/" + n) : n;
    }
    nt.install = T;
    nt.version = "2.7.0";
    if (P && window.Vue) window.Vue.use(nt);
    /* harmony default export */
    t["default"] = nt;
}, /* 43 */
/***/
function(e, t, r) {
    /*!
 * Vue-Lazyload.js v1.1.3
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
            for (var r = !1, n = 0, i = e.length; n < i; n++) if (t(e[n])) {
                r = !0;
                break;
            }
            return r;
        }
        function n(e, t) {
            if ("IMG" === e.tagName && e.getAttribute("data-srcset")) {
                var r = e.getAttribute("data-srcset"), n = [], i = e.parentNode, a = i.offsetWidth * t, o = void 0, s = void 0, u = void 0;
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
                for (var l = "", c = void 0, f = n.length, d = 0; d < f; d++) if (c = n[d], c[0] >= a) {
                    l = c[1];
                    break;
                }
                return l;
            }
        }
        function i(e, t) {
            for (var r = void 0, n = 0, i = e.length; n < i; n++) if (t(e[n])) {
                r = e[n];
                break;
            }
            return r;
        }
        function a() {
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
                    var i = Date.now() - n, a = this, o = arguments, s = function() {
                        n = Date.now(), r = !1, e.apply(a, o);
                    };
                    i >= t ? s() : r = setTimeout(s, t);
                }
            };
        }
        function s(e) {
            return null !== e && "object" === ("undefined" == typeof e ? "undefined" : f(e));
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
        }(), _ = {
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
        }, y = function(e, t, r) {
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
        }, C = function() {
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
        }(), x = {}, k = function() {
            function e(t) {
                var r = t.el, n = t.src, i = t.error, a = t.loading, o = t.bindType, s = t.$parent, u = t.options, c = t.elRenderer;
                l(this, e), this.el = r, this.src = n, this.error = i, this.loading = a, this.bindType = o, 
                this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, 
                this.filter(), this.initState(), this.performanceData = {
                    init: Date.now(),
                    loadStart: null,
                    loadEnd: null
                }, this.rect = r.getBoundingClientRect(), this.$parent = s, this.elRenderer = c, 
                this.render("loading", !1);
            }
            return C(e, [ {
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
                    var t = e.src, r = e.loading, n = e.error, i = this.src;
                    this.src = t, this.loading = r, this.error = n, this.filter(), i !== this.src && (this.attempt = 0, 
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
                    y({
                        src: this.loading
                    }, function(r) {
                        t.render("loading", !1), e();
                    });
                }
            }, {
                key: "load",
                value: function() {
                    var e = this;
                    return this.attempt > this.options.attempt - 1 && this.state.error ? void (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times")) : this.state.loaded || x[this.src] ? this.render("loaded", !0) : void this.renderLoading(function() {
                        e.attempt++, e.record("loadStart"), y({
                            src: e.src
                        }, function(t) {
                            e.naturalHeight = t.naturalHeight, e.naturalWidth = t.naturalWidth, e.state.loaded = !0, 
                            e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), x[e.src] = 1;
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
        }(), A = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", E = [ "scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove" ], $ = {
            rootMargin: "0px",
            threshold: 0
        }, j = function(u) {
            return function() {
                function l(e) {
                    var t = e.preLoad, r = e.error, n = e.throttleWait, i = e.preLoadTop, s = e.dispatchEvent, u = e.loading, f = e.attempt, d = e.silent, p = e.scale, m = e.listenEvents, _ = (e.hasbind, 
                    e.filter), y = e.adapter, g = e.observer, b = e.observerOptions;
                    c(this, l), this.version = "1.1.3", this.mode = v.event, this.ListenerQueue = [], 
                    this.TargetIndex = 0, this.TargetQueue = [], this.options = {
                        silent: d || !0,
                        dispatchEvent: !!s,
                        throttleWait: n || 200,
                        preLoad: t || 1.3,
                        preLoadTop: i || 0,
                        error: r || A,
                        loading: u || A,
                        attempt: f || 3,
                        scale: p || h(p),
                        ListenEvents: m || E,
                        hasbind: !1,
                        supportWebp: a(),
                        filter: _ || {},
                        adapter: y || {},
                        observer: !!g,
                        observerOptions: b || $
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
                    value: function(e, t, i) {
                        var a = this;
                        if (r(this.ListenerQueue, function(t) {
                            return t.el === e;
                        })) return this.update(e, t), u.nextTick(this.lazyLoadHandler);
                        var o = this._valueFormatter(t.value), s = o.src, l = o.loading, c = o.error;
                        u.nextTick(function() {
                            s = n(e, a.options.scale) || s, a._observer && a._observer.observe(e);
                            var r = Object.keys(t.modifiers)[0], o = void 0;
                            r && (o = i.context.$refs[r], o = o ? o.$el || o : document.getElementById(r)), 
                            o || (o = w(e));
                            var f = new k({
                                bindType: t.arg,
                                $parent: o,
                                el: e,
                                loading: l,
                                error: c,
                                src: s,
                                elRenderer: a._elRenderer.bind(a),
                                options: a.options
                            });
                            a.ListenerQueue.push(f), d && (a._addListenerTarget(window), a._addListenerTarget(o)), 
                            a.lazyLoadHandler(), u.nextTick(function() {
                                return a.lazyLoadHandler();
                            });
                        });
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var r = this, a = this._valueFormatter(t.value), o = a.src, s = a.loading, l = a.error;
                        o = n(e, this.options.scale) || o;
                        var c = i(this.ListenerQueue, function(t) {
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
                            var r = i(this.ListenerQueue, function(e) {
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
                            var t = i(this.TargetQueue, function(t) {
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
                            r.el === e && (r.childrenCount--, r.childrenCount || (t._initListen(r.el, !1), t.TargetQueue.splice(n, 1), 
                            r = null));
                        });
                    }
                }, {
                    key: "_initListen",
                    value: function(e, t) {
                        var r = this;
                        this.options.ListenEvents.forEach(function(n) {
                            return _[t ? "on" : "off"](e, n, r.lazyLoadHandler);
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
                                i.$off(e, n), r.apply(i, arguments);
                            }
                            var i = t;
                            t.$on(e, n);
                        }, this.$off = function(r, n) {
                            return n ? void e(t.Event.listeners[r], n) : void (t.Event.listeners[r] = []);
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
                            t.state.loaded || (e = t.checkInView(), e && t.load());
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
                            var n = e.el, i = e.bindType, a = void 0;
                            switch (t) {
                              case "loading":
                                a = e.loading;
                                break;

                              case "error":
                                a = e.error;
                                break;

                              default:
                                a = e.src;
                            }
                            if (i ? n.style[i] = "url(" + a + ")" : n.getAttribute("src") !== a && n.setAttribute("src", a), 
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
        }, S = function(e) {
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
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = j(e), i = new n(r), a = "2" === e.version.split(".")[0];
                e.prototype.$Lazyload = i, r.lazyComponent && e.component("lazy-component", S(i)), 
                a ? e.directive("lazy", {
                    bind: i.add.bind(i),
                    update: i.update.bind(i),
                    componentUpdated: i.lazyLoadHandler.bind(i),
                    unbind: i.remove.bind(i)
                }) : e.directive("lazy", {
                    bind: i.lazyLoadHandler.bind(i),
                    update: function(e, r) {
                        t(this.vm.$refs, this.vm.$els), i.add(this.el, {
                            modifiers: this.modifiers || {},
                            arg: this.arg,
                            value: e,
                            oldValue: r
                        }, {
                            context: this.vm
                        });
                    },
                    unbind: function() {
                        i.remove(this.el);
                    }
                });
            }
        };
    });
}, /* 44 */
/***/
function(e, t, r) {
    /*
 * smoothscroll polyfill - v0.3.5
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */
    !function(t, r, n) {
        "use strict";
        /*
   * aliases
   * w: window global object
   * d: document
   * undefined: undefined
   */
        // polyfill
        function i() {
            // return when scrollBehavior interface is supported
            if ("scrollBehavior" in r.documentElement.style) return;
            /*
     * globals
     */
            var e = t.HTMLElement || t.Element;
            var i = 468;
            /*
     * object gathering original scroll methods
     */
            var a = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elScroll: e.prototype.scroll || s,
                scrollIntoView: e.prototype.scrollIntoView
            };
            /*
     * define timing method
     */
            var o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
            /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     */
            function s(e, t) {
                this.scrollLeft = e;
                this.scrollTop = t;
            }
            /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
            function u(e) {
                return .5 * (1 - Math.cos(Math.PI * e));
            }
            /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} x
     * @returns {Boolean}
     */
            function l(e) {
                if ("object" !== typeof e || null === e || e.behavior === n || "auto" === e.behavior || "instant" === e.behavior) // first arg not an object/null
                // or behavior is auto, instant or undefined
                return true;
                if ("object" === typeof e && "smooth" === e.behavior) // first argument is an object and behavior is smooth
                return false;
                // throw error when behavior is not supported
                throw new TypeError("behavior not valid");
            }
            /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
            function c(e) {
                var n;
                var i;
                var a;
                do {
                    e = e.parentNode;
                    // set condition variables
                    n = e === r.body;
                    i = e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth;
                    a = "visible" === t.getComputedStyle(e, null).overflow;
                } while (!n && !(i && !a));
                n = i = a = null;
                return e;
            }
            /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     */
            function f(e) {
                var r = o();
                var n;
                var a;
                var s;
                var l = (r - e.startTime) / i;
                // avoid elapsed times higher than one
                l = l > 1 ? 1 : l;
                // apply easing to elapsed time
                n = u(l);
                a = e.startX + (e.x - e.startX) * n;
                s = e.startY + (e.y - e.startY) * n;
                e.method.call(e.scrollable, a, s);
                // scroll more if we have not reached our destination
                if (a !== e.x || s !== e.y) t.requestAnimationFrame(f.bind(t, e));
            }
            /**
     * scrolls window with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     */
            function d(e, n, i) {
                var u;
                var l;
                var c;
                var d;
                var p = o();
                // define scroll context
                if (e === r.body) {
                    u = t;
                    l = t.scrollX || t.pageXOffset;
                    c = t.scrollY || t.pageYOffset;
                    d = a.scroll;
                } else {
                    u = e;
                    l = e.scrollLeft;
                    c = e.scrollTop;
                    d = s;
                }
                // scroll looping over a frame
                f({
                    scrollable: u,
                    method: d,
                    startTime: p,
                    startX: l,
                    startY: c,
                    x: n,
                    y: i
                });
            }
            /*
     * ORIGINAL METHODS OVERRIDES
     */
            // w.scroll and w.scrollTo
            t.scroll = t.scrollTo = function() {
                // avoid smooth behavior if not required
                if (l(arguments[0])) {
                    a.scroll.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                d.call(t, r.body, ~~arguments[0].left, ~~arguments[0].top);
            };
            // w.scrollBy
            t.scrollBy = function() {
                // avoid smooth behavior if not required
                if (l(arguments[0])) {
                    a.scrollBy.call(t, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                d.call(t, r.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset));
            };
            // Element.prototype.scroll and Element.prototype.scrollTo
            e.prototype.scroll = e.prototype.scrollTo = function() {
                // avoid smooth behavior if not required
                if (l(arguments[0])) {
                    a.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                    return;
                }
                var e = arguments[0].left;
                var t = arguments[0].top;
                // LET THE SMOOTHNESS BEGIN!
                d.call(this, this, "number" === typeof e ? e : this.scrollLeft, "number" === typeof t ? t : this.scrollTop);
            };
            // Element.prototype.scrollBy
            e.prototype.scrollBy = function() {
                var e = arguments[0];
                if ("object" === typeof e) this.scroll({
                    left: e.left + this.scrollLeft,
                    top: e.top + this.scrollTop,
                    behavior: e.behavior
                }); else this.scroll(this.scrollLeft + e, this.scrollTop + arguments[1]);
            };
            // Element.prototype.scrollIntoView
            e.prototype.scrollIntoView = function() {
                // avoid smooth behavior if not required
                if (l(arguments[0])) {
                    a.scrollIntoView.call(this, arguments[0] === n ? true : arguments[0]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                var e = c(this);
                var i = e.getBoundingClientRect();
                var o = this.getBoundingClientRect();
                if (e !== r.body) {
                    // reveal element inside parent
                    d.call(this, e, e.scrollLeft + o.left - i.left, e.scrollTop + o.top - i.top);
                    // reveal parent in viewport
                    t.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth"
                    });
                } else // reveal element in viewport
                t.scrollBy({
                    left: o.left,
                    top: o.top,
                    behavior: "smooth"
                });
            };
        }
        if (true) // commonjs
        e.exports = {
            polyfill: i
        }; else // global
        i();
    }(window, document);
}, /* 45 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(46);
    var i = false;
    var a = r(0);
    var o = a(null, n["a"], null, null, null);
    o.options.__file = "src/components/basepage/basepage.vue";
    if (o.esModule && Object.keys(o.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (o.options.functional) console.error("[vue-loader] basepage.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-7665aae5", o.options); else t.reload("data-v-7665aae5", o.options);
        e.hot.dispose(function(e) {
            i = true;
        });
    }();
    /* harmony default export */
    t["default"] = o.exports;
}, /* 46 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        return (e._self._c || t)("router-view");
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-7665aae5", a);
    }
}, /* 47 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    t.routes = void 0;
    var n = r(48);
    var i = p(n);
    var a = r(89);
    var o = p(a);
    var s = r(93);
    var u = p(s);
    var l = r(98);
    var c = p(l);
    var f = r(100);
    var d = p(f);
    function p(e) {
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
    var v = [ {
        path: "/",
        component: i.default,
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
                    r.e(3).then(function() {
                        var t = [ r(103) ];
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
                    r.e(1).then(function() {
                        var t = [ r(104) ];
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
                    r.e(2).then(function() {
                        var t = [ r(105) ];
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
                        var t = [ r(106) ];
                        e.apply(null, t);
                    }.bind(this)).catch(r.oe);
                }
            }
        } ]
    }, {
        path: "*",
        component: d.default
    } ];
    t.routes = v;
}, /* 48 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(9);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(88);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/home/home.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-29dbdfc5", u.options); else t.reload("data-v-29dbdfc5", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 49 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(50);
    var i = false;
    var a = r(0);
    var o = a(null, n["a"], null, null, null);
    o.options.__file = "src/components/cover/cover.vue";
    if (o.esModule && Object.keys(o.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (o.options.functional) console.error("[vue-loader] cover.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-148f0b95", o.options); else t.reload("data-v-148f0b95", o.options);
        e.hot.dispose(function(e) {
            i = true;
        });
    }();
    /* harmony default export */
    t["default"] = o.exports;
}, /* 50 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        e._self._c;
        return e._m(0);
    };
    var i = [ function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "cover"
        }, [ r("h2", [ e._v("Copertina") ]), e._v(" "), r("div", {
            staticClass: "cover__baloon"
        }, [ r("div", {
            staticClass: "cover__balooncontainer"
        }, [ r("img", {
            attrs: {
                src: "assets/cover/baloon.svg",
                alt: "baloon"
            }
        }), e._v(" "), r("span", [ e._v("Edizione online della rivista italiana più amata") ]) ]) ]), e._v(" "), r("nav", {
            staticClass: "cover__navigation"
        }, [ r("ul", [ r("li", [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Scansioni") ]), r("small", [ e._v("Sfoglia tutti i numeri di Zzap!") ]) ]) ]), e._v(" "), r("li", [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Database") ]), r("small", [ e._v("Tutti i dettagli delle recensioni") ]) ]) ]), e._v(" "), r("li", [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("small", [ e._v("Solo per temerari esploratori") ]), r("span", [ e._v("Mappe") ]) ]) ]), e._v(" "), r("li", [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Speciali") ]), r("small", [ e._v("Rari ma imperdibili") ]) ]) ]), e._v(" "), r("li", {
            staticClass: "cover__navigation__side"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("small", [ e._v("Gioco caldo del mese") ]), r("span", [ e._v("Uridium") ]) ]) ]) ]) ]) ]);
    } ];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-148f0b95", a);
    }
}, /* 51 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(10);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(53);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/dynamicnavigation/dynamicnavigation.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] dynamicnavigation.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-2d85224d", u.options); else t.reload("data-v-2d85224d", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 52 */
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
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-f5cce476", a);
    }
}, /* 53 */
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
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-2d85224d", a);
    }
}, /* 54 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(13);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(55);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/index/index.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5fd94a8b", u.options); else t.reload("data-v-5fd94a8b", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 55 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            staticClass: "index"
        }, [ r("h2", [ e._v("Sommario") ]), e._v(" "), r("div", {
            staticClass: "index__container"
        }, [ r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("Medaglie d'oro") ]) ], 1), e._v(" "), e._m(0) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("Giochi caldi") ]) ], 1), e._v(" "), e._m(1) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
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
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali-leabbiamovistetutte"
            }
        }, [ e._v('"Le abbiamo viste tutte", di Paolo Besser') ]) ], 1), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali-konixmultisystem"
            }
        }, [ e._v("Un sogno mai realizzato: il Konix Multisystem, di Darkj") ]) ], 1), e._v(" "), e._m(2) ]), e._v(" "), e._m(3) ]) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "diari"
            }
        }, [ e._v("Diari, interviste e SEUCK") ]) ], 1), e._v(" "), r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ e._v("Anche il nuovo sito del Progetto Zzap! Italia ha il suo diario.\n      "), r("scroll-link", {
            attrs: {
                anchor: "diari-zzap"
            }
        }, [ e._v('"Il mio galeone", di Toni Bianchetti') ]) ], 1), e._v(" "), e._m(4), e._v(" "), e._m(5) ]), e._v(" "), e._m(6) ]) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("I sempre presenti") ]) ], 1), e._v(" "), e._m(7) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("Fumetti") ]) ], 1), e._v(" "), e._m(8) ]), e._v(" "), r("section", {
            staticClass: "index__section"
        }, [ r("h3", {
            staticClass: "index__title"
        }, [ r("scroll-link", {
            attrs: {
                anchor: "speciali"
            }
        }, [ e._v("Umore") ]) ], 1), e._v(" "), e._m(9) ]) ]) ]);
    };
    var i = [ function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Cauldron II") ]) ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ e._v("Bananas oranges pineabbles pommerades so "), r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("long") ]), e._v(" it requires "), r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("two lines") ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]) ]), e._v(" "), r("a", {
            staticClass: "index__imagelink",
            attrs: {
                href: "#"
            }
        }, [ r("img", {
            staticClass: "index__image",
            attrs: {
                src: "assets/games/screenshoots/cauldron_ii.gif"
            }
        }) ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Bananas oranges pineabbles pommerades so long it requires two lines") ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]) ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("a", {
            staticClass: "index__imagelink",
            attrs: {
                href: "#"
            }
        }, [ r("img", {
            staticClass: "index__image",
            attrs: {
                src: "assets/games/screenshoots/cauldron_ii.gif"
            }
        }) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Bananas oranges pineabbles pommerades so long it requires two lines") ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("a", {
            staticClass: "index__imagelink",
            attrs: {
                href: "#"
            }
        }, [ r("img", {
            staticClass: "index__image",
            attrs: {
                src: "assets/games/screenshoots/cauldron_ii.gif"
            }
        }) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Cauldron II") ]) ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Bananas oranges pineabbles pommerades so long it requires two lines") ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]) ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Cauldron II") ]) ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Bananas oranges pineabbles pommerades so long it requires two lines") ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]) ]) ]);
    }, function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("div", {
            staticClass: "index__listcontainer"
        }, [ r("ul", {
            staticClass: "index__list"
        }, [ r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ r("span", [ e._v("Cauldron II") ]) ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Bananas oranges pineabbles pommerades so long it requires two lines") ]) ]), e._v(" "), r("li", {
            staticClass: "index__item"
        }, [ r("a", {
            attrs: {
                href: "#"
            }
        }, [ e._v("Oranges") ]) ]) ]) ]);
    } ];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5fd94a8b", a);
    }
}, /* 56 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(14);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(57);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/loader/loader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] loader.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-59235245", u.options); else t.reload("data-v-59235245", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 57 */
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
                src: "/img/c64_loader.gif"
            }
        }) ]) : e._e();
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-59235245", a);
    }
}, /* 58 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(15);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(61);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/reader/reader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] reader.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-5c782c45", u.options); else t.reload("data-v-5c782c45", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 59 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(16);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(60);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/reader/reader-image.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] reader-image.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-1db8dcd3", u.options); else t.reload("data-v-1db8dcd3", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 60 */
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
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-1db8dcd3", a);
    }
}, /* 61 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return e.hasContent ? r("section", {
            staticClass: "reader"
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
        }) ]) ]), e._v(" "), r("div", {
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
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5c782c45", a);
    }
}, /* 62 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(17);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(82);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/scanindex/scanindex.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] scanindex.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-6a436f91", u.options); else t.reload("data-v-6a436f91", u.options);
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
    var n = r(1);
    var i = r(19);
    var a = r(65);
    var o = r(8);
    /**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
    function s(e) {
        var t = new a(e);
        var r = i(a.prototype.request, t);
        // Copy axios.prototype to instance
        n.extend(r, a.prototype, t);
        // Copy context to instance
        n.extend(r, t);
        return r;
    }
    // Create the default instance to be exported
    var u = s(o);
    // Expose Axios class to allow class inheritance
    u.Axios = a;
    // Factory for creating new instances
    u.create = function(e) {
        return s(n.merge(o, e));
    };
    // Expose Cancel & CancelToken
    u.Cancel = r(23);
    u.CancelToken = r(80);
    u.isCancel = r(22);
    // Expose all/spread
    u.all = function(e) {
        return Promise.all(e);
    };
    u.spread = r(81);
    e.exports = u;
    // Allow use of default import syntax in TypeScript
    e.exports.default = u;
}, /* 64 */
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
}, /* 65 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(8);
    var i = r(1);
    var a = r(75);
    var o = r(76);
    var s = r(78);
    var u = r(79);
    /**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
    function l(e) {
        this.defaults = e;
        this.interceptors = {
            request: new a(),
            response: new a()
        };
    }
    /**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
    l.prototype.request = function(e) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if ("string" === typeof e) e = i.merge({
            url: arguments[0]
        }, arguments[1]);
        e = i.merge(n, this.defaults, {
            method: "get"
        }, e);
        e.method = e.method.toLowerCase();
        // Support baseURL config
        if (e.baseURL && !s(e.url)) e.url = u(e.baseURL, e.url);
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
    i.forEach([ "delete", "get", "head", "options" ], function(e) {
        /*eslint func-names:0*/
        l.prototype[e] = function(t, r) {
            return this.request(i.merge(r || {}, {
                method: e,
                url: t
            }));
        };
    });
    i.forEach([ "post", "put", "patch" ], function(e) {
        /*eslint func-names:0*/
        l.prototype[e] = function(t, r, n) {
            return this.request(i.merge(n || {}, {
                method: e,
                url: t,
                data: r
            }));
        };
    });
    e.exports = l;
}, /* 66 */
/***/
function(e, t) {
    // shim for using process in browser
    var r = e.exports = {};
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    var n;
    var i;
    function a() {
        throw new Error("setTimeout has not been defined");
    }
    function o() {
        throw new Error("clearTimeout has not been defined");
    }
    !function() {
        try {
            if ("function" === typeof setTimeout) n = setTimeout; else n = a;
        } catch (e) {
            n = a;
        }
        try {
            if ("function" === typeof clearTimeout) i = clearTimeout; else i = o;
        } catch (e) {
            i = o;
        }
    }();
    function s(e) {
        if (n === setTimeout) //normal enviroments in sane situations
        return setTimeout(e, 0);
        // if setTimeout wasn't available but was latter defined
        if ((n === a || !n) && setTimeout) {
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
        if (i === clearTimeout) //normal enviroments in sane situations
        return clearTimeout(e);
        // if clearTimeout wasn't available but was latter defined
        if ((i === o || !i) && clearTimeout) {
            i = clearTimeout;
            return clearTimeout(e);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return i(e);
        } catch (t) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return i.call(null, e);
            } catch (t) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return i.call(this, e);
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
}, /* 67 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    e.exports = function(e, t) {
        n.forEach(e, function(r, n) {
            if (n !== t && n.toUpperCase() === t.toUpperCase()) {
                e[t] = r;
                delete e[n];
            }
        });
    };
}, /* 68 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(21);
    /**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
    e.exports = function(e, t, r) {
        var i = r.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        if (!r.status || !i || i(r.status)) e(r); else t(n("Request failed with status code " + r.status, r.config, null, r.request, r));
    };
}, /* 69 */
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
    e.exports = function(e, t, r, n, i) {
        e.config = t;
        if (r) e.code = r;
        e.request = n;
        e.response = i;
        return e;
    };
}, /* 70 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    function i(e) {
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
        var a;
        if (r) a = r(t); else if (n.isURLSearchParams(t)) a = t.toString(); else {
            var o = [];
            n.forEach(t, function(e, t) {
                if (null === e || "undefined" === typeof e) return;
                if (n.isArray(e)) t += "[]";
                if (!n.isArray(e)) e = [ e ];
                n.forEach(e, function(e) {
                    if (n.isDate(e)) e = e.toISOString(); else if (n.isObject(e)) e = JSON.stringify(e);
                    o.push(i(t) + "=" + i(e));
                });
            });
            a = o.join("&");
        }
        if (a) e += (-1 === e.indexOf("?") ? "?" : "&") + a;
        return e;
    };
}, /* 71 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
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
        var a;
        if (!e) return t;
        n.forEach(e.split("\n"), function(e) {
            a = e.indexOf(":");
            r = n.trim(e.substr(0, a)).toLowerCase();
            i = n.trim(e.substr(a + 1));
            if (r) t[r] = t[r] ? t[r] + ", " + i : i;
        });
        return t;
    };
}, /* 72 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
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
        function i(r) {
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
        r = i(window.location.href);
        /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
        return function(e) {
            var t = n.isString(e) ? i(e) : e;
            return t.protocol === r.protocol && t.host === r.host;
        };
    }() : // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
        return function() {
            return true;
        };
    }();
}, /* 73 */
/***/
function(e, t, r) {
    "use strict";
    // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function i() {
        this.message = "String contains an invalid character";
    }
    i.prototype = new Error();
    i.prototype.code = 5;
    i.prototype.name = "InvalidCharacterError";
    function a(e) {
        var t = String(e);
        var r = "";
        for (// initialize result and counter
        var a, o, s = 0, u = n; // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        t.charAt(0 | s) || (u = "=", s % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        r += u.charAt(63 & a >> 8 - s % 1 * 8)) {
            o = t.charCodeAt(s += .75);
            if (o > 255) throw new i();
            a = a << 8 | o;
        }
        return r;
    }
    e.exports = a;
}, /* 74 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    e.exports = n.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
    function() {
        return {
            write: function(e, t, r, i, a, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t));
                if (n.isNumber(r)) s.push("expires=" + new Date(r).toGMTString());
                if (n.isString(i)) s.push("path=" + i);
                if (n.isString(a)) s.push("domain=" + a);
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
}, /* 75 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    function i() {
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
    i.prototype.use = function(e, t) {
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
    i.prototype.eject = function(e) {
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
    i.prototype.forEach = function(e) {
        n.forEach(this.handlers, function(t) {
            if (null !== t) e(t);
        });
    };
    e.exports = i;
}, /* 76 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
    var i = r(77);
    var a = r(22);
    var o = r(8);
    /**
 * Throws a `Cancel` if cancellation has been requested.
 */
    function s(e) {
        if (e.cancelToken) e.cancelToken.throwIfRequested();
    }
    /**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
    e.exports = function(e) {
        s(e);
        // Ensure headers exist
        e.headers = e.headers || {};
        // Transform request data
        e.data = i(e.data, e.headers, e.transformRequest);
        // Flatten headers
        e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {});
        n.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
            delete e.headers[t];
        });
        return (e.adapter || o.adapter)(e).then(function(t) {
            s(e);
            // Transform response data
            t.data = i(t.data, t.headers, e.transformResponse);
            return t;
        }, function(t) {
            if (!a(t)) {
                s(e);
                // Transform response data
                if (t && t.response) t.response.data = i(t.response.data, t.response.headers, e.transformResponse);
            }
            return Promise.reject(t);
        });
    };
}, /* 77 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(1);
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
}, /* 78 */
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
}, /* 79 */
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
}, /* 80 */
/***/
function(e, t, r) {
    "use strict";
    var n = r(23);
    /**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
    function i(e) {
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
    i.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    };
    /**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
    i.source = function() {
        var e;
        return {
            token: new i(function(t) {
                e = t;
            }),
            cancel: e
        };
    };
    e.exports = i;
}, /* 81 */
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
}, /* 82 */
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
                staticClass: "scanindex__link",
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
                    src: e.buildCoverThumbPath(t)
                }
            }) ]) ]);
        }) ], 2) ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-6a436f91", a);
    }
}, /* 83 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(25);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(84);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/zzapheader/zzapheader.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] zzapheader.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-80d21ab6", u.options); else t.reload("data-v-80d21ab6", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 84 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("header", {
            staticClass: "header"
        }, [ r("h1", [ e._v("Progetto Zzap! Italia") ]), e._v(" "), r("div", {
            staticClass: "header__container"
        }, [ r("a", {
            on: {
                click: function(t) {
                    e.scrollToClass("cover");
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
    var i = [ function() {
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
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-80d21ab6", a);
    }
}, /* 85 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(26);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(86);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/zzapfooter/zzapfooter.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] zzapfooter.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-19f47de5", u.options); else t.reload("data-v-19f47de5", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 86 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("footer", {
            staticClass: "footer"
        }, [ r("p", [ e._v("Il Progetto Zzap! Italia è l'opera collettiva che ha\n    reso disponibili online tutte le scansioni della rivista\n    Zzap! "), r("scroll-link", {
            attrs: {
                anchor: "progetto-zzap-italia"
            }
        }, [ e._v("\n      Vuoi saperne di piú?\n    ") ]) ], 1), e._v(" "), e._m(0) ]);
    };
    var i = [ function() {
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
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-19f47de5", a);
    }
}, /* 87 */
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
}, /* 88 */
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
                open: e.readerData.open
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
                announceBookmark: function(t) {
                    e.addDynamicNavSection(t);
                },
                dismissBookmark: function(t) {
                    e.removeDynamicNavSection(t);
                }
            }
        }), e._v(" "), r("zzap-footer") ], 1);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-29dbdfc5", a);
    }
}, /* 89 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(27);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(92);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/scanissue/scanissue.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] scanissue.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-b7ea0842", u.options); else t.reload("data-v-b7ea0842", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 90 */
/***/
function(e, t, r) {
    "use strict";
    e.exports.isEmptyObject = function(e) {
        return 0 === Object.keys(e).length && e.constructor === Object;
    };
}, /* 91 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    var n = {
        it: [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ]
    };
    t.MONTHS = n;
}, /* 92 */
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
            staticClass: "scanissue__cover"
        }, [ r("div", {
            staticClass: "scanissue__infocontainer"
        }, [ r("div", {
            staticClass: "scanissue__info"
        }, [ r("h2", {
            staticClass: "scanissue__numberline"
        }, [ e._v("Numero "), r("span", {
            staticClass: "scanissue__number"
        }, [ e._v(e._s(e.issue.sequence)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__dateline"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/calendar.svg",
                alt: "calendario"
            }
        }), r("span", {
            staticClass: "scanissue__month"
        }, [ e._v(e._s(e.getMonth(e.issue.month))) ]), e._v(" "), r("span", {
            staticClass: "scanissue__year"
        }, [ e._v(e._s(e.issue.year)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__editorline"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/edit.svg",
                alt: "matita"
            }
        }), r("span", {
            staticClass: "scanissue__editor"
        }, [ e._v(e._s(e.issue.editor.name)) ]) ]), e._v(" "), r("p", {
            staticClass: "scanissue__contributorlabel"
        }, [ r("img", {
            staticClass: "scanissue__icon",
            attrs: {
                src: "assets/icons/scanner.svg",
                alt: "scanner"
            }
        }), e._v("Scansioni di:\n          "), r("ul", {
            staticClass: "scanissue__contributorlist"
        }, e._l(e.issue.volumes[0].scan_authors, function(t) {
            return r("li", {
                staticClass: "scanissue__contributor"
            }, [ r("a", {
                attrs: {
                    href: e.buildContributorPath(t.id)
                }
            }, [ e._v(e._s(t.name)) ]) ]);
        })) ]) ]) ]), e._v(" "), r("a", {
            staticClass: "scanissue__detaillink",
            on: {
                click: function(t) {
                    e.openReader(e.issue.volumes[0].pages[0].label);
                }
            }
        }, [ r("img", {
            directives: [ {
                name: "lazy",
                rawName: "v-lazy",
                value: e.buildPageThumbPath(e.issue.volumes[0].pages[0].label),
                expression: "buildPageThumbPath(issue.volumes[0].pages[0].label)"
            } ],
            staticClass: "scanissue__page"
        }) ]) ]), e._v(" "), r("div", {
            staticClass: "scanissue__content"
        }, [ e._l(e.doublePages, function(t) {
            return r("div", {
                staticClass: "scanissue__doublepage"
            }, [ r("a", {
                staticClass: "scanissue__detaillink",
                on: {
                    click: function(r) {
                        e.openReader(e.issue.volumes[0].pages[t].label);
                    }
                }
            }, [ r("img", {
                directives: [ {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.buildPageThumbPath(e.issue.volumes[0].pages[t].label),
                    expression: "buildPageThumbPath(issue.volumes[0].pages[page].label)"
                } ],
                class: e.getContentClass(e.issue.volumes[0].pages[t])
            }), e._v(" "), r("img", {
                directives: [ {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: e.buildPageThumbPath(e.issue.volumes[0].pages[t + 1].label),
                    expression: "buildPageThumbPath(issue.volumes[0].pages[page + 1].label)"
                } ],
                class: e.getContentClass(e.issue.volumes[0].pages[t + 1])
            }) ]) ]);
        }), e._v(" "), r("div", {
            staticClass: "scanissue__doublepage"
        }, [ r("a", {
            staticClass: "scanissue__detaillink",
            on: {
                click: function(t) {
                    e.openReader(e.issue.volumes[0].pages[e.issue.volumes[0].pages.length - 1].label);
                }
            }
        }, [ r("img", {
            directives: [ {
                name: "lazy",
                rawName: "v-lazy",
                value: e.buildPageThumbPath(e.issue.volumes[0].pages[e.issue.volumes[0].pages.length - 1].label),
                expression: "buildPageThumbPath(issue.volumes[0].pages[issue.volumes[0].pages.length - 1].label)"
            } ],
            staticClass: "scanissue__page"
        }) ]) ]) ], 2) ]) : e._e();
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-b7ea0842", a);
    }
}, /* 93 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(28);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(97);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/content/diaries/diaries.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] diaries.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-33ac01d3", u.options); else t.reload("data-v-33ac01d3", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 94 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        var r = e._self._c || t;
        return r("section", {
            class: e.componentClass
        }, [ r("h2", [ e._v(e._s(e.title)) ]), e._v(" "), r("div", {
            staticClass: "content__container"
        }, [ e._t("default") ], 2) ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-6c0b2e36", a);
    }
}, /* 95 */
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
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-8f6dddb6", a);
    }
}, /* 96 */
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
                src: e.imagePath
            }
        }) ]) : r("img", {
            attrs: {
                src: e.imagePath
            }
        }), e._v(" "), e.caption ? r("figcaption", [ e._v(e._s(e.caption)) ]) : e._e() ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-69d4f6b6", a);
    }
}, /* 97 */
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
        }, [ r("ul", [ r("li", [ e._v("Anche il nuovo sito del Progetto Zzap! Italia ha il suo diario.\n      "), r("scroll-link", {
            attrs: {
                anchor: "diari-zzap"
            }
        }, [ e._v('"Il mio galeone", di Toni Bianchetti') ]) ], 1) ]) ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-33ac01d3", a);
    }
}, /* 98 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(34);
    /* harmony import */
    var i = r.n(n);
    /* harmony import */
    var a = r(99);
    var o = false;
    var s = r(0);
    var u = s(i.a, a["a"], null, null, null);
    u.options.__file = "src/components/content/speciali/speciali.vue";
    if (u.esModule && Object.keys(u.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (u.options.functional) console.error("[vue-loader] speciali.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-0256c1cf", u.options); else t.reload("data-v-0256c1cf", u.options);
        e.hot.dispose(function(e) {
            o = true;
        });
    }();
    /* harmony default export */
    t["default"] = u.exports;
}, /* 99 */
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
        }, [ e._v("Konix Multisystem") ]), e._v(", di Darkj") ], 1) ]) ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-0256c1cf", a);
    }
}, /* 100 */
/***/
function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: true
    });
    /* harmony import */
    var n = r(101);
    var i = false;
    var a = r(0);
    var o = a(null, n["a"], null, null, null);
    o.options.__file = "src/components/notfoundcomponent/notfoundcomponent.vue";
    if (o.esModule && Object.keys(o.esModule).some(function(e) {
        return "default" !== e && "__" !== e.substr(0, 2);
    })) console.error("named exports are not supported in *.vue files.");
    if (o.options.functional) console.error("[vue-loader] notfoundcomponent.vue: functional components are not supported with templates, they should use render functions.");
    /* hot reload */
    if (false) !function() {
        var t = require("vue-hot-reload-api");
        t.install(require("vue"), false);
        if (!t.compatible) return;
        e.hot.accept();
        if (!e.hot.data) t.createRecord("data-v-fc854bfa", o.options); else t.reload("data-v-fc854bfa", o.options);
        e.hot.dispose(function(e) {
            i = true;
        });
    }();
    /* harmony default export */
    t["default"] = o.exports;
}, /* 101 */
/***/
function(e, t, r) {
    "use strict";
    var n = function() {
        var e = this;
        var t = e.$createElement;
        return (e._self._c || t)("p", [ e._v("Not found") ]);
    };
    var i = [];
    n._withStripped = true;
    var a = {
        render: n,
        staticRenderFns: i
    };
    /* harmony default export */
    t["a"] = a;
    if (false) {
        e.hot.accept();
        if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-fc854bfa", a);
    }
}, /* 102 */
/***/
function(e, t, r) {
    var n = {
        "./content/basecontent.js": 3,
        "./content/diaries/diaries.js": 28,
        "./content/diaries/pages/zzap.js": 35,
        "./content/speciali/pages/konixmultisystem.js": 37,
        "./content/speciali/pages/leabbiamovistetutte.js": 36,
        "./content/speciali/speciali.js": 34,
        "./contentcontainer/contentcontainer.js": 7,
        "./contentimage/contentimage.js": 33,
        "./contentsection/contentsection.js": 31,
        "./demo/content/image.js": 38,
        "./dynamicnavigation/dynamicnavigation.js": 10,
        "./home/home.js": 9,
        "./index/index.js": 13,
        "./loader/loader.js": 14,
        "./reader/reader-image.js": 16,
        "./reader/reader.js": 15,
        "./scanindex/scanindex.js": 17,
        "./scanissue/scanissue.js": 27,
        "./scrolllink/scrolllink.js": 11,
        "./zzapfooter/zzapfooter.js": 26,
        "./zzapheader/zzapheader.js": 25
    };
    function i(e) {
        return r(a(e));
    }
    function a(e) {
        var t = n[e];
        if (!(t + 1)) // check for number or string
        throw new Error("Cannot find module '" + e + "'.");
        return t;
    }
    i.keys = function() {
        return Object.keys(n);
    };
    i.resolve = a;
    e.exports = i;
    i.id = 102;
} ], [ 39 ]);