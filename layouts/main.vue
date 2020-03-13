// All layouts "extend" from this one
// importing all styles here

<template lang="pug">
  div
    slot
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
@import '@/assets/packages/normalize.css';
</style>