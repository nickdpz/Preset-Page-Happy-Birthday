// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('container-video', {
//         videoId: 'WDbvnuzbqW8',
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//     player.mute()
//     //event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//     console.log("consola");
//     event.target.playVideo();
// }

