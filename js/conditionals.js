const answer = prompt('Which planet is closest to the sun?')

//Two doors in "if...else" statement, true or false

//Video said to use .toUpperCase(), to show masery, I did .toLowerCase()

if (answer.toLowerCase() === 'mercury') {
  console.log("That's correct!")
} else {
  console.log("Sorry, that's incorrect.")
}

//Double Equal vs Triple Equal
/*
  '3' == 3 (true) --> Different data types, same value
  '3' === 3 (false) --> Different data types (strict equality)
*/

//Not Equal To
/*
  10 !== 9          (true)
  '10' !== 10       (true)  (strict)
  '10' != 10        (false) (not strict)
  'Java' !== 'java' (true)
*/
