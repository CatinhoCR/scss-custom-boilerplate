// import RouterModule from 'js/router'

// import drawer from './drawer/drawer'
// Include css for webpack (for development only)
// const css = require('../scss/main.scss') // eslint-disable-line no-unused-vars
import 'styles/app.scss'

// if (process.env.NODE_ENV === 'development') {
//   require('./index.html')
// }

// Hot reloading (for development only)
if (module.hot) {
  module.hot.accept()
}

class App {
  constructor(el) {
    this.body = el
    this.init()
  }

  init() {
    // drawer.init()
    // RouterModule.init()
  }
}

const app = {
  init() {
    const wrapperEl = document.querySelector('#app')
    if (wrapperEl) {
      const app = new App(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

// load
window.addEventListener('load', () => app.init())