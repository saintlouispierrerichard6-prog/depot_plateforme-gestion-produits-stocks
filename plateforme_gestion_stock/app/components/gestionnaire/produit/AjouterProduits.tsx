"use client";

export default function AjouterProduits() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Ajouter un produit
      </h1>

      <form className="space-y-6">
        {/* Nom produit */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Nom du produit
          </label>
          <input
            type="text"
            placeholder="Ex: Riz basmati 5kg"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Catégorie + Quantité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Quantité
            </label>
            <input
              type="number"
              placeholder="Ex: 50"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Prix */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Prix unitaire ($)
          </label>
          <input
            type="number"
            placeholder="Ex: 12.99"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date d’expiration */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Date d’expiration
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Enregistrer le produit
                </button>
            </div>

      </form>
    </div>
  );
}
