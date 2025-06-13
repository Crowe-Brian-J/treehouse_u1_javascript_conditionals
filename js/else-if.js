//You only get to second (third, fourth, fifth) if statement when previous, and all preceding, if is false

//Spelling matters
const weather = 'rains'

if (weather === 'sun') {
  console.log("It's sunny, so I'm going swimming.")
} else if (weather === 'rain') {
  console.log("It's raining, so I'm will read a book.")
} else if (weather === 'snow') {
  console.log("It's snowing, so I'm going sledding.")
} else {
  console.log("I don't know what I'm doing today.")
}

/* Testing two conditions uses the '&&' operator. If both are true, then true; if any are false, then false
 age = 25 --> if (20 < age && age < 30) --> true
 age = 30 -->           "               --> false
 age = 10 -->           "               --> false
 */

/* If you want to check if either condition is true, use the '||' operator. If either are true, then true; if both are false, then false
 */

//Use comments, like this single-line one, to document your code, it starts with '//'

/*
For multiple multi-line code, use a beginning slash with an asterisk, and end with an asterisk and a slash

Use them because coming back to your code isn't easy, for you or another developer
Also use them to comment out active code in testing.
Remember to use them where needed, but not to over do it.
*/
