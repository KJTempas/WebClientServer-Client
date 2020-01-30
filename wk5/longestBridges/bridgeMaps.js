let USCenterCoordinates = [39.83, -98.58]  // Array of latitude and longitude 
let zoomLevel = 4  // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridges-map').setView(USCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2F0aHJ5bnRlbXBhcyIsImEiOiJjazYwemh2aGowZGc0M25waWZ3dWlwczFiIn0.FhxQnfXpnEd62yFQ32huZw'
    //accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg' provided in Clara's project
}).addTo(map)



// Add markers for verrazano narrow bridge
let verrazanoCoordinates= [40.6066, -74.0447]
let verrazanoMarker = L.marker(verrazanoCoordinates)
    .bindPopup("Verrazano-Narros Bridge<br> Span: 1298.4 meters")
    .addTo(map)


//create array of objects
let bridgesAndSpans = [
{bridge: 'Verrazano-Narrows Bridge', span: '1298.4 meters'},
{bridge: 'Golden Gate Bridge', span: '1280.2 meters'},
{bridge: 'Mackinac Bridge', span: '1158.0 meters'},
{bridge: 'George Washington Bridge', span: '1067.0 meters'},
{bridge: 'Tacoma Narrows Bridge', span: '853.44 meters'}
]
