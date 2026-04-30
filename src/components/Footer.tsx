import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.webp"
                alt="Joshi's Andrology & Urology Centre"
                width={180}
                height={50}
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-xs italic text-gold mb-2">Integrated Andrology &amp; Urology Services</p>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Comprehensive urological and andrological care with over 10,000+
              patients treated and 4,000+ successful surgeries since 2018.
            </p>
            {/* NABH Certified badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-gold/30 rounded-lg px-3 py-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-secondary flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-gold leading-none">NABH Certified</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Patient Safety &amp; Quality</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/joshiuroandrology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0a66c2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/joshis_andrology_and_urology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-tr hover:from-[#fdc468] hover:via-[#df4996] hover:to-[#7048e8] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85C2.295 5.784 2.569 4.517 3.544 3.542 4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.173 8.798 2.163 12 2.163zm0 1.838c-3.146 0-3.5.012-4.737.069-1.176.054-1.815.249-2.24.413-.563.219-.965.481-1.388.904-.423.423-.685.825-.904 1.388-.164.425-.359 1.064-.413 2.24-.057 1.237-.069 1.591-.069 4.737s.012 3.5.069 4.737c.054 1.176.249 1.815.413 2.24.219.563.481.965.904 1.388.423.423.825.685 1.388.904.425.164 1.064.359 2.24.413 1.237.057 1.591.069 4.737.069s3.5-.012 4.737-.069c1.176-.054 1.815-.249 2.24-.413.563-.219.965-.481 1.388-.904.423-.423.685-.825.904-1.388.164-.425.359-1.064.413-2.24.057-1.237.069-1.591.069-4.737s-.012-3.5-.069-4.737c-.054-1.176-.249-1.815-.413-2.24-.219-.563-.481-.965-.904-1.388-.423-.423-.825-.685-1.388-.904-.425-.164-1.064-.359-2.24-.413-1.237-.057-1.591-.069-4.737-.069zm0 3.131A4.868 4.868 0 1 0 12 16.868 4.868 4.868 0 0 0 12 7.132zm0 8.027A3.16 3.16 0 1 1 12 8.84a3.16 3.16 0 0 1 0 6.319zm6.197-8.232a1.137 1.137 0 1 1-2.275 0 1.137 1.137 0 0 1 2.275 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/DrJoshi55"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877f2] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@joshisteam3349"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#ff0000] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/doctors", label: "Doctors" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-gray-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Andrology",
                "Urology",
                "Male Infertility",
                "Erectile Dysfunction",
                "Kidney Stones",
                "Men's Health",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-gray-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 leading-relaxed">
                  No. 776, Sri Krishna Complex, 1st &amp; 2nd Floor, Opp. Ganesha Temple, Sahakaranagar &lsquo;A&rsquo; Block, Bengaluru &mdash; 560 092
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-400">
                  <a href="tel:08042070577" className="hover:text-gold block transition-colors">080-42070577</a>
                  <a href="tel:+918197371247" className="hover:text-gold block transition-colors">+91 81973 71247</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:joshi.andrology@gmail.com" className="text-sm text-gray-400 hover:text-gold transition-colors">
                  joshi.andrology@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400">Mon - Sat: 9:30 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Joshi&apos;s Andrology &amp; Urology Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
