function howdy(firstName) {
    var firstName = "Mott"
    alert("Howdy " + firstName);
}

let latLng = [41.789649, -87.599702];


function conditional() {
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good Morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening, I guess.");
    }
}

function evalNumber() {
    var inputValue = prompt("Enter ye who dare a five digit number, but beware! (Also no commas, thanks).")
    if (inputValue > 99999 || inputValue < 10000) {
        alert("Not the right number of digits")
    } else if (isNaN(inputValue)) {
        var outputValue = (inputValue + " is no number to me.")
    } else if (inputValue % 2 == 0) {
        var outputValue = "Even Steven"
    } else if (inputValue % 2 == 1) {
        outputValue = "This is odd..."
    } else {
        outputValue = "Not an integer"
    }
    alert(outputValue)
}

function changeTitle() {
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement)
    selectedElement.innerText = "We're our own website now";
}

function mapLoad() {
    //Define the lat lon coordinate

    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
        streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

    map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map)
        .bindPopup("<b>UChicago<br>Campus</b>").openPopup();



    //Click event
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
}

function timeDay() {
    let selectedElement = document.getElementById("timeDay");
    let currentMinute = new Date().toLocaleTimeString("en-US").split(/:| /)
    selectedElement.innerText = "The current minute is " + currentMinute[1];
    document.getElementById("map").style.display = "none";
    document.getElementById("mapContainer").style.display = "none";
    document.getElementById("materialsContainer").style.display = "none";
    document.getElementById("timeDay").style.display = "block";
}

function viewMap() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("materialsContainer").style.display = "none";
}

function viewMaterials() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("mapContainer").style.display = "none";
    document.getElementById("materialsContainer").style.display = "block";
    mapLoad()
}

function hideMap() {
    document.getElementById("map").style.display = "none";
}

function viewPingyao() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("materialsContainer").style.display = "none";
    map.flyTo(new L.LatLng(37.1898, 112.1762));
}

function viewQi() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("materialsContainer").style.display = "none";
    map.flyTo(new L.LatLng(37.3580, 112.3355));
}

function viewTaigu() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("materialsContainer").style.display = "none";
    map.flyTo(new L.LatLng(37.4213, 112.5513));
}

function viewUChicago() {
    document.getElementById("timeDay").style.display = "none";
    document.getElementById("map").style.display = "block";
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("materialsContainer").style.display = "none";
    map.flyTo(new L.LatLng(41.789649, -87.599702));
}