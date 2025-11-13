// app/talents/page.tsx
import { Metadata } from "next";
import talentsData from "@/data/talents.json"; // Utilisation de l'alias
import { Talent } from "@/types/Talent";
import TalentListClient from "@/components/TalentListClient";

// --- Fonction de Data Fetching (Server-Side) ---
// Simule la récupération des données (plus tard, ce sera un appel à votre CMS)
const getTalents = async (): Promise<Talent[]> => {
  // Ici, pas besoin de `getStaticProps` ! Le fetching se fait directement
  // et le composant est rendu statiquement par défaut (SSG)
  return talentsData as Talent[];
};

// --- Définition des Métadonnées (SEO) ---
export const metadata: Metadata = {
  title: "Galerie des Talents Nigériens | Parcours, Échecs et Succès",
  description:
    "Découvrez les histoires inspirantes de Nigériens à travers leurs combats, échecs et grandes réussites dans tous les domaines.",
};

// --- Composant Principal de la Page (Server Component) ---
export default async function TalentsPage() {
  const talents = await getTalents();

  return (
    // On passe les données initialement chargées au composant client
    <TalentListClient initialTalents={talents} />
  );
}
