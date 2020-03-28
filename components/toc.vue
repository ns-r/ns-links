<template lang="pug">
  .sidebar-item
    h2(v-on:click='toggle()')
      div Contents
      .chevron v
    //- p {{ headings }}
    ul(v-if='expanded' )
      li(v-for='h in headings' v-bind:key='h.text + Math.random()')
        div(v-bind:class="{indent : h.level == 2}")
          nuxt-link(:to="{path:path, hash:h.slug}") {{h.text }}
      li(v-on:click='toTop()') Back to top
</template>

<script>
export default {
  data: () => {
    return {
      expanded: true,
      // headings: null,
      path: ""
    };
  },
  mounted() {
    // console.log(this.$store.state.toc.markdownHeadings)
    // this.headings = this.$store.state.toc.markdownHeadings
    // console.log(this.$store.getters['toc/getHeadingsFromBody'])
  },
  computed: {
    headings() {
      // console.log('heading is being computed')
      // return this.$store.getters['toc/getHeadingsFromBody']
      return this.$store.state.toc.headings
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
    toTop() {
      if (process.client) {
        q
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  .chevron {
    font-weight: normal;
    // make this a little higher some how
  }
}
</style>