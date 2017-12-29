<template>
  <div class="scanissue__info">
    <h2 class="scanissue__numberline">
      Numero <span class="scanissue__number">{{issueNumber}}</span>
    </h2>
    <p class="scanissue__dateline">
      <img class="scanissue__icon" src="assets/icons/calendar.svg" alt="calendario">
      <span class="scanissue__month">{{issueMonth}}</span> <span class="scanissue__year">{{issueYear}}</span>
    </p>
    <p class="scanissue__editorline">
      <img class="scanissue__icon" src="assets/icons/edit.svg" alt="matita">
      <span class="scanissue__editor">{{issueEditor}}</span>
    </p>
    <p class="scanissue__contributorlabel">
      <img
        class="scanissue__icon"
        src="assets/icons/scanner.svg" alt="scanner">Scansioni di:
      <ul class="scanissue__contributorlist">
        <li
          class="scanissue__contributor"
          v-for="contributor in contributors">
          <a :href="buildContributorPath(contributor.id)">{{contributor.name}}</a>
        </li>
      </ul>
    </p>
    <p class="scanissue__pdfline">
      <img class="scanissue__icon" src="assets/icons/pdf.svg" alt="matita">
      <a class="scanissue__pdf" :href="pdf">Versione PDF</a> di <a href="http://www.retroedicola.it/">Retroedicola.it</a>
    </p>
  </div>
</template>

<script src="./scanissue-info.js"></script>