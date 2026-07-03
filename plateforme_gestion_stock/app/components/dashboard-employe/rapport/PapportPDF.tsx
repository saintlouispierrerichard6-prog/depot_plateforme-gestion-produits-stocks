"use client";

export default function RapportPDF() {
  return (
    <div className="space-y-8">
      {/* Titre */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Rapport PDF généré
      </h1>

      {/* Preview PDF */}
      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
        <p className="text-gray-600 text-center py-10">
          Aperçu du PDF (intégration réelle à venir)
        </p>
      </div>

      {/* Boutons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          Télécharger le PDF
        </button>

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition">
          Retour
        </button>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">
          ℹ️ Le rapport PDF est prêt. Vous pouvez le télécharger ou revenir à la page précédente.
        </p>
      </div>
    </div>
  );
}
