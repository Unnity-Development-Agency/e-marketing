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
  title: "Unnity | Digital Marketing & Web Development Agency",
  description:
    "Unnity is a digital marketing and web development agency specializing in Meta Ads, Google Ads, Shopify and Next.js development to grow your business online.",
  verification: {
    google: "vn1NyNfjfHshQLVwVfvgNQXQUCVzrHmKmNFja9489XE",
  },
  openGraph: {
    title: "Unnity | Digital Marketing & Web Development Agency",
    description:
      "Unnity helps brands grow with performance marketing, Shopify and Next.js development.",
    url: "https://unnity.in",
    siteName: "Unnity",
    images: [
      {
        url: "https://unnity.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
            description:
              "Digital marketing and web development agency offering Meta Ads, Google Ads, Shopify and Next.js services.",
            areaServed: "India",
            sameAs: [
              "https://www.instagram.com/_unnity",
              "https://www.linkedin.com/company/unnityglobal/",
            ],
          })}
        </Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-653GLDQWQT"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-653GLDQWQT');`}
        </Script>
        {/* <!-- MicroSoft Clarity --> */}
        <Script type="text/javascript">
          {`(function (c, l, a, r, i, t, y) {
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
          })(window, document, "clarity", "script", "vtkyvhhar3")`}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
