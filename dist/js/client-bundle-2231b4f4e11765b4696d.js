webpackJsonp([ 6 ], {
    /***/
    128: /***/
    function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        /* harmony import */
        var o = t(48);
        /* harmony import */
        var i = t.n(o);
        /* harmony import */
        var n = t(137);
        var r = false;
        var l = t(0);
        var s = l(i.a, n["a"], false, null, null, null);
        s.options.__file = "src/components/content/mappe/pages/jackthenipper2.vue";
        if (s.esModule && Object.keys(s.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        /* hot reload */
        if (false) !function() {
            var a = require("vue-hot-reload-api");
            a.install(require("vue"), false);
            if (!a.compatible) return;
            e.hot.accept();
            if (!e.hot.data) a.createRecord("data-v-15d39867", s.options); else a.reload("data-v-15d39867", s.options);
            e.hot.dispose(function(e) {
                r = true;
            });
        }();
        /* harmony default export */
        a["default"] = s.exports;
    },
    /***/
    137: /***/
    function(e, a, t) {
        "use strict";
        var o = function() {
            var e = this;
            var a = e.$createElement;
            var t = e._self._c || a;
            return t("content-container", {
                attrs: {
                    title: "Jack the nipper 2, di Toni Bianchetti",
                    date: "12 Agosto 2004",
                    anchor: "mappe-jackthenipper2"
                },
                on: {
                    announceBookmark: function(a) {
                        e.announceBookmark(a);
                    },
                    dismissBookmark: function(a) {
                        e.dismissBookmark(a);
                    }
                }
            }, [ t("content-section", [ t("content-image", {
                attrs: {
                    imagePath: "assets/content/mappe/jackthenipper2/jack1.gif",
                    align: "right",
                    rotation: "cw"
                }
            }), e._v(" "), t("p", [ e._v('"Jack the nipper" torna piú dispettoso che mai in questo platform della Gremlin Graphics, pubblicato nel 1987. Disponibile per verie piattaforme, la versione qui mappata è quella per C64.') ]), e._v(" "), t("p", [ e._v("La mappa è stata ottenuta catturando le schermate una alla volta, mentre giocavo con un emulatore. In ciascuna immagine ho rimosso il personaggio principale, tranne nella prima, cosí da poter localizzare dove si trova il punto di partenza: in alto a sinistra.") ]), e._v(" "), t("p", [ e._v("Ho cercato di utilizzare solo i 16 colori della palette del C64, mai tutti visibili contemporaneamente nel gioco. Infatti come conseguenza della ben nota limitazione del modo multicolore del C64, lo sfondo utilizza solo quattro colori, tre fissi e uno alterabile per ciascun carattere. Per agiungere varietá alle varie zone, i tre colori fissi cambiano ogni volta che Jack entra in una nuova area, di solito attraversando un tunnel oscuro, e facendosi luce con una candela.") ]), e._v(" "), t("p", [ e._v('Esiste inoltre una versione disegnata della mappa di "Jack the nipper 2" nel numero 21, Marzo 1988, di Zzap!') ]) ], 1) ], 1);
        };
        var i = [];
        o._withStripped = true;
        var n = {
            render: o,
            staticRenderFns: i
        };
        /* harmony default export */
        a["a"] = n;
        if (false) {
            e.hot.accept();
            if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-15d39867", n);
        }
    }
});