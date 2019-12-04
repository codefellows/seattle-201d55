'use strict';

console.log('js linked!');

// practicing loops: countdown!

var timeToLiftoff = 10;

// console.log a countdown from 10 to 1, then liftoff!
// console.log(timeToLiftoff); // should log 10
// timeToLiftoff = timeToLiftoff - 1;
// console.log(timeToLiftoff); // should log 9
// timeToLiftoff = timeToLiftoff - 1;
// keep doing that 8 more times
// would be a sad piece of code

// instead, let's use a loop!
// loop should stop when timeToLiftoff is 0
// so loop should keep going while timeToLiftoff is more than 0
while (timeToLiftoff > 0) {
  console.log(timeToLiftoff);
  timeToLiftoff = timeToLiftoff - 1;
}

console.log('liftoff');

var fruits = ['apple', 'banana', 'cantaloupe', 'dragonfruit', 'elderberry'];
// console.log(fruits[0]);
// fruits[0] = 'apricot';
// console.log(fruits[0]);

// var i = 0;
// while(i < fruits.length) {
//   console.log(fruits[i]);
//   i = i + 1;
// }

// ten times, do the inner loop
for(var numberOfTimes = 0; numberOfTimes < 10; numberOfTimes = numberOfTimes + 1) {
  // loop through all of the fruits in the array and print them out
  for(var i = 0; i < fruits.length; i = i + 1) {
    console.log(fruits[i]);
  }
}

