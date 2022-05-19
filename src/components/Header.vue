<template>
  <header class="container-fluid header">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              class="img-fluid"
              src="@/assets/img/logo.svg"
              alt=""
              width="100"
              height="60"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active py-1 px-3" aria-current="page" href="#">The Details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-primary py-1 px-3" href="#">RSVP</a>
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
  nav {
    position: sticky;
  }
}

</style>
