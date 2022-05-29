<template>
  <header class="container-fluid header">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand m-0" href="#">
            <img
              class="img-fluid"
              src="@/assets/img/logo.svg"
              alt=""
              width="100"
              height="60"
            />
          </a>

          <div id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item d-none d-lg-block">
                <a
                  class="nav-link py-1 px-3 btn btn-tertiary"
                  aria-current="page"
                  href="#"
                  >The Details</a
                >
              </li>
              <li class="nav-item d-none d-lg-block">
                <a class="nav-link btn btn-primary py-1 px-3" href="#rsvp" data-scroll>RSVP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss">
@import "../assets/styles/site.scss";

.header {
  font-family: "Playfair Display", serif;

  @include media-breakpoint-down(sm) {
    justify-content: center;
  }

  nav {
    position: sticky;
  }
}
</style>
