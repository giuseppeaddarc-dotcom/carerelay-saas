import type { Metadata } from "next";
import "./globals.css";

const title = "CareRelay — La cura, coordinata";
const description =
  "CareRelay collega smartwatch e fitness tracker compatibili e trasforma i dati disponibili in report chiari per la famiglia, con un unico piano da 9,99 € al mese.";
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
    images: [{ url: "og.png", width: 1732, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og.png"],
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
