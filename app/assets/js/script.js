//import {Map, View, TileLayer, Osm} from 'ol/Map';

$(function() {
    // const map = new Map({
    //     view: new View({
    //       center: [0, 0],
    //       zoom: 1
    //     }),
    //     layers: [
    //       new TileLayer({
    //         source: new OSM()
    //       })
    //     ],
    //     target: 'map'
    //   });
    //   map.getViewport();
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   document.getElementById("navbar").style.padding = "30px 10px";
    //   document.getElementById("logo").style.fontSize = "25px";
    // } else {
    //   document.getElementById("navbar").style.padding = "80px 10px";
    //   document.getElementById("logo").style.fontSize = "35px";
    // }
    window.onscroll = () => {scrollFunction()};
    const scrollFunction = () => {
      const windowScroll = $("<body>").topScroll();
      if (windowScroll > 80 || windowScroll > 80) {
        $("<nav>").css("padding: 10vh")
      }
    };
})