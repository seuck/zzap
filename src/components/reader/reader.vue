<template>
  <section v-if="readerContent" id="reader" class="">
    <div id="reader_navigator" class="">
      <span id="reader_info_magazine"></span>
      <a id="reader_close_button" title="Chiudi (Esc)"><img src="/img/icons/24-zoom-out.png" /></a>
      <span id="reader_info_pages"></span>
    </div>
    <div id="reader_content" class="content">
      <img id="reader_left" />
      <img id="reader_right" />
    </div>
  </section>
</template>

<script src="./reader.js"></script>
