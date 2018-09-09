<template>
  <content-container
    anchor="diari-johnparker"
    author="Antonio Bianchetti"
    date="9 Settembre 2018"
    title="Intervista a John Parker, programmatore di Retrospecs"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        :image-path="resolveAssetPath(`diari/john-parker-retrospecs/john-parker-eye.gif`)"
        align="right"
        rotation="cw"
        caption="Il nostro John lottando contro i problemi di &quot;colour clash&quot;"
      />
      <p>Noi di Zzap.it vediamo il mondo a forma di pixel o caratteri PETSCII, quali lenti magiche usiamo? La nostra passione per i videogiochi ovviamente e anche <a href="https://8bitartwork.co.uk">Retrospecs</a>, l'app per iOS che trasforma foto e video in capolavori di pixel art. Seguivamo già da tempo <a href="https://twitter.com/8bitartwork">John Parker</a> su Twitter, il programmatore di Retrospecs, e lo scorso Luglio abbiamo avuto la fortuna di intervistarlo in occasione della versione 2.5 della sua app. John non tralascia dettagli parlando della sua creatura e di come è entrato, da piccolo, nel mondo degli 8-bit.<br>
        Buona lettura!</p>

      <p><b>Zzap.it</b>: Ciao John! Grazie per dedicarci il tuo tempo e per aver accettato di essere intervistato da Zzap.it.<br>
        Ci piace moltissimo Retrospecs, l’app che hai creato e che mantieni aggiornata con tanto amore e passione. Ma ne parleremo in dettaglio dopo, prima siamo curiosi di scoprire quando e come si è sviluppato il tuo interesse per i pixel.</p>

      <p><b>John Parker</b> Grazie per le gentili parole.<br>

        Credo mi sia sempre interessato il punto d’incontro tra arte e tecnologia, e la pixel art ne è spesso un ottimo esempio. Sono nato negli anni settanta, quindi sono stato abbastanza fortunato di aver vissuto quel periodo in cui le cose passarono dai rettangoli in bianco e nero che si muovevano per lo schermo alle  centinaia di sprites ruotati e ridimensionati in tempo reale, e questo senza considerare le possibilità del moderno hardware 3D. Visto in retrospettiva, è stato affascinante vedere come si è evoluta la tecnologia e ciò che ha reso possibile in questi anni.<br>

        Già da piccolo ero affascinato da quello di cui erano capaci gli artisti della pixel art e i musicisti della “chiptune” di quel periodo, specialmente se si considerano i limiti con cui lavoravano. Questi erano specialmente evidenti in macchine come lo ZX Spectrum dove i limiti erano particolarmente visibili, ma lo stesso vale per tutti gli altri sistemi dell’epoca. Quello che successivamente divenne possibile sulle macchine a 16-bit era semplicemente scioccante. Ero un grande fan delle software house come The Bitmap Brothers, così come della “demo scene” di quel periodo. Più di recente, ho cominciato a seguire la “demo scene” per PC su Pouet.net, ma il mio PC è ormai troppo vecchio per questo genere di cose.<br>

        Sono ancora convinto di come questi limiti tecnologici siano stati un vantaggio creativo per le più belle opere di pixel art create artigianalmente, per l’uso di un numero limitato di colori, se non addirittura create con una tavolozza di colori fissa, o magari a causa della bassa risoluzione.</p>

      <p>
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/1473540094.878570-commodore_c164_cbmscii-bayer_8x8-serp-rgb.gif`)"
          align="left"
          caption="Lo sguardo del famoso ninja tra i caratteri PETSCII del C16"
        />

      <b>Z</b>: Come hai iniziato a programmare, John? Hai mai creato un videogioco o partecipato come membro in un gruppo della “demo scene”?</p>

      <p><b>JP</b>: I miei primi passi sono stati con il BASIC sul VIC-20 che i miei genitori comprarono per mio fratello quando avevo circa nove anni, anche se non ho creato niente di veramente mio prima di avere uno Spectrum+ tutto per me, qualche anno dopo. Come tanti altri ragazzi, passavo ore digitando i listati dei giochini delle riviste, ma lo usavo anche per creare semplici animazioni utilizzando i caratteri ridefiniti dall’utente in BASIC, processo che dava tante soddisfazioni anche se richiedeva moltissimo tempo. Tirando le somme, era probabilmente molto più divertente giocare a Tau Ceti.
      Arrivando all’epoca dei 16-bit, ho giochicchiato con l’assembler del 68k e con il linguaggio C sull’Amiga, ma niente si è veramente materializzato in qualcosa di interessante perché ero troppo occupato con i compiti dell’Università e ad essere battuto ripetutamente a Kick Off. Parlando più precisamente di giochi, non ho mai creato niente che andasse oltre qualche demo tecnologico, anche se proprio mentre ero all’Università creai una versione tutta mia di Hextris per MacOS, ma persi rapidamente interesse nel progetto subito dopo aver risolto l’essenza del problema.</p>

      <p><b>Z</b>: Spesso è la semplice disponibilità di uno strumento a dare l’opportunità per fare qualcosa di creativo. Gli utenti del Commodore 64 avevano il SEUCK, quelli dell’Amiga il Deluxe Paint e sull’ST c’era la porta MIDI. Con quali strumenti hai giocato ai tempi degli home computer?</p>

      <p><b>JP</b>: Ero abbastanza fortunato da avere un Amiga, così che per me erano il Deluxe Paint II (che gioia i cicli di colore!) e le varianti del Soundtracker, ma adoravo cimentarmi anche con programmi come il Mandle Mountains e lo Sculpt 3D e beh, non c’è niente come lasciare l’A500 acceso tutta la notte nella speranza che riesca a produrre un’immagine in raytracing prima che finisca in Guru Meditation. Non ho mai veramente usato nessuno degli strumenti per creare giochi, anche se pasticciavo un poco con l’AMOS, ma per qualche motivo non catturò mai la mia immaginazione.</p>

      <p>
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/1514656805.891296-custom-bayer_8x8-std-rgb.gif`)"
          align="right"
          caption="L'estetica pulita ma &quot;sintetica&quot; del retino Bayer 8x8"
        />
      <b>Z</b>: Possiedi ancora hardware d'epoca originale (diamo per buone anche le moderne mini console :-)?</p>

      <p><b>JP</b>: Ho recentemente venduto quasi tutto il vecchio hardware che avevo perché mi serviva fare spazio, ma avevo una bella collezioncina che andava dall’Atari 2600 allo SNES, con la maggior parte delle macchine e console più comuni uscite nel frattempo. Per fortuna ero riuscito ad acciuffarne la maggior parte quando costavano poco, visto che i prezzi che si chiedono adesso sono semplicemente assurdi. Ora mi rimane solo una SNES mini, che è molto divertente una volta capito come… mmm… “personalizzarla”.
      Non trovo che abbia molto senso collezionare le vecchie macchine solo per il piacere di possederle, piuttosto che usarle davvero. Anche se a dirla tutta, alcune hanno un design ancora attuale, specialmente sistemi come l’Oric Atmos e l’Alice 90.</p>

      <p><b>Z</b>: Dopo anni in cui l’emulazione è stata territorio per soli nostalgici e smanettoni dell’informatica, il fenomeno del retrogaming è adesso parte della cultura popolare e l’estetica a 8-bit è diventata un fattore di vendita nei videogiochi moderni e persino in qualche film da botteghino. Questa rinata popolarità è stata un fattore che hai considerato quando hai intrapreso lo sviluppo di Retrospecs?</p>

      <p><b>JP</b>: Parlando sinceramente, non ho mai esaminato cosa fosse popolare nel periodo in cui ho cominciato a lavorarci, se mi fossi preso il tempo per riflettere su cosa avrebbe potuto vendere di più avrei creato una app molto diversa. Qualche anno prima di cominciare a lavorare a Retrospecs avevo creato un programmino per il web che convertiva immagini in qualcosa che sembrava fatto con uno ZX Spectrum, quindi Retrospecs è stato all’inizio solo un’estensione di quel progetto.<br>

        Ricordo di aver cercato cos’altro fosse disponibile nell’App Store in quel momento, e trovai qualche convertitore da foto a pixel art, ma erano molto limitati o tendenti a un approccio più  tenerone e divertente, permettevano persino di aggiungere stickers carini da appiccicare sopra. Io invece ho sempre provato a rendere Retrospecs molto accurato. Quello che inizialmente stavo provando ad ottenere era orientato a preservare almeno parte dell’estetica autentica di ogni macchina, considerando che l’hardware originale sarebbe diventato sempre più difficile da trovare col passare del tempo.<br>

        Ero anche consapevole del fatto che, ovviamente, Retrospecs non sarebbe stato in grado di creare pixel art paragonabile a quella disegnata a mano dagli artisti, cosa che quindi non ho mai neanche provato ad ottenere. Volevo piuttosto offrire uno strumento che permettesse alla gente di esplorare l’estetica dei vecchi sistemi.</p>

      <p><b>Z</b>: Essendo anche noi degli anni settanta, sentiamo come il sentimento di nostalgia per quei momenti spensierati della nostra infanzia abbiano un ruolo centrale nel nostro amore per l’estetica dei pixel. Tuttavia, da un punto di vista più generale, quei pixel rappresentano un luogo sicuro all’interno della nostra cultura contemporanea, un posto in cui la tecnologia è abbastanza semplice da poter essere capita, lontana quindi dai fenomeni contemporanei come l’intelligenza artificiale e la sorveglianza globale. Potrebbe essere questa la ragione per il rinato amore verso i pixel nelle arti visive e nei sintetizzatori in quelle sonore?</p>

      <p><b>JP</b>: Non ho alcun dubbio che per alcuni quello che conta è il tentativo di ritornare a quei tempi più semplici, o piuttosto la presa di posizione di come non ci sia bisogno di modelli tridimensionali con un numero virtualmente infinito di vertici per creare qualcosa che catturi la nostra immaginazione. La pixel art è inoltre una delle poche aree dove gli strumenti e i corsi per impararne i trucchi sono liberamente disponibili, quindi chiunque con una certa predisposizione e accesso a un computer o a uno smartphone può provarci e migliorare le proprie capacità col tempo.<br>

        Riguardo i sintetizzatori, suppongo ci sia qualcosa di trascinante nella possibilità di modificare direttamente i suoni girando una manopola o cambiando pochi parametri, c’è un livello di astrazione molto sottile tra il musicista e la performance, nonostante la complessità del processo di sintesi sottostante. Magari succede la stessa cosa con la pixel art.</p>

      <p/>

      <div class="content__showcase">
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/retrospecs-ui.png`)"
          caption="La semplicitá dell'interfaccia nasconde moltissimi modi grafici personalizzabili"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/retrospecs-ui-timeline.png`)"
          caption="Retrospecs produce anche animazioni spettacolari"
        />
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/retrospecs-ui-animate.png`)"
          caption="Agitator: uno degli effetti di animazione disponibili"
        />
      </div>

      <p><b>Z</b>: Retrospecs è adesso una app per iOS solida e piena di funzioni, ma tutto comincia sempre da un’idea iniziale. Qual era il tuo piano originale per Retrospecs e com’è cresciuto dopo le prime versioni?</p>

      <p><b>JP</b>: Anche se avevo creato precedentemente alcune semplici app per iOS, Retrospecs è stata la prima che ho voluto pubblicare sull’App Store, nonostante la versione originale fosse stata fatta un po’ frettolosamente. All’epoca mi ero preso un periodo di pausa per imparare a programmare in Objective-C/Cocoa e iOS mentre aspettavo di cominciare un nuovo lavoro. Dopo aver trascorso mesi lavorando ogni giorno a Retrospecs mi sono ritrovato a pubblicare la versione finale un sabato pomeriggio. Avrei cominciato il nuovo lavoro il lunedì, pensavo di meritarmi un giorno libero. :-)<br>

        La prima versione simulava solo una dozzina circa di sistemi a 8-bit ed era limitata negli strumenti e nelle opzioni a disposizione, ma il solo fatto di completarla e metterla sull’App Store era già un grande risultato. Il desiderio di continuare a lavorarci per migliorarla era forte, così mi ci dedicavo nel tempo libero. Nel corso di oltre tre anni e mezzo e ben trentacinque versioni, Retrospecs è cresciuta fino al punto da simulare la maggior parte dei più comuni sistemi disponibili. Inoltre ho aggiunto un editor che espone il motore grafico sottostante, così gli utenti possono creare i propri sistemi virtuali personalizzati.</p>

      <p><b>Z</b>: Una data importante è Marzo 2018, quando avviene la pubblicazione della versione 2 di Retrospecs. Da quel momento vengono pienamente supportati una moltitudine di sistemi e di modi video, forse perché avevi creato un’architettura modulare del motore grafico. Con che anticipo avevi pianificato tutto questo e quale obiettivo avevi in mente?</p>

      <p><b>JP</b>: Mi piace credere che fosse così sin dall’inizio, ma la verità è che ho speso moltissimo tempo ripulendo e migliorando le versioni 1.x. Infatti, molti degli aggiornamenti successivi avevano solo qualche nuova funzionalità ma includevano cambi significativi dietro le quinte. All’inizio c’era il nucleo di un motore grafico che è stato poi esteso fino a supportare un sistema di attributi per ogni singolo pixel, questo sì che è stato pianificato. Comunque, l’interfaccia utente è tutta un’altra storia, ci sono voluti molti cambi e correzioni per arrivare a quella che è adesso.<br>

        Riguardo gli obiettivi, questi sono sempre stati guidati dal tipo di sistemi che volevo supportare. Sapevo, ad esempio, che avrei avuto bisogno di utilizzare la quantizzazione del colore per i sistemi a 16-bit che mostrano un numero di colori limitato all’interno di una tavolozza molto più ampia. Inoltre, visto che sono un grande fan del PETSCII e delle opere create con i caratteri, volevo anche supportarli. Questi due obiettivi hanno portato direttamente alla creazione dei motori grafici per gestire tavolozze di colori e caratteri, quindi tutto si è svolto seguendo una progressione logica.<br>

        Ovviamente, con tutte queste funzioni, se oggi dovessi ricominciare da zero farei le cose un po’ diversamente da un punto di vista di architettura del software. È sempre così quando sviluppi un programma: puoi solo pianificare ciò che avviene da lì a poco, altrimenti impiegheresti tutto il tempo disponibile solo per creare l’architettura perfetta invece che implementare davvero qualcosa.</p>

      <p><b>Z</b>: John, che rimanga solo tra te e Zzap!, è legale spremere i processori multi nucleo per simulare le primitive limitazioni dello Spectrum come il conflitto tra colori (“colour clash”)?</p>

      <p><b>JP</b>: È legale, ma ha senso? Probabilmente no. Sembra da pazzi sprecare tanta potenza di calcolo per un compito così triviale, d’altronde se nel processore hai tanti nuclei che stanno lì senza far nulla sarebbe uno spreco non usarli. ;-)</p>

      <p><b>Z</b>: C’è una lista dettagliatissima di chi ha contribuito a Retrospecs alla pagina <a href="https://8bitartwork.co.uk/credits">https://8bitartwork.co.uk/credits</a>. Come fa un artista di pixel art ad avere una sua tavolozza di colori o un set di caratteri incluso nella tua app? Stima reciproca, suppongo? :-)</p>

      <p><b>JP</b>: Essendo un appassionato di pixel art, cerco di seguire molti  artisti su Twitter e quando vedo una tavolozza o una combinazione di colori che mi piace, chiedo semplicemente il permesso di usarla. Di recente, Sam Keddy ha creato uno splendido sito web chiamato <a href="https://lospec.com/">Lospec</a> che ospita una fantastica collezione di tavolozze così come lezioni pratiche e un editor online di pixel art. Questo rende più facile tener traccia delle nuove tavolozze di quanto lo fosse prima. Consiglio vivamente a tutti di dare un’occhiata al sito se vi interessa l’argomento.<br>

        Visto che parliamo dei miei collaboratori, mi piacerebbe ringraziare le persone che hanno aiutato a localizzare l’app in francese, giapponese e spagnolo dell’America Latina; Eric, Hideki, Kevin, Kaztah e Aurélien hanno tutti dedicato tanto tempo ed energie al progetto e non sarebbe stato lo stesso senza di loro.</p>

      <p>
        <content-image
          :image-path="resolveAssetPath(`diari/john-parker-retrospecs/circlex_sweetie16_360x480.gif`)"
          :no-srcset="true"
          align="right"
          caption="Immagine creata utilizzando i caratteri &quot;Circlex&quot;"
        />

      <b>Z</b>: Eravamo molto ansiosi di provare l’aggiornamento di Retrospecs che includeva il set di caratteri creato da Ray Manta / DataDoor. Le immagini che faceva circolare sulle reti sociali prima del rilascio ufficiale erano delle vere e proprie opere d’arte. Qual’è la storia di questa fruttuosa collaborazione?</p>

      <p><b>JP</b>: Se ben ricordo, inizialmente lo contattai su Instagram dopo la pubblicazione di un lavoro basato sui suoi set di caratteri CBMSCII, e tutto cominciò da quel momento. I due set di caratteri di DataDoor che abbiamo aggiunto (“Filament” e “Circlex”) sono stupendi e le immagini che condivide mi affascinano, ha occhio per il design ed è anche un musicista e programmatore di talento.<br>

        È in realtà fin troppo bravo, probabilmente dovremmo cercare di fermarlo prima che diventi troppo potente :-)<br>

      </p><p><b>Z</b>: Essendo Retrospecs uno strumento creativo, sei in contatto con artisti che lo utilizzano? Ne favorisci l’uso tra di loro? Hai mai provato a spingerti oltre gli appassionati di pixel art fino a raggiungere produzioni “mainstream” come per esempio la recente collaborazione di Jeff Minter con i Nine Inch Nails? Ricordiamo che Jeff ha creato una versione fatta su misura del suo ultimo videogioco Polybius per un <a href="https://www.youtube.com/watch?v=gDV-dOvqKzQ">video clip</a> della band.</p>

      <p><b>JP</b>: In tutta sincerità, nessun artista “mainstream” mi ha mai contattato, ma sarei felice di essere coinvolto in qualcosa di simile, la mia casella per i messaggi diretti è aperta. :-)<br>

        Su un versante leggermente meno “mainstream”, prima di rendere pubblica la versione di Retrospecs che supporta i video, ne ho creato una personalizzata per aiutare a produrre degli spezzoni del video “Church” di Mega Ran. Tuttavia, a parte qualche ritratto animato, tutto il resto del video è frutto del lavoro del bravissimo BluChu/Daniel Fyigin (dovreste dare un’occhiata al video, perché fa riferimento a un numero impressionante di giochi classici ed ha anche proprio <a href="https://www.youtube.com/watch?v=CG6emIHIVww">un bel motivetto</a>).</p>

      <p><b>Z</b>: Parlando di video, aggiungere la funzionalità per creare animazioni ha dato tutta una nuova dimensione alle creazioni fatte con Retrospecs. Qual’è stato l’impatto di questa nuova funzionalità sul successo dell’app e sulle vendite?</p>

      <p><b>JP</b>: Sfortunatamente non sembra aver fatto nessuna differenza per il momento, ed è un vero peccato perché ho dedicato un sacco di tempo ed energie ad aggiungere l’elaborazione dei video e la generazione delle animazioni. Credo che una grossa parte del problema sia riuscire a spargere la voce, infatti richiamare l’attenzione della stampa è stato difficile, forse perché l’app è in giro da ormai quattro anni. Fortunatamente, un’eccezione è stato Craig Grannell che mi ha aiutato molto nella diffusione in  questi anni. Se solo potessi clonarlo e far pubblicare tutto quello che scrive sarei apposto. :-)

      In tutta onestà, Retrospecs non ha mai generato molti soldi (circa €120 al mese se sono fortunato), è sempre stato, per lo più, un atto d’amore. Comunque, per come vanno le cose sta diventando sempre più difficile giustificare l’ingente quantità di tempo che ci dedico, anche se ci sarebbero molte altre funzioni che mi piacerebbe aggiungere. Suppongo che in un mondo ideale renderei Retrospecs completamente gratuito e proverei a trovare un modo per continuarne lo sviluppo grazie alle donazioni su Patreon o altre piattaforme simili, anche se in realtà credo che neanche questo funzionerebbe.<br>

        Penso che mi prederò una pausa, approfittando del fatto che recentemente ho pubblicato molti aggiornamenti e la versione 2 è molto stabile.</p>

      <content-image
        :image-path="resolveAssetPath(`diari/john-parker-retrospecs/app-store.jpg`)"
        :no-srcset="true"
        link-url="https://itunes.apple.com/it/app/retrospecs/id887031094"
        caption="Retrospecs sull'App Store. Cosa aspettate a comprarlo?"
      />
      <p><b>Z</b>: Abbiamo notato che recentemente hai sondato l’opinione di chi ti segue su Twitter per trovare idee su come aumentare la percentuale di utenti che passano dalla versione gratuita dell’app a quella con tutte le opzioni sbloccate. Hai poi preso qualche decisione che possa migliorare gli affari senza scontentare vecchi e nuovi clienti?</p>

      <p><b>JP</b>: In generale cerco di ottenere quante più opinioni possibili,  così, dopo aver fatto un po’ di prove con il prezzo, alla fine l’ho assestato sugli attuali €2,29, basandomi sulle opinioni degli utenti. Questo prezzo sblocca tutti i sistemi e i modi di retinatura, l’elaborazione dei video, gli effetti di animazione e l’editor. In questo modo si può provare la versione gratuita e offrire un ricco incentivo a chi volesse sbloccare la versione completa a un prezzo ragionevole.<br>

        Una cosa che non ho mai fatto è chiedere di pagare per gli aggiornamenti, quindi anche le persone che hanno comprato la primissima versione dell’app possono utilizzare tutte le funzionalità più recenti. In ogni caso c’è anche la possibilità di lasciare una mancia, per chi si sentisse generoso. :-)</p>

      <p><b>Z</b>: È in cantiere la possibilità di creare una versione di Retrospecs per Android o altre piattaforme?</p>

      <p><b>JP</b>: Ahh, sì… spesso mi viene richiesta una versione per Android. Mi spiace ma credo proprio di no, visto che tutta l’interfaccia utente e parte dei meccanismi interni usano massicciamente i framework di Apple, quindi dovrei riscriverne una buona parte (c’è già un’ottima app per Android chiamata “8bit Photo Lab”, assicuratevi di dargli un’occhiata).<br>

        Sto pensando di creare una versione potenziata di Retrospecs per macOS chiamata Pixel Processor, ma sono veramente agli inizi quindi non posso aggiungere altro per il momento. Spero comunque di finirlo prima o poi (nel frattempo potete seguirne lo sviluppo qui: <a href="https://twitter.com/pixelprocessor">https://twitter.com/pixelprocessor</a> for updates).</p>

      <p><b>Z</b>: E per finire, quali sono i tuoi artisti preferiti attivi nella pixel art?</p>

      <p><b>JP</b>: Ooo… ce ne sono così tanti da nominare, i primi che mi vengono in mente sono Gary Lucken (<a href="https://twitter.com/armyoftrolls">https://twitter.com/armyoftrolls</a>) e Craig Stevenson (<a href ="https://twitter.com/hot_piping">https://twitter.com/hot_piping</a>). Così come le opere fatte coi caratteri di DataDoor (<a href="https://twitter.com/datad00r">https://twitter.com/datad00r</a>), mi piace davvero tanto quello che fa Cal Skuthorpe con il suo progetto recente PETSCIIBOTS (<a href="https://twitter.com/PETSCIIBOTS">https://twitter.com/PETSCIIBOTS</a>) e il lavoro di Raquel Meyers (<a href="https://twitter.com/raquelmeyers">https://twitter.com/raquelmeyers</a>) non delude mai.</p>

      <p><b>Z</b>: Grazie per il tuo tempo John, è stato un grandissimo piacere averti sulle pagine di Zzap.it. Auguriamo un futuro brillante a Retrospecs, con o senza retinatura. :-)<br>
        È un’app carinissima e al tempo stesso potente che ogni amante del retrogaming dovrebbe avere, per noi è senza dubbio indispensabile ed è un grande strumento creativo per l’artista che c’è in tutti noi.</p>

      <p><b>JP</b>: Piacere mio, spero che Zzap.it continui a portare con orgoglio l’eredità del suo nome per molti anni ancora!</p>
    </content-section>

  </content-container>
</template>

<script src="./john-parker-retrospecs.js"></script>
