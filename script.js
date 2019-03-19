<<<<<<< HEAD
var bgImageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg","06.jpg","07.jpg","10.jpg"],
=======
var bgImageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"],
>>>>>>> master
base = "img/wallpapers/",
secs = 6;
bgImageArray.forEach(function(img){
	new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
            document.documentElement.style.backgroundSize ="cover";   
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();


