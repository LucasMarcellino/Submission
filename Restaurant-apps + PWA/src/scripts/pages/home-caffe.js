import CaffeApiSource from '../caffe-source'
import { createCaffe } from '../caffe-template'
import '../utils/custom-element'

const myCaffe = {
  async render () {
    return `
    <hero-jumbotron></hero-jumbotron>
    <h3 class="center-title-2" id="content" tabindex="0">Explore Caffe</h3>
    `
  },

  async afterRender () {
    const CaffeApi = await CaffeApiSource.getCaffe()
    const CaffeMain = document.querySelector('main')
    const CaffeCard = document.createElement('caffe-card')
    CaffeMain.append(CaffeCard)
    CaffeApi.forEach((Caffe) => {
      const CaffeList = document.createElement('caffe-list')
      CaffeCard.append(CaffeList)
      CaffeList.innerHTML += createCaffe(Caffe)
    })
  }
}

export default myCaffe
