import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors | Joshi's Andrology & Urology Centre",
  description:
    "Meet the multidisciplinary team at Joshi's Andrology & Urology Centre — expert urologists, andrologists, oncologists, fertility specialists, and counselors.",
};

const accentMap = {
  primary: { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20", grad: "from-primary to-primary-dark" },
  secondary: { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20", grad: "from-secondary to-primary" },
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", grad: "from-accent to-primary" },
} as const;

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Meet Our Specialists
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              A multidisciplinary team of board-certified urologists, andrologists, oncologists, fertility specialists, and counselors — all under one roof, working together for your care.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => {
              const a = accentMap[doctor.accent];
              return (
                <Link
                  key={doctor.slug}
                  href={`/doctors/${doctor.slug}`}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border ${a.border} hover:-translate-y-2`}
                >
                  {/* Photo */}
                  <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 ${a.bg} ${a.text} px-3 py-1.5 rounded-full text-xs font-bold shadow-md`}>
                      {doctor.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 text-text-light px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      {doctor.experience}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className={`text-sm font-medium mt-1 ${a.text}`}>{doctor.title}</p>
                    <p className="text-sm text-text-light mt-3 leading-relaxed line-clamp-3">{doctor.shortBio}</p>

                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      {doctor.qualifications.slice(0, 2).map((q) => (
                        <span key={q} className="text-[10px] font-semibold px-2 py-1 bg-gold-light text-gold rounded-full border border-gold/20">
                          {q}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                        View Profile
                      </span>
                      <svg className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:text-secondary transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
