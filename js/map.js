mapCanvas = document.querySelector(".contacts__map");
mapCanvas.classList.add("contacts__map--js");

function initMap() {
  var location = {lat: 59.936331, lng: 30.321582};
  var mapOptions = {
    center: new google.maps.LatLng(location),
    zoom: 16,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var markerImage = new google.maps.MarkerImage(
    "../img/icon-map-pin.svg",
    new google.maps.Size(66, 100)
  );

  new google.maps.Marker({
    position: location,
    map: map,
    icon: markerImage
  });

  window.onresize = function() {
    map.setCenter(location);
  }
}

google.maps.event.addDomListener(window, "load", initMap);
