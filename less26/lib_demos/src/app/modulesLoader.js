

import components from '../components'


const modulesLoader = (module) => {
    return components[module.moduleName];
}



export default modulesLoader