<template>
  <content-container
    title="Diari e interviste ai programmatori"
    anchor="diari"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <ul>
      <li>Intervista a <scroll-link anchor="diari-johnparkerretrospecs">John Parker</scroll-link>, il programmatore di Retrospecs, il meraviglioso strumento creativo per iOS in grado di trasformare le vostre foto in capolavori di pixel art.</li>
      <li>Anche il nuovo sito di Zzap.it ha il suo diario.
        <scroll-link anchor="diari-zzap">"Il mio galeone", di Antonio Bianchetti</scroll-link>
      </li>
    </ul>
  </content-container>
</template>

<script src="./diari.js"></script>
