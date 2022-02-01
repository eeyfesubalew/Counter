const increase = document.querySelector(".btn-increase");
const decrease = document.querySelector(".btn-decrease");
const number = document.querySelector(".number");
let num = 0;
number.textContent = num;
increase.addEventListener("click", () => {
  num++;

  number.textContent = num;
});
decrease.addEventListener("click", () => {
  num--;
  number.textContent = num;
});
