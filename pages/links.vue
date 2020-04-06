<template lang='pug'>
  div
    BackButton(to="/") back
    h1 Links
    //- p
    //-   nuxt-link(to='/').button.black Written guides

    .markdown-links-content
      markdown
</template>

<script>
import markdownContent from "@/content/index.md";
import BackButton from "@/components/backButton.vue";

export default {
  components: {
    BackButton,
    markdown: markdownContent.vue.component
  },
  head() {
    return {
      title: "Links",
    }
  },
  mounted() {
    // markdownContent.body
    this.$store.commit('toc/enableToc')
    this.$store.commit('toc/setBody', markdownContent.body)
    // console.log(this.$store.state.toc.markdownBody)
  }
};
</script>

// this cannot be scoped because "markdown" is a component
<style lang="scss" >
@import '@/assets/mixins/links_list.scss';

.button {
  @include button
}
.markdown-links-content {
  ul {
    @include links-list;
  }
}
</style>