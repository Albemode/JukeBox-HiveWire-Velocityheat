var songs;
var currentsong = 0 ;
SC.initialize({client_id: 'febddc9c5bca2119f90c182ca27c026f'
});

 //     client_id: "febddc9c5bca2119f90c182ca27c026f"
    // })
   var stream;
  // var songs;

  // var currentSong = 0;
  // var songs;
  // var currentsong = 0 ;

// searching for songs thats given
var hiphop = SC.get("/tracks",{
 q:"hiphop"

    // var hiphop = SC.get("/tracks",{
    //   q:"hiphop"
    // $("#jukebox img").attr("src",songs[currentSong].artwork_url);
 
}).then(function(response){
  songs = response;
  console.log(songs)
  // response is getting the data from the function called on tracks 
  //this is where song  meets current
  SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
    console.log(player);
    player.play();
  });
});

 // document.getElementById("pause").addEventListener("click", function(event){ 
 //              stream.pause();
 //    });   

 //    document.getElementById("play").addEventListener("click", function(event){ 
 //              stream.play();
 //    });   

$("#load").click(function () {
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
      player.play();
  });
 });

$("#next").click(function(){
  currentsong = (currentsong + 1)% songs.length;
    SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.play();
  });
});


$("#back").click(function(){
  currentsong = (currentsong - 1)% songs.length;
    SC.stream("/tracks/" + songs[currentsong].id ).then (function(player){
      console.log(player);
      player.play();
  });
});







     

    