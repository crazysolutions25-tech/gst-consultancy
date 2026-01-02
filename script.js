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

// Observe all reveal elements
reveals.forEach(r => observer.observe(r));

// 🔥 FIX: force hero to show immediately
window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach(el => {
    el.classList.add("active");
  });
});

/* AUTO NEWS (GST + BUSINESS) */
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
    let itemsAdded = 0;

    for (const feed of feeds) {
      try {
        const res = await fetch(feed.url);
        const data = await res.json();

        data.items.slice(0, 3).forEach(item => {
          if (itemsAdded >= 6) return;

          const div = document.createElement("div");
          div.className = "news-item";
          div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${feed.source} • ${new Date(item.pubDate).toDateString()}</p>
            <a href="${item.link}" target="_blank">Read more →</a>
          `;
          newsContainer.appendChild(div);
          itemsAdded++;
        });
      } catch (err) {
        console.error("News feed error:", err);
      }
    }
  }

  loadNews();
}
