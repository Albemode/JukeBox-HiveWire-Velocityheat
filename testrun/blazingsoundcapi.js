$(document).ready(function(){
  //window.onload = function(){
    SC.initialize({
     client_id: "febddc9c5bca2119f90c182ca27c026f";
});
}
  var stream;
  var songs;

  var currentSong = 0;
  var songs;
  var currentsong = 0 ;

    var hiphop = SC.get("/tracks",{
      q:"hiphop"
  $("#jukebox img").attr("src",songs[currentSong].artwork_url);
 
}).then(function(response){
      songs = response;
      console.log(songs)
  
  SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.play();
  });
});

document.getElementById("pause").addEventListener("click", function(event){ 
          stream.pause();
    });   

document.getElementById("play").addEventListener("click", function(event){ 
          stream.play();
    });   

$("#play").click(function () {
SC.get("/tracks",{
 q: $("#search").val()
}).then(function(response){
  songs = response;
  console.log(songs)
  SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
    console.log(player);
    player.play();
    });
  });
})

$("#shuffle").click(function() {
   currentsong = Math.floor(Math.random()* songs.length );
    SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.shuffle();
  });
 });

$("#next").click(function(){
  currentsong = (currentsong + 1)% songs.length;
    SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.next();
  });
});


$("#back").click(function(){
  currentsong = (currentsong - 1)% songs.length;
    SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.back();
  });
});
