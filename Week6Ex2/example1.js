var element = document.getElementById('myChart').getContext('2d');

var chartType = 'bar'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['Man City', 'Man Utd', 'Liverpool', 'Chelsea', 'Arsenal', 'Tottenham', 'Leicester'],
    datasets: [{
        label: 'Winning Statistics of top seven teams in the English premierleague',
        
        //backgroundColor: 'rgb(255, 99, 132)',
        //borderColor: 'rgb(255, 99, 132)',
        data: [90, 70, 60, 65, 50, 50, 65],
        backgroundColor: [
            'rgba(135,206,235, 0.7)',
            'rgba(255,0,0, 0.7)',
            'rgba(128,0,0, 0.7)',
            'rgba(0,0,255, 0.7)',
            'rgba(178,34,34, 0.7)',
            'rgba(224,255,255, 0.7)',
            'rgba(25,25,112, 0.7)'
        ],
        borderColor: [
            'rgba(135,206,235, 1)',
            'rgba(255,0,0, 1)',
            'rgba(128,0,0, 1)',
            'rgba(0,0,255, 1)',
            'rgba(224,255,255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(25,25,112, 1)'
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
    
        scales: {
            yAxes: [{
                ticks: { 
                    beginAtZero: true
                 }
            }]
        },
        
    
};
// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});