"use client";
import React, { useState } from "react";

interface FormData {
  nomTalent: string;
  domaine: string;
  votreNom: string;
  contact: string;
  justification: string;
}

const SubmitFormClient: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nomTalent: "",
    domaine: "",
    votreNom: "",
    contact: "",
    justification: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
    setIsError(false);

    try {
      // Validation simple de l'email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact)) {
        setIsError(true);
        setMessage(
          "Veuillez entrer une adresse e-mail valide pour le contact."
        );
        setLoading(false);
        return;
      }

      // Appel à la route API Next.js qui utilise Nodemailer
      const response = await fetch("/api/soumission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`✅ ${result.message}`);
        // Réinitialisation du formulaire après succès
        setFormData({
          nomTalent: "",
          domaine: "",
          votreNom: "",
          contact: "",
          justification: "",
        });
      } else {
        // Gérer les erreurs de l'API (400, 500, etc.)
        setIsError(true);
        setMessage(
          `❌ Erreur: ${
            result.message ||
            "Échec de l'envoi de la proposition. Vérifiez les champs."
          }`
        );
      }
    } catch (error) {
      setIsError(true);
      setMessage(
        "❌ Une erreur réseau est survenue. Vérifiez votre connexion."
      );
      console.error("Erreur réseau:", error);
    } finally {
      setLoading(false);
    }
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

      {/* Affichage des messages (succès ou erreur) */}
      {message && (
        <div
          className={`p-4 mb-4 rounded-lg font-semibold ${
            isError ? "text-red-700 bg-red-100" : "text-green-700 bg-green-100"
          }`}
        >
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
          label="Votre Contact Email"
          value={formData.contact}
          onChange={handleChange}
          type="email"
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
        className={`mt-8 w-full px-4 py-3 rounded-full text-white font-bold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 transform hover:scale-[1.01]"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <span>Envoyer la Proposition</span>
        )}
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
  type = "text",
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  type?: string;
}) => (
  <label className="block">
    <span className="text-gray-700 dark:text-gray-300 font-medium">
      {label}*
    </span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:border-orange-500 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
    />
  </label>
);

export default SubmitFormClient;
