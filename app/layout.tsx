import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "CareRelay — La cura, coordinata";
const description =
  "CareRelay collega smartwatch e fitness tracker compatibili e trasforma i dati disponibili in report chiari per la famiglia, con un unico piano da 9,99 € al mese.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const imageUrl = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "it_IT",
      images: imageUrl ? [{ url: imageUrl, width: 1732, height: 909, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

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
