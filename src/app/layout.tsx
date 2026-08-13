import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.fullName}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Black in Open Source",
    "BIOS community",
    "Black developers",
    "open source community",
    "Black tech professionals",
    "diversity in tech",
    "mentorship in tech",
    "Olamide Kosile",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  openGraph: {
    title: `${site.name} - ${site.fullName}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.fullName}`,
    description: site.description,
  },
  other: {
    date: site.foundedDate,
    author: site.founder,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${site.name} - ${site.fullName}`,
  alternateName: site.fullName,
  url: site.url,
  foundingDate: site.foundedDate,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  description: site.description,
  sameAs: [site.linkedinGroup, site.facebook, site.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={site.googleAnalyticsId} />
      </body>
    </html>
  );
}
