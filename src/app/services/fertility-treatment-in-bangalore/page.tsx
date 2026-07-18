import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { getCategoryImage } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best Fertility Hospital in Bangalore | Fertility Treatment at Joshi Andrology and Urology Centre",
  description:
    "Looking for fertility treatment in Bangalore? Joshi Andrology and Urology Centre offers expert fertility care, diagnosis, and personalized treatment.",
  path: "/services/fertility-treatment-in-bangalore/",
  image: getCategoryImage("Fertility"),
});

export default function FertilityPage() {
  return <CategoryLanding category="Fertility" />;
}
