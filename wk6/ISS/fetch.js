//js file for ISS location

let url='https://api.wheretheiss.at/v1/satellites/25544'
//link to html elements
let issLat=document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let time = document.querySelector('#time')
var issMarker //leaflet marker
var update = 10000 //update the map every 10 seconds


// Create the map 
let map = L.map('iss-map').setView([0, 0], 1) //center at 0,0, and max zoom out

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy;  <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)

iss()  //initial call to function
setInterval(iss, update)  //call the iss function every {update} seconds

function iss() {
fetch(url)   //fetch(url) returns a Promise
//this is the short form - using arrow notation
    .then(res=> res.json())  
    //console.log(response)
    .then( issData => {
    console.log(issData)
  //data is whatever the above response resolves to
        //console.log(issData)
       let lat =issData.latitude
        let long =issData.longitude
       issLat.innerHTML = lat
       issLong.innerHTML = long

//use the lat-long from the API call to draw a marker
     
var icon = new L.Icon({iconUrl: 'noun_space station_1217219.png',
                    iconSize: [20,20],
                    iconAnchor: [25,25],
                });


if(!issMarker) {  //if the marker/icon does not exist
           issMarker = L.marker([lat, long],{icon: icon}).addTo(map)//create the marker 
        }else{
           issMarker.setLatLng([lat,long]) //if marker already exists - move it to the new location    
        }
        //update the time element to the current date and time
        let date = Date()
        time.innerHTML = date

    }).catch( err=> {
        console.log(err)
    })
}
//space station icon by Setyo Ari Wibowo from the Noun Project








