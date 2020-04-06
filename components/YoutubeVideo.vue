<template>
  <div class="video-wrapper">
    <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + id" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>  
</template>

<script>
export default {
  props: ["id"]
}
</script>

<style lang="scss" scoped>
.video-wrapper  {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>