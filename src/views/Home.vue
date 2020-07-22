<template>
  <main>
    <b-container fluid class="px-0">
      <b-row no-gutters>
        <b-col order-md="2" md="6" tag="section" class="section section--light">
          <div class="section__content">
            <img
              alt="Small white wedding flower."
              width="224"
              height="478"
              src="../assets/img/small-flower.svg"
              class="flower flower--small"
            />
            <h1>
              Save the date
              <a href="#footnote-*">*</a>
            </h1>
            <div class="pb-3">
              <address class="h3">Conniston, The Lakes</address>
              <time class="h5" datetime="2021-05-29T13:00:00.000Z"
                >Saturday, May 29th, 2012</time
              >
            </div>
            <button class="btn btn-primary" type="button">
              Add date to calendar
            </button>
            <img
              alt="Large white wedding flower."
              src="../assets/img/big-flower.svg"
              class="flower flower--big"
            />
          </div>
          <footer id="footnote-*">* more details to come</footer>
        </b-col>
        <b-col md="6" tag="section" class="section section--dark">
          <div class="section__content my-5">
            <h2>Stephen & Jacquie</h2>
            <img
              class="d-md-none img-fluid"
              alt="Ste & Jax enjoy the sun in Berlin."
              src="../assets/img/us.jpg"
              sizes="(max-width: 376px) 100vw, (max-width: 576px) 50vw"
              srcset="
                ../assets/img/us-375.jpg  375w,
                ../assets/img/us-960.jpg  960w,
                ../assets/img/us.jpg     1080w
              "
            />
            <p>
              Thanks for stopping by, we can't wait to
              <br />celebrate our wedding day with you!
            </p>
          </div>
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
