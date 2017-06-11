<template>
  <section class="scans">
      <section class="scans__magazine">
        <h2 class="scans__magazine__info">Scansioni</h2>
        <div class="scans__magazine__issues">

          <div class="scans__magazine__issue scans__magazine__issuepadding" v-for="issue in paddingIssues">
            <span class="scans__magazine__link"></span>
          </div>

          <div v-for="issue in magazine.issues" class="scans__magazine__issue">
            <a class="scans__magazine__link" @click="issueSelected(issue.id)" >
              <div class="scans__magazine__issueinfo">
                <p class="scans__magazine__issueinfo__number">{{ issue.sequence }}</p>
                <p class="scans__magazine__issueinfo__date">
                  <span class="scans__magazine__issueinfo__month">{{ issue.month }}</span>/<span class="scans__magazine__issueinfo__year">{{ issue.year }}</span>
                </p>
              </div>
              <img class="scans__magazine__image" :src="buildThumbnailPath(issue)">
            </a>
          </div>

        </div>
      </section>
    
      <section class="scans__issue" v-if="isIssueSelected">
        <div class="scans__issue__cover">
          <div class="scans__issue__infocontainer">
            <div class="scans__issue__info">
              <h2 class="scans__issue__numberline">Numero <span class="scans__issue__number">{{issue.sequence}}</span></h2>
              <p class="scans__issue__dateline"><img class="scans__issue__icon" src="assets/icons/calendar.svg" alt="calendario"><span class="scans__issue__month">{{issue.month}}</span> <span class="scans__issue__year">{{issue.year}}</span></p>
              <p class="scans__issue__editorline"><img class="scans__issue__icon" src="assets/icons/edit.svg" alt="matita"><span class="scans__issue__editor">{{issue.editor.name}}</span></p>
              <p class="scans__issue__contributorlabel"><img class="scans__issue__icon" src="assets/icons/scanner.svg" alt="scanner">Scansioni di:
                <ul class="scans__issue__contributorlist">
                  <li v-for="contributor in issue.volumes[0].scan_authors" class="scans__issue__contributor"><a :href="buildContributorLink(contributor.id)">{{contributor.name}}</a></li>
                </ul>
              </p>
            </div>
          </div>
          <a class="scans__issue__detaillink">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/03.jpg">
          </a>
        </div>

        <div id="_double_page" class="scans__issue__doublepage">
          <a class="scans__issue__detaillink">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/02.jpg">
            <img class="scans__issue__page lazy thumb" src="/img/c64_loader.gif" data-original="/img/scans/zzap/1/03.jpg">
          </a>
        </div>

        <div id="double_pages_generated" class="scans__issue__content"></div>

      </section>
  </section>
</template>

<script src="./scans.js"></script>
