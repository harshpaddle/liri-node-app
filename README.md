# Liri
## LIRI node app for Week #10 Homework

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### How it works

#### Bands-In-Town

![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-25%20at%2010.37.09%20PM.png)

`node liri.js concert-this <insert artist name>`

This will show the following information about the song in your terminanl/bash window

- Venue of the concert
- Location of the concert
- Date of the concert


#### Spotify

![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-25%20at%2010.31.54%20PM.png)

`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from


![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-26%20at%2010.06.38%20AM.png)

If no song is provided then your program will default to "The Sign" by Ace of Base


#### Movies

![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-25%20at%2010.38.25%20PM.png)

`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Metascore of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.


![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-26%20at%2010.07.10%20AM.png)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


#### Do What It Says

![liri-node-app-screenshot](https://github.com/harshpaddle/liri-node-app/blob/master/images/Screen%20Shot%202019-04-26%20at%2010.23.41%20AM.png)

`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".

Feel free to change the text in that document to test out the feature for other commands.


### Authors

harsh Patel
