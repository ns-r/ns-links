<template lang="pug">
  footer
    h3 Other pages
    .button-list
        nuxt-link.page-button(
          v-for="link in this.links" v-bind:key="link.slug"
          :to="'/'+catSlug+'/'+link.slug+'/'"
        ) {{ link.title }}
    .contribute 
      a(href="https://docs.google.com/forms/d/e/1FAIpQLSeIqWZHWuUizLuQqiIytc5YI67tGedYa82dNw86Knf9bZXFpQ/viewform?usp=sf_link") Click here to add content
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
  @import "~/assets/mixins/a.scss";

  .contribute {
    a {
      @include reset-a;
      
    }
    margin-top: var(--main-padding);
  }
}
</style>