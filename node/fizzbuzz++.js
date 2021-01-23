const fs = require("fs");

const isFizz = (input) => input % 3 === 0;
const isBuzz = (input) => input % 5 === 0;
const isPrime = (input) => {
  let isPrime = true;

  if (input === 1) {
    isPrime = false;
  }

  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

const getFizzBuzz = (input) => {
  let string = `${input}`;

  if (isPrime(input)) {
    string = string + " FiZZBUZZ++";
  } else if (isFizz(input) && isBuzz(input)) {
    string = string + " FIZZBUZZ";
  } else if (isFizz(input)) {
    string = string + " FIZZ";
  } else if (isBuzz(input)) {
    string = string + " BUZZ";
  }

  return `${string} \n`;
};

let fizzBuzzString = "";

for (let i = 1; i <= 500; i += 1) {
  const addition = getFizzBuzz(i);
  console.log(addition);
  fizzBuzzString = fizzBuzzString + addition;
}

fs.appendFile("./node/fizzbug.log", fizzBuzzString, (err) => {
  if (err) {
    console.error(err);
  }

  console.log("Writing to fizzbuzz.log");
});
