
var randomdisc1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomdisc1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);


var randomdisc2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomdisc2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);


if(randomdisc1>randomdisc2){
    document.querySelector("h1").innerHTML="player 1 winner";
}
else if(randomdisc1<randomdisc2){
    document.querySelector("h1").innerHTML="player 2 winner";
}
else{
    document.querySelector("h1").innerHTML="draw";
}