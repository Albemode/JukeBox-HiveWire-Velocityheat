$(document).ready(function(){
var songs = []
var currentSong = 0;

function playNext() {
    SC.stream('/tracks/' + 26606572 ).then(function(player){
    console.log(player);
    player.play();
       player.on("finish", function(){
        currentSong += 1;
        playNext();
       });
 });
}

SC.initialize({
    client_id: "febddc9c5bca2119f90c182ca27c026f"
})

SC.get('/tracks',{
    q: "Childish Gambino"
}).then(function(player){
    console.log(player);
    player.play();
}); 

SC.stream('/tracks/' + 116933280 ).then(function(player){
    console.log(player);
    player.play();
       player.on("finish", function(){
        console.log("Done-zo");
       });
 });


var songs = []
var currentSong = 0;




function playNext() {
    SC.stream('/tracks/' + 27312356 ).then(function(player){
    console.log(player);
    player.play();
       player.on("finish", function(){
        currentSong += 1;
        playNext()
       });
 });
}


function JukeBox(){
    this.songs = [];
    this.back = document.getElementById("back");
    this.playpause = document.getElementById("playpause");
    this.next = document.getElementById("next");
    this.shuffle = document.getElementById("shuffle");
}


//array of songs
//funtion to call out
//switch songs
function JukeBox(){
    this.songs = [];
    this.back = document.getElementById("back");
    this.playpause = document.getElementById("playpause");
    this.next = document.getElementById("next");
    this.shuffle = document.getElementById("shuffle");
};









//array of songs
//funtion to call out
//switch songs
var playlists = [ "audio/bensound-scifi.mp3",
                  "bensound-straight.mp3",
                  "bensound-scifi.mp3",
                  "bensound-goinghigher.mp3",
                  "bensound-popdance.mp3"
                ]

function JukeBox(){
    this.songs = [];
    this.back = document.getElementById("back");
    this.playpause = document.getElementById("playpause");
    this.next = document.getElementById("next");
    this.shuffle = document.getElementById("shuffle");
}

 JukeBox.prototype.play_music = function(){
    document.getElementById("audioplayer").play();
}

 document.addEventListener("DOMContentLoaded",function() {
        a.playpause.addEventListener('click',function(){
            a.play_music();
        })

function Song(name, title ){
    this.name = name
    this.title = title;
}

 JukeBox.prototype.play_music = function(){
    document.getElementById("audioplayer").play();
}
JukeBox.prototype.next_music = function() {
    document.getElementById("audioplayer").next();
};
JukeBox.prototype.back_music = function(){
    document.getElementById("audioplayer").back();
}
JukeBox.prototype.shuffle_music = function() {
    document.getElementById("audioplayer").shuffle();
};              


var a = new JukeBox()
//a.play_music();

            


    document.addEventListener("DOMContentLoaded",function() {
        a.playpause.addEventListener('click',function(){
            a.play_music();
        })

    })
    document.addEventListener("DOMContentLoaded",function() {
        a.back.addEventListener('click',function(){
            a.back_music();
        })

    })
    document.addEventListener("DOMContentLoaded",function() {
        a.next.addEventListener('click',function(){
            a.next_music();
        })

    })
    document.addEventListener("DOMContentLoaded",function() {
        a.shuffle.addEventListener('click',function(){
            a.shuffle_music();
        })

    })
eventlistener
back.getEventlistener.("click", function(){

});


playpause.getEventlistener.("click", function(){
	
});



next.getEventlistener.("click", next);
shuffle.getEventlistener.("click", shuffle);





var audioEl = document.getElementById("playpause"),
        counter = -1,
        songs = [
			"bensound-straight.mp3",
			"bensound-scifi.mp3",
			"bensound-goinghigher.mp3",
			"bensound-popdance.mp3"
];
function nextSong() {
        audioEl.removeEventListener('ended', nextSong);

        if (songs[++counter]) {
            audioEl.src = songs[counter];
            audioEl.addEventListener('ended', nextSong);
            audioEl.play();
        } else {
            alert('All done!');
        }
    }

    nextSong();
};​

var x = document.getElementById("playpause");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
document.addEventListener("DOMContentLoaded",function(){
  Array.from(document.getElementsById("audioplayer")).forEach(
   function(s) { 
     s.addEventListener("click",function(event){

function playlist() {
	this.songs = [];

}

*start from the beg.
2. link up your .js file
3. In the .js file, write a simple function where the function, when called upon, will console.log a message
4. Example of the above is:
    function this_is_a_function() {
        console.log("HEY I'M WORKING!");
    };
5. Call the function
6. When you succesfully create this function, then modify it so that it can take in an agrument.
7. Mak1. create HTML with standard jukebox buttons (play, pause, etc)
e sure your revised function can output something based off your argument 
8. Create variables (possibly an array) that can hold a series of "tracks"
9. Create an object (tracks) where they contain attributes (track name, file path, etc)
10. Find a way to play the song by just "hard coding" one song in (basically write out the code that will allow you to
    play a song but does not need to use the buttons that you have - the song will play once you run your code)
11. Once this is all figured out, you'll then have a basic version of the JukeBox

**things to keep in mind - google questions the way you would ask yourself in your head
* example: google: "how to play a song using HTML and JavaScript"        


// http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play






