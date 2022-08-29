// alert(randomNumber1);

                      // DICE1
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDiceImg = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);

                        // DICE2
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);

document.querySelector("h1").innerHTML = " REFRESH ME";
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = " 🚩PLAYER 1 WINS";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = " 🚩PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML = " DRAW";
}
