<template>
  <content-container
    title="Il mio galeone, di Toni Bianchetti"
    anchor="diari-zzap"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section
      date="Martedì 11 Aprile 2017"
      title="Il galeone">
      <p>Durante la mia adolescenza i fumetti di Dylan Dog hanno affiancato la lettura di Zzap!. In entrambi i casi si trattava di una lettura mensile vorace. Ma mentre una volta terminato “l’albo” dell’indagatore dell’incubo non sempre ritornavo a leggerlo, colpa anche di una qualità sempre più discontinua col passare degli anni, Zzap! lo consumavo fino al punto da metterne a dura prova la precaria rilegatura graffettata.
Nonostante le continue letture, tanto per puro godimento sensoriale che come volumi di consultazione su quella fetta di quotidianità che per me erano i videogiochi a quell’eta, i miei “numeri” di Zzap! si sono conservati abbastanza bene, integri a tal punto da servire come fonte iniziale per le scansioni di questo progetto.</p>

      <p>Come chi ci segue ha piacevolmente scoperto, quell’opera immane di digitalizzazione di tutte le pagine mai publicate di Zzap! è avanzata molto più agilmente di quanto io e Dario ci aspettavamo. Grazie el prezioso contributo di tanti volontari <scroll-link anchor="redazione-maghidelloscanner">“scansionatori"</scroll-link> sparsi in lungo e in largo per la penisola italiana.</p>

      <p>Invece, l’opera parallela di sviluppare e mantenere aggiornato il sito web del Progetto ha assomigliato sempre più al galeone del nostro Dylan Dog. Un passatempo eterno, un compito incombente, un sogno irraggiungibile.
È certo vero che la miniatura di un galeone una volta completata finisce in bella mostra su quella mensola così in vista, mentre mettere insieme un prodotto informatico è per definizione un compito senza fine. Sarà per questo che si usa il verbo “sviluppare” invece che costruire, creare, o semplicemente fare?
Lo sviluppo infatti è per sempre, una meta la cui bellezza è proprio la non esistenza di un punto finale, senza che per questo non valga la pena raggiungerne le varie tappe di sviluppo che si trovano lungo il cammino.</p>

      <p>Scrivo queste righe proprio per raccontare la tappa successiva che sta per raggiungere il sito web di Zzap.it.</p>
    </content-section>

    <content-section
      date="Mercoledì 12 Aprile 2017"
      title="Dove siamo">
      <p>Sono orgoglioso dei contenuti si Zzap.it, molto meno dell’involucro che li presenta. Il sito web attualmente online risale al lontanissimo 2004, ovvero separato dai giorni nostri da varie ere geologiche, considerando il rapido evolversi della tecnologia web.
E nonostante qualcuno mi disse, azzeccandoci, che è così vecchio che il sito stesso, oltre che i contenuti, può ritenersi “vintage” (^_^), la mia professione è proprio quella di sviluppatore web e non posso certo mostrarlo come esempio delle mie capacità attuali.</p>

      <p>In realtà durante questi anni non sono stato totalmente ozioso. È del 2013 lo sviluppo parziale, in Ruby on Rails 2, di una API per rendere disponibili in formato JSON tutti i dati dei numeri di Zzap!, i giochi recensiti e in generale i dati disponibili nel Database del Progetto. Dell’anno successivo è invece un modulo per Wordpress, anche questo parziale, che aveva l’intenzione di aprire il sito web del Progetto a contenuti editoriali freschi sul mondo, più vivo che mai, del retrogaming e le sue evoluzioni.
Parallelamente ho creato i profili del Progetto sulle reti sociali <a href="https://twitter.com/ZzapItalia">Twitter</a> e <a href="https://www.facebook.com/ProgettoZzapItalia">Facebook</a>.
</p>

      <p>L’ultima fatica, piacevolissima quando c’è Zzap! di mezzo, è iniziata a Natale 2016 con l’idea di rifare completamente il sito web del Progetto, iniziando dalla veste grafica e migliorandone l’accessibilitá, soprattutto per renderlo fruibile da dispositivi mobili (“responsive” web design).
L’idea che sto esplorando è quella di offrire i contenuti di Zzap! attraverso un contenitore che ricalca la grafica dello stesso Zzap!. Una sorta di rivista dentro la rivista, con tanto di copertina, e sommario.
Per fortuna, l’ampio supporto della grafica vettoriale in formato SVG nei browser e i CSS versione 3 permettono di ricreare alcuni elementi dell’impaginazione della rivista originale nella maniera flessibile e fluida richiesta da una web responsive.
</p>

      <p>So che questo può sembrare complicato, ma vorrei ricordare che non stiamo parlando del sito web di una banca o di un altro servizio puramente funzionale, dove ogni orpello o virtuosismo è probabilmente di troppo. Credo invece che il sito web del Progetto può essere un’opera bella e sofisticata, nostalgica al punto giusto, senza per questo essere troppo complessa o macchinosa.</p>

      <p>Finalmente di nuovo in ferie, vado a riaprire il codice sviluppato lo scorso Natale e purtroppo abbandonato a causa, principalmente, di un lungo viaggio di lavoro in Colombia.</p>
    </content-section>

    <content-section
      date="Giovedì 13 Aprile 2017"
      title="La copetina, di nuovo">
      <p>Sorpresa, ma non troppo. Il codice della copertina responsive che ho sviluppato a Natale ha bisogno di molte modifiche. E’ più che altro una prova di concetto e per andare dritto al risultato non ho costruito correttamente l’HTML. In particolare la copertina è da sola, non c’è nessun contenuto dopo, in basso e aggiungendolo adesso sballa tutto.
E dire che le regole le conosco ma com’è facile dimenticarsene quando si sperimenta. Prima di tutto infatti va creato un buon codice HTML semantico. Se si sbaglia questo passo è poi tutta una serie di errori a catena o quantomeno di complicazioni.</p>

      <p>Approfitto di un software dell’ufficio per provare più comodamente la copertina sul mio smartphone. Si chiama Ghostlab, crea un server che sincronizza la navigazione tra desktop e mobile. Fai scrolling sul telefono e la stessa pagina si muove anche sul computer, e viceversa.
Per fortuna il test è positivo, su iOS la nuova copertina del Progetto si vede benissimo!</p>

      <p>È anche il momento di prendere decisioni importanti come definire quali breakpoint utilizzare, ovvero le dimensioni della finestra del navigatore in cui si riadatta il contenuto per meglio accomodarsi nello spazio disponibile. Per il momento avremo tre zone: telefono (600px), monitor (900px), e tutto ciò che sta in mezzo.
Altra decisione importante è la dimensione del testo, se c’è una grandezza minima, una massima e come varia tra queste due dimensioni. La grandezza del testo è importante perché altre dimensioni si calcolano automaticamente basandosi su di essa.
Vi annuncio già adesso che mi piacciono i siti web con il testo grande e ben visibile.</p>

      <p>Sto parlando della copertina già da qualche paragrafo ma non ho ancora specificato quale illustrazione mostrerà. Ho una ghiotta sorpresa in serbo!</p>
    </content-section>

    <content-section
      date="Venerdì 14 Aprile 2017"
      title="Sommario">
      <p>La copertina si comporta molto meglio adesso. Cosa viene dopo? Ma certo, il sommario!
Il sommario è la prima pagina testuale di Zzap!, dopo qualche pagina di pubblicità. I nostri simpatici redattori approfittavano già di questa lista di argomenti per cominciare a scherzare. Non solo i titoli delle varie sezioni cambiavano di mese in mese (I “soliti”, I “tosti”, Un “fertile” autunno a 8 bit), ma anche i paragrafi che accompagnavano ogni articolo erano divertenti, come: “dopo il “pacco” del Mega Indice, una fresca ventata di trucchi Made in Italy”.</p>

      <p>Zzap! Ha cambiato l’impaginazione e la grafica del sommario molte volte, spesso di mese in mese. Come ispirazione, ho scelto lo stile sobrio dei sommari dei primi numeri, anche per creare uno stacco dopo la coloratissima copertina.
Due colonne, qualche immagine abbinata al contenuto per arricchire la pagina. Semplicità prima di tutto, anche perché il sommario del nuovo sito web del Progetto sarà la navigazione principale.
Tecnicamente parlando, ho usato il modo Flexbox dei CSS 3, ormai ampiamente supportato. Chi ancora naviga con una versione inferiore alla undicesima di Internet Explorer farebbe bene ad aggiornarlo prima di tutto per questioni di sicurezza.</p>

      <p>La scelta più importante del nuovo sommario è l’architettura dell’informazione del sito del Progetto. Attualmente tutto è organizzato seguendo la divisione secondo i numeri della rivista, logico.
Ma vorrei approfittare di questa nuova versione del sito per andare oltre e far così emergere gli innumerevoli contenuti interni a ciascun numero, abilitando la navigazione trasversale, ovvero da una rubrica alla stessa ma di un altro numero della rivista.
I casi più pratici sono per esempio i diari dei programmatori. Dopo aver letto una puntata, sarebbe comodo avere un link per andare alla successiva. Nella versione attuale del sito questo non è possibile.
Purtroppo non abbiamo questa catalogazione dei contenuti al momento, eccetto che per le recensioni dei giochi.
Ma andiamo per passi. Intanto mi sto occupando del frontend del nuovo sito del Progetto e l’intenzione è quella di metterlo online anche con contenuti statici.
Infatti per la versione dinamica ho grandi progetti, ma non certo fattibili nell’arco di questo fine settimana.</p>
    </content-section>

    <content-section
      date="Domenica 16 Aprile 2017"
      title="Scansioni">
      <p>La giornata è soleggiata qui a Barcellona, ma l’operazione che mi accingo a compiere si sposerebbe meglio con una notte buia e tempestosa. Sarà necessario canalizzare l’energia di un fulmine per ridare vita al navigatore di scansioni che sviluppai nel 2013 dopo averlo innestato nel corpo del nuovo sito web del Progetto?
Non potendo contare sull’aiuto di Igor, a rendere l’operazione più semplice sarà la tecnologia utilizzata. Infatti il navigatore usa un’implementazione frontend pura, quindi è il codice Javascript eseguito nel navigatore stesso che crea le varie viste. Tutti i dati, e la complessità richiesta per generarli, risiedono in un software esterno, tecnicamente un’API REST, che trasforma le informazioni conservate in un database, servendole in formato JSON. Quella che battezziamo proprio adesso col nome di “Zzapi!” è uno dei tanti esperimenti con cui ho giocato nei momenti di silenzio del Progetto, troppo a lungo tenuti nel cassetto.</p>

      <p>L’implementazione di Zzapi! è basata su Ruby on Rails, una bella tecnologia che però si è rivelata più complicata del previsto da mantenere a aggiornare. Ricordo che perdevo più tempo a mantenere il server e l’ambiente di sviluppo ben configurato che programmando. Non escludo una migrazione a altra tecnologia in futuro, magari Node.js.
Ma non questo fine settimana. In fondo è da anni che ho messo l’API online ed aspetta di essere utilizzata. Spero solo che l’hosting dove “gira” Rails regga.</p>

      <p>Dopo l’intervento, il paziente è ancora vivo. È infatti possibile scegliere una rivista, sfogliarne le pagine e leggerne il contenuto attraverso un visore a schermo intero.
Rimangono tanti punti di sutura da curare e purtroppo il risultato finale non supporta i piccoli schermi.
Questa mancanza unita al codice vecchiotto con cui è programmato mi occuperanno durante e prossime ore.</p>
    </content-section>

    <content-section
      date="Sabato 20 - Domenica 21 Maggio 2017"
      title="Zzapi">
      <p>Torniamo a Zzapi, l’API REST che espone il contenuto del data base del Progetto su Internet. Fornisce un semplice indirizzo ad ogni risorsa interessante di Zzap!, come i numeri della rivista, le recensioni dei giochi, le pubblicità e persino l’elenco di chi ha contribuito alle scansioni.
Per esempio /magazine/1/issue/8 è l’indirizzo usato per consultare le informazioni del numero 8 di Zzap!. Il primo numero, uno, si usa perché il sistema supporta più di una rivista anche se per adesso solo contiene i dati di Zzap!.
Tutte queste informazioni sono aperte al libero consumo su Internet e il visore delle scansioni utilizza proprio questi dati.
Avete voglia di creare una App per telefono attorno ai dati di Zzap!? È quello che fa per voi.</p>

      <p>Zzapi giá funziona ma presenta dei problemi. È sviluppata in Ruby on Rails, una tecnologia abbastanza in voga qualche anno fa che volevo assolutamente imparare ed utilizzare. Ma pur presentando molti vantaggi, soprattutto nella pulizia e brevità del codice, a me ha sempre dato un bel da fare. Molto più di quanto mi aspettassi all’inizio, anche tenendo in considerazione i tipici tempi lunghi dell’usare una tecnologia mentre la si studia.
Inoltre richiede un hosting in generale più costoso di quello di Aruba che storicamente utilizza il Progetto e dove sono conservati i vari gigabyte delle scansioni.
Come conseguenza dell’avere un server per Ruby on Rails, e un altro con il generoso spazio web per le scansioni, si creano inoltre delle complicazioni nel far comunicare i due server, oltre che una piccola lentezza nel caricare completamente la pagina.</p>

      <p>Mettendo tutte insieme queste considerazioni, e seguendo il buon ritmo con cui mi sto dedicando al nuovo sito del Progetto, decido che è arrivato il momento di migrare Zzapi a una tecnologia più semplice, economica e facile da mantenere.
Il mio Sabato comincia con la scelta della tecnologia, seguendo una linea assolutamente pragmatica.
Visto che Node non è supportato da Aruba, ritorno dopo anni a considerare PHP e i vari framework sempre più maturi che lo accompagnano.
Cerco qualche tutorial online e nel giro di un paio d’ore mi metto all’opera: Lumen di Laravel sarà il nuovo framework di Zzapi, scritto in PHP, mentre il database MySQL rimarrà lo stesso di prima.</p>

      <p>Laravel mi sorprende innanzitutto per la facilità di istallazione ma quello che mi lascia sbalordito è la quasi totale compatibilità delle convenzioni di Eloquent, lo strato software che astrae la manipolazione del data base, con quelle di Ruby on Rails. C’è forse da gridare al plagio ma sono entrambi progetti open source e alla fine se ne beneficia tutta la comunità di sviluppatori.
La documentazione ufficiale è più che decente e si trovano velocemente domande e risposte utili ai principali problemi sul web, ottimo.
E infatti il giorno dopo, dopo pranzo, tutte le operazioni in uso della vecchia Zzapi sono già state migrate, più qualcuna nuova.
Rimane ancora da fare il deploy sullo stesso server del Progetto, finalmente un solo server per tutto!
Non male per un fine settimana in cui ho anche avuto il tempo di andare a un mini festival di musica e a vedere un vecchio film con Marlon Brando in una sala per cinefili della città.</p>

      <p>PHP si conferma un porto sicuro, un linguaggio quasi invisibile, da cui non mi aspetto niente di sofisticato ma che fa il suo dovere e che permette uno sviluppo rapido e quasi indolore.
Non credo di programmarci molto altro ma sono contento di questo reincontro inaspettato.
Non vedo l’ora di espandere l’API con le operazioni mancanti in futuro, ma adesso ritorniamo al sito.
Saranno ancora li ad aspettarci Daphne e Dirk?</p>
    </content-section>

      <p>Continua...</p>
  </content-container>
</template>

<script src="./zzap.js"></script>
