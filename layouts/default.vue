/*
This will be used for the
- main links page
- all other blog pages
*/

<template lang="pug">
  Root
    Navbar
    main
      article
        .wrapper
          .content
            nuxt
      aside
        .wrapper
          TOC(v-if="!$store.state.toc.disabled")
          Links
</template>

<script>
import Root from "@/layouts/root.vue";

import Navbar from "@/components/Navbar.vue";
import TOC from "@/components/toc.vue";
import Links from "@/components/Links.vue";

export default {
  components: { Root, Navbar, TOC, Links },

};
</script>

<style lang="scss">
@import "@/assets/styles/article.scss";
@import "@/assets/styles/aside.scss";

// style for grid (<main>)
main {
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: calc(1.7 * var(--main-padding));

  // padding: var(--main-padding) 5%;
  padding: var(--side-padding);

  @include not-mobile-screen {
    // this will cause too much side padding in mobile
    // only for descktop v
    // padding: var(--main-padding) 13%;

    // some margin above sidebar so it doesn't go above title
    // this is not required in mobile
    aside {
      margin-top: calc(1.7 * var(--extra-padding));

      // TODO: should it be sticky?
      // .wrapper {
        // position: sticky;
        // top: calc(1.7 * var(--extra-padding));
      // }
    }

    .mobile-only {
      display: none;
    }
  }

  @include mobile-screen {
    display: block;
    // hide aside
    aside {
      display: none;
    }
  }
}
</style>