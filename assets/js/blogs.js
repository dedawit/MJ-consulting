/**
 * Blogs Data and Rendering Logic
 */

const BLOGS_DATA = [
  {
    id: 1,
    title: "Top Strategies for Scaling Your Startup",
    category: "Business Growth",
    date: "October 15, 2025",
    author: "MJ Cole",
    image: "assets/img/all-images/blog-img1.png", // using existing placeholder
    snippet:
      "Scaling a startup requires more than just capital. Discover the key strategies for sustainable growth, team expansions, and market penetration.",
    link: "#",
    isPdf: false,
  },
  {
    id: 2,
    title: "Building Self-Confidence in Leadership",
    category: "Self-Confidence",
    date: "September 28, 2025",
    author: "MJ Cole",
    image: "assets/img/all-images/blog-img2.png", // using existing placeholder
    snippet:
      "Confidence is the cornerstone of effective leadership. Learn how to overcome imposter syndrome and lead with authority and empathy.",
    link: "#",
    isPdf: false,
  },
  {
    id: 3,
    title: "Industry Trends to Watch in 2026",
    category: "Industry Trends",
    date: "November 2, 2025",
    author: "Admin",
    image: "assets/img/all-images/blog-img3.png",
    snippet:
      "Stay ahead of the curve with our analysis of the top emerging trends in digital marketing, AI adoption, and remote workforce management.",
    link: "#",
    isPdf: false,
  },
  {
    id: 4,
    title: "The Power of Regular SEO Audits",
    category: "SEO Optimization",
    date: "August 10, 2025",
    author: "Tech Team",
    image: "assets/img/all-images/blog-img15.png",
    snippet:
      "Is your website performing at its peak? Learn why regular SEO audits are crucial for maintaining visibility and ranking high on search engines.",
    link: "#", // Could link to a PDF
    isPdf: true,
  },
  {
    id: 5,
    title: "Mastering the Art of Negotiation",
    category: "Business Skills",
    date: "July 22, 2025",
    author: "MJ Cole",
    image: "assets/img/all-images/blog-img16.png",
    snippet:
      "Negotiation is an art form. Whether it's with clients, employees, or partners, these tips will help you secure the best deals.",
    link: "#",
    isPdf: false,
  },
  {
    id: 6,
    title: "Digital Transformation for Small Businesses",
    category: "Technology",
    date: "June 14, 2025",
    author: "Admin",
    image: "assets/img/all-images/blog-img19.png",
    snippet:
      "Digital transformation isn't just for enterprises. See how small businesses can leverage tools to streamline operations and boost efficiency.",
    link: "#",
    isPdf: true,
  },
];

function createBlogCard(blog) {
  // Use a placeholder if image fails or is missing (logic can be added later if needed)
  // Animation delay based on ID or index could be passed, but simple fade-in is good.

  const pdfBadge = blog.isPdf
    ? `<span class="badge bg-danger position-absolute top-0 end-0 m-3"><i class="fa-solid fa-file-pdf"></i> PDF</span>`
    : "";

  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="blog-card h-100" style="background: rgba(30, 41, 59, 0.95); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative;">
          ${pdfBadge}
          <div class="blog-img" style="height: 200px; overflow: hidden;">
              <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
          </div>
          <div class="blog-content p-4 d-flex flex-col justify-between" style="color: #dfded8;">
              <div>
                  <div class="blog-meta mb-2" style="font-size: 0.85rem; color: #877dff;">
                      <span class="me-3"><i class="fa-solid fa-layer-group"></i> ${blog.category}</span>
                      <span><i class="fa-solid fa-calendar"></i> ${blog.date}</span>
                  </div>
                  <h4 class="mb-3" style="font-weight: 700; color: white; line-height: 1.4;">${blog.title}</h4>
                  <p class="mb-4" style="font-size: 0.95rem; color: #aaa;">${blog.snippet}</p>
              </div>
              <a href="${blog.link}" class="read-more-btn" style="color: #877dff; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                  ${blog.isPdf ? "Download PDF" : "Read Full Story"} <i class="fa-solid fa-arrow-right"></i>
              </a>
          </div>
      </div>
    </div>
  `;
}

function renderBlogs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const contentHtml = `
      <div class="row g-4">
          ${BLOGS_DATA.map((blog) => createBlogCard(blog)).join("")}
      </div>
  `;

  container.innerHTML = contentHtml;

  // Add hover effect listeners via delegation or direct script
  // Simple CSS hover embedded in style attribute for now, but cleaner in CSS file.
  // We will assume styles.css handles generic .blog-card:hover if we add it,
  // but for now inline styles in JS or a small style block in HTML is safer for "one-shot"
}

// Add CSS for hover effects dynamically
const style = document.createElement("style");
style.innerHTML = `
  .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
  }
  .blog-card:hover .blog-img img {
      transform: scale(1.1);
  }
`;
document.head.appendChild(style);
