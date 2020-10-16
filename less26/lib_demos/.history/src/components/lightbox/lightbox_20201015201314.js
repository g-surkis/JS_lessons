import * as basicLightbox from 'basiclightbox'
import lightboxTemplate from './lightbox.hbs';
import "../../../../node_modules/basiclightbox/dist/basicLightbox.min.css"

const instance = basicLightbox.create(`
		<video controls>
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
		</video>
	`)

const source = lightboxTemplate();


export default {
	source,
	load: () => {
		setTimeout(() => {
			document.querySelector('button.lightbox-open').onclick = instance.show
			document.querySelector('button.lightbox-close').onclick = instance.close
		}, 50)

		return source;
	}
};