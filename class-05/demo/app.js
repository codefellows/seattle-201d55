'use strict';

console.log('linked!');

// function myCoolNameForMyFunction() { actual lines of code that are part of that function }
function greetings() {
  console.log('hi!');
  console.log('bye!');
}

// actually call the function! actually do the greetings!
// greetings();

// Let's write a function that prompts the user for their shoe size,console.logs something judging their shoe size, and returns their shoe size.

// global variable: will be accessible in and out of functions
// var userShoeSize;
function shoeSizeJudge() {
  var userShoeSize = Number(prompt('What is your shoe size?'));
  if (userShoeSize < 7) {
    console.log('such small feet!');
  } else {
    console.log('your shoe size is ' + userShoeSize);
  }
  return userShoeSize;
}

// Since our function returns the shoe size, we can save that in a variable for later use
// var globalShoeSize = shoeSizeJudge();
// console.log(globalShoeSize + 3);


// pick 5 numbers between 1 and 99 and return them in an array
function lotteryNumberPicker() {

  var lotteryNumbers = [];

  // set the first thing in lotterynumbers to be 12
  // lotteryNumbers[1] = 12;
  // 5 times, generate a random number and add it to that array
  for(var i = 0; i < 5; i = i + 1) {
    // lotteryNumbers[i] = Math.ceil(Math.random() * 99);
    lotteryNumbers.push(Math.ceil(Math.random() * 99));
  }
  // return that array with 5 things that have been added
  return lotteryNumbers;
}

// pick some numbers between 1 and 99 and return them in an array
// user will specify the quantity of numbers when they call the function
function lotteryNumbers(potato, maxLotteryNumber) {

  var lotteryNumbers = [];

  // set the first thing in lotterynumbers to be 12
  // lotteryNumbers[1] = 12;
  // potato times, generate a random number and add it to that array
  for(var i = 0; i < potato; i = i + 1) {
    // lotteryNumbers[i] = Math.ceil(Math.random() * 99);
    lotteryNumbers.push(Math.ceil(Math.random() * maxLotteryNumber));
  }
  // return that array with 5 things that have been added
  return lotteryNumbers;
}

var lotteryQuantity = Number(prompt('How many lottery numbers do you need?'));
// var lotteryMax = Number(prompt('What is the maximum lottery number allowed?'));
alert(lotteryNumbers(lotteryQuantity, 99));
