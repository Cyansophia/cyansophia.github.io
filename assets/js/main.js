// ============================================
// Lanjia's site — shared interactive code
// ============================================

// --- Lightbox: click a painting/photo to enlarge it ---
// How it works:
//   1. When the page loads, find every <img> inside .gallery.
//   2. When one is clicked, show the lightbox (a full-screen black overlay)
//      with a big copy of that image, plus an optional caption below it.
//      (The caption comes from a `data-caption` attribute on the <img>.)
//   3. Clicking anywhere on the overlay, or pressing Esc, closes it.

document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img, .gallery-group img, .project-gallery img");
  if (galleryImages.length === 0) return;

  // Build the lightbox once and add it to the page
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<figure class="lightbox-figure">' +
      '<img alt="Enlarged image" />' +
      '<figcaption class="lightbox-caption"></figcaption>' +
    '</figure>';
  document.body.appendChild(lightbox);

  const bigImage = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      bigImage.src = img.src;
      bigImage.alt = img.alt || "Enlarged image";
      const text = img.getAttribute("data-caption") || "";
      caption.textContent = text;
      caption.style.display = text ? "block" : "none";
      lightbox.classList.add("open");
    });
  });

  // Close when clicking the overlay or pressing Escape
  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.classList.remove("open");
    }
  });
});
