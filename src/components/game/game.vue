<template>
  <section
    class="game game__game"
    data-track-content
    :data-content-name="game.name">
    <h2>{{game.name}}</h2>
    <div class="game__content">
      <div class="game__details">
        <p v-if="game.publisher"><span class="game__property">Publisher</span>{{game.publisher.name}}</p>
        <p v-if="game.genres && game.genres.length > 0">
          <span class="game__property">Genere</span><ul class="game__genre">
            <li class="game__genreitem" v-for="genre in game.genres">{{genre.name}}</li>
          </ul>
        </p>
        <p v-if="game.perspective"><span class="game__property">Prospettiva</span>{{game.perspective.name}}</p>
        <p v-if="game.setting"><span class="game__property">Ambientazione</span>{{game.setting.name}}</p>
      </div>
      <content-image v-if="game.adverts && game.adverts.length > 0"
        extraClass="game__thumbimage"
        namespace="game"
        noSrcset="true"
        align="right"
        rotation="cw"
        alt="advImageDescription()"
        @openReader="openReader($event)"
        :imagePath="buildPageThumbPath(game.adverts[0].page.scan.path)"
        :readerData="getAdvData()"
      ></content-image>
    </div>
    <h3>Versioni</h3>
    <ul class="game__versions">
      <li class="game__versionsitem" v-for="version in game.versions">
        <h4>{{version.system.manufacturer.name}} {{version.system.name}}: {{version.media.name}}</h4>
        <div class="game__review" v-if="version.reviews && version.reviews.length > 0">
          <span class="game__global">Globale: {{version.reviews[0].vote}}%</span>
          <content-image
            extraClass="game__thumbimage"
            namespace="game"
            noSrcset="true"
            align="left"
            alt="reviewImageDescription()"
            @openReader="openReader($event)"
            :imagePath="buildPageThumbPath(version.reviews[0].page.scan.path)"
            :readeDataMagazineId="1"
            :readeDataIssueId="version.reviews[0].volume_id"
            :readeDataStartPage="version.reviews[0].page.sequence"
            readeDataReturnBookmark="game__game"
          ></content-image>
        </div>
      </li>
    </ul>
  </section>
</template>

<script src="./game.js"></script>