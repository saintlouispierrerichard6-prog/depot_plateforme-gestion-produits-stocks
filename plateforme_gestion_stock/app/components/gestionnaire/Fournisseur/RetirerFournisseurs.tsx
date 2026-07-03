"use client";

export default function RetirerFournisseurs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Retirer un fournisseur
      </h1>

      <form className="space-y-6">
        {/* ID fournisseur */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            ID du fournisseur
          </label>
          <input
            type="text"
            placeholder="Ex: FRS-204"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Nom fournisseur */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Nom du fournisseur
          </label>
          <input
            type="text"
            placeholder="Ex: Distribution Québec Inc."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Raison du retrait */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Raison du retrait
          </label>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Fin de contrat</option>
            <option>Rupture de partenariat</option>
            <option>Problèmes de livraison</option>
            <option>Autres</option>
          </select>
        </div>

          <div className="mt-6">
  <button
    type="submit"
    className="bg-red-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
  >
    Retirer le fournisseur
  </button>
</div>

      </form>
    </div>
  );
}
