import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories, getServicesByCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Joshi's Andrology & Urology Centre",
  description:
    "Integrated andrology, urology, men's health and additional services — comprehensive care under one roof at Joshi's Andrology & Urology Centre, Bengaluru.",
};

const accentMap = {
  primary: { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20", grad: "from-primary to-primary-dark", solid: "bg-primary" },
  secondary: { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20", grad: "from-secondary to-primary", solid: "bg-secondary" },
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", grad: "from-accent to-primary", solid: "bg-accent" },
  gold: { bg: "bg-gold-light", text: "text-gold", border: "border-gold/20", grad: "from-gold to-secondary", solid: "bg-gold" },
} as const;

const categoryAnchors: Record<string, string> = {
  "Andrology": "andrology",
  "Urology": "urology",
  "Men's Health": "mens-health",
  "Fertility": "fertility",
  "Additional Services": "additional",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Integrated Andrology &amp; Urology Services
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Comprehensive care across five specialised divisions — Andrology, Urology, Men&apos;s Health, Fertility, and Additional Services — all under one roof at Joshi&apos;s Centre.
            </p>
          </div>

          {/* Category jump bar */}
          <div className="mt-10 flex flex-wrap gap-3">
            {serviceCategories.map((cat) => {
              const a = accentMap[cat.accent];
              return (
                <a
                  key={cat.name}
                  href={`#${categoryAnchors[cat.name]}`}
                  className={`inline-flex items-center gap-2 ${a.bg} ${a.text} px-5 py-2.5 rounded-full text-sm font-bold border ${a.border} hover:shadow-md transition-shadow`}
                >
                  <span className={`w-2 h-2 rounded-full ${a.solid}`} />
                  {cat.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections by category */}
      {serviceCategories.map((cat, idx) => {
        const a = accentMap[cat.accent];
        const items = getServicesByCategory(cat.name);
        const altBg = idx % 2 === 1;
        return (
          <section
            key={cat.name}
            id={categoryAnchors[cat.name]}
            className={`py-20 lg:py-24 scroll-mt-32 ${altBg ? "bg-bg-alt" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
                <div>
                  <div className={`inline-flex items-center gap-2 ${a.bg} ${a.text} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4`}>
                    {cat.name}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text">
                    {cat.description}
                  </h2>
                  <p className="mt-3 text-text-light max-w-2xl">
                    {items.length} specialized services in this category.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border ${a.border} hover:-translate-y-1 block`}
                  >
                    <div className={`w-12 h-12 ${a.bg} rounded-xl flex items-center justify-center ${a.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed line-clamp-3">{s.shortDescription}</p>
                    <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${a.text} group-hover:gap-2 transition-all`}>
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

    </>
  );
}
