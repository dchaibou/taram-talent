import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// --- Métadonnées Globales ---
export const metadata: Metadata = {
  title: {
    default: "Talents Nigériens | Parcours, Échecs et Succès 🇳🇪",
    template: "%s | GENIE NIGER",
  },
  description:
    "Découvrez les histoires complètes, les combats, les échecs et les succès inspirants des personnalités nigériennes dans tous les domaines.",
};

// --- Composant RootLayout Principal ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-zinc-50 dark:bg-gray-900 antialiased">
        <Header />
        {/* Le 'main' grow garantit que le footer reste en bas */}
        <main className="grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
