'use strict';

console.log('results page!');

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
