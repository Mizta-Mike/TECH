// Wait for the DOM to load
/*document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

    const name = document.getElementById("name").value;

    // Show message
    window.location.href = `thankyou.html?name=${encodeURIComponent(name)}`;
  });
});*/
// Extract the 'name' parameter from the URL
//const params = new URLSearchParams(window.location.search);
//const name = params.get("name");

// If a name is provided, personalize the greeting
/*if (name) {
    document.getElementById("greeting").textContent=Thank you,`${name}!`;
    const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});*/
document.addEventListener('DOMContentLoaded', () => { });
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.onclick = function () {
  navLinks.classList.toggle('active');
  alert("Thanks for visiting our site");
};
//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// });
function validateForm() {
  const name = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const message = document.forms["contactForm"]["message"].value.trim();

  if (!name || !email || !message) {
    alert("Request annulled. Please fill in all the fields.");
    return false;
  }
  return true;
}
function sendEmail(e) {
       e.preventDefault();

       if (!validateForm()) return;

       emailjs.sendForm('service_mmc4anm', 'template_5nueprb', '#sR8W0LftPQ0GOA5ed')
         .then(function(response) {
           alert("Message sent successfully!");
         }, function(error) {
           alert("Failed to send message. Please try again.");
         });
     }
document.getElementById('contactForm').addEventListener('submit', sendEmail);
document.getElementById('whatsappLink').addEventListener('click', function(e) {
     e.preventDefault();

     const name = document.forms["contactForm"]["name"].value.trim();
     if (!name) {
       alert("Please enter your name in the form before proceeding.");
       return;
     }

     const message = `Hi Tech Xpertz Networks, I am name. I'd like to become a tech xpert. How do I begin¿;
     const phoneNumber = '+237677586019'; // Replace with your WhatsApp number in international format, e.g., '237612345678'
     const whatsappURL = `https://wa.me/{phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappURL, '_blank');
   });
   



  

