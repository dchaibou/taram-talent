import { Metadata } from "next";
import TalentListClient from "@/components/TalentListClient";
import { getLatestTalents } from "@/lib/data";



export const metadata: Metadata = {
  title: "Talents Nigériens | Parcours, Combats et Réussites",
  description:
    "Découvrez les histoires inspirantes des personnalités nigériennes, incluant leurs échecs et leurs succès retentissants.",
};

export default async function HomePage() {
  const talents = await getLatestTalents();

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-gray-900">
      <main className="w-full max-w-7xl py-12 px-4 md:px-8">
        <TalentListClient initialTalents={talents} isHomepage={true} />
      </main>
    </div>
  );
}
