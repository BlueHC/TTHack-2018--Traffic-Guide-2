mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aWFzcGVyZWlyYSIsImEiOiJjamc5Y2hqMWEwOXp6MndveTVpdjduNnFrIn0.Z7KdFowU7LmQLsmE0jOOnQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [10, 53.55], // starting position
  zoom: 9 // starting zoom
});

var lat = 10.007;
var long = 53.552;
var lat2 = 10.057;
var long2 = 53.607;
var lat3 = 9.705;
var long3 = 53.590;
var lat4 = 10.005;
var long4 = 53.633;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

function pointOnCircle() {
    counter = counter + 0.0000001;
    lat = lat + counter;
    long = long + counter;

    if (long > 53.681) {
      long = 53.681;
    };
    if (lat > 10.115) {
      lat = 10.115;
    };

    return {
        "type": "Point",
        "coordinates": [
        lat,
        long
        ]
    };
}

function pointOnCircle2() {
    counter2 = counter2 + 0.0000002;
    lat2 = lat2 - counter2;
    long2 = long2 - counter2;

    if (long2 < 53.458) {
      long2 = 53.458;
    };
    if (lat2 < 9.905) {
      lat2 = 9.905;
    };

    return {
        "type": "Point",
        "coordinates": [
        lat2,
        long2
        ]
    };
}

function pointOnCircle3() {
    counter3 = counter3 + 0.0000002;
    lat3 = lat3 + (2 * counter3);
    long3 = long3 - (0.3 * counter3);

    if (lat3 > 10.247) {
      long3 = 53.508;
      lat3 = 10.247;
    };

    return {
        "type": "Point",
        "coordinates": [
        lat3,
        long3
        ]
    };
}

function pointOnCircle4() {
  counter4 = counter4 + 0.0000002;
  if (long4 > 53.558) {
    lat4 = lat4 + (0.07 * counter4);
    long4 = long4 - counter4;
  }else {
    lat4 = lat4 - (2 * counter4);
    long4 = long4 - (0.1 * counter4);
    if (long4 < 53.550) {
      long4 = 53.550;
      lat4 = 9.851;
    }
  };

    return {
        "type": "Point",
        "coordinates": [
        lat4,
        long4
        ]
    };
}

map.on('load', function () {
    map.addSource('bus1', {
        "type": "geojson",
        "data": pointOnCircle(counter)
    });

    map.addSource('bus2', {
        "type": "geojson",
        "data": pointOnCircle2(counter2)
    });

    map.addSource('bus3', {
        "type": "geojson",
        "data": pointOnCircle3(counter3)
    });

    map.addSource('bus4', {
        "type": "geojson",
        "data": pointOnCircle4(counter4)
    });

    map.addLayer({
        "id": "point",
        "source": "bus1",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#007cbf"
        }
    });

    map.addLayer({
        "id": "point2",
        "type": "circle",
        "source": "bus2",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#FF0000"
        }
    });

    map.addLayer({
        "id": "point3",
        "type": "circle",
        "source": "bus3",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#FFFF00"
        }
    });

    map.addLayer({
        "id": "point4",
        "type": "circle",
        "source": "bus4",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#ADD8E6"
        }
    });

    function animateMarker() {
        map.getSource('bus1').setData(pointOnCircle());
        map.getSource('bus2').setData(pointOnCircle2());
        map.getSource('bus3').setData(pointOnCircle3());
        map.getSource('bus4').setData(pointOnCircle4());

        requestAnimationFrame(animateMarker);
    }
    animateMarker(counter);
});

map.addControl(new mapboxgl.NavigationControl());

function simulate() {
  $("#map").append("<span class='dot' style='height:25px;width:25px;background-color:#bbb;border-radius:50%;display: inline-block;'></span>");
};
