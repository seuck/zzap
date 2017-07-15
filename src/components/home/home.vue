<template>
  <div :class="homeClass">
    <loader payload=""></loader>
    <reader
      :pages="readerData.pages"
      :startPage="readerData.startPage"
      :title="readerData.title"
      :open="readerData.open"
      @closeReader="resetReader"
    ></reader>
    
    <zzapheader></zzapheader>
    <cover></cover>
    <index></index>
    <scans magazineId="1" @openReader="initReader($event)"></scans>

    <content-container title="Diario di una Pasqua creativa">
      <content-section title="Martedì 11 Aprile 2017: 1 - Il galeone" image-style="content__section-imageodd">
        <a class="content__imagelink" href="#"><img class="content__image" src="assets/games/screenshoots/cauldron_ii.gif"></a>

        <p>Durante la mia adolescenza i fumetti di Dylan Dog hanno affiancato la lettura di Zzap! In entrambi i casi si trattava di una lettura mensile vorace. Ma mentre una volta terminato “l’albo” dell’indagatore dell’incubo non sempre ritornavo a leggerlo, colpa anche di una qualità sempre più discontinua col passare degli anni, Zzap! lo consumavo fino al punto da metterne a dura prova la precaria rilegatura graffettata.
Nonostante le continue letture, tanto per puro godimento sensoriale che come volumi di consultazione su quella fetta di quotidianità che per me erano i videogiochi a quell’eta, i miei “numeri” di Zzap! si sono conservati abbastanza bene, integri a tal punto da servire come prime fonti per le scansioni di questo progetto.
Come chi ci segue ha piacevolmente scoperto, quell’opera immane di digitalizzazione di tutte le pagine mai publicate di Zzap! è avanzata molto più agilmente di quanto io e Dario ci aspettavamo. Grazie el prezioso contributo di tanti volontari “scansionatori" sparsi in lungo e in largo per la penisola italiana.</p>

        <p>Invece, l’opera parallela di sviluppare e mantenere aggiornato il sito web del Progetto ha assomigliato sempre più al galeone del nostro Dylan Dog. Un passatempo eterno, un compito incombente, un sogno irraggiungibile.
È certo vero che la miniatura di un galeone una volta completata finisce in bella mostra su quella mensola così in vista, mentre mettere insieme di un prodotto informatico è per definizione un compito senza fine. Sarà per questo che si usa il verbo “sviluppare” invece che costruire, creare, o semplicemente fare?
Lo sviluppo infatti è per sempre, una meta la cui bellezza è proprio la non esistenza di un punto finale, senza che per questo non valga la pena raggiungerne le varie tappe di sviluppo che si trovano lungo il cammino.</p>

        <a class="content__imagelink" href="#"><img class="content__image" src="assets/games/screenshoots/cauldron_ii.gif"></a>

        <p>Scrivo queste righe proprio per raccontare la tappa successiva che sta per raggiungere il sito web del Progetto Zzap! Italia.</p>
      </content-section>

      <content-section title="Mercoledì 12 Aprile 2017: 2 - Dove siamo" image-style="content__section-imageodd">
        <a class="content__imagelink" href="#"><img class="content__image" src="assets/games/screenshoots/cauldron_ii.gif"></a>

        <p>Sono orgoglioso dei contenuti del Progetto Zzap! Italia, molto meno dell’involucro che li presenta. Il sito web attualmente online risale al lontanissimo 2004, ovvero separato dai giorni nostri da varie ere geologiche, considerando il rapido evolversi della tecnologia web.
E nonostante qualcuno mi disse, azzeccandoci, che è così vecchio che il sito stesso, oltre che i contenuti, può ritenersi “vintage” (^_^), la mia professione è proprio quella di sviluppatore web e non posso certo mostrarlo come esempio delle mie capacità attuali.</p>

        <p>In realtà durante questi anni non sono stato totalmente ozioso. È del 2013 lo sviluppo parziale, in Ruby on Rails 2, di una API per rendere disponibili in formato JSON tutti i dati dei numeri di Zzap!, i giochi recensiti e in generale i dati disponibili nel Database del Progetto. Dell’anno successivo è invece un modulo per Wordpress, anche questo parziale, che aveva l’intenzione di aprire il sito web del Progetto a contenuti editoriali freschi sul mondo, più vivo che mai, del retrogaming e le sue evoluzioni.
Parallelamente ho creato i profili del Progetto sulle reti sociali <a class="content__link" href="https://twitter.com/ZzapItalia">Twitter</a> e <a class="content__link" href="https://www.facebook.com/ProgettoZzapItalia">Facebook</a>.
</p>

        <p>L’ultima fatica, piacevolissima quando c’è Zzap! di mezzo, è iniziata a Natale 2016 con l’idea di rifare completamente il sito web del Progetto, iniziando dalla veste grafica e migliorandone l’accessibilitá, soprattutto per renderlo fruibile da dispositivi mobili (“responsive” web design).
L’idea che sto esplorando è quella di offrire i contenuti di Zzap! attraverso un contenitore che ricalca la grafica dello stesso Zzap!. Una sorta di rivista dentro la rivista, con tanto di copertina, e sommario.
Per fortuna, l’ampio supporto della grafica vettoriale in formato SVG nei browser e i CSS versione 3 permettono di ricreare alcuni elementi dell’impaginazione della rivista originale nella maniera flessibile e fluida richiesta da una web responsive.
</p>

        <p>So che questo può sembrare complicato, ma vorrei ricordare che non stiamo parlando del sito web di una banca o di un altro servizio puramente funzionale, dove ogni orpello o virtuosismo è probabilmente di troppo. Credo invece che il sito web del Progetto può essere un’opera bella e sofisticata, nostalgica al punto giusto, senza per questo essere troppo complessa o macchinosa.</p>

        <p>Finalmente di nuovo in ferie, vado a riaprire il codice sviluppato lo scorso Natale e purtroppo abbandonato a causa, principalmente, di un lungo viaggio di lavoro in Colombia.</p>

        <a class="content__imagelink" href="#"><img class="content__image" src="assets/games/screenshoots/cauldron_ii.gif"></a>
      </content-section>
    </content-container>

  </div>
</template>

<script src="./home.js"></script>
