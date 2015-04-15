
$(document).ready(function() {


	$('video').videoBG({
		position:"absolute",
		zIndex:0,
		mp4:'video/nasa.mp4',
		ogv:'video/nasa.ogv',
		webm:'video/nasa.webm',
		poster:'img/space.jpg',
		opacity:1,
		fullscreen:true,
	});
	
		
})

$('#vid').videoBG({
	mp4:'video/nasa.mp4',
	ogv:'video/nasa.ogv',
	webm:'video/nasa.webm',
	poster:'img/space.jpg',
	scale:true,
	zIndex:0
});