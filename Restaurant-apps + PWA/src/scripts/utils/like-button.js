import FavouriteCaffeIdb from '../database/favourite-caffe-db'
import { createLikeButton, createLikedButton } from '../caffe-template'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurants }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurants = restaurants

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurants

    if (await this._isCaffeExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isCaffeExist (id) {
    const restaurant = await FavouriteCaffeIdb.getCaffe(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavouriteCaffeIdb.putCaffe(this._restaurants)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavouriteCaffeIdb.deleteCaffe(this._restaurants.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
