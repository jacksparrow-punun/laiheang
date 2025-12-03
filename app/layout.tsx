import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laiheang Professional Accountant | Trusted Accounting & Tax Services",
  description:
    "Laiheang Professional Accountant provides expert accounting, bookkeeping, tax filing, business registration, and financial consulting services in Cambodia. Reliable, accurate, and professional.",

  keywords: [
    "Laiheang Accountant",
    "Professional Accountant Cambodia",
    "Accounting Services",
    "Tax Filing",
    "Bookkeeping",
    "Financial Consulting",
    "Business Registration",
  ],

  authors: [{ name: "Laiheang Professional Accountant" }],
  creator: "Laiheang Professional Accountant",

  openGraph: {
    title: "Laiheang Professional Accountant | Trusted Accounting & Tax Services",
    description:
      "Expert accounting, bookkeeping, tax filing, financial consulting, and business registration services.",
    url: "https://laiheang.konkmeng.site",
    siteName: "Laiheang Professional Accountant",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://laiheang.konkmeng.site/image/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Laiheang Professional Accountant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Laiheang Professional Accountant",
    description:
      "Professional accounting and tax services in Cambodia.",
    images: ["https://laiheang.konkmeng.site/image/profile.jpg"],
  },

  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },

  metadataBase: new URL("https://laiheang.konkmeng.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Laiheang Professional Accountant",
              url: "https://laiheang.konkmeng.site",
              image: "https://laiheang.konkmeng.site/image/profile.jpg",
              description:
                "Expert accounting, bookkeeping, tax filing, financial consulting, and business registration services in Cambodia.",
              logo: "https://laiheang.konkmeng.site/image/profile.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KH",
              },
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
