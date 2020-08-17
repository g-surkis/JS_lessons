const result = [
    {
        title: 'Perry Mason',
        url: 'https://frankensaurus.com/',
        image: 'http://',
        synonyms: [
            {
                title: "a",
                url: 'http://',
            },
            {
                title: "b",
                url: 'http://',
            }
        ]
    },
    {
        title: 'The Pirate Bay',
        url: 'http://',
        synonyms: [
            {
                title: "a",
                url: 'http://',
            },
            {
                title: "b",
                url: 'http://',
            }
        ]
    },
]


let html = '';

for (const item of result) {

     const element = `<div>
        <a href="${item.url}">${item.title}</a>
        <p></p>
     </div>`

     html = html + element;    
}


console.log('html: ', html);
