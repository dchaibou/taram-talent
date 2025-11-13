// app/about/page.tsx
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Notre Mission",
  description:
    "Découvrez la vision derrière GENIE NIGER : valoriser les talents nigériens, raconter les histoires complètes et inspirer la prochaine génération.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-6xl">
      {/* Bannière de Mission */}
      <div className="bg-linear-to-r from-orange-600 to-red-600 text-white p-10 md:p-16 rounded-3xl shadow-2xl mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Notre Mission : Révéler le Génie Nigérien 🇳🇪
        </h1>
        <p className="text-xl font-light opacity-90">
          Chaque combat est une victoire en devenir. Nous racontons les
          histoires complètes.
        </p>
      </div>

      <section className="grid lg:grid-cols-3 gap-12">
        {/* Valeur 1 : L'Authenticité */}
        <Card
          icon="📚"
          title="Raconter la Réalité"
          description="Nous allons au-delà des succès apparents. Nous documentons les obstacles, les échecs cruciaux, et la résilience nécessaire pour triompher au Niger."
          color="border-green-600"
        />

        {/* Valeur 2 : L'Inspiration */}
        <Card
          icon="✨"
          title="Inspirer la Jeunesse"
          description="En montrant que les héros d'aujourd'hui ont aussi trébuché, nous donnons à la jeunesse nigérienne les modèles réels pour transformer leurs propres défis en opportunités."
          color="border-orange-600"
        />

        {/* Valeur 3 : La Valorisation */}
        <Card
          icon="🌍"
          title="Rayonnement Mondial"
          description="Positionner les talents nigériens sur la scène internationale, attirant l'attention des partenaires, investisseurs et de la diaspora."
          color="border-blue-600"
        />
      </section>

      {/* Section Impact */}
      <section className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-4 border-green-600">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Notre Engagement
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          GENIE NIGER est une initiative citoyenne, portée par la conviction que
          la documentation de l&apos;excellence est la clé du progrès national.
          Nous nous engageons à maintenir une plateforme inclusive, neutre et
          rigoureuse.
        </p>
      </section>
    </div>
  );
}

// Composant Carte de Valeur réutilisable
const Card = ({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) => (
  <div
    className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-8 ${color} transition-all duration-300 hover:shadow-2xl`}
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);
