var diceRollOne = Math.floor(Math.random() * 6) + 1;
var diceRollTwo = Math.floor(Math.random() * 6) + 1;

document.getElementById("rnd1").innerText = `random dice value:${diceRollOne}`;
document.getElementById("rnd2").innerText = `random dice value:${diceRollTwo}`;
