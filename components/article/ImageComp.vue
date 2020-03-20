<template lang="pug">
  div(v-if='rank')
    img(:src="src", :alt="path" height="130")
</template>

<script>
export default {
  props: ["rank", "path"],
  computed: {
    src() {
      return `https://www.cmpb.gov.sg/web/cmpbThemeStatic/themes/cmpbTheme/uploads/2015/12/army-${this.path}.png`;
    }
  }
};
</script>