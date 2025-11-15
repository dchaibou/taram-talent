// app/talents/page.tsx
import { Metadata } from "next";
import TalentListClient from "@/components/TalentListClient";
import { getAllTalents } from "@/lib/data";



// --- Définition des Métadonnées (SEO) ---
export const metadata: Metadata = {
  title: "Galerie des Talents Nigériens | Parcours, Échecs et Succès",
  description:
    "Découvrez les histoires inspirantes de Nigériens à travers leurs combats, échecs et grandes réussites dans tous les domaines.",
};

// --- Composant Principal de la Page (Server Component) ---
export default async function TalentsPage() {
  const talents = await getAllTalents();

  return (
    // On passe les données initialement chargées au composant client
    <TalentListClient initialTalents={talents} />
  );
}
