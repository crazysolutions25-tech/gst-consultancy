/* REVEAL ON SCROLL */
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

/* MOBILE MENU */
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

/* NEWS FETCH */
const newsContainer = document.getElementById("news-list");

if (newsContainer) {
  const feeds = [
    {
      source: "GST / CBIC",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.cbic.gov.in/rss/whatsnew.xml"
    },
    {
      source: "Business News",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.business-standard.com/rss/latest.rss"
    }
  ];

  async function loadNews() {
    newsContainer.innerHTML = "";
    let count = 0;

    for (const feed of feeds) {
      try {
        const res = await fetch(feed.url);
        const data = await res.json();

        data.items.slice(0, 3).forEach(item => {
          if (count >= 6) return;

          const div = document.createElement("div");
          div.className = "news-item";
          div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${feed.source}</p>
            <a href="${item.link}" target="_blank">Read more →</a>
          `;
          newsContainer.appendChild(div);
          count++;
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  loadNews();
}

/* ACCORDION */
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.maxHeight
      ? content.style.maxHeight = null
      : content.style.maxHeight = content.scrollHeight + "px";
  });
});
