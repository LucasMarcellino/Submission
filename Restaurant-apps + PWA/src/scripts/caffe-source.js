import FETCH_API_CAFFE from './globals/fetch-api'

class CaffeApiSource {
  static async getCaffe () {
    const response = await fetch(FETCH_API_CAFFE.HOME)
    const responseJson = await response.json()
    const getCaffe = responseJson.restaurants
    return getCaffe
  }

  static async getDetailCaffe (id) {
    const response = await fetch(FETCH_API_CAFFE.DETAIL(id))
    const responseJson = await response.json()
    const getDetailCaffe = responseJson.restaurant
    return getDetailCaffe
  }
}

export default CaffeApiSource
