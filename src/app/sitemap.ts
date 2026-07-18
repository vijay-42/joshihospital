import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

export const dynamic = "force-static";

export const SITE_URL = "https://joshiuroandrology.com";

// Static export needs trailing slashes to match next.config `trailingSlash: true`
const url = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/about/",
    "/doctors/",
    "/contact/",
    "/services/",
    "/sitemap/",
  ];

  const categoryPages = [
    "/services/andrology-treatment-in-bangalore/",
    "/services/urology-treatment-in-bangalore/",
    "/services/mens-health/",
    "/services/fertility-treatment-in-bangalore/",
    "/services/additional-services/",
  ];

  const servicePages = services.map((s) => `/services/${s.slug}/`);
  const doctorPages = doctors.map((d) => `/doctors/${d.slug}/`);

  return [...staticPages, ...categoryPages, ...servicePages, ...doctorPages].map(
    (path) => ({
      url: url(path),
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
    })
  );
}
