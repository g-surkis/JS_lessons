const baseUrl = 'http://localhost:3000';

function partial(fn, ...args) {
  return (...rest) => {
    return fn.apply(this, args.concat(rest))
  }
}

const getEndpoint = (url, resource, id) => {
  return `${url}/${resource}${id ? `/${id}` : ''}`;
}

const withBase = partial(getEndpoint, baseUrl);



const productsEndpoint = withBase('products')
const productsDetailEndpoint = withBase('products', 1)

console.log('products', productsEndpoint);
console.log('products detail', productsDetailEndpoint);