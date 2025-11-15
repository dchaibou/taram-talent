// app/termes/page.tsx
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description:
    "Règles régissant l'utilisation de la plateforme GENIE NIGER, y compris la propriété intellectuelle et les responsabilités des utilisateurs.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-4xl">
      <header className="text-center mb-10 border-b pb-4">
        <h1 className="text-5xl font-black text-gray-800 dark:text-white mb-2">
          Conditions d&apos;Utilisation
        </h1>
        <p className="text-sm text-gray-500">Version du 15 Novembre 2025</p>
      </header>

      {/* --- Section 1: Acceptation des Conditions --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-red-700 dark:text-red-400 mb-3">
          1. Acceptation des Conditions
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          L&apos;accès et l&apos;utilisation de la plateforme GENIE NIGER
          impliquent l&apos;acceptation sans réserve des présentes conditions
          d&apos;utilisation. Si vous n&apos;acceptez pas les termes, vous ne
          devez pas utiliser ce service.
        </p>
      </section>

      {/* --- Section 2: Propriété Intellectuelle (Contenu Publié) --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-red-700 dark:text-red-400 mb-3">
          2. Propriété Intellectuelle (Contenu Publié)
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Le contenu publié sur la plateforme (textes éditoriaux, design, logos)
          est la propriété exclusive de GENIE NIGER.
        </p>

        {/* Liste des sous-points */}
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4 text-gray-700 dark:text-gray-300 ml-4">
          <li className="mt-1 leading-relaxed">
            <b>Photos de Talents :</b> GENIE NIGER garantit qu&apos;il a obtenu
            l&apos;autorisation d&apos;utiliser les photos des talents. Les
            utilisateurs ne sont pas autorisés à les réutiliser sans licence
            appropriée.
          </li>
          <li className="mt-1 leading-relaxed">
            <b>Citations :</b> Les citations sont soumises aux droits de
            citation.
          </li>
          <li className="mt-1 leading-relaxed">
            <b>Utilisation du Contenu :</b> Le contenu (récits, parcours) peut
            être partagé à des fins non commerciales, à condition que la source
            (GENIE NIGER) soit clairement citée par un lien.
          </li>
        </ul>
      </section>

      {/* --- Section 3: Responsabilité de l'Utilisateur --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-red-700 dark:text-red-400 mb-3">
          3. Responsabilité de l&apos;Utilisateur
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Vous vous engagez à ne soumettre que des informations véridiques et
          non diffamatoires via le formulaire de proposition.
        </p>

        {/* Liste des sous-points */}
        <ul className="list-disc list-inside space-y-1 mt-2 mb-4 text-gray-700 dark:text-gray-300 ml-4">
          <li className="mt-1 leading-relaxed">
            Toute fausse déclaration ou proposition malveillante entraînera la
            suppression immédiate de la proposition et pourra faire l&apos;objet
            de poursuites.
          </li>
          <li className="mt-1 leading-relaxed">
            L&apos;utilisateur est responsable de l&apos;exactitude des
            informations de contact fournies.
          </li>
        </ul>
      </section>

      {/* --- Section 4: Modification des Conditions --- */}
      <section className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-red-700 dark:text-red-400 mb-3">
          4. Modification des Conditions
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          GENIE NIGER se réserve le droit de modifier ces conditions à tout
          moment. Il est de la responsabilité de l&apos;utilisateur de les
          consulter régulièrement.
        </p>
      </section>

      <p className="mt-10 text-center text-sm text-gray-500">
        En utilisant cette plateforme, vous acceptez l&apos;intégralité des
        présentes conditions.
      </p>
    </div>
  );
}
