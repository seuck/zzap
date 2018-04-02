<template>
  <content-container
    title="I maghi dello scanner di Zzap.it"
    anchor="speciali-maghidelloscanner"
    @announceBookmark="announceBookmark($event)"
    @dismissBookmark="dismissBookmark($event)">
    <content-section>
      <p>Nel 2002 i nostri scanner andavano a fuoco. Per primo <strong>Dario</strong>, attingendo alla
        collezione personale di <strong>Toni</strong>, digitalizza le prime pagine. Poi si unisce Seuck stesso e
        tanti altri volenterosi collaboratori. Fino ad arrivare a ben quindici maghi dello scanner,
        lavorando all'unisono.</p>
      <p>Finalmente nel 2008 tutti i numeri di Zzap! sono disponibilie online, quel lavoro immane è finito.
        Ecco chi ha contribuito, siategliene grati quando leggendo le pagine di Zzap! versarete qualche
        lacrimuccia di nostalgia o vi farete qualche risata di gioia. E ringraziateli per il loro duro lavoro.</p>

      <h3>Classifica: i maghi dello scanner</h3>
      <ol>
        <li v-for="scanAuthor in scanAuthors">
          <strong>{{scanAuthor.name}}</strong>, {{scanAuthor.volumes_count}} {{scanItemClosing(scanAuthor)}}
        </li>
      </ol>
        
    </content-section>
  </content-container>
</template>

<script src="./maghidelloscanner.js"></script>