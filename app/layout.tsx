import type { Metadata } from "next";
import "./globals.css";

const title = "CareGive X — La cura, coordinata.";
const description =
  "Un solo spazio per organizzare attività, visite, farmaci e responsabilità: nell’app o con un messaggio su WhatsApp.";
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
    images: [{ url: "og-caregive-x-v2.png", width: 1660, height: 948, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og-caregive-x-v2.png"],
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
