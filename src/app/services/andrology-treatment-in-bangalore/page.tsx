import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";
import { getCategoryImage } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Andrology Treatment in Bangalore | Male Fertility Specialist",
    description:
      "Expert andrology treatment in Bangalore for male infertility, erectile dysfunction, low testosterone, men's health, and reproductive health care.",
    path: "/services/andrology-treatment-in-bangalore/",
    image: getCategoryImage("Andrology"),
  }),
  keywords:
    "andrology treatment in Bangalore, best andrology hospital in Bangalore, andrology hospital Sahakar Nagar, male infertility, erectile dysfunction, premature ejaculation, low testosterone, prostate issues",
};

export default function AndrologyPage() {
  return <CategoryLanding category="Andrology" />;
}
