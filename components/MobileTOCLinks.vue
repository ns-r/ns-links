<template>
  <div class="grid">
    <!-- wrap in separate divs so that the height doesn't have to be the same -->
    <div>
      <Toc :headings="headings" />
    </div>
    <div>
      <UsefulLinks />
      <PortalLinks />
    </div>
  </div>
</template>

<script>
import Toc from "./Toc.vue";
import UsefulLinks from "./UsefulLinks.vue";
import PortalLinks from "./PortalLinks.vue";

export default {
  props: ["headings"],
  components: {
    Toc,
    UsefulLinks,
    PortalLinks
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
</style>