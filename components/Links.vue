<template lang="pug">
  .sidebar-item
    h2 Links
    .links-list
      a(
        v-for="eachLink in this.siteConfig.links" v-bind:key="eachLink.url"
        :class="eachLink.class"
        :href="eachLink.url"
        target="_blank"
      ) {{ eachLink.name }}

</template>

<style lang="scss" scoped>
h2 {
  // extra padding below for breadthing space
  padding-bottom: var(--dense-padding);
}
.links-list {
  a {
    @include button;
    
    display: block;
    text-align: center;
    width: 100%;
  }
  a + a {
    margin-top: var(--medium-padding);
  }
}
</style>