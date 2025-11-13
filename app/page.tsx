import { Metadata } from "next";
import { Talent } from "@/types/Talent";
import talentsData from "@/data/talents.json";
import TalentListClient from "@/components/TalentListClient";

const getTalents = async (): Promise<Talent[]> => {
  return talentsData as Talent[];
};

export const metadata: Metadata = {
  title: "Talents Nigériens | Parcours, Combats et Réussites",
  description:
    "Découvrez les histoires inspirantes des personnalités nigériennes, incluant leurs échecs et leurs succès retentissants.",
};

export default async function HomePage() {
  const talents = await getTalents();

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-6xl py-12 px-4 md:px-8 bg-white dark:bg-black shadow-xl">
        <TalentListClient initialTalents={talents} />
      </main>
    </div>
  );
}
