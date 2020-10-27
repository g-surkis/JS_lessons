/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import res from './mock.js';

//   entry.boundingClientRect
//   entry.intersectionRatio
//   entry.intersectionRect
//   entry.isIntersecting
//   entry.rootBounds
//   entry.target
//   entry.time
const list = document.querySelector('#list');

function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

// const numSteps = 20.0;

let prevRatio = 0.0;
const increasingColor = 'rgba(40, 40, 190, ratio)';
const decreasingColor = 'rgba(190, 40, 40, ratio)';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: buildThresholdList(),
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace('ratio', entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace('ratio', entry.intersectionRatio);
    }
    prevRatio = entry.intersectionRatio;
  });
};

const pFactory = (text, styles = []) => {
  const p = document.createElement('p');
  p.insertAdjacentText('afterbegin', text);
  if (styles.length) {
    p.classList.add(...styles);
  }
  return p;
};

const observer = new IntersectionObserver(callback, options);

const renderList = (arr, obj) => {
  arr.map((item) => {
    const divUser = document.createElement('div');
    divUser.classList.add('user');

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
    divUser.append(img, divInfo);

    divUser.addEventListener('click', function () {
      console.log('top to element', this.offsetTop);
      console.log('element inside viewport', this.getBoundingClientRect());
      console.log('current scrolled document size', window.scrollY);
      window.scrollTo(0, this.offsetTop);
    });

    obj.append(divUser);
    const target = divUser;
    observer.observe(target);

    return divUser;
  });
};

renderList(res.result, list);
