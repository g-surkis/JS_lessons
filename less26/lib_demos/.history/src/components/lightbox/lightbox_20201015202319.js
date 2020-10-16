import * as basicLightbox from 'basiclightbox'
import lightboxTemplate from './lightbox.hbs';
import "../../../node_modules/basiclightbox/dist/basicLightbox.min.css"
import "./lightbox.scss"
import pnotify from "../index"


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
			document.querySelector('button.lightbox-open').onclick = ()=>{
				instance.show()
				pnotify('Hello')
			}
			document.querySelector('button.lightbox-close').onclick = instance.close
		}, 50)

		return source;
	}
};