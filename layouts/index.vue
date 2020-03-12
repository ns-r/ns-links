<template>
  <main>
    <article>
      <div class="wrapper">
        <h1>{{this.$siteConfig.title}}</h1>
        <p>{{this.$siteConfig.desc}}</p>
        <div class="mobile-only">
          <TOC :headings="page.markdownHeadings" :initiallyExpanded="false" />
        </div>
        <div class="content">
          <slot name="default"></slot>
        </div>
        <div class="mobile-only">
          <UsefulLinks />
          <PortalLinks />
        </div>
      </div>
    </article>
    <aside>
      <div class="wrapper">
        <TOC :headings="page.markdownHeadings" :initiallyExpanded="true" />
        <UsefulLinks />
        <PortalLinks />
      </div>
    </aside>
  </main>
</template>

<script>
import TOC from "../components/Toc.vue";
import UsefulLinks from "../components/UsefulLinks.vue";
import PortalLinks from "../components/PortalLinks.vue";

import MobileTOCLinks from "../components/MobileTOCLinks.vue";

export default {
  components: {
    TOC,
    UsefulLinks,
    PortalLinks,
    MobileTOCLinks
  },
  props: ["page"],
  head() {
    return {
      title: `${this.$siteConfig.title}`,
      meta: [
        {
          name: "description",
          content: `${this.$siteConfig.desc}`
        },
        {
          name: "theme-color",
          content: "#ffffff"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        {
          charset: "UTF-8"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
@import "../assets/styles/normalize.css";
@import "../assets/styles/font.scss";
@import "../assets/styles/link-section.scss";

// TODO: set this to globally be in every file
@import "../assets/styles/variables.scss";

// aside/sidebars
@import "../assets/styles/sidebars.scss";

main {
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: var(--main-padding);

  article {
    h1 {
      margin-bottom: 0;
    }
    // h2 too small
    h2 {
      font-size: 2em;
      margin-bottom: 0.6em;
    }
  }

  // some margin above sidebar so it doesn't go above title
  // this is not required in mobile
  aside {
    margin-top: calc(1.7 * var(--extra-padding));
  }

  @include not-mobile-screen {
    // this padding will cause problems in mobile, so remove it
    padding: var(--main-padding) 15%;

    // hide mobile only TOC and links
    .mobile-only {
      display: none;
    }
  }

  // reduce padding on tablet screen
  @include tablet-screen {
    // this padding will cause problems in mobile, so remove it
    padding: var(--main-padding) 5%;
  }

  @include mobile-screen {
    grid-template-columns: 100% 250px;

    // DISABLING SIDE DRAWER BECXAUSE NOT WORKING ON MOBILE
    overflow-x: hidden;

    // grid gap also create the white space, so remove it
    grid-gap: 0;

    // resetting padding padding so when scrolling through article, white spaces are not seen
    padding: 0;

    // swipe (hor scroll) snapping
    scroll-snap-type: x mandatory;

    article {
      // this is a scroll snap area
      scroll-snap-align: start;

      // re add the padding here
      padding: var(--main-padding);
    }

    // also add some padding to the sidebar so it doesn't touch the edges
    aside {
      padding: var(--main-padding);

      // this is a scroll snap area
      scroll-snap-align: start;

      // prevent whitespace above side drawer
      margin-top: 0;

      // make it stick so that when you scroll down on mobile, the sidebar is not hidden
      .wrapper {
        position: sticky;
        top: calc(1.7 * var(--extra-padding));
      }
    }
  }
}
</style>