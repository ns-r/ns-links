<template>
  <div class="sidebar-item">
    <h2>Contents</h2>
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
</template>

<script>
export default {
  props: ["headings"],
  mounted() {
    console.log(this.headings);
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: #eee;
  a {
    color: var(--font-color);
    text-decoration: unerline;
  }
  .indent {
    margin-left: 1em;
  }
}
</style>