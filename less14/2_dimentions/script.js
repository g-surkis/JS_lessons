
import res from '/mock.js'

// const throttle = (func, limit) => {
//     let inThrottle
//     return function() {
//       const args = arguments
//       const context = this
//       if (!inThrottle) {
//         func.apply(context, args)
//         inThrottle = true
//         setTimeout(() => inThrottle = false, limit)
//       }
//     }
//   }

function debounce(f, ms) {

    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}

const list = document.querySelector('#list')
// console.log('list: ', list);

const pFactory = (text, styles = []) => {
    const p = document.createElement('p');
    p.insertAdjacentText('afterbegin', text);
    if (styles.length) {
        p.classList.add(...styles);
    }
    return p;
}

const renderList = (arr, list) => {
    arr.map((item) => {
        const divUser = document.createElement('div');
        divUser.classList.add('user')

        const divInfo = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', item._links.avatar.href);
        img.classList.add('avatar');

        const pName = pFactory(`${item.first_name} ${item.last_name}`, ['name']);
        const pGender = pFactory(item.gender);
        const pEmail = pFactory(item.email);
        const pPhone = pFactory(item.phone);
        const pAddress = pFactory(item.address);

        divInfo.append(img, pName, pGender, pEmail, pPhone, pAddress);
        divUser.append(img, divInfo)

        divUser.addEventListener('click', function () {
            console.dir('-----', this);
            // console.log('top to element', this.offsetTop)
            // console.log('element inside viewport', this.getBoundingClientRect())
            // console.log('current scrolled document size', window.scrollY)
            window.scrollTo(0, this.offsetTop)
        })

        divUser.addEventListener('mouseover', function () {
            this.classList.add('highlighted')
        })

        divUser.addEventListener('mouseout', function () {
            this.classList.remove('highlighted')
        })

        list.append(divUser);
        return divUser;
    })
}

renderList(res.result, list);



const fun = function (event) {

    console.log('----------------------', window.scrollY, new Date().toUTCString());
}


window.addEventListener('scroll', debounce(fun, 500))


// window.addEventListener('resize', (event)=>{
//     console.log('event: ', window.innerWidth);
// console.log('-------------resize---------');
// })


