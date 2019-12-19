'use strict';

console.log('js linked!');
// console.log(coolStuff);

var imageElements = document.getElementsByTagName('img');

var goatIndex1 = 0;
var goatIndex2 = 1;

var totalClicks = 0;
// create a function to store clicks
function imageWasClicked(event) {
  console.log('an image was clicked');
  totalClicks++;
  if(event.srcElement.id === '1') {
    allGoats[goatIndex1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allGoats[goatIndex2].timesClicked++;
  }

  // pick 2 random goats to display
  var nextGoatIndex1 = Math.floor(Math.random() * allGoats.length);
  while((nextGoatIndex1 === goatIndex1) || (nextGoatIndex1 === goatIndex2)) {
    nextGoatIndex1 = Math.floor(Math.random() * allGoats.length);
  }
  var nextGoatIndex2 = Math.floor(Math.random() * allGoats.length);
  while((nextGoatIndex2 === goatIndex1) || (nextGoatIndex2 === goatIndex2) || (nextGoatIndex2 === nextGoatIndex1)) {
    nextGoatIndex2 = Math.floor(Math.random() * allGoats.length);
  }
  goatIndex1 = nextGoatIndex1;
  goatIndex2 = nextGoatIndex2;

  // display the goats
  imageElements[0].src = allGoats[goatIndex1].imageUrl;
  imageElements[1].src = allGoats[goatIndex2].imageUrl;

  if(totalClicks >= 5) {
    // we made it to 5 clicks

    // save the goat data to localstorage
    localStorage.setItem('savedGoats', JSON.stringify(allGoats));
    // chart code thanks to https://www.chartjs.org/docs/latest/
  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do

for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}

var nameForm = document.getElementById('nameForm');
nameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // DONE grab what the user typed in
  var nameTheUserTypedIn = document.getElementById('name').value;
  console.log(nameTheUserTypedIn);
  // save that into localstorage
  localStorage.setItem('userName', nameTheUserTypedIn);
  // show that info on the page
  nameForm.textContent = nameTheUserTypedIn;
});

var savedName = localStorage.getItem('userName');
if(savedName) {
  nameForm.textContent = savedName;
}
