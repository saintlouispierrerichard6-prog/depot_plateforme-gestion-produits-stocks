"use client";

export default function RotationProduits() {
  const rotations = [
    {
      id: "ROT-001",
      produit: "Riz basmati 5kg",
      categorie: "Alimentaire",
      type: "Entrée",
      quantite: 40,
      date: "2024-06-20",
    },
    {
      id: "ROT-002",
      produit: "Savon liquide 500ml",
      categorie: "Ménager",
      type: "Sortie",
      quantite: 15,
      date: "2024-06-18",
    },
    {
      id: "ROT-003",
      produit: "Batteries AA (pack de 12)",
      categorie: "Électronique",
      type: "Entrée",
      quantite: 100,
      date: "2024-06-15",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Rotation des produits
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Produit</th>
            <th className="border p-3 text-left">Catégorie</th>
            <th className="border p-3 text-left">Type</th>
            <th className="border p-3 text-left">Quantité</th>
            <th className="border p-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {rotations.map((r) => (
            <tr key={r.id} className="hover:bg-blue-50">
              <td className="border p-3">{r.id}</td>
              <td className="border p-3">{r.produit}</td>
              <td className="border p-3">{r.categorie}</td>
              <td
                className={`border p-3 font-semibold ${
                  r.type === "Entrée" ? "text-green-600" : "text-red-600"
                }`}
              >
                {r.type}
              </td>
              <td className="border p-3">{r.quantite}</td>
              <td className="border p-3">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">
          ℹ️ La rotation des produits permet de suivre les entrées et sorties du stock.
        </p>
      </div>
    </div>
  );
}
