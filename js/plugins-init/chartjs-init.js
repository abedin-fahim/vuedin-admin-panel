// Setup
// Downloads 
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
]
const downloads = {
    labels: months,
    datasets: [{
            label: 'Downloads',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 15, 25, 12, 7, 10],
        },
        {
            label: 'Ratings',
            backgroundColor: 'rgb(52,162,236)',
            borderColor: 'rgb(52,162,236)',
            data: [0, 5, 15, 22, 13, 29, 28],
        }
    ]
}
// Ratings 
const ratings = {
    labels: months,
    datasets: [{
            label: 'Downloads',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 15, 25, 12, 7, 10],
        },
        {
            label: 'Ratings',
            backgroundColor: 'rgb(52,162,236)',
            borderColor: 'rgb(52,162,236)',
            data: [0, 5, 15, 22, 13, 29, 28],
        }
    ]
}


// Config
const configDownloads = {
    type: 'line',
    data: downloads,
    options: {
        responsive: true
    }
}
const configRatings = {
    type: 'bar',
    data: ratings,
    options: {
        responsive: true,
    },
}
// Render
var dashDownloadsChart = new Chart(
    document.getElementById('dashDownloadsChart'),
    configDownloads
)
var dashRatingsChart = new Chart(
    document.getElementById('dashRatingsChart'),
    configRatings
)

var ctx = document.getElementById('dashBubbleChart').getContext('2d');
var dashBubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
            data: [{
                x: 17,
                y: 3,
                r: 11
            },
            {
                x: 20,
                y: 2.1,
                r: 19
            },
        ],
            label: "January",
            borderColor: "#3e95cd",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth: 2,

        },{
            data: [{
                x: 6,
                y: 2.2,
                r: 30
            }, ],
            label: "February",
            borderColor: "#ffa500",
            backgroundColor: "rgb(255,165,0,0.1)",
            borderWidth: 2,

        }, {
            data: [{
                x: 14,
                y: 2.3,
                r: 30
            }],
            label: "March",
            borderColor: "#c45850",
            backgroundColor: "rgb(196,88,80,0.1)",
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '# of wins'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '# of games'
                }
            }],
        }
    },
});