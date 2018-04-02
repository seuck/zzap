<template>
  <content-container
    title="La redazione di Zzap.it"
    anchor="zzapit"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <p><strong><scroll-link anchor="redazione-darkj">Dario</scroll-link></strong>: fondatore, web originale, scansioni.</p>
    <p><strong><scroll-link anchor="redazione-seuck">Toni</scroll-link></strong>: versioni web del 2004 e 2018, mappe, scansioni.</p>
    <p><strong><a href="https://www.facebook.com/Privodanima">Emiliano Grancagnolo</a></strong>: copertina.</p>

    <p>Ma non saremmo arrivati da nessuna parte senza il prezioso aiuto dei tanti appassionati di Zzap!<br>
      Chi sta dietro all'immane lavoro di scansione di tutti i numeri della rivista?<br>
      Ben tredici volenterosi <scroll-link anchor="redazione-maghidelloscanner">maghi dello scanner</scroll-link>!</p>
    
    <p>Zzap.it utilizza tanti elementi liberamente disponibili sul web,
      <scroll-link anchor="redazione-ringraziamenti">ecco i dettagli</scroll-link>.</p>

  </content-container>
</template>

<script src="./redazione.js"></script>
