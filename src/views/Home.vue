<template>
  <main>
    <section id="save-the-date">
      <div class="hero">
        <img
          class="img-fluid hero__img"
          alt="Ste and Jax hands holding on the day of their wedding"
          :style="{
            backgroundImage: `url('${require('@/assets/img/Jax&Ste-56.jpg?placeholder')}')`
          }"
          :src="require('@/assets/img/Jax&Ste-56.jpg')"
          :srcset="require('@/assets/img/Jax&Ste-56.jpg?srcset&format=webp')"
        />
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-12 col-lg-6"></div>
          </div>
        </div>
      </div>
      <div class="theme--tertiary">
        <div class="container">
          <div class="row pt-1 pt-lg-5">
            <div class="col-12 col-lg-6">
              <h1>Stephen & Jacquie's Wedding Reception</h1>
              <p>
                2020 was a strange year for everyone and a stranger year to get
                married! We're sorry we couldn't have you with us when when we
                tied the knot, but we would still love celebrate our nuptials
                with everyone.
              </p>
              <p>
                As we postponed what was going to be our wedding and turn it
                into a celebration a year later. We can't forsee what
                restrictions will be like, but we hope, all being well, you can
                join us for a party in The Lakes on 28th May 2022.
              </p>
              <p>
                Given our professions we've opted to send invites digitally. You
                can register your email below, and we'll provide an RSVP with
                more details nearer to the time.
              </p>
              <iframe
                src="https://cdn.forms-content.sg-form.com/d313292d-b992-11eb-991d-bed3631b86b2"
                style="border: 0;width: 100%;height: 400px;"
              ></iframe>
            </div>
            <div class="col-12 col-lg-6">
              <div class="bookmark theme--secondary">
                <h2>Save the Date</h2>
                <div class="pb-3">
                  <time class="h3" datetime="2021-05-29T13:00:00.000Z"
                    >Saturday, May 28th, 2022</time
                  >
                  <address class="h5">Conniston, The Lakes</address>
                </div>
              </div>
              <picture class="img-fluid">
                <source
                  class="img-fluid"
                  :srcset="
                    require('@/assets/img/Jax&Ste-51.jpg?srcset&format=webp')
                  "
                  media="(min-width: 415px)"
                />
                <source
                  class="img-fluid"
                  :srcset="
                    require('@/assets/img/Jax&Ste-47.jpg?srcset&format=webp')
                  "
                  media="(max-width: 415px)"
                />
                <img
                  class="img-fluid"
                  width="540"
                  :srcset="require('@/assets/img/Jax&Ste-51.jpg?srcset')"
                  alt="Jax and Ste walking down the steps of St. Georges Hall, Liverpool after getting married."
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../assets/styles/settings.scss";

.bookmark {
  position: absolute;
  clip-path: polygon(0px 0px, 100% 0px, 100% 84.87%, 0px 100%);
  padding: 15px;
  text-align: right;

  @include media-breakpoint-up(lg) {
    top: -150px;
    right: 14px;
  }
}
</style>
