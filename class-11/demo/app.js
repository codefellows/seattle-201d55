'use strict';

console.log('js linked!');

var img1Clicked = 0;
var img2Clicked = 0;
// create a function to store clicks
function imageWasClicked(event) {
  console.log('an image was clicked');
  if(event.srcElement.id === '1') {
    img1Clicked++;
  } else if (event.srcElement.id === '2') {
    img2Clicked++;
  }

  if(img1Clicked + img2Clicked >= 5) {
    // we made it to 5 clicks
    var footerEl = document.getElementsByTagName('footer')[0];
    footerEl.textContent = `You picked goat 1 ${img1Clicked} times and goat 2 ${img2Clicked} times.`;
  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do
var imageElements = document.getElementsByTagName('img');
for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}
