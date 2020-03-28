// page that shows a list of resources
<template lang="pug">
  div
    h1 {{ this.siteConfig.title }}
    p {{ this.siteConfig.desc }}

    div(v-for='cat in list' v-bind:key='cat.slug')
      h2(:id='cat.slug') {{ cat.name }}
      .button-list
        nuxt-link.page-button(
          v-for='page in cat.pages' v-bind:key='page.slug'
          :to=" '/' + cat.slug + '/' + page.slug"
        ) {{ page.title }}

</template>

<script>
export default {
  components: {},
  mounted() {
    this.$store.commit("toc/disableToc");
  },
  head() {
    return {
      title: `${this.siteConfig.title}`,
      titleTemplate: '%s'
    };
  },
  async asyncData({ params, app }) {
    // if (process.server) {
    // const path = require("path");
    // const fs = require("fs");
    // const YAML = require("YAML");

    // var p = process.cwd();
    // var file = fs.readFileSync(p + "/content/list.yml", "utf8");

    // var catList = YAML.parse(file).list;
    // console.log(app.siteConfig.list)
    // const catList = (await import("~/content/list.yml")).list;
    const catList = app.siteConfig.list;

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
    // }

    // });

    // return {
    //   list: newCatList
    // };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/list.scss";
</style>