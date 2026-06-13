import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Fertility Treatment in Bangalore | Joshi's Andrology & Urology Centre",
  description:
    "Complete fertility care for couples — IUI, IVF, ICSI, TESA, PESA, sperm retrieval, advanced semen analysis, and female fertility under one roof at Joshi's Centre, Bengaluru.",
};

export default function FertilityPage() {
  return <CategoryLanding category="Fertility" />;
}
