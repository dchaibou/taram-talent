// app/soumettre/SubmitFormClient.tsx
"use client";
import React, { useState } from "react";

const SubmitFormClient: React.FC = () => {
  const [formData, setFormData] = useState({
    nomTalent: "",
    domaine: "",
    votreNom: "",
    contact: "",
    justification: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // --- Simulation d'envoi de données ---
    // En production, vous feriez ici un appel fetch vers un backend (API Route, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // ------------------------------------

    setLoading(false);
    setMessage(
      "✅ Merci ! Votre proposition a été envoyée avec succès et sera examinée par notre équipe."
    );
    setFormData({
      nomTalent: "",
      domaine: "",
      votreNom: "",
      contact: "",
      justification: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-t-4 border-orange-500 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-6">
        Proposer un Talent
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Aidez-nous à enrichir notre galerie. Qui souhaiteriez-vous voir mis en
        lumière ?
      </p>

      {message && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
          {message}
        </div>
      )}

      {/* Champs du Formulaire */}
      <div className="space-y-6">
        <InputField
          name="nomTalent"
          label="Nom complet du Talent"
          value={formData.nomTalent}
          onChange={handleChange}
          required
        />
        <InputField
          name="domaine"
          label="Domaine (Ex: Tech, Art, Sport)"
          value={formData.domaine}
          onChange={handleChange}
          required
        />
        <InputField
          name="votreNom"
          label="Votre Nom (Proposant)"
          value={formData.votreNom}
          onChange={handleChange}
          required
        />
        <InputField
          name="contact"
          label="Votre Contact (Email ou Téléphone)"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label className="block">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Justification du Parcours (Échecs/Succès)*
          </span>
          <textarea
            name="justification"
            value={formData.justification}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-8 w-full px-4 py-3 rounded-full text-white font-bold transition-all duration-300 shadow-md ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 transform hover:scale-[1.01]"
        }`}
      >
        {loading ? "Envoi en cours..." : "Envoyer la Proposition"}
      </button>
    </form>
  );
};

// Composant réutilisable pour les champs
const InputField = ({
  name,
  label,
  value,
  onChange,
  required,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}) => (
  <label className="block">
    <span className="text-gray-700 dark:text-gray-300 font-medium">
      {label}*
    </span>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
    />
  </label>
);

export default SubmitFormClient;
