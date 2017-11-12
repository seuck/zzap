<template>
  <content-container
    title="Speciali"
    anchor="speciali"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <ul>
      <li>Un mega articolone storico di Paolo Besser scritto in occasione della temporanea
        "rinascita" di Zzap! sul web nel 1996.
        <scroll-link anchor="speciali-leabbiamovistetutte">"Le abbiamo viste tutte"</scroll-link>
      </li>
      <li>Un sogno mai realizzato: il <scroll-link anchor="speciali-konixmultisystem">Konix Multisystem</scroll-link>, di Darkj</li>
      <li>Speciale <scroll-link anchor="speciali-elitesystems">Elite Systems</scroll-link></li>
      <li><scroll-link anchor="speciali-bovabyte">Bovabyte</scroll-link>, la rivista per chi di computer non ci capisce niente</li>
      <li>Uno <scroll-link anchor="speciali-zzapretroedicola">Zzap! tutto nuovo</scroll-link> creato dagli amici di Retroedicola</li>
    </ul>
  </content-container>
</template>

<script src="./speciali.js"></script>
