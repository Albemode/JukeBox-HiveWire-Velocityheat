var songs;

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