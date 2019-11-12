var mymap = L.map('mapid', {
    center: [39.2904, -76.6122],
    zoom: 13
});


var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    accessToken: 'pk.eyJ1Ijoia3NrZW5hbmRvcmUiLCJhIjoiY2syd2NwcWVsMDQzMjNqcHFnbDkzdzA3cCJ9.L04N0CzzlY0T4sOmE-96dg'
}).addTo(mymap);

function resizeMap() {
    mymap.invalidateSize()
}