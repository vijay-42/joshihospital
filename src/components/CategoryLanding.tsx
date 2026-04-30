import Link from "next/link";
import Image from "next/image";
import {
  type ServiceCategory,
  serviceCategories,
  getServicesByCategory,
  getCategoryImage,
} from "@/data/services";

const accentMap = {
  primary: { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20", grad: "from-primary to-primary-dark", solid: "bg-primary" },
  secondary: { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20", grad: "from-secondary to-primary", solid: "bg-secondary" },
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", grad: "from-accent to-primary", solid: "bg-accent" },
  gold: { bg: "bg-gold-light", text: "text-gold", border: "border-gold/20", grad: "from-gold to-secondary", solid: "bg-gold" },
} as const;

const categorySlugs: Record<ServiceCategory, string> = {
  "Andrology": "andrology-treatment-in-bangalore",
  "Urology": "urology-treatment-in-bangalore",
  "Men's Health": "mens-health",
  "Additional Services": "additional-services",
};

const categoryDetails: Record<ServiceCategory, {
  tagline: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
}> = {
  "Andrology": {
    tagline: "Andrology Treatment in Bangalore — trusted experts in Sahakar Nagar.",
    intro: [
      "If you are looking for expert andrology treatment in Bangalore, Joshi's Andrology and Urology Hospital is your trusted destination. Recognised as the best andrology hospital in Sahakar Nagar, Bangalore, we specialise in diagnosing and treating a wide range of male health concerns with advanced medical care and personalised attention.",
      "Our expert team offers complete male reproductive and sexual health treatments under one roof — including male infertility, erectile dysfunction (ED), premature ejaculation, low testosterone, prostate issues, and sexual health disorders. With years of experience and modern technology, we ensure accurate diagnosis and effective treatment plans tailored to each patient.",
      "We have earned a reputation in Sahakar Nagar by offering compassionate care, advanced treatments, and high success rates. We understand the importance of privacy and ensure a comfortable, judgment-free environment for every patient.",
    ],
    highlights: [
      { title: "Advanced Diagnostic Facilities", desc: "Precise evaluation with onsite WHO-standard semen analysis, DNA fragmentation, scrotal Doppler, and advanced laboratory services." },
      { title: "Experienced Andrologists & Urologists", desc: "Led by Dr. Praveen Joshi with 20+ years of focused expertise — over 10,000 patients treated and 4,000+ surgeries performed." },
      { title: "Confidential, Patient-Friendly Consultations", desc: "Private consultation rooms and a discreet process designed to make sensitive conversations easier." },
      { title: "Personalised Treatment Plans", desc: "Tailored care for faster recovery — cutting-edge treatments for male infertility, ED, varicocele, hormonal disorders, and reproductive issues." },
    ],
  },
  "Urology": {
    tagline: "Urology Treatment in Bangalore — expert care at Sahakar Nagar's trusted hospital.",
    intro: [
      "If you are looking for advanced urology treatment in Bangalore, Joshi's Andrology and Urology Hospital is your trusted destination for comprehensive and specialised care. Recognised as one of the best urology hospitals in Sahakar Nagar, Bangalore, we provide world-class diagnosis and treatment for a wide range of urological conditions.",
      "We understand that urological issues can impact your quality of life. Our team of experienced urologists and andrology specialists offers personalised treatment plans using the latest medical technologies. Whether you are dealing with kidney stones, prostate problems, urinary tract infections (UTIs), male infertility, erectile dysfunction, or bladder disorders, we ensure accurate diagnosis and effective treatment.",
      "Our hospital is equipped to handle all types of urological conditions with precision and care — including kidney stone treatment with laser and minimally invasive procedures, BPH and prostate enlargement care, UTI treatment, male infertility and andrology services, erectile dysfunction treatment, and bladder & urinary disorders management. Advanced diagnostic tools and minimally invasive techniques mean faster recovery, reduced pain, and better outcomes for our patients.",
      "Don't ignore symptoms like pain during urination, frequent urination, or kidney discomfort — early diagnosis can prevent complications. Visit Joshi's Andrology and Urology Hospital, the best urology hospital in Sahakar Nagar, Bangalore, for expert consultation and effective treatment. Take the first step towards better urinary health today.",
    ],
    highlights: [
      { title: "Highly Experienced Urologists in Bangalore", desc: "Specialist urology and andrology team led by Dr. Praveen Joshi, with over 20 years of focused experience." },
      { title: "Advanced Technology & Modern Infrastructure", desc: "Onsite imaging, laser lithotripsy, endoscopic suite, and minimally invasive surgical facilities under one roof." },
      { title: "Patient-Focused & Confidential Care", desc: "Personalised treatment plans, private consultation rooms, and a supportive environment from diagnosis through recovery." },
      { title: "Convenient Sahakar Nagar Location", desc: "Easily accessible Bangalore location — a trusted name for the best urology treatment in the city." },
    ],
  },
  "Men's Health": {
    tagline: "Holistic wellness for the modern man.",
    intro: [
      "Men's health goes beyond any single organ — it spans hormonal balance, cardiovascular health, metabolic disease, mental wellness, and lifestyle. Our integrated men's health programme addresses all of these together, recognising how deeply they influence one another.",
      "Whether you're managing low testosterone, screening for prostate health, optimising cardiovascular risk, or seeking counseling and wellness support, our coordinated team delivers proactive, preventive, and personalised care for men at every stage of life.",
    ],
    highlights: [
      { title: "Hormonal Optimisation", desc: "Specialist-led testosterone replacement therapy with strict safety monitoring and lifestyle integration." },
      { title: "Cardiometabolic Care", desc: "Recognising the ED-cardiac link, we screen and manage diabetes, hypertension, and cardiovascular risk." },
      { title: "Mental & Sexual Wellness", desc: "Onsite clinical psychologist for performance anxiety, depression, and relationship support." },
      { title: "Yoga & Lifestyle", desc: "Evidence-based wellness practices, structured programs, and lifestyle coaching for sustainable health." },
    ],
  },
  "Additional Services": {
    tagline: "Fertility, imaging, and supporting specialties — all under one roof.",
    intro: [
      "Comprehensive andrology and urology care often requires more than one specialist. Our additional services bring fertility, gynaecology, advanced laboratory, imaging, and other supporting specialties into the same building — so couples and families don't have to coordinate care across multiple hospitals.",
      "From IUI, IVF, ICSI, and PICSI to advanced semen analysis, scrotal doppler, dermatology, and internal medicine, we deliver coordinated multidisciplinary care led by experienced consultants.",
    ],
    highlights: [
      { title: "Couples Fertility Care", desc: "Integrated male + female fertility evaluation with IUI, IVF, ICSI, and PICSI under one roof." },
      { title: "Onsite Andrology Lab", desc: "WHO 2021 standard semen analysis, DNA fragmentation, and surgical sperm retrieval support." },
      { title: "Specialist Imaging", desc: "High-resolution scrotal doppler, renal/prostate ultrasound, and image-guided procedures by a consultant radiologist." },
      { title: "Cosmetology & Internal Medicine", desc: "Dermatology, anti-ageing, and general medicine consultations for complete adult care." },
    ],
  },
};

export default function CategoryLanding({ category }: { category: ServiceCategory }) {
  const meta = serviceCategories.find((c) => c.name === category);
  if (!meta) return null;
  const a = accentMap[meta.accent];
  const items = getServicesByCategory(category);
  const details = categoryDetails[category];
  const otherCategories = serviceCategories.filter((c) => c.name !== category);
  const heroImage = getCategoryImage(category);

  return (
    <>
      {/* Hero — full-bleed banner image */}
      <section className="relative min-h-[360px] lg:min-h-[420px] flex items-center overflow-hidden bg-primary-dark">
        {/* Background image */}
        <Image
          src={heroImage}
          alt={`${category} illustration`}
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

        {/* Floating service count badge — top-right */}
        <div className="hidden lg:block absolute top-10 right-10 z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-xl text-white text-center">
            <div className="text-4xl font-bold text-gold leading-none">{items.length}</div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-white/80 mt-1">Services</div>
          </div>
        </div>

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
              <span className={`w-1.5 h-1.5 rounded-full bg-gold`} />
              {category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
              {category}
            </h1>
            <p className="mt-3 text-lg md:text-xl lg:text-2xl font-medium text-gold drop-shadow-lg">
              {details.tagline}
            </p>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {meta.description} &mdash; {items.length} specialised services.
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

      {/* Intro / About */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-text mb-6">About {category}</h2>
            <div className="space-y-5">
              {details.intro.map((p, i) => (
                <p key={i} className="text-text-light text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className={`bg-gradient-to-br ${a.grad} rounded-2xl p-6 text-white shadow-xl sticky top-28`}>
              <div className="text-xs uppercase tracking-widest text-white/80 font-bold mb-3">At a Glance</div>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-white/15">
                  <span className="text-sm text-white/80">Services Offered</span>
                  <span className="text-2xl font-bold">{items.length}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-white/15">
                  <span className="text-sm text-white/80">Years of Experience</span>
                  <span className="text-2xl font-bold">20+</span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-white/80">Patients Treated</span>
                  <span className="text-2xl font-bold">10k+</span>
                </div>
              </div>
              <a
                href="https://wa.me/918197371247"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block bg-white text-primary text-center px-5 py-3 rounded-full font-semibold text-sm hover:bg-gold hover:text-white transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`inline-block ${a.text} font-semibold text-sm uppercase tracking-wider mb-3`}>Why Joshi&apos;s Centre</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">What Sets Our {category} Care Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {details.highlights.map((h, i) => (
              <div key={h.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.grad} text-white flex items-center justify-center shrink-0 font-bold text-lg`}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg">{h.title}</h3>
                  <p className="text-sm text-text-light mt-1.5 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className={`inline-block ${a.text} font-semibold text-sm uppercase tracking-wider mb-3`}>Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">{category} Services We Offer</h2>
            <p className="mt-3 text-text-light max-w-2xl mx-auto">
              Click any service below to learn more about evaluation, treatment options, and what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border ${a.border} hover:-translate-y-1 block relative overflow-hidden`}
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${a.grad} opacity-5 group-hover:opacity-15 group-hover:scale-150 transition-all duration-500`} />
                <div className={`relative w-12 h-12 ${a.bg} rounded-xl flex items-center justify-center ${a.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="relative text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="relative text-sm text-text-light leading-relaxed line-clamp-3">{s.shortDescription}</p>
                <div className={`relative mt-4 inline-flex items-center gap-1 text-sm font-semibold ${a.text} group-hover:gap-2 transition-all`}>
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">Explore Other Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCategories.map((c) => {
              const ca = accentMap[c.accent];
              const cItems = getServicesByCategory(c.name);
              return (
                <Link
                  key={c.name}
                  href={`/services/${categorySlugs[c.name]}`}
                  className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border ${ca.border} transition-all duration-300 hover:-translate-y-1 block`}
                >
                  <div className={`inline-flex items-center gap-2 ${ca.bg} ${ca.text} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4`}>
                    {c.name}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{c.description}</p>
                  <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${ca.text} group-hover:gap-2 transition-all`}>
                    {cItems.length} services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
