document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-track]");
  if (!link || typeof window.gtag !== "function") return;

  const href = link.getAttribute("href");
  let linkDomain;
  try {
    linkDomain = new URL(href).hostname;
  } catch {
    // Relative and non-URL links do not have an external domain.
  }

  window.gtag("event", "link_click", {
    link_url: href,
    link_text: link.dataset.track,
    link_domain: linkDomain,
  });
});
