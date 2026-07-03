"use client";

export default function AjouterFournisseurs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Ajouter un fournisseur
      </h1>

      <form className="space-y-6">
        {/* Nom fournisseur */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Nom du fournisseur
          </label>
          <input
            type="text"
            placeholder="Ex: Distribution Québec Inc."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Téléphone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              placeholder="Ex: 514-000-0000"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Ex: fournisseur@email.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Adresse */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Adresse
          </label>
          <input
            type="text"
            placeholder="Ex: 1200 Rue Industrielle, Montréal"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type de produits */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-2">
            Type de produits fournis
          </label>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Produits alimentaires</option>
            <option>Produits électroniques</option>
            <option>Produits ménagers</option>
            <option>Autres</option>
          </select>
        </div>
           
            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Enregistrer le fournisseur
                </button>
          </div>
      </form>
    </div>
  );
}

