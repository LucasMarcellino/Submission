import UrlParser from '../routes/url-parser'
import CaffeApiSource from '../caffe-source'
import { createDetailCaffe } from '../caffe-template'
import LikeButtonInitiator from '../utils/like-button'

const detailCaffe = {
  async render () {
    return `
        <hero-jumbotron></hero-jumbotron>
        <h3 class="center-title-2" id="content" tabindex="0">Detail Caffe</h3>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const Caffe = await CaffeApiSource.getDetailCaffe(url.id)
    const CaffeMain = document.querySelector('main')
    const CaffeDetail = document.createElement('caffe-detail')
    CaffeMain.append(CaffeDetail)
    CaffeDetail.innerHTML = createDetailCaffe(Caffe)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButton'),
      restaurants: {
        id: Caffe.id,
        name: Caffe.name,
        description: Caffe.description,
        pictureId: Caffe.pictureId,
        city: Caffe.city,
        rating: Caffe.rating
      }
    })
  }
}

export default detailCaffe
