//declare variables 
let attempt = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);
let score = 0;

//access html components
const guess = document.getElementById("guess");
const submit = document.getElementById("Submit");
const hint = document.getElementById("hint");
const attemptstxt = document.getElementById("attempts");
const viewscore = document.getElementById("viewScores");
const scores = document.getElementById("scores");
const restart = document.getElementById("restartGame");


restart.addEventListener("click" , function() {
    // reset global game state (do NOT redeclare with `let` — that would create local variables)
    attempt = 0;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    
    // reset UI
    guess.value = "";
    hint.textContent = "";
    attemptstxt.textContent = "Attempts: " + attempt;
    // scores.textContent = "";
});

viewscore.addEventListener("click" , function() {
    scores.textContent = " Your Score is: " + score;
})

//add EventListner
submit.addEventListener("click" , checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempt++;

    if(userValue === randomNumber){
        hint.textContent = "Congratulations !! You guessed it right!";
        score++;
    } else if (userValue < randomNumber) {
        hint.textContent = "Too Low ! Try Again.";
    } else {
        hint.textContent = "Too High ! Try Again.";
    }
    attemptstxt.textContent = " Attempts:" + attempt;
    // viewscore.textContent = " Score:" + score;
}