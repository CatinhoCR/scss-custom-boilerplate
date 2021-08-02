// eslint-disable-next-line no-unused-vars
import Modernizr from './modernizr'

// Include css for webpack (for development only)
const css = require('../css/main.scss') // eslint-disable-line no-unused-vars

// Hot reloading (for development only)
if (module.hot) {
  module.hot.accept()
}

class App {
  constructor() { // eslint-disable-line no-useless-constructor

  }
}

const app = new App() // eslint-disable-line no-unused-vars
