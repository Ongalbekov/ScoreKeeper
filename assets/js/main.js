console.log('it works');

// ===================Home====================
const home = document.querySelector("#score1");
let homesore1 = 0;

function score11() {
homesore1 += 1;
home.innerHTML = homesore1;
}
function score12() {
    homesore1 += 2
home.innerHTML = homesore1;
}
function score13() {
    homesore1 += 3;
    home.innerHTML = homesore1;
}

// ===================Away====================
const away = document.querySelector("#score2");
let homescore2 = 0;

function score21() {
homescore2 += 1;
away.innerHTML = homescore2;
}
function score22() {
    homescore2 += 2
away.innerHTML = homescore2;
}
function score23() {
    homescore2 += 3;
    away.innerHTML = homescore2;
}
// ===================reset====================

function reset(){
  homesore1 = 0;
  homescore2 = 0;
  home.innerHTML=0;
  away.innerHTML=0;
}

