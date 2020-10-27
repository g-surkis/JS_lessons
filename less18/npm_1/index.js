// import map from 'lodash/map'
import func from './script.js'

import * as myModule from './script1.js'

const { SURNAME, NAME, A } = myModule;
console.log('SURNAME, NAME: ', SURNAME, NAME, A);

console.log('func: ', func());




// const { hello, goodbye } = require('./common');