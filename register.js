window.onload = () => {
    'use strict';
	
	// used for welcoming player
	function splitFunction() {

		console.log("split function called")
		var url = window.location.search;
		console.log(url);
		var result = url.split("="); // Splits string based on =
		document.getElementById("WelcomeGamerTag").innerHTML = "Welcome, " + result[1];
}
	splitFunction();
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service_worker.js');
    }
  }