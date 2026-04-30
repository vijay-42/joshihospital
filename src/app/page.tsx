import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "10,000+", label: "Patients Treated", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { value: "4,000+", label: "Surgeries Performed", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { value: "20+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "4", label: "Specialist Doctors", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
];

const services = [
  {
    title: "Andrology",
    description: "Comprehensive male reproductive and sexual health care including infertility evaluation, hormonal assessment, and advanced treatments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 icon-spin-helix">
        {/* DNA double helix — slow rotation */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 3c0 4 10 6 10 10s-10 4-10 8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 3c0 4-10 6-10 10s10 4 10 8" />
        <path strokeLinecap="round" strokeWidth={1.5} d="M8.5 6h7M8.5 9h7M8.5 15h7M8.5 18h7" />
      </svg>
    ),
    href: "/services/erectile-dysfunction-treatment-in-bangalore",
    color: "secondary",
  },
  {
    title: "Urology",
    description: "Expert diagnosis and treatment for kidney stones, urinary tract infections, obstruction, incontinence, and urological cancers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        {/* Kidneys — gentle pulse on the organ shape */}
        <path
          className="icon-pulse"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 5c-3 0-5 3-5 7s2 7 5 7c2 0 3-1 4-2.5C13 18 14 19 16 19c3 0 5-3 5-7s-2-7-5-7c-2 0-3 1-4 2.5C11 6 10 5 8 5z"
        />
        <circle cx="9" cy="12" r="1" fill="currentColor" className="icon-twinkle" />
        <circle cx="15" cy="12" r="1" fill="currentColor" className="icon-twinkle" style={{ animationDelay: "0.6s" }} />
      </svg>
    ),
    href: "/services/kidney-stone-treatment-in-bangalore",
    color: "primary",
  },
  {
    title: "Male Fertility",
    description: "Complete male fertility care: semen analysis, hormonal evaluation, surgical sperm retrieval, varicocele, and vasectomy reversal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        {/* Male symbol — arrow bobs up-right */}
        <circle cx="10" cy="14" r="5" strokeWidth={1.5} />
        <path
          className="icon-bounce-up"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10l6-6m0 0h-4m4 0v4"
        />
      </svg>
    ),
    href: "/services/male-infertility-treatment-in-bangalore",
    color: "accent",
  },
  {
    title: "Erectile Dysfunction",
    description: "Evidence-based ED treatment including medications, shockwave therapy (EDSWT), penile prosthesis implantation, and counseling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        {/* Lightning bolt — flashes/glows */}
        <path
          className="icon-flash"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 2L3 14h8l-1 8 11-14h-8l1-6z"
        />
        <path strokeLinecap="round" strokeWidth={1.5} d="M19 19l2 2M5 5L3 3" opacity="0.4" />
      </svg>
    ),
    href: "/services/erectile-dysfunction-treatment-in-bangalore",
    color: "secondary",
  },
  {
    title: "Kidney Stones",
    description: "Minimally invasive stone removal, lithotripsy, PCNL, and preventive management for all types of urinary calculi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        {/* Stones — wobble */}
        <g className="icon-wobble">
          <ellipse cx="9" cy="11" rx="4" ry="3.5" strokeWidth={1.5} />
          <ellipse cx="16" cy="15" rx="3" ry="2.5" strokeWidth={1.5} />
          <circle cx="14" cy="8" r="1.5" strokeWidth={1.5} />
        </g>
        <path strokeLinecap="round" strokeWidth={1} d="M7 10l1 1M10 12l1 0.5M15 14l1 0.5" opacity="0.5" className="icon-twinkle" />
      </svg>
    ),
    href: "/services/kidney-stone-treatment-in-bangalore",
    color: "primary",
  },
  {
    title: "Men's Health",
    description: "Holistic men's wellness including low testosterone management, prostate health, preventive cardiology, and yoga & wellness.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        {/* Heart — beats; pulse line stays steady */}
        <path
          className="icon-heartbeat"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12h2l1-2 2 4 1-2h4" />
      </svg>
    ),
    href: "/services/low-testosterone",
    color: "accent",
  },
];

const testimonials = [
  {
    name: "Rajesh K.",
    text: "Dr. Joshi's expertise in andrology is exceptional. After years of struggling, the treatment plan was effective and life-changing. Highly recommended for anyone seeking specialized care.",
    rating: 5,
  },
  {
    name: "Suresh M.",
    text: "The facilities are world-class and the staff is incredibly professional. My kidney stone treatment was handled with utmost precision. The entire experience was smooth and reassuring.",
    rating: 5,
  },
  {
    name: "Anand P.",
    text: "I was hesitant to seek help, but the compassionate approach at Joshi's Centre made all the difference. The doctors truly listen and provide personalized treatment plans.",
    rating: 5,
  },
];

const whyChoose = [
  { title: "Single Facility", desc: "Complete diagnostics and treatment under one roof — no multiple hospital visits" },
  { title: "International Standards", desc: "WHO-standard protocols and state-of-the-art equipment for every procedure" },
  { title: "Multidisciplinary Team", desc: "Specialist team including radiologist, psychologist & laparoscopic surgeon" },
  { title: "20+ Years Expertise", desc: "Board-certified urologist & andrologist with proven track record of 10,000+ patients" },
  { title: "Complete Privacy", desc: "Confidential care with private consultation rooms for sensitive conditions" },
  { title: "Ethical & Transparent", desc: "Evidence-based treatments with honest guidance and fair pricing" },
];

function getColorClasses(color: string) {
  switch (color) {
    case "secondary": return { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20" };
    case "accent": return { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20" };
    default: return { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20" };
  }
}

export default function Home() {
  return (
    <>
      {/* Hero Section — photo + content */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-secondary/25 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        </div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1a3a6b 1px, transparent 1px), linear-gradient(to bottom, #1a3a6b 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur text-primary text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-md border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Bengaluru&apos;s Trusted Urology &amp; Andrology Centre
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-[1.05] tracking-tight">
                Expert Care in{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                    Urology
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-gold/40 -z-0" />
                </span>
                {" "}&amp;{" "}
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  Andrology
                </span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-text-light leading-relaxed max-w-2xl">
                Led by <strong className="text-text">Dr. Praveen Joshi</strong>, our centre provides comprehensive,
                compassionate care for all urological and andrological conditions. Over 10,000 patients trust us with their health.
              </p>

              {/* Quick highlights */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {["20+ Years Experience", "Single-Facility Care", "100% Confidential"].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm font-semibold text-text">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918197371247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Book Appointment
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+918197371247"
                  className="bg-white/90 backdrop-blur border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 81973 71247
                </a>
              </div>

            </div>

            {/* Right: Photo */}
            <div className="lg:col-span-5 relative animate-fade-in-up animate-delay-200">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative gradient blob behind photo */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-[3rem] blur-2xl opacity-30 animate-pulse" />

                {/* Decorative offset rings */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-gold/40 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-secondary/30 rounded-full" />

                {/* Photo container with creative shape */}
                <div className="relative">
                  {/* Backdrop card */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-secondary to-primary rounded-[2.5rem] opacity-30" />
                  <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-accent to-primary rounded-[2.5rem] opacity-25" />

                  {/* Main photo frame */}
                  <div className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl border border-white/50">
                    <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
                      <Image
                        src="/dr-praveen-joshi.webp"
                        alt="Dr. Praveen Joshi — Urologist & Andrologist"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top"
                        priority
                      />
                      {/* Bottom gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />

                      {/* Top badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur text-primary px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Verified Centre
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        20+ Years
                      </div>

                      {/* Bottom name overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-[11px] uppercase tracking-widest font-semibold text-gold mb-1">Founder & Chief</div>
                        <div className="text-2xl font-bold leading-tight drop-shadow-lg">Dr. Praveen Joshi</div>
                        <div className="text-sm text-white/90 font-medium mt-1">Urologist &amp; Andrologist</div>
                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          {["MBBS", "DNB Surgery", "DNB Urology"].map((q) => (
                            <span key={q} className="text-[10px] font-semibold px-2 py-1 bg-white/20 backdrop-blur text-white rounded-full border border-white/30">
                              {q}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stats card — top left */}
                  <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl px-5 py-3 border border-gray-100 animate-float hidden sm:flex items-center gap-3 z-20" style={{ animationDelay: "0.5s" }}>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-base font-bold text-text whitespace-nowrap leading-tight">
                      <span className="text-2xl">10k+</span> Happy Customers
                    </div>
                  </div>

                  {/* Floating stats card — bottom right */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-secondary to-primary text-white rounded-2xl shadow-2xl p-4 animate-float hidden sm:block z-20" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold leading-none">4k+</div>
                        <div className="text-[10px] text-white/80 uppercase tracking-wide font-semibold mt-1">Surgeries</div>
                      </div>
                    </div>
                  </div>

                  {/* Open today badge — middle right */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full shadow-2xl px-4 py-2.5 border border-green-100 animate-float hidden xl:flex items-center gap-2 z-20" style={{ animationDelay: "1s" }}>
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </div>
                    <span className="text-xs font-bold text-text">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Quick Actions Grid */}
      <section className="relative -mt-12 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              {
                title: "Book Appointment",
                desc: "Online consultation",
                href: "https://wa.me/918197371247",
                external: true,
                grad: "from-primary to-primary-dark",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth={1.5} />
                    <path d="M3 9h18M8 3v4M16 3v4" strokeWidth={1.5} strokeLinecap="round" />
                    <circle cx="12" cy="14" r="2" strokeWidth={1.5} />
                  </svg>
                ),
              },
              {
                title: "Find a Doctor",
                desc: "Meet our specialists",
                href: "/doctors",
                external: false,
                grad: "from-secondary to-primary",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <circle cx="12" cy="8" r="4" strokeWidth={1.5} />
                    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeWidth={1.5} strokeLinecap="round" />
                    <circle cx="18" cy="18" r="3" strokeWidth={1.5} />
                    <path d="M20 20l2 2" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "WhatsApp Us",
                desc: "Quick chat support",
                href: "https://wa.me/918197371247",
                external: true,
                grad: "from-green-500 to-green-700",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
              {
                title: "Call Now",
                desc: "+91 81973 71247",
                href: "tel:+918197371247",
                external: false,
                grad: "from-gold to-secondary",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
            ].map((item) => {
              const className = "group relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-5 lg:p-6 block";
              const inner = (
                <>
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.grad} opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`} />
                  <div className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${item.grad} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    {item.icon}
                  </div>
                  <h3 className="relative font-bold text-text text-base lg:text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="relative text-xs lg:text-sm text-text-light mt-1">{item.desc}</p>
                  <div className="relative mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Get Started
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </>
              );
              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={item.title} href={item.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative mt-10 lg:mt-12">
        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-white rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 border-2 border-white rounded-full" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
            <div className="text-center mb-10">
              <span className="inline-block text-gold font-semibold text-xs uppercase tracking-widest mb-2">By the Numbers</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">A Track Record of Excellence</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/80 mt-1.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Decorative kidney visual */}
        <div className="hidden lg:block absolute top-10 right-0 w-80 h-80 pointer-events-none opacity-30">
          <Image
            src="/kidney.svg"
            alt=""
            fill
            sizes="320px"
            className="object-contain animate-float"
          />
        </div>
        <div className="hidden lg:block absolute bottom-10 -left-16 w-64 h-64 pointer-events-none opacity-20">
          <Image
            src="/kidney.svg"
            alt=""
            fill
            sizes="256px"
            className="object-contain animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Our Specializations</h2>
            <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
              Comprehensive care across all areas of urology and andrology, backed by cutting-edge technology and decades of expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${colors.border} hover:-translate-y-1 group block`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{service.description}</p>
                  <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} group-hover:gap-2.5 transition-all`}>
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors text-lg group"
            >
              View All Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bg-alt py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Why Choose Joshi&apos;s Centre?
              </h2>
              <p className="mt-6 text-text-light leading-relaxed text-lg">
                Founded by Dr. Praveen Joshi with a vision to provide world-class urological and andrological care in Bengaluru. We combine medical expertise with genuine compassion.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text text-sm">{item.title}</h3>
                      <p className="text-xs text-text-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Decorative offset panels */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-secondary to-primary rounded-3xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-accent to-primary rounded-3xl opacity-15" />

              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-60 h-60 border-2 border-white rounded-full" />
                </div>

                {/* Photo */}
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/dr-praveen-joshi.webp"
                    alt="Dr. Praveen Joshi — Founder & Chief Urologist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/40 to-transparent" />

                  {/* Experience badge */}
                  <div className="absolute top-5 right-5 bg-gold text-primary-dark px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    20+ Years
                  </div>
                </div>

                {/* Info panel */}
                <div className="relative p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">Dr. Praveen Joshi</h3>
                  <p className="text-gold font-medium mt-1">Founder &amp; Chief Urologist</p>
                  <p className="text-white/80 mt-4 leading-relaxed text-sm">
                    Renowned urologist &amp; andrologist specializing in male reproductive health, penile reconstruction, and complex urological surgeries.
                  </p>
                  <div className="flex items-center gap-4 mt-5 pt-5 border-t border-white/15 text-xs text-white/70">
                    <span className="font-semibold">MBBS</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="font-semibold">DNB Surgery</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="font-semibold">DNB Urology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">What Our Patients Say</h2>
            <p className="mt-4 text-text-light text-lg">
              Hear from those who have experienced our care firsthand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="absolute -top-3 left-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{t.name}</p>
                    <p className="text-xs text-text-light">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Conditions We Treat</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Specialized Care Areas</h2>
            <p className="mt-4 text-text-light max-w-2xl mx-auto">
              Comprehensive treatment for the most common urological and andrological conditions, with deep specialization in each area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { name: "Erectile Dysfunction", slug: "erectile-dysfunction-treatment-in-bangalore" },
              { name: "Male Fertility", slug: "male-infertility-treatment-in-bangalore" },
              { name: "Premature Ejaculation", slug: "delayed-ejaculation-treatment-in-bangalore" },
              { name: "Penile Prosthesis", slug: "penile-prosthesis-reconstruction-in-bangalore" },
              { name: "Testicular Problems", slug: "testicular-treatment-in-bangalore" },
              { name: "Kidney Stones", slug: "kidney-stone-treatment-in-bangalore" },
              { name: "Prostate Disorders", slug: "prostate-disorders-treatment-in-bangalore" },
              { name: "Urinary Infections", slug: "urinary-tract-infection-treatment-in-bangalore" },
              { name: "Urological Cancers", slug: "urological-cancers-treatment-in-bangalore" },
              { name: "Low Testosterone", slug: "low-testosterone" },
              { name: "IUI Treatment", slug: "iui-treatment-in-bangalore" },
              { name: "Female Fertility", slug: "female-fertility-treatment-in-bangalore" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-3 hover:border-primary hover:shadow-md hover:bg-primary-light transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-text group-hover:text-primary flex-1 transition-colors">{c.name}</span>
                <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-12 lg:py-16 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Specialists</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text">Meet the Team</h2>
              <p className="mt-3 text-text-light max-w-xl">
                A multidisciplinary team of board-certified specialists working together for your care.
              </p>
            </div>
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md self-start md:self-auto"
            >
              View All Doctors
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {[
              { slug: "dr-praveen-joshi", name: "Dr. Praveen Joshi", title: "Founder, Urology & Andrology", img: "/dr-praveen-joshi.webp", grad: "from-primary to-primary-dark" },
              { slug: "dr-meera-rao", name: "Dr. Meera Rao", title: "Fertility & IVF", img: "/doctor.svg", grad: "from-accent to-primary" },
              { slug: "dr-kanusha", name: "Dr. Kanusha", title: "Clinical Psychology", img: "/doctor.svg", grad: "from-gold to-secondary" },
            ].map((d) => (
              <Link key={d.slug} href={`/doctors/${d.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
                  <Image src={d.img} alt={d.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t ${d.grad} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="text-xs font-semibold">View Profile →</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-text group-hover:text-primary transition-colors">{d.name}</h3>
                  <p className="text-xs text-text-light mt-1">{d.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations / Trust strip */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-text-light font-semibold text-xs uppercase tracking-widest">Accreditations & Memberships</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "WHO Standards", sub: "World Health Organization" },
              { label: "ISO Certified", sub: "Quality Management" },
              { label: "USI Member", sub: "Urological Society of India" },
              { label: "ISSM", sub: "Int'l Society for Sexual Medicine" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 bg-bg-alt rounded-xl p-4 border border-gray-100 hover:border-gold hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-secondary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text leading-tight">{b.label}</div>
                  <div className="text-[11px] text-text-light mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Band */}
    </>
  );
}
