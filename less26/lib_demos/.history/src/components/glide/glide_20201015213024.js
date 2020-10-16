import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import "glide.scss"


new Glide('.glide').mount({ Controls, Breakpoints })




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