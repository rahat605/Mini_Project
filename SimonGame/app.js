let gameSeq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started!");
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
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let ranColor = btns[randIdx];
  let randbtn = document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userseq[idx] == gameSeq[idx]) {
    if (userseq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    console.log("wrong start over");
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
