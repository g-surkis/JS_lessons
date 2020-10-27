
const scroller = document.querySelector('#scroller');
const sentinel = document.querySelector('#sentinel');
let counter = 10;

function loadItems(n) {
  setTimeout(() => {
    for (let i = 0; i < n; i++) {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = 'Item ' + counter++;
      scroller.appendChild(newItem);
    }

    scroller.appendChild(sentinel);

  }, 1000)

}

const intersectionObserver = new IntersectionObserver(entries => {
  console.log('entries: ', entries);
  if (entries.some(entry => entry.intersectionRatio > 0)) {
    loadItems(10);
    // appendChild will move the existing element, so there is no need to
    // remove it first.

    // scroller.appendChild(sentinel);


    // loadItems(5);
  }
}, { root: scroller });
[{ src: '' }, { src: '' }]


intersectionObserver.observe(sentinel);