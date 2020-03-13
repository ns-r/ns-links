<template>
  <main>
    <article>
      <BackButton />
      <h1>{{page.title}}</h1>
      <div class="mobile-only">
        <TOC :headings="page.markdownHeadings" :initiallyExpanded="false" />
      </div>
      <div class="content-wrapper">
        <slot name="default"></slot>
      </div>
      <div class="edit-on-gh">
        <a
          :href="'https://github.com/themindstorm/ns-links/blob/master/pages/_posts' + this.$route.fullPath + '.md'"
        >Edit this page on GitHub</a>
      </div>
      <div class="mobile-only">
        <UsefulLinks />
      </div>
    </article>
    <aside>
      <div class="wrapper">
        <TOC :headings="page.markdownHeadings" :initiallyExpanded="true" />
        <UsefulLinks />
      </div>
    </aside>
  </main>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import TOC from "../components/Toc.vue";
import UsefulLinks from "../components/UsefulLinks.vue";
export default {
  components: { BackButton, TOC, UsefulLinks },
  props: ["page"]
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
    margin-top: 0.4em;
    margin-bottom: 0.3em;
  }

  .alert {
    padding: var(--main-padding);
    border-radius: var(--border-radius);

    &.warning {
      background-color: rgba(255, 166, 0, 0.445);
    }
  }

  // need some space between edit on GH button and footer links (mobile)

  .edit-on-gh {
    margin-top: 2em;
    margin-bottom: 2em;
  }
}
</style>