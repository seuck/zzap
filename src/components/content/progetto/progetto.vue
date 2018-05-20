<template>
  <content-container
    title="Il progetto Zzap.it"
    anchor="progetto"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <p>Zzap.it vuole offrire il modo più comodo per conoscere e sfogliare online Zzap!, l'emblematica rivista di videogiochi italiana basata in parte su materiali dell'inglese Zzap!64.
        <br>Fondato nel 2002 da <scroll-link anchor="redazione-darkj">Dario</scroll-link>, Zzap.it ha digitalizzato tutti i numeri pubblicati dell'omonima rivista, indicizzandone i contenuti in un database facilmente consultabile.
      </p>
      <p>Per maggiori informazioni sugli autori del progetto web vi invitiamo a conoscere la nostra <scroll-link anchor="redazione">redazione</scroll-link>.</p>
      <p>Nato nel 2002, Zzap.it è un progetto pioniero in Italia. A quell'epoca digitalizzare cosí tante immagini e metterle a disposizione online si scontrava con i limiti tecnologici dell'epoca, principalmente la memoria dei computer e dei server e l'ampiezza di banda dei sistemi di telecomunicazione di quelli anni.</p>
      <p>Grazie ai tanti appassionati che hanno contribuito volontariamnete e gratuitamente, soprattutto digitalizzando le loro collezioni private della rivista, Zzap.it ha fatto scuola tra i progetti collettivi nati su Internet.
        <br>Tra i vari progetti ispirati a Zzap.it, abbiamo il piacere di citare il ben più ambizioso <a href="http://www.retroedicola.it/">Retroedicola Videoludica</a>, che si propone di digitalizzare tante altre riviste e materiale di diverso tipo di quello che viene comunemente chiamato &quot;Retrogaming&quot; e non solo.
        <br>Grazie alla collaborazione con Retroedicola, Zzap.it offre le loro versioni dei numeri di Zzap! in PDF, di altissima qualità, come metodo alternativo per sfogliare la rivista originale.
      </p>
      <p>Ma Zzap.it vuole essere molto di più. Un luogo dove celebrare quell'epoca così genuina degli albori dell'industria videoludica. Genuinitá ancora viva considerando i tanti progetti in corso che rendono le piattaforme informatiche presenti su Zzap! più vive che mai. Nuove versioni degli home computer a 8 bit non smettono di essere lanciate sul mercato e si pubblicano nuovi giochi ancora oggi.</p>
      <p>Buona lettura!</p>
    </content-section>

    <content-section title="Cronologia di Zzap!">
      <ul>
        <li><strong>Rivista</strong>: Maggio 1986 - Dicembre 1992</li>
        <li><strong>Inserto di TGM</strong>: Gennaio 1993 - Dicembre 1993</li>
        <li><strong>Sito web ufficiale</strong>: Settembre 1996 - Giugno 1999</li>
        <li><strong>Rivista digitale</strong>: 2002, Xenia pubblica il numero 85</li>
        <li><strong>Progetto Zzap.it</strong>: 2002 - oggi</li>
      </ul>
    </content-section>

    <p><scroll-link anchor="progetto-notelegali">Note legali</scroll-link>.</p>
  </content-container>
</template>

<script src="./progetto.js"></script>
