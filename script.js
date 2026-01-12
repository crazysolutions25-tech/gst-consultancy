const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Contact Form → WhatsApp */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const text = `Hi, I need GST/Tax services.
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Message: ${message}`;

  window.open(`https://wa.me/918977756671?text=${encodeURIComponent(text)}`, "_blank");
});
