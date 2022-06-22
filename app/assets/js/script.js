import {Map, View, TileLayer, Osm} from 'ol/Map';

$(function() {
    const map = new Map({
        view: new View({
          center: [0, 0],
          zoom: 1
        }),
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        target: 'map'
      });
      map.getViewport();

})