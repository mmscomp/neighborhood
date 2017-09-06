//Chk if KO is working
/*function AppViewModel() {
    this.name = "Bert Bertington";
}
ko.applyBindings(new AppViewModel());
*/
function ListLocation(name, map) {
    var self = this;
    self.map = map;
    self.name = ko.observable(name);
}
var locations = [];

function ListLocationViewModel() {

    var self = this;
    //
    self.locations = [{
            name: 'Eiffel Tower',
            location: {
                lat: 48.8537009999999,
                lng: 2.2944813
            }
        }, {
            name: 'Notre Dame Catheral',
            location: {
                lat: 48.85296820000001,
                lng: 2.3499021
            }
        }, {
            name: 'Louvre Muesuem',
            location: {
                lat: 48.8606111,
                lng: 2.337644
            }
        }, {
            name: 'Arc of Triumph',
            location: {
                lat: 48.8737917,
                lng: 2.2950275
            }
        }, {
            name: 'Cruise on the Seine',
            location: {
                lat: 48.8573797,
                lng: 2.3408735
            }
        }, {
            name: 'Montmartre',
            location: {
                lat: 48.8861929,
                lng: 2.3430895
            }
        }, {
            name: 'Picasso National Meseum',
            location: {
                lat: 48.8598775,
                lng: 2.362285
            }
        }, {
            name: 'Palace of Concorde',
            location: {
                lat: 48.8656331,
                lng: 2.3212357
            }
        }, {
            name: 'Place de la Bastille',
            location: {
                lat: 48.8531827,
                lng: 2.3691443
            }
        }, {
            name: 'Musee Grevin',
            location: {
                lat: 48.87183779999999,
                lng: 2.3422204
            }
        }, {
            name: 'Luxembourg Park',
            location: {
                lat: 48.8462217,
                lng: 2.3371605
            }
        }, {
            name: 'Moulin Rougue',
            location: {
                lat: 48.8841232,
                lng: 2.3322519
            }
        }, {
            name: 'Musee Maillol',
            location: {
                lat: 48.85477419999999,
                lng: 2.3249052
            }
        }, {
            name: 'Pont de Arts',
            location: {
                lat: 48.85834240000001,
                lng: 2.3375084
            }
        }, {
            name: 'Pont des Invalides',
            location: {
                lat: 48.8635992,
                lng: 2.3103844
            }
        },

        {
            name: 'Quai Branly Museum',
            location: {
                lat: 48.8608889,
                lng: 2.297894
            }
        }
    ];
}

var map;

// Create a new blank array for all the listing markers.
var markers = [];

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.85661400000001,
            lng: 2.3522219
        },
        zoom: 12
    });
    ListLocationViewModel();
    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    console.log(locations.length + " " + locations[0].name);
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var name = locations[i].name;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            name: name,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.name + '</div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker = null;
        });
    }
}

//}

ko.applyBindings(new ListLocationViewModel());