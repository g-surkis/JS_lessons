
import res from '/mock.js'

const list = document.querySelector('#list');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }

let callback = (entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry.target.children[1].firstChild.textContent, entry.intersectionRatio);
       
        if(entry.intersectionRatio > 0.6){
            entry.target.classList.add('intersected')
        } else {
            entry.target.classList.remove('intersected') 
        }
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio      
      //   entry.intersectionRect
      //   entry.isIntersecting      
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  }
  

const pFactory = (text, styles = []) =>{
    const p = document.createElement('p');
    p.insertAdjacentText('afterbegin', text);
    if(styles.length){
        p.classList.add(...styles);
    }
    return p;
}

const renderList = (arr, list)=>{
    arr.map((item, i)=>{
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
        list.append(divUser);

        let observer = new IntersectionObserver(callback, options);
        let target = divUser;
        observer.observe(target);

        return divUser;
    })
}

renderList(res.result, list);


  
  
  

console.log('list: ', list.clientWidth);