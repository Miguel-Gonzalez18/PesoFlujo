import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sitio en desarrollo",
  description: "Estamos construyendo una nueva experiencia. Vuelve pronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
