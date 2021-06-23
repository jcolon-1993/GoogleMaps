/* loads the map into the HTML page. First it
creates a mapOptions object with three properties. Uses object literal notation */
function init()
{
  // Set up map options
  var mapOptions =
  {
    center: new google.maps.LatLng(33.89182341498334, -118.30040586765178),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13
  };

  /* uses the Map () constructor to create a map and draw the map into the page */
  // Map() draws a map
  var venueMap;
  venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);
}

/* creates a <script> element to load the Google Maps API. When it has loaded,
  it calls init(), to initialize the map.  */
function loadScript()
{
  // Create <Script> element
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
  document.body.appendChild(script);
}
// Onload call
/* when the page has loaded, the on load event will call the loadScript
  () function. */
window.onload = loadScript;
