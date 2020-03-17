<template lang="pug">
  .sidebar-item
    h2 Links
    .links-list
      a(href="https://github.com/themindstorm/ns-links/").black GitHub
      a(href="https://www.reddit.com/r/singapore").red SG subreddit
      a(href="https://www.reddit.com/r/nationalservicesg").red NS subreddit
      a(href="https://www.ns.sg/nsp/portal/site/mindef-nsf").green NS Portal
      a(href="https://www.safhealth.gov.sg/").green SAF Health
</template>

<style lang="scss" scoped>
h2 {
  // extra padding below for breadthing space
  padding-bottom: var(--dense-padding);
}
.links-list {
  a {
    @include button;
    
    display: block;
    text-align: center;
    width: 100%;
  }
  a + a {
    margin-top: var(--dense-padding);
  }
}
</style>