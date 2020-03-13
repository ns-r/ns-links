<template>
  <div :class='type'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="scss" scoped>
div {
  padding:  var(--main-padding);
  border-radius: var(--border-radius);

  &.warning {
    background-color: rgba(255, 166, 0, 0.445);
  }
}
</style>