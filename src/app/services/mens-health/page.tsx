import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { getCategoryImage } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Men's Health Specialist in Bangalore | Joshi's Andrology & Urology Centre",
  description:
    "Leading men's health clinic in Bangalore offering erectile dysfunction treatment, male infertility care, sexual health services, andrology, and urology solutions.",
  path: "/services/mens-health/",
  image: getCategoryImage("Men's Health"),
});

export default function MensHealthPage() {
  return <CategoryLanding category="Men's Health" />;
}
