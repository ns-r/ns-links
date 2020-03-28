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
import BackButton from "@/components/backButton.vue";
import markdownContent from "@/content/about.md";

export default {
  components: { BackButton, markdown: markdownContent.vue.component },

  head() {
    return {
      title: "About"
    };
  },
  mounted() {
    this.$store.commit("toc/disableToc");
  }
};
</script>