'use strict';

// goat constructor

var allGoats = [];

function Goat(name, imageUrl, timesClicked) {
  this.name = name;
  this.imageUrl = imageUrl;
  if (timesClicked) {
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  // prototype method below has the same basic result as if we did these lines in the constructor:
  // this.toString = function() {
  //   return `${this.name} goat, clicked ${this.timesClicked} times`;
  // };
  allGoats.push(this);
}

// Goat.prototype.toString = function() {
//   return `${this.name} goat, clicked ${this.timesClicked} times`;
// };

function getGoatArray(nameOfThePropertyIWant) {
  var answer = [];
  for (var i = 0; i < allGoats.length; i++) {
    answer[i] = allGoats[i][nameOfThePropertyIWant];
  }
  return answer;
}

// is there saved goat data in localstorage?
var savedGoatString = localStorage.getItem('savedGoats');
if (savedGoatString) {
  // if so, use that saved data to create goat instances
  var arrayOfNotGoats = JSON.parse(savedGoatString);
  // turn the not goats into goats
  for (var i = 0; i < arrayOfNotGoats.length; i++) {
    new Goat(arrayOfNotGoats[i].name, arrayOfNotGoats[i].imageUrl, arrayOfNotGoats[i].timesClicked);
  }
  // more code required here
} else {
  // otherwise, actually create our goats manually the old-fashioned way

  new Goat('cruisin', 'images/cruisin-goat.jpg');
  new Goat('float', 'images/float-your-goat.jpg');
  new Goat('away', 'images/goat-away.jpg');
  new Goat('out of hand', 'images/goat-out-of-hand.jpg');
  new Goat('sassy', 'images/sassy-goat.jpg');
}
