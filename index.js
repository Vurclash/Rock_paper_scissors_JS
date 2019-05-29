var options = ["rock", "paper", "scissors"];

var userChoice;
var compChoice;
var person;
var defeat;

var choices = document.getElementsByClassName("choice");

function compRock () {
 return document.getElementById('compSelection').src = "https://i.redd.it/brxxveprs2e01.png"
}

for(var i = 0; i < choices.length; i++){
   choices[i].addEventListener("click", function() {
    userChoice = this.id; 
    compChoice = Math.floor(Math.random() * options.length)
    if (userChoice == "rock") {
      return document.getElementById('userSelection').src = "https://i.redd.it/brxxveprs2e01.png"
    } else if (userChoice == "paper") {
      return document.getElementById('userSelection').src = "https://images-na.ssl-images-amazon.com/images/I/410GWriJ-mL._AC_SY400_.jpg"
    } else if (userChoice == "scissors") {
      return document.getElementById('userSelection').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkVznYuVNpWdVy-nITnK2rWkOZk5_1FavPN-WpiRSJsOVfBFe"
    } else if (compChoice == 0) {
      return document.getElementById('compSelection').src = "https://i.redd.it/brxxveprs2e01.png"
    } else if (compChoice == 1){
      return document.getElementById('compSelection').src = "https://images-na.ssl-images-amazon.com/images/I/410GWriJ-mL._AC_SY400_.jpg"
    } else if (compChoice == 2){
      return document.getElementById('userSelection').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkVznYuVNpWdVy-nITnK2rWkOZk5_1FavPN-WpiRSJsOVfBFe"
    } else if (userChoice == compChoice){
      return "It's a draw"
    } else if (userChoice == "scissors" && compChoice == 0) {
      return "You've lost"
    } else if (userChoice == "paper" && compChoice == 2) {
      return "You've lost"
    } else if (userChoice == "rock" && compChoice == 1) {
      return "You've lost"
    } else {
      return "You've won"
    }
  }) 

}

document.getElementById('compSelection').addEventListener("click", compRock)

