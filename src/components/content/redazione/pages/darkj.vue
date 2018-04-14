<template>
  <content-container
    title="Dario &quot;DarkJ&quot; Rodonò"
    anchor="darkj"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-image
      :imagePath="resolveAssetPath(`redazione/darkj/darkj.jpg`)"
      align="right"
      rotation="cw"
    ></content-image>
    <p><strong>Bio</strong>: Primo contatto con gli 8 bit: 1984 Commodore Vic 20 seguito a breve dal
    fratello maggiore C64 con il quale si diletta alla tenera età di 10 anni a scrivere i primi
    programmi in basic.<br>
    Dopo più di 30 anni il C64 è ancora fisso sulla sua scrivania carrozzato attualmente da una 1541
    Ultimate II+, una C64SD 3.0 Princess Flc e da una Mssiah con la quale sfrutta al meglio il migliore
    sintetizzatore ad 8 bit, il SID.<br>
    Conosce Zzap! relativamente tardi nell'Ottobre del 1987 con il numero 16 e proprio spinto dalla
    voglia di recuperare i vecchi numeri che nel 2002 comincia a lavorare al Zzap.it coinvolgendo in
    beve tempo il compagno di liceo ed università <scroll-link anchor="redazione-seuck">Seuck</scroll-link>.<br>
    È il fondatore di Zzap.it.</p>
  </content-container>
</template>

<script src="./darkj.js"></script>
