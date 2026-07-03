"use client";

export default function ModifierProduit() {
  return (
    <div className="space-y-8">
      {/* Titre */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Modifier la quantité d’un produit
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Catégorie */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Catégorie
          </label>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Alimentaire</option>
            <option>Électronique</option>
            <option>Ménager</option>
            <option>Autres</option>
          </select>
        </div>

        {/* Quantité actuelle */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Quantité actuelle
          </label>
          <input
            type="number"
            placeholder="Ex: 120"
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            disabled
          />
        </div>

        {/* Nouvelle quantité */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Nouvelle quantité
          </label>
          <input
            type="number"
            placeholder="Ex: +20 ou -15"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Raison modification */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Raison de la modification
          </label>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Réception de stock</option>
            <option>Correction d’inventaire</option>
            <option>Produit endommagé</option>
            <option>Autres</option>
          </select>
        </div>
            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Mettre à jour le produit
                </button>
            </div>
      </form>
    </div>
  );
}


