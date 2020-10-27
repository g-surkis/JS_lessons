// https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/

// const menu = [
//     {
//         type: 'title',
//         text: 'Works of George Macdonald',
//     },
//     {
//         type: 'link',
//         href: '/books',
//         text: 'Books',
//     },
//     {
//         type: 'link',
//         href: '/poetry',
//         text: 'Poems',
//     },
//     {
//         type: 'link',
//         href: '/essays',
//         text: 'Essays',
//     },
//     {
//         type: 'title',
//         text: 'Our Community',
//     },
//     {
//         type: 'link',
//         href: '/about',
//         text: 'About us',
//     },
//     {
//         type: 'link',
//         href: '/forum',
//         text: 'Forum',
//     },
//     {
//         type: 'link',
//         href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
//         text: 'Facebook Group',
//     },
// ];


// function sumLinks(total, item) {
//     return total + ((item.type === 'link') ? 1 : 0);
// }
// const numLinks = menu.reduce(sumLinks, 0);
// console.log('numLinks: ', numLinks);
const {curry} = require('ramda');


const menu = {
    type: 'title',
    text: 'Menu',
    children: [
        {
            type: 'title',
            text: 'Works of George Macdonald',
        },
        {
            type:     'link',
            href:     '/books',
            text:     'Books',
            children: [
                {
                    type: 'link',
                    href: '/books/sir-gibbie',
                    text: 'Sir Gibbie',
                },
                {
                    type: 'link',
                    href: '/books/at-the-back-of-the-north-wind',
                    text: 'At the Back of the North Wind',
                },
                {
                    type: 'link',
                    href: '/books/the-princess-and-the-goblin',
                    text: 'The Princess and the Goblin',
                },
            ]
        },
        {
            type: 'link',
            href: '/poetry',
            text: 'Poems',
        },
        {
            type: 'link',
            href: '/essays',
            text: 'Essays',
            children: [
                {
                    type: 'link',
                    href: '/essays/the-fantastic-imagination',
                    text: 'The Fantastic Imagination',
                },
                {
                    type: 'link',
                    href: '/essays/the-new-name',
                    text: 'The New Name',
                },
            ]
        },
        {
            type: 'title',
            text: 'Our Community',
        },
        {
            type: 'link',
            href: '/about',
            text: 'About us',
            children: [
                {
                    type: 'link',
                    href: '/about/membership',
                    text: 'Community membership',
                },
                {
                    type: 'link',
                    href: '/about/sponsorship',
                    text: 'Community sponsorship',
                    children: [
                        {
                            type: 'link',
                            href: '/about/sponsorship/patreon',
                            text: 'Our Patreon',
                        },
                        {
                            type: 'link',
                            href: '/about/sponsorship/endowments',
                            text: 'Endowments',
                        },
                    ]
                },
            ]
        },
        {
            type: 'link',
            href: '/forum',
            text: 'Forum',
        },
        {
            type: 'link',
            href: 'https://www.facebook.com/groups/GeorgeMacDonaldCommunity/',
            text: 'Facebook Group',
        },
    ]
};


function hasChildren(node) {
    return (typeof node === 'object')
        && (typeof node.children !== 'undefined')
        && (node.children.length > 0);
}



const Tree = {
    reduce: curry(function reduce(reducerFn, init, node) {
        const acc = reducerFn(init, node);
        if (!hasChildren(node)) {
            return acc;
        }
        return node.children.reduce(Tree.reduce(reducerFn), acc);
    }),
    map: curry(function map(mapFn, node) {
        const newNode = mapFn(node);
        if (hasChildren(node)) {
            return newNode;
        }
        newNode.children = node.children.map(Tree.map(mapFn));
        return newNode;
    }),
}

function sumLinks(total, item) {
    return total + ((item.type === 'link') ? 1 : 0);
}

// console.log(Tree.reduce(sumLinks, 0, menu));


function flattenToArray(arr, {children, ...data}) {
    return arr.concat([{...data}]);
}

// console.log(Tree.reduce(flattenToArray, [], menu));


function addChildCount(node) {
    const countstr = (hasChildren(node)) ? ` (${node.children.length})` : '';
    return {
      ...node,
      text: node.text + countstr,
    }
  }
  
//   console.log(Tree.map(addChildCount, menu));

  const prependHost = curry(function prependHost(host, node) {
    if (node.type !== 'link') { return node; }
    return {
      ...node,
      href: node.href.replace(/^\//, host),
    }
  });
  
  console.log(Tree.map(prependHost('http://example.com/'), menu));



  const DOMTree = {
    reduce: curry(function reduce(reducerFn, init, node) {
        console.log({node});
        const acc = reducerFn(init, node);
        if (!hasChildren(node)) { return acc; }
        const children = node.childNodes;
        return [...children].reduce((a, x) => DOMTree.reduce(reducerFn, a, x), acc);
    }),
    map: curry(function map(fn, node) {
        node = fn(node);
        if (!hasChildren(node)) {
            return node;
        }
        [...node.children].forEach(DOMTree.map(fn));
        return node;
    }),
};


function isLink(node) {
    return (node.tagName === 'A');
}

function sumLinks(total, item) {
    return total + (isLink(item) ? 1 : 0);
}

console.log(DOMTree.reduce(sumLinks, 0, nav));


function addChildCount(node) {
    if (!isLink(node)) { return node; }
    const list       = node.parentNode.querySelector('ul');
    const childCount = (list) ? list.children.length : 0;
    if (childCount > 0) {
        node.innerHTML += ` (${childCount})`;
    }
    return node;
}

DOMTree.map(addChildCount, nav);