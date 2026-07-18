import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { doctors } from "@/data/doctors";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap | Joshi's Andrology & Urology Centre",
  description:
    "Browse all pages of Joshi's Andrology & Urology Centre — services, specialties, doctors, and more.",
  path: "/sitemap/",
});

const categorySlugs: Record<string, string> = {
  "Andrology": "andrology-treatment-in-bangalore",
  "Urology": "urology-treatment-in-bangalore",
  "Men's Health": "mens-health",
  "Fertility": "fertility-treatment-in-bangalore",
  "Additional Services": "additional-services",
};

const mainPages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Sitemap
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text">Explore the Site</h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl">
            Every page on Joshi&apos;s Andrology &amp; Urology Centre, organised by section.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main pages */}
          <div>
            <h2 className="text-xl font-bold text-text mb-5 pb-2 border-b border-gray-100">Main Pages</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
              {mainPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-text-light hover:text-primary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service categories */}
          {serviceCategories.map((cat) => {
            const items = getServicesByCategory(cat.name);
            return (
              <div key={cat.name}>
                <h2 className="text-xl font-bold text-text mb-5 pb-2 border-b border-gray-100">
                  <Link href={`/services/${categorySlugs[cat.name]}`} className="hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-text-light hover:text-primary transition-colors">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Doctors */}
          <div>
            <h2 className="text-xl font-bold text-text mb-5 pb-2 border-b border-gray-100">
              <Link href="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {doctors.map((d) => (
                <li key={d.slug}>
                  <Link href={`/doctors/${d.slug}`} className="text-text-light hover:text-primary transition-colors">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* XML sitemap pointer */}
          <p className="text-sm text-text-light pt-4 border-t border-gray-100">
            Looking for the XML sitemap for search engines?{" "}
            <a href="/sitemap.xml" className="text-primary font-medium hover:text-secondary transition-colors">
              /sitemap.xml
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
