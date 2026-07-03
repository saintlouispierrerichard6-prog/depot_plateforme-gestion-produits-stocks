"use client";

export default function LivraisonProduit() {
  const livraisons = [
    {
      id: "LIV-001",
      fournisseur: "Distribution Québec Inc.",
      produit: "Riz basmati 5kg",
      quantite: 100,
      date: "2024-07-05",
      statut: "En attente",
    },
    {
      id: "LIV-002",
      fournisseur: "Techno Import",
      produit: "Batteries AA (pack de 12)",
      quantite: 250,
      date: "2024-07-08",
      statut: "Confirmée",
    },
    {
      id: "LIV-003",
      fournisseur: "Alimentation Plus",
      produit: "Jus d’orange 1L",
      quantite: 80,
      date: "2024-07-10",
      statut: "En transit",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Livraison des produits
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Fournisseur</th>
            <th className="border p-3 text-left">Produit</th>
            <th className="border p-3 text-left">Quantité</th>
            <th className="border p-3 text-left">Date de livraison</th>
            <th className="border p-3 text-left">Statut</th>
            <th className="border p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {livraisons.map((liv) => (
            <tr key={liv.id} className="hover:bg-blue-50">
              <td className="border p-3">{liv.id}</td>
              <td className="border p-3">{liv.fournisseur}</td>
              <td className="border p-3">{liv.produit}</td>
              <td className="border p-3">{liv.quantite}</td>
              <td className="border p-3">{liv.date}</td>

              <td
                className={`border p-3 font-semibold ${
                  liv.statut === "Confirmée"
                    ? "text-green-600"
                    : liv.statut === "En transit"
                    ? "text-orange-600"
                    : "text-red-600"
                }`}
              >
                {liv.statut}
              </td>

              <td className="border p-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  Informer employé
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-blue-700 font-medium">
          ℹ️ Informez les employés pour qu’ils préparent la réception des produits.
        </p>
      </div>
    </div>
  );
}
