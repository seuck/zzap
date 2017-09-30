<template>
  <content-container
    title="I diari dei programmatori"
    anchor="diari"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <ul>
      <li>Anche il nuovo sito del Progetto Zzap! Italia ha il suo diario.
        <scroll-link anchor="diari-zzap">"Il mio galeone", di Toni Bianchetti</scroll-link>
      </li>
    </ul>
  </content-container>
</template>

<script src="./diaries.js"></script>
