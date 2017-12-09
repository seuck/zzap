webpackJsonp([ 1 ], {
    /***/
    130: /***/
    function(e, a, o) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        /* harmony import */
        var t = o(50);
        /* harmony import */
        var i = o.n(t);
        /* harmony import */
        var r = o(139);
        var n = false;
        var l = o(0);
        var c = l(i.a, r["a"], false, null, null, null);
        c.options.__file = "src/components/content/zzap/pages/retroedicola.vue";
        if (c.esModule && Object.keys(c.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        /* hot reload */
        if (false) !function() {
            var a = require("vue-hot-reload-api");
            a.install(require("vue"), false);
            if (!a.compatible) return;
            e.hot.accept();
            if (!e.hot.data) a.createRecord("data-v-146e81c2", c.options); else a.reload("data-v-146e81c2", c.options);
            e.hot.dispose(function(e) {
                n = true;
            });
        }();
        /* harmony default export */
        a["default"] = c.exports;
    },
    /***/
    139: /***/
    function(e, a, o) {
        "use strict";
        var t = function() {
            var e = this;
            var a = e.$createElement;
            var o = e._self._c || a;
            return o("content-container", {
                attrs: {
                    title: "Retroedicola Videoludica presenta Zzap!",
                    date: "Maggio 2015",
                    anchor: "speciali-zzapretroedicola"
                },
                on: {
                    announceBookmark: function(a) {
                        e.announceBookmark(a);
                    },
                    dismissBookmark: function(a) {
                        e.dismissBookmark(a);
                    }
                }
            }, [ o("content-section", [ o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/zzap-retroedicola/zzap-retroedicola-copertina.jpg",
                    caption: "Lo copertina di Zzap! Retroedicola Videoludica",
                    align: "right",
                    rotation: "cw",
                    linkUrl: "assets/content/speciali/zzap-retroedicola/Retroedicola-Speciale-Zzap.pdf"
                }
            }), e._v(" "), o("p", [ e._v("E quando meno te l'aspetti... un nuovo, piccolo, ghiottissimo numero di Zzap!"), o("br"), e._v("\n      Con immenso piacere aiutiamo a diffondere il risultato delle fatiche di Mauro Corbetta e Luca Antignano che oltre a curare il grandissimo archivio di "), o("a", {
                attrs: {
                    href: "http://www.retroedicola.it"
                }
            }, [ e._v("Retroedicola Videoludica") ]), e._v(" trovano il tempo di deliziarci con questo speciale pieno di interviste.") ]), e._v(" "), o("p", [ e._v('Tra celebritá inglesi e nostrane vi invitiamo a tuffarvi nella lettura regolando la manopola "nostalgia" al massimo livello.') ]), e._v(" "), o("p", [ e._v("Grazie ragazzi!") ]) ], 1) ], 1);
        };
        var i = [];
        t._withStripped = true;
        var r = {
            render: t,
            staticRenderFns: i
        };
        /* harmony default export */
        a["a"] = r;
        if (false) {
            e.hot.accept();
            if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-146e81c2", r);
        }
    }
});