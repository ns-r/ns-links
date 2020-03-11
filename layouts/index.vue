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

main {
  padding: 1em 15%;

  display: grid;
  grid-template-columns: 1fr 250px;

  aside {
    .toc {
      background-color: #ddd;
      padding: var(--main-padding);

      h2 {
        margin: unset;
      }
    }
  }

  @include mobile-screen {
    aside {
      max-height: 300px;
      overflow-y: scroll;
    }
  }
}
</style>