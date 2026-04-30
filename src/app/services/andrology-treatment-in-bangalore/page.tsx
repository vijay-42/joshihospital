import type { Metadata } from "next";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Andrology Treatment in Bangalore | Best Andrology Hospital in Sahakar Nagar | Joshi's Centre",
  description:
    "Looking for expert andrology treatment in Bangalore? Joshi's Andrology and Urology Centre in Sahakar Nagar offers advanced care for male infertility, erectile dysfunction, premature ejaculation, low testosterone, prostate issues, and more — by experienced andrologists in a fully confidential setting.",
  keywords:
    "andrology treatment in Bangalore, best andrology hospital in Bangalore, andrology hospital Sahakar Nagar, male infertility, erectile dysfunction, premature ejaculation, low testosterone, prostate issues",
};

export default function AndrologyPage() {
  return <CategoryLanding category="Andrology" />;
}
