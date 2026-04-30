import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Joshi's Andrology & Urology Centre",
  description:
    "Meet our team of specialist doctors led by Dr. Praveen Joshi. Learn about our centre's mission, values, and track record of 10,000+ patients.",
};

const doctors = [
  {
    name: "Dr. Praveen Joshi",
    role: "Founder & Chief Urologist/Andrologist",
    description:
      "A renowned urologist and andrologist with over 20 years of experience, Dr. Praveen Joshi specializes in male reproductive health, erectile dysfunction, and complex urological surgeries. He has treated over 10,000 patients and performed 4,000+ surgeries.",
    highlight: true,
  },
  {
    name: "Dr. Chandrakanth",
    role: "Laparoscopic Surgeon",
    description:
      "An expert in minimally invasive surgical techniques, Dr. Chandrakanth performs laparoscopic procedures for kidney stones, varicocele, and other urological conditions.",
  },
  {
    name: "Dr. Shashidhar",
    role: "Radiologist",
    description:
      "Dr. Shashidhar provides advanced diagnostic imaging including ultrasound, Doppler studies, and image-guided interventions for accurate diagnosis.",
  },
  {
    name: "Dr. Kanusha",
    role: "Clinical Psychologist (M.Sc.)",
    description:
      "Dr. Kanusha provides counseling and psychological support for patients dealing with sexual dysfunction, performance anxiety, and infertility-related stress.",
  },
];

const affiliations = [
  { name: "Karnataka Urological Association", abbr: "KUA" },
  { name: "PIMER (Puducherry Institute of Medical Education and Research)", abbr: "PIMER" },
  { name: "The Society of Sexual Medicine", abbr: "SSM" },
  { name: "RGUHS (Rajiv Gandhi University of Health Sciences)", abbr: "RGUHS" },
  { name: "Society of Doctors of India", abbr: "SDI" },
  { name: "The Urological Society of India", abbr: "TUSI" },
];

const values = [
  {
    title: "Patient-First Care",
    desc: "Every decision is guided by what is best for the patient's health and well-being.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Clinical Excellence",
    desc: "We maintain the highest standards of medical practice with continuous learning and innovation.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Confidentiality",
    desc: "We understand the sensitivity of urological and andrological conditions and ensure complete privacy.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Compassion",
    desc: "We treat every patient with empathy, respect, and understanding throughout their care journey.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Joshi&apos;s Andrology &amp; Urology Centre
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              A premier healthcare facility in Bengaluru dedicated to providing world-class urological and andrological care with compassion, integrity, and clinical excellence since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Dedicated to Excellence in Patient Care</h2>
              <p className="text-text-light leading-relaxed mb-4 text-lg">
                We are committed to delivering the highest standard of urological and andrological care through advanced diagnostics, evidence-based treatments, and a patient-first approach.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                Since our inception, we have served over <strong className="text-text">10,000 patients</strong> and conducted more than <strong className="text-text">4,000 surgeries</strong>. Our multidisciplinary specialist team ensures comprehensive care under one roof, eliminating the need for multiple hospital visits.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-light rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-text-light mt-1">Patients Served</div>
                </div>
                <div className="bg-secondary-light rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-secondary">4,000+</div>
                  <div className="text-sm text-text-light mt-1">Surgeries Done</div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">Core Values</h2>
              <div className="space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-text text-lg">{v.title}</h3>
                      <p className="text-sm text-text-light mt-1">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-bg-alt py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Meet Our Specialists</h2>
            <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
              A multidisciplinary team of experienced professionals dedicated to your health.
            </p>
          </div>

          {/* Featured Doctor */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 border-2 border-white rounded-full -translate-y-1/3 translate-x-1/3" />
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-32 h-32 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mx-auto md:mx-0">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">FOUNDER</span>
                <h3 className="text-2xl md:text-3xl font-bold">{doctors[0].name}</h3>
                <p className="text-gold font-medium mt-1 text-lg">{doctors[0].role}</p>
                <p className="text-white/80 mt-4 max-w-2xl leading-relaxed">{doctors[0].description}</p>
              </div>
            </div>
          </div>

          {/* Other Doctors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.slice(1).map((doc) => (
              <div
                key={doc.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text">{doc.name}</h3>
                <p className="text-sm text-secondary font-medium mb-3">{doc.role}</p>
                <p className="text-sm text-text-light leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Affiliations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text">Professional Affiliations</h2>
            <p className="mt-3 text-text-light text-lg">Our doctors are members of leading medical associations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affiliations.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">{a.abbr}</span>
                </div>
                <span className="text-sm font-medium text-text">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-alt py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Location</span>
            <h2 className="text-3xl font-bold text-text">Visit Our Centre</h2>
            <p className="mt-3 text-text-light">No. 776, Sri Krishna Complex, Sahakaranagar &lsquo;A&rsquo; Block, Bengaluru &mdash; 560 092</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Joshi's+Andrology+%26+Urology+Centre,+Sahakara+Nagar,+Bengaluru&ll=13.0637819,77.5852984&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joshi's Andrology & Urology Centre Location"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/CSdAC1ka6GPPGhzz9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience the Difference</h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of patients who have trusted Joshi&apos;s Centre for their urological and andrological care needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gold hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
