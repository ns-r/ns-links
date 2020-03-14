<template lang='pug'>
  div
    .alert(v-if='incomplete').warning This page or section is incomplete. You can help by expanding it, similar to how you have expanded the army.
    .alert(v-else :class="type")
      slot Empty slot :/
</template>

<script>
export default {
  props: ["incomplete", "type", "message"]
};
</script>

<style lang='scss' scoped>
.alert {
  padding: var(--main-padding);
  border-radius: var(--border-radius);
  background-color: #222;
  color: white;

  &.warning {
    background-color: rgba(255, 166, 0, 0.445);
    color: unset;
  }

  &.error {
    background-color: rgba(255, 0, 0, 0.50);
    color: unset;
  }

  &.tip {
    background-color: green;
    color: white
  }
}
</style>