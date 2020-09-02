// https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/

const menu = [
    {
        type: 'title',
        text: 'Works of George Macdonald',
    },
    {
        type: 'link',
        href: '/books',
        text: 'Books',
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
    },
    {
        type: 'title',
        text: 'Our Community',
    },
    {
        type: 'link',
        href: '/about',
        text: 'About us',
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
];


function sumLinks(total, item) {
    return total + ((item.type === 'link') ? 1 : 0);
}
const numLinks = menu.reduce(sumLinks, 0);
console.log('numLinks: ', numLinks);


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

import {curry} from 'ramda';

const Tree = {
    reduce: curry(function reduce(reducerFn, init, node) {
        // Calculate the reduced value for this node.
        const acc = reducerFn(init, node);

        if (!hasChildren(node)) {
            return acc;
        }
        // But what if there are children?
    }),
}