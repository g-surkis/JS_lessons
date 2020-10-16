import * as basicLightbox from 'basiclightbox'
import lightboxTemplate from './lightbox.hbs';
import "../../../node_modules/basiclightbox/dist/basicLightbox.min.css"
import "./lightbox.scss"
import pnotify from "../pnotify/pnotify.js"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

import lodash from "lodash"
console.log('lodash: ', lodash.map([1,2,1,2,], (item)=>{return item*2}));

const instance = basicLightbox.create(`
		<video controls class="video-box">
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`)

const source = lightboxTemplate();


export default {
	source,
	load: () => {
		setTimeout(() => {
			document.querySelector('button.lightbox-open').onclick = () => {
				instance.show()

				Toastify({
					text: "This is a toast",
					backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
					className: "info",
					gravity: "bottom"
				  }).showToast()
			}
			document.querySelector('button.lightbox-close').onclick = instance.close
		}, 50)

		return source;
	}
};