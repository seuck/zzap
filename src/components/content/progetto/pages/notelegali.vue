<template>
  <content-container
    title="Note legali"
    anchor="progetto-notelegali"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <p>Zzap.it è un progetto web non a scopo di lucro creato da appassionati della rivista Zzap!,
      pubblicata in Italia tra il 1986 e il 1993.</p>

    <p>Durante le prime fasi di Zzap.it abbiamo ricevuto via posta elettronica il cortese e informale
      beneplacito di Paolo Besser riguardo la pubblicazione online delle scansioni di Zzap!, a patto che
      il sito non fosse a scopo di lucro.</p>
    
    <p>Tutte le immagini tratte da Zzap! sono copyright <a href="http://www.xenia.it">Xenia Edizioni S.R.L.</a></p>

  </content-container>
</template>

<script src="./notelegali.js"></script>
