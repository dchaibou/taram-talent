// app/soumettre/page.tsx
import { Metadata } from "next";
import SubmitFormClient from "./SubmitFormClient";
import React from "react";

export const metadata: Metadata = {
  title: "Soumettre un Talent",
  description:
    "Proposez un profil nigérien inspirant pour qu'il soit présenté sur la plateforme GENIE NIGER. Aidez-nous à raconter son histoire complète.",
};

export default function SubmitPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black text-gray-800 dark:text-white">
          Vous Connaissez un Génie ? 💡
        </h1>
        <p className="text-xl text-orange-600 mt-3">
          Partagez-nous un profil exceptionnel, y compris ses moments de lutte
          et de persévérance.
        </p>
      </div>

      {/* Intégration du composant client */}
      <SubmitFormClient />
    </div>
  );
}
