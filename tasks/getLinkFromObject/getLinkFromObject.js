const routes = [
  {
    pathname: '/connections/[id]',
    query: { id: '861zwdLv3Z' },
  },
  {
    pathname: '/posts/[slug]/[id]/replies/[replyId]',
    query: {
      autoplay: 'false',
      id: '4DVJDVrLm8',
      order: 'relevance',
      replyId: '119',
      slug: 'Senior_Backend-Developer_nodeJS_(f/m/d)',
    },
  },
  {
    pathname: '/posts/[slug]/[id]',
    query: {
      autoplay: 'false',
      id: '4DVJDVrLm8',
      slug: 'Senior_Backend-Developer_nodeJS_(f/m/d)',
    },
  },
  {
    pathname: '/my-posts',
    query: {},
  },
  {
    pathname: '/connections/[id]',
    query: { id: '861zwdLv3Z' },
  },
];

const getRouteFromObject = (route) => {
  //   your code
}

const handleAllRoutes = (arr, handler) => {
  //   your code

}

console.log(handleAllRoutes(routes, getRouteFromObject))

/*
[
    '/connections/861zwdLv3Z',
    '/posts/Senior_Backend-Developer_nodeJS_(f/m/d)/4DVJDVrLm8/replies/119?order=relevance&autoplay=false',
    '/posts/Senior_Backend-Developer_nodeJS_(f/m/d)/4DVJDVrLm8?autoplay=false',
    '/my-posts',
    '/connections/861zwdLv3Z'
]
*/