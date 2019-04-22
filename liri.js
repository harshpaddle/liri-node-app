require("dotenv").config();

const axios = require("axios");

var Spotify = require('node-spotify-api');

const moment = require("moment")

const keys = require("./keys.js");

const command = process.argv[2];

var parameter = process.argv.slice(3);

var spotify = new Spotify(keys.spotify);

switch(command) {
  case "concert-this":
    bands(parameter);
    break;
  case "spotify-this-song":
    spotify
      .search({
        type: 'track',
        query: parameter
      })
      .then(function (response) {
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].artists[0].name);
      })
      .catch(function (err) {
        console.log(err);
      });
    break;
  case "movie-this":
    omdb(parameter);
    break;
  case "do-what-it-says":
    random();
    break;
  default:
    console.log("plz enter a valid command")
}

function bands(parameter) {
  queryUrl = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response){
    console.log(`Name of the venue: ${response.data[1].venue.name}`)
    console.log(`Venue Location: ${response.data[1].venue.country}`)
    console.log(`Date of the Event: ${moment(response.data[1].datetime).format('MM/DD/YYYY')}`)
  })
}




