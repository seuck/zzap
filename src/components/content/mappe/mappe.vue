<template>
  <content-container
    title="Mappe"
    anchor="mappe"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <p>Siamo orgogliosi di proporvi una raccolta di mappe inedite, prodotte esclusivamente per Zzap.it</p>

    <ul>
      <li>Gettare scompiglio saltellando per la giungla non è mai stato cosí facile con la mappa, enorme, di <scroll-link anchor="mappe-jackthenipper2">"Jack the nipper 2: in coconut capers"</scroll-link>, di Toni Bianchetti</li>
      <li><scroll-link anchor="mappe-citadel">Citadel</scroll-link>, di Toni Bianchetti</li>
    </ul>
    <p>Siamo orgogliosi di proporvi una raccolta di mappe inedite, prodotte esclusivamente per Zzap.it</p>
  </content-container>
</template>

<script src="./mappe.js"></script>
