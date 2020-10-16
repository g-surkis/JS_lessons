import router from './app/router/router.js'

import Glide from '@glidejs/glide'

// new Glide('.glide').mount()

var glide = new Glide('.glide')
console.log('glide: ', glide);

glide.mount()