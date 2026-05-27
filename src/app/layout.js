import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://unnity.in"),

  title: {
    default: "Unnity | Digital Marketing & Web Development Agency",
    template: "%s | Unnity",
  },

  description:
    "Unnity is a performance marketing agency managing Meta Ads and Google Ads for D2C brands in Australia. Data-driven campaigns, full transparency, and measurable ROAS.",

  keywords: [
    "Digital Marketing Agency",
    "Meta Ads Agency",
    "Google Ads Expert",
    "Shopify Development",
    "Next.js Development",
    "Web Development Agency",
    "Performance Marketing",
  ],

  authors: [{ name: "Unnity" }],

  creator: "Unnity",

  publisher: "Unnity",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "vn1NyNfjfHshQLVwVfvgNQXQUCVzrHmKmNFja9489XE",
  },

  openGraph: {
    title: "Unnity | Digital Marketing & Web Development Agency",
    description:
      "Unnity helps brands grow with Meta Ads, Google Ads, Shopify and Next.js development.",
    url: "https://unnity.in",
    siteName: "Unnity",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unnity Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unnity | Digital Marketing Agency",
    description:
      "Meta Ads, Google Ads, Shopify and Next.js solutions for growing brands.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://unnity.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Unnity",
            url: "https://unnity.in",
            logo: "https://unnity.in/logo.png",
            image: "https://unnity.in/og-image.png",
            description:
              "Digital marketing and web development agency offering Meta Ads, Google Ads, Shopify and Next.js services.",
            areaServed: "India",
            sameAs: [
              "https://www.instagram.com/_unnity",
              "https://www.linkedin.com/company/unnityglobal/",
            ],
          })}
        </Script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-653GLDQWQT"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-653GLDQWQT');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] =
                c[a] ||
                function () {
                  (c[a].q = c[a].q || []).push(arguments);
                };

              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;

              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "vtkyvhhar3");
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
