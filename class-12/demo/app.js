'use strict';

console.log('js linked!');
// console.log(coolStuff);

var imageElements = document.getElementsByTagName('img');
var goatIndex1 = 0;
var goatIndex2 = 1;
// goat constructor

var allGoats = [];

function Goat(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allGoats.push(this);
}

function getGoatArray(nameOfThePropertyIWant) {
  var answer = [];
  for (var i = 0; i < allGoats.length; i++) {
    answer[i] = allGoats[i][nameOfThePropertyIWant];
  }
  return answer;
}
// actually create our goats

new Goat('cruisin', 'images/cruisin-goat.jpg');
new Goat('float', 'images/float-your-goat.jpg');
new Goat('away', 'images/goat-away.jpg');
new Goat('out of hand', 'images/goat-out-of-hand.jpg');
new Goat('sassy', 'images/sassy-goat.jpg');

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

    // chart code thanks to https://www.chartjs.org/docs/latest/
    var ctx = document.getElementById('resultsChart').getContext('2d');
    // eslint-disable-next-line no-undef
    new Chart(ctx, {
      type: 'bar',
      data: {
        // what does labels do?
        labels: getGoatArray('name'),
        // what does datasets do?
        // it's an array of objects
        datasets: [{
          // what does this label do?
          // key, legend
          label: '# of Votes',
          // what does this data do?
          // actually the values in the chart
          data: getGoatArray('timesClicked'),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }
}

// set up our images to call that function when there is a click
// what element, which event, what to do

for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}
