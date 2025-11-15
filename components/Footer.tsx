import React from "react";
import Link from "next/link";
// Remarque : Si vous utilisiez des icônes réelles (comme lucide-react ou react-icons), 
// vous devriez les importer ici.

const Footer: React.FC = () => (
  <footer className="bg-gray-900 dark:bg-black text-white p-8 mt-16 shadow-inner border-t-4 border-orange-500">
    <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
      
      {/* Section Marque & Mission (Ajustement de l'alignement du texte) */}
      <div className="col-span-2 md:col-span-1"> {/* Occupe 2 colonnes sur mobile pour plus d'espace */}
        <h3 className="text-2xl font-black text-orange-500 mb-4">
          GENIE NIGER 🇳🇪
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Inspirer le futur en valorisant les parcours, des échecs aux réussites
          retentissantes.
        </p>
      </div>

      {/* Section Liens Rapides */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-4">
          Navigation
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/talents" className="hover:text-orange-500 transition-colors">
              Galerie des Talents
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-orange-500 transition-colors"
            >
              Notre Mission
            </Link>
          </li>
          <li>
            <Link
              href="/soumettre"
              className="hover:text-orange-500 transition-colors"
            >
              Proposer un Talent
            </Link>
          </li>
        </ul>
      </div>

      {/* Section Légal */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-4">Légal</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/politique"
              className="hover:text-orange-500 transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </li>
          <li>
            <Link
              href="/termes"
              className="hover:text-orange-500 transition-colors"
            >
              Conditions d&apos;Utilisation
            </Link>
          </li>
        </ul>
      </div>

      {/* Section Contact & Réseaux Sociaux */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-4">Contact</h3>
        {/* Rendre l'email cliquable pour une meilleure UX */}
        <a href="mailto:contact@genieniger.com" className="text-sm text-gray-400 hover:text-white transition-colors">
          contact@genieniger.com
        </a>

        {/* Espace pour les icônes de réseaux sociaux (Professionnel) */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-400 mb-3">
            Nous Suivre
          </h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            {/* Remplacer par des icônes réelles (Facebook, X, LinkedIn, etc.) */}
            <a href="#" aria-label="Lien Facebook" className="hover:text-orange-500 transition-colors">F</a> 
            <a href="#" aria-label="Lien X (Twitter)" className="hover:text-orange-500 transition-colors">X</a>
            <a href="#" aria-label="Lien LinkedIn" className="hover:text-orange-500 transition-colors">in</a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Section Copyright (Mieux contrastée) */}
    <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
      {/* Utiliser 'text-gray-400' pour un meilleur contraste que 'text-gray-500' sur fond noir */}
      © {new Date().getFullYear()} GENIE NIGER. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;