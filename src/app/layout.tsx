import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshi's Andrology & Urology Centre | Bengaluru",
  description:
    "Comprehensive urological and andrological care in Bengaluru by Dr. Praveen Joshi. Expert treatment for male infertility, erectile dysfunction, kidney stones, and more. 10,000+ patients treated.",
  keywords:
    "urologist bengaluru, andrologist bengaluru, male infertility, erectile dysfunction, kidney stones, Dr Praveen Joshi, urology sahakara nagar",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
    ],
    apple: "/logo.webp",
    shortcut: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
