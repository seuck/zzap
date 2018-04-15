<template>
  <content-container
    title="Toni &quot;Seuck&quot; Bianchetti"
    anchor="seuck"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <p>
      <content-image
        :imagePath="resolveAssetPath(`redazione/seuck/seuck.gif`)"
        align="right"
        rotation="cw"
      ></content-image>
      <strong>Bio</strong>: Primo contatto con gli 8 bit: Atari 800XL.<br>
      Ascoltando la colonna sonora di Commando si innamora del C64.<br>
      Affina l'udito con le musiche di Martin Walker e il grilletto con Retrograde
      dei fratelli Rowland.<br>
      Senza saperlo inizia a collezionare gli esemplari di Zzap! che daranno vita a Zzap.it.<br>
      Attivo nella demo scene locale, smanetta con gli interrupts e i raster del VIC II.<br>
      L'omonimo programma, S.E.U.C.K, gli apre le porte della pixel art, che gli frutterà più tardi,
      ai tempi dell'Amiga, un'offerta di lavoro da Ivan Venturi. Sceglie di continuare gli studi universitari.<br>
      Si fa carico della web di Zzap.it già nel 2004 ed è l'autore della versione che leggete adesso.</p>
  </content-container>
</template>

<script src="./seuck.js"></script>
