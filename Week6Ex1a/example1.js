var element = document.getElementById('myChart').getContext('2d');

var chartType = 'bar'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        
        //backgroundColor: 'rgb(255, 99, 132)',
        //borderColor: 'rgb(255, 99, 132)',
        data: [15, 10, 5, 2, 20, 30, 45],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: '1'

    }]
};

// Configuration options go here
var chartOptions = {

    layout: {
            padding: {
               left: '0',
               right: '0',
               top: '30',
                bottom: '0'
            }
    },
    //options: {
      //  legend: {
        //    display: true,
          //  labels: {
            //    fontColor: 'rgb(255, 99, 132)'
            //}
       // }
   // }

};
// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});