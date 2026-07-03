"use client";

export default function CategorieProduits() {
  const categories = [
    { id: "CAT-01", nom: "Alimentaire" },
    { id: "CAT-02", nom: "Électronique" },
    { id: "CAT-03", nom: "Ménager" },
    { id: "CAT-04", nom: "Autres" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Catégories de produits
      </h1>

      {/* Liste des catégories */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Nom de la catégorie</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="hover:bg-gray-50">
              <td className="border p-3">{cat.id}</td>
              <td className="border p-3">{cat.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ajouter une nouvelle catégorie */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Ajouter une nouvelle catégorie
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Nom de la catégorie"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
