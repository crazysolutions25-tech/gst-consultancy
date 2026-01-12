const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  navLinks.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

/* Contact Form → WhatsApp */
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = name.value;
  const mobile = mobile.value;
  const message = message.value;

  const text = `Name: ${name}%0AMobile: ${mobile}%0AMessage: ${message}`;
  window.open(`https://wa.me/918977756671?text=${text}`, "_blank");
});
