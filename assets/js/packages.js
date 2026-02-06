/**
 * Packages Data and Rendering Logic
 */

const PACKAGES_DATA = [
  {
    category: "Social Media Packages",
    description: "€50 setup",
    items: [
      {
        title: "Starter Suite",
        price: "€75",
        period: "month",
        features: ["Instagram + Facebook", "10 posts/month", "Basic strategy"],
        isFeatured: false,
      },
      {
        title: "Growth Suite",
        price: "€120",
        period: "month",
        features: [
          "Instagram + Facebook + TikTok",
          "18 posts (graphics + videos)",
          "$50 ad budget",
        ],
        isFeatured: true, // Featured for Social Media
      },
      {
        title: "Elite Suite",
        price: "€200",
        period: "month",
        features: [
          "LinkedIn + X included",
          "30 posts",
          "$100 ad budget",
          "Audits",
        ],
        isFeatured: false,
      },
    ],
  },
  {
    category: "Custom Website Development",
    description: " €50 setup",
    items: [
      {
        title: "Starter Suite",
        price: "€100",
        period: "one-time",
        features: ["Up to 5 pages", "Responsive design"],
        isFeatured: false,
      },
      {
        title: "Growth Suite",
        price: "€200",
        period: "one-time",
        features: ["Up to 12 pages", "SEO optimization", "Analytics setup"],
        isFeatured: true, // Featured for Web Dev
      },
      {
        title: "Elite Suite",
        price: "€400",
        period: "one-time",
        features: ["Unlimited pages", "Integrations", "Priority support"],
        isFeatured: false,
      },
    ],
  },
  {
    category: "SEO Optimization",
    description: " €50 setup",
    items: [
      {
        title: "Starter Suite",
        price: "€50",
        period: "month",
        features: ["Audit", "On-page optimization", "3 blogs/month"],
        isFeatured: false,
      },
      {
        title: "Growth Suite",
        price: "€100",
        period: "month",
        features: ["Competitor analysis", "Local SEO"],
        isFeatured: true, // Featured for SEO
      },
      {
        title: "Elite Suite",
        price: "€200",
        period: "month",
        features: ["Full-site", "High-authority backlinks", "GMB optimization"],
        isFeatured: false,
      },
    ],
  },
  {
    category: "AIO/SEO Optimization",
    description: " €50 setup; Adapted for general businesses",
    items: [
      {
        title: "Essential",
        price: "€200",
        period: "month",
        features: ["Content auditing", "Semantic keywords"],
        isFeatured: false,
      },
      {
        title: "Professional",
        price: "€400",
        period: "month",
        features: ["Content creation", "Competitor analysis"],
        isFeatured: false,
      },
      {
        title: "Elite",
        price: "€600",
        period: "month",
        features: ["Technical enhancements", "Training"],
        isFeatured: false,
      },
    ],
  },
  {
    category: "CRM & Pipeline Management",
    description: " €600 setup",
    items: [
      {
        title: "1-5 Users",
        price: "€600",
        period: "month",
        features: ["Full CRM Setup", "Pipeline Management", "Automation"],
        isFeatured: false,
      },
      {
        title: "6-10 Users",
        price: "€900",
        period: "month",
        features: ["Full CRM Setup", "Pipeline Management", "Automation"],
        isFeatured: false,
      },
      {
        title: "11-25 Users",
        price: "€1,500",
        period: "month",
        features: ["Full CRM Setup", "Pipeline Management", "Automation"],
        isFeatured: false,
      },
    ],
  },
  {
    category: "Specialized Services",
    description: "Pricing Inquire / Custom",
    items: [
      {
        title: "Lead Generation",
        price: "Inquire",
        period: "",
        features: ["Lead sourcing", "Qualification", "Outreach"],
        isFeatured: false,
      },
      {
        title: "Review Management",
        price: "Inquire",
        period: "",
        features: ["Tracking", "Responses", "Outreach"],
        isFeatured: false,
      },
      {
        title: "Google My Business",
        price: "Inquire",
        period: "",
        features: ["Setup", "Posting", "Reviews management"],
        isFeatured: false,
      },
    ],
  },
  {
    category: "Staffing Solutions",
    description: " ",
    items: [
      {
        title: "Start-Up (1-3)",
        price: "€6-9",
        period: "hour",
        features: ["Full-time or Part-time", "1-3 ositions"],
        isFeatured: false,
      },
      {
        title: "Expansion (4-9)",
        price: "€8-10",
        period: "hour",
        features: ["Full-time (€8-10)", "Part-time (€3-5)", "4-9 positions"],
        isFeatured: false,
      },
      {
        title: "Enterprise (10+)",
        price: "€5",
        period: "hour",
        features: ["All positions", "Scalable workforce"],
        isFeatured: false,
      },
    ],
  },
];

// Helper to generate HTML for a single package card
function createPackageCard(pkg, categoryName) {
  return `
    <div class="col-12 col-md-4 col-lg-4 mb-4">
      <div class="pricing-card h-100" onclick="window.location.href = 'pricing.html'">
        <div class="card-content pricing-card-inner">
          <div style="flex-grow: 1;">
              ${categoryName ? `<div class="package-category mb-2" style="font-size: 0.8rem; text-transform: uppercase; color: #877dff; letter-spacing: 1px;">${categoryName}</div>` : ""}
              <label class="card-title">${pkg.title}</label>
              <p class="card-price">
                ${pkg.price} <span class="price-period">${pkg.period ? pkg.period : ""}</span>
              </p>
              <ul class="feature-list">
                ${pkg.features.map((f) => `<li class="feature-item">${f}</li>`).join("")}
              </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to render packages
function renderPackages(containerId, showAll = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let contentHtml = "";

  if (showAll) {
    // Render by category
    PACKAGES_DATA.forEach((category) => {
      contentHtml += `
        <div class="col-12 mb-4 mt-4">
            <h3 class="text-center" style="color: #dfded8; margin-bottom: 0.5rem;">${category.category}</h3>
            ${category.description ? `<p class="text-center" style="color: #aaa; margin-bottom: 2rem;">${category.description}</p>` : ""}
        </div>
      `;

      const rowDiv = document.createElement("div");
      rowDiv.className = "row justify-content-center w-100 g-4";

      let cardsHtml = "";
      category.items.forEach((pkg) => {
        cardsHtml += createPackageCard(pkg, null); // Don't repeat category name inside card if grouped
      });

      contentHtml += `<div class="row justify-content-center w-100 g-4">${cardsHtml}</div>`;

      // Separator
      contentHtml += `<div class="col-12"><hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;"></div>`;
    });
  } else {
    // Render only featured (Best 3)
    let featuredPackages = [];
    PACKAGES_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        if (item.isFeatured) {
          featuredPackages.push({ ...item, categoryName: cat.category });
        }
      });
    });

    // Fallback if no featured found, take first 3
    if (featuredPackages.length === 0) {
      let count = 0;
      PACKAGES_DATA.forEach((cat) => {
        cat.items.forEach((item) => {
          if (count < 3) {
            featuredPackages.push({ ...item, categoryName: cat.category });
            count++;
          }
        });
      });
    }

    // Limit to 3 just in case
    featuredPackages = featuredPackages.slice(0, 3);

    let cardsHtml = "";
    featuredPackages.forEach((pkg) => {
      cardsHtml += createPackageCard(pkg, pkg.categoryName);
    });
    contentHtml = `<div class="row justify-content-center w-100 g-4">${cardsHtml}</div>`;
  }

  container.innerHTML = contentHtml;
}
