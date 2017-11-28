// const APIKEY = ``;
// const googleApi = `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&callback=initMap`;
// https://maps.googleapis.com/maps/api/js?key=I&callback=initMap
// let marker = new google.maps.Marker({
//     position: {},
//     map: map
// });
// let infoWindow = new google.maps.InfoWindow({
//     content: `<h1>${this.position}</h1>`
// });
// marker.addListener('click', function() {
//     infoWindow.open(map, marker);
// });
//
//
//Above code doesn't work. I couldn't push the API to the HTML without it actually being there. 

initMap = () => {
    let options = {
        zoom: 8,
        center: {lat: 42, lng: -71}
    }
    let map = new google.maps.Map(document.getElementById('map'), options);
    google.maps.event.addListener(map, 'click', function(e) {
        addMarker({coords:e.latLng});
    });
    let markers = [];
    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    addMarker = (props) => {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });
        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}





