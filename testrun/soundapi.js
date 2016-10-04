document.addEventlistener("DOMContentLoaded",function(){
	//create our jukebo box
	juke = new Jukebox( document.getElementById("jukebox"), "mp3" );
	juke.addsong(
		"Amy stroup", "Just You", "amy-stroup_just-http://stackoverflow.com/questions/9419263/playing-audio-with-javascriptyou.mp3").addSong(
		"Foo Fighters", "Iron Rooster", "foo-fighters_iron-rooster.mp3").addSong(
		"Bluegrass Mastery", "Any Old Road", "bluegrass-mastery_any-old-road.mp3"),

		//old preobject code
		Array.from(document.getElementByClassname("song")).forEach(
			function(s) {
				s.addEventlistener("click",function(event){
					//console
					console.log(Array.form(event.target))
				})
			})
})
























var x;
$(document).ready(function() {
	x = JukeBox();
	$('').on("ended", x.playNext)
	$("").click(function(event){
		x.updateSource($event.target).attr("data-value");
	console.log(event)
	});
	SC.initialize({
		client_id: 'febddc9c5bca2119f90c182ca27c026f',
	});
});
$("#loadTracks").live("click", function(){
    SC.get("/tracks/", {limit: 1}, function(tracks){
      var track = tracks[0];
      SC.oEmbed(Tracks.uri, document.getElementById("track"));
    });
  });
	SC.get("/tracks/").then







// SC.oEmbed('https://soundcloud.com/playstation/bloodborne-cleric-beast',{
// 	auto_play: true
// }).then(function(oEmbed) {
// 	$("body").append(oEmbed);
// 		console.log('oEmbed response: ', oEmbed);
// 	});
// // SC.stream('/tracks/293').then(function(player){
// //   player.play();
// // });
// $("#embedTrack").click(function() {
//     var player = $("#player");
//     SC.oEmbed('https://soundcloud.com/mureed-abbas-shah/sami-meri-waar-by-qb-umair', {
//       maxheight: 200
//     }, function(res) {
//       $("#player").html(res.html);
//     });
//   });
	