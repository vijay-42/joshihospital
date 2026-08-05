import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = pageMetadata({
  title: "Our Doctors | Joshi's Andrology & Urology Centre",
  description:
    "Meet the multidisciplinary team at Joshi's Andrology & Urology Centre — expert urologists, andrologists, oncologists, fertility specialists, and counselors.",
  path: "/doctors/",
});

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

      {/* Breadcrumbs */}
      <div className="border-b border-gray-100">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Doctors", href: "/doctors/" },
          ]}
        />
      </div>

      {/* Doctors Grid — horizontal cards (photo left, details right) on a colored band */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex gap-5 items-start hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative w-28 h-32 sm:w-32 sm:h-36 shrink-0 rounded-xl overflow-hidden bg-bg-alt">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="150px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-snug">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-text-light mt-1.5">
                    {doctor.title}
                  </p>
                  <p className="text-sm text-text-light mt-2 leading-snug">
                    {doctor.qualifications.join(", ")}
                  </p>
                  <span className="inline-block mt-4 bg-secondary group-hover:bg-primary text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-colors">
                    More Information
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
