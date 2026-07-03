"use client";

export default function ProduitsNonExpires() {
  const produits = [
    {
      id: "PRD-310",
      nom: "Pâtes alimentaires 1kg",
      categorie: "Alimentaire",
      quantite: 120,
      expiration: "2025-02-15",
    },
    {
      id: "PRD-411",
      nom: "Savon liquide 500ml",
      categorie: "Ménager",
      quantite: 60,
      expiration: "2025-08-10",
    },
    {
      id: "PRD-522",
      nom: "Batteries AA (pack de 12)",
      categorie: "Électronique",
      quantite: 200,
      expiration: "2027-01-01",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Produits non expirés
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-3 text-left">ID</th>
            <th className="border p-3 text-left">Nom</th>
            <th className="border p-3 text-left">Catégorie</th>
            <th className="border p-3 text-left">Quantité</th>
            <th className="border p-3 text-left">Date d’expiration</th>
          </tr>
        </thead>

        <tbody>
          {produits.map((p) => (
            <tr key={p.id} className="hover:bg-green-50">
              <td className="border p-3">{p.id}</td>
              <td className="border p-3">{p.nom}</td>
              <td className="border p-3">{p.categorie}</td>
              <td className="border p-3">{p.quantite}</td>
              <td className="border p-3 text-green-700 font-semibold">
                {p.expiration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
        <p className="text-green-700 font-medium">
          ✔️ Ces produits sont en bon état et peuvent rester en stock.
        </p>
      </div>
    </div>
  );
}
