var fs = require("fs");
var imdb = require('imdb-api');
var spotify = require('spotify');
var Twitter = require('twitter');
var inquirer = require("inquirer");



fs.readFile('keys.js','utf-8', function(error,data){
	
	var dataArr = data.split(",");
	

});

/*

inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  // console.log(location.userInput);
  if(inquirer.input ===    

   * `my-tweets`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`)


  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.userInput, function(err, data) {

    console.log(JSON.stringify(data, null, 2));
  });

});

*/