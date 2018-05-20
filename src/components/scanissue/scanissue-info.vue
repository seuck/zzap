<template>
  <div class="scanissue__info">
    <h2 class="scanissue__numberline">
      Numero <span class="scanissue__number">{{ issueNumber }}</span>
    </h2>
    <p class="scanissue__dateline">
      <img
        :src="resolveAssetPath(`icons/calendar.svg`)"
        class="scanissue__icon"
        alt="calendario">
      <!-- eslint-disable-next-line max-len -->
      <span class="scanissue__month">{{ issueMonth }}</span> <span class="scanissue__year">{{ issueYear }}</span>
    </p>
    <p class="scanissue__editorline">
      <img
        :src="resolveAssetPath(`icons/edit.svg`)"
        class="scanissue__icon"
        alt="matita">
      <span class="scanissue__editor">{{ issueEditor }}</span>
    </p>
    <p class="scanissue__contributorlabel">
      <img
        :src="resolveAssetPath(`icons/scanner.svg`)"
        class="scanissue__icon"
        alt="scanner">Scansioni di:
      <ul class="scanissue__contributorlist">
        <li
          v-for="contributor in contributors"
          :key="contributor.id"
          class="scanissue__contributor">
          <!--a :href="buildContributorPath(contributor.id)">{{contributor.name}}</a-->
          {{ contributor.name }}
        </li>
      </ul>
    </p>
    <p
      v-if="pdf"
      class="scanissue__pdfline">
      <img
        :src="resolveAssetPath(`icons/pdf.svg`)"
        class="scanissue__icon"
        alt="matita">
      <a
        :href="pdf"
        class="scanissue__pdf">Versione PDF</a> di <a href="http://www.retroedicola.it/">Retroedicola.it</a>
    </p>
  </div>
</template>

<script src="./scanissue-info.js"></script>
