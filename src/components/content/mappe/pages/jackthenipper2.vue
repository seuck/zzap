<template>
  <content-container
    title="Jack the nipper 2, di Toni Bianchetti"
    date="12 Agosto 2004"
    anchor="mappe-jackthenipper2"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        imagePath="assets/content/mappe/jackthenipper2/jack1.gif"
        align="right"
        rotation="cw"
      ></content-image>
      <p>&quot;Jack the nipper&quot; torna piú dispettoso che mai in questo platform della Gremlin Graphics, pubblicato nel 1987. Disponibile per verie piattaforme, la versione qui mappata è quella per C64.</p>

      <p>La mappa è stata ottenuta catturando le schermate una alla volta, mentre giocavo con un emulatore. In ciascuna immagine ho rimosso il personaggio principale, tranne nella prima, cosí da poter localizzare dove si trova il punto di partenza: in alto a sinistra.</p>
      
      <p>Ho cercato di utilizzare solo i 16 colori della palette del C64, mai tutti visibili contemporaneamente nel gioco. Infatti come conseguenza della ben nota limitazione del modo multicolore del C64, lo sfondo utilizza solo quattro colori, tre fissi e uno alterabile per ciascun carattere. Per agiungere varietá alle varie zone, i tre colori fissi cambiano ogni volta che Jack entra in una nuova area, di solito attraversando un tunnel oscuro, e facendosi luce con una candela.</p>

      <p>Esiste inoltre una versione disegnata della mappa di "Jack the nipper 2" nel numero 21, Marzo 1988, di Zzap!</p>
    </content-section>
  </content-container>
</template>

<script src="./jackthenipper2.js"></script>