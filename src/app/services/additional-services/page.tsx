import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Additional Services | Joshi's Andrology & Urology Centre",
  description:
    "Female fertility, IUI, IVF & ICSI, advanced semen analysis, gynaecology, radiology, dermatology, and internal medicine — supporting specialties under one roof.",
};

export default function AdditionalServicesPage() {
  return <CategoryLanding category="Additional Services" />;
}
