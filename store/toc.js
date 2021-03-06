// used to share the markdown headings/bodu 
// between content page and table of contents

export const state = () => ({
  //this is the markdown body
  body: "",
  headings: [],
  disabled: false,
})

export const mutations = {
  setBody(state, value) {
    state.body = value

    // setting headings
    var lines = state.body.split('\n')
    // reset headings
    state.headings = []

    for (var i = 0; i < lines.length; i++) {
      var currentLine = lines[i]
      if (currentLine.startsWith('#')) {
        // it's a heading
        var text = currentLine.split('# ')[1]

        // find whether level 1 or 2
        var currentHeading = {
          // remove '##'
          text: text,
          level: currentLine.match(/#/g).length - 1,
          slug: actions.slugify(text)
        }
        state.headings.push(currentHeading)
      }
    }
  },

  disableToc(state) {
    state.disabled = true
  },
  enableToc(state) {
    state.disabled = false
  },
}

export const getters = {

}

export const actions = {
  slugify(text) {
    return text.replace(/ /g, '-').toLowerCase()
  }
}

// setHeadings(state, markdownBody) {
  //   var lines = markdownBody.split('\n')

  //   // reset headings
  //   state.headings = []

  //   for (var i = 0; i < lines.length; i++) {
  //     var currentLine = lines[i]
  //     if (currentLine.startsWith('#')) {
  //       // it's a heading
  //       var text = currentLine.split('# ')[1]

  //       // find whether level 1 or 2
  //       var currentHeading = {
  //         // remove '##'
  //         text: text,
  //         level: currentLine.match(/#/g).length - 1,
  //         slug: actions.slugify(text)
  //       }
  //       state.headings.push(currentHeading)
  //     }
  //   }
  //   // state.headings should already be reactive
  // },