/* This is an assignment fro pirple.com JS course.
In this assignment there are uses of datatyps */

var songName = "When I need love";
var artistName = "Leo Sayer";
var genre = "pop";
var durationSeconds = 245;
var grammy = false;
var musicians = {
    guitarist: "Jhon Hash",
    drummer: "Pikey Duck",
    bassist: "Jimmy RedHog",
    keys: "Korg Keyman",
    harmonize: "Leo Sayer",
}
var soundEngeneers = ["Billy Hat", "Cris Lord Algie", "Andrew Sheps"];

console.log("Song Name: " + songName);
console.log("Artist Name: " + artistName);
console.log("Genre: " + genre);
console.log("Duration In Seconds" + durationSeconds);
console.log("Won Grammy: " + grammy);
console.log("Musicians In the song:");
console.log( musicians);
console.log("Sound Engeneers: " + soundEngeneers);

console.log(" "); //Empty space
console.log(" "); //Empty space
console.log(" CONSTRUCTOR APPROACH ");
console.log(" "); //Empty space
console.log(" "); //Empty space

//Trying the constructor approach for the song object

function SongConstructor(songName, artistName, genre, durationSeconds, grammy, musicians, soundEngeneers){
    this.songName = songName;
    this.artistName = artistName;
    this.genre = genre;
    this.durationSeconds = durationSeconds;
    this.grammy = grammy;
    this.musicians = musicians;
    this.soundEngeneers = soundEngeneers;

    //this fucntion displays all the values of a song object
    this.display = function() {
        console.log("Song Name: " + this.songName);
        console.log("Artist Name: " + this.artistName);
        console.log("Genre: " + this.genre);
        console.log("Duration In Seconds" + this.durationSeconds);
        console.log("Won Grammy: " + this.grammy);
        console.log("Musicians In the song:");
        console.log( this.musicians);
        console.log("Sound Engeneers: " + this.soundEngeneers);
    }
}

//Creating a song object using constructior function
var song1 = new SongConstructor("We will rock you", "Queen", "Rock", 220, false, 
    {
        guitarist: "Hash Brown",
        drummer: "Perky Cat",
        bassist: "Sponge Bob",
        keys: "Jack Hammer",
        harmonize: "May Fild",
    },

    [
        "Mr. T-Wack",
        " Sr. Crys Alot "
    ]

);

song1.display();



