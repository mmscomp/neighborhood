/** Neighborhood of Place that I like to visit */
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
};


//var locations = [];

var Place = function(name, location) {
    this.name = name;
    this.location = location;
};

var viewModel = {};

//
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

//
viewModel.selectedName = ko.observable();

//
viewModel.selectedText = ko.computed({
    read: function() {
        return viewModel.selectedName() &&
            viewModel.selectedName().name;
    },
    write: function(click) {
        viewModel.selectedName().name;
    },
    owner: viewModel
});

//
viewModel.selectedValue = ko.computed({
    read: function() {
        return viewModel.selectedName() &&
            viewModel.selectedName().location;
    },
    write: function(click) {
        viewModel.selectedName().location;
    },
    owner: viewModel


});

//Create individual markers
viewModel.marker = function Marker(name, location) {
    var temp;
    var picture;
    console.log(110 + " " + name + " "); // + viewModel.selectedText());

    // Get the position from the location array.
    var position = location;
    var name = name;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
        map: map,
        position: position,
        name: name,
        animation: google.maps.Animation.DROP,
        //      id: i
    });

    temp = marker;
    markers.push(temp);
    console.log(markers.length);
    if (viewModel.selectedName()) {
        for (var i = 0; i < markers.length - 1; i++) {
            markers[i].setMap(null);
        }
    }
    console.log(151 + " " + marker.name);
    var lt = "https://pixabay.com/api/?key=6400784-6502739bfc92fac659c45670a&q=" + marker.name + "&paris&image=photo"; // eiffel%20tower,paris&image=photo";
    console.log(153 + " " + lt);
    var wikiRequestTimeout = setTimeout(function() {
        picture = "failed to get pikipedia resources";
    }, 10000);

    $.ajax({
        url: lt,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(response) {
            var pic = response.hits[0].webformatURL;

            console.log(65 + " " + pic);
            clearTimeout(wikiRequestTimeout);

            picture = pic;
            // Push the marker to our array of markers.
            //   markers.push(marker);
            // Create an onclick event to open an infowindow at each marker.
        }

    });

    //    bounds.extend(markers[i].position);
    //    }
    // Extend the boundaries of the map for each marker
    //  map.fitBounds(bounds);
    //   }
    // load wikipedia articles
    var article;
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.name + '&paris&limit=1&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function() {
        article = "failed to get wikipedia resources";
    }, 10000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(response) {
            var articleList = response[2];
            console.log(203 + articleList);
            article = articleList;
            clearTimeout(wikiRequestTimeout);
        }

    });
    marker.addListener('click', function() {
        viewModel.info(this, picture, article);
    });

}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
viewModel.info = function populateInfoWindow(marker, picture, article) {
    // Check to make sure the infowindow is not already opened on this marker.
    var infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div><img src="' + picture + '"> <span>' + article + '</span></div>');
        infowindow.open(map, marker);

        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker = null;
        });
    }
}

//}

ko.applyBindings(viewModel);