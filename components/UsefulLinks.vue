<template>
  <div class="sidebar-item">
    <h2>Useful links</h2>
    <div>
      <a class="red" href="https://reddit.com/r/nationalservicesg">NS Reddit</a>
      <a class="red" href="https://reddit.com/r/singapore">SG Reddit</a>
      <a class="black" href="https://github.com/themindstorm/ns-links">GitHub</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/button.scss';

div {
  background-color: #ccc;

  a {
    @include button;
    margin-top: var(--dense-padding);

    // looks better with full width
    width: 100%
  }
}
</style>