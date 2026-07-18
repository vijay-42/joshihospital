import type { Metadata } from "next";

const SITE_URL = "https://joshiuroandrology.com";
const SITE_NAME = "Joshi's Andrology & Urology Centre";

// Social scrapers (Facebook/WhatsApp/LinkedIn/Twitter) don't render SVG —
// fall back to the logo for any page whose image is a vector placeholder.
const socialImage = (image?: string) =>
  image && !image.endsWith(".svg") ? image : "/logo.webp";

/**
 * Builds per-page title/description/canonical plus matching OpenGraph and
 * Twitter Card tags, so social previews reflect the page instead of always
 * falling back to the root layout's site-wide OG/Twitter defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = socialImage(image);
  // The site logo is small and wide (253x75) — wrong shape for a "large image"
  // card, so only use that card style when a real photo/banner is available.
  const hasDedicatedImage = ogImage !== "/logo.webp";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_IN",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: hasDedicatedImage ? "summary_large_image" : "summary",
      title,
      description,
      images: [ogImage],
    },
  };
}
