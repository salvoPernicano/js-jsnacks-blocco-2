let randomNumber = Math.floor(Math.random() * 100 + 1 );
const start = document.getElementById("playmode");

let guessNumber;
start.addEventListener("click", function(){

    while (guessNumber !== randomNumber) {
        guessNumber = parseInt(prompt("guess my number!"));
        console.log(randomNumber);
        if (guessNumber > randomNumber){
           alert("too high!");
        } else if (guessNumber < randomNumber){
          alert("too low!");
        }
    }
})