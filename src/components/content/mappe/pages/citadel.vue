<template>
  <content-container
    title="Citadel, di Toni Bianchetti"
    date="2 Febbraio 2006"
    anchor="mappe-citadel"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <p>Ecco a voi le mappe degli 8 livelli di Citadel, lo spara-e-fuggi-strategico di Martin Walker.</p>

      <p>Le mappe sono state pubblicate quest'estate nel numero speciale di Zzap! che celebrava i 20 anni della nostra cara rivista. I suoi stretti tempi di pubblicazione mi hanno costretto a completare gli ultimi tre livelli in pochi giorni ma la mappa del primo livello risale ad almeno 4 anni prima, periodo in cui mi è balenata per la prima volta l'idea di mappare un gioco mettendo insieme le videate salvate giocando su un emulatore. Queste mappe, quindi, sono in parte precedenti a quella di <scroll-link anchor="mappe-jackthenipper2">"Jack the nipper 2"</scroll-link>.</p>

      <p>Ciascun livello rappresenta le due facce, superiore ed inferiore, di una città metallica, senza vita ma piena di difese robotiche. La grafica è colorata e scintillante ma l'aspetto più suggestivo non si può apprezzare dalle mappe: gli stupendi effetti sonori ed il rumore di fondo caratteristico di ogni livello. Per gli manti delle simmetrie, ogni livello è racchiuso in un quadrato di 1024 pixel di lato.</p>
    </content-section>
  </content-container>
</template>

<script src="./citadel.js"></script>