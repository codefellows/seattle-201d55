'use strict';

console.log('js linked!');

// Constructor!
// Constructor names tend to be a singular noun
// Take in values that we want as parameters
function Pet(breedOfThisPet, weight, descriptionWords) {
  // Inside constructor, set up the properties we want for objects created with this constructor
  // set key/value pairs on the new object using contextual this
  this.breed = breedOfThisPet;
  // name of parameter and name of property can be the same or different
  this.weight = weight;
  this.descriptionWords = descriptionWords;
}

// Pet.prototype.functionName = function(any, parameters, go, here)
// Now, any pet created with the Pet constructor will be able to call this method
// And by using contextual this, we can access the descriptionWords of that specific pet object
Pet.prototype.getDescription = function() {
  var randomIndex = Math.floor(Math.random() * this.descriptionWords.length);
  return this.descriptionWords[randomIndex];
};

// Add a prototype method to render a pet to the table
// Because it's a prototype method, all pet instances will be able to call this method
Pet.prototype.render = function() {
  var animalTable = document.getElementById('animal-table');

  // Create the tr and the td's to hold this pet's data
  var petRow = document.createElement('tr');

  // create breed td, add it to the row
  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  // create weight td, add it to the row
  var weightCell = document.createElement('td');
  weightCell.textContent = this.weight;
  petRow.appendChild(weightCell);

  // also add description
  var descriptionCell = document.createElement('td');
  descriptionCell.textContent = this.descriptionWords;
  petRow.appendChild(descriptionCell);

  // add to page by appending the new row of data to the table
  animalTable.appendChild(petRow);
};

var firstDog = new Pet('Weimaraner', 35, ['hungry', 'blue eyes', 'good boy', 'cute']);
var firstCat = new Pet('American shorthair', 5, ['inquisitive', 'needy', 'small', 'whiskery']);
var lizard = new Pet('iguana', 8, ['green', 'scaly']);

var pets = [firstDog, firstCat, lizard];

var animalHolder = document.getElementById('animal-holder');
animalHolder.textContent = 'the animals go here';

// error we initially got:
// cannot set textContent of null
// which tells us animalHolder is null

// create a p tag inside of the animalHolder for each pet
for (var i = 0; i < pets.length; i++) {
  pets[i].render();
}

// take in the event parameter so that we can prevent the default
function handleFormSubmitted(event) {
  // prevent the default (because the default is that submitting a form refreshes the page)
  event.preventDefault();
  console.log(event);
  // actually add a new pet to our table

  // get the data about the new pet from the inputs
  var breedInput = document.getElementById('breed');
  var breedValue = breedInput['value'];
  var weightInput = document.getElementById('weight');
  var weightValue = weightInput.value;
  var descriptionInput = document.getElementById('description');
  var descriptionValue = descriptionInput.value;
  // use our constructor to create a new pet instance
  var newPet = new Pet(breedValue, weightValue, descriptionValue);
  // render that pet instance to the page
  newPet.render();
}

// set up event listener on the form
// 1. Which element?
var formElement = document.getElementById('new-pets');
// 2. Which event am I listening for?
// 3. What code should run when that event happens?
formElement.addEventListener('submit', handleFormSubmitted);
