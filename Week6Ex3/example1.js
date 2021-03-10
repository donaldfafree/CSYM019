function myLoadEvent() {
    var element = document.getElementById('button');
    document.addEventListener('click', updateChart);
   }

function updateChart() { 
    var element = document.getElementById('button');
    chartData.datasets[0].data = newData;
    chartData.datasets[0].label = newLabel;
    chartData.labels = newLabels;
    chartData1.datasets[0].data = newData;
    chartData1.datasets[0].label = newLabel;
    chartData1.labels = newLabels;
    chart.update();
    chart1.update();
}

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';



var newData = [6.89, 7.0, 7.09, 7.17, 7.25, 7.34, 7.42, 7.51, 7.59, 7.67];
var oldData = [5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7];
var oldLabels = ['2001', '2002', '2003', '2004', '2005', '2006', '2007','2008', '2009', '2010'];
var newLabels = ['2011', '2012', '2013', '2014', '2015', '2016', '2017','2018', '2019', '2020'];
var oldLabel = 'World Population from 2001-2010';
var newLabel = 'World Population from 2011-2020';

var element = document.getElementById('myChart').getContext('2d');
var chartType = 'bar'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: oldLabels,
    datasets: [{
        label: oldLabel,
        
        //backgroundColor: 'rgb(255, 99, 132)',
        //borderColor: 'rgb(255, 99, 132)',
        data: oldData,
        backgroundColor: [
            'rgba(135,206,235, 0.7)',
            'rgba(255,0,0, 0.7)',
            'rgba(128,0,0, 0.7)',
            'rgba(0,0,255, 0.7)',
            'rgba(178,34,34, 0.7)',
            'rgba(224,255,255, 0.7)',
            'rgba(25,25,112, 0.7)',
            'rgba(135,206,235, 0.7)',
            'rgba(255,0,0, 0.7)',
            'rgba(128,0,0, 0.7)'
        ],
        borderColor: [
            'rgba(135,206,235, 1)',
            'rgba(255,0,0, 1)',
            'rgba(128,0,0, 1)',
            'rgba(0,0,255, 1)',
            'rgba(224,255,255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(25,25,112, 1)',
            'rgba(135,206,235, 1)',
            'rgba(255,0,0, 1)',
            'rgba(128,0,0, 1)'
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
                    beginAtZero: false
                 }
            }]
        },
        title: {
            display: true,
            text: 'World Population'

        }
        
    
};



var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});





var element = document.getElementById('myChart1').getContext('2d');
var chartType1 = 'pie'; // The type of chart we want to create

// The data for our dataset
var chartData1 = {
    labels: oldLabels,
    datasets: [{
        label: oldLabel,
        data: oldData,
        //using the patternomaly library to display ground colour
        backgroundColor: [
                pattern.
    draw('square', '#ff6384'),
                pattern.
    draw('circle', '#36a2eb'),
                pattern.
    draw('diamond', '#cc65fe'),
                pattern.
    draw('triangle', '#ffce56'),
                pattern.
    draw('square', '#1f77b4'),
                pattern.
    draw('circle', '#ff7f0e'),
                pattern.
    draw('diamond', '#2ca02c'),
                pattern.
    draw('zigzag-horizontal', '#17becf'),
                pattern.
    draw('triangle', '#7f7f7f'),
                pattern.
    draw('diamond', '#cc65fe')
        ],
        borderColor: [
            'rgba(135,206,235, 1)',
            'rgba(255,0,0, 1)',
            'rgba(128,0,0, 1)',
            'rgba(0,0,255, 1)',
            'rgba(224,255,255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(25,25,112, 1)',
            'rgba(135,206,235, 1)',
            'rgba(255,0,0, 1)',
            'rgba(128,0,0, 1)'
        ],
        borderWidth: '1'

    }]
};

// Configuration options go here
var chartOptions1 = {

    layout: {
            padding: {
               left: '0',
               right: '0',
               top: '30',
                bottom: '0'
            }
    },
  
    title: {
        display: true,
        text: 'World Population'

    },
    legend: {
        display: true,
        fontColor: '#000'
    }
    
       
        
    
};



var chart1 = new Chart(element, {type:chartType1, data: chartData1, options: chartOptions1});

document.addEventListener('DOMContentLoaded', myLoadEvent);

