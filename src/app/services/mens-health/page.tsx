import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Men's Health | Joshi's Andrology & Urology Centre",
  description:
    "Holistic men's health programs — low testosterone, prostate health, preventive cardiology, diabetes & hypertension management, counselling, and wellness.",
};

export default function MensHealthPage() {
  return <CategoryLanding category="Men's Health" />;
}
