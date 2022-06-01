const counter = document.querySelector('#counter');
const text = document.querySelector('#textarea');
const maxCaract = 500;

function countLetters() {
  if (text.value.lenght > 0) {
counter.innerText = maxCaract - text.value.lenght;
} else {
  counter.innerText = maxlimit;
};
console.log(counter.innerText);
}
countLetters();
