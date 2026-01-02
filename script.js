/* ================= REVEAL ON SCROLL ================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(r => observer.observe(r));

window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach(el => {
    el.classList.add("active");
  });
});

/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* ================= ACCORDION ================= */
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + "px");
  });
});
