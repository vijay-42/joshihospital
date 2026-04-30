"use client";

import { useEffect, useState } from "react";
import { serviceCategories } from "@/data/services";

type Props = {
  open: boolean;
  onClose: () => void;
};

const WHATSAPP_NUMBER = "918197371247";
const CLINIC_EMAIL = "joshi.andrology@gmail.com";

export default function BookingModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Close on Esc + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  function buildMessage() {
    const lines = [
      "*New Appointment Request*",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
    if (email) lines.push(`Email: ${email}`);
    if (service) lines.push(`Service: ${service}`);
    if (date) lines.push(`Preferred Date: ${date}`);
    if (message) lines.push("", `Message: ${message}`);
    return lines.join("\n");
  }

  function submitWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 200);
  }

  function submitEmail() {
    const subject = encodeURIComponent("Appointment Request — Joshi's Andrology & Urology Centre");
    const body = encodeURIComponent(buildMessage().replace(/\*/g, ""));
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-dark/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-secondary px-6 py-5 text-white shrink-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-xl font-bold">Book Appointment</h2>
          <p className="text-sm text-white/80 mt-1">
            Fill the form — we&apos;ll confirm your slot on WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submitWhatsApp} className="px-6 py-5 overflow-y-auto flex-1 space-y-4">
          <div>
            <label htmlFor="bm-name" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="bm-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bm-phone" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="bm-phone"
                type="tel"
                required
                pattern="[0-9+\s-]{7,}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="bm-email" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
                Email
              </label>
              <input
                id="bm-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bm-service" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
                Service / Concern
              </label>
              <select
                id="bm-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm bg-white"
              >
                <option value="">Select a category</option>
                {serviceCategories.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
                <option value="Not sure / General consultation">Not sure / General consultation</option>
              </select>
            </div>
            <div>
              <label htmlFor="bm-date" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
                Preferred Date
              </label>
              <input
                id="bm-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bm-message" className="block text-xs font-semibold text-text uppercase tracking-wide mb-1.5">
              Message
            </label>
            <textarea
              id="bm-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific concerns or questions (optional)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm resize-none"
            />
          </div>

          <p className="text-[11px] text-text-light leading-relaxed pt-1">
            All consultations are completely confidential. By submitting you agree to be contacted by Joshi&apos;s Centre.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold text-sm transition-colors shadow-md disabled:opacity-60"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={submitEmail}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Instead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
