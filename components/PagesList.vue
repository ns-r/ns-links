<template>
  <div>
    <div class="cats">
      <div v-for="cat in this.$siteConfig.pages" v-bind:key="cat.category">
        <h3 v-if='cat.category'> {{cat.category }} </h3>
        <ul>
          <li v-for='page in cat.pages' v-bind:key='page.slug'>
            <a :href=`${cat.indexRoute}/${page.slug}`>
              {{ page.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;

  a {
    color: unset;

    &:hover {
      // color: blue;
      font-weight: bold;
    }
  }
}
</style>