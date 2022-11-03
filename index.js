const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const button = document.getElementById("btn");
const scoreEl = document.getElementById("score");

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

let score = 0
if (!score) {
  scoreEl.innerText = `Score: 0`
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  const userAns = Number(inputEl.value);
  if (userAns === correctAns) {
    score = score + 1;
    scoreEl.innerText = `Score: ${score}`
  } else {
    score = score - 1;
    scoreEl.innerText = `Score: ${score}`
  }
});

