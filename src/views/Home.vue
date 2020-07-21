<template>
  <main>
    <b-container fluid>
      <b-row>
        <b-col md="6" tag="section" class="section section--dark">
          <b-row>
            <b-col class="my-5">
              <h2>Stephen & Jacquie</h2>
              <img
                class="section__background-img"
                alt="Ste & Jax enjoy the sun in Berlin."
                src="../assets/img/us.jpg"
                sizes="(max-width: 376px) 100vw, (max-width: 576px) 50vw"
                srcset="../assets/img/us-375.jpg 375w, ../assets/img/us-960.jpg 960w, ../assets/img/us.jpg 1080w"
              />
              <p>Thanks for stopping by, we can't wait to celebrate our wedding day with you!</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" tag="section">
          <div>
            <img alt="Small white wedding flower." src="../assets/img/small-flower.svg" />
            <h1>
              Save the date
              <a href="#footnote-*">*</a>
            </h1>
            <address>Conniston</address>
            <time datetime="2021-05-29T13:00:00.000Z">Saturday, May 29th, 2012</time>
            <button class="btn btn-primary" type="button">Add date to calendar</button>
            <img alt="Large white wedding flower." src="//placehold.it/100x300" />
          </div>
          <footer id="footnote-*">* more details to come</footer>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>