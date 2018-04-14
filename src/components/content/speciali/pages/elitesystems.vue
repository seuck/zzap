<template>
  <content-container
    title="Elite Systems, di Zaxxon1"
    anchor="speciali-elite"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
          :imagePath="resolveAssetPath(`speciali/elite/elite-logo.jpg`)"
          noShadow="true"
          noSrcset="true"
        ></content-image>
      <p>Elite è stata una delle software house di maggior successo ai tempi d’oro del C64 e Amiga, i titoli di maggior successo che subito vengono in mente sono i mitici Ghost’n Goblins, Bomb Jack, Buggy boy, 1942 e Spece Harrier. Oltre alle conversioni arcade, hanno pubblicato una numero elevato di giochi originali. Ma che fine ha fatto questa società dopo la chiusura di Commodore?</p>

      <p>Posso dirvi che è viva e vegeta, grazie ad una serie di accordi e collaborazioni sempre indovinate, che le hanno permesso di superare indenne la fine di Commodore. Credo che la chiusura della società tedesca sia quasi paragonabile all’evento che ha portato all’estinzione dei dinosauri sulla Terra. Solo chi ha saputo adattarsi alle nuove esigenze di mercato è riuscito ad andare avanti, sono decisamente pochi i sopravvissuti e tra questi c’è Elite systems Ltd.</p>

      <p>Attualmente la casa Britannica è specializzata in giochi per telefoni cellulari, palmari e console Nintendo.
Tra i titoli riproposti spiccano sugli altri i classicissimi Bomb Jack e Frank Bruno’s Boxing.
Andiamo per ordine con un breve accenno alla storia e i colpi messi a segno.</p>

      <p>L’azienda nasce nel 1984, in Inghilterra, inizialmente pubblicando e programmando giochi per ZX Spectrum Sinclair e Commodore 64.</p>

      <p>
        <content-image
          :imagePath="resolveAssetPath(`speciali/elite/airwolf.gif`)"
          caption="Uno dei primi giochi: Airwolf"
          align="right"
          noSrcset="true"
        ></content-image>
        Nello stesso anno, pubblicò Airwolf, famosissimo gioco tratto da una serie televisiva Statunitense. Alla guida di un elicottero (Airwolf, appunto) , la missione è quella di liberare cinque scienziati tenuti prigionieri in una base piena di insidie situata sotto il deserto dell’Arizona. Fu un successo: oltre 300.000 copie vendute. Questo titolo contribuì al riconoscimento di miglior software house britannica dell’anno nell’ambito dell’intrattenimento per home computer.</p>

      <p>
        <content-image
          :imagePath="resolveAssetPath(`speciali/elite/paperboy.gif`)"
          caption="La schermata di presentazione di Paperboy"
          align="left"
          noSrcset="true"
        ></content-image>
        Due anni più tardi, Paperboy fu votato come gioco dell’anno, anche se ricordo che Zzap! non fu particolarmente magnanimo nella valutazione di questo gioco.
Paperboy, convertito da un’arcade, ci vede alla guida di una bicicletta per le strade di un quartiere americano, evitando i numerosi ostacoli presenti (automobili, persone, falciatrici e altro ancora), si devono distribuire quotidiani, lanciandoli, davanti alla porta d’ingresso delle abitazioni.</p>

      <p>Nel 1990 iniziò la produzione di software per la console NES che in quegli anni ebbe un grandissima diffusione. Elite fu tra le prime aziende europee a stipulare un contratto con Nintendo, aggiungendo un’altra importante opportunità di vendita dei propri prodotti.
Un esempio della bontà dell’accordo con Nintendo è Striker (1994), splendida simulazione calcistica, sviluppata in collaborazione con Rage Software Ltd., esclusivamente per NES. Fruttò oltre 6.000.000 di sterline alle casse della Elite, con 200.000 copie vendute. 
Nel 1995, Elite raggiunse un altro importante accordo con il colosso Sony, per lo sviluppo e pubblicazione di software per Playstation (prima società europea in assoluto).
Un famoso titolo per Playstation, poi sviluppato anche per PC, fu Test Drive: Off-road (1996/1997), realizzato da Motivetime, società di proprietà Elite, venduto sotto l’etichetta Accolade Inc. (attualmente incorporata nel gruppo Infogrames). Il risultato di questa operazione commerciale fu incredibile: 800.000 copie vendute e oltre 1.000.000 di Dollari per Elite/Motivetime.</p>

      <p>Test drive, come è facilmente intuibile, è una simulazione di guida: a bordo di grossi fuoristrada, si percorrono varie piste, cimentandosi in numerose gare. 
Nella scia di Test Drive, nel ’98, in collaborazione con Peugeot, uscì un altro gioco di simulazione automobilistica, sempre programmato da Motivetime. Seguirono dal 1998 al 2000 titoli per PC, ancora simulazione di guida, come: Grand Touring e Ford Racing, in collaborazione con Kumyang Co Ltd per Grand Touring e Ford ovviamente per Ford Racing.</p>

      <content-image
          :imagePath="resolveAssetPath(`speciali/elite/portable.jpg`)"
          caption="Bombjack in versione portatile"
          noSrcset="true"
      ></content-image>
      <p>Chiuso il discorso automobilistico, lo scorso anno, per Elite ci fu un ritorno al passato: rinnovo del contratto con Nintendo per la commercializzazione di giochi per Game Boy Advanced. Ecco un altro geniale colpo di questa azienda: perché non riproporre i grandi classici come Bomb Jack su GBA? Detto, fatto! Rinnovato il contratto con Tecmo Ltd e da Gennaio 2002 ecco nuovamente riproposto l’eroe mascherato per la console palmare di Nintendo in una nuova versione denominata Bomb Jack World (in realtà di nuovo c’è solo il titolo).
BJW contiene tutta la trilogia, ovvero Bomb Jack, Bomb Jack Mighty e Bombjack Twins.
Oltre alla versione per GBA, esiste anche per i palmari Compaq e Palm. Attualmente esistono due sedi: una a Burntwood in Inghilterra (Europa e Asia) ed una a Fremont California (nord e sud America). </p>

      <p>Parlando di Elite non posso non citare alcuni titoli passati alla storia (esagero, diciamo famosi) divisi per categorie.</p>

      <ul>
          <li>Jump’n’ run: Beond the ice place, Bomb Jack, Bomb Jack II, Dragon’s Lair (Software project la versione per C64), Ghost’n Goblins, Gremlins 2, Mighty Bombjack, Thundercats</li>
          <li>Shoot’em up: 1942, Airwolf, Commando, First Strike, Ikari Warriors, Sigma 7, Space Harrier</li>
          <li>Stetegy: Batty</li>
          <li>Race: Boggy boy, PaperBoy</li>
          <li>Action: Critical Mass</li>
          <li>Sport: Frank Bruno’s boxing, Passing shoot</li>
      </ul>
    </content-section>
  </content-container>
</template>

<script src="./elitesystems.js"></script>