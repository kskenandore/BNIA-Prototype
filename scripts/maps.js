var mymap = L.map('mapid', {
    center: [39.2904, -76.6122],
    zoom: 13
});

var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    accessToken: 'pk.eyJ1Ijoia3NrZW5hbmRvcmUiLCJhIjoiY2syd2NwcWVsMDQzMjNqcHFnbDkzdzA3cCJ9.L04N0CzzlY0T4sOmE-96dg'
}).addTo(mymap);

//L.geoJSON( cData ).addTo(mymap);

function resizeMap() {
    mymap.invalidateSize()
}

var datamap = L.map('data-map', {
    center: [39.3214, -76.5757],
    zoom: 10
});

var datamapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 10,
    accessToken: 'pk.eyJ1Ijoia3NrZW5hbmRvcmUiLCJhIjoiY2syd2NwcWVsMDQzMjNqcHFnbDkzdzA3cCJ9.L04N0CzzlY0T4sOmE-96dg'
}).addTo(datamap);

function resizeDataMap() {
    datamap.invalidateSize()
}