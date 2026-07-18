import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { getCategoryImage } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Additional Services | Joshi's Andrology & Urology Centre",
  description:
    "Female fertility, IUI, IVF & ICSI, advanced semen analysis, gynaecology, radiology, and internal medicine — supporting specialties under one roof.",
  path: "/services/additional-services/",
  image: getCategoryImage("Additional Services"),
});

export default function AdditionalServicesPage() {
  return <CategoryLanding category="Additional Services" />;
}
