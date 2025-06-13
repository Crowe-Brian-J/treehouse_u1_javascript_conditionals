//Booleans must be either true or false

let correctGuess = false
const number = 6
const guess = prompt('Guess a number between 1 and 10.')

//'guess' returns string --> plus sign in front (+) converts 'guess' to number

/*
  1. Test if a player's guess matches the number
  2. Change the value of correctGuess if they match
*/

if (+guess === number) {
  correctGuess = true
}

//Because correctGuess is a boolean value, no need to strictly equal true

if (correctGuess) {
  console.log('You guessed the number!')
} else {
  console.log(`Sorry, the number was ${number}`)
}
