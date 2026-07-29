import type { Metadata } from "next";
import "./globals.css";

const title = "CareGive X — Prendersi cura, insieme";
const description =
  "CareGive X coordina l’assistenza di una persona cara attraverso un’app e un assistente AI su WhatsApp.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://carerelay-concept.giuseppe9696.chatgpt.site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    images: [{ url: "og-caregive-x.png", width: 1662, height: 946, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og-caregive-x.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
