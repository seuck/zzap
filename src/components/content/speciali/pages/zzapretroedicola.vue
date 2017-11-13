<template>
  <content-container
    title="Retroedicola Videoludica presenta Zzap!"
    date="Maggio 2015"
    anchor="speciali-zzapretroedicola"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        imagePath="assets/content/speciali/zzap-retroedicola/zzap-retroedicola-copertina.jpg"
        caption="Lo copertina di Zzap! Retroedicola."
        align="right"
        rotation="cw"
        linkUrl="assets/content/speciali/zzap-retroedicola/Retroedicola-Speciale-Zzap.pdf"
      ></content-image>
      <p>E quando meno te l'aspetti... un nuovo, piccolo, ghiottissimo numero di Zzap!</br>
        Con immenso piacere aiutiamo a diffondere il risultato delle fatiche di Mauro Corbetta e Luca Antignano che oltre a curare il grandissimo archivio di <a href="http://www.retroedicola.it">Retroedicola Videoludica</a> trovano il tempo di deliziarci con questo speciale pieno di interviste.</p>

      <p>Tra celebritá inglesi e nostrane vi invitiamo a tuffarvi nella lettura regolando la manopola "nostalgia" al massimo livello.</p>

      <p>Grazie ragazzi!</p>
    </content-section>
  </content-container>
</template>

<script src="./zzapretroedicola.js"></script>