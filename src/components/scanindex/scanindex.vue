<template>
  <section class="scanindex">
    <h2 class="scanindex__info">Scansioni</h2>
    <div class="scanindex__issues">

      <div
        v-for="(padding) in paddingIssues"
        :key="padding"
        class="scanindex__issue scanindex__issuepadding">
        <span class="scanindex__link"/>
      </div>

      <div
        v-for="issue in magazine.issues"
        :key="issue.id"
        class="scanindex__issue">
        <a
          :class="getLinkClass(issue.id)"
          @click="selectIssue(issue.id)" >
          <div class="scanindex__issueinfo">
            <p class="scanindex__issueinfo__number">{{ issue.sequence }}</p>
            <p class="scanindex__issueinfo__date">
              <!-- eslint-disable-next-line max-len -->
              <span class="scanindex__issueinfo__month">{{ issue.month }}</span>/<span class="scanindex__issueinfo__year">{{ issue.year }}</span>
            </p>
          </div>
          <img
            v-lazy="buildCoverThumbPath(issue)"
            :alt="getAltText(issue.sequence)"
            :data-srcset="buildSrcset(issue)"
            class="scanindex__image">
        </a>
      </div>

    </div>
  </section>
</template>

<script src="./scanindex.js"></script>
