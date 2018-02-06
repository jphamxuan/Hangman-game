var won = 0;
var lost = 0;
var guesses = 10;
var usedArray = [];
var psychicLetter = psychicLetter;
var letters = ["a", "b", "c", "d", "e","f","g","h","i", "k", 
"l", "m","n", "o","p", "q", "r", "s", "t", "u", "v", "w",
"x","y", "z"];


//generates Psychic Letter
psychicLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(psychicLetter);

//uses Psychic letter
function jsGuess() {
      psychicLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(psychicLetter);

}

//players key input
document.onkeyup = function (event) {
      var playerGuess = event.key;

    //right answer
      if (playerGuess === psychicLetter) {
            won++;
            guesses = 10;
            usedArray = [];
            alert("You Won! You're a Psychic Harry!")

      }

      //wrong answer
      jsGuess();
      if (playerGuess !== psychicLetter) {
            guesses--;

      }

      //when no guesses are left
      if (guesses == 0) {
            lost++;
            usedArray = [];
            guesses = 10;
            alert("Sorry, You're not Psychic. Try again.")
      }

      else {
            //pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            $("#playerGuess").html(usedArray);
            console.log(usedArray);

      }
     //writes  values of won, lost and guesses
      $("#won").html("Wins: "+ won);
      $("#lost").html("Lost: " + lost);
      $("#guesses").html("Guesses Left: " + guesses);

}