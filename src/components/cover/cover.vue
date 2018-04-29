<template>
  <section class="cover">
    <h2 hidden>Copertina</h2>
    <div class="cover__baloon">
      <div class="cover__balooncontainer">
        <span>Edizione online della rivista italiana più amata</span>
      </div>
    </div>
    <nav class="cover__navigation">
      <ul class="cover__navigationlist">
        <li><scroll-link target="scanindex" :isScrollOnly=true><span>Scansioni</span><small>Sfoglia Zzap! a tutto schermo</small></scroll-link></li>
        <li><scroll-link anchor="diari-zzap"><span>Diario</span><small>Com'è nato il nuovo Zzap.it</small></scroll-link></li>
        <li><scroll-link anchor="mappe"><small>Solo per temerari esploratori</small><span>Mappe</span></scroll-link></li>
        <li><scroll-link anchor="speciali"><span>Speciali</span><small>Rari ma imperdibili</small></scroll-link></li>
        <li class="cover__navigation__side"><scroll-link anchor="speciali-bovabyte"><small>Ne sentivamo la mancanza?</small><span>Bovabyte</span></scroll-link></li>
      </ul>
    </nav>
  </section>
</template>

<script src="./cover.js"></script>