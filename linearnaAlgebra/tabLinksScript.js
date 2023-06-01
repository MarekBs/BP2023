// Get the value of the "tab" parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const tabParam = urlParams.get('tab');

window.onload = function () {
   if (tabParam === 'practice-problems') {
      setTimeout(function () {
         document.getElementById('practice-problems-tab').click();
      }, 100); // Delay for 1 second (1000 milliseconds)
   } 
   
};