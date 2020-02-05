let USCenterCoordinates = [39.83, -98.58]  // Array of latitude and longitude 
let zoomLevel = 4  // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridges-map').setView(USCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2F0aHJ5bnRlbXBhcyIsImEiOiJjazYwemh2aGowZGc0M25waWZ3dWlwczFiIn0.FhxQnfXpnEd62yFQ32huZw'
    
}).addTo(map)



//create array of objects to be displayed in popup, and to note location
let bridgesAndSpans = [
{bridge: 'Verrazano-Narrows Bridge', span: '1298.4 meters', lat: '40.6066', long: '-74.04477'},
{bridge: 'Golden Gate Bridge', span: '1280.2 meters',lat: '37.8199', long: '-122.4783'},
{bridge: 'Mackinac Bridge', span: '1158.0 meters',lat: '45.8174', long: '-84.7278'},
{bridge: 'George Washington Bridge', span: '1067.0 meters',lat: '40.8517', long: '-73.9527'},
{bridge: 'Tacoma Narrows Bridge', span: '853.44 meters',lat: '47.2690', long: '-122.5517'}
]


for(let i=0; i<bridgesAndSpans.length; i++) {  //loop over array
    var icon = new L.Icon({iconUrl: 'bridge.png',
                    iconSize: [40,40],
                    iconAnchor: [25,25],
                    popupAnchor:  [-3, -76]
                });
    let length = bridgesAndSpans[i].span  //setting element in the object to variables
    let bridgeName= bridgesAndSpans[i].bridge
//marker will go at these coordinates
    let bridgeCoordinates = [bridgesAndSpans[i].lat, bridgesAndSpans[i].long]  
//putting the special marker onto the map
    L.marker(bridgeCoordinates, {icon: icon}) 
    .bindPopup(bridgeName +" " +  length)
    .addTo(map)
    
}

