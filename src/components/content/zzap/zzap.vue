<template>
  <content-container
    title="Gli &quot;altri&quot; Zzap!"
    anchor="zzap"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <ul>
      <li>Un numero di <scroll-link anchor="zzap-retroedicola">Zzap! tutto nuovo</scroll-link> creato dagli amici di Retroedicola Videoludica</li>
    </ul>
  </content-container>
</template>

<script src="./zzap.js"></script>
