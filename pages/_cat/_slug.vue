<template>
  <div>
    <BackButton to="/">guides</BackButton>
    <h1>{{ title }}</h1>
    <!-- <client-only> -->
    <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
    <!-- </client-only> -->
    <div class="support">
      <div>Last Updated on {{ readableDate }}</div>
      <div class="links">
        <a
          :href="`https://github.com/themindstorm/ns-links/blob/master/content/${cat}/${slug}.md`"
        >Edit this page on GitHub</a>
        <nuxt-link
          to="/site/improve/"
        >Help improve this page</nuxt-link>
      </div>
    </div>

    <Footer :links="footerLinks" :catSlug="cat"></Footer>
  </div>
</template>

<script>
import BackButton from "~/components/backButton.vue";
import DynamicMarkdown from "~/components/markdown/DynamicMarkdown.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { BackButton, DynamicMarkdown, Footer },
  data: () => {
    return {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  computed: {
    readableDate() {
      var date = new Date(this.lastUpdated);
      return `${
        this.monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    }
  },
  mounted() {
    // this.body
    this.$store.commit('toc/enableToc')
    this.$store.commit("toc/setBody", this.body);
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.description}`
        }
      ]
    };
  },
  async asyncData({ params, app }) {
    // make sure that links are NOT case sensitive
    const cat = params.cat.toLowerCase();
    const slug = params.slug.toLowerCase();

    // need to get all links of current cat to put in footer for easier navigation
    // filtering cat page
    var currentCat = app.siteConfig.list.filter(
      category => category.slug == cat
    )[0];
    var otherPageSlugs = currentCat.pages;
    // console.log(otherPageSlugs)

    // find the titles for each page
    var footerLinks = [];
    otherPageSlugs.forEach(async pageSlug => {
      const fileContent = await import(`~/content/${cat}/${pageSlug}.md`);
      footerLinks.push({
        slug: pageSlug,
        title: fileContent.attributes.title
      });
    });

    const markdownFileContent = await import(`~/content/${cat}/${slug}.md`);
    return {
      title: markdownFileContent.attributes.title,
      lastUpdated: markdownFileContent.attributes.lastUpdated,
      description: markdownFileContent.attributes.description,
      body: markdownFileContent.body,
      footerLinks: footerLinks,

      renderFunc: `(${markdownFileContent.vue.render})`,
      staticRenderFuncs: `[${markdownFileContent.vue.staticRenderFns}]`,

      cat: cat,
      slug: slug
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/article.scss";

.support {
  font-size: 0.8em;
  margin-top: calc(2.5 * var(--heading-margin));

  .links {
    a {
      color: unset;
    }

    display: flex;
    justify-content: space-between;
  }

  margin-bottom: calc(2.5 * var(--heading-margin));
}
</style>