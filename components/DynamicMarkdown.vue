<script lang="js">

  export default {
    props: ["renderFunc", "staticRenderFuncs"],

    render (createElement) {
      return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    },

    created () {
      this.templateRender = eval(this.renderFunc)
      this.$options.staticRenderFns = eval(this.staticRenderFuncs)
    }
  }
</script>