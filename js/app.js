var number = 0; //variable that is the score
var buttons = document.getElementsByClassName("Button"); //gets the buttons
var music = document.getElementById("audio");

function luh() { //returns a random number between 1 and 10
    return Math.floor(Math.random() * 10);
}

buttons[0].addEventListener("click",function(){ //clicks first button; 1+
    number += 1;
    document.getElementById("score").innerHTML = number;
    music.play();
});

buttons[1].addEventListener("click",function(){ //clicks other button; 10+
    number += 10;
    document.getElementById("score").innerHTML = number;
    music.play();
});

buttons[2].addEventListener("click",function(){ //clicks this button; 50+
    number += 50;
    document.getElementById("score").innerHTML = number;
    music.play();
});

buttons[3].addEventListener("click",function(){ //random increment between 1 and 10 
    number += luh();
    document.getElementById("score").innerHTML = number;
    music.play();
});

//all add to score
//found out that audio cant be played until interacted with 