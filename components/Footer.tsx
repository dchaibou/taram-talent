import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 dark:bg-black text-white p-8 mt-16 shadow-inner border-t-4 border-orange-500">
    <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Section Marque */}
      <div>
        <h3 className="text-xl font-extrabold text-orange-500 mb-4">
          GENIE NIGER 🇳🇪
        </h3>
        <p className="text-sm text-gray-400">
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
            <Link href="/" className="hover:text-orange-500 transition-colors">
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

      {/* Section Contact */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-4">Contact</h3>
        <p className="text-sm text-gray-400">contact@genieniger.com</p>
        <div className="mt-4 text-xs text-gray-500">
          <p>Restez inspiré.e !</p>
        </div>
      </div>
    </div>
    <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} GENIE NIGER. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
