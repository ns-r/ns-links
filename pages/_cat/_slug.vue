<template>
  <div>
    <h1>{{ title }}</h1>
    <client-only>
      <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
    </client-only>
  </div>
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue";
export default {
  components: { DynamicMarkdown },
  mounted() {
    // setting it to state
    console.log(this.body)
    this.$store.commit('headings/getHeadings', this.body)
  },
  async asyncData({ params, app }) {
    const cat = params.cat.toLowerCase()
    const slug = params.slug.toLowerCase()
    const markdownFileContent = await import(`~/content/${cat}/${slug}.md`);
    console.log(markdownFileContent.body)
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
.alert {
  padding: var(--main-padding);
  border-radius: var(--border-radius);

  &.warning {
    background-color: rgba(255, 166, 0, 0.445);
  }
}
</style>