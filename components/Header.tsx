"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

  const headerGradientClass = "bg-gradient-to-r from-green-600 to-green-800";

  return (
    <header
      className={`${headerGradientClass} text-white shadow-2xl sticky top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 py-4">
        {/* Logo / Marque (Visibilité maximale) */}
        <Link href="/" className="flex items-center space-x-2 group shrink-0">
          <span className="text-3xl font-extrabold tracking-tight text-white transition-colors duration-300">
            GENIE
          </span>
          <span className="text-xl font-light text-orange-300 group-hover:text-yellow-400 transition-colors duration-300">
            NIGER
          </span>
          <span className="text-3xl">🇳🇪</span>
        </Link>

        {/* Bouton Hamburger (Visible seulement sur mobile/tablet) */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Icône Hamburger ou Croix */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Bureau (Toujours affichée) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/talents"
            className="text-lg font-medium hover:text-orange-300 transition-colors"
          >
            Galerie des Talents
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-orange-300 transition-colors"
          >
            Mission
          </Link>
          <Link
            href="/soumettre"
            className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsOpen(false)} // Fermer le menu si on clique sur CTA
          >
            Proposer un Talent
          </Link>
        </nav>
      </div>

      {/* Menu Déroulant Mobile (Affiché par condition) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
          <Link
            href="/talents"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
            onClick={() => setIsOpen(false)}
          >
            Galerie des Talents
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
            onClick={() => setIsOpen(false)}
          >
            Mission
          </Link>
          {/* Le CTA est déjà dans l'en-tête principal, mais on le laisse ici pour la cohérence */}
          <Link
            href="/soumettre"
            className="block text-center mt-3 py-2 rounded-full font-semibold bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => setIsOpen(false)}
          >
            Proposer un Talent
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
