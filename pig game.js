const dice = document.querySelector(".dice");
const diceImg = document.querySelector(".dice-img");
const smallScores = document.querySelectorAll(".small-score");
const holdBtn = document.querySelector(".hold");
const scores = document.querySelectorAll(".main-score");
const semi_contain = document.querySelectorAll(".semi-container");
const newGame = document.querySelector(".newGame");
const winner = document.querySelector(".winner");

let i = 0;

// DICE FUNCTION
const diceFunction = function (index) {
  // RANDOM NUMBER
  let randomN = Math.trunc(Math.random() * 6) + 1;
  smallScores[index].innerHTML = Number(smallScores[index].innerHTML) + randomN;
  if (randomN === 1) holdFunction();
  diceImg.style.display = "block";
  diceImg.firstElementChild.src = `images/dice${randomN}.png`;
};

// DICE EVENT-HANDLER
dice.addEventListener("click", function () {
  diceFunction(i);
});

// HOLD EVENT-HANDLER
holdBtn.addEventListener("click", function () {
  scores[i].innerHTML = Number(scores[i].innerHTML) + Number(smallScores[i].innerHTML);
  if (Number(scores[i].innerHTML) >= 100) {
    winner.innerHTML = `player ${i + 1} win the game`;
    winner.style.display = "block";
    holdFunction();
    dice.disabled = true;
    holdBtn.disabled = true;
  }
  holdFunction();
});

const holdFunction = function () {
  smallScores[i].innerHTML = "0";
  i = (i + 2 + 1) % 2;
  semi_contain[0].classList.toggle("passive");
  semi_contain[1].classList.toggle("passive");
};

// NEW GAME
newGame.addEventListener("click", function () {
  smallScores[0].innerHTML = "0";
  smallScores[1].innerHTML = "0";
  scores[0].innerHTML = "0";
  scores[1].innerHTML = "0";
});
