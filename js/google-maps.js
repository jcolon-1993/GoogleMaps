function init()
{
  // Set up map options
  var mapOptions =
  {
    center: new google.maps.LatLng(33.89182341498334, -118.30040586765178),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };
  // Map() draws a map
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function loadScript()
{
  // Create <Script> element
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
  document.body.appendChild(script);
}
// Onload call
window.onload = loadScript;
