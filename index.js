let randomnumber1=Math.floor(Math.random()*6+1);
 var randomDice1="Images/dice"+randomnumber1+ ".png";

let randomnumber2=Math.floor(Math.random()*6+1);

var randomDice2="Images/dice"+randomnumber2+ ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDice1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);

if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="Game tied!";
}else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!!";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins!!!!";
}