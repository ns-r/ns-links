<template lang="pug">
  nav
    nuxt-link(to="/").logo
      img(src="~/assets/svg/sar21.svg")
      //- .desktop-title {{ this.siteConfig.title }}
      //- .mobile-title {{ this.siteConfig.shortTitle }}
    .right
      nuxt-link(to="/links") Links
      nuxt-link(to="/about") About
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: var(--side-padding);
  // padding-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-content: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.338);

  position: sticky;
  top: 0;

  background-color: white;
  opacity: 0.9;
  backdrop-filter: blur(5px);

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 15px;
    }

    div {
      margin-left: var(--dense-padding);
      font-weight: bold;
    }

    // these titles may be added later. For now, just keep the gun
    .mobile-title { display: none; }
    // only show mobile-desktop on mobile
    @include mobile-screen {
      .desktop-title { display: none; }
      .mobile-title { display: block; }
    }
  }

  .right {
    a {
      @include reset-a;
      margin-left: calc(2 * var(--dense-padding));

      color: var(--font-color-light);
      font-weight: 600;

      &.nuxt-link-active {
        color: var(--font-color);
      }
    }
  }
}
</style>