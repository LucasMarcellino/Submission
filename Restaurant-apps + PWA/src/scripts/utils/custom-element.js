class CaffeCard extends HTMLElement {}

class CaffeList extends HTMLElement {}

class CaffeFavorite extends HTMLElement {}

class CaffeDetail extends HTMLElement {}

class AppBar extends HTMLElement {
  connectedCallback () {
    this.classList.add('navbar')
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="navbar-title">
        <header>
          <h1 class="tittle">Caffe Rest</h1>
        </header>
        <a class="skip-content" href="#content"> Skip to content </a>
        <button id="bar-menu" class="navbar-icon" aria-label="klik/Tab untuk menampilkan menu">☰</button>
      </div>
      <ul id="drawer" class="navbar-list">
        <li><a href="#/">Home</a></li>
        <li><a href="#/favorite">Favourite</a></li>
        <li><a href="https://www.linkedin.com/in/lucas-marcellino-037905223/" target="_blank" rel="noopener">About Us</a></li>
      </ul>
    `
  }
}

class HeroJumbotron extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="jumbotron">
        <img class="hero-image" src="./images/heros/hero-image_4.jpg" alt="semangkuk kue dan irisan jeruk beserta bunga" />
        <h2 class="center-title" tabindex="0">Welcome to Caffe Rest</h2>
        <p class="center-subtitle">Bingung cari Caffe ? Coba cari disini..</p>
      </div>
    `
  }
}

customElements.define('hero-jumbotron', HeroJumbotron)
customElements.define('app-navbar', AppBar)
customElements.define('caffe-detail', CaffeDetail)
customElements.define('caffe-card', CaffeCard)
customElements.define('caffe-list', CaffeList)
customElements.define('caffe-favourite', CaffeFavorite)
