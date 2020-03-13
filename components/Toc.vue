<template>
  <div @click="toggleExpand()" class="sidebar-item">
    <h2>
      <span>Contents</span>
      <span class="chevron">v</span>
    </h2>
    <div v-if="expanded">
      <ul>
        <li v-for="h in headings" v-bind:key="h.slug">
          <a :href="'#' + h.slug">
            <div v-if="h.level == '2'">{{h.text}}</div>
            <div v-if="h.level == '3'">
              <div class="indent">{{h.text}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export const data = {
  injectAllPosts: true
};
export default {
  props: ["headings", "initiallyExpanded"],

  data: () => {
    return {
      expanded: false,
    };
  },
  mounted() {
    console.log(this.initiallyExpanded)
    this.expanded = this.initiallyExpanded;
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  h2 {
    display: flex;
    justify-items: center;
    justify-content: space-between;

    .chevron {
      font-weight: normal;
    }
  }

  background-color: #eee;
  a {
    color: var(--font-color);
    text-decoration: unerline;

    &:hover {
      // color: blue;
      font-weight: bold;
    }
  }
  .indent {
    margin-left: 1em;
  }

  hr {
    margin-top: 0.9em;
    margin-bottom: 0.9em;
  }
}
</style>