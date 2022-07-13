import favoriteCaffePage from '../pages/favorite-caffe'
import detailCaffe from '../pages/detail-caffe'
import myCaffe from '../pages/home-caffe'

const routes = {
  '/': myCaffe,
  '/favorite': favoriteCaffePage,
  '/detail/:id': detailCaffe
}

export default routes
