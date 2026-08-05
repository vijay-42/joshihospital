import Link from "next/link";
import Image from "next/image";
import {
  type ServiceCategory,
  serviceCategories,
  getServicesByCategory,
  getCategoryImage,
  categorySlug,
} from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  "Fertility": "fertility-treatment-in-bangalore",
  "Additional Services": "additional-services",
};

const bannerTitles: Record<ServiceCategory, string> = {
  "Andrology": "Best Andrology Treatment In Bangalore",
  "Urology": "Best Urology Treatment In Bangalore",
  "Men's Health": "Best Men's Health Treatment In Bangalore",
  "Fertility": "Best Fertility Treatment In Bangalore",
  "Additional Services": "Best Additional Services In Bangalore",
};

// Heading for the intro section directly under the banner.
const sectionHeadings: Record<ServiceCategory, string> = {
  "Andrology": "Andrology Treatment in Bangalore at Joshi's Andrology and Urology Hospital",
  "Urology": "Urology Treatment in Bangalore – Expert Care at Joshi's Andrology and Urology Hospital",
  "Men's Health": "Best Men's Health Treatment In Bangalore",
  "Fertility": "Best Fertility Hospital in Bangalore for Personalised Fertility Care",
  "Additional Services": "Additional Services in Bangalore – Gynaecology, Radiology & Supporting Care at Joshi's Andrology and Urology Hospital",
};

// Categories that have a pre-designed full-bleed banner asset
const bannerCategories = new Set<ServiceCategory>([
  "Andrology",
  "Urology",
  "Men's Health",
  "Fertility",
  "Additional Services",
]);

// These banner images already have their headline text baked into the artwork,
// so we don't overlay any text on top of them.
const bannerImageHasText = new Set<ServiceCategory>([
  "Men's Health",
  "Additional Services",
]);


const categoryDetails: Record<ServiceCategory, {
  tagline: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}> = {
  "Andrology": {
    tagline: "Andrology Treatment in Bangalore — trusted experts in Sahakar Nagar.",
    intro: [
      "If you are looking for expert andrology treatment in Bangalore, Joshi's Andrology and Urology Hospital is your trusted destination. Recognised as the best andrology hospital in Sahakar Nagar, we diagnose and treat the full range of male reproductive and sexual health concerns with advanced medical care and personalised, judgment-free attention.",
      "Under one roof, our team treats male infertility, erectile dysfunction (ED), premature and delayed ejaculation, low testosterone, prostate and urinary problems, varicocele, and other sexual health disorders. Every patient begins with an accurate diagnosis — supported by onsite lab and imaging — followed by a treatment plan tailored to their condition and goals.",
      "Choosing the right specialist matters most for sensitive concerns. Backed by years of focused experience, modern technology, and high success rates, we combine expert clinical care with complete confidentiality — so you can discuss any concern openly and take the first step towards better health with confidence.",
    ],
    highlights: [
      { title: "Advanced Diagnostic Facilities", desc: "Precise evaluation with onsite WHO-standard semen analysis, DNA fragmentation, scrotal Doppler, hormonal profiling, and advanced laboratory services." },
      { title: "Experienced Andrologists & Urologists", desc: "Led by Dr. Praveen Joshi with 20+ years of focused expertise — over 10,000 patients treated and 4,000+ surgeries performed." },
      { title: "Confidential, Patient-Friendly Consultations", desc: "Private consultation rooms and a discreet, respectful process designed to make sensitive conversations easier." },
      { title: "Complete Male Health Under One Roof", desc: "Personalised plans for ED and sexual disorders, male infertility, low-testosterone hormonal therapy, prostate and urinary care, and varicocele — for faster recovery and lasting results." },
    ],
    faqs: [
      { q: "What is andrology, and when should I seek andrology treatment in Bangalore?", a: "Andrology treatment in Bangalore focuses on diagnosing and treating male reproductive and sexual health conditions, including erectile dysfunction, male infertility, low testosterone, premature ejaculation, and other men's health concerns. If you experience persistent symptoms affecting your reproductive or sexual health, consulting an andrology specialist is recommended." },
      { q: "What conditions are treated at an andrology hospital in Bangalore?", a: "An andrology hospital in Bangalore provides diagnosis and treatment for a wide range of conditions, including male infertility, erectile dysfunction (ED), premature ejaculation, delayed ejaculation, Peyronie's disease, low testosterone, varicocele, azoospermia, and other male reproductive health disorders." },
      { q: "Why should I visit an andrology clinic in Bangalore?", a: "An andrology clinic in Bangalore offers specialised evaluation for men's reproductive and sexual health. Early diagnosis can help identify the underlying cause of symptoms and provide personalised treatment options that support better long-term health and fertility." },
      { q: "What diagnostic tests are performed before starting andrology treatment?", a: "Before beginning andrology treatment in Bangalore, specialists may recommend a detailed medical history, physical examination, hormone profile, semen analysis, ultrasound scan, and other investigations based on your symptoms and medical condition." },
      { q: "Does an andrology hospital in Bangalore treat male infertility?", a: "Yes. An andrology hospital in Bangalore evaluates and treats various causes of male infertility, including low sperm count, poor sperm motility, abnormal sperm morphology, hormonal imbalances, varicocele, and obstructive azoospermia. Treatment is tailored to the individual's diagnosis." },
      { q: "Can an andrology clinic in Bangalore help with erectile dysfunction?", a: "Yes. An andrology clinic in Bangalore provides comprehensive evaluation and treatment for erectile dysfunction. Management may include lifestyle modifications, medications, hormone therapy, counselling, or advanced treatment options depending on the underlying cause." },
      { q: "What services are available at Joshi Andrology & Urology Centre?", a: "Joshi Andrology & Urology Centre offers comprehensive care for male reproductive health, including andrology treatment, male infertility evaluation, erectile dysfunction management, low testosterone treatment, semen analysis, sperm retrieval procedures, fertility care, and urological services under one roof." },
      { q: "When should I consult an andrology specialist?", a: "You should consult an andrology specialist if you experience difficulty conceiving, erectile dysfunction, premature ejaculation, low sexual desire, hormonal imbalance, testicular pain, or any persistent symptoms affecting your reproductive or sexual health." },
      { q: "How can I improve my reproductive and sexual health?", a: "Maintaining a healthy lifestyle, exercising regularly, eating a balanced diet, avoiding smoking and excessive alcohol, managing stress, getting adequate sleep, and seeking timely medical evaluation can help support reproductive and sexual health." },
      { q: "How do I choose the right andrology clinic in Bangalore?", a: "When choosing an andrology clinic in Bangalore, look for experienced specialists, advanced diagnostic facilities, comprehensive treatment options, patient-focused care, transparent communication, and a clinic that provides personalised treatment plans based on your individual needs." },
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
    faqs: [
      { q: "When should I visit a urology clinic in Bangalore?", a: "You should visit a urology clinic in Bangalore if you experience symptoms such as kidney stone pain, blood in the urine, difficulty urinating, frequent urinary tract infections, prostate problems, urinary incontinence, or bladder-related concerns. Early diagnosis can help prevent complications and improve treatment outcomes." },
      { q: "What conditions are treated at Joshi Andrology & Urology Centre?", a: "Joshi Andrology & Urology Centre provides evaluation and treatment for a wide range of urological and andrological conditions, including kidney stones, enlarged prostate (BPH), urinary tract infections (UTIs), bladder disorders, urological cancers, male infertility, erectile dysfunction, and other men's health concerns." },
      { q: "What services are available at a urology hospital in Bangalore?", a: "A urology hospital in Bangalore typically offers comprehensive diagnostic and treatment services, including kidney stone management, laser prostate surgery, endoscopic urological procedures, reconstructive urology, bladder care, and treatment for urinary tract disorders." },
      { q: "Why should I consult urology specialists in Sahakar Nagar?", a: "Urology specialists in Sahakar Nagar provide expert evaluation for urinary and reproductive health conditions. They help diagnose the underlying cause of symptoms and recommend personalised treatment plans using advanced diagnostic techniques and minimally invasive procedures whenever appropriate." },
      { q: "What are the common signs that require urology treatment in Bangalore?", a: "You may need urology treatment in Bangalore if you have persistent urinary symptoms, severe kidney stone pain, difficulty passing urine, recurrent urinary tract infections, blood in the urine, prostate enlargement, or unexplained pelvic discomfort." },
      { q: "Can kidney stones be treated without open surgery?", a: "Yes. Many kidney stones can be treated using minimally invasive procedures such as URS (Ureteroscopy), RIRS (Retrograde Intrarenal Surgery), and PCNL (Percutaneous Nephrolithotomy). The most appropriate treatment depends on the size, location, and type of the stone." },
      { q: "What should I expect during my first consultation at a urology clinic in Bangalore?", a: "During your first visit to a urology clinic in Bangalore, the specialist will review your medical history, discuss your symptoms, perform a physical examination if required, and recommend diagnostic tests such as urine analysis, blood tests, ultrasound, or CT scans to determine the cause of your condition." },
      { q: "How do I know if I need treatment for an enlarged prostate?", a: "Common symptoms of an enlarged prostate include frequent urination, weak urine flow, difficulty starting urination, waking up multiple times at night to urinate, and a feeling of incomplete bladder emptying. A urology specialist can evaluate these symptoms and recommend appropriate treatment." },
      { q: "What are the benefits of early urology treatment?", a: "Seeking urology treatment in Bangalore at an early stage can help identify conditions before they become more serious, reduce the risk of complications, improve treatment outcomes, and support long-term urinary and reproductive health." },
      { q: "How do I choose the right urology hospital in Bangalore?", a: "When selecting a urology hospital in Bangalore, consider factors such as the experience of the specialists, availability of advanced diagnostic and surgical facilities, minimally invasive treatment options, personalised patient care, and comprehensive management for both urological and andrological conditions." },
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
    ],
  },
  "Fertility": {
    tagline: "Personalised fertility care for couples — advanced treatments under one roof.",
    intro: [
      "Starting a family is a cherished dream, but difficulties in conceiving can bring emotional stress and uncertainty. At Joshi's Andrology and Urology Centre in Sahakar Nagar, Bangalore, our dedicated fertility programme helps couples identify the underlying causes of infertility and receive effective, personalised care — bringing male and female reproductive care, advanced laboratory diagnostics, and assisted reproduction together in one place.",
      "Recognised as one of the leading fertility clinics in Bangalore, we begin every fertility journey with a thorough assessment of both partners. Fertility challenges can arise from male factors, female factors, hormonal imbalances, lifestyle habits, age-related issues, or unexplained infertility — and based on the findings, our experienced consultants recommend the most suitable plan, from IUI and IVF to ICSI, to maximise the chance of a successful pregnancy.",
      "Early evaluation makes a real difference. Consider seeing a specialist if you've been trying to conceive for over 12 months (or over 6 months if the woman is above 35), have irregular menstrual cycles, known reproductive conditions, repeated miscarriages, hormonal disorders, or male-factor concerns such as low sperm count, poor motility, or erectile dysfunction.",
      "We understand how emotional and personal this journey is. Our team offers compassionate, judgment-free care with clear guidance and complete cost transparency at every step — because each case is unique, we discuss the most suitable options and estimated costs during your consultation, so you can make informed decisions with confidence.",
    ],
    highlights: [
      { title: "Accurate Diagnosis for Both Partners", desc: "Advanced fertility testing — onsite WHO 2021 semen analysis, DNA fragmentation, and surgical sperm retrieval (TESA, PESA) — pinpoints the root cause for targeted treatment." },
      { title: "Personalised Treatment Plans", desc: "Every patient is unique. IUI, IVF, and ICSI protocols are tailored to individual health, diagnosis, and fertility goals for the best chance of conception." },
      { title: "Comprehensive Care, Under One Roof", desc: "Integrated male and female fertility care with complete support from diagnosis through treatment and follow-up — no coordinating across hospitals." },
      { title: "Ethical, Transparent & Compassionate", desc: "Experienced specialists, evidence-based care, and honest cost guidance in a private, supportive, judgment-free environment." },
    ],
    faqs: [
      { q: "What is fertility treatment and who may need it?", a: "Fertility treatment in Bangalore is recommended for couples who have been unable to conceive after 12 months of regular, unprotected intercourse (or after 6 months if the woman is over 35). Treatment depends on the underlying cause and may include medication, IUI, IVF, ICSI, or other advanced fertility procedures." },
      { q: "How do I choose a fertility clinic in Bangalore?", a: "When selecting a fertility clinic in Bangalore, consider the qualifications of the fertility specialists, available diagnostic facilities, treatment options, laboratory standards, patient support, and personalised care offered throughout the fertility journey." },
      { q: "What services are available at a fertility hospital in Bangalore?", a: "A fertility hospital in Bangalore typically provides comprehensive fertility evaluation, male and female infertility treatment, ovulation assessment, semen analysis, IUI, IVF, ICSI, fertility preservation, and counselling to help couples achieve a successful pregnancy." },
      { q: "When should I visit a fertility specialist?", a: "You should consider consulting a fertility specialist if pregnancy has not occurred after one year of trying, if you have irregular menstrual cycles, recurrent pregnancy loss, known reproductive health conditions, or concerns about male fertility." },
      { q: "What tests are performed before starting fertility treatment?", a: "Before beginning fertility treatment in Bangalore, doctors may recommend hormone tests, ultrasound scans, ovarian reserve testing, semen analysis, ovulation monitoring, and other investigations to identify the cause of infertility and develop an appropriate treatment plan." },
      { q: "Can male infertility also affect pregnancy?", a: "Yes. Male factors contribute to nearly half of infertility cases. A fertility clinic in Bangalore usually evaluates both partners to identify issues such as low sperm count, poor sperm motility, hormonal imbalance, or other reproductive conditions that may affect conception." },
      { q: "What fertility treatments are commonly available?", a: "Depending on the diagnosis, fertility treatment in Bangalore may include lifestyle modifications, fertility medications, ovulation induction, intrauterine insemination (IUI), in vitro fertilisation (IVF), intracytoplasmic sperm injection (ICSI), and surgical sperm retrieval procedures." },
      { q: "How long does fertility treatment take?", a: "The duration of fertility treatment varies based on the individual's condition and the recommended procedure. Some treatments may take a few weeks, while advanced treatments such as IVF may require several weeks for one treatment cycle." },
      { q: "How can I improve my chances of successful fertility treatment?", a: "Maintaining a healthy weight, eating a balanced diet, exercising regularly, avoiding smoking and excessive alcohol, managing stress, and following your fertility specialist's advice can help improve reproductive health and treatment outcomes." },
      { q: "Why is early fertility evaluation important?", a: "Early fertility evaluation helps identify the cause of infertility and allows timely treatment. Visiting a fertility clinic in Bangalore at the right time can help couples explore suitable treatment options and make informed decisions about their reproductive health." },
    ],
  },
  "Additional Services": {
    tagline: "Imaging, gynaecology, and supporting specialties — all under one roof.",
    intro: [
      "Comprehensive andrology and urology care often requires more than one specialist. Our additional services bring gynaecology, advanced laboratory, imaging, and other supporting specialties into the same building — so patients and families don't have to coordinate care across multiple hospitals.",
      "From specialist gynaecology and high-resolution imaging to internal medicine, we deliver coordinated multidisciplinary care led by experienced consultants.",
    ],
    highlights: [
      { title: "Specialist Gynaecology", desc: "Comprehensive women's health care alongside our fertility and andrology services." },
      { title: "Specialist Imaging", desc: "High-resolution scrotal doppler, renal/prostate ultrasound, and image-guided procedures by a consultant radiologist." },
      { title: "Internal Medicine", desc: "General medicine consultations and management of diabetes, hypertension, and related conditions." },
      { title: "Coordinated Multidisciplinary Care", desc: "Supporting specialties under one roof for complete, convenient adult care." },
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

  // Categories with a pre-designed banner render it full-bleed.
  const useFullBanner = bannerCategories.has(category);
  // Overlay our own headline only when the artwork doesn't already include text.
  const showBannerText = useFullBanner && !bannerImageHasText.has(category);

  return (
    <>
      {useFullBanner ? (
        /* Full-bleed banner image — edge-to-edge, no padding */
        <section className="relative bg-white">
          <Image
            src={heroImage}
            alt={`${category} banner`}
            width={1942}
            height={809}
            sizes="100vw"
            priority
            className={`block w-full object-cover object-center ${
              showBannerText
                ? "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[460px]"
                : "h-auto lg:h-[420px] xl:h-[460px]"
            }`}
          />
          {showBannerText && (
            <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
              {/* Light scrim so the dark headline stays legible over the artwork on small screens */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent md:hidden" />
              <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text leading-tight tracking-tight">
                    {bannerTitles[category]}
                  </h1>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-text-light max-w-lg leading-relaxed">
                    {details.tagline}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
      /* Hero — full-bleed banner image */
      <section className="relative min-h-[360px] lg:min-h-[420px] flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-secondary">
        {/* Gradient sheen overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent z-10" />

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
      )}

      {/* Breadcrumbs */}
      <div className="border-b border-gray-100">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services/" },
            { name: category, href: `/services/${categorySlug[category]}/` },
          ]}
        />
      </div>

      {/* Intro / About */}
      <section className="pt-8 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-text mb-6">
              {sectionHeadings[category]}
            </h2>
            <div className="space-y-5">
              {details.intro.map((p, i) => (
                <p key={i} className="text-text-light text-base leading-relaxed text-justify">{p}</p>
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
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm text-white/80">Patients Treated</span>
                  <span className="text-2xl font-bold">15k+</span>
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

      {/* FAQs */}
      {details.faqs && details.faqs.length > 0 && (
        <section className="bg-bg-alt py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className={`inline-block ${a.text} font-semibold text-sm uppercase tracking-wider mb-3`}>FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text">{category} — Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {details.faqs.map((f) => (
                <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <summary className="cursor-pointer p-5 flex items-center justify-between font-semibold text-text hover:text-primary transition-colors">
                    <span>{f.q}</span>
                    <svg className="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </section>
      )}

      {/* Other Categories */}
      <section className={details.faqs?.length ? "py-16 lg:py-20" : "bg-bg-alt py-16 lg:py-20"}>
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
