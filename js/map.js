var map;
var marker;
function initMap() {
	var myLatlng = new google.maps.LatLng(34.69157857136129, 33.052687331213406);
  var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } 
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    styles: stylez,
    disableDefaultUI: true
  };
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  marker = new google.maps.Marker({
    position: myLatlng,
    icon: 'img/pin.png',
    map: map,
    title: 'Riga Feraiou, 11, 3095 Limassol, Cyprus.'
  });
}
