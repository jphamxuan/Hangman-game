
//array of letters
var letters = ["a", "b", "c", "d", "e","f","g","h","i", "k", 
"l", "m","n", "o","p", "q", "r", "s", "t", "u", "v", "w",
"x","y", "z"];

var won = 0;

var lost = 0;

var guesses = 9;

var usedArray = [];

var psychicLetter= psychicLetter;

//selects random letter
var psychicLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(psychicLetter);


//uses random number

function stuff(){
    psychicLetter = letters[math.floor(math.random() * letters.length)];
    console.log(psychicLetter);
}


//player presses key

document.onkeydown = function (event){
    var playerGuess = event.key;

//correct guess
if (playerGuess == psychicLetter){
    won++;
    guesses= 10
    usedArray = [];

}

//incorrect guess
stuff();

if( playerGuess!== psychicLetter){
    guesses--;

}

//when guesses = 0

if(guesses ==0){
    lost ++;
    usedArray = [];
    guesses = 10;
}



document.getElementById('won').innerHTML = won;
document.getElementById('lost').innerHTML = lost;
document.getElementById('guesses').innerHTML = attempts;

}

};