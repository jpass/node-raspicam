var RaspiCam = require("../lib/raspicam");


var camera = new RaspiCam({
	mode: "photo",
	output: "./photo/image.jpg", // image_000001.jpg, image_000002.jpg
	encoding: "jpg",
	timeout: 0 // take the picture immediately
});

camera.start();

camera.on("start", function(){
	console.log("photo started");
});

camera.on("read", function( err, filename ){
	console.log("photo image captured with filename: " + filename);
});