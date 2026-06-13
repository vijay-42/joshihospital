"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import BookingModal from "@/components/BookingModal";

type SubLink = { href: string; label: string };
type NavLink = {
  href: string;
  label: string;
  dropdown?: SubLink[];
  megaMenu?: { title: string; href: string; items: SubLink[] }[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    megaMenu: [
      {
        title: "Andrology",
        href: "/services/andrology-treatment-in-bangalore",
        items: [
          { href: "/services/erectile-dysfunction-treatment-in-bangalore", label: "Erectile Dysfunction" },
          { href: "/services/male-infertility-treatment-in-bangalore", label: "Male Fertility" },
          { href: "/services/delayed-ejaculation-treatment-in-bangalore", label: "Premature & Delayed Ejaculation" },
          { href: "/services/penile-prosthesis-reconstruction-in-bangalore", label: "Penile Prosthesis & Reconstruction" },
          { href: "/services/penile-enlargement-surgery-in-bangalore", label: "Penile Enlargement" },
          { href: "/services/testicular-treatment-in-bangalore", label: "Testicular Problems" },
        ],
      },
      {
        title: "Urology",
        href: "/services/urology-treatment-in-bangalore",
        items: [
          { href: "/services/kidney-stone-treatment-in-bangalore", label: "Kidney Stones" },
          { href: "/services/prostate-disorders-treatment-in-bangalore", label: "Prostate Disorders" },
          { href: "/services/reconstructive-urology-treatment-in-bangalore", label: "Reconstructive Urology" },
          { href: "/services/urinary-tract-infection-treatment-in-bangalore", label: "Urinary Tract Infections" },
          { href: "/services/urological-cancers-treatment-in-bangalore", label: "Urological Cancers" },
          { href: "/services/urinary-incontinence-treatment-in-bangalore", label: "Urinary Incontinence" },
        ],
      },
      {
        title: "Men's Health",
        href: "/services/mens-health",
        items: [
          { href: "/services/low-testosterone", label: "Low Testosterone" },
          { href: "/services/prostate-health", label: "Prostate Health" },
          { href: "/services/preventive-cardiology", label: "Preventive Cardiology" },
          { href: "/services/diabetes-hypertension", label: "Diabetes & Hypertension" },
          { href: "/services/cosmetology-for-men", label: "Cosmetology for Men" },
          { href: "/services/psychiatry-counselling", label: "Psychiatry & Counselling" },
        ],
      },
      {
        title: "Fertility",
        href: "/services/fertility",
        items: [
          { href: "/services/iui-treatment-in-bangalore", label: "IUI Treatment" },
          { href: "/services/icsi-treatment-in-bangalore", label: "ICSI Treatment" },
          { href: "/services/ivf-treatment-in-bangalore", label: "IVF Treatment" },
          { href: "/services/tesa-treatment-in-bangalore", label: "TESA (Testicular Sperm Aspiration)" },
          { href: "/services/pesa-treatment-in-bangalore", label: "PESA (Percutaneous Epididymal Sperm Aspiration)" },
          { href: "/services/sperm-retrieval-treatment-in-bangalore", label: "Sperm Retrieval Treatment" },
          { href: "/services/advanced-semen-analysis-in-bangalore", label: "Advanced Semen Analysis" },
          { href: "/services/female-fertility-treatment-in-bangalore", label: "Female Fertility" },
        ],
      },
      {
        title: "Additional Services",
        href: "/services/additional-services",
        items: [
          { href: "/services/best-gynaecology-hospital-in-bangalore", label: "Gynaecology" },
          { href: "/services/best-radiology-hospital-in-bangalore", label: "Radiology" },
          { href: "/services/internal-medicine", label: "Internal Medicine" },
        ],
      },
    ],
  },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              NABH Certified
            </span>
            <a href="tel:08042070577" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              080-42070577
            </a>
            <a href="mailto:joshi.andrology@gmail.com" className="hidden lg:flex items-center gap-1.5 hover:text-gold transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              joshi.andrology@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mon - Sat: 9:30 AM - 8:00 PM
            </div>
            <div className="flex items-center gap-2 pl-4 border-l border-white/20">
              <a href="https://www.linkedin.com/company/joshiuroandrology/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.instagram.com/joshis_andrology_and_urology/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85C2.295 5.784 2.569 4.517 3.544 3.542 4.519 2.567 5.786 2.293 7.152 2.231 8.418 2.173 8.798 2.163 12 2.163zm0 1.838c-3.146 0-3.5.012-4.737.069-1.176.054-1.815.249-2.24.413-.563.219-.965.481-1.388.904-.423.423-.685.825-.904 1.388-.164.425-.359 1.064-.413 2.24-.057 1.237-.069 1.591-.069 4.737s.012 3.5.069 4.737c.054 1.176.249 1.815.413 2.24.219.563.481.965.904 1.388.423.423.825.685 1.388.904.425.164 1.064.359 2.24.413 1.237.057 1.591.069 4.737.069s3.5-.012 4.737-.069c1.176-.054 1.815-.249 2.24-.413.563-.219.965-.481 1.388-.904.423-.423.685-.825.904-1.388.164-.425.359-1.064.413-2.24.057-1.237.069-1.591.069-4.737s-.012-3.5-.069-4.737c-.054-1.176-.249-1.815-.413-2.24-.219-.563-.481-.965-.904-1.388-.423-.423-.825-.685-1.388-.904-.425-.164-1.064-.359-2.24-.413-1.237-.057-1.591-.069-4.737-.069zm0 3.131A4.868 4.868 0 1 0 12 16.868 4.868 4.868 0 0 0 12 7.132zm0 8.027A3.16 3.16 0 1 1 12 8.84a3.16 3.16 0 0 1 0 6.319zm6.197-8.232a1.137 1.137 0 1 1-2.275 0 1.137 1.137 0 0 1 2.275 0z" /></svg>
              </a>
              <a href="https://www.facebook.com/DrJoshi55" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.youtube.com/@JoshisUroAndrologyCenter" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20 gap-4">
          <Link href="/" className="flex items-center gap-3 justify-self-start">
            <Image
              src="/logo.webp"
              alt="Joshi's Andrology & Urology Centre"
              width={200}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav — centered */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1 justify-self-center">
            {navLinks.map((link) => {
              const hasMenu = !!(link.dropdown || link.megaMenu);
              const isOpen = dropdownOpen === link.label;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse" && hasMenu) setDropdownOpen(link.label);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse" && hasMenu) setDropdownOpen(null);
                  }}
                >
                  {hasMenu ? (
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(isOpen ? null : link.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className="text-sm font-medium text-text hover:text-primary px-4 py-2 rounded-lg hover:bg-primary-light transition-all duration-200 flex items-center"
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-text hover:text-primary px-4 py-2 rounded-lg hover:bg-primary-light transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.dropdown && isOpen && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fade-in">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setDropdownOpen(null)}
                            className="block px-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary-light transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {link.megaMenu && isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1000px] max-w-[calc(100vw-2rem)] z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-fade-in grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {link.megaMenu.map((col) => (
                          <div key={col.title}>
                            <Link
                              href={col.href}
                              onClick={() => setDropdownOpen(null)}
                              className="block text-xs font-semibold uppercase tracking-wider text-primary mb-3 hover:text-primary-dark"
                            >
                              {col.title}
                            </Link>
                            <ul className="space-y-1">
                              {col.items.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setDropdownOpen(null)}
                                    className="block px-2 py-1.5 -mx-2 text-sm text-text-light hover:text-primary hover:bg-primary-light rounded transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions — Book Appointment (desktop) + Image + Mobile menu */}
          <div className="flex items-center gap-3 justify-self-end">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="hidden lg:inline-flex bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Image
              src="/nav-image.jpg"
              alt=""
              width={64}
              height={44}
              className="hidden md:block h-11 w-auto rounded-lg object-cover shadow-sm"
            />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-light hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {/* Book Appointment — appears at top of mobile menu (under hamburger) */}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setBookingOpen(true);
              }}
              className="w-full mb-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth={1.8} /><path strokeLinecap="round" strokeWidth={1.8} d="M3 9h18M8 3v4M16 3v4" />
              </svg>
              Book Appointment
            </button>
            {navLinks.map((link) => {
              const hasMenu = !!(link.dropdown || link.megaMenu);
              const isOpen = dropdownOpen === link.label;
              return (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setDropdownOpen(null);
                      }}
                      className="flex-1 block text-sm font-medium text-text hover:text-primary hover:bg-primary-light px-4 py-3 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                    {hasMenu && (
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(isOpen ? null : link.label)}
                        aria-expanded={isOpen}
                        aria-label={`Toggle ${link.label} submenu`}
                        className="p-3 text-text-light hover:text-primary"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.dropdown && isOpen && (
                    <div className="pl-6 space-y-1 pb-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setDropdownOpen(null);
                          }}
                          className="block text-sm text-text-light hover:text-primary px-4 py-2 rounded-lg transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.megaMenu && isOpen && (
                    <div className="pl-4 pb-2 space-y-3">
                      {link.megaMenu.map((col) => (
                        <div key={col.title}>
                          <div className="text-xs font-semibold uppercase tracking-wider text-primary px-4 pt-2 pb-1">
                            {col.title}
                          </div>
                          {col.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setDropdownOpen(null);
                              }}
                              className="block text-sm text-text-light hover:text-primary px-4 py-2 rounded-lg transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
