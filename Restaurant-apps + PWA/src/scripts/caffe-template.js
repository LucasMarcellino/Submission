import CONFIG from './globals/config'

const createCaffe = (Caffe) => `
        <div class="card-image">
            <img src="${CONFIG.BASE_IMAGE_LARGE}${Caffe.pictureId}" alt="Gambar resotan di Kota, ${Caffe.city}" />
            <p><strong>${Caffe.city}</strong></p>
        </div>
        <section class="description">
            <p><b>Rating:</b> <i class="fa-solid fa-star yellow"></i> ${Caffe.rating}</p>
            <h4 tabindex="0"><a class="cta" href="#/detail/${Caffe.id}">${Caffe.name}</a></h4>
            <p>${Caffe.description}</p>
        </section>
`

const createDetailCaffe = (Caffe) => `
        <div class="image">
            <img src="${CONFIG.BASE_IMAGE_LARGE}${Caffe.pictureId}" alt="Gambar detail Caffe Kota ${Caffe.city}">
            <div><strong>${Caffe.city}</strong></div>
        </div>
        <div class="detail">
            <section>
                <div class="detail-title">
                    <h4>${Caffe.name}</h4>
                    <div id="likeButton"></div>
                </div>
                <p tabindex="0"></i>${Caffe.address}</p>
                <p tabindex="0"></i><b>Menu Makanan</b>
                    <ul>
                        ${Caffe.menus.foods.map((food) => (`<li>${food.name}</li>`)).join('')}
                    </ul>
                </p>
                <p tabindex="0"></i><b>Menu Minuman</b>
                    <ul>
                        ${Caffe.menus.drinks.map((drink) => (`<li>${drink.name}</li>`)).join('')}
                    </ul>
                </p>
                <p tabindex="0"></i> <b>Deskripsi</b></p>
                <p class="menu-description" tabindex="0">${Caffe.description}</p>
                <p tabindex="0"></i><b>Customers Review</b></p>
                <div class="review-container">
                    ${Caffe.customerReviews.map((reviews) => (`
                        <div class="review" tabindex="0">
                            <p class="review-name"></i><strong>${reviews.name}</strong></p>
                            <p class="date">${reviews.date}</p>
                            <p class="desc">${reviews.review}</p>
                        </div>
                    `)).join('')}
                </div>
            </section>  
        </div>
`

const createLikeButton = () => `
    <button id="like-button" class="like-button" aria-label="like this restaurant"><i class="fa-solid fa-heart white" aria-hidden="true"></i></button>
`

const createLikedButton = () => `
    <button id="like-button" class="like-button" aria-label="like this restaurant"><i class="fa-solid fa-heart red" aria-hidden="true"></i></button>
`

export { createCaffe, createDetailCaffe, createLikeButton, createLikedButton }
