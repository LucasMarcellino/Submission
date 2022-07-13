import FavouriteCaffeIdb from '../database/favourite-caffe-db'
import { createCaffe } from '../caffe-template'

const favoriteCaffePage = {
  async render () {
    return `
        <hero-jumbotron></hero-jumbotron>
        <h3 class="center-title-2" id="content" tabindex="0">Favorite Restaurant</h3>
      `
  },

  async afterRender () {
    const Caffe = await FavouriteCaffeIdb.getAllCaffe()
    console.log(Caffe)
    const CaffeMain = document.querySelector('main')
    const CaffeFavourite = document.createElement('caffe-favourite')
    CaffeMain.append(CaffeFavourite)
    Caffe.forEach((Caffe) => {
      const CaffeList = document.createElement('caffe-list')
      CaffeFavourite.append(CaffeList)
      CaffeList.innerHTML += createCaffe(Caffe)
    })
  }
}

export default favoriteCaffePage
