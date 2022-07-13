import CONFIG from './config'

const FETCH_API_CAFFE = {
  HOME: `${CONFIG.BASE_URL}list`,
  FAVORITE: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`
}

export default FETCH_API_CAFFE
