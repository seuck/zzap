webpackJsonp([ 7 ], {
    /***/
    127: /***/
    function(e, a, i) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        /* harmony import */
        var t = i(47);
        /* harmony import */
        var o = i.n(t);
        /* harmony import */
        var r = i(136);
        var n = false;
        var l = i(0);
        var s = l(o.a, r["a"], false, null, null, null);
        s.options.__file = "src/components/content/mappe/pages/citadel.vue";
        if (s.esModule && Object.keys(s.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        /* hot reload */
        if (false) !function() {
            var a = require("vue-hot-reload-api");
            a.install(require("vue"), false);
            if (!a.compatible) return;
            e.hot.accept();
            if (!e.hot.data) a.createRecord("data-v-abfeaf4e", s.options); else a.reload("data-v-abfeaf4e", s.options);
            e.hot.dispose(function(e) {
                n = true;
            });
        }();
        /* harmony default export */
        a["default"] = s.exports;
    },
    /***/
    136: /***/
    function(e, a, i) {
        "use strict";
        var t = function() {
            var e = this;
            var a = e.$createElement;
            var i = e._self._c || a;
            return i("content-container", {
                attrs: {
                    title: "Citadel, di Toni Bianchetti",
                    date: "2 Febbraio 2006",
                    anchor: "mappe-citadel"
                },
                on: {
                    announceBookmark: function(a) {
                        e.announceBookmark(a);
                    },
                    dismissBookmark: function(a) {
                        e.dismissBookmark(a);
                    }
                }
            }, [ i("content-section", [ i("p", [ e._v("Ecco a voi le mappe degli 8 livelli di Citadel, lo spara-e-fuggi-strategico di Martin Walker.") ]), e._v(" "), i("p", [ e._v("Le mappe sono state pubblicate quest'estate nel numero speciale di Zzap! che celebrava i 20 anni della nostra cara rivista. I suoi stretti tempi di pubblicazione mi hanno costretto a completare gli ultimi tre livelli in pochi giorni ma la mappa del primo livello risale ad almeno 4 anni prima, periodo in cui mi è balenata per la prima volta l'idea di mappare un gioco mettendo insieme le videate salvate giocando su un emulatore. Queste mappe, quindi, sono in parte precedenti a quella di "), i("scroll-link", {
                attrs: {
                    anchor: "mappe-jackthenipper2"
                }
            }, [ e._v('"Jack the nipper 2"') ]), e._v(".") ], 1), e._v(" "), i("p", [ e._v("Ciascun livello rappresenta le due facce, superiore ed inferiore, di una città metallica, senza vita ma piena di difese robotiche. La grafica è colorata e scintillante ma l'aspetto più suggestivo non si può apprezzare dalle mappe: gli stupendi effetti sonori ed il rumore di fondo caratteristico di ogni livello. Per gli manti delle simmetrie, ogni livello è racchiuso in un quadrato di 1024 pixel di lato.") ]) ]) ], 1);
        };
        var o = [];
        t._withStripped = true;
        var r = {
            render: t,
            staticRenderFns: o
        };
        /* harmony default export */
        a["a"] = r;
        if (false) {
            e.hot.accept();
            if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-abfeaf4e", r);
        }
    }
});