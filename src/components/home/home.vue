<template>
  <div :class="homeClass">
    <loader payload=""></loader>
    <reader
      :pages="readerData.pages"
      :startPage="readerData.startPage"
      :title="readerData.title"
      :open="readerData.open"
      @closeReader="resetReader"
    ></reader>
    
    <zzap-header></zzap-header>
    <cover></cover>
    <index></index>
    <scanindex magazineId="1" @selectedIssue="initIssue($event)"></scanindex>

    <router-view name="issue" magazineId="1" @openReader="initReader($event)"></router-view>
    <router-view name="content"></router-view>
    <router-view name="followup"></router-view>
  </div>
</template>

<script src="./home.js"></script>
