var viewModel = [];

//viewModel.locationAll = [];
// This function firest when the user select "go" on the places search.
// It will do a nearby search using the entered query string or place.
/*viewModel.searchPlaces = function textSearchPlaces(place) {
        //  placeMarkers = [];
        var bounds = map.getBounds();
        hideMarkers(placeMarkers);
        console.log(108 + place);
        var placesService = new google.maps.places.PlacesService(map);
        placesService.textSearch({
            query: place + '&' + viewModel.cityText(),
            bounds: bounds
        }, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                createMarkersForPlaces(results);
                locationAll = results;
                console.log(111 + " " + locationAll[0].name);
            }
        });
    }*/
//console.log(0 + " " + locationAll[0]);
var site = function(place) {
    this.place = place;
}

var Place = function(name, location) {
    this.name = name;
    this.location = location;
};

//var viewModel = {};

//
viewModel.places = [new site('eateries'),
    new site('parks'),
    new site('cinema'),
    new site('libraries'),
    new site('schools'),
    new site('tourist-attraction')
];
viewModel.locations = [new Place(
    'Eiffel Tower', {
        lat: 48.8537009999999,
        lng: 2.2944813
    }
), new Place(
    'Notre Dame Catheral', {
        lat: 48.85296820000001,
        lng: 2.3499021
    }
), new Place(
    'Louvre', {
        lat: 48.8606111,
        lng: 2.337644
    }
), new Place(
    'Arc of Triumph', {
        lat: 48.8737917,
        lng: 2.2950275
    }
), new Place(
    'Seine', {
        lat: 48.8573797,
        lng: 2.3408735
    }
), new Place(
    'Montmartre', {
        lat: 48.8861929,
        lng: 2.3430895
    }
), new Place(
    'Musee Picasso', {
        lat: 48.8598775,
        lng: 2.362285
    }
), new Place(
    'Place de la Concorde', {
        lat: 48.8656331,
        lng: 2.3212357
    }
), new Place(
    'Place de la Bastille', {
        lat: 48.8531827,
        lng: 2.3691443
    }
), new Place(
    'Musee Grevin', {
        lat: 48.87183779999999,
        lng: 2.3422204
    }
), new Place('Luxembourg Park', {
    lat: 48.8462217,
    lng: 2.3371605
}), new Place('Moulin Rougue', {
    lat: 48.8841232,
    lng: 2.3322519
}), new Place('Musee Maillol', {
    lat: 48.85477419999999,
    lng: 2.3249052
}), new Place('Pont de Arts', {
    lat: 48.85834240000001,
    lng: 2.3375084
}), new Place('Pont des Invalides', {
    lat: 48.8635992,
    lng: 2.3103844
}), new Place('Musee Curie', {
        lat: 48.8608889,
        lng: 2.297894
    }
    /*, new Place('Disneyland Resort', {
            lat: 48.8722344,
            lng: 2.7758079
        }
    */
)];


