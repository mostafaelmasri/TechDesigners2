// map properties
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(33.888630, 35.495480),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
