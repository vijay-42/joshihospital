import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, getServicesByCategory, getCategoryImage } from "@/data/services";

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
  const heroImage = getCategoryImage(service.category);

  return (
    <>
      {/* Hero — full-bleed banner image */}
      <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center overflow-hidden bg-primary-dark">
        {/* Background image */}
        <Image
          src={heroImage}
          alt={`${service.category} illustration`}
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Multi-layer overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-primary-dark/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10" />

        {/* Decorative blobs */}
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-secondary/30 rounded-full blur-3xl z-10 pointer-events-none animate-blob" />
        <div className="absolute -top-32 -left-32 w-[24rem] h-[24rem] bg-accent/20 rounded-full blur-3xl z-10 pointer-events-none animate-blob" style={{ animationDelay: "5s" }} />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-white/20 shadow-lg">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
              {service.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
              {service.title}
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {service.shortDescription}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918197371247"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-gold to-secondary hover:from-secondary hover:to-gold text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center shadow-2xl hover:shadow-gold/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Book Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+918197371247"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Specialist
              </a>
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
