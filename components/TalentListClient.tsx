// app/talents/components/TalentListClient.tsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Talent } from "@/types/Talent";
import Image from "next/image"; // Importation correcte

interface TalentListClientProps {
  initialTalents: Talent[];
  isHomepage?: boolean;
}

const TalentListClient: React.FC<TalentListClientProps> = ({
  initialTalents,
  isHomepage = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("Tous");

  const allDomains = useMemo(() => {
    return Array.from(new Set(initialTalents.map((t) => t.domaine)));
  }, [initialTalents]);

  // --- LOGIQUE DE FILTRAGE ET DE LIMITATION ---
  const processedTalents = useMemo(() => {
    let currentTalents = initialTalents;

    // 1. Filtrage (Activé uniquement si ce n'est PAS la page d'accueil)
    if (!isHomepage) {
      if (selectedDomain !== "Tous") {
        currentTalents = currentTalents.filter(
          (t) => t.domaine === selectedDomain
        );
      }
      if (searchTerm.trim()) {
        const lowerCaseSearch = searchTerm.toLowerCase();
        currentTalents = currentTalents.filter(
          (t) =>
            t.nom.toLowerCase().includes(lowerCaseSearch) ||
            t.domaine.toLowerCase().includes(lowerCaseSearch)
        );
      }
    }

    // 2. Limitation (Activé si c'est la page d'accueil)
    if (isHomepage) {
      return currentTalents.slice(0, 6);
    }

    return currentTalents;
  }, [initialTalents, isHomepage, searchTerm, selectedDomain]);
  // --- FIN LOGIQUE DE FILTRAGE ET DE LIMITATION ---

  const gridClasses = isHomepage
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8";

  return (
    <div className="p-4 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Titre Impactant (Conditionnel) */}
      <h1 className="text-6xl font-black text-center text-gray-800 dark:text-white mb-4">
        {isHomepage
          ? "À la Une : Talents Récemment Dévoilés"
          : "Le Niger Émerge. La Plateforme GENIE NIGER."}
      </h1>
      <p className="text-2xl font-light text-center text-orange-600 mb-12">
        {isHomepage
          ? "Découvrez nos dernières histoires de résilience et de succès."
          : "Documenter l'Excellence. Raconter l'intégralité du chemin."}
      </p>

      {/* --- Zone de Filtres et Recherche (Masquée en Page d'Accueil) --- */}
      {!isHomepage && (
        <div className="flex flex-wrap gap-4 mb-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-inner justify-center max-w-4xl mx-auto border-t-2 border-green-500">
          {/* Champ de Recherche */}
          <input
            type="text"
            placeholder="Rechercher un Nom ou un Domaine..."
            className="p-3 border-2 border-green-500 rounded-lg shadow-inner w-full md:w-96 focus:ring-green-500 focus:border-green-500 transition-all dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filtre par Domaine */}
          <select
            className="p-3 border-2 border-orange-500 rounded-lg shadow-inner w-full md:w-64 bg-white dark:bg-gray-700 dark:text-white transition-all"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            <option value="Tous">✨ Tous les Domaines</option>
            {allDomains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- JE VEUX QUE LA PHOTO SOIT 400*300 ou 400*400 sur le card --- */}
      <div className={`grid ${gridClasses}`}>
        {processedTalents.map((talent) => (
          <Link href={`/talents/${talent.slug}`} key={talent.id} passHref>
            {/* Carte de Talent - Effet Waouh */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer h-full transition-all duration-500 transform hover:scale-[1.03] hover:shadow-green-500/50 hover:shadow-3xl border-t-4 border-orange-500">
              {/* Conteneur qui force le ratio 1:1 */}
              <div className="relative aspect-square w-full">
                <Image
                  src={talent.photoUrl}
                  alt={`Photo de ${talent.nom}`}
                  width={300}
                  className="object-cover transition-opacity duration-500 hover:opacity-80"
                  // Tailles toujours nécessaires pour le srcset optimisé
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                  {talent.nom}
                </h2>
                <p className="text-md text-orange-600 dark:text-orange-400 font-semibold mb-3">
                  {talent.domaine}
                </p>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 italic text-sm">
                  &quot;{talent.phraseAccroche}&quot;
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  Découvrir son Histoire (Impact & Résilience)
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {processedTalents.length === 0 && (
        <p className="text-center text-2xl text-gray-500 mt-20">
          Désolé, aucun talent ne correspond à vos critères. 😥
        </p>
      )}

      {/* Bouton Voir tout (Uniquement en Page d'Accueil s'il y a plus de 6) */}
      {isHomepage && initialTalents.length > 6 && (
        <div className="text-center mt-12">
          <Link href="/talents" passHref>
            <span className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-[1.02]">
              Voir toute la Galerie ( {initialTalents.length} Talents )
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TalentListClient;
