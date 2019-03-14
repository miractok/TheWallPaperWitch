var bgImageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg","06.jpg","07.jpg",""],
base = "img/wallpapers/",
secs = 2;
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


function fadeImage() {
    $('img').first().fadeOut(2000, function suivante() {
        $(this).next('img').fadeOut(2000,suivante);
    });
  }


  function fadeOutEffect() {
    var fadeTarget = document.getElementById("target");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

document.getElementById("target").addEventListener('click', fadeOutEffect);