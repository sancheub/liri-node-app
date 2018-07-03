require("dotenv").config();

var Twitter = require("twitter");
var request = require("request");

//var Spotify = require("spotify");

var keys = require("./keys.js");
var universal = process.argv;
var client = new Twitter(keys.twitter);

//var client = new Spotify(keys.spotify);

var myAction = process.argv[2];
var arg3 = process.argv[3];


if(myAction === "my-tweets"){
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    
    for(var i=0; i<=19; i++){
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
    }

  }
})

} else if(myAction === "movie-this"){
        if(arg3 === undefined){
            arg3 = "Mr. Nobody";
        }
        var queryUrl = "http://www.omdbapi.com/?t=" + arg3 + "&y=&plot=short&apikey=trilogy"; 
        request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var movieInfo = JSON.parse(body);

                console.log(" Title: " + movieInfo.Title);
                console.log(" Release Year: " + movieInfo.Year);
                console.log(" Rating: " + movieInfo.Rated);
                console.log(" Rotten Tomatoes: " + movieInfo.Ratings[1].Value);
                console.log(" Country: " + movieInfo.Country);
                console.log(" Language: " + movieInfo.Language);
                console.log(" Plot: " + movieInfo.Plot);
                console.log(" Actors: " + movieInfo.Actors);
                }
            
            }
            
        )} else if(myAction === "spotify-this-song"){
            if(arg3 === undefined){
                arg3 = "The Sign, Ace of Base";
            }
            var queryUrl = "http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6" + arg3; 
            request(queryUrl, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    var songInfo = JSON.parse(body);
    
                    console.log(" Artist: " + songInfo.xxxxx);
                    console.log(" Song's name: " + songInfo.xxxxx);
                    console.log(" www...xxxxxxx ");
                    console.log(" Album: " + songInfo.xxxxx);
                }
            }
        )};
