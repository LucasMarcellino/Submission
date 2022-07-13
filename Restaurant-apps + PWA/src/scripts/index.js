import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '@fortawesome/fontawesome-free/js/all'
import './utils/drawer.js'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#bar-menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
