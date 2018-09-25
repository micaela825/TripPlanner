const mapboxgl = require('mapbox-gl');
const markerMaker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoibWljYWVsYW8iLCJhIjoiY2ptaTZkMmE5MDFyNzN1cnA3ajM4Z3h5aiJ9.qXmTjd0ZpUzksaDsrMNosw'


// this creates the map on our page: 

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  
  new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

  // creating markers w/ our factory function:

  markerMaker('Restaurant', [-73.585399, 40.445855]).addTo(map);

  markerMaker('Hotel', [-73.944926, 40.687790]).addTo(map);