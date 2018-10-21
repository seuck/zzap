<template>
  <content-container
    title="Jack the Nipper 2"
    date="12 Agosto 2004"
    author="Antonio Bianchetti"
    anchor="mappe-jackthenipper2"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        :image-path="resolveAssetPath(`mappe/jackthenipper2/jack-the-nipper-2-panorama.gif`)"
        :no-srcset="true"
        alt-text="Jack nella giungla salutando il giocatore"
      />
      <p>Jack torna piú dispettoso che mai in questo platform della Gremlin Graphics, pubblicato nel 1987.
        <br>Zzap! gli assegna un modesto 72% e consiglia il gioco <em>&quot;ai fan di <strong>Jack the Nipper</strong>, agli esploratori e ai cartografi&quot;</em>.
        <br>L'abbiamo preso alla lettera!
      </p>

      <content-image
        :image-path="resolveAssetPath(`mappe/jackthenipper2/map-mini.png`)"
        :reader-data="getReaderData()"
        :no-srcset="true"
        caption="La mappa di Jack the Nipper 2"
        @openReader="openReader($event)"
      />

      <p>Come vedrete, la mappa è immensa e non ci sono caricamenti durante il gioco. Senza nessuna divisione tra le diverse aree di gioco, ognuna con grafica e colori diversi, il platform della Gremlin ci offre un mondo tutto da esplorare, pieno di missioni (meglio chiamarle biricchinate) che possono risolversi in qualsiasi ordine.</p>
      <p>Disponibile per verie piattaforme, la versione qui mappata è quella per C64.</p>

      <single-spread
        :magazine-id="1"
        :issue-id="19"
        :start-page="28"
        align="right"
        caption="La recensione"
        rotation="cw"
        alt-text="La recensione di Jack the Nipper su Zzap!"
        @openReader="openReader($event)"
      />

      <p>La mappa è stata ottenuta catturando le schermate una alla volta, mentre giocavo con un emulatore. In ciascuna immagine ho rimosso il personaggio principale, tranne nella prima, cosí da poter localizzare dove si trova il punto di partenza: in alto a sinistra.</p>
      <p>Ho cercato di utilizzare solo i 16 colori della palette del C64, mai tutti visibili contemporaneamente nel gioco. Infatti come conseguenza della ben nota limitazione del modo multicolore del C64, lo sfondo utilizza solo quattro colori, tre fissi e uno alterabile per ciascun carattere. Per agiungere varietá alle varie zone, i tre colori fissi cambiano ogni volta che Jack entra in una nuova area, di solito attraversando un tunnel oscuro, e facendosi luce con una candela.</p>

    </content-section>
    <content-section>
      <p>Esiste inoltre una versione disegnata della mappa di <strong>Jack the nipper 2</strong> nel numero 21, Marzo 1988, di Zzap!</p>

      <double-spread
        :magazine-id="1"
        :issue-id="21"
        :start-page="46"
        caption="La mappa publicata su Zzap!"
        alt-text="La mappa di Jack the nipper 2 su Zzap!"
        @openReader="openReader($event)"/>
    </content-section>
  </content-container>
</template>

<script src="./jackthenipper2.js"></script>
