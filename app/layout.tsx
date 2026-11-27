import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BluePik Consult | Online Training & Business Consulting in Ghana",
    template: "%s | BluePik Consult",
  },
  description: `${site.description} Based in Ghana.`,
  openGraph: { type: "website", siteName: site.name, locale: "en_GB" },
};

export const viewport: Viewport = { themeColor: "#043F8D" };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  address: { "@type": "PostalAddress", addressCountry: "GH" },
  areaServed: "Africa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed top-2 -left-[9999px] z-[100] rounded-lg bg-white px-4 py-2.5 text-brand-navy focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
