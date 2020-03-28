<template lang="pug">
  footer
    h3 Other pages
    .button-list
        nuxt-link.page-button(
          v-for="link in this.links" v-bind:key="link.slug"
          :to="'/'+catSlug+'/'+link.slug+'/'"
        ) {{ link.title }}
</template>

<script>
export default {
  props: ["catSlug", "links"]
};
</script>

<style lang="scss" scoped>
footer {
  padding: var(--main-padding);
  border-radius: var(--border-radius);

  background-color: var(--container-color);

  h3 {
    margin-top: 0;
  }

  @import "~/assets/styles/list.scss";

  .button-list {
    @include a-list;
  }
  // *:last-child {
  //   margin-bottom: 0;
  // }
}
</style>