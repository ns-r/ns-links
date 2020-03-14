<template>
  <div>
    <BackButton to="/list">
      list
    </BackButton>
    <h1>{{ title }}</h1>
    <!-- <client-only> -->
    <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
    <!-- </client-only> -->
  </div>
</template>

<script>
import BackButton from "~/components/back-button.vue";
import DynamicMarkdown from "~/components/markdown/DynamicMarkdown.vue";

export default {
  components: { BackButton, DynamicMarkdown },
  mounted() {
    // this.body
    this.$store.commit('toc/setBody', this.body)
  },
  async asyncData({ params, app }) {
    // make sure that links are NOT case sensitive
    const cat = params.cat.toLowerCase();
    const slug = params.slug.toLowerCase();

    const markdownFileContent = await import(`~/content/${cat}/${slug}.md`);
    return {
      title: markdownFileContent.attributes.title,
      body: markdownFileContent.body,
      renderFunc: `(${markdownFileContent.vue.render})`,
      staticRenderFuncs: `[${markdownFileContent.vue.staticRenderFns}]`
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/article.scss";


</style>