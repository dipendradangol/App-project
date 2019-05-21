function initMap() {
    // Map options
    var center = {
        zoom: 12,
        center: {
            lat: 60.169810,
            lng: 24.938130
        }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), center);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        // Add marker
        addMarker({
            coords: event.latLng
        });
    });

    var infoWindow;
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        debugger;
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }


    // Array of markers
    var markers = [{
            coords: {
                lat: 60.189033,
                lng: 24.916982
            },

            coords: {
                lat: 60.170493,
                lng: 24.938612
            },
            content: '<h1> Fafas Sokos</h1><h3> Address: Postikatu, open 10-06</h3>'
        },
        {
            coords: {
                lat: 60.167347,
                lng: 24.941781
            },
            content: '<h1>Hesburger</h1><h3> Adress: Mannerheimintie 8, open 9-24 </h3>'
        },
        {
            coords: {
                lat: 60.166511,
                lng: 24.932911
            },
            content: '<h1>Eerikin Pippuri</h1><h3> Adress: Eerikinkatu 17, open 10-05 </h3>'
        },
        {
            coords: {
                lat: 60.169137,
                lng: 24.932138
            },
            content: '<h1>McDonalds</h1><h3> Address: Tennispalatsinaukio, open 0-24 </h3>'
        },
        {
            coords: {
                lat: 60.165436,
                lng: 24.948339
            },
            content: '<h1>Hesburger</h1><h3> Address: Kasarminkatu 19, open 11:30-05 </h3>'
        },
        {
            coords: {
                lat: 60.190044,
                lng: 24.917421
            },
            content: '<h1>McDonalds</h1><h3> Address: Mannerheimintie 105, open 0-24</h3>'
        },
        {
            coords: {
                lat: 60.305529,
                lng: 24.963993
            },
            content: '<h1>Alepa 24h Airport </h1><h3> Address: Airport Terminal 2, open 0-24</h3>'
        },
        {
            coords: {
                lat: 60.168314,
                lng: 24.935178
            },
            content: '<h1>Sky Express </h1><h3> Address: Annankatu 31-33, open 10-05</h3>'
        },
        {
            coords: {
                lat: 60.194979,
                lng: 25.029869
            },
            content: '<h1>Alepa 24 h </h1><h3> Address: Herttoniemi metro station, open 0-24 </h3>'
        },
        {
            coords: {
                lat: 60.170024,
                lng: 24.93774
            },
            content: '<h1> Grill Kiosk </h1><h3> Address: Mannerheimintie 22, open 22-05</h3>'
        },
        {
            coords: {
                lat: 60.158334,
                lng: 24.875831
            },
            content: '<h1> Kaizun Bistro</h1><h3>Address: Gyldenintie 2, open 21-04</h3>'
        },
        {
            coords: {
                lat: 60.170812,
                lng: 24.940265
            },
            content: '<h1> Black Grill & Cafe </h1><h3> Address: Railway station, open 10-24 </h3>'
        },
        {
            coords: {
                lat: 60.170382,
                lng: 24.921072
            },
            content: '<h1> ABC Kylmäasema </h1><h3> Address: Mechelininkatu 5, open 0-24 </h3>'
        },
        {
            coords: {
                lat: 60.180336,
                lng: 24.9489
            },
            content: '<h1> S-market </h1><h3> Address: Siltasaarenkatu 18-20, open 0-24 </h3>'
        },
        {
            coords: {
                lat: 60.170515,
                lng: 24.938274
            },
            content: '<h1> S-market </h1><h3> Address: Mannerheimintie 9, open: 0-24 </h3>'
        },
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}