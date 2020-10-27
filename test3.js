const boxRef = document.querySelector("#boxes");
// console.log(boxRef);
const inputRef = document.querySelector("#controls>input");
console.dir(inputRef);
const renderRef = document.querySelector(`button[data-action="render"]`);
// console.log(renderRef);
const destroyRef = document.querySelector(`button[data-action="destroy"]`);
// console.log(destroyRef);
renderRef.addEventListener("click", createBoxes(Number(inputRef.value)));
destroyRef.addEventListener("click", () => { });

function createOneBox() {
  const newBoxRef = document.createElement("div");
  let width = 30;
  let height = 30;
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  newBoxRef.style.width = `${width}px`;
  newBoxRef.style.height = `${height}px`;
  newBoxRef.style.backgroundColor = `rgb(${r},${g},${b})`;
  //   boxRef.appendChild(newBoxRef);
  console.log(boxRef);
  return newBoxRef;
}


function createBoxes(amount) {
  amount = Number(inputRef.value);
  const arr = [];
  for (let index = 0; index < amount; index++) {
    arr.push(createOneBox());
    boxRef.append(...arr);
  }
  return boxRef;
}
// destroyBoxes();