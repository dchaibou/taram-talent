// app/components/Header.tsx
import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-linear-to-r from-green-600 to-green-800 text-white shadow-2xl sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 py-4">
      {/* Logo / Marque */}
      <Link href="/" className="flex items-center space-x-2 group">
        <span className="text-3xl font-extrabold tracking-tight text-white transition-colors duration-300">
          GENIE
        </span>
        <span className="text-xl font-light text-orange-300 group-hover:text-yellow-400 transition-colors duration-300">
          NIGER
        </span>
        <span className="text-3xl">🇳🇪</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <Link
          href="/"
          className="hidden sm:inline text-lg font-medium hover:text-orange-300 transition-colors"
        >
          Galerie
        </Link>
        <Link
          href="/about"
          className="hidden md:inline text-lg font-medium hover:text-orange-300 transition-colors"
        >
          Mission
        </Link>
        <Link
          href="/soumettre"
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
        >
          Proposer un Talent
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
