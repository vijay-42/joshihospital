import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://joshiuroandrology.com";
const SITE_NAME = "Joshi Andrology & Urology Centre";
const SITE_DESCRIPTION =
  "Comprehensive urological and andrological care in Bengaluru by Dr. Praveen Joshi. Expert treatment for male infertility, erectile dysfunction, kidney stones, and more. 15,000+ patients treated.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Joshi's Andrology & Urology Centre | Bengaluru",
  description: SITE_DESCRIPTION,
  keywords:
    "urologist bengaluru, andrologist bengaluru, male infertility, erectile dysfunction, kidney stones, Dr Praveen Joshi, urology sahakara nagar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Joshi's Andrology & Urology Centre | Bengaluru",
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/logo.webp",
        width: 253,
        height: 75,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Joshi's Andrology & Urology Centre | Bengaluru",
    description: SITE_DESCRIPTION,
    images: ["/logo.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "Hospital"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Joshi's Andrology & Urology Centre", "Joshi Urology"],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.webp`,
      image: `${SITE_URL}/logo.webp`,
      telephone: "+91-80-42070577",
      email: "joshi.andrology@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "No. 776, Sri Krishna Complex, 1st & 2nd Floor, Opp. Ganesha Temple, Sahakaranagar 'A' Block",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560092",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0637819,
        longitude: 77.5852984,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "20:30",
        },
      ],
      medicalSpecialty: ["Urologic"],
      knowsAbout: [
        "Andrology",
        "Urology",
        "Male Infertility",
        "Erectile Dysfunction",
        "Kidney Stones",
        "Men's Health",
        "Fertility Treatment",
      ],
      sameAs: [
        "https://www.linkedin.com/company/joshiuroandrology/",
        "https://www.instagram.com/joshis_andrology_and_urology/",
        "https://www.facebook.com/joshisandrologyandurologycentre",
        "https://www.youtube.com/@JoshisUroAndrologyCenter",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: "Joshi Urology",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      {/* Google Tag Manager — loads after hydration so it doesn't block first paint */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2SFCNTQ');`}
      </Script>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SS34LH3FJ6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SS34LH3FJ6');`}
      </Script>
      <body className="min-h-screen flex flex-col">
        {/* Organization / Hospital / WebSite structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2SFCNTQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
