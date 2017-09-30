webpackJsonp([ 0 ], {
    /***/
    105: /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_image_js__ = __webpack_require__(37);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_image_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_image_js__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54fdb75a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_image_vue__ = __webpack_require__(109);
        var disposed = false;
        var normalizeComponent = __webpack_require__(0);
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_image_js___default.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54fdb75a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_image_vue__["a"], null, null, null);
        Component.options.__file = "src/components/demo/content/image.vue";
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__" !== key.substr(0, 2);
        })) console.error("named exports are not supported in *.vue files.");
        if (Component.options.functional) console.error("[vue-loader] image.vue: functional components are not supported with templates, they should use render functions.");
        /* hot reload */
        if (false) !function() {
            var hotAPI = require("vue-hot-reload-api");
            hotAPI.install(require("vue"), false);
            if (!hotAPI.compatible) return;
            module.hot.accept();
            if (!module.hot.data) hotAPI.createRecord("data-v-54fdb75a", Component.options); else hotAPI.reload("data-v-54fdb75a", Component.options);
            module.hot.dispose(function(data) {
                disposed = true;
            });
        }();
        /* harmony default export */
        __webpack_exports__["default"] = Component.exports;
    },
    /***/
    109: /***/
    function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("content-container", {
                attrs: {
                    title: "Le abbiamo viste tutte, di Paolo Besser",
                    anchor: "speciali-leabbiamovistetutte"
                }
            }, [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    linkUrl: "#",
                    caption: "Centred and linked"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    rotation: "cw",
                    caption: "Centred CW"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: "Centred CC",
                    rotation: "cc"
                }
            }), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: 'Centred with long caption, la splendida protagonista di "Insects is Space" creata da Sensible Software'
                }
            }), _vm._v(" "), _c("content-section", {
                attrs: {
                    title: "Le origini"
                }
            }, [ _c("p", [ _vm._v("Gli articoli storici sono sempre un’occasione d’oro per vanagloriarsi,\n      giacché ognuno di noi normalmente vive le proprie giornate senza la pretesa,\n      un giorno, di ripercorrerle col pensiero e di riportarle da qualche parte.\n      A meno che, ovviamente, debba scrivere un’autobiografia.") ]) ]), _vm._v(" "), _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    linkUrl: "#",
                    caption: "Centred, linked, between sections"
                }
            }), _vm._v(" "), _c("content-section", {
                attrs: {
                    title: "Il seguito"
                }
            }, [ _c("p", [ _vm._v("Gli articoli storici sono sempre un’occasione d’oro per vanagloriarsi,\n      giacché ognuno di noi normalmente vive le proprie giornate senza la pretesa,\n      un giorno, di ripercorrerle col pensiero e di riportarle da qualche parte.\n      A meno che, ovviamente, debba scrivere un’autobiografia.\n      E questo tipo di manoscritti, per quanto affascinante, è sempre filtrato dai\n      ricordi, dalle emozioni vissute, dal desiderio di rimediare gli errori\n      compiuti, dalla voglia di giustificazione o di riscatto.\n      Parlare della rivista per cui si lavora, per fortuna, è sostanzialmente\n      diverso: ciò ch’è stato è stato, da qualche parte rimarrà scritto,\n      e troverai sempre il vecchio lettore pronto a contraddirti,\n      e poi c’è quella parte visibile, oggettiva, che rimarrà a tutti gli effetti\n      l’unica cosa che la gente ricorderà. Perché in fondo chi scrive non lo fa\n      solo per informare, ma anche nella speranza che qualcosa di suo rimanga in\n      eterno.") ]) ]), _vm._v(" "), _c("content-section", {
                attrs: {
                    title: "Le origini"
                }
            }, [ _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    rotation: "cw",
                    caption: "Centred, CW, at the beginning of a paragraph"
                }
            }), _vm._v('\n      Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con\n      gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un\n      Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente\n      bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a\n      procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria\n      da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,\n      nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i\n      genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova\n      "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,\n      eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli\n      effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo\n      che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che\n      improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.\n      Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più\n      grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,\n      "edizione italiana" di quella "inglese più venduta": Zzap!.') ], 1) ]), _vm._v(" "), _c("content-section", {
                attrs: {
                    title: "Le origini"
                }
            }, [ _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: "Left, at the beginning of a paragraph",
                    align: "left"
                }
            }), _vm._v('\n      Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con\n      gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un\n      Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente\n      bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a\n      procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria\n      da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,\n      nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i\n      genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova\n      "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,\n      eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli\n      effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo\n      che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che\n      improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.\n      Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più\n      grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,\n      "edizione italiana" di quella "inglese più venduta": Zzap!.') ], 1), _vm._v(" "), _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: "Right, linked, at the beginning of a paragraph",
                    align: "right",
                    linkUrl: "#"
                }
            }), _vm._v('\n      Zzap! uscì in sordina, nel lontano maggio del 1986, tanto in sordina che non tutte\n      le edicole ne furono provviste. Tant’è che il mio primo contatto con la nuova\n      pubblicazione avvenne solo otto mesi più tardi, nel dicembre dello stesso anno:\n      il mio C16 fu soppiantato a Natale da un più potente Commodore 128, e finalmente mi\n      mettevo nelle condizioni di "recuperare" tutto il tempo perduto: VideoGiochi si era\n      nel frattempo trasformata in VideoGiochi News e aveva fatto in tempo a morire per\n      la seconda volta, e improvvisamente tra le tante pubblicazioni dedicate all’argomento\n      "computer" intravidi un logo nuovo e attraente, quello stesso che capeggia tuttora\n      sulle copertine disegnate da Vera Gentinetta: Zzap!. Più che una parola, un sibilo.\n      Il verso dei laser. Ci misi gli anni a capire come diavolo si pronunciasse, ma dopo\n      sole poche ore quella sarebbe diventata la "mia" rivista, quella per la quale avrei\n      rotto le balle all’edicolante ogni santo mese, "è uscito Zzap!?", un leitmotiv a\n      cui si saranno abituati in tanti.') ], 1), _vm._v(" "), _c("p", [ _vm._v("Solo in seguito riuscii a recuperare i sei numeri che mancavano alla mia collezione:\n      cinque mi giunsero in arretrato, ma per il primo dovetti aspettare molti anni più\n      tardi, a rivista ormai defunta, quando un intraprendente lettore di Consolemania me\n      lo spedì in regalo.") ]) ]), _vm._v(" "), _c("content-section", {
                attrs: {
                    title: "Le origini"
                }
            }, [ _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: "Left, CC, at the beginning of a paragraph",
                    align: "left",
                    rotation: "cc"
                }
            }), _vm._v('\n      Nella primavera del 1986, facevo ancora la seconda media. Guardavo il mondo con\n      gli occhi lucidi del bambino, e potevo considerarmi il felice utente di un\n      Commodore 16, nonostante gli sfottò degli allora possessori di un C64 onestamente\n      bruciassero... Avevano tutti i giochi di questo mondo, loro, e riuscivano a\n      procurarseli con una facilità davvero incredibile. Erano i tempi della pirateria\n      da edicola, e di seguire mensilmente una pubblicazione, ovviamente come lettore,\n      nemmeno se ne parlava: come per la maggior parte dei bambini di allora, erano i\n      genitori a stabilire se fosse il caso d’investire quelle poche lire in una nuova\n      "cassettina" per il computer, strumento per altro visto con diffidenza e disprezzo,\n      eppure, ciò non m’impedì di leggere qualche numero di VideoGiochi, a tutti gli\n      effetti la prima rivista italiana dedicata espressamente all’argomento. Ricordo\n      che la curava lo Studio Vit, all’epoca legato al Gruppo Editoriale Jackson, e che\n      improvvisamente le uscite della testata iniziarono a perdere in fatto di regolarità.\n      Non me ne rendevo conto, ma era già finita un’epoca, e i videogiocatori un po’ più\n      grandicelli si apprestavano a seguire le evoluzioni del mercato su una nuova rivista,\n      "edizione italiana" di quella "inglese più venduta": Zzap!.') ], 1), _vm._v(" "), _c("p", [ _c("content-image", {
                attrs: {
                    imagePath: "assets/content/speciali/leabbiamovistetutte/numero43.jpg",
                    caption: "Right,CW, linked, at the beginning of a paragraph",
                    align: "right",
                    rotation: "cw",
                    linkUrl: "#"
                }
            }), _vm._v('\n      Zzap! uscì in sordina, nel lontano maggio del 1986, tanto in sordina che non tutte\n      le edicole ne furono provviste. Tant’è che il mio primo contatto con la nuova\n      pubblicazione avvenne solo otto mesi più tardi, nel dicembre dello stesso anno:\n      il mio C16 fu soppiantato a Natale da un più potente Commodore 128, e finalmente mi\n      mettevo nelle condizioni di "recuperare" tutto il tempo perduto: VideoGiochi si era\n      nel frattempo trasformata in VideoGiochi News e aveva fatto in tempo a morire per\n      la seconda volta, e improvvisamente tra le tante pubblicazioni dedicate all’argomento\n      "computer" intravidi un logo nuovo e attraente, quello stesso che capeggia tuttora\n      sulle copertine disegnate da Vera Gentinetta: Zzap!. Più che una parola, un sibilo.\n      Il verso dei laser. Ci misi gli anni a capire come diavolo si pronunciasse, ma dopo\n      sole poche ore quella sarebbe diventata la "mia" rivista, quella per la quale avrei\n      rotto le balle all’edicolante ogni santo mese, "è uscito Zzap!?", un leitmotiv a\n      cui si saranno abituati in tanti.') ], 1), _vm._v(" "), _c("p", [ _vm._v("Solo in seguito riuscii a recuperare i sei numeri che mancavano alla mia collezione:\n      cinque mi giunsero in arretrato, ma per il primo dovetti aspettare molti anni più\n      tardi, a rivista ormai defunta, quando un intraprendente lettore di Consolemania me\n      lo spedì in regalo.") ]) ]) ], 1);
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
            if (module.hot.data) require("vue-hot-reload-api").rerender("data-v-54fdb75a", esExports);
        }
    }
});