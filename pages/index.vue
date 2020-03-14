<template lang='pug'>
  div
    h1 NS Links
    //- TODO: put global site description here
    p A list of links and resources to help people serving National Service in Singapore.
    p
      nuxt-link(to='/list').button.black Written guides

    .markdown-links-content
      markdown
</template>

<script>
import markdownContent from "@/content/index.md";

export default {
  components: {
    markdown: markdownContent.vue.component
  },
  mounted() {
    // markdownContent.body
    this.$store.commit('toc/setBody', markdownContent.body)
    // console.log(this.$store.state.toc.markdownBody)
  }
};
</script>

// this cannot be scoped because "markdown" is a component
<style lang="scss" >
.button {
  @include button
}
.markdown-links-content {
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;

    li {
      @include button;

      // // by default buttons are bold, but these should not be bold
      // font-weight: normal;

      // inline button group style
      margin-right: var(--dense-padding);

      // seems that there's some default margin right (?)
      // so increase margin-bottomt to match
      margin-bottom: calc(1.8 * var(--dense-padding));

      &:hover {
        // highlight on hover
        border: 1px solid blue;
        color: blue;

        // desktop only
        @include not-mobile-screen {
          // increase border thickness
          border: 2px solid blue;

          // increase side padding
          padding: var(--dense-padding) calc(3 * var(--dense-padding));
        }
      }
    }
  }
}
</style>