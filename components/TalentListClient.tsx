// app/talents/components/TalentListClient.tsx (Version Stylisée)
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Talent } from "@/types/Talent"; // Assurez-vous d'avoir le bon chemin

interface TalentListClientProps {
  initialTalents: Talent[];
}

const TalentListClient: React.FC<TalentListClientProps> = ({
  initialTalents,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("Tous");

  const allDomains = useMemo(() => {
    return Array.from(new Set(initialTalents.map((t) => t.domaine)));
  }, [initialTalents]);

  const filteredTalents = useMemo(() => {
    let currentTalents = initialTalents;
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
    return currentTalents;
  }, [initialTalents, searchTerm, selectedDomain]);

  return (
    <div className="p-4 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Titre Impactant */}
      <h1 className="text-6xl font-black text-center text-gray-800 dark:text-white mb-4">
        Le Niger Émerge.
      </h1>
      <p className="text-2xl text-center text-orange-600 font-light mb-12">
        Parcours, Échecs & Succès de nos Génies.
      </p>

      {/* --- Zone de Filtres et Recherche (Barre Pro) --- */}
      <div className="flex flex-wrap gap-4 mb-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-inner justify-center max-w-4xl mx-auto">
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

      {/* --- Affichage des Cartes WOW (Grille) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredTalents.map((talent) => (
          <Link href={`/talents/${talent.slug}`} key={talent.id} passHref>
            {/* Carte de Talent - Effet Waouh */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer h-full transition-all duration-500 transform hover:scale-[1.03] hover:shadow-green-500/50 hover:shadow-3xl border-t-4 border-orange-500">
              <img
                src={talent.photoUrl}
                alt={talent.nom}
                className="w-full h-48 object-cover transition-opacity duration-500 hover:opacity-80"
              />
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
                  Lire l&apos;histoire complète
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredTalents.length === 0 && (
        <p className="text-center text-2xl text-gray-500 mt-20">
          Désolé, aucun talent ne correspond à votre recherche. 😥
        </p>
      )}
    </div>
  );
};

export default TalentListClient;
