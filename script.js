var map;
var marker;
var Toronto = { lat: 43, lng: -79.83 };
var initMapConfig = { center: Toronto, zoom: 8 };
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);
    marker = new google.maps.Marker({
        position: Toronto,
        map: map,
        title: 'Toronto'
    });
}
