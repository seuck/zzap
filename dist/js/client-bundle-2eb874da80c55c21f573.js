webpackJsonp([ 2 ], {
    /***/
    109: /***/
    function(e, i, o) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: true
        });
        /* harmony import */
        var a = o(38);
        /* harmony import */
        var t = o.n(a);
        /* harmony import */
        var n = o(115);
        var s = false;
        var r = o(0);
        var l = r(t.a, n["a"], null, null, null);
        l.options.__file = "src/components/content/speciali/pages/konixmultisystem.vue";
        if (l.esModule && Object.keys(l.esModule).some(function(e) {
            return "default" !== e && "__" !== e.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        if (l.options.functional) console.error("[vue-loader] konixmultisystem.vue: functional components are not supported with templates, they should use render functions.");
        /* hot reload */
        if (false) !function() {
            var i = require("vue-hot-reload-api");
            i.install(require("vue"), false);
            if (!i.compatible) return;
            e.hot.accept();
            if (!e.hot.data) i.createRecord("data-v-5a9d5d0e", l.options); else i.reload("data-v-5a9d5d0e", l.options);
            e.hot.dispose(function(e) {
                s = true;
            });
        }();
        /* harmony default export */
        i["default"] = l.exports;
    },
    /***/
    115: /***/
    function(e, i, o) {
        "use strict";
        var a = function() {
            var e = this;
            var i = e.$createElement;
            var o = e._self._c || i;
            return o("content-container", {
                attrs: {
                    title: "Un sogno mai realizzato: il Konix Multisystem, di Darkj",
                    anchor: "speciali-konixmultisystem"
                },
                on: {
                    announceBookmark: function(i) {
                        e.announceBookmark(i);
                    },
                    dismissBookmark: function(i) {
                        e.dismissBookmark(i);
                    }
                }
            }, [ o("content-section", [ o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/speedking.jpg",
                    caption: "Lo Speedking, il rivoluzionario joystick della Konix.",
                    align: "right"
                }
            }), e._v(" "), o("p", [ e._v("Chi di voi, che avete vissuto l'era 8 bit, non si ricorda della mitica Konix? Ripensando ai tempi in cui ci si ritrovava i pomeriggi a casa degli amici a giocare con il C64 (intervallando purtroppo con qualche minuto di studio) non posso non ricordare il migliore compagno di noi videogiocatori dell'epoca, lo SPEEDKING. Il joystick della suddetta casa inglese che fu una vera e propria rivoluzione rispetto ai controller utilizzati fino ad allora, rozzi, squadrati e scomodi!!! Lo speedking aveva una forma ergonomica che permetteva la presa dello stesso e la pressione del fire con la mano sinistra lasciando alla mano destra il controllo della leva.\nNon mi sento di esagerare dicendo che un buon 90% dei possessori di C64 in breve tempo avevano fatto loro questo nuovo ed utile accessorio che, oltre che per per la comodità si contraddistingueva anche per la solidità e robustezza, pensate che il mio è passato attraverso migliaia di partite a decathlon (lo spacca joystick per eccellenza) ed a cadute da varie altezze tanto da resistere addirittura fino al passaggio C64 - Amiga.\nVisto il grande successo dello speedking la Konix ne realizzò versioni per PC e per alcune consolle fra le quali ricordo il Nintendo Entertainment System e il Sega Master System che però non ebbero il successo dell'originale.") ]), e._v(" "), o("p", [ e._v("Nel 1988 Konix si associò ad un'altra compagnia inglese la Flare, che aveva già sviluppato un prototipo di computer il Flare One, per lo sviluppo di una console basata sull'hardware di quest'ultimo, chiamata Konix Multisystem. Le foto sulle preview delle riviste del settore furono tali da fare sbavare qualsiasi appassionato di videogiochi e ancor di più chi già aveva testato la qualità dei prodotti Konix. Lasciando a dopo le specifiche tecniche della console, ciò che subito saltava all'occhio era proprio la forma di quest'ultima che appariva come un volante d'auto perfetto per i giochi automobilistici (considerate che ai tempi non esistevano tutti gli accessori che esistono oggi per le console) che all'occorrenza con semplici operazioni poteva trasformarsi in manubrio da moto/bike o in cloche per le simulazioni di volo. In più venivano sponsorizzate una serie di periferche accessiorie quali la lightgun, la sedia meccanica(!!!). Insomma c'era di tutto per fare sognare noi ingenui ragazzini dell'epoca.") ]), e._v(" "), o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixcloche.jpg",
                    caption: "Il Konix Multisystem in configurazione cloche",
                    noSrcset: "true"
                }
            }), e._v(" "), o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixauto3.jpg",
                    caption: "Configuarazione volante, con a destra la pedaliera fornita con la console",
                    noSrcset: "true"
                }
            }), e._v(" "), o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixmoto2.jpg",
                    caption: "Configurazione motorbike",
                    noSrcset: "true"
                }
            }), e._v(" "), o("p", [ o("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixsedia.jpg",
                    caption: "La sedia meccanica",
                    align: "right",
                    noSrcset: "true"
                }
            }), e._v("\n        Ma purtroppo la console non vide mai la luce a parte forse qualche esemplare dimostrativo per una serie di motivi fra i quali i continui cambiamenti dell'hardware e i continui posticipi della data di uscita che scoraggiarono le software house dall'investire risorse sullo sviluppo per questa macchina. Ad esempio la memoria ram dela consolle doveva essere inizialmente di 128k per poi essere portata a 256k con la possibilità di espansione fino a 512k dopo le critiche subite da parte di alcune software house, quindi ai definitivi 512k negli ultimi modelli.") ], 1), e._v(" "), o("p", [ e._v("Vediamo dunque le specifiche tecniche della console:\n        "), o("ol", [ o("li", [ e._v("Il "), o("strong", [ e._v("processore") ]), e._v(" era un 8086 a 16 bit affiancato da un coprocessore custom ASIC a 12mhz comprendente video generator, colour palette, disk controller, Blitter, ROM, fast RAM, 12 MIP Arithmetic and Logic Unit, RISC Digital Signal Processor, stereo compact disk DACs and digital and analogue ports.") ]), e._v(" "), o("li", [ e._v("La "), o("strong", [ e._v("memoria") ]), e._v(" ram come già detto era di 256k (512k successivamente).") ]), e._v(" "), o("li", [ e._v("Le "), o("strong", [ e._v("risoluzioni") ]), e._v(" grafiche 256x200 a 256 colori, 256x200 a 16 colori e 512x200 a 16 colori il tutto da una paletta di 4096 colori.") ]), e._v(" "), o("li", [ e._v("Il "), o("strong", [ e._v("sonoro") ]), e._v(" stereo a 25 canali con qualità CD ed output via TV o cuffie.") ]), e._v(" "), o("li", [ o("strong", [ e._v("Uscite video") ]), e._v(" standard Tv o RGB composito.") ]), e._v(" "), o("li", [ e._v("Il "), o("strong", [ e._v("software") ]), e._v(" risiedeva su dischetti da 3,5 con capacità da 880k o su cartuccia.") ]) ]), e._v("\n        Dopo il fallimento del Konix multisystem e lo scioglimento delle due società la Flare continuò lo sviluppo dell'hardware del Flare One producendo il Flare Two che fu poi venduto ad Atari e diventò l'"), o("strong", [ e._v("Atari Jaguar") ]), e._v(".\n      ") ]) ], 1) ], 1);
        };
        var t = [];
        a._withStripped = true;
        var n = {
            render: a,
            staticRenderFns: t
        };
        /* harmony default export */
        i["a"] = n;
        if (false) {
            e.hot.accept();
            if (e.hot.data) require("vue-hot-reload-api").rerender("data-v-5a9d5d0e", n);
        }
    }
});