var Twit = require('twit');
var geocoder = require('geocoder');

var config = require('./config'); //location of api keys
var T = new Twit(config); //api keys

var qLat = "";
var qLng = "";

var query = process.argv[2];
var place = process.argv[3];
var rad = process.argv[4] + " mi";

geoCode(); //call geocode function

// Geocoding
function geoCode() {
  geocoder.geocode(place, function(err, data) {

    qLat = data.results[0].geometry.location.lat;
    qLng = data.results[0].geometry.location.lng;

    console.log(qLat);
    console.log(qLng);
    console.log(rad);

    search(); // then cal the twitter search function with all the parameters in place

  });
} //end geocode fx

//begin twitter search fx
function search() {

  var params = {
    q: query,
    count: 10,
    lat: qLat,
    long: qLng,
    radius: rad
  };

  function gotData(err, data, response) {
    // console.log(data);
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);

    } //end for loop
  } //end got Data function

  T.get('search/tweets', params, gotData);

} //end search fx
