var userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
    computerChoice = "rock";
}
else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    //Player Choice is Rock
    else if (choice1 === "rock") {
      if(choice2 === "scissors") {
        return "Rock Wins";
      }
      else {
        return "Paper Wins";
      }
    }
    //Player Choice is Paper
    else if(choice1 === "paper") {
      if(choice2 === "rock") {
        return "Paper Wins";
      }
      else {
        return "Scissors Wins";
      }
    }
    //Player Choice is Scissors
    else if(choice1 === "scissors") {
      if(choice2 === "paper") {
        return "Scissors Wins";
      }
      else {
        return "Rock Wins";
      }
    }
};
compare(userChoice, computerChoice);
//Addons
// What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
// What if players in the game could also choose Rope in this game?
// In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?
