<template>
  <main>
    <article>
      <h1>{{this.$siteConfig.title}}</h1>
      <p>{{this.$siteConfig.desc}}</p>
      <div class="content">
        <slot name="default"></slot>
      </div>
    </article>
    <aside>
      <TOC :headings="headings" />
      <UsefulLinks />
    </aside>
  </main>
</template>

<script>
import TOC from "../components/Toc.vue";
import UsefulLinks from "../components/UsefulLinks.vue";

export default {
  components: {
    TOC,
    UsefulLinks
  },
  props: ["page"],
  data: () => {
    return {
      headings: "test"
    };
  },
  mounted() {
    this.headings = this.page.markdownHeadings;
  }
};
</script>

<style lang="scss">
@import "../assets/styles/normalize.css";
@import "../assets/styles/main.scss";
@import "../assets/styles/font.scss";
@import "../assets/styles/link-section.scss";

// TODO: set this to globally be in every file
@import "../assets/styles/variables.scss";

// asside
@import "../assets/styles/toc.scss";

main {
  padding: 1em 15%;

  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 1em;

  article {
    // normalize.css creates too much bottom margin
    h1 {
      margin-bottom: unset;
    }
  }

  aside {
    padding-top: 2em;

    & > div {
      margin-bottom: 1em;
    }
  }

  @include mobile-screen {
    // background: red;
    grid-template-columns: 100% 250px;

    aside {
      margin-left: 100px;
      // max-height: 300px;
      // overflow-y: scroll;
    }
  }
}
</style>