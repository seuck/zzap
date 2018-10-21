<template>
  <content-container
    title="Diari e interviste ai programmatori"
    anchor="diari"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <ul>
      <li>RETREAM è un attivissimo studio di produzione italiano di videogiochi dagli 8 bit in su. Intervistiamo <scroll-link anchor="diari-simonebevilacquaretream">Simone Bevilacqua</scroll-link> il game designer dietro opere tanto originali quanto curate nei dettagli come MAH, QUOD INIT EXIT, Huenison, BOH.</li>
      <li>Intervista a <scroll-link anchor="diari-johnparkerretrospecs">John Parker</scroll-link>, il programmatore di Retrospecs, il meraviglioso strumento creativo per iOS in grado di trasformare le vostre foto in capolavori di pixel art.</li>
      <li>Anche il nuovo sito di Zzap.it ha il suo diario.
        <scroll-link anchor="diari-zzap">"Il mio galeone", di Antonio Bianchetti</scroll-link>
      </li>
    </ul>
  </content-container>
</template>

<script src="./diari.js"></script>
