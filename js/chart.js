/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
let chart_data = JSON.parse(localStorage.getItem('user data'));
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Get Healthy', 'Lose Weigth', 'Maintain Weight'],
    datasets: [{
      label: 'Goals Statistics',
      data: chart_data,
      backgroundColor: [
        '#23689b',
        '#413c69',
        '#a6a7a1',
      ],
      borderColor: [
        'rgb(44, 43, 43)',
        'rgb(44, 43, 43)',
        'rgb(44, 43, 43)',
      ],
      borderWidth: 1
    }]
  },
});
