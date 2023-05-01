// Get the value of the "tab" parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const tabParam = urlParams.get('tab');

window.onload = function () {
   if (tabParam === 'practice-problems') {
      setTimeout(function () {
         document.getElementById('practice-problems-tab').click();
      }, 10); // Delay for 1 second (1000 milliseconds)
   } else if (tabParam === 'sample-problems') {
      document.getElementById('sample-problems').click();
   } else {
      // Default to the first tab if the "tab" parameter is not specified or invalid
      document.getElementById('theory-tab').click();
   }
};