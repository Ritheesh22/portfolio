document.getElementById("contactForm").onsubmit = function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you for reaching out! I'll contact you soon.";
  document.getElementById("contactForm").reset();
}
