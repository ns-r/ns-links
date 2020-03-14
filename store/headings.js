// used to share the markdown headings/bodu 
// between content page and table of contents

export const store = () => ({
  markdownHeadings: []
})

export const mutations = {
  getHeadings(state, markdownBody) {
    var lines = markdownBody.split('\n')
    var headings = []

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
        headings.push(currentHeading)
      }
    }
    // setting state
    state.markdownHeadings = headings
  },
}

export const actions = {
  slugify(text) {
    return text.replace(/ /g, '-').toLowerCase()
  }
}