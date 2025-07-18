document.addEventListener("DOMContentLoaded", function() {
   function showMessage() {
   alert("Hello! Welcome to our web app.");
   }
   document.getElementById("contact-form").addEventListener("submit", function(event) {
   event.preventDefault(); // Prevents page reload
   alert("Message Sent Successfully!");
   });
   });