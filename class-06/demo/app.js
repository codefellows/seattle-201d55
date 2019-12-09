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
