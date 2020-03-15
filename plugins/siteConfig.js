import Vue from 'vue'

// replace js-yaml-loader with YAML once the loader is raedy

import content from '../siteConfig.yml'


// inject for components
Vue.prototype.siteConfig = content

// inject into context so it can be used in asyncData
export default ({ app }, inject) => {
  app.siteConfig = content
}