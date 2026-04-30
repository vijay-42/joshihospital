import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Urology Treatment in Bangalore | Best Urology Hospital in Sahakar Nagar | Joshi's Centre",
  description:
    "Looking for advanced urology treatment in Bangalore? Joshi's Andrology and Urology Hospital in Sahakar Nagar offers expert care for kidney stones, prostate problems, UTIs, male infertility, erectile dysfunction, and bladder disorders.",
  keywords:
    "urology treatment in Bangalore, best urology hospital in Bangalore, urology hospital Sahakar Nagar, kidney stone treatment in Bangalore, prostate treatment, UTI treatment, male infertility, erectile dysfunction, bladder disorders",
};

export default function UrologyPage() {
  return <CategoryLanding category="Urology" />;
}
