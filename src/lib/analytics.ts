type Gtag = (
  command: "event",
  eventName: string,
  parameters: {
    link_url: string;
    link_text: string;
    link_domain?: string;
  },
) => void;

type WindowWithGtag = Window & {
  gtag?: Gtag;
};

export const trackLinkClick = (href: string, label: string) => {
  const gtag = (window as WindowWithGtag).gtag;

  if (typeof gtag !== "function") return;

  let linkDomain: string | undefined;
  try {
    linkDomain = new URL(href).hostname;
  } catch {
    // ignore malformed URLs
  }

  gtag("event", "link_click", {
    link_url: href,
    link_text: label,
    link_domain: linkDomain,
  });
};