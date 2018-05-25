let map: any;
let marker: any;

// Interface
interface LatLng {
    lat: number,
    lng: number
}

interface GoogleMapsConfig {
    center: LatLng,
    zoom: number
}

let Toronto: LatLng = {lat: 43, lng: -79.83};
let initMapConfig = {center: Toronto, zoom: 8};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), initMapConfig);

    marker = new google.maps.Marker({
        position: Toronto,
        map: map,
        title: 'Toronto'
    });

}