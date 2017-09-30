webpackJsonp([ 2 ], {
    /***/
    104: /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_konixmultisystem_js__ = __webpack_require__(36);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_konixmultisystem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_konixmultisystem_js__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a9d5d0e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_konixmultisystem_vue__ = __webpack_require__(108);
        var disposed = false;
        var normalizeComponent = __webpack_require__(0);
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_konixmultisystem_js___default.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a9d5d0e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_konixmultisystem_vue__["a"], null, null, null);
        Component.options.__file = "src/components/content/speciali/pages/konixmultisystem.vue";
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__" !== key.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        if (Component.options.functional) console.error("[vue-loader] konixmultisystem.vue: functional components are not supported with templates, they should use render functions.");
        /* hot reload */
        if (false) !function() {
            var hotAPI = require("vue-hot-reload-api");
            hotAPI.install(require("vue"), false);
            if (!hotAPI.compatible) return;
            module.hot.accept();
            if (!module.hot.data) hotAPI.createRecord("data-v-5a9d5d0e", Component.options); else hotAPI.reload("data-v-5a9d5d0e", Component.options);
            module.hot.dispose(function(data) {
                disposed = true;
            });
        }();
        /* harmony default export */
        __webpack_exports__["default"] = Component.exports;
    },
    /***/
    108: /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("content-container", {
                attrs: {
                    title: "Un sogno mai realizzato: il Konix Multisystem, di Darkj",
                    anchor: "speciali-konixmultisystem"
                },
                on: {
                    announceBookmark: function($event) {
                        _vm.announceBookmark($event);
                    },
                    dismissBookmark: function($event) {
                        _vm.dismissBookmark($event);
                    }
                }
            }, [ _c("content-section", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/speedking.jpg",
                    caption: "Lo Speedking, il rivoluzionario joystick della Konix.",
                    align: "right"
                }
            }), _vm._v(" "), _c("p", [ _vm._v("Chi di voi, che avete vissuto l'era 8 bit, non si ricorda della mitica Konix? Ripensando ai tempi in cui ci si ritrovava i pomeriggi a casa degli amici a giocare con il C64 (intervallando purtroppo con qualche minuto di studio) non posso non ricordare il migliore compagno di noi videogiocatori dell'epoca, lo SPEEDKING. Il joystick della suddetta casa inglese che fu una vera e propria rivoluzione rispetto ai controller utilizzati fino ad allora, rozzi, squadrati e scomodi!!! Lo speedking aveva una forma ergonomica che permetteva la presa dello stesso e la pressione del fire con la mano sinistra lasciando alla mano destra il controllo della leva.\nNon mi sento di esagerare dicendo che un buon 90% dei possessori di C64 in breve tempo avevano fatto loro questo nuovo ed utile accessorio che, oltre che per per la comodità si contraddistingueva anche per la solidità e robustezza, pensate che il mio è passato attraverso migliaia di partite a decathlon (lo spacca joystick per eccellenza) ed a cadute da varie altezze tanto da resistere addirittura fino al passaggio C64 - Amiga.\nVisto il grande successo dello speedking la Konix ne realizzò versioni per PC e per alcune consolle fra le quali ricordo il Nintendo Entertainment System e il Sega Master System che però non ebbero il successo dell'originale.") ]), _vm._v(" "), _c("p", [ _vm._v("Nel 1988 Konix si associò ad un'altra compagnia inglese la Flare, che aveva già sviluppato un prototipo di computer il Flare One, per lo sviluppo di una console basata sull'hardware di quest'ultimo, chiamata Konix Multisystem. Le foto sulle preview delle riviste del settore furono tali da fare sbavare qualsiasi appassionato di videogiochi e ancor di più chi già aveva testato la qualità dei prodotti Konix. Lasciando a dopo le specifiche tecniche della console, ciò che subito saltava all'occhio era proprio la forma di quest'ultima che appariva come un volante d'auto perfetto per i giochi automobilistici (considerate che ai tempi non esistevano tutti gli accessori che esistono oggi per le console) che all'occorrenza con semplici operazioni poteva trasformarsi in manubrio da moto/bike o in cloche per le simulazioni di volo. In più venivano sponsorizzate una serie di periferche accessiorie quali la lightgun, la sedia meccanica(!!!). Insomma c'era di tutto per fare sognare noi ingenui ragazzini dell'epoca.") ]), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixcloche.jpg",
                    caption: "Il Konix Multisystem in configurazione cloche"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixauto3.jpg",
                    caption: "Configuarazione volante, con a destra la pedaliera fornita con la console"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixmoto2.jpg",
                    caption: "Configurazione motorbike"
                }
            }), _vm._v(" "), _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/konixmultisystem/konixsedia.jpg",
                    caption: "La sedia meccanica",
                    align: "right"
                }
            }), _vm._v("\n        Ma purtroppo la console non vide mai la luce a parte forse qualche esemplare dimostrativo per una serie di motivi fra i quali i continui cambiamenti dell'hardware e i continui posticipi della data di uscita che scoraggiarono le software house dall'investire risorse sullo sviluppo per questa macchina. Ad esempio la memoria ram dela consolle doveva essere inizialmente di 128k per poi essere portata a 256k con la possibilità di espansione fino a 512k dopo le critiche subite da parte di alcune software house, quindi ai definitivi 512k negli ultimi modelli.") ], 1), _vm._v(" "), _c("p", [ _vm._v("Vediamo dunque le specifiche tecniche della console:\n        "), _c("ol", [ _c("li", [ _vm._v("Il "), _c("strong", [ _vm._v("processore") ]), _vm._v(" era un 8086 a 16 bit affiancato da un coprocessore custom ASIC a 12mhz comprendente video generator, colour palette, disk controller, Blitter, ROM, fast RAM, 12 MIP Arithmetic and Logic Unit, RISC Digital Signal Processor, stereo compact disk DACs and digital and analogue ports.") ]), _vm._v(" "), _c("li", [ _vm._v("La "), _c("strong", [ _vm._v("memoria") ]), _vm._v(" ram come già detto era di 256k (512k successivamente).") ]), _vm._v(" "), _c("li", [ _vm._v("Le "), _c("strong", [ _vm._v("risoluzioni") ]), _vm._v(" grafiche 256x200 a 256 colori, 256x200 a 16 colori e 512x200 a 16 colori il tutto da una paletta di 4096 colori.") ]), _vm._v(" "), _c("li", [ _vm._v("Il "), _c("strong", [ _vm._v("sonoro") ]), _vm._v(" stereo a 25 canali con qualità CD ed output via TV o cuffie.") ]), _vm._v(" "), _c("li", [ _c("strong", [ _vm._v("Uscite video") ]), _vm._v(" standard Tv o RGB composito.") ]), _vm._v(" "), _c("li", [ _vm._v("Il "), _c("strong", [ _vm._v("software") ]), _vm._v(" risiedeva su dischetti da 3,5 con capacità da 880k o su cartuccia.") ]) ]), _vm._v("\n        Dopo il fallimento del Konix multisystem e lo scioglimento delle due società la Flare continuò lo sviluppo dell'hardware del Flare One producendo il Flare Two che fu poi venduto ad Atari e diventò l'"), _c("strong", [ _vm._v("Atari Jaguar") ]), _vm._v(".\n      ") ]) ], 1) ], 1);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        var esExports = {
            render: render,
            staticRenderFns: staticRenderFns
        };
        /* harmony default export */
        __webpack_exports__["a"] = esExports;
        if (false) {
            module.hot.accept();
            if (module.hot.data) require("vue-hot-reload-api").rerender("data-v-5a9d5d0e", esExports);
        }
    }
});