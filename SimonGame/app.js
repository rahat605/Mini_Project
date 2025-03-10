let gameSeq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;
let highLevel = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

h3.innerText = `Highest Score : ${highLevel}`;

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}

function usrFlash(btn) {
  btn.classList.add("usrflash");
  setTimeout(function () {
    btn.classList.remove("usrflash");
  }, 1000);
}

function levelUp() {
  userseq = [];
  level++;
  if(level > highLevel){
    highLevel++;
    h3.innerText = `Highest Score : ${highLevel-1}`;
  }
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let ranColor = btns[randIdx];
  let randbtn = document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userseq[idx] == gameSeq[idx]) {
    if (userseq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerText = `Game Over\n Your Score: ${level-1} \n Press any key to play again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 100);
    reset();
  }
}

function btnPress() {
  let btn = this;
  usrFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userseq = [];
  level = 0;
}