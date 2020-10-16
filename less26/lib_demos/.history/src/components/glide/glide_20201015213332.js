import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import glideTemplate from './glide.hbs';
import "./glide.scss"




export default {
    load: () => {
        new Glide('.glide').mount({ Controls, Breakpoints })
    }
};