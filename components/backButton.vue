<template>
  <nuxt-link :to="to" class="back-button">
    <span class="chevron">&#x2039;</span>
    <span>
      <slot>back</slot>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["to"]
};
</script>

<style lang="scss" scoped>
.back-button {
  display: block;
  margin-top: var(--heading-margin);

  color: unset;
  text-decoration: unset;

  font-size: 0.9em;
  color: gray;

  display: inline-flex;
  align-items: center;

  .chevron {
    // font-size: 2.5em;
    font-weight: 700;
    padding-right: var(--main-padding);
    margin-bottom: 0.1em;
  }

  // negative margin so it doesn't come too down

  border: 2px solid gray;
  border-radius: calc(var(--border-radius) * 5);
  padding: var(--dense-padding) var(--main-padding);

  &:hover {
    border: 2px solid blue;
    color: blue;
  }
}
</style>