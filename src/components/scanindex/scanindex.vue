<template>
  <section class="scanindex">
    <h2 class="scanindex__info">Scansioni</h2>
    <div class="scanindex__issues">

      <div class="scanindex__issue scanindex__issuepadding" v-for="issue in paddingIssues">
        <span class="scanindex__link"></span>
      </div>

      <div v-for="issue in magazine.issues" class="scanindex__issue">
        <a class="scanindex__link" @click="selectIssue(issue.id)" >
          <div class="scanindex__issueinfo">
            <p class="scanindex__issueinfo__number">{{ issue.sequence }}</p>
            <p class="scanindex__issueinfo__date">
              <span class="scanindex__issueinfo__month">{{ issue.month }}</span>/<span class="scanindex__issueinfo__year">{{ issue.year }}</span>
            </p>
          </div>
          <img
            class="scanindex__image"
            :src="buildCoverThumbPath(issue)"
            :srcset="buildRetinaCoverThumbPath(issue)">
        </a>
      </div>

    </div>
  </section>
</template>

<script src="./scanindex.js"></script>
