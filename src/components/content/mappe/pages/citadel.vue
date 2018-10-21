<template>
  <content-container
    title="Citadel"
    author="Antonio Bianchetti"
    date="2 Febbraio 2006"
    anchor="mappe-citadel"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        :image-path="resolveAssetPath(`mappe/citadel/citadel.gif`)"
        :no-srcset="true"
        align="right"
        rotation="cw"
      />
      <p>Ecco a voi le mappe degli 8 livelli di Citadel, lo spara-e-fuggi-strategico di <strong>Martin Walker</strong>.</p>
      <p>Le mappe sono state pubblicate quest'estate nel numero speciale di Zzap! che celebra i 20 anni dalla nascita della nostra cara rivista. I suoi stretti tempi di pubblicazione mi hanno costretto a completare gli ultimi tre livelli in pochi giorni ma la mappa del primo livello risale ad almeno 4 anni prima, periodo in cui mi è balenata per la prima volta l'idea di mappare un gioco mettendo insieme le videate salvate giocando su un emulatore. Queste mappe, quindi, sono in parte precedenti a quella di <scroll-link anchor="mappe-jackthenipper2">"Jack the Nipper 2"</scroll-link>.</p>
      <p>Ciascun livello rappresenta le due facce, superiore ed inferiore, di una città metallica, senza vita ma piena di difese robotiche. La grafica è colorata e scintillante ma l'aspetto più suggestivo non si può apprezzare dalle mappe: gli stupendi effetti sonori ed il rumore di fondo caratteristico di ogni livello.
        <br>Per gli manti delle simmetrie, ogni livello è racchiuso in un quadrato di 1024 pixel di lato.
      </p>

      <content-image
        :image-path="resolveAssetPath(`mappe/citadel/map-mini.png`)"
        :reader-data="getReaderData()"
        caption="Le mappe di Citadel"
        @openReader="openReader($event)"
      />

      <p>Zzap! gli assegna ben un 91% e il bollino di Gioco Caldo, risaltando, oltre agli effetti sonori, la grafica (&quot;I robot nemici sono così dettagliati che sembrano nuovi di zecca&quot;) e la miscela riuscita di azione e riflessione.</p>

      <double-spread
        :magazine-id="1"
        :issue-id="37"
        :start-page="20"
        alt-text="La recensione di Citadel su Zzap!"
        @openReader="openReader($event)"/>
    </content-section>
  </content-container>
</template>

<script src="./citadel.js"></script>
