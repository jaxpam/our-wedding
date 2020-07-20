<template>
  <main>
    <b-container fluid>
      <b-row no-gutters>
        <b-col md="6" tag="section" class="section">
          <b-row align-h="center">
            <b-col class="my-5">
              <h2>Stephen & Jacquie</h2>
              <img
                class="section__background-img"
                alt="Ste & Jax enjoy the sun in Berlin."
                src="//placehold.it/1020x1980"
                sizes="(max-width: 376px) 100vw, (max-width: 576px) 50vw"
                srcset="//placehold.it/376x376/0f0 376w, //placehold.it/576x500/00f 576w, //placehold.it/800x800/f00 800w"
              />
              <p>Thanks for stopping by, we can't wait to celebrate our wedding day with you!</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6" tag="section">
          <div>
            <img alt="Small white wedding flower." src="//placehold.it/100x300" />
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