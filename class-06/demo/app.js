'use strict';

console.log('js linked!');


var descriptionWords = ['a', 'b', 'c'];
var firstDog = { 
  weight: 35, 
  breed: 'Weimaraner', 
  imgUrl: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg',
  descriptionWords: ['hungry', 'blue eyes', 'good boy', 'cute'],
  getDescription: function() {
    // get one of the description words at random about this dog
    // contextual this: look inside the object on which the function was called to find the key
    return this.descriptionWords[
      Math.floor(Math.random() * this.descriptionWords.length)
    ];
  }
};

var firstCat = {
  weight: 5,
  breed: 'American shorthair',
  descriptionWords: ['inquisitive', 'needy', 'small', 'whiskery'],
  getDescription: function() {
    return this.descriptionWords[Math.floor(Math.random() * this.descriptionWords.length)];
  }
};


var pets = [firstDog, firstCat];

var animalHolder = document.getElementById('animal-holder');
animalHolder.textContent = 'the animals go here';

// error we initially got:
// cannot set textContent of null
// which tells us animalHolder is null

// create a p tag inside of the animalHolder for each pet
for (var i = 0; i < pets.length; i++) {
  // first, ask the document to create an element for us
  var newParagraph = document.createElement('p');
  newParagraph.textContent = `An adoptable ${pets[i].breed} that is ${pets[i].getDescription()}`;
  // then, append that element to the element on the page
  animalHolder.appendChild(newParagraph);
}
