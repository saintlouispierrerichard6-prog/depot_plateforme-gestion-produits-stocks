"use client";

export default function ImprimerRapport() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Imprimer un rapport
      </h1>

      {/* Sélection du type de rapport */}
      <div className="space-y-4">
        <label className="font-semibold text-gray-700">
          Type de rapport
        </label>

        <select className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Rapport d’activités</option>
          <option>Rapport de rotation</option>
          <option>Rapport des commandes</option>
          <option>Rapport complet</option>
        </select>
      </div>

      {/* Sélection de la date */}
      <div className="space-y-4">
        <label className="font-semibold text-gray-700">
          Date du rapport
        </label>

        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bouton imprimer */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full md:w-auto"
      >
        Imprimer le rapport
      </button>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">
          ℹ️ Le rapport sera généré en format PDF automatiquement.
        </p>
      </div>
    </div>
  );
}
