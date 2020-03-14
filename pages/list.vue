// page that shows a list of resources
<template lang="pug">
  div
    BackButton(to="/") links
    h1 NS Help
    //- p {{ list }}
    div(v-for='cat in list' v-bind:key='cat.slug')
      h2 {{ cat.name }}
      ul
        li(v-for='page in cat.pages' v-bind:key='page.slug')
          nuxt-link(:to=" '/' + cat.slug + '/' + page.slug") {{ page.title }}

</template>

<script>
import BackButton from "@/components/back-button.vue";
export default {
  components: { BackButton },
  mounted() {
    // ['nothing]
    this.$store.commit("toc/setBody", "## General\n## BMT");
  },
  async asyncData({ params, app }) {
    const catList = (await import("~/content/list.yml")).list;

    var newCatList = [];

    catList.forEach(cat => {
      var newCatObject = {
        name: cat.name,
        slug: cat.slug,
        pages: []
      };

      cat.pages.forEach(async page => {
        // async import the markdown file just to get the nam
        const markdownFileContent = await import(
          `~/content/${cat.slug}/${page}.md`
        );

        newCatObject.pages.push({
          slug: page,
          title: markdownFileContent.attributes.title,

          // TODO: add excerpt
          excerpt: ""
        });
      });
      newCatList.push(newCatObject);
    });

    return {
      list: newCatList
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  // nicer list
  @include a-list;

  // reset font size
  font-size: unset;
}
</style>