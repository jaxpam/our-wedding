<template>
  <main>
    <page-header />
    <section>
      <div class="container bg-light pb-5">
        <div class="row justify-content-center align-items-center py-3 py-lg-5">
          <div class="col-auto hero-img pe-xl-5">
            <img
              class="img-fluid mast-head-img"
              src="@/assets/img/dan-and-han.png"
              :srcset="require('@/assets/img/dan-and-han.png?srcset')"
              alt=""
              width="400"
              height="600"
            />
          </div>
          <div class="col-12 col-lg-5 col-xl-4 hero-text">
            <h5 class="mb-lg-4">Celebrate with us</h5>
            <h1 class="h2 text-center mb-0">
              Hannah Sanderson<br />+<br />Daniel Holden
            </h1>
            <h5 class="mt-2 mt-lg-4">Bashall Barn | Clitheroe</h5>
          </div>
        </div>
        <h3 class="hero-time">Monday, 24th October 2022</h3>
      </div>
    </section>
    <section id="rsvp" class="h-100">
      <div class="container py-5">
        <h2 class="h1 text-uppercase text-center pb-3">RSVP</h2>
        <div class="row">
          <div class="col-6">
            <a
              class="nav-link py-1 px-3 btn btn-lg btn-rsvp"
              aria-current="page"
              href="mailto:emailgoeshere@email.com?subject=Yes!%20Accept%20with%20pleasure&body=Please%20update%20this%20text%20here%2C%20and%20let%20us%20know%20who's%20coming%2C%20and%20if%20you%20have%20any%20dietary%20requirements." target="_blank"
              >Yes! Accept with pleasure</a
            >
          </div>
          <div class="col-6">
            <a
              class="nav-link py-1 px-3 btn btn-lg btn-rsvp"
              aria-current="page"
              href="mailto:emailgoeshere@email.com?subject=Decline%20with%20regret&body=Unfortunately%2C%20I%20am%2F%20we%20are%20unable%20to%20join%20you%20on%20your%20special%20day!" target="_blank"
              >Decline with regret</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="details bg-secondary py-3">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-5 text-center text-lg-end">
            <img
              class="img-fluid m-lg-3 mb-2"
              src="@/assets/img/bashall.jpg"
              :srcset="require('@/assets/img/bashall.jpg?srcset')"
              alt=""
              width="300"
              height="400"
            />
          </div>
          <div class="col-12 col-md-5">
            <h3 class="lead text-light mb-3">
              All we really want for our wedding day is for you to be there to
              celebrate with us. However, if you'd like to give us a gift, a
              contribution towards our honeymoon would be greatly appreciated.
            </h3>
            <ul class="list-unstyled">
              <li class="text-light mb-3">
                <small class="text-uppercase">Ceremony</small>
                <br />
                <p class="time fw-bold">1:00PM – 2:00PM</p>
                <small>Twitter Lane, Clitheroe, Lancashire, BB7 3LQ</small>
              </li>
              <li class="text-light">
                <small class="text-uppercase">Reception to follow</small>
                <br />
                <p class="time fw-bold">7.30PM - until late</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container bg-primary pt-3 pb-5">
        <div class="row botanical">
          <div class="col-12 col-lg-4 offset-lg-2">
            <img
              class="botanical-stem d-none d-lg-block"
              src="@/assets/img/stem.svg"
              :srcset="require('@/assets/img/stem.svg?srcset')"
              width="100"
              height="300"
              alt="botanical stem"
            />
            <h2 class="h1 text-lowercase title-underline">Time</h2>
            <ul class="list-unstyled mt-4">
              <li class="text-center text-lg-start">
                <p>
                  Please book a taxi ahead of time <br />
                  <strong>Before 12:30 am</strong>
                </p>
              </li>
              <li class="text-center text-lg-start">
                <h4>Eagle Taxis 01200 222 222</h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="row euc mt-3">
          <div class="col-12 col-lg-6 offset-lg-5">
            <img
              class="eucalyptus d-none d-lg-block"
              src="@/assets/img/euc.svg"
              :srcset="require('@/assets/img/euc.svg?srcset')"
              width="100"
              height="300"
              alt="eucalyptus"
            />

            <h2 class="h1 text-lowercase title-underline">Things to note</h2>
            <ul class="list-unstyled mt-4 mx-3">
              <li>
                <p>
                  Please note, no confetti to be used during any part of the
                  day, this is due to the venue having a strict no confetti
                  rule.
                </p>
              </li>
              <li>
                <p>
                  This is a cashless venue, please don't forget to bring your
                  debit or credit cards with you.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light pb-3">
      <div class="container">
        <div class="row justify-content-center mb-5 pt-3">
          <h2 class="h1 mb-0 text-lowercase text-center title-underline">
            Accomodation
          </h2>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="@/assets/img/accomodation-01.jpg"
                :srcset="require('@/assets/img/accomodation-01.jpg?srcset')"
                class="img-fluid"
                alt="Ribble Valley Country Cottages"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h3 class="card-title">
                  Ribble Valley <br />
                  Country Cottages
                </h3>

                <a
                  href="https://ribblevalleycountrycottages.co.uk/"
                  target="_blank"
                  class="btn btn-primary"
                  >Visit their website</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="@/assets/img/accomodation-02.jpg"
                :srcset="require('@/assets/img/accomodation-02.jpg?srcset')"
                class="img-fluid"
                alt="Coach and Horses Ribble Valley"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h3 class="card-title">
                  Coach & Horses <br />
                  Ribble Valley
                </h3>

                <a
                  href="https://coachandhorsesribblevalley.co.uk/"
                  target="_blank"
                  class="btn btn-primary"
                  >Visit their website</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="@/assets/img/accomodation-03.jpg"
                :srcset="require('@/assets/img/accomodation-03.jpg?srcset')"
                class="img-fluid"
                alt="Shireburn Arms Hotel"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h3 class="card-title">Shireburn Arms</h3>
                <a
                  href="https://www.shireburnarmshotel.co.uk/"
                  target="_blank"
                  class="btn btn-primary"
                  >Visit their website</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="@/assets/img/accomodation-04.jpg"
                :srcset="require('@/assets/img/accomodation-04.jpg?srcset')"
                class="img-fluid"
                alt="Holmesmill"
                loading="lazy"
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h3 class="card-title">
                  Holmes Mill <br />
                  Clitheroe
                </h3>

                <a
                  href="https://www.holmesmill.co.uk/hotel/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Visit their website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="location-img h-100"
      style="background-image: url('../assets/img/hills.png'); background-size: cover; background-position: center center;"
    >
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <h4 class="text-white">
              Set in the heart of Lancashire, with panoramic views across the
              Ribble Valley. <br /><br />
              Once you see our venue, you'll see why we fell in love with it..
              with the rolling hills, rustic charm and stunning location.
            </h4>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-lg-4 text-end mb-3 mb-lg-0">
            <h5 class="text-center mb-3">
              If you'd like to ask us any questions…
            </h5>
            <a class="btn btn-primary w-100" href="#">Email Us</a>
          </div>
          <div class="col-12 col-md-5 text-center text-md-end">
            <img
              class="img-fluid"
              src="@/assets/img/logo-white.svg"
              :srcset="require('@/assets/img/logo-white.svg?srcset')"
              alt=""
              width="100"
              height="60"
            />
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import Header from "@/components/Header.vue";

@Component({
  components: {
    "page-header": Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../assets/styles/site.scss";

footer {
  background-color: $navy;
  color: $white;
  padding: 3rem 0;
}
</style>
