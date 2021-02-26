

window.onload = function() {
    //arrays = [[1,2,3,4,5],[100,97,85,50,20],[0,3,15,50,70],[0,0,0,0,10]];
    var ctx1 = document.getElementById('simulationChartSIRD');
    simulationChartSIRD = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: arrays[0],
            datasets: [{
                label: 'Susceptible',
                data: arrays[1],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Infected',
                data: arrays[2],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Recovered',
                data: arrays[3],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Dead',
                data: arrays[4],
                backgroundColor: [
                    'rgba(10, 10, 10, 0.2)'

                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: false,
            responsive: true
        }
    });
    var ctx2 = document.getElementById('simulationChartSIR');
    simulationChartSIR = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: arrays[0],
            datasets: [{
                label: 'Susceptible',
                data: arrays[1],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Infected',
                data: arrays[2],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Removed',
                data: arrays[5],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: false,
            responsive: true
        }
    });
    var ctx3 = document.getElementById('preditionChart');
    predictionChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: predictionArrays[0],
            datasets: [{
                label: 'Susceptible',
                data: predictionArrays[1],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Infected',
                data: predictionArrays[2],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Recovered',
                data: predictionArrays[3],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: false,
            responsive: true
        }
    });
}
