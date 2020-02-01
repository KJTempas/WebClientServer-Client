let canvas = document.querySelector('#bridges-chart')
let ctx = canvas.getContext('2d')

//create array of objects to be displayed in popup, and to note location
let bridgesAndSpans = [
    {bridge: 'Verrazano-Narrows Bridge', span: '1298.4', lat: '40.6066', long: '-74.04477'},
    {bridge: 'Golden Gate Bridge', span: '1280.2',lat: '37.8199', long: '-122.4783'},
    {bridge: 'Mackinac Bridge', span: '1158.0 ',lat: '45.8174', long: '-84.7278'},
    {bridge: 'George Washington Bridge', span: '1067.0 ',lat: '40.8517', long: '-73.9527'},
    {bridge: 'Tacoma Narrows Bridge', span: '853.44 ',lat: '47.2690', long: '-122.5517'}
    ]

chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [bridgesAndSpans[0].bridge, bridgesAndSpans[1].bridge, bridgesAndSpans[2].bridge, bridgesAndSpans[3].bridge, bridgesAndSpans[4].bridge],
        datasets: [{
            label: 'Span in meters',
            barThickness: 10,
            data: [bridgesAndSpans[0].span, bridgesAndSpans[1].span, bridgesAndSpans[2].span, bridgesAndSpans[3].span, bridgesAndSpans[4].span],
            backgroundColor: ['red', 'blue', 'purple', 'green','orange'],
        }]
    }, options: {
        scales: {
            xAxes: [{
                ticks: {
                    max: 1400,
                    min: 0,
                    stepSize: 100,
                    beginAtZero: true
                }
            }]
        }
    }
})

