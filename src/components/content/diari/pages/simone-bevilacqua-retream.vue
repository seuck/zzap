<template>
  <content-container
    anchor="diari-simonebevilacquaretream"
    author="Antonio Bianchetti"
    date="21 Ottobre 2018"
    title="Intervista a Simone Bevilacqua, la mente creativa di RETREAM"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <p>Siamo collegati via Skype con Simone Bevilacqua (fortuitamente dalle camerette in cui abbiamo speso i migliori anni dell'adolescenza), la mente creativa dietro la software house <a href="https://twitter.com/R37R34M">RETREAM</a>. È il 16 Luglio del 2018 e Simone sta lavorando a <a href="https://retream.itch.io/skillgrid">SkillGrid</a>, sullo stesso Amiga di quando era adolescente.
      Simone è un game designer perfezionista, eclettico e creativo. I suoi giochi miscelano generi diversi in un mix innovativo e imprevedibile, lasciando anche spazio a tanto umorismo. Ma diamo la parola a Simone stesso, che, come capirete leggendo, è anche un gran chiacchierone.</p>

      <content-image
        :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/retream-logo.png`)"
        :no-srcset="true"
        :no-shadow="true"
      />

      <p><strong>Zzap.it</strong>: Chi era Simone Bevilacqua all'epoca degli 8 e 16 bit? Un videogiocatore come tanti o già il programmatore creativo che conosciamo adesso?</p>

      <p><strong>Simone Bevilacqua</strong>: Anche se la maggior parte del tempo al computer l'ho passato a programmare, inizialmente ero più un giocatore che un programmatore. Il primo C64, un breadbin, lo ebbi a nove anni e subito ci scrissi le prime linee di codice. Tuttavia, ero isolato e l'unico materiale didattico che avevo era la parte BASIC del manuale utente della macchina: in conseguenza di ciò e del fatto che non ero un genio, non riuscivo a fare più di tanto e, quindi, giocavo molto. Ma a undici anni decisi di fare sul serio, applicandomi nello studio del manuale, seguendo alcune lezioni del corso VIDEO BASIC edito dalla Jackson, facendo esperimenti vari (tra cui anche qualche esercizio scolastico) e arrivando a lavorare in modo bitmap. Il risultato più notevole che raggiunsi fu scrivere un programma quasi completo di paint e animazione con il <a href="https://archive.org/details/SimonsBASIC/page/n0">Simons' BASIC</a>.
      (Curiosità: qualche anno fa ho recuperato molti dei miei primi esperimenti campionando con lo stereo diverse vecchie cassette.)
        <br>Nel 1990 il breadbin mi morì: un giorno non si accese più e al centro Commodore locale non mi diedero speranza. Qualche tempo dopo mio padre mi comprò il C64C, non sapendo che all'epoca erano già in giro gli Amiga. L'Amiga, un A1200, alla fine arrivò nel 1993 - ce n'è voluto di tempo!
        <br>L'Amiga mi aprì un nuovo mondo (l'impatto fu così potente che subito diedi via il C64C senza il timore che un giorno me ne sarei pentito).
        Ma ero sempre isolato e dovevo far tutto da me. Con l'<a href="https://it.wikipedia.org/wiki/AMOS_BASIC">AMOS Professional</a> cominciai a fare qualcosa di più consistente e anche qualche giochino. Un paio di anni dopo, accedendo a Internet dal laboratorio dell'Università di Pisa, potei finalmente accedere alla documentazione della macchina ed elevare il mio livello, facendo una vera e propria palestra di programmazione.</p>

      <p><strong>Z</strong>: Possiamo dire che lo stare in una posizione di isolamento sia stato per te anche un vantaggio? Mi spiego meglio: l'avere solo il manuale base e non disporre di software in abbondanza ti ha spinto a passare dall'essere solo un consumatore al dover inventare tutto da te?</p>

      <p><strong>SB</strong>: Non fu un vantaggio in quel senso, in quanto la spinta creativa già l'avevo, ma di sicuro mi costrinse a trattare tutti gli aspetti dello sviluppo, cosa che ha ovviamente contribuito a formare le mie capacità.</p>

      <p><strong>Z</strong>: Ma quindi non avevi contatti con la demoscene?</p>

      <p><strong>SB</strong>: Non sapevo neanche che esistesse (tra parentesi, rallegra vedere i risultati ottenuti da chi sfrutta l'hardware così bene come nelle produzioni della demoscene).</p>

      <p><strong>Z</strong>: Parlando di giochi, come te li procuravi?</p>

      <p><strong>SB</strong>: Per me i giochi erano le cassette dell'edicola, quelle che raccoglievano parecchi giochi su un solo nastro. Poi un giorno scoprii che c'erano i giochi scatolati: ero a casa di un amico che aveva un catalogo Soft Mail, e i miei occhi stentarono a credere a quello che vedevano. Allora mi permisi (con l'assenso dei miei genitori) di fare un ordine: quando arrivò la scatola enorme di The Amazing Spider-man (con dentro un fumetto in inglese!), oltre a una grande goduria, fu una vera e propria scoperta! Neppure allora, comunque, feci la connessione tra i giochi in edicola e quelli originali: tanto per fare un esempio, non avevo la minima idea che Il Drago fosse in realtà Draconus (che ovviamente non avevo mai sentito). Inoltre, non sapendo nulla della demoscene, non sapevo nemmeno che c'erano anche i crack con le intro.</p>

      <p><strong>Z</strong>: Qual è stato il primo gioco che hai pubblicato?</p>

      <p><strong>SB</strong>: <a href="https://retream.itch.io/boh">BOH</a>, nel 2009 - ce l'ho qui (mostra la scatola, NDR). La storia è lunga...</p>

      <div class="content__embed">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/1j39yyZKJo0?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen />
      </div>

      <p>Ho usato l'A1200 ininterrottamente fino al 2003, quando emigrai in Finlandia portandomi solo un AmigaOne G4 XE. Tale macchina, che architetturalmente è un PC su cui gira <a href="https://en.wikipedia.org/wiki/AmigaOS_4">AmigaOS 4</a>, era l'evoluzione naturale dell'Amiga classico e speravo di usarlo sia per sviluppare che per uso generale (documenti, email, musica, ecc.). Non trovando affatto piacevole programmare attraverso il sistema operativo (per me lo sfizio sta nell'accedere direttamente all'hardware delle macchine vintage, magari facendogli fare cose che non erano state pensate neanche dai progettisti), come soluzione intermedia iniziai a creare in C un mio piccolo framework che astraeva il più possibile dall'OS. Svolsi tale lavoro in parallelo con la creazione di un shoot'em up chiamato uniVERSUS, che aveva una componente gestionale e delle meccaniche di gioco sofisticate - troppo sofisticate, tanto che il gioco era esageratamente macchinoso; ciò, insieme al fatto che il progetto era davvero massiccio per me solo, mi spinse a chiudere tutto dopo un paio di anni di lavoro, quando ormai ero già rientrato in Italia (nella seconda metà del 2005).
        <br>Nel 2006 lavorai a un progetto della Soprintendenza ai Beni Culturali. L'anno successivo feci il programmatore per un'azienda di Benevento (da pendolare, macinando 130 km al giorno in macchina). Ma io non posso fare il programmatore di professione, mi fa star male (in Finlandia effettivamente lo facevo, ma lavoravo ai driver grafici di uno smartphone, quindi qualcosa di abbastanza vicino alle mie propensioni), perciò quando il lavoro a Benevento finì, tirai un sospiro di sollievo e mi misi in cerca d'altro, vincendo per il 2008 una borsa di studio presso l'Università del Molise per un progetto sullo sviluppo del turismo - ma, poi, finito il progetto, finito tutto.
        <br>Nel frattempo, continuavo a programmare usando (e migliorando) il mio framework, e una delle cose che realizzai era il motore grafico sul quale è basato BOH. Mi resi conto che aveva un gran potenziale, che davvero con la sua atmosfera ti immergeva in un mondo claustrofobico e misterioso. Ci costruii sopra un intero gioco e decisi che sarebbe stato il primo gioco pubblicato fisicamente per AmigaOS 4. Contavo su una sorta di scambio: da parte mia davo il primo gioco commerciale di qualità per il sistema, e in cambio speravo nel supporto (che non è mancato) degli utenti di AmigaOS 4. Il gioco girava anche su Windows per allargare il bacino degli utenti oltre quello ristretto degli amighisti.
      <br>In precedenza avevo già rilasciato dei giochi freeware per Amiga classico, quelli che avevo sviluppato da giovanissimo (e che, a parte MeMO, ho poi ritirato), ma è con BOH che provai la strada commerciale per la prima volta. Al tempo ancora non esisteva l'etichetta RETREAM: il gioco fu pubblicato da Editel, un editore locale attivo in campo pubblicitario.</p>

      <p><strong>Z</strong>: Com'è nata RETREAM?</p>

      <p><strong>SB</strong>: Per caso. Il mio sito personale era su Interfree, ma quando il servizio divenne a pagamento decisi di comprare un mio dominio e pensai al nome RETREAM, che viene dall'unione di "retro" e "dream".
      A tal proposito, permettimi un inciso. Le produzioni vecchio stile mi fanno sognare, stimolano di più la fantasia, mi proiettano in un mondo diverso, dove il cervello è impegnato a ricreare immagini, suoni e situazioni a partire da astrazioni/trasposizioni stilizzate e più o meno artistiche. Le produzioni moderne, nonostante la qualità tecnica, non mi interessano proprio: già vivo in una realtà con infiniti poligoni al secondo! Preferisco sognare con tre pixel messi l'uno vicino all'altro a rappresentare qualcosa.
      Da allora uso l'etichetta RETREAM per tutti i miei giochi.
      E con questo mi pare di aver risposto alla domanda :)</p>

      <p><strong>Z</strong>: Una risposta dettagliatissima, Simone! RETREAM ci sembra un nome veramente azzeccato, ci è piaciuto sin dalla prima volta che l'abbiamo visto.</p>

      <p><strong>SB</strong>: Grazie, sono contento che ti piaccia! Non ci pensai tanto: mi sembra che guidavo quando focalizzai l'idea. Tutto parte dai miei sogni di bambino. All'età di sei o sette anni vidi il C64 di un mio cugino rimanendone folgorato: a parte la bellezza di quello che vedevo, mi colpì il potenziale del mezzo, attraverso il quale la fantasia si poteva esprimere in un modo incredibile.
      Credo che, ancor prima di allora, l'impatto principale sul mio spirito creativo l'abbiano avuto i mattoncini LEGO (se potessi, ci giocherei ancora). Ma lo sviluppo al computer è a un livello superiore, in quanto ci sono dimensioni multiple: logica, grafica, musica, racconto... è qualcosa di fantastico, un sogno.</p>

      <p><strong>Z</strong>: Parlando delle possibilità creative offerte dai computer, ricordiamo molto bene un concetto trovato nella biografia di Steve Jobs di Walter Isaacson. Inizialmente la comunità controculturale degli anni 60 vedeva i computer negativamente, in quanto strumenti del potere e addirittura orientati all'uso prevalentemente militare. Solo tempo dopo cominciarono a vederne il potenziale creativo in grado di aprire le famose "porte della percezione", espandendo la mente umana e le sue capacità immaginifiche.</p>

      <p><strong>SB</strong>: Sì, attraverso il computer si possono fondere più dimensioni del pensare e sentire umano: quella logica, quella visiva, quella uditiva, quella ludica, quella narrativa... le possibilità sono infinite.
      Infatti per me sviluppare è esclusivamente una questione di cuore (non a caso proprio non posso farlo come lavoro): il computer è per me come la tela, il pennello e i colori per il pittore, è il mezzo che mi permette di esprimere i miei sogni - però con un potenziale superiore (senza voler sminuire la bellezza dell'arte pittorica).</p>

      <p><strong>Z</strong>: Parlando di lavoro, una notizia apparsa su Twitter che ha fatto molto parlare è stata la dichiarazione di <a href="https://twitter.com/JasonNapalm">Jason Aldred</a>, il programmatore di Galencia, che incredulo dichiarava il suo stupore nell'aver firmato un contratto che gli sta permettendo, nel 2018, di potersi mantenere, almeno per un po' di tempo, programmando un gioco per Commodore 64 (Galencia Chaos Sphere). Ovvero vivere lavorando a ciò che più lo appassiona.
      Come prendi questa notizia, credi sia un caso eccezionale o questa seconda giovinezza del C64 può dare lavoro, remunerato dignitosamente, ad altri game designer altrettanto bravi e motivati?
        <Tweet
          :id="'1013827286674608128'"
          :widget-class="'content__embed'">
          <div class="content__loader"/>
        </Tweet>
      </p>

      <p><strong>SB</strong>: È una bella notizia, ma non è ancora possibile vivere di giochi per C64. So che lui ha fatto dei bei numeri. Anche i ricavi di <a href="https://www.knightsofbytes.games/samsjourney">Sam's Journey</a>, che ha avuto un successo enorme e superiore a quello di Galencia, non permettono agli sviluppatori di dire "facciamo un altro gioco e viviamo di questo", sebbene costituiscano una grande soddisfazione e una ricompensa tutt'altro che irrilevante.
        <br>Penso anche a progetti come <a href="https://www.kickstarter.com/projects/stirringdragongames/unknown-realm-an-8bit-rpg-for-pc-and-commodore-64">Unknown Realm</a> che su Kickstarter ha raccolto 126.000 dollari: sulle prime sembra una cifra spropositata, ma credo il team ci lavori da quattro o cinque anni (non so a che ritmi - poi la velocità è relativa, io sono uno che ci mette anni a cesellare l'ultimo pixel; magari un gioco che un'altra persona farebbe in sette mesi a me prende tre anni perché sono maniaco... o meno bravo), e poi ci sono i molti gadget, le spese... alla fine, il guadagno effettivo per ogni membro del team non sarà altrettanto spropositato.
        Magari potessi campare dei miei giochi! In realtà, considerando le ore di lavoro, essi rappresentano una perdita mostruosa.</p>

      <p><strong>Z</strong>: Rimanendo sui progetti moderni finanziati tramite Kickstarter, recentemente abbiamo contribuito come beta tester al progetto <a href="https://www.kickstarter.com/projects/thalamusdigital/hunters-moon-remastered">Hunter's Moon Remastered</a> di <a href="http://www.thalamusdigital.co.uk/">Thalamus Digital</a>. Il progetto è stato finanziato con successo superando di poco la soglia minima e sbloccando alcuni degli "stretch goal". Abbiamo constatato direttamente come tutto il team sta lavorando con passione e professionalità e si sarebbe meritato ancora più appoggio dalla comunità retrogamer.</p>

      <p><strong>SB</strong>: Chi lavora a questi progetti lo fa principalmente per passione (anche se forse inizia a farsi strada anche l'idea di fare un po' di soldi abbastanza facili). Recentemente è stata pubblicata la schermata di caricamento di quel gioco, e lì si vede che ci sta dietro passione, tecnica ed esperienza maturata in anni di lavoro nel settore. Infatti i prodotti che vengono fatti oggi sono di qualità notevole, grazie alle capacità acquisite nel tempo e agli strumenti disponibili.</p>

      <p><strong>Z</strong>: Parlando di programmazione, il tuo lavoro è decisamente multipiattaforma, come si può notare dando un rapido sguardo alla pagina di RETREAM. Quante piattaforme supporti e come?</p>

      <p><strong>SB</strong>: Oltre ai giochi per C64 e Amiga classico, alcuni dei miei giochi girano su PC.
      BOH, come già detto, inizialmente era per AmigaOS 4 e Windows; poi, nei nove anni di aggiornamenti gratuiti che sono seguiti (e che sono riassunti nell'edizione ADVANCE pubblicata di recente), grazie al mio framework di sviluppo, ho aggiunto anche il supporto per <a href="http://aros.sourceforge.net/">AROS</a> (un altro sistema derivato da AmigaOS), Linux e MacOS. <a href="https://retream.itch.io/huenison">Huenison</a> e <a href="https://retream.itch.io/kog">KOG</a> girano su AmigaOS 4 e Windows (e per il primo ho fatto anche la faticaccia di adattarlo a Steam).</p>

      <p><strong>Z</strong>: Riguardo la scelta della piattaforma, come nasce un gioco RETREAM? Idei prima il gioco e poi scegli la piattaforma ideale per svilupparlo o sono le capacità peculiari di una piattaforma in particolare che ti ispirano il gioco?</p>

      <p><strong>SB</strong>: Diciamo che non scelgo, in realtà.
      Del perché ho creato giochi PC e della genesi di BOH ho già parlato.
      Da una costola di BOH realizzai anche la prima versione di KOG (rilasciato nel 2008, aggiornato un paio di volte, e poi rivoluzionato nel 2017).

        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/kog-quick-reference-card.png`)"
          :no-srcset="true"
          caption="La scheda di riferimento di KOG"
        />

        A Huenison diedi il via il 31 Dicembre 2010, partendo dall'attrazione che provo per i display a matrice di LED, acquisita "per colpa" di <a href="https://www.youtube.com/watch?v=7kZ-i9mGav4">Pinball Fantasies</a> (pubblicato da 21<sup>st</sup> Century Entertainment Ltd., erede diretta della pioniera Gremlin Graphics, NDR) (infatti, all'inizio, Huenison era esclusivamente in dot-matrix; soltanto nelle ultime fasi dello sviluppo aggiunsi altri filtri grafici).</p>

      <content-image
        :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/huenison-screenshoot.png`)"
        align="right"
        caption="Lo psichedelico Huenison miscela elementi di Arkanoid, Tetris, Space Invaders..."
      />

      <p>Ma lavorare nel mio framework per sistemi moderni non è soddisfacente come programmare direttamente l'hardware del C64 e dell'Amiga. Infatti, nel 2007 cominciai a rivolgere di nuovo l'attenzione al C64 (in emulazione, ma ultimamente ho comprato un C64C) e l'anno scorso sono tornato anche all'A1200 - è una vergogna averla trascurata per così tanto tempo! Adesso ce l'ho montata qui a fianco e mi sto divertendo tanto a sperimentare e inventare nuove cose.
      <br>Al C64 tornai con l'intenzione di riscoprire questa macchina che da ragazzino non avevo potuto conoscere a fondo. Ricominciai con programmini in BASIC, senza pretese, giusto per divertirmi. Poco ci volle perché tornasse la fissazione che avevo da ragazzino per gli sprite multicolore in alta risoluzione (a quei tempi avevo pure fatto un editor, ma era poco utilizzabile) e perché essa evolvesse nell'idea di fare un gioco che fosse interamente in alta risoluzione, ma "coloroso". Ne progettai uno dalle meccaniche semplici (partendo dal concetto di oggetti che si muovevano solo orizzontalmente su piattaforme sfalsate, in modo da semplificare il multiplexing degli sprite, e da una storia scema e lunghissima che vede protagonisti me ed alcuni miei amici mangioni) e che potesse essere scritto anche in BASIC compilato: ne venne fuori <a href="https://retream.itch.io/quod-init-exit">QUOD INIT EXIT</a>, il gioco del maialino Zampo.</p>

      <content-image
        :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/quod-init-exit.png`)"
        align="left"
        caption="Zampo, il roseo protagonista di QUOD INIT EXIT"
      />

      <p>Lo rilasciai e riscosse un incredibile successo nella scena C64. Addirittura <a href="https://www.rgcd.co.uk/">RGCD</a> lo publicò su cartuccia di sua stessa iniziativa. Io lo vedevo come una cosina semplice, ma alla gente è piaciuto molto - addirittura ho avuto la grande gioia di ricevere foto di bambini che ci giocano!</p>

      <p><strong>Z</strong>: È piaciuto cosi tanto che hai pensato a un seguito :-)</p>

      <p><strong>SB</strong>: A dire il vero, no: QUOD INIT EXIT, QUOD INIT EXIT IIm, nacque da un risultato tecnico di <a href="https://retream.itch.io/mah">MAH</a>. Per il suo finale avevo implementato uno scrolling multidirezionale bellissimo ma che solo poche persone avrebbero visto (non perché sono cattivo, ma perché MAH richiede impegno, e oggi la gente non ha né tempo né voglia di impegnarsi più di tanto): sarebbe stato uno spreco usarlo solo lì, e infatti nelle prime versioni di MAH appare la piccolissima scritta "A NEW GAME WITH THIS?". In sostanza, il punto di partenza fu un obiettivo tecnico (fondamentalmete stimolato dal voler superare i limiti). Quasi tutti i miei giochi nascono così, da una qualche sfida e/o sfizio di natura tecnica.

        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/ambiende-di-lavoro-di-quod-init-exit-iim.png`)"
          :original="resolveAssetPath(`diari/simone-bevilacqua-retream/ambiende-di-lavoro-di-quod-init-exit-iim.original.png`)"
          caption="L'ambiende di lavoro di QUOD INIT EXIT IIm"
          @openReader="openReader($event)"
        />

        A dirla tutta, ero partito con l'intenzione di realizzare QUOD INIT EXIT II (senza la 'm'), ma a un certo punto notai che avrei potuto realizzare una versione 16 kB da un solo livello con cui partecipare alla RGCD C64 16KB Cartridge Competition. Purtroppo sforai la deadline per una stupidaggine: allo scadere dell'ultimo giorno fornii a RGCD l'eseguibile in formato PRG, ma avrebbe dovuto essere CRT. Non avevo mai realizzato un software per cartuccia, quindi nel paio di ore scarso che rimanena prima che cominciasse il nuovo giorno mi studiai la materia e provai a modificare il programma, ma non riuscii a causa di un problema di bank switching (che risolsi solo il giorno dopo). A quel punto decisi comunque di rilasciare il gioco, appendendo al "II" ("secundus") una 'm' che sta per "minimus", a sottolineare le dimensioni ridotte del gioco.
        <br>Tuttavia, non ho mai abbandonato l'idea originale di fare un platform con presentazione, livelli multipli e finale. Questo gioco si chiamerà QUOD INIT EXIT IIo (dove 'o' = "opimus" = "grasso") e il suo sviluppo sta continuando molto lentamente. Per finirlo ci vorrà almeno un annetto e mezzo di lavoro abbastanza assiduo, poiché ci sono tanti contenuti da creare e il gameplay da arrichire.
      <br>Lo sviluppo di QUOD INIT EXIT IIo sta procedendo a singhiozzi perché, nel frattempo, ho rielaborato e ri-rilasciato tutti gli altri giochi, e anche perché, come anticipato prima, sono tornato anche all'Amiga, spinto dalla voglia di farlo repressa per anni. Una delle tante idee con cui mi sono trastullato è un motore di scrolling a layer parallattici multipli e trasparenze reali, da usare per una specie di sparatutto a scrolling verticale. Visto che c'ero, invece di usare moduli tracker, ho deciso di ficcarci della musica a 14 bit riprodotta concettualmente così come si riproduce un MP3 (o meglio, un FLAC: ho tirato fuori un metodo che mi dà un'ottima compressione lossless che è gestibile anche dal 68020 dell'A1200 di base, la macchina per cui il gioco è scritto). Sto parlando di SkillGrid (compila il gioco durante l'intervista per mostrarcelo, NDR). In questi giorni sto registrando le parti di chitarra da usare per la musica in-game. La musica adesso occupa circa 1,6 MB e non mi rimane spazio per altro. Sto migliorando l'algoritmo di compressione: se riesco a ricavare 100/200 kB aggiungerò qualche boss. SkillGrid è un misto tra uno shoot'em up e un puzzle game, un giochino che ha poche pretese riguardo al gameplay - è più che altro un esperimento tecnico. Il mio obiettivo è fare una cosa diversa, divertendomi, e non mi importa se non verrà etichettata come il degno successore di Banshee: è un gioco diverso, con un altro obiettivo. Spero di rilasciarlo a breve.</p>

      <div class="content__embed">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nNmP6qFXMvc?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen/>
      </div>

      <p>In cuor mio ho deciso di continuare, possibilmente per sempre, a fare solo giochi per C64 e Amiga. Ho diversi progetti in cantiere (alcuni in attesa da decenni) e se riuscissi a sfruttare tutto quello che ho già pronto potrei fare altre quattro release - ma ci vorranno tanti anni. Se non altro, il fatto di non riuscire a trovare un lavoro (che non sia schiavismo) mi dà molto tempo da dedicare ai giochi.</p>

      <p><strong>Z</strong>: Quindi crei le musiche tu stesso. Ma fai proprio tutto tu, non hai collaboratori?</p>

      <p><strong>SB</strong>: Esatto, è una conseguenza di quello che dicevamo. Lo stare isolato mi ha obbligato ad arrangiarmi e quindi anche a fare grafica, musica e tutto il resto. Qualche rara volta ho provato a collaborare con qualcuno, ma sono super esigente, non sono una persona con cui è facile lavorare.</p>

      <p><strong>Z</strong>: I tuoi giochi sono disponibili in vari formati e tramite vari canali come negozi online e anche venduti direttamente da te. Qual è la situazione attuale della distribuzione delle copie fisiche?</p>

      <p><strong>SB</strong>: Al momento l'unico gioco disponibile in versione fisica è MAH, venduto da <a href="http://rgcd.bigcartel.com/product/mah-commodore-64-pal-only">RGCD</a> e <a href="https://www.protovision.games/games/mah.php?language=en">Protovision</a>. Recentemente ho contattato <a href="https://twitter.com/robhewson">Rob Hewson</a> per chiedergli se fosse interessato a pubblicare BOH, poiché spedire dall'Italia, con i prezzi che ci sono (pure aumentati di recente), ti stronca. Pensa che chi dalla Spagna si è comprato le versioni fisiche di BOH e Huenison prodotte quest'anno ha pagato 18 Euro di spedizione (e adesso si è arrivati quasi a 20). Se volessi guadagnarci qualcosina davvero, all'utente finale dovrei chiedere 40/50 Euro in modo da coprire anche la spedizione... ma come potrei chiedere così tanti soldi? Quindi devo limare il margine di guadagno quasi fino ad annullarlo. Quando Protovision mi ha spedito dalla Germania la copia di MAH, che è un bel mattone, il costo è stato di soli 6,50 Euro, non 20.</p>

      <div class="content__showcase">
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-1.png`)"
          :no-srcset="true"
          caption="L'apocalittica intro di MAH"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-2.png`)"
          :no-srcset="true"
          caption="Bisogna infiltrarsi nel sistema e disinnescare l'Apocalypser in 90 minuti di tempo reale"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-3.png`)"
          :no-srcset="true"
          caption="Bitwall è la fase d'accesso di ogni incursione nel sistema"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-4.png`)"
          :no-srcset="true"
          caption="Robottoni giganti, lo voglio!"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-5.png`)"
          :no-srcset="true"
          caption="Sorprende la varietà di generi"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-6.png`)"
          :no-srcset="true"
          caption="Acciuffate quel pacchetto crittografato!"
        />
      </div>

      <p><strong>Z</strong>: Quanto mattone?</p>

      <p><strong>SB</strong>: La scatola in cartone (come quelle dei bei tempi) è poco meno di 16x23x4 (in cm). È così grande che ho potuto infilarci sette cartoncini doppia-faccia che mostrano quattordici Quick Reference Card utilissime per approcciare il gioco e comprenderne le mille sfaccettature.
        <br>La versione su cartuccia, invece, è contenuta in un astuccio di plastica di dimensioni inferiori che non hanno permesso di metterci le card - al loro posto c'è invece un manuale di sedici pagine ancora più dettagliato (lo stesso che si può lanciare dal menù principale del gioco).
        <br>Ho fatto un lavoro enorme sulla documentazione (d'altra parte, è una cosa che faccio per tutti i giochi: ad esempio, i manuali di Huenison e BOH sono rispettivamente di 20 e 24 pagine zeppe di informazioni) perché è fondamentale per capire pienamente le intricate meccaniche di MAH, che comunque sono alla portata di tutti.
      <br>Di MAH c'è anche la versione digitale, ma mi chiedo se non averla pubblicata avrebbe favorito la vendita di ancor più copie fisiche.</p>

      <content-image
        :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/mah-confezione.jpg`)"
        :no-shadow="true"
        align="right"
        caption="MAH in versione cartuccia"
      />

      <p><strong>Z</strong>: Una parte fondamentale delle versioni fisiche dei giochi è la confezione e la copertina. Non farai anche tu pure l'artwork?</p>

      <p><strong>SB</strong>: Certo, faccio tutto! A parte il fatto che così sento il prodotto interamente mio e viene esattamente come lo voglio, ciò mi permette di lavorare ai dettagli a livello maniacale - tanto per dirne una, tutto deve essere allineato (secondo una qualche logica) al pixel, anche se la stampa è a 600 DPI... Non si noterà mai? Non importa, voglio la perfezione.
        <br>Ti svelo una cosa (prende la scatola della versione disco di MAH, NDR): c'è scritto "Creato nel 2015 e migliorato nel 2017 da Simone Bevilacqua, pubblicato nel 2017 da Protovision". E no, è sbagliato! Per aspettare che RGCD e Protovision si sincronizzassero, la pubblicazione fu posticipata al 2018. Mandai la grafica aggiornata, ma alla fine è stata stampata la vecchia versione (per fortuna la versione su cartuccia pubblicata da RGCD che abbiamo in redazione riporta le date correttamente, NDR). Non sai quanto mi ferisce! Disturba la perfezione a cui miravo.
        <br>Altro segreto: per Huenison ho fatto io stesso un errore. L'artwork è tutto in dot-matrix come il gioco. Il font che ho usato nell'artwork è lo stesso usato nel gioco e ha una particolarità: l'allineamento di maiuscole e minuscole è centrato invece che essere sulla linea base delle lettere. Ebbene, sul retro della copertina ho sbagliato l'allineamento di due lettere, una 'I' e una 'H'. Con mia grande disperazione, me ne sono accorto solo dopo aver ricevuto le copie fisiche.
      <br>Investo mesi nel realizzare l'artwork e i manuali. I manuali li leggo e rileggo fino al punto da diventare come cieco ad essi. I miei amici quasi mi ridono in faccia per questa mia meticolosità estrema: nessuno noterà mai certe imperfezioni. Non ci posso fare nulla, è la mia mentalità. Anche il codice è scritto così: persino i commenti devono avere grammatica corretta, stile linguistico uniforme e formattazione rigorosa. Poi pago lo scotto quando mi rendo conto che la perfezione a cui aspiro è fuori dalla mia portata.</p>

      <p><strong>Z</strong>: MAH ci ha colpito molto, soprattutto per la grafica e il gameplay. Hai inoltre creato una storia epica e cupa attorno al pericolo di una fine incombente per tutta l'umanità, una storia apocalittica. Continuando a leggere la descrizione però la storia si collega sorprendentemente a quella di un maialino goloso. Puoi dirci di più sull'ironia che collega i titoli di RETREAM? :-)</p>

      <p><strong>SB</strong>: Quella di unire tutti i miei giochi in una saga è un'idea che ebbi a posteriori, dopo averne scritto il primo capitolo.
      La storia parte da BOH, per il quale inventai i misteriosi Evil Master, venuti fuori improvvisamente a seminare distruzione.
        <br>L'idea della saga arrivò mentre sviluppavo Huenison - pensai: "Facciamo che i Mind Control Well sono stati creati dagli Evil Master per fare impazzire gli umani" (infatti il gioco consiste in un frenetico puzzle-arcade in cui si sfida uno degli Evil Master, chiamato appunto Huenison). Diedi a Huenison una caratterizzazione umoristica: ad esempio, durante il gioco ti bombarda di messaggi cattivi, ma in tono spiritoso; oppure, sulla copertina interna della confezione, che riporta la lista delle tracce della colonna sonora (ascoltabile direttamente dal CD), Huenison pone questa domanda: "Non è carino da parte mia lasciarti impazzire mentre ti godi la mia fantastica musica?".
        <br>Poi, durante la realizzazione di QUOD INIT EXIT IIm, la piega umoristica si fece ancora più marcata: "OK, continuiamo la storia. Diciamo che Huenison e tutti gli Evil Master furono scacciati dalla Terra. Strada facendo, capitarono nei pressi dell'idilliaco pianeta Suinio, dove decisero di portare la loro devastazione... rubando tutti i gabinetti. Allora la strega Cotechina scagliò loro un incantesimo che li mise in fuga in preda a coliche pazzesche. Purtroppo la potenza dell'incantesimo spezzettò i gabinetti in tante piccole tazze che si disseminarono per il mondo. Una catastrofe a cui Zampo dovrà porre rimedio raccogliendo le tazze per riportale a Cotechina".
        <br>In seguito, con MAH tornai sulla Terra, dando alla saga un taglio molto serio. Degli Evil Master rimaneva solo la memoria, ma i guai non erano finiti: gli esseri umani erano tornati al loro hobby preferito: farsi la guerra. In questo contesto, i Purifiers, dei pazzi fanatici, decisero di sterminare l'intera razza umana: per farlo, attivarono l'Apocalypser, l'arma finale che era stata precedentemente costruita - ma non usata - per spazzare via gli Evil Master al caro prezzo di distruzione dell'intero pianeta. Il compito del giocatore è quello di disinnescarla.
        <br>L'ultima tappa della storia è KOG. L'idea è che a colui che in MAH ha salvato il mondo, tornato alla sua colonia, viene affidato il compito di realizzare un software di allenamento per difesa militare. Evidentemente, sulla colonia, un luogo di vera pace, qualcosa doveva essere andato storto, proprio come nel finale di MAH l'eroe aveva temuto. Il gioco consiste appunto nell'allenarsi con quel software, un arcade con elementi puzzle (concettualmente come Huenison, anche se totalmente diverso da esso).
        <br>Sto pensando di inserire anche SkillGrid in questo filone, magari come un'altra fase del training.
        <br>La saga è basata su una visione molto negativa del mondo. Non credo si raggiungerà mai la pace, ma ciò nonostante il messaggio è: diamoci da fare per realizzarla!
        Tornando ai giochi: nonostante lo strambo legame narrativo, ognuno di essi è godibile separatamente.</p>

      <section class="content__box content__box-right">
        <h3>Curiosità su MAH</h3>

        <ul>
          <li>Anche MAH nacque dalla fissazione per gli sprite in alta risoluzione colorati. Sul C64, per ottenere sia l'alta risoluzione che tanti colori bisogna sovrapporre gli sprite - è un punto debole della macchina. Mi sono detto: "Facciamolo diventare un punto di forza, costruiamoci un intero gioco". Infatti, nella fase B del gioco, i quattro Patrol o anche il Peekpoker (lo strumento controllato dal giocatore), i due Satellite e la Dogguard, a causa di certi eventi, si uniscono per formare uno sprite multicolore. Volevo far vedere proprio questa unione, anche pensando a quei robot dei cartoni animati giapponesi che si uniscono.
            <content-image
              :image-path="resolveAssetPath(`diari/simone-bevilacqua-retream/sprite-factsheet.png`)"
              :no-srcset="true"
              :original="resolveAssetPath(`diari/simone-bevilacqua-retream/sprite-factsheet.png`)"
              caption="Ecco come sono stati montati gli sprite in alta risoluzione multicolore."
              @openReader="openReader($event)"
            />
          </li>

          <li>Il MAH in vendita adesso è la nuova versione, frutto di una riscrittura totale che ha moltiplicato i contenuti del gioco e la qualità tecnica. Protovision voleva che uscisse con un nuovo nome, MAH Ultimate o MAH 2, per non confonderlo con la versione precedente. Ma per me questa era la versione finale di MAH e quindi il nome non doveva cambiare. Comunque, il numero di versione 2.0, dove necessario, ce l'ho messo, ed è per questo che il numero di versione dell'Apocalypshield è appunto 2.0.</li>

          <li>Della versione 1.0 esiste un crack che disabilita un elemento fondamentale della prima fase del gioco, senza il quale non si può progredire nel gioco. È come se in Ghost 'n Goblins togli le armi: che fa Arthur, combatte a sputi? Contattai l'hacker e glielo spiegai: non ci avevano capito niente!</li>

          <li>MAH è pieno di segreti da scoprire e non ci sono cheat.</li>

          <li>Non vi sembra abbastanza? Le versioni fisiche di MAH contengono anche un &quot;easter egg&quot; favoloso, un altro gioco di RETREAM!</li>
        </ul>
      </section>

      <p><strong>Z</strong>: E adesso parliamo brevemente di Zzap! Eri un lettore della nostra rivista preferita? Qualche aneddoto da raccontare?</p>

      <p><strong>SB</strong>: Mai avuto una copia di Zzap! tra le mani. Forse non è mai nemmeno arrivato a Campobasso - almeno, non l'ho mai notato in edicola. Ma, anche se lo avessi fatto, non avevo disponibilità economica e, comunque, non avevo proprio il concetto di spendere autonomamente dei soldi per diletto. Un amico comprava C+VG (se non ricordo male), quando era un giornalino in formato A5. Lì vidi per la prima volta qualcosa che assomigliasse a una recensione.
        <br>Solo verso il quarto superiore comprai alcuni numeri di TGM, sperando che venisse pubblicato un gioco che avevo fatto con AMOS Professional e che avevo inviato alla rubrica Talent Scout - non fu mai pubblicato e, devo dire, forse a ragione.
      <br>A Pisa scoprii i magazine inglesi: Amiga Format, CU Amiga, Amiga Computing... stupendi e, cosa incredibile, dotati di coverdisk! Conservo ancora i dischetti (ce li mostra, NDR). Ovviamente, qualche anno dopo la morte di Commodore, quelle riviste sparirono.</p>

      <p><strong>Z</strong>: Ci dispiace che Zzap! non sia riuscito ad arrivare al cuore di Simone durante la sua infanzia. Purtroppo tutti abbiamo conosciuto, in qualche momento, le irregolarità della distribuzione cartacea in edicola.</p>

      <p>Ringraziamo Simone per essere stato così disponibile nel concedere questa lunga intervista a Zzap!. Torniamo a dare energia alla nostra cartuccia di MAH mentre rimaniamo con gli occhi ben aperti per seguire gli sviluppi della sua lunga ondata creativa.</p>

    </content-section>

  </content-container>
</template>

<script src="./simone-bevilacqua-retream.js"></script>
