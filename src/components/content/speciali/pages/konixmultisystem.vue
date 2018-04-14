<template>
  <content-container
    title="Un sogno mai realizzato: il Konix Multisystem, di Darkj"
    anchor="speciali-konixmultisystem"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <content-image
        :imagePath="resolveAssetPath(`speciali/konixmultisystem/speedking.jpg`)"
        caption="Lo Speedking, il rivoluzionario joystick della Konix."
        align="right"
      ></content-image>
      <p>Chi di voi, che avete vissuto l'era 8 bit, non si ricorda della mitica Konix? Ripensando ai tempi in cui ci si ritrovava i pomeriggi a casa degli amici a giocare con il C64 (intervallando purtroppo con qualche minuto di studio) non posso non ricordare il migliore compagno di noi videogiocatori dell'epoca, lo Speedking. Il joystick della suddetta casa inglese che fu una vera e propria rivoluzione rispetto ai controller utilizzati fino ad allora, rozzi, squadrati e scomodi!!! Lo Speedking aveva una forma ergonomica che permetteva la presa dello stesso e la pressione del fire con la mano sinistra lasciando alla mano destra il controllo della leva.
Non mi sento di esagerare dicendo che un buon 90% dei possessori di C64 in breve tempo avevano fatto loro questo nuovo ed utile accessorio che, oltre che per per la comodità si contraddistingueva anche per la solidità e robustezza, pensate che il mio è passato attraverso migliaia di partite a decathlon (lo spacca joystick per eccellenza) ed a cadute da varie altezze tanto da resistere addirittura fino al passaggio C64 - Amiga.
Visto il grande successo dello Speedking la Konix ne realizzò versioni per PC e per alcune consolle fra le quali ricordo il Nintendo Entertainment System e il Sega Master System che però non ebbero il successo dell'originale.</p>
      <p>Nel 1988 Konix si associò ad un'altra compagnia inglese la Flare, che aveva già sviluppato un prototipo di computer il Flare One, per lo sviluppo di una console basata sull'hardware di quest'ultimo, chiamata Konix Multisystem. Le foto sulle preview delle riviste del settore furono tali da fare sbavare qualsiasi appassionato di videogiochi e ancor di più chi già aveva testato la qualità dei prodotti Konix. Lasciando a dopo le specifiche tecniche della console, ciò che subito saltava all'occhio era proprio la forma di quest'ultima che appariva come un volante d'auto perfetto per i giochi automobilistici (considerate che ai tempi non esistevano tutti gli accessori che esistono oggi per le console) che all'occorrenza con semplici operazioni poteva trasformarsi in manubrio da moto/bike o in cloche per le simulazioni di volo. In più venivano sponsorizzate una serie di periferche accessiorie quali la lightgun, la sedia meccanica(!!!). Insomma c'era di tutto per fare sognare noi ingenui ragazzini dell'epoca.</p>
      <content-image
        :imagePath="resolveAssetPath(`speciali/konixmultisystem/konixcloche.jpg`)"
        caption="Il Konix Multisystem in configurazione cloche"
        noSrcset="true"
      ></content-image>
      <content-image
        :imagePath="resolveAssetPath(`speciali/konixmultisystem/konixauto3.jpg`)"
        caption="Configuarazione volante, con a destra la pedaliera fornita con la console"
        noSrcset="true"
      ></content-image>
      <content-image
        :imagePath="resolveAssetPath(`speciali/konixmultisystem/konixmoto2.jpg`)"
        caption="Configurazione motorbike"
        noSrcset="true"
      ></content-image>
      <p>
        <content-image
          :imagePath="resolveAssetPath(`speciali/konixmultisystem/konixsedia.jpg`)"
          caption="La sedia meccanica"
          align="right"
          noSrcset="true"
        ></content-image>
        Ma purtroppo la console non vide mai la luce a parte forse qualche esemplare dimostrativo per una serie di motivi fra i quali i continui cambiamenti dell'hardware e i continui posticipi della data di uscita che scoraggiarono le software house dall'investire risorse sullo sviluppo per questa macchina. Ad esempio la memoria ram dela consolle doveva essere inizialmente di 128k per poi essere portata a 256k con la possibilità di espansione fino a 512k dopo le critiche subite da parte di alcune software house, quindi ai definitivi 512k negli ultimi modelli.</p>
      <p>Vediamo dunque le specifiche tecniche della console:
        <ul>
          <li>Il <strong>processore</strong> era un 8086 a 16 bit affiancato da un coprocessore custom ASIC a 12mhz comprendente video generator, colour palette, disk controller, Blitter, ROM, fast RAM, 12 MIP Arithmetic and Logic Unit, RISC Digital Signal Processor, stereo compact disk DACs and digital and analogue ports.</li>
          <li>La <strong>memoria</strong> ram come già detto era di 256k (512k successivamente).</li>
          <li>Le <strong>risoluzioni</strong> grafiche 256x200 a 256 colori, 256x200 a 16 colori e 512x200 a 16 colori il tutto da una paletta di 4096 colori.</li>
          <li>Il <strong>sonoro</strong> stereo a 25 canali con qualità CD ed output via TV o cuffie.</li>
          <li><strong>Uscite video</strong> standard Tv o RGB composito.</li>
          <li>Il <strong>software</strong> risiedeva su dischetti da 3,5 con capacità da 880k o su cartuccia.</li>
        </ul>
        Dopo il fallimento del Konix multisystem e lo scioglimento delle due società la Flare continuò lo sviluppo dell'hardware del Flare One producendo il Flare Two che fu poi venduto ad Atari e diventò l'<strong>Atari Jaguar</strong>.
      </p>
    </content-section>
  </content-container>
</template>

<script src="./konixmultisystem.js"></script>
