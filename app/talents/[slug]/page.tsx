// app/talents/[slug]/page.tsx (Optimisation Long-Form Content)

import { Metadata } from "next";
import { Talent, ParcoursEtape } from "@/types/Talent";
import Image from "next/image";
import { getTalentBySlug, getAllTalents } from "@/lib/data";
import React from "react"; // Nécessaire pour React.Fragment/Key

// --- FONCTION UTILITAIRE POUR GÉRER LES PARAGRAPHES ---
// Transforme les chaînes de texte contenant des sauts de ligne (\n\n) en éléments <p>
const renderParagraphs = (text: string) => {
  // Divise le texte par deux sauts de ligne (standard pour un nouveau paragraphe)
  return text.split("\n\n").map((paragraph, index) => (
    // Utilisez key pour React. C'est sécurisé car le contenu est pré-rendu (Server Component)
    <p
      key={index}
      className="mb-4 leading-relaxed text-gray-700 dark:text-gray-400"
    >
      {paragraph}
    </p>
  ));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const talent = await getTalentBySlug(slug);

  if (!talent) return { title: "Talent non trouvé" };

  return {
    title: `${talent.nom} | ${talent.domaine} - Talents Nigériens`,
    description: talent.phraseAccroche,
  };
}

export async function generateStaticParams() {
  const talents: Talent[] = await getAllTalents();
  return talents.map((talent) => ({ slug: talent.slug }));
}

export default async function TalentPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const talent = await getTalentBySlug(slug);

  if (!talent) {
    return <div className="p-20 text-center text-3xl">Talent non trouvé.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-12 max-w-6xl">
      {/* Bannière de Tête Pro (Inchagée) */}
      <header className="text-center mb-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-3xl border-b-8 border-orange-500">
        <Image
          src={talent.photoUrl}
          alt={`Photo de ${talent.nom}`}
          width={200}
          height={200}
          className="object-cover rounded-full mx-auto shadow-2xl border-4 border-white ring-4 ring-green-600 transition-transform hover:scale-105"
          priority
        />
        <h1 className="text-5xl font-black text-blue-900 dark:text-white mt-6">
          {talent.nom}
        </h1>
        <p className="text-2xl text-orange-600 font-semibold italic">
          {talent.domaine}
        </p>
      </header>

      {/* Citation Inspirante (Inchagée) */}
      <section className="mb-16">
        <blockquote className="text-3xl font-light text-center text-gray-700 dark:text-gray-300 p-8 bg-green-50 dark:bg-green-950 border-l-8 border-green-600 rounded-lg italic shadow-lg">
          &quot;{talent.phraseAccroche}&quot;
        </blockquote>
      </section>

      {/* --- Contenu Principal: Parcours et Réussites --- */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Colonne 1: Le Parcours & Les Combats */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          <h2 className="text-4xl font-extrabold text-red-600 mb-8 border-b-4 border-red-200 pb-3">
            ⚔️ Chronologie : Défis, Pivots et Moments Clés
          </h2>

          <ul className="space-y-10">
            {talent.parcours.map((etape: ParcoursEtape, index: number) => (
              <li key={index} className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {etape.annee.toString().slice(-2)}
                </div>
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-red-300"></div>
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                  {etape.titre}
                </h3>
                {/* APPLICATION DE renderParagraphs pour la DESCRIPTION LONGUE */}
                <div className="mt-1 text-lg">
                  {renderParagraphs(etape.description)}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-3xl font-bold text-orange-600 mt-12 mb-4">
            💡 Stratégie de Résilience : L&apos;Échec comme Levain
          </h3>
          <div className="italic text-xl text-gray-700 dark:text-gray-300 p-6 bg-orange-50 dark:bg-orange-950 rounded-lg border-l-4 border-orange-500">
            {/* APPLICATION DE renderParagraphs pour la LEÇON LONGUE */}
            {renderParagraphs(talent.lecons)}
          </div>
        </div>

        {/* Colonne 2: Accomplissements et Stats (Inchangée) */}
        <aside className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-l-4 border-green-600">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-6">
            🏆 Accomplissements Majeurs
          </h2>
          <ul className="list-none space-y-4 text-lg text-gray-700 dark:text-gray-300">
            {talent.accomplissements.map((succes, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 text-xl mr-3 mt-0.5">✅</span>
                <span className="font-medium">{succes}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mt-10 mb-6">
            🛑 Défis Spécifiques
          </h3>
          <ul className="list-none space-y-4 text-lg text-gray-700 dark:text-gray-300">
            {talent.combats.map((combat, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 text-xl mr-3 mt-0.5">🚧</span>
                <span className="font-medium">{combat}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
