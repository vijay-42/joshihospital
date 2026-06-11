import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Joshi's Andrology & Urology Centre",
  description:
    "Contact Joshi's Andrology & Urology Centre in Bengaluru. Book an appointment, call us, or visit our clinic in Sahakara Nagar.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Get in Touch With Us
            </h1>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              We&apos;re here to help. Reach out to schedule an appointment or ask any questions about our services. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Address</h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      No. 776, Sri Krishna Complex,<br />
                      1st &amp; 2nd Floor, Opp. Ganesha Temple,<br />
                      Sahakaranagar &lsquo;A&rsquo; Block,<br />
                      Bengaluru &mdash; 560 092
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Phone</h3>
                    <a href="tel:08042070577" className="text-sm text-text-light hover:text-primary block transition-colors">080-42070577</a>
                    <a href="tel:+918197371247" className="text-sm text-text-light hover:text-primary block transition-colors">+91 81973 71247</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Email</h3>
                    <a href="mailto:joshi.andrology@gmail.com" className="text-sm text-text-light hover:text-primary transition-colors">
                      joshi.andrology@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1">Hours</h3>
                    <p className="text-sm text-text-light">Monday - Saturday: 8:30 AM to 8:30 PM</p>
                    <p className="text-sm text-text-light">Sunday & Public Holidays: Closed</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href="https://wa.me/918197371247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-text mb-2">Send a Message</h2>
                <p className="text-text-light mb-8">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-bg-alt"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-bg-alt"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-bg-alt"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-text mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-text-light bg-bg-alt"
                      >
                        <option value="">Select a service</option>
                        <option value="andrology">Andrology</option>
                        <option value="urology">Urology</option>
                        <option value="male-infertility">Male Infertility</option>
                        <option value="erectile-dysfunction">Erectile Dysfunction</option>
                        <option value="kidney-stones">Kidney Stones</option>
                        <option value="mens-health">Men&apos;s Health</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none bg-bg-alt"
                      placeholder="Tell us about your concern..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-text-light text-center flex items-center justify-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Location</span>
            <h2 className="text-3xl font-bold text-text">Find Us</h2>
            <p className="mt-3 text-text-light">Conveniently located in Sahakara Nagar, Bengaluru</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[450px]">
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
    </>
  );
}
