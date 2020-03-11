<template>
  <div class="sidebar-item">
    <h2>Contents</h2>
    <ul>
      <li v-for="h in headings" v-bind:key="h.slug">{{h.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["headings"],
  mounted() {
    console.log(this.headings)
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: #eee;
}
</style>