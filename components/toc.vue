<template lang="pug">
  .sidebar-item
    h2(v-on:click='toggle()')
      div Contents
      .chevron v
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
      headings: [],
      path: ""
    };
  },
  mounted() {
    this.headings = this.$store.state.headings.markdownHeadings;
    console.log('Route')
    console.log(this.$route)
    this.path = this.$route.path
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
    toTop() {
      if (process.client) {
        window.scrollTo(0, 0);
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

.indent {
  margin-left: 1em;
}

a {
  color: unset;
  text-decoration: unset;

  // display: block;
  // margin-bottom: 0.4em;
}
</style>