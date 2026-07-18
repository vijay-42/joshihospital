import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { getCategoryImage } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Best Urology Hospital In Bangalore - Urology Specialists in Sahakar Nagar",
    description:
      "Get expert urology treatment in Bangalore for kidney stones, prostate disorders, UTIs, and urinary problems at Joshi Andrology & Urology Centre in Sahakar Nagar, Bangalore.",
    path: "/services/urology-treatment-in-bangalore/",
    image: getCategoryImage("Urology"),
  }),
  keywords:
    "urology treatment in Bangalore, best urology hospital in Bangalore, urology hospital Sahakar Nagar, kidney stone treatment in Bangalore, prostate treatment, UTI treatment, male infertility, erectile dysfunction, bladder disorders",
};

export default function UrologyPage() {
  return <CategoryLanding category="Urology" />;
}
