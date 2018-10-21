<template>
  <section
    :data-content-name="game.name"
    class="game game__game"
    data-track-content>
    <h2>{{ game.name }}</h2>
    <div class="game__content">
      <div class="game__details">
        <p v-if="game.publisher"><span class="game__property">Publisher</span>{{ game.publisher.name }}</p>
        <p v-if="game.genres && game.genres.length > 0">
          <span class="game__property">Genere</span><ul class="game__genre">
            <li
              v-for="genre in game.genres"
              :key="genre.id"
              class="game__genreitem">{{ genre.name }}</li>
          </ul>
        </p>
        <p v-if="game.perspective"><span class="game__property">Prospettiva</span>{{ game.perspective.name }}</p>
        <p v-if="game.setting"><span class="game__property">Ambientazione</span>{{ game.setting.name }}</p>
      </div>
      <content-image
        v-if="game.adverts && game.adverts.length > 0"
        :no-srcset="true"
        :image-path="buildPageThumbPath(game.adverts[0].page.scan.path)"
        :reader-data="getAdvData()"
        extra-class="game__thumbimage"
        align="right"
        rotation="cw"
        alt="advImageDescription()"
        @openReader="openReader($event)"
      />
    </div>
    <h3>Versioni</h3>
    <ul class="game__versions">
      <li
        v-for="version in game.versions"
        :key="version.id"
        class="game__versionsitem">
        <!-- eslint-disable-next-line max-len -->
        <h4>{{ version.system.manufacturer.name }} {{ version.system.name }}: {{ version.media.name }}</h4>
        <div
          v-if="version.reviews && version.reviews.length > 0"
          class="game__review">
          <span class="game__global">Globale: {{ version.reviews[0].vote }}%</span>
          <content-image
            :no-srcset="true"
            :image-path="buildPageThumbPath(version.reviews[0].page.scan.path)"
            :reader-data-magazine-id="1"
            :reader-data-issue-id="version.reviews[0].volume_id"
            :reader-data-start-page="version.reviews[0].page.sequence"
            extra-class="game__thumbimage"
            align="left"
            alt="reviewImageDescription()"
            @openReader="openReader($event)"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script src="./game.js"></script>
