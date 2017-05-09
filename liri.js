var fs = require("fs");
var spotify = require('spotify');
var Twitter = require('twitter');
var request = require("request");

fs.readFile('keys.js','utf-8', function(error,data){
	
	var dataArr = data.split(",");
	
});

var command = process.argv[2];

/////////////////////////////////////////////////////////////////// Twitter ////////////////////////////////////////////////
if(command == 'my-tweets'){

  /*var client = new Twitter({
  consumer_key: 'WbskdMlwy5fmy9UbGaKkbBo1C',
  consumer_secret: 'BDe8gUQc1jwSbfQSuorGCp6KqLNUucuqE8gept5ztt9GivGtTh',
  access_token_key: '860243598733856768-BA6S62dbDJfEfy0y2bgtFzjHdqRRbfA',
  access_token_secret: 'Lpizc4J0W7b4aOZBXuRPk9VEO4P6XIuzPLlA9r52r1ZZO'
});*/

var client = new Twitter({
  consumer_key: 'WbskdMlwy5fmy9UbGaKkbBo1C',
  consumer_secret: 'BDe8gUQc1jwSbfQSuorGCp6KqLNUucuqE8gept5ztt9GivGtTh',
  access_token_key: '860243598733856768-BA6S62dbDJfEfy0y2bgtFzjHdqRRbfA',
  access_token_secret: 'Lpizc4J0W7b4aOZBXuRPk9VEO4P6XIuzPLlA9r52r1ZZO'
});

/**
 * Grab a list of favorited tweets
 **/
client.get('statuses/user_timeline', function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
    console.log(tweets[1].text);
    console.log(tweets[2].text);
  }
});

//////////////////////////////////////////////////////////////// SPOTIFY THIS SONG ////////////////////////////////////
} else if(command == 'spotify-this-song'){

  var nodeArgs = process.argv;
  var songName = "";

  for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    songName = songName + "+" + nodeArgs[i];

  }

  else {

    songName += nodeArgs[i];

  }

}

  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

  console.log("Artist: " + data.tracks.items[0].artists[0].name);
  console.log("Song Name: " + data.tracks.items[0].name);
  console.log("Link: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
  console.log("Album: " + data.tracks.items[0].album.name);


});

////////////////////////////////////////////////// MOVIE THIS //////////////////////////////////////////////////////////////////////////

} else if(command == 'movie-this'){

  var nodeArgs = process.argv;
  var movieName = "";

  for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

request(queryUrl, function(error, response, data) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    console.log("Movie Title: " + JSON.parse(data).Title);
    console.log("Year the movie came out: " + JSON.parse(data).Year);
    console.log("IMDB Rating of the movie: " + JSON.parse(data).Ratings[0].Value);
    console.log("Country where the movie was produced: " + JSON.parse(data).Country);
    console.log("Plot of the movie: " + JSON.parse(data).Plot);
    console.log("Actors in the movie: " + JSON.parse(data).Actors);

    }
});

////////////////////////////////////////////////////// Do what it says //////////////////////////////////////////////////////////////////

} else if(command == 'do-what-it-says'){

  fs.readFile('random.txt','utf-8', function(error,data){
  
  var dataArray = data;
  console.log(dataArray);
  
  });

}
