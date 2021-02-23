window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./js/service_worker.js');
    }
  }
  
function onPageLoad() {
var href = window.location.href;
   
    var protocol = window.location.protocol;
    
    var host = window.location.host;
    
    var pathname = window.location.pathname;
   
    var search = window.location.search;
}	