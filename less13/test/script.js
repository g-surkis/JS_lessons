
// const editor = document.querySelector('.editor');
// const actions = document.querySelector('.actions');
// const dishes = document.querySelector('.dishes');



// const domFactory = (tagName)=>{
//     return document.createElement(tagName)
// }


// const div = document.createElement('div');

// console.log('div: ', div);
// div.innerHTML = '<p class="text">Pellentesque habitant.p>'




// dishes.after(div)


























// // const saveBtn = document.querySelector('.editor button[data-action="save"]');
// // const closeBtn = document.querySelector('.editor button[data-action="close"]');


// // console.log('closeBtn: ', closeBtn.getAttribute('data-action'));

// // const saveBtnAction = saveBtn.dataset.action;
// // console.log(saveBtnAction); //save

// // const closeBtnAction = closeBtn.dataset.action;
// // console.log(closeBtnAction); //close


const categorRef = document.querySelectorAll(".item");
console.log(categorRef);
const listRef = categorRef.forEach((list) =>
  console.log(
  `Категорія: ${list.children[0].textContent}
   Кількість елементів: ${list.children[1].children.length}`
  )
);