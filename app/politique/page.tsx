// app/politique/page.tsx
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Découvrez comment GENIE NIGER collecte et protège vos données personnelles dans le cadre de la soumission de talents et de la navigation sur notre plateforme.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-4xl">
      <header className="text-center mb-10 border-b pb-4">
        <h1 className="text-5xl font-black text-gray-800 dark:text-white mb-2">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-gray-500">
          Dernière mise à jour : 15 Novembre 2025
        </p>
      </header>

      {/* --- Section 1: Données Collectées --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-3">
          1. Données Collectées
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          GENIE NIGER collecte uniquement les données nécessaires à la
          réalisation de sa mission.
        </p>
        {/* Liste des sous-points (Conversion de \n* **...**) */}
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4 text-gray-700 dark:text-gray-300 ml-4">
          <li className="mt-1 leading-relaxed">
            <b>Données de soumission de talent :</b> Nom, Prénom, Email et
            Justification. Ces données sont utilisées exclusivement pour la
            vérification du profil et la communication de suivi.
          </li>
          <li className="mt-1 leading-relaxed">
            <b>Données de navigation (Cookies) :</b> Nous utilisons des cookies
            tiers (type Google Analytics) pour mesurer l&apos;audience et
            améliorer l&apos;expérience utilisateur. Ces données sont anonymes
            et agrégées.
          </li>
        </ul>
      </section>

      {/* --- Section 2: Utilisation des Données --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-3">
          2. Utilisation des Données
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Vos données personnelles (email, nom) ne sont jamais vendues ou
          partagées avec des tiers à des fins marketing.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Elles servent uniquement à :
        </p>
        {/* Liste des sous-points (Conversion de \n* ...) */}
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4 text-gray-700 dark:text-gray-300 ml-4">
          <li className="mt-1 leading-relaxed">
            Valider et traiter votre proposition de talent.
          </li>
          <li className="mt-1 leading-relaxed">
            Vous contacter si votre proposition est retenue ou nécessite des
            informations complémentaires.
          </li>
          <li className="mt-1 leading-relaxed">
            Améliorer la performance du site.
          </li>
        </ul>
      </section>

      {/* --- Section 3: Sécurité et Rétention --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-3">
          3. Sécurité et Rétention
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Les données sont stockées sur des serveurs sécurisés et ne sont
          conservées que le temps nécessaire à la réalisation de leur objectif
          (généralement 3 ans pour les soumissions).
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Conformément au droit applicable, vous disposez d&apos;un droit
          d&apos;accès, de rectification et de suppression de vos données
          personnelles. Pour exercer ces droits, veuillez nous contacter à
          **[email de contact]**.
        </p>
      </section>

      <p className="mt-10 text-center text-sm text-gray-500">
        Pour toute question relative à cette politique, veuillez contacter :
        contact@genieniger.com
      </p>
    </div>
  );
}
