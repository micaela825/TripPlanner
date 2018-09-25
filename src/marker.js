const mapboxgl = require('mapbox-gl')

function markerMaker (type, latlong) {
    const newMarker = document.createElement("div");
    newMarker.style.width = "32px";
    newMarker.style.height = "39px";

    if (type === 'Activity') {
        newMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    else if (type === "Hotel") {
        newMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    else if (type === "Restaurant") {
        newMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    return new mapboxgl.Marker(newMarker).setLngLat(latlong)
}

module.exports = markerMaker;
