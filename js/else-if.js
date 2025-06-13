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
