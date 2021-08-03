<template>
  <main>
    <section id="save-the-date">
      <div class="hero">
        <img
          class="img-fluid hero__img"
          width="1019"
          height="423"
          alt="Ste and Jax hands holding on the day of their wedding"
          :src="require('@/assets/img/Jax&Ste-56.jpg?placeholder')"
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
          <div class="row pt-1 pt-md-5">
            <div class="col-12 col-lg-6">
              <h1>Stephen & Jacquie's Wedding Celebration</h1>
              <p>
                2020 was a strange year and was a stranger one to get married!
                We originally planned to get married in 2021, then postponed to
                2022 then we thought "Heck, let's just do it!".
              </p>
              <p>
                We're sorry you couldn't be there with us when we said I do, but
                we would still love to celebrate with you (and your family).
              </p>
              <p>
                If you can register below we'll presume your interest and send
                updates and RSVP's nearer to the time. Things will of course be
                'government restrictions' permitting. Hopefully, some normality
                will be here before then!
              </p>
              <iframe
                title="Sign up form."
                src="https://cdn.forms-content.sg-form.com/d313292d-b992-11eb-991d-bed3631b86b2"
                style="border: 0; width: 100%; height: 365px"
              ></iframe>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
              <div class="bookmark theme--secondary">
                <h2>Save our Date</h2>
                <div class="pb-3">
                  <time class="h3" datetime="2021-05-29T13:00:00.000Z"
                    >Saturday, May 28th 2022</time
                  >
                  <address class="h5">Coniston, The Lakes</address>
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
                    require('@/assets/img/Jax&Ste-34.jpg?srcset&format=webp')
                  "
                  media="(max-width: 415px)"
                />
                <img
                  class="img-fluid"
                  width="540"
                  :src="require('@/assets/img/Jax&Ste-51.jpg?placeholder')"
                  :srcset="require('@/assets/img/Jax&Ste-51.jpg?srcset')"
                  alt="Jax and Ste walking down the steps of St. Georges Hall, Liverpool after getting married."
                />
              </picture>
              <img
                class="img-fluid overlay-euc-left"
                width="200"
                :srcset="require('@/assets/img/euc-01.svg?srcset')"
                alt="Wildflower"
              />
              <img
                class="img-fluid overlay-euc-right"
                width="150"
                :srcset="require('@/assets/img/euc-02.svg?srcset')"
                alt="Wildflower"
              />
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
  padding: 20px 15px;
  text-align: right;

  @include media-breakpoint-up(lg) {
    top: -150px;
    right: 14px;
  }
}

.overlay-euc-left {
  position: absolute;
  left: 0;
  bottom: 0;
}

.overlay-euc-right {
  position: absolute;
  top: 100px;
  right: 0;
}
</style>
