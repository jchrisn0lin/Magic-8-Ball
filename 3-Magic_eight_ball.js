//Declare name variable that the user can fill out
let userName = 'John';

//Decide how to greet the user whether they entered a user name or not
userName !== '' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Declare question variable that the user can type and ask
let userQuestion = 'Will I go to Mars one day ?';

//State the question asked by the user, addressing the entered user name if any
userName !== '' ? console.log(`${userName}, you asked "${userQuestion}"`) : console.log(`You asked "${userQuestion}"`);

//Generate a random number between 0 and 7 (random number between >=0 and <1, then round down to smaller int < or = to the result)
let randomNumber = Math.floor(Math.random() * 8);

//Declare the value of eightBall which will be the value of randomNumber
let eightBall = '';

//Select a Magic Eight Ball response based on each one the possible generated random number and assign it to randomNumber
if (randomNumber === 0) {
  eightBall = 'It is certain';
  } else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
  } else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
  } else {
    eightBall = 'Signs point to yes';
  }

//Log the Magic Eigh Ball's answer, the value of eightBall
console.log(`The Magic Eight Ball's answer is: "${eightBall}"`);
