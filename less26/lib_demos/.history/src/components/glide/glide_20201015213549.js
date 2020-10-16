import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import glideTemplate from './glide.hbs';
import "./glide.scss"

const source = glideTemplate();


export default {
    load: () => {

        setTimeout(() => {
            new Glide('.glide').mount({ Controls, Breakpoints });
		}, 50)

      
        return source;
    }
};