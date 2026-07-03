"use client";

export default function RetirerProduits() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Retirer un produit
      </h1>

      <form className="space-y-6">
        {/* ID produit */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            ID du produit
          </label>
          <input
            type="text"
            placeholder="Ex: PRD-310"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Nom produit */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Nom du produit
          </label>
          <input
            type="text"
            placeholder="Ex: Pâtes alimentaires 1kg"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Quantité à retirer */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Quantité à retirer
          </label>
          <input
            type="number"
            placeholder="Ex: 20"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Raison du retrait */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Raison du retrait
          </label>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Produit expiré</option>
            <option>Produit endommagé</option>
            <option>Erreur d’inventaire</option>
            <option>Autres</option>
          </select>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Retirer le produit
        </button>
      </form>
    </div>
  );
}
