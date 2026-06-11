import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { doctors, getDoctor } from "@/data/doctors";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return { title: "Doctor Not Found" };
  return {
    title: `${doctor.name} — ${doctor.title} | Joshi's Centre`,
    description: doctor.shortBio,
  };
}

const accentMap = {
  primary: { bg: "bg-primary-light", text: "text-primary", border: "border-primary/20", grad: "from-primary to-primary-dark" },
  secondary: { bg: "bg-secondary-light", text: "text-secondary", border: "border-secondary/20", grad: "from-secondary to-primary" },
  accent: { bg: "bg-accent-light", text: "text-accent", border: "border-accent/20", grad: "from-accent to-primary" },
} as const;

export default async function DoctorDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const a = accentMap[doctor.accent];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <Link href="/doctors" className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Doctors
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className={`absolute -top-4 -right-4 w-full h-full bg-gradient-to-br ${a.grad} rounded-3xl opacity-20`} />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-primary-dark px-5 py-3 rounded-2xl shadow-xl font-bold text-sm">
                  {doctor.experience} Experience
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-7">
              <div className={`inline-flex items-center gap-2 ${a.bg} ${a.text} px-4 py-2 rounded-full text-xs font-bold mb-4`}>
                {doctor.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                {doctor.name}
              </h1>
              <p className={`text-lg md:text-xl mt-3 font-medium ${a.text}`}>{doctor.title}</p>
              <p className="mt-6 text-text-light text-lg leading-relaxed">{doctor.shortBio}</p>

              {/* Qualifications */}
              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-light mb-3">Qualifications</div>
                <div className="flex flex-wrap gap-2">
                  {doctor.qualifications.map((q) => (
                    <span key={q} className="text-sm font-semibold px-3 py-1.5 bg-gold-light text-gold rounded-full border border-gold/20">
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918197371247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+918197371247"
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 text-center"
                >
                  Call: +91 81973 71247
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-text mb-6">About {doctor.name}</h2>
              <div className="space-y-5">
                {doctor.fullBio.map((para, i) => (
                  <p key={i} className="text-text-light leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Specialties */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-text mb-5">Specialties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.specialties.map((s) => (
                    <div key={s} className={`flex items-center gap-3 ${a.bg} rounded-xl p-4`}>
                      <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0`}>
                        <svg className={`w-4 h-4 ${a.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-text">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-text mb-5">Areas of Expertise</h3>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
                  {doctor.expertise.map((e) => (
                    <div key={e} className="flex items-center gap-4 p-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.grad} flex items-center justify-center shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-text">{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text mb-4">Quick Facts</h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-text-light">Experience</dt>
                      <dd className="font-bold text-text">{doctor.experience}</dd>
                    </div>
                    <div>
                      <dt className="text-text-light">Languages</dt>
                      <dd className="font-bold text-text">{doctor.languages.join(", ")}</dd>
                    </div>
                    {doctor.registration && (
                      <div>
                        <dt className="text-text-light">Registered with</dt>
                        <dd className="font-bold text-text">{doctor.registration}</dd>
                      </div>
                    )}
                  </dl>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other doctors */}
      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">Other Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3).map((d) => {
              const da = accentMap[d.accent];
              return (
                <Link
                  key={d.slug}
                  href={`/doctors/${d.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-56 w-full bg-primary-light">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute top-3 left-3 ${da.bg} ${da.text} px-3 py-1 rounded-full text-xs font-bold`}>
                      {d.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-text group-hover:text-primary transition-colors">{d.name}</h3>
                    <p className={`text-xs ${da.text} font-medium mt-1`}>{d.title}</p>
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
