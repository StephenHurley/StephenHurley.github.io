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

function onPageLoad() {
var href = window.location.href;
   
    var protocol = window.location.protocol;
    
    var host = window.location.host;
    
    var pathname = window.location.pathname;
   
    var search = window.location.search;
	
	console.log("index page load called");
}
	
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service_worker.js');
    }
  }