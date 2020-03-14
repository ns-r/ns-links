const path = require('path')
import Mode from 'frontmatter-markdown-loader/mode'

// markdown configuration
import MarkdownIt from 'markdown-it'
import mia from 'markdown-it-anchor'

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mia)

// list of pages
import fs from 'fs'
import YAML from 'yaml'
var file = fs.readFileSync('./content/list.yml', 'utf8')
var content = YAML.parse(file).list

var routes = []

content.forEach((cat) => {
  cat.pages.forEach((page) => {
    routes.push(`${cat.slug}/${page}`)
  })
})


// ADDING TARGET BLANK
var defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // If you are sure other plugins can't add `target` - drop check below
  var aIndex = tokens[idx].attrIndex('target');

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']); // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
  }

  // pass token to default renderer.
  return defaultRender(tokens, idx, options, env, self);
};
// 


export default {
  mode: 'universal',
  buildDir: 'public',

  head: {
    // title: process.env.npm_package_name || '',
    title: 'NS Links',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //Customize the progress-bar color
  loading: { color: '#000' },
  css: [
  ],
  //Plugins to load before mounting the App
  plugins: [
    '~/plugins/global-components.js'
  ],

  //Nuxt.js dev-modules

  buildModules: [
  ],

  // Nuxt.js modules

  modules: ['@nuxtjs/style-resources', '@nuxtjs/redirect-module'],
  styleResources: {
    scss: [
      'assets/styles/variables.scss',
      'assets/mixins/button.scss',
      'assets/mixins/list.scss',
    ]
  },

  // put slash at end
  redirect: [
    {
      from: '^.*(?<!\/)$',
      to: (from, req) => req.url + '/'
    }
  ],

  // Build configuration
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        // include: path.resolve(__dirname, 'content'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.BODY],
          vue: {
            // root: "dynamicMarkdown"
          },
          markdown(body) {
            return md.render(body)
          }
        }
      })

      // yml files
      config.module.rules.push({
        test: /\.yml$/,
        use: 'js-yaml-loader',
      })
    }
  },

  generate: {
    routes: routes
  }
}
