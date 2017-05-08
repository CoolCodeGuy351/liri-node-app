var fs = require("fs");
var imdb = require('imdb-api');
var spotify = require('spotify');
var Twitter = require('twitter');
var request = require("request");



fs.readFile('keys.js','utf-8', function(error,data){
	
	var dataArr = data.split(",");
	

});


inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  // console.log(location.userInput);
  if(inquirer.input === 'my-tweets'){

  } else if (inquirer.input === 'spotify-this-song'){

  } else if (inquirer.input === 'movie-this'){
  	
  } else if (inquirer.input === 'do-what-it-says'){
  	
  } else{
  	console.log('Thats not an option!');
  }


});

