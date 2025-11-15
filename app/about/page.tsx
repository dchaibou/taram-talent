// app/about/page.tsx (Version Corrigée et Améliorée)

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Mission | GENIE NIGER",
  description:
    "Découvrez la vision derrière GENIE NIGER : valoriser les talents nigériens, raconter les histoires complètes et inspirer la prochaine génération.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-6xl">
      {/* Bannière de Mission */}
      {/* <div className="bg-linear-to-r from-orange-600 to-red-600 text-white p-10 md:p-16 rounded-3xl shadow-2xl mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Notre Mission : Documenter le Génie Nigérien 🇳🇪
        </h1>
        <p className="text-xl font-light opacity-90">
          Nous sommes la plateforme qui{" "}
          <b>systématise le récit de la résilience</b> en Afrique de
          l&apos;Ouest.
        </p>
      </div> */}
      {/* Bannière de Mission (Optimisée pour Mobile) */}
      <div
        // CORRECTION CLASSE TAILWIND + PADDING AJUSTÉ
        className="bg-linear-to-r from-orange-600 to-red-600 text-white 
                   p-8 sm:p-10 md:p-16 rounded-3xl shadow-2xl mb-16 text-center"
      >
        <h1
          // TAILLE AJUSTÉE POUR MOBILE
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 md:mb-4"
        >
          Notre Mission : Documenter le Génie Nigérien 🇳🇪
        </h1>
        <p
          // TAILLE AJUSTÉE POUR MOBILE
          className="text-lg sm:text-xl font-light opacity-90 mt-2"
        >
          Nous sommes la plateforme qui{" "}
          <b>systématise le récit de la résilience</b> en Afrique de
          l&apos;Ouest.
        </p>
      </div>

      <section className="grid lg:grid-cols-3 gap-12">
        {/* Valeur 1 : L'Authenticité */}
        <Card
          icon="✅" // Icône plus percutante pour la vérité
          title="Récits Authentiques et Complets"
          description={
            <>
              Notre démarche va au-delà des honneurs. Nous publions les études
              de cas détaillées incluant les{" "}
              <b>
                obstacles structurels, les pivots stratégiques, et les échecs
                cruciaux
              </b>{" "}
              qui ont mené au succès.
            </>
          }
          color="border-green-600"
        />

        {/* Valeur 2 : L'Inspiration */}
        <Card
          icon="🚀" // Icône plus dynamique
          title="Modèles pour la Prochaine Génération"
          description={
            <>
              En présentant le parcours honnête, nous fournissons à la jeunesse
              nigérienne des figures réelles pour transformer leurs propres
              défis locaux en <b>leviers d&apos;opportunité</b> et
              d&apos;innovation.
            </>
          }
          color="border-orange-600"
        />

        {/* Valeur 3 : La Valorisation */}
        <Card
          icon="📈" // Icône de croissance
          title="Rayonnement International et Investissement"
          description={
            <>
              Positionner les entrepreneurs, artistes et innovateurs nigériens
              sur la scène mondiale, facilitant la{" "}
              <b>
                connexion avec la diaspora, les partenaires et les investisseurs
              </b>{" "}
              internationaux.
            </>
          }
          color="border-blue-600"
        />
      </section>

      {/* Section Impact */}
      <section className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-4 border-green-600">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Notre Engagement Éditorial
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          GENIE NIGER est une initiative citoyenne et éditoriale, portée par la
          conviction que la <b>documentation de l&apos;excellence</b> est la clé
          du progrès national. Nous nous engageons à maintenir une plateforme
          inclusive, neutre et rigoureuse, en vérifiant chaque histoire pour sa
          <b>pertinence et son intégrité</b>.
        </p>
      </section>
    </div>
  );
}

// Composant Carte de Valeur réutilisable (inchangé)
const Card = ({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: React.ReactNode;
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
