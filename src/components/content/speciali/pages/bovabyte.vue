<template>
  <content-container
    title="Speciale BovaByte"
    date="22 Ottobre 2004"
    anchor="speciali-bovabyte"
    author="Antonio Bianchetti"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        :image-path="resolveAssetPath(`speciali/bovabyte/speciale-bovabyte.jpg`)"
        :no-shadow="true"
        :no-srcset="true"
      />
      <p><strong>BovaByte</strong> nasce nel 1988 tra i banchi di scuola di un liceo di Vigevano (PV) un pò per prendere in giro i sedicenti sapientoni del computer ma soprattutto per procurarsi un buon motivo per non studiare il latino. La fanzine è assemblata con colla e graffette da <strong>Paolo Besser</strong> e <strong>Davide Corrado</strong> mettendo insieme articoli scritti a mano.</p>
      <p>Con la complicità di Marco Auletta e Giorgio Baratto, allora redattori di Zzap! e The Games Machine, BovaByte diventa ospite, quasi, fisso delle due riviste. Le prime apparizioni sulle pagine della Posta di Zzap!, gestita da Matteo Bittanti (numero 43 - Marzo 1990), con un articolo sulla violenza nei videogiochi tra anticipazioni di giochi non ancora usciti (e che mai usciranno!) e un acceso dibattito tra i redattori, reali e immaginari: GMP, DGS, Il Pastore, L'Amigo, Mauro e Ottavio.</p>
      <p>Due mesi dopo, sul numero 45 - Maggio del 1990, la Fanzine ottiene una rubrica tutta sua e con il proprio umorismo demenziale crea un vero e proprio "genere" all'interno del giornalismo tecnico. Bovabyte ha il merito di rendere l'informatica un argomento "quotidiano", amichevole, sul quale si può scherzare e fantasticare, ma il pregio più grande è aver ridicolizzato quel giornalismo tecnico incompetente, spesso scandalistico, che contraddistingue tanta stampa italiana.</p>
      <p>Con l'inesorabile uscita dal mercato degli 8 bit, BovaByte da ospite diventa protagonista. Zzap! riceve sempre meno giochi da recensire e i lettori, che non hanno ancora abbandonato il loro vecchio computer o consolle, si legano sempre più alle rubriche aperte alla loro partecipazione come l'angolo della Posta e BovaByte.</p>
      <p>Anche la presenza su TGM diventa una consuetudine e con la fine di Zzap!, che si riduce ad inserto di TGM, BovaByte diventa la prima "rivista nella rivista nella rivista" e principale contenuto di Zzap!.</p>
      <p>Nel frattempo i nostri hanno fatto scuola e nel Luglio del 1991 <strong>Andrea Lanza</strong>, un fan di BovaByte, invia alla redazione di Zzap! il primo numero di "<strong>BovaByte 2</strong>", fanzine autoprodotta con i soliti mezzi artigianali. Trova subito spazio nella Posta di Zzap! e in seguito riceverà i più sinceri ringraziamenti dalla redazione originale di BovaByte per aver proseguito con immutata genuinità e follia la loro opera.</p>
      <p>Il materiale inedito che vi presentiamo arriva direttamente dalla collezione personale di Andrea Lanza che ha fornito a Zzap.it le pagine originali della sua fanzine "BovaByte 2" e una delle poche copie esistenti dell'ultima (?) fanzine di BovaByte, "Antologia di BovaByte".</p>
      <p>Sono stati realizzati un totale di 6 numeri di BovaByte 2. Ciascun numero è "incollato" sulle due facciate di un foglio A4, formato non mantenuto nella versione pubblicata su Zzap!. La redazione infatti ha scelto di impaginare BovaByte 2 come una normale (e su questo aggettivo ci sarebbe da discutere...) lettera inviata alla Posta di Zzap! Il formato originale è quindi una novità anche per i vecchi lettori di Zzap! che apprezzeranno il suo stile casareccio con tanto di disegnini, cancellature e l'indirizzo della "redazione" scritto con il normografo.</p>
      <div class="content__showcase">
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-1.jpg`)"
          :reader-data="getBovaByte2ReaderData(1)"
          caption="Bovabyte 2: numero 1"
          @openReader="openReader($event)"
        />
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-2.jpg`)"
          :reader-data="getBovaByte2ReaderData(2)"
          caption="Bovabyte 2: numero 2"
          @openReader="openReader($event)"
        />
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-3.jpg`)"
          :reader-data="getBovaByte2ReaderData(3)"
          caption="Bovabyte 2: numero 3"
          @openReader="openReader($event)"
        />
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-4.jpg`)"
          :reader-data="getBovaByte2ReaderData(4)"
          caption="Bovabyte 2: numero 4"
          @openReader="openReader($event)"
        />
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-5.jpg`)"
          :reader-data="getBovaByte2ReaderData(5)"
          caption="Bovabyte 2: numero 5"
          @openReader="openReader($event)"
        />
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/bovabyte2-6.jpg`)"
          :reader-data="getBovaByte2ReaderData(6)"
          caption="Bovabyte 2: numero 6"
          @openReader="openReader($event)"
        />
      </div>
    </content-section>

    <content-section
      title="Antologia di Bovabyte">
      <p>
        <content-image
          :image-path="resolveAssetPath(`speciali/bovabyte/antologia-di-bovabyte-copertina.jpg`)"
          :reader-data="getReaderData()"
          caption="La copertina dell'Antologia di Bovabyte"
          align="right"
          rotation="cw"
          @openReader="openReader($event)"
        />
        <!-- eslint-disable-next-line max-len -->
        L'ambiziosa <strong>Antologia di BovaByte</strong> di ben 36 pagine, un record per i Bovas, contiene articoli inediti ed una selezione del meglio di BovaByte in versione fanzine.
        <br>I nuovi articoli sono la realizzazione di un sogno della redazione, seguire la storia di un videogioco in tutte le sue fasi: l'ideazione (che fa il verso ai famosi diari dei programmatori di Zzap!), le recensioni e la soluzione (con tanto di mappa). Superfluo precisare che questo gioco, nato dalla mente malata del "Pastore", è un'assoluta schifezza.
        <br>Antologia di BovaByte è stata presentata anche sulle pagine di Zzap! nel numero 64 del Febbraio 1992.
      </p>
    </content-section>
  </content-container>
</template>

<script src="./bovabyte.js"></script>
