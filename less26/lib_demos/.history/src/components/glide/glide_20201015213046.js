import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import "glide.scss"




export default {
    source,
    load: () => {
        new Glide('.glide').mount({ Controls, Breakpoints })
    }
};