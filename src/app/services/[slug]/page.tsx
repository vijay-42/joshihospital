import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, getServicesByCategory, getServiceImage } from "@/data/services";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Joshi's Andrology & Urology Centre`,
    description: service.shortDescription,
  };
}

const accentMap = {
  primary: { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20", grad: "from-primary to-primary-dark" },
  secondary: { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20", grad: "from-secondary to-primary" },
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", grad: "from-accent to-primary" },
  gold: { bg: "bg-gold-light", text: "text-gold", border: "border-gold/20", grad: "from-gold to-secondary" },
} as const;

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const a = accentMap[service.accent];
  const related = getServicesByCategory(service.category).filter((s) => s.slug !== service.slug).slice(0, 3);
  const hasBannerImage = !!service.image;
  const heroImage = getServiceImage(service);

  return (
    <>
      {/* Hero — banner with content overlay on top */}
      <section className="relative bg-white overflow-hidden">
        {/* Background layer: image OR gradient fallback */}
        {hasBannerImage ? (
          <Image
            src={heroImage}
            alt={`${service.title} banner`}
            fill
            sizes="100vw"
            priority
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${a.grad} z-0`}>
            {/* Decorative elements for fallback */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 right-10 w-72 h-72 border-2 border-white rounded-full" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 border-2 border-white rounded-full" />
            </div>
          </div>
        )}

        {/* Light/dark overlay on left for text legibility */}
        <div
          className={`absolute inset-0 z-10 ${
            hasBannerImage
              ? "bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/70"
              : "bg-gradient-to-r from-black/0 to-transparent"
          }`}
        />

        <Link
          href="/services"
          className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 text-sm bg-white/95 backdrop-blur text-text hover:text-primary px-3 py-1.5 rounded-full shadow-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          All Services
        </Link>

        {/* Content overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border ${
                hasBannerImage
                  ? `${a.bg} ${a.text} ${a.border}`
                  : "bg-white/15 backdrop-blur-md text-white border-white/25"
              }`}
            >
              <svg className={`w-3.5 h-3.5 ${hasBannerImage ? a.text : "text-gold"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
              {service.category}
            </div>

            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight ${
                hasBannerImage ? "text-text" : "text-white drop-shadow-lg"
              }`}
            >
              {service.title}
            </h1>

            <p
              className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
                hasBannerImage ? "text-text-light" : "text-white/90"
              }`}
            >
              {service.shortDescription}
            </p>

            {/* Feature pills */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 max-w-xl">
              {service.whyChooseUs.slice(0, 4).map((point) => (
                <div
                  key={point}
                  className={`rounded-xl px-3 py-2 text-[11px] md:text-xs font-semibold leading-snug ${
                    hasBannerImage
                      ? "bg-white/85 backdrop-blur border border-gray-200 text-text shadow-sm"
                      : "bg-white/12 backdrop-blur-md border border-white/20 text-white/95"
                  }`}
                >
                  <div className="flex items-start gap-1.5">
                    <svg
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${hasBannerImage ? a.text : "text-gold"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust pill */}
            <div
              className={`mt-6 inline-flex items-center gap-3 rounded-full pl-2 pr-5 py-2 shadow-lg ${
                hasBannerImage
                  ? `bg-gradient-to-r ${a.grad} text-white`
                  : "bg-white/15 backdrop-blur-md border border-white/25 text-white"
              }`}
            >
              <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide">
                Trusted, confidential care &mdash; tailored to you.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-text mb-6">Overview</h2>
              <div className="space-y-5">
                {service.longDescription.map((para, i) => (
                  <p key={i} className="text-text-light leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Symptoms */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-text mb-6">Common Signs &amp; Symptoms</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.symptoms.map((s) => (
                    <div key={s} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <div className={`w-7 h-7 rounded-full ${a.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className={`w-4 h-4 ${a.text}`} fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="4" />
                        </svg>
                      </div>
                      <span className="text-sm text-text">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-text mb-6">Treatments We Offer</h2>
                <div className="space-y-4">
                  {service.treatments.map((t, i) => (
                    <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.grad} flex items-center justify-center shrink-0 text-white font-bold`}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-text text-lg">{t.name}</h3>
                        <p className="text-sm text-text-light mt-1.5 leading-relaxed">{t.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-text mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {service.faqs.map((f) => (
                      <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                        <summary className="cursor-pointer p-5 flex items-center justify-between font-semibold text-text hover:text-primary transition-colors">
                          <span>{f.q}</span>
                          <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-sm text-text-light leading-relaxed border-t border-gray-100 pt-4">
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Why choose us */}
                <div className={`bg-white rounded-2xl shadow-md border border-gray-100 p-6`}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {service.whyChooseUs.map((w) => (
                      <li key={w} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full ${a.bg} ${a.text} flex items-center justify-center shrink-0 mt-0.5`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-text">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-bg-alt py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">Related {service.category} Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s) => {
                const ra = accentMap[s.accent];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border ${ra.border} transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${ra.bg} ${ra.text} flex items-center justify-center mb-4`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                      </svg>
                    </div>
                    <h3 className="font-bold text-text group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text-light mt-2 line-clamp-2">{s.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
