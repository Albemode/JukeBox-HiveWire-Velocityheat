window.onload = function() {

  var songList = [];
  var currentSongIndex = 0;
  var audio = document.getElementById('currentAudio');
  var musicInfoText = document.getElementById('musicInfo');


  function Jukebox(songList, currentSongIndex) {

    this.addSong = function(src, track, artist) {
      songList.push([src, track, artist]);
    };

    
    this.QueenbeeJuke = function() {
        audio.innerHTML = "<source src=\"" + songList[0][0] + "\" type=\"audio/mp3\">";
        musicInfoText.innerText = songList[0][1] + " - " + songList[0][2]; 
        currentSongIndex = 0;
    };

   
  
     

    //play button - use doc.getElementById("play").addEventListener("click", function()
    document.getElementById("play").addEventListener("click", function(){ 
        audio.play();
    });

    // pause button - use doc.getElementById("pause").addEventListener("click", function()
    document.getElementById("pause").addEventListener("click", function(){ 
        audio.pause();
    });   

    //next button - use doc.getElementById("next").addEventListener("click", function()
    document.getElementById("next").addEventListener("click", function(){ 
        if (songList[currentSongIndex+1] != null) {
    
          currentSongIndex++;
          
          musicInfoText.innerText = songList[currentSongIndex][1] + " - " + songList[currentSongIndex][2];
      
          audio.innerHTML = "<source src=\"" + songList[currentSongIndex][0] + "\" type=\"audio/mp3\">";
          audio.load(); 
          audio.play();

        } else {
          
          currentSongIndex = 0;
          audio.innerHTML = "<source src=\"" + songList[0][0] + "\" type=\"audio/mp3\">";
          musicInfoText.innerText = songList[0][1] + " - " + songList[0][2];
          audio.load(); 
          audio.play();
        }
    });

    //Begin of back button- Use if/else, true/false
    document.getElementById("back").addEventListener("click", function(){ 
        if (songList[currentSongIndex-1] != null) {
          currentSongIndex--;
          musicInfoText.innerText = songList[currentSongIndex][1] + " - " + songList[currentSongIndex][2];
          audio.innerHTML = "<source src=\"" + songList[currentSongIndex][0] + "\" type=\"audio/mp3\">";
          audio.load(); 
          audio.play();

        } else {
          
          currentSongIndex = songList.length-1;
          audio.innerHTML = "<source src=\"" + songList[songList.length-1][0] + "\" type=\"audio/mp3\">";
          musicInfoText.innerText = songList[songList.length-1][1] + " - " + songList[songList.length-1][2];
          console.log(currentSongIndex);
          audio.load(); 
          audio.play();
        }
    });
  }
        //End of back button

  
var juke = new Jukebox(songList);
  juke.addSong("audio/bensound-scifi.mp3", "sicifi", "n/a");
  juke.addSong("audio/bensound-straight.mp3", "straight", "n/a");
  juke.addSong("audio/bensound-goinghigher.mp3", "goinghigher", "n/a");
  juke.addSong("audio/bensound-popdance.mp3", "popdance", "n/a");
  
    juke.QueenbeeJuke();
}
