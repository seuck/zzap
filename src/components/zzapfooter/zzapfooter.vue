<template>
  <footer
    class="footer"
    v-lazy:background-image="resolveAssetPath('crt.jpg')">
    <p>Zzap.it è l'opera collettiva che ha reso disponibili online tutte le scansioni della rivista Zzap!</p>
    <nav class="footer__navigation">
      <scroll-link anchor="progetto">Il progetto</scroll-link>
      <scroll-link anchor="redazione">Redazione</scroll-link>
      <scroll-link anchor="progetto-notelegali">Note legali</scroll-link>
    </nav>
  </footer>
</template>

<script src="./zzapfooter.js"></script>
