
var randomNumber1=Math.ceil(Math.random()*6);
var ace="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",ace);

var randomNumber2=Math.ceil(Math.random()*6);
var ace2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ace2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" Player 1 wins!";
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins! ";
}
