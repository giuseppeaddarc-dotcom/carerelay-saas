import type { Metadata } from "next";
import "./globals.css";

const title = "CareRelay — La cura, coordinata";
const description =
  "CareRelay coordina attività, appuntamenti, promemoria e responsabilità familiari, anche tramite un assistente AI su WhatsApp. Un solo piano da 9,99 € al mese.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://carerelay-concept.giuseppe9696.chatgpt.site/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`),
  title,
  description,
  icons: {
    icon: "favicon.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "it_IT",
    images: [{ url: "og-coordination.png", width: 1732, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og-coordination.png"],
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
