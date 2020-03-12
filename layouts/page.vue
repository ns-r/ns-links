<template>
  <main>
    <article>
      <BackButton />
      <h1>{{page.title}}</h1>
      <div class="mobile-only">
        <TOC :headings="page.markdownHeadings" :initiallyExpanded="false" />
      </div>
      <slot name="default"></slot>
    </article>
    <aside>
      <div class="wrapper">
        <TOC :headings="page.markdownHeadings" :initiallyExpanded="true" />
      </div>
    </aside>
  </main>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import TOC from "../components/Toc.vue";
export default {
  components: { BackButton, TOC },
  props: ["page"],
};
</script>

<style lang="scss" scoped>
// for tables
@import "../assets/styles/article.scss";

// styles for main are coming from index.vue
// making some resets for the page with back button
article {
  margin-top: 0.7em;

  h1 {
    margin-top: 0.5em;
  }
}
</style>