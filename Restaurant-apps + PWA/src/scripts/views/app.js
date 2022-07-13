import DrawerInitiator from '../utils/drawer'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import '../utils/custom-element'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
    // this._loading()
    // this._afterLoading()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  // _loading () {
  //   document.querySelector('loading-page').removeAttribute('class')
  //   document.querySelector('loading-page div').classList.add('loading-bar')
  // }

  // _afterLoading () {
  //   setTimeout(() => {
  //     document.querySelector('loading-page').classList.add('none')
  //     document.querySelector('loading-page div').removeAttribute('class')
  //   }, 1200)
  // }

  async renderPage () {
    // this._loading()
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
