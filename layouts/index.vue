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
      <div class="toc">
        <h2>Contents</h2>
        <ul>
          <li v-for="h in headings" v-bind:key="h.slug">{{h.text}}</li>
        </ul>
      </div>
    </aside>
  </main>
</template>

<script>
export default {
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
    .toc {
      // make it come lower
      // it shouldn't go above the main page title
      margin-top: 2em;
    }
  }

  @include mobile-screen {
      // background: red;
      grid-template-columns: 100% 250px;
      
      aside {
        margin-left: 100px;
        max-height: 300px;
        overflow-y: scroll;
      }
  }
}
</style>