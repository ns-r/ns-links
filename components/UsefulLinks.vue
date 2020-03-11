<template>
  <div class="sidebar-item">
    <h2>Useful links</h2>
    <div class='list'>
      <a class="red" href="https://reddit.com/r/nationalservicesg">NS reddit</a>
      <a class="red" href="https://reddit.com/r/singapore">SG reddit</a>
      <a class="black" href="https://github.com/themindstorm/ns-links">GitHub</a>
      <!-- <hr />
      <a class="black" href="https://github.com/themindstorm/ns-links">GitHub</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/button.scss";

.sidebar-item {
  background-color: #eee;

  .list {
    * + * {
      margin-top: var(--dense-padding);
    }

    a {
      @include button;
      // margin-top: var(--dense-padding);

      // looks better with full width
      width: 100%;
    }

    // hr {
    //   border: 1px solid rgba(0,0,0,0.1);
    //   border-radius: 10px;
    // }
  }
}
</style>